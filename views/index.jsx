const React = require('react');
const SongsLayout = require('./layouts/SongLayout.jsx');

class Index extends React.Component {
    render() {
        const customStyles = {
            backgroundColor: "#444",
            color: "white"
        }

        return (
            <SongsLayout title="Songs Setlist Homepage">
                {/* 
                <ul className="songs-list">
                    {this.props.songs.map(
                        (songs, index) => {
                            return (
                                <li className="songs-list__item card w-50">
                                    <a href={`/songs/${songs.id}`}>{songs.name} | {songs.author}</a>
                                </li>
                            )
                        }
                    )}
                </ul>
*/}


                <div className="songs-list">
                    {this.props.songs.map(
                        (songs, index) => {
                            return (
                                <a className="songs-list__item card w-50" href={`/songs/${songs.id}`}>
                                    <div className="">
                                        <p>{songs.name}</p>
                                        <p>{songs.author}</p>
                                    </div>
                                </a>


                            )
                        }
                    )}
                </div>

                <p>
                    <a style={customStyles} href="/songs/new">Add New Song</a>
                </p>
            </SongsLayout >
        )

    }
}

module.exports = Index;