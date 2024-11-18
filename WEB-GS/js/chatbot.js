window.watsonAssistantChatOptions = {
    integrationID: "93d64fe8-a97e-4143-aa3c-d3e5c055dfe5", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "274c8f20-452b-4e51-90ca-298b8dc583c4", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });