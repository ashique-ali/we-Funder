import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InvestFunder = () => {
    return (
        <section className="mb-5" style={{ background: "#f0f8ff" }}>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why invest on Wefunder?</h2>
                    <p>Support founders, build your portfolio, and join a community.</p>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="icon-box">
                            <div className="icon">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Equity Icon"
                                    className="img-fluid"
                                />
                            </div>
                            <h5 className="mt-3 fw-bold">Invest and receive equity</h5>
                            <p>
                                Unlike Kickstarter or Indiegogo where you pledge money for
                                products and perks, you invest money for equity on Wefunder.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="icon-box">
                            <div className="icon">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Wealth Icon"
                                    className="img-fluid"
                                />
                            </div>
                            <h5 className="mt-3 fw-bold">Build wealth over time</h5>
                            <p>
                                Build an investment portfolio for the long-term by leveraging your
                                unique knowledge and the wisdom of the crowd.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="icon-box">
                            <div className="icon">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Seats Icon"
                                    className="img-fluid"
                                />
                            </div>
                            <h5 className="mt-3 fw-bold">Get front row seats</h5>
                            <p>
                                When you invest, you'll get exclusive investor updates and
                                opportunities to contribute to the companies you love.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="alert-warning text-center p-4 col-lg-6 m-auto mt-4">
                    <h6 className="fw-bold">
                        Never invest more than you can afford to lose
                    </h6>
                    <p className="mb-3">
                        Startups are riskier than public companies, and even the best founders
                        fail. Plan to hold your investments for the long term. Expect to win
                        big or lose all.
                    </p>
                    <button className="btn btn-dark">Learn more in our Investor FAQ →</button>
                </div>
            </div>
        </section>
    );
};

export default InvestFunder;
