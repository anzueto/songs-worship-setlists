const React = require('react');
const SongsLayout = require('../layouts/SongLayout.jsx');

class Edit extends React.Component {
    render() {

        const cardStyle = {
            padding: "20px"
        };

        return (
            <SongsLayout title="Make the updates">

                <form style={cardStyle} class="card" action={`/songs/${this.props._id}?_method=PUT`} method="POST">

                    <p>
                        <label>Name:</label>
                        <input type="text" value={this.props.name} name="name" class="form-control" />
                    </p>

                    <p>
                        <label>Owner:</label>
                        <input type="text" value={this.props.author} name="author" class="form-control" />
                    </p>

                    <p>
                        <label>Type:</label>
                        <input type="text" value={this.props.type} name="type" class="form-control" />
                    </p>

                    <p>
                        <label>Theme:</label>
                        <input type="text" value={this.props.theme} name="theme" class="form-control" />
                    </p>

                    <p>
                        <label>Youtube ID:</label>
                        <input type="text" value={this.props.youtubeId} name="youtubeId" class="form-control" />
                    </p>

                    <p>
                        <input class="btn btn-primary" type="submit" value="Submit" />
                    </p>

                </form>

            </SongsLayout >
        )
    }
}

module.exports = Edit;