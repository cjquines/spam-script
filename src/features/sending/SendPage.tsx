import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SendStatus,
  selectSendStatuses,
  loadMessagesToSend,
} from "./sendingSlice";
import MessageSendCard from "./MessageSendCard";
import NavBar from "../NavBar";

type SendPageProps = {
  prevPage: () => void;
};

export default function SendPage(props: SendPageProps) {
  // data from redux store
  const sendStatuses = useSelector(selectSendStatuses);
  const dispatch = useDispatch();

  // update messages on component mount
  useEffect(() => {
    dispatch(loadMessagesToSend());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when no messages have been sent, allow going back for further edits
  const canGoBack = sendStatuses.every((x) => x === SendStatus.UNSENT);

  return (
    <>
      {/* no messages */}
      {sendStatuses.length === 0 && (
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
      {sendStatuses.length > 0 && (
        <div>
          <NavBar
            title="Send your spam"
            prevPage={props.prevPage}
            showNext={false}
            showPrev={canGoBack}
          />

          <div>
            <div className="container px-3 pb-5">
              <div className="has-text-centered pb-5">
                <h1 className="subtitle">
                  Message sending is not yet implemented, but you can preview
                  your emails here.
                </h1>
              </div>

              {/* generate a card for each array index */}
              {sendStatuses.map((message, index) => {
                return <MessageSendCard key={index} index={index} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
