#!/usr/bin/env python3

"""
This script reads a raw RFC 2822 formatted email message from stdin
and sends it to an outgoing SMTP server.
"""

import sys
import platform
import email.parser
import email.utils
from email.errors import MessageError
from common_utils import get_login, exit_with_success, exit_with_error, send_email
from common_utils import USER_TRACKING_HEADER, SCRIPTS_HOSTNAME_HEADER


def main():
    # get user login
    user_email = get_login()
    if not user_email:
        exit_with_error("Unauthorized")

    # read stdin and parse to message object
    input_bytes = sys.stdin.buffer.read()
    parser = email.parser.BytesParser()
    try:
        message = parser.parsebytes(input_bytes)
    except MessageError as e:
        exit_with_error("MessageError: %s" % str(e))

    # add a header with the user's email
    message[USER_TRACKING_HEADER] = user_email

    # add a header with the server hostname
    # scripts.mit.edu runs multiple machines and load-balances between them
    message[SCRIPTS_HOSTNAME_HEADER] = platform.node()

    # add date if missing
    if "Date" not in message:
        message["Date"] = email.utils.formatdate()

    if "--debug" in sys.argv:
        # print the email without sending
        print(message.as_string(maxheaderlen=78))
    else:
        # send the email
        send_email(message)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        exit_with_error(repr(e))
    exit_with_success()