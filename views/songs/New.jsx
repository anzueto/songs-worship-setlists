const React = require('react');
const SongsLayout = require('../layouts/SongLayout.jsx');

class New extends React.Component {
    render() {
        return (

            <SongsLayout title="SONG setlist Creating New Page">
                <form action={`/songs`} method="post">
                    <p>
                        <label>Name:</label>
                        <input type="text" name="name" />
                    </p>

                    <p>
                        <label>author:</label>
                        <input type="text" name="author" />
                    </p>

                    <p>
                        <label>Type:</label>
                        <input type="text" name="type" />
                    </p>

                    <p>
                        <label>Theme:</label>
                        <input type="text" name="theme" />
                    </p>

                    <p>
                        <label>Youtube ID:</label>
                        <input type="text" name="youtubeId" />
                    </p>

                    <p>
                        <input type="submit" value="Submit" />
                    </p>

                </form>

            </SongsLayout>

        )
    }
}

module.exports = New;