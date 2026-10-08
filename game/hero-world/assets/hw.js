(()=>{var hd=Object.defineProperty;var sl=(n,t)=>{for(var e in t)hd(n,e,{get:t[e],enumerable:!0})};var Vh=0,Ul=1,Gh=2;var dr=1,Hh=2,_s=3,Si=0,nn=1,yn=2,Wn=0,xs=1,Fl=2,Ol=3,Bl=4,Wh=5;var Bi=100,Xh=101,qh=102,Yh=103,$h=104,Zh=200,Jh=201,Kh=202,jh=203,zl=204,kl=205,Qh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,ha=0,ua=1,fa=2,fs=3,da=4,pa=5,ma=6,ga=7,Vl=0,lu=1,cu=2,Cn=0,Gl=1,Hl=2,Wl=3,Xl=4,ql=5,Yl=6,$l=7;var Zl=300,bi=301,zi=302,qa=303,Ya=304,pr=306,_a=1e3,zn=1001,xa=1002,He=1003,hu=1004;var mr=1005;var Ue=1006,$a=1007;var wi=1008;var mn=1009,Jl=1010,Kl=1011,ys=1012,Za=1013,Rn=1014,In=1015,Pn=1016,Ja=1017,Ka=1018,vs=1020,jl=35902,Ql=35899,tc=1021,ec=1022,vn=1023,kn=1026,Ei=1027,nc=1028,ja=1029,Ti=1030,Qa=1031;var to=1033,gr=33776,_r=33777,xr=33778,yr=33779,eo=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,lo=37488,co=37489,vr=37490,ho=37491,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,yo=37815,vo=37816,Mo=37817,So=37818,bo=37819,wo=37820,Eo=37821,To=36492,Ao=36494,Co=36495,Ro=36283,Io=36284,Mr=36285,Po=36286;var Xs=2300,ya=2301,oa=2302,Rl=2303,Il=2400,Pl=2401,Ll=2402;var uu=3200;var ic=0,fu=1,ii="",Ge="srgb",qs="srgb-linear",Ys="linear",xe="srgb";var la=7680;var du=519,pu=512,mu=513,gu=514,Lo=515,_u=516,xu=517,Do=518,yu=519,sc=35044;var rc="300 es",En=2e3,$s=2001;function ud(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vu(){let n=Zs("canvas");return n.style.display="block",n}var gh={},ds=null;function Js(...n){let t="THREE."+n.shift();ds?ds("log",t,...n):console.log(t,...n)}function Mu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=Mu(n);let t="THREE."+n.shift();if(ds)ds("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Kt(...n){n=Mu(n);let t="THREE."+n.shift();if(ds)ds("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ui(...n){let t=n.join(" ");t in gh||(gh[t]=!0,Jt(...n))}function Su(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bu={[ha]:ua,[fa]:ma,[da]:ga,[fs]:pa,[ua]:ha,[ma]:fa,[ga]:da,[pa]:fs},Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ca=Math.PI/180,va=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function dd(n,t){return(n%t+t)%t}function rl(n,t,e){return(1-e)*n+e*t}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hc=class hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;var ce=hc,Gn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(h!==y||l!==u||c!==d||f!==g){let m=l*u+c*d+f*g+h*y;m<0&&(u=-u,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let A=Math.acos(m),L=Math.sin(A);p=Math.sin(p*A)/L,o=Math.sin(o*A)/L,l=l*p+u*o,c=c*p+d*o,f=f*p+g*o,h=h*p+y*o}else{l=l*p+u*o,c=c*p+d*o,f=f*p+g*o,h=h*p+y*o;let A=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=A,c*=A,f*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+f*h+l*d-c*u,t[e+1]=l*g+f*u+c*h-o*d,t[e+2]=c*g+f*d+o*u-l*h,t[e+3]=f*g-o*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),h=o(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"YXZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"ZXY":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"ZYX":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"YZX":this._x=u*f*h+c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h-u*d*g;break;case"XZY":this._x=u*f*h-c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h+u*d*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=i+o+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-i*c,this._z=r*f+a*c+i*l-s*o,this._w=a*f-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uc=class uc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),f=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*f,this.y=i+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;var q=uc,al=new q,_h=new Gn,fc=class fc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],d=i[5],g=i[8],y=s[0],m=s[3],p=s[6],A=s[1],L=s[4],b=s[7],E=s[2],w=s[5],C=s[8];return r[0]=a*y+o*A+l*E,r[3]=a*m+o*L+l*w,r[6]=a*p+o*b+l*C,r[1]=c*y+f*A+h*E,r[4]=c*m+f*L+h*w,r[7]=c*p+f*b+h*C,r[2]=u*y+d*A+g*E,r[5]=u*m+d*L+g*w,r[8]=u*p+d*b+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-i*r*f+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*a-o*c,u=o*l-f*r,d=c*r-a*l,g=e*h+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*c-f*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(f*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(t,e)),this}rotate(t){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fc.prototype.isMatrix3=!0;var ee=fc,ol=new ee,xh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){let n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:t,whitePoint:i,transfer:Ys,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var he=pd();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $i,Ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$i===void 0&&($i=Zs("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$i}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},md=0,ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ll(s[a].image)):r.push(ll(s[a]))}else r=ll(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var gd=0,cl=new q,qe=class n extends Vn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=zn,s=zn,r=Ue,a=wi,o=vn,l=mn,c=n.DEFAULT_ANISOTROPY,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=pi(),this.name="",this.source=new ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Zl;qe.DEFAULT_ANISOTROPY=1;var dc=class dc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,b=(d+1)/2,E=(p+1)/2,w=(f+u)/4,C=(h+y)/4,_=(g+m)/4;return L>b&&L>E?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=w/i,r=C/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=_/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-y)/A,this.z=(u-f)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dc.prototype.isVector4=!0;var Pe=dc,Sa=class extends Vn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new qe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Sa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ks=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Xa=class Xa{constructor(t,e,i,s,r,a,o,l,c,f,h,u,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,f,h,u,d,g,y,m)}set(t,e,i,s,r,a,o,l,c,f,h,u,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=a*f,d=a*h,g=o*f,y=o*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*f,d=l*h,g=c*f,y=c*h;e[0]=u+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=d*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*f,d=l*h,g=c*f,y=c*h;e[0]=u-y*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*f,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*f,d=a*h,g=o*f,y=o*h;e[0]=l*f,e[4]=g*c-d,e[8]=u*c+y,e[1]=l*h,e[5]=y*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*f,e[4]=y-u*h,e[8]=g*h+d,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=d*h+g,e[10]=u-y*h}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+y,e[5]=a*f,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*f,e[10]=y*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,xd)}lookAt(t,e,i){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ci.crossVectors(i,un),ci.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ci.crossVectors(i,un)),ci.normalize(),Nr.crossVectors(un,ci),s[0]=ci.x,s[4]=Nr.x,s[8]=un.x,s[1]=ci.y,s[5]=Nr.y,s[9]=un.y,s[2]=ci.z,s[6]=Nr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],d=i[13],g=i[2],y=i[6],m=i[10],p=i[14],A=i[3],L=i[7],b=i[11],E=i[15],w=s[0],C=s[4],_=s[8],T=s[12],D=s[1],V=s[5],G=s[9],N=s[13],I=s[2],O=s[6],Y=s[10],F=s[14],it=s[3],W=s[7],nt=s[11],st=s[15];return r[0]=a*w+o*D+l*I+c*it,r[4]=a*C+o*V+l*O+c*W,r[8]=a*_+o*G+l*Y+c*nt,r[12]=a*T+o*N+l*F+c*st,r[1]=f*w+h*D+u*I+d*it,r[5]=f*C+h*V+u*O+d*W,r[9]=f*_+h*G+u*Y+d*nt,r[13]=f*T+h*N+u*F+d*st,r[2]=g*w+y*D+m*I+p*it,r[6]=g*C+y*V+m*O+p*W,r[10]=g*_+y*G+m*Y+p*nt,r[14]=g*T+y*N+m*F+p*st,r[3]=A*w+L*D+b*I+E*it,r[7]=A*C+L*V+b*O+E*W,r[11]=A*_+L*G+b*Y+E*nt,r[15]=A*T+L*N+b*F+E*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],A=l*d-c*u,L=o*d-c*h,b=o*u-l*h,E=a*d-c*f,w=a*u-l*f,C=a*h-o*f;return e*(y*A-m*L+p*b)-i*(g*A-m*E+p*w)+s*(g*L-y*E+p*C)-r*(g*b-y*w+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-i*(r*f-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],A=e*o-i*a,L=e*l-s*a,b=e*c-r*a,E=i*l-s*o,w=i*c-r*o,C=s*c-r*l,_=f*y-h*g,T=f*m-u*g,D=f*p-d*g,V=h*m-u*y,G=h*p-d*y,N=u*p-d*m,I=A*N-L*G+b*V+E*D-w*T+C*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(o*N-l*G+c*V)*O,t[1]=(s*G-i*N-r*V)*O,t[2]=(y*C-m*w+p*E)*O,t[3]=(u*w-h*C-d*E)*O,t[4]=(l*D-a*N-c*T)*O,t[5]=(e*N-s*D+r*T)*O,t[6]=(m*b-g*C-p*L)*O,t[7]=(f*C-u*b+d*L)*O,t[8]=(a*G-o*D+c*_)*O,t[9]=(i*D-e*G-r*_)*O,t[10]=(g*w-y*b+p*A)*O,t[11]=(h*b-f*w-d*A)*O,t[12]=(o*T-a*V-l*_)*O,t[13]=(e*V-i*T+s*_)*O,t[14]=(y*L-g*E-m*A)*O,t[15]=(f*E-h*L+u*A)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,h=o+o,u=r*c,d=r*f,g=r*h,y=a*f,m=a*h,p=o*h,A=l*c,L=l*f,b=l*h,E=i.x,w=i.y,C=i.z;return s[0]=(1-(y+p))*E,s[1]=(d+b)*E,s[2]=(g-L)*E,s[3]=0,s[4]=(d-b)*w,s[5]=(1-(u+p))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(g+L)*C,s[9]=(m-A)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);let c=1/a,f=1/o,h=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=f,Mn.elements[5]*=f,Mn.elements[6]*=f,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=En,l=!1){let c=this.elements,f=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===En)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=En,l=!1){let c=this.elements,f=2/(e-t),h=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===En)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Xa.prototype.isMatrix4=!0;var Ie=Xa,Zi=new q,Mn=new Ie,_d=new q(0,0,0),xd=new q(1,1,1),ci=new q,Nr=new q,un=new q,vh=new Ie,Mh=new Gn,mi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yd=0,Sh=new q,Ji=new Gn,Jn=new Ie,Ur=new q,Os=new q,vd=new q,Md=new Gn,bh=new q(1,0,0),wh=new q(0,1,0),Eh=new q(0,0,1),Th={type:"added"},Sd={type:"removed"},Ki={type:"childadded",child:null},hl={type:"childremoved",child:null},an=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new q,e=new mi,i=new Gn,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ee}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Os,Ur,this.up):Jn.lookAt(Ur,Os,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),h=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},bd={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ul(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=dd(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ul(a,r,t+1/3),this.g=ul(a,r,t),this.b=ul(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=wu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return he.workingToColorSpace(Ze.copy(this),t),Math.round(fe(Ze.r*255,0,255))*65536+Math.round(fe(Ze.g*255,0,255))*256+Math.round(fe(Ze.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ge){he.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Fr);let i=rl(hi.h,Fr.h,e),s=rl(hi.s,Fr.s,e),r=rl(hi.l,Fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new re;re.NAMES=wu;var Qs=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sn=new q,Kn=new q,fl=new q,jn=new q,ji=new q,Qi=new q,Ah=new q,dl=new q,pl=new q,ml=new q,gl=new Pe,_l=new Pe,xl=new Pe,Bn=class n{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),Kn.subVectors(i,e),fl.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(Kn),l=Sn.dot(fl),c=Kn.dot(Kn),f=Kn.dot(fl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-o*f)*u,g=(a*f-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return gl.setScalar(0),_l.setScalar(0),xl.setScalar(0),gl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(xl,r.z),a}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),Kn.subVectors(t,e),Sn.cross(Kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,i),Qi.subVectors(r,i),dl.subVectors(t,i);let l=ji.dot(dl),c=Qi.dot(dl);if(l<=0&&c<=0)return e.copy(i);pl.subVectors(t,s);let f=ji.dot(pl),h=Qi.dot(pl);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(i).addScaledVector(ji,a);ml.subVectors(t,r);let d=ji.dot(ml),g=Qi.dot(ml);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Qi,o);let m=f*g-d*h;if(m<=0&&h-f>=0&&d-g>=0)return Ah.subVectors(r,s),o=(h-f)/(h-f+(d-g)),e.copy(s).addScaledVector(Ah,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gi=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Br.subVectors(this.max,Bs),ts.subVectors(t.a,Bs),es.subVectors(t.b,Bs),ns.subVectors(t.c,Bs),ui.subVectors(es,ts),fi.subVectors(ns,es),Pi.subVectors(ts,ns);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!yl(e,ts,es,ns,Br)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,ts,es,ns,Br))?!1:(zr.crossVectors(ui,fi),e=[zr.x,zr.y,zr.z],yl(e,ts,es,ns,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new q,new q,new q,new q,new q,new q,new q,new q],bn=new q,Or=new gi,ts=new q,es=new q,ns=new q,ui=new q,fi=new q,Pi=new q,Bs=new q,Br=new q,zr=new q,Li=new q;function yl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Li.fromArray(n,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),f=i.dot(Li);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Ne=new q,kr=new ce,wd=0,Oe=class extends Vn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var tr=class extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var er=class extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var tn=class extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ed=new gi,zs=new q,vl=new q,Fi=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ed.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(vl)),this.expandByPoint(zs.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Td=0,xn=new Ie,Ml=new an,is=new q,fn=new gi,ks=new gi,Ve=new q,en=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?er:tr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(fn.min,ks.min),fn.expandByPoint(Ve),Ve.addVectors(fn.max,ks.max),fn.expandByPoint(Ve)):(fn.expandByPoint(ks.min),fn.expandByPoint(ks.max))}fn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ve.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Ve.add(is)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Oe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new q,l[_]=new q;let c=new q,f=new q,h=new q,u=new ce,d=new ce,g=new ce,y=new q,m=new q;function p(_,T,D){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,D),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),f.sub(c),h.sub(c),d.sub(u),g.sub(u);let V=1/(d.x*g.y-g.x*d.y);isFinite(V)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(V),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(V),o[_].add(y),o[T].add(y),o[D].add(y),l[_].add(m),l[T].add(m),l[D].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let _=0,T=A.length;_<T;++_){let D=A[_],V=D.start,G=D.count;for(let N=V,I=V+G;N<I;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let L=new q,b=new q,E=new q,w=new q;function C(_){E.fromBufferAttribute(s,_),w.copy(E);let T=o[_];L.copy(T),L.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(w,T);let V=b.dot(l[_])<0?-1:1;a.setXYZW(_,L.x,L.y,L.z,V)}for(let _=0,T=A.length;_<T;++_){let D=A[_],V=D.start,G=D.count;for(let N=V,I=V+G;N<I;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new q,r=new q,a=new q,o=new q,l=new q,c=new q,f=new q,h=new q;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f),d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*f;for(let p=0;p<f;p++)u[g++]=c[d++]}return new Oe(u,f,h)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,f=a.length;c<f;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Qe=new q,nr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sl=new q,Ad=new q,Cd=new ee,wn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sl.subVectors(i,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Cd.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rd=0,ni=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=xs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=kl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new wn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_i=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,Vs=new q,rs=new q,as=new q,os=new ce,Gs=new ce,Eu=new Ie,Vr=new q,Hs=new q,Gr=new q,Ch=new ce,bl=new ce,Rh=new ce,Oi=class extends an{constructor(t=new _i){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new en;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wa(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new nr(i,3,0,!1)),ss.setAttribute("uv",new nr(i,2,3,!1))}this.geometry=ss,this.material=t,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Eu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-as.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Hr(Vr.set(-.5,-.5,0),as,a,rs,s,r),Hr(Hs.set(.5,-.5,0),as,a,rs,s,r),Hr(Gr.set(.5,.5,0),as,a,rs,s,r),Ch.set(0,0),bl.set(1,0),Rh.set(1,1);let o=t.ray.intersectTriangle(Vr,Hs,Gr,!1,Vs);if(o===null&&(Hr(Hs.set(-.5,.5,0),as,a,rs,s,r),bl.set(0,1),o=t.ray.intersectTriangle(Vr,Gr,Hs,!1,Vs),o===null))return;let l=t.ray.origin.distanceTo(Vs);l<t.near||l>t.far||e.push({distance:l,point:Vs.clone(),uv:Bn.getInterpolation(Vs,Vr,Hs,Gr,Ch,bl,Rh,new ce),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hr(n,t,e,i,s,r){os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Gs.x=r*os.x-s*os.y,Gs.y=s*os.x+r*os.y):Gs.copy(os),n.copy(t),n.x+=Gs.x,n.y+=Gs.y,n.applyMatrix4(Eu)}var ti=new q,wl=new q,Wr=new q,Xr=new q,ir=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(wl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),f=Math.abs(1-a*a),h,u,d,g;if(f>0)if(h=a*l-o,u=a*o-l,g=r*f,h>=0)if(u>=-g)if(u<=g){let y=1/f;h*=y,u*=y,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wl).addScaledVector(Wr,u),d}intersectSphere(t,e){if(t.radius<0)return null;ti.subVectors(t.center,this.origin);let i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,A=i.y-a.y,L=i.z-a.z,b=Math.abs(l),E=Math.abs(c),w=Math.abs(f),C,_,T,D,V,G,N,I,O,Y,F,it;if(b>=E&&b>=w?(T=l,G=h,O=g,it=p,l>=0?(C=c,_=f,D=u,V=d,N=y,I=m,Y=A,F=L):(C=f,_=c,D=d,V=u,N=m,I=y,Y=L,F=A)):E>=w?(T=c,G=u,O=y,it=A,c>=0?(C=f,_=l,D=d,V=h,N=m,I=g,Y=L,F=p):(C=l,_=f,D=h,V=d,N=g,I=m,Y=p,F=L)):(T=f,G=d,O=m,it=L,f>=0?(C=l,_=c,D=h,V=u,N=g,I=y,Y=p,F=A):(C=c,_=l,D=u,V=h,N=y,I=g,Y=A,F=p)),T===0)return null;let W=C/T,nt=_/T,st=1/T,yt=D-W*G,mt=V-nt*G,St=N-W*O,Mt=I-nt*O,gt=Y-W*it,H=F-nt*it,tt=gt*Mt-H*St,_t=yt*H-mt*gt,Ut=St*mt-Mt*yt;if(s){if(tt<0||_t<0||Ut<0)return null}else if((tt<0||_t<0||Ut<0)&&(tt>0||_t>0||Ut>0))return null;let dt=tt+_t+Ut;if(dt===0)return null;let Ft=st*(tt*G+_t*O+Ut*it);return(dt>0?Ft<0:Ft>0)?null:this.at(Ft/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ih=new Ie,Di=new ir,qr=new Fi,Ph=new q,Yr=new q,$r=new q,Zr=new q,El=new q,Jr=new q,Lh=new q,Kr=new q,De=class extends an{constructor(t=new en,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],h=r[l];f!==0&&(El.fromBufferAttribute(h,t),a?Jr.addScaledVector(El,f):Jr.addScaledVector(El.sub(e),f))}e.add(Jr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(qr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(qr,Ph)===null||Di.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Ih),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),L=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,E=L;b<E;b+=3){let w=o.getX(b),C=o.getX(b+1),_=o.getX(b+2);s=jr(this,p,t,i,c,f,h,w,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let A=o.getX(m),L=o.getX(m+1),b=o.getX(m+2);s=jr(this,a,t,i,c,f,h,A,L,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),L=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,E=L;b<E;b+=3){let w=b,C=b+1,_=b+2;s=jr(this,p,t,i,c,f,h,w,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let A=m,L=m+1,b=m+2;s=jr(this,a,t,i,c,f,h,A,L,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Id(n,t,e,i,s,r,a,o){let l;if(t.side===nn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:n}}function jr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Yr),n.getVertexPosition(l,$r),n.getVertexPosition(c,Zr);let f=Id(n,t,e,i,Yr,$r,Zr,Lh);if(f){let h=new q;Bn.getBarycoord(Lh,Yr,$r,Zr,h),s&&(f.uv=Bn.getInterpolatedAttribute(s,o,l,c,h,new ce)),r&&(f.uv1=Bn.getInterpolatedAttribute(r,o,l,c,h,new ce)),a&&(f.normal=Bn.getInterpolatedAttribute(a,o,l,c,h,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new q,materialIndex:0};Bn.getNormal(Yr,$r,Zr,u.normal),f.face=u,f.barycoord=h}return f}var Ea=class extends qe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=He,f=He,h,u){super(null,a,o,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new Fi,Pd=new ce(.5,.5),Qr=new q,sr=class{constructor(t=new wn,e=new wn,i=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=En,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],A=r[12],L=r[13],b=r[14],E=r[15];if(s[0].setComponents(c-a,d-f,p-g,E-A).normalize(),s[1].setComponents(c+a,d+f,p+g,E+A).normalize(),s[2].setComponents(c+o,d+h,p+y,E+L).normalize(),s[3].setComponents(c-o,d-h,p-y,E-L).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,d-u,p-m,E-b).normalize();else if(s[4].setComponents(c-l,d-u,p-m,E-b).normalize(),e===En)s[5].setComponents(c+l,d+u,p+m,E+b).normalize();else if(e===$s)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=Pd.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gs=class extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new q,Aa=new q,Dh=new Ie,Ws=new ir,ta=new Fi,Tl=new q,Nh=new q,Ca=class extends an{constructor(t=new en,e=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),Aa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new tn(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;Dh.copy(s).invert(),Ws.copy(t.ray).applyMatrix4(Dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){let p=f.getX(y),A=f.getX(y+1),L=ea(this,t,Ws,l,p,A,y);L&&e.push(L)}if(this.isLineLoop){let y=f.getX(g-1),m=f.getX(d),p=ea(this,t,Ws,l,y,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){let p=ea(this,t,Ws,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=ea(this,t,Ws,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ea(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ta,Aa,Tl,Nh)>i)return;Tl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Tl);if(!(c<t.near||c>t.far))return{distance:c,point:Nh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Uh=new q,Fh=new q,rr=class extends Ca{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Uh.fromBufferAttribute(e,s),Fh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Uh.distanceTo(Fh);t.setAttribute("lineDistance",new tn(i,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ar=class extends qe{constructor(t=[],e=bi,i,s,r,a,o,l,c,f){super(t,e,i,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hn=class extends qe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends qe{constructor(t,e,i=Rn,s,r,a,o=He,l=He,c,f=kn,h=1){if(f!==kn&&f!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ra=class extends xi{constructor(t,e=Rn,i=bi,s,r,a=He,o=He,l,c=kn){let f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class n extends en{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],h=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(h,2));function g(y,m,p,A,L,b,E,w,C,_,T){let D=b/C,V=E/_,G=b/2,N=E/2,I=w/2,O=C+1,Y=_+1,F=0,it=0,W=new q;for(let nt=0;nt<Y;nt++){let st=nt*V-N;for(let yt=0;yt<O;yt++){let mt=yt*D-G;W[y]=mt*A,W[m]=st*L,W[p]=I,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[p]=w>0?1:-1,f.push(W.x,W.y,W.z),h.push(yt/C),h.push(1-nt/_),F+=1}}for(let nt=0;nt<_;nt++)for(let st=0;st<C;st++){let yt=u+st+O*nt,mt=u+st+O*(nt+1),St=u+(st+1)+O*(nt+1),Mt=u+(st+1)+O*nt;l.push(yt,mt,Mt),l.push(mt,St,Mt),it+=6}o.addGroup(d,it,T),d+=it,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var na=new q,ia=new q,Al=new q,sa=new Bn,lr=class extends en{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ca*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),u={},d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:p}=sa;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),sa.getNormal(Al),h[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){let L=(A+1)%3,b=h[A],E=h[L],w=sa[f[A]],C=sa[f[L]],_=`${b}_${E}`,T=`${E}_${b}`;T in u&&u[T]?(Al.dot(u[T].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(C.x,C.y,C.z)),u[T]=null):_ in u||(u[_]={index0:c[A],index1:c[L],normal:Al.clone()})}}for(let g in u)if(u[g]){let{index0:y,index1:m}=u[g];na.fromBufferAttribute(o,y),ia.fromBufferAttribute(o,m),d.push(na.x,na.y,na.z),d.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new tn(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var cr=class n extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,h=t/o,u=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<f;p++){let A=p*u-a;for(let L=0;L<c;L++){let b=L*h-r;g.push(b,-A,0),y.push(0,0,1),m.push(L/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){let L=A+c*p,b=A+c*(p+1),E=A+1+c*(p+1),w=A+1+c*p;d.push(L,b,w),d.push(b,E,w)}this.setIndex(d),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function ki(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Oh(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Oh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=ki(n[e]);for(let s in i)t[s]=i[s]}return t}function Oh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ld(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ac(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Tu={clone:ki,merge:je},Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ia=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Pa=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},La=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Cl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Da=class extends yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,o=2*e-i;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:a=t,l=2*i-e;break;case Ll:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,f=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,A=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,L=(-1-d)*m+(1.5+d)*y+.5*g,b=d*m-d*y;for(let E=0;E!==o;++E)r[E]=p*a[f+E]+A*a[c+E]+L*a[l+E]+b*a[h+E];return r}},Na=class extends yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-e)/(s-e),h=1-f;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*f;return r}},Ua=class extends yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fa=class extends yi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,h=this.outTangents;if(!f||!h){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=d*u+g*2,A=h[p],L=h[p+1],b=t*u+g*2,E=f[b],w=f[b+1],C=Fd(i,e,A,E,s);r[g]=Au(C,y,L,w,m)}return r}};function Au(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ud(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Fd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Au(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Ud(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Cl(t.settings)&&(i.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break;case Rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return oa;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Cl(this.settings)&&(Bh(this.settings.inTangents,t),Bh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&fd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let g=0;g!==i;++g){let y=e[h+g];if(y!==e[u+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ya;var vi=class extends pn{constructor(t,e,i){super(t,e,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Xs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}};Oa.prototype.ValueTypeName="color";var Ba=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}};Ba.prototype.ValueTypeName="number";var za=class extends yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let f=c+o;c!==f;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},hr=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends pn{constructor(t,e,i){super(t,e,i)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Xs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}};ka.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cu=new Va,Ga=class{constructor(t){this.manager=t!==void 0?t:Cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var ra=new q,aa=new Gn,Fn=new q,ur=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ra,aa,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ra,aa,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new q,zh=new ce,kh=new ce,Je=class extends ur{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ca*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var fr=class extends ur{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var cs=-90,hs=1,Ha=class extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Je(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Je(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Je(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Je(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Je(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wa=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var oc="\\[\\]\\.:\\/",Od=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",Bd="[^"+oc.replace("\\.","")+"]",zd=/((?:WC+[\/:])*)/.source.replace("WC",lc),kd=/(WCOD+)?/.source.replace("WCOD",Bd),Vd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),Gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Hd=new RegExp("^"+zd+kd+Vd+Gd+"$"),Wd=["material","materials","bones","map"],Dl=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Od,"")}static parseTrackName(t){let e=Hd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Dl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _x=new Float32Array(1);var pc=class pc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};pc.prototype.isMatrix2=!0;var Nl=pc;function cc(n,t,e,i){let s=Xd(i);switch(e){case tc:return n*t;case nc:return n*t/s.components*s.byteLength;case ja:return n*t/s.components*s.byteLength;case Ti:return n*t*2/s.components*s.byteLength;case Qa:return n*t*2/s.components*s.byteLength;case ec:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case to:return n*t*4/s.components*s.byteLength;case gr:case _r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xr:case yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:case so:return Math.max(n,16)*Math.max(t,8)/4;case eo:case io:return Math.max(n,8)*Math.max(t,8)/2;case ro:case ao:case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oo:case vr:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case To:case Ao:case Co:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ro:case Io:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Mr:case Po:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xd(n){switch(n){case mn:case Jl:return{byteLength:1,components:1};case ys:case Kl:case Pn:return{byteLength:2,components:1};case Ja:case Ka:return{byteLength:2,components:4};case Rn:case Za:case In:return{byteLength:4,components:1};case jl:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ju(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yd(n){let t=new WeakMap;function e(o,l){let c=o.array,f=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let f=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,f);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){let g=h[u],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){let y=h[d];n.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:$d,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Kd,alphatest_fragment:jd,alphatest_pars_fragment:Qd,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:up,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:yp,displacementmap_pars_vertex:vp,displacementmap_vertex:Mp,emissivemap_fragment:Sp,emissivemap_pars_fragment:bp,colorspace_fragment:wp,colorspace_pars_fragment:Ep,envmap_fragment:Tp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Ip,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Np,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Fp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:$p,lights_fragment_end:Zp,lightprobes_pars_fragment:Jp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:am,morphinstance_vertex:om,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:fm,normal_fragment_maps:dm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:vm,iridescence_pars_fragment:Mm,opaque_fragment:Sm,packing:bm,premultiplied_alpha_fragment:wm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Nm,skinning_pars_vertex:Um,skinning_vertex:Fm,skinnormal_vertex:Om,specularmap_fragment:Bm,specularmap_pars_fragment:zm,tonemapping_fragment:km,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Hm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:qm,worldpos_vertex:Ym,background_vert:$m,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Km,cube_vert:jm,cube_frag:Qm,depth_vert:tg,depth_frag:eg,distance_vert:ng,distance_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:fg,meshmatcap_frag:dg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:xg,meshphysical_frag:yg,meshtoon_vert:vg,meshtoon_frag:Mg,points_vert:Sg,points_frag:bg,shadow_vert:wg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:Ag},Dt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},qn={basic:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:je([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:je([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:je([Dt.points,Dt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:je([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:je([Dt.common,Dt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:je([Dt.sprite,Dt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:je([Dt.common,Dt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:je([Dt.lights,Dt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};qn.physical={uniforms:je([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var No={r:0,b:0,g:0},Cg=new Ie,Ku=new ee;Ku.set(-1,0,0,0,1,0,0,0,1);function Rg(n,t,e,i,s,r){let a=new re(0),o=s===!0?0:1,l,c,f=null,h=0,u=null;function d(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){let b=A.backgroundBlurriness>0;L=t.get(L,b)}return L}function g(A){let L=!1,b=d(A);b===null?m(a,o):b&&b.isColor&&(m(b,1),L=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,L){let b=d(L);b&&(b.isCubeTexture||b.mapping===pr)?(c===void 0&&(c=new De(new dn(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:ki(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ku),c.material.toneMapped=he.getTransfer(b.colorSpace)!==xe,(f!==b||h!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new De(new cr(2,2),new Ke({name:"BackgroundMaterial",uniforms:ki(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=he.getTransfer(b.colorSpace)!==xe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=b,h=b.version,u=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,L){A.getRGB(No,ac(n)),e.buffers.color.setClear(No.r,No.g,No.b,L,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,L=1){a.set(A),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Ig(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(V,G,N,I,O){let Y=!1,F=h(V,I,N,G);r!==F&&(r=F,c(r.object)),Y=d(V,I,N,O),Y&&g(V,I,N,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(V,G,N,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(V){return n.bindVertexArray(V)}function f(V){return n.deleteVertexArray(V)}function h(V,G,N,I){let O=I.wireframe===!0,Y=i[G.id];Y===void 0&&(Y={},i[G.id]=Y);let F=V.isInstancedMesh===!0?V.id:0,it=Y[F];it===void 0&&(it={},Y[F]=it);let W=it[N.id];W===void 0&&(W={},it[N.id]=W);let nt=W[O];return nt===void 0&&(nt=u(l()),W[O]=nt),nt}function u(V){let G=[],N=[],I=[];for(let O=0;O<e;O++)G[O]=0,N[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:I,object:V,attributes:{},index:null}}function d(V,G,N,I){let O=r.attributes,Y=G.attributes,F=0,it=N.getAttributes();for(let W in it)if(it[W].location>=0){let st=O[W],yt=Y[W];if(yt===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(yt=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(yt=V.instanceColor)),st===void 0||st.attribute!==yt||yt&&st.data!==yt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function g(V,G,N,I){let O={},Y=G.attributes,F=0,it=N.getAttributes();for(let W in it)if(it[W].location>=0){let st=Y[W];st===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(st=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(st=V.instanceColor));let yt={};yt.attribute=st,st&&st.data&&(yt.data=st.data),O[W]=yt,F++}r.attributes=O,r.attributesNum=F,r.index=I}function y(){let V=r.newAttributes;for(let G=0,N=V.length;G<N;G++)V[G]=0}function m(V){p(V,0)}function p(V,G){let N=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;N[V]=1,I[V]===0&&(n.enableVertexAttribArray(V),I[V]=1),O[V]!==G&&(n.vertexAttribDivisor(V,G),O[V]=G)}function A(){let V=r.newAttributes,G=r.enabledAttributes;for(let N=0,I=G.length;N<I;N++)G[N]!==V[N]&&(n.disableVertexAttribArray(N),G[N]=0)}function L(V,G,N,I,O,Y,F){F===!0?n.vertexAttribIPointer(V,G,N,O,Y):n.vertexAttribPointer(V,G,N,I,O,Y)}function b(V,G,N,I){y();let O=I.attributes,Y=N.getAttributes(),F=G.defaultAttributeValues;for(let it in Y){let W=Y[it];if(W.location>=0){let nt=O[it];if(nt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(nt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(nt=V.instanceColor)),nt!==void 0){let st=nt.normalized,yt=nt.itemSize,mt=t.get(nt);if(mt===void 0)continue;let St=mt.buffer,Mt=mt.type,gt=mt.bytesPerElement,H=Mt===n.INT||Mt===n.UNSIGNED_INT||nt.gpuType===Za;if(nt.isInterleavedBufferAttribute){let tt=nt.data,_t=tt.stride,Ut=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt,tt.meshPerAttribute);V.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let dt=0;dt<W.locationSize;dt++)L(W.location+dt,yt/W.locationSize,Mt,st,_t*gt,(Ut+yt/W.locationSize*dt)*gt,H)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)p(W.location+tt,nt.meshPerAttribute);V.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<W.locationSize;tt++)m(W.location+tt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let tt=0;tt<W.locationSize;tt++)L(W.location+tt,yt/W.locationSize,Mt,st,yt*gt,yt/W.locationSize*tt*gt,H)}}else if(F!==void 0){let st=F[it];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(W.location,st);break;case 3:n.vertexAttrib3fv(W.location,st);break;case 4:n.vertexAttrib4fv(W.location,st);break;default:n.vertexAttrib1fv(W.location,st)}}}}A()}function E(){T();for(let V in i){let G=i[V];for(let N in G){let I=G[N];for(let O in I){let Y=I[O];for(let F in Y)f(Y[F].object),delete Y[F];delete I[O]}}delete i[V]}}function w(V){if(i[V.id]===void 0)return;let G=i[V.id];for(let N in G){let I=G[N];for(let O in I){let Y=I[O];for(let F in Y)f(Y[F].object),delete Y[F];delete I[O]}}delete i[V.id]}function C(V){for(let G in i){let N=i[G];for(let I in N){let O=N[I];if(O[V.id]===void 0)continue;let Y=O[V.id];for(let F in Y)f(Y[F].object),delete Y[F];delete O[V.id]}}}function _(V){for(let G in i){let N=i[G],I=V.isInstancedMesh===!0?V.id:0,O=N[I];if(O!==void 0){for(let Y in O){let F=O[Y];for(let it in F)f(F[it].object),delete F[it];delete O[Y]}delete N[I],Object.keys(N).length===0&&delete i[G]}}}function T(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Pg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),e.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mn&&C!==In&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Jt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:b,maxSamples:E,samples:w}}function Dg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new wn,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||s;return s=u,i=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{let A=r?0:i,L=A*4,b=p.clippingState||null;l.value=b,b=f(g,u,L,d);for(let E=0;E!==L;++E)b[E]=e[E];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,d,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=d+y*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let L=0,b=d;L!==y;++L,b+=4)a.copy(h[L]).applyMatrix4(A,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Ss=4,Ng=6,Ug=20,Fg=256,Sr=new fr,Ru=new re,mc=null,gc=0,_c=0,xc=!1,Og=new q,Vi=new q,Fo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Og}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=xc,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Pn,format:vn,colorSpace:qs,depthBuffer:!1},s=Iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bg(r)),this._blurMaterial=kg(r,t,e),this._ggxMaterial=zg(r,t,e)}return s}_compileMaterial(t){let e=new De(new en,t);this._renderer.compile(e,Sr)}_sceneToCubeUV(t,e,i,s,r){let l=new Je(90,1,e,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=Cn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new dn,new An({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,p=!0):(m.color.copy(Ru),p=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[L],r.y,r.z)):b===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[L]));let E=this._cubeSize;Ms(s,b*E,L>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(y,l),h.render(t,l)}h.toneMapping=d,h.autoClear=u,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===bi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Sr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Ss?i-g+Ss:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ms(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Sr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ms(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Sr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-Ss?s-this._lodMax+Ss:0),u=4*(this._cubeSize-f);Ms(e,h,u,3*f,2*f),a.setRenderTarget(e),a.render(l,Sr)}};function Bg(n){let t=[],e=[],i=n,s=n-Ss+1+Ng;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,g=new Float32Array(d*u*h),y=new Float32Array(d*u*h);for(let p=0;p<h;p++){let A=p%3*2/3-1,L=p>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];g.set(b,d*u*p);for(let E=0;E<u;E++){let w=f[E*2]*2-1,C=f[E*2+1]*2-1;p===0?Vi.set(1,C,w):p===1?Vi.set(-w,1,-C):p===2?Vi.set(-w,C,1):p===3?Vi.set(-1,C,-w):p===4?Vi.set(-w,-1,C):Vi.set(w,C,-1),Vi.toArray(y,(p*u+E)*d)}}let m=new en;m.setAttribute("position",new Oe(g,d)),m.setAttribute("outputDirection",new Oe(y,d)),e.push(new De(m,null)),i>Ss&&i--}return{lodMeshes:e,sizeLods:t}}function Iu(n,t,e){let i=new rn(n,t,e);return i.texture.mapping=pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zg(n,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function kg(n,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:Ug,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Pu(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Lu(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oo=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Wn});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Ue),new Ha(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Vg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===qa||d===Ya)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Oo(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===qa||d===Ya,y=d===bi||d===zi;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Fo(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let A=u.image;return g&&A&&A.height>0||y&&A&&l(A)?(i===null&&(i=new Fo(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===qa?u.mapping=bi:d===Ya&&(u.mapping=zi),u}function l(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Gg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ui("WebGLRenderer: "+i+" extension not supported."),s}}}function Hg(n,t,e,i){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(d!==null){let A=d.array;y=d.version;for(let L=0,b=A.length;L<b;L+=3){let E=A[L+0],w=A[L+1],C=A[L+2];u.push(E,w,w,C,C,E)}}else{let A=g.array;y=g.version;for(let L=0,b=A.length/3-1;L<b;L+=3){let E=L+0,w=L+1,C=L+2;u.push(E,w,w,C,C,E)}}let m=new(g.count>=65535?er:tr)(u,1);m.version=y;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Wg(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){n.drawElements(i,u,r,h*a),e.update(u,i,1)}function c(h,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,h*a,d),e.update(u,i,d))}function f(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Xg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qg(n,t,e){let i=new WeakMap,s=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==h){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],L=0;d===!0&&(L=1),g===!0&&(L=2),y===!0&&(L=3);let b=o.attributes.position.count*L,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*E*4*h),C=new Ks(w,b,E,h);C.type=In,C.needsUpdate=!0;let _=L*4;for(let D=0;D<h;D++){let V=m[D],G=p[D],N=A[D],I=b*E*4*D;for(let O=0;O<V.count;O++){let Y=O*_;d===!0&&(s.fromBufferAttribute(V,O),w[I+Y+0]=s.x,w[I+Y+1]=s.y,w[I+Y+2]=s.z,w[I+Y+3]=0),g===!0&&(s.fromBufferAttribute(G,O),w[I+Y+4]=s.x,w[I+Y+5]=s.y,w[I+Y+6]=s.z,w[I+Y+7]=0),y===!0&&(s.fromBufferAttribute(N,O),w[I+Y+8]=s.x,w[I+Y+9]=s.y,w[I+Y+10]=s.z,w[I+Y+11]=N.itemSize===4?s.w:1)}}u={count:h,texture:C,size:new ce(b,E)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Yg(n,t,e,i,s){let r=new WeakMap;function a(c){let f=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}var $g={[Gl]:"LINEAR_TONE_MAPPING",[Hl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[Xl]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function Zg(n,t,e,i,s,r){let a=new rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new en;c.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tn([0,2,0,0,2,0],2));let f=new Ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new De(c,f),u=new fr(-1,1,1,-1,0,1),d=null,g=null,y=!1,m,p=null,A=[],L=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let w=0;w<A.length;w++){let C=A[w];C.setSize&&C.setSize(b,E)}},this.setEffects=function(b){A=b,L=A.length>0&&A[0].isRenderPass===!0;let E=a.width,w=a.height;A.length>0&&o===null&&(o=new rn(E,w,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(E,w,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<A.length;C++){let _=A[C];_.setSize&&_.setSize(E,w)}},this.begin=function(b,E){if(y||b.toneMapping===Cn&&A.length===0)return!1;if(p=E,E!==null){let w=E.width,C=E.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return L===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Cn,!0},this.hasRenderPass=function(){return L},this.end=function(b,E){b.toneMapping=m,y=!0;let w=a,C=o;for(let _=0;_<A.length;_++){let T=A[_];T.enabled!==!1&&(T.render(b,C,w,E),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(d!==b.outputColorSpace||g!==b.toneMapping){d=b.outputColorSpace,g=b.toneMapping,f.defines={},he.getTransfer(d)===xe&&(f.defines.SRGB_TRANSFER="");let _=$g[g];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(h,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var ju=new qe,Mc=new xi(1,1),Qu=new Ks,tf=new ba,ef=new ar,Du=[],Nu=[],Uu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function ws(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ko(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function t0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Ou.set(i),n.uniformMatrix2fv(this.addr,!1,Ou),ze(e,i)}}function e0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),ze(e,i)}}function n0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Uu.set(i),n.uniformMatrix4fv(this.addr,!1,Uu),ze(e,i)}}function i0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function s0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function r0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function a0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function o0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function l0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function c0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function u0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mc.compareFunction=e.isReversedDepthBuffer()?Do:Lo,r=Mc):r=ju,e.setTexture2D(t||r,s)}function f0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tf,s)}function d0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ef,s)}function p0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qu,s)}function m0(n){switch(n){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(n,t){n.uniform1fv(this.addr,t)}function _0(n,t){let e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function x0(n,t){let e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function y0(n,t){let e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function v0(n,t){let e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function M0(n,t){let e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function S0(n,t){let e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function b0(n,t){n.uniform1iv(this.addr,t)}function w0(n,t){n.uniform2iv(this.addr,t)}function E0(n,t){n.uniform3iv(this.addr,t)}function T0(n,t){n.uniform4iv(this.addr,t)}function A0(n,t){n.uniform1uiv(this.addr,t)}function C0(n,t){n.uniform2uiv(this.addr,t)}function R0(n,t){n.uniform3uiv(this.addr,t)}function I0(n,t){n.uniform4uiv(this.addr,t)}function P0(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Mc:a=ju;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function L0(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||tf,r[a])}function D0(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ef,r[a])}function N0(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qu,r[a])}function U0(n){switch(n){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return y0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return b0;case 35667:case 35671:return w0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return C0;case 36295:return R0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}var Sc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}},bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}},wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},yc=/(\w+)(\])?(\[|\.)?/g;function Bu(n,t){n.seq.push(t),n.map[t.id]=t}function F0(n,t,e){let i=n.name,s=i.length;for(yc.lastIndex=0;;){let r=yc.exec(i),a=yc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bu(e,c===void 0?new Sc(o,n,t):new bc(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new wc(o),Bu(e,h)),e=h}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);F0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function zu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var O0=37297,B0=0;function z0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var ku=new ee;function k0(n){he._getMatrix(ku,he.workingColorSpace,n);let t=`mat3( ${ku.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Ys:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+z0(n.getShaderSource(t),o)}else return r}function V0(n,t){let e=k0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var G0={[Gl]:"Linear",[Hl]:"Reinhard",[Wl]:"Cineon",[Xl]:"ACESFilmic",[Yl]:"AgX",[$l]:"Neutral",[ql]:"Custom"};function H0(n,t){let e=G0[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uo=new q;function W0(){he.getLuminanceCoefficients(Uo);let n=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function q0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function wr(n){return n!==""}function Gu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace($0,J0)}var Z0=new Map;function J0(n,t){let e=ae[t];if(e===void 0){let i=Z0.get(t);if(i!==void 0)e=ae[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ec(e)}var K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(K0,j0)}function j0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Q0={[dr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function t_(n){return Q0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[bi]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function n_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":e_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[zi]:"ENVMAP_MODE_REFRACTION"};function s_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function a_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":r_[n.combine]||"ENVMAP_BLENDING_NONE"}function o_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function l_(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=t_(e),c=n_(e),f=s_(e),h=a_(e),u=o_(e),d=X0(e),g=q0(r),y=s.createProgram(),m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Cn?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),W0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=Ec(a),a=Gu(a,e),a=Hu(a,e),o=Ec(o),o=Gu(o,e),o=Hu(o,e),a=Wu(a),o=Wu(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let L=A+m+a,b=A+p+o,E=zu(s,s.VERTEX_SHADER,L),w=zu(s,s.FRAGMENT_SHADER,b);s.attachShader(y,E),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(V){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(w)||"",O=G.trim(),Y=N.trim(),F=I.trim(),it=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,E,w);else{let nt=Vu(s,E,"vertex"),st=Vu(s,w,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+O+`
`+nt+`
`+st)}else O!==""?Jt("WebGLProgram: Program Info Log:",O):(Y===""||F==="")&&(W=!1);W&&(V.diagnostics={runnable:it,programLog:O,vertexShader:{log:Y,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(E),s.deleteShader(w),_=new bs(s,y),T=Y0(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,O0)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}var c_=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ac(t),e.set(t,i)),i}},Ac=class{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}};function h_(n){return n===Ti||n===vr||n===Mr}function u_(n,t,e,i,s,r){let a=new js,o=new Tc,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,D,V,G,N){let I=V.fog,O=G.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?V.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||Y,F),W=it&&it.mapping===pr?it.image.height:null,nt=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Jt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,yt=st!==void 0?st.length:0,mt=0;O.morphAttributes.position!==void 0&&(mt=1),O.morphAttributes.normal!==void 0&&(mt=2),O.morphAttributes.color!==void 0&&(mt=3);let St,Mt,gt,H;if(nt){let ye=qn[nt];St=ye.vertexShader,Mt=ye.fragmentShader}else{St=_.vertexShader,Mt=_.fragmentShader;let ye=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,ye,de),gt=ye.id,H=de.id}let tt=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Ut=G.isInstancedMesh===!0,dt=G.isBatchedMesh===!0,Ft=!!_.map,jt=!!_.matcap,zt=!!it,$t=!!_.aoMap,Qt=!!_.lightMap,Bt=!!_.bumpMap&&_.wireframe===!1,te=!!_.normalMap,be=!!_.displacementMap,Te=!!_.emissiveMap,ge=!!_.metalnessMap,_e=!!_.roughnessMap,z=_.anisotropy>0,Ae=_.clearcoat>0,ue=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,X=_.sheen>0,K=_.transmission>0,ot=z&&!!_.anisotropyMap,at=Ae&&!!_.clearcoatMap,ft=Ae&&!!_.clearcoatNormalMap,lt=Ae&&!!_.clearcoatRoughnessMap,ut=x&&!!_.iridescenceMap,Et=x&&!!_.iridescenceThicknessMap,qt=X&&!!_.sheenColorMap,Rt=X&&!!_.sheenRoughnessMap,At=!!_.specularMap,Lt=!!_.specularColorMap,Zt=!!_.specularIntensityMap,ne=K&&!!_.transmissionMap,k=K&&!!_.thicknessMap,wt=!!_.gradientMap,ct=!!_.alphaMap,Ct=_.alphaTest>0,Nt=!!_.alphaHash,pt=!!_.extensions,Xt=Cn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let kt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:Mt,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:dt,batchingColor:dt&&G._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&G.instanceColor!==null,instancingMorph:Ut&&G.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:jt,envMap:zt,envMapMode:zt&&it.mapping,envMapCubeUVHeight:W,aoMap:$t,lightMap:Qt,bumpMap:Bt,normalMap:te,displacementMap:be,emissiveMap:Te,normalMapObjectSpace:te&&_.normalMapType===fu,normalMapTangentSpace:te&&_.normalMapType===ic,packedNormalMap:te&&_.normalMapType===ic&&h_(_.normalMap.format),metalnessMap:ge,roughnessMap:_e,anisotropy:z,anisotropyMap:ot,clearcoat:Ae,clearcoatMap:at,clearcoatNormalMap:ft,clearcoatRoughnessMap:lt,dispersion:ue,retroreflection:R,iridescence:x,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:qt,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:Lt,specularIntensityMap:Zt,transmission:K,transmissionMap:ne,thicknessMap:k,gradientMap:wt,opaque:_.transparent===!1&&_.blending===xs&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:Ct,alphaHash:Nt,combine:_.combine,mapUv:Ft&&g(_.map.channel),aoMapUv:$t&&g(_.aoMap.channel),lightMapUv:Qt&&g(_.lightMap.channel),bumpMapUv:Bt&&g(_.bumpMap.channel),normalMapUv:te&&g(_.normalMap.channel),displacementMapUv:be&&g(_.displacementMap.channel),emissiveMapUv:Te&&g(_.emissiveMap.channel),metalnessMapUv:ge&&g(_.metalnessMap.channel),roughnessMapUv:_e&&g(_.roughnessMap.channel),anisotropyMapUv:ot&&g(_.anisotropyMap.channel),clearcoatMapUv:at&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(_.sheenRoughnessMap.channel),specularMapUv:At&&g(_.specularMap.channel),specularColorMapUv:Lt&&g(_.specularColorMap.channel),specularIntensityMapUv:Zt&&g(_.specularIntensityMap.channel),transmissionMapUv:ne&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:ct&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(te||z),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(Ft||ct),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)T.push(D),T.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(T,_),A(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function A(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function L(_){let T=d[_.type],D;if(T){let V=qn[T];D=Tu.clone(V.uniforms)}else D=_.uniforms;return D}function b(_,T){let D=f.get(T);return D!==void 0?++D.usedTimes:(D=new l_(n,T,_,s),c.push(D),f.set(T,D)),D}function E(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:L,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function f_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function d_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,m,p){let A=n[t];return A===void 0?(A={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[t]=A):(A.id=u.id,A.object=u,A.geometry=d,A.material=g,A.materialVariant=a(u),A.groupOrder=y,A.renderOrder=u.renderOrder,A.z=m,A.group=p),t++,A}function l(u,d,g,y,m,p,A){A.reversedDepth===!0&&(m=-m);let L=o(u,d,g,y,m,p);g.transmission>0?i.push(L):g.transparent===!0?s.push(L):e.push(L)}function c(u,d,g,y,m,p){let A=o(u,d,g,y,m,p);g.transmission>0?i.unshift(A):g.transparent===!0?s.unshift(A):e.unshift(A)}function f(u,d){e.length>1&&e.sort(u||d_),i.length>1&&i.sort(d||qu),s.length>1&&s.sort(d||qu)}function h(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function p_(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Yu,n.set(i,[a])):s>=r.length?(a=new Yu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function m_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new re};break;case"SpotLight":e={position:new q,direction:new q,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function g_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var __=0;function x_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function y_(n){let t=new m_,e=g_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);let s=new q,r=new Ie,a=new Ie;function o(c){let f=0,h=0,u=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,A=0,L=0,b=0,E=0,w=0,C=0,_=0,T=0,D=0;c.sort(x_);for(let G=0,N=c.length;G<N;G++){let I=c[G],O=I.color,Y=I.intensity,F=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ti?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=O.r*Y,h+=O.g*Y,u+=O.b*Y;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],Y);D++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[g]=st,i.sunShadowMap[g]=it;let yt=nt.getViewportCount();for(let mt=0;mt<yt;mt++)i.sunShadowMatrix[y+mt]=nt.getMatrix(mt),i.sunShadowCascade[y+mt]=nt._cascadeData[mt];y+=yt,g++}i.sun[d]=W,d++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,i.directionalShadow[m]=st,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar(Y),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[A]=W;let nt=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,nt.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[A]=nt.matrix,I.castShadow){let st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,i.spotShadow[A]=st,i.spotShadowMap[A]=it,C++}A++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(O).multiplyScalar(Y),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[L]=W,L++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let nt=I.shadow,st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,i.pointShadow[p]=st,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=I.shadow.matrix,w++}i.point[p]=W,p++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(Y),W.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[b]=W,b++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let V=i.hash;(V.sunLength!==d||V.directionalLength!==m||V.pointLength!==p||V.spotLength!==A||V.rectAreaLength!==L||V.hemiLength!==b||V.numSunShadows!==g||V.numDirectionalShadows!==E||V.numPointShadows!==w||V.numSpotShadows!==C||V.numSpotMaps!==_||V.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=m,i.spot.length=A,i.rectArea.length=L,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,V.sunLength=d,V.directionalLength=m,V.pointLength=p,V.spotLength=A,V.rectAreaLength=L,V.hemiLength=b,V.numSunShadows=g,V.numDirectionalShadows=E,V.numPointShadows=w,V.numSpotShadows=C,V.numSpotMaps=_,V.numLightProbes=D,i.version=__++)}function l(c,f){let h=0,u=0,d=0,g=0,y=0,m=0,p=f.matrixWorldInverse;for(let A=0,L=c.length;A<L;A++){let b=c[A];if(b.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(b.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function $u(n){let t=new y_(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function f(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new $u(n),t.set(s,[o])):r>=a.length?(o=new $u(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b_=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],w_=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Zu=new Ie,br=new q,vc=new q;function E_(n,t,e){let i=new sr,s=new ce,r=new ce,a=new Pe,o=new Pa,l=new La,c={},f=e.maxTextureSize,h={[Si]:nn,[nn]:Si,[yn]:yn},u=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new De(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let p=this.type;this.render=function(w,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Hh&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let T=n.getRenderTarget(),D=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Wn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let N=p!==this.type;N&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=w.length;I<O;I++){let Y=w[I],F=Y.shadow;if(F===void 0){Jt("WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let it=F.getFrameExtents();s.multiply(it),r.copy(F.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/it.x),s.x=r.x*it.x,F.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/it.y),s.y=r.y*it.y,F.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||N===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===_s){if(Y.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new rn(s.x,s.y,{format:Ti,type:Pn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),F.map.texture.name=Y.name+".shadowMap",F.map.depthTexture=new xi(s.x,s.y,In),F.map.depthTexture.name=Y.name+".shadowMapDepth",F.map.depthTexture.format=kn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=He,F.map.depthTexture.magFilter=He}else Y.isPointLight?(F.map=new Oo(s.x),F.map.depthTexture=new Ra(s.x,Rn)):(F.map=new rn(s.x,s.y),F.map.depthTexture=new xi(s.x,s.y,Rn)),F.map.depthTexture.name=Y.name+".shadowMap",F.map.depthTexture.format=kn,this.type===dr?(F.map.depthTexture.compareFunction=W?Do:Lo,F.map.depthTexture.minFilter=Ue,F.map.depthTexture.magFilter=Ue):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=He,F.map.depthTexture.magFilter=He);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let nt=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Y.isPointLight!==!0&&F.updateMatrices(Y,_);for(let st=0;st<nt;st++){let yt=F.getCamera(st);if(Y.isPointLight){let mt=F.camera,St=F.matrix,Mt=Y.distance||mt.far;Mt!==mt.far&&(mt.far=Mt,mt.updateProjectionMatrix()),br.setFromMatrixPosition(Y.matrixWorld),mt.position.copy(br),vc.copy(mt.position),vc.add(b_[st]),mt.up.copy(w_[st]),mt.lookAt(vc),mt.updateMatrixWorld(),St.makeTranslation(-br.x,-br.y,-br.z),Zu.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Zu,mt.coordinateSystem,mt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,st),n.clear();else{st===0&&(n.setRenderTarget(F.map),n.clear());let mt=F.getViewport(st);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),G.viewport(a)}i=F.getFrustum(st),b(C,_,yt,Y,this.type)}F.isPointLightShadow!==!0&&this.type===_s&&A(F,_),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,D,V)};function A(w,C){let _=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(s.x,s.y,{format:Ti,type:Pn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,_,u,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,_,d,y,null)}function L(w,C,_,T){let D=null,V=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)D=V;else if(D=_.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let G=D.uuid,N=C.uuid,I=c[G];I===void 0&&(I={},c[G]=I);let O=I[N];O===void 0&&(O=D.clone(),I[N]=O,C.addEventListener("dispose",E)),D=O}if(D.visible=C.visible,D.wireframe=C.wireframe,T===_s?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:h[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=n.properties.get(D);G.light=_}return D}function b(w,C,_,T,D){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===_s)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let N=t.update(w),I=w.material;if(Array.isArray(I)){let O=N.groups;for(let Y=0,F=O.length;Y<F;Y++){let it=O[Y],W=I[it.materialIndex];if(W&&W.visible){let nt=L(w,W,T,D);w.onBeforeShadow(n,w,C,_,N,nt,it),n.renderBufferDirect(_,null,N,nt,w,it),w.onAfterShadow(n,w,C,_,N,nt,it)}}}else if(I.visible){let O=L(w,I,T,D);w.onBeforeShadow(n,w,C,_,N,O,null),n.renderBufferDirect(_,null,N,O,w,null),w.onAfterShadow(n,w,C,_,N,O,null)}}let G=w.children;for(let N=0,I=G.length;N<I;N++)b(G[N],C,_,T,D)}function E(w){w.target.removeEventListener("dispose",E);for(let _ in c){let T=c[_],D=w.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function T_(n,t){function e(){let k=!1,wt=new Pe,ct=null,Ct=new Pe(0,0,0,0);return{setMask:function(Nt){ct!==Nt&&!k&&(n.colorMask(Nt,Nt,Nt,Nt),ct=Nt)},setLocked:function(Nt){k=Nt},setClear:function(Nt,pt,Xt,kt,ye){ye===!0&&(Nt*=kt,pt*=kt,Xt*=kt),wt.set(Nt,pt,Xt,kt),Ct.equals(wt)===!1&&(n.clearColor(Nt,pt,Xt,kt),Ct.copy(wt))},reset:function(){k=!1,ct=null,Ct.set(-1,0,0,0)}}}function i(){let k=!1,wt=!1,ct=null,Ct=null,Nt=null;return{setReversed:function(pt){if(wt!==pt){let Xt=t.get("EXT_clip_control");pt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),wt=pt;let kt=Nt;Nt=null,this.setClear(kt)}},getReversed:function(){return wt},setTest:function(pt){pt?tt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(pt){ct!==pt&&!k&&(n.depthMask(pt),ct=pt)},setFunc:function(pt){if(wt&&(pt=bu[pt]),Ct!==pt){switch(pt){case ha:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case fa:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case da:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=pt}},setLocked:function(pt){k=pt},setClear:function(pt){Nt!==pt&&(Nt=pt,wt&&(pt=1-pt),n.clearDepth(pt))},reset:function(){k=!1,ct=null,Ct=null,Nt=null,wt=!1}}}function s(){let k=!1,wt=null,ct=null,Ct=null,Nt=null,pt=null,Xt=null,kt=null,ye=null;return{setTest:function(de){k||(de?tt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(de){wt!==de&&!k&&(n.stencilMask(de),wt=de)},setFunc:function(de,sn,gn){(ct!==de||Ct!==sn||Nt!==gn)&&(n.stencilFunc(de,sn,gn),ct=de,Ct=sn,Nt=gn)},setOp:function(de,sn,gn){(pt!==de||Xt!==sn||kt!==gn)&&(n.stencilOp(de,sn,gn),pt=de,Xt=sn,kt=gn)},setLocked:function(de){k=de},setClear:function(de){ye!==de&&(n.clearStencil(de),ye=de)},reset:function(){k=!1,wt=null,ct=null,Ct=null,Nt=null,pt=null,Xt=null,kt=null,ye=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,A=null,L=null,b=null,E=null,w=null,C=null,_=new re(0,0,0),T=0,D=!1,V=null,G=null,N=null,I=null,O=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,it=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=it>=2);let nt=null,st={},yt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),St=new Pe().fromArray(yt),Mt=new Pe().fromArray(mt);function gt(k,wt,ct,Ct){let Nt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(k,pt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<ct;Xt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,Nt):n.texImage2D(wt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Nt);return pt}let H={};H[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(fs),Bt(!1),te(Ul),tt(n.CULL_FACE),$t(Wn);function tt(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function _t(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function Ut(k,wt){return u[k]!==wt?(n.bindFramebuffer(k,wt),u[k]=wt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=wt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function dt(k,wt){let ct=g,Ct=!1;if(k){ct=d.get(wt),ct===void 0&&(ct=[],d.set(wt,ct));let Nt=k.textures;if(ct.length!==Nt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Xt=Nt.length;pt<Xt;pt++)ct[pt]=n.COLOR_ATTACHMENT0+pt;ct.length=Nt.length,Ct=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(ct)}function Ft(k){return y!==k?(n.useProgram(k),y=k,!0):!1}let jt={[Bi]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[qh]:n.FUNC_REVERSE_SUBTRACT};jt[Yh]=n.MIN,jt[$h]=n.MAX;let zt={[Zh]:n.ZERO,[Jh]:n.ONE,[Kh]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[iu]:n.SRC_ALPHA_SATURATE,[eu]:n.DST_COLOR,[Qh]:n.DST_ALPHA,[jh]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[nu]:n.ONE_MINUS_DST_COLOR,[tu]:n.ONE_MINUS_DST_ALPHA,[su]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[au]:n.CONSTANT_ALPHA,[ou]:n.ONE_MINUS_CONSTANT_ALPHA};function $t(k,wt,ct,Ct,Nt,pt,Xt,kt,ye,de){if(k===Wn){m===!0&&(_t(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),k!==Wh){if(k!==p||de!==D){if((A!==Bi||E!==Bi)&&(n.blendEquation(n.FUNC_ADD),A=Bi,E=Bi),de)switch(k){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFunc(n.ONE,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Kt("WebGLState: Invalid blending: ",k);break}else switch(k){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ol:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",k);break}L=null,b=null,w=null,C=null,_.set(0,0,0),T=0,p=k,D=de}return}Nt=Nt||wt,pt=pt||ct,Xt=Xt||Ct,(wt!==A||Nt!==E)&&(n.blendEquationSeparate(jt[wt],jt[Nt]),A=wt,E=Nt),(ct!==L||Ct!==b||pt!==w||Xt!==C)&&(n.blendFuncSeparate(zt[ct],zt[Ct],zt[pt],zt[Xt]),L=ct,b=Ct,w=pt,C=Xt),(kt.equals(_)===!1||ye!==T)&&(n.blendColor(kt.r,kt.g,kt.b,ye),_.copy(kt),T=ye),p=k,D=!1}function Qt(k,wt){k.side===yn?_t(n.CULL_FACE):tt(n.CULL_FACE);let ct=k.side===nn;wt&&(ct=!ct),Bt(ct),k.blending===xs&&k.transparent===!1?$t(Wn):$t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ct=k.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(k){V!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),V=k)}function te(k){k!==Vh?(tt(n.CULL_FACE),k!==G&&(k===Ul?n.cullFace(n.BACK):k===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),G=k}function be(k){k!==N&&(F&&n.lineWidth(k),N=k)}function Te(k,wt,ct){k?(tt(n.POLYGON_OFFSET_FILL),(I!==wt||O!==ct)&&(I=wt,O=ct,a.getReversed()&&(wt=-wt),n.polygonOffset(wt,ct))):_t(n.POLYGON_OFFSET_FILL)}function ge(k){k?tt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function _e(k){k===void 0&&(k=n.TEXTURE0+Y-1),nt!==k&&(n.activeTexture(k),nt=k)}function z(k,wt,ct){ct===void 0&&(nt===null?ct=n.TEXTURE0+Y-1:ct=nt);let Ct=st[ct];Ct===void 0&&(Ct={type:void 0,texture:void 0},st[ct]=Ct),(Ct.type!==k||Ct.texture!==wt)&&(nt!==ct&&(n.activeTexture(ct),nt=ct),n.bindTexture(k,wt||H[k]),Ct.type=k,Ct.texture=wt)}function Ae(){let k=st[nt];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function x(){try{n.texSubImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function X(){try{n.texSubImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function ot(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function at(){try{n.texStorage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function ft(){try{n.texStorage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function lt(){try{n.texImage2D(...arguments)}catch(k){Kt("WebGLState:",k)}}function ut(){try{n.texImage3D(...arguments)}catch(k){Kt("WebGLState:",k)}}function Et(k){return h[k]!==void 0?h[k]:n.getParameter(k)}function qt(k,wt){h[k]!==wt&&(n.pixelStorei(k,wt),h[k]=wt)}function Rt(k){St.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function At(k){Mt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Mt.copy(k))}function Lt(k,wt){let ct=c.get(wt);ct===void 0&&(ct=new WeakMap,c.set(wt,ct));let Ct=ct.get(k);Ct===void 0&&(Ct=n.getUniformBlockIndex(wt,k.name),ct.set(k,Ct))}function Zt(k,wt){let Ct=c.get(wt).get(k);l.get(wt)!==Ct&&(n.uniformBlockBinding(wt,Ct,k.__bindingPointIndex),l.set(wt,Ct))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},nt=null,st={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,A=null,L=null,b=null,E=null,w=null,C=null,_=new re(0,0,0),T=0,D=!1,V=null,G=null,N=null,I=null,O=null,St.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Ut,drawBuffers:dt,useProgram:Ft,setBlending:$t,setMaterial:Qt,setFlipSided:Bt,setCullFace:te,setLineWidth:be,setPolygonOffset:Te,setScissorTest:ge,activeTexture:_e,bindTexture:z,unbindTexture:Ae,compressedTexImage2D:ue,compressedTexImage3D:R,texImage2D:lt,texImage3D:ut,pixelStorei:qt,getParameter:Et,updateUBOMapping:Lt,uniformBlockBinding:Zt,texStorage2D:at,texStorage3D:ft,texSubImage2D:x,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:ot,scissor:Rt,viewport:At,reset:ne}}function A_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,f=new WeakMap,h=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,x){return g?new OffscreenCanvas(R,x):Zs("canvas")}function m(R,x,X){let K=1,ot=ue(R);if((ot.width>X||ot.height>X)&&(K=X/Math.max(ot.width,ot.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(K*ot.width),ft=Math.floor(K*ot.height);u===void 0&&(u=y(at,ft));let lt=x?y(at,ft):u;return lt.width=at,lt.height=ft,lt.getContext("2d").drawImage(R,0,0,at,ft),Jt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+at+"x"+ft+")."),lt}else return"data"in R&&Jt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function p(R){return R.generateMipmaps}function A(R){n.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,X,K,ot,at=!1){if(R!==null){if(n[R]!==void 0)return n[R];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ft;K&&(ft=t.get("EXT_texture_norm16"),ft||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=x;if(x===n.RED&&(X===n.FLOAT&&(lt=n.R32F),X===n.HALF_FLOAT&&(lt=n.R16F),X===n.UNSIGNED_BYTE&&(lt=n.R8),X===n.UNSIGNED_SHORT&&ft&&(lt=ft.R16_EXT),X===n.SHORT&&ft&&(lt=ft.R16_SNORM_EXT)),x===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.R8UI),X===n.UNSIGNED_SHORT&&(lt=n.R16UI),X===n.UNSIGNED_INT&&(lt=n.R32UI),X===n.BYTE&&(lt=n.R8I),X===n.SHORT&&(lt=n.R16I),X===n.INT&&(lt=n.R32I)),x===n.RG&&(X===n.FLOAT&&(lt=n.RG32F),X===n.HALF_FLOAT&&(lt=n.RG16F),X===n.UNSIGNED_BYTE&&(lt=n.RG8),X===n.UNSIGNED_SHORT&&ft&&(lt=ft.RG16_EXT),X===n.SHORT&&ft&&(lt=ft.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RG8UI),X===n.UNSIGNED_SHORT&&(lt=n.RG16UI),X===n.UNSIGNED_INT&&(lt=n.RG32UI),X===n.BYTE&&(lt=n.RG8I),X===n.SHORT&&(lt=n.RG16I),X===n.INT&&(lt=n.RG32I)),x===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),X===n.UNSIGNED_INT&&(lt=n.RGB32UI),X===n.BYTE&&(lt=n.RGB8I),X===n.SHORT&&(lt=n.RGB16I),X===n.INT&&(lt=n.RGB32I)),x===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),X===n.UNSIGNED_INT&&(lt=n.RGBA32UI),X===n.BYTE&&(lt=n.RGBA8I),X===n.SHORT&&(lt=n.RGBA16I),X===n.INT&&(lt=n.RGBA32I)),x===n.RGB&&(X===n.UNSIGNED_SHORT&&ft&&(lt=ft.RGB16_EXT),X===n.SHORT&&ft&&(lt=ft.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),x===n.RGBA){let ut=at?Ys:he.getTransfer(ot);X===n.FLOAT&&(lt=n.RGBA32F),X===n.HALF_FLOAT&&(lt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(lt=ut===xe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&ft&&(lt=ft.RGBA16_EXT),X===n.SHORT&&ft&&(lt=ft.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function E(R,x){let X;return R?x===null||x===Rn||x===vs?X=n.DEPTH24_STENCIL8:x===In?X=n.DEPTH32F_STENCIL8:x===ys&&(X=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===vs?X=n.DEPTH_COMPONENT24:x===In?X=n.DEPTH_COMPONENT32F:x===ys&&(X=n.DEPTH_COMPONENT16),X}function w(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==He&&R.minFilter!==Ue?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){let x=R.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),V(x)}function T(R){let x=i.get(R);if(x.__webglInit===void 0)return;let X=R.source,K=d.get(X);if(K){let ot=K[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&D(R),Object.keys(K).length===0&&d.delete(X)}i.remove(R)}function D(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let X=R.source,K=d.get(X);delete K[x.__cacheKey],a.memory.textures--}function V(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ot=0;ot<x.__webglFramebuffer[K].length;ot++)n.deleteFramebuffer(x.__webglFramebuffer[K][ot]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=R.textures;for(let K=0,ot=X.length;K<ot;K++){let at=i.get(X[K]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(X[K])}i.remove(R)}let G=0;function N(){G=0}function I(){return G}function O(R){G=R}function Y(){let R=G;return R>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,R}function F(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function it(R,x){let X=i.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let K=R.image;if(K===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(X,R,x);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+x)}function W(R,x){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){_t(X,R,x);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+x)}function nt(R,x){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){_t(X,R,x);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+x)}function st(R,x){let X=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Ut(X,R,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+x)}let yt={[_a]:n.REPEAT,[zn]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},mt={[He]:n.NEAREST,[hu]:n.NEAREST_MIPMAP_NEAREST,[mr]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},St={[pu]:n.NEVER,[yu]:n.ALWAYS,[mu]:n.LESS,[Lo]:n.LEQUAL,[gu]:n.EQUAL,[Do]:n.GEQUAL,[_u]:n.GREATER,[xu]:n.NOTEQUAL};function Mt(R,x){if(x.type===In&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ue||x.magFilter===$a||x.magFilter===mr||x.magFilter===wi||x.minFilter===Ue||x.minFilter===$a||x.minFilter===mr||x.minFilter===wi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,yt[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,yt[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,yt[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==mr&&x.minFilter!==wi||x.type===In&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function gt(R,x){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));let K=x.source,ot=d.get(K);ot===void 0&&(ot={},d.set(K,ot));let at=F(x);if(at!==R.__cacheKey){ot[at]===void 0&&(ot[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ot[at].usedTimes++;let ft=ot[R.__cacheKey];ft!==void 0&&(ot[R.__cacheKey].usedTimes--,ft.usedTimes===0&&D(x)),R.__cacheKey=at,R.__webglTexture=ot[at].texture}return X}function H(R,x,X){return Math.floor(Math.floor(R/X)/x)}function tt(R,x,X,K){let at=R.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,X,K,x.data);else{at.sort((qt,Rt)=>qt.start-Rt.start);let ft=0;for(let qt=1;qt<at.length;qt++){let Rt=at[ft],At=at[qt],Lt=Rt.start+Rt.count,Zt=H(At.start,x.width,4),ne=H(Rt.start,x.width,4);At.start<=Lt+1&&Zt===ne&&H(At.start+At.count-1,x.width,4)===Zt?Rt.count=Math.max(Rt.count,At.start+At.count-Rt.start):(++ft,at[ft]=At)}at.length=ft+1;let lt=e.getParameter(n.UNPACK_ROW_LENGTH),ut=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let qt=0,Rt=at.length;qt<Rt;qt++){let At=at[qt],Lt=Math.floor(At.start/4),Zt=Math.ceil(At.count/4),ne=Lt%x.width,k=Math.floor(Lt/x.width),wt=Zt,ct=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,ne,k,wt,ct,X,K,x.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,lt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function _t(R,x,X){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let ot=gt(R,x),at=x.source;e.bindTexture(K,R.__webglTexture,n.TEXTURE0+X);let ft=i.get(at);if(at.version!==ft.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ct=he.getPrimaries(he.workingColorSpace),Ct=x.colorSpace===ii?null:he.getPrimaries(x.colorSpace),Nt=x.colorSpace===ii||ct===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ut=m(x.image,!1,s.maxTextureSize);ut=Ae(x,ut);let Et=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),Rt=b(x.internalFormat,Et,qt,x.normalized,x.colorSpace,x.isVideoTexture);Mt(K,x);let At,Lt=x.mipmaps,Zt=x.isVideoTexture!==!0,ne=ft.__version===void 0||ot===!0,k=at.dataReady,wt=w(x,ut);if(x.isDepthTexture)Rt=E(x.format===Ei,x.type),ne&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Rt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Rt,ut.width,ut.height,0,Et,qt,null));else if(x.isDataTexture)if(Lt.length>0){Zt&&ne&&e.texStorage2D(n.TEXTURE_2D,wt,Rt,Lt[0].width,Lt[0].height);for(let ct=0,Ct=Lt.length;ct<Ct;ct++)At=Lt[ct],Zt?k&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,At.width,At.height,Et,qt,At.data):e.texImage2D(n.TEXTURE_2D,ct,Rt,At.width,At.height,0,Et,qt,At.data);x.generateMipmaps=!1}else Zt?(ne&&e.texStorage2D(n.TEXTURE_2D,wt,Rt,ut.width,ut.height),k&&tt(x,ut,Et,qt)):e.texImage2D(n.TEXTURE_2D,0,Rt,ut.width,ut.height,0,Et,qt,ut.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Rt,Lt[0].width,Lt[0].height,ut.depth);for(let ct=0,Ct=Lt.length;ct<Ct;ct++)if(At=Lt[ct],x.format!==vn)if(Et!==null)if(Zt){if(k)if(x.layerUpdates.size>0){let Nt=cc(At.width,At.height,x.format,x.type);for(let pt of x.layerUpdates){let Xt=At.data.subarray(pt*Nt/At.data.BYTES_PER_ELEMENT,(pt+1)*Nt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,pt,At.width,At.height,1,Et,Xt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,At.width,At.height,ut.depth,Et,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Rt,At.width,At.height,ut.depth,0,At.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,At.width,At.height,ut.depth,Et,qt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Rt,At.width,At.height,ut.depth,0,Et,qt,At.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Zt&&ne&&e.texStorage2D(n.TEXTURE_2D,wt,Rt,Lt[0].width,Lt[0].height);for(let ct=0,Ct=Lt.length;ct<Ct;ct++)At=Lt[ct],x.format!==vn?Et!==null?Zt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Rt,At.width,At.height,0,At.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,At.width,At.height,Et,qt,At.data):e.texImage2D(n.TEXTURE_2D,ct,Rt,At.width,At.height,0,Et,qt,At.data)}else if(x.isDataArrayTexture)if(Zt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Rt,ut.width,ut.height,ut.depth),k)if(x.layerUpdates.size>0){let ct=cc(ut.width,ut.height,x.format,x.type);for(let Ct of x.layerUpdates){let Nt=ut.data.subarray(Ct*ct/ut.data.BYTES_PER_ELEMENT,(Ct+1)*ct/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,ut.width,ut.height,1,Et,qt,Nt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,qt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,ut.width,ut.height,ut.depth,0,Et,qt,ut.data);else if(x.isData3DTexture)Zt?(ne&&e.texStorage3D(n.TEXTURE_3D,wt,Rt,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,qt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,ut.width,ut.height,ut.depth,0,Et,qt,ut.data);else if(x.isFramebufferTexture){if(ne)if(Zt)e.texStorage2D(n.TEXTURE_2D,wt,Rt,ut.width,ut.height);else{let ct=ut.width,Ct=ut.height;for(let Nt=0;Nt<wt;Nt++)e.texImage2D(n.TEXTURE_2D,Nt,Rt,ct,Ct,0,Et,qt,null),ct>>=1,Ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let ct=n.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ut.parentNode!==ct){ct.appendChild(ut),h.add(x),ct.onpaint=Ct=>{let Nt=Ct.changedElements;for(let pt of h)Nt.includes(pt.image)&&(pt.needsUpdate=!0)},ct.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ut);else{let Nt=n.RGBA,pt=n.RGBA,Xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Nt,pt,Xt,ut)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Zt&&ne){let ct=ue(Lt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Rt,ct.width,ct.height)}for(let ct=0,Ct=Lt.length;ct<Ct;ct++)At=Lt[ct],Zt?k&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Et,qt,At):e.texImage2D(n.TEXTURE_2D,ct,Rt,Et,qt,At);x.generateMipmaps=!1}else if(Zt){if(ne){let ct=ue(ut);e.texStorage2D(n.TEXTURE_2D,wt,Rt,ct.width,ct.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,qt,ut)}else e.texImage2D(n.TEXTURE_2D,0,Rt,Et,qt,ut);p(x)&&A(K),ft.__version=at.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ut(R,x,X){if(x.image.length!==6)return;let K=gt(R,x),ot=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);let at=i.get(ot);if(ot.version!==at.__version||K===!0){e.activeTexture(n.TEXTURE0+X);let ft=he.getPrimaries(he.workingColorSpace),lt=x.colorSpace===ii?null:he.getPrimaries(x.colorSpace),ut=x.colorSpace===ii||ft===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,qt=x.image[0]&&x.image[0].isDataTexture,Rt=[];for(let pt=0;pt<6;pt++)!Et&&!qt?Rt[pt]=m(x.image[pt],!0,s.maxCubemapSize):Rt[pt]=qt?x.image[pt].image:x.image[pt],Rt[pt]=Ae(x,Rt[pt]);let At=Rt[0],Lt=r.convert(x.format,x.colorSpace),Zt=r.convert(x.type),ne=b(x.internalFormat,Lt,Zt,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,wt=at.__version===void 0||K===!0,ct=ot.dataReady,Ct=w(x,At);Mt(n.TEXTURE_CUBE_MAP,x);let Nt;if(Et){k&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ne,At.width,At.height);for(let pt=0;pt<6;pt++){Nt=Rt[pt].mipmaps;for(let Xt=0;Xt<Nt.length;Xt++){let kt=Nt[Xt];x.format!==vn?Lt!==null?k?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,0,0,kt.width,kt.height,Lt,kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,ne,kt.width,kt.height,0,kt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,0,0,kt.width,kt.height,Lt,Zt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,ne,kt.width,kt.height,0,Lt,Zt,kt.data)}}}else{if(Nt=x.mipmaps,k&&wt){Nt.length>0&&Ct++;let pt=ue(Rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ne,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(qt){k?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Rt[pt].width,Rt[pt].height,Lt,Zt,Rt[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ne,Rt[pt].width,Rt[pt].height,0,Lt,Zt,Rt[pt].data);for(let Xt=0;Xt<Nt.length;Xt++){let ye=Nt[Xt].image[pt].image;k?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,0,0,ye.width,ye.height,Lt,Zt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,ne,ye.width,ye.height,0,Lt,Zt,ye.data)}}else{k?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Lt,Zt,Rt[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ne,Lt,Zt,Rt[pt]);for(let Xt=0;Xt<Nt.length;Xt++){let kt=Nt[Xt];k?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,0,0,Lt,Zt,kt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,ne,Lt,Zt,kt.image[pt])}}}p(x)&&A(n.TEXTURE_CUBE_MAP),at.__version=ot.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function dt(R,x,X,K,ot,at){let ft=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),ut=b(X.internalFormat,ft,lt,X.normalized,X.colorSpace),Et=i.get(x),qt=i.get(X);if(qt.__renderTarget=x,!Et.__hasExternalTextures){let Rt=Math.max(1,x.width>>at),At=Math.max(1,x.height>>at);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,at,ut,Rt,At,x.depth,0,ft,lt,null):e.texImage2D(ot,at,ut,Rt,At,0,ft,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ot,qt.__webglTexture,0,ge(x)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ot,qt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,x,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let K=x.depthTexture,ot=K&&K.isDepthTexture?K.type:null,at=E(x.stencilBuffer,ot),ft=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(x),at,x.width,x.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(x),at,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,at,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,R)}else{let K=x.textures;for(let ot=0;ot<K.length;ot++){let at=K[ot],ft=r.convert(at.format,at.colorSpace),lt=r.convert(at.type),ut=b(at.internalFormat,ft,lt,at.normalized,at.colorSpace);_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(x),ut,x.width,x.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(x),ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(R,x,X){let K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(x.depthTexture);if(ot.__renderTarget=x,(!ot.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),ot.__webglTexture===void 0){ot.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,x.depthTexture);let Et=r.convert(x.depthTexture.format),qt=r.convert(x.depthTexture.type),Rt;x.depthTexture.format===kn?Rt=n.DEPTH_COMPONENT24:x.depthTexture.format===Ei&&(Rt=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Rt,x.width,x.height,0,Et,qt,null)}}else it(x.depthTexture,0);let at=ot.__webglTexture,ft=ge(x),lt=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ut=x.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,lt,at,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,ut,lt,at,0);else if(x.depthTexture.format===Ei)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,lt,at,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,ut,lt,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(R){let x=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",ot)};K.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=K}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)jt(x.__webglFramebuffer[K],R,K);else{let K=R.texture.mipmaps;K&&K.length>0?jt(x.__webglFramebuffer[0],R,0):jt(x.__webglFramebuffer,R,0)}else if(X){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),Ft(x.__webglDepthbuffer[K],R,!1);else{let ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,at)}}else{let K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ft(x.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(R,x,X){let K=i.get(R);x!==void 0&&dt(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&zt(R)}function Qt(R){let x=R.texture,X=i.get(R),K=i.get(x);R.addEventListener("dispose",_);let ot=R.textures,at=R.isWebGLCubeRenderTarget===!0,ft=ot.length>1;if(ft||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,a.memory.textures++),at){X.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[lt]=[];for(let ut=0;ut<x.mipmaps.length;ut++)X.__webglFramebuffer[lt][ut]=n.createFramebuffer()}else X.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)X.__webglFramebuffer[lt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ft)for(let lt=0,ut=ot.length;lt<ut;lt++){let Et=i.get(ot[lt]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let lt=0;lt<ot.length;lt++){let ut=ot[lt];X.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[lt]);let Et=r.convert(ut.format,ut.colorSpace),qt=r.convert(ut.type),Rt=b(ut.internalFormat,Et,qt,ut.normalized,ut.colorSpace,R.isXRRenderTarget===!0),At=ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Rt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,X.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)dt(X.__webglFramebuffer[lt][ut],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else dt(X.__webglFramebuffer[lt],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(x)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let lt=0,ut=ot.length;lt<ut;lt++){let Et=ot[lt],qt=i.get(Et),Rt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Rt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Rt,qt.__webglTexture),Mt(Rt,Et),dt(X.__webglFramebuffer,R,Et,n.COLOR_ATTACHMENT0+lt,Rt,0),p(Et)&&A(Rt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),Mt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)dt(X.__webglFramebuffer[ut],R,x,n.COLOR_ATTACHMENT0,lt,ut);else dt(X.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,lt,0);p(x)&&A(lt),e.unbindTexture()}R.depthBuffer&&zt(R)}function Bt(R){let x=R.textures;for(let X=0,K=x.length;X<K;X++){let ot=x[X];if(p(ot)){let at=L(R),ft=i.get(ot).__webglTexture;e.bindTexture(at,ft),A(at),e.unbindTexture()}}}let te=[],be=[];function Te(R){if(R.samples>0){if(_e(R)===!1){let x=R.textures,X=R.width,K=R.height,ot=n.COLOR_BUFFER_BIT,at=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(R),lt=x.length>1;if(lt)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let ut=R.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Et]);let qt=i.get(x[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,X,K,0,0,X,K,ot,n.NEAREST),l===!0&&(te.length=0,be.length=0,te.push(n.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(te.push(at),be.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Et]);let qt=i.get(x[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ge(R){return Math.min(s.maxSamples,R.samples)}function _e(R){let x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(R){let x=a.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function Ae(R,x){let X=R.colorSpace,K=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==qs&&X!==ii&&(he.getTransfer(X)===xe?(K!==vn||ot!==mn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",X)),x}function ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=$t,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function C_(n,t){function e(i,s=ii){let r,a=he.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===Ja)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ql)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jl)return n.BYTE;if(i===Kl)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Za)return n.INT;if(i===Rn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===tc)return n.ALPHA;if(i===ec)return n.RGB;if(i===vn)return n.RGBA;if(i===kn)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===nc)return n.RED;if(i===ja)return n.RED_INTEGER;if(i===Ti)return n.RG;if(i===Qa)return n.RG_INTEGER;if(i===to)return n.RGBA_INTEGER;if(i===gr||i===_r||i===xr||i===yr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eo||i===no||i===io||i===so)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ro||i===ao||i===oo||i===lo||i===co||i===vr||i===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ro||i===ao)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lo)return r.COMPRESSED_R11_EAC;if(i===co)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vr)return r.COMPRESSED_RG11_EAC;if(i===ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===yo||i===vo||i===Mo||i===So||i===bo||i===wo||i===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===po)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===So)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===Ao||i===Co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ro||i===Io||i===Mr||i===Po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ke({vertexShader:R_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends Vn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new Cc,p={},A=e.getContextAttributes(),L=null,b=null,E=[],w=[],C=new ce,_=null,T=null,D=new Je;D.viewport=new Pe;let V=new Je;V.viewport=new Pe;let G=[D,V],N=new Wa,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let tt=E[H];return tt===void 0&&(tt=new ms,E[H]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(H){let tt=E[H];return tt===void 0&&(tt=new ms,E[H]=tt),tt.getGripSpace()},this.getHand=function(H){let tt=E[H];return tt===void 0&&(tt=new ms,E[H]=tt),tt.getHandSpace()};function Y(H){let tt=w.indexOf(H.inputSource);if(tt===-1)return;let _t=E[tt];_t!==void 0&&(_t.update(H.inputSource,H.frame,c||a),_t.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",it);for(let H=0;H<E.length;H++){let tt=w[H];tt!==null&&(w[H]=null,E[H].disconnect(tt))}I=null,O=null,m.reset();for(let H in p)delete p[H];if(t.setRenderTarget(L),d=null,u=null,h=null,s=null,b=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),T!==null){let H=T.camera;H.fov=T.fov,H.zoom=T.zoom,H.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",F),s.addEventListener("inputsourceschange",it),A.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ut=null,dt=null;A.depth&&(dt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=A.stencil?Ei:kn,Ut=A.stencil?vs:Rn);let Ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new rn(u.textureWidth,u.textureHeight,{format:vn,type:mn,depthTexture:new xi(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new rn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(H){for(let tt=0;tt<H.removed.length;tt++){let _t=H.removed[tt],Ut=w.indexOf(_t);Ut>=0&&(w[Ut]=null,E[Ut].disconnect(_t))}for(let tt=0;tt<H.added.length;tt++){let _t=H.added[tt],Ut=w.indexOf(_t);if(Ut===-1){for(let Ft=0;Ft<E.length;Ft++)if(Ft>=w.length){w.push(_t),Ut=Ft;break}else if(w[Ft]===null){w[Ft]=_t,Ut=Ft;break}if(Ut===-1)break}let dt=E[Ut];dt&&dt.connect(_t)}}let W=new q,nt=new q;function st(H,tt,_t){W.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(_t.matrixWorld);let Ut=W.distanceTo(nt),dt=tt.projectionMatrix.elements,Ft=_t.projectionMatrix.elements,jt=dt[14]/(dt[10]-1),zt=dt[14]/(dt[10]+1),$t=(dt[9]+1)/dt[5],Qt=(dt[9]-1)/dt[5],Bt=(dt[8]-1)/dt[0],te=(Ft[8]+1)/Ft[0],be=jt*Bt,Te=jt*te,ge=Ut/(-Bt+te),_e=ge*-Bt;if(tt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_e),H.translateZ(ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),dt[10]===-1)H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let z=jt+ge,Ae=zt+ge,ue=be-_e,R=Te+(Ut-_e),x=$t*zt/Ae*z,X=Qt*zt/Ae*z;H.projectionMatrix.makePerspective(ue,R,x,X,z,Ae),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function yt(H,tt){tt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(tt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let tt=H.near,_t=H.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),N.near=V.near=D.near=tt,N.far=V.far=D.far=_t,(I!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,O=N.far),N.layers.mask=H.layers.mask|6,D.layers.mask=N.layers.mask&-5,V.layers.mask=N.layers.mask&-3;let Ut=H.parent,dt=N.cameras;yt(N,Ut);for(let Ft=0;Ft<dt.length;Ft++)yt(dt[Ft],Ut);dt.length===2?st(N,D,V):N.projectionMatrix.copy(D.projectionMatrix),T===null&&H.isPerspectiveCamera&&(T={camera:H,fov:H.fov,zoom:H.zoom}),mt(H,N,Ut)};function mt(H,tt,_t){_t===null?H.matrix.copy(tt.matrixWorld):(H.matrix.copy(_t.matrixWorld),H.matrix.invert(),H.matrix.multiply(tt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=va*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(H){return p[H]};let St=null;function Mt(H,tt){if(f=tt.getViewerPose(c||a),g=tt,f!==null){let _t=f.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Ut=!1;_t.length!==N.cameras.length&&(N.cameras.length=0,Ut=!0);for(let zt=0;zt<_t.length;zt++){let $t=_t[zt],Qt=null;if(d!==null)Qt=d.getViewport($t);else{let te=h.getViewSubImage(u,$t);Qt=te.viewport,zt===0&&(t.setRenderTargetTextures(b,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(b))}let Bt=G[zt];Bt===void 0&&(Bt=new Je,Bt.layers.enable(zt),Bt.viewport=new Pe,G[zt]=Bt),Bt.matrix.fromArray($t.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray($t.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),zt===0&&(N.matrix.copy(Bt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ut===!0&&N.cameras.push(Bt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let zt=h.getDepthInformation(_t[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let zt=0;zt<_t.length;zt++){let $t=_t[zt].camera;if($t){let Qt=p[$t];Qt||(Qt=new or,p[$t]=Qt);let Bt=h.getCameraImage($t);Qt.sourceTexture=Bt}}}}for(let _t=0;_t<E.length;_t++){let Ut=w[_t],dt=E[_t];Ut!==null&&dt!==void 0&&dt.update(Ut,tt,c||a)}St&&St(H,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let gt=new Ju;gt.setAnimationLoop(Mt),this.setAnimationLoop=function(H){St=H},this.dispose=function(){}}},P_=new Ie,nf=new ee;nf.set(-1,0,0,0,1,0,0,0,1);function L_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ac(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,L,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,L):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=t.get(p),L=A.envMap,b=A.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=L*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function D_(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){let w=E.program;i.uniformBlockBinding(b,w)}function c(b,E){let w=s[b.id];w===void 0&&(m(b),w=f(b),s[b.id]=w,b.addEventListener("dispose",A));let C=E.program;i.updateUBOMapping(b,C);let _=t.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function f(b){let E=h();b.__bindingPointIndex=E;let w=n.createBuffer(),C=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let E=s[b.id],w=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,T=w.length;_<T;_++){let D=w[_];if(Array.isArray(D))for(let V=0,G=D.length;V<G;V++)d(D[V],_,V,C);else d(D,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,E,w,C){if(y(b,E,w,C)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let D=0;for(let V=0;V<T.length;V++){let G=T[V],N=p(G);g(G,b.__data,D),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(D+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function g(b,E,w){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,w)}function y(b,E,w,C){let _=b.value,T=E+"_"+w;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let D=C[T];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function m(b){let E=b.uniforms,w=0,C=16;for(let T=0,D=E.length;T<D;T++){let V=Array.isArray(E[T])?E[T]:[E[T]];for(let G=0,N=V.length;G<N;G++){let I=V[G],O=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,F=O.length;Y<F;Y++){let it=O[Y],W=p(it),nt=w%C,st=nt%W.boundary,yt=nt+st;w+=st,yt!==0&&C-yt<W.storage&&(w+=C-yt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=W.storage}}}let _=w%C;return _>0&&(w+=C-_),b.__size=w,b.__cache={},this}function p(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",b),E}function A(b){let E=b.target;E.removeEventListener("dispose",A);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function L(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:L}}var N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function U_(){return Xn===null&&(Xn=new Ea(N_,16,16,Ti,Pn),Xn.name="DFG_LUT",Xn.minFilter=Ue,Xn.magFilter=Ue,Xn.wrapS=zn,Xn.wrapT=zn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var Bo=class{constructor(t={}){let{canvas:e=vu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=d,m=new Set([to,Qa,ja]),p=new Set([mn,Rn,ys,vs,Ja,Ka]),A=new Uint32Array(4),L=new Int32Array(4),b=new q,E=null,w=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,V=!1,G=null,N=null,I=null,O=null;this._outputColorSpace=Ge;let Y=0,F=0,it=null,W=-1,nt=null,st=new Pe,yt=new Pe,mt=null,St=new re(0),Mt=0,gt=e.width,H=e.height,tt=1,_t=null,Ut=null,dt=new Pe(0,0,gt,H),Ft=new Pe(0,0,gt,H),jt=!1,zt=new sr,$t=!1,Qt=!1,Bt=new Ie,te=new q,be=new Pe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function _e(){return it===null?tt:1}let z=i;function Ae(S,B){return e.getContext(S,B)}let ue,R,x,X,K,ot,at,ft,lt,ut,Et,qt,Rt,At,Lt,Zt,ne,k,wt,ct,Ct,Nt,pt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",sn,!1),z===null){let B="webgl2";if(z=Ae(B,S),z===null)throw Ae(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(S){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),Kt("WebGLRenderer: "+S.message),S}function Xt(){ue=new Gg(z),ue.init(),Ct=new C_(z,ue),R=new Lg(z,ue,t,Ct),x=new T_(z,ue),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),N=z.createFramebuffer(),I=z.createFramebuffer(),O=z.createFramebuffer(),X=new Xg(z),K=new f_,ot=new A_(z,ue,x,K,R,Ct,X),at=new Vg(D),ft=new Yd(z),Nt=new Ig(z,ft),lt=new Hg(z,ft,X,Nt),ut=new Yg(z,lt,ft,Nt,X),k=new qg(z,R,ot),Lt=new Dg(K),Et=new u_(D,at,ue,R,Nt,Lt),qt=new L_(D,K),Rt=new p_,At=new v_(ue),ne=new Rg(D,at,x,ut,g,l),Zt=new E_(D,ut,R),pt=new D_(z,X,R,x),wt=new Pg(z,ue,X),ct=new Wg(z,ue,X),X.programs=Et.programs,D.capabilities=R,D.extensions=ue,D.properties=K,D.renderLists=Rt,D.shadowMap=Zt,D.state=x,D.info=X}y!==mn&&(T=new Zg(y,e.width,e.height,o,s,r));let kt=new Rc(D,z);this.xr=kt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(gt,H,!1))},this.getSize=function(S){return S.set(gt,H)},this.setSize=function(S,B,et=!0){if(kt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=S,H=B,e.width=Math.floor(S*tt),e.height=Math.floor(B*tt),et===!0&&(e.style.width=S+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(gt*tt,H*tt).floor()},this.setDrawingBufferSize=function(S,B,et){gt=S,H=B,tt=et,e.width=Math.floor(S*et),e.height=Math.floor(B*et),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(y===mn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,B,et,Z){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,B,et,Z),x.viewport(st.copy(dt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,B,et,Z){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,B,et,Z),x.scissor(yt.copy(Ft).multiplyScalar(tt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){x.setScissorTest(jt=S)},this.setOpaqueSort=function(S){_t=S},this.setTransparentSort=function(S){Ut=S},this.getClearColor=function(S){return S.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,et=!0){let Z=0;if(S){let $=!1;if(it!==null){let Pt=it.texture.format;$=m.has(Pt)}if($){let Pt=it.texture.type,Tt=p.has(Pt),It=ne.getClearColor(),Vt=ne.getClearAlpha(),Gt=It.r,ie=It.g,le=It.b;Tt?(A[0]=Gt,A[1]=ie,A[2]=le,A[3]=Vt,z.clearBufferuiv(z.COLOR,0,A)):(L[0]=Gt,L[1]=ie,L[2]=le,L[3]=Vt,z.clearBufferiv(z.COLOR,0,L))}else Z|=z.COLOR_BUFFER_BIT}B&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),G=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),ne.dispose(),Rt.dispose(),At.dispose(),K.dispose(),at.dispose(),ut.dispose(),Nt.dispose(),pt.dispose(),Et.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Pr),kt.removeEventListener("sessionend",qi),$n.stop()};function ye(S){S.preventDefault(),Js("WebGLRenderer: Context Lost."),V=!0}function de(){Js("WebGLRenderer: Context Restored."),V=!1;let S=X.autoReset,B=Zt.enabled,et=Zt.autoUpdate,Z=Zt.needsUpdate,$=Zt.type;Xt(),X.autoReset=S,Zt.enabled=B,Zt.autoUpdate=et,Zt.needsUpdate=Z,Zt.type=$}function sn(S){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gn(S){let B=S.target;B.removeEventListener("dispose",gn),el(B)}function el(S){Is(S),K.remove(S)}function Is(S){let B=K.get(S).programs;B!==void 0&&(B.forEach(function(et){Et.releaseProgram(et)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,et,Z,$,Pt){B===null&&(B=Te);let Tt=$.isMesh&&$.matrixWorld.determinantAffine()<0,It=_n(S,B,et,Z,$);x.setMaterial(Z,Tt);let Vt=et.index,Gt=1;if(Z.wireframe===!0){if(Vt=lt.getWireframeAttribute(et),Vt===void 0)return;Gt=2}let ie=et.drawRange,le=et.attributes.position,Ht=ie.start*Gt,pe=(ie.start+ie.count)*Gt;Pt!==null&&(Ht=Math.max(Ht,Pt.start*Gt),pe=Math.min(pe,(Pt.start+Pt.count)*Gt)),Vt!==null?(Ht=Math.max(Ht,0),pe=Math.min(pe,Vt.count)):le!=null&&(Ht=Math.max(Ht,0),pe=Math.min(pe,le.count));let Ce=pe-Ht;if(Ce<0||Ce===1/0)return;Nt.setup($,Z,It,et,Vt);let we,ve=wt;if(Vt!==null&&(we=ft.get(Vt),ve=ct,ve.setIndex(we)),$.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*_e()),ve.setMode(z.LINES)):ve.setMode(z.TRIANGLES);else if($.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),x.setLineWidth(ke*_e()),$.isLineSegments?ve.setMode(z.LINES):$.isLineLoop?ve.setMode(z.LINE_LOOP):ve.setMode(z.LINE_STRIP)}else $.isPoints?ve.setMode(z.POINTS):$.isSprite&&ve.setMode(z.TRIANGLES);if($.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let ke=$._multiDrawStarts,Ot=$._multiDrawCounts,We=$._multiDrawCount,v=Vt?ft.get(Vt).bytesPerElement:1,P=K.get(Z).currentProgram.getUniforms();for(let J=0;J<We;J++)P.setValue(z,"_gl_DrawID",J),ve.render(ke[J]/v,Ot[J])}else if($.isInstancedMesh)ve.renderInstances(Ht,Ce,$.count);else if(et.isInstancedBufferGeometry){let ke=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ot=Math.min(et.instanceCount,ke);ve.renderInstances(Ht,Ce,Ot)}else ve.render(Ht,Ce)};function li(S,B,et,Z){G!==null&&S.isNodeMaterial&&G.setObject(Z,S),$t===!0&&Lt.setState(S,et,!1),S.transparent===!0&&S.side===yn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,hn(S,B,Z),S.side=Si,S.needsUpdate=!0,hn(S,B,Z),S.side=yn):hn(S,B,Z)}this.compile=function(S,B,et=null){et===null&&(et=S),G!==null&&G.renderStart(S,B,et),w=At.get(et),w.init(B),_.push(w),et.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),S!==et&&S.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),Qt=this.localClippingEnabled,$t=Lt.init(this.clippingPlanes,Qt),$t===!0&&Lt.setGlobalState(this.clippingPlanes,B),G!==null&&Zt.render(w.state.shadowsArray,et,B);let Z=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let Tt=0;Tt<Pt.length;Tt++){let It=Pt[Tt];li(It,et,B,$),Z.add(It)}else li(Pt,et,B,$),Z.add(Pt)}),w=_.pop(),G!==null&&G.renderEnd(),Z},this.compileAsync=function(S,B,et=null){let Z=this.compile(S,B,et);return new Promise($=>{function Pt(){if(Z.forEach(function(Tt){let Vt=K.get(Tt).currentProgram;(Vt===void 0||Vt.isReady())&&Z.delete(Tt)}),Z.size===0){$(S);return}setTimeout(Pt,10)}ue.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ps=null;function Ls(S){Ps&&Ps(S)}function Pr(){$n.stop()}function qi(){$n.start()}let $n=new Ju;$n.setAnimationLoop(Ls),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(S){Ps=S,kt.setAnimationLoop(S),S===null?$n.stop():$n.start()},kt.addEventListener("sessionstart",Pr),kt.addEventListener("sessionend",qi),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;G!==null&&G.renderStart(S,B);let et=kt.enabled===!0&&kt.isPresenting===!0,Z=T!==null&&(it===null||et)&&T.begin(D,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(B),B=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(D,S,B,it),w=At.get(S,_.length),w.init(B),w.state.textureUnits=ot.getTextureUnits(),_.push(w),Bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),zt.setFromProjectionMatrix(Bt,En,B.reversedDepth),Qt=this.localClippingEnabled,$t=Lt.init(this.clippingPlanes,Qt),E=Rt.get(S,C.length),E.init(),C.push(E),kt.enabled===!0&&kt.isPresenting===!0){let Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ds(Tt,B,-1/0,D.sortObjects)}Ds(S,B,0,D.sortObjects),E.finish(),G!==null&&G.updateLights(w.state.lightsArray),D.sortObjects===!0&&E.sort(_t,Ut),ge=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,ge&&ne.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Lt.beginShadows();let $=w.state.shadowsArray;if(Zt.render($,S,B),$t===!0&&Lt.endShadows(),(Z&&T.hasRenderPass())===!1){let Tt=E.opaque,It=E.transmissive;if(w.setupLights(),B.isArrayCamera){let Vt=B.cameras;if(It.length>0)for(let Gt=0,ie=Vt.length;Gt<ie;Gt++){let le=Vt[Gt];Le(Tt,It,S,le)}ge&&ne.render(S);for(let Gt=0,ie=Vt.length;Gt<ie;Gt++){let le=Vt[Gt];cn(E,S,le,le.viewport)}}else It.length>0&&Le(Tt,It,S,B),ge&&ne.render(S),cn(E,S,B)}it!==null&&F===0&&(ot.updateMultisampleRenderTarget(it),ot.updateRenderTargetMipmap(it)),Z&&T.end(D),S.isScene===!0&&S.onAfterRender(D,S,B),Nt.resetDefaultState(),W=-1,nt=null,_.pop(),_.length>0?(w=_[_.length-1],ot.setTextureUnits(w.state.textureUnits),$t===!0&&Lt.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,G!==null&&G.renderEnd()};function Ds(S,B,et,Z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(zt)){Z&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Bt);let Tt=ut.update(S),It=S.material;It.visible&&E.push(S,Tt,It,et,be.z,null,B)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(zt))){let Tt=ut.update(S),It=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),be.copy(Tt.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(Bt)),Array.isArray(It)){let Vt=Tt.groups;for(let Gt=0,ie=Vt.length;Gt<ie;Gt++){let le=Vt[Gt],Ht=It[le.materialIndex];Ht&&Ht.visible&&E.push(S,Tt,Ht,et,be.z,le,B)}}else It.visible&&E.push(S,Tt,It,et,be.z,null,B)}}let Pt=S.children;for(let Tt=0,It=Pt.length;Tt<It;Tt++)Ds(Pt[Tt],B,et,Z)}function cn(S,B,et,Z){let{opaque:$,transmissive:Pt,transparent:Tt}=S;w.setupLightsView(et),$t===!0&&Lt.setGlobalState(D.clippingPlanes,et),Z&&x.viewport(st.copy(Z)),$.length>0&&Ci($,B,et),Pt.length>0&&Ci(Pt,B,et),Tt.length>0&&Ci(Tt,B,et),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Le(S,B,et,Z){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let Ht=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new rn(1,1,{generateMipmaps:!0,type:Ht?Pn:mn,minFilter:wi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[Z.id],Tt=Z.viewport||st;Pt.setSize(Tt.z*D.transmissionResolutionScale,Tt.w*D.transmissionResolutionScale);let It=D.getRenderTarget(),Vt=D.getActiveCubeFace(),Gt=D.getActiveMipmapLevel();D.setRenderTarget(Pt),D.getClearColor(St),Mt=D.getClearAlpha(),Mt<1&&D.setClearColor(16777215,.5),D.clear(),ge&&ne.render(et);let ie=D.toneMapping;D.toneMapping=Cn;let le=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),$t===!0&&Lt.setGlobalState(D.clippingPlanes,Z),Ci(S,et,Z),ot.updateMultisampleRenderTarget(Pt),ot.updateRenderTargetMipmap(Pt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let pe=0,Ce=B.length;pe<Ce;pe++){let we=B[pe],{object:ve,geometry:ke,material:Ot,group:We}=we;if(Ot.side===yn&&ve.layers.test(Z.layers)){let v=Ot.side;Ot.side=nn,Ot.needsUpdate=!0,Ns(ve,et,Z,ke,Ot,We),Ot.side=v,Ot.needsUpdate=!0,Ht=!0}}Ht===!0&&(ot.updateMultisampleRenderTarget(Pt),ot.updateRenderTargetMipmap(Pt))}D.setRenderTarget(It,Vt,Gt),D.setClearColor(St,Mt),le!==void 0&&(Z.viewport=le),D.toneMapping=ie}function Ci(S,B,et){let Z=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Pt=S.length;$<Pt;$++){let Tt=S[$],{object:It,geometry:Vt,group:Gt}=Tt,ie=Tt.material;ie.allowOverride===!0&&Z!==null&&(ie=Z),It.layers.test(et.layers)&&Ns(It,B,et,Vt,ie,Gt)}}function Ns(S,B,et,Z,$,Pt){G!==null&&$.isNodeMaterial&&G.setObject(S,$),S.onBeforeRender(D,B,et,Z,$,Pt),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(D,B,et,Z,S,Pt),$.transparent===!0&&$.side===yn&&$.forceSinglePass===!1?($.side=nn,$.needsUpdate=!0,D.renderBufferDirect(et,B,Z,$,S,Pt),$.side=Si,$.needsUpdate=!0,D.renderBufferDirect(et,B,Z,$,S,Pt),$.side=yn):D.renderBufferDirect(et,B,Z,$,S,Pt),S.onAfterRender(D,B,et,Z,$,Pt)}function hn(S,B,et){B.isScene!==!0&&(B=Te);let Z=K.get(S),$=w.state.lights,Pt=w.state.shadowsArray,Tt=$.state.version,It=Et.getParameters(S,$.state,Pt,B,et,w.state.lightProbeGridArray),Vt=Et.getProgramCacheKey(It),Gt=Z.programs;Z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Z.envMap=at.get(S.envMap||Z.environment,ie),Z.envMapRotation=Z.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Gt===void 0&&(S.addEventListener("dispose",gn),Gt=new Map,Z.programs=Gt);let le=Gt.get(Vt);if(le!==void 0){if(Z.currentProgram===le&&Z.lightsStateVersion===Tt)return Ri(S,It),le}else It.uniforms=Et.getUniforms(S),G!==null&&S.isNodeMaterial&&G.build(S,et,It),S.onBeforeCompile(It,D),le=Et.acquireProgram(It,Vt),Gt.set(Vt,le),Z.uniforms=It.uniforms;let Ht=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ht.clippingPlanes=Lt.uniform),Ri(S,It),Z.needsLights=nl(S),Z.lightsStateVersion=Tt,Z.needsLights&&(Ht.ambientLightColor.value=$.state.ambient,Ht.lightProbe.value=$.state.probe,Ht.sunLights.value=$.state.sun,Ht.sunLightShadows.value=$.state.sunShadow,Ht.directionalLights.value=$.state.directional,Ht.directionalLightShadows.value=$.state.directionalShadow,Ht.spotLights.value=$.state.spot,Ht.spotLightShadows.value=$.state.spotShadow,Ht.rectAreaLights.value=$.state.rectArea,Ht.ltc_1.value=$.state.rectAreaLTC1,Ht.ltc_2.value=$.state.rectAreaLTC2,Ht.pointLights.value=$.state.point,Ht.pointLightShadows.value=$.state.pointShadow,Ht.hemisphereLights.value=$.state.hemi,Ht.sunShadowMatrix.value=$.state.sunShadowMatrix,Ht.sunShadowCascade.value=$.state.sunShadowCascade,Ht.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ht.spotLightMatrix.value=$.state.spotLightMatrix,Ht.spotLightMap.value=$.state.spotLightMap,Ht.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=le,Z.uniformsList=null,le}function Yi(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=bs.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Ri(S,B){let et=K.get(S);et.outputColorSpace=B.outputColorSpace,et.batching=B.batching,et.batchingColor=B.batchingColor,et.instancing=B.instancing,et.instancingColor=B.instancingColor,et.instancingMorph=B.instancingMorph,et.skinning=B.skinning,et.morphTargets=B.morphTargets,et.morphNormals=B.morphNormals,et.morphColors=B.morphColors,et.morphTargetsCount=B.morphTargetsCount,et.numClippingPlanes=B.numClippingPlanes,et.numIntersection=B.numClipIntersection,et.vertexAlphas=B.vertexAlphas,et.vertexTangents=B.vertexTangents,et.toneMapping=B.toneMapping}function Lr(S,B){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let et=0,Z=S.length;et<Z;et++){let $=S[et];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function _n(S,B,et,Z,$){B.isScene!==!0&&(B=Te),ot.resetTextureUnits();let Pt=B.fog,Tt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,It=it===null?D.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:he.workingColorSpace,Vt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Gt=at.get(Z.envMap||Tt,Vt),ie=Z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,le=!!et.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ht=!!et.morphAttributes.position,pe=!!et.morphAttributes.normal,Ce=!!et.morphAttributes.color,we=Cn;Z.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(we=D.toneMapping);let ve=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ke=ve!==void 0?ve.length:0,Ot=K.get(Z),We=w.state.lights;if($t===!0&&(Qt===!0||S!==nt)){let vt=S===nt&&Z.id===W;Lt.setState(Z,S,vt)}let v=!1;Z.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==We.state.version||Ot.outputColorSpace!==It||$.isBatchedMesh&&Ot.batching===!1||!$.isBatchedMesh&&Ot.batching===!0||$.isBatchedMesh&&Ot.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ot.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ot.instancing===!1||!$.isInstancedMesh&&Ot.instancing===!0||$.isSkinnedMesh&&Ot.skinning===!1||!$.isSkinnedMesh&&Ot.skinning===!0||$.isInstancedMesh&&Ot.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ot.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ot.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ot.instancingMorph===!1&&$.morphTexture!==null||Ot.envMap!==Gt||Z.fog===!0&&Ot.fog!==Pt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Lt.numPlanes||Ot.numIntersection!==Lt.numIntersection)||Ot.vertexAlphas!==ie||Ot.vertexTangents!==le||Ot.morphTargets!==Ht||Ot.morphNormals!==pe||Ot.morphColors!==Ce||Ot.toneMapping!==we||Ot.morphTargetsCount!==ke||!!Ot.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(v=!0):(v=!0,Ot.__version=Z.version);let P=Ot.currentProgram;v===!0&&(P=hn(Z,B,$),G&&Z.isNodeMaterial&&G.onUpdateProgram(Z,P,Ot));let J=!1,Q=!1,j=!1,rt=P.getUniforms(),ht=Ot.uniforms;if(x.useProgram(P.program)&&(J=!0,Q=!0,j=!0),Z.id!==W&&(W=Z.id,Q=!0),Ot.needsLights){let vt=Lr(w.state.lightProbeGridArray,$);Ot.lightProbeGrid!==vt&&(Ot.lightProbeGrid=vt,Q=!0)}if(J||nt!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),rt.setValue(z,"projectionMatrix",S.projectionMatrix),rt.setValue(z,"viewMatrix",S.matrixWorldInverse);let Yt=rt.map.cameraPosition;Yt!==void 0&&Yt.setValue(z,te.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&rt.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&rt.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),nt!==S&&(nt=S,Q=!0,j=!0)}if(Ot.needsLights&&(We.state.sunShadowMap.length>0&&rt.setValue(z,"sunShadowMap",We.state.sunShadowMap,ot),We.state.directionalShadowMap.length>0&&rt.setValue(z,"directionalShadowMap",We.state.directionalShadowMap,ot),We.state.spotShadowMap.length>0&&rt.setValue(z,"spotShadowMap",We.state.spotShadowMap,ot),We.state.pointShadowMap.length>0&&rt.setValue(z,"pointShadowMap",We.state.pointShadowMap,ot)),$.isSkinnedMesh){rt.setOptional(z,$,"bindMatrix"),rt.setOptional(z,$,"bindMatrixInverse");let vt=$.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),rt.setValue(z,"boneTexture",vt.boneTexture,ot))}$.isBatchedMesh&&(rt.setOptional(z,$,"batchingTexture"),rt.setValue(z,"batchingTexture",$._matricesTexture,ot),rt.setOptional(z,$,"batchingIdTexture"),rt.setValue(z,"batchingIdTexture",$._indirectTexture,ot),rt.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&rt.setValue(z,"batchingColorTexture",$._colorsTexture,ot));let xt=et.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&k.update($,et,P),(Q||Ot.receiveShadow!==$.receiveShadow)&&(Ot.receiveShadow=$.receiveShadow,rt.setValue(z,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(ht.envMapIntensity.value=B.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=U_()),Q){if(rt.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ot.needsLights&&Un(ht,j),Pt&&Z.fog===!0&&qt.refreshFogUniforms(ht,Pt),qt.refreshMaterialUniforms(ht,Z,tt,H,w.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.lightProbeGrid){let vt=Ot.lightProbeGrid;ht.probesSH.value=vt.texture,ht.probesMin.value.copy(vt.boundingBox.min),ht.probesMax.value.copy(vt.boundingBox.max),ht.probesResolution.value.copy(vt.resolution)}bs.upload(z,Yi(Ot),ht,ot)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(bs.upload(z,Yi(Ot),ht,ot),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&rt.setValue(z,"center",$.center),rt.setValue(z,"modelViewMatrix",$.modelViewMatrix),rt.setValue(z,"normalMatrix",$.normalMatrix),rt.setValue(z,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let vt=Z.uniformsGroups;for(let Yt=0,se=vt.length;Yt<se;Yt++){let Me=vt[Yt];pt.update(Me,P),pt.bind(Me,P)}}return P}function Un(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function nl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,B,et){let Z=K.get(S);Z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),K.get(S.texture).__webglTexture=B,K.get(S.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:et,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let et=K.get(S);et.__webglFramebuffer=B,et.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,et=0){it=S,Y=B,F=et;let Z=null,$=!1,Pt=!1;if(S){let It=K.get(S);if(It.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,It.__webglFramebuffer),st.copy(S.viewport),yt.copy(S.scissor),mt=S.scissorTest,x.viewport(st),x.scissor(yt),x.setScissorTest(mt),W=-1;return}else if(It.__webglFramebuffer===void 0)ot.setupRenderTarget(S);else if(It.__hasExternalTextures)ot.rebindTextures(S,K.get(S.texture).__webglTexture,K.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ie=S.depthTexture;if(It.__boundDepthTexture!==ie){if(ie!==null&&K.has(ie)&&(S.width!==ie.image.width||S.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Pt=!0);let Gt=K.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?Z=Gt[B][et]:Z=Gt[B],$=!0):S.samples>0&&ot.useMultisampledRTT(S)===!1?Z=K.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?Z=Gt[et]:Z=Gt,st.copy(S.viewport),yt.copy(S.scissor),mt=S.scissorTest}else st.copy(dt).multiplyScalar(tt).floor(),yt.copy(Ft).multiplyScalar(tt).floor(),mt=jt;if(et!==0&&(Z=N),x.bindFramebuffer(z.FRAMEBUFFER,Z)&&x.drawBuffers(S,Z),x.viewport(st),x.scissor(yt),x.setScissorTest(mt),$){let It=K.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,et)}else if(Pt){let It=B;for(let Vt=0;Vt<S.textures.length;Vt++){let Gt=K.get(S.textures[Vt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Vt,Gt.__webglTexture,et,It)}}else if(S!==null&&et!==0){let It=K.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,et)}W=-1};function Us(S){let B=K.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=R.textureFormatReadable(S.format),B.__typeReadable=R.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,et,Z,$,Pt,Tt,It=0){if(!(S&&S.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Vt=Vt[Tt]),Vt){x.bindFramebuffer(z.FRAMEBUFFER,Vt);try{let Gt=S.textures[It],ie=Gt.format,le=Gt.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let Ht=Us(Gt);if(Ht.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-Z&&et>=0&&et<=S.height-$&&z.readPixels(B,et,Z,$,Ct.convert(ie),Ct.convert(le),Pt)}finally{let Gt=it!==null?K.get(it).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(S,B,et,Z,$,Pt,Tt,It=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Vt=Vt[Tt]),Vt)if(B>=0&&B<=S.width-Z&&et>=0&&et<=S.height-$){x.bindFramebuffer(z.FRAMEBUFFER,Vt);let Gt=S.textures[It],ie=Gt.format,le=Gt.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let Ht=Us(Gt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.bufferData(z.PIXEL_PACK_BUFFER,Pt.byteLength,z.STREAM_READ),z.readPixels(B,et,Z,$,Ct.convert(ie),Ct.convert(le),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ce=it!==null?K.get(it).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Ce);let we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Su(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(pe),z.deleteSync(we),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,et=0){let Z=Math.pow(2,-et),$=Math.floor(S.image.width*Z),Pt=Math.floor(S.image.height*Z),Tt=B!==null?B.x:0,It=B!==null?B.y:0;ot.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,Tt,It,$,Pt),x.unbindTexture()},this.copyTextureToTexture=function(S,B,et=null,Z=null,$=0,Pt=0){let Tt,It,Vt,Gt,ie,le,Ht,pe,Ce,we=S.isCompressedTexture?S.mipmaps[Pt]:S.image;if(et!==null)Tt=et.max.x-et.min.x,It=et.max.y-et.min.y,Vt=et.isBox3?et.max.z-et.min.z:1,Gt=et.min.x,ie=et.min.y,le=et.isBox3?et.min.z:0;else{let ht=Math.pow(2,-$);Tt=Math.floor(we.width*ht),It=Math.floor(we.height*ht),S.isDataArrayTexture?Vt=we.depth:S.isData3DTexture?Vt=Math.floor(we.depth*ht):Vt=1,Gt=0,ie=0,le=0}Z!==null?(Ht=Z.x,pe=Z.y,Ce=Z.z):(Ht=0,pe=0,Ce=0);let ve=Ct.convert(B.format),ke=Ct.convert(B.type),Ot;B.isData3DTexture?(ot.setTexture3D(B,0),Ot=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ot.setTexture2DArray(B,0),Ot=z.TEXTURE_2D_ARRAY):(ot.setTexture2D(B,0),Ot=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let We=x.getParameter(z.UNPACK_ROW_LENGTH),v=x.getParameter(z.UNPACK_IMAGE_HEIGHT),P=x.getParameter(z.UNPACK_SKIP_PIXELS),J=x.getParameter(z.UNPACK_SKIP_ROWS),Q=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,we.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,we.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Gt),x.pixelStorei(z.UNPACK_SKIP_ROWS,ie),x.pixelStorei(z.UNPACK_SKIP_IMAGES,le);let j=S.isDataArrayTexture||S.isData3DTexture,rt=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let ht=K.get(S),xt=K.get(B),vt=K.get(ht.__renderTarget),Yt=K.get(xt.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,vt.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let se=0;se<Vt;se++)j&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(S).__webglTexture,$,le+se),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(B).__webglTexture,Pt,Ce+se)),z.blitFramebuffer(Gt,ie,Tt,It,Ht,pe,Tt,It,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||K.has(S)){let ht=K.get(S),xt=K.get(B);x.bindFramebuffer(z.READ_FRAMEBUFFER,I),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let vt=0;vt<Vt;vt++)j?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.__webglTexture,$,le+vt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ht.__webglTexture,$),rt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xt.__webglTexture,Pt,Ce+vt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xt.__webglTexture,Pt),$!==0?z.blitFramebuffer(Gt,ie,Tt,It,Ht,pe,Tt,It,z.COLOR_BUFFER_BIT,z.NEAREST):rt?z.copyTexSubImage3D(Ot,Pt,Ht,pe,Ce+vt,Gt,ie,Tt,It):z.copyTexSubImage2D(Ot,Pt,Ht,pe,Gt,ie,Tt,It);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else rt?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Ot,Pt,Ht,pe,Ce,Tt,It,Vt,ve,ke,we.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Ot,Pt,Ht,pe,Ce,Tt,It,Vt,ve,we.data):z.texSubImage3D(Ot,Pt,Ht,pe,Ce,Tt,It,Vt,ve,ke,we):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pt,Ht,pe,Tt,It,ve,ke,we.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pt,Ht,pe,we.width,we.height,ve,we.data):z.texSubImage2D(z.TEXTURE_2D,Pt,Ht,pe,Tt,It,ve,ke,we);x.pixelStorei(z.UNPACK_ROW_LENGTH,We),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,v),x.pixelStorei(z.UNPACK_SKIP_PIXELS,P),x.pixelStorei(z.UNPACK_SKIP_ROWS,J),x.pixelStorei(z.UNPACK_SKIP_IMAGES,Q),Pt===0&&B.generateMipmaps&&z.generateMipmap(Ot),x.unbindTexture()},this.initRenderTarget=function(S){K.get(S).__webglFramebuffer===void 0&&ot.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ot.setTextureCube(S,0):S.isData3DTexture?ot.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ot.setTexture2DArray(S,0):ot.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){Y=0,F=0,it=null,x.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var F_=["top","side","bottom"];function sf(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let C of t){if(!C||typeof C.id!="string")throw new Error("block without id");if(!Number.isInteger(C.n)||C.n<0||C.n>255)throw new Error("bad n for "+C.id);if(i[C.n])throw new Error("duplicate n "+C.n+" ("+C.id+")");if(s[C.id])throw new Error("duplicate id "+C.id);let _=C.colors||{},T=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},C);if(T.placeable=T.n!==0&&!T.liquid,T.colors={top:_.top||"#888888",side:_.side||_.top||"#888888",bottom:_.bottom||_.top||"#888888"},T.opaque=T.solid&&!T.transparent&&!T.cutout,T.tile={},T.n!==0){let D={};for(let V of F_){let G=T.colors[V]+"|"+(T.pattern==="grass"||T.pattern==="log"||T.pattern==="lamp"||T.pattern==="table"||T.pattern==="stele"||T.pattern==="torch"||T.pattern==="bed"||T.pattern==="snow"||T.pattern==="lantern"||T.pattern==="bookshelf"||T.pattern==="hay"||T.pattern==="barrel"?V:"");D[G]===void 0&&(D[G]=r.length,r.push({block:T.id,face:V,color:T.colors[V],pattern:T.pattern,accent:T.accent||null,top:T.colors.top})),T.tile[V]=D[G]}}i[T.n]=T,s[T.id]=T}if(!s.air)throw new Error("registry needs air");for(let C of e){if(s[C.id])throw new Error("duplicate id "+C.id);s[C.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},C)}for(let C in s){let _=s[C].drops;if(_&&_!=="self"&&!s[_])throw new Error(C+" drops unknown "+_)}let a=C=>(typeof C=="number"?i[C]:s[C])||null,o=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),f=new Uint8Array(256),h=new Uint8Array(256),u=new Uint8Array(256),d={torch:1,cross:2,small:3,carpet:4},g=new Uint8Array(256),y=new Uint8Array(256),m=new Uint8Array(256),p=new Uint8Array(256),A=new Uint8Array(256),L=new Int16Array(256).fill(-1),b=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1);i.forEach((C,_)=>{C&&(g[_]=C.solid?1:0,y[_]=C.opaque?1:0,m[_]=C.transparent?1:0,p[_]=C.emissive?1:0,A[_]=C.liquid?1:0,o[_]=C.light!=null?C.light:C.emissive?15:0,l[_]=C.liquid?2:0,c[_]=d[C.shape]||0,f[_]=C.cutout?1:0,h[_]=C.climbable?1:0,u[_]=C.plant?1:0,_&&(L[_]=C.tile.top,b[_]=C.tile.side,E[_]=C.tile.bottom))});let w=(n&&n.blueprints||[]).map(C=>Object.assign({kind:"blueprint"},C));return{blocks:i.filter(Boolean),items:e.map(C=>s[C.id]),blueprints:w,tiles:r,get:a,toolOf:C=>{let _=C&&s[C];return _&&_.kind==="item"&&_.tool&&typeof _.tool=="object"?_.tool:null},num:C=>{let _=s[C];if(!_||_.kind!=="block")throw new Error("no block "+C);return _.n},name:C=>{let _=a(C);return _?_.name_zh:String(C)},maxStack:C=>{let _=s[C];return _?_.maxStack:64},dropOf:C=>{let _=i[C];return!_||!_.drops?null:_.drops==="self"?_.id:_.drops},breakTime:C=>{let _=i[C];return!_||_.hardness<0?1/0:.25+_.hardness*.55},flat:{solid:g,opaque:y,trans:m,emit:p,liquid:A,tileTop:L,tileSide:b,tileBottom:E,lightEmit:o,attn:l,shape:c,cutout:f,climb:h,plant:u}}}var si=n=>Math.floor(n/16);var me=(n,t,e)=>(t*16+e)*16+n;var Gi=(n,t)=>n+","+t;function Ic(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=si(n),s=si(e);return{cx:i,cz:s,i:me(n-i*16,t,e-s*16)}}function rf(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let a=r*r+s*s;a<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:a})}return i.sort((s,r)=>s.d2-r.d2)}function Ln(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var Es=(n,t,e)=>Ln(n,t,0,e);function O_(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Pc=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],B_=.5*(Math.sqrt(3)-1),Er=(3-Math.sqrt(3))/6;function Hi(n){let t=O_(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),a=e[s];e[s]=e[r],e[r]=a}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let a=(s+r)*B_,o=Math.floor(s+a),l=Math.floor(r+a),c=(o+l)*Er,f=s-(o-c),h=r-(l-c),u=f>h?1:0,d=1-u,g=f-u+Er,y=h-d+Er,m=f-1+2*Er,p=h-1+2*Er,A=o&255,L=l&255,b=0,E,w;return E=.5-f*f-h*h,E>0&&(w=Pc[i[A+i[L]]&7],E*=E,b+=E*E*(w[0]*f+w[1]*h)),E=.5-g*g-y*y,E>0&&(w=Pc[i[A+u+i[L+d]]&7],E*=E,b+=E*E*(w[0]*g+w[1]*y)),E=.5-m*m-p*p,E>0&&(w=Pc[i[A+1+i[L+1]]&7],E*=E,b+=E*E*(w[0]*m+w[1]*p)),70*b}}function Wi(n,t,e,i){let s=1,r=1,a=0,o=0;for(let l=0;l<i;l++)a+=s*n(t*r,e*r),o+=s,s*=.5,r*=2;return a/o}function Lc(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),a=Math.floor(i),o=Math.floor(s),l=t(e-r),c=t(i-a),f=t(s-o),h=(d,g,y)=>Ln(n,r+d,a+g,o+y),u=(d,g,y)=>d+(g-d)*y;return u(u(u(h(0,0,0),h(1,0,0),l),u(h(0,1,0),h(1,1,0),l),c),u(u(h(0,0,1),h(1,0,1),l),u(h(0,1,1),h(1,1,1),l),c),f)}}var Ts=160,Dn=18,Dc=[[0,1],[-1,0],[0,-1],[1,0]];function af(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var z_=(n,t,e)=>e&1?[t,n]:[n,t];function of(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function a(l,c){let f=l+","+c;if(i.has(f))return i.get(f);let h=null,u=d=>Ln(n+909,l,d,c);if(u(0)<.45&&e&&e.houses&&e.houses.length){let d=Math.floor((l+.2+u(1)*.6)*Ts),g=Math.floor((c+.2+u(2)*.6)*Ts),y=t.biomeOf(d,g),m=t.height(d,g),p=(y==="plains"||y==="desert")&&Math.hypot(d,g)>110;if(p&&m>s+1)for(let A=0;A<16&&p;A++)for(let L of[7,14]){let b=t.height(d+Math.round(Math.cos(A*.39)*L),g+Math.round(Math.sin(A*.39)*L));(Math.abs(b-m)>3||b<=s)&&(p=!1)}else p=!1;if(p){let A=[],L=[],b=3+Math.floor(u(3)*4),E=(w,C,_,T)=>{let D=r[w];if(!D)return null;let[V,G]=z_(D.size[0],D.size[2],T),N={tpl:w,rot:T,x0:C-(V>>1),z0:_-(G>>1),y:m,w:V,d:G,h:D.size[1]};return A.push(N),N};E("well",d,g,0),E("lamp_post",d+3,g+3,0),E("lamp_post",d-3,g-3,0);for(let w=0;w<b;w++){let C=w/b*Math.PI*2+u(10+w)*.5,_=9+u(20+w)*3,T=d+Math.round(Math.cos(C)*_),D=g+Math.round(Math.sin(C)*_),V=d-T,G=g-D,N=0,I=-1/0;Dc.forEach((st,yt)=>{let mt=st[0]*V+st[1]*G;mt>I&&(I=mt,N=yt)});let O=e.houses[Math.floor(u(30+w)*e.houses.length)],Y=E(O,T,D,N);if(!Y)continue;let F=r[O],[it,W]=af(F.door[0],F.door[1],F.size[0],F.size[2],N),nt={x:Y.x0+it+Dc[N][0],z:Y.z0+W+Dc[N][1]};L.push({ax:d,az:g,bx:nt.x,bz:nt.z})}h={id:f,x:d,z:g,y:m,biome:y,structures:A,paths:L,villagers:2+Math.floor(u(4)*3)}}}return i.set(f,h),h}function o(l,c,f,h){let u=[];for(let d=Math.floor((c-Dn)/Ts);d<=Math.floor((h+Dn)/Ts);d++)for(let g=Math.floor((l-Dn)/Ts);g<=Math.floor((f+Dn)/Ts);g++){let y=a(g,d);y&&y.x+Dn>=l&&y.x-Dn<=f&&y.z+Dn>=c&&y.z-Dn<=h&&u.push(y)}return u}return{plan:a,around:o,chunk:(l,c)=>o(l*16,c*16,l*16+16-1,c*16+16-1)}}function lf(n,t,e,i,s,r,a){let o=t*16,l=e*16,c=(g,y)=>g>=o&&g<o+16&&y>=l&&y<l+16,f=i.biome==="desert",h=f?s.desert||{}:{},u=g=>{let y=s.palette[g];if(!y)return null;let m=h[y]||y;return r.byId(m)},d=f?r.byId("sandstone"):r.byId("cobblestone");for(let g of i.paths){let y=Math.max(Math.abs(g.bx-g.ax),Math.abs(g.bz-g.az));for(let m=0;m<=y;m++){let p=Math.round(g.ax+(g.bx-g.ax)*m/y),A=Math.round(g.az+(g.bz-g.az)*m/y);if(!c(p,A))continue;let L=a.height(p,A),b=me(p-o,L,A-l);n[b]&&n[b]!==r.water&&(n[b]=r.path);for(let E=L+1;E<Math.min(64,L+4);E++){let w=me(p-o,E,A-l);(n[w]===r.leaves||n[w]===r.log||E===L+1)&&(n[w]=0)}}}for(let g of i.structures){let y=s.templates[g.tpl];if(!y)continue;let[m,,p]=y.size;for(let A=0;A<p;A++)for(let L=0;L<m;L++){let[b,E]=af(L,A,m,p,g.rot),w=g.x0+b,C=g.z0+E;if(!c(w,C))continue;let _=w-o,T=C-l;for(let D=g.y-1;D>Math.max(0,g.y-8);D--){let V=me(_,D,T);if(n[V]&&n[V]!==r.water)break;n[V]=d}for(let D=g.y+y.size[1];D<Math.min(64,g.y+y.size[1]+3);D++)n[me(_,D,T)]=0;y.layers.forEach((D,V)=>{let G=(D[A]||"")[L];if(!G||G===" ")return;let N=g.y+V;N>=64||(n[me(_,N,T)]=G==="."?0:u(G)||0)})}}}var on=24;var hf={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},cf=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],As=112;function uf(n,t,e){let i=N=>t.num(N),s=N=>{try{return i(N)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let a=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let o=Hi(n),l=Hi(n+101),c=Hi(n+202),f=Hi(n+303),h=Hi(n+404),u=Lc(n+505),d=Lc(n+606);function g(N,I){let O=Wi(o,N/190,I/190,3),Y=Wi(l,N/55,I/55,4),F=Math.max(0,Wi(c,N/130,I/130,2)-.1),it=27+O*9+Y*6+F*F*75;return Math.max(4,Math.min(54,Math.floor(it)))}let y=Hi(n+808);function m(N,I){let O=g(N,I),Y=Wi(y,N/900,I/900,2),F=Math.min(1,Math.max(0,(Math.hypot(N,I)-240)/80)),it=Math.min(1,Math.max(0,(-.18-Y)/.17)),W=it*it*(3-2*it)*F;return W>0&&(O=Math.round(O*(1-W)+(on-14)*W)),O<on-1?Math.max(3,Math.floor(on-1-(on-1-O)*1.8)):O}function p(N,I){let O=(Es(n+3,N,I)-.5)*.025;return{t:Wi(f,N/420,I/420,2)+O,u:Wi(h,N/380,I/380,2)-O}}function A(N,I,O=m(N,I)){if(O<on-1)return"ocean";let{t:Y,u:F}=p(N,I);return Y<-.3?"snow":Y>.28&&F<.05?"desert":F>.12?"forest":"plains"}let L=null;function b(){if(L)return L;let N=(I,O)=>{let Y=m(I,O);return Y>=on+2&&Math.abs(m(I+1,O)-Y)<2&&Math.abs(m(I,O+1)-Y)<2};for(let I=0;I<400;I+=2)for(let O=0;O<Math.max(1,I*2);O++){let Y=O/Math.max(1,I*2)*Math.PI*2,F=Math.round(Math.cos(Y)*I),it=Math.round(Math.sin(Y)*I);if(N(F,it)&&N(F+3,it+2))return L={x:F+.5,y:m(F,it)+1,z:it+.5,stele:{x:F+3,y:m(F+3,it+2)+1,z:it+2},portal:{x:F-3,y:Math.max(on+1,m(F-3,it+2))+1,z:it+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function E(N,I){let O=[],Y=N*16,F=I*16,it=Math.floor((Y-80)/As),W=Math.floor((Y+16+80)/As),nt=Math.floor((F-80)/As),st=Math.floor((F+16+80)/As);for(let yt=nt;yt<=st;yt++)for(let mt=it;mt<=W;mt++){let St=_t=>Ln(n+707,mt,_t,yt);if(St(0)>.25)continue;let Mt=(mt+St(1))*As,gt=(yt+St(2))*As,H=St(3)*Math.PI,tt=40+St(4)*30;O.push({ax:Mt-Math.cos(H)*tt/2,az:gt-Math.sin(H)*tt/2,dx:Math.cos(H)*tt,dz:Math.sin(H)*tt,len:tt,floor:7+Math.floor(St(5)*6),w:1.6+St(6)*1.2})}return O}function w(N,I){let O=new Uint8Array(16384),Y=N*16,F=I*16,it=18,W=new Int16Array(it*it);for(let Mt=-1;Mt<=16;Mt++)for(let gt=-1;gt<=16;gt++)W[(Mt+1)*it+gt+1]=m(Y+gt,F+Mt);let nt=b(),st=new Array(256);for(let Mt=0;Mt<16;Mt++)for(let gt=0;gt<16;gt++){let H=Y+gt,tt=F+Mt,_t=W[(Mt+1)*it+gt+1],Ut=Math.max(Math.abs(W[(Mt+1)*it+gt]-_t),Math.abs(W[(Mt+1)*it+gt+2]-_t),Math.abs(W[Mt*it+gt+1]-_t),Math.abs(W[(Mt+2)*it+gt+1]-_t))>=3,dt=st[Mt*16+gt]=A(H,tt,_t),Ft=_t<=on+1,jt,zt;dt==="ocean"||Ft||dt==="desert"?(jt=r.sand,zt=r.sand):Ut?(jt=r.stone,zt=r.stone):dt==="snow"?(jt=r.snow,zt=r.dirt):(jt=r.grass,zt=r.dirt);for(let $t=0;$t<=_t;$t++){let Qt;if($t===0?Qt=r.bedrock:$t===_t?Qt=jt:$t>=_t-3?Qt=zt:dt==="desert"&&$t>=_t-7?Qt=r.sandstone:Qt=r.stone,Qt===r.stone&&Ut&&$t>=_t-4){let Bt=Ln(n,H,$t,tt);Bt<.06?Qt=r.coal:Bt<.09?Qt=r.iron:Bt<.096&&(Qt=r.ruby)}O[me(gt,$t,Mt)]=Qt}for(let $t=_t+1;$t<=on;$t++)O[me(gt,$t,Mt)]=$t===on&&dt==="snow"?r.ice:r.water}C(O,N,I,W,it);for(let Mt=0;Mt<cf.length;Mt++){let gt=cf[Mt],H=r[gt.ore];for(let tt=0;tt<gt.count;tt++){let _t=jt=>Ln(n+31*Mt+jt,N*977+tt,jt,I*131+tt);if(_t(9)>gt.chance)continue;let Ut=Math.floor(_t(1)*16),dt=gt.y0+Math.floor(_t(2)*(gt.y1-gt.y0)),Ft=Math.floor(_t(3)*16);for(let jt=0;jt<gt.size;jt++){Ut>=0&&Ut<16&&Ft>=0&&Ft<16&&dt>0&&dt<64&&O[me(Ut,dt,Ft)]===r.stone&&(O[me(Ut,dt,Ft)]=H);let zt=Math.floor(_t(10+jt)*6);zt===0?Ut++:zt===1?Ut--:zt===2?dt++:zt===3?dt--:zt===4?Ft++:Ft--}}}let yt=e?G.chunk(N,I):[];_(O,N,I,W,it,st,nt,yt);for(let Mt of yt)lf(O,N,I,Mt,e,r,V);let mt=nt.stele;if(Math.floor(mt.x/16)===N&&Math.floor(mt.z/16)===I){let Mt=mt.x-Y,gt=mt.z-F;O[me(Mt,mt.y,gt)]=r.stele,O[me(Mt,mt.y+1,gt)]=r.stele}let St=nt.portal;if(r.portal&&St&&Math.floor(St.x/16)===N&&Math.floor(St.z/16)===I){let Mt=St.x-Y,gt=St.z-F;for(let H=Math.max(1,St.y-3);H<St.y;H++)(!O[me(Mt,H,gt)]||O[me(Mt,H,gt)]===r.water)&&(O[me(Mt,H,gt)]=r.stone);O[me(Mt,St.y,gt)]=r.portal,O[me(Mt,St.y+1,gt)]=r.portal}return O}function C(N,I,O,Y,F){let it=I*16,W=O*16,nt=4,st=16/nt+1,yt=64/nt+1,mt=new Float32Array(st*st*yt);for(let gt=0;gt<yt;gt++)for(let H=0;H<st;H++)for(let tt=0;tt<st;tt++){let _t=it+tt*nt,Ut=gt*nt,dt=W+H*nt,Ft=u(_t/22,Ut/14,dt/22)-.5,jt=d(_t/22,Ut/14,dt/22)-.5;mt[(gt*st+H)*st+tt]=Ft*Ft+jt*jt}let St=(gt,H,tt)=>mt[(H*st+tt)*st+gt],Mt=E(I,O);for(let gt=0;gt<16;gt++)for(let H=0;H<16;H++){let tt=Y[(gt+1)*F+H+1],_t=tt<=on+1,Ut=_t?tt-5:tt,dt=H>>2,Ft=gt>>2,jt=(H&3)/nt,zt=(gt&3)/nt;for(let Bt=3;Bt<=Ut;Bt++){let te=Bt>>2,be=(Bt&3)/nt,Te=St(dt,te,Ft)+(St(dt+1,te,Ft)-St(dt,te,Ft))*jt,ge=St(dt,te,Ft+1)+(St(dt+1,te,Ft+1)-St(dt,te,Ft+1))*jt,_e=St(dt,te+1,Ft)+(St(dt+1,te+1,Ft)-St(dt,te+1,Ft))*jt,z=St(dt,te+1,Ft+1)+(St(dt+1,te+1,Ft+1)-St(dt,te+1,Ft+1))*jt;if((Te+(ge-Te)*zt)*(1-be)+(_e+(z-_e)*zt)*be<.008){let ue=me(H,Bt,gt);N[ue]!==r.bedrock&&N[ue]!==r.water&&(N[ue]=0)}}if(!Mt.length||_t)continue;let $t=it+H,Qt=W+gt;for(let Bt of Mt){let te=Math.max(0,Math.min(1,(($t-Bt.ax)*Bt.dx+(Qt-Bt.az)*Bt.dz)/(Bt.len*Bt.len))),be=Bt.ax+Bt.dx*te,Te=Bt.az+Bt.dz*te,ge=Math.hypot($t-be,Qt-Te),_e=Bt.w*Math.sin(Math.PI*te);if(ge<_e)for(let z=Bt.floor+Math.floor(ge*2);z<=tt;z++){let Ae=me(H,z,gt);N[Ae]!==r.water&&(N[Ae]=0)}}}}function _(N,I,O,Y,F,it,W,nt){let st=I*16,yt=O*16;for(let mt=0;mt<16;mt++)for(let St=0;St<16;St++){let Mt=st+St,gt=yt+mt,H=Y[(mt+1)*F+St+1],tt=it[mt*16+St];if(H+1>=64||Math.hypot(Mt-W.x,gt-W.z)<48)continue;let _t=N[me(St,H,mt)],Ut=me(St,H+1,mt);if(N[Ut])continue;let dt=Es(n+11,Mt,gt),Ft=Es(n+13,Mt,gt);_t===r.grass?dt<.012&&a.length?N[Ut]=a[Math.floor(Ft*a.length)]:dt<(tt==="plains"?.1:.05)&&r.tallgrass?N[Ut]=r.tallgrass:tt==="forest"&&dt<.08&&r.fern?N[Ut]=r.fern:tt==="forest"&&dt<.084&&r.mushR&&(N[Ut]=Ft<.5?r.mushR:r.mushB):_t===r.sand&&tt==="desert"&&H>on+1&&dt<.008&&r.deadbush&&(N[Ut]=r.deadbush)}for(let mt=2;mt<14;mt++)for(let St=2;St<14;St++){let Mt=st+St,gt=yt+mt,H=Y[(mt+1)*F+St+1],tt=it[mt*16+St],_t=N[me(St,H,mt)];if(Math.abs(Mt-W.x)<7&&Math.abs(gt-W.z)<7||nt.some(jt=>Math.abs(Mt-jt.x)<Dn+2&&Math.abs(gt-jt.z)<Dn+2))continue;let Ut=Es(n+7,Mt,gt),dt=Es(n+9,Mt,gt);if(tt==="desert"&&_t===r.sand&&H>on+1&&Ut<.008&&r.cactus){let jt=1+Math.floor(dt*3);for(let zt=H+1;zt<=H+jt&&zt<64;zt++)N[me(St,zt,mt)]=r.cactus;continue}if(tt==="snow"&&_t===r.snow&&Ut<.02){D(N,St,mt,H,5+Math.floor(dt*3));continue}let Ft=tt==="forest"?.035:tt==="plains"?.003:0;_t===r.grass&&Ut<Ft&&T(N,St,mt,H,Mt,gt,4+Math.floor(dt*2))}}function T(N,I,O,Y,F,it,W){let nt=Y+W;if(!(nt+2>=64)){for(let st=nt-2;st<=nt+1;st++){let yt=st>=nt?1:2;for(let mt=-yt;mt<=yt;mt++)for(let St=-yt;St<=yt;St++){if(yt===2&&Math.abs(St)===2&&Math.abs(mt)===2&&Ln(n,F+St,st,it+mt)<.6)continue;let Mt=me(I+St,st,O+mt);N[Mt]===r.air&&(N[Mt]=r.leaves)}}N[me(I,Y,O)]=r.dirt;for(let st=Y+1;st<=nt;st++)N[me(I,st,O)]=r.log}}function D(N,I,O,Y,F){let it=Y+F;if(!(it+2>=64)){for(let W=Y+2;W<=it+1;W++){let nt=it+1-W,st=nt>=4?2:nt>=1?1:0;for(let yt=-st;yt<=st;yt++)for(let mt=-st;mt<=st;mt++){if(st===2&&Math.abs(mt)+Math.abs(yt)>3)continue;let St=me(I+mt,W,O+yt);N[St]===r.air&&(N[St]=r.sleaves)}}N[me(I,Y,O)]=r.dirt;for(let W=Y+1;W<=it;W++)N[me(I,W,O)]=r.slog}}let V={height:m,baseHeight:g,biomeOf:A,climate:p,genChunk:w,findSpawn:b,SEA:on},G=of(n,V,e);return V.villages=G,V}function Ai(n,t,e,i,s,r){let a=i/2,o=Math.floor(n-a),l=Math.floor(n+a-1e-6),c=Math.floor(t),f=Math.floor(t+s-1e-6),h=Math.floor(e-a),u=Math.floor(e+a-1e-6);for(let d=c;d<=f;d++)for(let g=h;g<=u;g++)for(let y=o;y<=l;y++)if(r(y,d,g))return!0;return!1}function Vo(n,t,e,i,s={}){let r=s.w||.6,a=s.h||1.8,o=!!s.canStep,l=!1,c=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,h=Math.max(1,Math.ceil(f/.35)),u=e/h;for(let d=0;d<h;d++){let g=n.y+t.y*u;Ai(n.x,g,n.z,r,a,i)&&(t.y<0?(g=Math.floor(g)+1,l=!0,Ai(n.x,g,n.z,r,a,i)&&(g=n.y)):(g=Math.min(n.y,Math.ceil(g+a)-1-a),Ai(n.x,g,n.z,r,a,i)&&(g=n.y)),t.y=0),n.y=g;for(let y of["x","z"]){let m=t[y]*u;if(!m)continue;let p={x:n.x,y:n.y,z:n.z};if(p[y]+=m,!Ai(p.x,p.y,p.z,r,a,i)){n[y]=p[y];continue}if(o&&(l||s.grounded)){let L=Math.floor(n.y+.01)+1;if(L-n.y<=1.01&&!Ai(p.x,L,p.z,r,a,i)&&!Ai(n.x,L,n.z,r,a,i)){c+=L-n.y,n.y=L,n[y]=p[y];continue}}let A=r/2;n[y]=m>0?Math.floor(p[y]+A)-A-1e-4:Math.floor(p[y]-A)+1+A+1e-4,Ai(n.x,n.y,n.z,r,a,i)&&(n[y]=p[y]-m),t[y]=0}}return!l&&t.y<=0&&Ai(n.x,n.y-.02,n.z,r,a,i)&&(l=!0),{onGround:l,stepped:c}}function Go(n,t,e,i,s){let r=Math.floor(n.x),a=Math.floor(n.y),o=Math.floor(n.z),l=Math.sign(t.x),c=Math.sign(t.y),f=Math.sign(t.z),h=l?Math.abs(1/t.x):1/0,u=c?Math.abs(1/t.y):1/0,d=f?Math.abs(1/t.z):1/0,g=l?(l>0?r+1-n.x:n.x-r)*h:1/0,y=c?(c>0?a+1-n.y:n.y-a)*u:1/0,m=f?(f>0?o+1-n.z:n.z-o)*d:1/0,p=[0,0,0],A=0;for(;A<=e;){let L=i(r,a,o);if(L&&s(L))return{x:r,y:a,z:o,n:L,face:p,dist:A};g<y&&g<m?(r+=l,A=g,g+=h,p=[-l,0,0]):y<m?(a+=c,A=y,y+=u,p=[0,-c,0]):(o+=f,A=m,m+=d,p=[0,0,-f])}return null}var kc={};sl(kc,{HOTBAR:()=>Uc,SIZE:()=>Nc,add:()=>ln,canAdd:()=>Ar,count:()=>Nn,craft:()=>zc,craftable:()=>Xo,createInventory:()=>Ho,deserialize:()=>Bc,moveSlot:()=>Oc,remove:()=>Tr,serialize:()=>Wo,takeFromSlot:()=>Fc});var Nc=36,Uc=9;function Ho(n=36){return{slots:new Array(n).fill(null)}}function ln(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let a=n.slots[r];if(a&&a.id===t&&a.count<s){let o=Math.min(e,s-a.count);a.count+=o,e-=o}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let a=Math.min(e,s);n.slots[r]={id:t,count:a},e-=a}return e}function Nn(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Tr(n,t,e){if(Nn(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Fc(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Oc(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let a=Math.min(s.count,i(s.id)-r.count);r.count+=a,s.count-=a,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Ar(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return ln(s,t,e,i)===0}var Wo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function Bc(n,t=36){let e=Ho(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function Xo(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Nn(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function zc(n,t,e=()=>64,i){let s=Xo(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(a=>a&&{...a});for(let a in t.in)Tr(n,a,t.in[a]);return ln(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function V_(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Cs=(n,t)=>n.owned.includes(t),ff=(n,t)=>n?t?2:1:0;function Xi(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Cr(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function df(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function pf(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Cs(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Cr(n,e.price),n.owned.push(e.id),{ok:!0}):Ar(t,e.id,e.qty,i)?(Cr(n,e.price),ln(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var mf=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function gf(n){let t=V_(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function H_(){return new Map}function _f(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Vc(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function W_(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function xf(n){let t=H_();for(let e in n||{})t.set(e,W_(n[e]));return t}var qo=16;var pS=18;var ai=32;function yf(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Fe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],bt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function X_(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function oe(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function ri(n,t,e,i,s){let r=3+Math.floor(t()*2),a=[];for(let o=0;o<r;o++){let l=o/r*Math.PI*2+t()*.8;a.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}oe(n,a)}var q_=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open"]);function Y_(n,t){let e=Fe(t.color),i=yf(X_(t.block+t.face)),s=ai;if(q_.has(t.pattern)){$_(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=bt(e,1,r),n.fillRect(0,0,s,s);let a=t.pattern,o=t.accent?Fe(t.accent):null;if(a==="grass"&&t.face==="top"){n.fillStyle=bt(e,1.12);for(let h=0;h<4;h++)ri(n,i,i()*s,i()*s,5+i()*4)}if(a==="snow"&&t.face==="top"){n.fillStyle=bt(e,.96);for(let h=0;h<4;h++)ri(n,i,i()*s,i()*s,4+i()*4)}if((a==="grass"||a==="snow")&&t.face==="side"){let h=Fe(t.top);n.fillStyle=bt(h);let u=[[0,0],[s,0]];for(let d=s;d>=0;d-=4)u.push([d,8+Math.round(i()*5)]);oe(n,u)}if(a==="stone"||a==="bedrock")for(let h=0;h<5;h++)n.fillStyle=bt(e,i()<.5?.9:1.08),ri(n,i,i()*s,i()*s,4+i()*6);if(a==="ore"){for(let h=0;h<4;h++)n.fillStyle=bt(e,.92),ri(n,i,i()*s,i()*s,5);n.fillStyle=bt(o);for(let h=0;h<5;h++)ri(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(a==="sand")for(let h=0;h<26;h++)n.fillStyle=bt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(a==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=bt(e,.82),n.fillRect(h,0,2,s);if(a==="log"&&t.face!=="side"&&(n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=bt(e,1.05),n.fillRect(11,11,s-22,s-22)),a==="leaves")for(let h=0;h<9;h++)n.fillStyle=bt(e,i()<.5?.78:1.15),ri(n,i,i()*s,i()*s,3+i()*4);if(a==="planks"||a==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=bt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=bt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(a==="table"&&t.face==="top"&&(n.fillStyle=bt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),a==="table"&&t.face==="side"&&(n.fillStyle=bt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=bt([185,182,174]),oe(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=bt(e,.6),n.fillRect(21,14,2,10)),a==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",oe(n,[[6,24],[9,24],[24,9],[24,6]])),a==="water"){n.fillStyle=bt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(a==="gold"&&(n.fillStyle=bt(e,1.15),oe(n,[[0,0],[s,0],[0,s]]),n.fillStyle=bt(e,.9),oe(n,[[s,s],[s,8],[8,s]])),a==="lamp"&&(t.face==="side"?(n.fillStyle=bt(Fe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=bt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=bt(e,1.05),n.fillRect(8,8,s-16,s-16))),a==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=bt(Fe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=bt(Fe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=bt(o),n.fillRect(14,0,4,4)):(n.fillStyle=bt(Fe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),a==="bed"&&(t.face==="top"?(n.fillStyle=bt(o),n.fillRect(0,0,s,10),n.fillStyle=bt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=bt(Fe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=bt(o),n.fillRect(0,0,9,14))),a==="wool")for(let h=0;h<7;h++)n.fillStyle=bt(e,i()<.5?.94:1.04),ri(n,i,i()*s,i()*s,4+i()*4);if(a==="portal"&&(n.fillStyle=bt(o),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(o,1.3),oe(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=bt(Fe("#EFEBDD"),1,.8),oe(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=bt(o),n.fillRect(s/2-3,s/2-3,6,6)),a==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=bt(e,.9),n.fillRect(0,h,s,2);if(a==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=bt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=bt(Fe("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12);if(a==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",oe(n,[[4,22],[8,22],[22,6],[18,6]])),a==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",oe(n,[[6,24],[9,24],[24,9],[24,6]])),a==="paper"&&(n.fillStyle=bt(e,1.1),oe(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=bt(e,.92),oe(n,[[s,s],[s*.45,s],[s,s*.4]])),a==="stonebricks"||a==="mossy"&&t.block.includes("bricks")||a==="cracked"){n.fillStyle=bt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let u=h/8%2?0:8;for(let d=u;d<s;d+=16)n.fillRect(d,h,1,8)}}if(a==="mossy"){n.fillStyle=bt(o);for(let h=0;h<6;h++)ri(n,i,i()*s,i()*s,3+i()*4)}if(a==="cracked"&&(n.fillStyle=bt(e,.6),oe(n,[[4,2],[12,14],[10,15],[3,4]]),oe(n,[[20,18],[29,30],[27,31],[19,20]])),a==="chiseled"&&(n.fillStyle=bt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=bt(e,.85),n.fillRect(13,13,s-26,s-26)),a==="smooth"&&(n.fillStyle=bt(e,.9),n.fillRect(0,s/2,s,1)),a==="polished"&&(n.fillStyle=bt(e,1.08),oe(n,[[0,0],[s*.6,0],[0,s*.6]])),a==="bricks"){n.fillStyle=bt(Fe("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let u=h/8%2?0:8;for(let d=u;d<s;d+=16)n.fillRect(d,h,2,6)}}if(a==="checker"&&(n.fillStyle=bt(o),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),a==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let u of[3,18]){let d=3;for(;d<s-4;){let g=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(d,u+Math.floor(i()*3),g,11),d+=g+1}}n.fillStyle=bt(e,.7),n.fillRect(0,15,s,2)}if(a==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=bt(e,.8),n.fillRect(0,h,s,1);if(a==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=bt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=bt(Fe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=bt(e,.9),n.fillRect(8,8,s-16,s-16);if(a==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=bt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=bt(Fe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=bt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=bt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(a==="crate"&&(n.fillStyle=bt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),oe(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),a==="door"){for(let h=7;h<s;h+=8)n.fillStyle=bt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=bt(Fe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=bt(Fe("#26302A")),n.fillRect(24,17,3,3)}if(a==="lantern"&&(t.face==="side"?(n.fillStyle=bt(o),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=bt(e),n.fillRect(0,0,s,s),n.fillStyle=bt(Fe("#F2C46B")),n.fillRect(12,12,8,8))),a==="furnace"){for(let h=0;h<4;h++)n.fillStyle=bt(e,i()<.5?.9:1.08),ri(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=bt(o),n.fillRect(8,15,s-16,11),n.fillStyle=bt(Fe("#E0352B"),1,.85),oe(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=bt(e,.8),n.fillRect(9,9,s-18,s-18))}a==="stele"&&t.face==="side"&&(n.fillStyle=bt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=bt(o),oe(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let h=0;h<c.length;h+=4){let u=1+(i()-.5)*.09;c[h]=Math.min(255,c[h]*u),c[h+1]=Math.min(255,c[h+1]*u),c[h+2]=Math.min(255,c[h+2]*u)}n.putImageData(l,0,0);let f=a==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=f,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),a!=="glass"&&a!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function vf(n){let t=document.createElement("canvas");t.width=t.height=ai*qo;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let a=document.createElement("canvas");a.width=a.height=ai;let o=a.getContext("2d",{willReadFrequently:!0});Y_(o,s),e.drawImage(a,r%qo*ai,Math.floor(r/qo)*ai),i[r]=a}),{canvas:t,tileCanvas:i}}function Mf(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",oe(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",oe(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let a=t.tileCanvas,o=1/ai,l=(c,f,h,u,d,g,y,m)=>{r.setTransform(f*o,h*o,u*o,d*o,g,y),r.drawImage(a[c],0,0),m&&(r.fillStyle=`rgba(20,24,20,${m})`,r.fillRect(0,0,ai,ai))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),a=i.icon,o=i.color,l="#8C6640";r.save(),r.translate(24,24),a==="lump"?(r.fillStyle=o,oe(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",oe(r,[[-8,-12],[6,-14],[2,-4]])):a==="ingot"?(r.fillStyle=o,oe(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",oe(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4)):a==="hide"?(r.fillStyle=o,oe(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",oe(r,[[-6,-4],[6,-6],[4,6],[-5,5]])):a==="feather"?(r.rotate(-Math.PI/4),r.fillStyle=o,oe(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32)):a==="dye"?(r.fillStyle=o,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill()):a==="gem"?(r.fillStyle=o,oe(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",oe(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=a==="stick"?o:l,r.fillRect(-3,-14,6,32),r.fillStyle=o,a==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),a==="axe"&&oe(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),a==="shovel"&&oe(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),a==="sword"&&(r.fillRect(-4,-24,8,30),oe(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4))),r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",oe(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let a=0;a<4;a++)r.fillRect(12,14+a*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",oe(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function Sf(){let n=yf(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=ai;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let a=0;a<3+i*2;a++){let o=6+n()*20,l=6+n()*20,c=n()*Math.PI;oe(r,[[o,l],[o+Math.cos(c)*9,l+Math.sin(c)*9],[o+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function $_(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,a=t.accent?Fe(t.accent):e,o=(l,c,f)=>{n.fillStyle=f,n.fillRect(l,s-c,2,c)};if(r==="flower"){o(15,18,bt(e)),n.fillStyle=bt(e,1.1),oe(n,[[16,26],[9,20],[15,22]]),oe(n,[[17,24],[24,18],[18,21]]),n.fillStyle=bt(a);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;oe(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=bt(Fe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),f=14+Math.floor(i()*14);n.fillStyle=bt(e,i()<.5?.9:1.1),oe(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-f]])}else if(r==="deadbush")n.strokeStyle=bt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=bt(e),n.fillRect(14,18,4,14),n.fillStyle=bt(a),oe(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=bt(Fe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=bt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=bt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else r==="door_open"&&(n.fillStyle=bt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var bf=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,wf=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function Z_(n,t){let e=si(n),i=si(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(!a&&!r)continue;let o=(e+a)*16,l=(i+r)*16,c=n<o?o-n:n>=o+16?n-(o+16-1):0,f=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,f)<=14&&s.push([e+a,i+r])}return s}function Tf(n){let t=new Hn(n);t.magFilter=Ue,t.minFilter=Ue,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Ke({uniforms:e,vertexShader:bf,fragmentShader:wf}),s=new Ke({uniforms:e,vertexShader:bf,fragmentShader:wf,transparent:!0,depthWrite:!1,side:yn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Ef(n){let t=new en;return t.setAttribute("position",new Oe(n.pos,3)),t.setAttribute("uv",new Oe(n.uv,2)),t.setAttribute("light",new Oe(n.light,1)),t.setAttribute("lt",new Oe(n.lt,2,!0)),t.setIndex(new Oe(n.index,1)),t.computeBoundingSphere(),t}var Yo=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:a}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:a}),this.chunks=new Map,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",o=>this.onMsg(o.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Gi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new De(Ef(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new De(Ef(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}update(t,e){let i=si(t),s=si(e),r=rf(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=Gi(l.cx,l.cz);if(this.chunks.has(c))continue;let f={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,f),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:f.meshRev})}let a=this.rd+1.5,o=[];for(let[l,c]of this.chunks){let f=c.cx-i,h=c.cz-s;if(f*f+h*h>a*a){for(let u of["o","t"])c[u]&&(this.scene.remove(c[u]),c[u].geometry.dispose());this.chunks.delete(l),o.push(l)}}o.length&&this.worker.postMessage({type:"drop",keys:o.filter(l=>{let[c,f]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(f-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(Gi(si(t),si(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Ic(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Gi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Ic(t,e,i);if(!r)return!1;let a=Gi(r.cx,r.cz),o=this.chunks.get(a);if(!o||!o.vox)return!1;o.vox[r.i]=s,_f(this.diffs,a,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[f,h]of Z_(l,c)){let u=this.chunks.get(Gi(f,h));u&&u.state==="ready"&&(u.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:f,cz:h,rev:u.meshRev}))}return this.onDirty&&this.onDirty(a),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Gc="hw_world",Rr=null;function Af(n){n!==Gc&&(Gc=n,Rr=null)}function Cf(){return Rr||(Rr=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Gc,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Rr)}function Hc(n,t){return Cf().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),a=r.objectStore("kv"),o=t(a);r.oncomplete=()=>i(o instanceof IDBRequest?o.result:void 0),r.onerror=()=>s(r.error)}))}var Wc=n=>Hc("readonly",t=>t.get(n)),Xc=n=>Hc("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Rf(n){let t=await Cf();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),a=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));a.onsuccess=()=>{let o=a.result;o&&(s[o.key]=o.value,o.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function If(n){let t={};for(let e of n){let i=await Wc(e);i!==void 0&&(t[e]=i)}await Hc("readwrite",e=>e.clear()),await Xc(t)}function U(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var oi=n=>document.querySelector(n);var K_="../../",j_=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],qc=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],$o=null;function Q_(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Yc(){return $o||($o=(async()=>{for(let t of j_)await Q_(K_+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw $o=null,n})),$o}async function Pf(n,{onReward:t,onClose:e,count:i=5}){n.innerHTML="",n.hidden=!1;let s=U("div",{class:"panel quiz"});n.append(s),s.append(U("div",{class:"p-head"},U("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await Yc()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,o=[],l=0,c=0,f=0;function h(){n.hidden=!0,n.innerHTML="",e&&e()}function u(){o=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:qc,lv:1,count:i}),o.length||(o=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:i})),l=0,c=0,f=0,d()}function d(){s.innerHTML="";let m=o[l],p=a.isTyped(m);n._q=m;let A=U("div",{class:"fb"}),L=U("div",{class:"q-body"});s.append(U("div",{class:"p-head"},U("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",U("small",{},`\u7B2C ${l+1} / ${o.length} \u984C`)),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("div",{class:"q-type"},(a.TYPES[m.type]||"\u984C\u76EE")+(p?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),U("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?U("div",{class:"q-sub"},m.sub):null,L,A);let b=!1,E=w=>{if(b)return;b=!0;let C=ff(w,p);w&&(f++,c+=C,t&&t(C)),A.className="fb "+(w?"ok":"bad"),A.append(U("div",{},w?`\u7B54\u5C0D\u4E86\uFF01 +${C} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",w?null:U("b",{class:"en"},m.answer)),!w&&m.why?U("div",{class:"why"},m.why):null,U("button",{class:"btn",onclick:g},l+1<o.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let w=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),C=()=>{b||!w.value.trim()||E(r.check(m,w.value).ok)};w.addEventListener("keydown",_=>{_.stopPropagation(),_.key==="Enter"&&C()}),L.append(U("div",{class:"typerow"},w,U("button",{class:"btn",onclick:C},"\u9001\u51FA"))),setTimeout(()=>w.focus(),50)}else{let w=U("div",{class:"opts"});(m.options||[]).forEach(C=>w.append(U("button",{class:"opt"+(/[a-z]/i.test(C)?" en":""),onclick:_=>{if(b)return;let T=r.check(m,C).ok;_.currentTarget.classList.add(T?"ok":"bad"),E(T)}},C))),L.append(w)}}function g(){l++,l<o.length?d():y()}function y(){s.innerHTML="",s.append(U("div",{class:"p-head"},U("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("p",{class:"big"},`\u7B54\u5C0D ${f} / ${o.length} \u984C\uFF0C\u62FF\u5230 ${c} \u91D1\u5E63`),U("div",{class:"row"},U("button",{class:"btn",onclick:u},"\u518D\u4F86\u4E00\u56DE"),U("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}u()}var tx=new Set(qc);async function Lf(n,{ids:t=[],onDone:e}){n.innerHTML="",n.hidden=!1;let i=U("div",{class:"panel quiz"});n.append(i),i.append(U("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await Yc()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let r=window.KE,a=null;for(let d of t){let g=s.byId[d];if(g&&tx.has(g.type)){a=s.get(d);break}}let o=!!a;a||(a=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:qc,lv:1,count:1})[0]);let l=r.isTyped(a);n._q=a,i.innerHTML="";let c=U("div",{class:"fb"}),f=U("div",{class:"q-body"});i.append(U("div",{class:"p-head"},U("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),U("div",{class:"q-type"},(o?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[a.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),U("div",{class:"q-prompt"+(a.en?" en":"")},a.prompt),a.sub?U("div",{class:"q-sub"},a.sub):null,f,c);let h=!1,u=d=>{h||(h=!0,c.className="fb "+(d?"ok":"bad"),c.append(U("div",{},d?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",d?null:U("b",{class:"en"},a.answer)),!d&&a.why?U("div",{class:"why"},a.why):null,U("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(d,l)}},"\u7E7C\u7E8C")))};if(a.input==="type"){let d=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{h||!d.value.trim()||u(s.check(a,d.value).ok)};d.addEventListener("keydown",y=>{y.stopPropagation(),y.key==="Enter"&&g()}),f.append(U("div",{class:"typerow"},d,U("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>d.focus(),50)}else{let d=U("div",{class:"opts"});(a.options||[]).forEach(g=>d.append(U("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:y=>{if(h)return;let m=s.check(a,g).ok;y.currentTarget.classList.add(m?"ok":"bad"),u(m)}},g))),f.append(d)}}async function Df(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=U("div",{class:"panel quiz"});n.append(i),i.append(U("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Yc()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,a=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});a.length||(a=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let o=0,l=0,c=()=>{i.innerHTML="";let f=a[o];n._q=f;let h=U("div",{class:"fb"}),u=U("div",{class:"q-body"});i.append(U("div",{class:"p-head"},U("h2",{},t.title_zh+" ",U("small",{},`\u7B2C ${o+1} / ${a.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),U("div",{class:"q-type"},r.TYPES[f.type]||"\u984C\u76EE"),U("div",{class:"q-prompt"+(f.en?" en":"")},f.prompt),f.sub?U("div",{class:"q-sub"},f.sub):null,u,h);let d=!1,g=y=>{d||(d=!0,y&&l++,h.className="fb "+(y?"ok":"bad"),h.append(U("div",{},y?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",y?null:U("b",{class:"en"},f.answer)),!y&&f.why?U("div",{class:"why"},f.why):null,U("button",{class:"btn",onclick:()=>{o++,o<a.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,a.length))}},o+1<a.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(f.input==="type"){let y=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),m=()=>{d||!y.value.trim()||g(s.check(f,y.value).ok)};y.addEventListener("keydown",p=>{p.stopPropagation(),p.key==="Enter"&&m()}),u.append(U("div",{class:"typerow"},y,U("button",{class:"btn",onclick:m},"\u9001\u51FA"))),setTimeout(()=>y.focus(),50)}else{let y=U("div",{class:"opts"});(f.options||[]).forEach(m=>y.append(U("button",{class:"opt"+(/[a-z]/i.test(m)?" en":""),onclick:p=>{if(d)return;let A=s.check(f,m).ok;p.currentTarget.classList.add(A?"ok":"bad"),g(A)}},m))),u.append(y)}};c()}function Nf(n,t,e){let[i,s]=String(n).split(",").map(Number),r=f=>Ln(4242,i|0,t*7+f,s|0),a=e.professions[Math.floor(r(1)*e.professions.length)],o=e.quests,l=Math.floor(r(2)*o.length),c=(l+1+Math.floor(r(3)*(o.length-1)))%o.length;return{prof:a,quests:[o[l],o[c]]}}function Uf(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Cs(n,e.blueprint)?{ok:!1,reason:"owned"}:(Cr(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Ar(t,e.give,e.count,i)?(Cr(n,e.price),ln(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var $c=(n,t,e)=>!!(n&&n[t.id]===e);function Ff(n,t,e,i,s,r,a=()=>64){if($c(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Xi(s,t.reward.coins|0);let o={};for(let l in t.reward.items||{}){let c=ln(r,l,t.reward.items[l],a);c&&(o[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:o}}function Of(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Zc={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Zo=n=>n==="creative"?"creative":"survival",Bf=n=>Zc[Zo(n)].db;function zf(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function kf(n){let t=Zo(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Vf(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid).map(t=>t.id)}var Gf=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var ix=[1,2,4,6,8];function Jo(n,t){if(!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/ix[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Jc(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let a=r.durability;return s.dur=(s.dur==null?a:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:a}}function Hf(n,t){let e=n&&t.toolOf(n.id);if(!e)return null;let i=e.durability,s=n.dur==null?i:n.dur;return{left:s,max:i,frac:s/i}}var nh={};sl(nh,{collect:()=>th,createFurnace:()=>Kc,dismantle:()=>eh,start:()=>jc,tick:()=>Qc});function Kc(){return{fuel:0,jobs:[],done:{}}}function jc(n,t,e,i=4){if(Nn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Nn(t,"coal")<1)return{ok:!1,reason:"fuel"};Tr(t,"coal",1),n.fuel+=i}return Tr(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Qc(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function th(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=ln(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function eh(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var ch={};sl(ch,{MAX_HP:()=>Ko,REGEN_EVERY:()=>rx,SAFE_FALL:()=>sx,createHealth:()=>ih,damage:()=>rh,fallDamage:()=>sh,hearts:()=>lh,regen:()=>ah,respawnPoint:()=>oh});var Ko=20,sx=4,rx=4;function ih(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function sh(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function rh(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function ah(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function oh(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function lh(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var jo={animal:8,quiz:4};function Wf(){return{list:[],nextId:1}}var Qo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Xf(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function qf(n,t){return n<.2&&!t}function Yf(n,t,e){return n.kind==="quiz"?t>.45||e>48:e>72}function $f(n,t,e,i){let s=n.def,r=t.x-n.p.x,a=t.z-n.p.z,o=Math.hypot(r,a);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-a));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,f=Math.hypot(l,c);if(f>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/f*s.speed,n.v.z=c/f*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&o<16){n.yaw=Math.atan2(-r,-a);let l=o>1.6?s.speed:0;n.v.x=r/(o||1)*l,n.v.z=a/(o||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Zf(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var Jf=(n,t)=>n?(t?2:1)+1:0;function Kf(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],a=[e.x+i/2,e.y+s,e.z+i/2],o=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,f=1/0;for(let h=0;h<3;h++){if(Math.abs(l[h])<1e-9){if(o[h]<r[h]||o[h]>a[h])return null;continue}let u=(r[h]-o[h])/l[h],d=(a[h]-o[h])/l[h];if(u>d&&([u,d]=[d,u]),c=Math.max(c,u),f=Math.min(f,d),c>f)return null}return c}function jf(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var Qf=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function td(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function ed(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let a=r.reward.coins|0,o=Object.assign({},r.reward.items),l={};Xi(i,a);for(let c in o){let f=ln(e,c,o[c],s);f&&(l[c]=f)}return{ok:!0,coins:a,items:o,leftovers:l,name_zh:r.name_zh}}function nd(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function hh(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function id(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:hh(n[e].map,n,t).ok?n[e]:null}var Yn={};function Rs(n){return Yn[n]||(Yn[n]=new An({color:n,transparent:!0}),Yn[n].userData.base=new re(n)),Yn[n]}var Ir=null;function lx(){if(Ir)return Ir;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Ir=new Hn(n),Ir.colorSpace=Ge,Ir}function sd(n,t){let e=new Tn,i=n.colors,[s,r]=n.size,a=(l,c,f,h,u,d,g,y)=>{let m=new De(new dn(l,c,f),y||Rs(h));return m.position.set(u,d,g),e.add(m),m},o=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let f=a(.2,.6,.22,i.leg,c,.6,0);f.geometry.translate(0,-.6/2,0),o.push(f)}a(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])a(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);a(.42,.42,.4,i.head,0,.6+.78+.22,0),a(.5,.1,.48,i.hat,0,.6+.78+.46,0),a(.32,.14,.3,i.hat,0,.6+.78+.56,0),a(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=a(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Yn.__face||(Yn.__face=new An({map:lx(),transparent:!0}),Yn.__face.userData.base=new re("#ffffff"));let c=[Rs(i.head),Rs(i.head),Rs(i.head),Rs(i.head),Rs(i.head),Yn.__face],f=new De(new dn(s*.9,s*.8,s*.8),c);f.position.set(0,r*.72+s*.4,0),e.add(f),o.push(a(.18,.24,.18,i.head,-.2,.12,0),a(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);a(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&a(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let f=n.id==="chicken"?.3:.45,h=a(f,f,f,i.head,0,l+c+f*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(a(.08,.12,.14,i.comb,0,h.position.y+f/2+.05,h.position.z),a(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-f/2-.05));let u=n.id==="chicken"?.06:.18,d=n.id==="chicken"?0:s*.45,g=s*.3;for(let[y,m]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-g,-d],[g,-d],[-g,d],[g,d]]){let p=a(u,l,u,i.leg,y,l/2,m);p.geometry.translate(0,-l/2,0),p.position.y=l,o.push(p)}}return e.userData.legs=o,e}function rd(n){for(let t in Yn){let e=Yn[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function uh(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,a)=>{r.rotation.x=a%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var tl="cca9dda0bf",fh=new URLSearchParams(location.search),ux=720,od=5,fx=20261008,dx=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,M={touch:dx,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function ld(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function cd(n,t){try{localStorage.setItem(n,t)}catch{}}async function px(){let n=Zo(ld("hw_mode","survival")),t=kf(n);Af(Bf(n));let[e,i,s,r,a,o]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json"].map(v=>fetch(v,{cache:"no-cache"}).then(P=>P.json()))),l=sf(e),c=i.recipes||[],f=v=>l.maxStack(v),h={};try{let[v,P,J,Q,j,rt,ht]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests"].map(Wc));h={meta:v,player:P,inv:J,coins:Q,furnaces:j,claimed:rt,quests:ht,chunks:await Rf("hw_chunk:")}}catch(v){console.warn("save unavailable",v)}let u=h.meta&&h.meta.seed||fx+Zc[n].seedOffset,d=uf(u,l,a),g=xf(Object.fromEntries(Object.entries(h.chunks||{}).map(([v,P])=>[v.slice(9),P]))),y=h.inv?Bc(h.inv):Ho();t.creative&&!h.inv&&Gf.forEach((v,P)=>{l.get(v)&&(y.slots[P]={id:v,count:64})});let m=gf(h.coins),p=ih(h.player&&h.player.hp!=null?h.player.hp:20);M.bed=h.player&&h.player.bed||null;let A=r.portals||[],L=Array.isArray(h.claimed)?h.claimed.slice():[],b=h.furnaces||{},E=h.quests||{},w=i.smelt||[],C=i.fuelPerCoal||4;h.meta&&typeof h.meta.time=="number"&&(M.time=h.meta.time);let _=oi("#c"),T=new Bo({canvas:_,antialias:!1,powerPreference:"high-performance"});T.setPixelRatio(Math.min(window.devicePixelRatio||1,M.touch?1.5:1.25));let D=new Qs,V=new re("#EFEBDD");D.background=V;let G=new Je(72,1,.08,200);G.rotation.order="YXZ";let N=vf(l),I=Mf(l,N),O=Tf(N.canvas),Y=new Worker("assets/hw-worker.js?v="+tl),F=new Yo({scene:D,mats:O,reg:l,worker:Y,diffs:g,onDirty:v=>M.dirty.add(v)}),it=Math.max(2,Math.min(6,parseInt(fh.get("rd")||ld("hw_rd",M.touch?"3":"4"),10)||4));F.setRenderDistance(it),G.far=it*16+40,G.updateProjectionMatrix();let W=await new Promise(v=>{let P=J=>{J.data.type==="ready"&&(Y.removeEventListener("message",P),v(J.data.spawn))};Y.addEventListener("message",P),Y.postMessage({type:"init",seed:u,blocks:e,structures:a,diffs:Object.fromEntries([...g].map(([J,Q])=>[J,Vc(Q)]))})});h.player?Object.assign(M,{p:{x:h.player.x,y:h.player.y,z:h.player.z},yaw:h.player.yaw||0,pitch:h.player.pitch||0,fly:!!h.player.fly,sel:h.player.sel|0}):(M.p={x:W.x,y:W.y,z:W.z},M.yaw=Math.atan2(-(W.stele.x+.5-W.x),-(W.stele.z+.5-W.z)),M.pitch=-.15);let nt=new rr(new lr(new dn(1.004,1.004,1.004)),new gs({color:1382164,transparent:!0,opacity:.45}));nt.visible=!1,D.add(nt);let st=Sf().map(v=>new Hn(v)),yt=new De(new dn(1.01,1.01,1.01),new An({map:st[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));yt.visible=!1,D.add(yt);let mt=(v,P)=>{let J=document.createElement("canvas");J.width=J.height=64;let Q=J.getContext("2d");Q.fillStyle=v,Q.beginPath(),Q.arc(32,32,28,0,7),Q.fill(),P&&(Q.globalCompositeOperation="destination-out",Q.beginPath(),Q.arc(44,26,24,0,7),Q.fill());let j=new Hn(J);return j.colorSpace=Ge,j},St=new Oi(new _i({map:mt("#F2C46B"),depthWrite:!1,fog:!1})),Mt=new Oi(new _i({map:mt("#EDE6D0",!0),depthWrite:!1,fog:!1}));D.add(St,Mt);let gt=new Tn,H=(v,P,J,Q,j,rt,ht)=>{let xt=new De(new dn(v,P,J),new An({color:Q}));return xt.position.set(j,rt,ht),xt.userData.base=new re(Q),gt.add(xt),xt},tt=H(.24,.75,.26,"#26302A",-.14,.375,0),_t=H(.24,.75,.26,"#26302A",.14,.375,0);H(.56,.7,.3,"#2F5A34",0,1.1,0);let Ut=H(.18,.66,.2,"#E7CDA6",-.38,1.12,0),dt=H(.18,.66,.2,"#E7CDA6",.38,1.12,0);H(.46,.42,.42,"#E7CDA6",0,1.66,0),H(.5,.14,.46,"#151714",0,1.9,.02),H(.12,.12,.05,"#E0352B",.16,1.92,-.24),[tt,_t,Ut,dt].forEach(v=>{v.geometry.translate(0,-v.geometry.parameters.height/2+.05,0),v.position.y+=v.geometry.parameters.height/2-.05}),gt.visible=!1,D.add(gt);let Ft={},jt=v=>Ft[v]||(Ft[v]=(()=>{let P=new Image;P.src=I[v];let J=new qe(P);return J.colorSpace=Ge,P.onload=()=>{J.needsUpdate=!0},new _i({map:J,depthWrite:!0,alphaTest:.3})})());function zt(v,P,J,Q){let j=new Oi(jt(v));j.scale.set(.42,.42,1),D.add(j),M.drops.push({id:v,s:j,p:{x:P,y:J,z:Q},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let $t=(v,P,J)=>l.flat.solid[F.get(v,P,J)]===1,Qt=Object.fromEntries((s.mobs||[]).map(v=>[v.id,v])),Bt=Wf(),te=new Map,be=0;function Te(v,P){for(let J=61;J>0;J--){let Q=F.get(v,J,P);if(l.flat.solid[Q])return F.get(v,J+1,P)||F.get(v,J+2,P)?null:{y:J+1,n:Q};if(l.flat.liquid[Q])return null}return null}function ge(v,P,J,Q=7){for(let j=-Q;j<=Q;j++)for(let rt=-Q;rt<=Q;rt++)for(let ht=-Q;ht<=Q;ht++)if(l.flat.lightEmit[F.get(v+ht,P+j,J+rt)])return!0;return!1}function _e(v,P,J,Q,j){let rt=Xf(Bt,v,{x:P+.5,y:J,z:Q+.5}),ht=sd(v,j);return te.set(rt.id,ht),D.add(ht),rt}let z=new Set;function Ae(){for(let v of d.villages.around(M.p.x-64,M.p.z-64,M.p.x+64,M.p.z+64))if(!(z.has(v.id)||!F.ready(v.x,v.z))){z.add(v.id);for(let P=0;P<v.villagers;P++){let J=Nf(v.id,P,o),Q=v.x+(P%2?2:-2),j=v.z+(P-1),rt=Te(Q,j),ht=_e(Qt.villager,Q,rt?rt.y:v.y+1,j,J.prof.color);Object.assign(ht,{home:{x:v.x,z:v.z},village:v.id,role:J})}}}function ue(v){Qt.villager&&Ae();let P=Math.random()*Math.PI*2,J=14+Math.random()*14,Q=Math.floor(M.p.x+Math.cos(P)*J),j=Math.floor(M.p.z+Math.sin(P)*J);if(!F.ready(Q,j))return;let rt=Te(Q,j);if(rt)if(Qo(Bt,"animal")<jo.animal&&rt.n===l.num("grass")&&v>.3){let ht=Object.values(Qt).filter(Yt=>Yt.kind==="animal"),xt=ht[Math.floor(Math.random()*ht.length)],vt=1+Math.floor(Math.random()*3);for(let Yt=0;Yt<vt&&Qo(Bt,"animal")<jo.animal;Yt++){let se=Q+Yt%2,Me=j+(Yt>>1),Re=Te(se,Me);Re&&_e(xt,se,Re.y,Me)}}else t.quizMobs&&Qo(Bt,"quiz")<jo.quiz&&qf(v,ge(Q,rt.y,j))&&Qt.quizling&&_e(Qt.quizling,Q,rt.y,j)}function R(v,P,J){be+=v,be>2.5&&M.started&&(be=0,ue(P));for(let Q=Bt.list.length-1;Q>=0;Q--){let j=Bt.list[Q],rt=te.get(j.id),ht=Math.hypot(j.p.x-M.p.x,j.p.z-M.p.z);if(j.gone){j.goneT=(j.goneT||0)+v,uh(rt,j,J/1e3),j.goneT>.35&&(D.remove(rt),te.delete(j.id),Bt.list.splice(Q,1));continue}if(Yf(j,P,ht)){j.gone=!0,j.goneT=0,j.village&&z.delete(j.village);continue}if(!F.ready(j.p.x,j.p.z))continue;$f(j,M.p,v,Math.random),j.v.y-=20*v,j.v.y<-20&&(j.v.y=-20);let xt=Vo(j.p,j.v,v,$t,{w:Math.min(.9,j.def.size[0]),h:j.def.size[1],canStep:!0,grounded:j.onGround});j.onGround=xt.onGround,l.flat.liquid[F.get(j.p.x,j.p.y+.3,j.p.z)]&&(j.v.y=2),uh(rt,j,J/1e3)}rd(.35+.65*P)}function x(v,P,J){let Q,j;v==="screen"?(hn.set(P/innerWidth*2-1,-(J/innerHeight)*2+1,.5).unproject(G).sub(G.position).normalize(),Q={x:G.position.x,y:G.position.y,z:G.position.z},j={x:hn.x,y:hn.y,z:hn.z}):(Q=Ri(),j=Yi());let rt=v==="screen"?_n("screen",P,J):_n("center"),ht=null,xt=M.view==="tp"&&v==="screen"?8:4.5;rt&&(xt=Math.min(xt,rt.dist+.5));for(let vt of Bt.list){if(vt.gone)continue;let Yt=Kf(Q,j,vt.p,vt.def.size[0],vt.def.size[1]);Yt!=null&&Yt<xt&&(xt=Yt,ht=vt)}return ht}function X(){try{return jf(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function K(v){if(v.kind==="villager"){if(!t.trading){ft("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}Ps(v);return}if(v.kind==="animal"){let J=y.slots[M.sel],Q=!!(J&&l.toolOf(J.id)&&l.toolOf(J.id).type==="sword"),j=Zf(v,Q,Math.random);if(v.v.y=4,v.v.x+=(v.p.x-M.p.x)*1.5,v.v.z+=(v.p.z-M.p.z)*1.5,Q){let rt=Jc(y,M.sel,l);rt.broke&&ft(`\u4F60\u7684${l.name(rt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Lt()}if(j&&j.drops)for(let rt=0;rt<j.drops.n;rt++)zt(j.drops.id,v.p.x,v.p.y+.6,v.p.z);return}if(v.busy)return;v.busy=!0,Un(),document.pointerLockElement&&document.exitPointerLock(),M.overlay="ask";let P=X().slice(0,30).sort(()=>Math.random()-.5);Lf(at.ov,{ids:P,onDone:(J,Q)=>{if(M.overlay=null,v.busy=!1,J){let j=Jf(!0,Q);Xi(m,j),lt(),v.gone=!0,v.goneT=0,ft(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${j} \u91D1\u5E63`),M.dirtyMeta=!0,Tt(),M.stats.quizWins=(M.stats.quizWins||0)+1}else if(J===!1){let j=M.p.x-v.p.x,rt=M.p.z-v.p.z,ht=Math.hypot(j,rt)||1;M.v.x=j/ht*7,M.v.z=rt/ht*7,M.v.y=4.5,v.p.x-=j/ht*1.5,v.p.z-=rt/ht*1.5,ft("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let ot=(v,P,J)=>F.get(v,P,J),at=mx();function ft(v){let P=U("div",{class:"toast"},v);at.toasts.append(P),setTimeout(()=>P.remove(),2200)}function lt(){at.coins.textContent=m.coins}let ut="";function Et(){let v=lh(p.hp),P=v.join();P!==ut&&(ut=P,at.hearts.innerHTML="",v.forEach(J=>at.hearts.append(U("i",{class:"ht "+J}))))}function qt(v){if(M.dead||v<=0||!t.damage)return;let P=rh(p,v);Et(),M.dirtyMeta=!0,at.flash.classList.remove("on"),at.flash.offsetWidth,at.flash.classList.add("on"),P&&Rt()}function Rt(){M.dead=!0,Un(),document.pointerLockElement&&document.exitPointerLock(),M.overlay="dead";let v=at.ov;v.innerHTML="",v.hidden=!1,v.append(U("div",{class:"panel start"},U("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),U("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),U("button",{class:"btn big",onclick:At},M.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function At(){let v=oh(M.bed,W,!!M.bed);M.p={x:v.x,y:v.y,z:v.z},M.v={x:0,y:0,z:0},M.fallTop=v.y,p.hp=20,M.dead=!1,Et(),Le(),M.dirtyMeta=!0,ft(M.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Lt(){at.hotbar.innerHTML="";for(let P=0;P<9;P++){let J=y.slots[P];at.hotbar.append(U("button",{class:"slot"+(P===M.sel?" on":""),"aria-label":J?l.name(J.id):"\u7A7A\u683C",onpointerdown:Q=>{Q.stopPropagation(),M.sel=P,Lt()}},J?U("img",{src:I[J.id],alt:""}):null,J&&J.count>1?U("span",{class:"cnt"},J.count):null,Zt(J),U("span",{class:"key"},P+1)))}let v=y.slots[M.sel];at.selName.textContent=v?l.name(v.id):""}function Zt(v){let P=Hf(v,l);return!P||P.left>=P.max?null:U("span",{class:"dur"+(P.frac<.25?" low":"")},U("i",{style:"width:"+Math.round(P.frac*100)+"%"}))}function ne(v=4){let P=new Set,J=Math.floor(M.p.x),Q=Math.floor(M.p.y),j=Math.floor(M.p.z);for(let rt=-v;rt<=v;rt++)for(let ht=-v;ht<=v;ht++)for(let xt=-v;xt<=v;xt++){let vt=F.get(J+xt,Q+rt,j+ht);vt&&P.add(l.get(vt).id)}return P}let k=()=>({near:ne(),owned:new Set(m.owned)}),wt=-1;function ct(){let v=at.ov;v.innerHTML="",v.hidden=!1;let P=U("div",{class:"inv-grid"}),J=xt=>{let vt=y.slots[xt];return U("button",{class:"slot"+(xt===wt?" pick":"")+(xt<9?" hb":""),title:vt?l.name(vt.id):"",onclick:()=>{wt<0?y.slots[xt]&&(wt=xt):(Oc(y,wt,xt,f),wt=-1,M.dirtyMeta=!0),ct(),Lt()}},vt?U("img",{src:I[vt.id],alt:""}):null,vt&&vt.count>1?U("span",{class:"cnt"},vt.count):null,Zt(vt))};for(let xt=9;xt<36;xt++)P.append(J(xt));let Q=U("div",{class:"inv-grid hbrow"});for(let xt=0;xt<9;xt++)Q.append(J(xt));let j=U("div",{class:"craft"},U("h3",{},"\u5408\u6210"));if(t.creative){let xt=U("div",{class:"craft"},U("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),U("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),vt=U("div",{class:"cat-grid"});Vf(l).forEach(Yt=>vt.append(U("button",{class:"slot",title:l.name(Yt),onclick:()=>{y.slots[M.sel]={id:Yt,count:64},M.dirtyMeta=!0,Lt(),ct(),ft(`${l.name(Yt)} \u653E\u9032\u7B2C ${M.sel+1} \u683C`)}},U("img",{src:I[Yt],alt:""})))),xt.append(vt),v.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("div",{class:"inv-wrap"},U("div",{},U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),P,Q),xt)));return}let rt=k(),ht={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};c.forEach(xt=>{let vt=Xo(y,xt,rt),Yt=vt.ok;xt.blueprint&&vt.reason==="blueprint"&&!Object.keys(xt.in).some(se=>se!=="stick"&&Nn(y,se)>0)||j.append(U("div",{class:"rcp"+(Yt?"":" no")},U("img",{src:I[xt.out.id],alt:""}),U("div",{class:"rcp-t"},U("b",{},`${xt.name_zh} \xD7${xt.out.count}`),U("small",{},Object.keys(xt.in).map(se=>`${l.name(se)} ${Nn(y,se)}/${xt.in[se]}`).join("\u3001")+(ht[vt.reason]?"\u3000\xB7 "+ht[vt.reason]:""))),U("button",{class:"btn small",onclick:()=>{let se=zc(y,xt,f,k());se.ok?(ft(`\u505A\u597D\u4E86\uFF1A${xt.name_zh} \xD7${xt.out.count}`),M.dirtyMeta=!0):ft({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[se.reason]||"\u6750\u6599\u4E0D\u5920"),ct(),Lt()}},"\u88FD\u4F5C")))}),v.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u80CC\u5305"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("div",{class:"inv-wrap"},U("div",{},U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),P,Q),j)))}let Ct=df(l);function Nt(){let v=at.ov;v.innerHTML="",v.hidden=!1;let P=U("div",{class:"shop"}),J=id(A,sn());Ct.filter(Q=>!Q.id.startsWith("portal_")||J&&Q.id===J.block).forEach(Q=>P.append(U("div",{class:"offer"+(Q.locked?" locked":"")},U("img",{src:I[Q.id],alt:""}),U("div",{class:"of-t"},U("b",{},`${Q.name_zh}${Q.qty>1?" \xD7"+Q.qty:""}`),U("small",{},Q.locked?`\uFF08${Q.locked}\uFF09`:`${Q.price} \u91D1\u5E63${Q.desc?"\u3000"+Q.desc:""}`)),Cs(m,Q.id)?U("span",{class:"owned"},"\u5DF2\u64C1\u6709"):U("button",{class:"btn small",disabled:Q.locked?!0:null,onclick:()=>pt(Q)},Q.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),v.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u5546\u5E97\u3000",U("span",{class:"coin"}),` ${m.coins}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),P))}function pt(v){let P=pf(m,y,v,f);P.ok?(ft(v.blueprint?`\u62FF\u5230 ${v.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${v.name_zh} \xD7${v.qty}`),M.dirtyMeta=!0,lt(),Lt(),Tt()):ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[P.reason]||"\u8CB7\u4E0D\u4E86"),Nt()}let Xt=null;function kt(){let v=at.ov,P=b[Xt]||(b[Xt]=Kc());v.innerHTML="",v.hidden=!1;let J=P.jobs[0],Q=U("div",{class:"shop"});w.forEach(rt=>{let ht=Nn(y,rt.in);Q.append(U("div",{class:"offer"+(ht?"":" locked")},U("img",{src:I[rt.in],alt:""}),U("div",{class:"of-t"},U("b",{},`${l.name(rt.in)} \u2192 ${l.name(rt.out)}`),U("small",{},`\u6709 ${ht} \u500B \xB7 \u6BCF\u500B ${rt.time} \u79D2`)),U("button",{class:"btn small",onclick:()=>{let xt=jc(P,y,rt,C);xt.ok||ft(xt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),M.dirtyMeta=!0,Lt(),kt()}},"\u653E\u9032\u53BB")))});let j=Object.values(P.done).reduce((rt,ht)=>rt+ht,0);v.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u7194\u7210"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,P.fuel-P.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Nn(y,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${C} \u500B\uFF09`),U("div",{class:"furnace-st"},J?`\u6B63\u5728\u71D2\uFF1A${l.name(J.in)}\uFF08\u9084\u8981 ${Math.ceil(J.left)} \u79D2\uFF0C\u6392\u968A ${P.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),U("div",{class:"row"},U("button",{class:"btn",disabled:j?null:!0,onclick:()=>{let rt=th(P,y,f);rt&&ft(`\u62FF\u51FA ${rt} \u500B`),M.dirtyMeta=!0,Lt(),kt()}},`\u62FF\u51FA\u4F86\uFF08${j}\uFF09`)),Q))}let ye=null,de=(v,P)=>{try{return JSON.parse(localStorage.getItem(v)||"null")||P}catch{return P}},sn=()=>nd(de("hw_portal_rewards",[]),de("hi_save",null),A),gn='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function el(){let v=A.find(j=>j.map===ye),P=at.ov;if(P.innerHTML="",P.hidden=!1,!v){Le();return}let J=Object.keys(v.reward.items).map(j=>`${l.name(j)} \xD7${v.reward.items[j]}`).join("\u3001"),Q=hh(v.map,A,sn());if(!Q.ok){P.append(U("div",{class:"panel start"},U("div",{class:"p-head"},U("h2",{},"\u50B3\u9001\u9580\u30FB"+v.name_zh),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("div",{class:"padlock",html:gn}),U("p",{class:"big"},`\u5148\u6253\u5012 ${Q.need.boss_zh} \u624D\u80FD\u9032\u5165`),U("p",{class:"muted"},`\u5F9E\u300C${Q.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${Q.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:Le},"\u77E5\u9053\u4E86"))));return}P.append(U("div",{class:"panel start"},U("div",{class:"p-head"},U("h2",{},"\u50B3\u9001\u9580\u30FB"+v.name_zh),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${v.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${v.reward.coins} \u91D1\u5E63\u3001${J}\u3002`),U("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),U("div",{class:"row"},U("button",{class:"btn big",onclick:async()=>{await Tt(),M.leaving=Qf(v.map),location.href=M.leaving}},"\u9032\u5165"),U("button",{class:"btn ghost",onclick:Le},"\u5148\u4E0D\u8981"))))}function Is(){if(!t.portals)return 0;let v;try{v=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{v=[]}let P=td(v,L);for(let J of P){let Q=ed(J,A,y,m,f);if(L.push(J.id),!!Q.ok){for(let j in Q.leftovers)for(let rt=0;rt<Q.leftovers[j];rt++)zt(j,M.p.x,M.p.y+1,M.p.z);ft(`\u5F9E${Q.name_zh}\u5E36\u56DE\u4F86\uFF1A${Q.coins} \u91D1\u5E63\u3001${Object.keys(Q.items).map(j=>l.name(j)+" \xD7"+Q.items[j]).join("\u3001")}`)}}return P.length&&(lt(),Lt(),M.dirtyMeta=!0,Tt()),P.length}let li=null;function Ps(v){li=v,v.busy=!0,cn("trade")}function Ls(){let v=li,P=at.ov;if(!v)return Le();P.innerHTML="",P.hidden=!1;let J=v.role,Q=Of(),j=U("div",{class:"shop"});J.prof.offers.forEach(ht=>{let xt=ht.blueprint||ht.give,vt=!!ht.blueprint,Yt=vt&&l.blueprints.find(Me=>Me.id===ht.blueprint),se=vt&&Cs(m,ht.blueprint);j.append(U("div",{class:"offer"},U("img",{src:I[xt],alt:""}),U("div",{class:"of-t"},U("b",{},vt?Yt.name_zh:`${l.name(xt)}${ht.count>1?" \xD7"+ht.count:""}`),U("small",{},`${ht.price} \u91D1\u5E63${vt?"\u3000"+(Yt.desc||""):""}`)),se?U("span",{class:"owned"},"\u5DF2\u64C1\u6709"):U("button",{class:"btn small",onclick:()=>{let Me=Uf(m,y,ht,f);Me.ok?(ft(vt?`\u62FF\u5230 ${Yt.name_zh}\uFF01`:`\u8CB7\u5230 ${l.name(xt)} \xD7${ht.count}`),M.dirtyMeta=!0,lt(),Lt(),Tt()):ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[Me.reason]||"\u8CB7\u4E0D\u4E86"),Ls()}},"\u8CFC\u8CB7")))});let rt=U("div",{class:"quests"});J.quests.forEach(ht=>{let xt=$c(E,ht,Q),vt=Object.keys(ht.reward.items||{}).map(Yt=>`${l.name(Yt)} \xD7${ht.reward.items[Yt]}`).join("\u3001");rt.append(U("div",{class:"offer quest"+(xt?" locked":"")},U("div",{class:"of-t"},U("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+ht.title_zh),U("small",{},`${ht.desc}\uFF0C\u7B54\u5C0D ${ht.need} \u984C \u2192 ${ht.reward.coins} \u91D1\u5E63\u3001${vt}`)),xt?U("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):U("button",{class:"btn small",onclick:()=>{M.overlay="quest",Df(at.ov,{quest:ht,onDone:Yt=>{if(M.overlay="trade",Yt>=0){let se=Ff(E,ht,Yt,Q,m,y,f);if(se.ok){for(let Me in se.leftovers)for(let Re=0;Re<se.leftovers[Me];Re++)zt(Me,M.p.x,M.p.y+1,M.p.z);ft(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${se.coins} \u91D1\u5E63\u3001${vt}`),lt(),Lt(),M.dirtyMeta=!0,Tt(),M.stats.quests=(M.stats.quests||0)+1}else ft(`\u7B54\u5C0D ${Yt} \u984C\uFF0C\u8981 ${ht.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Ls()}})}},"\u63A5\u59D4\u8A17")))}),P.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},`\u6751\u6C11\u30FB${J.prof.name_zh}\u3000`,U("span",{class:"coin"}),` ${m.coins}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("h3",{},"\u4EA4\u6613"),j,U("h3",{},"\u82F1\u6587\u59D4\u8A17"),U("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),rt))}function Pr(){let v=at.ov;v.innerHTML="",v.hidden=!1;let P=U("b",{},F.rd),J=U("input",{type:"range",min:2,max:6,step:1,value:F.rd,oninput:Q=>{P.textContent=Q.target.value},onchange:Q=>{let j=+Q.target.value;F.setRenderDistance(j),G.far=j*16+40,G.updateProjectionMatrix(),cd("hw_rd",j)}});v.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u8A2D\u5B9A"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),U("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",P,J),U("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:Ds},"\u91CD\u7F6E\u4E16\u754C"),t.creative?U("button",{class:"btn",onclick:()=>qi("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):U("button",{class:"btn",onclick:$n},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),U("div",{id:"pinbox"}),U("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),U("p",{},U("a",{class:"home-link",href:"../../#s/game",onclick:()=>{Tt()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),U("p",{class:"muted small"},"\u7248\u672C "+tl)))}async function qi(v){await Tt(),cd("hw_mode",v),M.resetting=!0,location.reload()}function $n(){let v=document.getElementById("pinbox"),P=window.KSParentPin;if(v.innerHTML="",!P||!P.isSet()){v.append(U("div",{class:"pin-ask"},U("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),U("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let J=U("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),Q=()=>{let j=zf(P,J.value.trim());j.ok?qi("creative"):(ft(j.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),J.value="")};J.addEventListener("keydown",j=>{j.stopPropagation(),j.key==="Enter"&&Q()}),v.append(U("div",{class:"pin-ask"},U("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),U("div",{class:"typerow"},J,U("button",{class:"btn",onclick:Q},"\u78BA\u5B9A")))),setTimeout(()=>J.focus(),50)}async function Ds(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){M.resetting=!0;try{await If(["hw_coins"])}catch(v){console.warn(v)}location.reload()}}function cn(v){document.pointerLockElement&&document.exitPointerLock(),M.overlay=v,Un(),v==="inv"?(wt=-1,ct()):v==="shop"?Nt():v==="set"?Pr():v==="furnace"?kt():v==="portal"?el():v==="trade"?Ls():v==="quiz"&&Pf(at.ov,{onReward:P=>{Xi(m,P),lt(),M.dirtyMeta=!0,Tt()},onClose:()=>{M.overlay=null}})}function Le(){at.ov.hidden=!0,at.ov.innerHTML="",M.overlay=null,li&&(li.busy=!1,li=null)}at.btnInv.onclick=()=>M.overlay==="inv"?Le():cn("inv"),at.btnShop.onclick=()=>M.overlay==="shop"?Le():cn("shop"),at.btnSet.onclick=()=>M.overlay==="set"?Le():cn("set"),at.btnView.onclick=()=>Ci();function Ci(){M.view=M.view==="fp"?"tp":"fp",ft(M.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Ns(){M.fly=!M.fly,M.v.y=0,at.root.classList.toggle("flying",M.fly),ft(M.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let hn=new q;function Yi(){let v=Math.cos(M.pitch);return{x:-Math.sin(M.yaw)*v,y:Math.sin(M.pitch),z:-Math.cos(M.yaw)*v}}let Ri=()=>({x:M.p.x,y:M.p.y+1.62+M.eyeOff,z:M.p.z}),Lr=v=>v&&!l.flat.liquid[v];function _n(v,P,J){if(v==="screen"){hn.set(P/innerWidth*2-1,-(J/innerHeight)*2+1,.5).unproject(G).sub(G.position).normalize();let Q=G.position,j=M.view==="tp"?Q.distanceTo(new q(M.p.x,M.p.y+1.62,M.p.z)):0;return Go({x:Q.x,y:Q.y,z:Q.z},{x:hn.x,y:hn.y,z:hn.z},od+1+j,ot,Lr)}return Go(Ri(),Yi(),od,ot,Lr)}function Un(){M.mining.active=!1,M.mining.k="",M.mining.t=0,yt.visible=!1}function nl(v,P,J){let Q=l.get(F.get(v,P,J)),j=l.get(Q.openAs||Q.closeAs);if(!j)return;let rt=xt=>{let vt=l.get(xt);return vt&&vt.interact==="door"},ht=P;for(;rt(F.get(v,ht-1,J));)ht--;for(let xt=ht;rt(F.get(v,xt,J));xt++)F.set(v,xt,J,j.n);M.dirtyMeta=!0}let Us=()=>{let v=y.slots[M.sel];return v?l.toolOf(v.id):null};function S(v){let P=v.n,J=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Jo(l.get(P),Us());if(!F.set(v.x,v.y,v.z,0))return;let Q=J.harvest?l.dropOf(P):null;Q?zt(Q,v.x+.5,v.y+.4,v.z+.5):!J.harvest&&!J.creative&&ft(`${l.name(P)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let j=F.get(v.x,v.y+1,v.z);if(l.flat.plant[j]){F.set(v.x,v.y+1,v.z,0);let ht=t.drops&&l.dropOf(j);ht&&zt(ht,v.x+.5,v.y+1.3,v.z+.5)}if(l.get(P).interact==="door")for(let ht of[-1,1]){let xt=F.get(v.x,v.y+ht,v.z);l.get(xt)&&l.get(xt).interact==="door"&&F.set(v.x,v.y+ht,v.z,0)}let rt=v.x+","+v.y+","+v.z;if(M.bed&&M.bed.x===v.x&&M.bed.y===v.y&&M.bed.z===v.z&&(M.bed=null,ft("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),b[rt]){let ht=eh(b[rt]);for(let xt in ht)for(let vt=0;vt<ht[xt];vt++)zt(xt,v.x+.5,v.y+.4,v.z+.5);delete b[rt]}if(J.usesTool){let ht=Jc(y,M.sel,l);ht.broke&&ft(`\u4F60\u7684${l.name(ht.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Lt()}M.dirtyMeta=!0,M.stats.mined++}function B(v){if(!v)return!1;let P=l.get(v.n);if(P&&P.interact==="quiz")return t.coins?(cn("quiz"),!0):(ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let J=y.slots[M.sel]&&l.get(y.slots[M.sel].id).placeable;if(P&&P.interact==="door")return nl(v.x,v.y,v.z),!0;if(P&&P.interact==="portal"&&!J&&!t.portals)return ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(P&&P.interact==="portal"&&!J)return ye=P.portal,cn("portal"),!0;if(P&&P.interact==="bed"&&!J)return M.bed={x:v.x,y:v.y,z:v.z},M.dirtyMeta=!0,ft("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(P&&P.interact==="craft"&&!J)return cn("inv"),!0;if(P&&P.interact==="furnace"&&!J)return Xt=v.x+","+v.y+","+v.z,cn("furnace"),!0;let Q=y.slots[M.sel];if(!Q)return ft("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let j=l.get(Q.id);if(!j||!j.placeable)return ft(`${l.name(Q.id)} \u4E0D\u80FD\u653E`),!1;let rt=l.flat.plant[v.n]&&!l.flat.plant[j.n],ht=rt?v.x:v.x+v.face[0],xt=rt?v.y:v.y+v.face[1],vt=rt?v.z:v.z+v.face[2];if(xt<0||xt>=64)return!1;let Yt=F.get(ht,xt,vt);if(Yt&&!l.flat.liquid[Yt]&&!(rt&&l.flat.plant[Yt]))return!1;let se=.6/2;return j.solid&&ht+1>M.p.x-se&&ht<M.p.x+se&&vt+1>M.p.z-se&&vt<M.p.z+se&&xt+1>M.p.y&&xt<M.p.y+1.8?!1:l.flat.plant[j.n]&&!l.flat.solid[F.get(ht,xt-1,vt)]?(ft(`${j.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1):F.set(ht,xt,vt,j.n)?(j.interact==="door"&&!F.get(ht,xt+1,vt)&&F.set(ht,xt+1,vt,j.n),t.consume&&Fc(y,M.sel,1),M.dirtyMeta=!0,Lt(),M.stats.placed++,!0):!1}addEventListener("keydown",v=>{if(v.target&&v.target.tagName==="INPUT")return;let P=v.key.toLowerCase();if(P==="e"){M.overlay==="inv"?Le():!M.overlay&&cn("inv"),v.preventDefault();return}if(M.overlay!=="dead"&&!(M.overlay==="ask"||M.overlay==="quest")){if(P==="escape"&&M.overlay){M.overlay==="quiz"?(at.ov.hidden=!0,at.ov.innerHTML="",M.overlay=null):Le();return}M.overlay||(M.keys[P]=!0,v.code==="Space"&&(M.keys[" "]=!0,v.preventDefault()),P>="1"&&P<="9"&&(M.sel=+P-1,Lt()),P==="f"&&Ns(),P==="v"&&Ci())}}),addEventListener("keyup",v=>{M.keys[v.key.toLowerCase()]=!1,v.code==="Space"&&(M.keys[" "]=!1)}),addEventListener("blur",()=>{M.keys={},Un()}),_.addEventListener("mousedown",v=>{if(!(M.touch||M.overlay)){if(document.pointerLockElement!==_){_.requestPointerLock&&_.requestPointerLock();return}if(v.button===0){let P=x("center");if(P){K(P);return}M.mining.active=!0,M.mining.src="center"}v.button===2&&(B(_n("center")),M.placeRepeat=.3,M.rightHeld=!0)}}),addEventListener("mouseup",v=>{v.button===0&&Un(),v.button===2&&(M.rightHeld=!1)}),_.addEventListener("contextmenu",v=>v.preventDefault()),addEventListener("mousemove",v=>{document.pointerLockElement===_&&(M.yaw-=v.movementX*.0024,M.pitch=Math.max(-1.55,Math.min(1.55,M.pitch-v.movementY*.0024)))}),addEventListener("wheel",v=>{M.overlay||M.touch||(M.sel=(M.sel+(v.deltaY>0?1:8))%9,Lt())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{at.root.classList.toggle("locked",document.pointerLockElement===_)});let et=new Map;function Z(v){M.touch!==v&&(M.touch=v,at.root.classList.toggle("touch",v),document.body.classList.toggle("is-touch",v))}at.root.classList.toggle("touch",M.touch),document.body.classList.toggle("is-touch",M.touch),_.addEventListener("pointerdown",v=>{if(v.pointerType!=="touch"||(Z(!0),M.overlay))return;if(v.preventDefault(),v.clientX<innerWidth*.4&&v.clientY>innerHeight*.35&&!M.joy.active){M.joy={x:0,y:0,active:!0,id:v.pointerId,ox:v.clientX,oy:v.clientY},at.joy.style.transform=`translate(${v.clientX-60}px, ${v.clientY-60}px)`,at.joy.hidden=!1,at.knob.style.transform="translate(0px,0px)",et.set(v.pointerId,{kind:"joy"});return}let P={kind:"look",x:v.clientX,y:v.clientY,sx:v.clientX,sy:v.clientY,t0:performance.now(),drag:!1,hold:!1};P.timer=setTimeout(()=>{P.drag||(P.hold=!0,M.mining.active=!0,M.mining.src="screen",M.mining.sx=P.x,M.mining.sy=P.y)},280),et.set(v.pointerId,P)},{passive:!1}),addEventListener("pointermove",v=>{let P=et.get(v.pointerId);if(!P)return;if(P.kind==="joy"){let j=v.clientX-M.joy.ox,rt=v.clientY-M.joy.oy,ht=Math.hypot(j,rt),xt=55;ht>xt&&(j*=xt/ht,rt*=xt/ht),M.joy.x=j/xt,M.joy.y=rt/xt,at.knob.style.transform=`translate(${j}px,${rt}px)`;return}let J=v.clientX-P.x,Q=v.clientY-P.y;P.x=v.clientX,P.y=v.clientY,!P.drag&&Math.hypot(P.x-P.sx,P.y-P.sy)>12&&(P.drag=!0,clearTimeout(P.timer),P.hold&&(Un(),P.hold=!1)),P.drag?(M.yaw-=J*.0055,M.pitch=Math.max(-1.55,Math.min(1.55,M.pitch-Q*.0055))):P.hold&&(M.mining.sx=P.x,M.mining.sy=P.y)});let $=v=>{let P=et.get(v.pointerId);if(P){if(et.delete(v.pointerId),P.kind==="joy"){M.joy={x:0,y:0,active:!1},at.joy.hidden=!0;return}if(clearTimeout(P.timer),P.hold)Un();else if(!P.drag&&performance.now()-P.t0<280&&!M.overlay){let J=x("screen",P.x,P.y);J?K(J):B(_n("screen",P.x,P.y))}}};addEventListener("pointerup",$),addEventListener("pointercancel",$);let Pt=(v,P,J)=>{v.addEventListener("pointerdown",Q=>{Q.preventDefault(),Q.stopPropagation(),P()}),v.addEventListener("pointerup",J),v.addEventListener("pointercancel",J),v.addEventListener("pointerleave",J)};Pt(at.bJump,()=>{M.jumpHeld=!0},()=>{M.jumpHeld=!1}),Pt(at.bDown,()=>{M.downHeld=!0},()=>{M.downHeld=!1}),at.bFly.addEventListener("pointerdown",v=>{v.preventDefault(),v.stopPropagation(),Ns()}),at.bPlace.addEventListener("pointerdown",v=>{v.preventDefault(),v.stopPropagation(),B(_n("center"))}),document.addEventListener("touchmove",v=>{v.target.closest(".scroll, .panel")||v.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(v=>document.addEventListener(v,P=>P.preventDefault(),{passive:!1})),at.start.hidden=!1,at.go.onclick=()=>{at.start.hidden=!0,M.started=!0,M.paused=!1,at.root.classList.add("started"),!M.touch&&_.requestPointerLock&&_.requestPointerLock()};async function Tt(){if(M.resetting)return;let v={hw_meta:{v:1,seed:u,time:M.time,build:tl},hw_player:{x:M.p.x,y:M.p.y,z:M.p.z,yaw:M.yaw,pitch:M.pitch,fly:M.fly,sel:M.sel,hp:p.hp,bed:M.bed},hw_inventory:Wo(y),hw_coins:mf(m),hw_furnaces:b,hw_quests:E,hw_portal_claimed:L.slice(-200)};for(let P of M.dirty){let J=g.get(P);J&&(v["hw_chunk:"+P]=Vc(J))}M.dirty.clear(),M.dirtyMeta=!1;try{await Xc(v),M.lastSave=Date.now()}catch(P){console.warn("save failed",P)}}setInterval(()=>{M.started&&Tt()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&M.started&&Tt()}),addEventListener("pagehide",()=>{M.started&&Tt()}),M.stats={mined:0,placed:0};function It(){let v=innerWidth,P=innerHeight;T.setSize(v,P,!1),G.aspect=v/P,G.updateProjectionMatrix()}addEventListener("resize",It),It(),lt(),Lt(),Et(),t.creative&&(oi("#coinpill").hidden=!0,oi("#modebadge").hidden=!1,at.btnShop.hidden=!0,at.hearts.hidden=!0),Is(),addEventListener("pageshow",v=>{v.persisted&&Is()});let Vt=performance.now(),Gt=0,ie=0,le=new re("#EFEBDD"),Ht=new re("#22302F"),pe=new re("#E6B48C");function Ce(v){requestAnimationFrame(Ce);let P=(v-Vt)/1e3;Vt=v;let J=Math.min(.05,P);M.frames.push(P*1e3),M.frames.length>4e3&&M.frames.shift(),F.update(M.p.x,M.p.z);let Q=F.ready(M.p.x,M.p.z);M.auto&&We(J),M.started&&!M.overlay&&Q&&ve(J),M.started&&!M.dead&&ah(p,J)&&(Et(),M.dirtyMeta=!0),M.time=(M.time+J/ux)%1;let j=M.time*Math.PI*2,rt=Math.sin(j),ht=Math.min(1,Math.max(0,(rt+.12)/.42));V.copy(Ht).lerp(le,ht);let xt=Math.max(0,1-Math.abs(rt)/.3)*(ht>.05?1:.4);V.lerp(pe,xt*.55),O.uniforms.uDay.value=ht,O.uniforms.uFog.value.set(...we(V));let vt=Ri();M.eyeOff*=Math.pow(5e-4,J);let Yt=Yi();if(M.view==="tp"){let Re=Go(vt,{x:-Yt.x,y:-Yt.y,z:-Yt.z},4,ot,Zn=>l.flat.opaque[Zn]===1),Xe=Re?Math.max(.4,Re.dist-.25):4;G.position.set(vt.x-Yt.x*Xe,vt.y-Yt.y*Xe,vt.z-Yt.z*Xe)}else G.position.set(vt.x,vt.y,vt.z);G.rotation.set(M.pitch,M.yaw,0);let se=G.far*.8;if(St.position.set(G.position.x+Math.cos(j)*se,G.position.y+Math.sin(j)*se,G.position.z+.25*se),St.scale.setScalar(se*.14),Mt.position.set(G.position.x-Math.cos(j)*se,G.position.y-Math.sin(j)*se,G.position.z-.25*se),Mt.scale.setScalar(se*.1),gt.visible=M.view==="tp",gt.visible){gt.position.set(M.p.x,M.p.y,M.p.z),gt.rotation.y=M.yaw;let Re=Math.hypot(M.v.x,M.v.z),Xe=Math.sin(v/120)*Math.min(1,Re/4)*.7;tt.rotation.x=Xe,_t.rotation.x=-Xe,Ut.rotation.x=-Xe,dt.rotation.x=Xe;let Zn=.35+.65*ht;gt.children.forEach(Fs=>Fs.material.color.copy(Fs.userData.base).multiplyScalar(Zn))}for(let Re in Ft)Ft[Re].color.setScalar(.4+.6*ht);let Me=M.started&&!M.overlay?M.mining.active&&M.mining.src==="screen"?_n("screen",M.mining.sx,M.mining.sy):_n("center"):null;if(Me?(nt.visible=!0,nt.position.set(Me.x+.5,Me.y+.5,Me.z+.5)):nt.visible=!1,M.mining.active&&Me){let Re=Me.x+","+Me.y+","+Me.z;Re!==M.mining.k&&(M.mining.k=Re,M.mining.t=0),M.mining.t+=J;let Xe=t.creative?l.get(Me.n).hardness<0?1/0:t.breakTime:Jo(l.get(Me.n),Us()).time;if(Xe===1/0)yt.visible=!1,M.mining.warned||(ft(l.name(Me.n)+"\u6316\u4E0D\u52D5"),M.mining.warned=!0);else{let Zn=M.mining.t/Xe;yt.visible=!0,yt.position.copy(nt.position),yt.material.map=st[Math.min(3,Math.floor(Zn*4))],Zn>=1&&(S(Me),M.mining.k="",M.mining.t=0,yt.visible=!1)}}else yt.visible=!1,M.mining.active||(M.mining.warned=!1);M.rightHeld&&!M.overlay&&(M.placeRepeat-=J,M.placeRepeat<=0&&(B(_n("center")),M.placeRepeat=.25)),ke(J),R(M.overlay?0:J,ht,v);for(let Re in b){let Xe=b[Re];Xe.jobs.length&&(Qc(Xe,J),M.dirtyMeta=!0,M.overlay==="furnace"&&Re===Xt&&(M.furnUi=(M.furnUi||0)+J)>.5&&(M.furnUi=0,kt()))}T.render(D,G),Gt+=P,ie++,Gt>.5&&(at.dbg&&(at.dbg.textContent=`${Math.round(ie/Gt)} fps \xB7 \u5340\u584A ${F.stats.loaded} \xB7 ${hf[d.biomeOf(Math.floor(M.p.x),Math.floor(M.p.z))]} \xB7 ${M.p.x.toFixed(1)}, ${M.p.y.toFixed(1)}, ${M.p.z.toFixed(1)}`),Gt=0,ie=0),!Q&&M.started?at.loading.hidden=!1:at.loading.hidden=!0}function we(v){let P=v.getHexString();return[parseInt(P.slice(0,2),16)/255,parseInt(P.slice(2,4),16)/255,parseInt(P.slice(4,6),16)/255]}function ve(v){let P=M.keys,J=(P.d?1:0)-(P.a?1:0),Q=(P.w?1:0)-(P.s?1:0);M.joy.active&&(J=M.joy.x,Q=-M.joy.y);let j=Math.min(1,Math.hypot(J,Q));if(j>0){let Ii=Math.hypot(J,Q);J=J/Ii*j,Q=Q/Ii*j}let rt=-Math.sin(M.yaw),ht=-Math.cos(M.yaw),xt=Math.cos(M.yaw),vt=-Math.sin(M.yaw),Yt=P.control||!M.fly&&P.shift||M.joy.active&&j>.92,se=ot(M.p.x,M.p.y+.1,M.p.z),Me=ot(M.p.x,M.p.y+1,M.p.z),Re=l.flat.liquid[se]===1||l.flat.liquid[Me]===1,Xe=M.fly?10:Re?2.6:Yt?6.2:4.3,Zn=(rt*Q+xt*J)*Xe,Fs=(ht*Q+vt*J)*Xe,Dr=P[" "]||M.jumpHeld,dh=M.fly&&P.shift||M.downHeld;if(M.fly)M.v.x=Zn,M.v.z=Fs,M.v.y=((Dr?1:0)-(dh?1:0))*8;else{let Ii=M.onGround?14:5,mh=1-Math.exp(-Ii*v);M.v.x+=(Zn-M.v.x)*mh,M.v.z+=(Fs-M.v.z)*mh,Re?(M.v.y-=9*v,M.v.y<-3&&(M.v.y=-3),Dr&&(M.v.y=3.4)):l.flat.climb[se]||l.flat.climb[Me]?(M.v.y=Dr||Q>.1?3.2:dh?-3:Math.max(M.v.y-28*v,-1.5),M.fallTop=M.p.y):(M.v.y-=28*v,M.v.y<-40&&(M.v.y=-40),Dr&&M.onGround&&(M.v.y=8.6,M.onGround=!1))}let ph=M.onGround,il=Vo(M.p,M.v,v,$t,{canStep:!M.fly,grounded:M.onGround});if(M.onGround=il.onGround,il.stepped&&(M.eyeOff-=il.stepped),M.fallTop==null||M.fly||Re||M.onGround&&ph?M.fallTop=M.p.y:M.onGround||(M.fallTop=Math.max(M.fallTop,M.p.y)),M.onGround&&!ph){let Ii=sh(M.fallTop-M.p.y,{water:Re,flying:M.fly});Ii&&(qt(Ii),ft("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),M.fallTop=M.p.y}M.p.y<-20&&(M.p={x:W.x,y:W.y+1,z:W.z},M.v={x:0,y:0,z:0},M.fallTop=M.p.y)}function ke(v){let P=M.p.x,J=M.p.y+.9,Q=M.p.z;for(let j=M.drops.length-1;j>=0;j--){let rt=M.drops[j];rt.age+=v;let ht=P-rt.p.x,xt=J-rt.p.y,vt=Q-rt.p.z,Yt=Math.hypot(ht,xt,vt);if(Yt<1.5&&rt.age>.25&&ln(y,rt.id,1,f)===0){D.remove(rt.s),M.drops.splice(j,1),M.dirtyMeta=!0,Lt();continue}if(Yt<4.5&&rt.age>.25?(rt.v.x=ht/Yt*6,rt.v.y=xt/Yt*6,rt.v.z=vt/Yt*6,rt.p.x+=rt.v.x*v,rt.p.y+=rt.v.y*v,rt.p.z+=rt.v.z*v):(rt.v.y-=18*v,rt.v.x*=.9,rt.v.z*=.9,Vo(rt.p,rt.v,v,$t,{w:.25,h:.25})),rt.age>300){D.remove(rt.s),M.drops.splice(j,1);continue}rt.s.position.set(rt.p.x,rt.p.y+.2+Math.sin(rt.age*3)*.06,rt.p.z)}}M.auto=fh.get("auto")==="walk";let Ot=0;function We(v){M.started||at.go.click(),Ot+=v,M.keys.w=!0,M.keys[" "]=Ot%1.6<.15,M.yaw+=v*.08}window.HW={build:tl,G:M,reg:l,inv:y,wallet:m,world:F,Inv:kc,MODE:n,RULE:t,switchMode:qi,questState:E,tradesJson:o,spawnVillagers:Ae,terr:d,claimPortalRewards:Is,portals:A,claimedIds:L,mobS:Bt,mobDefs:Qt,spawnMob:_e,hitMob:K,mobAt:x,surfaceY:Te,health:p,hurt:qt,Health:ch,furnaces:b,Smelt:nh,smeltList:w,recipes:c,craftCtx:k,breakInfo:Jo,start(){at.go.click()},state(){return{pos:{...M.p},coins:m.coins,inv:Wo(y),loaded:F.stats.loaded,stats:{...M.stats},overlay:M.overlay,fly:M.fly}},lookAt(v,P,J){let Q=Ri(),j=v-Q.x,rt=P-Q.y,ht=J-Q.z;M.yaw=Math.atan2(-j,-ht),M.pitch=Math.atan2(rt,Math.hypot(j,ht))},target(){let v=_n("center");return v&&{x:v.x,y:v.y,z:v.z,n:v.n,face:v.face}},mine(v){v?(M.mining.active=!0,M.mining.src="center"):Un()},use(){return B(_n("center"))},key(v,P){M.keys[v]=P},open:cn,close:Le,save:Tt,spawn:W,perf(){return{frames:M.frames.slice(),meshMs:F.stats.meshMs.slice(),genMs:F.stats.genMs.slice(),loaded:F.stats.loaded}},resetPerf(){M.frames.length=0,F.stats.meshMs.length=0,F.stats.genMs.length=0},ready:()=>F.ready(M.p.x,M.p.z)},requestAnimationFrame(Ce)}function mx(){let n=oi("#ui"),t=e=>n.querySelector(e);return fh.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),hearts:t("#hearts"),flash:oi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:oi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:oi("#start"),go:oi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}px().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
