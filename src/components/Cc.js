import React from 'react';

const Cc = ({icon, index}) => {
    return (
        <div>
            <style>{`
                .con-card {
                    min-width: 300px;
                    min-height: 220px;
                    background-image: linear-gradient(120deg, #fdfbfb 0%, #F0F8FF 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px 30px;
                    
                    margin:15px 15px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                }

                .con-card:hover {
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                }

                .cookie-notice {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .svg-container {
                    position: relative;
                    width: 50px;
                    height: 50px;
                }

                #cookieSvg {
                    width: 100%;
                    height: 100%;
                }

                .whatsapp-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 24px;
                    color: #25d366; /* WhatsApp green color */
                }

                .cookieHeading {
                    font-size: 1.2em;
                    font-weight: 800;
                    color: rgb(26, 26, 26);
                }

                .cookieDescription {
                    font-size: 0.7em;
                    font-weight: 600;
                    color: rgb(99, 99, 99);
                }

                @media (max-width: 768px) {
                    .con-card {
                        width: 300px;
                        height: 180px;
                        padding: 15px 20px;
                    }

                    .cookieHeading {
                        font-size: 1em;
                    }

                    .cookieDescription {
                        font-size: 0.6em;
                    }
                }

                @media (max-width: 480px) {
                    .con-card {
                        width: 250px;
                        height: 150px;
                        padding: 10px 15px;
                    }

                    .cookieHeading {
                        font-size: 0.9em;
                    }

                    .cookieDescription {
                        font-size: 0.5em;
                    }
                }
            `}</style>
            <div className="con-card">
            <div className="cookie-notice" key={index}>
                    <div className="svg-container" dangerouslySetInnerHTML={{ __html: icon.path }}></div>
                    <p className="cookieHeading">{icon.name}</p>
                    <p className="cookieDescription">
                        This website uses cookies to ensure you get the best experience on our site.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cc;
