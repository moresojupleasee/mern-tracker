const mongoose = require('mongoose')

const deploymentSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "please enter name"]
        },
        TeamId: {
            type: String,
            required: true
        },
        Language: {
            type: String,
            required: true,
            default: 0
        },
        DeploymentType: {
            type: String,
            required: true
        },
        Repo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Deployment = mongoose.model("Deployment", deploymentSchema);

module.exports = Deployment;