function introduction(name) {
    console.log(introduction("Aki")).toEqual("Hi my name is Aki.");
    console.log(introduction("Samip")).toEqual("Hi my name is Samip.");
}
function introductionWithLanguage(name, language) {
    console.log(introductionWithLanguage("Aki", "Ember,js")).toEqual("Hi, my name is Aki and I'm learning to program in Ember.js.");
    console.log(introductionWithLanguage("Samip", "React")).toEqual("Hi my name is Samip and I'm learning to program in React.");
}
function introductionWithLanguageOptional(name, language) {
    console.log(introductionWithLanguageOptional("Grace")).toEqual("Hi, my name is Grace and I'm learning to program in Javascript.");
}
function introductionWithLanguageOptional(name, language) {
    console.log(introductionWithLanguageOptional("Grace", "Python")).toEqual("Hi, my name is Grace and I'm learning to program in Python.");
}