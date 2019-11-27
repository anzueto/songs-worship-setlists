const React = require('react');

class SongsLayout extends React.Component {
    render() {
        return (

            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <title>{this.props.title}</title>

                    <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />

                    <link rel="stylesheet" href="/css/material-kit.css" type="text/css" />

                    <link rel="stylesheet" href="/css/style.css" type="text/css" />

                </head>

                <body>

                    <header>
                        <h1>{this.props.title}</h1>
                        <nav class="navbar navbar-expand-lg bg-primary">

                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="/songs">All Songs</a>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <main>
                        {this.props.children}
                    </main>

                </body>
            </html>
        )
    }
}

module.exports = SongsLayout;