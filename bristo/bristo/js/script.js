// $(function () {
//   // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $('#navbar-toggler').blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 868) {
//       $('#navbarSupportedContent').collapse('hide');
//     }
//   });
// });
let totalii;
function burger() {
  // var favoritemovie = sessionStorage.getItem("favoriteMovie");
  // console.log(favoritemovie);
  window.open('cat1.html', '_self');
}
function pizza() {
  window.open('cat2.html', '_self');
}
function sandwich() {
  window.open('cat3.html', '_self');
}
function ice() {
  window.open('cat4.html', '_self');
}
function search() {
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('item');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      // x[i].style.display = 'none';
      // x[i].scrollIntoView();
    } else {
      x[i].scrollIntoView();

      // document.getElementById('ID').scrollIntoView();
      // x[i].style.display = 'list-item';
    }
  }
}
// var element = document.querySelector('.abs');
// element.scrollIntoView();
/////////////////////////////////////////////////////////////////////////////

// function pay() {
// var favoritemovie = "Shrek";
// let i3 = document.getElementById('i3');
// let b2 = document.getElementById('b2');
// let s1 = document.getElementById('s1');
// let p1 = document.getElementById('p1');

// sessionStorage.setItem("favoriteMovie", favoritemovie);

// document.getElementById('order summary').style.display = 'block';
// document.getElementById('total').innerHTML = '<h1>hhiiii</h1>';

// alert('hy');

// let a = document.getElementById('b1');
// let b = document.getElementById('b2');
// // let c = document.getElementById('b3');
// // let d = document.getElementById('b4');

// let e = document.getElementById('p1');
// // let f = document.getElementById('p2');
// // let g = document.getElementById('p3');
// // let h = document.getElementById('p4');

// let i = document.getElementById('s1');
// // let j = document.getElementById('s2');
// // let k = document.getElementById('s3');
// // let l = document.getElementById('s4');

// // let m = document.getElementById('i1');
// // let n = document.getElementById('i2');
// let o = document.getElementById('i3');
// // let p = document.getElementById('i4');

// // sessionStorage.setItem('p1', 'hello');

// ///////////////////////////////////////////////////////////////////////////////
// // let b1 = (document.getElementById('b11').innerText = a.value);
// let b2 = (document.getElementById('b22').innerText = b.value);
// // let b3 = (document.getElementById('b33').innerText = c.value);
// // let b4 = (document.getElementById('b44').innerText = d.value);

// let p1 = (document.getElementById('p11').innerText = e.value);
// // let p2 = (document.getElementById('p22').innerText = f.value);
// // let p3 = (document.getElementById('p33').innerText = g.value);
// // let p4 = (document.getElementById('p44').innerText = h.value);

// let s1 = (document.getElementById('s11').innerText = i.value);
// // let s2 = (document.getElementById('s22').innerText = j.value);
// // let s3 = (document.getElementById('s33').innerText = k.value);
// // let s4 = (document.getElementById('s44').innerText = l.value);

// // let i1 = (document.getElementById('i11').innerText = m.value);
// // let i2 = (document.getElementById('i22').innerText = n.value);
// let i3 = (document.getElementById('i33').innerText = o.value);
// // let i4 = (document.getElementById('i44').innerText = p.value);

// TOTAL +=
//   //   a.value * 12 +
//   b.value * 10 +
//   //   c.value * 8 +
//   //   d.value * 15 +
//   e.value * 15 +
//   //   f.value * 18 +
//   //   g.value * 20 +
//   //   h.value * 20 +
//   i.value * 5 +
//   //   j.value * 9 +
//   //   k.value * 15 +
//   //   l.value * 13 +
//   //   m.value * 7 +
//   //   n.value * 6 +
//   o.value * 5;
// //   p.value * 5;
// let bill = (document.getElementById('bill').innerHTML = TOTAL);

// }

