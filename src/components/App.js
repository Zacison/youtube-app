import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    //for when the component first loads on to the page
    //We want to show a default search
    componentDidMount() {
        this.onSearchSubmit('Paramotor');
    }

    onSearchSubmit = async (search) => {
        console.log(search);
        const res = await youtube.get('/search', {
            params: {
                q: search,
            },
        });
        console.log(res.data.items);
        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className=" five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
