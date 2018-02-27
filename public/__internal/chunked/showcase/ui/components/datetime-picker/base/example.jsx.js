var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/datetime-picker/base/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([76,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],{0:function(e,t){e.exports=React},90:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=void 0;var i=a(l(0)),n=l(7),d=l(23),s=(l(5),a(l(3))),o=l(11),m=l(10),c=function(e){return i.default.createElement(n.Listbox,{className:"slds-dropdown slds-dropdown--fluid slds-dropdown--length-5",vertical:!0},i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-01",title:"6:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-02",title:"7:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-03",title:"8:00am",selected:e.optionSelected})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-04",title:"9:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-05",title:"10:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-06",title:"11:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-07",title:"12:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-08",title:"1:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-09",title:"2:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-10",title:"3:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-11",title:"4:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-12",title:"5:00pm"})))};t.Context=function(e){return i.default.createElement("div",{style:{height:"25rem"}},e.children)};t.default=i.default.createElement("div",{className:"slds-form slds-form--compound"},i.default.createElement("fieldset",{className:"slds-form-element"},i.default.createElement("legend",{className:"slds-form-element__label"},"Date and Time"),i.default.createElement("div",{className:"slds-form-element__group"},i.default.createElement("div",{className:"slds-form-element__row"},i.default.createElement(o.FormElement,{className:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",label:"Date",inputId:"date-input-id",inputIcon:"right",dropdown:i.default.createElement(d.DatePicker,{todayActive:!0})},i.default.createElement(m.Input,{id:"date-input-id",placeholder:" "}),i.default.createElement(s.default,{className:"slds-input__icon slds-input__icon--right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),i.default.createElement(n.ComboboxContainer,{label:"Time",autocomplete:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:"Select a time",placeholder:" ",listbox:i.default.createElement(c,null)})))));t.states=[{id:"date-selection",label:"Date selected",element:i.default.createElement("div",{className:"slds-form slds-form--compound"},i.default.createElement("fieldset",{className:"slds-form-element"},i.default.createElement("legend",{className:"slds-form-element__label"},"Date and Time"),i.default.createElement("div",{className:"slds-form-element__group"},i.default.createElement("div",{className:"slds-form-element__row"},i.default.createElement(o.FormElement,{className:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",label:"Date",inputId:"date-input-id",inputIcon:"right",dropdown:i.default.createElement(d.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},i.default.createElement(m.Input,{id:"date-input-id",placeholder:" ",defaultValue:"06/24/2014"}),i.default.createElement(s.default,{className:"slds-input__icon slds-input__icon--right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),i.default.createElement(n.ComboboxContainer,{label:"Time",autocomplete:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:"Select a time",placeholder:" ",listbox:i.default.createElement(c,null)})))))},{id:"time-selection",label:"Time selected",element:i.default.createElement("div",{className:"slds-form slds-form--compound"},i.default.createElement("fieldset",{className:"slds-form-element"},i.default.createElement("legend",{className:"slds-form-element__label"},"Date and Time"),i.default.createElement("div",{className:"slds-form-element__group"},i.default.createElement("div",{className:"slds-form-element__row"},i.default.createElement(o.FormElement,{className:"slds-dropdown-trigger slds-dropdown-trigger_click",label:"Date",inputId:"date-input-id",inputIcon:"right",dropdown:i.default.createElement(d.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},i.default.createElement(m.Input,{id:"date-input-id",placeholder:" ",defaultValue:"06/24/2014"}),i.default.createElement(s.default,{className:"slds-input__icon slds-input__icon--right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),i.default.createElement(n.ComboboxContainer,{label:"Time",autocomplete:!0,isOpen:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:"Select a time",placeholder:" ",value:"8:00am",listbox:i.default.createElement(c,{optionSelected:!0})})))))}]}},[90]);