function pay2() {
  ////////////////////////////////////////////////

  let a = document.getElementById('b1');
  let b = document.getElementById('b2');
  let c = document.getElementById('b3');
  let d = document.getElementById('b4');

  sessionStorage.setItem('b1', a.value);
  sessionStorage.setItem('b2', b.value);
  sessionStorage.setItem('b3', c.value);
  sessionStorage.setItem('b4', d.value);

  ////////////////////////////////////////////////

  // if (b.value.onchange) {
  //   bur = b.value;
  // } else {
  //   bur = b22;
  // }
  //////////////////////////////////////////////////

  let b1 = (document.getElementById('b11').innerText = a.value);
  let b2 = (document.getElementById('b22').innerText = b.value);
  let b3 = (document.getElementById('b33').innerText = c.value);
  let b4 = (document.getElementById('b44').innerText = d.value);
  ////////////////////////////////////////////////+i3*5+s1*5+p1*15+b22*10
  // let p1 = sessionStorage.getItem('p1');
  // let p2 = sessionStorage.getItem('p2');
  // let p3 = sessionStorage.getItem('p3');
  // let p4 = sessionStorage.getItem('p4');
  let totalp = sessionStorage.getItem('totalp');
  let valuep = sessionStorage.getItem('valuep');
  let valuei = sessionStorage.getItem('valuei');
  let values = sessionStorage.getItem('values');

  ///////////////////////////////////////////////////////////////////////
  if (valuep === null) {
    valuep = 0;
  } else {
    valuep = valuep;
  }
  if (valuei === null) {
    valuei = 0;
  } else {
    valuei = valuei;
  }
  if (values === null) {
    values = 0;
  } else {
    values = values;
  }

  let TOTALB =
    a.value * 12 +
    b.value * 10 +
    c.value * 8 +
    d.value * 15 +
    parseInt(valuep) +
    parseInt(valuei) +
    parseInt(values);
  let bill = (document.getElementById('bill').innerText = TOTALB);
  /////////////////////////////////////////////////////////////////////
  let valueb = a.value * 12 + b.value * 10 + c.value * 8 + d.value * 15;

  sessionStorage.setItem('totalb', TOTALB);

  sessionStorage.setItem('total', TOTALB);
  sessionStorage.setItem('valueb', valueb);
}
function pay3() {
  let e = document.getElementById('p1');
  let f = document.getElementById('p2');
  let g = document.getElementById('p3');
  let h = document.getElementById('p4');

  sessionStorage.setItem('p1', e.value);
  sessionStorage.setItem('p2', f.value);
  sessionStorage.setItem('p3', g.value);
  sessionStorage.setItem('p4', h.value);

  let p1 = (document.getElementById('p11').innerText = e.value);
  let p2 = (document.getElementById('p22').innerText = f.value);
  let p3 = (document.getElementById('p33').innerText = g.value);
  let p4 = (document.getElementById('p44').innerText = h.value);

  /////////////////////////////////////////////////
  // let b1 = sessionStorage.getItem('b1');
  // let b2 = sessionStorage.getItem('b2');
  // let b3 = sessionStorage.getItem('b3');
  // let b4 = sessionStorage.getItem('b4');
  let totalb = sessionStorage.getItem('totalb');
  let valueb = sessionStorage.getItem('valueb');
  let valuei = sessionStorage.getItem('valuei');
  let values = sessionStorage.getItem('values');

  /////////////////////////////////////////////////
  if (valueb === null) {
    valueb = 0;
  } else {
    valueb = valueb;
  }
  if (valuei === null) {
    valuei = 0;
  } else {
    valuei = valuei;
  }
  if (values === null) {
    values = 0;
  } else {
    values = values;
  }

  let TOTALP =
    e.value * 15 +
    f.value * 18 +
    g.value * 20 +
    h.value * 20 +
    parseInt(values) +
    parseInt(valuei) +
    parseInt(valueb);
  let bill = (document.getElementById('bill').innerText = TOTALP);
  let valuep = e.value * 15 + f.value * 18 + g.value * 20 + h.value * 20;

  sessionStorage.setItem('totalp', TOTALP);

  sessionStorage.setItem('total', TOTALP);
  sessionStorage.setItem('valuep', valuep);
}
function pay4() {
  let i = document.getElementById('s1');
  let j = document.getElementById('s2');
  let k = document.getElementById('s3');
  let l = document.getElementById('s4');

  sessionStorage.setItem('s1', i.value);
  sessionStorage.setItem('s2', j.value);
  sessionStorage.setItem('s3', k.value);
  sessionStorage.setItem('s4', l.value);

  let s1 = (document.getElementById('s11').innerText = i.value);
  let s2 = (document.getElementById('s22').innerText = j.value);
  let s3 = (document.getElementById('s33').innerText = k.value);
  let s4 = (document.getElementById('s44').innerText = l.value);

  let valuei = sessionStorage.getItem('valuei');
  let valueb = sessionStorage.getItem('valueb');
  let valuep = sessionStorage.getItem('valuep');

  ////////////////////////////////////////////////////////////////////////
  if (valuei === null) {
    valuei = 0;
  } else {
    valuei = valuei;
  }
  if (valueb === null) {
    valueb = 0;
  } else {
    valueb = valueb;
  }

  if (valuep === null) {
    valuep = 0;
  } else {
    valuep = valuep;
  }

  let TOTALS =
    i.value * 5 +
    j.value * 9 +
    k.value * 15 +
    l.value * 13 +
    parseInt(valuei) +
    parseInt(valueb) +
    parseInt(valuep);
  let bill = (document.getElementById('bill').innerText = TOTALS);

  let values = i.value * 5 + j.value * 9 + k.value * 15 + l.value * 13;

  sessionStorage.setItem('totals', TOTALS);
  sessionStorage.setItem('total', TOTALS);
  sessionStorage.setItem('values', values);
}

