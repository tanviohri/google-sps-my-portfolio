// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
window.customElements.define('comment-element', class extends HTMLElement {'p'});

async function getComments() {
  const response = await fetch('/data');
  const comments = await response.json();
  container=document.getElementById('comments-container');
  comments.map(function(currcomment){
        container.appendChild(createElement(currcomment));
  });
}

function createElement(currcomment) {
  const element = document.createElement('comment-element');
  element.innerText = currcomment.name + ": " + currcomment.commentText + " (" + currcomment.score + ")";
  return element;
}
