(()=>{var v0=Object.defineProperty;var Ii=(n,t)=>{for(var e in t)v0(n,e,{get:t[e],enumerable:!0})};var nd=0,nh=1,id=2;var so=1,sd=2,ir=3,os=0,Cn=1,Xn=2,Mi=0,sr=1,ih=2,sh=3,rh=4,rd=5;var ws=100,od=101,ad=102,ld=103,cd=104,hd=200,ud=201,fd=202,dd=203,oh=204,ah=205,pd=206,md=207,gd=208,xd=209,_d=210,yd=211,vd=212,Md=213,bd=214,ya=0,va=1,Ma=2,Ks=3,ba=4,Sa=5,wa=6,Aa=7,lh=0,Sd=1,wd=2,ii=0,ch=1,hh=2,uh=3,fh=4,dh=5,ph=6,mh=7;var gh=300,as=301,As=302,el=303,nl=304,ro=306,Ea=1e3,gi=1001,Ta=1002,hn=1003,Ad=1004;var oo=1005;var nn=1006,il=1007;var ls=1008;var zn=1009,xh=1010,_h=1011,rr=1012,sl=1013,si=1014,ri=1015,oi=1016,rl=1017,ol=1018,or=1020,yh=35902,vh=35899,Mh=1021,bh=1022,qn=1023,xi=1026,cs=1027,Sh=1028,al=1029,hs=1030,ll=1031;var cl=1033,ao=33776,lo=33777,co=33778,ho=33779,hl=35840,ul=35841,fl=35842,dl=35843,pl=36196,ml=37492,gl=37496,xl=37488,_l=37489,uo=37490,yl=37491,vl=37808,Ml=37809,bl=37810,Sl=37811,wl=37812,Al=37813,El=37814,Tl=37815,Cl=37816,Rl=37817,Il=37818,Pl=37819,Ll=37820,Dl=37821,Nl=36492,Ul=36494,Fl=36495,Ol=36283,Bl=36284,fo=36285,zl=36286;var Or=2300,Ca=2301,ga=2302,Zc=2303,Jc=2400,Kc=2401,jc=2402;var Ed=3200;var wh=0,Td=1,Oi="",en="srgb",Br="srgb-linear",zr="linear",De="srgb";var xa=7680;var Cd=519,Rd=512,Id=513,Pd=514,kl=515,Ld=516,Dd=517,Vl=518,Nd=519,Ah=35044;var Eh="300 es",ni=2e3,kr=2001;function M0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function b0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ud(){let n=Vr("canvas");return n.style.display="block",n}var Rf={},js=null;function Gr(...n){let t="THREE."+n.shift();js?js("log",t,...n):console.log(t,...n)}function Fd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ie(...n){n=Fd(n);let t="THREE."+n.shift();if(js)js("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ae(...n){n=Fd(n);let t="THREE."+n.shift();if(js)js("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function vs(...n){let t=n.join(" ");t in Rf||(Rf[t]=!0,ie(...n))}function Od(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Bd={[ya]:va,[Ma]:wa,[ba]:Aa,[Ks]:Sa,[va]:ya,[wa]:Ma,[Aa]:ba,[Sa]:Ks},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _a=Math.PI/180,Ra=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function S0(n,t){return(n%t+t)%t}function Ac(n,t,e){return(1-e)*n+e*t}function pi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ph=class Ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var Me=Ph,yi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[o+0],g=r[o+1],_=r[o+2],y=r[o+3];if(u!==y||l!==h||c!==g||d!==_){let x=l*h+c*g+d*_+u*y;x<0&&(h=-h,g=-g,_=-_,y=-y,x=-x);let m=1-a;if(x<.9995){let T=Math.acos(x),L=Math.sin(T);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L,l=l*m+h*a,c=c*m+g*a,d=d*m+_*a,u=u*m+y*a}else{l=l*m+h*a,c=c*m+g*a,d=d*m+_*a,u=u*m+y*a;let T=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=T,c*=T,d*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],h=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+d*u+l*g-c*h,t[e+1]=l*_+d*h+c*u-a*g,t[e+2]=c*_+d*g+a*h-l*u,t[e+3]=d*_-a*u-l*h-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),h=l(i/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*g*_,this._y=c*g*u-h*d*_,this._z=c*d*_+h*g*u,this._w=c*d*u-h*g*_;break;case"YXZ":this._x=h*d*u+c*g*_,this._y=c*g*u-h*d*_,this._z=c*d*_-h*g*u,this._w=c*d*u+h*g*_;break;case"ZXY":this._x=h*d*u-c*g*_,this._y=c*g*u+h*d*_,this._z=c*d*_+h*g*u,this._w=c*d*u-h*g*_;break;case"ZYX":this._x=h*d*u-c*g*_,this._y=c*g*u+h*d*_,this._z=c*d*_-h*g*u,this._w=c*d*u+h*g*_;break;case"YZX":this._x=h*d*u+c*g*_,this._y=c*g*u+h*d*_,this._z=c*d*_-h*g*u,this._w=c*d*u-h*g*_;break;case"XZY":this._x=h*d*u-c*g*_,this._y=c*g*u-h*d*_,this._z=c*d*_+h*g*u,this._w=c*d*u+h*g*_;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=i+a+u;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>u){let g=2*Math.sqrt(1+i-a-u);this._w=(d-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>u){let g=2*Math.sqrt(1+a-i-u);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+u-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lh=class Lh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),d=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;var $=Lh,Ec=new $,If=new yi,Dh=class Dh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],g=i[5],_=i[8],y=s[0],x=s[3],m=s[6],T=s[1],L=s[4],b=s[7],w=s[2],C=s[5],N=s[8];return r[0]=o*y+a*T+l*w,r[3]=o*x+a*L+l*C,r[6]=o*m+a*b+l*N,r[1]=c*y+d*T+u*w,r[4]=c*x+d*L+u*C,r[7]=c*m+d*b+u*N,r[2]=h*y+g*T+_*w,r[5]=h*x+g*L+_*C,r[8]=h*m+g*b+_*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,h=a*l-d*r,g=c*r-o*l,_=e*u+i*h+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=u*y,t[1]=(s*c-d*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(d*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=g*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var de=Dh,Tc=new de,Pf=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w0(){let n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===De&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===De&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:t,whitePoint:i,transfer:zr,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:De,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var we=w0();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ds,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=Vr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},A0=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cc(s[o].image)):r.push(Cc(s[o]))}else r=Cc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var E0=0,Rc=new $,fn=class n extends _i{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gi,s=gi,r=nn,o=ls,a=qn,l=zn,c=n.DEFAULT_ANISOTROPY,d=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ki(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=gh;fn.DEFAULT_ANISOTROPY=1;var Nh=class Nh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],g=l[5],_=l[9],y=l[2],x=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(_-x)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(_+x)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,b=(g+1)/2,w=(m+1)/2,C=(d+h)/4,N=(u+y)/4,M=(_+x)/4;return L>b&&L>w?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=C/i,r=N/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=N/r,s=M/r),this.set(i,s,r,e),this}let T=Math.sqrt((x-_)*(x-_)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(x-_)/T,this.y=(u-y)/T,this.z=(h-d)/T,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;var Ze=Nh,Pa=class extends _i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new fn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Pa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Hr=class extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var tl=class tl{constructor(t,e,i,s,r,o,a,l,c,d,u,h,g,_,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,d,u,h,g,_,y,x)}set(t,e,i,s,r,o,a,l,c,d,u,h,g,_,y,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=g,m[7]=_,m[11]=y,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let h=o*d,g=o*u,_=a*d,y=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=g+_*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*d,g=l*u,_=c*d,y=c*u;e[0]=h+y*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=g*a-_,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*d,g=l*u,_=c*d,y=c*u;e[0]=h-y*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*d,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*d,g=o*u,_=a*d,y=a*u;e[0]=l*d,e[4]=_*c-g,e[8]=h*c+y,e[1]=l*u,e[5]=y*c+h,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*d,e[4]=y-h*u,e[8]=_*u+g,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=g*u+_,e[10]=h-y*u}else if(t.order==="XZY"){let h=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+y,e[5]=o*d,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*d,e[10]=y*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(T0,t,C0)}lookAt(t,e,i){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qi.crossVectors(i,Fn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qi.crossVectors(i,Fn)),qi.normalize(),Vo.crossVectors(Fn,qi),s[0]=qi.x,s[4]=Vo.x,s[8]=Fn.x,s[1]=qi.y,s[5]=Vo.y,s[9]=Fn.y,s[2]=qi.z,s[6]=Vo.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],g=i[13],_=i[2],y=i[6],x=i[10],m=i[14],T=i[3],L=i[7],b=i[11],w=i[15],C=s[0],N=s[4],M=s[8],A=s[12],R=s[1],z=s[5],X=s[9],k=s[13],F=s[2],V=s[6],K=s[10],Z=s[14],nt=s[3],J=s[7],tt=s[11],st=s[15];return r[0]=o*C+a*R+l*F+c*nt,r[4]=o*N+a*z+l*V+c*J,r[8]=o*M+a*X+l*K+c*tt,r[12]=o*A+a*k+l*Z+c*st,r[1]=d*C+u*R+h*F+g*nt,r[5]=d*N+u*z+h*V+g*J,r[9]=d*M+u*X+h*K+g*tt,r[13]=d*A+u*k+h*Z+g*st,r[2]=_*C+y*R+x*F+m*nt,r[6]=_*N+y*z+x*V+m*J,r[10]=_*M+y*X+x*K+m*tt,r[14]=_*A+y*k+x*Z+m*st,r[3]=T*C+L*R+b*F+w*nt,r[7]=T*N+L*z+b*V+w*J,r[11]=T*M+L*X+b*K+w*tt,r[15]=T*A+L*k+b*Z+w*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],g=t[14],_=t[3],y=t[7],x=t[11],m=t[15],T=l*g-c*h,L=a*g-c*u,b=a*h-l*u,w=o*g-c*d,C=o*h-l*d,N=o*u-a*d;return e*(y*T-x*L+m*b)-i*(_*T-x*w+m*C)+s*(_*L-y*w+m*N)-r*(_*b-y*C+x*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-i*(r*d-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],g=t[11],_=t[12],y=t[13],x=t[14],m=t[15],T=e*a-i*o,L=e*l-s*o,b=e*c-r*o,w=i*l-s*a,C=i*c-r*a,N=s*c-r*l,M=d*y-u*_,A=d*x-h*_,R=d*m-g*_,z=u*x-h*y,X=u*m-g*y,k=h*m-g*x,F=T*k-L*X+b*z+w*R-C*A+N*M;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/F;return t[0]=(a*k-l*X+c*z)*V,t[1]=(s*X-i*k-r*z)*V,t[2]=(y*N-x*C+m*w)*V,t[3]=(h*C-u*N-g*w)*V,t[4]=(l*R-o*k-c*A)*V,t[5]=(e*k-s*R+r*A)*V,t[6]=(x*b-_*N-m*L)*V,t[7]=(d*N-h*b+g*L)*V,t[8]=(o*X-a*R+c*M)*V,t[9]=(i*R-e*X-r*M)*V,t[10]=(_*C-y*b+m*T)*V,t[11]=(u*b-d*C-g*T)*V,t[12]=(a*A-o*z-l*M)*V,t[13]=(e*z-i*A+s*M)*V,t[14]=(y*L-_*w-x*T)*V,t[15]=(d*w-u*L+h*T)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,h=r*c,g=r*d,_=r*u,y=o*d,x=o*u,m=a*u,T=l*c,L=l*d,b=l*u,w=i.x,C=i.y,N=i.z;return s[0]=(1-(y+m))*w,s[1]=(g+b)*w,s[2]=(_-L)*w,s[3]=0,s[4]=(g-b)*C,s[5]=(1-(h+m))*C,s[6]=(x+T)*C,s[7]=0,s[8]=(_+L)*N,s[9]=(x-T)*N,s[10]=(1-(h+y))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,d=1/a,u=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,e.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ni,l=!1){let c=this.elements,d=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),g=(i+s)/(i-s),_,y;if(l)_=r/(o-r),y=o*r/(o-r);else if(a===ni)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===kr)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ni,l=!1){let c=this.elements,d=2/(e-t),u=2/(i-s),h=-(e+t)/(e-t),g=-(i+s)/(i-s),_,y;if(l)_=1/(o-r),y=o/(o-r);else if(a===ni)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===kr)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};tl.prototype.isMatrix4=!0;var Ye=tl,Ns=new $,jn=new Ye,T0=new $(0,0,0),C0=new $(1,1,1),qi=new $,Vo=new $,Fn=new $,Df=new Ye,Nf=new yi,ji=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Df,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},R0=0,Uf=new $,Us=new yi,Pi=new Ye,Go=new $,Rr=new $,I0=new $,P0=new yi,Ff=new $(1,0,0),Of=new $(0,1,0),Bf=new $(0,0,1),zf={type:"added"},L0={type:"removed"},Fs={type:"childadded",child:null},Ic={type:"childremoved",child:null},En=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new ji,i=new yi,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new de}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Of,t)}rotateZ(t){return this.rotateOnAxis(Bf,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Of,t)}translateZ(t){return this.translateOnAxis(Bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Go.copy(t):Go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Rr,Go,this.up):Pi.lookAt(Go,Rr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Pi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zf),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(L0),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zf),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,P0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),h=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new $(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,i),m=this._getHandJoint(c,y);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Pc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=S0(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Pc(o,r,t+1/3),this.g=Pc(o,r,t),this.b=Pc(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return we.workingToColorSpace(gn.copy(this),t),Math.round(Ae(gn.r*255,0,255))*65536+Math.round(Ae(gn.g*255,0,255))*256+Math.round(Ae(gn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=en){we.workingToColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Ho);let i=Ac(Yi.h,Ho.h,e),s=Ac(Yi.s,Ho.s,e),r=Ac(Yi.l,Ho.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new le;le.NAMES=zd;var Xr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new $,Li=new $,Lc=new $,Di=new $,Os=new $,Bs=new $,kf=new $,Dc=new $,Nc=new $,Uc=new $,Fc=new Ze,Oc=new Ze,Bc=new Ze,mi=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qn.subVectors(s,e),Li.subVectors(i,e),Lc.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Li),l=Qn.dot(Lc),c=Li.dot(Li),d=Li.dot(Lc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,g=(c*l-a*d)*h,_=(o*d-a*l)*h;return r.set(1-g-_,_,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Fc.setScalar(0),Oc.setScalar(0),Bc.setScalar(0),Fc.fromBufferAttribute(t,e),Oc.fromBufferAttribute(t,i),Bc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(t,e,i,s){return Qn.subVectors(i,e),Li.subVectors(t,e),Qn.cross(Li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Qn.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),Bs.subVectors(r,i),Dc.subVectors(t,i);let l=Os.dot(Dc),c=Bs.dot(Dc);if(l<=0&&c<=0)return e.copy(i);Nc.subVectors(t,s);let d=Os.dot(Nc),u=Bs.dot(Nc);if(d>=0&&u<=d)return e.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(Os,o);Uc.subVectors(t,r);let g=Os.dot(Uc),_=Bs.dot(Uc);if(_>=0&&g<=_)return e.copy(r);let y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Bs,a);let x=d*_-g*u;if(x<=0&&u-d>=0&&g-_>=0)return kf.subVectors(r,s),a=(u-d)/(u-d+(g-_)),e.copy(s).addScaledVector(kf,a);let m=1/(x+y+h);return o=y*m,a=h*m,e.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qi=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Xo.subVectors(this.max,Ir),zs.subVectors(t.a,Ir),ks.subVectors(t.b,Ir),Vs.subVectors(t.c,Ir),$i.subVectors(ks,zs),Zi.subVectors(Vs,ks),gs.subVectors(zs,Vs);let e=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!zc(e,zs,ks,Vs,Xo)||(e=[1,0,0,0,1,0,0,0,1],!zc(e,zs,ks,Vs,Xo))?!1:(qo.crossVectors($i,Zi),e=[qo.x,qo.y,qo.z],zc(e,zs,ks,Vs,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new $,new $,new $,new $,new $,new $,new $,new $],ti=new $,Wo=new Qi,zs=new $,ks=new $,Vs=new $,$i=new $,Zi=new $,gs=new $,Ir=new $,Xo=new $,qo=new $,xs=new $;function zc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),d=i.dot(xs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var tn=new $,Yo=new Me,N0=0,Je=class extends _i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var qr=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Yr=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var An=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}},U0=new Qi,Pr=new $,kc=new $,ts=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):U0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(kc)),this.expandByPoint(Pr.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},F0=0,Hn=new Ye,Vc=new En,Gs=new $,On=new Qi,Lr=new Qi,cn=new $,on=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?Yr:qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new de().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return Vc.lookAt(t),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new An(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(On.min,Lr.min),On.expandByPoint(cn),cn.addVectors(On.max,Lr.max),On.expandByPoint(cn)):(On.expandByPoint(Lr.min),On.expandByPoint(Lr.max))}On.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)cn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),cn.add(Gs)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new $,l[M]=new $;let c=new $,d=new $,u=new $,h=new Me,g=new Me,_=new Me,y=new $,x=new $;function m(M,A,R){c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,R),d.sub(c),u.sub(c),g.sub(h),_.sub(h);let z=1/(g.x*_.y-_.x*g.y);isFinite(z)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(z),x.copy(u).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(z),a[M].add(y),a[A].add(y),a[R].add(y),l[M].add(x),l[A].add(x),l[R].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let M=0,A=T.length;M<A;++M){let R=T[M],z=R.start,X=R.count;for(let k=z,F=z+X;k<F;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let L=new $,b=new $,w=new $,C=new $;function N(M){w.fromBufferAttribute(s,M),C.copy(w);let A=a[M];L.copy(A),L.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(C,A);let z=b.dot(l[M])<0?-1:1;o.setXYZW(M,L.x,L.y,L.z,z)}for(let M=0,A=T.length;M<A;++M){let R=T[M],z=R.start,X=R.count;for(let k=z,F=z+X;k<F;k+=3)N(t.getX(k+0)),N(t.getX(k+1)),N(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,d=new $,u=new $;if(t)for(let h=0,g=t.count;h<g;h+=3){let _=t.getX(h+0),y=t.getX(h+1),x=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,g=e.count;h<g;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),g=0,_=0;for(let y=0,x=l.length;y<x;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*d;for(let m=0;m<d;m++)h[_++]=c[g++]}return new Je(h,d,u)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],g=t(h,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let g=c[u];d.push(g.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,g=u.length;h<g;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new $,$r=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gc=new $,O0=new $,B0=new de,ei=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Gc.subVectors(i,e).cross(O0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||B0.getNormalMatrix(t),s=this.coplanarPoint(Gc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},z0=0,vi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=sr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ei().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},es=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hs,Dr=new $,Ws=new $,Xs=new $,qs=new Me,Nr=new Me,kd=new Ye,$o=new $,Ur=new $,Zo=new $,Vf=new Me,Hc=new Me,Gf=new Me,Ms=class extends En{constructor(t=new es){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new on;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Da(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new $r(i,3,0,!1)),Hs.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Me(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Jo($o.set(-.5,-.5,0),Xs,o,Ws,s,r),Jo(Ur.set(.5,-.5,0),Xs,o,Ws,s,r),Jo(Zo.set(.5,.5,0),Xs,o,Ws,s,r),Vf.set(0,0),Hc.set(1,0),Gf.set(1,1);let a=t.ray.intersectTriangle($o,Ur,Zo,!1,Dr);if(a===null&&(Jo(Ur.set(-.5,.5,0),Xs,o,Ws,s,r),Hc.set(0,1),a=t.ray.intersectTriangle($o,Zo,Ur,!1,Dr),a===null))return;let l=t.ray.origin.distanceTo(Dr);l<t.near||l>t.far||e.push({distance:l,point:Dr.clone(),uv:mi.getInterpolation(Dr,$o,Ur,Zo,Vf,Hc,Gf,new Me),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Jo(n,t,e,i,s,r){qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Nr.x=r*qs.x-s*qs.y,Nr.y=s*qs.x+r*qs.y):Nr.copy(qs),n.copy(t),n.x+=Nr.x,n.y+=Nr.y,n.applyMatrix4(kd)}var Ui=new $,Wc=new $,Ko=new $,jo=new $,er=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wc.copy(t).add(e).multiplyScalar(.5),Ko.copy(e).sub(t).normalize(),jo.copy(this.origin).sub(Wc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ko),a=jo.dot(this.direction),l=-jo.dot(Ko),c=jo.lengthSq(),d=Math.abs(1-o*o),u,h,g,_;if(d>0)if(u=o*l-a,h=o*a-l,_=r*d,u>=0)if(h>=-_)if(h<=_){let y=1/d;u*=y,h*=y,g=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),g=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),g=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),g=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wc).addScaledVector(Ko,h),g}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,u=t.x-o.x,h=t.y-o.y,g=t.z-o.z,_=e.x-o.x,y=e.y-o.y,x=e.z-o.z,m=i.x-o.x,T=i.y-o.y,L=i.z-o.z,b=Math.abs(l),w=Math.abs(c),C=Math.abs(d),N,M,A,R,z,X,k,F,V,K,Z,nt;if(b>=w&&b>=C?(A=l,X=u,V=_,nt=m,l>=0?(N=c,M=d,R=h,z=g,k=y,F=x,K=T,Z=L):(N=d,M=c,R=g,z=h,k=x,F=y,K=L,Z=T)):w>=C?(A=c,X=h,V=y,nt=T,c>=0?(N=d,M=l,R=g,z=u,k=x,F=_,K=L,Z=m):(N=l,M=d,R=u,z=g,k=_,F=x,K=m,Z=L)):(A=d,X=g,V=x,nt=L,d>=0?(N=l,M=c,R=u,z=h,k=_,F=y,K=m,Z=T):(N=c,M=l,R=h,z=u,k=y,F=_,K=T,Z=m)),A===0)return null;let J=N/A,tt=M/A,st=1/A,mt=R-J*X,xt=z-tt*X,Mt=k-J*V,St=F-tt*V,yt=K-J*nt,B=Z-tt*nt,it=yt*St-B*Mt,pt=mt*B-xt*yt,Lt=Mt*xt-St*mt;if(s){if(it<0||pt<0||Lt<0)return null}else if((it<0||pt<0||Lt<0)&&(it>0||pt>0||Lt>0))return null;let dt=it+pt+Lt;if(dt===0)return null;let kt=st*(it*X+pt*V+Lt*nt);return(dt>0?kt<0:kt>0)?null:this.at(kt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hf=new Ye,_s=new er,Qo=new ts,Wf=new $,ta=new $,ea=new $,na=new $,Xc=new $,ia=new $,Xf=new $,sa=new $,Be=class extends En{constructor(t=new on,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(Xc.fromBufferAttribute(u,t),o?ia.addScaledVector(Xc,d):ia.addScaledVector(Xc.sub(e),d))}e.add(ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(Qo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Qo,Wf)===null||_s.origin.distanceToSquared(Wf)>(t.far-t.near)**2))&&(Hf.copy(r).invert(),_s.copy(t.ray).applyMatrix4(Hf),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){let x=h[_],m=o[x.materialIndex],T=Math.max(x.start,g.start),L=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,w=L;b<w;b+=3){let C=a.getX(b),N=a.getX(b+1),M=a.getX(b+2);s=ra(this,m,t,i,c,d,u,C,N,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let x=_,m=y;x<m;x+=3){let T=a.getX(x),L=a.getX(x+1),b=a.getX(x+2);s=ra(this,o,t,i,c,d,u,T,L,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){let x=h[_],m=o[x.materialIndex],T=Math.max(x.start,g.start),L=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,w=L;b<w;b+=3){let C=b,N=b+1,M=b+2;s=ra(this,m,t,i,c,d,u,C,N,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let x=_,m=y;x<m;x+=3){let T=x,L=x+1,b=x+2;s=ra(this,o,t,i,c,d,u,T,L,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function k0(n,t,e,i,s,r,o,a){let l;if(t.side===Cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===os,a),l===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:n}}function ra(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ta),n.getVertexPosition(l,ea),n.getVertexPosition(c,na);let d=k0(n,t,e,i,ta,ea,na,Xf);if(d){let u=new $;mi.getBarycoord(Xf,ta,ea,na,u),s&&(d.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new Me)),r&&(d.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(d.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new $,materialIndex:0};mi.getNormal(ta,ea,na,h.normal),d.face=h,d.barycoord=u}return d}var Na=class extends fn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=hn,d=hn,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ys=new ts,V0=new Me(.5,.5),oa=new $,Zr=class{constructor(t=new ei,e=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],g=r[7],_=r[8],y=r[9],x=r[10],m=r[11],T=r[12],L=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-o,g-d,m-_,w-T).normalize(),s[1].setComponents(c+o,g+d,m+_,w+T).normalize(),s[2].setComponents(c+a,g+u,m+y,w+L).normalize(),s[3].setComponents(c-a,g-u,m-y,w-L).normalize(),i)s[4].setComponents(l,h,x,b).normalize(),s[5].setComponents(c-l,g-h,m-x,w-b).normalize();else if(s[4].setComponents(c-l,g-h,m-x,w-b).normalize(),e===ni)s[5].setComponents(c+l,g+h,m+x,w+b).normalize();else if(e===kr)s[5].setComponents(l,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=V0.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ua=new $,Fa=new $,qf=new Ye,Fr=new er,aa=new ts,qc=new $,Yf=new $,Oa=class extends En{constructor(t=new on,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ua.distanceTo(Fa);t.setAttribute("lineDistance",new An(i,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;qf.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){let g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let y=g,x=_-1;y<x;y+=c){let m=d.getX(y),T=d.getX(y+1),L=la(this,t,Fr,l,m,T,y);L&&e.push(L)}if(this.isLineLoop){let y=d.getX(_-1),x=d.getX(g),m=la(this,t,Fr,l,y,x,_-1);m&&e.push(m)}}else{let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=g,x=_-1;y<x;y+=c){let m=la(this,t,Fr,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=la(this,t,Fr,l,_-1,g,_-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function la(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Ua.fromBufferAttribute(a,s),Fa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ua,Fa,qc,Yf)>i)return;qc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(qc);if(!(c<t.near||c>t.far))return{distance:c,point:Yf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var $f=new $,Zf=new $,Ss=class extends Oa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)$f.fromBufferAttribute(e,s),Zf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$f.distanceTo(Zf);t.setAttribute("lineDistance",new An(i,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jf=new Ye,Qc=new er,ca=new ts,ha=new $,Jr=class extends En{constructor(t=new on,e=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Jf.copy(s).invert(),Qc.copy(t.ray).applyMatrix4(Jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,y=g;_<y;_++){let x=c.getX(_);ha.fromBufferAttribute(u,x),Kf(ha,x,l,s,t,e,this)}}else{let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,y=g;_<y;_++)ha.fromBufferAttribute(u,_),Kf(ha,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kf(n,t,e,i,s,r,o){let a=Qc.distanceSqToPoint(n);if(a<e){let l=new $;Qc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Kr=class extends fn{constructor(t=[],e=as,i,s,r,o,a,l,c,d){super(t,e,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends fn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends fn{constructor(t,e,i=si,s,r,o,a=hn,l=hn,c,d=xi,u=1){if(d!==xi&&d!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ba=class extends ns{constructor(t,e=si,i=as,s,r,o=hn,a=hn,l,c=xi){let d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},sn=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,g=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(d,3)),this.setAttribute("uv",new An(u,2));function _(y,x,m,T,L,b,w,C,N,M,A){let R=b/N,z=w/M,X=b/2,k=w/2,F=C/2,V=N+1,K=M+1,Z=0,nt=0,J=new $;for(let tt=0;tt<K;tt++){let st=tt*z-k;for(let mt=0;mt<V;mt++){let xt=mt*R-X;J[y]=xt*T,J[x]=st*L,J[m]=F,c.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[m]=C>0?1:-1,d.push(J.x,J.y,J.z),u.push(mt/N),u.push(1-tt/M),Z+=1}}for(let tt=0;tt<M;tt++)for(let st=0;st<N;st++){let mt=h+st+V*tt,xt=h+st+V*(tt+1),Mt=h+(st+1)+V*(tt+1),St=h+(st+1)+V*tt;l.push(mt,xt,St),l.push(xt,Mt,St),nt+=6}a.addGroup(g,nt,A),g+=nt,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ua=new $,fa=new $,Yc=new $,da=new mi,Qr=class extends on{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(_a*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:y,b:x,c:m}=da;if(y.fromBufferAttribute(a,c[0]),x.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),da.getNormal(Yc),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){let L=(T+1)%3,b=u[T],w=u[L],C=da[d[T]],N=da[d[L]],M=`${b}_${w}`,A=`${w}_${b}`;A in h&&h[A]?(Yc.dot(h[A].normal)<=r&&(g.push(C.x,C.y,C.z),g.push(N.x,N.y,N.z)),h[A]=null):M in h||(h[M]={index0:c[T],index1:c[L],normal:Yc.clone()})}}for(let _ in h)if(h[_]){let{index0:y,index1:x}=h[_];ua.fromBufferAttribute(a,y),fa.fromBufferAttribute(a,x),g.push(ua.x,ua.y,ua.z),g.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new An(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var to=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=t/a,h=e/l,g=[],_=[],y=[],x=[];for(let m=0;m<d;m++){let T=m*h-o;for(let L=0;L<c;L++){let b=L*u-r;_.push(b,-T,0),y.push(0,0,1),x.push(L/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let L=T+c*m,b=T+c*(m+1),w=T+1+c*(m+1),C=T+1+c*m;g.push(L,b,C),g.push(b,w,C)}this.setIndex(g),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Es(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(jf(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(jf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function vn(n){let t={};for(let e=0;e<n.length;e++){let i=Es(n[e]);for(let s in i)t[s]=i[s]}return t}function jf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function G0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Th(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var Vd={clone:Es,merge:vn},H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new de().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},za=class extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ka=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ys(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $c(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var is=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ga=class extends is{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kc:r=t,a=2*e-i;break;case jc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:o=t,l=2*i-e;break;case jc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,g=this._weightNext,_=(i-e)/(s-e),y=_*_,x=y*_,m=-h*x+2*h*y-h*_,T=(1+h)*x+(-1.5-2*h)*y+(-.5+h)*_+1,L=(-1-g)*x+(1.5+g)*y+.5*_,b=g*x-g*y;for(let w=0;w!==a;++w)r[w]=m*o[d+w]+T*o[c+w]+L*o[l+w]+b*o[u+w];return r}},Ha=class extends is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(i-e)/(s-e),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}},Wa=class extends is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xa=class extends is{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this.inTangents,u=this.outTangents;if(!d||!u){let _=(i-e)/(s-e),y=1-_;for(let x=0;x!==a;++x)r[x]=o[c+x]*y+o[l+x]*_;return r}let h=a*2,g=t-1;for(let _=0;_!==a;++_){let y=o[c+_],x=o[l+_],m=g*h+_*2,T=u[m],L=u[m+1],b=t*h+_*2,w=d[b],C=d[b+1],N=q0(i,e,T,w,s);r[_]=Gd(N,y,L,C,x)}return r}};function Gd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function X0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function q0(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Gd(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=X0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Bn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),$c(t.settings)&&(i.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break;case Zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ie("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;$c(this.settings)&&(Qf(this.settings.inTangents,t),Qf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ae("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ae("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&b0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ae("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ga,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,h=u-i,g=u+i;for(let _=0;_!==i;++_){let y=e[u+_];if(y!==e[h+_]||y!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,h=o*i;for(let g=0;g!==i;++g)e[h+g]=e[u+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ca;var ss=class extends Bn{constructor(t,e,i){super(t,e,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Or;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};qa.prototype.ValueTypeName="color";var Ya=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Ya.prototype.ValueTypeName="number";var $a=class extends is{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)yi.slerpFlat(r,0,o,c-a,o,c,l);return r}},eo=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Bn{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Or;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Za.prototype.ValueTypeName="vector";var Ja=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let g=c[u],_=c[u+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hd=new Ja,Ka=class{constructor(t){this.manager=t!==void 0?t:Hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ka.DEFAULT_MATERIAL_NAME="__DEFAULT";var pa=new $,ma=new yi,di=new $,no=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pa,ma,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(pa,ma,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new $,td=new Me,ed=new Me,xn=class extends no{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_a*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var io=class extends no{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var $s=-90,Zs=1,ja=class extends En{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn($s,Zs,t,e);s.layers=this.layers,this.add(s);let r=new xn($s,Zs,t,e);r.layers=this.layers,this.add(r);let o=new xn($s,Zs,t,e);o.layers=this.layers,this.add(o);let a=new xn($s,Zs,t,e);a.layers=this.layers,this.add(a);let l=new xn($s,Zs,t,e);l.layers=this.layers,this.add(l);let c=new xn($s,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,h,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Qa=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ch="\\[\\]\\.:\\/",Y0=new RegExp("["+Ch+"]","g"),Rh="[^"+Ch+"]",$0="[^"+Ch.replace("\\.","")+"]",Z0=/((?:WC+[\/:])*)/.source.replace("WC",Rh),J0=/(WCOD+)?/.source.replace("WCOD",$0),K0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),j0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),Q0=new RegExp("^"+Z0+J0+K0+j0+"$"),tg=["material","materials","bones","map"],th=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Y0,"")}static parseTrackName(t){let e=Q0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=th;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kM=new Float32Array(1);var Uh=class Uh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Uh.prototype.isMatrix2=!0;var eh=Uh;function Ih(n,t,e,i){let s=eg(i);switch(e){case Mh:return n*t;case Sh:return n*t/s.components*s.byteLength;case al:return n*t/s.components*s.byteLength;case hs:return n*t*2/s.components*s.byteLength;case ll:return n*t*2/s.components*s.byteLength;case bh:return n*t*3/s.components*s.byteLength;case qn:return n*t*4/s.components*s.byteLength;case cl:return n*t*4/s.components*s.byteLength;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:case dl:return Math.max(n,16)*Math.max(t,8)/4;case hl:case fl:return Math.max(n,8)*Math.max(t,8)/2;case pl:case ml:case xl:case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gl:case uo:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fo:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eg(n){switch(n){case zn:case xh:return{byteLength:1,components:1};case rr:case _h:case oi:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case si:case sl:case ri:return{byteLength:4,components:1};case yh:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function up(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ig(n){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<u.length;g++){let _=u[h],y=u[g];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,u[h]=y)}u.length=h+1;for(let g=0,_=u.length;g<_;g++){let y=u[g];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
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
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,_g=`#ifdef USE_BUMPMAP
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tg=`#define PI 3.141592653589793
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
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
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
#endif`,nx=`uniform sampler2D dfgLUT;
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
}`,ix=`
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,px=`#if defined( USE_POINTS_UV )
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
#endif`,mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yx=`#ifdef USE_SKINNING
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
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r_=`uniform sampler2D t2D;
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`#include <common>
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
}`,u_=`#if DEPTH_PACKING == 3200
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
}`,f_=`#define DISTANCE
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
}`,d_=`#define DISTANCE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
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
}`,x_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,y_=`uniform vec3 diffuse;
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
}`,v_=`#define LAMBERT
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
}`,M_=`#define LAMBERT
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
}`,b_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,A_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,T_=`#define PHONG
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
}`,C_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
}`,I_=`#define TOON
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
}`,P_=`#define TOON
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
}`,L_=`uniform float size;
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
}`,D_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,U_=`uniform vec3 color;
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
}`,F_=`uniform float rotation;
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
}`,O_=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:hg,aomap_pars_fragment:ug,batching_pars_vertex:fg,batching_vertex:dg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:xg,bumpmap_pars_fragment:_g,clipping_planes_fragment:yg,clipping_planes_pars_fragment:vg,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:bg,color_fragment:Sg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Eg,common:Tg,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Pg,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ng,colorspace_pars_fragment:Ug,envmap_fragment:Fg,envmap_common_pars_fragment:Og,envmap_pars_fragment:Bg,envmap_pars_vertex:zg,envmap_physical_pars_fragment:Jg,envmap_vertex:kg,fog_vertex:Vg,fog_pars_vertex:Gg,fog_fragment:Hg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:$g,lights_pars_begin:Zg,lights_toon_fragment:Kg,lights_toon_pars_fragment:jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:tx,lights_physical_fragment:ex,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:sx,lights_fragment_end:rx,lightprobes_pars_fragment:ox,logdepthbuf_fragment:ax,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:hx,map_fragment:ux,map_pars_fragment:fx,map_particle_fragment:dx,map_particle_pars_fragment:px,metalnessmap_fragment:mx,metalnessmap_pars_fragment:gx,morphinstance_vertex:xx,morphcolor_vertex:_x,morphnormal_vertex:yx,morphtarget_pars_vertex:vx,morphtarget_vertex:Mx,normal_fragment_begin:bx,normal_fragment_maps:Sx,normal_pars_fragment:wx,normal_pars_vertex:Ax,normal_vertex:Ex,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Px,opaque_fragment:Lx,packing:Dx,premultiplied_alpha_fragment:Nx,project_vertex:Ux,dithering_fragment:Fx,dithering_pars_fragment:Ox,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Hx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:qx,skinnormal_vertex:Yx,specularmap_fragment:$x,specularmap_pars_fragment:Zx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Kx,transmission_fragment:jx,transmission_pars_fragment:Qx,uv_pars_fragment:t_,uv_pars_vertex:e_,uv_vertex:n_,worldpos_vertex:i_,background_vert:s_,background_frag:r_,backgroundCube_vert:o_,backgroundCube_frag:a_,cube_vert:l_,cube_frag:c_,depth_vert:h_,depth_frag:u_,distance_vert:f_,distance_frag:d_,equirect_vert:p_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:x_,meshbasic_vert:__,meshbasic_frag:y_,meshlambert_vert:v_,meshlambert_frag:M_,meshmatcap_vert:b_,meshmatcap_frag:S_,meshnormal_vert:w_,meshnormal_frag:A_,meshphong_vert:E_,meshphong_frag:T_,meshphysical_vert:C_,meshphysical_frag:R_,meshtoon_vert:I_,meshtoon_frag:P_,points_vert:L_,points_frag:D_,shadow_vert:N_,shadow_frag:U_,sprite_vert:F_,sprite_frag:O_},Ut={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Si={basic:{uniforms:vn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:vn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:vn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:vn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:vn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:vn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:vn([Ut.points,Ut.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:vn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:vn([Ut.common,Ut.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:vn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:vn([Ut.sprite,Ut.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:vn([Ut.common,Ut.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:vn([Ut.lights,Ut.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Gl={r:0,b:0,g:0},B_=new Ye,fp=new de;fp.set(-1,0,0,0,1,0,0,0,1);function z_(n,t,e,i,s,r){let o=new le(0),a=s===!0?0:1,l,c,d=null,u=0,h=null;function g(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){let b=T.backgroundBlurriness>0;L=t.get(L,b)}return L}function _(T){let L=!1,b=g(T);b===null?x(o,a):b&&b.isColor&&(x(b,1),L=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,L){let b=g(L);b&&(b.isCubeTexture||b.mapping===ro)?(c===void 0&&(c=new Be(new sn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Es(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B_.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fp),c.material.toneMapped=we.getTransfer(b.colorSpace)!==De,(d!==b||u!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Be(new to(2,2),new yn({name:"BackgroundMaterial",uniforms:Es(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=we.getTransfer(b.colorSpace)!==De,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function x(T,L){T.getRGB(Gl,Th(n)),e.buffers.color.setClear(Gl.r,Gl.g,Gl.b,L,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,L=1){o.set(T),a=L,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,x(o,a)},render:_,addToRenderList:y,dispose:m}}function k_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(z,X,k,F,V){let K=!1,Z=u(z,F,k,X);r!==Z&&(r=Z,c(r.object)),K=g(z,F,k,V),K&&_(z,F,k,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,b(z,X,k,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(z){return n.bindVertexArray(z)}function d(z){return n.deleteVertexArray(z)}function u(z,X,k,F){let V=F.wireframe===!0,K=i[X.id];K===void 0&&(K={},i[X.id]=K);let Z=z.isInstancedMesh===!0?z.id:0,nt=K[Z];nt===void 0&&(nt={},K[Z]=nt);let J=nt[k.id];J===void 0&&(J={},nt[k.id]=J);let tt=J[V];return tt===void 0&&(tt=h(l()),J[V]=tt),tt}function h(z){let X=[],k=[],F=[];for(let V=0;V<e;V++)X[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:k,attributeDivisors:F,object:z,attributes:{},index:null}}function g(z,X,k,F){let V=r.attributes,K=X.attributes,Z=0,nt=k.getAttributes();for(let J in nt)if(nt[J].location>=0){let st=V[J],mt=K[J];if(mt===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(mt=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(mt=z.instanceColor)),st===void 0||st.attribute!==mt||mt&&st.data!==mt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==F}function _(z,X,k,F){let V={},K=X.attributes,Z=0,nt=k.getAttributes();for(let J in nt)if(nt[J].location>=0){let st=K[J];st===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(st=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(st=z.instanceColor));let mt={};mt.attribute=st,st&&st.data&&(mt.data=st.data),V[J]=mt,Z++}r.attributes=V,r.attributesNum=Z,r.index=F}function y(){let z=r.newAttributes;for(let X=0,k=z.length;X<k;X++)z[X]=0}function x(z){m(z,0)}function m(z,X){let k=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;k[z]=1,F[z]===0&&(n.enableVertexAttribArray(z),F[z]=1),V[z]!==X&&(n.vertexAttribDivisor(z,X),V[z]=X)}function T(){let z=r.newAttributes,X=r.enabledAttributes;for(let k=0,F=X.length;k<F;k++)X[k]!==z[k]&&(n.disableVertexAttribArray(k),X[k]=0)}function L(z,X,k,F,V,K,Z){Z===!0?n.vertexAttribIPointer(z,X,k,V,K):n.vertexAttribPointer(z,X,k,F,V,K)}function b(z,X,k,F){y();let V=F.attributes,K=k.getAttributes(),Z=X.defaultAttributeValues;for(let nt in K){let J=K[nt];if(J.location>=0){let tt=V[nt];if(tt===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(tt=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(tt=z.instanceColor)),tt!==void 0){let st=tt.normalized,mt=tt.itemSize,xt=t.get(tt);if(xt===void 0)continue;let Mt=xt.buffer,St=xt.type,yt=xt.bytesPerElement,B=St===n.INT||St===n.UNSIGNED_INT||tt.gpuType===sl;if(tt.isInterleavedBufferAttribute){let it=tt.data,pt=it.stride,Lt=tt.offset;if(it.isInstancedInterleavedBuffer){for(let dt=0;dt<J.locationSize;dt++)m(J.location+dt,it.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<J.locationSize;dt++)x(J.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let dt=0;dt<J.locationSize;dt++)L(J.location+dt,mt/J.locationSize,St,st,pt*yt,(Lt+mt/J.locationSize*dt)*yt,B)}else{if(tt.isInstancedBufferAttribute){for(let it=0;it<J.locationSize;it++)m(J.location+it,tt.meshPerAttribute);z.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let it=0;it<J.locationSize;it++)x(J.location+it);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let it=0;it<J.locationSize;it++)L(J.location+it,mt/J.locationSize,St,st,mt*yt,mt/J.locationSize*it*yt,B)}}else if(Z!==void 0){let st=Z[nt];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(J.location,st);break;case 3:n.vertexAttrib3fv(J.location,st);break;case 4:n.vertexAttrib4fv(J.location,st);break;default:n.vertexAttrib1fv(J.location,st)}}}}T()}function w(){A();for(let z in i){let X=i[z];for(let k in X){let F=X[k];for(let V in F){let K=F[V];for(let Z in K)d(K[Z].object),delete K[Z];delete F[V]}}delete i[z]}}function C(z){if(i[z.id]===void 0)return;let X=i[z.id];for(let k in X){let F=X[k];for(let V in F){let K=F[V];for(let Z in K)d(K[Z].object),delete K[Z];delete F[V]}}delete i[z.id]}function N(z){for(let X in i){let k=i[X];for(let F in k){let V=k[F];if(V[z.id]===void 0)continue;let K=V[z.id];for(let Z in K)d(K[Z].object),delete K[Z];delete V[z.id]}}}function M(z){for(let X in i){let k=i[X],F=z.isInstancedMesh===!0?z.id:0,V=k[F];if(V!==void 0){for(let K in V){let Z=V[K];for(let nt in Z)d(Z[nt].object),delete Z[nt];delete V[K]}delete k[F],Object.keys(k).length===0&&delete i[X]}}}function A(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function V_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let g=0;g<d;g++)h+=c[g];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function G_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==qn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let M=N===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==zn&&N!==ri&&!M&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:b,maxSamples:w,samples:C}}function H_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ei,a=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let g=u.length!==0||h||i!==0||s;return s=h,i=u.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,g){let _=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!x)r?d(null):c();else{let T=r?0:i,L=T*4,b=m.clippingState||null;l.value=b,b=d(_,h,L,g);for(let w=0;w!==L;++w)b[w]=e[w];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,g,_){let y=u!==null?u.length:0,x=null;if(y!==0){if(x=l.value,_!==!0||x===null){let m=g+y*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<m)&&(x=new Float32Array(m));for(let L=0,b=g;L!==y;++L,b+=4)o.copy(u[L]).applyMatrix4(T,a),o.normal.toArray(x,b),x[b+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}var lr=4,W_=6,X_=20,q_=256,po=new io,Wd=new le,Fh=null,Oh=0,Bh=0,zh=!1,Y_=new $,Ts=new $,Wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Y_}=r;Fh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Oh,Bh),this._renderer.xr.enabled=zh,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:oi,format:qn,colorSpace:Br,depthBuffer:!1},s=Xd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$_(r)),this._blurMaterial=J_(r,t,e),this._ggxMaterial=Z_(r,t,e)}return s}_compileMaterial(t){let e=new Be(new on,t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,i,s,r){let l=new xn(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,g=u.toneMapping;u.getClearColor(Wd),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new sn,new Tn({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,x=y.material,m=!1,T=t.background;T?T.isColor&&(x.color.copy(T),t.background=null,m=!0):(x.color.copy(Wd),m=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[L],r.y,r.z)):b===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[L]));let w=this._cubeSize;ar(s,b*w,L>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(y,l),u.render(t,l)}u.toneMapping=g,u.autoClear=h,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===as||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ar(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,po)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,g=u*h,{_lodMax:_}=this,y=this._sizeLods[i],x=3*y*(i>_-lr?i-_+lr:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,ar(r,x,m,3*y,2*y),s.setRenderTarget(r),s.render(a,po),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ar(t,x,m,3*y,2*y),s.setRenderTarget(t),s.render(a,po)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-lr?s-this._lodMax+lr:0),h=4*(this._cubeSize-d);ar(e,u,h,3*d,2*d),o.setRenderTarget(e),o.render(l,po)}};function $_(n){let t=[],e=[],i=n,s=n-lr+1+W_;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,g=3,_=new Float32Array(g*h*u),y=new Float32Array(g*h*u);for(let m=0;m<u;m++){let T=m%3*2/3-1,L=m>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(b,g*h*m);for(let w=0;w<h;w++){let C=d[w*2]*2-1,N=d[w*2+1]*2-1;m===0?Ts.set(1,N,C):m===1?Ts.set(-C,1,-N):m===2?Ts.set(-C,N,1):m===3?Ts.set(-1,N,-C):m===4?Ts.set(-C,-1,N):Ts.set(C,N,-1),Ts.toArray(y,(m*h+w)*g)}}let x=new on;x.setAttribute("position",new Je(_,g)),x.setAttribute("outputDirection",new Je(y,g)),e.push(new Be(x,null)),i>lr&&i--}return{lodMeshes:e,sizeLods:t}}function Xd(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Z_(n,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function J_(n,t,e){return new yn({name:"SphericalGaussianBlur",defines:{SAMPLES:X_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function qd(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yd(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xl=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Mi});r.uniforms.tEquirect.value=e;let o=new Be(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=nn),new ja(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function K_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,g=!1){return h==null?null:g?o(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===el||g===nl)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new Xl(_.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let g=h.mapping,_=g===el||g===nl,y=g===as||g===As;if(_||y){let x=e.get(h),m=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Wl(n)),x=_?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{let T=h.image;return _&&T&&T.height>0||y&&T&&l(T)?(i===null&&(i=new Wl(n)),x=_?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",d),x.texture):null}}}return h}function a(h,g){return g===el?h.mapping=as:g===nl&&(h.mapping=As),h}function l(h){let g=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&g++;return g===_}function c(h){let g=h.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function d(h){let g=h.target;g.removeEventListener("dispose",d);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function j_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&vs("WebGLRenderer: "+i+" extension not supported."),s}}}function Q_(n,t,e,i){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let g=r.get(h);g&&(t.remove(g),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let g in h)t.update(h[g],n.ARRAY_BUFFER)}function c(u){let h=[],g=u.index,_=u.attributes.position,y=0;if(_===void 0)return;if(g!==null){let T=g.array;y=g.version;for(let L=0,b=T.length;L<b;L+=3){let w=T[L+0],C=T[L+1],N=T[L+2];h.push(w,C,C,N,N,w)}}else{let T=_.array;y=_.version;for(let L=0,b=T.length/3-1;L<b;L+=3){let w=L+0,C=L+1,N=L+2;h.push(w,C,C,N,N,w)}}let x=new(_.count>=65535?Yr:qr)(h,1);x.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,x)}function d(u){let h=r.get(u);if(h){let g=u.index;g!==null&&h.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function ty(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,h){n.drawElements(i,h,r,u*o),e.update(h,i,1)}function c(u,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,u*o,g),e.update(h,i,g))}function d(u,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,g);let y=0;for(let x=0;x<g;x++)y+=h[x];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ey(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ny(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=i.get(a);if(h===void 0||h.count!==u){let A=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],L=0;g===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let b=a.attributes.position.count*L,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*w*4*u),N=new Hr(C,b,w,u);N.type=ri,N.needsUpdate=!0;let M=L*4;for(let R=0;R<u;R++){let z=x[R],X=m[R],k=T[R],F=b*w*4*R;for(let V=0;V<z.count;V++){let K=V*M;g===!0&&(s.fromBufferAttribute(z,V),C[F+K+0]=s.x,C[F+K+1]=s.y,C[F+K+2]=s.z,C[F+K+3]=0),_===!0&&(s.fromBufferAttribute(X,V),C[F+K+4]=s.x,C[F+K+5]=s.y,C[F+K+6]=s.z,C[F+K+7]=0),y===!0&&(s.fromBufferAttribute(k,V),C[F+K+8]=s.x,C[F+K+9]=s.y,C[F+K+10]=s.z,C[F+K+11]=k.itemSize===4?s.w:1)}}h={count:u,texture:N,size:new Me(b,w)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function iy(n,t,e,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return h}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var sy={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[fh]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[dh]:"CUSTOM_TONE_MAPPING"};function ry(n,t,e,i,s,r){let o=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new on;c.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new An([0,2,0,0,2,0],2));let d=new za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Be(c,d),h=new io(-1,1,1,-1,0,1),g=null,_=null,y=!1,x,m=null,T=[],L=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let C=0;C<T.length;C++){let N=T[C];N.setSize&&N.setSize(b,w)}},this.setEffects=function(b){T=b,L=T.length>0&&T[0].isRenderPass===!0;let w=o.width,C=o.height;T.length>0&&a===null&&(a=new Pn(w,C,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(w,C,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<T.length;N++){let M=T[N];M.setSize&&M.setSize(w,C)}},this.begin=function(b,w){if(y||b.toneMapping===ii&&T.length===0)return!1;if(m=w,w!==null){let C=w.width,N=w.height;(o.width!==C||o.height!==N)&&this.setSize(C,N)}return L===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=ii,!0},this.hasRenderPass=function(){return L},this.end=function(b,w){b.toneMapping=x,y=!0;let C=o,N=a;for(let M=0;M<T.length;M++){let A=T[M];A.enabled!==!1&&(A.render(b,N,C,w),A.needsSwap!==!1&&(C=N,N=N===a?l:a))}if(g!==b.outputColorSpace||_!==b.toneMapping){g=b.outputColorSpace,_=b.toneMapping,d.defines={},we.getTransfer(g)===De&&(d.defines.SRGB_TRANSFER="");let M=sy[_];M&&(d.defines[M]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(m),b.render(u,h),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var dp=new fn,Gh=new ns(1,1),pp=new Hr,mp=new La,gp=new Kr,$d=[],Zd=[],Jd=new Float32Array(16),Kd=new Float32Array(9),jd=new Float32Array(4);function hr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=$d[s];if(r===void 0&&(r=new Float32Array(s),$d[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $l(n,t){let e=Zd[t];e===void 0&&(e=new Int32Array(t),Zd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function oy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function ly(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function hy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;jd.set(i),n.uniformMatrix2fv(this.addr,!1,jd),ln(e,i)}}function uy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Kd.set(i),n.uniformMatrix3fv(this.addr,!1,Kd),ln(e,i)}}function fy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Jd.set(i),n.uniformMatrix4fv(this.addr,!1,Jd),ln(e,i)}}function dy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function xy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function My(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=e.isReversedDepthBuffer()?Vl:kl,r=Gh):r=dp,e.setTexture2D(t||r,s)}function by(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||mp,s)}function Sy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gp,s)}function wy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pp,s)}function Ay(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return _y;case 36295:return yy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return wy}}function Ey(n,t){n.uniform1fv(this.addr,t)}function Ty(n,t){let e=hr(t,this.size,2);n.uniform2fv(this.addr,e)}function Cy(n,t){let e=hr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ry(n,t){let e=hr(t,this.size,4);n.uniform4fv(this.addr,e)}function Iy(n,t){let e=hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Py(n,t){let e=hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ly(n,t){let e=hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dy(n,t){n.uniform1iv(this.addr,t)}function Ny(n,t){n.uniform2iv(this.addr,t)}function Uy(n,t){n.uniform3iv(this.addr,t)}function Fy(n,t){n.uniform4iv(this.addr,t)}function Oy(n,t){n.uniform1uiv(this.addr,t)}function By(n,t){n.uniform2uiv(this.addr,t)}function zy(n,t){n.uniform3uiv(this.addr,t)}function ky(n,t){n.uniform4uiv(this.addr,t)}function Vy(n,t,e){let i=this.cache,s=t.length,r=$l(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gh:o=dp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Gy(n,t,e){let i=this.cache,s=t.length,r=$l(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mp,r[o])}function Hy(n,t,e){let i=this.cache,s=t.length,r=$l(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gp,r[o])}function Wy(n,t,e){let i=this.cache,s=t.length,r=$l(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pp,r[o])}function Xy(n){switch(n){case 5126:return Ey;case 35664:return Ty;case 35665:return Cy;case 35666:return Ry;case 35674:return Iy;case 35675:return Py;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return zy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Wy}}var Hh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ay(e.type)}},Wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xy(e.type)}},Xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},kh=/(\w+)(\])?(\[|\.)?/g;function Qd(n,t){n.seq.push(t),n.map[t.id]=t}function qy(n,t,e){let i=n.name,s=i.length;for(kh.lastIndex=0;;){let r=kh.exec(i),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qd(e,c===void 0?new Hh(a,n,t):new Wh(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Xh(a),Qd(e,u)),e=u}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);qy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function tp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Yy=37297,$y=0;function Zy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ep=new de;function Jy(n){we._getMatrix(ep,we.workingColorSpace,n);let t=`mat3( ${ep.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(n)){case zr:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function np(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Zy(n.getShaderSource(t),a)}else return r}function Ky(n,t){let e=Jy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jy={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[fh]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[dh]:"Custom"};function Qy(n,t){let e=jy[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hl=new $;function tv(){we.getLuminanceCoefficients(Hl);let n=Hl.x.toFixed(4),t=Hl.y.toFixed(4),e=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function nv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function go(n){return n!==""}function ip(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(n){return n.replace(sv,ov)}var rv=new Map;function ov(n,t){let e=ye[t];if(e===void 0){let i=rv.get(t);if(i!==void 0)e=ye[i],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qh(e)}var av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(n){return n.replace(av,lv)}function lv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function op(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var cv={[so]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function hv(n){return cv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uv={[as]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE_UV"};function fv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var dv={[As]:"ENVMAP_MODE_REFRACTION"};function pv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mv={[lh]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function gv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mv[n.combine]||"ENVMAP_BLENDING_NONE"}function xv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _v(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hv(e),c=fv(e),d=pv(e),u=gv(e),h=xv(e),g=ev(e),_=nv(r),y=s.createProgram(),x,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(go).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(go).join(`
`),m.length>0&&(m+=`
`)):(x=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),m=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ye.tonemapping_pars_fragment:"",e.toneMapping!==ii?Qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Ky("linearToOutputTexel",e.outputColorSpace),tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=qh(o),o=ip(o,e),o=sp(o,e),a=qh(a),a=ip(a,e),a=sp(a,e),o=rp(o),a=rp(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let L=T+x+o,b=T+m+a,w=tp(s,s.VERTEX_SHADER,L),C=tp(s,s.FRAGMENT_SHADER,b);s.attachShader(y,w),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(z){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(C)||"",V=X.trim(),K=k.trim(),Z=F.trim(),nt=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,C);else{let tt=np(s,w,"vertex"),st=np(s,C,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+V+`
`+tt+`
`+st)}else V!==""?ie("WebGLProgram: Program Info Log:",V):(K===""||Z==="")&&(J=!1);J&&(z.diagnostics={runnable:nt,programLog:V,vertexShader:{log:K,prefix:x},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(w),s.deleteShader(C),M=new cr(s,y),A=iv(s,y)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,Yy)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$y++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=C,this}var yv=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $h(t),e.set(t,i)),i}},$h=class{constructor(t){this.id=yv++,this.code=t,this.usedTimes=0}};function vv(n){return n===hs||n===uo||n===fo}function Mv(n,t,e,i,s,r){let o=new Wr,a=new Yh,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,h=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function y(M,A,R,z,X,k){let F=z.fog,V=X.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,nt=t.get(M.envMap||K,Z),J=nt&&nt.mapping===ro?nt.image.height:null,tt=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&ie("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let st=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=st!==void 0?st.length:0,xt=0;V.morphAttributes.position!==void 0&&(xt=1),V.morphAttributes.normal!==void 0&&(xt=2),V.morphAttributes.color!==void 0&&(xt=3);let Mt,St,yt,B;if(tt){let Pe=Si[tt];Mt=Pe.vertexShader,St=Pe.fragmentShader}else{Mt=M.vertexShader,St=M.fragmentShader;let Pe=a.getVertexShaderStage(M),_e=a.getFragmentShaderStage(M);a.update(M,Pe,_e),yt=Pe.id,B=_e.id}let it=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Lt=X.isInstancedMesh===!0,dt=X.isBatchedMesh===!0,kt=!!M.map,jt=!!M.matcap,$t=!!nt,Qt=!!M.aoMap,ue=!!M.lightMap,Vt=!!M.bumpMap&&M.wireframe===!1,se=!!M.normalMap,Fe=!!M.displacementMap,ke=!!M.emissiveMap,Te=!!M.metalnessMap,Ie=!!M.roughnessMap,H=M.anisotropy>0,Ge=M.clearcoat>0,be=M.dispersion>0,P=M.retroreflectivity>0,v=M.iridescence>0,q=M.sheen>0,et=M.transmission>0,ot=H&&!!M.anisotropyMap,At=Ge&&!!M.clearcoatMap,It=Ge&&!!M.clearcoatNormalMap,at=Ge&&!!M.clearcoatRoughnessMap,ht=v&&!!M.iridescenceMap,Tt=v&&!!M.iridescenceThicknessMap,Yt=q&&!!M.sheenColorMap,Ct=q&&!!M.sheenRoughnessMap,wt=!!M.specularMap,Xt=!!M.specularColorMap,te=!!M.specularIntensityMap,ce=et&&!!M.transmissionMap,W=et&&!!M.thicknessMap,Rt=!!M.gradientMap,lt=!!M.alphaMap,Pt=M.alphaTest>0,Ot=!!M.alphaHash,gt=!!M.extensions,Jt=ii;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Jt=n.toneMapping);let qt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Mt,fragmentShader:St,defines:M.defines,customVertexShaderID:yt,customFragmentShaderID:B,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:dt,batchingColor:dt&&X._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&X.instanceColor!==null,instancingMorph:Lt&&X.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:kt,matcap:jt,envMap:$t,envMapMode:$t&&nt.mapping,envMapCubeUVHeight:J,aoMap:Qt,lightMap:ue,bumpMap:Vt,normalMap:se,displacementMap:Fe,emissiveMap:ke,normalMapObjectSpace:se&&M.normalMapType===Td,normalMapTangentSpace:se&&M.normalMapType===wh,packedNormalMap:se&&M.normalMapType===wh&&vv(M.normalMap.format),metalnessMap:Te,roughnessMap:Ie,anisotropy:H,anisotropyMap:ot,clearcoat:Ge,clearcoatMap:At,clearcoatNormalMap:It,clearcoatRoughnessMap:at,dispersion:be,retroreflection:P,iridescence:v,iridescenceMap:ht,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:Yt,sheenRoughnessMap:Ct,specularMap:wt,specularColorMap:Xt,specularIntensityMap:te,transmission:et,transmissionMap:ce,thicknessMap:W,gradientMap:Rt,opaque:M.transparent===!1&&M.blending===sr&&M.alphaToCoverage===!1,alphaMap:lt,alphaTest:Pt,alphaHash:Ot,combine:M.combine,mapUv:kt&&_(M.map.channel),aoMapUv:Qt&&_(M.aoMap.channel),lightMapUv:ue&&_(M.lightMap.channel),bumpMapUv:Vt&&_(M.bumpMap.channel),normalMapUv:se&&_(M.normalMap.channel),displacementMapUv:Fe&&_(M.displacementMap.channel),emissiveMapUv:ke&&_(M.emissiveMap.channel),metalnessMapUv:Te&&_(M.metalnessMap.channel),roughnessMapUv:Ie&&_(M.roughnessMap.channel),anisotropyMapUv:ot&&_(M.anisotropyMap.channel),clearcoatMapUv:At&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:wt&&_(M.specularMap.channel),specularColorMapUv:Xt&&_(M.specularColorMap.channel),specularIntensityMapUv:te&&_(M.specularIntensityMap.channel),transmissionMapUv:ce&&_(M.transmissionMap.channel),thicknessMapUv:W&&_(M.thicknessMap.channel),alphaMapUv:lt&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(se||H),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(kt||lt),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&se===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:xt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:kt&&M.map.isVideoTexture===!0&&we.getTransfer(M.map.colorSpace)===De,decodeVideoTextureEmissive:ke&&M.emissiveMap.isVideoTexture===!0&&we.getTransfer(M.emissiveMap.colorSpace)===De,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:gt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&M.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function x(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)A.push(R),A.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(m(A,M),T(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function m(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function T(M,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function L(M){let A=g[M.type],R;if(A){let z=Si[A];R=Vd.clone(z.uniforms)}else R=M.uniforms;return R}function b(M,A){let R=d.get(A);return R!==void 0?++R.usedTimes:(R=new _v(n,A,M,s),c.push(R),d.set(A,R)),R}function w(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),d.delete(M.cacheKey),M.destroy()}}function C(M){a.remove(M)}function N(){a.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:b,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:N}}function bv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ap(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function a(h,g,_,y,x,m){let T=n[t];return T===void 0?(T={id:h.id,object:h,geometry:g,material:_,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:x,group:m},n[t]=T):(T.id=h.id,T.object=h,T.geometry=g,T.material=_,T.materialVariant=o(h),T.groupOrder=y,T.renderOrder=h.renderOrder,T.z=x,T.group=m),t++,T}function l(h,g,_,y,x,m,T){T.reversedDepth===!0&&(x=-x);let L=a(h,g,_,y,x,m);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function c(h,g,_,y,x,m){let T=a(h,g,_,y,x,m);_.transmission>0?i.unshift(T):_.transparent===!0?s.unshift(T):e.unshift(T)}function d(h,g){e.length>1&&e.sort(h||Sv),i.length>1&&i.sort(g||ap),s.length>1&&s.sort(g||ap)}function u(){for(let h=t,g=n.length;h<g;h++){let _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function wv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new lp,n.set(i,[o])):s>=r.length?(o=new lp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new le};break;case"SpotLight":e={position:new $,direction:new $,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function Ev(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Tv=0;function Cv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rv(n){let t=new Av,e=Ev(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);let s=new $,r=new Ye,o=new Ye;function a(c){let d=0,u=0,h=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,_=0,y=0,x=0,m=0,T=0,L=0,b=0,w=0,C=0,N=0,M=0,A=0,R=0;c.sort(Cv);for(let X=0,k=c.length;X<k;X++){let F=c[X],V=F.color,K=F.intensity,Z=F.distance,nt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===hs?nt=F.shadow.map.texture:nt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=V.r*K,u+=V.g*K,h+=V.b*K;else if(F.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(F.sh.coefficients[J],K);R++}else if(F.isSunLight){let J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let tt=F.shadow,st=e.get(F);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[_]=st,i.sunShadowMap[_]=nt;let mt=tt.getViewportCount();for(let xt=0;xt<mt;xt++)i.sunShadowMatrix[y+xt]=tt.getMatrix(xt),i.sunShadowCascade[y+xt]=tt._cascadeData[xt];y+=mt,_++}i.sun[g]=J,g++}else if(F.isDirectionalLight){let J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let tt=F.shadow,st=e.get(F);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,i.directionalShadow[x]=st,i.directionalShadowMap[x]=nt,i.directionalShadowMatrix[x]=F.shadow.matrix,w++}i.directional[x]=J,x++}else if(F.isSpotLight){let J=t.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(V).multiplyScalar(K),J.distance=Z,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,i.spot[T]=J;let tt=F.shadow;if(F.map&&(i.spotLightMap[M]=F.map,M++,tt.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[T]=tt.matrix,F.castShadow){let st=e.get(F);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,i.spotShadow[T]=st,i.spotShadowMap[T]=nt,N++}T++}else if(F.isRectAreaLight){let J=t.get(F);J.color.copy(V).multiplyScalar(K),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),i.rectArea[L]=J,L++}else if(F.isPointLight){let J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){let tt=F.shadow,st=e.get(F);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,st.shadowCameraNear=tt.camera.near,st.shadowCameraFar=tt.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=F.shadow.matrix,C++}i.point[m]=J,m++}else if(F.isHemisphereLight){let J=t.get(F);J.skyColor.copy(F.color).multiplyScalar(K),J.groundColor.copy(F.groundColor).multiplyScalar(K),i.hemi[b]=J,b++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;let z=i.hash;(z.sunLength!==g||z.directionalLength!==x||z.pointLength!==m||z.spotLength!==T||z.rectAreaLength!==L||z.hemiLength!==b||z.numSunShadows!==_||z.numDirectionalShadows!==w||z.numPointShadows!==C||z.numSpotShadows!==N||z.numSpotMaps!==M||z.numLightProbes!==R)&&(i.sun.length=g,i.directional.length=x,i.spot.length=T,i.rectArea.length=L,i.point.length=m,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,z.sunLength=g,z.directionalLength=x,z.pointLength=m,z.spotLength=T,z.rectAreaLength=L,z.hemiLength=b,z.numSunShadows=_,z.numDirectionalShadows=w,z.numPointShadows=C,z.numSpotShadows=N,z.numSpotMaps=M,z.numLightProbes=R,i.version=Tv++)}function l(c,d){let u=0,h=0,g=0,_=0,y=0,x=0,m=d.matrixWorldInverse;for(let T=0,L=c.length;T<L;T++){let b=c[T];if(b.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(m),u++}else if(b.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(b.isSpotLight){let w=i.spot[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(b.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let w=i.point[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),g++}else if(b.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function cp(n){let t=new Rv(n),e=[],i=[],s=[];function r(h){u.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function d(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Iv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cp(n),t.set(s,[a])):r>=o.length?(a=new cp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
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
}`,Dv=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Nv=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],hp=new Ye,mo=new $,Vh=new $;function Uv(n,t,e){let i=new Zr,s=new Me,r=new Me,o=new Ze,a=new ka,l=new Va,c={},d=e.maxTextureSize,u={[os]:Cn,[Cn]:os,[Xn]:Xn},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new on;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let m=this.type;this.render=function(C,N,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===sd&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let A=n.getRenderTarget(),R=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Mi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let k=m!==this.type;k&&N.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=C.length;F<V;F++){let K=C[F],Z=K.shadow;if(Z===void 0){ie("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let nt=Z.getFrameExtents();s.multiply(nt),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/nt.x),s.x=r.x*nt.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/nt.y),s.y=r.y*nt.y,Z.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=J,Z.map===null||k===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ir){if(K.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Pn(s.x,s.y,{format:hs,type:oi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new ns(s.x,s.y,ri),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=xi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn}else K.isPointLight?(Z.map=new Xl(s.x),Z.map.depthTexture=new Ba(s.x,si)):(Z.map=new Pn(s.x,s.y),Z.map.depthTexture=new ns(s.x,s.y,si)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=xi,this.type===so?(Z.map.depthTexture.compareFunction=J?Vl:kl,Z.map.depthTexture.minFilter=nn,Z.map.depthTexture.magFilter=nn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let tt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,M);for(let st=0;st<tt;st++){let mt=Z.getCamera(st);if(K.isPointLight){let xt=Z.camera,Mt=Z.matrix,St=K.distance||xt.far;St!==xt.far&&(xt.far=St,xt.updateProjectionMatrix()),mo.setFromMatrixPosition(K.matrixWorld),xt.position.copy(mo),Vh.copy(xt.position),Vh.add(Dv[st]),xt.up.copy(Nv[st]),xt.lookAt(Vh),xt.updateMatrixWorld(),Mt.makeTranslation(-mo.x,-mo.y,-mo.z),hp.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(hp,xt.coordinateSystem,xt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,st),n.clear();else{st===0&&(n.setRenderTarget(Z.map),n.clear());let xt=Z.getViewport(st);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),X.viewport(o)}i=Z.getFrustum(st),b(N,M,mt,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ir&&T(Z,M),Z.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(A,R,z)};function T(C,N){let M=t.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null?C.mapPass=new Pn(s.x,s.y,{format:hs,type:oi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,M,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,M,g,y,null)}function L(C,N,M,A){let R=null,z=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)R=z;else if(R=M.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let X=R.uuid,k=N.uuid,F=c[X];F===void 0&&(F={},c[X]=F);let V=F[k];V===void 0&&(V=R.clone(),F[k]=V,N.addEventListener("dispose",w)),R=V}if(R.visible=N.visible,R.wireframe=N.wireframe,A===ir?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:u[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let X=n.properties.get(R);X.light=M}return R}function b(C,N,M,A,R){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&R===ir)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let k=t.update(C),F=C.material;if(Array.isArray(F)){let V=k.groups;for(let K=0,Z=V.length;K<Z;K++){let nt=V[K],J=F[nt.materialIndex];if(J&&J.visible){let tt=L(C,J,A,R);C.onBeforeShadow(n,C,N,M,k,tt,nt),n.renderBufferDirect(M,null,k,tt,C,nt),C.onAfterShadow(n,C,N,M,k,tt,nt)}}}else if(F.visible){let V=L(C,F,A,R);C.onBeforeShadow(n,C,N,M,k,V,null),n.renderBufferDirect(M,null,k,V,C,null),C.onAfterShadow(n,C,N,M,k,V,null)}}let X=C.children;for(let k=0,F=X.length;k<F;k++)b(X[k],N,M,A,R)}function w(C){C.target.removeEventListener("dispose",w);for(let M in c){let A=c[M],R=C.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function Fv(n,t){function e(){let W=!1,Rt=new Ze,lt=null,Pt=new Ze(0,0,0,0);return{setMask:function(Ot){lt!==Ot&&!W&&(n.colorMask(Ot,Ot,Ot,Ot),lt=Ot)},setLocked:function(Ot){W=Ot},setClear:function(Ot,gt,Jt,qt,Pe){Pe===!0&&(Ot*=qt,gt*=qt,Jt*=qt),Rt.set(Ot,gt,Jt,qt),Pt.equals(Rt)===!1&&(n.clearColor(Ot,gt,Jt,qt),Pt.copy(Rt))},reset:function(){W=!1,lt=null,Pt.set(-1,0,0,0)}}}function i(){let W=!1,Rt=!1,lt=null,Pt=null,Ot=null;return{setReversed:function(gt){if(Rt!==gt){let Jt=t.get("EXT_clip_control");gt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Rt=gt;let qt=Ot;Ot=null,this.setClear(qt)}},getReversed:function(){return Rt},setTest:function(gt){gt?it(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(gt){lt!==gt&&!W&&(n.depthMask(gt),lt=gt)},setFunc:function(gt){if(Rt&&(gt=Bd[gt]),Pt!==gt){switch(gt){case ya:n.depthFunc(n.NEVER);break;case va:n.depthFunc(n.ALWAYS);break;case Ma:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case ba:n.depthFunc(n.EQUAL);break;case Sa:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=gt}},setLocked:function(gt){W=gt},setClear:function(gt){Ot!==gt&&(Ot=gt,Rt&&(gt=1-gt),n.clearDepth(gt))},reset:function(){W=!1,lt=null,Pt=null,Ot=null,Rt=!1}}}function s(){let W=!1,Rt=null,lt=null,Pt=null,Ot=null,gt=null,Jt=null,qt=null,Pe=null;return{setTest:function(_e){W||(_e?it(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(_e){Rt!==_e&&!W&&(n.stencilMask(_e),Rt=_e)},setFunc:function(_e,pn,Et){(lt!==_e||Pt!==pn||Ot!==Et)&&(n.stencilFunc(_e,pn,Et),lt=_e,Pt=pn,Ot=Et)},setOp:function(_e,pn,Et){(gt!==_e||Jt!==pn||qt!==Et)&&(n.stencilOp(_e,pn,Et),gt=_e,Jt=pn,qt=Et)},setLocked:function(_e){W=_e},setClear:function(_e){Pe!==_e&&(n.clearStencil(_e),Pe=_e)},reset:function(){W=!1,Rt=null,lt=null,Pt=null,Ot=null,gt=null,Jt=null,qt=null,Pe=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},g=new WeakMap,_=[],y=null,x=!1,m=null,T=null,L=null,b=null,w=null,C=null,N=null,M=new le(0,0,0),A=0,R=!1,z=null,X=null,k=null,F=null,V=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,nt=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=nt>=1):J.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=nt>=2);let tt=null,st={},mt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),Mt=new Ze().fromArray(mt),St=new Ze().fromArray(xt);function yt(W,Rt,lt,Pt){let Ot=new Uint8Array(4),gt=n.createTexture();n.bindTexture(W,gt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<lt;Jt++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Ot):n.texImage2D(Rt+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ot);return gt}let B={};B[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Ks),Vt(!1),se(nh),it(n.CULL_FACE),Qt(Mi);function it(W){d[W]!==!0&&(n.enable(W),d[W]=!0)}function pt(W){d[W]!==!1&&(n.disable(W),d[W]=!1)}function Lt(W,Rt){return h[W]!==Rt?(n.bindFramebuffer(W,Rt),h[W]=Rt,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Rt),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function dt(W,Rt){let lt=_,Pt=!1;if(W){lt=g.get(Rt),lt===void 0&&(lt=[],g.set(Rt,lt));let Ot=W.textures;if(lt.length!==Ot.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Jt=Ot.length;gt<Jt;gt++)lt[gt]=n.COLOR_ATTACHMENT0+gt;lt.length=Ot.length,Pt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(lt)}function kt(W){return y!==W?(n.useProgram(W),y=W,!0):!1}let jt={[ws]:n.FUNC_ADD,[od]:n.FUNC_SUBTRACT,[ad]:n.FUNC_REVERSE_SUBTRACT};jt[ld]=n.MIN,jt[cd]=n.MAX;let $t={[hd]:n.ZERO,[ud]:n.ONE,[fd]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[_d]:n.SRC_ALPHA_SATURATE,[gd]:n.DST_COLOR,[pd]:n.DST_ALPHA,[dd]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[xd]:n.ONE_MINUS_DST_COLOR,[md]:n.ONE_MINUS_DST_ALPHA,[yd]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[Md]:n.CONSTANT_ALPHA,[bd]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(W,Rt,lt,Pt,Ot,gt,Jt,qt,Pe,_e){if(W===Mi){x===!0&&(pt(n.BLEND),x=!1);return}if(x===!1&&(it(n.BLEND),x=!0),W!==rd){if(W!==m||_e!==R){if((T!==ws||w!==ws)&&(n.blendEquation(n.FUNC_ADD),T=ws,w=ws),_e)switch(W){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ae("WebGLState: Invalid blending: ",W);break}else switch(W){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",W);break}L=null,b=null,C=null,N=null,M.set(0,0,0),A=0,m=W,R=_e}return}Ot=Ot||Rt,gt=gt||lt,Jt=Jt||Pt,(Rt!==T||Ot!==w)&&(n.blendEquationSeparate(jt[Rt],jt[Ot]),T=Rt,w=Ot),(lt!==L||Pt!==b||gt!==C||Jt!==N)&&(n.blendFuncSeparate($t[lt],$t[Pt],$t[gt],$t[Jt]),L=lt,b=Pt,C=gt,N=Jt),(qt.equals(M)===!1||Pe!==A)&&(n.blendColor(qt.r,qt.g,qt.b,Pe),M.copy(qt),A=Pe),m=W,R=!1}function ue(W,Rt){W.side===Xn?pt(n.CULL_FACE):it(n.CULL_FACE);let lt=W.side===Cn;Rt&&(lt=!lt),Vt(lt),W.blending===sr&&W.transparent===!1?Qt(Mi):Qt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Pt=W.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(W){z!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),z=W)}function se(W){W!==nd?(it(n.CULL_FACE),W!==X&&(W===nh?n.cullFace(n.BACK):W===id?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),X=W}function Fe(W){W!==k&&(Z&&n.lineWidth(W),k=W)}function ke(W,Rt,lt){W?(it(n.POLYGON_OFFSET_FILL),(F!==Rt||V!==lt)&&(F=Rt,V=lt,o.getReversed()&&(Rt=-Rt),n.polygonOffset(Rt,lt))):pt(n.POLYGON_OFFSET_FILL)}function Te(W){W?it(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Ie(W){W===void 0&&(W=n.TEXTURE0+K-1),tt!==W&&(n.activeTexture(W),tt=W)}function H(W,Rt,lt){lt===void 0&&(tt===null?lt=n.TEXTURE0+K-1:lt=tt);let Pt=st[lt];Pt===void 0&&(Pt={type:void 0,texture:void 0},st[lt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(tt!==lt&&(n.activeTexture(lt),tt=lt),n.bindTexture(W,Rt||B[W]),Pt.type=W,Pt.texture=Rt)}function Ge(){let W=st[tt];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function v(){try{n.texSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function q(){try{n.texSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function et(){try{n.compressedTexSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function ot(){try{n.compressedTexSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function At(){try{n.texStorage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function It(){try{n.texStorage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function at(){try{n.texImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function ht(){try{n.texImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function Tt(W){return u[W]!==void 0?u[W]:n.getParameter(W)}function Yt(W,Rt){u[W]!==Rt&&(n.pixelStorei(W,Rt),u[W]=Rt)}function Ct(W){Mt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function wt(W){St.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),St.copy(W))}function Xt(W,Rt){let lt=c.get(Rt);lt===void 0&&(lt=new WeakMap,c.set(Rt,lt));let Pt=lt.get(W);Pt===void 0&&(Pt=n.getUniformBlockIndex(Rt,W.name),lt.set(W,Pt))}function te(W,Rt){let Pt=c.get(Rt).get(W);l.get(Rt)!==Pt&&(n.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),l.set(Rt,Pt))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},tt=null,st={},h={},g=new WeakMap,_=[],y=null,x=!1,m=null,T=null,L=null,b=null,w=null,C=null,N=null,M=new le(0,0,0),A=0,R=!1,z=null,X=null,k=null,F=null,V=null,Mt.set(0,0,n.canvas.width,n.canvas.height),St.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:pt,bindFramebuffer:Lt,drawBuffers:dt,useProgram:kt,setBlending:Qt,setMaterial:ue,setFlipSided:Vt,setCullFace:se,setLineWidth:Fe,setPolygonOffset:ke,setScissorTest:Te,activeTexture:Ie,bindTexture:H,unbindTexture:Ge,compressedTexImage2D:be,compressedTexImage3D:P,texImage2D:at,texImage3D:ht,pixelStorei:Yt,getParameter:Tt,updateUBOMapping:Xt,uniformBlockBinding:te,texStorage2D:At,texStorage3D:It,texSubImage2D:v,texSubImage3D:q,compressedTexSubImage2D:et,compressedTexSubImage3D:ot,scissor:Ct,viewport:wt,reset:ce}}function Ov(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,d=new WeakMap,u=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,v){return _?new OffscreenCanvas(P,v):Vr("canvas")}function x(P,v,q){let et=1,ot=be(P);if((ot.width>q||ot.height>q)&&(et=q/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let At=Math.floor(et*ot.width),It=Math.floor(et*ot.height);h===void 0&&(h=y(At,It));let at=v?y(At,It):h;return at.width=At,at.height=It,at.getContext("2d").drawImage(P,0,0,At,It),ie("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+At+"x"+It+")."),at}else return"data"in P&&ie("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),P;return P}function m(P){return P.generateMipmaps}function T(P){n.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,v,q,et,ot,At=!1){if(P!==null){if(n[P]!==void 0)return n[P];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let It;et&&(It=t.get("EXT_texture_norm16"),It||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=v;if(v===n.RED&&(q===n.FLOAT&&(at=n.R32F),q===n.HALF_FLOAT&&(at=n.R16F),q===n.UNSIGNED_BYTE&&(at=n.R8),q===n.UNSIGNED_SHORT&&It&&(at=It.R16_EXT),q===n.SHORT&&It&&(at=It.R16_SNORM_EXT)),v===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(at=n.R8UI),q===n.UNSIGNED_SHORT&&(at=n.R16UI),q===n.UNSIGNED_INT&&(at=n.R32UI),q===n.BYTE&&(at=n.R8I),q===n.SHORT&&(at=n.R16I),q===n.INT&&(at=n.R32I)),v===n.RG&&(q===n.FLOAT&&(at=n.RG32F),q===n.HALF_FLOAT&&(at=n.RG16F),q===n.UNSIGNED_BYTE&&(at=n.RG8),q===n.UNSIGNED_SHORT&&It&&(at=It.RG16_EXT),q===n.SHORT&&It&&(at=It.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(at=n.RG8UI),q===n.UNSIGNED_SHORT&&(at=n.RG16UI),q===n.UNSIGNED_INT&&(at=n.RG32UI),q===n.BYTE&&(at=n.RG8I),q===n.SHORT&&(at=n.RG16I),q===n.INT&&(at=n.RG32I)),v===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(at=n.RGB8UI),q===n.UNSIGNED_SHORT&&(at=n.RGB16UI),q===n.UNSIGNED_INT&&(at=n.RGB32UI),q===n.BYTE&&(at=n.RGB8I),q===n.SHORT&&(at=n.RGB16I),q===n.INT&&(at=n.RGB32I)),v===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(at=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(at=n.RGBA16UI),q===n.UNSIGNED_INT&&(at=n.RGBA32UI),q===n.BYTE&&(at=n.RGBA8I),q===n.SHORT&&(at=n.RGBA16I),q===n.INT&&(at=n.RGBA32I)),v===n.RGB&&(q===n.UNSIGNED_SHORT&&It&&(at=It.RGB16_EXT),q===n.SHORT&&It&&(at=It.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(at=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(at=n.R11F_G11F_B10F)),v===n.RGBA){let ht=At?zr:we.getTransfer(ot);q===n.FLOAT&&(at=n.RGBA32F),q===n.HALF_FLOAT&&(at=n.RGBA16F),q===n.UNSIGNED_BYTE&&(at=ht===De?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&It&&(at=It.RGBA16_EXT),q===n.SHORT&&It&&(at=It.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function w(P,v){let q;return P?v===null||v===si||v===or?q=n.DEPTH24_STENCIL8:v===ri?q=n.DEPTH32F_STENCIL8:v===rr&&(q=n.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===or?q=n.DEPTH_COMPONENT24:v===ri?q=n.DEPTH_COMPONENT32F:v===rr&&(q=n.DEPTH_COMPONENT16),q}function C(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function N(P){let v=P.target;v.removeEventListener("dispose",N),A(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&u.delete(v)}function M(P){let v=P.target;v.removeEventListener("dispose",M),z(v)}function A(P){let v=i.get(P);if(v.__webglInit===void 0)return;let q=P.source,et=g.get(q);if(et){let ot=et[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(P),Object.keys(et).length===0&&g.delete(q)}i.remove(P)}function R(P){let v=i.get(P);n.deleteTexture(v.__webglTexture);let q=P.source,et=g.get(q);delete et[v.__cacheKey],o.memory.textures--}function z(P){let v=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let ot=0;ot<v.__webglFramebuffer[et].length;ot++)n.deleteFramebuffer(v.__webglFramebuffer[et][ot]);else n.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)n.deleteFramebuffer(v.__webglFramebuffer[et]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let q=P.textures;for(let et=0,ot=q.length;et<ot;et++){let At=i.get(q[et]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(q[et])}i.remove(P)}let X=0;function k(){X=0}function F(){return X}function V(P){X=P}function K(){let P=X;return P>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,P}function Z(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function nt(P,v){let q=i.get(P);if(P.isVideoTexture&&H(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let et=P.image;if(et===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(q,P,v);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+v)}function J(P,v){let q=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){pt(q,P,v);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+v)}function tt(P,v){let q=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){pt(q,P,v);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+v)}function st(P,v){let q=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){Lt(q,P,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+v)}let mt={[Ea]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},xt={[hn]:n.NEAREST,[Ad]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},Mt={[Rd]:n.NEVER,[Nd]:n.ALWAYS,[Id]:n.LESS,[kl]:n.LEQUAL,[Pd]:n.EQUAL,[Vl]:n.GEQUAL,[Ld]:n.GREATER,[Dd]:n.NOTEQUAL};function St(P,v){if(v.type===ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===il||v.magFilter===oo||v.magFilter===ls||v.minFilter===nn||v.minFilter===il||v.minFilter===oo||v.minFilter===ls)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,mt[v.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,mt[v.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,mt[v.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,xt[v.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==oo&&v.minFilter!==ls||v.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function yt(P,v){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",N));let et=v.source,ot=g.get(et);ot===void 0&&(ot={},g.set(et,ot));let At=Z(v);if(At!==P.__cacheKey){ot[At]===void 0&&(ot[At]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ot[At].usedTimes++;let It=ot[P.__cacheKey];It!==void 0&&(ot[P.__cacheKey].usedTimes--,It.usedTimes===0&&R(v)),P.__cacheKey=At,P.__webglTexture=ot[At].texture}return q}function B(P,v,q){return Math.floor(Math.floor(P/q)/v)}function it(P,v,q,et){let At=P.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,q,et,v.data);else{At.sort((Yt,Ct)=>Yt.start-Ct.start);let It=0;for(let Yt=1;Yt<At.length;Yt++){let Ct=At[It],wt=At[Yt],Xt=Ct.start+Ct.count,te=B(wt.start,v.width,4),ce=B(Ct.start,v.width,4);wt.start<=Xt+1&&te===ce&&B(wt.start+wt.count-1,v.width,4)===te?Ct.count=Math.max(Ct.count,wt.start+wt.count-Ct.start):(++It,At[It]=wt)}At.length=It+1;let at=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),Tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Yt=0,Ct=At.length;Yt<Ct;Yt++){let wt=At[Yt],Xt=Math.floor(wt.start/4),te=Math.ceil(wt.count/4),ce=Xt%v.width,W=Math.floor(Xt/v.width),Rt=te,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,ce,W,Rt,lt,q,et,v.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,at),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function pt(P,v,q){let et=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=n.TEXTURE_3D);let ot=yt(P,v),At=v.source;e.bindTexture(et,P.__webglTexture,n.TEXTURE0+q);let It=i.get(At);if(At.version!==It.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let lt=we.getPrimaries(we.workingColorSpace),Pt=v.colorSpace===Oi?null:we.getPrimaries(v.colorSpace),Ot=v.colorSpace===Oi||lt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ht=x(v.image,!1,s.maxTextureSize);ht=Ge(v,ht);let Tt=r.convert(v.format,v.colorSpace),Yt=r.convert(v.type),Ct=b(v.internalFormat,Tt,Yt,v.normalized,v.colorSpace,v.isVideoTexture);St(et,v);let wt,Xt=v.mipmaps,te=v.isVideoTexture!==!0,ce=It.__version===void 0||ot===!0,W=At.dataReady,Rt=C(v,ht);if(v.isDepthTexture)Ct=w(v.format===cs,v.type),ce&&(te?e.texStorage2D(n.TEXTURE_2D,1,Ct,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Tt,Yt,null));else if(v.isDataTexture)if(Xt.length>0){te&&ce&&e.texStorage2D(n.TEXTURE_2D,Rt,Ct,Xt[0].width,Xt[0].height);for(let lt=0,Pt=Xt.length;lt<Pt;lt++)wt=Xt[lt],te?W&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,wt.width,wt.height,Tt,Yt,wt.data):e.texImage2D(n.TEXTURE_2D,lt,Ct,wt.width,wt.height,0,Tt,Yt,wt.data);v.generateMipmaps=!1}else te?(ce&&e.texStorage2D(n.TEXTURE_2D,Rt,Ct,ht.width,ht.height),W&&it(v,ht,Tt,Yt)):e.texImage2D(n.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Tt,Yt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){te&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ct,Xt[0].width,Xt[0].height,ht.depth);for(let lt=0,Pt=Xt.length;lt<Pt;lt++)if(wt=Xt[lt],v.format!==qn)if(Tt!==null)if(te){if(W)if(v.layerUpdates.size>0){let Ot=Ih(wt.width,wt.height,v.format,v.type);for(let gt of v.layerUpdates){let Jt=wt.data.subarray(gt*Ot/wt.data.BYTES_PER_ELEMENT,(gt+1)*Ot/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,gt,wt.width,wt.height,1,Tt,Jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,wt.width,wt.height,ht.depth,Tt,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,Ct,wt.width,wt.height,ht.depth,0,wt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,wt.width,wt.height,ht.depth,Tt,Yt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,Ct,wt.width,wt.height,ht.depth,0,Tt,Yt,wt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{te&&ce&&e.texStorage2D(n.TEXTURE_2D,Rt,Ct,Xt[0].width,Xt[0].height);for(let lt=0,Pt=Xt.length;lt<Pt;lt++)wt=Xt[lt],v.format!==qn?Tt!==null?te?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,Ct,wt.width,wt.height,0,wt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?W&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,wt.width,wt.height,Tt,Yt,wt.data):e.texImage2D(n.TEXTURE_2D,lt,Ct,wt.width,wt.height,0,Tt,Yt,wt.data)}else if(v.isDataArrayTexture)if(te){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ct,ht.width,ht.height,ht.depth),W)if(v.layerUpdates.size>0){let lt=Ih(ht.width,ht.height,v.format,v.type);for(let Pt of v.layerUpdates){let Ot=ht.data.subarray(Pt*lt/ht.data.BYTES_PER_ELEMENT,(Pt+1)*lt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,ht.width,ht.height,1,Tt,Yt,Ot)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Yt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,ht.width,ht.height,ht.depth,0,Tt,Yt,ht.data);else if(v.isData3DTexture)te?(ce&&e.texStorage3D(n.TEXTURE_3D,Rt,Ct,ht.width,ht.height,ht.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Yt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,ht.width,ht.height,ht.depth,0,Tt,Yt,ht.data);else if(v.isFramebufferTexture){if(ce)if(te)e.texStorage2D(n.TEXTURE_2D,Rt,Ct,ht.width,ht.height);else{let lt=ht.width,Pt=ht.height;for(let Ot=0;Ot<Rt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,Ct,lt,Pt,0,Tt,Yt,null),lt>>=1,Pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ht.parentNode!==lt){lt.appendChild(ht),u.add(v),lt.onpaint=Pt=>{let Ot=Pt.changedElements;for(let gt of u)Ot.includes(gt.image)&&(gt.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{let Ot=n.RGBA,gt=n.RGBA,Jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ot,gt,Jt,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(te&&ce){let lt=be(Xt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Ct,lt.width,lt.height)}for(let lt=0,Pt=Xt.length;lt<Pt;lt++)wt=Xt[lt],te?W&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Tt,Yt,wt):e.texImage2D(n.TEXTURE_2D,lt,Ct,Tt,Yt,wt);v.generateMipmaps=!1}else if(te){if(ce){let lt=be(ht);e.texStorage2D(n.TEXTURE_2D,Rt,Ct,lt.width,lt.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Yt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Ct,Tt,Yt,ht);m(v)&&T(et),It.__version=At.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Lt(P,v,q){if(v.image.length!==6)return;let et=yt(P,v),ot=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+q);let At=i.get(ot);if(ot.version!==At.__version||et===!0){e.activeTexture(n.TEXTURE0+q);let It=we.getPrimaries(we.workingColorSpace),at=v.colorSpace===Oi?null:we.getPrimaries(v.colorSpace),ht=v.colorSpace===Oi||It===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,Yt=v.image[0]&&v.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!Tt&&!Yt?Ct[gt]=x(v.image[gt],!0,s.maxCubemapSize):Ct[gt]=Yt?v.image[gt].image:v.image[gt],Ct[gt]=Ge(v,Ct[gt]);let wt=Ct[0],Xt=r.convert(v.format,v.colorSpace),te=r.convert(v.type),ce=b(v.internalFormat,Xt,te,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,Rt=At.__version===void 0||et===!0,lt=ot.dataReady,Pt=C(v,wt);St(n.TEXTURE_CUBE_MAP,v);let Ot;if(Tt){W&&Rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ce,wt.width,wt.height);for(let gt=0;gt<6;gt++){Ot=Ct[gt].mipmaps;for(let Jt=0;Jt<Ot.length;Jt++){let qt=Ot[Jt];v.format!==qn?Xt!==null?W?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt,0,0,qt.width,qt.height,Xt,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt,ce,qt.width,qt.height,0,qt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt,0,0,qt.width,qt.height,Xt,te,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt,ce,qt.width,qt.height,0,Xt,te,qt.data)}}}else{if(Ot=v.mipmaps,W&&Rt){Ot.length>0&&Pt++;let gt=be(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ce,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Yt){W?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,Xt,te,Ct[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,Ct[gt].width,Ct[gt].height,0,Xt,te,Ct[gt].data);for(let Jt=0;Jt<Ot.length;Jt++){let Pe=Ot[Jt].image[gt].image;W?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt+1,0,0,Pe.width,Pe.height,Xt,te,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt+1,ce,Pe.width,Pe.height,0,Xt,te,Pe.data)}}else{W?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Xt,te,Ct[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,Xt,te,Ct[gt]);for(let Jt=0;Jt<Ot.length;Jt++){let qt=Ot[Jt];W?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt+1,0,0,Xt,te,qt.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Jt+1,ce,Xt,te,qt.image[gt])}}}m(v)&&T(n.TEXTURE_CUBE_MAP),At.__version=ot.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function dt(P,v,q,et,ot,At){let It=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ht=b(q.internalFormat,It,at,q.normalized,q.colorSpace),Tt=i.get(v),Yt=i.get(q);if(Yt.__renderTarget=v,!Tt.__hasExternalTextures){let Ct=Math.max(1,v.width>>At),wt=Math.max(1,v.height>>At);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,At,ht,Ct,wt,v.depth,0,It,at,null):e.texImage2D(ot,At,ht,Ct,wt,0,It,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ie(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,ot,Yt.__webglTexture,0,Te(v)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,ot,Yt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(P,v,q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),v.depthBuffer){let et=v.depthTexture,ot=et&&et.isDepthTexture?et.type:null,At=w(v.stencilBuffer,ot),It=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(v),At,v.width,v.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(v),At,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,At,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,P)}else{let et=v.textures;for(let ot=0;ot<et.length;ot++){let At=et[ot],It=r.convert(At.format,At.colorSpace),at=r.convert(At.type),ht=b(At.internalFormat,It,at,At.normalized,At.colorSpace);Ie(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(v),ht,v.width,v.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(v),ht,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ht,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(P,v,q){let et=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(v.depthTexture);if(ot.__renderTarget=v,(!ot.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,v.depthTexture.addEventListener("dispose",N)),ot.__webglTexture===void 0){ot.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),St(n.TEXTURE_CUBE_MAP,v.depthTexture);let Tt=r.convert(v.depthTexture.format),Yt=r.convert(v.depthTexture.type),Ct;v.depthTexture.format===xi?Ct=n.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(Ct=n.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,v.width,v.height,0,Tt,Yt,null)}}else nt(v.depthTexture,0);let At=ot.__webglTexture,It=Te(v),at=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,ht=v.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)Ie(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,at,At,0,It):n.framebufferTexture2D(n.FRAMEBUFFER,ht,at,At,0);else if(v.depthTexture.format===cs)Ie(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,at,At,0,It):n.framebufferTexture2D(n.FRAMEBUFFER,ht,at,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(P){let v=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let et=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let ot=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),v.__depthDisposeCallback=ot}v.__boundDepthTexture=et}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let et=0;et<6;et++)jt(v.__webglFramebuffer[et],P,et);else{let et=P.texture.mipmaps;et&&et.length>0?jt(v.__webglFramebuffer[0],P,0):jt(v.__webglFramebuffer,P,0)}else if(q){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=n.createRenderbuffer(),kt(v.__webglDepthbuffer[et],P,!1);else{let ot=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,At)}}else{let et=P.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),kt(v.__webglDepthbuffer,P,!1);else{let ot=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(P,v,q){let et=i.get(P);v!==void 0&&dt(et.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&$t(P)}function ue(P){let v=P.texture,q=i.get(P),et=i.get(v);P.addEventListener("dispose",M);let ot=P.textures,At=P.isWebGLCubeRenderTarget===!0,It=ot.length>1;if(It||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=v.version,o.memory.textures++),At){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let ht=0;ht<v.mipmaps.length;ht++)q.__webglFramebuffer[at][ht]=n.createFramebuffer()}else q.__webglFramebuffer[at]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)q.__webglFramebuffer[at]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(It)for(let at=0,ht=ot.length;at<ht;at++){let Tt=i.get(ot[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ie(P)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<ot.length;at++){let ht=ot[at];q.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let Tt=r.convert(ht.format,ht.colorSpace),Yt=r.convert(ht.type),Ct=b(ht.internalFormat,Tt,Yt,ht.normalized,ht.colorSpace,P.isXRRenderTarget===!0),wt=Te(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,Ct,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,q.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),St(n.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)dt(q.__webglFramebuffer[at][ht],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else dt(q.__webglFramebuffer[at],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let at=0,ht=ot.length;at<ht;at++){let Tt=ot[at],Yt=i.get(Tt),Ct=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Yt.__webglTexture),St(Ct,Tt),dt(q.__webglFramebuffer,P,Tt,n.COLOR_ATTACHMENT0+at,Ct,0),m(Tt)&&T(Ct)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,et.__webglTexture),St(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)dt(q.__webglFramebuffer[ht],P,v,n.COLOR_ATTACHMENT0,at,ht);else dt(q.__webglFramebuffer,P,v,n.COLOR_ATTACHMENT0,at,0);m(v)&&T(at),e.unbindTexture()}P.depthBuffer&&$t(P)}function Vt(P){let v=P.textures;for(let q=0,et=v.length;q<et;q++){let ot=v[q];if(m(ot)){let At=L(P),It=i.get(ot).__webglTexture;e.bindTexture(At,It),T(At),e.unbindTexture()}}}let se=[],Fe=[];function ke(P){if(P.samples>0){if(Ie(P)===!1){let v=P.textures,q=P.width,et=P.height,ot=n.COLOR_BUFFER_BIT,At=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(P),at=v.length>1;if(at)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let ht=P.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let Yt=i.get(v[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,q,et,0,0,q,et,ot,n.NEAREST),l===!0&&(se.length=0,Fe.length=0,se.push(n.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(se.push(At),Fe.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);let Yt=i.get(v[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Te(P){return Math.min(s.maxSamples,P.samples)}function Ie(P){let v=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(P){let v=o.render.frame;d.get(P)!==v&&(d.set(P,v),P.update())}function Ge(P,v){let q=P.colorSpace,et=P.format,ot=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Br&&q!==Oi&&(we.getTransfer(q)===De?(et!==qn||ot!==zn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",q)),v}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=k,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=tt,this.setTextureCube=st,this.rebindTextures=Qt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Bv(n,t){function e(i,s=Oi){let r,o=we.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xh)return n.BYTE;if(i===_h)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===sl)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===Mh)return n.ALPHA;if(i===bh)return n.RGB;if(i===qn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===al)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===ll)return n.RG_INTEGER;if(i===cl)return n.RGBA_INTEGER;if(i===ao||i===lo||i===co||i===ho)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===ul||i===fl||i===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl||i===xl||i===_l||i===uo||i===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xl)return r.COMPRESSED_R11_EAC;if(i===_l)return r.COMPRESSED_SIGNED_R11_EAC;if(i===uo)return r.COMPRESSED_RG11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vl||i===Ml||i===bl||i===Sl||i===wl||i===Al||i===El||i===Tl||i===Cl||i===Rl||i===Il||i===Pl||i===Ll||i===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===El)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Ul||i===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nl)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===Bl||i===fo||i===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new yn({vertexShader:zv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends _i{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,g=null,_=null,y=typeof XRWebGLBinding<"u",x=new Zh,m={},T=e.getContextAttributes(),L=null,b=null,w=[],C=[],N=new Me,M=null,A=null,R=new xn;R.viewport=new Ze;let z=new xn;z.viewport=new Ze;let X=[R,z],k=new Qa,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let it=w[B];return it===void 0&&(it=new tr,w[B]=it),it.getTargetRaySpace()},this.getControllerGrip=function(B){let it=w[B];return it===void 0&&(it=new tr,w[B]=it),it.getGripSpace()},this.getHand=function(B){let it=w[B];return it===void 0&&(it=new tr,w[B]=it),it.getHandSpace()};function K(B){let it=C.indexOf(B.inputSource);if(it===-1)return;let pt=w[it];pt!==void 0&&(pt.update(B.inputSource,B.frame,c||o),pt.dispatchEvent({type:B.type,data:B.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",nt);for(let B=0;B<w.length;B++){let it=C[B];it!==null&&(C[B]=null,w[B].disconnect(it))}F=null,V=null,x.reset();for(let B in m)delete m[B];if(t.setRenderTarget(L),g=null,h=null,u=null,s=null,b=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(N.width,N.height,!1),A!==null){let B=A.camera;B.fov=A.fov,B.zoom=A.zoom,B.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,dt=null;T.depth&&(dt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=T.stencil?cs:xi,Lt=T.stencil?or:si);let kt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Pn(h.textureWidth,h.textureHeight,{format:qn,type:zn,depthTexture:new ns(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Pn(g.framebufferWidth,g.framebufferHeight,{format:qn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(B){for(let it=0;it<B.removed.length;it++){let pt=B.removed[it],Lt=C.indexOf(pt);Lt>=0&&(C[Lt]=null,w[Lt].disconnect(pt))}for(let it=0;it<B.added.length;it++){let pt=B.added[it],Lt=C.indexOf(pt);if(Lt===-1){for(let kt=0;kt<w.length;kt++)if(kt>=C.length){C.push(pt),Lt=kt;break}else if(C[kt]===null){C[kt]=pt,Lt=kt;break}if(Lt===-1)break}let dt=w[Lt];dt&&dt.connect(pt)}}let J=new $,tt=new $;function st(B,it,pt){J.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let Lt=J.distanceTo(tt),dt=it.projectionMatrix.elements,kt=pt.projectionMatrix.elements,jt=dt[14]/(dt[10]-1),$t=dt[14]/(dt[10]+1),Qt=(dt[9]+1)/dt[5],ue=(dt[9]-1)/dt[5],Vt=(dt[8]-1)/dt[0],se=(kt[8]+1)/kt[0],Fe=jt*Vt,ke=jt*se,Te=Lt/(-Vt+se),Ie=Te*-Vt;if(it.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ie),B.translateZ(Te),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),dt[10]===-1)B.projectionMatrix.copy(it.projectionMatrix),B.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let H=jt+Te,Ge=$t+Te,be=Fe-Ie,P=ke+(Lt-Ie),v=Qt*$t/Ge*H,q=ue*$t/Ge*H;B.projectionMatrix.makePerspective(be,P,v,q,H,Ge),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function mt(B,it){it===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(it.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let it=B.near,pt=B.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),k.near=z.near=R.near=it,k.far=z.far=R.far=pt,(F!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,V=k.far),k.layers.mask=B.layers.mask|6,R.layers.mask=k.layers.mask&-5,z.layers.mask=k.layers.mask&-3;let Lt=B.parent,dt=k.cameras;mt(k,Lt);for(let kt=0;kt<dt.length;kt++)mt(dt[kt],Lt);dt.length===2?st(k,R,z):k.projectionMatrix.copy(R.projectionMatrix),A===null&&B.isPerspectiveCamera&&(A={camera:B,fov:B.fov,zoom:B.zoom}),xt(B,k,Lt)};function xt(B,it,pt){pt===null?B.matrix.copy(it.matrixWorld):(B.matrix.copy(pt.matrixWorld),B.matrix.invert(),B.matrix.multiply(it.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(it.projectionMatrix),B.projectionMatrixInverse.copy(it.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ra*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(B){return m[B]};let Mt=null;function St(B,it){if(d=it.getViewerPose(c||o),_=it,d!==null){let pt=d.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let Lt=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,Lt=!0);for(let $t=0;$t<pt.length;$t++){let Qt=pt[$t],ue=null;if(g!==null)ue=g.getViewport(Qt);else{let se=u.getViewSubImage(h,Qt);ue=se.viewport,$t===0&&(t.setRenderTargetTextures(b,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(b))}let Vt=X[$t];Vt===void 0&&(Vt=new xn,Vt.layers.enable($t),Vt.viewport=new Ze,X[$t]=Vt),Vt.matrix.fromArray(Qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ue.x,ue.y,ue.width,ue.height),$t===0&&(k.matrix.copy(Vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Lt===!0&&k.cameras.push(Vt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let $t=u.getDepthInformation(pt[0]);$t&&$t.isValid&&$t.texture&&x.init($t,s.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let $t=0;$t<pt.length;$t++){let Qt=pt[$t].camera;if(Qt){let ue=m[Qt];ue||(ue=new jr,m[Qt]=ue);let Vt=u.getCameraImage(Qt);ue.sourceTexture=Vt}}}}for(let pt=0;pt<w.length;pt++){let Lt=C[pt],dt=w[pt];Lt!==null&&dt!==void 0&&dt.update(Lt,it,c||o)}Mt&&Mt(B,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}let yt=new up;yt.setAnimationLoop(St),this.setAnimationLoop=function(B){Mt=B},this.dispose=function(){}}},Vv=new Ye,xp=new de;xp.set(-1,0,0,0,1,0,0,0,1);function Gv(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Th(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,T,L,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),d(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),h(x,m),m.isMeshPhysicalMaterial&&g(x,m,b)):m.isMeshMatcapMaterial?(r(x,m),_(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),y(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,T,L):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Cn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Cn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let T=t.get(m),L=T.envMap,b=T.envMapRotation;L&&(x.envMap.value=L,x.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(xp),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,T,L){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*T,x.scale.value=L*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function h(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function g(x,m,T){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,m){m.matcap&&(x.matcap.value=m.matcap)}function y(x,m){let T=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let C=w.program;i.uniformBlockBinding(b,C)}function c(b,w){let C=s[b.id];C===void 0&&(x(b),C=d(b),s[b.id]=C,b.addEventListener("dispose",T));let N=w.program;i.updateUBOMapping(b,N);let M=t.render.frame;r[b.id]!==M&&(h(b),r[b.id]=M)}function d(b){let w=u();b.__bindingPointIndex=w;let C=n.createBuffer(),N=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,C),C}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let w=s[b.id],C=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let M=0,A=C.length;M<A;M++){let R=C[M];if(Array.isArray(R))for(let z=0,X=R.length;z<X;z++)g(R[z],M,z,N);else g(R,M,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,w,C,N){if(y(b,w,C,N)===!0){let M=b.__offset,A=b.value;if(Array.isArray(A)){let R=0;for(let z=0;z<A.length;z++){let X=A[z],k=m(X);_(X,b.__data,R),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function _(b,w,C){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,C)}function y(b,w,C,N){let M=b.value,A=w+"_"+C;if(N[A]===void 0)return typeof M=="number"||typeof M=="boolean"?N[A]=M:ArrayBuffer.isView(M)?N[A]=M.slice():N[A]=M.clone(),!0;{let R=N[A];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return N[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function x(b){let w=b.uniforms,C=0,N=16;for(let A=0,R=w.length;A<R;A++){let z=Array.isArray(w[A])?w[A]:[w[A]];for(let X=0,k=z.length;X<k;X++){let F=z[X],V=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Z=V.length;K<Z;K++){let nt=V[K],J=m(nt),tt=C%N,st=tt%J.boundary,mt=tt+st;C+=st,mt!==0&&N-mt<J.storage&&(C+=N-mt),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=C,C+=J.storage}}}let M=C%N;return M>0&&(C+=N-M),b.__size=C,b.__cache={},this}function m(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",b),w}function T(b){let w=b.target;w.removeEventListener("dispose",T);let C=o.indexOf(w.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function L(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:L}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function Xv(){return bi===null&&(bi=new Na(Wv,16,16,hs,oi),bi.name="DFG_LUT",bi.minFilter=nn,bi.magFilter=nn,bi.wrapS=gi,bi.wrapT=gi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var ql=class{constructor(t={}){let{canvas:e=Ud(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:g=zn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let y=g,x=new Set([cl,ll,al]),m=new Set([zn,si,rr,or,rl,ol]),T=new Uint32Array(4),L=new Int32Array(4),b=new $,w=null,C=null,N=[],M=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,z=!1,X=null,k=null,F=null,V=null;this._outputColorSpace=en;let K=0,Z=0,nt=null,J=-1,tt=null,st=new Ze,mt=new Ze,xt=null,Mt=new le(0),St=0,yt=e.width,B=e.height,it=1,pt=null,Lt=null,dt=new Ze(0,0,yt,B),kt=new Ze(0,0,yt,B),jt=!1,$t=new Zr,Qt=!1,ue=!1,Vt=new Ye,se=new $,Fe=new Ze,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ie(){return nt===null?it:1}let H=i;function Ge(S,G){return e.getContext(S,G)}let be,P,v,q,et,ot,At,It,at,ht,Tt,Yt,Ct,wt,Xt,te,ce,W,Rt,lt,Pt,Ot,gt;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",pn,!1),H===null){let G="webgl2";if(H=Ge(G,S),H===null)throw Ge(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(S){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),ae("WebGLRenderer: "+S.message),S}function Jt(){be=new j_(H),be.init(),Pt=new Bv(H,be),P=new G_(H,be,t,Pt),v=new Fv(H,be),P.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),k=H.createFramebuffer(),F=H.createFramebuffer(),V=H.createFramebuffer(),q=new ey(H),et=new bv,ot=new Ov(H,be,v,et,P,Pt,q),At=new K_(R),It=new ig(H),Ot=new k_(H,It),at=new Q_(H,It,q,Ot),ht=new iy(H,at,It,Ot,q),W=new ny(H,P,ot),Xt=new H_(et),Tt=new Mv(R,At,be,P,Ot,Xt),Yt=new Gv(R,et),Ct=new wv,wt=new Iv(be),ce=new z_(R,At,v,ht,_,l),te=new Uv(R,ht,P),gt=new Hv(H,q,P,v),Rt=new V_(H,be,q),lt=new ty(H,be,q),q.programs=Tt.programs,R.capabilities=P,R.extensions=be,R.properties=et,R.renderLists=Ct,R.shadowMap=te,R.state=v,R.info=q}y!==zn&&(A=new ry(y,e.width,e.height,a,s,r));let qt=new Jh(R,H);this.xr=qt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(yt,B,!1))},this.getSize=function(S){return S.set(yt,B)},this.setSize=function(S,G,rt=!0){if(qt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=S,B=G,e.width=Math.floor(S*it),e.height=Math.floor(G*it),rt===!0&&(e.style.width=S+"px",e.style.height=G+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(yt*it,B*it).floor()},this.setDrawingBufferSize=function(S,G,rt){yt=S,B=G,it=rt,e.width=Math.floor(S*rt),e.height=Math.floor(G*rt),this.setViewport(0,0,S,G)},this.setEffects=function(S){if(y===zn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let G=0;G<S.length;G++)if(S[G].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,G,rt,Q){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,G,rt,Q),v.viewport(st.copy(dt).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(kt)},this.setScissor=function(S,G,rt,Q){S.isVector4?kt.set(S.x,S.y,S.z,S.w):kt.set(S,G,rt,Q),v.scissor(mt.copy(kt).multiplyScalar(it).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){v.setScissorTest(jt=S)},this.setOpaqueSort=function(S){pt=S},this.setTransparentSort=function(S){Lt=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(S=!0,G=!0,rt=!0){let Q=0;if(S){let j=!1;if(nt!==null){let Dt=nt.texture.format;j=x.has(Dt)}if(j){let Dt=nt.texture.type,zt=m.has(Dt),Nt=ce.getClearColor(),Gt=ce.getClearAlpha(),Zt=Nt.r,fe=Nt.g,xe=Nt.b;zt?(T[0]=Zt,T[1]=fe,T[2]=xe,T[3]=Gt,H.clearBufferuiv(H.COLOR,0,T)):(L[0]=Zt,L[1]=fe,L[2]=xe,L[3]=Gt,H.clearBufferiv(H.COLOR,0,L))}else Q|=H.COLOR_BUFFER_BIT}G&&(Q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),X=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),ce.dispose(),Ct.dispose(),wt.dispose(),et.dispose(),At.dispose(),ht.dispose(),Ot.dispose(),gt.dispose(),Tt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",br),qt.removeEventListener("sessionend",Un),hi.stop()};function Pe(S){S.preventDefault(),Gr("WebGLRenderer: Context Lost."),z=!0}function _e(){Gr("WebGLRenderer: Context Restored."),z=!1;let S=q.autoReset,G=te.enabled,rt=te.autoUpdate,Q=te.needsUpdate,j=te.type;Jt(),q.autoReset=S,te.enabled=G,te.autoUpdate=rt,te.needsUpdate=Q,te.type=j}function pn(S){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Et(S){let G=S.target;G.removeEventListener("dispose",Et),Ft(G)}function Ft(S){mc(S),et.remove(S)}function mc(S){let G=et.get(S).programs;G!==void 0&&(G.forEach(function(rt){Tt.releaseProgram(rt)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,rt,Q,j,Dt){G===null&&(G=ke);let zt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Nt=$n(S,G,rt,Q,j);v.setMaterial(Q,zt);let Gt=rt.index,Zt=1;if(Q.wireframe===!0){if(Gt=at.getWireframeAttribute(rt),Gt===void 0)return;Zt=2}let fe=rt.drawRange,xe=rt.attributes.position,Ht=fe.start*Zt,Ee=(fe.start+fe.count)*Zt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*Zt),Ee=Math.min(Ee,(Dt.start+Dt.count)*Zt)),Gt!==null?(Ht=Math.max(Ht,0),Ee=Math.min(Ee,Gt.count)):xe!=null&&(Ht=Math.max(Ht,0),Ee=Math.min(Ee,xe.count));let qe=Ee-Ht;if(qe<0||qe===1/0)return;Ot.setup(j,Q,Nt,rt,Gt);let ze,Ne=Rt;if(Gt!==null&&(ze=It.get(Gt),Ne=lt,Ne.setIndex(ze)),j.isMesh)Q.wireframe===!0?(v.setLineWidth(Q.wireframeLinewidth*Ie()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(j.isLine){let Qe=Q.linewidth;Qe===void 0&&(Qe=1),v.setLineWidth(Qe*Ie()),j.isLineSegments?Ne.setMode(H.LINES):j.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else j.isPoints?Ne.setMode(H.POINTS):j.isSprite&&Ne.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Qe=j._multiDrawStarts,Bt=j._multiDrawCounts,un=j._multiDrawCount,Se=Gt?It.get(Gt).bytesPerElement:1,Rn=et.get(Q).currentProgram.getUniforms();for(let In=0;In<un;In++)Rn.setValue(H,"_gl_DrawID",In),Ne.render(Qe[In]/Se,Bt[In])}else if(j.isInstancedMesh)Ne.renderInstances(Ht,qe,j.count);else if(rt.isInstancedBufferGeometry){let Qe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Bt=Math.min(rt.instanceCount,Qe);Ne.renderInstances(Ht,qe,Bt)}else Ne.render(Ht,qe)};function $e(S,G,rt,Q){X!==null&&S.isNodeMaterial&&X.setObject(Q,S),Qt===!0&&Xt.setState(S,rt,!1),S.transparent===!0&&S.side===Xn&&S.forceSinglePass===!1?(S.side=Cn,S.needsUpdate=!0,ps(S,G,Q),S.side=os,S.needsUpdate=!0,ps(S,G,Q),S.side=Xn):ps(S,G,Q)}this.compile=function(S,G,rt=null){rt===null&&(rt=S),X!==null&&X.renderStart(S,G,rt),C=wt.get(rt),C.init(G),M.push(C),rt.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),S!==rt&&S.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),C.setupLights(),X!==null&&X.updateLights(C.state.lightsArray),ue=this.localClippingEnabled,Qt=Xt.init(this.clippingPlanes,ue),Qt===!0&&Xt.setGlobalState(this.clippingPlanes,G),X!==null&&te.render(C.state.shadowsArray,rt,G);let Q=new Set;return S.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Dt=j.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){let Nt=Dt[zt];$e(Nt,rt,G,j),Q.add(Nt)}else $e(Dt,rt,G,j),Q.add(Dt)}),C=M.pop(),X!==null&&X.renderEnd(),Q},this.compileAsync=function(S,G,rt=null){let Q=this.compile(S,G,rt);return new Promise(j=>{function Dt(){if(Q.forEach(function(zt){let Gt=et.get(zt).currentProgram;(Gt===void 0||Gt.isReady())&&Q.delete(zt)}),Q.size===0){j(S);return}setTimeout(Dt,10)}be.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Mr=null;function gc(S){Mr&&Mr(S)}function br(){hi.stop()}function Un(){hi.start()}let hi=new up;hi.setAnimationLoop(gc),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){Mr=S,qt.setAnimationLoop(S),S===null?hi.stop():hi.start()},qt.addEventListener("sessionstart",br),qt.addEventListener("sessionend",Un),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;X!==null&&X.renderStart(S,G);let rt=qt.enabled===!0&&qt.isPresenting===!0,Q=A!==null&&(nt===null||rt)&&A.begin(R,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(G),G=qt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,G,nt),C=wt.get(S,M.length),C.init(G),C.state.textureUnits=ot.getTextureUnits(),M.push(C),Vt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$t.setFromProjectionMatrix(Vt,ni,G.reversedDepth),ue=this.localClippingEnabled,Qt=Xt.init(this.clippingPlanes,ue),w=Ct.get(S,N.length),w.init(),N.push(w),qt.enabled===!0&&qt.isPresenting===!0){let zt=R.xr.getDepthSensingMesh();zt!==null&&Ri(zt,G,-1/0,R.sortObjects)}Ri(S,G,0,R.sortObjects),w.finish(),X!==null&&X.updateLights(C.state.lightsArray),R.sortObjects===!0&&w.sort(pt,Lt),Te=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,Te&&ce.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&Xt.beginShadows();let j=C.state.shadowsArray;if(te.render(j,S,G),Qt===!0&&Xt.endShadows(),(Q&&A.hasRenderPass())===!1){let zt=w.opaque,Nt=w.transmissive;if(C.setupLights(),G.isArrayCamera){let Gt=G.cameras;if(Nt.length>0)for(let Zt=0,fe=Gt.length;Zt<fe;Zt++){let xe=Gt[Zt];Uo(zt,Nt,S,xe)}Te&&ce.render(S);for(let Zt=0,fe=Gt.length;Zt<fe;Zt++){let xe=Gt[Zt];Sr(w,S,xe,xe.viewport)}}else Nt.length>0&&Uo(zt,Nt,S,G),Te&&ce.render(S),Sr(w,S,G)}nt!==null&&Z===0&&(ot.updateMultisampleRenderTarget(nt),ot.updateRenderTargetMipmap(nt)),Q&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,G),Ot.resetDefaultState(),J=-1,tt=null,M.pop(),M.length>0?(C=M[M.length-1],ot.setTextureUnits(C.state.textureUnits),Qt===!0&&Xt.setGlobalState(R.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?w=N[N.length-1]:w=null,X!==null&&X.renderEnd()};function Ri(S,G,rt,Q){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)rt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLightProbeGrid)C.pushLightProbeGrid(S);else if(S.isLight)C.pushLight(S),S.castShadow&&C.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum($t)){Q&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Vt);let zt=ht.update(S),Nt=S.material;Nt.visible&&w.push(S,zt,Nt,rt,Fe.z,null,G)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum($t))){let zt=ht.update(S),Nt=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Fe.copy(zt.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(Vt)),Array.isArray(Nt)){let Gt=zt.groups;for(let Zt=0,fe=Gt.length;Zt<fe;Zt++){let xe=Gt[Zt],Ht=Nt[xe.materialIndex];Ht&&Ht.visible&&w.push(S,zt,Ht,rt,Fe.z,xe,G)}}else Nt.visible&&w.push(S,zt,Nt,rt,Fe.z,null,G)}}let Dt=S.children;for(let zt=0,Nt=Dt.length;zt<Nt;zt++)Ri(Dt[zt],G,rt,Q)}function Sr(S,G,rt,Q){let{opaque:j,transmissive:Dt,transparent:zt}=S;C.setupLightsView(rt),Qt===!0&&Xt.setGlobalState(R.clippingPlanes,rt),Q&&v.viewport(st.copy(Q)),j.length>0&&Rs(j,G,rt),Dt.length>0&&Rs(Dt,G,rt),zt.length>0&&Rs(zt,G,rt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Uo(S,G,rt,Q){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Q.id]===void 0){let Ht=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Q.id]=new Pn(1,1,{generateMipmaps:!0,type:Ht?oi:zn,minFilter:ls,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Dt=C.state.transmissionRenderTarget[Q.id],zt=Q.viewport||st;Dt.setSize(zt.z*R.transmissionResolutionScale,zt.w*R.transmissionResolutionScale);let Nt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),Zt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(Mt),St=R.getClearAlpha(),St<1&&R.setClearColor(16777215,.5),R.clear(),Te&&ce.render(rt);let fe=R.toneMapping;R.toneMapping=ii;let xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),C.setupLightsView(Q),Qt===!0&&Xt.setGlobalState(R.clippingPlanes,Q),Rs(S,rt,Q),ot.updateMultisampleRenderTarget(Dt),ot.updateRenderTargetMipmap(Dt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ee=0,qe=G.length;Ee<qe;Ee++){let ze=G[Ee],{object:Ne,geometry:Qe,material:Bt,group:un}=ze;if(Bt.side===Xn&&Ne.layers.test(Q.layers)){let Se=Bt.side;Bt.side=Cn,Bt.needsUpdate=!0,Le(Ne,rt,Q,Qe,Bt,un),Bt.side=Se,Bt.needsUpdate=!0,Ht=!0}}Ht===!0&&(ot.updateMultisampleRenderTarget(Dt),ot.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Nt,Gt,Zt),R.setClearColor(Mt,St),xe!==void 0&&(Q.viewport=xe),R.toneMapping=fe}function Rs(S,G,rt){let Q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Dt=S.length;j<Dt;j++){let zt=S[j],{object:Nt,geometry:Gt,group:Zt}=zt,fe=zt.material;fe.allowOverride===!0&&Q!==null&&(fe=Q),Nt.layers.test(rt.layers)&&Le(Nt,G,rt,Gt,fe,Zt)}}function Le(S,G,rt,Q,j,Dt){X!==null&&j.isNodeMaterial&&X.setObject(S,j),S.onBeforeRender(R,G,rt,Q,j,Dt),S.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(R,G,rt,Q,S,Dt),j.transparent===!0&&j.side===Xn&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,R.renderBufferDirect(rt,G,Q,j,S,Dt),j.side=os,j.needsUpdate=!0,R.renderBufferDirect(rt,G,Q,j,S,Dt),j.side=Xn):R.renderBufferDirect(rt,G,Q,j,S,Dt),S.onAfterRender(R,G,rt,Q,j,Dt)}function ps(S,G,rt){G.isScene!==!0&&(G=ke);let Q=et.get(S),j=C.state.lights,Dt=C.state.shadowsArray,zt=j.state.version,Nt=Tt.getParameters(S,j.state,Dt,G,rt,C.state.lightProbeGridArray),Gt=Tt.getProgramCacheKey(Nt),Zt=Q.programs;Q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;let fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Q.envMap=At.get(S.envMap||Q.environment,fe),Q.envMapRotation=Q.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,Zt===void 0&&(S.addEventListener("dispose",Et),Zt=new Map,Q.programs=Zt);let xe=Zt.get(Gt);if(xe!==void 0){if(Q.currentProgram===xe&&Q.lightsStateVersion===zt)return Is(S,Nt),xe}else Nt.uniforms=Tt.getUniforms(S),X!==null&&S.isNodeMaterial&&X.build(S,rt,Nt),S.onBeforeCompile(Nt,R),xe=Tt.acquireProgram(Nt,Gt),Zt.set(Gt,xe),Q.uniforms=Nt.uniforms;let Ht=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ht.clippingPlanes=Xt.uniform),Is(S,Nt),Q.needsLights=ms(S),Q.lightsStateVersion=zt,Q.needsLights&&(Ht.ambientLightColor.value=j.state.ambient,Ht.lightProbe.value=j.state.probe,Ht.sunLights.value=j.state.sun,Ht.sunLightShadows.value=j.state.sunShadow,Ht.directionalLights.value=j.state.directional,Ht.directionalLightShadows.value=j.state.directionalShadow,Ht.spotLights.value=j.state.spot,Ht.spotLightShadows.value=j.state.spotShadow,Ht.rectAreaLights.value=j.state.rectArea,Ht.ltc_1.value=j.state.rectAreaLTC1,Ht.ltc_2.value=j.state.rectAreaLTC2,Ht.pointLights.value=j.state.point,Ht.pointLightShadows.value=j.state.pointShadow,Ht.hemisphereLights.value=j.state.hemi,Ht.sunShadowMatrix.value=j.state.sunShadowMatrix,Ht.sunShadowCascade.value=j.state.sunShadowCascade,Ht.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ht.spotLightMatrix.value=j.state.spotLightMatrix,Ht.spotLightMap.value=j.state.spotLightMap,Ht.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=C.state.lightProbeGridArray.length>0,Q.currentProgram=xe,Q.uniformsList=null,xe}function Fo(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=cr.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Is(S,G){let rt=et.get(S);rt.outputColorSpace=G.outputColorSpace,rt.batching=G.batching,rt.batchingColor=G.batchingColor,rt.instancing=G.instancing,rt.instancingColor=G.instancingColor,rt.instancingMorph=G.instancingMorph,rt.skinning=G.skinning,rt.morphTargets=G.morphTargets,rt.morphNormals=G.morphNormals,rt.morphColors=G.morphColors,rt.morphTargetsCount=G.morphTargetsCount,rt.numClippingPlanes=G.numClippingPlanes,rt.numIntersection=G.numClipIntersection,rt.vertexAlphas=G.vertexAlphas,rt.vertexTangents=G.vertexTangents,rt.toneMapping=G.toneMapping}function xc(S,G){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let rt=0,Q=S.length;rt<Q;rt++){let j=S[rt];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function $n(S,G,rt,Q,j){G.isScene!==!0&&(G=ke),ot.resetTextureUnits();let Dt=G.fog,zt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Nt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:we.workingColorSpace,Gt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Zt=At.get(Q.envMap||zt,Gt),fe=Q.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,xe=!!rt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ht=!!rt.morphAttributes.position,Ee=!!rt.morphAttributes.normal,qe=!!rt.morphAttributes.color,ze=ii;Q.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ze=R.toneMapping);let Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Qe=Ne!==void 0?Ne.length:0,Bt=et.get(Q),un=C.state.lights;if(Qt===!0&&(ue===!0||S!==tt)){let Ue=S===tt&&Q.id===J;Xt.setState(Q,S,Ue)}let Se=!1;Q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==un.state.version||Bt.outputColorSpace!==Nt||j.isBatchedMesh&&Bt.batching===!1||!j.isBatchedMesh&&Bt.batching===!0||j.isBatchedMesh&&Bt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Bt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Bt.instancing===!1||!j.isInstancedMesh&&Bt.instancing===!0||j.isSkinnedMesh&&Bt.skinning===!1||!j.isSkinnedMesh&&Bt.skinning===!0||j.isInstancedMesh&&Bt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Bt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Bt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Bt.instancingMorph===!1&&j.morphTexture!==null||Bt.envMap!==Zt||Q.fog===!0&&Bt.fog!==Dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Xt.numPlanes||Bt.numIntersection!==Xt.numIntersection)||Bt.vertexAlphas!==fe||Bt.vertexTangents!==xe||Bt.morphTargets!==Ht||Bt.morphNormals!==Ee||Bt.morphColors!==qe||Bt.toneMapping!==ze||Bt.morphTargetsCount!==Qe||!!Bt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Bt.__version=Q.version);let Rn=Bt.currentProgram;Se===!0&&(Rn=ps(Q,G,j),X&&Q.isNodeMaterial&&X.onUpdateProgram(Q,Rn,Bt));let In=!1,ui=!1,Wi=!1,pe=Rn.getUniforms(),he=Bt.uniforms;if(v.useProgram(Rn.program)&&(In=!0,ui=!0,Wi=!0),Q.id!==J&&(J=Q.id,ui=!0),Bt.needsLights){let Ue=xc(C.state.lightProbeGridArray,j);Bt.lightProbeGrid!==Ue&&(Bt.lightProbeGrid=Ue,ui=!0)}if(In||tt!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(H,"projectionMatrix",S.projectionMatrix),pe.setValue(H,"viewMatrix",S.matrixWorldInverse);let Jn=pe.map.cameraPosition;Jn!==void 0&&Jn.setValue(H,se.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&pe.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&pe.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,ui=!0,Wi=!0)}if(Bt.needsLights&&(un.state.sunShadowMap.length>0&&pe.setValue(H,"sunShadowMap",un.state.sunShadowMap,ot),un.state.directionalShadowMap.length>0&&pe.setValue(H,"directionalShadowMap",un.state.directionalShadowMap,ot),un.state.spotShadowMap.length>0&&pe.setValue(H,"spotShadowMap",un.state.spotShadowMap,ot),un.state.pointShadowMap.length>0&&pe.setValue(H,"pointShadowMap",un.state.pointShadowMap,ot)),j.isSkinnedMesh){pe.setOptional(H,j,"bindMatrix"),pe.setOptional(H,j,"bindMatrixInverse");let Ue=j.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),pe.setValue(H,"boneTexture",Ue.boneTexture,ot))}j.isBatchedMesh&&(pe.setOptional(H,j,"batchingTexture"),pe.setValue(H,"batchingTexture",j._matricesTexture,ot),pe.setOptional(H,j,"batchingIdTexture"),pe.setValue(H,"batchingIdTexture",j._indirectTexture,ot),pe.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&pe.setValue(H,"batchingColorTexture",j._colorsTexture,ot));let Zn=rt.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&W.update(j,rt,Rn),(ui||Bt.receiveShadow!==j.receiveShadow)&&(Bt.receiveShadow=j.receiveShadow,pe.setValue(H,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(he.envMapIntensity.value=G.environmentIntensity),he.dfgLUT!==void 0&&(he.dfgLUT.value=Xv()),ui){if(pe.setValue(H,"toneMappingExposure",R.toneMappingExposure),Bt.needsLights&&Ps(he,Wi),Dt&&Q.fog===!0&&Yt.refreshFogUniforms(he,Dt),Yt.refreshMaterialUniforms(he,Q,it,B,C.state.transmissionRenderTarget[S.id]),Bt.needsLights&&Bt.lightProbeGrid){let Ue=Bt.lightProbeGrid;he.probesSH.value=Ue.texture,he.probesMin.value.copy(Ue.boundingBox.min),he.probesMax.value.copy(Ue.boundingBox.max),he.probesResolution.value.copy(Ue.resolution)}cr.upload(H,Fo(Bt),he,ot)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(cr.upload(H,Fo(Bt),he,ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&pe.setValue(H,"center",j.center),pe.setValue(H,"modelViewMatrix",j.modelViewMatrix),pe.setValue(H,"normalMatrix",j.normalMatrix),pe.setValue(H,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){let Ue=Q.uniformsGroups;for(let Jn=0,bn=Ue.length;Jn<bn;Jn++){let Ls=Ue[Jn];gt.update(Ls,Rn),gt.bind(Ls,Rn)}}return Rn}function Ps(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.sunLights.needsUpdate=G,S.sunLightShadows.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function ms(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,G,rt){let Q=et.get(S);Q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),et.get(S.texture).__webglTexture=G,et.get(S.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:rt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,G){let rt=et.get(S);rt.__webglFramebuffer=G,rt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,rt=0){nt=S,K=G,Z=rt;let Q=null,j=!1,Dt=!1;if(S){let Nt=et.get(S);if(Nt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Nt.__webglFramebuffer),st.copy(S.viewport),mt.copy(S.scissor),xt=S.scissorTest,v.viewport(st),v.scissor(mt),v.setScissorTest(xt),J=-1;return}else if(Nt.__webglFramebuffer===void 0)ot.setupRenderTarget(S);else if(Nt.__hasExternalTextures)ot.rebindTextures(S,et.get(S.texture).__webglTexture,et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let fe=S.depthTexture;if(Nt.__boundDepthTexture!==fe){if(fe!==null&&et.has(fe)&&(S.width!==fe.image.width||S.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(S)}}let Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Dt=!0);let Zt=et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Zt[G])?Q=Zt[G][rt]:Q=Zt[G],j=!0):S.samples>0&&ot.useMultisampledRTT(S)===!1?Q=et.get(S).__webglMultisampledFramebuffer:Array.isArray(Zt)?Q=Zt[rt]:Q=Zt,st.copy(S.viewport),mt.copy(S.scissor),xt=S.scissorTest}else st.copy(dt).multiplyScalar(it).floor(),mt.copy(kt).multiplyScalar(it).floor(),xt=jt;if(rt!==0&&(Q=k),v.bindFramebuffer(H.FRAMEBUFFER,Q)&&v.drawBuffers(S,Q),v.viewport(st),v.scissor(mt),v.setScissorTest(xt),j){let Nt=et.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Nt.__webglTexture,rt)}else if(Dt){let Nt=G;for(let Gt=0;Gt<S.textures.length;Gt++){let Zt=et.get(S.textures[Gt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Gt,Zt.__webglTexture,rt,Nt)}}else if(S!==null&&rt!==0){let Nt=et.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,rt)}J=-1};function wr(S){let G=et.get(S);return(G.__readFormat!==S.format||G.__readType!==S.type)&&(G.__readFormat=S.format,G.__readType=S.type,G.__formatReadable=P.textureFormatReadable(S.format),G.__typeReadable=P.textureTypeReadable(S.type)),G}this.readRenderTargetPixels=function(S,G,rt,Q,j,Dt,zt,Nt=0){if(!(S&&S.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){v.bindFramebuffer(H.FRAMEBUFFER,Gt);try{let Zt=S.textures[Nt],fe=Zt.format,xe=Zt.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let Ht=wr(Zt);if(Ht.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-Q&&rt>=0&&rt<=S.height-j&&H.readPixels(G,rt,Q,j,Pt.convert(fe),Pt.convert(xe),Dt)}finally{let Zt=nt!==null?et.get(nt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(S,G,rt,Q,j,Dt,zt,Nt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt)if(G>=0&&G<=S.width-Q&&rt>=0&&rt<=S.height-j){v.bindFramebuffer(H.FRAMEBUFFER,Gt);let Zt=S.textures[Nt],fe=Zt.format,xe=Zt.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt);let Ht=wr(Zt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ee),H.bufferData(H.PIXEL_PACK_BUFFER,Dt.byteLength,H.STREAM_READ),H.readPixels(G,rt,Q,j,Pt.convert(fe),Pt.convert(xe),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let qe=nt!==null?et.get(nt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,qe);let ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Od(H,ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ee),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Dt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ee),H.deleteSync(ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,G=null,rt=0){let Q=Math.pow(2,-rt),j=Math.floor(S.image.width*Q),Dt=Math.floor(S.image.height*Q),zt=G!==null?G.x:0,Nt=G!==null?G.y:0;ot.setTexture2D(S,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,zt,Nt,j,Dt),v.unbindTexture()},this.copyTextureToTexture=function(S,G,rt=null,Q=null,j=0,Dt=0){let zt,Nt,Gt,Zt,fe,xe,Ht,Ee,qe,ze=S.isCompressedTexture?S.mipmaps[Dt]:S.image;if(rt!==null)zt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,Zt=rt.min.x,fe=rt.min.y,xe=rt.isBox3?rt.min.z:0;else{let he=Math.pow(2,-j);zt=Math.floor(ze.width*he),Nt=Math.floor(ze.height*he),S.isDataArrayTexture?Gt=ze.depth:S.isData3DTexture?Gt=Math.floor(ze.depth*he):Gt=1,Zt=0,fe=0,xe=0}Q!==null?(Ht=Q.x,Ee=Q.y,qe=Q.z):(Ht=0,Ee=0,qe=0);let Ne=Pt.convert(G.format),Qe=Pt.convert(G.type),Bt;G.isData3DTexture?(ot.setTexture3D(G,0),Bt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ot.setTexture2DArray(G,0),Bt=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(G,0),Bt=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let un=v.getParameter(H.UNPACK_ROW_LENGTH),Se=v.getParameter(H.UNPACK_IMAGE_HEIGHT),Rn=v.getParameter(H.UNPACK_SKIP_PIXELS),In=v.getParameter(H.UNPACK_SKIP_ROWS),ui=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,ze.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),v.pixelStorei(H.UNPACK_SKIP_ROWS,fe),v.pixelStorei(H.UNPACK_SKIP_IMAGES,xe);let Wi=S.isDataArrayTexture||S.isData3DTexture,pe=G.isDataArrayTexture||G.isData3DTexture;if(S.isDepthTexture){let he=et.get(S),Zn=et.get(G),Ue=et.get(he.__renderTarget),Jn=et.get(Zn.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Ue.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let bn=0;bn<Gt;bn++)Wi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.get(S).__webglTexture,j,xe+bn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,et.get(G).__webglTexture,Dt,qe+bn)),H.blitFramebuffer(Zt,fe,zt,Nt,Ht,Ee,zt,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||S.isRenderTargetTexture||et.has(S)){let he=et.get(S),Zn=et.get(G);v.bindFramebuffer(H.READ_FRAMEBUFFER,F),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,V);for(let Ue=0;Ue<Gt;Ue++)Wi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,he.__webglTexture,j,xe+Ue):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,he.__webglTexture,j),pe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zn.__webglTexture,Dt,qe+Ue):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Zn.__webglTexture,Dt),j!==0?H.blitFramebuffer(Zt,fe,zt,Nt,Ht,Ee,zt,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):pe?H.copyTexSubImage3D(Bt,Dt,Ht,Ee,qe+Ue,Zt,fe,zt,Nt):H.copyTexSubImage2D(Bt,Dt,Ht,Ee,Zt,fe,zt,Nt);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?H.texSubImage3D(Bt,Dt,Ht,Ee,qe,zt,Nt,Gt,Ne,Qe,ze.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Dt,Ht,Ee,qe,zt,Nt,Gt,Ne,ze.data):H.texSubImage3D(Bt,Dt,Ht,Ee,qe,zt,Nt,Gt,Ne,Qe,ze):S.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Dt,Ht,Ee,zt,Nt,Ne,Qe,ze.data):S.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Dt,Ht,Ee,ze.width,ze.height,Ne,ze.data):H.texSubImage2D(H.TEXTURE_2D,Dt,Ht,Ee,zt,Nt,Ne,Qe,ze);v.pixelStorei(H.UNPACK_ROW_LENGTH,un),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Rn),v.pixelStorei(H.UNPACK_SKIP_ROWS,In),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ui),Dt===0&&G.generateMipmaps&&H.generateMipmap(Bt),v.unbindTexture()},this.initRenderTarget=function(S){et.get(S).__webglFramebuffer===void 0&&ot.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ot.setTextureCube(S,0):S.isData3DTexture?ot.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ot.setTexture2DArray(S,0):ot.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){K=0,Z=0,nt=null,v.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var qv=["top","side","bottom"],Yv={slab_bottom:1,slab_top:1,stairs:1},_p=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function $v(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],_p[n.facing|0]]:null}function yp(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(i[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let R=A.colors||{},z=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(z.placeable=z.n!==0&&!z.liquid,z.colors={top:R.top||"#888888",side:R.side||R.top||"#888888",bottom:R.bottom||R.top||"#888888"},z.opaque=z.solid&&!z.transparent&&!z.cutout&&!Yv[z.shape],z.tile={},z.tileOf&&s[z.tileOf])z.tile=Object.assign({},s[z.tileOf].tile);else if(z.n!==0){let X={};for(let k of qv){let F=z.colors[k]+"|"+(z.pattern==="grass"||z.pattern==="log"||z.pattern==="lamp"||z.pattern==="table"||z.pattern==="stele"||z.pattern==="torch"||z.pattern==="bed"||z.pattern==="snow"||z.pattern==="lantern"||z.pattern==="bookshelf"||z.pattern==="hay"||z.pattern==="barrel"||z.pattern==="chest"||z.pattern==="farmland"?k:"");X[F]===void 0&&(X[F]=r.length,r.push({block:z.id,face:k,color:z.colors[k],pattern:z.pattern,accent:z.accent||null,top:z.colors.top})),z.tile[k]=X[F]}}i[z.n]=z,s[z.id]=z}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let R=s[A].drops;if(R&&R!=="self"&&!s[R])throw new Error(A+" drops unknown "+R)}let o=A=>(typeof A=="number"?i[A]:s[A])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),d=new Uint8Array(256),u=new Uint8Array(256),h=new Uint8Array(256),g={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7},_=new Uint8Array(256),y=new Array(256).fill(null),x=new Uint8Array(256),m=new Uint8Array(256),T=new Uint8Array(256),L=new Uint8Array(256),b=new Uint8Array(256),w=new Int16Array(256).fill(-1),C=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((A,R)=>{A&&(x[R]=A.solid?1:0,m[R]=A.opaque?1:0,T[R]=A.transparent?1:0,L[R]=A.emissive?1:0,b[R]=A.liquid?1:0,a[R]=A.light!=null?A.light:A.emissive?15:0,l[R]=A.liquid?2:0,c[R]=g[A.shape]||0,d[R]=A.cutout?1:0,u[R]=A.climbable?1:0,h[R]=A.plant?1:0,_[R]=A.facing|0,A.solid&&(y[R]=$v(A)),R&&(w[R]=A.tile.top,C[R]=A.tile.side,N[R]=A.tile.bottom))});let M=(n&&n.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:i.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:M,tiles:r,get:o,toolOf:A=>{let R=A&&s[A];return R&&R.kind==="item"&&R.tool&&typeof R.tool=="object"?R.tool:null},num:A=>{let R=s[A];if(!R||R.kind!=="block")throw new Error("no block "+A);return R.n},name:A=>{let R=o(A);return R?R.name_zh:String(A)},maxStack:A=>{let R=s[A];return R?R.maxStack:64},dropOf:A=>{let R=i[A];return!R||!R.drops?null:R.drops==="self"?R.id:R.drops},breakTime:A=>{let R=i[A];return!R||R.hardness<0?1/0:.25+R.hardness*.55},flat:{solid:x,opaque:m,trans:T,emit:L,liquid:b,tileTop:w,tileSide:C,tileBottom:N,lightEmit:a,attn:l,shape:c,cutout:d,climb:u,plant:h,facing:_,boxes:y}}}var Bi=n=>Math.floor(n/16);var ve=(n,t,e)=>(t*16+e)*16+n;var wi=(n,t)=>n+","+t,vp=n=>n.split(",").map(Number);function Kh(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Bi(n),s=Bi(e);return{cx:i,cz:s,i:ve(n-i*16,t,e-s*16)}}function Mp(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function kn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var ur=(n,t,e)=>kn(n,t,0,e);function Zv(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var jh=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Jv=.5*(Math.sqrt(3)-1),xo=(3-Math.sqrt(3))/6;function Ai(n){let t=Zv(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*Jv,a=Math.floor(s+o),l=Math.floor(r+o),c=(a+l)*xo,d=s-(a-c),u=r-(l-c),h=d>u?1:0,g=1-h,_=d-h+xo,y=u-g+xo,x=d-1+2*xo,m=u-1+2*xo,T=a&255,L=l&255,b=0,w,C;return w=.5-d*d-u*u,w>0&&(C=jh[i[T+i[L]]&7],w*=w,b+=w*w*(C[0]*d+C[1]*u)),w=.5-_*_-y*y,w>0&&(C=jh[i[T+h+i[L+g]]&7],w*=w,b+=w*w*(C[0]*_+C[1]*y)),w=.5-x*x-m*m,w>0&&(C=jh[i[T+1+i[L+1]]&7],w*=w,b+=w*w*(C[0]*x+C[1]*m)),70*b}}function zi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Qh(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),l=t(e-r),c=t(i-o),d=t(s-a),u=(g,_,y)=>kn(n,r+g,o+_,a+y),h=(g,_,y)=>g+(_-g)*y;return h(h(h(u(0,0,0),u(1,0,0),l),h(u(0,1,0),u(1,1,0),l),c),h(h(u(0,0,1),u(1,0,1),l),h(u(0,1,1),u(1,1,1),l),c),d)}}var fr=160,ai=18,tu=[[0,1],[-1,0],[0,-1],[1,0]];function bp(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var Kv=(n,t,e)=>e&1?[t,n]:[n,t];function Sp(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(l,c){let d=l+","+c;if(i.has(d))return i.get(d);let u=null,h=g=>kn(n+909,l,g,c);if(h(0)<.45&&e&&e.houses&&e.houses.length){let g=Math.floor((l+.2+h(1)*.6)*fr),_=Math.floor((c+.2+h(2)*.6)*fr),y=t.biomeOf(g,_),x=t.height(g,_),m=(y==="plains"||y==="desert")&&Math.hypot(g,_)>110;if(m&&x>s+1)for(let T=0;T<16&&m;T++)for(let L of[7,14]){let b=t.height(g+Math.round(Math.cos(T*.39)*L),_+Math.round(Math.sin(T*.39)*L));(Math.abs(b-x)>3||b<=s)&&(m=!1)}else m=!1;if(m){let T=[],L=[],b=3+Math.floor(h(3)*4),w=(C,N,M,A)=>{let R=r[C];if(!R)return null;let[z,X]=Kv(R.size[0],R.size[2],A),k={tpl:C,rot:A,x0:N-(z>>1),z0:M-(X>>1),y:x,w:z,d:X,h:R.size[1]};return T.push(k),k};w("well",g,_,0),w("lamp_post",g+3,_+3,0),w("lamp_post",g-3,_-3,0);for(let C=0;C<b;C++){let N=C/b*Math.PI*2+h(10+C)*.5,M=9+h(20+C)*3,A=g+Math.round(Math.cos(N)*M),R=_+Math.round(Math.sin(N)*M),z=g-A,X=_-R,k=0,F=-1/0;tu.forEach((st,mt)=>{let xt=st[0]*z+st[1]*X;xt>F&&(F=xt,k=mt)});let V=e.houses[Math.floor(h(30+C)*e.houses.length)],K=w(V,A,R,k);if(!K)continue;let Z=r[V],[nt,J]=bp(Z.door[0],Z.door[1],Z.size[0],Z.size[2],k),tt={x:K.x0+nt+tu[k][0],z:K.z0+J+tu[k][1]};L.push({ax:g,az:_,bx:tt.x,bz:tt.z})}u={id:d,x:g,z:_,y:x,biome:y,structures:T,paths:L,villagers:2+Math.floor(h(4)*3)}}}return i.set(d,u),u}function a(l,c,d,u){let h=[];for(let g=Math.floor((c-ai)/fr);g<=Math.floor((u+ai)/fr);g++)for(let _=Math.floor((l-ai)/fr);_<=Math.floor((d+ai)/fr);_++){let y=o(_,g);y&&y.x+ai>=l&&y.x-ai<=d&&y.z+ai>=c&&y.z-ai<=u&&h.push(y)}return h}return{plan:o,around:a,chunk:(l,c)=>a(l*16,c*16,l*16+16-1,c*16+16-1)}}function wp(n,t,e,i,s,r,o){let a=t*16,l=e*16,c=(_,y)=>_>=a&&_<a+16&&y>=l&&y<l+16,d=i.biome==="desert",u=d?s.desert||{}:{},h=_=>{let y=s.palette[_];if(!y)return null;let x=u[y]||y;return r.byId(x)},g=d?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let y=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let x=0;x<=y;x++){let m=Math.round(_.ax+(_.bx-_.ax)*x/y),T=Math.round(_.az+(_.bz-_.az)*x/y);if(!c(m,T))continue;let L=o.height(m,T),b=ve(m-a,L,T-l);n[b]&&n[b]!==r.water&&(n[b]=r.path);for(let w=L+1;w<Math.min(64,L+4);w++){let C=ve(m-a,w,T-l);(n[C]===r.leaves||n[C]===r.log||w===L+1)&&(n[C]=0)}}}for(let _ of i.structures){let y=s.templates[_.tpl];if(!y)continue;let[x,,m]=y.size;for(let T=0;T<m;T++)for(let L=0;L<x;L++){let[b,w]=bp(L,T,x,m,_.rot),C=_.x0+b,N=_.z0+w;if(!c(C,N))continue;let M=C-a,A=N-l;for(let R=_.y-1;R>Math.max(0,_.y-8);R--){let z=ve(M,R,A);if(n[z]&&n[z]!==r.water)break;n[z]=g}for(let R=_.y+y.size[1];R<Math.min(64,_.y+y.size[1]+3);R++)n[ve(M,R,A)]=0;y.layers.forEach((R,z)=>{let X=(R[T]||"")[L];if(!X||X===" ")return;let k=_.y+z;k>=64||(n[ve(M,k,A)]=X==="."?0:h(X)||0)})}}}var Ln=24;var Ep={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Ap=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],dr=112;function Tp(n,t,e){let i=k=>t.num(k),s=k=>{try{return i(k)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ai(n),l=Ai(n+101),c=Ai(n+202),d=Ai(n+303),u=Ai(n+404),h=Qh(n+505),g=Qh(n+606);function _(k,F){let V=zi(a,k/190,F/190,3),K=zi(l,k/55,F/55,4),Z=Math.max(0,zi(c,k/130,F/130,2)-.1),nt=27+V*9+K*6+Z*Z*75;return Math.max(4,Math.min(54,Math.floor(nt)))}let y=Ai(n+808);function x(k,F){let V=_(k,F),K=zi(y,k/900,F/900,2),Z=Math.min(1,Math.max(0,(Math.hypot(k,F)-240)/80)),nt=Math.min(1,Math.max(0,(-.18-K)/.17)),J=nt*nt*(3-2*nt)*Z;return J>0&&(V=Math.round(V*(1-J)+(Ln-14)*J)),V<Ln-1?Math.max(3,Math.floor(Ln-1-(Ln-1-V)*1.8)):V}function m(k,F){let V=(ur(n+3,k,F)-.5)*.025;return{t:zi(d,k/420,F/420,2)+V,u:zi(u,k/380,F/380,2)-V}}function T(k,F,V=x(k,F)){if(V<Ln-1)return"ocean";let{t:K,u:Z}=m(k,F);return K<-.3?"snow":K>.28&&Z<.05?"desert":Z>.12?"forest":"plains"}let L=null;function b(){if(L)return L;let k=(F,V)=>{let K=x(F,V);return K>=Ln+2&&Math.abs(x(F+1,V)-K)<2&&Math.abs(x(F,V+1)-K)<2};for(let F=0;F<400;F+=2)for(let V=0;V<Math.max(1,F*2);V++){let K=V/Math.max(1,F*2)*Math.PI*2,Z=Math.round(Math.cos(K)*F),nt=Math.round(Math.sin(K)*F);if(k(Z,nt)&&k(Z+3,nt+2))return L={x:Z+.5,y:x(Z,nt)+1,z:nt+.5,stele:{x:Z+3,y:x(Z+3,nt+2)+1,z:nt+2},portal:{x:Z-3,y:Math.max(Ln+1,x(Z-3,nt+2))+1,z:nt+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function w(k,F){let V=[],K=k*16,Z=F*16,nt=Math.floor((K-80)/dr),J=Math.floor((K+16+80)/dr),tt=Math.floor((Z-80)/dr),st=Math.floor((Z+16+80)/dr);for(let mt=tt;mt<=st;mt++)for(let xt=nt;xt<=J;xt++){let Mt=pt=>kn(n+707,xt,pt,mt);if(Mt(0)>.25)continue;let St=(xt+Mt(1))*dr,yt=(mt+Mt(2))*dr,B=Mt(3)*Math.PI,it=40+Mt(4)*30;V.push({ax:St-Math.cos(B)*it/2,az:yt-Math.sin(B)*it/2,dx:Math.cos(B)*it,dz:Math.sin(B)*it,len:it,floor:7+Math.floor(Mt(5)*6),w:1.6+Mt(6)*1.2})}return V}function C(k,F){let V=new Uint8Array(16384),K=k*16,Z=F*16,nt=18,J=new Int16Array(nt*nt);for(let St=-1;St<=16;St++)for(let yt=-1;yt<=16;yt++)J[(St+1)*nt+yt+1]=x(K+yt,Z+St);let tt=b(),st=new Array(256);for(let St=0;St<16;St++)for(let yt=0;yt<16;yt++){let B=K+yt,it=Z+St,pt=J[(St+1)*nt+yt+1],Lt=Math.max(Math.abs(J[(St+1)*nt+yt]-pt),Math.abs(J[(St+1)*nt+yt+2]-pt),Math.abs(J[St*nt+yt+1]-pt),Math.abs(J[(St+2)*nt+yt+1]-pt))>=3,dt=st[St*16+yt]=T(B,it,pt),kt=pt<=Ln+1,jt,$t;dt==="ocean"||kt||dt==="desert"?(jt=r.sand,$t=r.sand):Lt?(jt=r.stone,$t=r.stone):dt==="snow"?(jt=r.snow,$t=r.dirt):(jt=r.grass,$t=r.dirt);for(let Qt=0;Qt<=pt;Qt++){let ue;if(Qt===0?ue=r.bedrock:Qt===pt?ue=jt:Qt>=pt-3?ue=$t:dt==="desert"&&Qt>=pt-7?ue=r.sandstone:ue=r.stone,ue===r.stone&&Lt&&Qt>=pt-4){let Vt=kn(n,B,Qt,it);Vt<.06?ue=r.coal:Vt<.09?ue=r.iron:Vt<.096&&(ue=r.ruby)}V[ve(yt,Qt,St)]=ue}for(let Qt=pt+1;Qt<=Ln;Qt++)V[ve(yt,Qt,St)]=Qt===Ln&&dt==="snow"?r.ice:r.water}N(V,k,F,J,nt);for(let St=0;St<Ap.length;St++){let yt=Ap[St],B=r[yt.ore];for(let it=0;it<yt.count;it++){let pt=jt=>kn(n+31*St+jt,k*977+it,jt,F*131+it);if(pt(9)>yt.chance)continue;let Lt=Math.floor(pt(1)*16),dt=yt.y0+Math.floor(pt(2)*(yt.y1-yt.y0)),kt=Math.floor(pt(3)*16);for(let jt=0;jt<yt.size;jt++){Lt>=0&&Lt<16&&kt>=0&&kt<16&&dt>0&&dt<64&&V[ve(Lt,dt,kt)]===r.stone&&(V[ve(Lt,dt,kt)]=B);let $t=Math.floor(pt(10+jt)*6);$t===0?Lt++:$t===1?Lt--:$t===2?dt++:$t===3?dt--:$t===4?kt++:kt--}}}let mt=e?X.chunk(k,F):[];M(V,k,F,J,nt,st,tt,mt);for(let St of mt)wp(V,k,F,St,e,r,z);let xt=tt.stele;if(Math.floor(xt.x/16)===k&&Math.floor(xt.z/16)===F){let St=xt.x-K,yt=xt.z-Z;V[ve(St,xt.y,yt)]=r.stele,V[ve(St,xt.y+1,yt)]=r.stele}let Mt=tt.portal;if(r.portal&&Mt&&Math.floor(Mt.x/16)===k&&Math.floor(Mt.z/16)===F){let St=Mt.x-K,yt=Mt.z-Z;for(let B=Math.max(1,Mt.y-3);B<Mt.y;B++)(!V[ve(St,B,yt)]||V[ve(St,B,yt)]===r.water)&&(V[ve(St,B,yt)]=r.stone);V[ve(St,Mt.y,yt)]=r.portal,V[ve(St,Mt.y+1,yt)]=r.portal}return V}function N(k,F,V,K,Z){let nt=F*16,J=V*16,tt=4,st=16/tt+1,mt=64/tt+1,xt=new Float32Array(st*st*mt);for(let yt=0;yt<mt;yt++)for(let B=0;B<st;B++)for(let it=0;it<st;it++){let pt=nt+it*tt,Lt=yt*tt,dt=J+B*tt,kt=h(pt/22,Lt/14,dt/22)-.5,jt=g(pt/22,Lt/14,dt/22)-.5;xt[(yt*st+B)*st+it]=kt*kt+jt*jt}let Mt=(yt,B,it)=>xt[(B*st+it)*st+yt],St=w(F,V);for(let yt=0;yt<16;yt++)for(let B=0;B<16;B++){let it=K[(yt+1)*Z+B+1],pt=it<=Ln+1,Lt=pt?it-5:it,dt=B>>2,kt=yt>>2,jt=(B&3)/tt,$t=(yt&3)/tt;for(let Vt=3;Vt<=Lt;Vt++){let se=Vt>>2,Fe=(Vt&3)/tt,ke=Mt(dt,se,kt)+(Mt(dt+1,se,kt)-Mt(dt,se,kt))*jt,Te=Mt(dt,se,kt+1)+(Mt(dt+1,se,kt+1)-Mt(dt,se,kt+1))*jt,Ie=Mt(dt,se+1,kt)+(Mt(dt+1,se+1,kt)-Mt(dt,se+1,kt))*jt,H=Mt(dt,se+1,kt+1)+(Mt(dt+1,se+1,kt+1)-Mt(dt,se+1,kt+1))*jt;if((ke+(Te-ke)*$t)*(1-Fe)+(Ie+(H-Ie)*$t)*Fe<.008){let be=ve(B,Vt,yt);k[be]!==r.bedrock&&k[be]!==r.water&&(k[be]=0)}}if(!St.length||pt)continue;let Qt=nt+B,ue=J+yt;for(let Vt of St){let se=Math.max(0,Math.min(1,((Qt-Vt.ax)*Vt.dx+(ue-Vt.az)*Vt.dz)/(Vt.len*Vt.len))),Fe=Vt.ax+Vt.dx*se,ke=Vt.az+Vt.dz*se,Te=Math.hypot(Qt-Fe,ue-ke),Ie=Vt.w*Math.sin(Math.PI*se);if(Te<Ie)for(let H=Vt.floor+Math.floor(Te*2);H<=it;H++){let Ge=ve(B,H,yt);k[Ge]!==r.water&&(k[Ge]=0)}}}}function M(k,F,V,K,Z,nt,J,tt){let st=F*16,mt=V*16;for(let xt=0;xt<16;xt++)for(let Mt=0;Mt<16;Mt++){let St=st+Mt,yt=mt+xt,B=K[(xt+1)*Z+Mt+1],it=nt[xt*16+Mt];if(B+1>=64||Math.hypot(St-J.x,yt-J.z)<48)continue;let pt=k[ve(Mt,B,xt)],Lt=ve(Mt,B+1,xt);if(k[Lt])continue;let dt=ur(n+11,St,yt),kt=ur(n+13,St,yt);pt===r.grass?dt<.012&&o.length?k[Lt]=o[Math.floor(kt*o.length)]:dt<(it==="plains"?.1:.05)&&r.tallgrass?k[Lt]=r.tallgrass:it==="forest"&&dt<.08&&r.fern?k[Lt]=r.fern:it==="forest"&&dt<.084&&r.mushR&&(k[Lt]=kt<.5?r.mushR:r.mushB):pt===r.sand&&it==="desert"&&B>Ln+1&&dt<.008&&r.deadbush&&(k[Lt]=r.deadbush)}for(let xt=2;xt<14;xt++)for(let Mt=2;Mt<14;Mt++){let St=st+Mt,yt=mt+xt,B=K[(xt+1)*Z+Mt+1],it=nt[xt*16+Mt],pt=k[ve(Mt,B,xt)];if(Math.abs(St-J.x)<7&&Math.abs(yt-J.z)<7||tt.some(jt=>Math.abs(St-jt.x)<ai+2&&Math.abs(yt-jt.z)<ai+2))continue;let Lt=ur(n+7,St,yt),dt=ur(n+9,St,yt);if(it==="desert"&&pt===r.sand&&B>Ln+1&&Lt<.008&&r.cactus){let jt=1+Math.floor(dt*3);for(let $t=B+1;$t<=B+jt&&$t<64;$t++)k[ve(Mt,$t,xt)]=r.cactus;continue}if(it==="snow"&&pt===r.snow&&Lt<.02){R(k,Mt,xt,B,5+Math.floor(dt*3));continue}let kt=it==="forest"?.035:it==="plains"?.003:0;pt===r.grass&&Lt<kt&&A(k,Mt,xt,B,St,yt,4+Math.floor(dt*2))}}function A(k,F,V,K,Z,nt,J){let tt=K+J;if(!(tt+2>=64)){for(let st=tt-2;st<=tt+1;st++){let mt=st>=tt?1:2;for(let xt=-mt;xt<=mt;xt++)for(let Mt=-mt;Mt<=mt;Mt++){if(mt===2&&Math.abs(Mt)===2&&Math.abs(xt)===2&&kn(n,Z+Mt,st,nt+xt)<.6)continue;let St=ve(F+Mt,st,V+xt);k[St]===r.air&&(k[St]=r.leaves)}}k[ve(F,K,V)]=r.dirt;for(let st=K+1;st<=tt;st++)k[ve(F,st,V)]=r.log}}function R(k,F,V,K,Z){let nt=K+Z;if(!(nt+2>=64)){for(let J=K+2;J<=nt+1;J++){let tt=nt+1-J,st=tt>=4?2:tt>=1?1:0;for(let mt=-st;mt<=st;mt++)for(let xt=-st;xt<=st;xt++){if(st===2&&Math.abs(xt)+Math.abs(mt)>3)continue;let Mt=ve(F+xt,J,V+mt);k[Mt]===r.air&&(k[Mt]=r.sleaves)}}k[ve(F,K,V)]=r.dirt;for(let J=K+1;J<=nt;J++)k[ve(F,J,V)]=r.slog}}let z={height:x,baseHeight:_,biomeOf:T,climate:m,genChunk:C,findSpawn:b,SEA:Ln},X=Sp(n,z,e);return z.villages=X,z}function nu(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,d=t,u=t+s,h=e-a,g=e+a,_=Math.floor(l),y=Math.floor(c-1e-6),x=Math.floor(d),m=Math.floor(u-1e-6),T=Math.floor(h),L=Math.floor(g-1e-6),b=!1;for(let w=x;w<=m;w++)for(let C=T;C<=L;C++)for(let N=_;N<=y;N++){let M=r(N,w,C);if(!M)continue;let A=M===!0?jv:M;for(let R of A){let z=N+R[0],X=w+R[1],k=C+R[2],F=N+R[3],V=w+R[4],K=C+R[5];if(!(F<=l+1e-6||z>=c-1e-6||V<=d+1e-6||X>=u-1e-6||K<=h+1e-6||k>=g-1e-6)){if(!o)return!0;b=!0,o.push([z,X,k,F,V,K])}}}return b}var jv=[[0,0,0,1,1,1]],_o=(n,t,e,i,s,r)=>nu(n,t,e,i,s,r,null),Cp=(n,t,e=.6,i=1.8)=>!_o(n.x,n.y,n.z,e,i,t);function Zl(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,d=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,h=Math.max(1,Math.ceil(u/.3)),g=e/h,_=[];for(let y=0;y<h;y++){let x=t.y*g;x&&(_.length=0,nu(n.x,n.y+x,n.z,r,o,i,_)?(x<0?(n.y=Math.max(..._.map(m=>m[4])),c=!0):n.y=Math.min(..._.map(m=>m[1]))-o,t.y=0):n.y+=x);for(let m of["x","z"]){let T=t[m]*g;if(!T)continue;let L={x:n.x,y:n.y,z:n.z};if(L[m]+=T,_.length=0,!nu(L.x,L.y,L.z,r,o,i,_)){n[m]=L[m];continue}if(a&&(c||s.grounded)){let w=Math.max(..._.map(C=>C[4]));if(w-n.y>0&&w-n.y<=1.01&&!_o(L.x,w,L.z,r,o,i)&&!_o(n.x,w,n.z,r,o,i)){d+=w-n.y,n.y=w,n[m]=L[m];continue}}let b=m==="x"?0:2;n[m]=T>0?Math.min(..._.map(w=>w[b]))-l-1e-4:Math.max(..._.map(w=>w[b+3]))+l+1e-4,_o(n.x,n.y,n.z,r,o,i)&&(n[m]=L[m]-T),t[m]=0}}return!c&&t.y<=0&&_o(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:d}}function Qv(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let d=[e+c[0],i+c[1],s+c[2]],u=[e+c[3],i+c[4],s+c[5]],h=0,g=1/0,_=-1,y=!0;for(let x=0;x<3&&y;x++){if(Math.abs(a[x])<1e-12){(o[x]<d[x]||o[x]>u[x])&&(y=!1);continue}let m=(d[x]-o[x])/a[x],T=(u[x]-o[x])/a[x];m>T&&([m,T]=[T,m]),m>h&&(h=m,_=x),T<g&&(g=T),h>g&&(y=!1)}if(y&&(!l||h<l.t)){let x=[0,0,0];_>=0&&(x[_]=-Math.sign(a[_])),l={t:h,face:_>=0?x:null}}}return l}function pr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),d=Math.sign(t.y),u=Math.sign(t.z),h=c?Math.abs(1/t.x):1/0,g=d?Math.abs(1/t.y):1/0,_=u?Math.abs(1/t.z):1/0,y=c?(c>0?o+1-n.x:n.x-o)*h:1/0,x=d?(d>0?a+1-n.y:n.y-a)*g:1/0,m=u?(u>0?l+1-n.z:n.z-l)*_:1/0,T=[0,0,0],L=0;for(;L<=e;){let b=i(o,a,l);if(b&&s(b)){let w=r&&r(b);if(!w)return{x:o,y:a,z:l,n:b,face:T,dist:L};let C=Qv(n,t,o,a,l,w);if(C&&C.t<=e)return{x:o,y:a,z:l,n:b,face:C.face||T,dist:C.t}}y<x&&y<m?(o+=c,L=y,y+=h,T=[-c,0,0]):x<m?(a+=d,L=x,x+=g,T=[0,-d,0]):(l+=u,L=m,m+=_,T=[0,0,-u])}return null}var cu={};Ii(cu,{ACC:()=>Ip,BOOST:()=>iu,BRAKE:()=>Lp,CONN:()=>Dn,DECAY:()=>Dp,DIR:()=>Nn,FRIC:()=>Pp,MAX:()=>yo,OPP:()=>Jl,blockId:()=>Kl,connect:()=>ru,isStraight:()=>su,linked:()=>Up,mount:()=>ou,pos:()=>lu,shapeOf:()=>us,step:()=>au});var Dn={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"]},Nn={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Jl={n:"s",s:"n",e:"w",w:"e"},Rp={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},Ip=3,yo=6,iu=11,Pp=.8,Lp=6,Dp=1.5,su=n=>n==="ns"||n==="ew",Kl=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t);function us(n,t){if(!t||n===t)return n==="n"||n==="s"?"ns":"ew";for(let e in Dn)if(Dn[e].includes(n)&&Dn[e].includes(t))return e;return null}var Np=(n,t,e,i)=>n(t+Nn[i][0],e+Nn[i][1]);function Up(n,t,e){let i=n(t,e);return i?Dn[i.shape].filter(s=>{let r=Np(n,t,e,s);return r&&Dn[r.shape].includes(Jl[s])}):[]}function ru(n,t,e,i,s="n"){let r=[];for(let l of["n","e","s","w"]){let c=Np(n,t,e,l);if(!c)continue;let d=t+Nn[l][0],u=e+Nn[l][1],h=Jl[l];if(Dn[c.shape].includes(h)){r.push({d:l,pri:0});continue}let g=Up(n,d,u);if(g.length>=2)continue;let _=g.length?us(g[0],h):us(h);_&&(!c.powered||su(_))&&r.push({d:l,pri:1,ns:_})}r.sort((l,c)=>l.pri-c.pri);let o=[];for(let l of r){if(o.length===2)break;let c=o.length?us(o[0].d,l.d):us(l.d);!c||i&&!su(c)||o.push(l)}return{shape:o.length===2?us(o[0].d,o[1].d):o.length?us(o[0].d):us(s),updates:o.filter(l=>l.pri===1).map(l=>[t+Nn[l.d][0],e+Nn[l.d][1],l.ns])}}function ou(n,t,e,i,s,r,o=()=>!1){let a=Dn[n],l=d=>Nn[d][0]*s+Nn[d][1]*r+(o(d)?.01:0),c=l(a[0])>=l(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:c===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function au(n,t,e,i){let s=i(n.x,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,Dn[s.shape].includes(n.from)||(n.from=Dn[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=Dn[s.shape].find(r=>r!==n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,iu)),e>.1?n.v<yo&&(n.v=Math.min(yo,n.v+Ip*t)):e<-.1?n.v=Math.max(0,n.v-Lp*t):n.v=Math.max(0,n.v-Pp*t),n.v>yo&&!s.powered&&(n.v=Math.max(yo,n.v-Dp*t)),n.s+=n.v*t;n.s>=1;){let r=Dn[s.shape].find(d=>d!==n.from),o=n.x+Nn[r][0],a=n.z+Nn[r][1],l=i(o,a),c=Jl[r];if(l&&Dn[l.shape].includes(c))n.x=o,n.z=a,n.from=c,n.s-=1,s=l,n.shape=l.shape,l.powered&&(n.v=Math.max(n.v,iu));else{n.s=1,n.v=0;break}}return n}function lu(n){let t=Dn[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=Rp[e],r=Rp[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[l,c,d]=a<.5?[s,o,a*2]:[o,r,a*2-1];return{x:n.x+l[0]+(c[0]-l[0])*d,z:n.z+l[1]+(c[1]-l[1])*d,yaw:Math.atan2(-(c[0]-l[0]),-(c[1]-l[1]))}}var pu={};Ii(pu,{WINDOW:()=>tM,create:()=>hu,reel:()=>fu,roll:()=>du,tick:()=>uu});var tM=1.3,Fp=n=>3+n()*6;function hu(n=Math.random){return{phase:"wait",t:0,biteAt:Fp(n),rnd:n}}function uu(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=Fp(n.rnd),"escape"):null}var fu=n=>n&&n.phase==="bite"?"catch":"early";function du(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function Op(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function Bp(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function zp(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var kp=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function Vp(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Gp(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[ve(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var Hp=n=>btoa(String.fromCharCode.apply(null,n)),Wp=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var nM=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],jl=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=nM(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,Wp(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=Gp(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[l,c]=vp(r);for(let[d,u]of[...this.portals])Math.floor(u.x/16)===l&&Math.floor(u.z/16)===c&&this.portals.delete(d);for(let d=0;d<256;d++){let u=this.reg.get(a[d]);if(u&&(u.interact==="portal"||u.interact==="shadow_portal")){let h=l*16+d%16,g=c*16+Math.floor(d/16);this.portals.set(h+","+g,{x:h,z:g,name:u.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],l=o*4,c=.95+(o*2654435761>>>28)/16*.1;r.data[l]=a[0]*c,r.data[l+1]=a[1]*c,r.data[l+2]=a[2]*c,r.data[l+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,l=i-o/2/s,c=e+r/2/s,d=i+o/2/s;for(let u=Math.floor(l/16);u<=Math.floor(d/16);u++)for(let h=Math.floor(a/16);h<=Math.floor(c/16);h++){let g=this.tile(wi(h,u));g&&t.drawImage(g,Math.round((h*16-a)*s),Math.round((u*16-l)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:l}}explored(t,e){return this.tops.has(wi(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=Hp(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function mu(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var _u={};Ii(_u,{ARENA_R:()=>vo,H0:()=>li,LAIR:()=>ki,findFrame:()=>xu,makeShadowTerrain:()=>gu});var li=22,ki={x:0,z:40},vo=14;function gu(n,t){let e=u=>t.num(u),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ai(n+11),r=Ai(n+23),o=(u,h)=>u<h?1:u<h+8?1-(u-h)/8:0;function a(u,h){let g=li+zi(s,u/64,h/64,3)*10,_=Math.max(o(Math.hypot(u-.5,h-.5),9),o(Math.hypot(u-ki.x,h-ki.z),vo+2));return g=g*(1-_)+li*_,Math.max(6,Math.min(54,Math.round(g)))}let l=new Set;for(let u=0;u<8;u++)l.add(Math.round(ki.x+Math.cos(u*Math.PI/4)*vo)+","+Math.round(ki.z+Math.sin(u*Math.PI/4)*vo));function c(u,h){let g=new Uint8Array(16384),_=u*16,y=h*16;for(let x=0;x<16;x++)for(let m=0;m<16;m++){let T=_+m,L=y+x,b=a(T,L),w=Math.hypot(T-.5,L-.5),C=Math.hypot(T-ki.x,L-ki.z);for(let N=0;N<=b;N++){let M=N===0?i.bedrock:N===b?i.moss:i.stone;if(M===i.stone){let A=kn(n,T,N,L);N<16&&A<.014?M=i.ore:A>.995&&(M=i.vein)}g[ve(m,N,x)]=M}if(w>6&&Math.abs(r(T/30,L/30))<.035&&(g[ve(m,b,x)]=i.vein),C<vo-1&&(g[ve(m,b,x)]=(Math.floor(T)+Math.floor(L))%2?i.bricks:i.stone),l.has(T+","+L)){for(let N=b+1;N<=b+4;N++)g[ve(m,N,x)]=i.bricks;g[ve(m,b+5,x)]=i.vein}if(L===0&&T>=-1&&T<=2)for(let N=li+1;N<=li+5;N++){let M=T>=0&&T<=1&&N>=li+2&&N<=li+4;g[ve(m,N,x)]=M?i.portal:i.frame}}return g}let d={x:1,y:li+1,z:2.5,stele:{x:1,y:li+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:c,findSpawn:()=>d,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function xu(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let l=-4;l<=1;l++){let c=t+o[0]*a,d=i+o[1]*a,u=e+l,h=(y,x)=>[c+o[0]*y,u+x,d+o[1]*y],g=[];for(let y=0;y<2;y++)for(let x=0;x<3;x++)g.push(h(y,x));if(!g.every(y=>r(n(y[0],y[1],y[2]))))continue;let _=[];for(let y=0;y<3;y++)_.push(h(-1,y),h(2,y));for(let y=0;y<2;y++)_.push(h(y,-1),h(y,3));if(_.every(y=>n(y[0],y[1],y[2])===s)&&_.some(y=>y[0]===t&&y[1]===e&&y[2]===i))return g}return null}var bo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Mo=100,Xp={choice:25,typed:40},iM=5,yu=100;function qp(){return{phase:0,hp:Mo,retry:[],done:!1}}function Yp(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Mo,n.hp+iM),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?Xp.typed:Xp.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<bo.length-1?(n.phase++,n.hp=Mo,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var vu=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#2A2238"},{body:"#6B2E3A",belly:"#D98A6F",wing:"#3A1F2A"},{body:"#2B3A30",belly:"#7FA88A",wing:"#151714"}];function rM(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Wn(n);return e.colorSpace=en,e}function $p(){let n=new _n,t=[],e=(a,l)=>{let c=new Tn({color:a});return c.userData.base=new le(a),c.userData.role=l,t.push(c),c},i=(a,l,c,d,u,h,g,_,y=n)=>{let x=new Be(new sn(a,l,c),e(d,u));return x.position.set(h,g,_),y.add(x),x},s=vu[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Be(new sn(1.15,.72,.02),new Tn({map:rM(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let l=new _n;return l.position.set(a*1,1.9,.2),n.add(l),i(2.4,.08,1.6,s.wing,"wing",a*1.2,0,0,l),i(2.4,.1,.18,"#E0352B","accent",a*1.2,0,-.8,l),l});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function Zp(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function Jp(n,t){let e=vu[Math.min(vu.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}var Au={};Ii(Au,{HOTBAR:()=>Mu,SIZE:()=>Ql,add:()=>Mn,canAdd:()=>Ao,count:()=>ci,craft:()=>Su,craftable:()=>ec,createInventory:()=>So,deserialize:()=>tc,moveBetween:()=>wu,moveSlot:()=>bu,remove:()=>wo,serialize:()=>Eo,takeFromSlot:()=>Ei});var Ql=36,Mu=9;function So(n=36){return{slots:new Array(n).fill(null)}}function Mn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function ci(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function wo(n,t,e){if(ci(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Ei(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function bu(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Ao(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return Mn(s,t,e,i)===0}var Eo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function tc(n,t=36){let e=So(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function ec(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(ci(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Su(n,t,e=()=>64,i){let s=ec(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)wo(n,o,t.in[o]);return Mn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function wu(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function oM(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var mr=(n,t)=>n.owned.includes(t),Kp=(n,t)=>n?t?2:1:0;function Ti(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function To(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function jp(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Qp(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&mr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(To(n,e.price),n.owned.push(e.id),{ok:!0}):Ao(t,e.id,e.qty,i)?(To(n,e.price),Mn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var tm=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function em(n){let t=oM(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function lM(){return new Map}function nm(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Eu(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function cM(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function im(n){let t=lM();for(let e in n||{})t.set(e,cM(n[e]));return t}var nc=16;var qw=18;var Gi=32;function sm(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ke=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],vt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function hM(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ee(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Vi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}ee(n,o)}var uM=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function fM(n,t){let e=Ke(t.color),i=sm(hM(t.block+t.face)),s=Gi;if(uM.has(t.pattern)){dM(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=vt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Ke(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=vt(e,1.12);for(let u=0;u<4;u++)Vi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=vt(e,.96);for(let u=0;u<4;u++)Vi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let u=Ke(t.top);n.fillStyle=vt(u);let h=[[0,0],[s,0]];for(let g=s;g>=0;g-=4)h.push([g,8+Math.round(i()*5)]);ee(n,h)}if(o==="stone"||o==="bedrock")for(let u=0;u<5;u++)n.fillStyle=vt(e,i()<.5?.9:1.08),Vi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let u=0;u<4;u++)n.fillStyle=vt(e,.92),Vi(n,i,i()*s,i()*s,5);n.fillStyle=vt(a);for(let u=0;u<5;u++)Vi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let u=0;u<26;u++)n.fillStyle=vt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let u=3;u<s;u+=7)n.fillStyle=vt(e,.82),n.fillRect(u,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=vt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=vt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let u=0;u<9;u++)n.fillStyle=vt(e,i()<.5?.78:1.15),Vi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let u=7;u<s;u+=8)n.fillStyle=vt(e,.78),n.fillRect(0,u,s,1);n.fillStyle=vt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=vt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=vt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=vt([185,182,174]),ee(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=vt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=vt(e,1.18,.72);for(let u=6;u<s;u+=10)n.fillRect(4+Math.floor(i()*10),u,10,2)}if(o==="gold"&&(n.fillStyle=vt(e,1.15),ee(n,[[0,0],[s,0],[0,s]]),n.fillStyle=vt(e,.9),ee(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=vt(Ke("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=vt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=vt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=vt(Ke("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=vt(Ke("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=vt(a),n.fillRect(14,0,4,4)):(n.fillStyle=vt(Ke(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=vt(a),n.fillRect(0,0,s,10),n.fillStyle=vt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=vt(Ke("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=vt(a),n.fillRect(0,0,9,14))),o==="wool")for(let u=0;u<7;u++)n.fillStyle=vt(e,i()<.5?.94:1.04),Vi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=vt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=vt(a,1.3),ee(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=vt(Ke("#EFEBDD"),1,.8),ee(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=vt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let u=8;u<s;u+=9)n.fillStyle=vt(e,.9),n.fillRect(0,u,s,2);if(o==="cactus")if(t.face==="side"){for(let u=4;u<s;u+=8)n.fillStyle=vt(e,.82),n.fillRect(u,0,2,s);n.fillStyle=vt(Ke("#EFEBDD"),1,.7);for(let u=0;u<6;u++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=vt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ee(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=vt(e,1.1),ee(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=vt(e,.92),ee(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=vt(e,.78);for(let u=0;u<s;u+=8){n.fillRect(0,u+7,s,1);let h=u/8%2?0:8;for(let g=h;g<s;g+=16)n.fillRect(g,u,1,8)}}if(o==="mossy"){n.fillStyle=vt(a);for(let u=0;u<6;u++)Vi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=vt(e,.6),ee(n,[[4,2],[12,14],[10,15],[3,4]]),ee(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=vt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=vt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=vt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=vt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=vt(e,1.08),ee(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=vt(Ke("#D9CBB5"));for(let u=0;u<s;u+=8){n.fillRect(0,u+6,s,2);let h=u/8%2?0:8;for(let g=h;g<s;g+=16)n.fillRect(g,u,2,6)}}if(o==="checker"&&(n.fillStyle=vt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let u=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let h of[3,18]){let g=3;for(;g<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=u[Math.floor(i()*u.length)],n.fillRect(g,h+Math.floor(i()*3),_,11),g+=_+1}}n.fillStyle=vt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let u=7;u<s;u+=8)n.fillStyle=vt(e,.8),n.fillRect(0,u,s,1);if(o==="hay")if(t.face==="side"){for(let u=3;u<s;u+=5)n.fillStyle=vt(e,.88),n.fillRect(u,0,1,s);n.fillStyle=vt(Ke("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=vt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let u=5;u<s;u+=6)n.fillStyle=vt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=vt(Ke("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=vt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=vt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=vt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ee(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let u=7;u<s;u+=8)n.fillStyle=vt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=vt(Ke("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=vt(Ke("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=vt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=vt(e),n.fillRect(0,0,s,s),n.fillStyle=vt(Ke("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let u=7;u<s;u+=8)n.fillStyle=vt(e,.85),n.fillRect(0,u,s,1);t.face==="side"&&(n.fillStyle=vt(a),n.fillRect(0,11,s,3),n.fillStyle=vt(Ke("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let u=3;u<s;u+=6)n.fillStyle=vt(e,.72),n.fillRect(0,u,s,2);if(o==="furnace"){for(let u=0;u<4;u++)n.fillStyle=vt(e,i()<.5?.9:1.08),Vi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=vt(a),n.fillRect(8,15,s-16,11),n.fillStyle=vt(Ke("#E0352B"),1,.85),ee(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=vt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=vt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=vt(a),ee(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let u=0;u<c.length;u+=4){let h=1+(i()-.5)*.09;c[u]=Math.min(255,c[u]*h),c[u+1]=Math.min(255,c[u+1]*h),c[u+2]=Math.min(255,c[u+2]*h)}n.putImageData(l,0,0);let d=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=d,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function rm(n){let t=document.createElement("canvas");t.width=t.height=Gi*nc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Gi;let a=o.getContext("2d",{willReadFrequently:!0});fM(a,s),e.drawImage(o,r%nc*Gi,Math.floor(r/nc)*Gi),i[r]=o}),{canvas:t,tileCanvas:i}}function om(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ee(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ee(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Gi,l=(c,d,u,h,g,_,y,x)=>{r.setTransform(d*a,u*a,h*a,g*a,_,y),r.drawImage(o[c],0,0),x&&(r.fillStyle=`rgba(20,24,20,${x})`,r.fillRect(0,0,Gi,Gi))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,l="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,ee(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ee(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,ee(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ee(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,ee(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ee(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,ee(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,d]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,d,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)ee(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),ee(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,ee(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,ee(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,ee(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,ee(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),ee(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),ee(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",ee(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,ee(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",ee(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=l,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,ee(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",ee(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=a,ee(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=a,ee(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ee(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:l,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ee(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ee(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),ee(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ee(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ee(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function am(){let n=sm(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Gi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,l=6+n()*20,c=n()*Math.PI;ee(r,[[a,l],[a+Math.cos(c)*9,l+Math.sin(c)*9],[a+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function dM(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Ke(t.accent):e,a=(l,c,d)=>{n.fillStyle=d,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,vt(e)),n.fillStyle=vt(e,1.1),ee(n,[[16,26],[9,20],[15,22]]),ee(n,[[17,24],[24,18],[18,21]]),n.fillStyle=vt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;ee(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=vt(Ke("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),d=14+Math.floor(i()*14);n.fillStyle=vt(e,i()<.5?.9:1.1),ee(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-d]])}else if(r==="deadbush")n.strokeStyle=vt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=vt(e),n.fillRect(14,18,4,14),n.fillStyle=vt(o),ee(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=vt(Ke("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=vt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=vt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let d=0;d<5;d++){let u=5+d*5;n.fillStyle=vt(e),n.fillRect(u,s-c,2,c),l===3&&(n.fillStyle=vt(o),ee(n,[[u-2,s-c+9],[u+1,s-c-1],[u+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let d=vt(Ke("#8C6640")),u=vt(e),h=s*.33,g=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=d;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=u,n.fillRect(h-1.5,0,3,s),n.fillRect(g-1.5,0,3,s),t.accent&&(n.fillStyle=vt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=d,n.lineWidth=3;for(let _=0;_<5;_++){let y=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(y)*(s-g-4),Math.sin(y)*(s-g-4)),n.lineTo(s+Math.cos(y)*(s-h+4),Math.sin(y)*(s-h+4)),n.stroke()}n.strokeStyle=u;for(let _ of[s-h,s-g])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=vt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var lm=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,cm=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function pM(n,t){let e=Bi(n),i=Bi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,d=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,d)<=14&&s.push([e+o,i+r])}return s}function um(n){let t=new Wn(n);t.magFilter=nn,t.minFilter=nn,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new $(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new yn({uniforms:e,vertexShader:lm,fragmentShader:cm}),s=new yn({uniforms:e,vertexShader:lm,fragmentShader:cm,transparent:!0,depthWrite:!1,side:Xn});return{opaque:i,trans:s,uniforms:e,tex:t}}function hm(n){let t=new on;return t.setAttribute("position",new Je(n.pos,3)),t.setAttribute("uv",new Je(n.uv,2)),t.setAttribute("light",new Je(n.light,1)),t.setAttribute("lt",new Je(n.lt,2,!0)),t.setIndex(new Je(n.index,1)),t.computeBoundingSphere(),t}var ic=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=wi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Be(hm(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Be(hm(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Bi(t),s=Bi(e),r=Mp(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=wi(l.cx,l.cz);if(this.chunks.has(c))continue;let d={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,d),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:d.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let d=c.cx-i,u=c.cz-s;if(d*d+u*u>o*o){for(let h of["o","t"])c[h]&&(this.scene.remove(c[h]),c[h].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,d]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(d-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(wi(Bi(t),Bi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Kh(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(wi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Kh(t,e,i);if(!r)return!1;let o=wi(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,nm(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[d,u]of pM(l,c))this.dirtyMesh.add(wi(d,u));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Tu="hw_world",Co=null;function fm(n){n!==Tu&&(Tu=n,Co=null)}function dm(){return Co||(Co=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Tu,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Co)}function Cu(n,t){return dm().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Ru=n=>Cu("readonly",t=>t.get(n)),Iu=n=>Cu("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function pm(n){let t=await dm();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function mm(n){let t={};for(let e of n){let i=await Ru(e);i!==void 0&&(t[e]=i)}await Cu("readwrite",e=>e.clear()),await Iu(t)}function U(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Hi=n=>document.querySelector(n);var gM="../../",xM=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],Pu=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],sc=null;function _M(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Lu(){return sc||(sc=(async()=>{for(let t of xM)await _M(gM+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw sc=null,n})),sc}async function xm(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=U("div",{class:"panel quiz"});n.append(r),r.append(U("div",{class:"p-head"},U("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await Lu()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,l=[],c=0,d=0,u=0;function h(){n.hidden=!0,n.innerHTML="",i&&i()}function g(){l=o.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Pu,lv:1,count:s}),l.length||(l=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),c=0,d=0,u=0,_()}function _(){r.innerHTML="";let m=l[c],T=a.isTyped(m);n._q=m;let L=U("div",{class:"fb"}),b=U("div",{class:"q-body"});r.append(U("div",{class:"p-head"},U("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",U("small",{},`\u7B2C ${c+1} / ${l.length} \u984C`)),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("div",{class:"q-type"},(a.TYPES[m.type]||"\u984C\u76EE")+(T?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),U("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?U("div",{class:"q-sub"},m.sub):null,b,L);let w=!1,C=N=>{if(w)return;w=!0;let M=Kp(N,T);e&&e(N),N&&(u++,d+=M,t&&t(M)),L.className="fb "+(N?"ok":"bad"),L.append(U("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${M} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",N?null:U("b",{class:"en"},m.answer)),!N&&m.why?U("div",{class:"why"},m.why):null,U("button",{class:"btn",onclick:y},c+1<l.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let N=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),M=()=>{w||!N.value.trim()||C(o.check(m,N.value).ok)};N.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&M()}),b.append(U("div",{class:"typerow"},N,U("button",{class:"btn",onclick:M},"\u9001\u51FA"))),setTimeout(()=>N.focus(),50)}else{let N=U("div",{class:"opts"});(m.options||[]).forEach(M=>N.append(U("button",{class:"opt"+(/[a-z]/i.test(M)?" en":""),onclick:A=>{if(w)return;let R=o.check(m,M).ok;A.currentTarget.classList.add(R?"ok":"bad"),C(R)}},M))),b.append(N)}}function y(){c++,c<l.length?_():x()}function x(){r.innerHTML="",r.append(U("div",{class:"p-head"},U("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),U("p",{class:"big"},`\u7B54\u5C0D ${u} / ${l.length} \u984C\uFF0C\u62FF\u5230 ${d} \u91D1\u5E63`),U("div",{class:"row"},U("button",{class:"btn",onclick:g},"\u518D\u4F86\u4E00\u56DE"),U("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}g()}var gm=new Set(Pu);async function Du(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o}){n.innerHTML="",n.hidden=!1;let a=U("div",{class:"panel quiz"});n.append(a),a.append(U("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let l;try{l=await Lu()}catch{a.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let c=window.KE,d=null,u=i?new Set(i.filter(T=>gm.has(T))):gm;for(let T of t){let L=l.byId[T];if(L&&u.has(L.type)){d=l.get(T);break}}let h=!!d;d||(d=l.buildQuiz({modules:s||["words","phrases","grammar","patterns"],types:i?[...u]:Pu,lv:1,count:1})[0]||l.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let g=c.isTyped(d);n._q=d,a.innerHTML="";let _=U("div",{class:"fb"}),y=U("div",{class:"q-body"});a.append(U("div",{class:"p-head"},U("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),U("div",{class:"q-type"},(h?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":c.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),U("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?U("div",{class:"q-sub"},d.sub):null,y,_);let x=!1,m=T=>{x||(x=!0,_.className="fb "+(T?"ok":"bad"),_.append(U("div",{},T?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",T?null:U("b",{class:"en"},d.answer)),!T&&d.why?U("div",{class:"why"},d.why):null,U("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(T,g,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let T=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{x||!T.value.trim()||m(l.check(d,T.value).ok)};T.addEventListener("keydown",b=>{b.stopPropagation(),b.key==="Enter"&&L()}),y.append(U("div",{class:"typerow"},T,U("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>T.focus(),50)}else{let T=U("div",{class:"opts"});(d.options||[]).forEach(L=>T.append(U("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:b=>{if(x)return;let w=l.check(d,L).ok;b.currentTarget.classList.add(w?"ok":"bad"),m(w)}},L))),y.append(T)}}async function _m(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=U("div",{class:"panel quiz"});n.append(i),i.append(U("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Lu()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,l=0,c=()=>{i.innerHTML="";let d=o[a];n._q=d;let u=U("div",{class:"fb"}),h=U("div",{class:"q-body"});i.append(U("div",{class:"p-head"},U("h2",{},t.title_zh+" ",U("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),U("div",{class:"q-type"},r.TYPES[d.type]||"\u984C\u76EE"),U("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?U("div",{class:"q-sub"},d.sub):null,h,u);let g=!1,_=y=>{g||(g=!0,y&&l++,u.className="fb "+(y?"ok":"bad"),u.append(U("div",{},y?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",y?null:U("b",{class:"en"},d.answer)),!y&&d.why?U("div",{class:"why"},d.why):null,U("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(d.input==="type"){let y=U("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),x=()=>{g||!y.value.trim()||_(s.check(d,y.value).ok)};y.addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&x()}),h.append(U("div",{class:"typerow"},y,U("button",{class:"btn",onclick:x},"\u9001\u51FA"))),setTimeout(()=>y.focus(),50)}else{let y=U("div",{class:"opts"});(d.options||[]).forEach(x=>y.append(U("button",{class:"opt"+(/[a-z]/i.test(x)?" en":""),onclick:m=>{if(g)return;let T=s.check(d,x).ok;m.currentTarget.classList.add(T?"ok":"bad"),_(T)}},x))),h.append(y)}};c()}function ym(n,t,e){let[i,s]=String(n).split(",").map(Number),r=d=>kn(4242,i|0,t*7+d,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,l=Math.floor(r(2)*a.length),c=(l+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[l],a[c]]}}function vm(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?mr(n,e.blueprint)?{ok:!1,reason:"owned"}:(To(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Ao(t,e.give,e.count,i)?(To(n,e.price),Mn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Nu=(n,t,e)=>!!(n&&n[t.id]===e);function Mm(n,t,e,i,s,r,o=()=>64){if(Nu(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Ti(s,t.reward.coins|0);let a={};for(let l in t.reward.items||{}){let c=Mn(r,l,t.reward.items[l],o);c&&(a[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function bm(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Uu={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},rc=n=>n==="creative"?"creative":"survival",Sm=n=>Uu[rc(n)].db;function wm(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Am(n){let t=rc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Em(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Tm=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Xu={};Ii(Xu,{BREED_CAP:()=>Hu,LOVE_MS:()=>Rm,MAX_STAGE:()=>bM,STAGE_SECONDS:()=>MM,armorMax:()=>Cm,armorPoints:()=>Ro,canTill:()=>Ou,eat:()=>Gu,equip:()=>SM,findMate:()=>Wu,harvest:()=>Bu,nearWater:()=>zu,reduceDamage:()=>Vu,stageAt:()=>Fu,wearArmor:()=>ku});var MM=60,bM=3;function Fu(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var Ou=(n,t)=>(n==="grass"||n==="dirt")&&t;function Bu(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function zu(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let l of[0,-1])if(t(n(e+a,i+l,s+o)))return!0;return!1}function Ro(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var Cm=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function ku(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?Cm(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var Vu=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function SM(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Gu(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var Rm=3e4,Hu=12;function Wu(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<Rm&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Zu={};Ii(Zu,{apply:()=>lc,duck:()=>fs,muted:()=>Io,rainLevel:()=>$u,scene:()=>Yu,setVolume:()=>cc,sfx:()=>dn,state:()=>wM,toggleMute:()=>qu,unlock:()=>ac});var Xe=null,Cs=null,oc=null,gr=null,Vn=()=>window.HIAudio||null,Pm=()=>Vn()?Vn().get():{muted:!1,music:.35,sfx:.7};function ac(){try{Vn()&&Vn().unlock()}catch{}if(!Xe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Xe=new n,Cs=Xe.createGain(),Cs.connect(Xe.destination),oc=Xe.createBuffer(1,Xe.sampleRate,Xe.sampleRate);let t=oc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Xe.state==="suspended"&&Xe.resume(),lc()}function lc(){if(Cs){let n=Pm();Cs.gain.setTargetAtTime(n.muted?0:n.sfx,Xe.currentTime,.03)}}var Io=()=>Pm().muted;function qu(){return Vn()&&Vn().toggle(),lc(),Io()}function cc(n){Vn()&&Vn().set(n),lc()}function Yu(n){try{Vn()&&Vn().scene(n)}catch{}}function fs(n){let t=Vn();t&&(n&&fs.id==null?fs.id=t.duckStart():!n&&fs.id!=null&&(t.duckEnd(fs.id),fs.id=null))}function Lm(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Yn(n,t,e,i,s,r,o){let a=Xe.createOscillator(),l=Xe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),Lm(l,e,i,s,r),a.connect(l),l.connect(Cs),a.start(e),a.stop(e+i+r+.05)}function ds(n,t,e,i,s,r=1){let o=Xe.createBufferSource(),a=Xe.createBiquadFilter(),l=Xe.createGain();o.buffer=oc,a.type=n,a.frequency.value=t,a.Q.value=r,Lm(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Cs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Im={wood:(n,t)=>{Yn("sine",190*t,n,.003,.16,.12,95*t),ds("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{ds("highpass",1800*t,n,.1,.06),Yn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{ds("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Yn("sine",1900*t,n,.002,.08,.25,1500*t),ds("highpass",4200,n,.06,.12)},soft:(n,t)=>{ds("bandpass",850*t,n,.09,.1,.8)}};function dn(n,t="soft"){if(!Xe||Io())return;let e=Xe.currentTime+.005,i=Im[t]||Im.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{ds(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Yn("sine",880,e,.002,.07,.08,1320);break;case"chest":Yn("triangle",160,e,.02,.07,.3,120),Yn("sine",330,e+.12,.005,.05,.15);break;case"door":Yn("sawtooth",120,e,.03,.04,.3,160),ds("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>ds("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Yn("triangle",659,e,.005,.08,.15),Yn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Yn("sine",1319,e,.002,.08,.08),Yn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Yn("triangle",300,e,.005,.1,.18,200);break;default:break}}function $u(n){if(Xe){if(!gr&&n>.01){let t=Xe.createBufferSource(),e=Xe.createBiquadFilter(),i=Xe.createBiquadFilter(),s=Xe.createGain();t.buffer=oc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Cs),t.start(),gr={s:t,g:s}}gr&&gr.g.gain.setTargetAtTime(.06*n,Xe.currentTime,.4)}}var wM=()=>({ctx:Xe?Xe.state:"none",hi:Vn()?Vn().state():null,rain:gr?+gr.g.gain.value.toFixed(3):0});var ef={};Ii(ef,{HI_SCENE:()=>Ku,createWeather:()=>ju,precipFor:()=>tf,sceneFor:()=>Ju,soundOf:()=>xr,stepWeather:()=>Qu});function xr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function Ju({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Ku={calm:"hub",night:"night",cave:"cave"};function ju(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function Qu(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function tf(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var AM=[1,2,4,6,8];function hc(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/AM[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Po(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function Dm(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var lf={};Ii(lf,{collect:()=>of,createFurnace:()=>nf,dismantle:()=>af,start:()=>sf,tick:()=>rf});function nf(){return{fuel:0,jobs:[],done:{}}}function sf(n,t,e,i=4){if(ci(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(ci(t,"coal")<1)return{ok:!1,reason:"fuel"};wo(t,"coal",1),n.fuel+=i}return wo(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function rf(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function of(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=Mn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function af(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var mf={};Ii(mf,{MAX_HP:()=>Lo,REGEN_EVERY:()=>TM,SAFE_FALL:()=>EM,createHealth:()=>cf,damage:()=>uf,fallDamage:()=>hf,hearts:()=>pf,regen:()=>ff,respawnPoint:()=>df});var Lo=20,EM=4,TM=4;function cf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function hf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function uf(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function ff(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function df(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function pf(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var uc={animal:8,quiz:4};function Nm(){return{list:[],nextId:1}}var Do=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Um(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Fm(n,t){return n<.2&&!t}function Om(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function Bm(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,d=Math.hypot(l,c);if(d>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/d*s.speed,n.v.z=c/d*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let l=a>1.6?s.speed:0;n.v.x=r/(a||1)*l,n.v.z=o/(a||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function zm(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var km=(n,t)=>n?(t?2:1)+1:0;function gf(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,d=1/0;for(let u=0;u<3;u++){if(Math.abs(l[u])<1e-9){if(a[u]<r[u]||a[u]>o[u])return null;continue}let h=(r[u]-a[u])/l[u],g=(o[u]-a[u])/l[u];if(h>g&&([h,g]=[g,h]),c=Math.max(c,h),d=Math.min(d,g),c>d)return null}return c}function Vm(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var Gm=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Hm(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function Wm(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),l={};Ti(i,o);for(let c in a){let d=Mn(e,c,a[c],s);d&&(l[c]=d)}return{ok:!0,coins:o,items:a,leftovers:l,name_zh:r.name_zh}}function Xm(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function xf(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function qm(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:xf(n[e].map,n,t).ok?n[e]:null}var Ci={};function _r(n){return Ci[n]||(Ci[n]=new Tn({color:n,transparent:!0}),Ci[n].userData.base=new le(n)),Ci[n]}var No=null;function IM(){if(No)return No;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),No=new Wn(n),No.colorSpace=en,No}function Ym(n,t){let e=new _n,i=n.colors,[s,r]=n.size,o=(l,c,d,u,h,g,_,y)=>{let x=new Be(new sn(l,c,d),y||_r(u));return x.position.set(h,g,_),e.add(x),x},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let d=o(.2,.6,.22,i.leg,c,.6,0);d.geometry.translate(0,-.6/2,0),a.push(d)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Ci.__face||(Ci.__face=new Tn({map:IM(),transparent:!0}),Ci.__face.userData.base=new le("#ffffff"));let c=[_r(i.head),_r(i.head),_r(i.head),_r(i.head),_r(i.head),Ci.__face],d=new Be(new sn(s*.9,s*.8,s*.8),c);d.position.set(0,r*.72+s*.4,0),e.add(d),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let d=n.id==="chicken"?.3:.45,u=o(d,d,d,i.head,0,l+c+d*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,u.position.y+d/2+.05,u.position.z),o(.12,.06,.12,"#D9A63A",0,u.position.y-.02,u.position.z-d/2-.05));let h=n.id==="chicken"?.06:.18,g=n.id==="chicken"?0:s*.45,_=s*.3;for(let[y,x]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-g],[_,-g],[-_,g],[_,g]]){let m=o(h,l,h,i.leg,y,l/2,x);m.geometry.translate(0,-l/2,0),m.position.y=l,a.push(m)}}return e.userData.legs=a,e}function $m(n){for(let t in Ci){let e=Ci[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function fc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var dc="1d3c517ae3",_f=new URLSearchParams(location.search),DM=720,pc=5,Jm={boat:-.85,minecart:-.6,horse:.75},NM=[[0,0,0,1,.1,1]],UM=20261008,FM=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,f={touch:FM,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function yr(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function vr(n,t){try{localStorage.setItem(n,t)}catch{}}async function OM(){let n=rc(yr("hw_mode","survival")),t=Am(n),e=!t.creative&&yr("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=p=>e==="shadow"&&/^hw_(furnaces|chests|crops|map)$/.test(p)?p+"_s":p,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";fm(Sm(n));let[r,o,a,l,c,d,u]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json"].map(p=>fetch(p,{cache:"no-cache"}).then(E=>E.json()))),h=yp(r),g=o.recipes||[],_=p=>h.maxStack(p),y={};try{let[p,E,I,D,O,Y,ft,ut,ct,bt,Wt]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map"].map(re=>Ru(i(re))));y={meta:p,player:E,inv:I,coins:D,furnaces:O,claimed:Y,quests:ft,chests:ut,crops:ct,achv:bt,mapd:Wt,chunks:await pm(s)}}catch(p){console.warn("save unavailable",p)}let x=y.meta&&y.meta.seed||UM+Uu[n].seedOffset,m=e==="shadow"?x+7777:x,T=e==="shadow"?gu(m,h):Tp(x,h,c),L=im(Object.fromEntries(Object.entries(y.chunks||{}).map(([p,E])=>[p.slice(s.length),E]))),b=y.inv?tc(y.inv):So();t.creative&&!y.inv&&Tm.forEach((p,E)=>{h.get(p)&&(b.slots[E]={id:p,count:64})});let w=em(y.coins),C=Op(y.achv),N=u.achievements||[],M=new jl(h,y.mapd),A=cf(y.player&&y.player.hp!=null?y.player.hp:20);f.bed=y.player&&y.player.bed||null,f.horse=y.player&&y.player.horse||null;let R=l.portals||[],z=Array.isArray(y.claimed)?y.claimed.slice():[],X=y.furnaces||{},k=y.quests||{},F=Object.fromEntries(Object.entries(y.chests||{}).map(([p,E])=>[p,tc(E,27)])),V=y.crops||{};f.armor=y.player&&Array.isArray(y.player.armor)?y.player.armor.slice(0,4):[null,null,null,null],f.armorDur=y.player&&Array.isArray(y.player.armorDur)?y.player.armorDur.slice(0,4):[null,null,null,null];let K=o.smelt||[],Z=o.fuelPerCoal||4;y.meta&&typeof y.meta.time=="number"&&(f.time=y.meta.time);let nt=Hi("#c"),J=new ql({canvas:nt,antialias:!1,powerPreference:"high-performance"});J.setPixelRatio(Math.min(window.devicePixelRatio||1,f.touch?1.5:1.25));let tt=new Xr,st=new le("#EFEBDD");tt.background=st;let mt=new xn(72,1,.08,200);mt.rotation.order="YXZ";let xt=rm(h),Mt=om(h,xt),St=um(xt.canvas),yt=new Worker("assets/hw-worker.js?v="+dc),B=new ic({scene:tt,mats:St,reg:h,worker:yt,diffs:L,onDirty:p=>{f.dirty.add(p),(f.mapDirty||(f.mapDirty=new Set)).add(p)}}),it=Math.max(2,Math.min(6,parseInt(_f.get("rd")||yr("hw_rd",f.touch?"3":"4"),10)||4));B.setRenderDistance(it),mt.far=it*16+40,mt.updateProjectionMatrix();let pt=await new Promise(p=>{let E=I=>{I.data.type==="ready"&&(yt.removeEventListener("message",E),p(I.data.spawn))};yt.addEventListener("message",E),yt.postMessage({type:"init",seed:m,dim:e,blocks:r,structures:c,diffs:Object.fromEntries([...L].map(([I,D])=>[I,Eu(D)]))})}),Lt=y.player&&y.player.dims&&y.player.dims[e];f.dimPos=y.player&&y.player.dims||{},y.player&&(e==="overworld"||Lt)?Object.assign(f,{p:Lt?{x:Lt.x,y:Lt.y,z:Lt.z}:{x:y.player.x,y:y.player.y,z:y.player.z},yaw:(Lt?Lt.yaw:y.player.yaw)||0,pitch:y.player.pitch||0,fly:!!y.player.fly&&!Lt,sel:y.player.sel|0}):(y.player&&(f.sel=y.player.sel|0),f.p={x:pt.x,y:pt.y,z:pt.z},f.yaw=Math.atan2(-(pt.stele.x+.5-pt.x),-(pt.stele.z+.5-pt.z)),f.pitch=-.15);let dt=new Ss(new Qr(new sn(1.004,1.004,1.004)),new bs({color:1382164,transparent:!0,opacity:.45}));dt.visible=!1,tt.add(dt);let kt=am().map(p=>new Wn(p)),jt=new Be(new sn(1.01,1.01,1.01),new Tn({map:kt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));jt.visible=!1,tt.add(jt);let $t=(p,E)=>{let I=document.createElement("canvas");I.width=I.height=64;let D=I.getContext("2d");D.fillStyle=p,D.beginPath(),D.arc(32,32,28,0,7),D.fill(),E&&(D.globalCompositeOperation="destination-out",D.beginPath(),D.arc(44,26,24,0,7),D.fill());let O=new Wn(I);return O.colorSpace=en,O},Qt=new Ms(new es({map:$t("#F2C46B"),depthWrite:!1,fog:!1})),ue=new Ms(new es({map:$t("#EDE6D0",!0),depthWrite:!1,fog:!1}));tt.add(Qt,ue);let Vt=500,se=new Float32Array(Vt*6),Fe=new Float32Array(Vt*3),ke=new Float32Array(Vt*3);for(let p=0;p<Vt;p++)ke[p*3]=Math.random()*24-12,ke[p*3+1]=Math.random()*16,ke[p*3+2]=Math.random()*24-12;let Te=new on;Te.setAttribute("position",new Je(se,3));let Ie=new Ss(Te,new bs({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));Ie.frustumCulled=!1,Ie.visible=!1,tt.add(Ie);let H=new on;H.setAttribute("position",new Je(Fe,3));let Ge=new Jr(H,new nr({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Ge.frustumCulled=!1,Ge.visible=!1,tt.add(Ge),f.weather=ju();let be=0;function P(p,E,I){if(Ie.visible=I==="rain",Ge.visible=I==="snow",!!I){be+=p;for(let D=0;D<Vt;D++){let O=ke[D*3],Y=ke[D*3+2],ft=I==="rain"?16:1.6,ut=E.y+10-(ke[D*3+1]+be*ft)%16;if(I==="rain"){let ct=D*6;se[ct]=se[ct+3]=E.x+O,se[ct+2]=se[ct+5]=E.z+Y,se[ct+1]=ut,se[ct+4]=ut-.45}else{let ct=D*3,bt=Math.sin(be*.8+D)*.4;Fe[ct]=E.x+O+bt,Fe[ct+1]=ut,Fe[ct+2]=E.z+Y+bt*.6}}(I==="rain"?Te:H).attributes.position.needsUpdate=!0}}let v=new _n,q=(p,E,I,D,O,Y,ft)=>{let ut=new Be(new sn(p,E,I),new Tn({color:D}));return ut.position.set(O,Y,ft),ut.userData.base=new le(D),v.add(ut),ut},et=q(.24,.75,.26,"#26302A",-.14,.375,0),ot=q(.24,.75,.26,"#26302A",.14,.375,0);q(.56,.7,.3,"#2F5A34",0,1.1,0);let At=q(.18,.66,.2,"#E7CDA6",-.38,1.12,0),It=q(.18,.66,.2,"#E7CDA6",.38,1.12,0);q(.46,.42,.42,"#E7CDA6",0,1.66,0),q(.5,.14,.46,"#151714",0,1.9,.02),q(.12,.12,.05,"#E0352B",.16,1.92,-.24),[et,ot,At,It].forEach(p=>{p.geometry.translate(0,-p.geometry.parameters.height/2+.05,0),p.position.y+=p.geometry.parameters.height/2-.05}),v.visible=!1,tt.add(v);let at={},ht=p=>at[p]||(at[p]=(()=>{let E=new Image;E.src=Mt[p];let I=new fn(E);return I.colorSpace=en,E.onload=()=>{I.needsUpdate=!0},new es({map:I,depthWrite:!0,alphaTest:.3})})());function Tt(p,E,I,D){let O=new Ms(ht(p));O.scale.set(.42,.42,1),tt.add(O),f.drops.push({id:p,s:O,p:{x:E,y:I,z:D},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let Yt=(p,E,I)=>{let D=B.get(p,E,I);return h.flat.solid[D]===1&&(h.flat.boxes[D]||!0)},Ct=Object.fromEntries((a.mobs||[]).map(p=>[p.id,p])),wt=Nm(),Xt=new Map,te=0;function ce(p,E){for(let I=61;I>0;I--){let D=B.get(p,I,E);if(h.flat.solid[D])return B.get(p,I+1,E)||B.get(p,I+2,E)?null:{y:I+1,n:D};if(h.flat.liquid[D])return null}return null}function W(p,E,I,D=7){for(let O=-D;O<=D;O++)for(let Y=-D;Y<=D;Y++)for(let ft=-D;ft<=D;ft++)if(h.flat.lightEmit[B.get(p+ft,E+O,I+Y)])return!0;return!1}function Rt(p,E,I,D,O){let Y=Um(wt,p,{x:E+.5,y:I,z:D+.5}),ft=Ym(p,O);return Xt.set(Y.id,ft),tt.add(ft),Y}let lt=new Set;function Pt(){for(let p of T.villages.around(f.p.x-64,f.p.z-64,f.p.x+64,f.p.z+64))if(!(lt.has(p.id)||!B.ready(p.x,p.z))){lt.add(p.id);for(let E=0;E<p.villagers;E++){let I=ym(p.id,E,d),D=p.x+(E%2?2:-2),O=p.z+(E-1),Y=ce(D,O),ft=Rt(Ct.villager,D,Y?Y.y:p.y+1,O,I.prof.color);Object.assign(ft,{home:{x:p.x,z:p.z},village:p.id,role:I})}}}function Ot(p){if(Ct.villager&&Pt(),e==="overworld"&&f.horse&&!f.horseMob&&Ct.horse&&B.ready(f.horse.x,f.horse.z)){let ft=Rt(Ct.horse,Math.floor(f.horse.x),f.horse.y,Math.floor(f.horse.z));ft.tame=!0,f.horse.saddled&&Mf(ft),f.horseMob=ft}let E=Math.random()*Math.PI*2,I=14+Math.random()*14,D=Math.floor(f.p.x+Math.cos(E)*I),O=Math.floor(f.p.z+Math.sin(E)*I);if(!B.ready(D,O))return;let Y=ce(D,O);if(Y)if(Do(wt,"animal")<uc.animal&&Y.n===h.num("grass")&&p>.3){let ft=Object.values(Ct).filter(bt=>bt.kind==="animal"&&(!bt.biome||bt.biome===T.biomeOf(D,O))),ut=ft[Math.floor(Math.random()*ft.length)],ct=1+Math.floor(Math.random()*3);for(let bt=0;bt<ct&&Do(wt,"animal")<uc.animal;bt++){let Wt=D+bt%2,re=O+(bt>>1),oe=ce(Wt,re);oe&&Rt(ut,Wt,oe.y,re)}}else t.quizMobs&&Do(wt,"quiz")<uc.quiz&&Fm(p,W(D,Y.y,O))&&Ct.quizling&&Rt(e==="shadow"&&Ct.shadowling?Ct.shadowling:Ct.quizling,D,Y.y,O)}function gt(p,E,I){te+=p,te>2.5&&f.started&&(te=0,Ot(e==="shadow"?0:E));for(let D=wt.list.length-1;D>=0;D--){let O=wt.list[D],Y=Xt.get(O.id),ft=Math.hypot(O.p.x-f.p.x,O.p.z-f.p.z);if(O.riding){O.p.x=f.p.x,O.p.y=f.p.y,O.p.z=f.p.z,O.yaw=f.yaw,O.v.x=f.v.x,O.v.z=f.v.z,fc(Y,O,I/1e3);continue}if(O.gone){O.goneT=(O.goneT||0)+p,fc(Y,O,I/1e3),O.goneT>.35&&(tt.remove(Y),Xt.delete(O.id),wt.list.splice(D,1));continue}if(Om(O,E,ft)){O.gone=!0,O.goneT=0,O.village&&lt.delete(O.village);continue}if(!B.ready(O.p.x,O.p.z))continue;Bm(O,f.p,p,Math.random),O.v.y-=20*p,O.v.y<-20&&(O.v.y=-20);let ut=Zl(O.p,O.v,p,Yt,{w:Math.min(.9,O.def.size[0]),h:O.def.size[1],canStep:!0,grounded:O.onGround});O.onGround=ut.onGround,h.flat.liquid[B.get(O.p.x,O.p.y+.3,O.p.z)]&&(O.v.y=2),fc(Y,O,I/1e3)}$m(.35+.65*E)}function Jt(p,E,I){let D,O;p==="screen"?(bn.set(E/innerWidth*2-1,-(I/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize(),D={x:mt.position.x,y:mt.position.y,z:mt.position.z},O={x:bn.x,y:bn.y,z:bn.z}):(D=Oo(),O=Ls());let Y=p==="screen"?fi("screen",E,I):fi("center"),ft=null,ut=f.view==="tp"&&p==="screen"?8:4.5;Y&&(ut=Math.min(ut,Y.dist+.5));for(let ct of wt.list){if(ct.gone||ct.riding)continue;let bt=gf(D,O,ct.p,ct.def.size[0],ct.def.size[1]);bt!=null&&bt<ut&&(ut=bt,ft=ct)}if(f.boss){let ct=gf(D,O,f.boss.p,3.6,3.6);ct!=null&&ct<ut+1&&(ut=ct,ft=f.boss.m)}return ft}function qt(){try{return Vm(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Pe(p){if(p.kind==="boss"){c0();return}if(p.type==="horse"){t0(p);return}if(p.kind==="villager"){if(!t.trading){Ft("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}un(p);return}if(p.kind==="animal"&&b.slots[f.sel]&&b.slots[f.sel].id==="wheat"){t.consume&&Ei(b,f.sel,1),Le();let I=Date.now();p.love=I,Ft(`${p.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let D=Wu(wt.list,p,I);if(D&&Do(wt,"animal")<Hu){let O=Rt(p.def,Math.floor((p.p.x+D.p.x)/2),Math.floor(p.p.y),Math.floor((p.p.z+D.p.z)/2));Xt.get(O.id).scale.setScalar(.65),p.love=0,D.love=0,Ft(`\u751F\u4E86\u4E00\u96BB\u5C0F${p.def.name_zh}\uFF01`),f.stats.bred=(f.stats.bred||0)+1,$e("bred")}else D&&Ft("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(p.kind==="animal"){let I=b.slots[f.sel],D=!!(I&&h.toolOf(I.id)&&h.toolOf(I.id).type==="sword"),O=zm(p,D,Math.random);if(p.v.y=4,p.v.x+=(p.p.x-f.p.x)*1.5,p.v.z+=(p.p.z-f.p.z)*1.5,D){let Y=Po(b,f.sel,h);Y.broke&&Ft(`\u4F60\u7684${h.name(Y.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Le()}if(O&&O.drops)for(let Y=0;Y<O.drops.n;Y++)Tt(O.drops.id,p.p.x,p.p.y+.6,p.p.z);return}if(p.busy)return;p.busy=!0,Gn(),document.pointerLockElement&&document.exitPointerLock(),f.overlay="ask";let E=qt().slice(0,30).sort(()=>Math.random()-.5);Du(Et.ov,{ids:E,onDone:(I,D)=>{if(f.overlay=null,p.busy=!1,I&&p.def.tough&&!p.hurt){p.hurt=!0,Ft("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(I){let O=km(!0,D)+(p.def.tough?2:0);Ti(w,O),Un(),p.gone=!0,p.goneT=0,Ft(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${O} \u91D1\u5E63`),f.dirtyMeta=!0,Sn(),f.stats.quizWins=(f.stats.quizWins||0)+1,$e("quiz_wins")}else if(I===!1){let O=f.p.x-p.p.x,Y=f.p.z-p.p.z,ft=Math.hypot(O,Y)||1;f.v.x=O/ft*7,f.v.z=Y/ft*7,f.v.y=4.5,p.p.x-=O/ft*1.5,p.p.z-=Y/ft*1.5,Ft("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let _e=(p,E,I)=>B.get(p,E,I),pn=(p,E,I)=>{let D=h.get(B.get(p,E,I));return D&&D.rail?{shape:D.rail,powered:!!D.powered}:null},Et=BM();function Ft(p){let E=U("div",{class:"toast"},p);Et.toasts.append(E),setTimeout(()=>E.remove(),2200)}function mc(p){let E=U("div",{class:"toast ach"},U("i",{class:"badge"}),U("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",U("b",{},p.name_zh),p.coins&&t.coins?`\u3000+${p.coins} \u91D1\u5E63`:""));Et.toasts.append(E),setTimeout(()=>E.remove(),3500)}function $e(p,E=1){Bp(C,p,E),f.dirtyMeta=!0;for(let I of zp(C,N))mc(I),I.coins&&t.coins&&(Ti(w,I.coins),Un())}function Mr(p,E,I,D){$e("placed"),D==="torch"&&$e("place:torch");let O=f.recentPlaced||(f.recentPlaced=[]);O.push([p,E,I]),O.length>80&&O.shift(),!C.done.house&&Vp(O,p,E,I)>=30&&$e("house")}function gc(){let p=!1;for(let E of qe())C.stats["boss:"+E]||(C.stats["boss:"+E]=1,p=!0);p&&$e("boss",0)}let br=w.coins;function Un(){w.coins>br&&dn("coin"),br=w.coins,Et.coins.textContent=w.coins}let hi="";function Ri(){let p=pf(A.hp),E=p.join();E!==hi&&(hi=E,Et.hearts.innerHTML="",p.forEach(I=>Et.hearts.append(U("i",{class:"ht "+I}))))}function Sr(p){if(f.dead||p<=0||!t.damage)return;let E=p,I=Ro(f.armor,h);if(p=Vu(p,I),I&&(ku(f.armor,f.armorDur,h,E).forEach(Y=>Ft(`\u4F60\u7684${h.name(Y)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),j(),f.dirtyMeta=!0),p<=0)return;let D=uf(A,p);Ri(),f.dirtyMeta=!0,dn("hurt"),Et.flash.classList.remove("on"),Et.flash.offsetWidth,Et.flash.classList.add("on"),D&&Uo()}function Uo(){Tr(!0),f.dead=!0,Gn(),document.pointerLockElement&&document.exitPointerLock(),f.overlay="dead";let p=Et.ov;p.innerHTML="",p.hidden=!1,p.append(U("div",{class:"panel start"},U("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),U("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),U("button",{class:"btn big",onclick:Rs},f.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Rs(){let p=df(f.bed,pt,!!f.bed&&e==="overworld");f.p={x:p.x,y:p.y,z:p.z},f.v={x:0,y:0,z:0},f.fallTop=p.y,A.hp=20,f.dead=!1,Ri(),he(),f.dirtyMeta=!0,Ft(f.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Le(){Et.hotbar.innerHTML="";for(let E=0;E<9;E++){let I=b.slots[E];Et.hotbar.append(U("button",{class:"slot"+(E===f.sel?" on":""),"aria-label":I?h.name(I.id):"\u7A7A\u683C",onpointerdown:D=>{D.stopPropagation(),f.sel=E,Le()}},I?U("img",{src:Mt[I.id],alt:""}):null,I&&I.count>1?U("span",{class:"cnt"},I.count):null,ps(I),U("span",{class:"key"},E+1)))}let p=b.slots[f.sel];Et.selName.textContent=p?h.name(p.id):""}function ps(p){let E=Dm(p,h);return!E||E.left>=E.max?null:U("span",{class:"dur"+(E.frac<.25?" low":"")},U("i",{style:"width:"+Math.round(E.frac*100)+"%"}))}function Fo(p=4){let E=new Set,I=Math.floor(f.p.x),D=Math.floor(f.p.y),O=Math.floor(f.p.z);for(let Y=-p;Y<=p;Y++)for(let ft=-p;ft<=p;ft++)for(let ut=-p;ut<=p;ut++){let ct=B.get(I+ut,D+Y,O+ft);ct&&E.add(h.get(ct).id)}return E}let Is=()=>({near:Fo(),owned:new Set(w.owned)}),xc=-1,$n=null,Ps=null,ms=p=>p==="inv"?b:p==="chest"?F[Ps]:null,wr=(p,E)=>p==="armor"?f.armor[E]?{id:f.armor[E],count:1,dur:f.armorDur[E]}:null:ms(p).slots[E];function S(p,E,I){if(!$n){wr(p,E)&&($n={c:p,i:E}),I();return}let D=$n;if($n=null,D.c===p&&D.i===E){I();return}if(p==="armor"||D.c==="armor"){let[O,Y,ft,ut]=p==="armor"?[D.c,D.i,p,E]:[p,E,D.c,D.i];if(O==="armor"){I();return}let ct=ms(O),bt=ct.slots[Y],Wt=bt&&h.get(bt.id),re=f.armor[ut];if(bt&&!(Wt.armor&&Wt.armor.slot===ut)){Ft("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),I();return}let oe=f.armorDur[ut],Ve=re?Number.isFinite(oe)?{id:re,count:1,dur:oe}:{id:re,count:1}:null;bt?(f.armor[ut]=bt.id,f.armorDur[ut]=Number.isFinite(bt.dur)?bt.dur:null,bt.count>1?(bt.count--,Ve&&Mn(ct,re,1,_)):ct.slots[Y]=Ve):re&&(f.armor[ut]=null,f.armorDur[ut]=null,ct.slots[Y]=Ve),j(),f.dirtyMeta=!0,Le(),I();return}D.c===p?bu(ms(p),D.i,E,_):wu(ms(D.c),D.i,ms(p),E,_),f.dirtyMeta=!0,Le(),I()}let G=(p,E,I,D="")=>{let O=wr(p,E),Y=$n&&$n.c===p&&$n.i===E;return U("button",{class:"slot"+(Y?" pick":"")+D,title:O?h.name(O.id):"",onclick:()=>S(p,E,I)},O?U("img",{src:Mt[O.id],alt:""}):null,O&&O.count>1?U("span",{class:"cnt"},O.count):null,ps(O))},rt=["\u982D","\u8EAB","\u817F","\u8173"];function Q(p){let E=Ro(f.armor,h);return U("div",{class:"armor-row"},rt.map((I,D)=>U("div",{class:"armor-slot"},G("armor",D,p),U("small",{},I))),U("small",{class:"muted"},`\u8B77\u7532 ${E} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,E*4)}%\uFF09`))}function j(){if(Et.armor){let p=Ro(f.armor,h);Et.armor.textContent=p?`\u8B77\u7532 ${p}`:""}}function Dt(){let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=F[Ps]||(F[Ps]=So(27)),I=U("div",{class:"inv-grid"});for(let Y=0;Y<27;Y++)I.append(G("chest",Y,Dt));let D=U("div",{class:"inv-grid"});for(let Y=9;Y<36;Y++)D.append(G("inv",Y,Dt));let O=U("div",{class:"inv-grid hbrow"});for(let Y=0;Y<9;Y++)O.append(G("inv",Y,Dt," hb"));return p.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u7BB1\u5B50"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),I,U("h3",{},"\u80CC\u5305"),D,O)),E}function zt(){let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=U("div",{class:"inv-grid"}),I=ut=>G("inv",ut,zt,ut<9?" hb":"");for(let ut=9;ut<36;ut++)E.append(I(ut));let D=U("div",{class:"inv-grid hbrow"});for(let ut=0;ut<9;ut++)D.append(I(ut));let O=U("div",{class:"craft"},U("h3",{},"\u5408\u6210"));if(t.creative){let ut=U("div",{class:"craft"},U("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),U("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),ct=U("div",{class:"cat-grid"});Em(h).forEach(bt=>ct.append(U("button",{class:"slot",title:h.name(bt),onclick:()=>{b.slots[f.sel]={id:bt,count:64},f.dirtyMeta=!0,Le(),zt(),Ft(`${h.name(bt)} \u653E\u9032\u7B2C ${f.sel+1} \u683C`)}},U("img",{src:Mt[bt],alt:""})))),ut.append(ct),p.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("div",{class:"inv-wrap"},U("div",{},U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),E,D),ut)));return}let Y=Is(),ft={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};g.forEach(ut=>{let ct=ec(b,ut,Y),bt=ct.ok;ut.blueprint&&ct.reason==="blueprint"&&!Object.keys(ut.in).some(Wt=>Wt!=="stick"&&ci(b,Wt)>0)||O.append(U("div",{class:"rcp"+(bt?"":" no")},U("img",{src:Mt[ut.out.id],alt:""}),U("div",{class:"rcp-t"},U("b",{},`${ut.name_zh} \xD7${ut.out.count}`),U("small",{},Object.keys(ut.in).map(Wt=>`${h.name(Wt)} ${ci(b,Wt)}/${ut.in[Wt]}`).join("\u3001")+(ft[ct.reason]?"\u3000\xB7 "+ft[ct.reason]:""))),U("button",{class:"btn small",onclick:()=>{let Wt=Su(b,ut,_,Is());Wt.ok?(Ft(`\u505A\u597D\u4E86\uFF1A${ut.name_zh} \xD7${ut.out.count}`),f.dirtyMeta=!0,$e("craft:"+ut.out.id)):Ft({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Wt.reason]||"\u6750\u6599\u4E0D\u5920"),zt(),Le()}},"\u88FD\u4F5C")))}),p.append(U("div",{class:"panel inv"},U("div",{class:"p-head"},U("h2",{},"\u80CC\u5305"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("div",{class:"inv-wrap"},U("div",{},U("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Q(zt),E,D),O)))}let Nt=jp(h);function Gt(){let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=U("div",{class:"shop"}),I=qm(R,qe());Nt.filter(D=>!D.id.startsWith("portal_")||I&&D.id===I.block).forEach(D=>E.append(U("div",{class:"offer"+(D.locked?" locked":"")},U("img",{src:Mt[D.id],alt:""}),U("div",{class:"of-t"},U("b",{},`${D.name_zh}${D.qty>1?" \xD7"+D.qty:""}`),U("small",{},D.locked?`\uFF08${D.locked}\uFF09`:`${D.price} \u91D1\u5E63${D.desc?"\u3000"+D.desc:""}`)),mr(w,D.id)?U("span",{class:"owned"},"\u5DF2\u64C1\u6709"):U("button",{class:"btn small",disabled:D.locked?!0:null,onclick:()=>Zt(D)},D.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),p.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u5546\u5E97\u3000",U("span",{class:"coin"}),` ${w.coins}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),E))}function Zt(p){let E=Qp(w,b,p,_);E.ok?(Ft(p.blueprint?`\u62FF\u5230 ${p.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${p.name_zh} \xD7${p.qty}`),f.dirtyMeta=!0,Un(),Le(),Sn()):Ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[E.reason]||"\u8CB7\u4E0D\u4E86"),Gt()}let fe=null;function xe(){let p=Et.ov,E=X[fe]||(X[fe]=nf());p.innerHTML="",p.hidden=!1;let I=E.jobs[0],D=U("div",{class:"shop"});K.forEach(Y=>{let ft=ci(b,Y.in);D.append(U("div",{class:"offer"+(ft?"":" locked")},U("img",{src:Mt[Y.in],alt:""}),U("div",{class:"of-t"},U("b",{},`${h.name(Y.in)} \u2192 ${h.name(Y.out)}`),U("small",{},`\u6709 ${ft} \u500B \xB7 \u6BCF\u500B ${Y.time} \u79D2`)),U("button",{class:"btn small",onclick:()=>{let ut=sf(E,b,Y,Z);ut.ok||Ft(ut.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),f.dirtyMeta=!0,Le(),xe()}},"\u653E\u9032\u53BB")))});let O=Object.values(E.done).reduce((Y,ft)=>Y+ft,0);p.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u7194\u7210"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,E.fuel-E.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${ci(b,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Z} \u500B\uFF09`),U("div",{class:"furnace-st"},I?`\u6B63\u5728\u71D2\uFF1A${h.name(I.in)}\uFF08\u9084\u8981 ${Math.ceil(I.left)} \u79D2\uFF0C\u6392\u968A ${E.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),U("div",{class:"row"},U("button",{class:"btn",disabled:O?null:!0,onclick:()=>{let Y=of(E,b,_);Y&&(Ft(`\u62FF\u51FA ${Y} \u500B`),$e("smelted",Y)),f.dirtyMeta=!0,Le(),xe()}},`\u62FF\u51FA\u4F86\uFF08${O}\uFF09`)),D))}let Ht=null,Ee=(p,E)=>{try{return JSON.parse(localStorage.getItem(p)||"null")||E}catch{return E}},qe=()=>Xm(Ee("hw_portal_rewards",[]),Ee("hi_save",null),R),ze='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function Ne(){let p=R.find(O=>O.map===Ht),E=Et.ov;if(E.innerHTML="",E.hidden=!1,!p){he();return}let I=Object.keys(p.reward.items).map(O=>`${h.name(O)} \xD7${p.reward.items[O]}`).join("\u3001"),D=xf(p.map,R,qe());if(!D.ok){E.append(U("div",{class:"panel start"},U("div",{class:"p-head"},U("h2",{},"\u50B3\u9001\u9580\u30FB"+p.name_zh),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("div",{class:"padlock",html:ze}),U("p",{class:"big"},`\u5148\u6253\u5012 ${D.need.boss_zh} \u624D\u80FD\u9032\u5165`),U("p",{class:"muted"},`\u5F9E\u300C${D.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${D.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:he},"\u77E5\u9053\u4E86"))));return}E.append(U("div",{class:"panel start"},U("div",{class:"p-head"},U("h2",{},"\u50B3\u9001\u9580\u30FB"+p.name_zh),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${p.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${p.reward.coins} \u91D1\u5E63\u3001${I}\u3002`),U("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),U("div",{class:"row"},U("button",{class:"btn big",onclick:async()=>{await Sn(),f.leaving=Gm(p.map),location.href=f.leaving}},"\u9032\u5165"),U("button",{class:"btn ghost",onclick:he},"\u5148\u4E0D\u8981"))))}function Qe(){if(!t.portals)return 0;let p;try{p=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{p=[]}let E=Hm(p,z);for(let I of E){let D=Wm(I,R,b,w,_);if(z.push(I.id),!!D.ok){for(let O in D.leftovers)for(let Y=0;Y<D.leftovers[O];Y++)Tt(O,f.p.x,f.p.y+1,f.p.z);Ft(`\u5F9E${D.name_zh}\u5E36\u56DE\u4F86\uFF1A${D.coins} \u91D1\u5E63\u3001${Object.keys(D.items).map(O=>h.name(O)+" \xD7"+D.items[O]).join("\u3001")}`)}}return E.length&&(Un(),Le(),f.dirtyMeta=!0,Sn()),gc(),E.length}let Bt=null;function un(p){Bt=p,p.busy=!0,pe("trade")}function Se(){let p=Bt,E=Et.ov;if(!p)return he();E.innerHTML="",E.hidden=!1;let I=p.role,D=bm(),O=U("div",{class:"shop"});I.prof.offers.forEach(ft=>{let ut=ft.blueprint||ft.give,ct=!!ft.blueprint,bt=ct&&h.blueprints.find(re=>re.id===ft.blueprint),Wt=ct&&mr(w,ft.blueprint);O.append(U("div",{class:"offer"},U("img",{src:Mt[ut],alt:""}),U("div",{class:"of-t"},U("b",{},ct?bt.name_zh:`${h.name(ut)}${ft.count>1?" \xD7"+ft.count:""}`),U("small",{},`${ft.price} \u91D1\u5E63${ct?"\u3000"+(bt.desc||""):""}`)),Wt?U("span",{class:"owned"},"\u5DF2\u64C1\u6709"):U("button",{class:"btn small",onclick:()=>{let re=vm(w,b,ft,_);re.ok?(dn("trade"),$e("traded"),Ft(ct?`\u62FF\u5230 ${bt.name_zh}\uFF01`:`\u8CB7\u5230 ${h.name(ut)} \xD7${ft.count}`),f.dirtyMeta=!0,Un(),Le(),Sn()):Ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[re.reason]||"\u8CB7\u4E0D\u4E86"),Se()}},"\u8CFC\u8CB7")))});let Y=U("div",{class:"quests"});I.quests.forEach(ft=>{let ut=Nu(k,ft,D),ct=Object.keys(ft.reward.items||{}).map(bt=>`${h.name(bt)} \xD7${ft.reward.items[bt]}`).join("\u3001");Y.append(U("div",{class:"offer quest"+(ut?" locked":"")},U("div",{class:"of-t"},U("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+ft.title_zh),U("small",{},`${ft.desc}\uFF0C\u7B54\u5C0D ${ft.need} \u984C \u2192 ${ft.reward.coins} \u91D1\u5E63\u3001${ct}`)),ut?U("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):U("button",{class:"btn small",onclick:()=>{f.overlay="quest",_m(Et.ov,{quest:ft,onDone:bt=>{if(f.overlay="trade",bt>=0){let Wt=Mm(k,ft,bt,D,w,b,_);if(Wt.ok){for(let re in Wt.leftovers)for(let oe=0;oe<Wt.leftovers[re];oe++)Tt(re,f.p.x,f.p.y+1,f.p.z);Ft(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Wt.coins} \u91D1\u5E63\u3001${ct}`),Un(),Le(),f.dirtyMeta=!0,Sn(),f.stats.quests=(f.stats.quests||0)+1,$e("quests")}else Ft(`\u7B54\u5C0D ${bt} \u984C\uFF0C\u8981 ${ft.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Se()}})}},"\u63A5\u59D4\u8A17")))}),E.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},`\u6751\u6C11\u30FB${I.prof.name_zh}\u3000`,U("span",{class:"coin"}),` ${w.coins}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("h3",{},"\u4EA4\u6613"),O,U("h3",{},"\u82F1\u6587\u59D4\u8A17"),U("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),Y))}function Rn(){let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=U("b",{},B.rd),I=U("input",{type:"range",min:2,max:6,step:1,value:B.rd,oninput:D=>{E.textContent=D.target.value},onchange:D=>{let O=+D.target.value;B.setRenderDistance(O),mt.far=O*16+40,mt.updateProjectionMatrix(),vr("hw_rd",O)}});p.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},"\u8A2D\u5B9A"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",E,I),U("label",{class:"set"},"\u97F3\u6A02",U("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:D=>cc({music:+D.target.value,muted:!1})})),U("label",{class:"set"},"\u97F3\u6548",U("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:D=>{cc({sfx:+D.target.value,muted:!1}),dn("place","wood")}})),t.creative?U("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",U("input",{type:"checkbox",checked:yr("hw_weather","on")!=="off"?!0:null,onchange:D=>vr("hw_weather",D.target.checked?"on":"off")})):null,U("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:Wi},"\u91CD\u7F6E\u4E16\u754C"),t.creative?U("button",{class:"btn",onclick:()=>In("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):U("button",{class:"btn",onclick:ui},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),U("div",{id:"pinbox"}),U("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),U("p",{},U("a",{class:"home-link",href:"../../#s/game",onclick:()=>{Sn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),U("p",{class:"muted small"},"\u7248\u672C "+dc)))}async function In(p){await Sn(),vr("hw_mode",p),f.resetting=!0,location.reload()}function ui(){let p=document.getElementById("pinbox"),E=window.KSParentPin;if(p.innerHTML="",!E||!E.isSet()){p.append(U("div",{class:"pin-ask"},U("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),U("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let I=U("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),D=()=>{let O=wm(E,I.value.trim());O.ok?In("creative"):(Ft(O.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),I.value="")};I.addEventListener("keydown",O=>{O.stopPropagation(),O.key==="Enter"&&D()}),p.append(U("div",{class:"pin-ask"},U("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),U("div",{class:"typerow"},I,U("button",{class:"btn",onclick:D},"\u78BA\u5B9A")))),setTimeout(()=>I.focus(),50)}async function Wi(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){f.resetting=!0,vr("hw_dim","overworld");try{await mm(["hw_coins"])}catch(p){console.warn(p)}location.reload()}}function pe(p){document.pointerLockElement&&document.exitPointerLock(),f.overlay=p,Gn(),p==="inv"?(xc=-1,$n=null,zt()):p==="shop"?Gt():p==="set"?Rn():p==="furnace"?xe():p==="portal"?Ne():p==="trade"?Se():p==="chest"?($n=null,Dt()):p==="map"?bc():p==="ach"?o0():p==="quiz"&&xm(Et.ov,{onAnswer:()=>$e("stele_answers"),onReward:E=>{Ti(w,E),Un(),f.dirtyMeta=!0,Sn()},onClose:()=>{f.overlay=null}})}function he(){Et.ov.hidden=!0,Et.ov.innerHTML="",f.overlay=null,Bt&&(Bt.busy=!1,Bt=null)}let Zn=()=>{Et.btnSnd.textContent=Io()?"\u{1F507}":"\u{1F50A}"};Et.btnSnd.onclick=()=>{ac(),qu(),Zn()},["pointerdown","keydown"].forEach(p=>addEventListener(p,()=>ac(),{capture:!0,once:!0})),Zn(),Et.btnInv.onclick=()=>f.overlay==="inv"?he():pe("inv"),Et.btnShop.onclick=()=>f.overlay==="shop"?he():pe("shop"),Et.btnSet.onclick=()=>f.overlay==="set"?he():pe("set"),Et.btnView.onclick=()=>Ue(),Et.bRide.onclick=()=>Tr(),Et.bMap.onclick=()=>f.overlay==="map"?he():pe("map"),Et.bAch.onclick=()=>f.overlay==="ach"?he():pe("ach");function Ue(){f.view=f.view==="fp"?"tp":"fp",Ft(f.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Jn(){f.ride||(f.fly=!f.fly,f.v.y=0,Et.root.classList.toggle("flying",f.fly),Ft(f.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let bn=new $;function Ls(){let p=Math.cos(f.pitch);return{x:-Math.sin(f.yaw)*p,y:Math.sin(f.pitch),z:-Math.cos(f.yaw)*p}}let Oo=()=>({x:f.p.x,y:f.p.y+1.62+f.eyeOff+(f.ride?Jm[f.ride.kind]:0),z:f.p.z}),yf=p=>p&&!h.flat.liquid[p],_c=p=>h.flat.boxes[p]||(h.flat.shape[p]===4?NM:null);function fi(p,E,I){if(p==="screen"){bn.set(E/innerWidth*2-1,-(I/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize();let ft=mt.position,ut=f.view==="tp"?ft.distanceTo(new $(f.p.x,f.p.y+1.62,f.p.z)):0,ct={x:ft.x,y:ft.y,z:ft.z},bt={x:bn.x,y:bn.y,z:bn.z};f.lastRay={o:ct,d:bt};let Wt=pr(ct,bt,pc+1+ut,_e,yf,_c);return Wt&&(Wt.at={x:ct.x+bt.x*Wt.dist,y:ct.y+bt.y*Wt.dist,z:ct.z+bt.z*Wt.dist}),Wt}let D=Oo(),O=Ls();f.lastRay={o:D,d:O};let Y=pr(D,O,pc,_e,yf,_c);return Y&&(Y.at={x:D.x+O.x*Y.dist,y:D.y+O.y*Y.dist,z:D.z+O.z*Y.dist}),Y}function Gn(){f.mining.active=!1,f.mining.k="",f.mining.t=0,jt.visible=!1}function Km(p,E,I){dn("door");let D=h.get(B.get(p,E,I)),O=h.get(D.openAs||D.closeAs);if(!O)return;let Y=ut=>{let ct=h.get(ut);return ct&&ct.interact==="door"},ft=E;for(;Y(B.get(p,ft-1,I));)ft--;for(let ut=ft;Y(B.get(p,ut,I));ut++)B.set(p,ut,I,O.n);f.dirtyMeta=!0}let vf=()=>{let p=b.slots[f.sel];return p?h.toolOf(p.id):null};function jm(p){let E=p.n,I=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:hc(h.get(E),vf());if(!B.set(p.x,p.y,p.z,0))return;let D=p.x+","+p.y+","+p.z,O=h.get(E);if(F[D]){if(t.drops){for(let ct of F[D].slots)if(ct)for(let bt=0;bt<ct.count;bt++)Tt(ct.id,p.x+.5,p.y+.4,p.z+.5)}delete F[D]}if(O&&O.crop){if(delete V[D],t.drops)for(let ct of Bu(O.stage|0))for(let bt=0;bt<ct.n;bt++)Tt(ct.id,p.x+.5,p.y+.3,p.z+.5);f.stats.harvested=(f.stats.harvested||0)+(O.stage===3?1:0),O.stage===3&&$e("harvested"),f.dirtyMeta=!0;return}let Y=I.harvest?h.dropOf(E):null;Y?Tt(Y,p.x+.5,p.y+.4,p.z+.5):!I.harvest&&!I.creative&&Ft(`${h.name(E)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let ft=B.get(p.x,p.y+1,p.z);if(h.flat.plant[ft]){delete V[p.x+","+(p.y+1)+","+p.z],B.set(p.x,p.y+1,p.z,0);let ct=t.drops&&h.dropOf(ft);ct&&Tt(ct,p.x+.5,p.y+1.3,p.z+.5)}if(h.get(E).interact==="door")for(let ct of[-1,1]){let bt=B.get(p.x,p.y+ct,p.z);h.get(bt)&&h.get(bt).interact==="door"&&B.set(p.x,p.y+ct,p.z,0)}let ut=p.x+","+p.y+","+p.z;if(f.bed&&f.bed.x===p.x&&f.bed.y===p.y&&f.bed.z===p.z&&(f.bed=null,Ft("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),X[ut]){let ct=af(X[ut]);for(let bt in ct)for(let Wt=0;Wt<ct[bt];Wt++)Tt(bt,p.x+.5,p.y+.4,p.z+.5);delete X[ut]}if(I.usesTool){let ct=Po(b,f.sel,h);ct.broke&&Ft(`\u4F60\u7684${h.name(ct.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Le()}f.dirtyMeta=!0,f.stats.mined++,dn("break",xr(O)),$e("mine:"+(O.pattern==="log"?"wood":O.id))}function Ar(p){let E=b.slots[f.sel],I=E&&h.get(E.id);if(I&&I.food)return t.damage?(Gu(A,I.food,20)?(dn("eat"),Ei(b,f.sel,1),Ri(),Le(),f.dirtyMeta=!0,Ft(`\u5403\u4E86${I.name_zh}\uFF0C\u597D\u98FD\uFF01`),f.stats.ate=(f.stats.ate||0)+1):Ft("\u73FE\u5728\u4E0D\u9913"),!0):(Ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(I&&I.id==="shadow_flint"){if(!t.portals)return Ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Kt=h.num("dark_crystal"),ne=p&&p.n===Kt?xu((He,rn,Kn)=>B.get(He,rn,Kn),p.x,p.y,p.z,Kt):null;if(!ne)return Ft("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let Re=h.num("shadow_portal");for(let He of ne)B.set(He[0],He[1],He[2],Re);return Ei(b,f.sel,1),Le(),f.dirtyMeta=!0,Ft(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(I&&I.id==="fishing_rod")return f.fish?i0():n0(),!0;if(I&&I.place==="boat"){if(f.ride)return Ft("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Kt=f.lastRay,ne=Kt&&pr(Kt.o,Kt.d,pc+1,_e,Re=>h.flat.liquid[Re]||h.flat.solid[Re]);return!ne||!h.flat.liquid[ne.n]||B.get(ne.x,ne.y+1,ne.z)?(Ft("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1):(f.p={x:ne.x+.5,y:ne.y+1-.15,z:ne.z+.5},yc("boat",{y:ne.y+1}),!0)}if(I&&I.place==="minecart"){if(f.ride)return Ft("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Kt=p&&h.get(p.n);if(!Kt||!Kt.rail)return Ft("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let ne=ou(Kt.rail,p.x,p.y,p.z,-Math.sin(f.yaw),-Math.cos(f.yaw),Re=>!!pn(p.x+Nn[Re][0],p.y,p.z+Nn[Re][1]));return yc("minecart",{st:ne}),!0}if(!p)return!1;let D=h.get(p.n);if(D&&D.interact==="chest")return dn("chest"),Ps=p.x+","+p.y+","+p.z,pe("chest"),!0;let O=I&&h.toolOf(E.id);if(O&&O.type==="hoe"&&Ou(D.id,!B.get(p.x,p.y+1,p.z)||h.flat.plant[B.get(p.x,p.y+1,p.z)])){if(B.set(p.x,p.y+1,p.z,0),B.set(p.x,p.y,p.z,h.num("farmland")),t.consume){let Kt=Po(b,f.sel,h);Kt.broke&&Ft(`\u4F60\u7684${h.name(Kt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return Le(),f.dirtyMeta=!0,!0}if(I&&I.place==="crop")return D.id!=="farmland"||p.face[1]!==1||B.get(p.x,p.y+1,p.z)?(Ft("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(B.set(p.x,p.y+1,p.z,h.num("wheat_0")),V[p.x+","+(p.y+1)+","+p.z]={t:Date.now(),wet:zu(_e,Kt=>h.flat.liquid[Kt]===1,p.x,p.y,p.z)},t.consume&&Ei(b,f.sel,1),Le(),f.dirtyMeta=!0,f.stats.planted=(f.stats.planted||0)+1,!0);let Y=h.get(p.n);if(Y&&Y.interact==="quiz")return t.coins?(pe("quiz"),!0):(Ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let ft=b.slots[f.sel]&&h.get(b.slots[f.sel].id).placeable;if(Y&&Y.interact==="door")return Km(p.x,p.y,p.z),!0;if(Y&&Y.interact==="portal"&&!ft&&!t.portals)return Ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(Y&&Y.interact==="portal"&&!ft)return Ht=Y.portal,pe("portal"),!0;if(Y&&Y.interact==="bed"&&!ft&&e==="shadow")return Ft("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(Y&&Y.interact==="bed"&&!ft)return f.bed={x:p.x,y:p.y,z:p.z},f.dirtyMeta=!0,$e("bed"),Ft("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(Y&&Y.interact==="craft"&&!ft)return pe("inv"),!0;if(Y&&Y.interact==="furnace"&&!ft)return fe=p.x+","+p.y+","+p.z,pe("furnace"),!0;let ut=b.slots[f.sel];if(!ut)return Ft("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let ct=h.get(ut.id);if(!ct||!ct.placeable)return Ft(`${h.name(ut.id)} \u4E0D\u80FD\u653E`),!1;if(ct.place==="slab"&&ct.fullAs&&p.n===ct.n&&p.face[1]===1&&B.set(p.x,p.y,p.z,h.num(ct.fullAs)))return t.consume&&Ei(b,f.sel,1),Le(),f.stats.placed++,f.dirtyMeta=!0,!0;let bt=h.flat.plant[p.n]&&!h.flat.plant[ct.n],Wt=bt?p.x:p.x+p.face[0],re=bt?p.y:p.y+p.face[1],oe=bt?p.z:p.z+p.face[2];if(re<0||re>=64)return!1;let Ve=B.get(Wt,re,oe);if(Ve&&!h.flat.liquid[Ve]&&!(bt&&h.flat.plant[Ve]))return!1;let Ce=.6/2;if(ct.solid&&Wt+1>f.p.x-Ce&&Wt<f.p.x+Ce&&oe+1>f.p.z-Ce&&oe<f.p.z+Ce&&re+1>f.p.y&&re<f.p.y+1.8)return!1;if(h.flat.plant[ct.n]&&!h.flat.solid[B.get(Wt,re-1,oe)])return Ft(`${ct.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let me=ct.n;if(ct.place==="slab"){let Kt=p.at?p.at.y-Math.floor(p.at.y):0;(p.face[1]===-1||p.face[1]===0&&Kt>.5)&&h.get(ct.id+"_top")&&(me=h.num(ct.id+"_top"))}else if(ct.place==="stairs"){let Kt=-Math.sin(f.yaw),ne=-Math.cos(f.yaw),Re=Math.abs(Kt)>Math.abs(ne)?Kt>0?1:3:ne>0?2:0,He=h.get(ct.id+["","_e","_s","_w"][Re]);He&&(me=He.n)}let ge=null;if(ct.place==="rail"){if(!h.flat.solid[B.get(Wt,re-1,oe)])return Ft("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Kt=-Math.sin(f.yaw),ne=-Math.cos(f.yaw),Re=ru((He,rn)=>pn(He,re,rn),Wt,oe,!!ct.powered,Math.abs(Kt)>Math.abs(ne)?"e":"n");me=h.num(Kl(!!ct.powered,Re.shape)),ge=Re.updates}if(!B.set(Wt,re,oe,me))return!1;if(ge)for(let[Kt,ne,Re]of ge){let He=pn(Kt,re,ne);He&&B.set(Kt,re,ne,h.num(Kl(He.powered,Re)))}return dn("place",xr(ct)),ct.interact==="door"&&!B.get(Wt,re+1,oe)&&B.set(Wt,re+1,oe,ct.n),t.consume&&Ei(b,f.sel,1),f.dirtyMeta=!0,Le(),f.stats.placed++,Mr(Wt,re,oe,ct.id),!0}let Er={},Bo=p=>Er[p]||(Er[p]=(()=>{let E=new Tn({color:p});return E.userData.base=new le(p),E})());function Qm(p){let E=new _n,I=(D,O,Y,ft,ut,ct,bt)=>{let Wt=new Be(new sn(D,O,Y),Bo(ft));Wt.position.set(ut,ct,bt),E.add(Wt)};if(p==="boat"){I(.9,.08,1.5,"#8C6640",0,.04,0);for(let D of[-1,1])I(.08,.3,1.5,"#A97E4E",D*.45,.19,0),I(.9,.3,.08,"#A97E4E",0,.19,D*.75);I(.9,.06,.25,"#C49A63",0,.25,.1)}else{I(.9,.08,1.1,"#5E6660",0,.12,0);for(let D of[-1,1])I(.08,.45,1.1,"#8C8A84",D*.45,.35,0),I(.9,.45,.08,"#8C8A84",0,.35,D*.55),I(.06,.18,.18,"#26302A",D*.47,.1,.35),I(.06,.18,.18,"#26302A",D*.47,.1,-.35)}return E}function Mf(p){p.saddled=!0;let E=Xt.get(p.id);if(!E)return;let I=new Be(new sn(.62,.1,.6),Bo("#5C3A24"));I.position.set(0,1.4,.05),E.add(I)}function yc(p,E){let I=p==="horse"?null:Qm(p);I&&tt.add(I),f.ride=Object.assign({kind:p,obj:I,yaw:f.yaw},E),f.fly=!1,Et.root.classList.remove("flying"),f.v={x:0,y:0,z:0},Et.bRide.hidden=!1,Gn(),$e("ride:"+p),Ft({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[p])}function Tr(p){let E=f.ride;if(E){if(f.ride=null,Et.bRide.hidden=!0,E.obj&&tt.remove(E.obj),E.kind==="horse"&&(E.m.riding=!1),E.kind==="minecart")f.p.y+=.2;else for(let[I,D]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let O={x:f.p.x+I,y:Math.floor(f.p.y+.5),z:f.p.z+D};if(Cp(O,Yt)&&h.flat.solid[B.get(O.x,O.y-1,O.z)]){f.p=O;break}}f.v={x:0,y:0,z:0},f.fallTop=f.p.y,p||Ft("\u4E0B\u4F86\u4E86")}}function t0(p){let E=b.slots[f.sel];if(!p.tame){E&&(E.id==="wheat"||E.id==="apple")?(t.consume&&Ei(b,f.sel,1),Le(),p.fed=(p.fed||0)+1,p.fed>=3?(p.tame=!0,f.horseMob=p,f.dirtyMeta=!0,Ft("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):Ft(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${p.fed}/3\uFF09`)):Ft("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u8A66\u8A66\u770B");return}if(!p.saddled){E&&E.id==="saddle"?(t.consume&&Ei(b,f.sel,1),Le(),Mf(p),f.horseMob=p,f.dirtyMeta=!0,Ft("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):Ft("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}f.ride||(p.riding=!0,f.p={x:p.p.x,y:p.p.y,z:p.p.z},yc("horse",{m:p}),f.stats.rodeHorse=(f.stats.rodeHorse||0)+1)}function e0(p,E,I,D,O,Y,ft){let ut=f.ride;if(ut.kind==="boat"){let ct=(D*I+Y*E)*7,bt=(O*I+ft*E)*7,Wt=1-Math.exp(-2.5*p);f.v.x+=(ct-f.v.x)*Wt,f.v.z+=(bt-f.v.z)*Wt,f.v.y=0;let re=(Ce,me)=>h.flat.liquid[B.get(Ce,ut.y-1,me)]===1&&!h.flat.solid[B.get(Ce,ut.y,me)],oe=f.p.x+f.v.x*p,Ve=f.p.z+f.v.z*p;re(oe+Math.sign(f.v.x)*.6,f.p.z)?f.p.x=oe:f.v.x=0,re(f.p.x,Ve+Math.sign(f.v.z)*.6)?f.p.z=Ve:f.v.z=0,f.p.y=ut.y-.15,Math.hypot(f.v.x,f.v.z)>.3&&(ut.yaw=Math.atan2(-f.v.x,-f.v.z))}else{au(ut.st,p,I,(bt,Wt)=>pn(bt,ut.st.y,Wt));let ct=lu(ut.st);f.p.x=ct.x,f.p.z=ct.z,f.p.y=ut.st.y+.05,ut.yaw=ct.yaw,f.v.x=f.v.z=f.v.y=0}f.fallTop=f.p.y}let vc=(()=>{let p=new _n,E=new Be(new sn(.16,.1,.16),Bo("#E0352B")),I=new Be(new sn(.16,.08,.16),Bo("#EFEBDD"));return E.position.y=.05,I.position.y=-.04,p.add(E,I),p.visible=!1,tt.add(p),p})();function n0(){let p=f.lastRay,E=p&&pr(p.o,p.d,pc+3,_e,I=>h.flat.liquid[I]||h.flat.solid[I]);return!E||!h.flat.liquid[E.n]||B.get(E.x,E.y+1,E.z)?(Ft("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(f.fish=hu(Math.random),f.fish.at={x:E.x+.5,y:E.y+1,z:E.z+.5},vc.visible=!0,Ft("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Mc(){f.fish=null,vc.visible=!1}function i0(){let p=fu(f.fish);if(Mc(),p!=="catch"){Ft("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let E=u.fishing.loot,I=du(E,Math.random);if(I.coins&&!t.coins&&(I=E[0]),I.coins)Ti(w,I.coins),Un(),Ft(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${I.coins} \u91D1\u5E63`);else{let D=Mn(b,I.id,I.n,_);for(let O=0;O<D;O++)Tt(I.id,f.p.x,f.p.y+1,f.p.z);Ft(I.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${h.name(I.id)} \xD7${I.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Po(b,f.sel,h).broke&&Ft("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),Le(),f.dirtyMeta=!0,dn("pickup"),$e("fish"),I.treasure&&$e("treasure")}let Xi=2,zo=yr("hw_minimap","on")!=="off";function s0(p){zo=p,vr("hw_minimap",p?"on":"off"),Et.mini.hidden=!p}Et.mini.hidden=!zo;function r0(){let p=Et.mini,E=p.getContext("2d");E.fillStyle="#D9D3C0",E.fillRect(0,0,p.width,p.height),M.draw(E,f.p.x,f.p.z,2,p.width,p.height),mu(E,p.width/2,p.height/2,f.yaw,7,"#E0352B")}function bc(){let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=Math.max(240,Math.min(innerWidth-60,760)),I=Math.max(200,Math.min(innerHeight-200,540)),D=U("canvas",{class:"bigmap",width:E,height:I}),O=D.getContext("2d");O.fillStyle="#D9D3C0",O.fillRect(0,0,E,I);let{x0:Y,z0:ft}=M.draw(O,f.p.x,f.p.z,Xi,E,I),ut=(oe,Ve)=>[(oe-Y)*Xi,(Ve-ft)*Xi],ct=(oe,Ve,Ce,me,ge)=>{let[Kt,ne]=ut(oe,Ve);Kt<-20||ne<-20||Kt>E+20||ne>I+20||(O.fillStyle=me,O.strokeStyle=me,O.lineWidth=3,ge==="roof"?(O.beginPath(),O.moveTo(Kt-8,ne+1),O.lineTo(Kt,ne-7),O.lineTo(Kt+8,ne+1),O.fill(),O.fillRect(Kt-5,ne+1,10,7)):ge==="ring"?(O.beginPath(),O.arc(Kt,ne,6,0,7),O.stroke()):O.fillRect(Kt-5,ne-5,10,10),O.font="bold 12px sans-serif",O.textAlign="center",O.strokeStyle="#EFEBDD",O.strokeText(Ce,Kt,ne-11),O.fillStyle="#26302A",O.fillText(Ce,Kt,ne-11))},bt=Math.max(E,I)/Xi;for(let oe of T.villages.around(f.p.x-bt,f.p.z-bt,f.p.x+bt,f.p.z+bt))M.explored(oe.x,oe.z)&&ct(oe.x,oe.z,"\u6751\u838A","#8C5A3A","roof");for(let oe of M.portals.values())ct(oe.x+.5,oe.z+.5,oe.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");ct(pt.x,pt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),f.bed&&ct(f.bed.x+.5,f.bed.z+.5,"\u5E8A","#E0352B");let[Wt,re]=ut(f.p.x,f.p.z);mu(O,Wt,re,f.yaw,9,"#E0352B"),p.append(U("div",{class:"panel map"},U("div",{class:"p-head"},U("h2",{},"\u5730\u5716"),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),D,U("div",{class:"row"},U("button",{class:"btn small",onclick:()=>{Xi=Math.min(6,Xi+1),bc()}},"\u653E\u5927"),U("button",{class:"btn small",onclick:()=>{Xi=Math.max(1,Xi-1),bc()}},"\u7E2E\u5C0F"),U("label",{class:"set inline"},U("input",{type:"checkbox",checked:zo?!0:null,onchange:oe=>s0(oe.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),U("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function o0(){let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=N.filter(D=>C.done[D.id]).length,I=U("div",{class:"ach-list"});N.forEach(D=>{let O=!!C.done[D.id];I.append(U("div",{class:"ach-item"+(O?" done":"")},U("i",{class:"badge"}),U("div",{},U("b",{},D.name_zh),U("small",{},D.desc_zh+(O?"\u3000\u2713":`\uFF08${kp(C,D)}/${D.need}\uFF09`)+(D.coins?`\u3000\u734E\u52F5 ${D.coins} \u91D1\u5E63`:"")))))}),p.append(U("div",{class:"panel"},U("div",{class:"p-head"},U("h2",{},`\u6210\u5C31\u3000${E} / ${N.length}`),U("button",{class:"x","aria-label":"\u95DC\u9589",onclick:he},"\xD7")),U("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),I))}async function a0(p){f.travelling||(f.travelling=!0,Tr(!0),Mc(),Gn(),Ft(p==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await Sn(!0),vr("hw_dim",p),f.resetting=!0,location.reload())}function Sc(){let p=f.boss;p&&(Et.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${p.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${bo[p.st.phase].name_zh}`,Et.bossHp.style.width=Math.max(0,p.st.hp/Mo*100)+"%")}function l0(p){if(e!=="shadow"||C.stats.dragon)return;let E=ki,I=Math.hypot(f.p.x-E.x,f.p.z-E.z);if(!f.boss&&I<60&&B.ready(E.x,E.z)){let Y=$p();tt.add(Y),f.boss={g:Y,st:qp(),p:{x:E.x+.5,y:li+1.5,z:E.z+.5},m:{kind:"boss",id:-1},t:0}}let D=f.boss;if(!D)return;D.t+=p,D.g.position.set(D.p.x,D.p.y+Math.sin(D.t*1.6)*.25,D.p.z),D.g.rotation.y=Math.atan2(-(f.p.x-D.p.x),-(f.p.z-D.p.z)),Zp(D.g,D.t,p);let O=I<28;O===Et.bossbar.hidden&&(Et.bossbar.hidden=!O,O&&(Sc(),D.greeted||(D.greeted=!0,Ft("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function c0(){let p=f.boss;if(!p||p.busy)return;p.busy=!0,Gn(),document.pointerLockElement&&document.exitPointerLock(),f.overlay="ask";let E=bo[p.st.phase],I=qt().slice(0,40).sort(()=>Math.random()-.5);Du(Et.ov,{ids:p.st.retry.concat(I),types:E.types,modules:E.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${E.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(D,O,Y)=>{f.overlay=null,p.busy=!1,D!=null&&bf(D,O,Y&&Y.id)}})}function bf(p,E,I){let D=f.boss;if(!D)return;let O=Yp(D.st,p,E,I);if(!p){let Y=f.p.x-D.p.x,ft=f.p.z-D.p.z,ut=Math.hypot(Y,ft)||1;f.v.x=Y/ut*8,f.v.z=ft/ut*8,f.v.y=5,Ft("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Sc();return}if(D.g.userData.hitT=.3,dn("hit","stone"),O.done){h0();return}O.phaseUp!=null?(Jp(D.g,O.phaseUp),Ft(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${O.phaseUp+1} \u968E\u6BB5\uFF1A${bo[O.phaseUp].name_zh}`)):Ft(E?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Sc()}function h0(){tt.remove(f.boss.g),f.boss=null,Et.bossbar.hidden=!0,t.coins&&(Ti(w,yu),Un()),$e("dragon"),Sn(),u0()}function u0(){Gn(),document.pointerLockElement&&document.exitPointerLock(),f.overlay="ending";let p=Et.ov;p.innerHTML="",p.hidden=!1;let E=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${yu} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];p.append(U("div",{class:"ending"},U("div",{class:"paper sun"}),U("div",{class:"paper hill"}),U("div",{class:"paper hill b"}),U("div",{class:"credits"},U("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),E.map(I=>U("p",{},I)),U("button",{class:"btn big",onclick:he},"\u7E7C\u7E8C\u5192\u96AA"))))}addEventListener("keydown",p=>{if(p.target&&p.target.tagName==="INPUT")return;let E=p.key.toLowerCase();if(E==="e"){f.overlay==="inv"?he():!f.overlay&&pe("inv"),p.preventDefault();return}if(f.overlay!=="dead"&&!(f.overlay==="ask"||f.overlay==="quest")){if(E==="escape"&&f.overlay){f.overlay==="quiz"?(Et.ov.hidden=!0,Et.ov.innerHTML="",f.overlay=null):he();return}if(!f.overlay){if(E==="shift"&&f.ride){Tr();return}f.keys[E]=!0,p.code==="Space"&&(f.keys[" "]=!0,p.preventDefault()),E>="1"&&E<="9"&&(f.sel=+E-1,Le()),E==="f"&&Jn(),E==="v"&&Ue(),E==="m"&&pe("map"),E==="k"&&pe("ach")}}}),addEventListener("keyup",p=>{f.keys[p.key.toLowerCase()]=!1,p.code==="Space"&&(f.keys[" "]=!1)}),addEventListener("blur",()=>{f.keys={},Gn()}),nt.addEventListener("mousedown",p=>{if(!(f.touch||f.overlay)){if(document.pointerLockElement!==nt){nt.requestPointerLock&&nt.requestPointerLock();return}if(p.button===0){let E=Jt("center");if(E){Pe(E);return}f.mining.active=!0,f.mining.src="center"}p.button===2&&(Ar(fi("center")),f.placeRepeat=.3,f.rightHeld=!0)}}),addEventListener("mouseup",p=>{p.button===0&&Gn(),p.button===2&&(f.rightHeld=!1)}),nt.addEventListener("contextmenu",p=>p.preventDefault()),addEventListener("mousemove",p=>{document.pointerLockElement===nt&&(f.yaw-=p.movementX*.0024,f.pitch=Math.max(-1.55,Math.min(1.55,f.pitch-p.movementY*.0024)))}),addEventListener("wheel",p=>{f.overlay||f.touch||(f.sel=(f.sel+(p.deltaY>0?1:8))%9,Le())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{Et.root.classList.toggle("locked",document.pointerLockElement===nt)});let Cr=new Map;function f0(p){f.touch!==p&&(f.touch=p,Et.root.classList.toggle("touch",p),document.body.classList.toggle("is-touch",p))}Et.root.classList.toggle("touch",f.touch),document.body.classList.toggle("is-touch",f.touch),nt.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch"||(f0(!0),f.overlay))return;if(p.preventDefault(),p.clientX<innerWidth*.4&&p.clientY>innerHeight*.35&&!f.joy.active){f.joy={x:0,y:0,active:!0,id:p.pointerId,ox:p.clientX,oy:p.clientY},Et.joy.style.transform=`translate(${p.clientX-60}px, ${p.clientY-60}px)`,Et.joy.hidden=!1,Et.knob.style.transform="translate(0px,0px)",Cr.set(p.pointerId,{kind:"joy"});return}let E={kind:"look",x:p.clientX,y:p.clientY,sx:p.clientX,sy:p.clientY,t0:performance.now(),drag:!1,hold:!1};E.timer=setTimeout(()=>{E.drag||(E.hold=!0,f.mining.active=!0,f.mining.src="screen",f.mining.sx=E.x,f.mining.sy=E.y)},280),Cr.set(p.pointerId,E)},{passive:!1}),addEventListener("pointermove",p=>{let E=Cr.get(p.pointerId);if(!E)return;if(E.kind==="joy"){let O=p.clientX-f.joy.ox,Y=p.clientY-f.joy.oy,ft=Math.hypot(O,Y),ut=55;ft>ut&&(O*=ut/ft,Y*=ut/ft),f.joy.x=O/ut,f.joy.y=Y/ut,Et.knob.style.transform=`translate(${O}px,${Y}px)`;return}let I=p.clientX-E.x,D=p.clientY-E.y;E.x=p.clientX,E.y=p.clientY,!E.drag&&Math.hypot(E.x-E.sx,E.y-E.sy)>12&&(E.drag=!0,clearTimeout(E.timer),E.hold&&(Gn(),E.hold=!1)),E.drag?(f.yaw-=I*.0055,f.pitch=Math.max(-1.55,Math.min(1.55,f.pitch-D*.0055))):E.hold&&(f.mining.sx=E.x,f.mining.sy=E.y)});let Sf=p=>{let E=Cr.get(p.pointerId);if(E){if(Cr.delete(p.pointerId),E.kind==="joy"){f.joy={x:0,y:0,active:!1},Et.joy.hidden=!0;return}if(clearTimeout(E.timer),E.hold)Gn();else if(!E.drag&&performance.now()-E.t0<280&&!f.overlay){let I=Jt("screen",E.x,E.y);I?Pe(I):Ar(fi("screen",E.x,E.y))}}};addEventListener("pointerup",Sf),addEventListener("pointercancel",Sf);let wf=(p,E,I)=>{p.addEventListener("pointerdown",D=>{D.preventDefault(),D.stopPropagation(),E()}),p.addEventListener("pointerup",I),p.addEventListener("pointercancel",I),p.addEventListener("pointerleave",I)};wf(Et.bJump,()=>{f.jumpHeld=!0},()=>{f.jumpHeld=!1}),wf(Et.bDown,()=>{f.downHeld=!0},()=>{f.downHeld=!1}),Et.bFly.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),Jn()}),Et.bPlace.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),Ar(fi("center"))}),document.addEventListener("touchmove",p=>{p.target.closest(".scroll, .panel")||p.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(p=>document.addEventListener(p,E=>E.preventDefault(),{passive:!1})),Et.start.hidden=!1,Et.go.onclick=()=>{Et.start.hidden=!0,f.started=!0,f.paused=!1,Et.root.classList.add("started"),!f.touch&&nt.requestPointerLock&&nt.requestPointerLock()};async function Sn(p){if(f.resetting)return;let E={hw_meta:{v:1,seed:x,time:f.time,build:dc},hw_player:{dims:Object.assign({},f.dimPos,{[e]:{x:f.p.x,y:f.p.y,z:f.p.z,yaw:f.yaw}}),x:f.p.x,y:f.p.y,z:f.p.z,yaw:f.yaw,pitch:f.pitch,fly:f.fly,sel:f.sel,hp:A.hp,bed:f.bed,armor:f.armor,armorDur:f.armorDur,horse:f.horseMob&&!f.horseMob.gone?{x:f.horseMob.p.x,y:f.horseMob.p.y,z:f.horseMob.p.z,saddled:!!f.horseMob.saddled}:f.horse},hw_inventory:Eo(b),hw_coins:tm(w),[i("hw_furnaces")]:X,[i("hw_chests")]:Object.fromEntries(Object.entries(F).map(([I,D])=>[I,Eo(D)])),[i("hw_crops")]:V,hw_quests:k,hw_portal_claimed:z.slice(-200),hw_ach:C};M.dirty&&(p||Date.now()-(f.mapSavedAt||0)>3e4)&&(E[i("hw_map")]=M.serialize(),f.mapSavedAt=Date.now());for(let I of f.dirty){let D=L.get(I);D&&(E[s+I]=Eu(D))}f.dirty.clear(),f.dirtyMeta=!1;try{await Iu(E),f.lastSave=Date.now()}catch(I){console.warn("save failed",I)}}setInterval(()=>{f.started&&Sn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&f.started&&Sn(!0)}),addEventListener("pagehide",()=>{f.started&&Sn(!0)}),f.stats={mined:0,placed:0};function Af(){let p=innerWidth,E=innerHeight;J.setSize(p,E,!1),mt.aspect=p/E,mt.updateProjectionMatrix()}addEventListener("resize",Af),Af(),Un(),Le(),Ri(),j(),t.creative&&(Hi("#coinpill").hidden=!0,Hi("#modebadge").hidden=!1,Et.btnShop.hidden=!0,Et.hearts.hidden=!0),Qe(),e==="shadow"&&($e("shadow"),setTimeout(()=>Ft("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",p=>{p.persisted&&Qe()});let Ef=performance.now(),ko=0,wc=0,d0=new le("#EFEBDD"),p0=new le("#22302F"),m0=new le("#E6B48C");function Tf(p){requestAnimationFrame(Tf);let E=(p-Ef)/1e3;Ef=p;let I=Math.min(.05,E);f.frames.push(E*1e3),f.frames.length>4e3&&f.frames.shift(),B.update(f.p.x,f.p.z);let D=B.ready(f.p.x,f.p.z);if(f.auto&&y0(I),f.started&&!f.overlay&&D&&x0(I),f.started&&D&&!f.travelling){let me=h.get(B.get(f.p.x,f.p.y+.2,f.p.z));me&&me.interact==="shadow_portal"?!f.portalLock&&t.portals&&(f.portalT=(f.portalT||0)+I,f.portalT>1&&a0(e==="shadow"?"overworld":"shadow")):(f.portalLock=!1,f.portalT=0)}f.started&&!f.dead&&ff(A,I)&&(Ri(),f.dirtyMeta=!0),f.time=(f.time+I/DM)%1;let O=f.time*Math.PI*2,Y=Math.sin(O),ft=e==="shadow"?.42:Math.min(1,Math.max(0,(Y+.12)/.42));st.copy(p0).lerp(d0,ft);let ut=Math.max(0,1-Math.abs(Y)/.3)*(ft>.05?1:.4);if(st.lerp(m0,ut*.55),e==="shadow"&&st.set("#1C2620"),!(t.creative&&yr("hw_weather","on")==="off")?Qu(f.weather,I):f.weather.level=0,f.ambT=(f.ambT||0)+I,f.ambT>1){f.ambT=0;let me=Math.floor(f.p.x),ge=Math.floor(f.p.z),Kt=!1;for(let Re=2;Re<14&&!Kt;Re++)h.flat.opaque[B.get(me,Math.floor(f.p.y)+Re,ge)]&&(Kt=!0);f.underground=Kt&&f.p.y<T.height(me,ge)-4,f.biome=T.biomeOf(me,ge);let ne=Ju({day:ft,underground:f.underground});ne!==f.musicScene&&(f.musicScene=ne,Yu(Ku[ne]))}let bt=f.underground||e==="shadow"?null:tf(f.biome,f.weather),Wt=bt?f.weather.level:0;Wt&&st.lerp(f.rainSky||(f.rainSky=new le("#8E9590")),.45*Wt),P(I,mt.position,bt),$u(bt==="rain"?Wt:0),fs(f.overlay==="quiz"||f.overlay==="ask"||f.overlay==="quest"),St.uniforms.uDay.value=ft*(1-.3*Wt),St.uniforms.uFog.value.set(...g0(st));let re=Oo();f.eyeOff*=Math.pow(5e-4,I);let oe=Ls();if(f.view==="tp"){let me=pr(re,{x:-oe.x,y:-oe.y,z:-oe.z},4,_e,Kt=>h.flat.opaque[Kt]===1),ge=me?Math.max(.4,me.dist-.25):4;mt.position.set(re.x-oe.x*ge,re.y-oe.y*ge,re.z-oe.z*ge)}else mt.position.set(re.x,re.y,re.z);mt.rotation.set(f.pitch,f.yaw,0);let Ve=mt.far*.8;if(Qt.position.set(mt.position.x+Math.cos(O)*Ve,mt.position.y+Math.sin(O)*Ve,mt.position.z+.25*Ve),Qt.scale.setScalar(Ve*.14),ue.position.set(mt.position.x-Math.cos(O)*Ve,mt.position.y-Math.sin(O)*Ve,mt.position.z-.25*Ve),ue.scale.setScalar(Ve*.1),Qt.visible=ue.visible=e!=="shadow",v.visible=f.view==="tp",v.visible){v.position.set(f.p.x,f.p.y+(f.ride?Jm[f.ride.kind]:0),f.p.z),v.rotation.y=f.yaw;let me=Math.hypot(f.v.x,f.v.z),ge=Math.sin(p/120)*Math.min(1,me/4)*.7;et.rotation.x=ge,ot.rotation.x=-ge,At.rotation.x=-ge,It.rotation.x=ge;let Kt=.35+.65*ft;v.children.forEach(ne=>ne.material.color.copy(ne.userData.base).multiplyScalar(Kt))}for(let me in at)at[me].color.setScalar(.4+.6*ft);for(let me in Er)Er[me].color.copy(Er[me].userData.base).multiplyScalar(.35+.65*ft);f.ride&&f.ride.obj&&(f.ride.obj.position.set(f.p.x,f.p.y,f.p.z),f.ride.obj.rotation.y=f.ride.yaw);let Ce=f.started&&!f.overlay?f.mining.active&&f.mining.src==="screen"?fi("screen",f.mining.sx,f.mining.sy):fi("center"):null;if(Ce){dt.visible=!0;let me=_c(Ce.n);if(me){let ge=1,Kt=1,ne=1,Re=0,He=0,rn=0;for(let Kn of me)ge=Math.min(ge,Kn[0]),Kt=Math.min(Kt,Kn[1]),ne=Math.min(ne,Kn[2]),Re=Math.max(Re,Kn[3]),He=Math.max(He,Kn[4]),rn=Math.max(rn,Kn[5]);dt.scale.set(Re-ge,He-Kt,rn-ne),dt.position.set(Ce.x+(ge+Re)/2,Ce.y+(Kt+He)/2,Ce.z+(ne+rn)/2)}else dt.scale.set(1,1,1),dt.position.set(Ce.x+.5,Ce.y+.5,Ce.z+.5)}else dt.visible=!1;if(f.mining.active&&Ce){let me=Ce.x+","+Ce.y+","+Ce.z;me!==f.mining.k&&(f.mining.k=me,f.mining.t=0),f.mining.t+=I;let ge=t.creative?h.get(Ce.n).hardness<0?1/0:t.breakTime:hc(h.get(Ce.n),vf()).time;if(ge===1/0)jt.visible=!1,f.mining.warned||(Ft(h.name(Ce.n)+"\u6316\u4E0D\u52D5"),f.mining.warned=!0);else{f.mining.tick=(f.mining.tick||0)+I,f.mining.tick>.25&&(f.mining.tick=0,dn("hit",xr(h.get(Ce.n))));let Kt=f.mining.t/ge;jt.visible=!0,jt.position.copy(dt.position),jt.scale.copy(dt.scale),jt.material.map=kt[Math.min(3,Math.floor(Kt*4))],Kt>=1&&(jm(Ce),f.mining.k="",f.mining.t=0,jt.visible=!1)}}else jt.visible=!1,f.mining.active||(f.mining.warned=!1);if(f.rightHeld&&!f.overlay&&(f.placeRepeat-=I,f.placeRepeat<=0&&(Ar(fi("center")),f.placeRepeat=.25)),_0(I),f.fish){let me=uu(f.fish,I),ge=b.slots[f.sel];!ge||ge.id!=="fishing_rod"||Math.hypot(f.p.x-f.fish.at.x,f.p.z-f.fish.at.z)>16?Mc():(me==="bite"?(Ft("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),dn("pickup")):me==="escape"&&Ft("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),vc.position.set(f.fish.at.x,f.fish.at.y-.05+(f.fish.phase==="bite"?-.18:Math.sin(p/400)*.03),f.fish.at.z))}if(f.mapT=(f.mapT||0)+I,f.mapT>.3&&(f.mapT=0,M.scan(B,f.mapDirty),zo&&r0()),f.cropT=(f.cropT||0)+I,f.cropT>2){f.cropT=0;let me=Date.now();for(let ge in V){let[Kt,ne,Re]=ge.split(",").map(Number);if(!B.ready(Kt,Re))continue;let He=h.get(B.get(Kt,ne,Re));if(!He||!He.crop){delete V[ge];continue}let rn=Fu(V[ge].t,me,V[ge].wet);rn>(He.stage|0)&&(B.set(Kt,ne,Re,h.num("wheat_"+rn)),f.dirtyMeta=!0)}}gt(f.overlay?0:I,ft,p),l0(f.overlay?0:I);for(let me in X){let ge=X[me];ge.jobs.length&&(rf(ge,I),f.dirtyMeta=!0,f.overlay==="furnace"&&me===fe&&(f.furnUi=(f.furnUi||0)+I)>.5&&(f.furnUi=0,xe()))}J.render(tt,mt),ko+=E,wc++,ko>.5&&(Et.dbg&&(Et.dbg.textContent=`${Math.round(wc/ko)} fps \xB7 \u5340\u584A ${B.stats.loaded} \xB7 ${Ep[T.biomeOf(Math.floor(f.p.x),Math.floor(f.p.z))]} \xB7 ${f.p.x.toFixed(1)}, ${f.p.y.toFixed(1)}, ${f.p.z.toFixed(1)}`),ko=0,wc=0),!D&&f.started?Et.loading.hidden=!1:Et.loading.hidden=!0}function g0(p){let E=p.getHexString();return[parseInt(E.slice(0,2),16)/255,parseInt(E.slice(2,4),16)/255,parseInt(E.slice(4,6),16)/255]}function x0(p){let E=f.keys,I=(E.d?1:0)-(E.a?1:0),D=(E.w?1:0)-(E.s?1:0);f.joy.active&&(I=f.joy.x,D=-f.joy.y);let O=Math.min(1,Math.hypot(I,D));if(O>0){let rn=Math.hypot(I,D);I=I/rn*O,D=D/rn*O}let Y=-Math.sin(f.yaw),ft=-Math.cos(f.yaw),ut=Math.cos(f.yaw),ct=-Math.sin(f.yaw);if(f.ride&&f.ride.kind!=="horse"){e0(p,I,D,Y,ft,ut,ct);return}let bt=E.control||!f.fly&&E.shift||f.joy.active&&O>.92,Wt=_e(f.p.x,f.p.y+.1,f.p.z),re=_e(f.p.x,f.p.y+1,f.p.z),oe=h.flat.liquid[Wt]===1||h.flat.liquid[re]===1,Ve=f.fly?10:f.ride?8.5:oe?2.6:bt?6.2:4.3,Ce=(Y*D+ut*I)*Ve,me=(ft*D+ct*I)*Ve,ge=E[" "]||f.jumpHeld,Kt=f.fly&&E.shift||f.downHeld;if(f.fly)f.v.x=Ce,f.v.z=me,f.v.y=((ge?1:0)-(Kt?1:0))*8;else{let rn=f.onGround?14:5,Kn=1-Math.exp(-rn*p);f.v.x+=(Ce-f.v.x)*Kn,f.v.z+=(me-f.v.z)*Kn,oe?(f.v.y-=9*p,f.v.y<-3&&(f.v.y=-3),ge&&(f.v.y=3.4)):h.flat.climb[Wt]||h.flat.climb[re]?(f.v.y=ge||D>.1?3.2:Kt?-3:Math.max(f.v.y-28*p,-1.5),f.fallTop=f.p.y):(f.v.y-=28*p,f.v.y<-40&&(f.v.y=-40),ge&&f.onGround&&(f.v.y=f.ride?10.5:8.6,f.onGround=!1))}let ne=f.onGround,Re=Zl(f.p,f.v,p,Yt,{canStep:!f.fly,grounded:f.onGround});if(f.onGround=Re.onGround,Re.stepped&&(f.eyeOff-=Re.stepped),f.fallTop==null||f.fly||oe||f.onGround&&ne?f.fallTop=f.p.y:f.onGround||(f.fallTop=Math.max(f.fallTop,f.p.y)),f.onGround&&!ne){let rn=hf(f.fallTop-f.p.y,{water:oe,flying:f.fly});rn&&(Sr(rn),Ft("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),f.fallTop=f.p.y}let He=Math.hypot(f.v.x,f.v.z);f.onGround&&!f.fly&&He>1&&(f.stepT=(f.stepT||0)+p*He,f.stepT>1.8&&(f.stepT=0,dn("step",xr(h.get(_e(f.p.x,f.p.y-.5,f.p.z)))))),f.p.y<-20&&(f.p={x:pt.x,y:pt.y+1,z:pt.z},f.v={x:0,y:0,z:0},f.fallTop=f.p.y)}function _0(p){let E=f.p.x,I=f.p.y+.9,D=f.p.z;for(let O=f.drops.length-1;O>=0;O--){let Y=f.drops[O];Y.age+=p;let ft=E-Y.p.x,ut=I-Y.p.y,ct=D-Y.p.z,bt=Math.hypot(ft,ut,ct);if(bt<1.5&&Y.age>.25&&Mn(b,Y.id,1,_)===0){tt.remove(Y.s),f.drops.splice(O,1),f.dirtyMeta=!0,Le(),dn("pickup");continue}if(bt<4.5&&Y.age>.25?(Y.v.x=ft/bt*6,Y.v.y=ut/bt*6,Y.v.z=ct/bt*6,Y.p.x+=Y.v.x*p,Y.p.y+=Y.v.y*p,Y.p.z+=Y.v.z*p):(Y.v.y-=18*p,Y.v.x*=.9,Y.v.z*=.9,Zl(Y.p,Y.v,p,Yt,{w:.25,h:.25})),Y.age>300){tt.remove(Y.s),f.drops.splice(O,1);continue}Y.s.position.set(Y.p.x,Y.p.y+.2+Math.sin(Y.age*3)*.06,Y.p.z)}}f.auto=_f.get("auto")==="walk";let Cf=0;function y0(p){f.started||Et.go.click(),Cf+=p,f.keys.w=!0,f.keys[" "]=Cf%1.6<.15,f.yaw+=p*.08}window.HW={build:dc,G:f,reg:h,inv:b,wallet:w,world:B,Inv:Au,Aud:Zu,Amb:ef,chests:F,crops:V,Farm:Xu,clickSlot:S,MODE:n,RULE:t,switchMode:In,questState:k,tradesJson:d,spawnVillagers:Pt,terr:T,claimPortalRewards:Qe,portals:R,claimedIds:z,mobS:wt,mobDefs:Ct,spawnMob:Rt,hitMob:Pe,mobAt:Jt,surfaceY:ce,health:A,hurt:Sr,Health:mf,furnaces:X,Smelt:lf,smeltList:K,recipes:g,craftCtx:Is,breakInfo:hc,start(){Et.go.click()},state(){return{pos:{...f.p},coins:w.coins,inv:Eo(b),loaded:B.stats.loaded,stats:{...f.stats},overlay:f.overlay,fly:f.fly}},lookAt(p,E,I){let D=Oo(),O=p-D.x,Y=E-D.y,ft=I-D.z;f.yaw=Math.atan2(-O,-ft),f.pitch=Math.atan2(Y,Math.hypot(O,ft))},target(){let p=fi("center");return p&&{x:p.x,y:p.y,z:p.z,n:p.n,face:p.face}},mine(p){p?(f.mining.active=!0,f.mining.src="center"):Gn()},use(){return Ar(fi("center"))},key(p,E){f.keys[p]=E},open:pe,close:he,save:Sn,spawn:pt,dismount:Tr,Rail:cu,ach:C,mapv:M,Fish:pu,bump:$e,DIM:e,bossDamage:bf,Shadow:_u,perf(){return{frames:f.frames.slice(),meshMs:B.stats.meshMs.slice(),genMs:B.stats.genMs.slice(),loaded:B.stats.loaded}},resetPerf(){f.frames.length=0,B.stats.meshMs.length=0,B.stats.genMs.length=0},ready:()=>B.ready(f.p.x,f.p.z)},requestAnimationFrame(Tf)}function BM(){let n=Hi("#ui"),t=e=>n.querySelector(e);return _f.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Hi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Hi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Hi("#start"),go:Hi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}OM().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
