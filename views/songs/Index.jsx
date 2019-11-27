const React = require('react');
const SongsLayout = require('../layouts/SongLayout.jsx');

class Index extends React.Component {
    render() {
        return (
            <SongsLayout title="Songs Setlist">
                <ul class="songs-list">
                    {this.props.songs.map(
                        (songs, index) => {
                            return (
                                <li class="songs-list__item">
                                    <a href={`/songs/${songs.id}`}>
                                        <span class="name">{songs.name} </span>

                                        <span class="author">{songs.author} </span>

                                        <span class="stype">{songs.type} </span>

                                        <span class="theme">{songs.theme}</span>

                                    </a>
                                </li>
                            )
                        }
                    )}

                </ul>

                <a href="/songs/new">New Songs</a>

            </SongsLayout>
        )
    }
}

module.exports = Index;