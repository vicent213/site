import * as modalAdsController from './modals/modal-ads-controller.js';
import * as modalTagController from './modals/modal-tag-controller.js';
import * as modalAnController from './modals/modal-an-controller.js';

export function init() {

    
    const googleAdsCard = document.querySelector(".card-google-ads");
    googleAdsCard.addEventListener('click', handleGoogleAdsCardLinkClick);
    console.log("page controller iniciado");

    const googleTagCard = document.querySelector(".card-google-tag");
    googleTagCard.addEventListener('click', handleGoogleTagCardLinkClick);
    console.log("page controller iniciado");

    const googleAnCard = document.querySelector(".card-google-an");
    googleAnCard.addEventListener('click', handleGoogleAnCardLinkClick);
    console.log("page controller iniciado");
}


function handleGoogleAdsCardLinkClick (event) {
    modalAdsController.showModal();
}

function handleGoogleTagCardLinkClick (event) {
    modalTagController.showModal();
}

function handleGoogleAnCardLinkClick (event) {
    modalAnController.showModal();
}