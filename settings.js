module.exports = {
    //clientID: 'b060d708-3bc8-430a-840a-39075fd37124', //-- cerner
    //clientID: '885c192e-3f6f-40fb-a604-9b738a1b3e78', //-- Epic Test App
    clientID: '6c12dff4-24e7-4475-a742-b08972c4ea27', //-- Open Epic
    //clientID: 'eb017b15-9331-4c13-a28c-e38f99c55c4e', //--deepPatient
    //clientId: 'f6e9e5a2-e5a3-43fc-93c0-64b2644955ea', //-- Test Smart FHIR APP Epic
    callbackUrl: 'http://localhost:3000/oauth-callback',
    scope: "launch patient/MedicationOrder.read patient/ServiceRequest.read patient/NutritionOrder.read patient/Account.read patient/AllergyIntolerance.read patient/Appointment.read patient/Binary.read patient/Condition.read patient/Coverage.read patient/Device.read patient/DocumentReference.read patient/Encounter.read patient/Immunization.read patient/MedicationRequest.read patient/Observation.read patient/Organization.read patient/Patient.read patient/Procedure.read patient/RelatedPerson.read patient/Endpoint.read patient/Location.read patient/Practitioner.read patient/PractitionerRole.read patient/Goal.read patient/AdverseEvent.read patient/Consent.read patient/DiagnosticReport.read patient/Medication.read patient/ResearchStudy.read patient/MedicationAdministration.read patient/ProcedureRequest.read patient/Contract.read patient/MedicationStatement.read patient/CarePlan.read openid profile"      
}