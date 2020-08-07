import React from 'react'

const ExpenseAmount = () => {
    return (
        <div className="box mb-5">
            <nav className="level is-mobile">
                <div className="level-item">
                    <div>
                        <p className="heading">Income</p>
                        <p className="title has-text-success">3,456</p>
                    </div>
                </div>
                <div className="level-item">
                    <div>
                        <p className="heading">Outcome</p>
                        <p className="title has-text-danger">3,456</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ExpenseAmount
