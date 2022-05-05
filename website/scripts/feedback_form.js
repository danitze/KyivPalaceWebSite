let feedbackForm;
let fogDiv;
let closeBtn;
let sendBtn;
let inputs;
let msg;

function onFeedbackLinkClick() {
    if(fogDiv.style.opacity == 0) {
        document.body.style.overflow = 'hidden';
        showFeedback();
    } else {
        document.body.style.overflow = '';
        hideFeedback();
    }
}

function showFeedback() {
    fogDiv.style.zIndex = 5001;
    fogDiv.style.opacity = 1;
}

function hideFeedback() {
    fogDiv.style.opacity = 0;
}

function showMessage() {
    feedbackForm.style.opacity = 0;
    msg.style.opacity = 1;
    msg.style.zIndex = 0;
}

function init() {
    feedbackForm = document.getElementById('feedback_form');
    fogDiv = document.getElementById('fog');
    closeBtn = document.getElementById('close_button');
    sendBtn = document.getElementById('send_feedback_button');
    inputs = feedbackForm.getElementsByTagName('input');
    msg = document.getElementById("feedback_message")

    let feedbackLinks = document.getElementsByClassName('feedback_link');
    for(let feedbackLink of feedbackLinks) {
        feedbackLink.onclick = onFeedbackLinkClick;
    }

    fogDiv.addEventListener("transitionend", () => {
        if(fogDiv.style.opacity == 0) {
            feedbackForm.style.opacity = 1;
            msg.style.opacity = 0;
            msg.style.zIndex = -1;
            fogDiv.style.zIndex = -1;
            for(let input of inputs) {
                input.value = '';
            }
        }
    });

    closeBtn.onclick = onFeedbackLinkClick;

    sendBtn.onclick = () => {
        if(feedbackForm.checkValidity()) {
            for (let input of inputs) {
                //Send data to server
            }
            showMessage()
        }
    };
}

window.addEventListener('load', init);