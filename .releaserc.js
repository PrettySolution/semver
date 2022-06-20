module.exports = {
    "plugins": [
        [
            "@semantic-release/commit-analyzer"
        ],
        ["semantic-release-plugin-update-version-in-files", {
            "files": [
                "cortex-app/Chart.yaml"
            ]
        }],
        [
            "@semantic-release/exec",
            {
                "prepareCmd": "scripts/prepare.sh ${process.env.DOCKER_USERNAME}/${process.env.DOCKER_REPOSITORY_NAME}",
                "successCmd": "scripts/success.sh ${process.env.DOCKER_USERNAME}/${process.env.DOCKER_REPOSITORY_NAME}:${nextRelease.version}"
            }
        ]
        [
            "@semantic-release/release-notes-generator"
        ],
        [
            "@semantic-release/github"
        ]
    ]
}