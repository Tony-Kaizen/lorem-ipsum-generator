//lorem ipsum text
const text = [
  'Well, Triarius, I rejoined, when one disagrees with a man, it is essential to say what it is that one objects to in his views. What should prevent me from being an Epicurean, if I accepted the doctrines of Epicurus? especially as the system is an exceedingly easy one to master. You must not find fault with members of opposing schools for criticizing each others opinions; though I always feel that insult and abuse, or ill‑tempered wrangling and bitter, obstinate controversy are beneath the dignity of philosophy.',
  'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.',
  'Well, Triarius, I rejoined, when one disagrees with a man, it is essential to say what it is that one objects to in his views. What should prevent me from being an Epicurean, if I accepted the doctrines of Epicurus? especially as the system is an exceedingly easy one to master. You must not find fault with members of opposing schools for criticizing each others opinions; though I always feel that insult and abuse, or ill‑tempered wrangling and bitter, obstinate controversy are beneath the dignity of philosophy.',
  'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.',
  'Well, Triarius, I rejoined, when one disagrees with a man, it is essential to say what it is that one objects to in his views. What should prevent me from being an Epicurean, if I accepted the doctrines of Epicurus? especially as the system is an exceedingly easy one to master. You must not find fault with members of opposing schools for criticizing each others opinions; though I always feel that insult and abuse, or ill‑tempered wrangling and bitter, obstinate controversy are beneath the dignity of philosophy.',
  'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.',
  'Well, Triarius, I rejoined, when one disagrees with a man, it is essential to say what it is that one objects to in his views. What should prevent me from being an Epicurean, if I accepted the doctrines of Epicurus? especially as the system is an exceedingly easy one to master. You must not find fault with members of opposing schools for criticizing each others opinions; though I always feel that insult and abuse, or ill‑tempered wrangling and bitter, obstinate controversy are beneath the dignity of philosophy.',
  'Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solent.',
  'Well, Triarius, I rejoined, when one disagrees with a man, it is essential to say what it is that one objects to in his views. What should prevent me from being an Epicurean, if I accepted the doctrines of Epicurus? especially as the system is an exceedingly easy one to master. You must not find fault with members of opposing schools for criticizing each others opinions; though I always feel that insult and abuse, or ill‑tempered wrangling and bitter, obstinate controversy are beneath the dignity of philosophy.'
];

const form = document.querySelector('form');
const number = document.querySelector('#number');
const paragraphs = document.querySelector('#paragraphs__container');

form.addEventListener('submit', e => {
  e.preventDefault();

  const amount = +number.value;
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(amount) || amount <= 0 || amount > 9) {
    paragraphs.innerHTML = `<p>${text[random]}</p>`
  } else {
    let tempText = text.slice(0, amount);
    tempText = tempText.map(item => `<p>${item}</p>`).join("")
    paragraphs.innerHTML = tempText;
  }
});