import axios from "axios";

export default axios.create({
    baseURL: 'https://deprem.afad.gov.tr/apiv2/event/filter',

});