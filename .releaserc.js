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
                "prepareCmd": "scripts/prepare.sh",
                "successCmd": "scripts/success.sh ${nextRelease.version}"
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