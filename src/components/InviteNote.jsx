import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>
                    Mr. & Mrs. Maistry Ghouse Mohinuddin
                    <br />
                    <small>urf</small>
                    <br />
                    Haji Basha
                </h2>

                <h5 className="address mb-3">
                    Proprietor: Maistry Jewellers,
                    <br />
                    Vice President of Shroff Bazar Association,
                    <br />
                    Adoni.
                </h5>

                <h5 className="address mb-3">
                    Residence: #19/81, Fareed Shah Hazrath Street,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94405 91882, <br />
                    +91 90141 58630.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
