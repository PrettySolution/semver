module.exports = {
  "plugins": [
    [
      "@semantic-release/commit-analyzer"
    ],
    [
      "@semantic-release/exec",
      {
        "prepareCmd": "scripts/prepare.sh",
        "successCmd": "scripts/success.sh ${nextRelease.version} ${process.env.DOCKER_USERNAME}"
      }
    ],
    [
      "@semantic-release-plus/docker",
      {
        "name": "containersolution/semver"
      }
    ],
    [
      "@semantic-release/release-notes-generator"
    ],
    [
      "@semantic-release/github"
    ]
  ]
}