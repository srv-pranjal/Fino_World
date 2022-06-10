import { showToast } from "utils";

export const copyToClipboard = (_id) => {
  navigator.clipboard
    .writeText(
      `${window.location.protocol}//${window.location.host}/video/${_id}`
    )
    .then(() => showToast("success", "Link Copied to Clipboard"))
    .catch((err) =>
      showToast("error", "Error Occurred in Copying Link to Clipboard")
    );
};
