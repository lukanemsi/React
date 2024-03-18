import React from "react"
import Card from "../elements/Card";
const Projects = ({projects}) => {
    return <div>
        {
            projects.map(
                el => <div className="mt-10">
                    <Card card={{
                    amount: el.sales,
                    title: el.creator.name
                }}/>
                </div>
            )
        }
    </div>
}

export default Projects;