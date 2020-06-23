

$(document).ready(function(){

    var trackingID, useCaseID, variationID, postAPI;
    var campaignMetaUpdate,campaignMetaNew, storyTopicsMeta, storyNodesMeta, storyNodesInputContent, setupParameters;
    var activateParameters, conversionParameters;


    function addClickHandlers() {

      $("#synchronousStuff").click(synchronousStuff);

      $("#asynchronousStuff").click(asynchronousStuff);

      $("#updateCampaignALL").click(updateCampaignAll);

      $("#newCampaignMeta").click(newCampaignMeta);

      $("#updateCampaignMeta").click(updateCampaignMeta);

      $("#publishStoryTopics").click(publishTopicsMeta);

      $("#publishNodesMeta").click(publishNodesMeta);

      $("#publishNodeInputContent").click(publishNodeInputContent);

      $("#campaignActivateParams").click(publishActivateParameters);

      $("#paymentProcessor").click(publishPaymentProcessorInput);

      $("#campaignSetupParams").click(publishSetupParameters);

      $("#endPublishing").click(endPublishing);

    }
    function initializeTrackingId() {
       trackingID= 9081,
        useCaseID = 1,
        variationID = 1,
         postAPI = "http://127.0.0.1:8000/api/webhooks";
        // postAPI = "https://cret.chalakh.co/api/webhooks";
    };
    function initiliazeWebhookDataObj() {
        campaignMetaUpdate = [
            {
              "metaData": {
                "trid": trackingID
              }
            },
            {
              "returnedData":

                {
                  "ctype":"update",
                  "vaid": variationID,
                  "uscs": useCaseID,
                  "tcnt": "1",
                  "ncnt": "18",
                  "cnam": "Thomas Edison Fund Raising",
                  "cimod": "PR-1",
                  "webproperty": "bs-local.com",
                  "searchType": null,
                  "campaignType": "simple",
                  "debugMode": false
                }


            }
        ],

        campaignMetaNew = [
          {
            "metaData": {
              "trid": trackingID
            }
          },
          {
            "returnedData":

              {
                "ctype":"new",
                "vaid": variationID,
                "uscs": useCaseID,
                "tcnt": "1",
                "ncnt": "8",
                "campaignName": "Test Remaining Widgets",
                "webproperty": "bs-local.com",
                "searchType": "",
                "campaignType": "simple",
                "debugMode": true,
                "audioAnnotation":false,
                "visitorGreeting": ["Hey there! Would you like to know how TESU can help advance your career?"],
                "introduceStory":[],
                "callToAction":[

                  /* {"capability": "allowVisitorToMakeCall",
                     "callToAction": "Call Now!",
                     "callToActionAttribute": "2034220459"
                   }, */
                  {"capability": "sendVisitorToHighValuePage",
                    "callToAction": "Apply Now",
                    "callToActionAttribute": "https://www.tesu.edu/apply"
                  },
                  {"capability": "getVisitorContactInformation",
                    "callToAction": "Request Information",
                    "callToActionAttribute": ""
                  },
                  {"capability": "downloadImportantDocument",
                    "callToAction": "Call Now!",
                    "callToActionAttribute": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/docs/catalog-ug.pdf"
                  },
                ]
              }



          }
        ],  // important visitor greeting needs to be an array; since converted to NIMB for PA-1

        storyTopicsMeta = [
          {
            "metaData": {
              "trid": trackingID
            }
          },
          {
            "returnedData": [

              {
                "topicID": 0,
                "topicName": "Testing of Random Widgets",
                "topicDescription":"",
                "topicImage":""
              }, // topic 0



            ]
          }
        ],

        storyNodesMeta = [
          {
            "metaData": {
              "trid": trackingID
            }
          },
          {
            "returnedData": [
              {
                "topicID": 0,
                "nodeOrder": 0,
                "nodeDisplayName": "Quick Replies",
                "nodeTemplateCategory": "quickReplies",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, // 0
              {
                "topicID": 0,
                "nodeOrder": 1,
                "nodeDisplayName": "Contacts Collector",
                "nodeTemplateCategory": "contactsCollector",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //1
              {
                "topicID": 0,
                "nodeOrder": 2,
                "nodeDisplayName": "Survey Question - Single Choice",
                "nodeTemplateCategory": "surveyQuestion",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //2
              {
                "topicID": 0,
                "nodeOrder": 3,
                "nodeDisplayName": "Survey Question - Multiple Choice",
                "nodeTemplateCategory": "surveyQuestion",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //3
              {
                "topicID": 0,
                "nodeOrder": 4,
                "nodeDisplayName": "Comment Box",
                "nodeTemplateCategory": "commentBox",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //4
              {
                "topicID": 0,
                "nodeOrder": 5,
                "nodeDisplayName": "Net Promoter Score",
                "nodeTemplateCategory": "netPromoterScore",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //5
              {
                "topicID": 0,
                "nodeOrder": 6,
                "nodeDisplayName": "Downloadable Documents",
                "nodeTemplateCategory": "marketingBrochure",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //6
              {
                "topicID": 0,
                "nodeOrder": 7,
                "nodeDisplayName": "Image Gallery",
                "nodeTemplateCategory": "imageGallery",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //7
              {
                "topicID": 0,
                "nodeOrder": 8,
                "nodeDisplayName": "Presentation Slide",
                "nodeTemplateCategory": "presentationSlide",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //8
              {
                "topicID": 0,
                "nodeOrder": 9,
                "nodeDisplayName": "Content Tile",
                "nodeTemplateCategory": "contentTile",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //9
              {
                "topicID": 0,
                "nodeOrder": 10,
                "nodeDisplayName": "Audio Video Message",
                "nodeTemplateCategory": "audioVideoMessage",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //10
              {
                "topicID": 0,
                "nodeOrder": 11,
                "nodeDisplayName": "Content Card",
                "nodeTemplateCategory": "contentCard",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //11
              {
                "topicID": 0,
                "nodeOrder": 12,
                "nodeDisplayName": "Textual Description - With Image",
                "nodeTemplateCategory": "textualDescription",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //12
              {
                "topicID": 0,
                "nodeOrder": 13,
                "nodeDisplayName": "Textual Description - Without Image",
                "nodeTemplateCategory": "textualDescription",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //13
              {
                "topicID": 0,
                "nodeOrder": 14,
                "nodeDisplayName": "Bullet Points With Header",
                "nodeTemplateCategory": "bulletPoints",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //14
              {
                "topicID": 0,
                "nodeOrder": 15,
                "nodeDisplayName": "Bullet Points Without Header",
                "nodeTemplateCategory": "bulletPoints",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //15
              {
                "topicID": 0,
                "nodeOrder": 16,
                "nodeDisplayName": "Quotable Quotes",
                "nodeTemplateCategory": "quotableQuotes",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //16
              {
                "topicID": 0,
                "nodeOrder": 17,
                "nodeDisplayName": "Payment Processor",
                "nodeTemplateCategory": "paymentProcessor",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //17
              {
                "topicID": 0,
                "nodeOrder": 18,
                "nodeDisplayName": "Conversion Popup - Content Offer",
                "nodeTemplateCategory": "conversionPopup",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //18
              {
                "topicID": 0,
                "nodeOrder": 19,
                "nodeDisplayName": "Conversion Popup - Product Offer With Image",
                "nodeTemplateCategory": "conversionPopup",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //19
              {
                "topicID": 0,
                "nodeOrder": 20,
                "nodeDisplayName": "Converision Popup - Webinar Offer",
                "nodeTemplateCategory": "conversionPopup",
                "skipLogicType": "default",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //20
              {
                "topicID": 0,
                "nodeOrder": 21,
                "nodeDisplayName": "Terminate Conversation- Current Page",
                "nodeTemplateCategory": "terminateConversation",
                "skipLogicType": "end",
                "skipLogic": [

                ],
                "dataPrefilled": false,
                "searchContent": false,
                "searchQuery":false
              }, //21
            ]
          }
        ],

        storyNodesInputContent = [

          {
            "topicID": 0,
            "nodeOrder": 0,
            "nodeDisplayName": "Quick Replies",
            "nodeTemplateCategory": "quickReplies",
            "answerRequired": true,
            "searchQuery":false,
            "searchContent":false,
            "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
            "audioAnnotation": [],
            "nodeInputContent": [
              { "displayName": "Yes",
                "returnValue": "yes"
              },
              { "displayName": "No",
                "returnValue": "no"
              },
              { "displayName": "Maybe",
                "returnValue": "maybe"
              }

            ]
          }, //  0
          {
            "topicID": 0,
            "nodeOrder": 1,
            "nodeDisplayName": "Contacts Collector",
            "nodeTemplateCategory": "contactsCollector",
            "answerRequired": true,
            "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
            "audioAnnotation": [],
            "nodeInputContent": [

              {
                "fieldName": "phone",
                "required": true,
                "label": "Phone Number"
              },
              {
                "fieldName": "email",
                "required": true,
                "label": "Email Address"
              }]
          }, // 1
          {
            "topicID": 0,
            "nodeOrder": 2,
            "nodeDisplayName": "Survey Question - Single Choice",
            "nodeTemplateCategory": "surveyQuestion",
            "answerRequired": true,
            "searchQuery":false,
            "searchContent":false,
            "questionType": "singleChoice",
            "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
            "audioAnnotation": [],
            "nodeInputContent" : [
              {
                "displayName" : "TESU Scholarship Fund",
                "returnValue" : "scholarshipfund",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Annual Fund",
                "returnValue" : "annualfund",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Nursing Scholarships",
                "returnValue" : "nursingscholarship",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Military Scholarships",
                "returnValue" : "militaryscholarship",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Nicholas & Marjorie Carnevale Endowment",
                "returnValue" : "nicholasendowment",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              }


            ]
          }, // , 2
          {
            "topicID": 0,
            "nodeOrder": 3,
            "nodeDisplayName": "Survey Question - Multiple Choice",
            "nodeTemplateCategory": "surveyQuestion",
            "answerRequired": true,
            "searchQuery":false,
            "searchContent":false,
            "questionType": "multipleChoice",
            "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
            "audioAnnotation": [],
            "nodeInputContent" : [
              {
                "displayName" : "TESU Scholarship Fund",
                "returnValue" : "scholarshipfund",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Annual Fund",
                "returnValue" : "annualfund",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Nursing Scholarships",
                "returnValue" : "nursingscholarship",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Military Scholarships",
                "returnValue" : "militaryscholarship",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              },
              {
                "displayName" : "Nicholas & Marjorie Carnevale Endowment",
                "returnValue" : "nicholasendowment",
                "displayImage": 'https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/oily-skin.png'
              }


            ]
          }, // , 3
          {
            "topicID": 0,
            "nodeOrder": 4,
            "nodeDisplayName": "Comments Box",
            "nodeTemplateCategory": "commentBox",
            "answerRequired": true,
            "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
            "audioAnnotation": [],
            "nodeInputContent": [

              { "question": "Please enter a few highlights of your career",

              }
              ]
          }, // 4
          {
            "topicID": 0,
            "nodeOrder": 5,
            "nodeDisplayName": "Net Promoter Score",
            "nodeTemplateCategory": "netPromoterScore",
            "answerRequired": true,
            "conversationBlurbs":["Here is your email & phone", "I hope this is current"],
            "audioAnnotation": [],
            "nodeInputContent": [
              { "questions": "How likely are you to recommend Chalakh to other marketers?",

              },
              { "questions": "How easy was it to create a campaign using Chalakh's Composer?",

              }
            ]
          }, // 5
          {
            "topicID": 0,
            "nodeOrder": 6,
            "nodeDisplayName": "Downloadable Documents",
            "nodeTemplateCategory": "marketingBrochure",
            "conversationBlurbs":["Finally there are numerous financial aid programs that can help you lower cost"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "documentTitle": "Financial Aid Handbook",
                "documentSubtitle": "",
                "descriptionSummary": "Many adult students meeting the demands of work and family find that making the financial commitment to complete their education can be a challenge. The Office of Financial Aid is ready to assist students in securing the resources they need for their education",
                "descriptionDetail" : ["Thomas Edison State University participates in a number of federal and state financial aid programs", "Eligible Thomas Edison State University students may receive Pell Grants or Federal Education Loans, such as the Subsidized Stafford Loan and the Unsubsidized Stafford Loan, for courses offered by the University", "Students may use state aid to meet all or part of their college costs, provided they are taking at least 12 college credits per term"],
                "uploadDocument": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/dell/docs/5-ways-to-empower.pdf"
              }


            ],

          }, // 6
          {
            "topicID": 0,
            "nodeOrder": 7,
            "nodeDisplayName": "Image Gallery",
            "nodeTemplateCategory": "imageGallery",
            "answerRequired": true,
            "conversationBlurbs":["As a wizard all that we ask you is to give ONE hour of your time", "Only one hour helping TEST", "In return you get a few token gifts from us a thank you","And satisfaction for helping us out"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "imageCaption": "A TESU Branded First Aid Kit - After 3 months",
                "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-1.jpg"
              },
              {
                "imageCaption": "A Leather Notebook and Pen - After 6 months",
                "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-2.jpg"
              },
              {
                "imageCaption": "A TESU Branded Travel Mug - After 9 months",
                "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-3.jpg"
              },
              {
                "imageCaption": "An Alumni T-Shirt - After 12 months",
                "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-4.jpg"
              },
              {
                "imageCaption": "A TESU Engraved Pen - After 18 months",
                "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-5.jpg"
              },
              {
                "imageCaption": "Gift Certificate TESU online TESU Store - After 24 months",
                "image": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/images/wizard-6.jpg"
              }
            ],

          }, // 7
          {
            "topicID": 0,
            "nodeOrder": 8,
            "nodeDisplayName": "Presentation Slide",
            "nodeTemplateCategory": "presentationSlide",
            "answerRequired": true,
            "searchQuery":false,
            "searchContent":false,
            "questionType": "singleChoice",
            "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "slideTitle": "PackExpo Attendees by Job Function",
                "slideSubtitle": "Our Attendees",
                "slideSource": "Source: PMMI Internal Analysis",
                "uploadSlide": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/event/hcp/images/attendeebycompanysize.png"
              },
              {
                "slideTitle":  "PackExpo Attendees by Function",
                "slideSubtitle": "See Who Attended Last Year",
                "slideSource": "Source: PMMI Internal Analysis",
                "uploadSlide": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/event/hcp/images/attendeebyfunction.jpeg"
              }
            ]
          }, // 8
          {
            "topicID": 0,
            "nodeOrder": 9,
            "nodeDisplayName": "Content Tile",
            "nodeTemplateCategory": "contentTile",
            "answerRequired": true,
            "searchQuery":false,
            "searchContent":false,
            "conversationBlurbs":["Please select a cause you would like your donation to be directed towards"],
            "audioAnnotation": [],
            "nodeInputContent": [

              { "contentTitle": "3M Company",
                "contentSubtitle": 'Maker of Masks',
                "contentImage": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/event/hcp/images/3m-attendee.jpg",

              },
              { "contentTitle": "Abbot Laboratories",
                "contentSubtitle": "Leading Drug Manufacturer",
                "contentCaption": "See How We Can Help",
                "contentImage": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/event/hcp/images/abbot-attendee.png"
              },
              { "contentTitle": "Abbvie",
                "contentSubtitle": "Maker of Cancer Drugs",
                "contentImage": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/event/hcp/images/abbvie-attendee.png"
              }


            ]
          }, //  9
          {
            "topicID": 0,
            "nodeOrder": 10,
            "nodeDisplayName": "Audio Video Message",
            "nodeTemplateCategory": "audioVideoMessage",
            "conversationBlurbs":["This year the CASE Award was given to Robin Walton", "Here is a short video about that and why she deserves the rcognition"],
            "audioAnnotation": [],
            "nodeInputContent": [ // array of arrays with multiple categories of images - KeyNotes, Award Night, etc

              {
                "mediaType":"video",
                "mediaTitle": "Marvin D. Swede Johnson CASE Award",
                "mediaSubtitle": "Profile of This Year's Awardee",
                "mediaSource": "Robin Walton - VP, Community & Government Affairs at TESU",
                "uploadAVMedia": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/tesu/videos/caseaward.mp4",
                "uploadPosterImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/foundervideo-poster.jpg"
              }


            ],

          }, //10
          {
            "topicID": 0,
            "nodeOrder": 11,
            "nodeDisplayName": "Content Card",
            "nodeTemplateCategory": "contentCard",
            "conversationBlurbs":["Not sure if you have met the latest crop of Alumni Ambassadors", "Check them out - perhaps you may know someone", "You know - you can always become an ambassador too"],
            "audioAnnotation": [],

            "nodeInputContent": [
              {
                "cardTitle": "Webinar for Progress in AI",
                "cardSubtitle": "Sponsored by IBM",
                "descriptionSummary": "I fought to prove myself – to my family, my peers and my culture – the value of education.",
                "descriptionDetail": ["AI is Cool", "AI is awesome"],
                "image1": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-amna-malik.jpg",
                "image1Caption1": "Amna Malik- BA 17",
                "image2": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-drew-maristch.jpg",
                "image2Caption1": "Drew Maristch- BA 17"
              },
              {
                "cardTitle": "Webinar for Progress in Politics",
                "cardSubtitle": "Sponsored by IBM",
                "descriptionSummary": "I fought to prove myself – to my family, my peers and my culture – the value of education.",
                "descriptionDetail": ["AI is Cool", "AI is awesome"],
                "image1": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-amna-malik.jpg",
                "image1Caption1": "Amna Malik- BA 17",
                "image2": "https://s3.us-east-2.amazonaws.com/chalakh-bot-js/tesu/images/amb-drew-maristch.jpg",
                "image2Caption1": "Drew Maristch- BA 17"
              },


            ]
          }, //11
          {
            "topicID": 0,
            "nodeOrder": 12,
            "nodeDisplayName": "Textual Description With Images",
            "nodeTemplateCategory": "textualDescription",
            "conversationBlurbs":["The cost of education at TESU depends on various factors", "We have a few tools that can help you estimate he cost"],
            "audioAnnotation": [],
            "includeImage": true,
            "nodeInputContent": [
              {
                "paragraphTitle": "Nourishing Rich Cream 50 ML",
                "paragraphSubtitle": "To Smoothen & Vitalize Your Skin",
                "paragraphHeader" : "",
                "paragraphBullets" : ["Contains harakeke & cloudberry seed oils", "Contains Kanuka Honey & Totaro Extracts", "Boosted with Omega-6 from Safflower oil", "Defends from early signs of aging", "Rich formula is especially good for dry skin",],
                "descriptiveImage":"https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/product-image2.jpg",
              },

            ],

          }, //12
          {
            "topicID": 0,
            "nodeOrder": 13,
            "nodeDisplayName": "Textual Description Without Images",
            "nodeTemplateCategory": "textualDescription",
            "conversationBlurbs":["The cost of education at TESU depends on various factors", "We have a few tools that can help you estimate he cost"],
            "audioAnnotation": [],
            "includeImage": false,
            "nodeInputContent": [
              {
                "paragraphTitle": "The cost of a degree at Thomas Edison State University depends on a number of variables, including:",
                "paragraphSubtitle": "",
                "paragraphHeader" : "",
                "paragraphBullets" : ["Amount of credits a student brings to their degree program",
                  "Previously earned credits from other regionally accredited institutions",
                  "Number of credits a student must earn to complete their degree program",
                  "Credit-earning methods they use to complete a degree",
                  "Students is a resident of New Jersey or out of state",
                  "How many credits you might be able to complete in a year"]
              },

            ],

          }, //13
          {
            "topicID": 0,
            "nodeOrder": 14,
            "nodeDisplayName": "Bullet Points Without Header",
            "nodeTemplateCategory": "bulletPoints",
            "addGroupHeaders":false,

            "conversationBlurbs":["Let's start with a quick overview of our history and academic programs"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "bulletStrings": [
                  ["Thomas Edison State College was founded in 1972."],
                  ["In 2015, we were awarded university status & became Thomas Edison State University"],
                  ["We offer associate, bachelor's and master's degrees in more than 100 areas of study in 5 of the schools" ],
                  ["The Heavin School of Arts and Sciences provides an interdisciplinary curriculum in the liberal arts, humanities, natural sciences and social sciences as well as programs in the human services."],
                  ["The School of Applied Science and Technology provides programs in the fields of the applied sciences that benefit from technical currency, practical knowledge and applied skills."],
                  ["The School of Business and Management provides degree programs that prepare leaders to add value to their firms and organizations in the dynamic global marketplace" ],
                  ["The W. Cary Edwards School of Nursing provides students with degree programs for career needs of licensed registered nurses"],
                  ["The John S. Watson School of Public Service and Continuing Studies offers degree programs and advanced certificate programs in public policy studies, nonprofit management, financial management, public policy analysis, regional planning, and others" ]
                ]
              }

            ],

          }, //14
          {
            "topicID": 0,
            "nodeOrder": 15,
            "nodeDisplayName": "Bullet Points With Header",
            "nodeTemplateCategory": "bulletPoints",
            "addGroupHeaders":true,
            "conversationBlurbs":["If you are in New Jersey you can benefit from our in-state low rates", "Also we have a flat rate program if you take 12 credits or more"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "bulletHeader": "",
                "bulletStrings": [
                  ["Credits per Year: 3", "Per Credit Tuition: $1,197", "Discount: None"],
                  ["Credits per Year: 6", "Per Credit Tuition: $2,394", "Discount: None"],
                  ["Credits per Year: 9", "Per Credit Tuition: $3,591", "Discount: None"],
                  ["Credits per Year: 12", "Per Credit Tuition: $4,788", "Flat Rate: $3,963"],
                  ["Credits per Year: 15", "Per Credit Tuition: $5,985", "Flat Rate: $3,963"],
                  ["Credits per Year: 18", "Per Credit Tuition: $7,192", "Flat Rate: $3,963"],

                ]
              },



            ],

          }, //15
          {
            "topicID": 0,
            "nodeOrder": 16,
            "nodeDisplayName": "Bullet Points With Header",
            "nodeTemplateCategory": "quotableQuotes",
            "conversationBlurbs":["If you are in New Jersey you can benefit from our in-state low rates", "Also we have a flat rate program if you take 12 credits or more"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {

                "personName": "Gemma Davies",
                "quote": ["If you want to learn more about ABM, network with the best, and empower your team, this is a great conference with a real practical emphasis on how to make an impact when you come back to your business."],
                "personDesignation": "Director, Momemntum ABM"
              },
              {

                "personName": "July Wilks",
                "quote": ["What I loved about today was there were so many people talking about their real-life unvarnished experiences. That’s the stuff that’s ABM gold, and that’s the stuff I want to hear."],
                "personDesignation": "Director global strategy, ServiceNow"
              },



            ],

          }, //16
          {
            "topicID": 0,
            "nodeOrder": 17,
            "nodeDisplayName": "Select Donation Amount",
            "nodeTemplateCategory": "paymentProcessor",
            "answerRequired": true,
            "conversationBlurbs":["Please select the amount you would like to contribute", "Every dollar that we get from supporters like you helps"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {

                "callToAction": "Your Contribution Will Make a Big Difference",
                "donationChoices": [
                  {
                    "value": "100",
                    "valueType": null,
                    "fieldName": "donationAmount",
                    "label": "100"
                  },
                  {
                    "value": "200",
                    "valueType": null,
                    "fieldName": "donationAmount",
                    "label": "200"
                  },
                  {
                    "value": "300",
                    "valueType": null,
                    "fieldName": "donationAmount",
                    "label": "200"
                  },
                  {
                    "value": "400",
                    "valueType": null,
                    "fieldName": "donationAmount",
                    "label": "200"
                  },
                  {
                    "value": "other",
                    "valueType": null,
                    "fieldName": "donationAmount",
                    "label": "Other"
                  }
                ],

                "paymentMethod": [
                  {
                    "digitalWalletsAccepted": [
                      "PayPal",
                      "Visa Checkout",
                      "Master Card Checkout"
                    ],
                    "websitePaymentPage": "https://www.tesu.edu/",
                    "autoRenewal": true,
                    "paymentDisclaimer": "XXXXXXXXXXXXXXX"
                  }
                ],
                "billingInformation": [
                  {
                    "fieldName": "firstName",
                    "required": true,
                    "label": "First Name"
                  },
                  {
                    "fieldName": "lastName",
                    "required": true,
                    "label": "Last Name"
                  },
                  {
                    "fieldName": "emailAddress",
                    "required": true,
                    "label": "Email Address"
                  },
                  {
                    "fieldName": "address1",
                    "required": true,
                    "label": "Address 1"
                  },
                  {
                    "fieldName": "state",
                    "required": true,
                    "label": "State"
                  },
                  {
                    "fieldName": "city",
                    "required": true,
                    "label": "City"
                  },
                  {
                    "fieldName": "zipCode",
                    "required": true,
                    "label": "Zip Code"
                  }
                ]
              }
            ] // new format
          },  //17
          {
            "topicID": 0,
            "nodeOrder": 18,
            "nodeDisplayName": "Conversion Popup - Content Offer",
            "nodeTemplateCategory": "conversionPopup",
            "popupType": "contentOffer",
            "conversationBlurbs":["Finally there are numerous financial aid programs that can help you lower cost"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "contentTitle": "Financial Aid Handbook",
                "contentSubtitle": "",
                "contentSummary": "Many adult students meeting the demands of work and family find that making the financial commitment to complete their education can be a challenge. The Office of Financial Aid is ready to assist students in securing the resources they need for their education",
                "contentDetail" : ["Thomas Edison State University participates in a number of federal and state financial aid programs", "Eligible Thomas Edison State University students may receive Pell Grants or Federal Education Loans, such as the Subsidized Stafford Loan and the Unsubsidized Stafford Loan, for courses offered by the University", "Students may use state aid to meet all or part of their college costs, provided they are taking at least 12 college credits per term"],
                "uploadContentAsset": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/dell/docs/5-ways-to-empower.pdf",
                "contentImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/pg-popup.jpg"
              }


            ],

          }, // 18
          {
            "topicID": 0,
            "nodeOrder": 19,
            "nodeDisplayName": "Conversion Popup - Product Offer with Image",
            "nodeTemplateCategory": "conversionPopup",
            "popupType": "productOfferWithImage",
            "conversationBlurbs":["Finally there are numerous financial aid programs that can help you lower cost"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "productTitle": "Financial Aid Handbook",
                "productSubtitle": "",
                "offer": "Loyalty Program",
                "offerSummary": "Many adult students meeting the demands of work and family find that making the financial commitment to complete their education can be a challenge. The Office of Financial Aid is ready to assist students in securing the resources they need for their education",
                "offerDetail" : ["Thomas Edison State University participates in a number of federal and state financial aid programs", "Eligible Thomas Edison State University students may receive Pell Grants or Federal Education Loans, such as the Subsidized Stafford Loan and the Unsubsidized Stafford Loan, for courses offered by the University", "Students may use state aid to meet all or part of their college costs, provided they are taking at least 12 college credits per term"],
                "productImage": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/pg/images/pg-popup.jpg"
              }


            ],

          }, // 19
          {
            "topicID": 0,
            "nodeOrder": 20,
            "nodeDisplayName": "Conversion Popup - Webinar Offer",
            "nodeTemplateCategory": "conversionPopup",
            "popupType": "webinarOffer",
            "conversationBlurbs":["Finally there are numerous financial aid programs that can help you lower cost"],
            "audioAnnotation": [],
            "nodeInputContent": [
              {
                "webinarTitle": "The Uncertain Impact of Today’s Shopping Behavior",
                "webinarSubtitle": "What Will Be the Effect on CPG Brand Loyalty?",
                "webinarSchedule":"Wednesday, May 20, 2020, 1 PM ET | 10 AM PT",
                "webinarSummary": "",
                "webinarDetails": ["How buying behavior has changed throughout the pandemic across CPG categories",
                  "How brand loyalty and repeat purchasing—for small, growing, and dominant brands— are being impacted",
                  "How CPG companies can emerge from this pandemic with strong brand equity",

                ],

                "sponsorName":"Sponsor: NC Solutions",
                "sponsorLogo":"https://s3.us-east-2.amazonaws.com/chalakh-bot-js/event/hcp/images/blueprint-sponsor.jpg",

                "firstSpeakerPhoto": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/cforc/images/brothersncsolutions.png",
                "secondSpeakerPhoto": "https://chalakh-bot-js.s3.us-east-2.amazonaws.com/cforc/images/woodncsolutions.png",
                "firstSpeakerName":"Steve Dunlop",
                "secondSpeakerName":"Joe Smith",
                "firstSpeakerDesignation":"Chief Research Officer - NSC Solutions",
                "secondSpeakerDesignation":"Chief T O - NSC Solutions",
                "firstSpeakerBio": "A pioneer and innovator in advertising analytics with more than 30 years of experience,\n" +
                " Leslie leads research at NCS, shaping the methodologies and innovations that help brands advertise more effectively.",
                "secondSpeakerBio":"Lance and his team partner with clients to develop effective, data-driven marketing and measurement solutions that drive outcome-based advertising and growth. \n" +
                "He has over 20 years of senior leadership experience in media, advertising and sales.",

              }


            ],

          }, // 20



          {
              "topicID": 0,
              "nodeOrder": 21,
              "nodeDisplayName": "Terminate Conversation - Current Page",
              "nodeTemplateCategory": "terminateConversation",
              "terminationMode": 'exitOnCurrentPage',
              "goalCompleted": true,
              "conversationBlurbs":[],
              "audioAnnotation": [],
              "nodeInputContent": [{
                "exitMessage": ["I hope I was helpful", "Thank You Good Bye"]
              }]
            }, // 21
          ];

        setupParameters = [
          {
            "metaData": {
              "trid": "3890"
            }
          },
          {
            "returnedData": {
              "traffic": [
                "email",
                "textMsg",
                "direct", "all"
              ],
              "pageType": "website",
              "device": [
                "mobile",
                "desktop", "tablet"
              ],
              "region": [
                "USA",
                "CANADA",
                "UK",
                "IRELAND",
                "AUSTRALIA"
              ],
              "pageTarget": [
                {
                  "group": [
                    {
                      "subGroup": {
                        "urlCategory": "url host",
                        "urlCategoryMatchType": "is",
                        "subGroupMatch": [
                          {

                            "urlCategoryValue": "bs-local.com:63342"
                          }
                        ]
                      }
                    },
                    {
                      "subGroup": {
                        "urlCategory": "url path",
                        "urlCategoryMatchType": "is",
                        "subGroupMatch": [
                          {

                            "urlCategoryValue": "/chso/clientPageWithSnippet.html"
                          }
                        ]

                      }
                    },
                    {
                      "subGroup": {
                        "urlCategory": "url query",
                        "urlCategoryMatchType": "is not",
                        "subGroupMatch": [
                          {

                            "urlCategoryValue": "utm=google"
                          }
                        ]

                      }
                    }
                  ]
                },
                {
                  "group": [
                    {
                      "subGroup": {
                        "urlCategory": "url host",
                        "urlCategoryMatchType": "includes",

                        "subGroupMatch": [
                          {

                            "urlCategoryValue": "bs-local.com"
                          }
                        ]
                      }
                    },
                    {
                      "subGroup": {
                        "urlCategory": "url query",
                        "urlCategoryMatchType": "is",
                        "subGroupMatch": [
                          {

                            "urlCategoryValue": "cpw=rbs"
                          },
                          {

                            "urlCategoryValue": "utm=email"
                          }
                        ]

                      }
                    },
                    {
                      "subGroup": {
                        "urlCategory": "url path",
                        "urlCategoryMatchType": "includes",
                        "subGroupMatch": [
                          {

                            "urlCategoryValue": "clientPageWithSnippt"
                          },
                          {

                            "urlCategoryValue": "Snippet"
                          }
                        ]

                      }
                    }
                  ]
                },

              ]
            }
          }];

        activateParameters = [
          {
            "metaData": {
              "trid": "544"
            }
          },
          {
            "returnedData": {
              "trafficAllocatedToBot": "1.0",
              "optimization": {
                "optimizationMethod": "manualOptimization",

                "conversationInitiationMode": "hybrid",
                "websiteBehaviour": [
                  {
                    "behaviorType": "secondsOnPage",
                    "triggerValue": "30",
                    "logicOperand":null
                  },
                  {
                    "behaviorType": "secondsOnWebsite",
                    "triggerValue": "60",
                    "logicOperand":"or"
                  },
                  {
                    "behaviorType": "pageViews",
                    "triggerValue": "1",
                    "logicOperand":"and"
                  },
                  /*
                  {
                    "behaviorType": "pageScrollDepth",
                    "triggerValue": "60",
                    "logicOperand":"and"
                  } */

                ]
              },
              "schedule":
                {
                  "timeZone": "EST",
                  "scheduledHours": [
                    {
                      "day": "Monday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Tuesday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Wednesday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Thursday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Friday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Saturday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Sunday",
                      "from": "0",
                      "to": "23"
                    }
                  ]
                }

            }
          }
        ]; // json for manual optimization, scroll depth commented out, since a little complicaed

        SelfactivateParameters = [
          {
            "metaData": {
              "trid": "544"
            }
          },
          {
            "returnedData": {
              "trafficAllocatedToBot": "1.0",
              "optimization": {
                "optimizationMethod": "selfOptimization",

              },
              "schedule":
                {
                  "timeZone": "EST",
                  "scheduledHours": [
                    {
                      "day": "Monday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Tuesday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Wednesday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Thursday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Friday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Saturday",
                      "from": "0",
                      "to": "23"
                    },
                    {
                      "day": "Sunday",
                      "from": "0",
                      "to": "23"
                    }
                  ]
                }

            }
          }
        ]; // json for self optimization

        conversionParameters = [
          {
            "metaData": {
              "trid": trackingID
            }
          },
          {
            "returnedData": {
              "includeSmartProbe":true,
              "goal": [
                {
                  "fieldName": "prospectName",
                  "label":" Prospect Name",
                  "required": true,
                  "importance": "2"},
                {
                  "fieldName": "phoneNumber",
                  "importance": "3",
                  "label":" Phone Number",
                  "required": true,},
                {
                  "fieldName": "emailAddress",
                  "importance": "1",
                  "label":" Email Address",
                  "required": true,},
                {
                  "fieldName": "companyName",
                  "importance": "4",
                  "label":"Company Name",
                  "required": true,},
                {
                  "fieldName": "businessTitle",
                  "importance": "5",
                  "label":"Business Title",
                  "required": true}
              ]

            }
          }];

    }

    addClickHandlers();
    initializeTrackingId();
    initiliazeWebhookDataObj();

     // termination mode can be "exitOnNewPage", exitOnCurrentPage, exitWithWithoutMessage
     // if exitOnNewPage then skipto for skipType end should have the url;

    function postPayload(dataToBeSent, webHookType, trid) { // for now for surveys, answers and contact information - but can be for other user case

          apiURL = postAPI +'?whtype=' + webHookType + '&trid=' + trid;
          dataToBeSent = JSON.stringify(dataToBeSent); // if the object is not pure JSON the data is not posted
          var deferred = $.Deferred();
          $.ajax({
            method: 'POST', // only post is valid
            dataType: 'json', // this is what is received;
            //  contentType: "application/x-www-form-urlencoded", // data being sent; this format means a key-value pair
            contentType: "application/json", // IMPORTANT. DONT use it this will trigger a preflight handshake, with an OPTIONS call; Need Laravel to Handle that
            data: dataToBeSent,

            url: apiURL,
            success: function (response, status, xhr) { // What to do if we succeed
              console.log(response, status);
              try {
                var q = JSON.parse(response);
              } catch (e) {
                var a = JSON.stringify(response);
              }
              console.log(response, status, xhr.statusText);
              deferred.resolve(response);

            },
            error: function (jqXHR, response, textStatus, errorThrown) { // What to do if we fail
              console.log(JSON.stringify(jqXHR));
              console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
              deferred.reject(response);
            }
          });
          return deferred.promise();
      } // with concept of promise

    function synchronousStuff(a) {

      var items = [ [campaignMetaNew, 'start', trackingID],
        [storyTopicsMeta, 'topicsMeta', trackingID],
        [storyNodesMeta, 'nodesMeta', trackingID],
      ];

      var looper = $.Deferred().resolve();

      // go through each item and call the ajax function
      $.when.apply($, $.map(items, function(item, i) {
        looper = looper.then(function() {
          // trigger ajax call with item data
          return postPayload(item[0], item[1], item[2]);
        });
        return looper;
      })).then(function() {
        // run this after all ajax calls have completed
        console.log('Done!');
      });
    } // to make sure campaign meta, topics meta, and node meta are published sequentially

    function asynchronousStuff(a) {

      var response = publishNodeInputContent(a);
      var response = publishSetupParameters(a);
      var response = publishActivateParameters(a);
      var response = publishCampaignConversionGoals(a);

    }  // rest of the stuff - node input, activate, setup object

    function newCampaignMeta(a) {

      var response = postPayload(campaignMetaNew, 'start', trackingID);

    }

    function updateCampaignMeta(a) {

      var response = postPayload(campaignMetaUpdate, 'start', trackingID);

    }

    function publishPaymentProcessorInput(a) {
      var payload = [];
      metaData = {"trid":trackingID};
      payload[0] = {metaData};

      returnedData = paymentProcessorNodeInputContent;
      payload[1] = {returnedData};
      var response = postPayload(payload, 'nodeInputContent', trackingID);

    }

    function publishTopicsMeta(a) {

        var response = postPayload(storyTopicsMeta, 'topicsMeta', trackingID);

    }

    function publishNodesMeta(a) {

      var response = postPayload(storyNodesMeta, 'nodesMeta', trackingID);

    }

    function publishNodeInputContent(a) {

       var payload = [];

       metaData = {"trid":trackingID};
       payload[0] = {metaData};

      for (var n = 0; n < storyNodesInputContent.length; n++) {

          returnedData = storyNodesInputContent[n];
          payload[1] = {returnedData};
          var response = postPayload(payload, 'nodeInputContent', trackingID);
        }

    }

    function publishSetupParameters(a) {

      var response = postPayload(setupParameters, 'setup', trackingID);

    }

    function publishCampaignConversionGoals(a) {

      var response = postPayload(conversionParameters, 'cgoal', trackingID);

    }

    function publishActivateParameters(a) {

    var response = postPayload(activateParameters, 'activate', trackingID);

  }

    //https://www.webniraj.com/2018/10/08/making-ajax-calls-sequentially-using-jquery/



    function updateCampaignAll(a) {

      var response = updateCampaignMeta(a);
      var response = publishTopicsMeta(a);
      var response = publishNodesMeta(a);
      var response = publishNodeOutputContent(a);
      var response = publishSetupParameters(a);
      var response = publishActivateParameters(a);

  }

    function endPublishing(a) {

      var response = postPayload(null, 'end', trackingID);

    }



});