function pay5() {
  let m = document.getElementById('i1');
  let n = document.getElementById('i2');
  let o = document.getElementById('i3');
  let p = document.getElementById('i4');

  sessionStorage.setItem('i1', m.value);
  sessionStorage.setItem('i2', n.value);
  sessionStorage.setItem('i3', o.value);
  sessionStorage.setItem('i4', p.value);

  let i1 = (document.getElementById('i11').innerText = m.value);
  let i2 = (document.getElementById('i22').innerText = n.value);
  let i3 = (document.getElementById('i33').innerText = o.value);
  let i4 = (document.getElementById('i44').innerText = p.value);

  let values = sessionStorage.getItem('values');
  let valueb = sessionStorage.getItem('valueb');
  let valuep = sessionStorage.getItem('valuep');

  ///////////////////////////////////////////////////////////////////////
  if (values === null) {
    values = 0;
  } else {
    values = values;
  }

  if (valueb === null) {
    valueb = 0;
  } else {
    valueb = valueb;
  }

  if (valuep === null) {
    valuep = 0;
  } else {
    valuep = valuep;
  }

  let TOTALI =
    m.value * 6 +
    n.value * 7 +
    o.value * 5 +
    p.value * 8 +
    parseInt(values) +
    parseInt(valueb) +
    parseInt(valuep);
  let bill = (document.getElementById('bill').innerText = TOTALI);

  let valuei = m.value * 6 + n.value * 7 + o.value * 5 + p.value * 8;

  sessionStorage.setItem('totali', TOTALI);
  sessionStorage.setItem('total', TOTALI);
  sessionStorage.setItem('valuei', valuei);
}
//////////////////////////////////////////////////
//retain info if page accidently refrsshes
// Get the text field that we're going to track
// let field = document.getElementById('i3');

// // See if we have an autosave value
// // (this will only happen if the page is accidentally refreshed)
// if (sessionStorage.getItem('autosave')) {
//   // Restore the contents of the text field
//   field.value = sessionStorage.getItem('autosave');
// }

// // Listen for changes in the text field
// field.addEventListener('change', function () {
//   // And save the results into the session storage object
//   sessionStorage.setItem('autosave', field.value);
// });
