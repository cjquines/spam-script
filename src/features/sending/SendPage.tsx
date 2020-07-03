import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Message } from "../../utils/messageTypes";
import { selectMessageTemplate } from "../message/messageSlice";
import { selectParsedData } from "../data/dataSlice";
import {
  makeSpamObjectArray,
  makeMessageTemplater,
} from "../../utils/templating";
import MessagePreview from "../message/MessagePreview";
import NavBar from "../NavBar";

type SendPageProps = {
  prevPage: () => void;
};

export default function SendPage(props: SendPageProps) {
  // back button on navbar
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [canGoBack, setCanGoBack] = useState(true);

  // data from redux store
  const template = useSelector(selectMessageTemplate);
  const data = useSelector(selectParsedData);

  // convert data into spam objects and templating function
  const templater = useMemo(() => makeMessageTemplater(template), [template]);
  const spams = useMemo(() => makeSpamObjectArray(data), [data]);

  // list of processed messages
  const [messages, setMessages] = useState([] as Message[]);
  useEffect(() => setMessages(spams.map(templater)), [templater, spams]);

  return (
    <>
      {/* no messages */}
      {messages.length === 0 && (
        <div className="hero is-fullheight">
          <div className="hero-header">
            <NavBar
              title="Send your spam"
              prevPage={props.prevPage}
              showNext={false}
              showPrev={canGoBack}
            />
          </div>

          <div className="hero-body">
            <div className="container has-text-centered pb-6">
              <div className="huge-icon">
                <span role="img" aria-label="icon">
                  📭
                </span>
              </div>
              <p className="title has-text-grey-dark">No messages to send!</p>
            </div>
          </div>
        </div>
      )}

      {/* with messages */}
      {messages.length > 0 && (
        <div>
          <NavBar
            title="Send your spam"
            prevPage={props.prevPage}
            showNext={false}
            showPrev={canGoBack}
          />

          <div>
            <div className="container px-3">
              <div className="has-text-centered pb-5">
                <h1 className="subtitle">
                  Message sending is not yet implemented, but you can preview
                  your emails here.
                </h1>
              </div>

              {messages.map((message, index) => {
                return <MessageSendCard key={index} message={message} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MessageSendCard(props: { message: Message }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </span>
          &nbsp; To: {props.message.to || "(empty)"}
        </div>

        <div className="card-header-icon" onClick={() => setOpen(!open)}>
          <span className="icon">
            <FontAwesomeIcon icon={faAngleDown} fixedWidth />
          </span>
        </div>
      </div>

      {open && (
        <div className="card-content">
          <MessagePreview message={props.message} />
        </div>
      )}
    </div>
  );
}