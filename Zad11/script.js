'use strict';

function setup(){
    abstract();

    let input = document.createElement('input');
    let header = document.querySelector('h1');
    let searchBtn = document.createElement('button');
    let returnBtn = document.createElement('button');
    searchBtn.textContent = 'Search';
    searchBtn.style.marginLeft = '5px';
    returnBtn.textContent = 'Show Everything';
    returnBtn.style.marginLeft = '5px';
    returnBtn.style.display = 'none';

    let uls = document.querySelectorAll('ul');
    searchBtn.addEventListener('click', function(){
        for(let i = 0; i < uls.length; i++){
            var childs = uls[i].childNodes;
            for(let j = 0; j < childs.length; j++){
                
            }
        }
        returnBtn.style.display = '';
    });

    returnBtn.addEventListener('click', function(){
        returnBtn.style.display = 'none';
    });

    header.parentNode.insertBefore(input, header.nextSibling);
    input.parentNode.insertBefore(searchBtn, input.nextSibling);
    searchBtn.parentNode.insertBefore(returnBtn, searchBtn.nextSibling);
}

document.addEventListener('DOMContentLoaded', setup);

function abstract(){
    let lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++){        
        let btn = document.createElement('button');
        btn.textContent = 'Show Abstract';
        btn.style.backgroundColor = 'lightGrey';
        btn.style.border = 'none';
        btn.style.fontWeight = 'bold';
        btn.style.height = '25px';
        btn.style.borderRadius = '15px';

        let text = document.createElement('p');
        text.textContent = lis[i].querySelector('a').title;
        text.style.borderStyle = 'solid';
        text.style.padding = '7px';
        text.style.display = 'none';

        btn.addEventListener('mouseover', function(){
            this.style.cursor = 'pointer';
        });

        btn.addEventListener('click', function(){
            if (this.textContent == 'Show Abstract'){
                text.style.display = '';
                this.textContent = 'Hide Abstract'
            } else {
                text.style.display = 'none';
                this.textContent = 'Show Abstract'
            }
        });

        lis[i].append(btn);
        lis[i].append(text);
    }
}


