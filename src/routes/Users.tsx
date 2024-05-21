import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string,
        catchPhrase: string,
        bs: string, 
    }
}

export async function loader() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json() as Users[];
    return { data };
  }


export default  function Users() {
const { data } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
    <Container>
        <Row>
            {data.map((user)=>(
                <Col md={4} key={user.id} className="mb-4">
                    <Card>
                        <CardBody>
                            <CardTitle>{user.name} ({user.username})</CardTitle>
                            <CardText>
                                <strong>Email:</strong> {user.email}<br />
                                <strong>Phone:</strong> {user.phone}<br />
                                <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br />
                                <strong>Company:</strong> {user.company.name}<br />
                                <em>{user.company.catchPhrase}</em>
                            </CardText>
                        </CardBody>
                    </Card>
                
                </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

