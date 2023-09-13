## Next 13 Demo

Build a basic note-taking app with Next.js 13 and Pocketbase. 

### Setup

1. Download Pocketbase from [pocketbase.io](pocketbase.io)
2. Navigate to the unzipped directory
`cd pocketbase_0.7.9_darwin_arm64`
3. Start Pocketbase:
`./pocketbase serve`
4. Open the [Admin UI](http://127.0.0.1:8090/_/), create collection called `notes`.
    - Pocketbase uses sqlite under the hood so the `notes` collection will essentially be the `notes` table.
        - Create one plain text field for `title` and another plain text field for `context`
5. Go back to the root of the project and run `yarn dev`
6. The root of the application will have a github login.  Login using your github credentials and it should redirect you to the notes page
