import React, { Component } from "react";
import Form from "../components/Form"
import Title from "../components/Title";
import PracticeForm from "../components/PracticeForm";
import Table from "../components/Table"

class Home extends Component {
    render() {
        return (
            <div>
                <Title />
                <Form />
            </div>
        )
    }
}

export default Home