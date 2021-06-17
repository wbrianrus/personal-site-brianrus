import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Portfolio2 extends Component {
  render() {

    if(this.props.data){
        var fun = this.props.data.fun.map(function(fun){
            var projectImage = 'images/portfolio/'+fun.image;
            var projectImageFull = 'images/portfolio/'+fun.url;
            return <div key={fun.title} className="columns portfolio-item">
                <Popup
                    trigger={
                    <div className="item-wrap">
                        <a title={fun.title}>
                            <img alt={fun.title} src={projectImage} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{fun.title}</h5>
                                    <p>{fun.category}</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div> 
                    }
                    modal
                >
                {close => (
                    <div className="modal">
                        <div className="header"> {fun.title} 
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </div>
                        <div className="content">
                            <img alt={fun.title} src={projectImageFull} />
                        </div>
                    </div>
                )}
                </Popup>
            </div>
            })

    }

    return (
    <section id="portfolio">
        <div id="play"></div>
        <div className="row">

            <div className="twelve columns collapsed">

                <h1>PLAY</h1>

                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {fun}
                </div>

            </div>
        </div>
    </section>
    );
  }
}

export default Portfolio2;
