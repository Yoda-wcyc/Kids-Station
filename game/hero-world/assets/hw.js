(()=>{var sy=Object.defineProperty;var Gn=(n,t)=>{for(var e in t)sy(n,e,{get:t[e],enumerable:!0})};var jp=0,hu=1,Kp=2;var Uo=1,Qp=2,Cr=3,bs=0,Dn=1,Qn=2,Ri=0,Rr=1,uu=2,fu=3,du=4,tm=5;var ks=100,em=101,nm=102,im=103,sm=104,rm=200,om=201,am=202,lm=203,pu=204,mu=205,cm=206,hm=207,um=208,fm=209,dm=210,pm=211,mm=212,gm=213,xm=214,il=0,sl=1,rl=2,br=3,ol=4,al=5,ll=6,cl=7,gu=0,ym=1,_m=2,hi=0,xu=1,yu=2,_u=3,vu=4,bu=5,Mu=6,Su=7;var wu=300,Ms=301,Bs=302,kl=303,Bl=304,Fo=306,hl=1e3,wi=1001,ul=1002,dn=1003,vm=1004;var Oo=1005;var on=1006,Vl=1007;var Ss=1008;var $n=1009,Au=1010,Eu=1011,Ir=1012,Hl=1013,ui=1014,fi=1015,di=1016,Gl=1017,Wl=1018,Pr=1020,Tu=35902,Cu=35899,Ru=1021,Iu=1022,ti=1023,Ai=1026,ws=1027,Pu=1028,Xl=1029,As=1030,ql=1031;var Yl=1033,zo=33776,ko=33777,Bo=33778,Vo=33779,$l=35840,Zl=35841,Jl=35842,jl=35843,Kl=36196,Ql=37492,tc=37496,ec=37488,nc=37489,Ho=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,xc=37821,yc=36492,_c=36494,vc=36495,bc=36283,Mc=36284,Go=36285,Sc=36286;var mo=2300,fl=2301,tl=2302,iu=2303,su=2400,ru=2401,ou=2402;var bm=3200;var Lu=0,Mm=1,Yi="",nn="srgb",go="srgb-linear",xo="linear",Be="srgb";var el=7680;var Sm=519,wm=512,Am=513,Em=514,wc=515,Tm=516,Cm=517,Ac=518,Rm=519,Du=35044;var Nu="300 es",ci=2e3,yo=2001;function ry(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function oy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Im(){let n=_o("canvas");return n.style.display="block",n}var wp={},Mr=null;function vo(...n){let t="THREE."+n.shift();Mr?Mr("log",t,...n):console.log(t,...n)}function Pm(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function le(...n){n=Pm(n);let t="THREE."+n.shift();if(Mr)Mr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=Pm(n);let t="THREE."+n.shift();if(Mr)Mr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function zs(...n){let t=n.join(" ");t in wp||(wp[t]=!0,le(...n))}function Lm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Dm={[il]:sl,[rl]:ll,[ol]:cl,[br]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:br},Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,dl=180/Math.PI;function hs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function ay(n,t){return(n%t+t)%t}function Dh(n,t,e){return(1-e)*n+e*t}function Mi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ku=class ku{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ku.prototype.isVector2=!0;var Ee=ku,Ti=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let u=i[s+0],c=i[s+1],p=i[s+2],f=i[s+3],d=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(f!==x||u!==d||c!==m||p!==_){let y=u*d+c*m+p*_+f*x;y<0&&(d=-d,m=-m,_=-_,x=-x,y=-y);let g=1-a;if(y<.9995){let A=Math.acos(y),F=Math.sin(A);g=Math.sin(g*A)/F,a=Math.sin(a*A)/F,u=u*g+d*a,c=c*g+m*a,p=p*g+_*a,f=f*g+x*a}else{u=u*g+d*a,c=c*g+m*a,p=p*g+_*a,f=f*g+x*a;let A=1/Math.sqrt(u*u+c*c+p*p+f*f);u*=A,c*=A,p*=A,f*=A}}t[e]=u,t[e+1]=c,t[e+2]=p,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],u=i[s+1],c=i[s+2],p=i[s+3],f=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+p*f+u*m-c*d,t[e+1]=u*_+p*d+c*f-a*m,t[e+2]=c*_+p*m+a*d-u*f,t[e+3]=p*_-a*f-u*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,u=Math.sin,c=a(i/2),p=a(s/2),f=a(r/2),d=u(i/2),m=u(s/2),_=u(r/2);switch(o){case"XYZ":this._x=d*p*f+c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f-d*m*_;break;case"YXZ":this._x=d*p*f+c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f+d*m*_;break;case"ZXY":this._x=d*p*f-c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f-d*m*_;break;case"ZYX":this._x=d*p*f-c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f+d*m*_;break;case"YZX":this._x=d*p*f+c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f-d*m*_;break;case"XZY":this._x=d*p*f-c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f+d*m*_;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],u=e[9],c=e[2],p=e[6],f=e[10],d=i+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(p-u)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(p-u)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(u+p)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(u+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,u=e._y,c=e._z,p=e._w;return this._x=i*p+o*a+s*c-r*u,this._y=s*p+o*u+r*a-i*c,this._z=r*p+o*c+i*u-s*a,this._w=o*p-i*a-s*u-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let u=1-e;if(a<.9995){let c=Math.acos(a),p=Math.sin(c);u=Math.sin(u*c)/p,e=Math.sin(e*c)/p,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bu=class Bu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ap.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ap.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,u=t.w,c=2*(o*s-a*i),p=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+u*c+o*f-a*p,this.y=i+u*p+a*c-r*f,this.z=s+u*f+r*p-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,u=e.z;return this.x=s*u-r*a,this.y=r*o-i*u,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bu.prototype.isVector3=!0;var K=Bu,Nh=new K,Ap=new Ti,Vu=class Vu{constructor(t,e,i,s,r,o,a,u,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,u,c)}set(t,e,i,s,r,o,a,u,c){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=u,p[6]=i,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],u=i[6],c=i[1],p=i[4],f=i[7],d=i[2],m=i[5],_=i[8],x=s[0],y=s[3],g=s[6],A=s[1],F=s[4],E=s[7],I=s[2],D=s[5],L=s[8];return r[0]=o*x+a*A+u*I,r[3]=o*y+a*F+u*D,r[6]=o*g+a*E+u*L,r[1]=c*x+p*A+f*I,r[4]=c*y+p*F+f*D,r[7]=c*g+p*E+f*L,r[2]=d*x+m*A+_*I,r[5]=d*y+m*F+_*D,r[8]=d*g+m*E+_*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],c=t[7],p=t[8];return e*o*p-e*a*c-i*r*p+i*a*u+s*r*c-s*o*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],c=t[7],p=t[8],f=p*o-a*c,d=a*u-p*r,m=c*r-o*u,_=e*f+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=f*x,t[1]=(s*c-p*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(p*e-s*u)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(i*u-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let u=Math.cos(r),c=Math.sin(r);return this.set(i*u,i*c,-i*(u*o+c*a)+o+t,-s*c,s*u,-s*(-c*o+u*a)+a+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uh.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uh.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vu.prototype.isMatrix3=!0;var xe=Vu,Uh=new xe,Ep=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ly(){let n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Be&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Be&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:t,whitePoint:i,transfer:xo,toXYZ:Ep,fromXYZ:Tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:i,transfer:Be,toXYZ:Ep,fromXYZ:Tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var Re=ly();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ir,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ir===void 0&&(ir=_o("canvas")),ir.width=t.width,ir.height=t.height;let s=ir.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ir}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cy=0,Sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fh(s[o].image)):r.push(Fh(s[o]))}else r=Fh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Fh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}var hy=0,Oh=new K,xn=class n extends Ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wi,s=wi,r=on,o=Ss,a=ti,u=$n,c=n.DEFAULT_ANISOTROPY,p=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=hs(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){le(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){le(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=wu;xn.DEFAULT_ANISOTROPY=1;var Hu=class Hu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,u=t.elements,c=u[0],p=u[4],f=u[8],d=u[1],m=u[5],_=u[9],x=u[2],y=u[6],g=u[10];if(Math.abs(p-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-y)<.01){if(Math.abs(p+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+y)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,E=(m+1)/2,I=(g+1)/2,D=(p+d)/4,L=(f+x)/4,S=(_+y)/4;return F>E&&F>I?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=D/i,r=L/i):E>I?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=S/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=L/r,s=S/r),this.set(i,s,r,e),this}let A=Math.sqrt((y-_)*(y-_)+(f-x)*(f-x)+(d-p)*(d-p));return Math.abs(A)<.001&&(A=1),this.x=(y-_)/A,this.y=(f-x)/A,this.z=(d-p)/A,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this.w=Pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this.w=Pe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hu.prototype.isVector4=!0;var Ke=Hu,ml=class extends Ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new xn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},bo=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zl=class zl{constructor(t,e,i,s,r,o,a,u,c,p,f,d,m,_,x,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,u,c,p,f,d,m,_,x,y)}set(t,e,i,s,r,o,a,u,c,p,f,d,m,_,x,y){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=u,g[2]=c,g[6]=p,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/sr.setFromMatrixColumn(t,0).length(),r=1/sr.setFromMatrixColumn(t,1).length(),o=1/sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(s),c=Math.sin(s),p=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*p,m=o*f,_=a*p,x=a*f;e[0]=u*p,e[4]=-u*f,e[8]=c,e[1]=m+_*c,e[5]=d-x*c,e[9]=-a*u,e[2]=x-d*c,e[6]=_+m*c,e[10]=o*u}else if(t.order==="YXZ"){let d=u*p,m=u*f,_=c*p,x=c*f;e[0]=d+x*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*p,e[9]=-a,e[2]=m*a-_,e[6]=x+d*a,e[10]=o*u}else if(t.order==="ZXY"){let d=u*p,m=u*f,_=c*p,x=c*f;e[0]=d-x*a,e[4]=-o*f,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*p,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){let d=o*p,m=o*f,_=a*p,x=a*f;e[0]=u*p,e[4]=_*c-m,e[8]=d*c+x,e[1]=u*f,e[5]=x*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){let d=o*u,m=o*c,_=a*u,x=a*c;e[0]=u*p,e[4]=x-d*f,e[8]=_*f+m,e[1]=f,e[5]=o*p,e[9]=-a*p,e[2]=-c*p,e[6]=m*f+_,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*u,m=o*c,_=a*u,x=a*c;e[0]=u*p,e[4]=-f,e[8]=c*p,e[1]=d*f+x,e[5]=o*p,e[9]=m*f-_,e[2]=_*f-m,e[6]=a*p,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uy,t,fy)}lookAt(t,e,i){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),rs.crossVectors(i,Wn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),rs.crossVectors(i,Wn)),rs.normalize(),Aa.crossVectors(Wn,rs),s[0]=rs.x,s[4]=Aa.x,s[8]=Wn.x,s[1]=rs.y,s[5]=Aa.y,s[9]=Wn.y,s[2]=rs.z,s[6]=Aa.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],u=i[8],c=i[12],p=i[1],f=i[5],d=i[9],m=i[13],_=i[2],x=i[6],y=i[10],g=i[14],A=i[3],F=i[7],E=i[11],I=i[15],D=s[0],L=s[4],S=s[8],R=s[12],U=s[1],O=s[5],J=s[9],j=s[13],B=s[2],et=s[6],ht=s[10],k=s[14],st=s[3],W=s[7],$=s[11],ot=s[15];return r[0]=o*D+a*U+u*B+c*st,r[4]=o*L+a*O+u*et+c*W,r[8]=o*S+a*J+u*ht+c*$,r[12]=o*R+a*j+u*k+c*ot,r[1]=p*D+f*U+d*B+m*st,r[5]=p*L+f*O+d*et+m*W,r[9]=p*S+f*J+d*ht+m*$,r[13]=p*R+f*j+d*k+m*ot,r[2]=_*D+x*U+y*B+g*st,r[6]=_*L+x*O+y*et+g*W,r[10]=_*S+x*J+y*ht+g*$,r[14]=_*R+x*j+y*k+g*ot,r[3]=A*D+F*U+E*B+I*st,r[7]=A*L+F*O+E*et+I*W,r[11]=A*S+F*J+E*ht+I*$,r[15]=A*R+F*j+E*k+I*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],u=t[9],c=t[13],p=t[2],f=t[6],d=t[10],m=t[14],_=t[3],x=t[7],y=t[11],g=t[15],A=u*m-c*d,F=a*m-c*f,E=a*d-u*f,I=o*m-c*p,D=o*d-u*p,L=o*f-a*p;return e*(x*A-y*F+g*E)-i*(_*A-y*I+g*D)+s*(_*F-x*I+g*L)-r*(_*E-x*D+y*L)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],u=t[2],c=t[6],p=t[10];return e*(o*p-a*c)-i*(r*p-a*u)+s*(r*c-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],c=t[7],p=t[8],f=t[9],d=t[10],m=t[11],_=t[12],x=t[13],y=t[14],g=t[15],A=e*a-i*o,F=e*u-s*o,E=e*c-r*o,I=i*u-s*a,D=i*c-r*a,L=s*c-r*u,S=p*x-f*_,R=p*y-d*_,U=p*g-m*_,O=f*y-d*x,J=f*g-m*x,j=d*g-m*y,B=A*j-F*J+E*O+I*U-D*R+L*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/B;return t[0]=(a*j-u*J+c*O)*et,t[1]=(s*J-i*j-r*O)*et,t[2]=(x*L-y*D+g*I)*et,t[3]=(d*D-f*L-m*I)*et,t[4]=(u*U-o*j-c*R)*et,t[5]=(e*j-s*U+r*R)*et,t[6]=(y*E-_*L-g*F)*et,t[7]=(p*L-d*E+m*F)*et,t[8]=(o*J-a*U+c*S)*et,t[9]=(i*U-e*J-r*S)*et,t[10]=(_*D-x*E+g*A)*et,t[11]=(f*E-p*D-m*A)*et,t[12]=(a*R-o*O-u*S)*et,t[13]=(e*O-i*R+s*S)*et,t[14]=(x*F-_*I-y*A)*et,t[15]=(p*I-f*F+d*A)*et,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,u=t.z,c=r*o,p=r*a;return this.set(c*o+i,c*a-s*u,c*u+s*a,0,c*a+s*u,p*a+i,p*u-s*o,0,c*u-s*a,p*u+s*o,r*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,u=e._w,c=r+r,p=o+o,f=a+a,d=r*c,m=r*p,_=r*f,x=o*p,y=o*f,g=a*f,A=u*c,F=u*p,E=u*f,I=i.x,D=i.y,L=i.z;return s[0]=(1-(x+g))*I,s[1]=(m+E)*I,s[2]=(_-F)*I,s[3]=0,s[4]=(m-E)*D,s[5]=(1-(d+g))*D,s[6]=(y+A)*D,s[7]=0,s[8]=(_+F)*L,s[9]=(y-A)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=sr.set(s[0],s[1],s[2]).length(),a=sr.set(s[4],s[5],s[6]).length(),u=sr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ri.copy(this);let c=1/o,p=1/a,f=1/u;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=p,ri.elements[5]*=p,ri.elements[6]*=p,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,e.setFromRotationMatrix(ri),i.x=o,i.y=a,i.z=u,this}makePerspective(t,e,i,s,r,o,a=ci,u=!1){let c=this.elements,p=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),m=(i+s)/(i-s),_,x;if(u)_=r/(o-r),x=o*r/(o-r);else if(a===ci)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yo)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ci,u=!1){let c=this.elements,p=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),m=-(i+s)/(i-s),_,x;if(u)_=1/(o-r),x=o/(o-r);else if(a===ci)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===yo)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};zl.prototype.isMatrix4=!0;var Ye=zl,sr=new K,ri=new Ye,uy=new K(0,0,0),fy=new K(1,1,1),rs=new K,Aa=new K,Wn=new K,Cp=new Ye,Rp=new Ti,us=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],u=s[1],c=s[5],p=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,m),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dy=0,Ip=new K,rr=new Ti,Bi=new Ye,Ea=new K,oo=new K,py=new K,my=new Ti,Pp=new K(1,0,0),Lp=new K(0,1,0),Dp=new K(0,0,1),Np={type:"added"},gy={type:"removed"},or={type:"childadded",child:null},zh={type:"childremoved",child:null},Ln=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new K,e=new us,i=new Ti,s=new K(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new xe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(Pp,t)}rotateY(t){return this.rotateOnAxis(Lp,t)}rotateZ(t){return this.rotateOnAxis(Dp,t)}translateOnAxis(t,e){return Ip.copy(t).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pp,t)}translateY(t){return this.translateOnAxis(Lp,t)}translateZ(t){return this.translateOnAxis(Dp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ea.copy(t):Ea.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(oo,Ea,this.up):Bi.lookAt(Ea,oo,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Bi),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Np),or.child=t,this.dispatchEvent(or),or.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gy),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Np),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,py),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,my,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let c=0,p=u.length;c<p;c++){let f=u[c];r(t.shapes,f)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(r(t.materials,this.material[u]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(r(t.animations,u))}}if(e){let a=o(t.geometries),u=o(t.materials),c=o(t.textures),p=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let u=[];for(let c in a){let p=a[c];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.DEFAULT_UP=new K(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},xy={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,u=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let y=e.getJointPose(x,i),g=this._getHandJoint(c,x);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let p=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=p.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function kh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ue=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=i,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Re.workingColorSpace){if(t=ay(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=kh(o,r,t+1/3),this.g=kh(o,r,t),this.b=kh(o,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:le("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let i=Nm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Re.workingToColorSpace(bn.copy(this),t),Math.round(Pe(bn.r*255,0,255))*65536+Math.round(Pe(bn.g*255,0,255))*256+Math.round(Pe(bn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(bn.copy(this),e);let i=bn.r,s=bn.g,r=bn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),u,c,p=(a+o)/2;if(a===o)u=0,c=0;else{let f=o-a;switch(c=p<=.5?f/(o+a):f/(2-o-a),o){case i:u=(s-r)/f+(s<r?6:0);break;case s:u=(r-i)/f+2;break;case r:u=(i-s)/f+4;break}u/=6}return t.h=u,t.s=c,t.l=p,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=nn){Re.workingToColorSpace(bn.copy(this),t);let e=bn.r,i=bn.g,s=bn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Ta);let i=Dh(os.h,Ta.h,e),s=Dh(os.s,Ta.s,e),r=Dh(os.l,Ta.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new ue;ue.NAMES=Nm;var So=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},oi=new K,Vi=new K,Bh=new K,Hi=new K,ar=new K,lr=new K,Up=new K,Vh=new K,Hh=new K,Gh=new K,Wh=new Ke,Xh=new Ke,qh=new Ke,Si=class n{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),oi.subVectors(t,e),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){oi.subVectors(s,e),Vi.subVectors(i,e),Bh.subVectors(t,e);let o=oi.dot(oi),a=oi.dot(Vi),u=oi.dot(Bh),c=Vi.dot(Vi),p=Vi.dot(Bh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*u-a*p)*d,_=(o*p-a*u)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,r,o,a,u){return this.getBarycoord(t,e,i,s,Hi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Hi.x),u.addScaledVector(o,Hi.y),u.addScaledVector(a,Hi.z),u)}static getInterpolatedAttribute(t,e,i,s,r,o){return Wh.setScalar(0),Xh.setScalar(0),qh.setScalar(0),Wh.fromBufferAttribute(t,e),Xh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wh,r.x),o.addScaledVector(Xh,r.y),o.addScaledVector(qh,r.z),o}static isFrontFacing(t,e,i,s){return oi.subVectors(i,e),Vi.subVectors(t,e),oi.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),oi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,i),lr.subVectors(r,i),Vh.subVectors(t,i);let u=ar.dot(Vh),c=lr.dot(Vh);if(u<=0&&c<=0)return e.copy(i);Hh.subVectors(t,s);let p=ar.dot(Hh),f=lr.dot(Hh);if(p>=0&&f<=p)return e.copy(s);let d=u*f-p*c;if(d<=0&&u>=0&&p<=0)return o=u/(u-p),e.copy(i).addScaledVector(ar,o);Gh.subVectors(t,r);let m=ar.dot(Gh),_=lr.dot(Gh);if(_>=0&&m<=_)return e.copy(r);let x=m*c-u*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(lr,a);let y=p*_-m*f;if(y<=0&&f-p>=0&&m-_>=0)return Up.subVectors(r,s),a=(f-p)/(f-p+(m-_)),e.copy(s).addScaledVector(Up,a);let g=1/(y+x+d);return o=x*g,a=d*g,e.copy(i).addScaledVector(ar,o).addScaledVector(lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fs=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ao),Ra.subVectors(this.max,ao),cr.subVectors(t.a,ao),hr.subVectors(t.b,ao),ur.subVectors(t.c,ao),as.subVectors(hr,cr),ls.subVectors(ur,hr),Ns.subVectors(cr,ur);let e=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ns.z,Ns.y,as.z,0,-as.x,ls.z,0,-ls.x,Ns.z,0,-Ns.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ns.y,Ns.x,0];return!Yh(e,cr,hr,ur,Ra)||(e=[1,0,0,0,1,0,0,0,1],!Yh(e,cr,hr,ur,Ra))?!1:(Ia.crossVectors(as,ls),e=[Ia.x,Ia.y,Ia.z],Yh(e,cr,hr,ur,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new K,new K,new K,new K,new K,new K,new K,new K],ai=new K,Ca=new fs,cr=new K,hr=new K,ur=new K,as=new K,ls=new K,Ns=new K,ao=new K,Ra=new K,Ia=new K,Us=new K;function Yh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Us.fromArray(n,r);let a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),u=t.dot(Us),c=e.dot(Us),p=i.dot(Us);if(Math.max(-Math.max(u,c,p),Math.min(u,c,p))>a)return!1}return!0}var rn=new K,Pa=new Ee,yy=0,Qe=class extends Ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Du,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wo=class extends Qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ao=class extends Qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Pn=class extends Qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},_y=new fs,lo=new K,$h=new K,ds=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_y.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lo.subVectors(t,this.center);let e=lo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(lo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lo.copy(t.center).add($h)),this.expandByPoint(lo.copy(t.center).sub($h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vy=0,Kn=new Ye,Zh=new Ln,fr=new K,Xn=new fs,co=new fs,fn=new K,ln=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ry(t)?Ao:wo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new xe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,i){return Kn.makeTranslation(t,e,i),this.applyMatrix4(Kn),this}scale(t,e,i){return Kn.makeScale(t,e,i),this.applyMatrix4(Kn),this}lookAt(t){return Zh.lookAt(t),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Xn.min,co.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,co.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(co.min),Xn.expandByPoint(co.max))}Xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],u=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)fn.fromBufferAttribute(a,c),u&&(fr.fromBufferAttribute(t,c),fn.add(fr)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],u=[];for(let S=0;S<i.count;S++)a[S]=new K,u[S]=new K;let c=new K,p=new K,f=new K,d=new Ee,m=new Ee,_=new Ee,x=new K,y=new K;function g(S,R,U){c.fromBufferAttribute(i,S),p.fromBufferAttribute(i,R),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,U),p.sub(c),f.sub(c),m.sub(d),_.sub(d);let O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(x.copy(p).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(O),y.copy(f).multiplyScalar(m.x).addScaledVector(p,-_.x).multiplyScalar(O),a[S].add(x),a[R].add(x),a[U].add(x),u[S].add(y),u[R].add(y),u[U].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let S=0,R=A.length;S<R;++S){let U=A[S],O=U.start,J=U.count;for(let j=O,B=O+J;j<B;j+=3)g(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let F=new K,E=new K,I=new K,D=new K;function L(S){I.fromBufferAttribute(s,S),D.copy(I);let R=a[S];F.copy(R),F.sub(I.multiplyScalar(I.dot(R))).normalize(),E.crossVectors(D,R);let O=E.dot(u[S])<0?-1:1;o.setXYZW(S,F.x,F.y,F.z,O)}for(let S=0,R=A.length;S<R;++S){let U=A[S],O=U.start,J=U.count;for(let j=O,B=O+J;j<B;j+=3)L(t.getX(j+0)),L(t.getX(j+1)),L(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new K,r=new K,o=new K,a=new K,u=new K,c=new K,p=new K,f=new K;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),x=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,y),p.subVectors(o,r),f.subVectors(s,r),p.cross(f),a.fromBufferAttribute(i,_),u.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),a.add(p),u.add(p),c.add(p),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,u.x,u.y,u.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),p.subVectors(o,r),f.subVectors(s,r),p.cross(f),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,u){let c=a.array,p=a.itemSize,f=a.normalized,d=new c.constructor(u.length*p),m=0,_=0;for(let x=0,y=u.length;x<y;x++){a.isInterleavedBufferAttribute?m=u[x]*a.data.stride+a.offset:m=u[x]*p;for(let g=0;g<p;g++)d[_++]=c[m++]}return new Qe(d,p,f)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],c=t(u,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let u=[],c=r[a];for(let p=0,f=c.length;p<f;p++){let d=c[p],m=t(d,i);u.push(m)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,u=o.length;a<u;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let c=i[u];t.data.attributes[u]=c.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],p=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];p.push(m.toJSON(t.data))}p.length>0&&(s[u]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let p=s[c];this.setAttribute(c,p.clone(e))}let r=t.morphAttributes;for(let c in r){let p=[],f=r[c];for(let d=0,m=f.length;d<m;d++)p.push(f[d].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,p=o.length;c<p;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Du,this.updateRanges=[],this.version=0,this.uuid=hs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},In=new K,Eo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jh=new K,by=new K,My=new xe,li=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Jh.subVectors(i,e).cross(by.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Jh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||My.getNormalMatrix(t),s=this.coplanarPoint(Jh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sy=0,Ci=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Rr,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){le(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){le(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let u=r[a];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new li().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qi=class extends Ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},dr,ho=new K,pr=new K,mr=new K,gr=new Ee,uo=new Ee,Um=new Ye,La=new K,fo=new K,Da=new K,Fp=new Ee,jh=new Ee,Op=new Ee,ps=class extends Ln{constructor(t=new qi){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new ln;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xl(e,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Eo(i,3,0,!1)),dr.setAttribute("uv",new Eo(i,2,3,!1))}this.geometry=dr,this.material=t,this.center=new Ee(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Um.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Na(La.set(-.5,-.5,0),mr,o,pr,s,r),Na(fo.set(.5,-.5,0),mr,o,pr,s,r),Na(Da.set(.5,.5,0),mr,o,pr,s,r),Fp.set(0,0),jh.set(1,0),Op.set(1,1);let a=t.ray.intersectTriangle(La,fo,Da,!1,ho);if(a===null&&(Na(fo.set(-.5,.5,0),mr,o,pr,s,r),jh.set(0,1),a=t.ray.intersectTriangle(La,Da,fo,!1,ho),a===null))return;let u=t.ray.origin.distanceTo(ho);u<t.near||u>t.far||e.push({distance:u,point:ho.clone(),uv:Si.getInterpolation(ho,La,fo,Da,Fp,jh,Op,new Ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Na(n,t,e,i,s,r){gr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(uo.x=r*gr.x-s*gr.y,uo.y=s*gr.x+r*gr.y):uo.copy(gr),n.copy(t),n.x+=uo.x,n.y+=uo.y,n.applyMatrix4(Um)}var Wi=new K,Kh=new K,Ua=new K,Fa=new K,Ar=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Kh.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Fa.copy(this.origin).sub(Kh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ua),a=Fa.dot(this.direction),u=-Fa.dot(Ua),c=Fa.lengthSq(),p=Math.abs(1-o*o),f,d,m,_;if(p>0)if(f=o*u-a,d=o*a-u,_=r*p,f>=0)if(d>=-_)if(d<=_){let x=1/p;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*u)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-u),r),m=-f*f+d*(d+2*u)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-u),r),m=d*(d+2*u)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-u),r),m=-f*f+d*(d+2*u)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Kh).addScaledVector(Ua,d),m}intersectSphere(t,e){if(t.radius<0)return null;Wi.subVectors(t.center,this.origin);let i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,u,c=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),p>=0?(r=(t.min.y-d.y)*p,o=(t.max.y-d.y)*p):(r=(t.max.y-d.y)*p,o=(t.min.y-d.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,u=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,u=(t.min.z-d.z)*f),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,u=a.x,c=a.y,p=a.z,f=t.x-o.x,d=t.y-o.y,m=t.z-o.z,_=e.x-o.x,x=e.y-o.y,y=e.z-o.z,g=i.x-o.x,A=i.y-o.y,F=i.z-o.z,E=Math.abs(u),I=Math.abs(c),D=Math.abs(p),L,S,R,U,O,J,j,B,et,ht,k,st;if(E>=I&&E>=D?(R=u,J=f,et=_,st=g,u>=0?(L=c,S=p,U=d,O=m,j=x,B=y,ht=A,k=F):(L=p,S=c,U=m,O=d,j=y,B=x,ht=F,k=A)):I>=D?(R=c,J=d,et=x,st=A,c>=0?(L=p,S=u,U=m,O=f,j=y,B=_,ht=F,k=g):(L=u,S=p,U=f,O=m,j=_,B=y,ht=g,k=F)):(R=p,J=m,et=y,st=F,p>=0?(L=u,S=c,U=f,O=d,j=_,B=x,ht=g,k=A):(L=c,S=u,U=d,O=f,j=x,B=_,ht=A,k=g)),R===0)return null;let W=L/R,$=S/R,ot=1/R,Mt=U-W*J,wt=O-$*J,ie=j-W*et,Ot=B-$*et,Kt=ht-W*st,Z=k-$*st,q=Kt*Ot-Z*ie,lt=Mt*Z-wt*Kt,yt=ie*wt-Ot*Mt;if(s){if(q<0||lt<0||yt<0)return null}else if((q<0||lt<0||yt<0)&&(q>0||lt>0||yt>0))return null;let ct=q+lt+yt;if(ct===0)return null;let Lt=ot*(q*J+lt*et+yt*st);return(ct>0?Lt<0:Lt>0)?null:this.at(Lt/ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zp=new Ye,Fs=new Ar,Oa=new ds,kp=new K,za=new K,ka=new K,Ba=new K,Qh=new K,Va=new K,Bp=new K,Ha=new K,ze=class extends Ln{constructor(t=new ln,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let u=0,c=r.length;u<c;u++){let p=a[u],f=r[u];p!==0&&(Qh.fromBufferAttribute(f,t),o?Va.addScaledVector(Qh,p):Va.addScaledVector(Qh.sub(e),p))}e.add(Va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Oa.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Oa,kp)===null||Fs.origin.distanceToSquared(kp)>(t.far-t.near)**2))&&(zp.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(zp),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,u=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let y=d[_],g=o[y.materialIndex],A=Math.max(y.start,m.start),F=Math.min(a.count,Math.min(y.start+y.count,m.start+m.count));for(let E=A,I=F;E<I;E+=3){let D=a.getX(E),L=a.getX(E+1),S=a.getX(E+2);s=Ga(this,g,t,i,c,p,f,D,L,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let y=_,g=x;y<g;y+=3){let A=a.getX(y),F=a.getX(y+1),E=a.getX(y+2);s=Ga(this,o,t,i,c,p,f,A,F,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let y=d[_],g=o[y.materialIndex],A=Math.max(y.start,m.start),F=Math.min(u.count,Math.min(y.start+y.count,m.start+m.count));for(let E=A,I=F;E<I;E+=3){let D=E,L=E+1,S=E+2;s=Ga(this,g,t,i,c,p,f,D,L,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(u.count,m.start+m.count);for(let y=_,g=x;y<g;y+=3){let A=y,F=y+1,E=y+2;s=Ga(this,o,t,i,c,p,f,A,F,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function wy(n,t,e,i,s,r,o,a){let u;if(t.side===Dn?u=i.intersectTriangle(o,r,s,!0,a):u=i.intersectTriangle(s,r,o,t.side===bs,a),u===null)return null;Ha.copy(a),Ha.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:n}}function Ga(n,t,e,i,s,r,o,a,u,c){n.getVertexPosition(a,za),n.getVertexPosition(u,ka),n.getVertexPosition(c,Ba);let p=wy(n,t,e,i,za,ka,Ba,Bp);if(p){let f=new K;Si.getBarycoord(Bp,za,ka,Ba,f),s&&(p.uv=Si.getInterpolatedAttribute(s,a,u,c,f,new Ee)),r&&(p.uv1=Si.getInterpolatedAttribute(r,a,u,c,f,new Ee)),o&&(p.normal=Si.getInterpolatedAttribute(o,a,u,c,f,new K),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let d={a,b:u,c,normal:new K,materialIndex:0};Si.getNormal(za,ka,Ba,d.normal),p.face=d,p.barycoord=f}return p}var yl=class extends xn{constructor(t=null,e=1,i=1,s,r,o,a,u,c=dn,p=dn,f,d){super(null,o,a,u,c,p,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=new ds,Ay=new Ee(.5,.5),Wa=new K,To=class{constructor(t=new li,e=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],u=r[2],c=r[3],p=r[4],f=r[5],d=r[6],m=r[7],_=r[8],x=r[9],y=r[10],g=r[11],A=r[12],F=r[13],E=r[14],I=r[15];if(s[0].setComponents(c-o,m-p,g-_,I-A).normalize(),s[1].setComponents(c+o,m+p,g+_,I+A).normalize(),s[2].setComponents(c+a,m+f,g+x,I+F).normalize(),s[3].setComponents(c-a,m-f,g-x,I-F).normalize(),i)s[4].setComponents(u,d,y,E).normalize(),s[5].setComponents(c-u,m-d,g-y,I-E).normalize();else if(s[4].setComponents(c-u,m-d,g-y,I-E).normalize(),e===ci)s[5].setComponents(c+u,m+d,g+y,I+E).normalize();else if(e===yo)s[5].setComponents(u,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=Ay.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_l=new K,vl=new K,Vp=new Ye,po=new Ar,Xa=new ds,tu=new K,Hp=new K,bl=class extends Ln{constructor(t=new ln,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)_l.fromBufferAttribute(e,s-1),vl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_l.distanceTo(vl);t.setAttribute("lineDistance",new Pn(i,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;Vp.copy(s).invert(),po.copy(t.ray).applyMatrix4(Vp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=this.isLineSegments?2:1,p=i.index,d=i.attributes.position;if(p!==null){let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let x=m,y=_-1;x<y;x+=c){let g=p.getX(x),A=p.getX(x+1),F=qa(this,t,po,u,g,A,x);F&&e.push(F)}if(this.isLineLoop){let x=p.getX(_-1),y=p.getX(m),g=qa(this,t,po,u,x,y,_-1);g&&e.push(g)}}else{let m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=m,y=_-1;x<y;x+=c){let g=qa(this,t,po,u,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=qa(this,t,po,u,_-1,m,_-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qa(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(_l.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),e.distanceSqToSegment(_l,vl,tu,Hp)>i)return;tu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(tu);if(!(c<t.near||c>t.far))return{distance:c,point:Hp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Gp=new K,Wp=new K,gs=class extends bl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Gp.fromBufferAttribute(e,s),Wp.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gp.distanceTo(Wp);t.setAttribute("lineDistance",new Pn(i,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Er=class extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xp=new Ye,au=new Ar,Ya=new ds,$a=new K,Co=class extends Ln{constructor(t=new ln,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,t.ray.intersectsSphere(Ya)===!1)return;Xp.copy(s).invert(),au.copy(t.ray).applyMatrix4(Xp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,x=m;_<x;_++){let y=c.getX(_);$a.fromBufferAttribute(f,y),qp($a,y,u,s,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,x=m;_<x;_++)$a.fromBufferAttribute(f,_),qp($a,_,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qp(n,t,e,i,s,r,o){let a=au.distanceSqToPoint(n);if(a<e){let u=new K;au.closestPointToPoint(n,u),u.applyMatrix4(i);let c=s.ray.origin.distanceTo(u);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ro=class extends xn{constructor(t=[],e=Ms,i,s,r,o,a,u,c,p){super(t,e,i,s,r,o,a,u,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qn=class extends xn{constructor(t,e,i,s,r,o,a,u,c){super(t,e,i,s,r,o,a,u,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends xn{constructor(t,e,i=ui,s,r,o,a=dn,u=dn,c,p=Ai,f=1){if(p!==Ai&&p!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,u,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ml=class extends xs{constructor(t,e=ui,i=Ms,s,r,o=dn,a=dn,u,c=Ai){let p={width:t,height:t,depth:1},f=[p,p,p,p,p,p];super(t,t,e,i,s,r,o,a,u,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Io=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class n extends ln{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],c=[],p=[],f=[],d=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(u),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(p,3)),this.setAttribute("uv",new Pn(f,2));function _(x,y,g,A,F,E,I,D,L,S,R){let U=E/L,O=I/S,J=E/2,j=I/2,B=D/2,et=L+1,ht=S+1,k=0,st=0,W=new K;for(let $=0;$<ht;$++){let ot=$*O-j;for(let Mt=0;Mt<et;Mt++){let wt=Mt*U-J;W[x]=wt*A,W[y]=ot*F,W[g]=B,c.push(W.x,W.y,W.z),W[x]=0,W[y]=0,W[g]=D>0?1:-1,p.push(W.x,W.y,W.z),f.push(Mt/L),f.push(1-$/S),k+=1}}for(let $=0;$<S;$++)for(let ot=0;ot<L;ot++){let Mt=d+ot+et*$,wt=d+ot+et*($+1),ie=d+(ot+1)+et*($+1),Ot=d+(ot+1)+et*$;u.push(Mt,wt,Ot),u.push(wt,ie,Ot),st+=6}a.addGroup(m,st,R),m+=st,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Za=new K,Ja=new K,eu=new K,ja=new Si,Tr=class extends ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(nl*e),o=t.getIndex(),a=t.getAttribute("position"),u=o?o.count:a.count,c=[0,0,0],p=["a","b","c"],f=new Array(3),d={},m=[];for(let _=0;_<u;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:x,b:y,c:g}=ja;if(x.fromBufferAttribute(a,c[0]),y.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ja.getNormal(eu),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){let F=(A+1)%3,E=f[A],I=f[F],D=ja[p[A]],L=ja[p[F]],S=`${E}_${I}`,R=`${I}_${E}`;R in d&&d[R]?(eu.dot(d[R].normal)<=r&&(m.push(D.x,D.y,D.z),m.push(L.x,L.y,L.z)),d[R]=null):S in d||(d[S]={index0:c[A],index1:c[F],normal:eu.clone()})}}for(let _ in d)if(d[_]){let{index0:x,index1:y}=d[_];Za.fromBufferAttribute(a,x),Ja.fromBufferAttribute(a,y),m.push(Za.x,Za.y,Za.z),m.push(Ja.x,Ja.y,Ja.z)}this.setAttribute("position",new Pn(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Po=class n extends ln{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),u=Math.floor(s),c=a+1,p=u+1,f=t/a,d=e/u,m=[],_=[],x=[],y=[];for(let g=0;g<p;g++){let A=g*d-o;for(let F=0;F<c;F++){let E=F*f-r;_.push(E,-A,0),x.push(0,0,1),y.push(F/a),y.push(1-g/u)}}for(let g=0;g<u;g++)for(let A=0;A<a;A++){let F=A+c*g,E=A+c*(g+1),I=A+1+c*(g+1),D=A+1+c*g;m.push(F,E,D),m.push(E,I,D)}this.setIndex(m),this.setAttribute("position",new Pn(_,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Vs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Yp(s))s.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Yp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function An(n){let t={};for(let e=0;e<n.length;e++){let i=Vs(n[e]);for(let s in i)t[s]=i[s]}return t}function Yp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ey(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var Fm={clone:Vs,merge:An},Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Ey(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m3":this.uniforms[i].value=new xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sl=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wl=class extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Al=class extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function nu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let u=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},El=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],u=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ru:r=t,a=2*e-i;break;case ou:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case ru:o=t,u=2*i-e;break;case ou:o=1,u=i+s[1]-s[0];break;default:o=t-1,u=e}let c=(i-e)*.5,p=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(u-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,p=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),x=_*_,y=x*_,g=-d*y+2*d*x-d*_,A=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*_+1,F=(-1-m)*y+(1.5+m)*x+.5*_,E=m*y-m*x;for(let I=0;I!==a;++I)r[I]=g*o[p+I]+A*o[c+I]+F*o[u+I]+E*o[f+I];return r}},Tl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,p=(i-e)/(s-e),f=1-p;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[u+d]*p;return r}},Cl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rl=class extends ys{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,p=this.inTangents,f=this.outTangents;if(!p||!f){let _=(i-e)/(s-e),x=1-_;for(let y=0;y!==a;++y)r[y]=o[c+y]*x+o[u+y]*_;return r}let d=a*2,m=t-1;for(let _=0;_!==a;++_){let x=o[c+_],y=o[u+_],g=m*d+_*2,A=f[g],F=f[g+1],E=t*d+_*2,I=p[E],D=p[E+1],L=Iy(i,e,A,I,s);r[_]=Om(L,x,F,D,y)}return r}};function Om(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ry(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Iy(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Om(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let u=Ry(r,t,e,i,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-a/u))}return r}var Yn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),nu(t.settings)&&(i.settings={inTangents:xr(t.settings.inTangents,Array),outTangents:xr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break;case iu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return le("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return iu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;nu(this.settings)&&($p(this.settings.inTangents,t),$p(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(he("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(he("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){he("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(o!==null&&o>u){he("KeyframeTrack: Out of order keys.",this,a,u,o),t=!1;break}o=u}if(s!==void 0&&oy(s))for(let a=0,u=s.length;a!==u;++a){let c=s[a];if(isNaN(c)){he("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let u=!1,c=t[a],p=t[a+1];if(c!==p&&(a!==1||c!==t[0]))if(s)u=!0;else{let f=a*i,d=f-i,m=f+i;for(let _=0;_!==i;++_){let x=e[f+_];if(x!==e[d+_]||x!==e[m+_]){u=!0;break}}}if(u){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,u=o*i,c=0;c!==i;++c)e[u+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,nu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $p(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=fl;var _s=class extends Yn{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=mo;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Il.prototype.ValueTypeName="color";var Pl=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Pl.prototype.ValueTypeName="number";var Ll=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=(i-e)/(s-e),c=t*a;for(let p=c+a;c!==p;c+=4)Ti.slerpFlat(r,0,o,c-a,o,c,u);return r}},Lo=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Yn{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=mo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,u,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,f){return c.push(p,f),this},this.removeHandler=function(p){let f=c.indexOf(p);return f!==-1&&c.splice(f,2),this},this.getHandler=function(p){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(p))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zm=new Nl,Ul=class{constructor(t){this.manager=t!==void 0?t:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ka=new K,Qa=new Ti,bi=new K,Do=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ka,Qa,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Qa,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ka,Qa,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Qa,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new K,Zp=new Ee,Jp=new Ee,Mn=class extends Do{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,Zp,Jp),e.subVectors(Jp,Zp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*i/c,s*=o.width/u,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var No=class extends Do{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var yr=-90,_r=1,Fl=class extends Ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(yr,_r,t,e);s.layers=this.layers,this.add(s);let r=new Mn(yr,_r,t,e);r.layers=this.layers,this.add(r);let o=new Mn(yr,_r,t,e);o.layers=this.layers,this.add(o);let a=new Mn(yr,_r,t,e);a.layers=this.layers,this.add(a);let u=new Mn(yr,_r,t,e);u.layers=this.layers,this.add(u);let c=new Mn(yr,_r,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,u]=e;for(let c of e)this.remove(c);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,u,c,p]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(f,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ol=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fu="\\[\\]\\.:\\/",Py=new RegExp("["+Fu+"]","g"),Ou="[^"+Fu+"]",Ly="[^"+Fu.replace("\\.","")+"]",Dy=/((?:WC+[\/:])*)/.source.replace("WC",Ou),Ny=/(WCOD+)?/.source.replace("WCOD",Ly),Uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),Fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),Oy=new RegExp("^"+Dy+Ny+Uy+Fy+"$"),zy=["material","materials","bones","map"],lu=class{constructor(t,e,i){let s=i||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Py,"")}static parseTrackName(t){let e=Oy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let u=i(a.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){he("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){he("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===c){c=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){he("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){he("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){he("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;he("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=lu;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var N1=new Float32Array(1);var Gu=class Gu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Gu.prototype.isMatrix2=!0;var cu=Gu;function zu(n,t,e,i){let s=ky(i);switch(e){case Ru:return n*t;case Pu:return n*t/s.components*s.byteLength;case Xl:return n*t/s.components*s.byteLength;case As:return n*t*2/s.components*s.byteLength;case ql:return n*t*2/s.components*s.byteLength;case Iu:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case Yl:return n*t*4/s.components*s.byteLength;case zo:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:case jl:return Math.max(n,16)*Math.max(t,8)/4;case $l:case Jl:return Math.max(n,8)*Math.max(t,8)/2;case Kl:case Ql:case ec:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tc:case Ho:case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yc:case _c:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bc:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Go:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ky(n){switch(n){case $n:case Au:return{byteLength:1,components:1};case Ir:case Eu:case di:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case ui:case Hl:case fi:return{byteLength:4,components:1};case Tu:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function o0(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Vy(n){let t=new WeakMap;function e(a,u){let c=a.array,p=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,c,p),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,u,c){let p=u.array,f=u.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,p);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){let _=f[d],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){let x=f[m];n.bufferSubData(c,x.start*p.BYTES_PER_ELEMENT,p,x.start,x.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,u),c.version=a.version}}return{get:s,remove:r,update:o}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
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
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
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
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`#ifdef USE_BATCHING
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
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N_=`#ifdef USE_ENVMAP
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
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
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
#endif`,B_=`uniform sampler2D dfgLUT;
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
}`,V_=`
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K_=`#if defined( USE_POINTS_UV )
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
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uv=`#ifdef USE_NORMALMAP
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
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tv=`float getShadowMask() {
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
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
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
}`,Zv=`#if DEPTH_PACKING == 3200
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
}`,Jv=`#define DISTANCE
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
}`,jv=`#define DISTANCE
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,ob=`#define MATCAP
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
}`,ab=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,cb=`#define NORMAL
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
}`,hb=`#define PHONG
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
}`,ub=`#define PHONG
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
}`,fb=`#define STANDARD
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
}`,db=`#define STANDARD
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
}`,pb=`#define TOON
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
}`,mb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,xb=`uniform vec3 diffuse;
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
}`,yb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,vb=`uniform float rotation;
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
}`,bb=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:Hy,alphahash_pars_fragment:Gy,alphamap_fragment:Wy,alphamap_pars_fragment:Xy,alphatest_fragment:qy,alphatest_pars_fragment:Yy,aomap_fragment:$y,aomap_pars_fragment:Zy,batching_pars_vertex:Jy,batching_vertex:jy,begin_vertex:Ky,beginnormal_vertex:Qy,bsdfs:t_,iridescence_fragment:e_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:h_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:d_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:x_,colorspace_fragment:y_,colorspace_pars_fragment:__,envmap_fragment:v_,envmap_common_pars_fragment:b_,envmap_pars_fragment:M_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:N_,envmap_vertex:w_,fog_vertex:A_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:C_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:I_,lights_lambert_fragment:P_,lights_lambert_pars_fragment:L_,lights_pars_begin:D_,lights_toon_fragment:U_,lights_toon_pars_fragment:F_,lights_phong_fragment:O_,lights_phong_pars_fragment:z_,lights_physical_fragment:k_,lights_physical_pars_fragment:B_,lights_fragment_begin:V_,lights_fragment_maps:H_,lights_fragment_end:G_,lightprobes_pars_fragment:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:$_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:j_,map_particle_pars_fragment:K_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:tv,morphinstance_vertex:ev,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:sv,morphtarget_vertex:rv,normal_fragment_begin:ov,normal_fragment_maps:av,normal_pars_fragment:lv,normal_pars_vertex:cv,normal_vertex:hv,normalmap_pars_fragment:uv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,opaque_fragment:gv,packing:xv,premultiplied_alpha_fragment:yv,project_vertex:_v,dithering_fragment:vv,dithering_pars_fragment:bv,roughnessmap_fragment:Mv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Av,shadowmap_vertex:Ev,shadowmask_pars_fragment:Tv,skinbase_vertex:Cv,skinning_pars_vertex:Rv,skinning_vertex:Iv,skinnormal_vertex:Pv,specularmap_fragment:Lv,specularmap_pars_fragment:Dv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Uv,transmission_fragment:Fv,transmission_pars_fragment:Ov,uv_pars_fragment:zv,uv_pars_vertex:kv,uv_vertex:Bv,worldpos_vertex:Vv,background_vert:Hv,background_frag:Gv,backgroundCube_vert:Wv,backgroundCube_frag:Xv,cube_vert:qv,cube_frag:Yv,depth_vert:$v,depth_frag:Zv,distance_vert:Jv,distance_frag:jv,equirect_vert:Kv,equirect_frag:Qv,linedashed_vert:tb,linedashed_frag:eb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:sb,meshlambert_frag:rb,meshmatcap_vert:ob,meshmatcap_frag:ab,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:hb,meshphong_frag:ub,meshphysical_vert:fb,meshphysical_frag:db,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:xb,shadow_vert:yb,shadow_frag:_b,sprite_vert:vb,sprite_frag:bb},Bt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Pi={basic:{uniforms:An([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:An([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:An([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:An([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:An([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:An([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:An([Bt.points,Bt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:An([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:An([Bt.common,Bt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:An([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:An([Bt.sprite,Bt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:An([Bt.common,Bt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:An([Bt.lights,Bt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Pi.physical={uniforms:An([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var Ec={r:0,b:0,g:0},Mb=new Ye,a0=new xe;a0.set(-1,0,0,0,1,0,0,0,1);function Sb(n,t,e,i,s,r){let o=new ue(0),a=s===!0?0:1,u,c,p=null,f=0,d=null;function m(A){let F=A.isScene===!0?A.background:null;if(F&&F.isTexture){let E=A.backgroundBlurriness>0;F=t.get(F,E)}return F}function _(A){let F=!1,E=m(A);E===null?y(o,a):E&&E.isColor&&(y(E,1),F=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(A,F){let E=m(F);E&&(E.isCubeTexture||E.mapping===Fo)?(c===void 0&&(c=new ze(new $e(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Vs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(F.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(a0),c.material.toneMapped=Re.getTransfer(E.colorSpace)!==Be,(p!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new ze(new Po(2,2),new wn({name:"BackgroundMaterial",uniforms:Vs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,u.material.toneMapped=Re.getTransfer(E.colorSpace)!==Be,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,p=E,f=E.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function y(A,F){A.getRGB(Ec,Uu(n)),e.buffers.color.setClear(Ec.r,Ec.g,Ec.b,F,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,F=1){o.set(A),a=F,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,y(o,a)},render:_,addToRenderList:x,dispose:g}}function wb(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(O,J,j,B,et){let ht=!1,k=f(O,B,j,J);r!==k&&(r=k,c(r.object)),ht=m(O,B,j,et),ht&&_(O,B,j,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(ht||o)&&(o=!1,E(O,J,j,B),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function u(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function p(O){return n.deleteVertexArray(O)}function f(O,J,j,B){let et=B.wireframe===!0,ht=i[J.id];ht===void 0&&(ht={},i[J.id]=ht);let k=O.isInstancedMesh===!0?O.id:0,st=ht[k];st===void 0&&(st={},ht[k]=st);let W=st[j.id];W===void 0&&(W={},st[j.id]=W);let $=W[et];return $===void 0&&($=d(u()),W[et]=$),$}function d(O){let J=[],j=[],B=[];for(let et=0;et<e;et++)J[et]=0,j[et]=0,B[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:B,object:O,attributes:{},index:null}}function m(O,J,j,B){let et=r.attributes,ht=J.attributes,k=0,st=j.getAttributes();for(let W in st)if(st[W].location>=0){let ot=et[W],Mt=ht[W];if(Mt===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(Mt=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(Mt=O.instanceColor)),ot===void 0||ot.attribute!==Mt||Mt&&ot.data!==Mt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function _(O,J,j,B){let et={},ht=J.attributes,k=0,st=j.getAttributes();for(let W in st)if(st[W].location>=0){let ot=ht[W];ot===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(ot=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(ot=O.instanceColor));let Mt={};Mt.attribute=ot,ot&&ot.data&&(Mt.data=ot.data),et[W]=Mt,k++}r.attributes=et,r.attributesNum=k,r.index=B}function x(){let O=r.newAttributes;for(let J=0,j=O.length;J<j;J++)O[J]=0}function y(O){g(O,0)}function g(O,J){let j=r.newAttributes,B=r.enabledAttributes,et=r.attributeDivisors;j[O]=1,B[O]===0&&(n.enableVertexAttribArray(O),B[O]=1),et[O]!==J&&(n.vertexAttribDivisor(O,J),et[O]=J)}function A(){let O=r.newAttributes,J=r.enabledAttributes;for(let j=0,B=J.length;j<B;j++)J[j]!==O[j]&&(n.disableVertexAttribArray(j),J[j]=0)}function F(O,J,j,B,et,ht,k){k===!0?n.vertexAttribIPointer(O,J,j,et,ht):n.vertexAttribPointer(O,J,j,B,et,ht)}function E(O,J,j,B){x();let et=B.attributes,ht=j.getAttributes(),k=J.defaultAttributeValues;for(let st in ht){let W=ht[st];if(W.location>=0){let $=et[st];if($===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let ot=$.normalized,Mt=$.itemSize,wt=t.get($);if(wt===void 0)continue;let ie=wt.buffer,Ot=wt.type,Kt=wt.bytesPerElement,Z=Ot===n.INT||Ot===n.UNSIGNED_INT||$.gpuType===Hl;if($.isInterleavedBufferAttribute){let q=$.data,lt=q.stride,yt=$.offset;if(q.isInstancedInterleavedBuffer){for(let ct=0;ct<W.locationSize;ct++)g(W.location+ct,q.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ct=0;ct<W.locationSize;ct++)y(W.location+ct);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ct=0;ct<W.locationSize;ct++)F(W.location+ct,Mt/W.locationSize,Ot,ot,lt*Kt,(yt+Mt/W.locationSize*ct)*Kt,Z)}else{if($.isInstancedBufferAttribute){for(let q=0;q<W.locationSize;q++)g(W.location+q,$.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let q=0;q<W.locationSize;q++)y(W.location+q);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let q=0;q<W.locationSize;q++)F(W.location+q,Mt/W.locationSize,Ot,ot,Mt*Kt,Mt/W.locationSize*q*Kt,Z)}}else if(k!==void 0){let ot=k[st];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(W.location,ot);break;case 3:n.vertexAttrib3fv(W.location,ot);break;case 4:n.vertexAttrib4fv(W.location,ot);break;default:n.vertexAttrib1fv(W.location,ot)}}}}A()}function I(){R();for(let O in i){let J=i[O];for(let j in J){let B=J[j];for(let et in B){let ht=B[et];for(let k in ht)p(ht[k].object),delete ht[k];delete B[et]}}delete i[O]}}function D(O){if(i[O.id]===void 0)return;let J=i[O.id];for(let j in J){let B=J[j];for(let et in B){let ht=B[et];for(let k in ht)p(ht[k].object),delete ht[k];delete B[et]}}delete i[O.id]}function L(O){for(let J in i){let j=i[J];for(let B in j){let et=j[B];if(et[O.id]===void 0)continue;let ht=et[O.id];for(let k in ht)p(ht[k].object),delete ht[k];delete et[O.id]}}}function S(O){for(let J in i){let j=i[J],B=O.isInstancedMesh===!0?O.id:0,et=j[B];if(et!==void 0){for(let ht in et){let k=et[ht];for(let st in k)p(k[st].object),delete k[st];delete et[ht]}delete j[B],Object.keys(j).length===0&&delete i[J]}}}function R(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function Ab(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,p){p!==0&&(n.drawArraysInstanced(i,u,c,p),e.update(c,i,p))}function a(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,p);let d=0;for(let m=0;m<p;m++)d+=c[m];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Eb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==ti&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let S=L===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==$n&&L!==fi&&!S&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",p=u(c);p!==c&&(le("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:A,maxVaryings:F,maxFragmentUniforms:E,maxSamples:I,samples:D}}function Tb(n){let t=this,e=null,i=0,s=!1,r=!1,o=new li,a=new xe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=p(f,d,0)},this.setState=function(f,d,m){let _=f.clippingPlanes,x=f.clipIntersection,y=f.clipShadows,g=n.get(f);if(!s||_===null||_.length===0||r&&!y)r?p(null):c();else{let A=r?0:i,F=A*4,E=g.clippingState||null;u.value=E,E=p(_,d,F,m);for(let I=0;I!==F;++I)E[I]=e[I];g.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(f,d,m,_){let x=f!==null?f.length:0,y=null;if(x!==0){if(y=u.value,_!==!0||y===null){let g=m+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(y===null||y.length<g)&&(y=new Float32Array(g));for(let F=0,E=m;F!==x;++F,E+=4)o.copy(f[F]).applyMatrix4(A,a),o.normal.toArray(y,E),y[E+3]=o.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}var Dr=4,Cb=6,Rb=20,Ib=256,Wo=new No,km=new ue,Wu=null,Xu=0,qu=0,Yu=!1,Pb=new K,Hs=new K,Cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Pb}=r;Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wu,Xu,qu),this._renderer.xr.enabled=Yu,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:di,format:ti,colorSpace:go,depthBuffer:!1},s=Bm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lb(r)),this._blurMaterial=Nb(r,t,e),this._ggxMaterial=Db(r,t,e)}return s}_compileMaterial(t){let e=new ze(new ln,t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,i,s,r){let u=new Mn(90,1,e,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(km),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new $e,new Sn({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,y=x.material,g=!1,A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,g=!0):(y.color.copy(km),g=!0);for(let F=0;F<6;F++){let E=F%3;E===0?(u.up.set(0,c[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+p[F],r.y,r.z)):E===1?(u.up.set(0,0,c[F]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+p[F],r.z)):(u.up.set(0,c[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+p[F]));let I=this._cubeSize;Lr(s,E*I,F>2?I:0,I,I),f.setRenderTarget(s),g&&f.render(x,u),f.render(t,u)}f.toneMapping=m,f.autoClear=d,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ms||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let u=this._cubeSize;Lr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(o,Wo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let u=o.uniforms,c=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-p*p),d=c*1.25,m=f*d,{_lodMax:_}=this,x=this._sizeLods[i],y=3*x*(i>_-Dr?i-_+Dr:0),g=4*(this._cubeSize-x);u.envMap.value=t.texture,u.roughness.value=m,u.mipInt.value=_-e,Lr(r,y,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Wo),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=_-i,Lr(t,y,g,3*x,2*x),s.setRenderTarget(t),s.render(a,Wo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,u=this._lodMeshes[s];u.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],f=3*p*(s>this._lodMax-Dr?s-this._lodMax+Dr:0),d=4*(this._cubeSize-p);Lr(e,f,d,3*p,2*p),o.setRenderTarget(e),o.render(u,Wo)}};function Lb(n){let t=[],e=[],i=n,s=n-Dr+1+Cb;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),u=-a,c=1+a,p=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,d=6,m=3,_=new Float32Array(m*d*f),x=new Float32Array(m*d*f);for(let g=0;g<f;g++){let A=g%3*2/3-1,F=g>2?0:-1,E=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];_.set(E,m*d*g);for(let I=0;I<d;I++){let D=p[I*2]*2-1,L=p[I*2+1]*2-1;g===0?Hs.set(1,L,D):g===1?Hs.set(-D,1,-L):g===2?Hs.set(-D,L,1):g===3?Hs.set(-1,L,-D):g===4?Hs.set(-D,-1,L):Hs.set(D,L,-1),Hs.toArray(x,(g*d+I)*m)}}let y=new ln;y.setAttribute("position",new Qe(_,m)),y.setAttribute("outputDirection",new Qe(x,m)),e.push(new ze(y,null)),i>Dr&&i--}return{lodMeshes:e,sizeLods:t}}function Bm(n,t,e){let i=new On(n,t,e);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Db(n,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Nb(n,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Vm(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Hm(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rc=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ro(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Ri});r.uniforms.tEquirect.value=e;let o=new ze(s,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=on),new Fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Ub(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===kl||m===Bl)if(t.has(d)){let _=t.get(d).texture;return a(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let x=new Rc(_.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let m=d.mapping,_=m===kl||m===Bl,x=m===Ms||m===Bs;if(_||x){let y=e.get(d),g=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Cc(n)),y=_?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{let A=d.image;return _&&A&&A.height>0||x&&A&&u(A)?(i===null&&(i=new Cc(n)),y=_?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",p),y.texture):null}}}return d}function a(d,m){return m===kl?d.mapping=Ms:m===Bl&&(d.mapping=Bs),d}function u(d){let m=0,_=6;for(let x=0;x<_;x++)d[x]!==void 0&&m++;return m===_}function c(d){let m=d.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(d){let m=d.target;m.removeEventListener("dispose",p);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Fb(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&zs("WebGLRenderer: "+i+" extension not supported."),s}}}function Ob(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function u(f){let d=f.attributes;for(let m in d)t.update(d[m],n.ARRAY_BUFFER)}function c(f){let d=[],m=f.index,_=f.attributes.position,x=0;if(_===void 0)return;if(m!==null){let A=m.array;x=m.version;for(let F=0,E=A.length;F<E;F+=3){let I=A[F+0],D=A[F+1],L=A[F+2];d.push(I,D,D,L,L,I)}}else{let A=_.array;x=_.version;for(let F=0,E=A.length/3-1;F<E;F+=3){let I=F+0,D=F+1,L=F+2;d.push(I,D,D,L,L,I)}}let y=new(_.count>=65535?Ao:wo)(d,1);y.version=x;let g=r.get(f);g&&t.remove(g),r.set(f,y)}function p(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:u,getWireframeAttribute:p}}function zb(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function u(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function p(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let x=0;for(let y=0;y<m;y++)x+=d[y];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=p}function kb(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:he("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Bb(n,t,e){let i=new WeakMap,s=new Ke;function r(o,a,u){let c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=p!==void 0?p.length:0,d=i.get(a);if(d===void 0||d.count!==f){let R=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],F=0;m===!0&&(F=1),_===!0&&(F=2),x===!0&&(F=3);let E=a.attributes.position.count*F,I=1;E>t.maxTextureSize&&(I=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*I*4*f),L=new bo(D,E,I,f);L.type=fi,L.needsUpdate=!0;let S=F*4;for(let U=0;U<f;U++){let O=y[U],J=g[U],j=A[U],B=E*I*4*U;for(let et=0;et<O.count;et++){let ht=et*S;m===!0&&(s.fromBufferAttribute(O,et),D[B+ht+0]=s.x,D[B+ht+1]=s.y,D[B+ht+2]=s.z,D[B+ht+3]=0),_===!0&&(s.fromBufferAttribute(J,et),D[B+ht+4]=s.x,D[B+ht+5]=s.y,D[B+ht+6]=s.z,D[B+ht+7]=0),x===!0&&(s.fromBufferAttribute(j,et),D[B+ht+8]=s.x,D[B+ht+9]=s.y,D[B+ht+10]=s.z,D[B+ht+11]=j.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Ee(E,I)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let _=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",c)}u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Vb(n,t,e,i,s){let r=new WeakMap;function o(c){let p=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==p&&(t.update(d),r.set(d,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),r.get(c)!==p&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==p&&(m.update(),r.set(m,p))}return d}function a(){r=new WeakMap}function u(c){let p=c.target;p.removeEventListener("dispose",u),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:a}}var Hb={[xu]:"LINEAR_TONE_MAPPING",[yu]:"REINHARD_TONE_MAPPING",[_u]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[Mu]:"AGX_TONE_MAPPING",[Su]:"NEUTRAL_TONE_MAPPING",[bu]:"CUSTOM_TONE_MAPPING"};function Gb(n,t,e,i,s,r){let o=new On(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,c=new ln;c.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pn([0,2,0,0,2,0],2));let p=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ze(c,p),d=new No(-1,1,1,-1,0,1),m=null,_=null,x=!1,y,g=null,A=[],F=!1;this.setSize=function(E,I){o.setSize(E,I),a!==null&&a.setSize(E,I),u!==null&&u.setSize(E,I);for(let D=0;D<A.length;D++){let L=A[D];L.setSize&&L.setSize(E,I)}},this.setEffects=function(E){A=E,F=A.length>0&&A[0].isRenderPass===!0;let I=o.width,D=o.height;A.length>0&&a===null&&(a=new On(I,D,{type:di,depthBuffer:!1,stencilBuffer:!1}),u=new On(I,D,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<A.length;L++){let S=A[L];S.setSize&&S.setSize(I,D)}},this.begin=function(E,I){if(x||E.toneMapping===hi&&A.length===0)return!1;if(g=I,I!==null){let D=I.width,L=I.height;(o.width!==D||o.height!==L)&&this.setSize(D,L)}return F===!1&&E.setRenderTarget(o),y=E.toneMapping,E.toneMapping=hi,!0},this.hasRenderPass=function(){return F},this.end=function(E,I){E.toneMapping=y,x=!0;let D=o,L=a;for(let S=0;S<A.length;S++){let R=A[S];R.enabled!==!1&&(R.render(E,L,D,I),R.needsSwap!==!1&&(D=L,L=L===a?u:a))}if(m!==E.outputColorSpace||_!==E.toneMapping){m=E.outputColorSpace,_=E.toneMapping,p.defines={},Re.getTransfer(m)===Be&&(p.defines.SRGB_TRANSFER="");let S=Hb[_];S&&(p.defines[S]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,E.setRenderTarget(g),E.render(f,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),c.dispose(),p.dispose()}}var l0=new xn,Ju=new xs(1,1),c0=new bo,h0=new gl,u0=new Ro,Gm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function Ur(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Lc(n,t){let e=Wm[t];e===void 0&&(e=new Int32Array(t),Wm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Wb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function qb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function Yb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function $b(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;Ym.set(i),n.uniformMatrix2fv(this.addr,!1,Ym),hn(e,i)}}function Zb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;qm.set(i),n.uniformMatrix3fv(this.addr,!1,qm),hn(e,i)}}function Jb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;Xm.set(i),n.uniformMatrix4fv(this.addr,!1,Xm),hn(e,i)}}function jb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Kb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function Qb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function tM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function eM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function iM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function sM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function rM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ju.compareFunction=e.isReversedDepthBuffer()?Ac:wc,r=Ju):r=l0,e.setTexture2D(t||r,s)}function oM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||h0,s)}function aM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||u0,s)}function lM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||c0,s)}function cM(n){switch(n){case 5126:return Wb;case 35664:return Xb;case 35665:return qb;case 35666:return Yb;case 35674:return $b;case 35675:return Zb;case 35676:return Jb;case 5124:case 35670:return jb;case 35667:case 35671:return Kb;case 35668:case 35672:return Qb;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function hM(n,t){n.uniform1fv(this.addr,t)}function uM(n,t){let e=Ur(t,this.size,2);n.uniform2fv(this.addr,e)}function fM(n,t){let e=Ur(t,this.size,3);n.uniform3fv(this.addr,e)}function dM(n,t){let e=Ur(t,this.size,4);n.uniform4fv(this.addr,e)}function pM(n,t){let e=Ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mM(n,t){let e=Ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gM(n,t){let e=Ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xM(n,t){n.uniform1iv(this.addr,t)}function yM(n,t){n.uniform2iv(this.addr,t)}function _M(n,t){n.uniform3iv(this.addr,t)}function vM(n,t){n.uniform4iv(this.addr,t)}function bM(n,t){n.uniform1uiv(this.addr,t)}function MM(n,t){n.uniform2uiv(this.addr,t)}function SM(n,t){n.uniform3uiv(this.addr,t)}function wM(n,t){n.uniform4uiv(this.addr,t)}function AM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ju:o=l0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function EM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||h0,r[o])}function TM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||u0,r[o])}function CM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||c0,r[o])}function RM(n){switch(n){case 5126:return hM;case 35664:return uM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return bM;case 36294:return MM;case 36295:return SM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return CM}}var ju=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cM(e.type)}},Ku=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RM(e.type)}},Qu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},$u=/(\w+)(\])?(\[|\.)?/g;function $m(n,t){n.seq.push(t),n.map[t.id]=t}function IM(n,t,e){let i=n.name,s=i.length;for($u.lastIndex=0;;){let r=$u.exec(i),o=$u.lastIndex,a=r[1],u=r[2]==="]",c=r[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===s){$m(e,c===void 0?new ju(a,n,t):new Ku(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Qu(a),$m(e,f)),e=f}}}var Nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),u=t.getUniformLocation(e,a.name);IM(a,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Zm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var PM=37297,LM=0;function DM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Jm=new xe;function NM(n){Re._getMatrix(Jm,Re.workingColorSpace,n);let t=`mat3( ${Jm.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(n)){case xo:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+DM(n.getShaderSource(t),a)}else return r}function UM(n,t){let e=NM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var FM={[xu]:"Linear",[yu]:"Reinhard",[_u]:"Cineon",[vu]:"ACESFilmic",[Mu]:"AgX",[Su]:"Neutral",[bu]:"Custom"};function OM(n,t){let e=FM[t];return e===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tc=new K;function zM(){Re.getLuminanceCoefficients(Tc);let n=Tc.x.toFixed(4),t=Tc.y.toFixed(4),e=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function BM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function VM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qo(n){return n!==""}function Km(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(n){return n.replace(HM,WM)}var GM=new Map;function WM(n,t){let e=Se[t];if(e===void 0){let i=GM.get(t);if(i!==void 0)e=Se[i],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tf(e)}var XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(n){return n.replace(XM,qM)}function qM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function e0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var YM={[Uo]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function $M(n){return YM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ZM={[Ms]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function JM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ZM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var jM={[Bs]:"ENVMAP_MODE_REFRACTION"};function KM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var QM={[gu]:"ENVMAP_BLENDING_MULTIPLY",[ym]:"ENVMAP_BLENDING_MIX",[_m]:"ENVMAP_BLENDING_ADD"};function tS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":QM[n.combine]||"ENVMAP_BLENDING_NONE"}function eS(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function nS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,u=$M(e),c=JM(e),p=KM(e),f=tS(e),d=eS(e),m=kM(e),_=BM(r),x=s.createProgram(),y,g,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(y=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Se.tonemapping_pars_fragment:"",e.toneMapping!==hi?OM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,UM("linearToOutputTexel",e.outputColorSpace),zM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),o=tf(o),o=Km(o,e),o=Qm(o,e),a=tf(a),a=Km(a,e),a=Qm(a,e),o=t0(o),a=t0(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let F=A+y+o,E=A+g+a,I=Zm(s,s.VERTEX_SHADER,F),D=Zm(s,s.FRAGMENT_SHADER,E);s.attachShader(x,I),s.attachShader(x,D),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(O){if(n.debug.checkShaderErrors){let J=s.getProgramInfoLog(x)||"",j=s.getShaderInfoLog(I)||"",B=s.getShaderInfoLog(D)||"",et=J.trim(),ht=j.trim(),k=B.trim(),st=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,D);else{let $=jm(s,I,"vertex"),ot=jm(s,D,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+et+`
`+$+`
`+ot)}else et!==""?le("WebGLProgram: Program Info Log:",et):(ht===""||k==="")&&(W=!1);W&&(O.diagnostics={runnable:st,programLog:et,vertexShader:{log:ht,prefix:y},fragmentShader:{log:k,prefix:g}})}s.deleteShader(I),s.deleteShader(D),S=new Nr(s,x),R=VM(s,x)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,PM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=D,this}var iS=0,ef=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nf(t),e.set(t,i)),i}},nf=class{constructor(t){this.id=iS++,this.code=t,this.usedTimes=0}};function sS(n){return n===As||n===Ho||n===Go}function rS(n,t,e,i,s,r){let o=new Mo,a=new ef,u=new Set,c=[],p=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function x(S,R,U,O,J,j){let B=O.fog,et=J.geometry,ht=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,st=t.get(S.envMap||ht,k),W=st&&st.mapping===Fo?st.image.height:null,$=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&le("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ot=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Mt=ot!==void 0?ot.length:0,wt=0;et.morphAttributes.position!==void 0&&(wt=1),et.morphAttributes.normal!==void 0&&(wt=2),et.morphAttributes.color!==void 0&&(wt=3);let ie,Ot,Kt,Z;if($){let _e=Pi[$];ie=_e.vertexShader,Ot=_e.fragmentShader}else{ie=S.vertexShader,Ot=S.fragmentShader;let _e=a.getVertexShaderStage(S),Te=a.getFragmentShaderStage(S);a.update(S,_e,Te),Kt=_e.id,Z=Te.id}let q=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),yt=J.isInstancedMesh===!0,ct=J.isBatchedMesh===!0,Lt=!!S.map,Zt=!!S.matcap,qt=!!st,Dt=!!S.aoMap,ft=!!S.lightMap,Wt=!!S.bumpMap&&S.wireframe===!1,Xt=!!S.normalMap,me=!!S.displacementMap,we=!!S.emissiveMap,ce=!!S.metalnessMap,fe=!!S.roughnessMap,H=S.anisotropy>0,Ge=S.clearcoat>0,Ae=S.dispersion>0,N=S.retroreflectivity>0,b=S.iridescence>0,X=S.sheen>0,nt=S.transmission>0,dt=H&&!!S.anisotropyMap,Et=Ge&&!!S.clearcoatMap,Rt=Ge&&!!S.clearcoatNormalMap,pt=Ge&&!!S.clearcoatRoughnessMap,xt=b&&!!S.iridescenceMap,Ut=b&&!!S.iridescenceThicknessMap,$t=X&&!!S.sheenColorMap,Ct=X&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,te=!!S.specularColorMap,se=!!S.specularIntensityMap,ge=nt&&!!S.transmissionMap,G=nt&&!!S.thicknessMap,Ft=!!S.gradientMap,ut=!!S.alphaMap,It=S.alphaTest>0,Vt=!!S.alphaHash,bt=!!S.extensions,ne=hi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ne=n.toneMapping);let Ht={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:Ot,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ct,batchingColor:ct&&J._colorsTexture!==null,instancing:yt,instancingColor:yt&&J.instanceColor!==null,instancingMorph:yt&&J.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:Zt,envMap:qt,envMapMode:qt&&st.mapping,envMapCubeUVHeight:W,aoMap:Dt,lightMap:ft,bumpMap:Wt,normalMap:Xt,displacementMap:me,emissiveMap:we,normalMapObjectSpace:Xt&&S.normalMapType===Mm,normalMapTangentSpace:Xt&&S.normalMapType===Lu,packedNormalMap:Xt&&S.normalMapType===Lu&&sS(S.normalMap.format),metalnessMap:ce,roughnessMap:fe,anisotropy:H,anisotropyMap:dt,clearcoat:Ge,clearcoatMap:Et,clearcoatNormalMap:Rt,clearcoatRoughnessMap:pt,dispersion:Ae,retroreflection:N,iridescence:b,iridescenceMap:xt,iridescenceThicknessMap:Ut,sheen:X,sheenColorMap:$t,sheenRoughnessMap:Ct,specularMap:Nt,specularColorMap:te,specularIntensityMap:se,transmission:nt,transmissionMap:ge,thicknessMap:G,gradientMap:Ft,opaque:S.transparent===!1&&S.blending===Rr&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:It,alphaHash:Vt,combine:S.combine,mapUv:Lt&&_(S.map.channel),aoMapUv:Dt&&_(S.aoMap.channel),lightMapUv:ft&&_(S.lightMap.channel),bumpMapUv:Wt&&_(S.bumpMap.channel),normalMapUv:Xt&&_(S.normalMap.channel),displacementMapUv:me&&_(S.displacementMap.channel),emissiveMapUv:we&&_(S.emissiveMap.channel),metalnessMapUv:ce&&_(S.metalnessMap.channel),roughnessMapUv:fe&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:Et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(S.sheenRoughnessMap.channel),specularMapUv:Nt&&_(S.specularMap.channel),specularColorMapUv:te&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:ge&&_(S.transmissionMap.channel),thicknessMapUv:G&&_(S.thicknessMap.channel),alphaMapUv:ut&&_(S.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Xt||H),vertexNormals:!!et.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!et.attributes.uv&&(Lt||ut),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||et.attributes.normal===void 0&&Xt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:lt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:wt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&Re.getTransfer(S.map.colorSpace)===Be,decodeVideoTextureEmissive:we&&S.emissiveMap.isVideoTexture===!0&&Re.getTransfer(S.emissiveMap.colorSpace)===Be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qn,flipSided:S.side===Dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function y(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)R.push(U),R.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(g(R,S),A(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function g(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numSunLights),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numSunLightShadows),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function A(S,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function F(S){let R=m[S.type],U;if(R){let O=Pi[R];U=Fm.clone(O.uniforms)}else U=S.uniforms;return U}function E(S,R){let U=p.get(R);return U!==void 0?++U.usedTimes:(U=new nS(n,R,S,s),c.push(U),p.set(R,U)),U}function I(S){if(--S.usedTimes===0){let R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),p.delete(S.cacheKey),S.destroy()}}function D(S){a.remove(S)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:F,acquireProgram:E,releaseProgram:I,releaseShaderCache:D,programs:c,dispose:L}}function oS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,u){n.get(o)[a]=u}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function aS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function n0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function i0(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,_,x,y,g){let A=n[t];return A===void 0?(A={id:d.id,object:d,geometry:m,material:_,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},n[t]=A):(A.id=d.id,A.object=d,A.geometry=m,A.material=_,A.materialVariant=o(d),A.groupOrder=x,A.renderOrder=d.renderOrder,A.z=y,A.group=g),t++,A}function u(d,m,_,x,y,g,A){A.reversedDepth===!0&&(y=-y);let F=a(d,m,_,x,y,g);_.transmission>0?i.push(F):_.transparent===!0?s.push(F):e.push(F)}function c(d,m,_,x,y,g){let A=a(d,m,_,x,y,g);_.transmission>0?i.unshift(A):_.transparent===!0?s.unshift(A):e.unshift(A)}function p(d,m){e.length>1&&e.sort(d||aS),i.length>1&&i.sort(m||n0),s.length>1&&s.sort(m||n0)}function f(){for(let d=t,m=n.length;d<m;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:u,unshift:c,finish:f,sort:p}}function lS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new i0,n.set(i,[o])):s>=r.length?(o=new i0,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new ue};break;case"SpotLight":e={position:new K,direction:new K,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function hS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var uS=0;function fS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dS(n){let t=new cS,e=hS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);let s=new K,r=new Ye,o=new Ye;function a(c){let p=0,f=0,d=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,_=0,x=0,y=0,g=0,A=0,F=0,E=0,I=0,D=0,L=0,S=0,R=0,U=0;c.sort(fS);for(let J=0,j=c.length;J<j;J++){let B=c[J],et=B.color,ht=B.intensity,k=B.distance,st=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===As?st=B.shadow.map.texture:st=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=et.r*ht,f+=et.g*ht,d+=et.b*ht;else if(B.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],ht);U++}else if(B.isSunLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let $=B.shadow,ot=e.get(B);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[_]=ot,i.sunShadowMap[_]=st;let Mt=$.getViewportCount();for(let wt=0;wt<Mt;wt++)i.sunShadowMatrix[x+wt]=$.getMatrix(wt),i.sunShadowCascade[x+wt]=$._cascadeData[wt];x+=Mt,_++}i.sun[m]=W,m++}else if(B.isDirectionalLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let $=B.shadow,ot=e.get(B);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,i.directionalShadow[y]=ot,i.directionalShadowMap[y]=st,i.directionalShadowMatrix[y]=B.shadow.matrix,I++}i.directional[y]=W,y++}else if(B.isSpotLight){let W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(et).multiplyScalar(ht),W.distance=k,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[A]=W;let $=B.shadow;if(B.map&&(i.spotLightMap[S]=B.map,S++,$.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[A]=$.matrix,B.castShadow){let ot=e.get(B);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,i.spotShadow[A]=ot,i.spotShadowMap[A]=st,L++}A++}else if(B.isRectAreaLight){let W=t.get(B);W.color.copy(et).multiplyScalar(ht),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[F]=W,F++}else if(B.isPointLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){let $=B.shadow,ot=e.get(B);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,ot.shadowCameraNear=$.camera.near,ot.shadowCameraFar=$.camera.far,i.pointShadow[g]=ot,i.pointShadowMap[g]=st,i.pointShadowMatrix[g]=B.shadow.matrix,D++}i.point[g]=W,g++}else if(B.isHemisphereLight){let W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(ht),W.groundColor.copy(B.groundColor).multiplyScalar(ht),i.hemi[E]=W,E++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=d;let O=i.hash;(O.sunLength!==m||O.directionalLength!==y||O.pointLength!==g||O.spotLength!==A||O.rectAreaLength!==F||O.hemiLength!==E||O.numSunShadows!==_||O.numDirectionalShadows!==I||O.numPointShadows!==D||O.numSpotShadows!==L||O.numSpotMaps!==S||O.numLightProbes!==U)&&(i.sun.length=m,i.directional.length=y,i.spot.length=A,i.rectArea.length=F,i.point.length=g,i.hemi.length=E,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,O.sunLength=m,O.directionalLength=y,O.pointLength=g,O.spotLength=A,O.rectAreaLength=F,O.hemiLength=E,O.numSunShadows=_,O.numDirectionalShadows=I,O.numPointShadows=D,O.numSpotShadows=L,O.numSpotMaps=S,O.numLightProbes=U,i.version=uS++)}function u(c,p){let f=0,d=0,m=0,_=0,x=0,y=0,g=p.matrixWorldInverse;for(let A=0,F=c.length;A<F;A++){let E=c[A];if(E.isSunLight){let I=i.sun[f];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(g),f++}else if(E.isDirectionalLight){let I=i.directional[d];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),d++}else if(E.isSpotLight){let I=i.spot[_];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),_++}else if(E.isRectAreaLight){let I=i.rectArea[x];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let I=i.point[m];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){let I=i.hemi[y];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(g),y++}}}return{setup:a,setupView:u,state:i}}function s0(n){let t=new dS(n),e=[],i=[],s=[];function r(d){f.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function u(d){s.push(d)}function c(){t.setup(e)}function p(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:u}}function pS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new s0(n),t.set(s,[a])):r>=o.length?(a=new s0(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var mS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gS=`uniform sampler2D shadow_pass;
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
}`,xS=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],yS=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],r0=new Ye,Xo=new K,Zu=new K;function _S(n,t,e){let i=new To,s=new Ee,r=new Ee,o=new Ke,a=new wl,u=new Al,c={},p=e.maxTextureSize,f={[bs]:Dn,[Dn]:bs,[Qn]:Qn},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:mS,fragmentShader:gS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new ln;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(_,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let g=this.type;this.render=function(D,L,S){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Qp&&(le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uo);let R=n.getRenderTarget(),U=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Ri),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=g!==this.type;j&&L.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(et=>et.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,et=D.length;B<et;B++){let ht=D[B],k=ht.shadow;if(k===void 0){le("WebGLShadowMap:",ht,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();s.multiply(st),r.copy(k.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/st.y),s.y=r.y*st.y,k.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Cr){if(ht.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new On(s.x,s.y,{format:As,type:di,minFilter:on,magFilter:on,generateMipmaps:!1}),k.map.texture.name=ht.name+".shadowMap",k.map.depthTexture=new xs(s.x,s.y,fi),k.map.depthTexture.name=ht.name+".shadowMapDepth",k.map.depthTexture.format=Ai,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn}else ht.isPointLight?(k.map=new Rc(s.x),k.map.depthTexture=new Ml(s.x,ui)):(k.map=new On(s.x,s.y),k.map.depthTexture=new xs(s.x,s.y,ui)),k.map.depthTexture.name=ht.name+".shadowMap",k.map.depthTexture.format=Ai,this.type===Uo?(k.map.depthTexture.compareFunction=W?Ac:wc,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let $=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();ht.isPointLight!==!0&&k.updateMatrices(ht,S);for(let ot=0;ot<$;ot++){let Mt=k.getCamera(ot);if(ht.isPointLight){let wt=k.camera,ie=k.matrix,Ot=ht.distance||wt.far;Ot!==wt.far&&(wt.far=Ot,wt.updateProjectionMatrix()),Xo.setFromMatrixPosition(ht.matrixWorld),wt.position.copy(Xo),Zu.copy(wt.position),Zu.add(xS[ot]),wt.up.copy(yS[ot]),wt.lookAt(Zu),wt.updateMatrixWorld(),ie.makeTranslation(-Xo.x,-Xo.y,-Xo.z),r0.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(r0,wt.coordinateSystem,wt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(k.map),n.clear());let wt=k.getViewport(ot);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),J.viewport(o)}i=k.getFrustum(ot),E(L,S,Mt,ht,this.type)}k.isPointLightShadow!==!0&&this.type===Cr&&A(k,S),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(R,U,O)};function A(D,L){let S=t.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null?D.mapPass=new On(s.x,s.y,{format:As,type:di}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,S,d,x,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value.set(D.map.width,D.map.height),m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,S,m,x,null)}function F(D,L,S,R){let U=null,O=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)U=O;else if(U=S.isPointLight===!0?u:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let J=U.uuid,j=L.uuid,B=c[J];B===void 0&&(B={},c[J]=B);let et=B[j];et===void 0&&(et=U.clone(),B[j]=et,L.addEventListener("dispose",I)),U=et}if(U.visible=L.visible,U.wireframe=L.wireframe,R===Cr?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:f[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let J=n.properties.get(U);J.light=S}return U}function E(D,L,S,R,U){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&U===Cr)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);let j=t.update(D),B=D.material;if(Array.isArray(B)){let et=j.groups;for(let ht=0,k=et.length;ht<k;ht++){let st=et[ht],W=B[st.materialIndex];if(W&&W.visible){let $=F(D,W,R,U);D.onBeforeShadow(n,D,L,S,j,$,st),n.renderBufferDirect(S,null,j,$,D,st),D.onAfterShadow(n,D,L,S,j,$,st)}}}else if(B.visible){let et=F(D,B,R,U);D.onBeforeShadow(n,D,L,S,j,et,null),n.renderBufferDirect(S,null,j,et,D,null),D.onAfterShadow(n,D,L,S,j,et,null)}}let J=D.children;for(let j=0,B=J.length;j<B;j++)E(J[j],L,S,R,U)}function I(D){D.target.removeEventListener("dispose",I);for(let S in c){let R=c[S],U=D.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function vS(n,t){function e(){let G=!1,Ft=new Ke,ut=null,It=new Ke(0,0,0,0);return{setMask:function(Vt){ut!==Vt&&!G&&(n.colorMask(Vt,Vt,Vt,Vt),ut=Vt)},setLocked:function(Vt){G=Vt},setClear:function(Vt,bt,ne,Ht,_e){_e===!0&&(Vt*=Ht,bt*=Ht,ne*=Ht),Ft.set(Vt,bt,ne,Ht),It.equals(Ft)===!1&&(n.clearColor(Vt,bt,ne,Ht),It.copy(Ft))},reset:function(){G=!1,ut=null,It.set(-1,0,0,0)}}}function i(){let G=!1,Ft=!1,ut=null,It=null,Vt=null;return{setReversed:function(bt){if(Ft!==bt){let ne=t.get("EXT_clip_control");bt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Ft=bt;let Ht=Vt;Vt=null,this.setClear(Ht)}},getReversed:function(){return Ft},setTest:function(bt){bt?q(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(bt){ut!==bt&&!G&&(n.depthMask(bt),ut=bt)},setFunc:function(bt){if(Ft&&(bt=Dm[bt]),It!==bt){switch(bt){case il:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ll:n.depthFunc(n.GREATER);break;case cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}It=bt}},setLocked:function(bt){G=bt},setClear:function(bt){Vt!==bt&&(Vt=bt,Ft&&(bt=1-bt),n.clearDepth(bt))},reset:function(){G=!1,ut=null,It=null,Vt=null,Ft=!1}}}function s(){let G=!1,Ft=null,ut=null,It=null,Vt=null,bt=null,ne=null,Ht=null,_e=null;return{setTest:function(Te){G||(Te?q(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(Te){Ft!==Te&&!G&&(n.stencilMask(Te),Ft=Te)},setFunc:function(Te,Tn,Cn){(ut!==Te||It!==Tn||Vt!==Cn)&&(n.stencilFunc(Te,Tn,Cn),ut=Te,It=Tn,Vt=Cn)},setOp:function(Te,Tn,Cn){(bt!==Te||ne!==Tn||Ht!==Cn)&&(n.stencilOp(Te,Tn,Cn),bt=Te,ne=Tn,Ht=Cn)},setLocked:function(Te){G=Te},setClear:function(Te){_e!==Te&&(n.clearStencil(Te),_e=Te)},reset:function(){G=!1,Ft=null,ut=null,It=null,Vt=null,bt=null,ne=null,Ht=null,_e=null}}}let r=new e,o=new i,a=new s,u=new WeakMap,c=new WeakMap,p={},f={},d={},m=new WeakMap,_=[],x=null,y=!1,g=null,A=null,F=null,E=null,I=null,D=null,L=null,S=new ue(0,0,0),R=0,U=!1,O=null,J=null,j=null,B=null,et=null,ht=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,st=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=st>=1):W.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=st>=2);let $=null,ot={},Mt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),ie=new Ke().fromArray(Mt),Ot=new Ke().fromArray(wt);function Kt(G,Ft,ut,It){let Vt=new Uint8Array(4),bt=n.createTexture();n.bindTexture(G,bt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<ut;ne++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ft,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,Vt):n.texImage2D(Ft+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Vt);return bt}let Z={};Z[n.TEXTURE_2D]=Kt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Kt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Kt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Kt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(n.DEPTH_TEST),o.setFunc(br),Wt(!1),Xt(hu),q(n.CULL_FACE),Dt(Ri);function q(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function lt(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function yt(G,Ft){return d[G]!==Ft?(n.bindFramebuffer(G,Ft),d[G]=Ft,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ft),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ft),!0):!1}function ct(G,Ft){let ut=_,It=!1;if(G){ut=m.get(Ft),ut===void 0&&(ut=[],m.set(Ft,ut));let Vt=G.textures;if(ut.length!==Vt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,ne=Vt.length;bt<ne;bt++)ut[bt]=n.COLOR_ATTACHMENT0+bt;ut.length=Vt.length,It=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,It=!0);It&&n.drawBuffers(ut)}function Lt(G){return x!==G?(n.useProgram(G),x=G,!0):!1}let Zt={[ks]:n.FUNC_ADD,[em]:n.FUNC_SUBTRACT,[nm]:n.FUNC_REVERSE_SUBTRACT};Zt[im]=n.MIN,Zt[sm]=n.MAX;let qt={[rm]:n.ZERO,[om]:n.ONE,[am]:n.SRC_COLOR,[pu]:n.SRC_ALPHA,[dm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[cm]:n.DST_ALPHA,[lm]:n.ONE_MINUS_SRC_COLOR,[mu]:n.ONE_MINUS_SRC_ALPHA,[fm]:n.ONE_MINUS_DST_COLOR,[hm]:n.ONE_MINUS_DST_ALPHA,[pm]:n.CONSTANT_COLOR,[mm]:n.ONE_MINUS_CONSTANT_COLOR,[gm]:n.CONSTANT_ALPHA,[xm]:n.ONE_MINUS_CONSTANT_ALPHA};function Dt(G,Ft,ut,It,Vt,bt,ne,Ht,_e,Te){if(G===Ri){y===!0&&(lt(n.BLEND),y=!1);return}if(y===!1&&(q(n.BLEND),y=!0),G!==tm){if(G!==g||Te!==U){if((A!==ks||I!==ks)&&(n.blendEquation(n.FUNC_ADD),A=ks,I=ks),Te)switch(G){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",G);break}else switch(G){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fu:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",G);break}F=null,E=null,D=null,L=null,S.set(0,0,0),R=0,g=G,U=Te}return}Vt=Vt||Ft,bt=bt||ut,ne=ne||It,(Ft!==A||Vt!==I)&&(n.blendEquationSeparate(Zt[Ft],Zt[Vt]),A=Ft,I=Vt),(ut!==F||It!==E||bt!==D||ne!==L)&&(n.blendFuncSeparate(qt[ut],qt[It],qt[bt],qt[ne]),F=ut,E=It,D=bt,L=ne),(Ht.equals(S)===!1||_e!==R)&&(n.blendColor(Ht.r,Ht.g,Ht.b,_e),S.copy(Ht),R=_e),g=G,U=!1}function ft(G,Ft){G.side===Qn?lt(n.CULL_FACE):q(n.CULL_FACE);let ut=G.side===Dn;Ft&&(ut=!ut),Wt(ut),G.blending===Rr&&G.transparent===!1?Dt(Ri):Dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let It=G.stencilWrite;a.setTest(It),It&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),we(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function Xt(G){G!==jp?(q(n.CULL_FACE),G!==J&&(G===hu?n.cullFace(n.BACK):G===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),J=G}function me(G){G!==j&&(k&&n.lineWidth(G),j=G)}function we(G,Ft,ut){G?(q(n.POLYGON_OFFSET_FILL),(B!==Ft||et!==ut)&&(B=Ft,et=ut,o.getReversed()&&(Ft=-Ft),n.polygonOffset(Ft,ut))):lt(n.POLYGON_OFFSET_FILL)}function ce(G){G?q(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function fe(G){G===void 0&&(G=n.TEXTURE0+ht-1),$!==G&&(n.activeTexture(G),$=G)}function H(G,Ft,ut){ut===void 0&&($===null?ut=n.TEXTURE0+ht-1:ut=$);let It=ot[ut];It===void 0&&(It={type:void 0,texture:void 0},ot[ut]=It),(It.type!==G||It.texture!==Ft)&&($!==ut&&(n.activeTexture(ut),$=ut),n.bindTexture(G,Ft||Z[G]),It.type=G,It.texture=Ft)}function Ge(){let G=ot[$];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function b(){try{n.texSubImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function X(){try{n.texSubImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function dt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function Et(){try{n.texStorage2D(...arguments)}catch(G){he("WebGLState:",G)}}function Rt(){try{n.texStorage3D(...arguments)}catch(G){he("WebGLState:",G)}}function pt(){try{n.texImage2D(...arguments)}catch(G){he("WebGLState:",G)}}function xt(){try{n.texImage3D(...arguments)}catch(G){he("WebGLState:",G)}}function Ut(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function $t(G,Ft){f[G]!==Ft&&(n.pixelStorei(G,Ft),f[G]=Ft)}function Ct(G){ie.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function Nt(G){Ot.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ot.copy(G))}function te(G,Ft){let ut=c.get(Ft);ut===void 0&&(ut=new WeakMap,c.set(Ft,ut));let It=ut.get(G);It===void 0&&(It=n.getUniformBlockIndex(Ft,G.name),ut.set(G,It))}function se(G,Ft){let It=c.get(Ft).get(G);u.get(Ft)!==It&&(n.uniformBlockBinding(Ft,It,G.__bindingPointIndex),u.set(Ft,It))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},f={},$=null,ot={},d={},m=new WeakMap,_=[],x=null,y=!1,g=null,A=null,F=null,E=null,I=null,D=null,L=null,S=new ue(0,0,0),R=0,U=!1,O=null,J=null,j=null,B=null,et=null,ie.set(0,0,n.canvas.width,n.canvas.height),Ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:lt,bindFramebuffer:yt,drawBuffers:ct,useProgram:Lt,setBlending:Dt,setMaterial:ft,setFlipSided:Wt,setCullFace:Xt,setLineWidth:me,setPolygonOffset:we,setScissorTest:ce,activeTexture:fe,bindTexture:H,unbindTexture:Ge,compressedTexImage2D:Ae,compressedTexImage3D:N,texImage2D:pt,texImage3D:xt,pixelStorei:$t,getParameter:Ut,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:Et,texStorage3D:Rt,texSubImage2D:b,texSubImage3D:X,compressedTexSubImage2D:nt,compressedTexSubImage3D:dt,scissor:Ct,viewport:Nt,reset:ge}}function bS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,p=new WeakMap,f=new Set,d,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return _?new OffscreenCanvas(N,b):_o("canvas")}function y(N,b,X){let nt=1,dt=Ae(N);if((dt.width>X||dt.height>X)&&(nt=X/Math.max(dt.width,dt.height)),nt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Et=Math.floor(nt*dt.width),Rt=Math.floor(nt*dt.height);d===void 0&&(d=x(Et,Rt));let pt=b?x(Et,Rt):d;return pt.width=Et,pt.height=Rt,pt.getContext("2d").drawImage(N,0,0,Et,Rt),le("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Et+"x"+Rt+")."),pt}else return"data"in N&&le("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function g(N){return N.generateMipmaps}function A(N){n.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(N,b,X,nt,dt,Et=!1){if(N!==null){if(n[N]!==void 0)return n[N];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Rt;nt&&(Rt=t.get("EXT_texture_norm16"),Rt||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=b;if(b===n.RED&&(X===n.FLOAT&&(pt=n.R32F),X===n.HALF_FLOAT&&(pt=n.R16F),X===n.UNSIGNED_BYTE&&(pt=n.R8),X===n.UNSIGNED_SHORT&&Rt&&(pt=Rt.R16_EXT),X===n.SHORT&&Rt&&(pt=Rt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(pt=n.R8UI),X===n.UNSIGNED_SHORT&&(pt=n.R16UI),X===n.UNSIGNED_INT&&(pt=n.R32UI),X===n.BYTE&&(pt=n.R8I),X===n.SHORT&&(pt=n.R16I),X===n.INT&&(pt=n.R32I)),b===n.RG&&(X===n.FLOAT&&(pt=n.RG32F),X===n.HALF_FLOAT&&(pt=n.RG16F),X===n.UNSIGNED_BYTE&&(pt=n.RG8),X===n.UNSIGNED_SHORT&&Rt&&(pt=Rt.RG16_EXT),X===n.SHORT&&Rt&&(pt=Rt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(pt=n.RG8UI),X===n.UNSIGNED_SHORT&&(pt=n.RG16UI),X===n.UNSIGNED_INT&&(pt=n.RG32UI),X===n.BYTE&&(pt=n.RG8I),X===n.SHORT&&(pt=n.RG16I),X===n.INT&&(pt=n.RG32I)),b===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(pt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(pt=n.RGB16UI),X===n.UNSIGNED_INT&&(pt=n.RGB32UI),X===n.BYTE&&(pt=n.RGB8I),X===n.SHORT&&(pt=n.RGB16I),X===n.INT&&(pt=n.RGB32I)),b===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(pt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(pt=n.RGBA16UI),X===n.UNSIGNED_INT&&(pt=n.RGBA32UI),X===n.BYTE&&(pt=n.RGBA8I),X===n.SHORT&&(pt=n.RGBA16I),X===n.INT&&(pt=n.RGBA32I)),b===n.RGB&&(X===n.UNSIGNED_SHORT&&Rt&&(pt=Rt.RGB16_EXT),X===n.SHORT&&Rt&&(pt=Rt.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(pt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(pt=n.R11F_G11F_B10F)),b===n.RGBA){let xt=Et?xo:Re.getTransfer(dt);X===n.FLOAT&&(pt=n.RGBA32F),X===n.HALF_FLOAT&&(pt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(pt=xt===Be?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&Rt&&(pt=Rt.RGBA16_EXT),X===n.SHORT&&Rt&&(pt=Rt.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(pt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(pt=n.RGB5_A1)}return(pt===n.R16F||pt===n.R32F||pt===n.RG16F||pt===n.RG32F||pt===n.RGBA16F||pt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function I(N,b){let X;return N?b===null||b===ui||b===Pr?X=n.DEPTH24_STENCIL8:b===fi?X=n.DEPTH32F_STENCIL8:b===Ir&&(X=n.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ui||b===Pr?X=n.DEPTH_COMPONENT24:b===fi?X=n.DEPTH_COMPONENT32F:b===Ir&&(X=n.DEPTH_COMPONENT16),X}function D(N,b){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==on?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function L(N){let b=N.target;b.removeEventListener("dispose",L),R(b),b.isVideoTexture&&p.delete(b),b.isHTMLTexture&&f.delete(b)}function S(N){let b=N.target;b.removeEventListener("dispose",S),O(b)}function R(N){let b=i.get(N);if(b.__webglInit===void 0)return;let X=N.source,nt=m.get(X);if(nt){let dt=nt[b.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&U(N),Object.keys(nt).length===0&&m.delete(X)}i.remove(N)}function U(N){let b=i.get(N);n.deleteTexture(b.__webglTexture);let X=N.source,nt=m.get(X);delete nt[b.__cacheKey],o.memory.textures--}function O(N){let b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let dt=0;dt<b.__webglFramebuffer[nt].length;dt++)n.deleteFramebuffer(b.__webglFramebuffer[nt][dt]);else n.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)n.deleteFramebuffer(b.__webglFramebuffer[nt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let X=N.textures;for(let nt=0,dt=X.length;nt<dt;nt++){let Et=i.get(X[nt]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(X[nt])}i.remove(N)}let J=0;function j(){J=0}function B(){return J}function et(N){J=N}function ht(){let N=J;return N>=s.maxTextures&&le("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,N}function k(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function st(N,b){let X=i.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){let nt=N.image;if(nt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(X,N,b);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+b)}function W(N,b){let X=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){lt(X,N,b);return}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+b)}function $(N,b){let X=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){lt(X,N,b);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+b)}function ot(N,b){let X=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&X.__version!==N.version){yt(X,N,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+b)}let Mt={[hl]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},wt={[dn]:n.NEAREST,[vm]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Vl]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},ie={[wm]:n.NEVER,[Rm]:n.ALWAYS,[Am]:n.LESS,[wc]:n.LEQUAL,[Em]:n.EQUAL,[Ac]:n.GEQUAL,[Tm]:n.GREATER,[Cm]:n.NOTEQUAL};function Ot(N,b){if(b.type===fi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===on||b.magFilter===Vl||b.magFilter===Oo||b.magFilter===Ss||b.minFilter===on||b.minFilter===Vl||b.minFilter===Oo||b.minFilter===Ss)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Mt[b.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Mt[b.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Mt[b.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,wt[b.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,ie[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Oo&&b.minFilter!==Ss||b.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(N,b){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",L));let nt=b.source,dt=m.get(nt);dt===void 0&&(dt={},m.set(nt,dt));let Et=k(b);if(Et!==N.__cacheKey){dt[Et]===void 0&&(dt[Et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),dt[Et].usedTimes++;let Rt=dt[N.__cacheKey];Rt!==void 0&&(dt[N.__cacheKey].usedTimes--,Rt.usedTimes===0&&U(b)),N.__cacheKey=Et,N.__webglTexture=dt[Et].texture}return X}function Z(N,b,X){return Math.floor(Math.floor(N/X)/b)}function q(N,b,X,nt){let Et=N.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,X,nt,b.data);else{Et.sort(($t,Ct)=>$t.start-Ct.start);let Rt=0;for(let $t=1;$t<Et.length;$t++){let Ct=Et[Rt],Nt=Et[$t],te=Ct.start+Ct.count,se=Z(Nt.start,b.width,4),ge=Z(Ct.start,b.width,4);Nt.start<=te+1&&se===ge&&Z(Nt.start+Nt.count-1,b.width,4)===se?Ct.count=Math.max(Ct.count,Nt.start+Nt.count-Ct.start):(++Rt,Et[Rt]=Nt)}Et.length=Rt+1;let pt=e.getParameter(n.UNPACK_ROW_LENGTH),xt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let $t=0,Ct=Et.length;$t<Ct;$t++){let Nt=Et[$t],te=Math.floor(Nt.start/4),se=Math.ceil(Nt.count/4),ge=te%b.width,G=Math.floor(te/b.width),Ft=se,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,ge,G,Ft,ut,X,nt,b.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,pt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut)}}function lt(N,b,X){let nt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=n.TEXTURE_3D);let dt=Kt(N,b),Et=b.source;e.bindTexture(nt,N.__webglTexture,n.TEXTURE0+X);let Rt=i.get(Et);if(Et.version!==Rt.__version||dt===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ut=Re.getPrimaries(Re.workingColorSpace),It=b.colorSpace===Yi?null:Re.getPrimaries(b.colorSpace),Vt=b.colorSpace===Yi||ut===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let xt=y(b.image,!1,s.maxTextureSize);xt=Ge(b,xt);let Ut=r.convert(b.format,b.colorSpace),$t=r.convert(b.type),Ct=E(b.internalFormat,Ut,$t,b.normalized,b.colorSpace,b.isVideoTexture);Ot(nt,b);let Nt,te=b.mipmaps,se=b.isVideoTexture!==!0,ge=Rt.__version===void 0||dt===!0,G=Et.dataReady,Ft=D(b,xt);if(b.isDepthTexture)Ct=I(b.format===ws,b.type),ge&&(se?e.texStorage2D(n.TEXTURE_2D,1,Ct,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Ct,xt.width,xt.height,0,Ut,$t,null));else if(b.isDataTexture)if(te.length>0){se&&ge&&e.texStorage2D(n.TEXTURE_2D,Ft,Ct,te[0].width,te[0].height);for(let ut=0,It=te.length;ut<It;ut++)Nt=te[ut],se?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Ut,$t,Nt.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,Nt.width,Nt.height,0,Ut,$t,Nt.data);b.generateMipmaps=!1}else se?(ge&&e.texStorage2D(n.TEXTURE_2D,Ft,Ct,xt.width,xt.height),G&&q(b,xt,Ut,$t)):e.texImage2D(n.TEXTURE_2D,0,Ct,xt.width,xt.height,0,Ut,$t,xt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Ct,te[0].width,te[0].height,xt.depth);for(let ut=0,It=te.length;ut<It;ut++)if(Nt=te[ut],b.format!==ti)if(Ut!==null)if(se){if(G)if(b.layerUpdates.size>0){let Vt=zu(Nt.width,Nt.height,b.format,b.type);for(let bt of b.layerUpdates){let ne=Nt.data.subarray(bt*Vt/Nt.data.BYTES_PER_ELEMENT,(bt+1)*Vt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,bt,Nt.width,Nt.height,1,Ut,ne)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Nt.width,Nt.height,xt.depth,Ut,Nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Nt.width,Nt.height,xt.depth,0,Nt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Nt.width,Nt.height,xt.depth,Ut,$t,Nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Nt.width,Nt.height,xt.depth,0,Ut,$t,Nt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{se&&ge&&e.texStorage2D(n.TEXTURE_2D,Ft,Ct,te[0].width,te[0].height);for(let ut=0,It=te.length;ut<It;ut++)Nt=te[ut],b.format!==ti?Ut!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Ct,Nt.width,Nt.height,0,Nt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Ut,$t,Nt.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,Nt.width,Nt.height,0,Ut,$t,Nt.data)}else if(b.isDataArrayTexture)if(se){if(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Ct,xt.width,xt.height,xt.depth),G)if(b.layerUpdates.size>0){let ut=zu(xt.width,xt.height,b.format,b.type);for(let It of b.layerUpdates){let Vt=xt.data.subarray(It*ut/xt.data.BYTES_PER_ELEMENT,(It+1)*ut/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,It,xt.width,xt.height,1,Ut,$t,Vt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ut,$t,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,xt.width,xt.height,xt.depth,0,Ut,$t,xt.data);else if(b.isData3DTexture)se?(ge&&e.texStorage3D(n.TEXTURE_3D,Ft,Ct,xt.width,xt.height,xt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ut,$t,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,xt.width,xt.height,xt.depth,0,Ut,$t,xt.data);else if(b.isFramebufferTexture){if(ge)if(se)e.texStorage2D(n.TEXTURE_2D,Ft,Ct,xt.width,xt.height);else{let ut=xt.width,It=xt.height;for(let Vt=0;Vt<Ft;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,Ct,ut,It,0,Ut,$t,null),ut>>=1,It>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),xt.parentNode!==ut){ut.appendChild(xt),f.add(b),ut.onpaint=It=>{let Vt=It.changedElements;for(let bt of f)Vt.includes(bt.image)&&(bt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xt);else{let Vt=n.RGBA,bt=n.RGBA,ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Vt,bt,ne,xt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(te.length>0){if(se&&ge){let ut=Ae(te[0]);e.texStorage2D(n.TEXTURE_2D,Ft,Ct,ut.width,ut.height)}for(let ut=0,It=te.length;ut<It;ut++)Nt=te[ut],se?G&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Ut,$t,Nt):e.texImage2D(n.TEXTURE_2D,ut,Ct,Ut,$t,Nt);b.generateMipmaps=!1}else if(se){if(ge){let ut=Ae(xt);e.texStorage2D(n.TEXTURE_2D,Ft,Ct,ut.width,ut.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,$t,xt)}else e.texImage2D(n.TEXTURE_2D,0,Ct,Ut,$t,xt);g(b)&&A(nt),Rt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function yt(N,b,X){if(b.image.length!==6)return;let nt=Kt(N,b),dt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+X);let Et=i.get(dt);if(dt.version!==Et.__version||nt===!0){e.activeTexture(n.TEXTURE0+X);let Rt=Re.getPrimaries(Re.workingColorSpace),pt=b.colorSpace===Yi?null:Re.getPrimaries(b.colorSpace),xt=b.colorSpace===Yi||Rt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,$t=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let bt=0;bt<6;bt++)!Ut&&!$t?Ct[bt]=y(b.image[bt],!0,s.maxCubemapSize):Ct[bt]=$t?b.image[bt].image:b.image[bt],Ct[bt]=Ge(b,Ct[bt]);let Nt=Ct[0],te=r.convert(b.format,b.colorSpace),se=r.convert(b.type),ge=E(b.internalFormat,te,se,b.normalized,b.colorSpace),G=b.isVideoTexture!==!0,Ft=Et.__version===void 0||nt===!0,ut=dt.dataReady,It=D(b,Nt);Ot(n.TEXTURE_CUBE_MAP,b);let Vt;if(Ut){G&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ge,Nt.width,Nt.height);for(let bt=0;bt<6;bt++){Vt=Ct[bt].mipmaps;for(let ne=0;ne<Vt.length;ne++){let Ht=Vt[ne];b.format!==ti?te!==null?G?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne,0,0,Ht.width,Ht.height,te,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne,ge,Ht.width,Ht.height,0,Ht.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne,0,0,Ht.width,Ht.height,te,se,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne,ge,Ht.width,Ht.height,0,te,se,Ht.data)}}}else{if(Vt=b.mipmaps,G&&Ft){Vt.length>0&&It++;let bt=Ae(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ge,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if($t){G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ct[bt].width,Ct[bt].height,te,se,Ct[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ge,Ct[bt].width,Ct[bt].height,0,te,se,Ct[bt].data);for(let ne=0;ne<Vt.length;ne++){let _e=Vt[ne].image[bt].image;G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne+1,0,0,_e.width,_e.height,te,se,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne+1,ge,_e.width,_e.height,0,te,se,_e.data)}}else{G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,te,se,Ct[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ge,te,se,Ct[bt]);for(let ne=0;ne<Vt.length;ne++){let Ht=Vt[ne];G?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne+1,0,0,te,se,Ht.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,ne+1,ge,te,se,Ht.image[bt])}}}g(b)&&A(n.TEXTURE_CUBE_MAP),Et.__version=dt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ct(N,b,X,nt,dt,Et){let Rt=r.convert(X.format,X.colorSpace),pt=r.convert(X.type),xt=E(X.internalFormat,Rt,pt,X.normalized,X.colorSpace),Ut=i.get(b),$t=i.get(X);if($t.__renderTarget=b,!Ut.__hasExternalTextures){let Ct=Math.max(1,b.width>>Et),Nt=Math.max(1,b.height>>Et);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,Et,xt,Ct,Nt,b.depth,0,Rt,pt,null):e.texImage2D(dt,Et,xt,Ct,Nt,0,Rt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),fe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,dt,$t.__webglTexture,0,ce(b)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,dt,$t.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(N,b,X){if(n.bindRenderbuffer(n.RENDERBUFFER,N),b.depthBuffer){let nt=b.depthTexture,dt=nt&&nt.isDepthTexture?nt.type:null,Et=I(b.stencilBuffer,dt),Rt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(b),Et,b.width,b.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(b),Et,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Et,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,N)}else{let nt=b.textures;for(let dt=0;dt<nt.length;dt++){let Et=nt[dt],Rt=r.convert(Et.format,Et.colorSpace),pt=r.convert(Et.type),xt=E(Et.internalFormat,Rt,pt,Et.normalized,Et.colorSpace);fe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(b),xt,b.width,b.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(b),xt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Zt(N,b,X){let nt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=i.get(b.depthTexture);if(dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),nt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),dt.__webglTexture===void 0){dt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,b.depthTexture);let Ut=r.convert(b.depthTexture.format),$t=r.convert(b.depthTexture.type),Ct;b.depthTexture.format===Ai?Ct=n.DEPTH_COMPONENT24:b.depthTexture.format===ws&&(Ct=n.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Ct,b.width,b.height,0,Ut,$t,null)}}else st(b.depthTexture,0);let Et=dt.__webglTexture,Rt=ce(b),pt=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,xt=b.depthTexture.format===ws?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ai)fe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,pt,Et,0,Rt):n.framebufferTexture2D(n.FRAMEBUFFER,xt,pt,Et,0);else if(b.depthTexture.format===ws)fe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,pt,Et,0,Rt):n.framebufferTexture2D(n.FRAMEBUFFER,xt,pt,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(N){let b=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let nt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let dt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",dt)};nt.addEventListener("dispose",dt),b.__depthDisposeCallback=dt}b.__boundDepthTexture=nt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let nt=0;nt<6;nt++)Zt(b.__webglFramebuffer[nt],N,nt);else{let nt=N.texture.mipmaps;nt&&nt.length>0?Zt(b.__webglFramebuffer[0],N,0):Zt(b.__webglFramebuffer,N,0)}else if(X){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=n.createRenderbuffer(),Lt(b.__webglDepthbuffer[nt],N,!1);else{let dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,Et)}}else{let nt=N.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Lt(b.__webglDepthbuffer,N,!1);else{let dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(N,b,X){let nt=i.get(N);b!==void 0&&ct(nt.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&qt(N)}function ft(N){let b=N.texture,X=i.get(N),nt=i.get(b);N.addEventListener("dispose",S);let dt=N.textures,Et=N.isWebGLCubeRenderTarget===!0,Rt=dt.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=b.version,o.memory.textures++),Et){X.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[pt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)X.__webglFramebuffer[pt][xt]=n.createFramebuffer()}else X.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)X.__webglFramebuffer[pt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let pt=0,xt=dt.length;pt<xt;pt++){let Ut=i.get(dt[pt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&fe(N)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){let xt=dt[pt];X.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[pt]);let Ut=r.convert(xt.format,xt.colorSpace),$t=r.convert(xt.type),Ct=E(xt.internalFormat,Ut,$t,xt.normalized,xt.colorSpace,N.isXRRenderTarget===!0),Nt=ce(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Ct,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,X.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)ct(X.__webglFramebuffer[pt][xt],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else ct(X.__webglFramebuffer[pt],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,xt=dt.length;pt<xt;pt++){let Ut=dt[pt],$t=i.get(Ut),Ct=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,$t.__webglTexture),Ot(Ct,Ut),ct(X.__webglFramebuffer,N,Ut,n.COLOR_ATTACHMENT0+pt,Ct,0),g(Ut)&&A(Ct)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,nt.__webglTexture),Ot(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)ct(X.__webglFramebuffer[xt],N,b,n.COLOR_ATTACHMENT0,pt,xt);else ct(X.__webglFramebuffer,N,b,n.COLOR_ATTACHMENT0,pt,0);g(b)&&A(pt),e.unbindTexture()}N.depthBuffer&&qt(N)}function Wt(N){let b=N.textures;for(let X=0,nt=b.length;X<nt;X++){let dt=b[X];if(g(dt)){let Et=F(N),Rt=i.get(dt).__webglTexture;e.bindTexture(Et,Rt),A(Et),e.unbindTexture()}}}let Xt=[],me=[];function we(N){if(N.samples>0){if(fe(N)===!1){let b=N.textures,X=N.width,nt=N.height,dt=n.COLOR_BUFFER_BIT,Et=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(N),pt=b.length>1;if(pt)for(let Ut=0;Ut<b.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let xt=N.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ut=0;Ut<b.length;Ut++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ut]);let $t=i.get(b[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,X,nt,0,0,X,nt,dt,n.NEAREST),u===!0&&(Xt.length=0,me.length=0,Xt.push(n.COLOR_ATTACHMENT0+Ut),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Xt.push(Et),me.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Ut=0;Ut<b.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ut]);let $t=i.get(b[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&u){let b=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ce(N){return Math.min(s.maxSamples,N.samples)}function fe(N){let b=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(N){let b=o.render.frame;p.get(N)!==b&&(p.set(N,b),N.update())}function Ge(N,b){let X=N.colorSpace,nt=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==go&&X!==Yi&&(Re.getTransfer(X)===Be?(nt!==ti||dt!==$n)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",X)),b}function Ae(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ht,this.resetTextureUnits=j,this.getTextureUnits=B,this.setTextureUnits=et,this.setTexture2D=st,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=ot,this.rebindTextures=Dt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function MS(n,t){function e(i,s=Yi){let r,o=Re.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Au)return n.BYTE;if(i===Eu)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===Hl)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Ru)return n.ALPHA;if(i===Iu)return n.RGB;if(i===ti)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===Pu)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===As)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===zo||i===ko||i===Bo||i===Vo)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Zl||i===Jl||i===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Ql||i===tc||i===ec||i===nc||i===Ho||i===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Ql)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ec)return r.COMPRESSED_R11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ho)return r.COMPRESSED_RG11_EAC;if(i===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===_c||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yc)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bc||i===Mc||i===Go||i===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var SS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wS=`
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

}`,sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new wn({vertexShader:SS,fragmentShader:wS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rf=class extends Ei{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",u=1,c=null,p=null,f=null,d=null,m=null,_=null,x=typeof XRWebGLBinding<"u",y=new sf,g={},A=e.getContextAttributes(),F=null,E=null,I=[],D=[],L=new Ee,S=null,R=null,U=new Mn;U.viewport=new Ke;let O=new Mn;O.viewport=new Ke;let J=[U,O],j=new Ol,B=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=I[Z];return q===void 0&&(q=new wr,I[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=I[Z];return q===void 0&&(q=new wr,I[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=I[Z];return q===void 0&&(q=new wr,I[Z]=q),q.getHandSpace()};function ht(Z){let q=D.indexOf(Z.inputSource);if(q===-1)return;let lt=I[q];lt!==void 0&&(lt.update(Z.inputSource,Z.frame,c||o),lt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",ht),s.removeEventListener("selectstart",ht),s.removeEventListener("selectend",ht),s.removeEventListener("squeeze",ht),s.removeEventListener("squeezestart",ht),s.removeEventListener("squeezeend",ht),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<I.length;Z++){let q=D[Z];q!==null&&(D[Z]=null,I[Z].disconnect(q))}B=null,et=null,y.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(F),m=null,d=null,f=null,s=null,E=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),R!==null){let Z=R.camera;Z.fov=R.fov,Z.zoom=R.zoom,Z.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",ht),s.addEventListener("selectstart",ht),s.addEventListener("selectend",ht),s.addEventListener("squeeze",ht),s.addEventListener("squeezestart",ht),s.addEventListener("squeezeend",ht),s.addEventListener("end",k),s.addEventListener("inputsourceschange",st),A.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,yt=null,ct=null;A.depth&&(ct=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=A.stencil?ws:Ai,yt=A.stencil?Pr:ui);let Lt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new On(d.textureWidth,d.textureHeight,{format:ti,type:$n,depthTexture:new xs(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let lt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new On(m.framebufferWidth,m.framebufferHeight,{format:ti,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st(Z){for(let q=0;q<Z.removed.length;q++){let lt=Z.removed[q],yt=D.indexOf(lt);yt>=0&&(D[yt]=null,I[yt].disconnect(lt))}for(let q=0;q<Z.added.length;q++){let lt=Z.added[q],yt=D.indexOf(lt);if(yt===-1){for(let Lt=0;Lt<I.length;Lt++)if(Lt>=D.length){D.push(lt),yt=Lt;break}else if(D[Lt]===null){D[Lt]=lt,yt=Lt;break}if(yt===-1)break}let ct=I[yt];ct&&ct.connect(lt)}}let W=new K,$=new K;function ot(Z,q,lt){W.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(lt.matrixWorld);let yt=W.distanceTo($),ct=q.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,Zt=ct[14]/(ct[10]-1),qt=ct[14]/(ct[10]+1),Dt=(ct[9]+1)/ct[5],ft=(ct[9]-1)/ct[5],Wt=(ct[8]-1)/ct[0],Xt=(Lt[8]+1)/Lt[0],me=Zt*Wt,we=Zt*Xt,ce=yt/(-Wt+Xt),fe=ce*-Wt;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(fe),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ct[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let H=Zt+ce,Ge=qt+ce,Ae=me-fe,N=we+(yt-fe),b=Dt*qt/Ge*H,X=ft*qt/Ge*H;Z.projectionMatrix.makePerspective(Ae,N,b,X,H,Ge),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Mt(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let q=Z.near,lt=Z.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(lt=y.depthFar)),j.near=O.near=U.near=q,j.far=O.far=U.far=lt,(B!==j.near||et!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),B=j.near,et=j.far),j.layers.mask=Z.layers.mask|6,U.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let yt=Z.parent,ct=j.cameras;Mt(j,yt);for(let Lt=0;Lt<ct.length;Lt++)Mt(ct[Lt],yt);ct.length===2?ot(j,U,O):j.projectionMatrix.copy(U.projectionMatrix),R===null&&Z.isPerspectiveCamera&&(R={camera:Z,fov:Z.fov,zoom:Z.zoom}),wt(Z,j,yt)};function wt(Z,q,lt){lt===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(lt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(Z){u=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(Z){return g[Z]};let ie=null;function Ot(Z,q){if(p=q.getViewerPose(c||o),_=q,p!==null){let lt=p.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let yt=!1;lt.length!==j.cameras.length&&(j.cameras.length=0,yt=!0);for(let qt=0;qt<lt.length;qt++){let Dt=lt[qt],ft=null;if(m!==null)ft=m.getViewport(Dt);else{let Xt=f.getViewSubImage(d,Dt);ft=Xt.viewport,qt===0&&(t.setRenderTargetTextures(E,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(E))}let Wt=J[qt];Wt===void 0&&(Wt=new Mn,Wt.layers.enable(qt),Wt.viewport=new Ke,J[qt]=Wt),Wt.matrix.fromArray(Dt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Dt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ft.x,ft.y,ft.width,ft.height),qt===0&&(j.matrix.copy(Wt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),yt===!0&&j.cameras.push(Wt)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let qt=f.getDepthInformation(lt[0]);qt&&qt.isValid&&qt.texture&&y.init(qt,s.renderState)}if(ct&&ct.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let qt=0;qt<lt.length;qt++){let Dt=lt[qt].camera;if(Dt){let ft=g[Dt];ft||(ft=new Io,g[Dt]=ft);let Wt=f.getCameraImage(Dt);ft.sourceTexture=Wt}}}}for(let lt=0;lt<I.length;lt++){let yt=D[lt],ct=I[lt];yt!==null&&ct!==void 0&&ct.update(yt,q,c||o)}ie&&ie(Z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}let Kt=new o0;Kt.setAnimationLoop(Ot),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},AS=new Ye,f0=new xe;f0.set(-1,0,0,0,1,0,0,0,1);function ES(n,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,Uu(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,A,F,E){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(y,g):g.isMeshLambertMaterial?(r(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(y,g),f(y,g)):g.isMeshPhongMaterial?(r(y,g),p(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(y,g),d(y,g),g.isMeshPhysicalMaterial&&m(y,g,E)):g.isMeshMatcapMaterial?(r(y,g),_(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),x(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&a(y,g)):g.isPointsMaterial?u(y,g,A,F):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Dn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Dn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let A=t.get(g),F=A.envMap,E=A.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(E)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(f0),y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function a(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function u(y,g,A,F){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*A,y.scale.value=F*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function f(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function d(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function m(y,g,A){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.retroreflectivity>0&&(y.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function _(y,g){g.matcap&&(y.matcap.value=g.matcap)}function x(y,g){let A=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,I){let D=I.program;i.uniformBlockBinding(E,D)}function c(E,I){let D=s[E.id];D===void 0&&(y(E),D=p(E),s[E.id]=D,E.addEventListener("dispose",A));let L=I.program;i.updateUBOMapping(E,L);let S=t.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function p(E){let I=f();E.__bindingPointIndex=I;let D=n.createBuffer(),L=E.__size,S=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,D),D}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let I=s[E.id],D=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let S=0,R=D.length;S<R;S++){let U=D[S];if(Array.isArray(U))for(let O=0,J=U.length;O<J;O++)m(U[O],S,O,L);else m(U,S,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,I,D,L){if(x(E,I,D,L)===!0){let S=E.__offset,R=E.value;if(Array.isArray(R)){let U=0;for(let O=0;O<R.length;O++){let J=R[O],j=g(J);_(J,E.__data,U),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,E.__data)}}function _(E,I,D){typeof E=="number"||typeof E=="boolean"?I[0]=E:E.isMatrix3?(I[0]=E.elements[0],I[1]=E.elements[1],I[2]=E.elements[2],I[3]=0,I[4]=E.elements[3],I[5]=E.elements[4],I[6]=E.elements[5],I[7]=0,I[8]=E.elements[6],I[9]=E.elements[7],I[10]=E.elements[8],I[11]=0):ArrayBuffer.isView(E)?I.set(new E.constructor(E.buffer,E.byteOffset,I.length)):E.toArray(I,D)}function x(E,I,D,L){let S=E.value,R=I+"_"+D;if(L[R]===void 0)return typeof S=="number"||typeof S=="boolean"?L[R]=S:ArrayBuffer.isView(S)?L[R]=S.slice():L[R]=S.clone(),!0;{let U=L[R];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return L[R]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(U.equals(S)===!1)return U.copy(S),!0}}return!1}function y(E){let I=E.uniforms,D=0,L=16;for(let R=0,U=I.length;R<U;R++){let O=Array.isArray(I[R])?I[R]:[I[R]];for(let J=0,j=O.length;J<j;J++){let B=O[J],et=Array.isArray(B.value)?B.value:[B.value];for(let ht=0,k=et.length;ht<k;ht++){let st=et[ht],W=g(st),$=D%L,ot=$%W.boundary,Mt=$+ot;D+=ot,Mt!==0&&L-Mt<W.storage&&(D+=L-Mt),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=D,D+=W.storage}}}let S=D%L;return S>0&&(D+=L-S),E.__size=D,E.__cache={},this}function g(E){let I={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(I.boundary=4,I.storage=4):E.isVector2?(I.boundary=8,I.storage=8):E.isVector3||E.isColor?(I.boundary=16,I.storage=12):E.isVector4?(I.boundary=16,I.storage=16):E.isMatrix3?(I.boundary=48,I.storage=48):E.isMatrix4?(I.boundary=64,I.storage=64):E.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(I.boundary=16,I.storage=E.byteLength):le("WebGLRenderer: Unsupported uniform value type.",E),I}function A(E){let I=E.target;I.removeEventListener("dispose",A);let D=o.indexOf(I.__bindingPointIndex);o.splice(D,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function F(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:u,update:c,dispose:F}}var CS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function RS(){return Ii===null&&(Ii=new yl(CS,16,16,As,di),Ii.name="DFG_LUT",Ii.minFilter=on,Ii.magFilter=on,Ii.wrapS=wi,Ii.wrapT=wi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Ic=class{constructor(t={}){let{canvas:e=Im(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=$n}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let x=m,y=new Set([Yl,ql,Xl]),g=new Set([$n,ui,Ir,Pr,Gl,Wl]),A=new Uint32Array(4),F=new Int32Array(4),E=new K,I=null,D=null,L=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,O=!1,J=null,j=null,B=null,et=null;this._outputColorSpace=nn;let ht=0,k=0,st=null,W=-1,$=null,ot=new Ke,Mt=new Ke,wt=null,ie=new ue(0),Ot=0,Kt=e.width,Z=e.height,q=1,lt=null,yt=null,ct=new Ke(0,0,Kt,Z),Lt=new Ke(0,0,Kt,Z),Zt=!1,qt=new To,Dt=!1,ft=!1,Wt=new Ye,Xt=new K,me=new Ke,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function fe(){return st===null?q:1}let H=i;function Ge(T,V){return e.getContext(T,V)}let Ae,N,b,X,nt,dt,Et,Rt,pt,xt,Ut,$t,Ct,Nt,te,se,ge,G,Ft,ut,It,Vt,bt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),H===null){let V="webgl2";if(H=Ge(V,T),H===null)throw Ge(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(T){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),he("WebGLRenderer: "+T.message),T}function ne(){Ae=new Fb(H),Ae.init(),It=new MS(H,Ae),N=new Eb(H,Ae,t,It),b=new vS(H,Ae),N.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),j=H.createFramebuffer(),B=H.createFramebuffer(),et=H.createFramebuffer(),X=new kb(H),nt=new oS,dt=new bS(H,Ae,b,nt,N,It,X),Et=new Ub(U),Rt=new Vy(H),Vt=new wb(H,Rt),pt=new Ob(H,Rt,X,Vt),xt=new Vb(H,pt,Rt,Vt,X),G=new Bb(H,N,dt),te=new Tb(nt),Ut=new rS(U,Et,Ae,N,Vt,te),$t=new ES(U,nt),Ct=new lS,Nt=new pS(Ae),ge=new Sb(U,Et,b,xt,_,u),se=new _S(U,xt,N),bt=new TS(H,X,N,b),Ft=new Ab(H,Ae,X),ut=new zb(H,Ae,X),X.programs=Ut.programs,U.capabilities=N,U.extensions=Ae,U.properties=nt,U.renderLists=Ct,U.shadowMap=se,U.state=b,U.info=X}x!==$n&&(R=new Gb(x,e.width,e.height,a,s,r));let Ht=new rf(U,H);this.xr=Ht,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Kt,Z,!1))},this.getSize=function(T){return T.set(Kt,Z)},this.setSize=function(T,V,rt=!0){if(Ht.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=T,Z=V,e.width=Math.floor(T*q),e.height=Math.floor(V*q),rt===!0&&(e.style.width=T+"px",e.style.height=V+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Kt*q,Z*q).floor()},this.setDrawingBufferSize=function(T,V,rt){Kt=T,Z=V,q=rt,e.width=Math.floor(T*rt),e.height=Math.floor(V*rt),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===$n){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ot)},this.getViewport=function(T){return T.copy(ct)},this.setViewport=function(T,V,rt,it){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,V,rt,it),b.viewport(ot.copy(ct).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Lt)},this.setScissor=function(T,V,rt,it){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,V,rt,it),b.scissor(Mt.copy(Lt).multiplyScalar(q).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){b.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,rt=!0){let it=0;if(T){let tt=!1;if(st!==null){let zt=st.texture.format;tt=y.has(zt)}if(tt){let zt=st.texture.type,Yt=g.has(zt),kt=ge.getClearColor(),At=ge.getClearAlpha(),Qt=kt.r,ve=kt.g,be=kt.b;Yt?(A[0]=Qt,A[1]=ve,A[2]=be,A[3]=At,H.clearBufferuiv(H.COLOR,0,A)):(F[0]=Qt,F[1]=ve,F[2]=be,F[3]=At,H.clearBufferiv(H.COLOR,0,F))}else it|=H.COLOR_BUFFER_BIT}V&&(it|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(it|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&H.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),J=T},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ge.dispose(),Ct.dispose(),Nt.dispose(),nt.dispose(),Et.dispose(),xt.dispose(),Vt.dispose(),bt.dispose(),Ut.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",xa),Ht.removeEventListener("sessionend",Ki),ii.stop()};function _e(T){T.preventDefault(),vo("WebGLRenderer: Context Lost."),O=!0}function Te(){vo("WebGLRenderer: Context Restored."),O=!1;let T=X.autoReset,V=se.enabled,rt=se.autoUpdate,it=se.needsUpdate,tt=se.type;ne(),X.autoReset=T,se.enabled=V,se.autoUpdate=rt,se.needsUpdate=it,se.type=tt}function Tn(T){he("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Cn(T){let V=T.target;V.removeEventListener("dispose",Cn),fh(V)}function fh(T){Fi(T),nt.remove(T)}function Fi(T){let V=nt.get(T).programs;V!==void 0&&(V.forEach(function(rt){Ut.releaseProgram(rt)}),T.isShaderMaterial&&Ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,rt,it,tt,zt){V===null&&(V=we);let Yt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,kt=ya(T,V,rt,it,tt);b.setMaterial(it,Yt);let At=rt.index,Qt=1;if(it.wireframe===!0){if(At=pt.getWireframeAttribute(rt),At===void 0)return;Qt=2}let ve=rt.drawRange,be=rt.attributes.position,Jt=ve.start*Qt,Me=(ve.start+ve.count)*Qt;zt!==null&&(Jt=Math.max(Jt,zt.start*Qt),Me=Math.min(Me,(zt.start+zt.count)*Qt)),At!==null?(Jt=Math.max(Jt,0),Me=Math.min(Me,At.count)):be!=null&&(Jt=Math.max(Jt,0),Me=Math.min(Me,be.count));let He=Me-Jt;if(He<0||He===1/0)return;Vt.setup(tt,it,kt,rt,At);let Ue,ke=Ft;if(At!==null&&(Ue=Rt.get(At),ke=ut,ke.setIndex(Ue)),tt.isMesh)it.wireframe===!0?(b.setLineWidth(it.wireframeLinewidth*fe()),ke.setMode(H.LINES)):ke.setMode(H.TRIANGLES);else if(tt.isLine){let an=it.linewidth;an===void 0&&(an=1),b.setLineWidth(an*fe()),tt.isLineSegments?ke.setMode(H.LINES):tt.isLineLoop?ke.setMode(H.LINE_LOOP):ke.setMode(H.LINE_STRIP)}else tt.isPoints?ke.setMode(H.POINTS):tt.isSprite&&ke.setMode(H.TRIANGLES);if(tt.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))ke.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let an=tt._multiDrawStarts,Gt=tt._multiDrawCounts,pn=tt._multiDrawCount,Ie=At?Rt.get(At).bytesPerElement:1,_n=nt.get(it).currentProgram.getUniforms();for(let Rn=0;Rn<pn;Rn++)_n.setValue(H,"_gl_DrawID",Rn),ke.render(an[Rn]/Ie,Gt[Rn])}else if(tt.isInstancedMesh)ke.renderInstances(Jt,He,tt.count);else if(rt.isInstancedBufferGeometry){let an=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,an);ke.renderInstances(Jt,He,Gt)}else ke.render(Jt,He)};function $s(T,V,rt,it){J!==null&&T.isNodeMaterial&&J.setObject(it,T),Dt===!0&&te.setState(T,rt,!1),T.transparent===!0&&T.side===Qn&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Js(T,V,it),T.side=bs,T.needsUpdate=!0,Js(T,V,it),T.side=Qn):Js(T,V,it)}this.compile=function(T,V,rt=null){rt===null&&(rt=T),J!==null&&J.renderStart(T,V,rt),D=Nt.get(rt),D.init(V),S.push(D),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(V.layers)&&(D.pushLight(tt),tt.castShadow&&D.pushShadow(tt))}),T!==rt&&T.traverseVisible(function(tt){tt.isLight&&tt.layers.test(V.layers)&&(D.pushLight(tt),tt.castShadow&&D.pushShadow(tt))}),D.setupLights(),J!==null&&J.updateLights(D.state.lightsArray),ft=this.localClippingEnabled,Dt=te.init(this.clippingPlanes,ft),Dt===!0&&te.setGlobalState(this.clippingPlanes,V),J!==null&&se.render(D.state.shadowsArray,rt,V);let it=new Set;return T.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let zt=tt.material;if(zt)if(Array.isArray(zt))for(let Yt=0;Yt<zt.length;Yt++){let kt=zt[Yt];$s(kt,rt,V,tt),it.add(kt)}else $s(zt,rt,V,tt),it.add(zt)}),D=S.pop(),J!==null&&J.renderEnd(),it},this.compileAsync=function(T,V,rt=null){let it=this.compile(T,V,rt);return new Promise(tt=>{function zt(){if(it.forEach(function(Yt){let At=nt.get(Yt).currentProgram;(At===void 0||At.isReady())&&it.delete(Yt)}),it.size===0){tt(T);return}setTimeout(zt,10)}Ae.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Zs=null;function dh(T){Zs&&Zs(T)}function xa(){ii.stop()}function Ki(){ii.start()}let ii=new o0;ii.setAnimationLoop(dh),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(T){Zs=T,Ht.setAnimationLoop(T),T===null?ii.stop():ii.start()},Ht.addEventListener("sessionstart",xa),Ht.addEventListener("sessionend",Ki),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;J!==null&&J.renderStart(T,V);let rt=Ht.enabled===!0&&Ht.isPresenting===!0,it=R!==null&&(st===null||rt)&&R.begin(U,st);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(V),V=Ht.getCamera()),T.isScene===!0&&T.onBeforeRender(U,T,V,st),D=Nt.get(T,S.length),D.init(V),D.state.textureUnits=dt.getTextureUnits(),S.push(D),Wt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),qt.setFromProjectionMatrix(Wt,ci,V.reversedDepth),ft=this.localClippingEnabled,Dt=te.init(this.clippingPlanes,ft),I=Ct.get(T,L.length),I.init(),L.push(I),Ht.enabled===!0&&Ht.isPresenting===!0){let Yt=U.xr.getDepthSensingMesh();Yt!==null&&Qi(Yt,V,-1/0,U.sortObjects)}Qi(T,V,0,U.sortObjects),I.finish(),J!==null&&J.updateLights(D.state.lightsArray),U.sortObjects===!0&&I.sort(lt,yt),ce=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,ce&&ge.addToRenderList(I,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Dt===!0&&te.beginShadows();let tt=D.state.shadowsArray;if(se.render(tt,T,V),Dt===!0&&te.endShadows(),(it&&R.hasRenderPass())===!1){let Yt=I.opaque,kt=I.transmissive;if(D.setupLights(),V.isArrayCamera){let At=V.cameras;if(kt.length>0)for(let Qt=0,ve=At.length;Qt<ve;Qt++){let be=At[Qt];ts(Yt,kt,T,be)}ce&&ge.render(T);for(let Qt=0,ve=At.length;Qt<ve;Qt++){let be=At[Qt];jn(I,T,be,be.viewport)}}else kt.length>0&&ts(Yt,kt,T,V),ce&&ge.render(T),jn(I,T,V)}st!==null&&k===0&&(dt.updateMultisampleRenderTarget(st),dt.updateRenderTargetMipmap(st)),it&&R.end(U),T.isScene===!0&&T.onAfterRender(U,T,V),Vt.resetDefaultState(),W=-1,$=null,S.pop(),S.length>0?(D=S[S.length-1],dt.setTextureUnits(D.state.textureUnits),Dt===!0&&te.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,L.pop(),L.length>0?I=L[L.length-1]:I=null,J!==null&&J.renderEnd()};function Qi(T,V,rt,it){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)rt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)D.pushLightProbeGrid(T);else if(T.isLight)D.pushLight(T),T.castShadow&&D.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(qt)){it&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Wt);let Yt=xt.update(T),kt=T.material;kt.visible&&I.push(T,Yt,kt,rt,me.z,null,V)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(qt))){let Yt=xt.update(T),kt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),me.copy(Yt.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(Wt)),Array.isArray(kt)){let At=Yt.groups;for(let Qt=0,ve=At.length;Qt<ve;Qt++){let be=At[Qt],Jt=kt[be.materialIndex];Jt&&Jt.visible&&I.push(T,Yt,Jt,rt,me.z,be,V)}}else kt.visible&&I.push(T,Yt,kt,rt,me.z,null,V)}}let zt=T.children;for(let Yt=0,kt=zt.length;Yt<kt;Yt++)Qi(zt[Yt],V,rt,it)}function jn(T,V,rt,it){let{opaque:tt,transmissive:zt,transparent:Yt}=T;D.setupLightsView(rt),Dt===!0&&te.setGlobalState(U.clippingPlanes,rt),it&&b.viewport(ot.copy(it)),tt.length>0&&gt(tt,V,rt),zt.length>0&&gt(zt,V,rt),Yt.length>0&&gt(Yt,V,rt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ts(T,V,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[it.id]===void 0){let Jt=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[it.id]=new On(1,1,{generateMipmaps:!0,type:Jt?di:$n,minFilter:Ss,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let zt=D.state.transmissionRenderTarget[it.id],Yt=it.viewport||ot;zt.setSize(Yt.z*U.transmissionResolutionScale,Yt.w*U.transmissionResolutionScale);let kt=U.getRenderTarget(),At=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(zt),U.getClearColor(ie),Ot=U.getClearAlpha(),Ot<1&&U.setClearColor(16777215,.5),U.clear(),ce&&ge.render(rt);let ve=U.toneMapping;U.toneMapping=hi;let be=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),D.setupLightsView(it),Dt===!0&&te.setGlobalState(U.clippingPlanes,it),gt(T,rt,it),dt.updateMultisampleRenderTarget(zt),dt.updateRenderTargetMipmap(zt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Me=0,He=V.length;Me<He;Me++){let Ue=V[Me],{object:ke,geometry:an,material:Gt,group:pn}=Ue;if(Gt.side===Qn&&ke.layers.test(it.layers)){let Ie=Gt.side;Gt.side=Dn,Gt.needsUpdate=!0,vt(ke,rt,it,an,Gt,pn),Gt.side=Ie,Gt.needsUpdate=!0,Jt=!0}}Jt===!0&&(dt.updateMultisampleRenderTarget(zt),dt.updateRenderTargetMipmap(zt))}U.setRenderTarget(kt,At,Qt),U.setClearColor(ie,Ot),be!==void 0&&(it.viewport=be),U.toneMapping=ve}function gt(T,V,rt){let it=V.isScene===!0?V.overrideMaterial:null;for(let tt=0,zt=T.length;tt<zt;tt++){let Yt=T[tt],{object:kt,geometry:At,group:Qt}=Yt,ve=Yt.material;ve.allowOverride===!0&&it!==null&&(ve=it),kt.layers.test(rt.layers)&&vt(kt,V,rt,At,ve,Qt)}}function vt(T,V,rt,it,tt,zt){J!==null&&tt.isNodeMaterial&&J.setObject(T,tt),T.onBeforeRender(U,V,rt,it,tt,zt),T.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),tt.onBeforeRender(U,V,rt,it,T,zt),tt.transparent===!0&&tt.side===Qn&&tt.forceSinglePass===!1?(tt.side=Dn,tt.needsUpdate=!0,U.renderBufferDirect(rt,V,it,tt,T,zt),tt.side=bs,tt.needsUpdate=!0,U.renderBufferDirect(rt,V,it,tt,T,zt),tt.side=Qn):U.renderBufferDirect(rt,V,it,tt,T,zt),T.onAfterRender(U,V,rt,it,tt,zt)}function Js(T,V,rt){V.isScene!==!0&&(V=we);let it=nt.get(T),tt=D.state.lights,zt=D.state.shadowsArray,Yt=tt.state.version,kt=Ut.getParameters(T,tt.state,zt,V,rt,D.state.lightProbeGridArray),At=Ut.getProgramCacheKey(kt),Qt=it.programs;it.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,it.fog=V.fog;let ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;it.envMap=Et.get(T.envMap||it.environment,ve),it.envMapRotation=it.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Qt===void 0&&(T.addEventListener("dispose",Cn),Qt=new Map,it.programs=Qt);let be=Qt.get(At);if(be!==void 0){if(it.currentProgram===be&&it.lightsStateVersion===Yt)return Oi(T,kt),be}else kt.uniforms=Ut.getUniforms(T),J!==null&&T.isNodeMaterial&&J.build(T,rt,kt),T.onBeforeCompile(kt,U),be=Ut.acquireProgram(kt,At),Qt.set(At,be),it.uniforms=kt.uniforms;let Jt=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Jt.clippingPlanes=te.uniform),Oi(T,kt),it.needsLights=ph(T),it.lightsStateVersion=Yt,it.needsLights&&(Jt.ambientLightColor.value=tt.state.ambient,Jt.lightProbe.value=tt.state.probe,Jt.sunLights.value=tt.state.sun,Jt.sunLightShadows.value=tt.state.sunShadow,Jt.directionalLights.value=tt.state.directional,Jt.directionalLightShadows.value=tt.state.directionalShadow,Jt.spotLights.value=tt.state.spot,Jt.spotLightShadows.value=tt.state.spotShadow,Jt.rectAreaLights.value=tt.state.rectArea,Jt.ltc_1.value=tt.state.rectAreaLTC1,Jt.ltc_2.value=tt.state.rectAreaLTC2,Jt.pointLights.value=tt.state.point,Jt.pointLightShadows.value=tt.state.pointShadow,Jt.hemisphereLights.value=tt.state.hemi,Jt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Jt.sunShadowCascade.value=tt.state.sunShadowCascade,Jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=tt.state.spotLightMatrix,Jt.spotLightMap.value=tt.state.spotLightMap,Jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.lightProbeGrid=D.state.lightProbeGridArray.length>0,it.currentProgram=be,it.uniformsList=null,be}function pe(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Oi(T,V){let rt=nt.get(T);rt.outputColorSpace=V.outputColorSpace,rt.batching=V.batching,rt.batchingColor=V.batchingColor,rt.instancing=V.instancing,rt.instancingColor=V.instancingColor,rt.instancingMorph=V.instancingMorph,rt.skinning=V.skinning,rt.morphTargets=V.morphTargets,rt.morphNormals=V.morphNormals,rt.morphColors=V.morphColors,rt.morphTargetsCount=V.morphTargetsCount,rt.numClippingPlanes=V.numClippingPlanes,rt.numIntersection=V.numClipIntersection,rt.vertexAlphas=V.vertexAlphas,rt.vertexTangents=V.vertexTangents,rt.toneMapping=V.toneMapping}function es(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;E.setFromMatrixPosition(V.matrixWorld);for(let rt=0,it=T.length;rt<it;rt++){let tt=T[rt];if(tt.texture!==null&&tt.boundingBox.containsPoint(E))return tt}return null}function ya(T,V,rt,it,tt){V.isScene!==!0&&(V=we),dt.resetTextureUnits();let zt=V.fog,Yt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?V.environment:null,kt=st===null?U.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Re.workingColorSpace,At=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Qt=Et.get(it.envMap||Yt,At),ve=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,be=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Jt=!!rt.morphAttributes.position,Me=!!rt.morphAttributes.normal,He=!!rt.morphAttributes.color,Ue=hi;it.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ue=U.toneMapping);let ke=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,an=ke!==void 0?ke.length:0,Gt=nt.get(it),pn=D.state.lights;if(Dt===!0&&(ft===!0||T!==$)){let Oe=T===$&&it.id===W;te.setState(it,T,Oe)}let Ie=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==pn.state.version||Gt.outputColorSpace!==kt||tt.isBatchedMesh&&Gt.batching===!1||!tt.isBatchedMesh&&Gt.batching===!0||tt.isBatchedMesh&&Gt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Gt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Gt.instancing===!1||!tt.isInstancedMesh&&Gt.instancing===!0||tt.isSkinnedMesh&&Gt.skinning===!1||!tt.isSkinnedMesh&&Gt.skinning===!0||tt.isInstancedMesh&&Gt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Gt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Gt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Gt.instancingMorph===!1&&tt.morphTexture!==null||Gt.envMap!==Qt||it.fog===!0&&Gt.fog!==zt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==te.numPlanes||Gt.numIntersection!==te.numIntersection)||Gt.vertexAlphas!==ve||Gt.vertexTangents!==be||Gt.morphTargets!==Jt||Gt.morphNormals!==Me||Gt.morphColors!==He||Gt.toneMapping!==Ue||Gt.morphTargetsCount!==an||!!Gt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ie=!0):(Ie=!0,Gt.__version=it.version);let _n=Gt.currentProgram;Ie===!0&&(_n=Js(it,V,tt),J&&it.isNodeMaterial&&J.onUpdateProgram(it,_n,Gt));let Rn=!1,Fn=!1,ns=!1,Fe=_n.getUniforms(),Je=Gt.uniforms;if(b.useProgram(_n.program)&&(Rn=!0,Fn=!0,ns=!0),it.id!==W&&(W=it.id,Fn=!0),Gt.needsLights){let Oe=es(D.state.lightProbeGridArray,tt);Gt.lightProbeGrid!==Oe&&(Gt.lightProbeGrid=Oe,Fn=!0)}if(Rn||$!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Fe.setValue(H,"projectionMatrix",T.projectionMatrix),Fe.setValue(H,"viewMatrix",T.matrixWorldInverse);let si=Fe.map.cameraPosition;si!==void 0&&si.setValue(H,Xt.setFromMatrixPosition(T.matrixWorld)),N.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Fn=!0,ns=!0)}if(Gt.needsLights&&(pn.state.sunShadowMap.length>0&&Fe.setValue(H,"sunShadowMap",pn.state.sunShadowMap,dt),pn.state.directionalShadowMap.length>0&&Fe.setValue(H,"directionalShadowMap",pn.state.directionalShadowMap,dt),pn.state.spotShadowMap.length>0&&Fe.setValue(H,"spotShadowMap",pn.state.spotShadowMap,dt),pn.state.pointShadowMap.length>0&&Fe.setValue(H,"pointShadowMap",pn.state.pointShadowMap,dt)),tt.isSkinnedMesh){Fe.setOptional(H,tt,"bindMatrix"),Fe.setOptional(H,tt,"bindMatrixInverse");let Oe=tt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Fe.setValue(H,"boneTexture",Oe.boneTexture,dt))}tt.isBatchedMesh&&(Fe.setOptional(H,tt,"batchingTexture"),Fe.setValue(H,"batchingTexture",tt._matricesTexture,dt),Fe.setOptional(H,tt,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",tt._indirectTexture,dt),Fe.setOptional(H,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",tt._colorsTexture,dt));let Bn=rt.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&G.update(tt,rt,_n),(Fn||Gt.receiveShadow!==tt.receiveShadow)&&(Gt.receiveShadow=tt.receiveShadow,Fe.setValue(H,"receiveShadow",tt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&V.environment!==null&&(Je.envMapIntensity.value=V.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=RS()),Fn){if(Fe.setValue(H,"toneMappingExposure",U.toneMappingExposure),Gt.needsLights&&$r(Je,ns),zt&&it.fog===!0&&$t.refreshFogUniforms(Je,zt),$t.refreshMaterialUniforms(Je,it,q,Z,D.state.transmissionRenderTarget[T.id]),Gt.needsLights&&Gt.lightProbeGrid){let Oe=Gt.lightProbeGrid;Je.probesSH.value=Oe.texture,Je.probesMin.value.copy(Oe.boundingBox.min),Je.probesMax.value.copy(Oe.boundingBox.max),Je.probesResolution.value.copy(Oe.resolution)}Nr.upload(H,pe(Gt),Je,dt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Nr.upload(H,pe(Gt),Je,dt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Fe.setValue(H,"center",tt.center),Fe.setValue(H,"modelViewMatrix",tt.modelViewMatrix),Fe.setValue(H,"normalMatrix",tt.normalMatrix),Fe.setValue(H,"modelMatrix",tt.matrixWorld),it.uniformsGroups!==void 0){let Oe=it.uniformsGroups;for(let si=0,zi=Oe.length;si<zi;si++){let js=Oe[si];bt.update(js,_n),bt.bind(js,_n)}}return _n}function $r(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function ph(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(T,V,rt){let it=nt.get(T);it.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),nt.get(T.texture).__webglTexture=V,nt.get(T.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let rt=nt.get(T);rt.__webglFramebuffer=V,rt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,rt=0){st=T,ht=V,k=rt;let it=null,tt=!1,zt=!1;if(T){let kt=nt.get(T);if(kt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(H.FRAMEBUFFER,kt.__webglFramebuffer),ot.copy(T.viewport),Mt.copy(T.scissor),wt=T.scissorTest,b.viewport(ot),b.scissor(Mt),b.setScissorTest(wt),W=-1;return}else if(kt.__webglFramebuffer===void 0)dt.setupRenderTarget(T);else if(kt.__hasExternalTextures)dt.rebindTextures(T,nt.get(T.texture).__webglTexture,nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ve=T.depthTexture;if(kt.__boundDepthTexture!==ve){if(ve!==null&&nt.has(ve)&&(T.width!==ve.image.width||T.height!==ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(T)}}let At=T.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(zt=!0);let Qt=nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qt[V])?it=Qt[V][rt]:it=Qt[V],tt=!0):T.samples>0&&dt.useMultisampledRTT(T)===!1?it=nt.get(T).__webglMultisampledFramebuffer:Array.isArray(Qt)?it=Qt[rt]:it=Qt,ot.copy(T.viewport),Mt.copy(T.scissor),wt=T.scissorTest}else ot.copy(ct).multiplyScalar(q).floor(),Mt.copy(Lt).multiplyScalar(q).floor(),wt=Zt;if(rt!==0&&(it=j),b.bindFramebuffer(H.FRAMEBUFFER,it)&&b.drawBuffers(T,it),b.viewport(ot),b.scissor(Mt),b.setScissorTest(wt),tt){let kt=nt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,kt.__webglTexture,rt)}else if(zt){let kt=V;for(let At=0;At<T.textures.length;At++){let Qt=nt.get(T.textures[At]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+At,Qt.__webglTexture,rt,kt)}}else if(T!==null&&rt!==0){let kt=nt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,kt.__webglTexture,rt)}W=-1};function Zr(T){let V=nt.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=N.textureFormatReadable(T.format),V.__typeReadable=N.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,rt,it,tt,zt,Yt,kt=0){if(!(T&&T.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Yt!==void 0&&(At=At[Yt]),At){b.bindFramebuffer(H.FRAMEBUFFER,At);try{let Qt=T.textures[kt],ve=Qt.format,be=Qt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt);let Jt=Zr(Qt);if(Jt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-it&&rt>=0&&rt<=T.height-tt&&H.readPixels(V,rt,it,tt,It.convert(ve),It.convert(be),zt)}finally{let Qt=st!==null?nt.get(st).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(T,V,rt,it,tt,zt,Yt,kt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Yt!==void 0&&(At=At[Yt]),At)if(V>=0&&V<=T.width-it&&rt>=0&&rt<=T.height-tt){b.bindFramebuffer(H.FRAMEBUFFER,At);let Qt=T.textures[kt],ve=Qt.format,be=Qt.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt);let Jt=Zr(Qt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Me),H.bufferData(H.PIXEL_PACK_BUFFER,zt.byteLength,H.STREAM_READ),H.readPixels(V,rt,it,tt,It.convert(ve),It.convert(be),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let He=st!==null?nt.get(st).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,He);let Ue=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Lm(H,Ue,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Me),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,zt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Me),H.deleteSync(Ue),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,rt=0){let it=Math.pow(2,-rt),tt=Math.floor(T.image.width*it),zt=Math.floor(T.image.height*it),Yt=V!==null?V.x:0,kt=V!==null?V.y:0;dt.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Yt,kt,tt,zt),b.unbindTexture()},this.copyTextureToTexture=function(T,V,rt=null,it=null,tt=0,zt=0){let Yt,kt,At,Qt,ve,be,Jt,Me,He,Ue=T.isCompressedTexture?T.mipmaps[zt]:T.image;if(rt!==null)Yt=rt.max.x-rt.min.x,kt=rt.max.y-rt.min.y,At=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,ve=rt.min.y,be=rt.isBox3?rt.min.z:0;else{let Je=Math.pow(2,-tt);Yt=Math.floor(Ue.width*Je),kt=Math.floor(Ue.height*Je),T.isDataArrayTexture?At=Ue.depth:T.isData3DTexture?At=Math.floor(Ue.depth*Je):At=1,Qt=0,ve=0,be=0}it!==null?(Jt=it.x,Me=it.y,He=it.z):(Jt=0,Me=0,He=0);let ke=It.convert(V.format),an=It.convert(V.type),Gt;V.isData3DTexture?(dt.setTexture3D(V,0),Gt=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(dt.setTexture2DArray(V,0),Gt=H.TEXTURE_2D_ARRAY):(dt.setTexture2D(V,0),Gt=H.TEXTURE_2D),b.activeTexture(H.TEXTURE0),b.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let pn=b.getParameter(H.UNPACK_ROW_LENGTH),Ie=b.getParameter(H.UNPACK_IMAGE_HEIGHT),_n=b.getParameter(H.UNPACK_SKIP_PIXELS),Rn=b.getParameter(H.UNPACK_SKIP_ROWS),Fn=b.getParameter(H.UNPACK_SKIP_IMAGES);b.pixelStorei(H.UNPACK_ROW_LENGTH,Ue.width),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ue.height),b.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),b.pixelStorei(H.UNPACK_SKIP_ROWS,ve),b.pixelStorei(H.UNPACK_SKIP_IMAGES,be);let ns=T.isDataArrayTexture||T.isData3DTexture,Fe=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let Je=nt.get(T),Bn=nt.get(V),Oe=nt.get(Je.__renderTarget),si=nt.get(Bn.__renderTarget);b.bindFramebuffer(H.READ_FRAMEBUFFER,Oe.__webglFramebuffer),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let zi=0;zi<At;zi++)ns&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(T).__webglTexture,tt,be+zi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(V).__webglTexture,zt,He+zi)),H.blitFramebuffer(Qt,ve,Yt,kt,Jt,Me,Yt,kt,H.DEPTH_BUFFER_BIT,H.NEAREST);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(tt!==0||T.isRenderTargetTexture||nt.has(T)){let Je=nt.get(T),Bn=nt.get(V);b.bindFramebuffer(H.READ_FRAMEBUFFER,B),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,et);for(let Oe=0;Oe<At;Oe++)ns?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Je.__webglTexture,tt,be+Oe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Je.__webglTexture,tt),Fe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bn.__webglTexture,zt,He+Oe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bn.__webglTexture,zt),tt!==0?H.blitFramebuffer(Qt,ve,Yt,kt,Jt,Me,Yt,kt,H.COLOR_BUFFER_BIT,H.NEAREST):Fe?H.copyTexSubImage3D(Gt,zt,Jt,Me,He+Oe,Qt,ve,Yt,kt):H.copyTexSubImage2D(Gt,zt,Jt,Me,Qt,ve,Yt,kt);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Fe?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Gt,zt,Jt,Me,He,Yt,kt,At,ke,an,Ue.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Gt,zt,Jt,Me,He,Yt,kt,At,ke,Ue.data):H.texSubImage3D(Gt,zt,Jt,Me,He,Yt,kt,At,ke,an,Ue):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,zt,Jt,Me,Yt,kt,ke,an,Ue.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,zt,Jt,Me,Ue.width,Ue.height,ke,Ue.data):H.texSubImage2D(H.TEXTURE_2D,zt,Jt,Me,Yt,kt,ke,an,Ue);b.pixelStorei(H.UNPACK_ROW_LENGTH,pn),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie),b.pixelStorei(H.UNPACK_SKIP_PIXELS,_n),b.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(H.UNPACK_SKIP_IMAGES,Fn),zt===0&&V.generateMipmaps&&H.generateMipmap(Gt),b.unbindTexture()},this.initRenderTarget=function(T){nt.get(T).__webglFramebuffer===void 0&&dt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?dt.setTextureCube(T,0):T.isData3DTexture?dt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?dt.setTexture2DArray(T,0):dt.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){ht=0,k=0,st=null,b.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var IS=["top","side","bottom"],PS={slab_bottom:1,slab_top:1,stairs:1},d0=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function LS(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],d0[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function p0(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let R of t){if(!R||typeof R.id!="string")throw new Error("block without id");if(!Number.isInteger(R.n)||R.n<0||R.n>255)throw new Error("bad n for "+R.id);if(i[R.n])throw new Error("duplicate n "+R.n+" ("+R.id+")");if(s[R.id])throw new Error("duplicate id "+R.id);let U=R.colors||{},O=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},R);if(O.placeable=O.n!==0&&!O.liquid,O.colors={top:U.top||"#888888",side:U.side||U.top||"#888888",bottom:U.bottom||U.top||"#888888"},O.opaque=O.solid&&!O.transparent&&!O.cutout&&!PS[O.shape],O.tile={},O.tileOf&&s[O.tileOf])O.tile=Object.assign({},s[O.tileOf].tile);else if(O.n!==0){let J={};for(let j of IS){let B=O.colors[j]+"|"+(O.pattern==="grass"||O.pattern==="log"||O.pattern==="lamp"||O.pattern==="table"||O.pattern==="stele"||O.pattern==="torch"||O.pattern==="bed"||O.pattern==="snow"||O.pattern==="lantern"||O.pattern==="bookshelf"||O.pattern==="hay"||O.pattern==="barrel"||O.pattern==="chest"||O.pattern==="farmland"?j:"");J[B]===void 0&&(J[B]=r.length,r.push({block:O.id,face:j,color:O.colors[j],pattern:O.pattern,accent:O.accent||null,top:O.colors.top})),O.tile[j]=J[B]}}i[O.n]=O,s[O.id]=O}if(!s.air)throw new Error("registry needs air");for(let R of e){if(s[R.id])throw new Error("duplicate id "+R.id);s[R.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},R)}for(let R in s){let U=s[R].drops;if(U&&U!=="self"&&!s[U])throw new Error(R+" drops unknown "+U)}let o=R=>(typeof R=="number"?i[R]:s[R])||null,a=new Uint8Array(256),u=new Uint8Array(256),c=new Uint8Array(256),p=new Uint8Array(256),f=new Uint8Array(256),d=new Uint8Array(256),m={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},_=new Uint8Array(256),x=new Array(256).fill(null),y=new Uint8Array(256),g=new Uint8Array(256),A=new Uint8Array(256),F=new Uint8Array(256),E=new Uint8Array(256),I=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1),L=new Int16Array(256).fill(-1);i.forEach((R,U)=>{R&&(y[U]=R.solid?1:0,g[U]=R.opaque?1:0,A[U]=R.transparent?1:0,F[U]=R.emissive?1:0,E[U]=R.liquid?1:0,a[U]=R.light!=null?R.light:R.emissive?15:0,u[U]=R.liquid?2:0,c[U]=m[R.shape]||0,p[U]=R.cutout?1:0,f[U]=+R.climbable||0,d[U]=R.plant?1:0,_[U]=R.facing|0,R.solid&&(x[U]=LS(R)),U&&(I[U]=R.tile.top,D[U]=R.tile.side,L[U]=R.tile.bottom))});let S=(n&&n.blueprints||[]).map(R=>Object.assign({kind:"blueprint"},R));return{blocks:i.filter(Boolean),items:e.map(R=>s[R.id]),blueprints:S,tiles:r,get:o,toolOf:R=>{let U=R&&s[R];return U&&U.kind==="item"&&U.tool&&typeof U.tool=="object"?U.tool:null},num:R=>{let U=s[R];if(!U||U.kind!=="block")throw new Error("no block "+R);return U.n},name:R=>{let U=o(R);return U?U.name_zh:String(R)},maxStack:R=>{let U=s[R];return U?U.maxStack:64},dropOf:R=>{let U=i[R];return!U||!U.drops?null:U.drops==="self"?U.id:U.drops},breakTime:R=>{let U=i[R];return!U||U.hardness<0?1/0:.25+U.hardness*.55},flat:{solid:y,opaque:g,trans:A,emit:F,liquid:E,tileTop:I,tileSide:D,tileBottom:L,lightEmit:a,attn:u,shape:c,cutout:p,climb:f,plant:d,facing:_,boxes:x}}}var $i=n=>Math.floor(n/16);var ye=(n,t,e)=>(t*16+e)*16+n;var Li=(n,t)=>n+","+t,m0=n=>n.split(",").map(Number);function of(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=$i(n),s=$i(e);return{cx:i,cz:s,i:ye(n-i*16,t,e-s*16)}}function g0(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Nn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var Es=(n,t,e)=>Nn(n,t,0,e);function DS(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var af=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],NS=.5*(Math.sqrt(3)-1),Yo=(3-Math.sqrt(3))/6;function pi(n){let t=DS(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*NS,a=Math.floor(s+o),u=Math.floor(r+o),c=(a+u)*Yo,p=s-(a-c),f=r-(u-c),d=p>f?1:0,m=1-d,_=p-d+Yo,x=f-m+Yo,y=p-1+2*Yo,g=f-1+2*Yo,A=a&255,F=u&255,E=0,I,D;return I=.5-p*p-f*f,I>0&&(D=af[i[A+i[F]]&7],I*=I,E+=I*I*(D[0]*p+D[1]*f)),I=.5-_*_-x*x,I>0&&(D=af[i[A+d+i[F+m]]&7],I*=I,E+=I*I*(D[0]*_+D[1]*x)),I=.5-y*y-g*g,I>0&&(D=af[i[A+1+i[F+1]]&7],I*=I,E+=I*I*(D[0]*y+D[1]*g)),70*E}}function Zi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let u=0;u<i;u++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function lf(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),u=t(e-r),c=t(i-o),p=t(s-a),f=(m,_,x)=>Nn(n,r+m,o+_,a+x),d=(m,_,x)=>m+(_-m)*x;return d(d(d(f(0,0,0),f(1,0,0),u),d(f(0,1,0),f(1,1,0),u),c),d(d(f(0,0,1),f(1,0,1),u),d(f(0,1,1),f(1,1,1),u),c),p)}}var Fr=160,mi=18,cf=[[0,1],[-1,0],[0,-1],[1,0]];function x0(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var US=(n,t,e)=>e&1?[t,n]:[n,t];function y0(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(u,c){let p=u+","+c;if(i.has(p))return i.get(p);let f=null,d=m=>Nn(n+909,u,m,c);if(d(0)<.45&&e&&e.houses&&e.houses.length){let m=Math.floor((u+.2+d(1)*.6)*Fr),_=Math.floor((c+.2+d(2)*.6)*Fr),x=t.biomeOf(m,_),y=t.height(m,_),g=(x==="plains"||x==="desert")&&Math.hypot(m,_)>110;if(g&&y>s+1)for(let A=0;A<16&&g;A++)for(let F of[7,14]){let E=t.height(m+Math.round(Math.cos(A*.39)*F),_+Math.round(Math.sin(A*.39)*F));(Math.abs(E-y)>3||E<=s)&&(g=!1)}else g=!1;if(g){let A=[],F=[],E=3+Math.floor(d(3)*4),I=(D,L,S,R)=>{let U=r[D];if(!U)return null;let[O,J]=US(U.size[0],U.size[2],R),j={tpl:D,rot:R,x0:L-(O>>1),z0:S-(J>>1),y,w:O,d:J,h:U.size[1]};return A.push(j),j};I("well",m,_,0),I("lamp_post",m+3,_+3,0),I("lamp_post",m-3,_-3,0);for(let D=0;D<E;D++){let L=D/E*Math.PI*2+d(10+D)*.5,S=9+d(20+D)*3,R=m+Math.round(Math.cos(L)*S),U=_+Math.round(Math.sin(L)*S),O=m-R,J=_-U,j=0,B=-1/0;cf.forEach((ot,Mt)=>{let wt=ot[0]*O+ot[1]*J;wt>B&&(B=wt,j=Mt)});let et=e.houses[Math.floor(d(30+D)*e.houses.length)],ht=I(et,R,U,j);if(!ht)continue;let k=r[et],[st,W]=x0(k.door[0],k.door[1],k.size[0],k.size[2],j),$={x:ht.x0+st+cf[j][0],z:ht.z0+W+cf[j][1]};F.push({ax:m,az:_,bx:$.x,bz:$.z})}f={id:p,x:m,z:_,y,biome:x,structures:A,paths:F,villagers:2+Math.floor(d(4)*3)}}}return i.set(p,f),f}function a(u,c,p,f){let d=[];for(let m=Math.floor((c-mi)/Fr);m<=Math.floor((f+mi)/Fr);m++)for(let _=Math.floor((u-mi)/Fr);_<=Math.floor((p+mi)/Fr);_++){let x=o(_,m);x&&x.x+mi>=u&&x.x-mi<=p&&x.z+mi>=c&&x.z-mi<=f&&d.push(x)}return d}return{plan:o,around:a,chunk:(u,c)=>a(u*16,c*16,u*16+16-1,c*16+16-1)}}function _0(n,t,e,i,s,r,o){let a=t*16,u=e*16,c=(_,x)=>_>=a&&_<a+16&&x>=u&&x<u+16,p=i.biome==="desert",f=p?s.desert||{}:{},d=_=>{let x=s.palette[_];if(!x)return null;let y=f[x]||x;return r.byId(y)},m=p?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let x=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let y=0;y<=x;y++){let g=Math.round(_.ax+(_.bx-_.ax)*y/x),A=Math.round(_.az+(_.bz-_.az)*y/x);if(!c(g,A))continue;let F=o.height(g,A),E=ye(g-a,F,A-u);n[E]&&n[E]!==r.water&&(n[E]=r.path);for(let I=F+1;I<Math.min(64,F+4);I++){let D=ye(g-a,I,A-u);(n[D]===r.leaves||n[D]===r.log||I===F+1)&&(n[D]=0)}}}for(let _ of i.structures){let x=s.templates[_.tpl];if(!x)continue;let[y,,g]=x.size;for(let A=0;A<g;A++)for(let F=0;F<y;F++){let[E,I]=x0(F,A,y,g,_.rot),D=_.x0+E,L=_.z0+I;if(!c(D,L))continue;let S=D-a,R=L-u;for(let U=_.y-1;U>Math.max(0,_.y-8);U--){let O=ye(S,U,R);if(n[O]&&n[O]!==r.water)break;n[O]=m}for(let U=_.y+x.size[1];U<Math.min(64,_.y+x.size[1]+3);U++)n[ye(S,U,R)]=0;x.layers.forEach((U,O)=>{let J=(U[A]||"")[F];if(!J||J===" ")return;let j=_.y+O;j>=64||(n[ye(S,j,R)]=J==="."?0:d(J)||0)})}}}var Ts=192;function v0(n,t,e){let i=e&&e.ruins,s=new Map;function r(a,u){let c=a+","+u;if(s.has(c))return s.get(c);let p=null;if(i){let f=_=>Es(n+9001+_*31,a,u),d=a*Ts+24+Math.floor(f(2)*(Ts-48)),m=u*Ts+24+Math.floor(f(3)*(Ts-48));if(f(1)<i.chance&&Math.hypot(d,m)>140){let _=i.byBiome[t.biomeOf(d,m)],x=Array.isArray(_)?_[Math.floor(f(4)*_.length)]:_,y=x&&i.templates[x];if(y&&!(t.villages&&t.villages.around(d-40,m-40,d+40,m+40).length)){let g=y.layers[0][0].length,A=y.layers[0].length;p={id:c,kind:x,x:d-(g>>1),z:m-(A>>1),y:t.height(d,m)+(y.yoff||0),w:g,d:A,h:y.layers.length}}}}return s.set(c,p),p}function o(a,u,c,p){let f=[];for(let d=Math.floor((u-32)/Ts);d<=Math.floor((p+32)/Ts);d++)for(let m=Math.floor((a-32)/Ts);m<=Math.floor((c+32)/Ts);m++){let _=r(m,d);_&&_.x<=c&&_.x+_.w>a&&_.z<=p&&_.z+_.d>u&&f.push(_)}return f}return{around:o,chunk:(a,u)=>o(a*16,u*16,a*16+16-1,u*16+16-1),at:(a,u)=>o(Math.floor(a),Math.floor(u),Math.floor(a),Math.floor(u))[0]||null}}function b0(n,t,e,i,s,r){let o=s.ruins.templates[i.kind],a=s.ruins.palette,u=t*16,c=e*16,p=o.foundation?r(o.foundation):0,f=r("water");o.layers.forEach((d,m)=>d.forEach((_,x)=>{for(let y=0;y<_.length;y++){let g=_[y];if(g===" ")continue;let A=i.x+y-u,F=i.z+x-c,E=i.y+m;if(!(A<0||A>=16||F<0||F>=16||E<=0||E>=64)&&(n[ye(A,E,F)]=g==="."?0:r(a[g]),m===0&&p))for(let I=E-1,D=0;I>0&&D<8;I--,D++){let L=n[ye(A,I,F)];if(L&&L!==f)break;n[ye(A,I,F)]=p}}}))}function M0(n,t,e){let i=(Math.imul(n,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791))>>>0||1;return()=>{i=i+1831565813>>>0;let s=i;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function S0(n,t,e,i){let s=n.createInventory(27);for(let r of t||[])if(e()<r.p){let o=r.min+Math.floor(e()*(r.max-r.min+1));if(o>0){let a;do a=Math.floor(e()*27);while(s.slots[a]&&s.slots.some(u=>!u));s.slots[a]||(s.slots[a]={id:r.id,count:Math.min(o,i?i(r.id):64)})}}return s}var zn=24;var A0={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730",bamboo:"\u7AF9\u6797",snowfield:"\u96EA\u539F"},OS=-.5,zS=400,w0=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],Or=112;function E0(n,t,e){let i=k=>t.num(k),s=k=>{try{return i(k)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{bamboo:s("bamboo"),tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=pi(n),u=pi(n+101),c=pi(n+202),p=pi(n+303),f=pi(n+404),d=pi(n+909);r.snowb=s("snow_block")||r.snow;let m=lf(n+505),_=lf(n+606);function x(k,st){let W=Zi(a,k/190,st/190,3),$=Zi(u,k/55,st/55,4),ot=Math.max(0,Zi(c,k/130,st/130,2)-.1),Mt=27+W*9+$*6+ot*ot*75;return Math.max(4,Math.min(54,Math.floor(Mt)))}let y=pi(n+808);function g(k,st){let W=x(k,st),$=Zi(y,k/900,st/900,2),ot=Math.min(1,Math.max(0,(Math.hypot(k,st)-240)/80)),Mt=Math.min(1,Math.max(0,(-.18-$)/.17)),wt=Mt*Mt*(3-2*Mt)*ot;return wt>0&&(W=Math.round(W*(1-wt)+(zn-14)*wt)),W<zn-1?Math.max(3,Math.floor(zn-1-(zn-1-W)*1.8)):W}function A(k,st){let W=(Es(n+3,k,st)-.5)*.025;return{t:Zi(p,k/420,st/420,2)+W,u:Zi(f,k/380,st/380,2)-W}}function F(k,st,W=g(k,st)){if(W<zn-1)return"ocean";let{t:$,u:ot}=A(k,st);return $<-.3?$<OS&&Math.hypot(k-E,st-I)>zS?"snowfield":"snow":$>.28&&ot<.05?"desert":ot>.12?$>.25&&ot>.3&&Math.hypot(k-E,st-I)>200?"bamboo":"forest":"plains"}let E=0,I=0,D=null;function L(){if(D)return D;let k=(st,W)=>{let $=g(st,W);return $>=zn+2&&Math.abs(g(st+1,W)-$)<2&&Math.abs(g(st,W+1)-$)<2};for(let st=0;st<400;st+=2)for(let W=0;W<Math.max(1,st*2);W++){let $=W/Math.max(1,st*2)*Math.PI*2,ot=Math.round(Math.cos($)*st),Mt=Math.round(Math.sin($)*st);if(k(ot,Mt)&&k(ot+3,Mt+2))return D={x:ot+.5,y:g(ot,Mt)+1,z:Mt+.5,stele:{x:ot+3,y:g(ot+3,Mt+2)+1,z:Mt+2},portal:{x:ot-3,y:Math.max(zn+1,g(ot-3,Mt+2))+1,z:Mt+2}},D}return D={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},D}function S(k,st){let W=[],$=k*16,ot=st*16,Mt=Math.floor(($-80)/Or),wt=Math.floor(($+16+80)/Or),ie=Math.floor((ot-80)/Or),Ot=Math.floor((ot+16+80)/Or);for(let Kt=ie;Kt<=Ot;Kt++)for(let Z=Mt;Z<=wt;Z++){let q=Zt=>Nn(n+707,Z,Zt,Kt);if(q(0)>.25)continue;let lt=(Z+q(1))*Or,yt=(Kt+q(2))*Or,ct=q(3)*Math.PI,Lt=40+q(4)*30;W.push({ax:lt-Math.cos(ct)*Lt/2,az:yt-Math.sin(ct)*Lt/2,dx:Math.cos(ct)*Lt,dz:Math.sin(ct)*Lt,len:Lt,floor:7+Math.floor(q(5)*6),w:1.6+q(6)*1.2})}return W}function R(k,st){let W=new Uint8Array(16384),$=k*16,ot=st*16,Mt=18,wt=new Int16Array(Mt*Mt);for(let lt=-1;lt<=16;lt++)for(let yt=-1;yt<=16;yt++)wt[(lt+1)*Mt+yt+1]=g($+yt,ot+lt);let ie=L(),Ot=new Array(256);for(let lt=0;lt<16;lt++)for(let yt=0;yt<16;yt++){let ct=$+yt,Lt=ot+lt,Zt=wt[(lt+1)*Mt+yt+1],qt=Math.max(Math.abs(wt[(lt+1)*Mt+yt]-Zt),Math.abs(wt[(lt+1)*Mt+yt+2]-Zt),Math.abs(wt[lt*Mt+yt+1]-Zt),Math.abs(wt[(lt+2)*Mt+yt+1]-Zt))>=3,Dt=Ot[lt*16+yt]=F(ct,Lt,Zt),ft=Zt<=zn+1,Wt,Xt;Dt==="ocean"||ft||Dt==="desert"?(Wt=r.sand,Xt=r.sand):qt?(Wt=r.stone,Xt=r.stone):Dt==="snow"?(Wt=r.snow,Xt=r.dirt):Dt==="snowfield"?(Wt=d(ct/18,Lt/18)>.42?r.ice:r.snowb,Xt=r.snowb):(Wt=r.grass,Xt=r.dirt);for(let me=0;me<=Zt;me++){let we;if(me===0?we=r.bedrock:me===Zt?we=Wt:me>=Zt-3?we=Xt:Dt==="desert"&&me>=Zt-7?we=r.sandstone:we=r.stone,we===r.stone&&qt&&me>=Zt-4){let ce=Nn(n,ct,me,Lt);ce<.06?we=r.coal:ce<.09?we=r.iron:ce<.096&&(we=r.ruby)}W[ye(yt,me,lt)]=we}for(let me=Zt+1;me<=zn;me++)W[ye(yt,me,lt)]=me===zn&&(Dt==="snow"||Dt==="snowfield")?r.ice:r.water}U(W,k,st,wt,Mt);for(let lt=0;lt<w0.length;lt++){let yt=w0[lt],ct=r[yt.ore];for(let Lt=0;Lt<yt.count;Lt++){let Zt=Wt=>Nn(n+31*lt+Wt,k*977+Lt,Wt,st*131+Lt);if(Zt(9)>yt.chance)continue;let qt=Math.floor(Zt(1)*16),Dt=yt.y0+Math.floor(Zt(2)*(yt.y1-yt.y0)),ft=Math.floor(Zt(3)*16);for(let Wt=0;Wt<yt.size;Wt++){qt>=0&&qt<16&&ft>=0&&ft<16&&Dt>0&&Dt<64&&W[ye(qt,Dt,ft)]===r.stone&&(W[ye(qt,Dt,ft)]=ct);let Xt=Math.floor(Zt(10+Wt)*6);Xt===0?qt++:Xt===1?qt--:Xt===2?Dt++:Xt===3?Dt--:Xt===4?ft++:ft--}}}let Kt=e?et.chunk(k,st):[];O(W,k,st,wt,Mt,Ot,ie,Kt);for(let lt of Kt)_0(W,k,st,lt,e,r,B);if(ht)for(let lt of ht.chunk(k,st))b0(W,k,st,lt,e,r.byId);let Z=ie.stele;if(Math.floor(Z.x/16)===k&&Math.floor(Z.z/16)===st){let lt=Z.x-$,yt=Z.z-ot;W[ye(lt,Z.y,yt)]=r.stele,W[ye(lt,Z.y+1,yt)]=r.stele}let q=ie.portal;if(r.portal&&q&&Math.floor(q.x/16)===k&&Math.floor(q.z/16)===st){let lt=q.x-$,yt=q.z-ot;for(let ct=Math.max(1,q.y-3);ct<q.y;ct++)(!W[ye(lt,ct,yt)]||W[ye(lt,ct,yt)]===r.water)&&(W[ye(lt,ct,yt)]=r.stone);W[ye(lt,q.y,yt)]=r.portal,W[ye(lt,q.y+1,yt)]=r.portal}return W}function U(k,st,W,$,ot){let Mt=st*16,wt=W*16,ie=4,Ot=16/ie+1,Kt=64/ie+1,Z=new Float32Array(Ot*Ot*Kt);for(let yt=0;yt<Kt;yt++)for(let ct=0;ct<Ot;ct++)for(let Lt=0;Lt<Ot;Lt++){let Zt=Mt+Lt*ie,qt=yt*ie,Dt=wt+ct*ie,ft=m(Zt/22,qt/14,Dt/22)-.5,Wt=_(Zt/22,qt/14,Dt/22)-.5;Z[(yt*Ot+ct)*Ot+Lt]=ft*ft+Wt*Wt}let q=(yt,ct,Lt)=>Z[(ct*Ot+Lt)*Ot+yt],lt=S(st,W);for(let yt=0;yt<16;yt++)for(let ct=0;ct<16;ct++){let Lt=$[(yt+1)*ot+ct+1],Zt=Lt<=zn+1,qt=Zt?Lt-5:Lt,Dt=ct>>2,ft=yt>>2,Wt=(ct&3)/ie,Xt=(yt&3)/ie;for(let ce=3;ce<=qt;ce++){let fe=ce>>2,H=(ce&3)/ie,Ge=q(Dt,fe,ft)+(q(Dt+1,fe,ft)-q(Dt,fe,ft))*Wt,Ae=q(Dt,fe,ft+1)+(q(Dt+1,fe,ft+1)-q(Dt,fe,ft+1))*Wt,N=q(Dt,fe+1,ft)+(q(Dt+1,fe+1,ft)-q(Dt,fe+1,ft))*Wt,b=q(Dt,fe+1,ft+1)+(q(Dt+1,fe+1,ft+1)-q(Dt,fe+1,ft+1))*Wt;if((Ge+(Ae-Ge)*Xt)*(1-H)+(N+(b-N)*Xt)*H<.008){let nt=ye(ct,ce,yt);k[nt]!==r.bedrock&&k[nt]!==r.water&&(k[nt]=0)}}if(!lt.length||Zt)continue;let me=Mt+ct,we=wt+yt;for(let ce of lt){let fe=Math.max(0,Math.min(1,((me-ce.ax)*ce.dx+(we-ce.az)*ce.dz)/(ce.len*ce.len))),H=ce.ax+ce.dx*fe,Ge=ce.az+ce.dz*fe,Ae=Math.hypot(me-H,we-Ge),N=ce.w*Math.sin(Math.PI*fe);if(Ae<N)for(let b=ce.floor+Math.floor(Ae*2);b<=Lt;b++){let X=ye(ct,b,yt);k[X]!==r.water&&(k[X]=0)}}}}function O(k,st,W,$,ot,Mt,wt,ie){let Ot=st*16,Kt=W*16;for(let Z=0;Z<16;Z++)for(let q=0;q<16;q++){let lt=Ot+q,yt=Kt+Z,ct=$[(Z+1)*ot+q+1],Lt=Mt[Z*16+q];if(ct+1>=64||Math.hypot(lt-wt.x,yt-wt.z)<48)continue;let Zt=k[ye(q,ct,Z)],qt=ye(q,ct+1,Z);if(k[qt])continue;let Dt=Es(n+11,lt,yt),ft=Es(n+13,lt,yt);Zt===r.grass?Dt<.012&&o.length?k[qt]=o[Math.floor(ft*o.length)]:Dt<(Lt==="plains"?.1:.05)&&r.tallgrass?k[qt]=r.tallgrass:Lt==="forest"&&Dt<.08&&r.fern?k[qt]=r.fern:Lt==="forest"&&Dt<.084&&r.mushR&&(k[qt]=ft<.5?r.mushR:r.mushB):Zt===r.sand&&Lt==="desert"&&ct>zn+1&&Dt<.008&&r.deadbush&&(k[qt]=r.deadbush)}for(let Z=2;Z<14;Z++)for(let q=2;q<14;q++){let lt=Ot+q,yt=Kt+Z,ct=$[(Z+1)*ot+q+1],Lt=Mt[Z*16+q],Zt=k[ye(q,ct,Z)];if(Math.abs(lt-wt.x)<7&&Math.abs(yt-wt.z)<7||ie.some(Wt=>Math.abs(lt-Wt.x)<mi+2&&Math.abs(yt-Wt.z)<mi+2))continue;let qt=Es(n+7,lt,yt),Dt=Es(n+9,lt,yt);if(Lt==="desert"&&Zt===r.sand&&ct>zn+1&&qt<.008&&r.cactus){let Wt=1+Math.floor(Dt*3);for(let Xt=ct+1;Xt<=ct+Wt&&Xt<64;Xt++)k[ye(q,Xt,Z)]=r.cactus;continue}if(Lt==="snow"&&Zt===r.snow&&qt<.02){j(k,q,Z,ct,5+Math.floor(Dt*3));continue}if(Lt==="snowfield"&&Zt===r.snowb&&qt<.003){j(k,q,Z,ct,4+Math.floor(Dt*2));continue}if(Lt==="bamboo"&&Zt===r.grass&&r.bamboo&&qt<.07){for(let Wt=ct+1;Wt<=ct+4+Math.floor(Dt*5)&&Wt<64;Wt++){let Xt=ye(q,Wt,Z);if(k[Xt]&&k[Xt]!==r.tallgrass)break;k[Xt]=r.bamboo}continue}let ft=Lt==="forest"?.035:Lt==="plains"?.003:0;Zt===r.grass&&qt<ft&&J(k,q,Z,ct,lt,yt,4+Math.floor(Dt*2))}}function J(k,st,W,$,ot,Mt,wt){let ie=$+wt;if(!(ie+2>=64)){for(let Ot=ie-2;Ot<=ie+1;Ot++){let Kt=Ot>=ie?1:2;for(let Z=-Kt;Z<=Kt;Z++)for(let q=-Kt;q<=Kt;q++){if(Kt===2&&Math.abs(q)===2&&Math.abs(Z)===2&&Nn(n,ot+q,Ot,Mt+Z)<.6)continue;let lt=ye(st+q,Ot,W+Z);k[lt]===r.air&&(k[lt]=r.leaves)}}k[ye(st,$,W)]=r.dirt;for(let Ot=$+1;Ot<=ie;Ot++)k[ye(st,Ot,W)]=r.log}}function j(k,st,W,$,ot){let Mt=$+ot;if(!(Mt+2>=64)){for(let wt=$+2;wt<=Mt+1;wt++){let ie=Mt+1-wt,Ot=ie>=4?2:ie>=1?1:0;for(let Kt=-Ot;Kt<=Ot;Kt++)for(let Z=-Ot;Z<=Ot;Z++){if(Ot===2&&Math.abs(Z)+Math.abs(Kt)>3)continue;let q=ye(st+Z,wt,W+Kt);k[q]===r.air&&(k[q]=r.sleaves)}}k[ye(st,$,W)]=r.dirt;for(let wt=$+1;wt<=Mt;wt++)k[ye(st,wt,W)]=r.slog}}{let k=L();E=k.x,I=k.z}let B={height:g,baseHeight:x,biomeOf:F,climate:A,genChunk:R,findSpawn:L,SEA:zn},et=y0(n,B,e);B.villages=et;let ht=e&&e.ruins?v0(n,B,e):null;return B.ruins=ht,B}function uf(n,t,e,i,s,r,o){let a=i/2,u=n-a,c=n+a,p=t,f=t+s,d=e-a,m=e+a,_=Math.floor(u),x=Math.floor(c-1e-6),y=Math.floor(p),g=Math.floor(f-1e-6),A=Math.floor(d),F=Math.floor(m-1e-6),E=!1;for(let I=y;I<=g;I++)for(let D=A;D<=F;D++)for(let L=_;L<=x;L++){let S=r(L,I,D);if(!S)continue;let R=S===!0?kS:S;for(let U of R){let O=L+U[0],J=I+U[1],j=D+U[2],B=L+U[3],et=I+U[4],ht=D+U[5];if(!(B<=u+1e-6||O>=c-1e-6||et<=p+1e-6||J>=f-1e-6||ht<=d+1e-6||j>=m-1e-6)){if(!o)return!0;E=!0,o.push([O,J,j,B,et,ht])}}}return E}var kS=[[0,0,0,1,1,1]],$o=(n,t,e,i,s,r)=>uf(n,t,e,i,s,r,null),T0=(n,t,e=.6,i=1.8)=>!$o(n.x,n.y,n.z,e,i,t);function Dc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,u=r/2,c=!1,p=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(f/.3)),m=e/d,_=[];for(let x=0;x<d;x++){let y=t.y*m;y&&(_.length=0,uf(n.x,n.y+y,n.z,r,o,i,_)?(y<0?(n.y=Math.max(..._.map(g=>g[4])),c=!0):n.y=Math.min(..._.map(g=>g[1]))-o,t.y=0):n.y+=y);for(let g of["x","z"]){let A=t[g]*m;if(!A)continue;let F={x:n.x,y:n.y,z:n.z};if(F[g]+=A,_.length=0,!uf(F.x,F.y,F.z,r,o,i,_)){n[g]=F[g];continue}if(a&&(c||s.grounded)){let I=Math.max(..._.map(D=>D[4]));if(I-n.y>0&&I-n.y<=1.01&&!$o(F.x,I,F.z,r,o,i)&&!$o(n.x,I,n.z,r,o,i)){p+=I-n.y,n.y=I,n[g]=F[g];continue}}let E=g==="x"?0:2;n[g]=A>0?Math.min(..._.map(I=>I[E]))-u-1e-4:Math.max(..._.map(I=>I[E+3]))+u+1e-4,$o(n.x,n.y,n.z,r,o,i)&&(n[g]=F[g]-A),t[g]=0}}return!c&&t.y<=0&&$o(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:p}}function BS(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],u=null;for(let c of r){let p=[e+c[0],i+c[1],s+c[2]],f=[e+c[3],i+c[4],s+c[5]],d=0,m=1/0,_=-1,x=!0;for(let y=0;y<3&&x;y++){if(Math.abs(a[y])<1e-12){(o[y]<p[y]||o[y]>f[y])&&(x=!1);continue}let g=(p[y]-o[y])/a[y],A=(f[y]-o[y])/a[y];g>A&&([g,A]=[A,g]),g>d&&(d=g,_=y),A<m&&(m=A),d>m&&(x=!1)}if(x&&(!u||d<u.t)){let y=[0,0,0];_>=0&&(y[_]=-Math.sign(a[_])),u={t:d,face:_>=0?y:null}}}return u}function zr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),u=Math.floor(n.z),c=Math.sign(t.x),p=Math.sign(t.y),f=Math.sign(t.z),d=c?Math.abs(1/t.x):1/0,m=p?Math.abs(1/t.y):1/0,_=f?Math.abs(1/t.z):1/0,x=c?(c>0?o+1-n.x:n.x-o)*d:1/0,y=p?(p>0?a+1-n.y:n.y-a)*m:1/0,g=f?(f>0?u+1-n.z:n.z-u)*_:1/0,A=[0,0,0],F=0;for(;F<=e;){let E=i(o,a,u);if(E&&s(E)){let I=r&&r(E);if(!I)return{x:o,y:a,z:u,n:E,face:A,dist:F};let D=BS(n,t,o,a,u,I);if(D&&D.t<=e)return{x:o,y:a,z:u,n:E,face:D.face||A,dist:D.t}}x<y&&x<g?(o+=c,F=x,x+=d,A=[-c,0,0]):y<g?(a+=p,F=y,y+=m,A=[0,-p,0]):(u+=f,F=g,g+=_,A=[0,0,-f])}return null}var xf={};Gn(xf,{ACC:()=>I0,BOOST:()=>ff,BRAKE:()=>L0,CONN:()=>gi,DECAY:()=>D0,DIR:()=>Jo,FRIC:()=>P0,MAX:()=>Zo,OPP:()=>Br,SLOPE_G:()=>df,UP:()=>Di,blockId:()=>jo,connect:()=>Uc,isStraight:()=>pf,linked:()=>N0,mount:()=>mf,next:()=>Ko,pos:()=>Fc,shapeOf:()=>kr,step:()=>gf});var gi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Di={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Jo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Br={n:"s",s:"n",e:"w",w:"e"},VS=["ns","ew","ne","nw","se","sw"],C0={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},I0=3,Zo=6,ff=11,P0=.8,L0=6,D0=1.5,df=2.5,pf=n=>n==="ns"||n==="ew"||!!Di[n],jo=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),Nc=(n,t)=>gi[n].find(e=>e!==t);function kr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":VS.find(e=>gi[e].includes(n)&&gi[e].includes(t))||null}function Ko(n,t,e,i,s,r){let[o,a]=Jo[s];for(let u of Di[r]===s?[1]:[0,-1]){let c=n(t+o,e+u,i+a);if(c&&gi[c.shape].includes(Br[s])&&Di[c.shape]===Br[s]==(u===-1))return{x:t+o,y:e+u,z:i+a,r:c}}return null}function N0(n,t,e,i){let s=n(t,e,i);return s?gi[s.shape].filter(r=>Ko(n,t,e,i,r,s.shape)):[]}function R0(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===Br[e]?"asc_"+e:null}return n.length===2?kr(n[0].d,n[1].d):kr(n[0].d)}function Uc(n,t,e,i,s,r="n"){let o=[];for(let c of["n","e","s","w"]){let[p,f]=Jo[c],d=Br[c];for(let m of[0,1,-1]){let _=t+p,x=e+m,y=i+f,g=n(_,x,y);if(!g)continue;if(gi[g.shape].includes(d)&&Di[g.shape]===d==(m===-1)){o.push({d:c,dy:m,pri:0});break}let A=N0(n,_,x,y);if(A.length>=2)continue;let F=null;if(m===-1?F=!A.length||A[0]===c?"asc_"+d:null:Di[g.shape]&&A.includes(Di[g.shape])||(F=A.length?kr(A[0],d):kr(d)),F&&(!g.powered||pf(F))){o.push({d:c,dy:m,pri:1,ns:F,at:[_,x,y]});break}}}o.sort((c,p)=>c.pri-p.pri);let a=[];for(let c of o){if(a.length===2)break;let p=R0(a.concat([c]));!p||s&&!pf(p)||a.push(c)}return{shape:a.length?R0(a):kr(r),updates:a.filter(c=>c.pri===1).map(c=>[c.at[0],c.at[1],c.at[2],c.ns])}}function mf(n,t,e,i,s,r,o=()=>!1){let a=gi[n],u=p=>Jo[p][0]*s+Jo[p][1]*r+(o(p)?.01:0),c=u(a[0])>=u(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:c===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function gf(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,gi[s.shape].includes(n.from)||(n.from=gi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=Nc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,ff)),e>.1?n.v<Zo&&(n.v=Math.min(Zo,n.v+I0*t)):e<-.1?n.v=Math.max(0,n.v-L0*t):n.v=Math.max(0,n.v-P0*t),n.v>Zo&&!s.powered&&(n.v=Math.max(Zo,n.v-D0*t)),Di[s.shape]&&(n.v+=(Nc(s.shape,n.from)===Di[s.shape]?-df:df)*t,n.v<0&&(n.from=Nc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=Nc(s.shape,n.from),o=Ko(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=Br[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,ff));else{n.s=1,n.v=0;break}}return n}function Fc(n){let t=gi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=C0[e],r=C0[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[u,c,p]=a<.5?[s,o,a*2]:[o,r,a*2-1],f=u[0]+(c[0]-u[0])*p,d=u[1]+(c[1]-u[1])*p,m=Di[n.shape],_=m?m==="n"?1-d:m==="s"?d:m==="e"?f:1-f:0,x=m?i===m?1:-1:0;return{x:n.x+f,y:n.y+_,z:n.z+d,yaw:Math.atan2(-(c[0]-u[0]),-(c[1]-u[1])),pitch:Math.atan2(x,1)*(m?1:0)}}var Mf={};Gn(Mf,{WINDOW:()=>HS,create:()=>yf,reel:()=>vf,roll:()=>bf,tick:()=>_f});var HS=1.3,U0=n=>3+n()*6;function yf(n=Math.random){return{phase:"wait",t:0,biteAt:U0(n),rnd:n}}function _f(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=U0(n.rnd),"escape"):null}var vf=n=>n&&n.phase==="bite"?"catch":"early";function bf(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function F0(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function O0(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function z0(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var k0=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function B0(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function V0(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[ye(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var H0=n=>btoa(String.fromCharCode.apply(null,n)),G0=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var WS=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Oc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=WS(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,G0(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=V0(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[u,c]=m0(r);for(let[p,f]of[...this.portals])Math.floor(f.x/16)===u&&Math.floor(f.z/16)===c&&this.portals.delete(p);for(let p=0;p<256;p++){let f=this.reg.get(a[p]);if(f&&(f.interact==="portal"||f.interact==="shadow_portal")){let d=u*16+p%16,m=c*16+Math.floor(p/16);this.portals.set(d+","+m,{x:d,z:m,name:f.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],u=o*4,c=.95+(o*2654435761>>>28)/16*.1;r.data[u]=a[0]*c,r.data[u+1]=a[1]*c,r.data[u+2]=a[2]*c,r.data[u+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,u=i-o/2/s,c=e+r/2/s,p=i+o/2/s;for(let f=Math.floor(u/16);f<=Math.floor(p/16);f++)for(let d=Math.floor(a/16);d<=Math.floor(c/16);d++){let m=this.tile(Li(d,f));m&&t.drawImage(m,Math.round((d*16-a)*s),Math.round((f*16-u)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:u}}explored(t,e){return this.tops.has(Li(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=H0(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Sf(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Ef={};Gn(Ef,{ARENA_R:()=>Qo,H0:()=>xi,LAIR:()=>yi,findFrame:()=>Af,makeShadowTerrain:()=>wf});var xi=22,yi={x:0,z:40},Qo=14;function wf(n,t){let e=f=>t.num(f),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=pi(n+11),r=pi(n+23),o=(f,d)=>f<d?1:f<d+8?1-(f-d)/8:0;function a(f,d){let m=xi+Zi(s,f/64,d/64,3)*10,_=Math.max(o(Math.hypot(f-.5,d-.5),9),o(Math.hypot(f-yi.x,d-yi.z),Qo+2));return m=m*(1-_)+xi*_,Math.max(6,Math.min(54,Math.round(m)))}let u=new Set;for(let f=0;f<8;f++)u.add(Math.round(yi.x+Math.cos(f*Math.PI/4)*Qo)+","+Math.round(yi.z+Math.sin(f*Math.PI/4)*Qo));function c(f,d){let m=new Uint8Array(16384),_=f*16,x=d*16;for(let y=0;y<16;y++)for(let g=0;g<16;g++){let A=_+g,F=x+y,E=a(A,F),I=Math.hypot(A-.5,F-.5),D=Math.hypot(A-yi.x,F-yi.z);for(let L=0;L<=E;L++){let S=L===0?i.bedrock:L===E?i.moss:i.stone;if(S===i.stone){let R=Nn(n,A,L,F);L<16&&R<.014?S=i.ore:R>.995&&(S=i.vein)}m[ye(g,L,y)]=S}if(I>6&&Math.abs(r(A/30,F/30))<.035&&(m[ye(g,E,y)]=i.vein),D<Qo-1&&(m[ye(g,E,y)]=(Math.floor(A)+Math.floor(F))%2?i.bricks:i.stone),u.has(A+","+F)){for(let L=E+1;L<=E+4;L++)m[ye(g,L,y)]=i.bricks;m[ye(g,E+5,y)]=i.vein}if(F===0&&A>=-1&&A<=2)for(let L=xi+1;L<=xi+5;L++){let S=A>=0&&A<=1&&L>=xi+2&&L<=xi+4;m[ye(g,L,y)]=S?i.portal:i.frame}}return m}let p={x:1,y:xi+1,z:2.5,stele:{x:1,y:xi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:c,findSpawn:()=>p,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function Af(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let u=-4;u<=1;u++){let c=t+o[0]*a,p=i+o[1]*a,f=e+u,d=(x,y)=>[c+o[0]*x,f+y,p+o[1]*x],m=[];for(let x=0;x<2;x++)for(let y=0;y<3;y++)m.push(d(x,y));if(!m.every(x=>r(n(x[0],x[1],x[2]))))continue;let _=[];for(let x=0;x<3;x++)_.push(d(-1,x),d(2,x));for(let x=0;x<2;x++)_.push(d(x,-1),d(x,3));if(_.every(x=>n(x[0],x[1],x[2])===s)&&_.some(x=>x[0]===t&&x[1]===e&&x[2]===i))return m}return null}var Vc={};Gn(Vc,{HOTBAR:()=>Tf,SIZE:()=>zc,add:()=>yn,canAdd:()=>ea,count:()=>Zn,craft:()=>Rf,craftable:()=>Bc,createInventory:()=>ta,deserialize:()=>kc,moveBetween:()=>If,moveSlot:()=>Cf,remove:()=>Gs,serialize:()=>na,takeFromSlot:()=>kn});var zc=36,Tf=9;function ta(n=36){return{slots:new Array(n).fill(null)}}function yn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function Zn(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Gs(n,t,e){if(Zn(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function kn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Cf(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function ea(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return yn(s,t,e,i)===0}var na=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function kc(n,t=36){let e=ta(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function Bc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Zn(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Rf(n,t,e=()=>64,i){let s=Bc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Gs(n,o,t.in[o]);return yn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function If(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function XS(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Vr=(n,t)=>n.owned.includes(t),W0=(n,t)=>n?t?2:1:0;function Un(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Ws(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function X0(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function q0(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Vr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Ws(n,e.price),n.owned.push(e.id),{ok:!0}):ea(t,e.id,e.qty,i)?(Ws(n,e.price),yn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Y0=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function $0(n){let t=XS(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function J0(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function j0(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Un(n,s),canSpend:s=>n.coins>=s,spend:async s=>Ws(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function K0(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var Ff={};Gn(Ff,{createStory:()=>Pf,currentMain:()=>Df,dailyPicks:()=>Q0,dailyProgress:()=>Uf,restartTutorial:()=>Lf,skipTutorial:()=>Hc,tick:()=>Nf});function Pf(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function Q0(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var Lf=n=>{n.tut={step:0,base:null,done:!1}},Hc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},Df=(n,t)=>t.main[n.main]||null;function Nf(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=Q0(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(u=>u.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Uf=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var sa=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],ia=100,tg={choice:25,typed:40},$S=5,Of=100;function eg(){return{phase:0,hp:ia,retry:[],done:!1}}function ng(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(ia,n.hp+$S),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?tg.typed:tg.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<sa.length-1?(n.phase++,n.hp=ia,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var zf=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function JS(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new qn(n);return e.colorSpace=nn,e}function ig(){let n=new gn,t=[],e=(a,u)=>{let c=new Sn({color:a});return c.userData.base=new ue(a),c.userData.role=u,t.push(c),c},i=(a,u,c,p,f,d,m,_,x=n)=>{let y=new ze(new $e(a,u,c),e(p,f));return y.position.set(d,m,_),x.add(y),y},s=zf[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new ze(new $e(1.15,.72,.02),new Sn({map:JS(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let u=new gn;return u.position.set(a*1,1.9,.2),n.add(u),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,u).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,u),u});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function sg(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function rg(n,t){let e=zf[Math.min(zf.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function jS(){return new Map}function og(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function kf(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function KS(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function ag(n){let t=jS();for(let e in n||{})t.set(e,KS(n[e]));return t}var Gc=16;var GT=18;var Ji=32;function lg(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var tn=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],St=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function QS(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function jt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Ni(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let u=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(u)*s*(.6+t()*.5),i+Math.sin(u)*s*(.6+t()*.5)])}jt(n,o)}var t1=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail","scaffold"]);function e1(n,t){let e=tn(t.color),i=lg(QS(t.block+t.face)),s=Ji;if(t1.has(t.pattern)){n1(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=St(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?tn(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=St(e,1.12);for(let f=0;f<4;f++)Ni(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=St(e,.96);for(let f=0;f<4;f++)Ni(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let f=tn(t.top);n.fillStyle=St(f);let d=[[0,0],[s,0]];for(let m=s;m>=0;m-=4)d.push([m,8+Math.round(i()*5)]);jt(n,d)}if(o==="stone"||o==="bedrock")for(let f=0;f<5;f++)n.fillStyle=St(e,i()<.5?.9:1.08),Ni(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let f=0;f<4;f++)n.fillStyle=St(e,.92),Ni(n,i,i()*s,i()*s,5);n.fillStyle=St(a);for(let f=0;f<5;f++)Ni(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let f=0;f<26;f++)n.fillStyle=St(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let f=3;f<s;f+=7)n.fillStyle=St(e,.82),n.fillRect(f,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=St(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=St(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let f=0;f<9;f++)n.fillStyle=St(e,i()<.5?.78:1.15),Ni(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let f=7;f<s;f+=8)n.fillStyle=St(e,.78),n.fillRect(0,f,s,1);n.fillStyle=St(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=St(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=St(e,.7),n.fillRect(6,10,7,14),n.fillStyle=St([185,182,174]),jt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=St(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",jt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=St(e,1.18,.72);for(let f=6;f<s;f+=10)n.fillRect(4+Math.floor(i()*10),f,10,2)}if(o==="gold"&&(n.fillStyle=St(e,1.15),jt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=St(e,.9),jt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=St(tn("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=St(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=St(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=St(tn("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=St(tn("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=St(a),n.fillRect(14,0,4,4)):(n.fillStyle=St(tn(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=St(a),n.fillRect(0,0,s,10),n.fillStyle=St(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=St(tn("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=St(a),n.fillRect(0,0,9,14))),o==="wool")for(let f=0;f<7;f++)n.fillStyle=St(e,i()<.5?.94:1.04),Ni(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=St(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=St(a,1.3),jt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=St(tn("#EFEBDD"),1,.8),jt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=St(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let f=8;f<s;f+=9)n.fillStyle=St(e,.9),n.fillRect(0,f,s,2);if(o==="cactus")if(t.face==="side"){for(let f=4;f<s;f+=8)n.fillStyle=St(e,.82),n.fillRect(f,0,2,s);n.fillStyle=St(tn("#EFEBDD"),1,.7);for(let f=0;f<6;f++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=St(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=St(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=St(e,1.25);for(let f of[9,24])n.fillRect(0,f,s,3)}else n.fillStyle=St(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="snowblock")for(let f=0;f<5;f++)n.fillStyle=St(e,i()<.5?.94:1.03),Ni(n,i,i()*s,i()*s,4+i()*5);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",jt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",jt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=St(e,1.1),jt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=St(e,.92),jt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=St(e,.78);for(let f=0;f<s;f+=8){n.fillRect(0,f+7,s,1);let d=f/8%2?0:8;for(let m=d;m<s;m+=16)n.fillRect(m,f,1,8)}}if(o==="mossy"){n.fillStyle=St(a);for(let f=0;f<6;f++)Ni(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=St(e,.6),jt(n,[[4,2],[12,14],[10,15],[3,4]]),jt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=St(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=St(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=St(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=St(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=St(e,1.08),jt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=St(tn("#D9CBB5"));for(let f=0;f<s;f+=8){n.fillRect(0,f+6,s,2);let d=f/8%2?0:8;for(let m=d;m<s;m+=16)n.fillRect(m,f,2,6)}}if(o==="checker"&&(n.fillStyle=St(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let f=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let m=3;for(;m<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=f[Math.floor(i()*f.length)],n.fillRect(m,d+Math.floor(i()*3),_,11),m+=_+1}}n.fillStyle=St(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let f=7;f<s;f+=8)n.fillStyle=St(e,.8),n.fillRect(0,f,s,1);if(o==="hay")if(t.face==="side"){for(let f=3;f<s;f+=5)n.fillStyle=St(e,.88),n.fillRect(f,0,1,s);n.fillStyle=St(tn("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=St(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let f=5;f<s;f+=6)n.fillStyle=St(e,.85),n.fillRect(f,0,1,s);n.fillStyle=St(tn("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=St(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=St(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=St(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),jt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let f=7;f<s;f+=8)n.fillStyle=St(e,.85),n.fillRect(f,0,1,s);n.fillStyle=St(tn("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=St(tn("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=St(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=St(e),n.fillRect(0,0,s,s),n.fillStyle=St(tn("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let f=7;f<s;f+=8)n.fillStyle=St(e,.85),n.fillRect(0,f,s,1);t.face==="side"&&(n.fillStyle=St(a),n.fillRect(0,11,s,3),n.fillStyle=St(tn("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let f=3;f<s;f+=6)n.fillStyle=St(e,.72),n.fillRect(0,f,s,2);if(o==="furnace"){for(let f=0;f<4;f++)n.fillStyle=St(e,i()<.5?.9:1.08),Ni(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=St(a),n.fillRect(8,15,s-16,11),n.fillStyle=St(tn("#E0352B"),1,.85),jt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=St(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=St(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=St(a),jt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let u=n.getImageData(0,0,s,s),c=u.data;for(let f=0;f<c.length;f+=4){let d=1+(i()-.5)*.09;c[f]=Math.min(255,c[f]*d),c[f+1]=Math.min(255,c[f+1]*d),c[f+2]=Math.min(255,c[f+2]*d)}n.putImageData(u,0,0);let p=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=p,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function cg(n){let t=document.createElement("canvas");t.width=t.height=Ji*Gc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Ji;let a=o.getContext("2d",{willReadFrequently:!0});e1(a,s),e.drawImage(o,r%Gc*Ji,Math.floor(r/Gc)*Ji),i[r]=o}),{canvas:t,tileCanvas:i}}function hg(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="pole"){r.drawImage(t.tileCanvas[i.tile.side],14,2,20,44),e[i.id]=s.toDataURL();continue}if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",jt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",jt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Ji,u=(c,p,f,d,m,_,x,y)=>{r.setTransform(p*a,f*a,d*a,m*a,_,x),r.drawImage(o[c],0,0),y&&(r.fillStyle=`rgba(20,24,20,${y})`,r.fillRect(0,0,Ji,Ji))};u(i.tile.top,20,10,-20,10,24,4,0),u(i.tile.side,20,10,0,22,4,14,.12),u(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,u="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,jt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",jt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,jt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",jt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,jt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",jt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,jt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,p]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,p,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)jt(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),jt(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,jt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,jt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,jt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,jt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),jt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",jt(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),jt(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",jt(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,jt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",jt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=u,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,jt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",jt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else if(o==="saddle")r.fillStyle=a,jt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3);else if(o==="paper"){r.fillStyle=a,jt(r,[[-13,-16],[11,-17],[14,15],[-12,16]]),r.fillStyle="rgba(20,24,20,.16)";for(let c=0;c<4;c++)r.fillRect(-8,-9+c*6,16,2)}else o==="book"?(r.fillStyle=a,jt(r,[[-15,-15],[13,-17],[15,15],[-13,17]]),r.fillStyle="#EFEBDD",jt(r,[[10,-14],[14,-14],[15,13],[11,14]]),r.fillStyle="#E1C04F",jt(r,[[-8,-6],[6,-7],[6,-2],[-8,-1]])):o==="bow"?(r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.arc(-10,-10,24,-.15,Math.PI/2+.15),r.stroke(),r.strokeStyle="#EFEBDD",r.lineWidth=1.5,r.beginPath(),r.moveTo(13,-14),r.lineTo(-14,13),r.stroke()):o==="arrow"?(r.rotate(-Math.PI/4),r.fillStyle="#8C6640",r.fillRect(-1.5,-14,3,30),r.fillStyle=a,jt(r,[[0,-22],[6,-13],[-6,-13]]),r.fillStyle="#F4EFE2",jt(r,[[-1,10],[-7,18],[-1,16]]),jt(r,[[1,10],[7,18],[1,16]])):o==="meat"?(r.fillStyle=a,r.beginPath(),r.ellipse(-3,2,13,10,-.4,0,7),r.fill(),r.fillStyle="#EFEBDD",r.fillRect(7,-12,5,12),r.beginPath(),r.arc(11,-13,4,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.22)",r.beginPath(),r.ellipse(-7,-1,5,3,-.4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,jt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",jt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:u,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&jt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&jt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),jt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=u,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",jt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",jt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function ug(){let n=lg(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Ji;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,u=6+n()*20,c=n()*Math.PI;jt(r,[[a,u],[a+Math.cos(c)*9,u+Math.sin(c)*9],[a+Math.cos(c+.3)*6,u+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function n1(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?tn(t.accent):e,a=(u,c,p)=>{n.fillStyle=p,n.fillRect(u,s-c,2,c)};if(r==="flower"){a(15,18,St(e)),n.fillStyle=St(e,1.1),jt(n,[[16,26],[9,20],[15,22]]),jt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=St(o);for(let u=0;u<5;u++){let c=u/5*Math.PI*2;jt(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=St(tn("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let u=0;u<6;u++){let c=4+u*4+Math.floor(i()*2),p=14+Math.floor(i()*14);n.fillStyle=St(e,i()<.5?.9:1.1),jt(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-p]])}else if(r==="deadbush")n.strokeStyle=St(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=St(e),n.fillRect(14,18,4,14),n.fillStyle=St(o),jt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=St(tn("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=St(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=St(e,1.12);for(let u=3;u<s;u+=7)n.fillRect(5,u,s-10,3)}else if(r==="scaffold")n.fillStyle=St(e,.82),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),n.fillStyle=St(e),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillStyle=St(e,1.1),jt(n,[[3,s-6],[s-6,3],[s-3,6],[6,s-3]]);else if(r==="wheat"){let u=Number(t.block.split("_")[1])||0,c=[8,14,21,28][u];for(let p=0;p<5;p++){let f=5+p*5;n.fillStyle=St(e),n.fillRect(f,s-c,2,c),u===3&&(n.fillStyle=St(o),jt(n,[[f-2,s-c+9],[f+1,s-c-1],[f+4,s-c+9]]))}}else if(r==="rail"){let u=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[u];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let p=St(tn("#8C6640")),f=St(e),d=s*.33,m=s*.67;if(u==="ns"||u==="ew"){n.fillStyle=p;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=f,n.fillRect(d-1.5,0,3,s),n.fillRect(m-1.5,0,3,s),t.accent&&(n.fillStyle=St(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=p,n.lineWidth=3;for(let _=0;_<5;_++){let x=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(x)*(s-m-4),Math.sin(x)*(s-m-4)),n.lineTo(s+Math.cos(x)*(s-d+4),Math.sin(x)*(s-d+4)),n.stroke()}n.strokeStyle=f;for(let _ of[s-d,s-m])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=St(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var fg=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,dg=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function i1(n,t){let e=$i(n),i=$i(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,u=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,p=t<u?u-t:t>=u+16?t-(u+16-1):0;Math.max(c,p)<=14&&s.push([e+o,i+r])}return s}function mg(n){let t=new qn(n);t.magFilter=on,t.minFilter=on,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new K(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new wn({uniforms:e,vertexShader:fg,fragmentShader:dg}),s=new wn({uniforms:e,vertexShader:fg,fragmentShader:dg,transparent:!0,depthWrite:!1,side:Qn});return{opaque:i,trans:s,uniforms:e,tex:t}}function pg(n){let t=new ln;return t.setAttribute("position",new Qe(n.pos,3)),t.setAttribute("uv",new Qe(n.uv,2)),t.setAttribute("light",new Qe(n.light,1)),t.setAttribute("lt",new Qe(n.lt,2,!0)),t.setIndex(new Qe(n.index,1)),t.computeBoundingSphere(),t}var Wc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Li(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new ze(pg(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new ze(pg(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=$i(t),s=$i(e),r=g0(i,s,this.rd);for(let u of r){if(this.inflight>=this.maxInflight)break;let c=Li(u.cx,u.cz);if(this.chunks.has(c))continue;let p={cx:u.cx,cz:u.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,p),this.inflight++,this.worker.postMessage({type:"load",cx:u.cx,cz:u.cz,rev:p.meshRev})}let o=this.rd+1.5,a=[];for(let[u,c]of this.chunks){let p=c.cx-i,f=c.cz-s;if(p*p+f*f>o*o){for(let d of["o","t"])c[d]&&(this.scene.remove(c[d]),c[d].geometry.dispose());this.chunks.delete(u),a.push(u)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(u=>{let[c,p]=u.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(p-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(u=>u.state==="ready").length}ready(t,e){let i=this.chunks.get(Li($i(t),$i(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=of(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Li(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=of(t,e,i);if(!r)return!1;let o=Li(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,og(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let u=Math.floor(t),c=Math.floor(i);for(let[p,f]of i1(u,c))this.dirtyMesh.add(Li(p,f));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Bf="hw_world",ra=null;function gg(n){n!==Bf&&(Bf=n,ra=null)}function xg(){return ra||(ra=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Bf,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),ra)}function Vf(n,t){return xg().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Hf=n=>Vf("readonly",t=>t.get(n)),Xc=n=>Vf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Gf(n){let t=await xg();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Wf(n){let t={};for(let e of n){let i=await Hf(e);i!==void 0&&(t[e]=i)}await Vf("readwrite",e=>e.clear()),await Xc(t)}function C(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var ji=n=>document.querySelector(n);function r1(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function _g(n,t,e,i,s,r){if(!t||!t.id)return null;let o=r1(t,e,i,s,r),a=n.get("ke_log"),u=Array.isArray(a)?a:[];if(u.push(o),n.set("ke_log",u),t.local)return o;if(e){let f=n.get("ke_correct"),d=Array.isArray(f)?f:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let c=n.get("ke_mistakes")||{},p=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?p&&(p.c++,p.u=s,p.c>=3&&(c[t.id]={d:1,w:p.w,t:p.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||p)&&n.set("ke_mistakes",c),o}var yg=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function vg(n,t=Date.now()){let e=yg(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&yg(new Date(s.t))===e&&i++;return i}function bg(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],u=[];for(let m of n)e[m]&&!e[m].d?o.push(m):t.has(m)||i.has(m)?u.push(m):a.push(m);let c=m=>{for(let _=m.length-1;_>0;_--){let x=Math.floor(r()*(_+1));[m[_],m[x]]=[m[x],m[_]]}return m};[o,a,u].forEach(c);let p=[],f=(m,_)=>{for(;_-- >0&&m.length;)p.push(m.pop())},d=Math.round(s*.7);return f(o,Math.ceil(d/2)),f(a,d-p.length),f(o,d-p.length),f(u,s-p.length),f(a,s-p.length),f(o,s-p.length),p}var o1="../../",a1=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],qf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],qc=null,Yf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),Xf=null,Sg=n=>{Xf=n},wg=()=>vg(Yf().get("ke_log"));function oa(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{_g(Yf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(Xf)try{Xf(t,n)}catch{}}function $f(n,t,e){try{let i=Yf(),s=i.get("ke_learned")||{},r=new Set;for(let c in s)s[c]&&s[c].at&&(n.sets&&n.sets[c]||[]).forEach(p=>r.add(p));let o=n.list(t).filter(c=>c.type!=="speak").map(c=>c.id),a=bg(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),u=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(u.length)return u}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function l1(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Zf(){return qc||(qc=(async()=>{for(let t of a1)await l1(o1+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw qc=null,n})),qc}async function Ag(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=C("div",{class:"panel quiz"});n.append(r),r.append(C("div",{class:"p-head"},C("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),C("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await Zf()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,u=[],c=0,p=0,f=0;function d(){n.hidden=!0,n.innerHTML="",i&&i()}function m(){u=$f(o,{modules:["words","phrases","grammar","patterns"],types:qf,lv:1},s),u.length||(u=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),c=0,p=0,f=0,_()}function _(){r.innerHTML="";let g=u[c],A=a.isTyped(g);n._q=g;let F=C("div",{class:"fb"}),E=C("div",{class:"q-body"});r.append(C("div",{class:"p-head"},C("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",C("small",{},`\u7B2C ${c+1} / ${u.length} \u984C`)),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),C("div",{class:"q-type"},(a.TYPES[g.type]||"\u984C\u76EE")+(A?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),C("div",{class:"q-prompt"+(g.en?" en":"")},g.prompt),g.sub?C("div",{class:"q-sub"},g.sub):null,E,F);let I=!1,D=(L,S)=>{if(I)return;I=!0,oa(g,L,S);let R=W0(L,A);e&&e(L),L&&(f++,p+=R,t&&t(R)),F.className="fb "+(L?"ok":"bad"),F.append(C("div",{},L?`\u7B54\u5C0D\u4E86\uFF01 +${R} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",L?null:C("b",{class:"en"},g.answer)),!L&&g.why?C("div",{class:"why"},g.why):null,C("button",{class:"btn",onclick:x},c+1<u.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(g.input==="type"){let L=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),S=()=>{I||!L.value.trim()||D(o.check(g,L.value).ok,L.value)};L.addEventListener("keydown",R=>{R.stopPropagation(),R.key==="Enter"&&S()}),E.append(C("div",{class:"typerow"},L,C("button",{class:"btn",onclick:S},"\u9001\u51FA"))),setTimeout(()=>L.focus(),50)}else{let L=C("div",{class:"opts"});(g.options||[]).forEach(S=>L.append(C("button",{class:"opt"+(/[a-z]/i.test(S)?" en":""),onclick:R=>{if(I)return;let U=o.check(g,S).ok;R.currentTarget.classList.add(U?"ok":"bad"),D(U,S)}},S))),E.append(L)}}function x(){c++,c<u.length?_():y()}function y(){r.innerHTML="",r.append(C("div",{class:"p-head"},C("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),C("p",{class:"big"},`\u7B54\u5C0D ${f} / ${u.length} \u984C\uFF0C\u62FF\u5230 ${p} \u91D1\u5E63`),C("div",{class:"row"},C("button",{class:"btn",onclick:m},"\u518D\u4F86\u4E00\u56DE"),C("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}m()}var Mg=new Set(qf);async function aa(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:u=null}){n.innerHTML="",n.hidden=!1;let c=C("div",{class:"panel quiz"});n.append(c),c.append(C("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let p;try{p=await Zf()}catch{c.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let f=window.KE,d=u,m=i?new Set(i.filter(E=>Mg.has(E))):Mg;if(!d)for(let E of t){let I=p.byId[E];if(I&&m.has(I.type)){d=p.get(E);break}}let _=!!d&&!u;d||(d=$f(p,{modules:s||["words","phrases","grammar","patterns"],types:i?[...m]:qf,lv:1},1)[0]||p.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let x=f.isTyped(d);n._q=d,c.innerHTML="";let y=C("div",{class:"fb"}),g=C("div",{class:"q-body"});c.append(C("div",{class:"p-head"},C("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),C("div",{class:"q-type"},u?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(_?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":f.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),C("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?C("div",{class:"q-sub"},d.sub):null,g,y);let A=!1,F=(E,I)=>{A||(A=!0,oa(d,E,I,a),y.className="fb "+(E?"ok":"bad"),y.append(C("div",{},E?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",E?null:C("b",{class:"en"},d.answer)),!E&&d.why?C("div",{class:"why"},d.why):null,C("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(E,x,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let E=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),I=()=>{A||!E.value.trim()||F(p.check(d,E.value).ok,E.value)};E.addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&I()}),g.append(C("div",{class:"typerow"},E,C("button",{class:"btn",onclick:I},"\u9001\u51FA"))),setTimeout(()=>E.focus(),50)}else{let E=C("div",{class:"opts"});(d.options||[]).forEach(I=>E.append(C("button",{class:"opt"+(/[a-z]/i.test(I)?" en":""),onclick:D=>{if(A)return;let L=p.check(d,I).ok;D.currentTarget.classList.add(L?"ok":"bad"),F(L,I)}},I))),g.append(E)}}async function Eg(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=C("div",{class:"panel quiz"});n.append(i),i.append(C("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Zf()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=$f(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,u=0,c=()=>{i.innerHTML="";let p=o[a];n._q=p;let f=C("div",{class:"fb"}),d=C("div",{class:"q-body"});i.append(C("div",{class:"p-head"},C("h2",{},t.title_zh+" ",C("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),C("div",{class:"q-type"},r.TYPES[p.type]||"\u984C\u76EE"),C("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?C("div",{class:"q-sub"},p.sub):null,d,f);let m=!1,_=(x,y)=>{m||(m=!0,oa(p,x,y),x&&u++,f.className="fb "+(x?"ok":"bad"),f.append(C("div",{},x?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",x?null:C("b",{class:"en"},p.answer)),!x&&p.why?C("div",{class:"why"},p.why):null,C("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(u,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(p.input==="type"){let x=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),y=()=>{m||!x.value.trim()||_(s.check(p,x.value).ok,x.value)};x.addEventListener("keydown",g=>{g.stopPropagation(),g.key==="Enter"&&y()}),d.append(C("div",{class:"typerow"},x,C("button",{class:"btn",onclick:y},"\u9001\u51FA"))),setTimeout(()=>x.focus(),50)}else{let x=C("div",{class:"opts"});(p.options||[]).forEach(y=>x.append(C("button",{class:"opt"+(/[a-z]/i.test(y)?" en":""),onclick:g=>{if(m)return;let A=s.check(p,y).ok;g.currentTarget.classList.add(A?"ok":"bad"),_(A,y)}},y))),d.append(x)}};c()}function Tg(n,t,e){let[i,s]=String(n).split(",").map(Number),r=p=>Nn(4242,i|0,t*7+p,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,u=Math.floor(r(2)*a.length),c=(u+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[u],a[c]]}}function Cg(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Vr(n,e.blueprint)?{ok:!1,reason:"owned"}:(Ws(n,e.price),n.owned.push(e.blueprint),{ok:!0}):ea(t,e.give,e.count,i)?(Ws(n,e.price),yn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Jf=(n,t,e)=>!!(n&&n[t.id]===e);function Rg(n,t,e,i,s,r,o=()=>64){if(Jf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Un(s,t.reward.coins|0);let a={};for(let u in t.reward.items||{}){let c=yn(r,u,t.reward.items[u],o);c&&(a[u]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Cs(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var jf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Yc=n=>n==="creative"?"creative":"survival",Ig=n=>jf[Yc(n)].db;function Pg(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Lg(n){let t=Yc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Dg(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Ng=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var ad={};Gn(ad,{BREED_CAP:()=>rd,LOVE_MS:()=>Fg,MAX_STAGE:()=>f1,STAGE_SECONDS:()=>u1,armorMax:()=>Ug,armorPoints:()=>la,canTill:()=>Qf,eat:()=>sd,equip:()=>d1,findMate:()=>od,harvest:()=>td,nearWater:()=>ed,reduceDamage:()=>id,stageAt:()=>Kf,wearArmor:()=>nd});var u1=60,f1=3;function Kf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var Qf=(n,t)=>(n==="grass"||n==="dirt")&&t;function td(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function ed(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let u of[0,-1])if(t(n(e+a,i+u,s+o)))return!0;return!1}function la(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var Ug=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function nd(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?Ug(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var id=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function d1(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function sd(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var Fg=3e4,rd=12;function od(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<Fg&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var ud={};Gn(ud,{apply:()=>Jc,duck:()=>Rs,muted:()=>ca,rainLevel:()=>hd,scene:()=>cd,setVolume:()=>jc,sfx:()=>Ze,state:()=>p1,toggleMute:()=>ld,unlock:()=>Zc});var qe=null,Xs=null,$c=null,Hr=null,Jn=()=>window.HIAudio||null,zg=()=>Jn()?Jn().get():{muted:!1,music:.35,sfx:.7};function Zc(){try{Jn()&&Jn().unlock()}catch{}if(!qe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;qe=new n,Xs=qe.createGain(),Xs.connect(qe.destination),$c=qe.createBuffer(1,qe.sampleRate,qe.sampleRate);let t=$c.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}qe.state==="suspended"&&qe.resume(),Jc()}function Jc(){if(Xs){let n=zg();Xs.gain.setTargetAtTime(n.muted?0:n.sfx,qe.currentTime,.03)}}var ca=()=>zg().muted;function ld(){return Jn()&&Jn().toggle(),Jc(),ca()}function jc(n){Jn()&&Jn().set(n),Jc()}function cd(n){try{Jn()&&Jn().scene(n)}catch{}}function Rs(n){let t=Jn();t&&(n&&Rs.id==null?Rs.id=t.duckStart():!n&&Rs.id!=null&&(t.duckEnd(Rs.id),Rs.id=null))}function kg(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function ei(n,t,e,i,s,r,o){let a=qe.createOscillator(),u=qe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),kg(u,e,i,s,r),a.connect(u),u.connect(Xs),a.start(e),a.stop(e+i+r+.05)}function Is(n,t,e,i,s,r=1){let o=qe.createBufferSource(),a=qe.createBiquadFilter(),u=qe.createGain();o.buffer=$c,a.type=n,a.frequency.value=t,a.Q.value=r,kg(u,e,.004,i,s),o.connect(a),a.connect(u),u.connect(Xs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Og={wood:(n,t)=>{ei("sine",190*t,n,.003,.16,.12,95*t),Is("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Is("highpass",1800*t,n,.1,.06),ei("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Is("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{ei("sine",1900*t,n,.002,.08,.25,1500*t),Is("highpass",4200,n,.06,.12)},soft:(n,t)=>{Is("bandpass",850*t,n,.09,.1,.8)}};function Ze(n,t="soft"){if(!qe||ca())return;let e=qe.currentTime+.005,i=Og[t]||Og.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Is(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":ei("sine",880,e,.002,.07,.08,1320);break;case"chest":ei("triangle",160,e,.02,.07,.3,120),ei("sine",330,e+.12,.005,.05,.15);break;case"door":ei("sawtooth",120,e,.03,.04,.3,160),Is("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Is("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":ei("triangle",659,e,.005,.08,.15),ei("triangle",988,e+.1,.005,.08,.25);break;case"coin":ei("sine",1319,e,.002,.08,.08),ei("sine",1976,e+.07,.002,.08,.22);break;case"hurt":ei("triangle",300,e,.005,.1,.18,200);break;default:break}}function hd(n){if(qe){if(!Hr&&n>.01){let t=qe.createBufferSource(),e=qe.createBiquadFilter(),i=qe.createBiquadFilter(),s=qe.createGain();t.buffer=$c,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Xs),t.start(),Hr={s:t,g:s}}Hr&&Hr.g.gain.setTargetAtTime(.06*n,qe.currentTime,.4)}}var p1=()=>({ctx:qe?qe.state:"none",hi:Jn()?Jn().state():null,rain:Hr?+Hr.g.gain.value.toFixed(3):0});var xd={};Gn(xd,{HI_SCENE:()=>dd,createWeather:()=>pd,precipFor:()=>gd,sceneFor:()=>fd,soundOf:()=>Gr,stepWeather:()=>md});function Gr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function fd({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var dd={calm:"hub",night:"night",cave:"cave"};function pd(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function md(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function gd(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"||n==="snowfield"?"snow":"rain"}var m1=[1,2,4,6,8];function Kc(n,t){if(t&&(t.type==="rod"||t.type==="bow")&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/m1[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Wr(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function Bg(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Sd={};Gn(Sd,{collect:()=>bd,createFurnace:()=>yd,dismantle:()=>Md,start:()=>_d,tick:()=>vd});function yd(){return{fuel:0,jobs:[],done:{}}}function _d(n,t,e,i=4){if(Zn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Zn(t,"coal")<1)return{ok:!1,reason:"fuel"};Gs(t,"coal",1),n.fuel+=i}return Gs(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function vd(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function bd(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=yn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Md(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Id={};Gn(Id,{MAX_HP:()=>ha,REGEN_EVERY:()=>x1,SAFE_FALL:()=>g1,createHealth:()=>wd,damage:()=>Ed,fallDamage:()=>Ad,hearts:()=>Rd,regen:()=>Td,respawnPoint:()=>Cd});var ha=20,g1=4,x1=4;function wd(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Ad(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Ed(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Td(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Cd(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Rd(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Qc={animal:8,quiz:4};function Vg(){return{list:[],nextId:1}}var ua=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Hg(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Gg(n,t){return n<.2&&!t}function Wg(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function Xg(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.held>0){n.held-=e,n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-r,-o);return}if(n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let u=n.home.x-n.p.x,c=n.home.z-n.p.z,p=Math.hypot(u,c);if(p>10){n.yaw=Math.atan2(-u,-c),n.v.x=u/p*s.speed,n.v.z=c/p*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let u=a>1.6?s.speed:0;n.v.x=r/(a||1)*u,n.v.z=o/(a||1)*u;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function qg(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null,meat:n.def.meat?{id:n.def.meat,n:1}:null}}var Yg=(n,t)=>n?(t?2:1)+1:0;function Xr(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],u=[t.x,t.y,t.z],c=0,p=1/0;for(let f=0;f<3;f++){if(Math.abs(u[f])<1e-9){if(a[f]<r[f]||a[f]>o[f])return null;continue}let d=(r[f]-a[f])/u[f],m=(o[f]-a[f])/u[f];if(d>m&&([d,m]=[m,d]),c=Math.max(c,d),p=Math.min(p,m),c>p)return null}return c}function $g(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var Zg=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Jg(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function jg(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),u={};Un(i,o);for(let c in a){let p=yn(e,c,a[c],s);p&&(u[c]=p)}return{ok:!0,coins:o,items:a,leftovers:u,name_zh:r.name_zh}}function Kg(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Pd(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function Qg(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Pd(n[e].map,n,t).ok?n[e]:null}var Ud={};Gn(Ud,{BOOST:()=>sx,CHARGE_T:()=>ix,COOLDOWN:()=>Ld,FULL:()=>th,GRAV:()=>ex,LIFE:()=>nx,SPEED:()=>tx,chargeOf:()=>eh,shoot:()=>Dd,step:()=>Nd});var tx=26,ex=9,nx=2.5,Ld=.45,ix=1,sx=14,th=.95,eh=n=>Math.max(0,Math.min(1,(n-.12)/(ix-.12)));function Dd(n,t,e=0){let i=Math.hypot(t.x,t.y,t.z)||1,s=Math.max(0,Math.min(1,e||0)),r=tx+sx*s;return{p:{x:n.x,y:n.y,z:n.z},v:{x:t.x/i*r,y:t.y/i*r+1,z:t.z/i*r},age:0,power:s>=th?2:1}}function Nd(n,t,e,i){n.age+=t,n.v.y-=ex*t;let s=n.v.x*t,r=n.v.y*t,o=n.v.z*t,a=Math.hypot(s,r,o)||1e-6,u={x:s/a,y:r/a,z:o/a},c=null,p=a;for(let f of i){let d=Xr(n.p,u,f.p,f.w,f.h);d!=null&&d<=p&&(p=d,c=f)}if(c)return{hit:"mob",target:c.ref};for(let f=1;f<=4;f++){let d=n.p.x+s*f/4,m=n.p.y+r*f/4,_=n.p.z+o*f/4;if(e(Math.floor(d),Math.floor(m),Math.floor(_)))return n.p={x:n.p.x+s*(f-1)/4,y:n.p.y+r*(f-1)/4,z:n.p.z+o*(f-1)/4},{hit:"block"}}return n.p.x+=s,n.p.y+=r,n.p.z+=o,n.age>nx?{hit:"gone"}:null}var Hd={};Gn(Hd,{FOLLOW:()=>rx,GUARD:()=>ox,MAX:()=>qs,TELEPORT:()=>Fd,feed:()=>Od,foodsOf:()=>nh,guardTarget:()=>kd,isPet:()=>Ys,petName:()=>fa,serialize:()=>Bd,steer:()=>zd,valid:()=>Vd});var fa=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var qs=4,rx=2.5,Fd=20,ox=10,Ys=n=>!!(n&&n.def&&n.def.pet),nh=n=>[].concat(n.food||[]);function Od(n,t,e){if(!Ys(n)||n.tame||!nh(n.def).includes(t))return{ok:!1};let i=n.def.tameNeed||2;return n.fed=(n.fed||0)+1,n.fed<i?{ok:!0,tamed:!1,fed:n.fed,need:i}:e>=qs?(n.fed=i-1,{ok:!0,tamed:!1,full:!0,fed:n.fed,need:i}):(n.tame=!0,n.sit=!1,{ok:!0,tamed:!0,fed:n.fed,need:i})}function zd(n,t,e,i){if(n.t+=e,n.sit){n.v.x=0,n.v.z=0;return}let s=i||t,r=s.x-n.p.x,o=s.z-n.p.z,a=Math.hypot(r,o);if(a>(i?1.1:rx)){let c=n.def.speed*(a>6?3:1.6);n.yaw=Math.atan2(-r,-o),n.v.x=r/a*c,n.v.z=o/a*c}else n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-(t.x-n.p.x),-(t.z-n.p.z))}function kd(n,t){let e=null,i=ox;for(let s of t){if(s.kind!=="quiz"||s.gone)continue;let r=Math.hypot(s.p.x-n.p.x,s.p.z-n.p.z);r<i&&(i=r,e=s)}return e}var Bd=n=>n.filter(t=>Ys(t)&&t.tame&&!t.gone).slice(0,qs).map(t=>Object.assign({type:t.type,x:t.p.x,y:t.p.y,z:t.p.z,sit:!!t.sit},t.name?{name:t.name}:null)),Vd=n=>(Array.isArray(n)?n:[]).filter(t=>t&&typeof t.type=="string"&&[t.x,t.y,t.z].every(Number.isFinite)).slice(0,qs).map(t=>{let e=fa(t.name),i={type:t.type,x:t.x,y:t.y,z:t.z,sit:!!t.sit};return e&&(i.name=e),i});var _i=["easy","mid","hard"],ih={easy:"\u7B2C 1 \u7D1A\u30FB\u7C21\u55AE",mid:"\u7B2C 2 \u7D1A\u30FB\u4E2D\u7B49",hard:"\u7B2C 3 \u7D1A\u30FB\u6311\u6230"},sh=3,qr=n=>_i.includes(n&&n.lv)?n.lv:"mid";function da(n,t){let e=new Set([_i[0]]);for(let i=1;i<_i.length;i++){let s=n.filter(o=>qr(o)===_i[i-1]&&t(o)).length,r=n.some(o=>qr(o)===_i[i]&&t(o));(e.has(_i[i-1])&&s>=sh||r)&&e.add(_i[i])}return e}function ax(n,t,e){let i=_i.indexOf(e);return i<=0||da(n,t).has(e)?0:Math.max(1,sh-n.filter(s=>qr(s)===_i[i-1]&&t(s)).length)}function Gd(n,t,e,i){return e["book:"+t.id]===i?0:(n.books||[]).filter(r=>e["book:"+r.id]===i).length<(n.dailyCap??1/0)?n.coins|0:0}var Yd={};Gn(Yd,{COLORS:()=>b1,check:()=>Xd,checkRule:()=>lx,describe:()=>Wd,doneToday:()=>ah,inArea:()=>rh,levelOpen:()=>oh,matches:()=>ma,offersFor:()=>qd});var b1=["red","orange","yellow","green","cyan","blue","purple","pink","white"],M1={rose:"red",marigold:"orange",dandelion:"yellow",hydrangea:"cyan",cornflower:"blue",lavender:"purple",peony:"pink"},pa=(n,...t)=>t.some(e=>n===e||n.startsWith(e+"_"));function Wd(n){let t=new Set,e=null,i=n.match(/_(red|orange|yellow|green|cyan|blue|purple|pink)$/);i&&(e=i[1]),n.startsWith("flower_")&&(t.add("flower"),e=M1[n.slice(7)]||null),(n==="wool"||n==="snow_block"||n==="checker_white")&&(e="white"),pa(n,"bricks","slab_bricks","stairs_bricks")&&(e="red"),pa(n,"glass")&&t.add("window"),(n==="door"||n==="door_open")&&t.add("door"),pa(n,"wool")&&t.add("wool"),pa(n,"carpet")&&t.add("carpet"),/^(planks|spruce_planks|log|spruce_log|(slab|stairs)_(spruce_)?planks.*|crate|barrel)$/.test(n)&&t.add("wood"),/^(stone|cobblestone|mossy_cobblestone|smooth_stone|polished_stone|chiseled_stone|.*stone_bricks|(slab|stairs)_(cobblestone|stone_bricks).*)$/.test(n)&&t.add("stone"),(["torch","lamp","lantern","paper_lantern","sea_lantern"].includes(n)||pa(n,"paper_lantern"))&&t.add("light");for(let s of["bed","chest","bookshelf","crafting_table","furnace","ladder","scaffold","hay_bale"])n===s&&t.add(s);return{kinds:t,color:e}}function ma(n,t){if(!t)return!0;let e=Wd(n),i=[].concat(t.kind||[]);return!(i.length&&!i.some(s=>e.kinds.has(s))||t.color&&!(t.color==="*"?e.color&&e.color!=="white":e.color===t.color)||t.ids&&!t.ids.includes(n)||t.not&&t.not.some(s=>e.kinds.has(s)))}function lx(n,t){let e=n.filter(u=>ma(u.id,t.a||t.m)),i=t.b?n.filter(u=>ma(u.id,t.b)):null,s=new Map(n.map(u=>[u.x+","+u.y+","+u.z,u])),r=(u,c,p)=>s.get(u+","+c+","+p),o=0,a=t.min??1;if(t.t==="count")o=e.length;else if(t.t==="line"){let u=new Set(e.map(c=>c.x+","+c.y+","+c.z));for(let c of e)for(let[p,f]of[[1,0],[0,1]]){if(u.has(c.x-p+","+c.y+","+(c.z-f)))continue;let d=0;for(;u.has(c.x+p*d+","+c.y+","+(c.z+f*d));)d++;o=Math.max(o,d)}}else if(t.t==="tall"){let u=new Set(e.map(p=>p.x+","+p.y+","+p.z)),c=new Set;for(let p of e){let f=0;for(;u.has(p.x+","+(p.y+f)+","+p.z);)f++;f>=t.h&&c.add(p.x+","+p.z)}o=c.size}else if(t.t==="near"){let u=t.d??1;o=e.filter(c=>i.some(p=>p!==c&&Math.abs(c.x-p.x)<=u&&Math.abs(c.z-p.z)<=u&&Math.abs(c.y-p.y)<=1)).length}else if(t.t==="on")o=e.filter(u=>{let c=r(u.x,u.y-1,u.z);return c&&ma(c.id,t.b)}).length;else if(t.t==="top")o=e.filter(u=>{let c=0;for(let p=r(u.x,u.y-1,u.z);p&&ma(p.id,t.b);p=r(u.x,u.y-1-c,u.z))c++;return c>=t.h}).length;else if(t.t==="height")o=n.length?Math.max(...n.map(u=>u.y))-Math.min(...n.map(u=>u.y))+1:0;else if(t.t==="colors"){let u={};for(let c of e){let p=Wd(c.id).color;p&&(u[p]=(u[p]||0)+1)}o=Object.values(u).filter(c=>c>=(t.each||1)).length}return{ok:o>=a,have:o,need:a}}var Xd=(n,t)=>{let e=t.rules.map(i=>Object.assign({en:i.en},lx(n,i)));return{ok:e.every(i=>i.ok),res:e}},rh=(n,t,e,i,s)=>Math.abs(e-n.x)<=t.r&&Math.abs(s-n.z)<=t.r&&i>=n.y-t.down&&i<=n.y+t.up,oh=(n,t,e)=>t<=1||e>=(n.unlock||{})["lv"+t];function qd(n,t,e,i,s,r){let o=n.builds.filter(m=>oh(n,m.lv,s));if(!o.length)return[];let[a,u]=String(t).split(",").map(Number),c=Number(String(i).replace(/\D/g,""))%9973,p=m=>r(5151,(a|0)+c,e*13+m,u|0),f=Math.floor(p(1)*o.length),d=(f+1+Math.floor(p(2)*(o.length-1)))%o.length;return o.length>1?[o[f],o[d]]:[o[f]]}var ah=(n,t)=>n.buildDay&&n.buildDay.d===t?n.buildDay.n|0:0;var Ui={};function Yr(n){return Ui[n]||(Ui[n]=new Sn({color:n,transparent:!0}),Ui[n].userData.base=new ue(n)),Ui[n]}var ga=null;function S1(){if(ga)return ga;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),ga=new qn(n),ga.colorSpace=nn,ga}function cx(n,t){let e=new gn,i=n.colors,[s,r]=n.size,o=(u,c,p,f,d,m,_,x)=>{let y=new ze(new $e(u,c,p),x||Yr(f));return y.position.set(d,m,_),e.add(y),y},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let p=o(.2,.6,.22,i.leg,c,.6,0);p.geometry.translate(0,-.6/2,0),a.push(p)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let u=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Ui.__face||(Ui.__face=new Sn({map:S1(),transparent:!0}),Ui.__face.userData.base=new ue("#ffffff"));let c=[Yr(i.head),Yr(i.head),Yr(i.head),Yr(i.head),Yr(i.head),Ui.__face],p=new ze(new $e(s*.9,s*.8,s*.8),c);p.position.set(0,r*.72+s*.4,0),e.add(p),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else if(n.shape==="upright"){let c=r-.1-s*.5,p=s*.62;o(s,c,s*.8,i.body,0,.1+c/2,0),o(s*.62,c*.8,.02,i.patch,0,.1+c*.45,-s*.41);let f=o(p,p,p,i.head,0,.1+c+p/2,-.04);o(p*.7,p*.5,.02,i.patch,0,f.position.y-p*.05,f.position.z-p/2-.01);for(let d of[-p*.2,p*.2])o(.05,.06,.02,"#151714",d,f.position.y+p*.08,f.position.z-p/2-.02);o(.1,.06,.12,i.beak,0,f.position.y-p*.12,f.position.z-p/2-.06);for(let d of[-1,1]){let m=o(.06,c*.6,s*.4,i.body,d*(s/2+.03),.1+c*.55,0);m.rotation.z=d*.25}for(let d of[-s*.2,s*.2]){let m=o(.14,.1,.2,i.leg,d,.1,-.04);m.geometry.translate(0,-.1/2,0),a.push(m)}}else{let u=r<1&&n.id!=="chicken",c=n.id==="chicken"?.25:u?r*.35:.45,p=r-c-(n.id==="chicken"?.15:.25);o(s,p,n.id==="chicken"?s:s*1.35,i.body,0,c+p/2,0),i.patch&&o(s*.5,p*.55,.02+s*1.36,i.patch,s*.12,c+p*.55,0);let f=n.id==="chicken"?.3:u?.32:.45,d=o(f,f,f,i.head,0,c+p+f*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let y of[-f*.3,f*.3])o(f*.26,f*.3,f*.16,i.ear,y,d.position.y+f*.6,d.position.z);if(i.eye)for(let y of[-f*.24,f*.24])o(f*.24,f*.26,.02,i.eye,y,d.position.y+f*.05,d.position.z-f/2-.01);if(n.pet){let y=o(.08,.08,.32,i.body,0,c+p*.85,s*.68+.12);y.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+f/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-f/2-.05));let m=n.id==="chicken"?.06:.18,_=n.id==="chicken"?0:s*.45,x=s*.3;for(let[y,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-x,-_],[x,-_],[-x,_],[x,_]]){let A=o(m,c,m,i.leg,y,c/2,g);A.geometry.translate(0,-c/2,0),A.position.y=c,a.push(A)}}return e.userData.legs=a,e}function hx(n){for(let t in Ui){let e=Ui[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function lh(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var ch="333521a84e",uh=new URLSearchParams(location.search),E1=720,hh=5,fx={boat:-.85,minecart:-.6,horse:.75},dx=[[0,0,0,1,.1,1]],px=[[0,0,0,1,.5,1]],T1=[[0,0,0,1,1,1]],C1=[[.3,0,.3,.7,.7,.7]],R1=20261008,$d=uh.get("test")==="1"||window.__HW_TEST__===!0,I1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:I1,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function En(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ni(n,t){try{localStorage.setItem(n,t)}catch{}}async function P1(){let n=Yc(En("hw_mode","survival")),t=Lg(n),e=!t.creative&&En("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=l=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(l)?l+"_s":l,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";gg(Ig(n));let[r,o,a,u,c,p,f,d,m,_]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json","data/books.json","data/builds.json"].map(l=>fetch(l,{cache:"no-cache"}).then(v=>v.json()))),x=p0(r),y=o.recipes||[],g=l=>x.maxStack(l),A={};try{let[l,v,M,w,P,z,Y,at,Q,mt,Pt,re,oe]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(de=>Hf(i(de))));A={meta:l,player:v,inv:M,coins:w,furnaces:P,claimed:z,quests:Y,chests:at,crops:Q,achv:mt,mapd:Pt,vehs:re,storyd:oe,chunks:await Gf(s)}}catch(l){console.warn("save unavailable",l)}let F=A.meta&&A.meta.seed||R1+jf[n].seedOffset,E=e==="shadow"?F+7777:F,I=e==="shadow"?wf(E,x):E0(F,x,c),D=ag(Object.fromEntries(Object.entries(A.chunks||{}).map(([l,v])=>[l.slice(s.length),v]))),L=A.inv?kc(A.inv):ta();t.creative&&!A.inv&&Ng.forEach((l,v)=>{x.get(l)&&(L.slots[v]={id:l,count:64})});let S=$0(A.coins),R=F0(A.achv),U=f.achievements||[],O=Pf(A.storyd);!A.storyd&&A.player&&Hc(O,d);let J=l=>l==="look"?h.lookAcc||0:l==="walk"?h.walkAcc||0:R.stats[l]||0,j=K0(),B=j0(S,{mode:En("hw_coin_source","local"),member:J0(window)}),et=new Oc(x,A.mapd),ht=wd(A.player&&A.player.hp!=null?A.player.hp:20);h.bed=A.player&&A.player.bed||null,h.horse=A.player&&A.player.horse||null,h.petsPending=Vd(A.player&&A.player.pets);let k=u.portals||[],st=Array.isArray(A.claimed)?A.claimed.slice():[],W=A.furnaces||{},$=A.quests||{},ot=Object.fromEntries(Object.entries(A.chests||{}).map(([l,v])=>[l,kc(v,27)])),Mt=A.crops||{};h.armor=A.player&&Array.isArray(A.player.armor)?A.player.armor.slice(0,4):[null,null,null,null],h.armorDur=A.player&&Array.isArray(A.player.armorDur)?A.player.armorDur.slice(0,4):[null,null,null,null];let wt=o.smelt||[],ie=o.fuelPerCoal||4;A.meta&&typeof A.meta.time=="number"&&(h.time=A.meta.time);let Ot=ji("#c"),Kt=new Ic({canvas:Ot,antialias:!1,powerPreference:"high-performance"}),Z={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:h.touch?1.5:1.25,np:500,grain:!0}};function q(){let l=Z[En("hw_gfx","high")]||Z.high;Kt.setPixelRatio(Math.min(window.devicePixelRatio||1,l.pr)),h.np=l.np;let v=document.getElementById("grain");v&&(v.hidden=!l.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[En("hw_btn","m")]||1),document.body.classList.toggle("lefty",En("hw_lefty","off")==="on"),h.invert=En("hw_invert","off")==="on"}q();let lt=new So,yt=new ue("#EFEBDD");lt.background=yt;let ct=new Mn(72,1,.08,200);ct.rotation.order="YXZ";let Lt=cg(x),Zt=hg(x,Lt),qt=mg(Lt.canvas),Dt=new Worker("assets/hw-worker.js?v="+ch),ft=new Wc({scene:lt,mats:qt,reg:x,worker:Dt,diffs:D,onDirty:l=>{h.dirty.add(l),(h.mapDirty||(h.mapDirty=new Set)).add(l)}}),Wt=Math.max(2,Math.min(6,parseInt(uh.get("rd")||En("hw_rd",h.touch?"3":"4"),10)||4));ft.setRenderDistance(Wt),ct.far=Wt*16+40,ct.updateProjectionMatrix();let Xt=await new Promise(l=>{let v=M=>{M.data.type==="ready"&&(Dt.removeEventListener("message",v),l(M.data.spawn))};Dt.addEventListener("message",v),Dt.postMessage({type:"init",seed:E,dim:e,blocks:r,structures:c,diffs:Object.fromEntries([...D].map(([M,w])=>[M,kf(w)]))})}),me=A.player&&A.player.dims&&A.player.dims[e];h.dimPos=A.player&&A.player.dims||{},A.player&&(e==="overworld"||me)?Object.assign(h,{p:me?{x:me.x,y:me.y,z:me.z}:{x:A.player.x,y:A.player.y,z:A.player.z},yaw:(me?me.yaw:A.player.yaw)||0,pitch:A.player.pitch||0,fly:!!A.player.fly&&!me,sel:A.player.sel|0}):(A.player&&(h.sel=A.player.sel|0),h.p={x:Xt.x,y:Xt.y,z:Xt.z},h.yaw=Math.atan2(-(Xt.stele.x+.5-Xt.x),-(Xt.stele.z+.5-Xt.z)),h.pitch=-.15);let we=new gs(new Tr(new $e(1.004,1.004,1.004)),new ms({color:1382164,transparent:!0,opacity:.45}));we.visible=!1,lt.add(we);let ce=ug().map(l=>new qn(l)),fe=new ze(new $e(1.01,1.01,1.01),new Sn({map:ce[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));fe.visible=!1,lt.add(fe);let H=(l,v)=>{let M=document.createElement("canvas");M.width=M.height=64;let w=M.getContext("2d");w.fillStyle=l,w.beginPath(),w.arc(32,32,28,0,7),w.fill(),v&&(w.globalCompositeOperation="destination-out",w.beginPath(),w.arc(44,26,24,0,7),w.fill());let P=new qn(M);return P.colorSpace=nn,P},Ge=new ps(new qi({map:H("#F2C46B"),depthWrite:!1,fog:!1})),Ae=new ps(new qi({map:H("#EDE6D0",!0),depthWrite:!1,fog:!1}));lt.add(Ge,Ae);let N=500,b=new Float32Array(N*6),X=new Float32Array(N*3),nt=new Float32Array(N*3);for(let l=0;l<N;l++)nt[l*3]=Math.random()*24-12,nt[l*3+1]=Math.random()*16,nt[l*3+2]=Math.random()*24-12;let dt=new ln;dt.setAttribute("position",new Qe(b,3));let Et=new gs(dt,new ms({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));Et.frustumCulled=!1,Et.visible=!1,lt.add(Et);let Rt=new ln;Rt.setAttribute("position",new Qe(X,3));let pt=new Co(Rt,new Er({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));pt.frustumCulled=!1,pt.visible=!1,lt.add(pt),h.weather=pd();let xt=0;function Ut(l,v,M){if(Et.visible=M==="rain",pt.visible=M==="snow",!!M){xt+=l;for(let w=0;w<h.np;w++){let P=nt[w*3],z=nt[w*3+2],Y=M==="rain"?16:1.6,at=v.y+10-(nt[w*3+1]+xt*Y)%16;if(M==="rain"){let Q=w*6;b[Q]=b[Q+3]=v.x+P,b[Q+2]=b[Q+5]=v.z+z,b[Q+1]=at,b[Q+4]=at-.45}else{let Q=w*3,mt=Math.sin(xt*.8+w)*.4;X[Q]=v.x+P+mt,X[Q+1]=at,X[Q+2]=v.z+z+mt*.6}}dt.setDrawRange(0,h.np*2),Rt.setDrawRange(0,h.np),(M==="rain"?dt:Rt).attributes.position.needsUpdate=!0}}let $t=new gn,Ct=(l,v,M,w,P,z,Y)=>{let at=new ze(new $e(l,v,M),new Sn({color:w}));return at.position.set(P,z,Y),at.userData.base=new ue(w),$t.add(at),at},Nt=Ct(.24,.75,.26,"#26302A",-.14,.375,0),te=Ct(.24,.75,.26,"#26302A",.14,.375,0);Ct(.56,.7,.3,"#2F5A34",0,1.1,0);let se=Ct(.18,.66,.2,"#E7CDA6",-.38,1.12,0),ge=Ct(.18,.66,.2,"#E7CDA6",.38,1.12,0);Ct(.46,.42,.42,"#E7CDA6",0,1.66,0),Ct(.5,.14,.46,"#151714",0,1.9,.02),Ct(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Nt,te,se,ge].forEach(l=>{l.geometry.translate(0,-l.geometry.parameters.height/2+.05,0),l.position.y+=l.geometry.parameters.height/2-.05}),$t.visible=!1,lt.add($t);let G={},Ft=l=>G[l]||(G[l]=(()=>{let v=new Image;v.src=Zt[l];let M=new xn(v);return M.colorSpace=nn,v.onload=()=>{M.needsUpdate=!0},new qi({map:M,depthWrite:!0,alphaTest:.3})})());function ut(l,v,M,w){let P=new ps(Ft(l));P.scale.set(.42,.42,1),lt.add(P),h.drops.push({id:l,s:P,p:{x:v,y:M,z:w},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let It=(l,v,M)=>{let w=ft.get(l,v,M);return x.flat.solid[w]===1&&(x.flat.boxes[w]||!0)},Vt=l=>x.get(l)&&x.get(l).kind==="block"?x.num(l):-1,bt=Vt("ice"),ne=Vt("snow_block"),Ht=Object.fromEntries((a.mobs||[]).map(l=>[l.id,l])),_e=Vg(),Te=new Map,Tn=0;function Cn(l,v){for(let M=61;M>0;M--){let w=ft.get(l,M,v);if(x.flat.solid[w])return ft.get(l,M+1,v)||ft.get(l,M+2,v)?null:{y:M+1,n:w};if(x.flat.liquid[w])return null}return null}function fh(l,v,M,w=7){for(let P=-w;P<=w;P++)for(let z=-w;z<=w;z++)for(let Y=-w;Y<=w;Y++)if(x.flat.lightEmit[ft.get(l+Y,v+P,M+z)])return!0;return!1}function Fi(l,v,M,w,P){let z=Hg(_e,l,{x:v+.5,y:M,z:w+.5}),Y=cx(l,P);return Te.set(z.id,Y),lt.add(Y),z}let $s=new Set;function Zs(){for(let l of I.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!($s.has(l.id)||!ft.ready(l.x,l.z))){$s.add(l.id);for(let v=0;v<l.villagers;v++){let M=Tg(l.id,v,p),w=l.x+(v%2?2:-2),P=l.z+(v-1),z=Cn(w,P),Y=Fi(Ht.villager,w,z?z.y:l.y+1,P,M.prof.color);Object.assign(Y,{home:{x:l.x,z:l.z},village:l.id,role:M,vi:v})}}}function dh(l){if(Ht.villager&&Zs(),e==="overworld"&&h.horse&&!h.horseMob&&Ht.horse&&ft.ready(h.horse.x,h.horse.z)){let Q=Fi(Ht.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));Q.tame=!0,h.horse.saddled&&rp(Q),h.horseMob=Q}if(e==="overworld")for(let Q=h.petsPending.length-1;Q>=0;Q--){let mt=h.petsPending[Q];if(!Ht[mt.type]||!ft.ready(mt.x,mt.z))continue;h.petsPending.splice(Q,1);let Pt=Fi(Ht[mt.type],Math.floor(mt.x),mt.y,Math.floor(mt.z));Object.assign(Pt,{tame:!0,sit:!!mt.sit,name:mt.name||""}),op(Pt),lp(Pt)}let v=Math.random()*Math.PI*2,M=14+Math.random()*14,w=Math.floor(h.p.x+Math.cos(v)*M),P=Math.floor(h.p.z+Math.sin(v)*M);if(!ft.ready(w,P))return;let z=Cn(w,P);if(!z)return;let Y=e==="overworld"?I.biomeOf(w,P):"",at=Y==="snowfield"&&(z.n===ne||z.n===bt);if(ua(_e,"animal")<Qc.animal&&(z.n===x.num("grass")||at)&&l>.3){let Q=Y,mt=Object.values(Ht).filter(de=>de.kind==="animal"&&(at?de.biome==="snowfield":!de.biome||de.biome===Q));if(!mt.length)return;let Pt=Math.random()*mt.reduce((de,Ce)=>de+(Ce.w??1),0),re=mt[0];for(let de of mt)if(Pt-=de.w??1,Pt<=0){re=de;break}let oe=1+Math.floor(Math.random()*3);for(let de=0;de<oe&&ua(_e,"animal")<Qc.animal;de++){let Ce=w+de%2,je=P+(de>>1),ae=Cn(Ce,je);ae&&Fi(re,Ce,ae.y,je)}}else t.quizMobs&&ua(_e,"quiz")<Qc.quiz&&Gg(l,fh(w,z.y,P))&&Ht.quizling&&Fi(e==="shadow"&&Ht.shadowling?Ht.shadowling:Ht.quizling,w,z.y,P)}function xa(l,v,M){Tn+=l,Tn>2.5&&h.started&&(Tn=0,dh(e==="shadow"?0:v));for(let w=_e.list.length-1;w>=0;w--){let P=_e.list[w],z=Te.get(P.id),Y=Math.hypot(P.p.x-h.p.x,P.p.z-h.p.z);if(P.riding){P.p.x=h.p.x,P.p.y=h.p.y,P.p.z=h.p.z,P.yaw=h.yaw,P.v.x=h.v.x,P.v.z=h.v.z,lh(z,P,M/1e3);continue}if(P.gone){P.goneT=(P.goneT||0)+l,lh(z,P,M/1e3),P.goneT>.35&&(lt.remove(z),Te.delete(P.id),_e.list.splice(w,1));continue}if(Wg(P,v,Y)){P.gone=!0,P.goneT=0,P.village&&$s.delete(P.village);continue}let at=P.tame&&Ys(P);if(at&&!P.sit&&Y>Fd&&!h.ride&&l&&(P.p={x:h.p.x,y:h.p.y+.2,z:h.p.z},P.v={x:0,y:0,z:0}),!ft.ready(P.p.x,P.p.z))continue;if(at){let mt=P.def.guard&&!P.sit?kd(P,_e.list):null;mt&&Math.hypot(mt.p.x-P.p.x,mt.p.z-P.p.z)<1.8&&(mt.held=.3,mt.guarded||(mt.guarded=!0,vt(`${P.def.name_zh}\u64CB\u4F4F\u932F\u984C\u602A\u4E86\uFF01\u5FEB\u53BB\u7B54\u984C\u6253\u6557\u5B83`))),zd(P,h.p,l,mt?mt.p:null)}else Xg(P,h.p,l,Math.random);P.v.y-=20*l,P.v.y<-20&&(P.v.y=-20);let Q=Dc(P.p,P.v,l,It,{w:Math.min(.9,P.def.size[0]),h:P.def.size[1],canStep:!0,grounded:P.onGround});P.onGround=Q.onGround,x.flat.liquid[ft.get(P.p.x,P.p.y+.3,P.p.z)]&&(P.v.y=2),lh(z,P,M/1e3),P.sit&&(z.position.y-=.12)}hx(.35+.65*v)}function Ki(l,v,M){let w,P;l==="screen"?(vi.set(v/innerWidth*2-1,-(M/innerHeight)*2+1,.5).unproject(ct).sub(ct.position).normalize(),w={x:ct.position.x,y:ct.position.y,z:ct.position.z},P={x:vi.x,y:vi.y,z:vi.z}):(w=jr(),P=va());let z=l==="screen"?Vn("screen",v,M):Vn("center"),Y=null,at=h.view==="tp"&&l==="screen"?8:4.5;z&&(at=Math.min(at,z.dist+.5));for(let Q of _e.list){if(Q.gone||Q.riding)continue;let mt=Xr(w,P,Q.p,Q.def.size[0],Q.def.size[1]);mt!=null&&mt<at&&(at=mt,Y=Q)}for(let Q of h.vehicles){if(h.ride&&h.ride.veh===Q)continue;let mt=Xr(w,P,Q.p,1.3,.9);mt!=null&&mt<at&&(at=mt,Y=Q.m)}if(h.boss){let Q=Xr(w,P,h.boss.p,3.6,3.6);Q!=null&&Q<at+1&&(at=Q,Y=h.boss.m)}return Y}function ii(){try{return $g(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Qi(l,v=0){if(l.kind==="vehicle"){vh(l.veh);return}if(l.kind==="boss"){Hx();return}if(l.type==="horse"){Cx(l);return}if(l.kind==="villager"){if(!t.trading){vt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}xx(l);return}if(Ys(l)){ap(l);return}if(l.kind==="animal"&&L.slots[h.sel]&&L.slots[h.sel].id===(l.def.food||"wheat")){t.consume&&kn(L,h.sel,1),At();let w=Date.now();l.love=w,vt(`${l.def.name_zh}\u5403\u4E86${x.name(l.def.food||"wheat")}\uFF0C\u597D\u958B\u5FC3`),pe("fed:"+l.type);let P=od(_e.list,l,w);if(P&&ua(_e,"animal")<rd){let z=Fi(l.def,Math.floor((l.p.x+P.p.x)/2),Math.floor(l.p.y),Math.floor((l.p.z+P.p.z)/2));Te.get(z.id).scale.setScalar(.65),l.love=0,P.love=0,vt(`\u751F\u4E86\u4E00\u96BB\u5C0F${l.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,pe("bred")}else P&&vt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(l.kind==="animal"&&l.def.noHit){vt(`${l.def.name_zh}\u5728\u6162\u6162\u5403${x.name(l.def.food||"wheat")}\uFF0C\u4E0D\u8981\u5435\u7260\u3002\u62FF${x.name(l.def.food||"wheat")}\u9935\u7260\u770B\u770B`);return}if(l.kind==="animal"){let w=L.slots[h.sel],P=!v&&!!(w&&x.toolOf(w.id)&&x.toolOf(w.id).type==="sword"),z=qg(l,P||v>=2,Math.random);if(l.v.y=4,l.v.x+=(l.p.x-h.p.x)*1.5,l.v.z+=(l.p.z-h.p.z)*1.5,P){let Y=Wr(L,h.sel,x);Y.broke&&vt(`\u4F60\u7684${x.name(Y.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),At()}if(z&&z.drops)for(let Y=0;Y<z.drops.n;Y++)ut(z.drops.id,l.p.x,l.p.y+.6,l.p.z);z&&z.meat&&ut(z.meat.id,l.p.x,l.p.y+.6,l.p.z);return}if(l.busy)return;l.busy=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=ii().slice(0,30).sort(()=>Math.random()-.5);aa(gt.ov,{ids:M,onDone:(w,P)=>{if(h.overlay=null,l.busy=!1,w&&l.def.tough&&!l.hurt){l.hurt=!0,vt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(w){let z=Yg(!0,P)+(l.def.tough?2:0);Un(S,z),rt(),l.gone=!0,l.goneT=0,vt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${z} \u91D1\u5E63`),h.dirtyMeta=!0,en(),h.stats.quizWins=(h.stats.quizWins||0)+1,pe("quiz_wins")}else if(w===!1){let z=h.p.x-l.p.x,Y=h.p.z-l.p.z,at=Math.hypot(z,Y)||1;h.v.x=z/at*7,h.v.z=Y/at*7,h.v.y=4.5,l.p.x-=z/at*1.5,l.p.z-=Y/at*1.5,vt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let jn=(l,v,M)=>ft.get(l,v,M),ts=(l,v,M)=>{let w=x.get(ft.get(l,v,M));return w&&w.rail?{shape:w.rail,powered:!!w.powered}:null},gt=L1();function vt(l){for(;gt.toasts.children.length>3;)gt.toasts.firstChild.remove();let v=C("div",{class:"toast"},l);gt.toasts.append(v),setTimeout(()=>v.remove(),2200)}function Js(l){let v=C("div",{class:"toast ach"},C("i",{class:"badge"}),C("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",C("b",{},l.name_zh),l.coins&&t.coins?`\u3000+${l.coins} \u91D1\u5E63`:""));gt.toasts.append(v),setTimeout(()=>v.remove(),3500)}function pe(l,v=1){O0(R,l,v),h.dirtyMeta=!0;for(let M of z0(R,U))Js(M),M.coins&&t.coins&&(Un(S,M.coins),rt())}let Oi=()=>Math.max(5,Math.min(100,parseInt(En("hw_daily_goal","20"),10)||20)),es=0;function ya(){let l=Oi();gt.learnCnt.textContent=es+"/"+l,gt.learnBar.style.width=Math.min(100,es/l*100)+"%",gt.learnPill.classList.toggle("done",es>=l)}function $r(){try{es=wg()}catch{}ya()}Sg(l=>{let v=es;$r(),pe("answers"),l&&pe("answers_ok"),v<Oi()&&es>=Oi()&&vt("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function ph(){let l=document.getElementById("pinbox"),v=window.KSParentPin;if(l.innerHTML="",!v||!v.isSet()){l.append(C("div",{class:"pin-ask"},C("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),C("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let M=C("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),w=C("input",{class:"typein",type:"number",min:"5",max:"100",value:String(Oi()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),P=()=>{if(!v.verify(M.value.trim())){vt("\u5BC6\u78BC\u4E0D\u5C0D"),M.value="";return}ni("hw_daily_goal",String(Math.max(5,Math.min(100,+w.value||20)))),ya(),vt("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+Oi()+" \u984C"),Zd()};[M,w].forEach(z=>z.addEventListener("keydown",Y=>{Y.stopPropagation(),Y.key==="Enter"&&P()})),l.append(C("div",{class:"pin-ask"},C("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),C("div",{class:"typerow"},M,w,C("button",{class:"btn",onclick:P},"\u78BA\u5B9A")))),setTimeout(()=>M.focus(),50)}function Zr(l,v,M,w){pe("placed"),(w==="torch"||w==="scaffold")&&pe("place:"+w);let P=h.recentPlaced||(h.recentPlaced=[]);P.push([l,v,M]),P.length>80&&P.shift(),!R.done.house&&B0(P,l,v,M)>=30&&pe("house");let z=$.build,Y=l+","+v+","+M;z&&e==="overworld"&&rh(z,_.area,l,v,M)&&!z.cells.includes(Y)&&z.cells.length<3e3&&z.cells.push(Y)}function T(){let l=!1;for(let v of js())R.stats["boss:"+v]||(R.stats["boss:"+v]=1,l=!0);l&&pe("boss",0)}let V=S.coins;function rt(){S.coins>V&&Ze("coin"),V=S.coins,gt.coins.textContent=S.coins}let it="";function tt(){let l=Rd(ht.hp),v=l.join();v!==it&&(it=v,gt.hearts.innerHTML="",l.forEach(M=>gt.hearts.append(C("i",{class:"ht "+M}))))}function zt(l){if(h.dead||l<=0||!t.damage)return;let v=l,M=la(h.armor,x);if(l=id(l,M),M&&(nd(h.armor,h.armorDur,x,v).forEach(z=>vt(`\u4F60\u7684${x.name(z)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),_n(),h.dirtyMeta=!0),l<=0)return;let w=Ed(ht,l);tt(),h.dirtyMeta=!0,Ze("hurt"),gt.flash.classList.remove("on"),gt.flash.offsetWidth,gt.flash.classList.add("on"),w&&Yt()}function Yt(){to(!0),h.dead=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let l=gt.ov;l.innerHTML="",l.hidden=!1,l.append(C("div",{class:"panel start"},C("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),C("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),C("button",{class:"btn big",onclick:kt},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function kt(){let l=Cd(h.bed,Xt,!!h.bed&&e==="overworld");h.p={x:l.x,y:l.y,z:l.z},h.v={x:0,y:0,z:0},h.fallTop=l.y,ht.hp=20,h.dead=!1,tt(),Le(),h.dirtyMeta=!0,vt(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function At(){gt.hotbar.innerHTML="";for(let v=0;v<9;v++){let M=L.slots[v];gt.hotbar.append(C("button",{class:"slot"+(v===h.sel?" on":""),"aria-label":M?x.name(M.id):"\u7A7A\u683C",onpointerdown:w=>{w.stopPropagation(),h.sel=v,At()}},M?C("img",{src:Zt[M.id],alt:""}):null,M&&M.count>1?C("span",{class:"cnt"},M.count):null,Qt(M),C("span",{class:"key"},v+1)))}let l=L.slots[h.sel];gt.selName.textContent=l?x.name(l.id):""}function Qt(l){let v=Bg(l,x);return!v||v.left>=v.max?null:C("span",{class:"dur"+(v.frac<.25?" low":"")},C("i",{style:"width:"+Math.round(v.frac*100)+"%"}))}function ve(l=4){let v=new Set,M=Math.floor(h.p.x),w=Math.floor(h.p.y),P=Math.floor(h.p.z);for(let z=-l;z<=l;z++)for(let Y=-l;Y<=l;Y++)for(let at=-l;at<=l;at++){let Q=ft.get(M+at,w+z,P+Y);Q&&v.add(x.get(Q).id)}return v}let be=()=>({near:ve(),owned:new Set(S.owned)}),Jt=-1,Me=null,He=null,Ue=l=>l==="inv"?L:l==="chest"?ot[He]:null,ke=(l,v)=>l==="armor"?h.armor[v]?{id:h.armor[v],count:1,dur:h.armorDur[v]}:null:Ue(l).slots[v];function an(l,v,M){if(!Me){ke(l,v)&&(Me={c:l,i:v}),M();return}let w=Me;if(Me=null,w.c===l&&w.i===v){M();return}if(l==="armor"||w.c==="armor"){let[P,z,Y,at]=l==="armor"?[w.c,w.i,l,v]:[l,v,w.c,w.i];if(P==="armor"){M();return}let Q=Ue(P),mt=Q.slots[z],Pt=mt&&x.get(mt.id),re=h.armor[at];if(mt&&!(Pt.armor&&Pt.armor.slot===at)){vt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),M();return}let oe=h.armorDur[at],de=re?Number.isFinite(oe)?{id:re,count:1,dur:oe}:{id:re,count:1}:null;mt?(h.armor[at]=mt.id,h.armorDur[at]=Number.isFinite(mt.dur)?mt.dur:null,mt.count>1?(mt.count--,de&&yn(Q,re,1,g)):Q.slots[z]=de):re&&(h.armor[at]=null,h.armorDur[at]=null,Q.slots[z]=de),_n(),h.dirtyMeta=!0,At(),M();return}w.c===l?Cf(Ue(l),w.i,v,g):If(Ue(w.c),w.i,Ue(l),v,g),h.dirtyMeta=!0,At(),M()}let Gt=(l,v,M,w="")=>{let P=ke(l,v),z=Me&&Me.c===l&&Me.i===v;return C("button",{class:"slot"+(z?" pick":"")+w,title:P?x.name(P.id):"",onclick:()=>an(l,v,M)},P?C("img",{src:Zt[P.id],alt:""}):null,P&&P.count>1?C("span",{class:"cnt"},P.count):null,Qt(P))},pn=["\u982D","\u8EAB","\u817F","\u8173"];function Ie(l){let v=la(h.armor,x);return C("div",{class:"armor-row"},pn.map((M,w)=>C("div",{class:"armor-slot"},Gt("armor",w,l),C("small",{},M))),C("small",{class:"muted"},`\u8B77\u7532 ${v} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,v*4)}%\uFF09`))}function _n(){if(gt.armor){let l=la(h.armor,x);gt.armor.textContent=l?`\u8B77\u7532 ${l}`:""}}function Rn(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=ot[He]||(ot[He]=ta(27)),M=C("div",{class:"inv-grid"});for(let z=0;z<27;z++)M.append(Gt("chest",z,Rn));let w=C("div",{class:"inv-grid"});for(let z=9;z<36;z++)w.append(Gt("inv",z,Rn));let P=C("div",{class:"inv-grid hbrow"});for(let z=0;z<9;z++)P.append(Gt("inv",z,Rn," hb"));return l.append(C("div",{class:"panel inv"},C("div",{class:"p-head"},C("h2",{},"\u7BB1\u5B50"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),M,C("h3",{},"\u80CC\u5305"),w,P)),v}function Fn(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=C("div",{class:"inv-grid"}),M=at=>Gt("inv",at,Fn,at<9?" hb":"");for(let at=9;at<36;at++)v.append(M(at));let w=C("div",{class:"inv-grid hbrow"});for(let at=0;at<9;at++)w.append(M(at));let P=C("div",{class:"craft"},C("h3",{},"\u5408\u6210"));if(t.creative){let at=C("div",{class:"craft"},C("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),C("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),Q=C("div",{class:"cat-grid"});Dg(x).forEach(mt=>Q.append(C("button",{class:"slot",title:x.name(mt),onclick:()=>{L.slots[h.sel]={id:mt,count:64},h.dirtyMeta=!0,At(),Fn(),vt(`${x.name(mt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},C("img",{src:Zt[mt],alt:""})))),at.append(Q),l.append(C("div",{class:"panel inv"},C("div",{class:"p-head"},C("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("div",{class:"inv-wrap"},C("div",{},C("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),v,w),at)));return}let z=be(),Y={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};y.forEach(at=>{let Q=Bc(L,at,z),mt=Q.ok;at.blueprint&&Q.reason==="blueprint"&&!Object.keys(at.in).some(Pt=>Pt!=="stick"&&Zn(L,Pt)>0)||P.append(C("div",{class:"rcp"+(mt?"":" no")},C("img",{src:Zt[at.out.id],alt:""}),C("div",{class:"rcp-t"},C("b",{},`${at.name_zh} \xD7${at.out.count}`),C("small",{},Object.keys(at.in).map(Pt=>`${x.name(Pt)} ${Zn(L,Pt)}/${at.in[Pt]}`).join("\u3001")+(Y[Q.reason]?"\u3000\xB7 "+Y[Q.reason]:""))),C("button",{class:"btn small",onclick:()=>{let Pt=Rf(L,at,g,be());Pt.ok?(vt(`\u505A\u597D\u4E86\uFF1A${at.name_zh} \xD7${at.out.count}`),h.dirtyMeta=!0,pe("craft:"+at.out.id)):vt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Pt.reason]||"\u6750\u6599\u4E0D\u5920"),Fn(),At()}},"\u88FD\u4F5C")))}),l.append(C("div",{class:"panel inv"},C("div",{class:"p-head"},C("h2",{},"\u80CC\u5305"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("div",{class:"inv-wrap"},C("div",{},C("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Ie(Fn),v,w),P)))}let ns=X0(x);function Fe(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=C("div",{class:"shop"}),M=Qg(k,js());ns.filter(w=>!w.id.startsWith("portal_")||M&&w.id===M.block).forEach(w=>v.append(C("div",{class:"offer"+(w.locked?" locked":"")},C("img",{src:Zt[w.id],alt:""}),C("div",{class:"of-t"},C("b",{},`${w.name_zh}${w.qty>1?" \xD7"+w.qty:""}`),C("small",{},w.locked?`\uFF08${w.locked}\uFF09`:`${w.price} \u91D1\u5E63${w.desc?"\u3000"+w.desc:""}`)),Vr(S,w.id)?C("span",{class:"owned"},"\u5DF2\u64C1\u6709"):C("button",{class:"btn small",disabled:w.locked?!0:null,onclick:()=>Je(w)},w.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u5546\u5E97\u3000",C("span",{class:"coin"}),` ${S.coins}`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),v))}function Je(l){let v=q0(S,L,l,g);v.ok?(pe("bought"),pe("buy:"+l.id),vt(l.blueprint?`\u62FF\u5230 ${l.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${l.name_zh} \xD7${l.qty}`),h.dirtyMeta=!0,rt(),At(),en()):vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[v.reason]||"\u8CB7\u4E0D\u4E86"),Fe()}let Bn=null;function Oe(){let l=gt.ov,v=W[Bn]||(W[Bn]=yd());l.innerHTML="",l.hidden=!1;let M=v.jobs[0],w=C("div",{class:"shop"});wt.forEach(z=>{let Y=Zn(L,z.in);w.append(C("div",{class:"offer"+(Y?"":" locked")},C("img",{src:Zt[z.in],alt:""}),C("div",{class:"of-t"},C("b",{},`${x.name(z.in)} \u2192 ${x.name(z.out)}`),C("small",{},`\u6709 ${Y} \u500B \xB7 \u6BCF\u500B ${z.time} \u79D2`)),C("button",{class:"btn small",onclick:()=>{let at=_d(v,L,z,ie);at.ok||vt(at.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,At(),Oe()}},"\u653E\u9032\u53BB")))});let P=Object.values(v.done).reduce((z,Y)=>z+Y,0);l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u7194\u7210"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,v.fuel-v.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Zn(L,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${ie} \u500B\uFF09`),C("div",{class:"furnace-st"},M?`\u6B63\u5728\u71D2\uFF1A${x.name(M.in)}\uFF08\u9084\u8981 ${Math.ceil(M.left)} \u79D2\uFF0C\u6392\u968A ${v.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),C("div",{class:"row"},C("button",{class:"btn",disabled:P?null:!0,onclick:()=>{let z=bd(v,L,g);z&&(vt(`\u62FF\u51FA ${z} \u500B`),pe("smelted",z)),h.dirtyMeta=!0,At(),Oe()}},`\u62FF\u51FA\u4F86\uFF08${P}\uFF09`)),w))}let si=null,zi=(l,v)=>{try{return JSON.parse(localStorage.getItem(l)||"null")||v}catch{return v}},js=()=>Kg(zi("hw_portal_rewards",[]),zi("hi_save",null),k),mx='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function gx(){let l=k.find(P=>P.map===si),v=gt.ov;if(v.innerHTML="",v.hidden=!1,!l){Le();return}let M=Object.keys(l.reward.items).map(P=>`${x.name(P)} \xD7${l.reward.items[P]}`).join("\u3001"),w=Pd(l.map,k,js());if(!w.ok){v.append(C("div",{class:"panel start"},C("div",{class:"p-head"},C("h2",{},"\u50B3\u9001\u9580\u30FB"+l.name_zh),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("div",{class:"padlock",html:mx}),C("p",{class:"big"},`\u5148\u6253\u5012 ${w.need.boss_zh} \u624D\u80FD\u9032\u5165`),C("p",{class:"muted"},`\u5F9E\u300C${w.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${w.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:Le},"\u77E5\u9053\u4E86"))));return}v.append(C("div",{class:"panel start"},C("div",{class:"p-head"},C("h2",{},"\u50B3\u9001\u9580\u30FB"+l.name_zh),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${l.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${l.reward.coins} \u91D1\u5E63\u3001${M}\u3002`),C("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),C("div",{class:"row"},C("button",{class:"btn big",onclick:async()=>{await en(),h.leaving=Zg(l.map),location.href=h.leaving}},"\u9032\u5165"),C("button",{class:"btn ghost",onclick:Le},"\u5148\u4E0D\u8981"))))}function mh(){if(!t.portals)return 0;let l;try{l=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{l=[]}let v=Jg(l,st);for(let M of v){let w=jg(M,k,L,S,g);if(st.push(M.id),!!w.ok){for(let P in w.leftovers)for(let z=0;z<w.leftovers[P];z++)ut(P,h.p.x,h.p.y+1,h.p.z);vt(`\u5F9E${w.name_zh}\u5E36\u56DE\u4F86\uFF1A${w.coins} \u91D1\u5E63\u3001${Object.keys(w.items).map(P=>x.name(P)+" \xD7"+w.items[P]).join("\u3001")}`)}}return v.length&&(rt(),At(),h.dirtyMeta=!0,en()),T(),v.length}let Jr=null;function xx(l){Jr=l,l.busy=!0,sn("trade")}function _a(){let l=Jr,v=gt.ov;if(!l)return Le();v.innerHTML="",v.hidden=!1;let M=l.role,w=Cs(),P=C("div",{class:"shop"});M.prof.offers.forEach(Y=>{let at=Y.blueprint||Y.give,Q=!!Y.blueprint,mt=Q&&x.blueprints.find(re=>re.id===Y.blueprint),Pt=Q&&Vr(S,Y.blueprint);P.append(C("div",{class:"offer"},C("img",{src:Zt[at],alt:""}),C("div",{class:"of-t"},C("b",{},Q?mt.name_zh:`${x.name(at)}${Y.count>1?" \xD7"+Y.count:""}`),C("small",{},`${Y.price} \u91D1\u5E63${Q?"\u3000"+(mt.desc||""):""}`)),Pt?C("span",{class:"owned"},"\u5DF2\u64C1\u6709"):C("button",{class:"btn small",onclick:()=>{let re=Cg(S,L,Y,g);re.ok?(Ze("trade"),pe("traded"),pe("bought"),vt(Q?`\u62FF\u5230 ${mt.name_zh}\uFF01`:`\u8CB7\u5230 ${x.name(at)} \xD7${Y.count}`),h.dirtyMeta=!0,rt(),At(),en()):vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[re.reason]||"\u8CB7\u4E0D\u4E86"),_a()}},"\u8CFC\u8CB7")))});let z=C("div",{class:"quests"});M.quests.forEach(Y=>{let at=Jf($,Y,w),Q=Object.keys(Y.reward.items||{}).map(mt=>`${x.name(mt)} \xD7${Y.reward.items[mt]}`).join("\u3001");z.append(C("div",{class:"offer quest"+(at?" locked":"")},C("div",{class:"of-t"},C("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+Y.title_zh),C("small",{},`${Y.desc}\uFF0C\u7B54\u5C0D ${Y.need} \u984C \u2192 ${Y.reward.coins} \u91D1\u5E63\u3001${Q}`)),at?C("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):C("button",{class:"btn small",onclick:()=>{h.overlay="quest",Eg(gt.ov,{quest:Y,onDone:mt=>{if(h.overlay="trade",mt>=0){let Pt=Rg($,Y,mt,w,S,L,g);if(Pt.ok){for(let re in Pt.leftovers)for(let oe=0;oe<Pt.leftovers[re];oe++)ut(re,h.p.x,h.p.y+1,h.p.z);vt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Pt.coins} \u91D1\u5E63\u3001${Q}`),rt(),At(),h.dirtyMeta=!0,en(),h.stats.quests=(h.stats.quests||0)+1,pe("quests")}else vt(`\u7B54\u5C0D ${mt} \u984C\uFF0C\u8981 ${Y.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}_a()}})}},"\u63A5\u59D4\u8A17")))}),v.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},`\u6751\u6C11\u30FB${M.prof.name_zh}\u3000`,C("span",{class:"coin"}),` ${S.coins}`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("h3",{},"\u4EA4\u6613"),P,C("h3",{},"\u82F1\u6587\u59D4\u8A17"),C("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),z,C("h3",{},"\u5EFA\u7BC9\u59D4\u8A17\uFF08\u770B\u82F1\u6587\u84CB\u6771\u897F\uFF09"),yx(l,w)))}function yx(l,v){let M=C("div",{class:"quests"}),w=$.build,P=_.perDay,z=R.stats.builds||0,Y=ah($,v),at=mt=>Object.keys(mt.items||{}).map(Pt=>`${x.name(Pt)} \xD7${mt.items[Pt]}`).join("\u3001");if(M.append(C("p",{class:"muted"},`\u5148\u8B80\u82F1\u6587\uFF0C\u770B\u4E0D\u61C2\u518D\u6309\u5DE6\u4E0A\u89D2\u7684\u300C\u4E2D\u6587\u63D0\u793A\u300D\u3002\u4E00\u5929\u6700\u591A\u5B8C\u6210 ${P} \u500B\uFF08\u4ECA\u5929 ${Y}/${P}\uFF09\u3002`)),w){let mt=_.builds.find(Pt=>Pt.id===w.id);M.append(C("div",{class:"offer quest"},C("div",{class:"of-t"},C("b",{class:"en"},mt?mt.en:""),C("small",{},"\u6B63\u5728\u505A\u9019\u500B\u59D4\u8A17\uFF1A\u5728\u7D05\u8272\u6846\u6846\u88E1\u84CB\u597D\uFF0C\u6309\u5DE6\u4E0A\u89D2\u7684\u300C\u5B8C\u6210\u300D")),C("button",{class:"btn small ghost",onclick:()=>{Fx(),_a()}},"\u653E\u68C4")))}else Y>=P?M.append(C("p",{},`\u4ECA\u5929\u5DF2\u7D93\u5B8C\u6210 ${P} \u500B\u5EFA\u7BC9\u59D4\u8A17\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01`)):qd(_,l.village,l.vi|0,v,z,Nn).forEach(mt=>M.append(C("div",{class:"offer quest"},C("div",{class:"of-t"},C("b",{class:"en"},mt.en),C("small",{},`${"\u2605".repeat(mt.lv)}\u3000\u84CB\u597D \u2192 ${mt.coins} \u91D1\u5E63\u3001${at(mt)}`)),C("button",{class:"btn small",onclick:()=>fp(mt)},"\u63A5\u59D4\u8A17"))));let Q=[2,3].find(mt=>!oh(_,mt,z));return Q&&M.append(C("p",{class:"muted"},`\u518D\u5B8C\u6210 ${_.unlock["lv"+Q]-z} \u500B\u5EFA\u7BC9\u59D4\u8A17\uFF0C\u6703\u51FA\u73FE\u66F4\u96E3\u7684\uFF08${"\u2605".repeat(Q)}\uFF09\u3002`)),M}function Zd(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=C("b",{},ft.rd),M=C("input",{type:"range",min:2,max:6,step:1,value:ft.rd,oninput:w=>{v.textContent=w.target.value},onchange:w=>{let P=+w.target.value;ft.setRenderDistance(P),ct.far=P*16+40,ct.updateProjectionMatrix(),ni("hw_rd",P)}});l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u8A2D\u5B9A"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",v,M),C("label",{class:"set"},"\u756B\u8CEA",C("select",{onchange:w=>{ni("hw_gfx",w.target.value),q()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([w,P])=>C("option",{value:w,selected:En("hw_gfx","high")===w?!0:null},P)))),C("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",C("select",{onchange:w=>{ni("hw_btn",w.target.value),q()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([w,P])=>C("option",{value:w,selected:En("hw_btn","m")===w?!0:null},P)))),C("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",C("input",{type:"checkbox",checked:En("hw_lefty","off")==="on"?!0:null,onchange:w=>{ni("hw_lefty",w.target.checked?"on":"off"),q()}})),C("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",C("input",{type:"checkbox",checked:En("hw_invert","off")==="on"?!0:null,onchange:w=>{ni("hw_invert",w.target.checked?"on":"off"),q()}})),C("label",{class:"set"},"\u97F3\u6A02",C("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:w=>jc({music:+w.target.value,muted:!1})})),C("label",{class:"set"},"\u97F3\u6548",C("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:w=>{jc({sfx:+w.target.value,muted:!1}),Ze("place","wood")}})),t.creative?C("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",C("input",{type:"checkbox",checked:En("hw_weather","on")!=="off"?!0:null,onchange:w=>ni("hw_weather",w.target.checked?"on":"off")})):null,C("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:vx},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),C("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",C("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:w=>{w.target.files[0]&&bx(w.target.files[0])}}))),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:Mx},"\u91CD\u7F6E\u4E16\u754C"),t.creative?C("button",{class:"btn",onclick:()=>gh("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):C("button",{class:"btn",onclick:_x},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:ph},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${Oi()} \u984C\uFF08\u5BB6\u9577\uFF09`)),C("div",{id:"pinbox"}),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:()=>{Lf(O),h.dirtyMeta=!0,Le(),Ih(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),C("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),C("p",{},C("a",{class:"home-link",href:"../../#s/game",onclick:()=>{en()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),C("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(B.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+ch)))}async function gh(l){await en(),ni("hw_mode",l),h.resetting=!0,location.reload()}function _x(){let l=document.getElementById("pinbox"),v=window.KSParentPin;if(l.innerHTML="",!v||!v.isSet()){l.append(C("div",{class:"pin-ask"},C("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),C("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let M=C("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),w=()=>{let P=Pg(v,M.value.trim());P.ok?gh("creative"):(vt(P.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),M.value="")};M.addEventListener("keydown",P=>{P.stopPropagation(),P.key==="Enter"&&w()}),l.append(C("div",{class:"pin-ask"},C("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),C("div",{class:"typerow"},M,C("button",{class:"btn",onclick:w},"\u78BA\u5B9A")))),setTimeout(()=>M.focus(),50)}async function Jd(){await en(!0);let l={};for(let v=0;v<localStorage.length;v++){let M=localStorage.key(v);/^hw_/.test(M)&&M!=="hw_mode"&&(l[M]=localStorage.getItem(M))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await Gf(""),ls:l}}async function vx(){try{let l=new Blob([JSON.stringify(await Jd())],{type:"application/json"}),v=C("a",{href:URL.createObjectURL(l),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+Cs()+".json"});document.body.append(v),v.click(),setTimeout(()=>{URL.revokeObjectURL(v.href),v.remove()},1500),vt("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(l){vt("\u532F\u51FA\u5931\u6557\uFF1A"+l.message)}}async function bx(l){try{let v=JSON.parse(await l.text());if(!v||v.app!=="hero-world"||!v.db||typeof v.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;h.resetting=!0,await Wf([]),await Xc(v.db);for(let M in v.ls||{})/^hw_/.test(M)&&M!=="hw_mode"&&ni(M,v.ls[M]);location.reload()}catch(v){h.resetting=!1,vt("\u532F\u5165\u5931\u6557\uFF1A"+(v&&v.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":v.message))}}async function Mx(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,ni("hw_dim","overworld");try{await Wf(["hw_coins"])}catch(l){console.warn(l)}location.reload()}}function sn(l){document.pointerLockElement&&document.exitPointerLock(),h.overlay=l,Hn(),pe("open:"+l,1),l==="inv"?(Jt=-1,Me=null,Fn()):l==="shop"?Fe():l==="set"?Zd():l==="furnace"?Oe():l==="portal"?gx():l==="trade"?_a():l==="chest"?(Me=null,Rn()):l==="map"?Ch():l==="ach"?kx():l==="quests"?$x():l==="book"?(no=null,io()):l==="petname"?Rx():l==="quiz"&&Ag(gt.ov,{onAnswer:()=>pe("stele_answers"),onReward:v=>{Un(S,v),rt(),h.dirtyMeta=!0,en()},onClose:()=>{h.overlay=null}})}function Le(){if(h.overlay==="book")try{speechSynthesis.cancel()}catch{}gt.ov.hidden=!0,gt.ov.innerHTML="",h.overlay=null,Jr&&(Jr.busy=!1,Jr=null)}let jd=()=>{gt.btnSnd.textContent=ca()?"\u{1F507}":"\u{1F50A}"};gt.btnSnd.onclick=()=>{Zc(),ld(),jd()},["pointerdown","keydown"].forEach(l=>addEventListener(l,()=>Zc(),{capture:!0,once:!0})),jd(),gt.btnInv.onclick=()=>h.overlay==="inv"?Le():sn("inv"),gt.btnShop.onclick=()=>h.overlay==="shop"?Le():sn("shop"),gt.btnSet.onclick=()=>h.overlay==="set"?Le():sn("set"),gt.btnView.onclick=()=>Kd(),gt.bRide.onclick=()=>to(),gt.bMap.onclick=()=>h.overlay==="map"?Le():sn("map"),gt.restOk.onclick=()=>{gt.rest.hidden=!0},gt.bQuest.onclick=()=>h.overlay==="quests"?Le():sn("quests"),gt.bAch.onclick=()=>h.overlay==="ach"?Le():sn("ach");function Kd(){h.view=h.view==="fp"?"tp":"fp",vt(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Qd(){h.ride||(h.fly=!h.fly,h.v.y=0,gt.root.classList.toggle("flying",h.fly),vt(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let vi=new K;function va(){let l=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*l,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*l}}let jr=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?fx[h.ride.kind]:0),z:h.p.z}),tp=l=>l&&!x.flat.liquid[l],xh=l=>x.flat.boxes[l]||(x.flat.shape[l]===4?dx:x.flat.shape[l]===8?px:null),Ps=x.get("scaffold")?x.num("scaffold"):-1,ep=l=>{let v=Math.floor(l.x),M=Math.floor(l.y),w=Math.floor(l.z);return x.flat.climb[ft.get(v,M,w)]===2?(P,z,Y)=>P===v&&z===M&&Y===w?0:ft.get(P,z,Y):jn};function np(l){if(l.n!==Ps||l.face[1]===-1)return null;let v=l.y;for(;v<l.y+16&&ft.get(l.x,v+1,l.z)===Ps;)v++;let M=ft.get(l.x,v+1,l.z);return v+1<64&&(!M||x.flat.liquid[M])?{x:l.x,y:v+1,z:l.z}:null}function Vn(l,v,M){if(l==="screen"){vi.set(v/innerWidth*2-1,-(M/innerHeight)*2+1,.5).unproject(ct).sub(ct.position).normalize();let Y=ct.position,at=h.view==="tp"?Y.distanceTo(new K(h.p.x,h.p.y+1.62,h.p.z)):0,Q={x:Y.x,y:Y.y,z:Y.z},mt={x:vi.x,y:vi.y,z:vi.z};h.lastRay={o:Q,d:mt};let Pt=zr(Q,mt,hh+1+at,ep(Q),tp,xh);return Pt&&(Pt.at={x:Q.x+mt.x*Pt.dist,y:Q.y+mt.y*Pt.dist,z:Q.z+mt.z*Pt.dist}),Pt}let w=jr(),P=va();h.lastRay={o:w,d:P};let z=zr(w,P,hh,ep(w),tp,xh);return z&&(z.at={x:w.x+P.x*z.dist,y:w.y+P.y*z.dist,z:w.z+P.z*z.dist}),z}function Hn(){h.mining.active=!1,h.mining.k="",h.mining.t=0,fe.visible=!1}function Sx(l,v,M){Ze("door");let w=x.get(ft.get(l,v,M)),P=x.get(w.openAs||w.closeAs);if(!P)return;let z=at=>{let Q=x.get(at);return Q&&Q.interact==="door"},Y=v;for(;z(ft.get(l,Y-1,M));)Y--;for(let at=Y;z(ft.get(l,at,M));at++)ft.set(l,at,M,P.n);h.dirtyMeta=!0}let ip=()=>{let l=L.slots[h.sel];return l?x.toolOf(l.id):null};function wx(l){let v=l.n,M=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Kc(x.get(v),ip());if(!ft.set(l.x,l.y,l.z,0))return;j.sendBlock(l.x,l.y,l.z,0);let w=l.x+","+l.y+","+l.z,P=x.get(v);if(ot[w]){if(t.drops){for(let Q of ot[w].slots)if(Q)for(let mt=0;mt<Q.count;mt++)ut(Q.id,l.x+.5,l.y+.4,l.z+.5)}delete ot[w]}if(P&&P.crop){if(delete Mt[w],t.drops)for(let Q of td(P.stage|0))for(let mt=0;mt<Q.n;mt++)ut(Q.id,l.x+.5,l.y+.3,l.z+.5);h.stats.harvested=(h.stats.harvested||0)+(P.stage===3?1:0),P.stage===3&&pe("harvested"),h.dirtyMeta=!0;return}let z=M.harvest?x.dropOf(v):null;if(z&&ut(z,l.x+.5,l.y+.4,l.z+.5),t.drops&&P.pattern==="leaves"&&Math.random()<(f.appleChance||.1)?ut("apple",l.x+.5,l.y+.4,l.z+.5):!M.harvest&&!M.creative&&vt(`${x.name(v)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`),P.id==="bamboo"||P.id==="scaffold")for(let Q=l.y+1;ft.get(l.x,Q,l.z)===v;Q++)ft.set(l.x,Q,l.z,0),t.drops&&ut(P.id,l.x+.5,Q+.4,l.z+.5);let Y=ft.get(l.x,l.y+1,l.z);if(x.flat.plant[Y]){delete Mt[l.x+","+(l.y+1)+","+l.z],ft.set(l.x,l.y+1,l.z,0);let Q=t.drops&&x.dropOf(Y);Q&&ut(Q,l.x+.5,l.y+1.3,l.z+.5)}if(x.get(v).interact==="door")for(let Q of[-1,1]){let mt=ft.get(l.x,l.y+Q,l.z);x.get(mt)&&x.get(mt).interact==="door"&&ft.set(l.x,l.y+Q,l.z,0)}let at=l.x+","+l.y+","+l.z;if(h.bed&&h.bed.x===l.x&&h.bed.y===l.y&&h.bed.z===l.z&&(h.bed=null,vt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),W[at]){let Q=Md(W[at]);for(let mt in Q)for(let Pt=0;Pt<Q[mt];Pt++)ut(mt,l.x+.5,l.y+.4,l.z+.5);delete W[at]}if(M.usesTool){let Q=Wr(L,h.sel,x);Q.broke&&vt(`\u4F60\u7684${x.name(Q.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),At()}h.dirtyMeta=!0,h.stats.mined++,Ze("break",Gr(P)),pe("mined"),pe("mine:"+(P.pattern==="log"?"wood":P.id))}function Ks(l){let v=L.slots[h.sel],M=v&&x.get(v.id);if(M&&M.food)return t.damage?(sd(ht,M.food,20)?(Ze("eat"),kn(L,h.sel,1),tt(),At(),h.dirtyMeta=!0,vt(`\u5403\u4E86${M.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):vt("\u73FE\u5728\u4E0D\u9913"),!0):(vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(M&&M.id==="shadow_flint"){if(!t.portals)return vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Tt=x.num("dark_crystal"),ee=l&&l.n===Tt?Af((Ne,un,mn)=>ft.get(Ne,un,mn),l.x,l.y,l.z,Tt):null;if(!ee)return vt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let De=x.num("shadow_portal");for(let Ne of ee)ft.set(Ne[0],Ne[1],Ne[2],De);return pe("portal_lit"),kn(L,h.sel,1),At(),h.dirtyMeta=!0,vt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(M&&M.id==="fishing_rod")return h.fish?Lx():Px(),!0;if(M&&M.id==="bow")return Ah(),!0;if(M&&M.id==="book")return sn("book"),!0;if(M&&M.place==="boat"){if(h.ride)return vt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Tt=h.lastRay,ee=Tt&&zr(Tt.o,Tt.d,hh+1,jn,Ne=>x.flat.liquid[Ne]||x.flat.solid[Ne]);if(!ee||!x.flat.liquid[ee.n]||ft.get(ee.x,ee.y+1,ee.z))return vt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:ee.x+.5,y:ee.y+1-.15,z:ee.z+.5};let De=yh("boat",h.p,h.yaw,{y:ee.y+1});return t.consume&&kn(L,h.sel,1),At(),Qr("boat",{y:ee.y+1,veh:De}),!0}if(M&&M.place==="minecart"){if(h.ride)return vt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Tt=l&&x.get(l.n);if(!Tt||!Tt.rail)return vt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let ee=mf(Tt.rail,l.x,l.y,l.z,-Math.sin(h.yaw),-Math.cos(h.yaw),un=>!!Ko(ts,l.x,l.y,l.z,un,Tt.rail)),De=Fc(ee),Ne=yh("minecart",{x:De.x,y:De.y+.05,z:De.z},De.yaw,{st:ee});return t.consume&&kn(L,h.sel,1),At(),Qr("minecart",{st:ee,veh:Ne}),!0}if(!l)return!1;let w=x.get(l.n);if(w&&w.interact==="chest"){if(Ze("chest"),He=l.x+","+l.y+","+l.z,w.id==="loot_chest"&&!ot[He]){let Tt=I.ruins&&I.ruins.at(l.x,l.z);ot[He]=S0(Vc,(c.loot||{})[Tt?Tt.kind:"forest_ruins"],M0(l.x,l.y,l.z),g),pe("loot"),vt("\u627E\u5230\u907A\u8DE1\u7684\u5BF6\u7BB1\u4E86\uFF01"),h.dirtyMeta=!0}return sn("chest"),!0}let P=M&&x.toolOf(v.id);if(P&&P.type==="hoe"&&Qf(w.id,!ft.get(l.x,l.y+1,l.z)||x.flat.plant[ft.get(l.x,l.y+1,l.z)])){if(ft.set(l.x,l.y+1,l.z,0),ft.set(l.x,l.y,l.z,x.num("farmland")),t.consume){let Tt=Wr(L,h.sel,x);Tt.broke&&vt(`\u4F60\u7684${x.name(Tt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return At(),h.dirtyMeta=!0,!0}if(M&&M.place==="crop")return w.id!=="farmland"||l.face[1]!==1||ft.get(l.x,l.y+1,l.z)?(vt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(ft.set(l.x,l.y+1,l.z,x.num("wheat_0")),Mt[l.x+","+(l.y+1)+","+l.z]={t:Date.now(),wet:ed(jn,Tt=>x.flat.liquid[Tt]===1,l.x,l.y,l.z)},t.consume&&kn(L,h.sel,1),At(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let z=x.get(l.n);if(z&&z.interact==="riddle")return Xx(l),!0;if(z&&z.interact==="quiz")return t.coins?(sn("quiz"),!0):(vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let Y=L.slots[h.sel]&&x.get(L.slots[h.sel].id).placeable;if(z&&z.interact==="door")return Sx(l.x,l.y,l.z),!0;if(z&&z.interact==="portal"&&!Y&&!t.portals)return vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(z&&z.interact==="portal"&&!Y)return si=z.portal,sn("portal"),!0;if(z&&z.interact==="bed"&&!Y&&e==="shadow")return vt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(z&&z.interact==="bed"&&!Y)return h.bed={x:l.x,y:l.y,z:l.z},h.dirtyMeta=!0,pe("bed"),vt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(z&&z.interact==="craft"&&!Y)return sn("inv"),!0;if(z&&z.interact==="furnace"&&!Y)return Bn=l.x+","+l.y+","+l.z,sn("furnace"),!0;let at=L.slots[h.sel];if(!at)return vt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let Q=x.get(at.id);if(!Q||!Q.placeable)return vt(`${x.name(at.id)} \u4E0D\u80FD\u653E`),!1;if(Q.id==="scaffold"&&l.n===Ps&&l.face[1]!==-1){let Tt=np(l);return!Tt||!ft.set(Tt.x,Tt.y,Tt.z,Ps)?(vt("\u9019\u6839\u9DF9\u67B6\u4E0A\u9762\u653E\u4E0D\u4E0B\u4E86"),!1):(j.sendBlock(Tt.x,Tt.y,Tt.z,Ps),Ze("place","wood"),t.consume&&kn(L,h.sel,1),h.dirtyMeta=!0,At(),h.stats.placed++,Zr(Tt.x,Tt.y,Tt.z,Q.id),!0)}if(Q.place==="slab"&&Q.fullAs&&l.n===Q.n&&l.face[1]===1&&ft.set(l.x,l.y,l.z,x.num(Q.fullAs)))return t.consume&&kn(L,h.sel,1),At(),h.stats.placed++,h.dirtyMeta=!0,!0;let mt=x.flat.plant[l.n]&&!x.flat.plant[Q.n],Pt=mt?l.x:l.x+l.face[0],re=mt?l.y:l.y+l.face[1],oe=mt?l.z:l.z+l.face[2];if(re<0||re>=64)return!1;let de=ft.get(Pt,re,oe);if(de&&!x.flat.liquid[de]&&!(mt&&x.flat.plant[de]))return!1;let Ce=.6/2;if(Q.solid&&Pt+1>h.p.x-Ce&&Pt<h.p.x+Ce&&oe+1>h.p.z-Ce&&oe<h.p.z+Ce&&re+1>h.p.y&&re<h.p.y+1.8)return!1;if(x.flat.plant[Q.n]&&!x.flat.solid[ft.get(Pt,re-1,oe)])return vt(`${Q.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let je=Q.n;if(Q.place==="slab"){let Tt=l.at?l.at.y-Math.floor(l.at.y):0;(l.face[1]===-1||l.face[1]===0&&Tt>.5)&&x.get(Q.id+"_top")&&(je=x.num(Q.id+"_top"))}else if(Q.place==="stairs"){let Tt=-Math.sin(h.yaw),ee=-Math.cos(h.yaw),De=Math.abs(Tt)>Math.abs(ee)?Tt>0?1:3:ee>0?2:0,Ne=x.get(Q.id+["","_e","_s","_w"][De]);Ne&&(je=Ne.n)}let ae=null;if(Q.place==="rail"){if(!x.flat.solid[ft.get(Pt,re-1,oe)])return vt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Tt=-Math.sin(h.yaw),ee=-Math.cos(h.yaw),De=Uc(ts,Pt,re,oe,!!Q.powered,Math.abs(Tt)>Math.abs(ee)?"e":"n");je=x.num(jo(!!Q.powered,De.shape)),ae=De.updates}if(!ft.set(Pt,re,oe,je))return!1;if(j.sendBlock(Pt,re,oe,je),ae)for(let[Tt,ee,De,Ne]of ae){let un=ts(Tt,ee,De);un&&ft.set(Tt,ee,De,x.num(jo(un.powered,Ne)))}return Ze("place",Gr(Q)),Q.interact==="door"&&!ft.get(Pt,re+1,oe)&&ft.set(Pt,re+1,oe,Q.n),t.consume&&kn(L,h.sel,1),h.dirtyMeta=!0,At(),h.stats.placed++,Zr(Pt,re,oe,Q.id),!0}let Kr={},Qs=l=>Kr[l]||(Kr[l]=(()=>{let v=new Sn({color:l});return v.userData.base=new ue(l),v})());function Ax(l){let v=new gn,M=(w,P,z,Y,at,Q,mt)=>{let Pt=new ze(new $e(w,P,z),Qs(Y));Pt.position.set(at,Q,mt),v.add(Pt)};if(l==="boat"){M(.9,.08,1.5,"#8C6640",0,.04,0);for(let w of[-1,1])M(.08,.3,1.5,"#A97E4E",w*.45,.19,0),M(.9,.3,.08,"#A97E4E",0,.19,w*.75);M(.9,.06,.25,"#C49A63",0,.25,.1)}else{M(.9,.08,1.1,"#5E6660",0,.12,0);for(let w of[-1,1])M(.08,.45,1.1,"#8C8A84",w*.45,.35,0),M(.9,.45,.08,"#8C8A84",0,.35,w*.55),M(.06,.18,.18,"#26302A",w*.47,.1,.35),M(.06,.18,.18,"#26302A",w*.47,.1,-.35)}return v}h.vehicles=[];function yh(l,v,M,w){let P=Ax(l);P.rotation.order="YXZ",P.position.set(v.x,v.y,v.z),P.rotation.y=M,lt.add(P);let z=Object.assign({kind:l,p:{x:v.x,y:v.y,z:v.z},yaw:M,obj:P,hits:0},w);return z.m={kind:"vehicle",veh:z,id:-2},h.vehicles.push(z),z}function _h(l){h.ride||h.dead||(h.p={x:l.p.x,y:l.p.y,z:l.p.z},l.kind==="boat"?Qr("boat",{y:l.y,veh:l}):(l.st.v=0,Qr("minecart",{st:l.st,veh:l})))}function vh(l){if(!(h.ride&&h.ride.veh===l)){if(l.hits++,l.hits<2){vt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),l.obj.position.y=l.p.y+.15,setTimeout(()=>{l.obj.position.y=l.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(l),1),lt.remove(l.obj),ut(l.kind,l.p.x,l.p.y+.5,l.p.z),h.dirtyMeta=!0,vt(l.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let tr=new gn,sp=new Sn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),bh=[0,1].map(()=>{let l=new ze(new $e(1,1,1),sp);return tr.add(l),l});tr.visible=!1,lt.add(tr);function Ex(l){let v=L.slots[h.sel],M=v&&x.get(v.id);if(!l||!M||!M.placeable)return null;let w=x.get(l.n);if(w&&["chest","quiz","door"].includes(w.interact))return null;if(M.place==="slab"&&M.fullAs&&l.n===M.n&&l.face[1]===1)return{x:l.x,y:l.y,z:l.z,n:x.num(M.fullAs)};if(M.id==="scaffold"&&l.n===Ps&&l.face[1]!==-1){let Pt=np(l);return Pt?Object.assign(Pt,{n:Ps}):null}let P=x.flat.plant[l.n]&&!x.flat.plant[M.n],z=P?l.x:l.x+l.face[0],Y=P?l.y:l.y+l.face[1],at=P?l.z:l.z+l.face[2];if(Y<0||Y>=64)return null;let Q=ft.get(z,Y,at);if(Q&&!x.flat.liquid[Q]&&!(P&&x.flat.plant[Q]))return null;let mt=M.n;if(M.place==="slab"){let Pt=l.at?l.at.y-Math.floor(l.at.y):0;(l.face[1]===-1||l.face[1]===0&&Pt>.5)&&x.get(M.id+"_top")&&(mt=x.num(M.id+"_top"))}else if(M.place==="stairs"){let Pt=-Math.sin(h.yaw),re=-Math.cos(h.yaw),oe=Math.abs(Pt)>Math.abs(re)?Pt>0?1:3:re>0?2:0,de=x.get(M.id+["","_e","_s","_w"][oe]);de&&(mt=de.n)}else if(M.place==="rail"){if(!x.flat.solid[ft.get(z,Y-1,at)])return null;let Pt=-Math.sin(h.yaw),re=-Math.cos(h.yaw);mt=x.num(jo(!!M.powered,Uc(ts,z,Y,at,!!M.powered,Math.abs(Pt)>Math.abs(re)?"e":"n").shape))}return{x:z,y:Y,z:at,n:mt}}function Tx(l){let v=Ex(l);if(!v){tr.visible=!1;return}let M=x.flat.shape[v.n],w=x.flat.boxes[v.n]||(M===4?dx:M===8?px:M>=1&&M<=3?C1:T1);bh.forEach((P,z)=>{let Y=w[z];P.visible=!!Y,Y&&(P.scale.set((Y[3]-Y[0])*.98,(Y[4]-Y[1])*.98,(Y[5]-Y[2])*.98),P.position.set(v.x+(Y[0]+Y[3])/2,v.y+(Y[1]+Y[4])/2,v.z+(Y[2]+Y[5])/2))}),tr.visible=!0}function rp(l){l.saddled=!0;let v=Te.get(l.id);if(!v)return;let M=new ze(new $e(.62,.1,.6),Qs("#5C3A24"));M.position.set(0,1.4,.05),v.add(M)}function Qr(l,v){let M=v.veh?v.veh.obj:null;h.ride=Object.assign({kind:l,obj:M,yaw:v.veh?v.veh.yaw:h.yaw},v),h.fly=!1,gt.root.classList.remove("flying"),h.v={x:0,y:0,z:0},gt.bRide.hidden=!1,Hn(),pe("ride:"+l),pe("ride"),vt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[l])}function to(l){let v=h.ride;if(v){if(h.ride=null,gt.bRide.hidden=!0,v.veh&&(v.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},v.veh.yaw=v.yaw,v.st&&(v.st.v=0,v.veh.st=v.st)),v.kind==="horse"&&(v.m.riding=!1),v.kind==="minecart")h.p.y+=.2;else for(let[M,w]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let P={x:h.p.x+M,y:Math.floor(h.p.y+.5),z:h.p.z+w};if(T0(P,It)&&x.flat.solid[ft.get(P.x,P.y-1,P.z)]){h.p=P;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,l||vt("\u4E0B\u4F86\u4E86")}}function Cx(l){let v=L.slots[h.sel];if(!l.tame){v&&(v.id==="wheat"||v.id==="apple")?(t.consume&&kn(L,h.sel,1),At(),l.fed=(l.fed||0)+1,l.fed>=3?(l.tame=!0,h.horseMob=l,h.dirtyMeta=!0,vt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):vt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${l.fed}/3\uFF09`)):vt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!l.saddled){v&&v.id==="saddle"?(t.consume&&kn(L,h.sel,1),At(),rp(l),h.horseMob=l,h.dirtyMeta=!0,vt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):vt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(l.riding=!0,h.p={x:l.p.x,y:l.p.y,z:l.p.z},Qr("horse",{m:l}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function op(l){let v=Te.get(l.id);if(!v||v.userData.collar)return;let[M,w]=l.def.size,P=new ze(new $e(.34,.07,.36),Qs("#E0352B"));P.position.set(0,w-.25,-M*.62),v.add(P),v.userData.collar=P}function ap(l){let v=L.slots[h.sel],M=l.def.name_zh,w=nh(l.def).map(z=>x.name(z)).join("\u6216");if(l.tame&&v&&v.id==="paper"){Mh=l,sn("petname");return}if(l.tame){l.sit=!l.sit,h.dirtyMeta=!0,vt(l.sit?`${l.name||M}\u4E56\u4E56\u5750\u4E0B\u4F86\u7B49\u4F60`:`${l.name||M}\u8DDF\u8457\u4F60\u8D70`);return}let P=Od(l,v&&v.id,_e.list.filter(z=>z.tame&&Ys(z)&&!z.gone).length);if(!P.ok){vt(`${M}\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260${w}\u8A66\u8A66\u770B`);return}if(t.consume&&kn(L,h.sel,1),At(),Ze("eat"),P.full){vt(`\u5BF5\u7269\u6700\u591A ${qs} \u96BB\uFF0C${M}\u5148\u7576\u670B\u53CB\u5C31\u597D`);return}if(!P.tamed){vt(`${M}\u5403\u5F97\u597D\u958B\u5FC3\uFF08${P.fed}/${P.need}\uFF09`);return}op(l),h.dirtyMeta=!0,pe("tamed"),en(),vt(`${M}\u8B8A\u6210\u4F60\u7684\u5BF5\u7269\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\u8D70\uFF1B\u9EDE\u7260\u4E00\u4E0B\uFF1D\u5750\u4E0B\uFF0F\u8DDF\u8457\u8D70`+(l.def.guard?"\u3002\u665A\u4E0A\u7260\u6703\u5E6B\u4F60\u64CB\u4F4F\u932F\u984C\u602A":"")),Mh=l,sn("petname")}let Mh=null;function lp(l){let v=Te.get(l.id);if(!v)return;let M=v.userData.tag;if(M&&(v.remove(M),M.material.map.dispose(),M.material.dispose(),v.userData.tag=null),!l.name)return;let w=document.createElement("canvas");w.width=256,w.height=64;let P=w.getContext("2d");P.font="bold 34px sans-serif";let z=Math.min(250,P.measureText(l.name).width+30);P.fillStyle="rgba(239,235,221,.92)",P.fillRect(128-z/2,8,z,48),P.fillStyle="#26302A",P.textAlign="center",P.textBaseline="middle",P.fillText(l.name,128,33);let Y=new qn(w);Y.colorSpace=nn;let at=new ps(new qi({map:Y,depthWrite:!1}));at.scale.set(1.1,.275,1),at.position.y=l.def.size[1]+.35,v.add(at),v.userData.tag=at}function Rx(){let l=Mh,v=gt.ov;if(!l||l.gone){Le();return}v.innerHTML="",v.hidden=!1;let M=C("input",{class:"typein",type:"text",maxlength:"12",autocomplete:"off",value:l.name||"",placeholder:"\u4F8B\u5982\uFF1A\u5C0F\u9ED1","aria-label":"\u5BF5\u7269\u7684\u540D\u5B57"}),w=()=>{let P=fa(M.value);l.name=P,lp(l),h.dirtyMeta=!0,P&&(pe("pet_named"),vt(`${l.def.name_zh}\u7684\u540D\u5B57\u53EB\u300C${P}\u300D\u4E86\uFF01`)),Le(),en()};M.addEventListener("keydown",P=>{P.stopPropagation(),P.key==="Enter"&&w()}),v.append(C("div",{class:"panel start"},C("div",{class:"p-head"},C("h2",{},`\u5E6B${l.def.name_zh}\u53D6\u540D\u5B57`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("p",{},"\u540D\u5B57\u6703\u51FA\u73FE\u5728\u7260\u982D\u4E0A\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002\u4EE5\u5F8C\u62FF\u4E00\u5F35\u300C\u7D19\u300D\u9EDE\u7260\uFF0C\u5C31\u80FD\u6539\u540D\u5B57\u3002"),C("div",{class:"typerow"},M,C("button",{class:"btn",onclick:w},"\u597D\u4E86")),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:Le},"\u5148\u4E0D\u8981")))),setTimeout(()=>M.focus(),50)}function Ix(l,v,M,w,P,z,Y){let at=h.ride;if(at.kind==="boat"){let Q=(w*M+z*v)*7,mt=(P*M+Y*v)*7,Pt=1-Math.exp(-2.5*l);h.v.x+=(Q-h.v.x)*Pt,h.v.z+=(mt-h.v.z)*Pt,h.v.y=0;let re=(Ce,je)=>x.flat.liquid[ft.get(Ce,at.y-1,je)]===1&&!x.flat.solid[ft.get(Ce,at.y,je)],oe=h.p.x+h.v.x*l,de=h.p.z+h.v.z*l;re(oe+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=oe:h.v.x=0,re(h.p.x,de+Math.sign(h.v.z)*.6)?h.p.z=de:h.v.z=0,h.p.y=at.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(at.yaw=Math.atan2(-h.v.x,-h.v.z))}else{gf(at.st,l,M,ts);let Q=Fc(at.st);h.p.x=Q.x,h.p.z=Q.z,h.p.y=Q.y+.05,at.yaw=Q.yaw,at.pitch=Q.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Sh=(()=>{let l=new gn,v=new ze(new $e(.16,.1,.16),Qs("#E0352B")),M=new ze(new $e(.16,.08,.16),Qs("#EFEBDD"));return v.position.y=.05,M.position.y=-.04,l.add(v,M),l.visible=!1,lt.add(l),l})();function Px(){let l=h.lastRay,v=l&&zr(l.o,l.d,hh+3,jn,M=>x.flat.liquid[M]||x.flat.solid[M]);return!v||!x.flat.liquid[v.n]||ft.get(v.x,v.y+1,v.z)?(vt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=yf(Math.random),h.fish.at={x:v.x+.5,y:v.y+1,z:v.z+.5},Sh.visible=!0,vt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function wh(){h.fish=null,Sh.visible=!1}function Lx(){let l=vf(h.fish);if(wh(),l!=="catch"){vt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let v=f.fishing.loot,M=bf(v,Math.random);if(M.coins&&!t.coins&&(M=v[0]),M.coins)Un(S,M.coins),rt(),vt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${M.coins} \u91D1\u5E63`);else{let w=yn(L,M.id,M.n,g);for(let P=0;P<w;P++)ut(M.id,h.p.x,h.p.y+1,h.p.z);vt(M.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${x.name(M.id)} \xD7${M.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Wr(L,h.sel,x).broke&&vt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),At(),h.dirtyMeta=!0,Ze("pickup"),pe("fish"),M.treasure&&pe("treasure")}let Dx=new $e(.05,.05,.62);h.arrows=[];function Ah(l=0){let v=performance.now()/1e3;if(v-(h.bowT||0)<Ld)return;if(t.consume&&Zn(L,"arrow")<1){vt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD");return}h.bowT=v;let M=h.lastRay||{o:jr(),d:va()},w=Dd({x:M.o.x+M.d.x*.6,y:M.o.y+M.d.y*.6,z:M.o.z+M.d.z*.6},M.d,l);w.obj=new ze(Dx,Qs(w.power>1?"#E0352B":"#8C6640")),lt.add(w.obj),h.arrows.push(w),t.consume&&(Gs(L,"arrow",1),Wr(L,h.sel,x).broke&&vt("\u5F13\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01")),At(),h.dirtyMeta=!0,Ze("place","wood"),pe("shot"),w.power>1&&pe("shot_full")}let eo=l=>{let v=L.slots[h.sel];return!!v&&v.id===l};function ba(l){return h.charge||!eo("bow")?!!h.charge:t.consume&&Zn(L,"arrow")<1?(vt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD"),!1):(h.charge={t0:l||performance.now()},gt.charge.hidden=!1,gt.chargeBar.style.width="0%",!0)}function cp(){h.charge=null,gt.charge.hidden=!0,gt.charge.classList.remove("full")}function Ma(l,v,M){let w=h.charge;w&&(cp(),Vn(l,v,M),Ah(eh((performance.now()-w.t0)/1e3)))}function Nx(l){if(!h.arrows.length||!l)return;let v=_e.list.filter(M=>!M.gone&&!M.riding&&(M.kind==="quiz"||M.kind==="animal"&&!M.def.noHit&&!M.tame&&M.type!=="horse")).map(M=>({p:M.p,w:M.def.size[0],h:M.def.size[1],ref:M}));h.boss&&v.push({p:h.boss.p,w:3.6,h:3.6,ref:h.boss.m});for(let M=h.arrows.length-1;M>=0;M--){let w=h.arrows[M],P=Nd(w,l,It,v);w.obj.position.set(w.p.x,w.p.y,w.p.z),vi.set(w.p.x+w.v.x,w.p.y+w.v.y,w.p.z+w.v.z),w.obj.lookAt(vi),P&&(lt.remove(w.obj),h.arrows.splice(M,1),P.hit==="mob"?(pe("arrow_hit"),Qi(P.target,w.power||1)):P.hit==="block"&&t.consume&&ut("arrow",w.p.x,w.p.y,w.p.z))}}let is=m.books||[],hp=l=>{if(!($d||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let v=new SpeechSynthesisUtterance(l);v.lang="en-US",v.rate=.85,speechSynthesis.speak(v)}catch{}},Eh=l=>$["book:"+l.id]===Cs(),er=l=>!!(R.stats["read:"+l.id]||$["book:"+l.id]),no=null,nr=!1;function io(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=is.find(w=>w.id===no),M=w=>C("div",{class:"p-head"},C("h2",{},w),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7"));if(!v){let w=C("div",{class:"shop"}),P=da(is,er),z=Cs();_i.forEach(Y=>{let at=is.filter(Q=>qr(Q)===Y);if(at.length){if(w.append(C("h3",{class:"book-lv"},`${ih[Y]}\u3000\u8B80\u61C2 ${at.filter(er).length} / ${at.length}`)),!P.has(Y)){w.append(C("div",{class:"offer locked"},C("div",{class:"of-t"},C("b",{},`\u9084\u6C92\u6253\u958B\uFF08${at.length} \u7BC7\uFF09`),C("small",{},`\u518D\u8B80\u61C2 ${ax(is,er,Y)} \u7BC7\u4E0A\u4E00\u7D1A\u7684\u66F8\u5C31\u6703\u6253\u958B`))));return}at.forEach(Q=>w.append(C("div",{class:"offer"+(Eh(Q)?" locked":"")},C("img",{src:Zt.book,alt:""}),C("div",{class:"of-t"},C("b",{class:"en"},Q.title),C("small",{},Q.title_zh+(Eh(Q)?"\u3000\u2713 \u4ECA\u5929\u7B54\u5C0D\u4E86":t.coins?Gd(m,Q,$,z)?`\u3000\u8B80\u5B8C\u7B54\u5C0D +${m.coins|0} \u91D1\u5E63`:"\u3000\u4ECA\u5929\u7684\u8B80\u66F8\u91D1\u5E63\u9818\u5B8C\u4E86":"")+(er(Q)?"":"\u3000\uFF08\u65B0\uFF09"))),C("button",{class:"btn small",onclick:()=>{no=Q.id,nr=!1,io()}},"\u8B80"))))}}),l.append(C("div",{class:"panel"},M("\u82F1\u6587\u5C0F\u66F8"),C("p",{class:"muted"},`\u6311\u4E00\u7BC7\u4F86\u8B80\uFF0C\u8B80\u5B8C\u56DE\u7B54\u4E00\u500B\u554F\u984C\u3002\u6BCF\u7BC7\u6BCF\u5929\u7B54\u5C0D\u7B2C\u4E00\u6B21\u6709\u91D1\u5E63\uFF08\u4E00\u5929\u6700\u591A ${m.dailyCap??is.length} \u7BC7\uFF09\u3002\u8B80\u61C2 ${sh} \u7BC7\u4E0D\u540C\u7684\uFF0C\u5C31\u6703\u6253\u958B\u4E0B\u4E00\u7D1A\u3002`),w));return}l.append(C("div",{class:"panel book"},M(v.title_zh),C("small",{class:"muted"},ih[qr(v)]),C("h3",{class:"en"},v.title),C("p",{class:"book-text en"},v.en),nr?C("p",{class:"book-text zh"},v.zh):null,C("div",{class:"row"},C("button",{class:"btn ghost",onclick:()=>{nr=!nr,io()}},nr?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"),C("button",{class:"btn ghost",onclick:()=>hp(v.en)},"\u{1F50A} \u6717\u8B80")),C("div",{class:"row"},C("button",{class:"btn",onclick:()=>Ux(v)},"\u8B80\u5B8C\u4E86\uFF0C\u56DE\u7B54\u554F\u984C"),C("button",{class:"btn ghost",onclick:()=>{no=null,io()}},"\u2190 \u63DB\u4E00\u672C"))))}function Ux(l){try{speechSynthesis.cancel()}catch{}let v=l.q.options.slice().sort(()=>Math.random()-.5),M={id:"hwbook:"+l.id,module:"reading",tkey:"\u82F1\u6587\u5C0F\u66F8",type:"reading",local:!0,title:l.title,prompt:l.q.prompt,sub:nr?l.q.zh:"",options:v,answer:l.q.options[0],en:!0,why:""};h.overlay="ask",aa(gt.ov,{question:M,title:"\u82F1\u6587\u5C0F\u66F8\uFF1A"+l.title,okText:"\u7B54\u5C0D\u4E86\uFF01\u4F60\u770B\u61C2\u9019\u7BC7\u6545\u4E8B\u4E86",onDone:w=>{if(h.overlay="book",w){let P=Cs(),z=!Eh(l),Y=t.coins?Gd(m,l,$,P):0,at=da(is,er);$["book:"+l.id]=P,Y&&(Un(S,Y),rt()),R.stats["read:"+l.id]||pe("books_read"),pe("read:"+l.id),pe("books"),h.dirtyMeta=!0,en(),vt(Y?`\u8B80\u61C2\u4E86\uFF01 +${Y} \u91D1\u5E63`:z&&t.coins?"\u8B80\u61C2\u4E86\uFF01\uFF08\u4ECA\u5929\u7684\u8B80\u66F8\u91D1\u5E63\u9818\u5B8C\u4E86\uFF09":"\u8B80\u61C2\u4E86\uFF01"),no=null;for(let Q of da(is,er))at.has(Q)||vt(`\u6253\u958B\u65B0\u7684\u66F8\u4E86\uFF1A${ih[Q]}`)}else w===!1&&vt("\u518D\u8B80\u4E00\u6B21\u770B\u770B\uFF0C\u7B54\u6848\u5C31\u5728\u6545\u4E8B\u88E1\uFF01");io()}})}let Ls=new gs(new Tr(new $e(1,1,1)),new ms({color:14693675,transparent:!0,opacity:.7,depthWrite:!1}));Ls.visible=!1,lt.add(Ls);function so(){let l=$.build,v=_.area;if(Ls.visible=!!l&&e==="overworld",!Ls.visible)return;let M=v.r*2+1,w=v.down+v.up+1;Ls.scale.set(M,w,M),Ls.position.set(l.x+.5,l.y-v.down+w/2,l.z+.5)}let Th=()=>$.build&&_.builds.find(l=>l.id===$.build.id);function up(){let l=$.build,v=[];if(!l)return v;for(let M of l.cells){let[w,P,z]=M.split(",").map(Number),Y=ft.get(w,P,z);Y&&v.push({x:w,y:P,z,id:x.get(Y).id})}return v}function Ds(l){let v=Th();gt.bc.hidden=!v||e!=="overworld"||!h.started,v&&(gt.bcEn.textContent=v.en,gt.bcZh.textContent=v.zh,gt.bcZh.hidden=!h.bcZh,gt.bcZhb.textContent=h.bcZh?"\u85CF\u8D77\u4E2D\u6587":"\u4E2D\u6587\u63D0\u793A",gt.bcRes.innerHTML="",l&&l.res.forEach(M=>gt.bcRes.append(C("div",{class:M.ok?"ok":"no"},M.ok?"\u2713 ":"\u2717 ",C("span",{class:"en"},M.en),M.ok?"":`\uFF08${M.have}/${M.need}\uFF09`))))}function fp(l){$.build={id:l.id,x:Math.floor(h.p.x),y:Math.floor(h.p.y),z:Math.floor(h.p.z),cells:[]},h.bcZh=!1,h.dirtyMeta=!0,Le(),so(),Ds(),en(),vt("\u7D05\u8272\u6846\u6846\u88E1\u5C31\u662F\u59D4\u8A17\u7684\u7BC4\u570D\u3002\u770B\u5DE6\u4E0A\u89D2\u7684\u82F1\u6587\uFF0C\u84CB\u597D\u6309\u300C\u5B8C\u6210\u300D")}function Fx(){$.build=null,h.dirtyMeta=!0,so(),Ds()}function dp(){let l=$.build;l&&(Object.assign(l,{x:Math.floor(h.p.x),y:Math.floor(h.p.y),z:Math.floor(h.p.z)}),l.cells=l.cells.filter(v=>{let[M,w,P]=v.split(",").map(Number);return rh(l,_.area,M,w,P)}),h.dirtyMeta=!0,so(),Ds(),vt("\u59D4\u8A17\u7684\u7BC4\u570D\u642C\u5230\u4F60\u7AD9\u7684\u5730\u65B9\u4E86\uFF08\u7D05\u8272\u6846\u6846\uFF09"))}function pp(){let l=$.build,v=Th();if(!v)return;if(e!=="overworld"||Math.hypot(h.p.x-l.x,h.p.z-l.z)>_.area.r+16){vt("\u56DE\u5230\u7D05\u8272\u6846\u6846\u65C1\u908A\u518D\u6309\u300C\u5B8C\u6210\u300D");return}let M=Xd(up(),v);if(Ds(M),!M.ok){vt("\u9084\u6C92\u84CB\u597D\uFF1A\u770B\u770B\u59D4\u8A17\u5361\u4E0A\u6253 \u2717 \u7684\u90A3\u5E7E\u9805");return}let w=Cs();$.buildDay={d:w,n:ah($,w)+1},$.build=null,oa({id:"hwbuild:"+v.id,module:"reading",tkey:"\u5EFA\u7BC9\u59D4\u8A17",type:"build",local:!0},!0,v.en),t.coins&&Un(S,v.coins|0);for(let P in v.items||{}){let z=yn(L,P,v.items[P],g);for(let Y=0;Y<z;Y++)ut(P,h.p.x,h.p.y+1,h.p.z)}pe("builds"),rt(),At(),h.dirtyMeta=!0,en(),so(),Ds(),vt(`\u5EFA\u7BC9\u59D4\u8A17\u5B8C\u6210\uFF01 +${v.coins} \u91D1\u5E63\u3001`+Object.keys(v.items||{}).map(P=>`${x.name(P)} \xD7${v.items[P]}`).join("\u3001")),Ze("trade")}gt.bcSay.onclick=()=>{let l=Th();l&&hp(l.en)},gt.bcZhb.onclick=()=>{h.bcZh=!h.bcZh,Ds()},gt.bcHere.onclick=()=>dp(),gt.bcDone.onclick=()=>pp(),so();let ss=2,Sa=En("hw_minimap","on")!=="off";function Ox(l){Sa=l,ni("hw_minimap",l?"on":"off"),gt.mini.hidden=!l}gt.mini.hidden=!Sa;function zx(){let l=gt.mini,v=l.getContext("2d");v.fillStyle="#D9D3C0",v.fillRect(0,0,l.width,l.height),et.draw(v,h.p.x,h.p.z,2,l.width,l.height),Sf(v,l.width/2,l.height/2,h.yaw,7,"#E0352B")}function Ch(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=Math.max(240,Math.min(innerWidth-60,760)),M=Math.max(200,Math.min(innerHeight-200,540)),w=C("canvas",{class:"bigmap",width:v,height:M}),P=w.getContext("2d");P.fillStyle="#D9D3C0",P.fillRect(0,0,v,M);let{x0:z,z0:Y}=et.draw(P,h.p.x,h.p.z,ss,v,M),at=(oe,de)=>[(oe-z)*ss,(de-Y)*ss],Q=(oe,de,Ce,je,ae)=>{let[Tt,ee]=at(oe,de);Tt<-20||ee<-20||Tt>v+20||ee>M+20||(P.fillStyle=je,P.strokeStyle=je,P.lineWidth=3,ae==="roof"?(P.beginPath(),P.moveTo(Tt-8,ee+1),P.lineTo(Tt,ee-7),P.lineTo(Tt+8,ee+1),P.fill(),P.fillRect(Tt-5,ee+1,10,7)):ae==="ring"?(P.beginPath(),P.arc(Tt,ee,6,0,7),P.stroke()):P.fillRect(Tt-5,ee-5,10,10),P.font="bold 12px sans-serif",P.textAlign="center",P.strokeStyle="#EFEBDD",P.strokeText(Ce,Tt,ee-11),P.fillStyle="#26302A",P.fillText(Ce,Tt,ee-11))},mt=Math.max(v,M)/ss;for(let oe of I.villages.around(h.p.x-mt,h.p.z-mt,h.p.x+mt,h.p.z+mt))et.explored(oe.x,oe.z)&&Q(oe.x,oe.z,"\u6751\u838A","#8C5A3A","roof");for(let oe of et.portals.values())Q(oe.x+.5,oe.z+.5,oe.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");Q(Xt.x,Xt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&Q(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Pt,re]=at(h.p.x,h.p.z);Sf(P,Pt,re,h.yaw,9,"#E0352B"),l.append(C("div",{class:"panel map"},C("div",{class:"p-head"},C("h2",{},"\u5730\u5716"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),w,C("div",{class:"row"},C("button",{class:"btn small",onclick:()=>{ss=Math.min(6,ss+1),Ch()}},"\u653E\u5927"),C("button",{class:"btn small",onclick:()=>{ss=Math.max(1,ss-1),Ch()}},"\u7E2E\u5C0F"),C("label",{class:"set inline"},C("input",{type:"checkbox",checked:Sa?!0:null,onchange:oe=>Ox(oe.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),C("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function kx(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=U.filter(w=>R.done[w.id]).length,M=C("div",{class:"ach-list"});U.forEach(w=>{let P=!!R.done[w.id];M.append(C("div",{class:"ach-item"+(P?" done":"")},C("i",{class:"badge"}),C("div",{},C("b",{},w.name_zh),C("small",{},w.desc_zh+(P?"\u3000\u2713":`\uFF08${k0(R,w)}/${w.need}\uFF09`)+(w.coins?`\u3000\u734E\u52F5 ${w.coins} \u91D1\u5E63`:"")))))}),l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},`\u6210\u5C31\u3000${v} / ${U.length}`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),M))}async function Bx(l){h.travelling||(h.travelling=!0,to(!0),wh(),Hn(),vt(l==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await en(!0),ni("hw_dim",l),h.resetting=!0,location.reload())}function Rh(){let l=h.boss;l&&(gt.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${l.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${sa[l.st.phase].name_zh}`,gt.bossHp.style.width=Math.max(0,l.st.hp/ia*100)+"%")}function Vx(l){if(e!=="shadow"||R.stats.dragon)return;let v=yi,M=Math.hypot(h.p.x-v.x,h.p.z-v.z);if(!h.boss&&M<60&&ft.ready(v.x,v.z)){let z=ig();lt.add(z),h.boss={g:z,st:eg(),p:{x:v.x+.5,y:xi+1.5,z:v.z+.5},m:{kind:"boss",id:-1},t:0}}let w=h.boss;if(!w)return;w.t+=l,w.g.position.set(w.p.x,w.p.y+Math.sin(w.t*1.6)*.25,w.p.z),w.g.rotation.y=Math.atan2(-(h.p.x-w.p.x),-(h.p.z-w.p.z)),sg(w.g,w.t,l);let P=M<28;P===gt.bossbar.hidden&&(gt.bossbar.hidden=!P,P&&(Rh(),w.greeted||(w.greeted=!0,vt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function Hx(){let l=h.boss;if(!l||l.busy)return;l.busy=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let v=sa[l.st.phase],M=ii().slice(0,40).sort(()=>Math.random()-.5);aa(gt.ov,{ids:l.st.retry.concat(M),types:v.types,modules:v.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${v.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(w,P,z)=>{h.overlay=null,l.busy=!1,w!=null&&mp(w,P,z&&z.id)}})}function mp(l,v,M){let w=h.boss;if(!w)return;let P=ng(w.st,l,v,M);if(!l){let z=h.p.x-w.p.x,Y=h.p.z-w.p.z,at=Math.hypot(z,Y)||1;h.v.x=z/at*8,h.v.z=Y/at*8,h.v.y=5,vt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Rh();return}if(w.g.userData.hitT=.3,Ze("hit","stone"),P.done){Gx();return}P.phaseUp!=null?(rg(w.g,P.phaseUp),vt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${P.phaseUp+1} \u968E\u6BB5\uFF1A${sa[P.phaseUp].name_zh}`)):vt(v?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Rh()}function Gx(){lt.remove(h.boss.g),h.boss=null,gt.bossbar.hidden=!0,t.coins&&(Un(S,Of),rt()),pe("dragon"),en(),Wx()}function Wx(){Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${Of} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];l.append(C("div",{class:"ending"},C("div",{class:"paper sun"}),C("div",{class:"paper hill"}),C("div",{class:"paper hill b"}),C("div",{class:"credits"},C("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),v.map(M=>C("p",{},M)),C("button",{class:"btn big",onclick:Le},"\u7E7C\u7E8C\u5192\u96AA"))))}function Xx(l){h.riddleBusy||(h.riddleBusy=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask",aa(gt.ov,{ids:ii().slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u82F1\u6587\u5716\u66F8\u9928\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",onDone:v=>{if(h.overlay=null,h.riddleBusy=!1,!v){v===!1&&vt("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let M=-2;M<=2;M++){let w=x.get(ft.get(l.x,l.y+M,l.z));w&&w.interact==="riddle"&&ft.set(l.x,l.y+M,l.z,0)}pe("library"),h.dirtyMeta=!0,Ze("door")}}))}function qx(){if(!R.stats.village&&e==="overworld"){for(let l of I.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(l.x-h.p.x,l.z-h.p.z)<22){pe("village");break}}for(let l of Nf(O,d,J,Cs())){if(h.dirtyMeta=!0,l.kind==="tut"){Ze("pickup"),O.tut.done&&vt("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let v=t.coins?l.q.coins|0:0;v&&(Un(S,v),rt()),vt((l.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+l.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+l.q.text)+(v?`\u3000+${v} \u91D1\u5E63`:""))}Ih()}function Yx(l){if(l==="lair")return e==="shadow"?{x:yi.x+.5,z:yi.z+.5}:null;if(e!=="overworld")return null;if(l==="stele"&&Xt.stele)return{x:Xt.stele.x+.5,z:Xt.stele.z+.5};if(l==="portal"&&Xt.portal)return{x:Xt.portal.x+.5,z:Xt.portal.z+.5};if(l==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let v=null,M=1/0;for(let w of I.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let P=Math.hypot(w.x-h.p.x,w.z-h.p.z);P<M&&(M=P,v=w)}h.vilHint={t:Date.now(),v}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let gp="";function Ih(l){let v=!O.tut.done&&d.tutorial[O.tut.step],M=Df(O,d),w=v||M,P=v?O.tut.step+(h.touch?"t":"d"):"";if((l||P!==gp)&&(gp=P,gt.tut.hidden=!v,gt.tut.innerHTML="",v&&gt.tut.append(C("b",{},`\u65B0\u624B\u6559\u5B78 ${O.tut.step+1}/${d.tutorial.length}`),C("span",{},v.text),C("small",{},h.touch?v.touch:v.desk),C("button",{class:"link",onclick:()=>{Hc(O,d),h.dirtyMeta=!0,Ih(!0)}},"\u8DF3\u904E\u6559\u5B78"))),gt.obj.hidden=!w||!h.started,!w)return;h.objTarget=Yx(w.hint),gt.objArrow.hidden=!h.objTarget;let z=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;gt.objText.textContent=(v?"":"\u4E3B\u7DDA\uFF1A")+(v?v.text:M.text)+(h.objTarget&&z>4?`\uFF08\u7D04 ${z} \u683C\uFF09`:"")}function $x(){let l=gt.ov;l.innerHTML="",l.hidden=!1;let v=C("div",{class:"quest-list"});d.main.forEach((w,P)=>v.append(C("div",{class:"quest-item"+(P<O.main?" done":P===O.main?" cur":"")},C("b",{},(P<O.main?"\u2713 ":"")+w.title),C("small",{},w.text+(w.coins&&t.coins?`\u3000\u734E\u52F5 ${w.coins} \u91D1\u5E63`:"")))));let M=C("div",{class:"quest-list"});(O.daily?O.daily.picks:[]).forEach(w=>{let P=d.daily.find(Y=>Y.id===w),z=O.daily.done.includes(w);M.append(C("div",{class:"quest-item"+(z?" done":" cur")},C("b",{},(z?"\u2713 ":"")+P.text),C("small",{},`${z?P.need:Uf(O,d,J,w)} / ${P.need}`+(P.coins&&t.coins?`\u3000\u734E\u52F5 ${P.coins} \u91D1\u5E63`:""))))}),l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u5192\u96AA\u624B\u518A"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),C("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),M,C("h3",{},`\u4E3B\u7DDA\u3000${Math.min(O.main,d.main.length)} / ${d.main.length}`),v,C("p",{class:"muted"},O.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${O.tut.step+1} \u6B65`))),setTimeout(()=>{let w=l.querySelector(".quest-item.cur");w&&w.scrollIntoView&&w.scrollIntoView({block:"nearest"})},0)}function xp(){$d||!Ot.requestPointerLock||Ot.requestPointerLock()}addEventListener("keydown",l=>{if(l.target&&l.target.tagName==="INPUT")return;let v=l.key.toLowerCase();if(v==="e"){h.overlay==="inv"?Le():!h.overlay&&sn("inv"),l.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(v==="escape"&&h.overlay){h.overlay==="quiz"?(gt.ov.hidden=!0,gt.ov.innerHTML="",h.overlay=null):Le();return}if(!h.overlay){if(v==="shift"&&h.ride){to();return}h.keys[v]=!0,l.code==="Space"&&(h.keys[" "]=!0,l.preventDefault()),v>="1"&&v<="9"&&(h.sel=+v-1,At()),v==="f"&&Qd(),v==="v"&&Kd(),v==="m"&&sn("map"),v==="k"&&sn("ach"),v==="j"&&sn("quests")}}}),addEventListener("keyup",l=>{h.keys[l.key.toLowerCase()]=!1,l.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},Hn()}),Ot.addEventListener("mousedown",l=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==Ot){xp();return}if(l.button===0){let v=Ki("center");if(v){Qi(v);return}h.mining.active=!0,h.mining.src="center"}if(l.button===2){let v=Ki("center");if(v&&v.kind==="vehicle"){_h(v.veh);return}if(eo("bow")){ba();return}Ks(Vn("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",l=>{l.button===0&&Hn(),l.button===2&&(h.rightHeld=!1,h.charge&&Ma("center"))}),Ot.addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{document.pointerLockElement===Ot&&(h.yaw-=l.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-l.movementY*.0024*(h.invert?-1:1))))}),addEventListener("wheel",l=>{h.overlay||h.touch||(h.sel=(h.sel+(l.deltaY>0?1:8))%9,At())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{gt.root.classList.toggle("locked",document.pointerLockElement===Ot)});let ro=new Map;function Zx(l){h.touch!==l&&(h.touch=l,gt.root.classList.toggle("touch",l),document.body.classList.toggle("is-touch",l))}gt.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),Ot.addEventListener("pointerdown",l=>{if(l.pointerType!=="touch"||(Zx(!0),h.overlay))return;if(l.preventDefault(),(document.body.classList.contains("lefty")?l.clientX>innerWidth*.6:l.clientX<innerWidth*.4)&&l.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:l.pointerId,ox:l.clientX,oy:l.clientY},gt.joy.style.transform=`translate(${l.clientX-60}px, ${l.clientY-60}px)`,gt.joy.hidden=!1,gt.knob.style.transform="translate(0px,0px)",ro.set(l.pointerId,{kind:"joy"});return}let v={kind:"look",x:l.clientX,y:l.clientY,sx:l.clientX,sy:l.clientY,t0:performance.now(),drag:!1,hold:!1,bow:eo("bow")};v.timer=setTimeout(()=>{if(v.drag)return;if(v.bow){v.charging=ba(v.t0);return}let M=Ki("screen",v.x,v.y);if(M&&M.kind==="vehicle"){vh(M.veh),v.vehHit=!0;return}v.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=v.x,h.mining.sy=v.y},280),ro.set(l.pointerId,v),h.touchPress=v},{passive:!1}),addEventListener("pointermove",l=>{let v=ro.get(l.pointerId);if(!v)return;if(v.kind==="joy"){let P=l.clientX-h.joy.ox,z=l.clientY-h.joy.oy,Y=Math.hypot(P,z),at=55;Y>at&&(P*=at/Y,z*=at/Y),h.joy.x=P/at,h.joy.y=z/at,gt.knob.style.transform=`translate(${P}px,${z}px)`;return}let M=l.clientX-v.x,w=l.clientY-v.y;v.x=l.clientX,v.y=l.clientY,!v.drag&&!v.charging&&Math.hypot(v.x-v.sx,v.y-v.sy)>12&&(v.drag=!0,clearTimeout(v.timer),v.hold&&(Hn(),v.hold=!1)),v.drag?(h.yaw-=M*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-w*.0055*(h.invert?-1:1)))):v.hold&&(h.mining.sx=v.x,h.mining.sy=v.y)});let yp=l=>{let v=ro.get(l.pointerId);if(v){if(ro.delete(l.pointerId),h.touchPress===v&&(h.touchPress=null),v.kind==="joy"){h.joy={x:0,y:0,active:!1},gt.joy.hidden=!0;return}if(clearTimeout(v.timer),v.hold)Hn();else if(v.charging)Ma("screen",v.x,v.y);else if(!v.drag&&performance.now()-v.t0<280&&!h.overlay&&L.slots[h.sel]&&L.slots[h.sel].id==="bow")Ks(Vn("screen",v.x,v.y));else if(!v.drag&&performance.now()-v.t0<280&&!h.overlay){let M=Ki("screen",v.x,v.y);M&&M.kind==="vehicle"?_h(M.veh):M?Qi(M):Ks(Vn("screen",v.x,v.y))}}};addEventListener("pointerup",yp),addEventListener("pointercancel",yp);let _p=(l,v,M)=>{l.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),v()}),l.addEventListener("pointerup",M),l.addEventListener("pointercancel",M),l.addEventListener("pointerleave",M)};_p(gt.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),_p(gt.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),gt.bFly.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),Qd()}),gt.bPlace.addEventListener("pointerdown",l=>{if(l.preventDefault(),l.stopPropagation(),eo("bow")){ba();return}Ks(Vn("center"))}),["pointerup","pointercancel","pointerleave"].forEach(l=>gt.bPlace.addEventListener(l,()=>{h.charge&&Ma("center")})),document.addEventListener("touchmove",l=>{l.target.closest(".scroll, .panel")||l.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(l=>document.addEventListener(l,v=>v.preventDefault(),{passive:!1})),gt.start.hidden=!1,gt.go.onclick=()=>{gt.start.hidden=!0,h.started=!0,h.paused=!1,gt.root.classList.add("started"),Ds(),h.touch||xp()};async function en(l){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let v={hw_meta:{v:1,seed:F,time:h.time,build:ch},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:ht.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse,pets:Bd(_e.list).concat(h.petsPending).slice(0,qs)},hw_inventory:na(L),hw_coins:Y0(S),[i("hw_furnaces")]:W,[i("hw_chests")]:Object.fromEntries(Object.entries(ot).map(([M,w])=>[M,na(w)])),[i("hw_crops")]:Mt,hw_quests:$,hw_portal_claimed:st.slice(-200),hw_ach:R,hw_story:O,[i("hw_vehicles")]:h.vehicles.map(M=>({kind:M.kind,x:M.p.x,y:M.p.y,z:M.p.z,yaw:M.yaw,wy:M.y,st:M.st?{x:M.st.x,y:M.st.y,z:M.st.z,shape:M.st.shape,from:M.st.from,s:M.st.s}:null}))};et.dirty&&(l||Date.now()-(h.mapSavedAt||0)>3e4)&&(v[i("hw_map")]=et.serialize(),h.mapSavedAt=Date.now());for(let M of h.dirty){let w=D.get(M);w&&(v[s+M]=kf(w))}h.dirty.clear(),h.dirtyMeta=!1;try{await Xc(v),h.lastSave=Date.now()}catch(M){console.warn("save failed",M),!h.quotaWarned&&M&&(M.name==="QuotaExceededError"||/quota/i.test(M.message||""))&&(h.quotaWarned=!0,vt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{h.started&&en()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&en(!0)}),addEventListener("pagehide",()=>{h.started&&en(!0)}),h.stats={mined:0,placed:0};function vp(){let l=innerWidth,v=innerHeight;Kt.setSize(l,v,!1),ct.aspect=l/v,ct.updateProjectionMatrix()}addEventListener("resize",vp),vp(),rt(),At(),tt(),_n(),t.creative&&(ji("#coinpill").hidden=!0,ji("#modebadge").hidden=!1,gt.btnShop.hidden=!0,gt.hearts.hidden=!0),(Array.isArray(A.vehs)?A.vehs:[]).forEach(l=>{l&&(l.kind==="boat"||l.kind==="minecart"&&l.st)&&yh(l.kind,l,l.yaw||0,l.kind==="boat"?{y:l.wy}:{st:Object.assign({v:0,lastIn:0},l.st)})}),$r(),setInterval($r,6e4),mh(),e==="shadow"&&(pe("shadow"),setTimeout(()=>vt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",l=>{l.persisted&&mh()});let bp=performance.now(),wa=0,Ph=0,Jx=new ue("#EFEBDD"),jx=new ue("#22302F"),Kx=new ue("#E6B48C");function Mp(l){requestAnimationFrame(Mp);let v=(l-bp)/1e3;bp=l;let M=Math.min(.05,v);h.frames.push(v*1e3),h.frames.length>4e3&&h.frames.shift(),ft.update(h.p.x,h.p.z);let w=ft.ready(h.p.x,h.p.z);if(h.auto&&ny(M),h.started&&!h.overlay&&w&&ty(M),h.started&&w&&!h.travelling){let ae=x.get(ft.get(h.p.x,h.p.y+.2,h.p.z));ae&&ae.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+M,h.portalT>1&&Bx(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&Td(ht,M)&&(tt(),h.dirtyMeta=!0),h.time=(h.time+M/E1)%1;let P=h.time*Math.PI*2,z=Math.sin(P),Y=e==="shadow"?.42:Math.min(1,Math.max(0,(z+.12)/.42));yt.copy(jx).lerp(Jx,Y);let at=Math.max(0,1-Math.abs(z)/.3)*(Y>.05?1:.4);if(yt.lerp(Kx,at*.55),e==="shadow"&&yt.set("#1C2620"),!(t.creative&&En("hw_weather","on")==="off")?md(h.weather,M):h.weather.level=0,h.ambT=(h.ambT||0)+M,h.ambT>1){h.ambT=0;let ae=Math.floor(h.p.x),Tt=Math.floor(h.p.z),ee=!1;for(let Ne=2;Ne<14&&!ee;Ne++)x.flat.opaque[ft.get(ae,Math.floor(h.p.y)+Ne,Tt)]&&(ee=!0);h.underground=ee&&h.p.y<I.height(ae,Tt)-4,h.biome=I.biomeOf(ae,Tt),h.biome==="snowfield"&&e==="overworld"&&!R.stats.snowfield&&(pe("snowfield"),vt("\u4F86\u5230\u96EA\u539F\u4E86\uFF01\u51B0\u4E0A\u6ED1\u6ED1\u7684\uFF0C\u5C0F\u5FC3\u8D70"));let De=fd({day:Y,underground:h.underground});De!==h.musicScene&&(h.musicScene=De,cd(dd[De]))}let mt=h.underground||e==="shadow"?null:gd(h.biome,h.weather),Pt=mt?h.weather.level:0;Pt&&yt.lerp(h.rainSky||(h.rainSky=new ue("#8E9590")),.45*Pt),Ut(M,ct.position,mt),hd(mt==="rain"?Pt:0),Rs(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),qt.uniforms.uDay.value=Y*(1-.3*Pt),qt.uniforms.uFog.value.set(...Qx(yt));let re=jr();h.eyeOff*=Math.pow(5e-4,M);let oe=va();if(h.view==="tp"){let ae=zr(re,{x:-oe.x,y:-oe.y,z:-oe.z},4,jn,ee=>x.flat.opaque[ee]===1),Tt=ae?Math.max(.4,ae.dist-.25):4;ct.position.set(re.x-oe.x*Tt,re.y-oe.y*Tt,re.z-oe.z*Tt)}else ct.position.set(re.x,re.y,re.z);ct.rotation.set(h.pitch,h.yaw,0);let de=ct.far*.8;if(Ge.position.set(ct.position.x+Math.cos(P)*de,ct.position.y+Math.sin(P)*de,ct.position.z+.25*de),Ge.scale.setScalar(de*.14),Ae.position.set(ct.position.x-Math.cos(P)*de,ct.position.y-Math.sin(P)*de,ct.position.z-.25*de),Ae.scale.setScalar(de*.1),Ge.visible=Ae.visible=e!=="shadow",$t.visible=h.view==="tp",$t.visible){$t.position.set(h.p.x,h.p.y+(h.ride?fx[h.ride.kind]:0),h.p.z),$t.rotation.y=h.yaw;let ae=Math.hypot(h.v.x,h.v.z),Tt=Math.sin(l/120)*Math.min(1,ae/4)*.7;Nt.rotation.x=Tt,te.rotation.x=-Tt,se.rotation.x=-Tt,ge.rotation.x=Tt;let ee=.35+.65*Y;$t.children.forEach(De=>De.material.color.copy(De.userData.base).multiplyScalar(ee))}for(let ae in G)G[ae].color.setScalar(.4+.6*Y);sp.color.setScalar(.5+.5*Y);for(let ae in Kr)Kr[ae].color.copy(Kr[ae].userData.base).multiplyScalar(.35+.65*Y);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Ce=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?Vn("screen",h.mining.sx,h.mining.sy):Vn("center"):null;if(Ce){we.visible=!0;let ae=xh(Ce.n);if(ae){let Tt=1,ee=1,De=1,Ne=0,un=0,mn=0;for(let ki of ae)Tt=Math.min(Tt,ki[0]),ee=Math.min(ee,ki[1]),De=Math.min(De,ki[2]),Ne=Math.max(Ne,ki[3]),un=Math.max(un,ki[4]),mn=Math.max(mn,ki[5]);we.scale.set(Ne-Tt,un-ee,mn-De),we.position.set(Ce.x+(Tt+Ne)/2,Ce.y+(ee+un)/2,Ce.z+(De+mn)/2)}else we.scale.set(1,1,1),we.position.set(Ce.x+.5,Ce.y+.5,Ce.z+.5)}else we.visible=!1;let je=h.touchPress;if(Tx(!h.started||h.overlay||h.mining.active?null:h.touch?je&&!je.drag&&!je.hold?Vn("screen",je.x,je.y):null:Ce),h.mining.active&&Ce){let ae=Ce.x+","+Ce.y+","+Ce.z;ae!==h.mining.k&&(h.mining.k=ae,h.mining.t=0),h.mining.t+=M;let Tt=t.creative?x.get(Ce.n).hardness<0?1/0:t.breakTime:Kc(x.get(Ce.n),ip()).time;if(Tt===1/0)fe.visible=!1,h.mining.warned||(vt(x.name(Ce.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+M,h.mining.tick>.25&&(h.mining.tick=0,Ze("hit",Gr(x.get(Ce.n))));let ee=h.mining.t/Tt;fe.visible=!0,fe.position.copy(we.position),fe.scale.copy(we.scale),fe.material.map=ce[Math.min(3,Math.floor(ee*4))],ee>=1&&(wx(Ce),h.mining.k="",h.mining.t=0,fe.visible=!1)}}else fe.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=M,h.placeRepeat<=0&&(Ks(Vn("center")),h.placeRepeat=.25)),h.charge)if(h.overlay||!eo("bow"))cp();else{let ae=eh((performance.now()-h.charge.t0)/1e3);gt.chargeBar.style.width=Math.round(ae*100)+"%",gt.charge.classList.toggle("full",ae>=th)}if(ey(M),Nx(h.overlay?0:M),h.fish){let ae=_f(h.fish,M),Tt=L.slots[h.sel];!Tt||Tt.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?wh():(ae==="bite"?(vt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),Ze("pickup")):ae==="escape"&&vt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Sh.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(l/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+M,h.netT>.25&&(h.netT=0,j.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let ae=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));ae<2&&(h.walkAcc=(h.walkAcc||0)+ae),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+M,h.storyT>.5&&(h.storyT=0,qx())}if(h.objTarget&&!gt.objArrow.hidden){let ae=h.objTarget,Tt=Math.atan2(-(ae.x-h.p.x),-(ae.z-h.p.z))-h.yaw;gt.objArrow.style.transform="rotate("+-Tt+"rad)"}if(h.started&&!document.hidden&&!h.dead&&(h.playT=(h.playT||0)+M,h.playT>1800&&(h.playT=0,gt.rest.hidden=!1,Ze("pickup"))),h.mapT=(h.mapT||0)+M,h.mapT>.3&&(h.mapT=0,et.scan(ft,h.mapDirty),Sa&&zx()),h.cropT=(h.cropT||0)+M,h.cropT>2){h.cropT=0;let ae=Date.now();for(let Tt in Mt){let[ee,De,Ne]=Tt.split(",").map(Number);if(!ft.ready(ee,Ne))continue;let un=x.get(ft.get(ee,De,Ne));if(!un||!un.crop){delete Mt[Tt];continue}let mn=Kf(Mt[Tt].t,ae,Mt[Tt].wet);mn>(un.stage|0)&&(ft.set(ee,De,Ne,x.num("wheat_"+mn)),h.dirtyMeta=!0)}}xa(h.overlay?0:M,Y,l),Vx(h.overlay?0:M);for(let ae in W){let Tt=W[ae];Tt.jobs.length&&(vd(Tt,M),h.dirtyMeta=!0,h.overlay==="furnace"&&ae===Bn&&(h.furnUi=(h.furnUi||0)+M)>.5&&(h.furnUi=0,Oe()))}Kt.render(lt,ct),wa+=v,Ph++,wa>.5&&(gt.dbg&&(gt.dbg.textContent=`${Math.round(Ph/wa)} fps \xB7 \u5340\u584A ${ft.stats.loaded} \xB7 ${A0[I.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),wa=0,Ph=0),!w&&h.started?gt.loading.hidden=!1:gt.loading.hidden=!0}function Qx(l){let v=l.getHexString();return[parseInt(v.slice(0,2),16)/255,parseInt(v.slice(2,4),16)/255,parseInt(v.slice(4,6),16)/255]}function ty(l){let v=h.keys,M=(v.d?1:0)-(v.a?1:0),w=(v.w?1:0)-(v.s?1:0);h.joy.active&&(M=h.joy.x,w=-h.joy.y);let P=Math.min(1,Math.hypot(M,w));if(P>0){let mn=Math.hypot(M,w);M=M/mn*P,w=w/mn*P}let z=-Math.sin(h.yaw),Y=-Math.cos(h.yaw),at=Math.cos(h.yaw),Q=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){Ix(l,M,w,z,Y,at,Q);return}let mt=v.control||!h.fly&&v.shift||h.joy.active&&P>.92,Pt=jn(h.p.x,h.p.y+.1,h.p.z),re=jn(h.p.x,h.p.y+1,h.p.z),oe=x.flat.liquid[Pt]===1||x.flat.liquid[re]===1,de=!h.fly&&(x.flat.climb[Pt]===2||x.flat.climb[re]===2);de!==!!h.climbing&&(h.climbing=de,gt.root.classList.toggle("climbing",de));let Ce=h.fly?10:h.ride?8.5:oe?2.6:mt?6.2:4.3,je=(z*w+at*M)*Ce,ae=(Y*w+Q*M)*Ce,Tt=v[" "]||h.jumpHeld,ee=h.fly&&v.shift||h.downHeld;if(h.fly)h.v.x=je,h.v.z=ae,h.v.y=((Tt?1:0)-(ee?1:0))*8;else{let mn=h.onGround?jn(h.p.x,h.p.y-.05,h.p.z)===bt&&!h.ride?2:14:5,ki=1-Math.exp(-mn*l);if(h.v.x+=(je-h.v.x)*ki,h.v.z+=(ae-h.v.z)*ki,oe)h.v.y-=9*l,h.v.y<-3&&(h.v.y=-3),Tt&&(h.v.y=3.4);else if(x.flat.climb[Pt]||x.flat.climb[re]){let Lh=de,iy=ee||Lh&&v.shift;h.v.y=Tt||!Lh&&w>.1?3.2:iy?-3:Lh?0:Math.max(h.v.y-28*l,-1.5),h.fallTop=h.p.y}else h.v.y-=28*l,h.v.y<-40&&(h.v.y=-40),Tt&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1)}let De=h.onGround,Ne=Dc(h.p,h.v,l,It,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=Ne.onGround,Ne.stepped&&(h.eyeOff-=Ne.stepped),h.fallTop==null||h.fly||oe||h.onGround&&De?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!De){let mn=Ad(h.fallTop-h.p.y,{water:oe,flying:h.fly});mn&&(zt(mn),vt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let un=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&un>1&&(h.stepT=(h.stepT||0)+l*un,h.stepT>1.8&&(h.stepT=0,Ze("step",Gr(x.get(jn(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:Xt.x,y:Xt.y+1,z:Xt.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function ey(l){let v=h.p.x,M=h.p.y+.9,w=h.p.z;for(let P=h.drops.length-1;P>=0;P--){let z=h.drops[P];z.age+=l;let Y=v-z.p.x,at=M-z.p.y,Q=w-z.p.z,mt=Math.hypot(Y,at,Q);if(mt<1.5&&z.age>.25&&yn(L,z.id,1,g)===0){lt.remove(z.s),h.drops.splice(P,1),h.dirtyMeta=!0,At(),Ze("pickup");continue}if(mt<4.5&&z.age>.25?(z.v.x=Y/mt*6,z.v.y=at/mt*6,z.v.z=Q/mt*6,z.p.x+=z.v.x*l,z.p.y+=z.v.y*l,z.p.z+=z.v.z*l):(z.v.y-=18*l,z.v.x*=.9,z.v.z*=.9,Dc(z.p,z.v,l,It,{w:.25,h:.25})),z.age>300){lt.remove(z.s),h.drops.splice(P,1);continue}z.s.position.set(z.p.x,z.p.y+.2+Math.sin(z.age*3)*.06,z.p.z)}}h.auto=uh.get("auto")==="walk";let Sp=0;function ny(l){h.started||gt.go.click(),Sp+=l,h.keys.w=!0,h.keys[" "]=Sp%1.6<.15,h.yaw+=l*.08}window.HW={build:ch,TEST:$d,G:h,reg:x,inv:L,wallet:S,world:ft,Inv:Vc,Aud:ud,Amb:xd,chests:ot,crops:Mt,Farm:ad,clickSlot:an,MODE:n,RULE:t,switchMode:gh,questState:$,tradesJson:p,spawnVillagers:Zs,terr:I,claimPortalRewards:mh,portals:k,claimedIds:st,mobS:_e,mobDefs:Ht,spawnMob:Fi,hitMob:Qi,mobAt:Ki,surfaceY:Cn,health:ht,hurt:zt,Health:Id,furnaces:W,Smelt:Sd,smeltList:wt,recipes:y,craftCtx:be,breakInfo:Kc,start(){gt.go.click()},state(){return{pos:{...h.p},coins:S.coins,inv:na(L),loaded:ft.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(l,v,M){let w=jr(),P=l-w.x,z=v-w.y,Y=M-w.z;h.yaw=Math.atan2(-P,-Y),h.pitch=Math.atan2(z,Math.hypot(P,Y))},target(){let l=Vn("center");return l&&{x:l.x,y:l.y,z:l.z,n:l.n,face:l.face}},mine(l){l?(h.mining.active=!0,h.mining.src="center"):Hn()},use(){return Ks(Vn("center"))},key(l,v){h.keys[l]=v},books:is,booksJson:m,shootArrow:Ah,Arch:Ud,Pets:Hd,petClick:ap,startCharge:ba,releaseCharge:Ma,achDefs:U,buildsJson:_,Build:Yd,acceptBuild:fp,buildDone:pp,buildHere:dp,buildCells:up,areaBox:Ls,open:sn,close:Le,save:en,spawn:Xt,dismount:to,Rail:xf,ach:R,mapv:et,Fish:Mf,bump:pe,bank:B,net:j,backupData:Jd,applyPrefs:q,story:O,Story:Ff,QJ:d,DIM:e,bossDamage:mp,Shadow:Ef,hitVehicle:vh,rideVehicle:_h,ghostState:()=>({visible:tr.visible,sy:bh[0].scale.y,two:bh[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:ft.stats.meshMs.slice(),genMs:ft.stats.genMs.slice(),loaded:ft.stats.loaded}},resetPerf(){h.frames.length=0,ft.stats.meshMs.length=0,ft.stats.genMs.length=0},info:()=>({calls:Kt.info.render.calls,tris:Kt.info.render.triangles,geos:Kt.info.memory.geometries,objs:lt.children.length}),ready:()=>ft.ready(h.p.x,h.p.z)},requestAnimationFrame(Mp)}function L1(){let n=ji("#ui"),t=e=>n.querySelector(e);return uh.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:ji("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:ji("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),charge:t("#charge"),chargeBar:t("#chargebar"),bc:t("#buildcard"),bcEn:t("#bc-en"),bcZh:t("#bc-zh"),bcRes:t("#bc-res"),bcSay:t("#bc-say"),bcZhb:t("#bc-zhb"),bcHere:t("#bc-here"),bcDone:t("#bc-done"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:ji("#start"),go:ji("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}P1().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
