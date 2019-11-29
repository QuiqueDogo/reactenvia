const payload = {
    "city": "",
    "company": "",
    "country": "",
    "district": "",
    "email": "",
    "name": "",
    "number": "",
    "phone": "",
    "postalCode": "",
    "reference": "",
    "state": "",
    "street": "",
}

export const OriginState = (state = payload, action) => {
    switch (action.type) {
        case 'ORIGIN': 
            return action.state;
        
        default:
            return state;
    }
}

export const DestinationState = (state = payload, action) => {
    switch (action.type) {
        case "DESTINATION":
            return action.state;
        default:
            return state;
    }
}