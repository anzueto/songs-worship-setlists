const React = require('react');
const SongsLayout = require('../layouts/SongLayout.jsx');
const { editButtonStyle, deleteButtonStyle, buttonsContainer, CardShowPageStyle } = require('../styles/show.js');

class Show extends React.Component {
    render() {

        return (
            <SongsLayout title="Show Song">
                <div class="card" style={CardShowPageStyle}>
                    <div class="card-body">
                        <h2 class="card-title">{this.props.name}</h2>
                        <p>Author: {this.props.author}</p>
                        <p>Type: {this.props.type}</p>
                        <p>Theme: {this.props.theme}</p>
                    </div>

                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.youtubeId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <div style={buttonsContainer}>

                        <a style={editButtonStyle} href={`/songs/edit/${this.props._id}`}>Edit Song</a>

                        <form action={`/songs/${this.props._id}?_method=delete`} method="post">
                            <input style={deleteButtonStyle} type="submit" value="Delete" />
                        </form>
                    </div>

                </div>

            </SongsLayout>

        )
    }
}

module.exports = Show;