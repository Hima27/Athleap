import logo from './logo.svg'
import './App.css'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
    return ( <Form className = "signup-form" >
        <h1 className= "text-center"><span className="font-weight-bold">Athleap</span></h1>
        <h2 className= "text-center">Welcome</h2>

        <FormGroup>
            <Label>
                Name
            </Label>
            <Input type="text" placeholder="Jane Doe"></Input>
        </FormGroup>

        <FormGroup>
            <Label>
                Email
            </Label>
            <Input type="email" placeholder="jane.doe@email.com"></Input>
        </FormGroup>

        <FormGroup>
            <Label>
                Password
            </Label>
            <Input type="password" placeholder="password"></Input>
        </FormGroup>
        
        </Form>
    )
}

export default App