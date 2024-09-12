const documents = [
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1720121254994_nfe%2041240736757711000152550010000001431282877238.pdf",
    InboundDocumentId: "511bef53-af5a-4b2b-bf65-04b7222ddba8",
    originalBarcode: "41240736757711000152550010000001431282877238",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1718913243457_nfe%20008%20hyperion%20empreendimentos.pdf",
    InboundDocumentId: "ce4f82d9-1e7e-44fb-8ec8-a9e678c38666",
    originalBarcode: "41240641297856000158550010000000081684846300",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1725971482276_nf%20298.pdf",
    InboundDocumentId: "a5104c4f-b676-4c6f-bedf-3de6c422712c",
    originalBarcode: "42240926602370000192550010000002981102430602",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1720023978570_1850647.pdf",
    InboundDocumentId: "e270cf89-1ba0-4634-8f06-91d0a83a7e06",
    originalBarcode: "41240782193244000283550010003326731119165175",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1718634374078_41240680187511000101550010000419941843536928.pdf",
    InboundDocumentId: "3142ce02-4115-494f-bf92-c678254dbfde",
    originalBarcode: "41240680187511000101550010000419941843536928",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1719340603856_danfe-42240682951310000156558900086458231768313868.pdf",
    InboundDocumentId: "dcbf9109-824f-45ce-8414-6e9610008708",
    originalBarcode: "42240682951310000156558900086458231768313868",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1725647426972_nota%20fiscal%20hype%20jokey%20-%2006.09.pdf",
    InboundDocumentId: "b0d9ee2e-c1f5-4fff-bc48-00006ef26b40",
    originalBarcode: "41240901640438000105550010000005311266430450",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1725647427294_nota%20fiscal%20hype%20stone%20-%2006.09.pdf",
    InboundDocumentId: "99793263-93bf-4a61-a962-cc93512a8f6d",
    originalBarcode: "41240901640438000105550010000005281266425337",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1718970090138_41240610871474000162550010000469301000819131-nfe.pdf",
    InboundDocumentId: "e126c6b1-b9f3-42a3-9192-66afef3e36cc",
    originalBarcode: "41240610871474000162550010000469301000819131",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1718997861069_nf%202096%20hype%20-%20simples%20faturamento.pdf",
    InboundDocumentId: "6a0e7e5d-48c6-417c-9c37-92b8a6645354",
    originalBarcode: "41240613133688000120550010000020961779781256",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1719235133793_nf%20hyperion%207.pdf",
    InboundDocumentId: "84f482e2-449a-42d5-83df-60fae5cf27de",
    originalBarcode: "41240655066643000120550010000000071854674386",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1719671320268_41240601887122001429550010005645451047601576_da943fb7-c791-4d90-9fc0-2d5b0f78c72c_email.pdf",
    InboundDocumentId: "1c288ca1-e1e4-4663-b44b-d3404788094b",
    originalBarcode: "41240601887122001429550010005645451047601576",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1724879441815_atrincorporadora-68869-nf33316-41240780359250000151550010000333161977625607-nfe.pdf",
    InboundDocumentId: "40c80eac-839e-4795-abc4-6a83f2f370c8",
    originalBarcode: "41240780359250000151550010000333161977625607",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1724879442770_atrincorporadora-69859-nf4535901.pdf",
    InboundDocumentId: "35527fba-dd82-4425-b79b-631a0fbe4ef6",
    originalBarcode: "41240747674429000632550010004535901927160855",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1724879443944_atrincorporadora-52614-nfeessenza%20%281%29.pdf",
    InboundDocumentId: "03cae761-ed7d-4730-9b90-a03f62e0bb50",
    originalBarcode: "41231043707158000290550010000015991911522090",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1719864110286_nf%20700%20-%20hype%20t930101%20spe%20ltda.pdf",
    InboundDocumentId: "50df4713-cd11-487b-933e-e6afa3593f41",
    originalBarcode: "41240706185712000109550020000007001171495249",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1724951187178_1871562.pdf",
    InboundDocumentId: "7a339860-51f1-478a-90ab-36d3b3236dc2",
    originalBarcode: "41240882193244000100550010001144171234728111",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1725394711900_nf%2027715.pdf",
    InboundDocumentId: "9586bdaf-1fac-46d1-9caf-25d38eb015e4",
    originalBarcode: "22240812103445000186550010000277151246904928",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1725065610530_nf%205557950%20hype%20sede%201%20-%20r%242.930%2C00%20-%20%20vasos%20e%20plantas%20internos.pdf",
    InboundDocumentId: "14c573e5-a629-454a-8e2d-4133bd24f2c8",
    originalBarcode: "41240878393592000146558950055579501971718191",
  },
  {
    fileUrl:
      "files.paggo.ai/documents-email-fiscal-invoice-unknown/1725563690010_nota.277.pdf",
    InboundDocumentId: "9194e96a-a159-4270-b38e-16e6ce05014b",
    originalBarcode: "41240928004852000176550010000002771074671527",
  },
];

export { documents };
