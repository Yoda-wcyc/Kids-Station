(()=>{var fd=Object.defineProperty;var rl=(n,t)=>{for(var e in t)fd(n,e,{get:t[e],enumerable:!0})};var Gh=0,Fl=1,Hh=2;var fr=1,Wh=2,_s=3,bi=0,nn=1,yn=2,Xn=0,xs=1,Ol=2,Bl=3,zl=4,Xh=5;var Bi=100,qh=101,Yh=102,$h=103,Zh=104,Jh=200,Kh=201,jh=202,Qh=203,kl=204,Vl=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,ou=212,au=213,lu=214,co=0,ho=1,uo=2,fs=3,fo=4,po=5,mo=6,go=7,Gl=0,cu=1,hu=2,Rn=0,Hl=1,Wl=2,Xl=3,ql=4,Yl=5,$l=6,Zl=7;var Jl=300,wi=301,zi=302,qo=303,Yo=304,dr=306,_o=1e3,kn=1001,xo=1002,We=1003,uu=1004;var pr=1005;var Fe=1006,$o=1007;var Ei=1008;var mn=1009,Kl=1010,jl=1011,ys=1012,Zo=1013,In=1014,Pn=1015,Ln=1016,Jo=1017,Ko=1018,vs=1020,Ql=35902,tc=35899,ec=1021,nc=1022,vn=1023,Vn=1026,Ti=1027,ic=1028,jo=1029,Ai=1030,Qo=1031;var ta=1033,mr=33776,gr=33777,_r=33778,xr=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,la=37488,ca=37489,yr=37490,ha=37491,ua=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,ya=37816,va=37817,Ma=37818,Sa=37819,ba=37820,wa=37821,Ea=36492,Ta=36494,Aa=36495,Ca=36283,Ra=36284,vr=36285,Ia=36286;var Ws=2300,yo=2301,oo=2302,Il=2303,Pl=2400,Ll=2401,Dl=2402;var fu=3200;var sc=0,du=1,ii="",He="srgb",Xs="srgb-linear",qs="linear",ye="srgb";var ao=7680;var pu=519,mu=512,gu=513,_u=514,Pa=515,xu=516,yu=517,La=518,vu=519,rc=35044;var oc="300 es",Tn=2e3,Ys=2001;function dd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mu(){let n=$s("canvas");return n.style.display="block",n}var _h={},ds=null;function Zs(...n){let t="THREE."+n.shift();ds?ds("log",t,...n):console.log(t,...n)}function Su(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Kt(...n){n=Su(n);let t="THREE."+n.shift();if(ds)ds("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function jt(...n){n=Su(n);let t="THREE."+n.shift();if(ds)ds("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ui(...n){let t=n.join(" ");t in _h||(_h[t]=!0,Kt(...n))}function bu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var wu={[co]:ho,[uo]:mo,[fo]:go,[fs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:fs},Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var lo=Math.PI/180,vo=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function md(n,t){return(n%t+t)%t}function ol(n,t,e){return(1-e)*n+e*t}function Bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uc=class uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;var ce=uc,Hn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(h!==y||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*y;m<0&&(f=-f,p=-p,g=-g,y=-y,m=-m);let d=1-a;if(m<.9995){let A=Math.acos(m),P=Math.sin(A);d=Math.sin(d*A)/P,a=Math.sin(a*A)/P,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+y*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+y*a;let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fc=class fc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fc.prototype.isVector3=!0;var q=fc,al=new q,xh=new Hn,dc=class dc{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],y=s[0],m=s[3],d=s[6],A=s[1],P=s[4],w=s[7],E=s[2],T=s[5],D=s[8];return r[0]=o*y+a*A+l*E,r[3]=o*m+a*P+l*T,r[6]=o*d+a*w+l*D,r[1]=c*y+u*A+h*E,r[4]=c*m+u*P+h*T,r[7]=c*d+u*w+h*D,r[2]=f*y+p*A+g*E,r[5]=f*m+p*P+g*T,r[8]=f*d+p*w+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*c-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(t,e)),this}rotate(t){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dc.prototype.isMatrix3=!0;var ne=dc,ll=new ne,yh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){let n={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xs]:{primaries:t,whitePoint:i,transfer:qs,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:yh,fromXYZ:vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),n}var he=gd();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $i,Mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$i===void 0&&($i=$s("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$i}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var xd=0,hl=new q,qe=class n extends Gn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=kn,s=kn,r=Fe,o=Ei,a=vn,l=mn,c=n.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=mi(),this.name="",this.source=new ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Jl;qe.DEFAULT_ANISOTROPY=1;var pc=class pc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,w=(p+1)/2,E=(d+1)/2,T=(u+f)/4,D=(h+y)/4,v=(g+m)/4;return P>w&&P>E?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=T/i,r=D/i):w>E?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=v/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-y)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pc.prototype.isVector4=!0;var Pe=pc,So=class extends Gn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new qe(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends So{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Js=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Xo=class Xo{constructor(t,e,i,s,r,o,a,l,c,u,h,f,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,y,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*h,g=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,p=l*h,g=c*u,y=c*h;e[0]=f+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,p=l*h,g=c*u,y=c*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,p=o*h,g=a*u,y=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,vd)}lookAt(t,e,i){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),hi.crossVectors(i,un),hi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),hi.crossVectors(i,un)),hi.normalize(),Dr.crossVectors(un,hi),s[0]=hi.x,s[4]=Dr.x,s[8]=un.x,s[1]=hi.y,s[5]=Dr.y,s[9]=un.y,s[2]=hi.z,s[6]=Dr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],A=i[3],P=i[7],w=i[11],E=i[15],T=s[0],D=s[4],v=s[8],b=s[12],C=s[1],N=s[5],V=s[9],U=s[13],I=s[2],O=s[6],Y=s[10],B=s[14],st=s[3],W=s[7],it=s[11],rt=s[15];return r[0]=o*T+a*C+l*I+c*st,r[4]=o*D+a*N+l*O+c*W,r[8]=o*v+a*V+l*Y+c*it,r[12]=o*b+a*U+l*B+c*rt,r[1]=u*T+h*C+f*I+p*st,r[5]=u*D+h*N+f*O+p*W,r[9]=u*v+h*V+f*Y+p*it,r[13]=u*b+h*U+f*B+p*rt,r[2]=g*T+y*C+m*I+d*st,r[6]=g*D+y*N+m*O+d*W,r[10]=g*v+y*V+m*Y+d*it,r[14]=g*b+y*U+m*B+d*rt,r[3]=A*T+P*C+w*I+E*st,r[7]=A*D+P*N+w*O+E*W,r[11]=A*v+P*V+w*Y+E*it,r[15]=A*b+P*U+w*B+E*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],d=t[15],A=l*p-c*f,P=a*p-c*h,w=a*f-l*h,E=o*p-c*u,T=o*f-l*u,D=o*h-a*u;return e*(y*A-m*P+d*w)-i*(g*A-m*E+d*T)+s*(g*P-y*E+d*D)-r*(g*w-y*T+m*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],d=t[15],A=e*a-i*o,P=e*l-s*o,w=e*c-r*o,E=i*l-s*a,T=i*c-r*a,D=s*c-r*l,v=u*y-h*g,b=u*m-f*g,C=u*d-p*g,N=h*m-f*y,V=h*d-p*y,U=f*d-p*m,I=A*U-P*V+w*N+E*C-T*b+D*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(a*U-l*V+c*N)*O,t[1]=(s*V-i*U-r*N)*O,t[2]=(y*D-m*T+d*E)*O,t[3]=(f*T-h*D-p*E)*O,t[4]=(l*C-o*U-c*b)*O,t[5]=(e*U-s*C+r*b)*O,t[6]=(m*w-g*D-d*P)*O,t[7]=(u*D-f*w+p*P)*O,t[8]=(o*V-a*C+c*v)*O,t[9]=(i*C-e*V-r*v)*O,t[10]=(g*T-y*w+d*A)*O,t[11]=(h*w-u*T-p*A)*O,t[12]=(a*b-o*N-l*v)*O,t[13]=(e*N-i*b+s*v)*O,t[14]=(y*P-g*E-m*A)*O,t[15]=(u*E-h*P+f*A)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,y=o*u,m=o*h,d=a*h,A=l*c,P=l*u,w=l*h,E=i.x,T=i.y,D=i.z;return s[0]=(1-(y+d))*E,s[1]=(p+w)*E,s[2]=(g-P)*E,s[3]=0,s[4]=(p-w)*T,s[5]=(1-(f+d))*T,s[6]=(m+A)*T,s[7]=0,s[8]=(g+P)*D,s[9]=(m-A)*D,s[10]=(1-(f+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Sn.copy(this);let c=1/o,u=1/a,h=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Tn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Tn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ys)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Tn,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Tn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ys)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Xo.prototype.isMatrix4=!0;var Ie=Xo,Zi=new q,Sn=new Ie,yd=new q(0,0,0),vd=new q(1,1,1),hi=new q,Dr=new q,un=new q,Mh=new Ie,Sh=new Hn,gi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,bh=new q,Ji=new Hn,Jn=new Ie,Nr=new q,Fs=new q,Sd=new q,bd=new Hn,wh=new q(1,0,0),Eh=new q(0,1,0),Th=new q(0,0,1),Ah={type:"added"},wd={type:"removed"},Ki={type:"childadded",child:null},ul={type:"childremoved",child:null},on=class n extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new q,e=new gi,i=new Hn,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ne}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Eh,t)}rotateZ(t){return this.rotateOnAxis(Th,t)}translateOnAxis(t,e){return bh.copy(t).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Eh,t)}translateZ(t){return this.translateOnAxis(Th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nr.copy(t):Nr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Fs,Nr,this.up):Jn.lookAt(Nr,Fs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new q(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ed={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ed)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=md(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function i(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let i=Eu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return he.workingToColorSpace(Ze.copy(this),t),Math.round(fe(Ze.r*255,0,255))*65536+Math.round(fe(Ze.g*255,0,255))*256+Math.round(fe(Ze.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=He){he.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Ur);let i=ol(ui.h,Ur.h,e),s=ol(ui.s,Ur.s,e),r=ol(ui.l,Ur.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new re;re.NAMES=Eu;var js=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new q,Kn=new q,dl=new q,jn=new q,ji=new q,Qi=new q,Ch=new q,pl=new q,ml=new q,gl=new q,_l=new Pe,xl=new Pe,yl=new Pe,zn=class n{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bn.subVectors(s,e),Kn.subVectors(i,e),dl.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(Kn),l=bn.dot(dl),c=Kn.dot(Kn),u=Kn.dot(dl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),xl.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,i),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,i,s){return bn.subVectors(i,e),Kn.subVectors(t,e),bn.cross(Kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,i),Qi.subVectors(r,i),pl.subVectors(t,i);let l=ji.dot(pl),c=Qi.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,s);let u=ji.dot(ml),h=Qi.dot(ml);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ji,o);gl.subVectors(t,r);let p=ji.dot(gl),g=Qi.dot(gl);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Qi,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ch.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Ch,a);let d=1/(m+y+f);return o=y*d,a=f*d,e.copy(i).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_i=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Or.subVectors(this.max,Os),ts.subVectors(t.a,Os),es.subVectors(t.b,Os),ns.subVectors(t.c,Os),fi.subVectors(es,ts),di.subVectors(ns,es),Pi.subVectors(ts,ns);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,di.z,0,-di.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Pi.y,Pi.x,0];return!vl(e,ts,es,ns,Or)||(e=[1,0,0,0,1,0,0,0,1],!vl(e,ts,es,ns,Or))?!1:(Br.crossVectors(fi,di),e=[Br.x,Br.y,Br.z],vl(e,ts,es,ns,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new q,new q,new q,new q,new q,new q,new q,new q],wn=new q,Fr=new _i,ts=new q,es=new q,ns=new q,fi=new q,di=new q,Pi=new q,Os=new q,Or=new q,Br=new q,Li=new q;function vl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Li.fromArray(n,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ue=new q,zr=new ce,Td=0,Be=class extends Gn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qs=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var tr=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var tn=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ad=new _i,Bs=new q,Ml=new q,Fi=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ad.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ml)),this.expandByPoint(Bs.copy(t.center).sub(Ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cd=0,xn=new Ie,Sl=new on,is=new q,fn=new _i,zs=new _i,Ge=new q,en=class n extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?tr:Qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(fn.min,zs.min),fn.expandByPoint(Ge),Ge.addVectors(fn.max,zs.max),fn.expandByPoint(Ge)):(fn.expandByPoint(zs.min),fn.expandByPoint(zs.max))}fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),Ge.add(is)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Be(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new q,l[v]=new q;let c=new q,u=new q,h=new q,f=new ce,p=new ce,g=new ce,y=new q,m=new q;function d(v,b,C){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,C),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[v].add(y),a[b].add(y),a[C].add(y),l[v].add(m),l[b].add(m),l[C].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let v=0,b=A.length;v<b;++v){let C=A[v],N=C.start,V=C.count;for(let U=N,I=N+V;U<I;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let P=new q,w=new q,E=new q,T=new q;function D(v){E.fromBufferAttribute(s,v),T.copy(E);let b=a[v];P.copy(b),P.sub(E.multiplyScalar(E.dot(b))).normalize(),w.crossVectors(T,b);let N=w.dot(l[v])<0?-1:1;o.setXYZW(v,P.x,P.y,P.z,N)}for(let v=0,b=A.length;v<b;++v){let C=A[v],N=C.start,V=C.count;for(let U=N,I=N+V;U<I;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Be(f,u,h)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Qe=new q,er=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bl=new q,Rd=new q,Id=new ne,En=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=bl.subVectors(i,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Id.getNormalMatrix(t),s=this.coplanarPoint(bl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pd=0,ni=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=xs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Vl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new En().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,ks=new q,rs=new q,os=new q,as=new ce,Vs=new ce,Tu=new Ie,kr=new q,Gs=new q,Vr=new q,Rh=new ce,wl=new ce,Ih=new ce,Oi=class extends on{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new en;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wo(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new er(i,3,0,!1)),ss.setAttribute("uv",new er(i,2,3,!1))}this.geometry=ss,this.material=t,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Gr(kr.set(-.5,-.5,0),os,o,rs,s,r),Gr(Gs.set(.5,-.5,0),os,o,rs,s,r),Gr(Vr.set(.5,.5,0),os,o,rs,s,r),Rh.set(0,0),wl.set(1,0),Ih.set(1,1);let a=t.ray.intersectTriangle(kr,Gs,Vr,!1,ks);if(a===null&&(Gr(Gs.set(-.5,.5,0),os,o,rs,s,r),wl.set(0,1),a=t.ray.intersectTriangle(kr,Vr,Gs,!1,ks),a===null))return;let l=t.ray.origin.distanceTo(ks);l<t.near||l>t.far||e.push({distance:l,point:ks.clone(),uv:zn.getInterpolation(ks,kr,Gs,Vr,Rh,wl,Ih,new ce),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Gr(n,t,e,i,s,r){as.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vs.x=r*as.x-s*as.y,Vs.y=s*as.x+r*as.y):Vs.copy(as),n.copy(t),n.x+=Vs.x,n.y+=Vs.y,n.applyMatrix4(Tu)}var ti=new q,El=new q,Hr=new q,Wr=new q,nr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){El.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Wr.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=Wr.dot(this.direction),l=-Wr.dot(Hr),c=Wr.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(El).addScaledVector(Hr,f),p}intersectSphere(t,e){if(t.radius<0)return null;ti.subVectors(t.center,this.origin);let i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,p=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,d=i.x-o.x,A=i.y-o.y,P=i.z-o.z,w=Math.abs(l),E=Math.abs(c),T=Math.abs(u),D,v,b,C,N,V,U,I,O,Y,B,st;if(w>=E&&w>=T?(b=l,V=h,O=g,st=d,l>=0?(D=c,v=u,C=f,N=p,U=y,I=m,Y=A,B=P):(D=u,v=c,C=p,N=f,U=m,I=y,Y=P,B=A)):E>=T?(b=c,V=f,O=y,st=A,c>=0?(D=u,v=l,C=p,N=h,U=m,I=g,Y=P,B=d):(D=l,v=u,C=h,N=p,U=g,I=m,Y=d,B=P)):(b=u,V=p,O=m,st=P,u>=0?(D=l,v=c,C=h,N=f,U=g,I=y,Y=d,B=A):(D=c,v=l,C=f,N=h,U=y,I=g,Y=A,B=d)),b===0)return null;let W=D/b,it=v/b,rt=1/b,vt=C-W*V,mt=N-it*V,St=U-W*O,Mt=I-it*O,_t=Y-W*st,H=B-it*st,tt=_t*Mt-H*St,xt=vt*H-mt*_t,Ut=St*mt-Mt*vt;if(s){if(tt<0||xt<0||Ut<0)return null}else if((tt<0||xt<0||Ut<0)&&(tt>0||xt>0||Ut>0))return null;let dt=tt+xt+Ut;if(dt===0)return null;let Ft=rt*(tt*V+xt*O+Ut*st);return(dt>0?Ft<0:Ft>0)?null:this.at(Ft/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ph=new Ie,Di=new nr,Xr=new Fi,Lh=new q,qr=new q,Yr=new q,$r=new q,Tl=new q,Zr=new q,Dh=new q,Jr=new q,Ne=class extends on{constructor(t=new en,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Tl.fromBufferAttribute(h,t),o?Zr.addScaledVector(Tl,u):Zr.addScaledVector(Tl.sub(e),u))}e.add(Zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Xr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Xr,Lh)===null||Di.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ph.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Ph),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),P=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,E=P;w<E;w+=3){let T=a.getX(w),D=a.getX(w+1),v=a.getX(w+2);s=Kr(this,d,t,i,c,u,h,T,D,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let A=a.getX(m),P=a.getX(m+1),w=a.getX(m+2);s=Kr(this,o,t,i,c,u,h,A,P,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),P=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,E=P;w<E;w+=3){let T=w,D=w+1,v=w+2;s=Kr(this,d,t,i,c,u,h,T,D,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let A=m,P=m+1,w=m+2;s=Kr(this,o,t,i,c,u,h,A,P,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ld(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:n}}function Kr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,qr),n.getVertexPosition(l,Yr),n.getVertexPosition(c,$r);let u=Ld(n,t,e,i,qr,Yr,$r,Dh);if(u){let h=new q;zn.getBarycoord(Dh,qr,Yr,$r,h),s&&(u.uv=zn.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=zn.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,h,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new q,materialIndex:0};zn.getNormal(qr,Yr,$r,f.normal),u.face=f,u.barycoord=h}return u}var Eo=class extends qe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=We,u=We,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new Fi,Dd=new ce(.5,.5),jr=new q,ir=class{constructor(t=new En,e=new En,i=new En,s=new En,r=new En,o=new En){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],d=r[11],A=r[12],P=r[13],w=r[14],E=r[15];if(s[0].setComponents(c-o,p-u,d-g,E-A).normalize(),s[1].setComponents(c+o,p+u,d+g,E+A).normalize(),s[2].setComponents(c+a,p+h,d+y,E+P).normalize(),s[3].setComponents(c-a,p-h,d-y,E-P).normalize(),i)s[4].setComponents(l,f,m,w).normalize(),s[5].setComponents(c-l,p-f,d-m,E-w).normalize();else if(s[4].setComponents(c-l,p-f,d-m,E-w).normalize(),e===Tn)s[5].setComponents(c+l,p+f,d+m,E+w).normalize();else if(e===Ys)s[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=Dd.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gs=class extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},To=new q,Ao=new q,Nh=new Ie,Hs=new nr,Qr=new Fi,Al=new q,Uh=new q,Co=class extends on{constructor(t=new en,e=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)To.fromBufferAttribute(e,s-1),Ao.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new tn(i,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;Nh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let d=u.getX(y),A=u.getX(y+1),P=to(this,t,Hs,l,d,A,y);P&&e.push(P)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(p),d=to(this,t,Hs,l,y,m,g-1);d&&e.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let d=to(this,t,Hs,l,y,y+1,y);d&&e.push(d)}if(this.isLineLoop){let y=to(this,t,Hs,l,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function to(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(To.fromBufferAttribute(a,s),Ao.fromBufferAttribute(a,r),e.distanceSqToSegment(To,Ao,Al,Uh)>i)return;Al.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Al);if(!(c<t.near||c>t.far))return{distance:c,point:Uh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Fh=new q,Oh=new q,sr=class extends Co{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Fh.fromBufferAttribute(e,s),Oh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fh.distanceTo(Oh);t.setAttribute("lineDistance",new tn(i,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rr=class extends qe{constructor(t=[],e=wi,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends qe{constructor(t,e,i=In,s,r,o,a=We,l=We,c,u=Vn,h=1){if(u!==Vn&&u!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ro=class extends yi{constructor(t,e=In,i=wi,s,r,o=We,a=We,l,c=Vn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class n extends en{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2));function g(y,m,d,A,P,w,E,T,D,v,b){let C=w/D,N=E/v,V=w/2,U=E/2,I=T/2,O=D+1,Y=v+1,B=0,st=0,W=new q;for(let it=0;it<Y;it++){let rt=it*N-U;for(let vt=0;vt<O;vt++){let mt=vt*C-V;W[y]=mt*A,W[m]=rt*P,W[d]=I,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[d]=T>0?1:-1,u.push(W.x,W.y,W.z),h.push(vt/D),h.push(1-it/v),B+=1}}for(let it=0;it<v;it++)for(let rt=0;rt<D;rt++){let vt=f+rt+O*it,mt=f+rt+O*(it+1),St=f+(rt+1)+O*(it+1),Mt=f+(rt+1)+O*it;l.push(vt,mt,Mt),l.push(mt,St,Mt),st+=6}a.addGroup(p,st,b),p+=st,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var eo=new q,no=new q,Cl=new q,io=new zn,ar=class extends en{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(lo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:d}=io;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),io.getNormal(Cl),h[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){let P=(A+1)%3,w=h[A],E=h[P],T=io[u[A]],D=io[u[P]],v=`${w}_${E}`,b=`${E}_${w}`;b in f&&f[b]?(Cl.dot(f[b].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(D.x,D.y,D.z)),f[b]=null):v in f||(f[v]={index0:c[A],index1:c[P],normal:Cl.clone()})}}for(let g in f)if(f[g]){let{index0:y,index1:m}=f[g];eo.fromBufferAttribute(a,y),no.fromBufferAttribute(a,m),p.push(eo.x,eo.y,eo.z),p.push(no.x,no.y,no.z)}this.setAttribute("position",new tn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var lr=class n extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let A=d*f-o;for(let P=0;P<c;P++){let w=P*h-r;g.push(w,-A,0),y.push(0,0,1),m.push(P/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let P=A+c*d,w=A+c*(d+1),E=A+1+c*(d+1),T=A+1+c*d;p.push(P,w,T),p.push(w,E,T)}this.setIndex(p),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function ki(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Bh(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Bh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=ki(n[e]);for(let s in i)t[s]=i[s]}return t}function Bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ac(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Au={clone:ki,merge:je},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Io=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Po=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Rl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var vi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Do=class extends vi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,a=2*e-i;break;case Dl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ll:o=t,l=2*i-e;break;case Dl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,A=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,P=(-1-p)*m+(1.5+p)*y+.5*g,w=p*m-p*y;for(let E=0;E!==a;++E)r[E]=d*o[u+E]+A*o[c+E]+P*o[l+E]+w*o[h+E];return r}},No=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Uo=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fo=class extends vi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let f=a*2,p=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],d=p*f+g*2,A=h[d],P=h[d+1],w=t*f+g*2,E=u[w],T=u[w+1],D=Bd(i,e,A,E,s);r[g]=Cu(D,y,P,T,m)}return r}};function Cu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Od(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Bd(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Cu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Od(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Rl(t.settings)&&(i.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case yo:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break;case Il:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Rl(this.settings)&&(zh(this.settings.inTangents,t),zh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&pd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=yo;var Mi=class extends pn{constructor(t,e,i){super(t,e,i)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Ws;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}};Oo.prototype.ValueTypeName="color";var Bo=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}};Bo.prototype.ValueTypeName="number";var zo=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},cr=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends pn{constructor(t,e,i){super(t,e,i)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Ws;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends pn{constructor(t,e,i,s){super(t,e,i,s)}};ko.prototype.ValueTypeName="vector";var Vo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ru=new Vo,Go=class{constructor(t){this.manager=t!==void 0?t:Ru,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=new q,ro=new Hn,On=new q,hr=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(so,ro,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(so,ro,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new q,kh=new ce,Vh=new ce,Je=class extends hr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Vh),e.subVectors(Vh,kh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ur=class extends hr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var cs=-90,hs=1,Ho=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Je(cs,hs,t,e);r.layers=this.layers,this.add(r);let o=new Je(cs,hs,t,e);o.layers=this.layers,this.add(o);let a=new Je(cs,hs,t,e);a.layers=this.layers,this.add(a);let l=new Je(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Je(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wo=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lc="\\[\\]\\.:\\/",zd=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",kd="[^"+lc.replace("\\.","")+"]",Vd=/((?:WC+[\/:])*)/.source.replace("WC",cc),Gd=/(WCOD+)?/.source.replace("WCOD",kd),Hd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),Wd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Xd=new RegExp("^"+Vd+Gd+Hd+Wd+"$"),qd=["material","materials","bones","map"],Nl=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zd,"")}static parseTrackName(t){let e=Xd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Nl;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sx=new Float32Array(1);var mc=class mc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};mc.prototype.isMatrix2=!0;var Ul=mc;function hc(n,t,e,i){let s=Yd(i);switch(e){case ec:return n*t;case ic:return n*t/s.components*s.byteLength;case jo:return n*t/s.components*s.byteLength;case Ai:return n*t*2/s.components*s.byteLength;case Qo:return n*t*2/s.components*s.byteLength;case nc:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case ta:return n*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _r:case xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(n,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(n,8)*Math.max(t,8)/2;case ra:case oa:case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case aa:case yr:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ya:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Ta:case Aa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ca:case Ra:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vr:case Ia:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yd(n){switch(n){case mn:case Kl:return{byteLength:1,components:1};case ys:case jl:case Ln:return{byteLength:2,components:1};case Jo:case Ko:return{byteLength:2,components:4};case In:case Zo:case Pn:return{byteLength:4,components:1};case Ql:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ku(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Zd(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,$p=`uniform sampler2D dfgLUT;
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
}`,Zp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,r0=`#define DISTANCE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,p0=`#define MATCAP
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
}`,m0=`#define MATCAP
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
}`,g0=`#define NORMAL
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
}`,_0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,v0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,b0=`#define TOON
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
}`,w0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,A0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Jd,alphahash_pars_fragment:Kd,alphamap_fragment:jd,alphamap_pars_fragment:Qd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:yp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:bp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Cp,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Ip,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:kp,lights_pars_begin:Vp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:Kp,lightprobes_pars_fragment:jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:fm,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:xm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:bm,opaque_fragment:wm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Cm,dithering_pars_fragment:Rm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Vm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:$m,worldpos_vertex:Zm,background_vert:Jm,background_frag:Km,backgroundCube_vert:jm,backgroundCube_frag:Qm,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distance_vert:s0,distance_frag:r0,equirect_vert:o0,equirect_frag:a0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:h0,meshbasic_frag:u0,meshlambert_vert:f0,meshlambert_frag:d0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:_0,meshphong_vert:x0,meshphong_frag:y0,meshphysical_vert:v0,meshphysical_frag:M0,meshtoon_vert:S0,meshtoon_frag:b0,points_vert:w0,points_frag:E0,shadow_vert:T0,shadow_frag:A0,sprite_vert:C0,sprite_frag:R0},Dt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Yn={basic:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:je([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:je([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new re(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:je([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:je([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:je([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:je([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:je([Dt.common,Dt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:je([Dt.lights,Dt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Yn.physical={uniforms:je([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Da={r:0,b:0,g:0},I0=new Ie,ju=new ne;ju.set(-1,0,0,0,1,0,0,0,1);function P0(n,t,e,i,s,r){let o=new re(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){let w=A.backgroundBlurriness>0;P=t.get(P,w)}return P}function g(A){let P=!1,w=p(A);w===null?m(o,a):w&&w.isColor&&(m(w,1),P=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,P){let w=p(P);w&&(w.isCubeTexture||w.mapping===dr)?(c===void 0&&(c=new Ne(new dn(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:ki(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(P.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ju),c.material.toneMapped=he.getTransfer(w.colorSpace)!==ye,(u!==w||h!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ne(new lr(2,2),new Ke({name:"BackgroundMaterial",uniforms:ki(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=he.getTransfer(w.colorSpace)!==ye,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,h=w.version,f=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,P){A.getRGB(Da,ac(n)),e.buffers.color.setClear(Da.r,Da.g,Da.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,P=1){o.set(A),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,m(o,a)},render:g,addToRenderList:y,dispose:d}}function L0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(N,V,U,I,O){let Y=!1,B=h(N,I,U,V);r!==B&&(r=B,c(r.object)),Y=p(N,I,U,O),Y&&g(N,I,U,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,w(N,V,U,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,V,U,I){let O=I.wireframe===!0,Y=i[V.id];Y===void 0&&(Y={},i[V.id]=Y);let B=N.isInstancedMesh===!0?N.id:0,st=Y[B];st===void 0&&(st={},Y[B]=st);let W=st[U.id];W===void 0&&(W={},st[U.id]=W);let it=W[O];return it===void 0&&(it=f(l()),W[O]=it),it}function f(N){let V=[],U=[],I=[];for(let O=0;O<e;O++)V[O]=0,U[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:U,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,V,U,I){let O=r.attributes,Y=V.attributes,B=0,st=U.getAttributes();for(let W in st)if(st[W].location>=0){let rt=O[W],vt=Y[W];if(vt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(vt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(vt=N.instanceColor)),rt===void 0||rt.attribute!==vt||vt&&rt.data!==vt.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function g(N,V,U,I){let O={},Y=V.attributes,B=0,st=U.getAttributes();for(let W in st)if(st[W].location>=0){let rt=Y[W];rt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor));let vt={};vt.attribute=rt,rt&&rt.data&&(vt.data=rt.data),O[W]=vt,B++}r.attributes=O,r.attributesNum=B,r.index=I}function y(){let N=r.newAttributes;for(let V=0,U=N.length;V<U;V++)N[V]=0}function m(N){d(N,0)}function d(N,V){let U=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;U[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),O[N]!==V&&(n.vertexAttribDivisor(N,V),O[N]=V)}function A(){let N=r.newAttributes,V=r.enabledAttributes;for(let U=0,I=V.length;U<I;U++)V[U]!==N[U]&&(n.disableVertexAttribArray(U),V[U]=0)}function P(N,V,U,I,O,Y,B){B===!0?n.vertexAttribIPointer(N,V,U,O,Y):n.vertexAttribPointer(N,V,U,I,O,Y)}function w(N,V,U,I){y();let O=I.attributes,Y=U.getAttributes(),B=V.defaultAttributeValues;for(let st in Y){let W=Y[st];if(W.location>=0){let it=O[st];if(it===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(it=N.instanceColor)),it!==void 0){let rt=it.normalized,vt=it.itemSize,mt=t.get(it);if(mt===void 0)continue;let St=mt.buffer,Mt=mt.type,_t=mt.bytesPerElement,H=Mt===n.INT||Mt===n.UNSIGNED_INT||it.gpuType===Zo;if(it.isInterleavedBufferAttribute){let tt=it.data,xt=tt.stride,Ut=it.offset;if(tt.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)d(W.location+dt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let dt=0;dt<W.locationSize;dt++)P(W.location+dt,vt/W.locationSize,Mt,rt,xt*_t,(Ut+vt/W.locationSize*dt)*_t,H)}else{if(it.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)d(W.location+tt,it.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let tt=0;tt<W.locationSize;tt++)m(W.location+tt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let tt=0;tt<W.locationSize;tt++)P(W.location+tt,vt/W.locationSize,Mt,rt,vt*_t,vt/W.locationSize*tt*_t,H)}}else if(B!==void 0){let rt=B[st];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(W.location,rt);break;case 3:n.vertexAttrib3fv(W.location,rt);break;case 4:n.vertexAttrib4fv(W.location,rt);break;default:n.vertexAttrib1fv(W.location,rt)}}}}A()}function E(){b();for(let N in i){let V=i[N];for(let U in V){let I=V[U];for(let O in I){let Y=I[O];for(let B in Y)u(Y[B].object),delete Y[B];delete I[O]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let V=i[N.id];for(let U in V){let I=V[U];for(let O in I){let Y=I[O];for(let B in Y)u(Y[B].object),delete Y[B];delete I[O]}}delete i[N.id]}function D(N){for(let V in i){let U=i[V];for(let I in U){let O=U[I];if(O[N.id]===void 0)continue;let Y=O[N.id];for(let B in Y)u(Y[B].object),delete Y[B];delete O[N.id]}}}function v(N){for(let V in i){let U=i[V],I=N.isInstancedMesh===!0?N.id:0,O=U[I];if(O!==void 0){for(let Y in O){let B=O[Y];for(let st in B)u(B[st].object),delete B[st];delete O[Y]}delete U[I],Object.keys(U).length===0&&delete i[V]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function D0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function N0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==vn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let v=D===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==mn&&D!==Pn&&!v&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:w,maxSamples:E,samples:T}}function U0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new En,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let A=r?0:i,P=A*4,w=d.clippingState||null;l.value=w,w=u(g,f,P,p);for(let E=0;E!==P;++E)w[E]=e[E];d.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let d=p+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let P=0,w=p;P!==y;++P,w+=4)o.copy(h[P]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Ss=4,F0=6,O0=20,B0=256,Mr=new ur,Iu=new re,gc=null,_c=0,xc=0,yc=!1,z0=new q,Vi=new q,Ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=z0}=r;gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gc,_c,xc),this._renderer.xr.enabled=yc,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Ln,format:vn,colorSpace:Xs,depthBuffer:!1},s=Pu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=k0(r)),this._blurMaterial=G0(r,t,e),this._ggxMaterial=V0(r,t,e)}return s}_compileMaterial(t){let e=new Ne(new en,t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,i,s,r){let l=new Je(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Iu),h.toneMapping=Rn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new dn,new Cn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,d=!0):(m.color.copy(Iu),d=!0);for(let P=0;P<6;P++){let w=P%3;w===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):w===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));let E=this._cubeSize;Ms(s,w*E,P>2?E:0,E,E),h.setRenderTarget(s),d&&h.render(y,l),h.render(t,l)}h.toneMapping=p,h.autoClear=f,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===wi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Mr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,p=h*f,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Ss?i-g+Ss:0),d=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Ms(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(a,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ms(t,m,d,3*y,2*y),s.setRenderTarget(t),s.render(a,Mr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Ss?s-this._lodMax+Ss:0),f=4*(this._cubeSize-u);Ms(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Mr)}};function k0(n){let t=[],e=[],i=n,s=n-Ss+1+F0;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,p=3,g=new Float32Array(p*f*h),y=new Float32Array(p*f*h);for(let d=0;d<h;d++){let A=d%3*2/3-1,P=d>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(w,p*f*d);for(let E=0;E<f;E++){let T=u[E*2]*2-1,D=u[E*2+1]*2-1;d===0?Vi.set(1,D,T):d===1?Vi.set(-T,1,-D):d===2?Vi.set(-T,D,1):d===3?Vi.set(-1,D,-T):d===4?Vi.set(-T,-1,D):Vi.set(T,D,-1),Vi.toArray(y,(d*f+E)*p)}}let m=new en;m.setAttribute("position",new Be(g,p)),m.setAttribute("outputDirection",new Be(y,p)),e.push(new Ne(m,null)),i>Ss&&i--}return{lodMeshes:e,sizeLods:t}}function Pu(n,t,e){let i=new rn(n,t,e);return i.texture.mapping=dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function V0(n,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function G0(n,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Lu(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Du(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fa=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Xn});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Fe),new Ho(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function H0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===qo||p===Yo)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Fa(g.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let p=f.mapping,g=p===qo||p===Yo,y=p===wi||p===zi;if(g||y){let m=e.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Ua(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let A=f.image;return g&&A&&A.height>0||y&&A&&l(A)?(i===null&&(i=new Ua(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===qo?f.mapping=wi:p===Yo&&(f.mapping=zi),f}function l(f){let p=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function W0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ui("WebGLRenderer: "+i+" extension not supported."),s}}}function X0(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(p!==null){let A=p.array;y=p.version;for(let P=0,w=A.length;P<w;P+=3){let E=A[P+0],T=A[P+1],D=A[P+2];f.push(E,T,T,D,D,E)}}else{let A=g.array;y=g.version;for(let P=0,w=A.length/3-1;P<w;P+=3){let E=P+0,T=P+1,D=P+2;f.push(E,T,T,D,D,E)}}let m=new(g.count>=65535?tr:Qs)(f,1);m.version=y;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function q0(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function c(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,h*o,p),e.update(f,i,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $0(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],P=0;p===!0&&(P=1),g===!0&&(P=2),y===!0&&(P=3);let w=a.attributes.position.count*P,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let T=new Float32Array(w*E*4*h),D=new Js(T,w,E,h);D.type=Pn,D.needsUpdate=!0;let v=P*4;for(let C=0;C<h;C++){let N=m[C],V=d[C],U=A[C],I=w*E*4*C;for(let O=0;O<N.count;O++){let Y=O*v;p===!0&&(s.fromBufferAttribute(N,O),T[I+Y+0]=s.x,T[I+Y+1]=s.y,T[I+Y+2]=s.z,T[I+Y+3]=0),g===!0&&(s.fromBufferAttribute(V,O),T[I+Y+4]=s.x,T[I+Y+5]=s.y,T[I+Y+6]=s.z,T[I+Y+7]=0),y===!0&&(s.fromBufferAttribute(U,O),T[I+Y+8]=s.x,T[I+Y+9]=s.y,T[I+Y+10]=s.z,T[I+Y+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new ce(w,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Z0(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var J0={[Hl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function K0(n,t,e,i,s,r){let o=new rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new en;c.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tn([0,2,0,0,2,0],2));let u=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ne(c,u),f=new ur(-1,1,1,-1,0,1),p=null,g=null,y=!1,m,d=null,A=[],P=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let T=0;T<A.length;T++){let D=A[T];D.setSize&&D.setSize(w,E)}},this.setEffects=function(w){A=w,P=A.length>0&&A[0].isRenderPass===!0;let E=o.width,T=o.height;A.length>0&&a===null&&(a=new rn(E,T,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new rn(E,T,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<A.length;D++){let v=A[D];v.setSize&&v.setSize(E,T)}},this.begin=function(w,E){if(y||w.toneMapping===Rn&&A.length===0)return!1;if(d=E,E!==null){let T=E.width,D=E.height;(o.width!==T||o.height!==D)&&this.setSize(T,D)}return P===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=Rn,!0},this.hasRenderPass=function(){return P},this.end=function(w,E){w.toneMapping=m,y=!0;let T=o,D=a;for(let v=0;v<A.length;v++){let b=A[v];b.enabled!==!1&&(b.render(w,D,T,E),b.needsSwap!==!1&&(T=D,D=D===a?l:a))}if(p!==w.outputColorSpace||g!==w.toneMapping){p=w.outputColorSpace,g=w.toneMapping,u.defines={},he.getTransfer(p)===ye&&(u.defines.SRGB_TRANSFER="");let v=J0[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(d),w.render(h,f),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Qu=new qe,Sc=new yi(1,1),tf=new Js,ef=new bo,nf=new rr,Nu=[],Uu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function ws(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function za(n,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function j0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Q0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Bu.set(i),n.uniformMatrix2fv(this.addr,!1,Bu),ke(e,i)}}function ig(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Ou.set(i),n.uniformMatrix3fv(this.addr,!1,Ou),ke(e,i)}}function sg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),ke(e,i)}}function rg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function cg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function dg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sc.compareFunction=e.isReversedDepthBuffer()?La:Pa,r=Sc):r=Qu,e.setTexture2D(t||r,s)}function pg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ef,s)}function mg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nf,s)}function gg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tf,s)}function _g(n){switch(n){case 5126:return j0;case 35664:return Q0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(n,t){n.uniform1fv(this.addr,t)}function yg(n,t){let e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function vg(n,t){let e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function Mg(n,t){let e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function Sg(n,t){let e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bg(n,t){let e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function wg(n,t){let e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Eg(n,t){n.uniform1iv(this.addr,t)}function Tg(n,t){n.uniform2iv(this.addr,t)}function Ag(n,t){n.uniform3iv(this.addr,t)}function Cg(n,t){n.uniform4iv(this.addr,t)}function Rg(n,t){n.uniform1uiv(this.addr,t)}function Ig(n,t){n.uniform2uiv(this.addr,t)}function Pg(n,t){n.uniform3uiv(this.addr,t)}function Lg(n,t){n.uniform4uiv(this.addr,t)}function Dg(n,t,e){let i=this.cache,s=t.length,r=za(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Sc:o=Qu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ng(n,t,e){let i=this.cache,s=t.length,r=za(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ef,r[o])}function Ug(n,t,e){let i=this.cache,s=t.length,r=za(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nf,r[o])}function Fg(n,t,e){let i=this.cache,s=t.length,r=za(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tf,r[o])}function Og(n){switch(n){case 5126:return xg;case 35664:return yg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}var bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},wc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},Ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},vc=/(\w+)(\])?(\[|\.)?/g;function zu(n,t){n.seq.push(t),n.map[t.id]=t}function Bg(n,t,e){let i=n.name,s=i.length;for(vc.lastIndex=0;;){let r=vc.exec(i),o=vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zu(e,c===void 0?new bc(a,n,t):new wc(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Ec(a),zu(e,h)),e=h}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Bg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ku(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zg=37297,kg=0;function Vg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Vu=new ne;function Gg(n){he._getMatrix(Vu,he.workingColorSpace,n);let t=`mat3( ${Vu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case qs:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vg(n.getShaderSource(t),a)}else return r}function Hg(n,t){let e=Gg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wg={[Hl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[ql]:"ACESFilmic",[$l]:"AgX",[Zl]:"Neutral",[Yl]:"Custom"};function Xg(n,t){let e=Wg[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Na=new q;function qg(){he.getLuminanceCoefficients(Na);let n=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function $g(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function br(n){return n!==""}function Hu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(n){return n.replace(Jg,jg)}var Kg=new Map;function jg(n,t){let e=oe[t];if(e===void 0){let i=Kg.get(t);if(i!==void 0)e=oe[i],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tc(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(Qg,t_)}function t_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var e_={[fr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function n_(n){return e_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i_={[wi]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE_UV"};function s_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":i_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var r_={[zi]:"ENVMAP_MODE_REFRACTION"};function o_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":r_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[cu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function l_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":a_[n.combine]||"ENVMAP_BLENDING_NONE"}function c_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function h_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=n_(e),c=s_(e),u=o_(e),h=l_(e),f=c_(e),p=Yg(e),g=$g(r),y=s.createProgram(),m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),d.length>0&&(d+=`
`)):(m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=Tc(o),o=Hu(o,e),o=Wu(o,e),a=Tc(a),a=Hu(a,e),a=Wu(a,e),o=Xu(o),a=Xu(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=A+m+o,w=A+d+a,E=ku(s,s.VERTEX_SHADER,P),T=ku(s,s.FRAGMENT_SHADER,w);s.attachShader(y,E),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(N){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(y)||"",U=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(T)||"",O=V.trim(),Y=U.trim(),B=I.trim(),st=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,E,T);else{let it=Gu(s,E,"vertex"),rt=Gu(s,T,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+it+`
`+rt)}else O!==""?Kt("WebGLProgram: Program Info Log:",O):(Y===""||B==="")&&(W=!1);W&&(N.diagnostics={runnable:st,programLog:O,vertexShader:{log:Y,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(E),s.deleteShader(T),v=new bs(s,y),b=Zg(s,y)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,zg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=T,this}var u_=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Cc(t),e.set(t,i)),i}},Cc=class{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}};function f_(n){return n===Ai||n===yr||n===vr}function d_(n,t,e,i,s,r){let o=new Ks,a=new Ac,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,b,C,N,V,U){let I=N.fog,O=V.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,st=t.get(v.envMap||Y,B),W=st&&st.mapping===dr?st.image.height:null,it=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,vt=rt!==void 0?rt.length:0,mt=0;O.morphAttributes.position!==void 0&&(mt=1),O.morphAttributes.normal!==void 0&&(mt=2),O.morphAttributes.color!==void 0&&(mt=3);let St,Mt,_t,H;if(it){let ve=Yn[it];St=ve.vertexShader,Mt=ve.fragmentShader}else{St=v.vertexShader,Mt=v.fragmentShader;let ve=a.getVertexShaderStage(v),de=a.getFragmentShaderStage(v);a.update(v,ve,de),_t=ve.id,H=de.id}let tt=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Ut=V.isInstancedMesh===!0,dt=V.isBatchedMesh===!0,Ft=!!v.map,Qt=!!v.matcap,zt=!!st,$t=!!v.aoMap,te=!!v.lightMap,Bt=!!v.bumpMap&&v.wireframe===!1,ee=!!v.normalMap,we=!!v.displacementMap,Ae=!!v.emissiveMap,_e=!!v.metalnessMap,xe=!!v.roughnessMap,k=v.anisotropy>0,Ce=v.clearcoat>0,ue=v.dispersion>0,R=v.retroreflectivity>0,_=v.iridescence>0,X=v.sheen>0,j=v.transmission>0,at=k&&!!v.anisotropyMap,ot=Ce&&!!v.clearcoatMap,ft=Ce&&!!v.clearcoatNormalMap,lt=Ce&&!!v.clearcoatRoughnessMap,ut=_&&!!v.iridescenceMap,Et=_&&!!v.iridescenceThicknessMap,Yt=X&&!!v.sheenColorMap,Rt=X&&!!v.sheenRoughnessMap,At=!!v.specularMap,Pt=!!v.specularColorMap,Zt=!!v.specularIntensityMap,ie=j&&!!v.transmissionMap,G=j&&!!v.thicknessMap,wt=!!v.gradientMap,ht=!!v.alphaMap,Ct=v.alphaTest>0,Nt=!!v.alphaHash,pt=!!v.extensions,Xt=Rn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let kt={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:St,fragmentShader:Mt,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:dt,batchingColor:dt&&V._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&V.instanceColor!==null,instancingMorph:Ut&&V.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ft,matcap:Qt,envMap:zt,envMapMode:zt&&st.mapping,envMapCubeUVHeight:W,aoMap:$t,lightMap:te,bumpMap:Bt,normalMap:ee,displacementMap:we,emissiveMap:Ae,normalMapObjectSpace:ee&&v.normalMapType===du,normalMapTangentSpace:ee&&v.normalMapType===sc,packedNormalMap:ee&&v.normalMapType===sc&&f_(v.normalMap.format),metalnessMap:_e,roughnessMap:xe,anisotropy:k,anisotropyMap:at,clearcoat:Ce,clearcoatMap:ot,clearcoatNormalMap:ft,clearcoatRoughnessMap:lt,dispersion:ue,retroreflection:R,iridescence:_,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:Yt,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:Pt,specularIntensityMap:Zt,transmission:j,transmissionMap:ie,thicknessMap:G,gradientMap:wt,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:Ct,alphaHash:Nt,combine:v.combine,mapUv:Ft&&g(v.map.channel),aoMapUv:$t&&g(v.aoMap.channel),lightMapUv:te&&g(v.lightMap.channel),bumpMapUv:Bt&&g(v.bumpMap.channel),normalMapUv:ee&&g(v.normalMap.channel),displacementMapUv:we&&g(v.displacementMap.channel),emissiveMapUv:Ae&&g(v.emissiveMap.channel),metalnessMapUv:_e&&g(v.metalnessMap.channel),roughnessMapUv:xe&&g(v.roughnessMap.channel),anisotropyMapUv:at&&g(v.anisotropyMap.channel),clearcoatMapUv:ot&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(v.sheenRoughnessMap.channel),specularMapUv:At&&g(v.specularMap.channel),specularColorMapUv:Pt&&g(v.specularColorMap.channel),specularIntensityMapUv:Zt&&g(v.specularIntensityMap.channel),transmissionMapUv:ie&&g(v.transmissionMap.channel),thicknessMapUv:G&&g(v.thicknessMap.channel),alphaMapUv:ht&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ee||k),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(Ft||ht),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ee===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ft&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===ye,decodeVideoTextureEmissive:Ae&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&v.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function m(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(d(b,v),A(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function A(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function P(v){let b=p[v.type],C;if(b){let N=Yn[b];C=Au.clone(N.uniforms)}else C=v.uniforms;return C}function w(v,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new h_(n,b,v,s),c.push(C),u.set(b,C)),C}function E(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function D(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:P,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:D}}function p_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function m_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $u(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,y,m,d){let A=n[t];return A===void 0?(A={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:d},n[t]=A):(A.id=f.id,A.object=f,A.geometry=p,A.material=g,A.materialVariant=o(f),A.groupOrder=y,A.renderOrder=f.renderOrder,A.z=m,A.group=d),t++,A}function l(f,p,g,y,m,d,A){A.reversedDepth===!0&&(m=-m);let P=a(f,p,g,y,m,d);g.transmission>0?i.push(P):g.transparent===!0?s.push(P):e.push(P)}function c(f,p,g,y,m,d){let A=a(f,p,g,y,m,d);g.transmission>0?i.unshift(A):g.transparent===!0?s.unshift(A):e.unshift(A)}function u(f,p){e.length>1&&e.sort(f||m_),i.length>1&&i.sort(p||Yu),s.length>1&&s.sort(p||Yu)}function h(){for(let f=t,p=n.length;f<p;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function g_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new $u,n.set(i,[o])):s>=r.length?(o=new $u,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function __(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new re};break;case"SpotLight":e={position:new q,direction:new q,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function x_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var y_=0;function v_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function M_(n){let t=new __,e=x_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);let s=new q,r=new Ie,o=new Ie;function a(c){let u=0,h=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,A=0,P=0,w=0,E=0,T=0,D=0,v=0,b=0,C=0;c.sort(v_);for(let V=0,U=c.length;V<U;V++){let I=c[V],O=I.color,Y=I.intensity,B=I.distance,st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ai?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*Y,h+=O.g*Y,f+=O.b*Y;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],Y);C++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=rt,i.sunShadowMap[g]=st;let vt=it.getViewportCount();for(let mt=0;mt<vt;mt++)i.sunShadowMatrix[y+mt]=it.getMatrix(mt),i.sunShadowCascade[y+mt]=it._cascadeData[mt];y+=vt,g++}i.sun[p]=W,p++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar(Y),W.distance=B,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[A]=W;let it=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,it.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[A]=it.matrix,I.castShadow){let rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.spotShadow[A]=rt,i.spotShadowMap[A]=st,D++}A++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(O).multiplyScalar(Y),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[P]=W,P++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let it=I.shadow,rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,rt.shadowCameraNear=it.camera.near,rt.shadowCameraFar=it.camera.far,i.pointShadow[d]=rt,i.pointShadowMap[d]=st,i.pointShadowMatrix[d]=I.shadow.matrix,T++}i.point[d]=W,d++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(Y),W.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[w]=W,w++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==A||N.rectAreaLength!==P||N.hemiLength!==w||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==D||N.numSpotMaps!==v||N.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=A,i.rectArea.length=P,i.point.length=d,i.hemi.length=w,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+v-b,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=A,N.rectAreaLength=P,N.hemiLength=w,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=D,N.numSpotMaps=v,N.numLightProbes=C,i.version=y_++)}function l(c,u){let h=0,f=0,p=0,g=0,y=0,m=0,d=u.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){let w=c[A];if(w.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),h++}else if(w.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(w.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(w.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(w.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),p++}else if(w.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:i}}function Zu(n){let t=new M_(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function S_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Zu(n),t.set(s,[a])):r>=o.length?(a=new Zu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,E_=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],T_=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Ju=new Ie,Sr=new q,Mc=new q;function A_(n,t,e){let i=new ir,s=new ce,r=new ce,o=new Pe,a=new Po,l=new Lo,c={},u=e.maxTextureSize,h={[bi]:nn,[nn]:bi,[yn]:yn},f=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:b_,fragmentShader:w_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let d=this.type;this.render=function(T,D,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Wh&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fr);let b=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Xn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let U=d!==this.type;U&&D.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=T.length;I<O;I++){let Y=T[I],B=Y.shadow;if(B===void 0){Kt("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let st=B.getFrameExtents();s.multiply(st),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,B.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_s){if(Y.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new rn(s.x,s.y,{format:Ai,type:Ln,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new yi(s.x,s.y,Pn),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=Vn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=We,B.map.depthTexture.magFilter=We}else Y.isPointLight?(B.map=new Fa(s.x),B.map.depthTexture=new Ro(s.x,In)):(B.map=new rn(s.x,s.y),B.map.depthTexture=new yi(s.x,s.y,In)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=Vn,this.type===fr?(B.map.depthTexture.compareFunction=W?La:Pa,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=We,B.map.depthTexture.magFilter=We);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let it=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Y.isPointLight!==!0&&B.updateMatrices(Y,v);for(let rt=0;rt<it;rt++){let vt=B.getCamera(rt);if(Y.isPointLight){let mt=B.camera,St=B.matrix,Mt=Y.distance||mt.far;Mt!==mt.far&&(mt.far=Mt,mt.updateProjectionMatrix()),Sr.setFromMatrixPosition(Y.matrixWorld),mt.position.copy(Sr),Mc.copy(mt.position),Mc.add(E_[rt]),mt.up.copy(T_[rt]),mt.lookAt(Mc),mt.updateMatrixWorld(),St.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Ju.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ju,mt.coordinateSystem,mt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(B.map),n.clear());let mt=B.getViewport(rt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),V.viewport(o)}i=B.getFrustum(rt),w(D,v,vt,Y,this.type)}B.isPointLightShadow!==!0&&this.type===_s&&A(B,v),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,C,N)};function A(T,D){let v=t.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new rn(s.x,s.y,{format:Ai,type:Ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,v,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,v,p,y,null)}function P(T,D,v,b){let C=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=v.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=C.uuid,U=D.uuid,I=c[V];I===void 0&&(I={},c[V]=I);let O=I[U];O===void 0&&(O=C.clone(),I[U]=O,D.addEventListener("dispose",E)),C=O}if(C.visible=D.visible,C.wireframe=D.wireframe,b===_s?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:h[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let V=n.properties.get(C);V.light=v}return C}function w(T,D,v,b,C){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===_s)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let U=t.update(T),I=T.material;if(Array.isArray(I)){let O=U.groups;for(let Y=0,B=O.length;Y<B;Y++){let st=O[Y],W=I[st.materialIndex];if(W&&W.visible){let it=P(T,W,b,C);T.onBeforeShadow(n,T,D,v,U,it,st),n.renderBufferDirect(v,null,U,it,T,st),T.onAfterShadow(n,T,D,v,U,it,st)}}}else if(I.visible){let O=P(T,I,b,C);T.onBeforeShadow(n,T,D,v,U,O,null),n.renderBufferDirect(v,null,U,O,T,null),T.onAfterShadow(n,T,D,v,U,O,null)}}let V=T.children;for(let U=0,I=V.length;U<I;U++)w(V[U],D,v,b,C)}function E(T){T.target.removeEventListener("dispose",E);for(let v in c){let b=c[v],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function C_(n,t){function e(){let G=!1,wt=new Pe,ht=null,Ct=new Pe(0,0,0,0);return{setMask:function(Nt){ht!==Nt&&!G&&(n.colorMask(Nt,Nt,Nt,Nt),ht=Nt)},setLocked:function(Nt){G=Nt},setClear:function(Nt,pt,Xt,kt,ve){ve===!0&&(Nt*=kt,pt*=kt,Xt*=kt),wt.set(Nt,pt,Xt,kt),Ct.equals(wt)===!1&&(n.clearColor(Nt,pt,Xt,kt),Ct.copy(wt))},reset:function(){G=!1,ht=null,Ct.set(-1,0,0,0)}}}function i(){let G=!1,wt=!1,ht=null,Ct=null,Nt=null;return{setReversed:function(pt){if(wt!==pt){let Xt=t.get("EXT_clip_control");pt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),wt=pt;let kt=Nt;Nt=null,this.setClear(kt)}},getReversed:function(){return wt},setTest:function(pt){pt?tt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(pt){ht!==pt&&!G&&(n.depthMask(pt),ht=pt)},setFunc:function(pt){if(wt&&(pt=wu[pt]),Ct!==pt){switch(pt){case co:n.depthFunc(n.NEVER);break;case ho:n.depthFunc(n.ALWAYS);break;case uo:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case fo:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case mo:n.depthFunc(n.GREATER);break;case go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=pt}},setLocked:function(pt){G=pt},setClear:function(pt){Nt!==pt&&(Nt=pt,wt&&(pt=1-pt),n.clearDepth(pt))},reset:function(){G=!1,ht=null,Ct=null,Nt=null,wt=!1}}}function s(){let G=!1,wt=null,ht=null,Ct=null,Nt=null,pt=null,Xt=null,kt=null,ve=null;return{setTest:function(de){G||(de?tt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(de){wt!==de&&!G&&(n.stencilMask(de),wt=de)},setFunc:function(de,sn,gn){(ht!==de||Ct!==sn||Nt!==gn)&&(n.stencilFunc(de,sn,gn),ht=de,Ct=sn,Nt=gn)},setOp:function(de,sn,gn){(pt!==de||Xt!==sn||kt!==gn)&&(n.stencilOp(de,sn,gn),pt=de,Xt=sn,kt=gn)},setLocked:function(de){G=de},setClear:function(de){ve!==de&&(n.clearStencil(de),ve=de)},reset:function(){G=!1,wt=null,ht=null,Ct=null,Nt=null,pt=null,Xt=null,kt=null,ve=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},p=new WeakMap,g=[],y=null,m=!1,d=null,A=null,P=null,w=null,E=null,T=null,D=null,v=new re(0,0,0),b=0,C=!1,N=null,V=null,U=null,I=null,O=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,st=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=st>=1):W.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=st>=2);let it=null,rt={},vt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),St=new Pe().fromArray(vt),Mt=new Pe().fromArray(mt);function _t(G,wt,ht,Ct){let Nt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(G,pt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<ht;Xt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,Nt):n.texImage2D(wt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Nt);return pt}let H={};H[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),o.setFunc(fs),Bt(!1),ee(Fl),tt(n.CULL_FACE),$t(Xn);function tt(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function xt(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Ut(G,wt){return f[G]!==wt?(n.bindFramebuffer(G,wt),f[G]=wt,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=wt),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function dt(G,wt){let ht=g,Ct=!1;if(G){ht=p.get(wt),ht===void 0&&(ht=[],p.set(wt,ht));let Nt=G.textures;if(ht.length!==Nt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Xt=Nt.length;pt<Xt;pt++)ht[pt]=n.COLOR_ATTACHMENT0+pt;ht.length=Nt.length,Ct=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(ht)}function Ft(G){return y!==G?(n.useProgram(G),y=G,!0):!1}let Qt={[Bi]:n.FUNC_ADD,[qh]:n.FUNC_SUBTRACT,[Yh]:n.FUNC_REVERSE_SUBTRACT};Qt[$h]=n.MIN,Qt[Zh]=n.MAX;let zt={[Jh]:n.ZERO,[Kh]:n.ONE,[jh]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[su]:n.SRC_ALPHA_SATURATE,[nu]:n.DST_COLOR,[tu]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[iu]:n.ONE_MINUS_DST_COLOR,[eu]:n.ONE_MINUS_DST_ALPHA,[ru]:n.CONSTANT_COLOR,[ou]:n.ONE_MINUS_CONSTANT_COLOR,[au]:n.CONSTANT_ALPHA,[lu]:n.ONE_MINUS_CONSTANT_ALPHA};function $t(G,wt,ht,Ct,Nt,pt,Xt,kt,ve,de){if(G===Xn){m===!0&&(xt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),G!==Xh){if(G!==d||de!==C){if((A!==Bi||E!==Bi)&&(n.blendEquation(n.FUNC_ADD),A=Bi,E=Bi),de)switch(G){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:jt("WebGLState: Invalid blending: ",G);break}else switch(G){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",G);break}P=null,w=null,T=null,D=null,v.set(0,0,0),b=0,d=G,C=de}return}Nt=Nt||wt,pt=pt||ht,Xt=Xt||Ct,(wt!==A||Nt!==E)&&(n.blendEquationSeparate(Qt[wt],Qt[Nt]),A=wt,E=Nt),(ht!==P||Ct!==w||pt!==T||Xt!==D)&&(n.blendFuncSeparate(zt[ht],zt[Ct],zt[pt],zt[Xt]),P=ht,w=Ct,T=pt,D=Xt),(kt.equals(v)===!1||ve!==b)&&(n.blendColor(kt.r,kt.g,kt.b,ve),v.copy(kt),b=ve),d=G,C=!1}function te(G,wt){G.side===yn?xt(n.CULL_FACE):tt(n.CULL_FACE);let ht=G.side===nn;wt&&(ht=!ht),Bt(ht),G.blending===xs&&G.transparent===!1?$t(Xn):$t(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Ct=G.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(G){N!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),N=G)}function ee(G){G!==Gh?(tt(n.CULL_FACE),G!==V&&(G===Fl?n.cullFace(n.BACK):G===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),V=G}function we(G){G!==U&&(B&&n.lineWidth(G),U=G)}function Ae(G,wt,ht){G?(tt(n.POLYGON_OFFSET_FILL),(I!==wt||O!==ht)&&(I=wt,O=ht,o.getReversed()&&(wt=-wt),n.polygonOffset(wt,ht))):xt(n.POLYGON_OFFSET_FILL)}function _e(G){G?tt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function xe(G){G===void 0&&(G=n.TEXTURE0+Y-1),it!==G&&(n.activeTexture(G),it=G)}function k(G,wt,ht){ht===void 0&&(it===null?ht=n.TEXTURE0+Y-1:ht=it);let Ct=rt[ht];Ct===void 0&&(Ct={type:void 0,texture:void 0},rt[ht]=Ct),(Ct.type!==G||Ct.texture!==wt)&&(it!==ht&&(n.activeTexture(ht),it=ht),n.bindTexture(G,wt||H[G]),Ct.type=G,Ct.texture=wt)}function Ce(){let G=rt[it];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function _(){try{n.texSubImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function X(){try{n.texSubImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function ot(){try{n.texStorage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function ft(){try{n.texStorage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function lt(){try{n.texImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function ut(){try{n.texImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function Et(G){return h[G]!==void 0?h[G]:n.getParameter(G)}function Yt(G,wt){h[G]!==wt&&(n.pixelStorei(G,wt),h[G]=wt)}function Rt(G){St.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),St.copy(G))}function At(G){Mt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Mt.copy(G))}function Pt(G,wt){let ht=c.get(wt);ht===void 0&&(ht=new WeakMap,c.set(wt,ht));let Ct=ht.get(G);Ct===void 0&&(Ct=n.getUniformBlockIndex(wt,G.name),ht.set(G,Ct))}function Zt(G,wt){let Ct=c.get(wt).get(G);l.get(wt)!==Ct&&(n.uniformBlockBinding(wt,Ct,G.__bindingPointIndex),l.set(wt,Ct))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},it=null,rt={},f={},p=new WeakMap,g=[],y=null,m=!1,d=null,A=null,P=null,w=null,E=null,T=null,D=null,v=new re(0,0,0),b=0,C=!1,N=null,V=null,U=null,I=null,O=null,St.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:xt,bindFramebuffer:Ut,drawBuffers:dt,useProgram:Ft,setBlending:$t,setMaterial:te,setFlipSided:Bt,setCullFace:ee,setLineWidth:we,setPolygonOffset:Ae,setScissorTest:_e,activeTexture:xe,bindTexture:k,unbindTexture:Ce,compressedTexImage2D:ue,compressedTexImage3D:R,texImage2D:lt,texImage3D:ut,pixelStorei:Yt,getParameter:Et,updateUBOMapping:Pt,uniformBlockBinding:Zt,texStorage2D:ot,texStorage3D:ft,texSubImage2D:_,texSubImage3D:X,compressedTexSubImage2D:j,compressedTexSubImage3D:at,scissor:Rt,viewport:At,reset:ie}}function R_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,_){return g?new OffscreenCanvas(R,_):$s("canvas")}function m(R,_,X){let j=1,at=ue(R);if((at.width>X||at.height>X)&&(j=X/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ot=Math.floor(j*at.width),ft=Math.floor(j*at.height);f===void 0&&(f=y(ot,ft));let lt=_?y(ot,ft):f;return lt.width=ot,lt.height=ft,lt.getContext("2d").drawImage(R,0,0,ot,ft),Kt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+ot+"x"+ft+")."),lt}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function d(R){return R.generateMipmaps}function A(R){n.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,_,X,j,at,ot=!1){if(R!==null){if(n[R]!==void 0)return n[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ft;j&&(ft=t.get("EXT_texture_norm16"),ft||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=_;if(_===n.RED&&(X===n.FLOAT&&(lt=n.R32F),X===n.HALF_FLOAT&&(lt=n.R16F),X===n.UNSIGNED_BYTE&&(lt=n.R8),X===n.UNSIGNED_SHORT&&ft&&(lt=ft.R16_EXT),X===n.SHORT&&ft&&(lt=ft.R16_SNORM_EXT)),_===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.R8UI),X===n.UNSIGNED_SHORT&&(lt=n.R16UI),X===n.UNSIGNED_INT&&(lt=n.R32UI),X===n.BYTE&&(lt=n.R8I),X===n.SHORT&&(lt=n.R16I),X===n.INT&&(lt=n.R32I)),_===n.RG&&(X===n.FLOAT&&(lt=n.RG32F),X===n.HALF_FLOAT&&(lt=n.RG16F),X===n.UNSIGNED_BYTE&&(lt=n.RG8),X===n.UNSIGNED_SHORT&&ft&&(lt=ft.RG16_EXT),X===n.SHORT&&ft&&(lt=ft.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RG8UI),X===n.UNSIGNED_SHORT&&(lt=n.RG16UI),X===n.UNSIGNED_INT&&(lt=n.RG32UI),X===n.BYTE&&(lt=n.RG8I),X===n.SHORT&&(lt=n.RG16I),X===n.INT&&(lt=n.RG32I)),_===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),X===n.UNSIGNED_INT&&(lt=n.RGB32UI),X===n.BYTE&&(lt=n.RGB8I),X===n.SHORT&&(lt=n.RGB16I),X===n.INT&&(lt=n.RGB32I)),_===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),X===n.UNSIGNED_INT&&(lt=n.RGBA32UI),X===n.BYTE&&(lt=n.RGBA8I),X===n.SHORT&&(lt=n.RGBA16I),X===n.INT&&(lt=n.RGBA32I)),_===n.RGB&&(X===n.UNSIGNED_SHORT&&ft&&(lt=ft.RGB16_EXT),X===n.SHORT&&ft&&(lt=ft.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),_===n.RGBA){let ut=ot?qs:he.getTransfer(at);X===n.FLOAT&&(lt=n.RGBA32F),X===n.HALF_FLOAT&&(lt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(lt=ut===ye?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&ft&&(lt=ft.RGBA16_EXT),X===n.SHORT&&ft&&(lt=ft.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function E(R,_){let X;return R?_===null||_===In||_===vs?X=n.DEPTH24_STENCIL8:_===Pn?X=n.DEPTH32F_STENCIL8:_===ys&&(X=n.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===In||_===vs?X=n.DEPTH_COMPONENT24:_===Pn?X=n.DEPTH_COMPONENT32F:_===ys&&(X=n.DEPTH_COMPONENT16),X}function T(R,_){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==We&&R.minFilter!==Fe?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function D(R){let _=R.target;_.removeEventListener("dispose",D),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function v(R){let _=R.target;_.removeEventListener("dispose",v),N(_)}function b(R){let _=i.get(R);if(_.__webglInit===void 0)return;let X=R.source,j=p.get(X);if(j){let at=j[_.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(R),Object.keys(j).length===0&&p.delete(X)}i.remove(R)}function C(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let X=R.source,j=p.get(X);delete j[_.__cacheKey],o.memory.textures--}function N(R){let _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let at=0;at<_.__webglFramebuffer[j].length;at++)n.deleteFramebuffer(_.__webglFramebuffer[j][at]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=R.textures;for(let j=0,at=X.length;j<at;j++){let ot=i.get(X[j]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(X[j])}i.remove(R)}let V=0;function U(){V=0}function I(){return V}function O(R){V=R}function Y(){let R=V;return R>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function B(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function st(R,_){let X=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let j=R.image;if(j===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(X,R,_);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+_)}function W(R,_){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){xt(X,R,_);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+_)}function it(R,_){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){xt(X,R,_);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+_)}function rt(R,_){let X=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Ut(X,R,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+_)}let vt={[_o]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},mt={[We]:n.NEAREST,[uu]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[Fe]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},St={[mu]:n.NEVER,[vu]:n.ALWAYS,[gu]:n.LESS,[Pa]:n.LEQUAL,[_u]:n.EQUAL,[La]:n.GEQUAL,[xu]:n.GREATER,[yu]:n.NOTEQUAL};function Mt(R,_){if(_.type===Pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Fe||_.magFilter===$o||_.magFilter===pr||_.magFilter===Ei||_.minFilter===Fe||_.minFilter===$o||_.minFilter===pr||_.minFilter===Ei)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,vt[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,vt[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,vt[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,mt[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==pr&&_.minFilter!==Ei||_.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function _t(R,_){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",D));let j=_.source,at=p.get(j);at===void 0&&(at={},p.set(j,at));let ot=B(_);if(ot!==R.__cacheKey){at[ot]===void 0&&(at[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[ot].usedTimes++;let ft=at[R.__cacheKey];ft!==void 0&&(at[R.__cacheKey].usedTimes--,ft.usedTimes===0&&C(_)),R.__cacheKey=ot,R.__webglTexture=at[ot].texture}return X}function H(R,_,X){return Math.floor(Math.floor(R/X)/_)}function tt(R,_,X,j){let ot=R.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,X,j,_.data);else{ot.sort((Yt,Rt)=>Yt.start-Rt.start);let ft=0;for(let Yt=1;Yt<ot.length;Yt++){let Rt=ot[ft],At=ot[Yt],Pt=Rt.start+Rt.count,Zt=H(At.start,_.width,4),ie=H(Rt.start,_.width,4);At.start<=Pt+1&&Zt===ie&&H(At.start+At.count-1,_.width,4)===Zt?Rt.count=Math.max(Rt.count,At.start+At.count-Rt.start):(++ft,ot[ft]=At)}ot.length=ft+1;let lt=e.getParameter(n.UNPACK_ROW_LENGTH),ut=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Yt=0,Rt=ot.length;Yt<Rt;Yt++){let At=ot[Yt],Pt=Math.floor(At.start/4),Zt=Math.ceil(At.count/4),ie=Pt%_.width,G=Math.floor(Pt/_.width),wt=Zt,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,ie,G,wt,ht,X,j,_.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,lt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function xt(R,_,X){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);let at=_t(R,_),ot=_.source;e.bindTexture(j,R.__webglTexture,n.TEXTURE0+X);let ft=i.get(ot);if(ot.version!==ft.__version||at===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ht=he.getPrimaries(he.workingColorSpace),Ct=_.colorSpace===ii?null:he.getPrimaries(_.colorSpace),Nt=_.colorSpace===ii||ht===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ut=m(_.image,!1,s.maxTextureSize);ut=Ce(_,ut);let Et=r.convert(_.format,_.colorSpace),Yt=r.convert(_.type),Rt=w(_.internalFormat,Et,Yt,_.normalized,_.colorSpace,_.isVideoTexture);Mt(j,_);let At,Pt=_.mipmaps,Zt=_.isVideoTexture!==!0,ie=ft.__version===void 0||at===!0,G=ot.dataReady,wt=T(_,ut);if(_.isDepthTexture)Rt=E(_.format===Ti,_.type),ie&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Rt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Rt,ut.width,ut.height,0,Et,Yt,null));else if(_.isDataTexture)if(Pt.length>0){Zt&&ie&&e.texStorage2D(n.TEXTURE_2D,wt,Rt,Pt[0].width,Pt[0].height);for(let ht=0,Ct=Pt.length;ht<Ct;ht++)At=Pt[ht],Zt?G&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Et,Yt,At.data):e.texImage2D(n.TEXTURE_2D,ht,Rt,At.width,At.height,0,Et,Yt,At.data);_.generateMipmaps=!1}else Zt?(ie&&e.texStorage2D(n.TEXTURE_2D,wt,Rt,ut.width,ut.height),G&&tt(_,ut,Et,Yt)):e.texImage2D(n.TEXTURE_2D,0,Rt,ut.width,ut.height,0,Et,Yt,ut.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Zt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Rt,Pt[0].width,Pt[0].height,ut.depth);for(let ht=0,Ct=Pt.length;ht<Ct;ht++)if(At=Pt[ht],_.format!==vn)if(Et!==null)if(Zt){if(G)if(_.layerUpdates.size>0){let Nt=hc(At.width,At.height,_.format,_.type);for(let pt of _.layerUpdates){let Xt=At.data.subarray(pt*Nt/At.data.BYTES_PER_ELEMENT,(pt+1)*Nt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,pt,At.width,At.height,1,Et,Xt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,ut.depth,Et,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,Rt,At.width,At.height,ut.depth,0,At.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,ut.depth,Et,Yt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,Rt,At.width,At.height,ut.depth,0,Et,Yt,At.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Zt&&ie&&e.texStorage2D(n.TEXTURE_2D,wt,Rt,Pt[0].width,Pt[0].height);for(let ht=0,Ct=Pt.length;ht<Ct;ht++)At=Pt[ht],_.format!==vn?Et!==null?Zt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,Rt,At.width,At.height,0,At.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?G&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Et,Yt,At.data):e.texImage2D(n.TEXTURE_2D,ht,Rt,At.width,At.height,0,Et,Yt,At.data)}else if(_.isDataArrayTexture)if(Zt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Rt,ut.width,ut.height,ut.depth),G)if(_.layerUpdates.size>0){let ht=hc(ut.width,ut.height,_.format,_.type);for(let Ct of _.layerUpdates){let Nt=ut.data.subarray(Ct*ht/ut.data.BYTES_PER_ELEMENT,(Ct+1)*ht/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,ut.width,ut.height,1,Et,Yt,Nt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,Yt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,ut.width,ut.height,ut.depth,0,Et,Yt,ut.data);else if(_.isData3DTexture)Zt?(ie&&e.texStorage3D(n.TEXTURE_3D,wt,Rt,ut.width,ut.height,ut.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,Yt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,ut.width,ut.height,ut.depth,0,Et,Yt,ut.data);else if(_.isFramebufferTexture){if(ie)if(Zt)e.texStorage2D(n.TEXTURE_2D,wt,Rt,ut.width,ut.height);else{let ht=ut.width,Ct=ut.height;for(let Nt=0;Nt<wt;Nt++)e.texImage2D(n.TEXTURE_2D,Nt,Rt,ht,Ct,0,Et,Yt,null),ht>>=1,Ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ut.parentNode!==ht){ht.appendChild(ut),h.add(_),ht.onpaint=Ct=>{let Nt=Ct.changedElements;for(let pt of h)Nt.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ut);else{let Nt=n.RGBA,pt=n.RGBA,Xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Nt,pt,Xt,ut)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Zt&&ie){let ht=ue(Pt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Rt,ht.width,ht.height)}for(let ht=0,Ct=Pt.length;ht<Ct;ht++)At=Pt[ht],Zt?G&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Et,Yt,At):e.texImage2D(n.TEXTURE_2D,ht,Rt,Et,Yt,At);_.generateMipmaps=!1}else if(Zt){if(ie){let ht=ue(ut);e.texStorage2D(n.TEXTURE_2D,wt,Rt,ht.width,ht.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Yt,ut)}else e.texImage2D(n.TEXTURE_2D,0,Rt,Et,Yt,ut);d(_)&&A(j),ft.__version=ot.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ut(R,_,X){if(_.image.length!==6)return;let j=_t(R,_),at=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);let ot=i.get(at);if(at.version!==ot.__version||j===!0){e.activeTexture(n.TEXTURE0+X);let ft=he.getPrimaries(he.workingColorSpace),lt=_.colorSpace===ii?null:he.getPrimaries(_.colorSpace),ut=_.colorSpace===ii||ft===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Et=_.isCompressedTexture||_.image[0].isCompressedTexture,Yt=_.image[0]&&_.image[0].isDataTexture,Rt=[];for(let pt=0;pt<6;pt++)!Et&&!Yt?Rt[pt]=m(_.image[pt],!0,s.maxCubemapSize):Rt[pt]=Yt?_.image[pt].image:_.image[pt],Rt[pt]=Ce(_,Rt[pt]);let At=Rt[0],Pt=r.convert(_.format,_.colorSpace),Zt=r.convert(_.type),ie=w(_.internalFormat,Pt,Zt,_.normalized,_.colorSpace),G=_.isVideoTexture!==!0,wt=ot.__version===void 0||j===!0,ht=at.dataReady,Ct=T(_,At);Mt(n.TEXTURE_CUBE_MAP,_);let Nt;if(Et){G&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ie,At.width,At.height);for(let pt=0;pt<6;pt++){Nt=Rt[pt].mipmaps;for(let Xt=0;Xt<Nt.length;Xt++){let kt=Nt[Xt];_.format!==vn?Pt!==null?G?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,0,0,kt.width,kt.height,Pt,kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,ie,kt.width,kt.height,0,kt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,0,0,kt.width,kt.height,Pt,Zt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,ie,kt.width,kt.height,0,Pt,Zt,kt.data)}}}else{if(Nt=_.mipmaps,G&&wt){Nt.length>0&&Ct++;let pt=ue(Rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ie,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Yt){G?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Rt[pt].width,Rt[pt].height,Pt,Zt,Rt[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ie,Rt[pt].width,Rt[pt].height,0,Pt,Zt,Rt[pt].data);for(let Xt=0;Xt<Nt.length;Xt++){let ve=Nt[Xt].image[pt].image;G?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,0,0,ve.width,ve.height,Pt,Zt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,ie,ve.width,ve.height,0,Pt,Zt,ve.data)}}else{G?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Pt,Zt,Rt[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ie,Pt,Zt,Rt[pt]);for(let Xt=0;Xt<Nt.length;Xt++){let kt=Nt[Xt];G?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,0,0,Pt,Zt,kt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,ie,Pt,Zt,kt.image[pt])}}}d(_)&&A(n.TEXTURE_CUBE_MAP),ot.__version=at.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function dt(R,_,X,j,at,ot){let ft=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),ut=w(X.internalFormat,ft,lt,X.normalized,X.colorSpace),Et=i.get(_),Yt=i.get(X);if(Yt.__renderTarget=_,!Et.__hasExternalTextures){let Rt=Math.max(1,_.width>>ot),At=Math.max(1,_.height>>ot);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,ot,ut,Rt,At,_.depth,0,ft,lt,null):e.texImage2D(at,ot,ut,Rt,At,0,ft,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),xe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,at,Yt.__webglTexture,0,_e(_)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,at,Yt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,_,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let j=_.depthTexture,at=j&&j.isDepthTexture?j.type:null,ot=E(_.stencilBuffer,at),ft=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(_),ot,_.width,_.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(_),ot,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ot,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,R)}else{let j=_.textures;for(let at=0;at<j.length;at++){let ot=j[at],ft=r.convert(ot.format,ot.colorSpace),lt=r.convert(ot.type),ut=w(ot.internalFormat,ft,lt,ot.normalized,ot.colorSpace);xe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(_),ut,_.width,_.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(_),ut,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ut,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qt(R,_,X){let j=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(_.depthTexture);if(at.__renderTarget=_,(!at.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(at.__webglInit===void 0&&(at.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,_.depthTexture);let Et=r.convert(_.depthTexture.format),Yt=r.convert(_.depthTexture.type),Rt;_.depthTexture.format===Vn?Rt=n.DEPTH_COMPONENT24:_.depthTexture.format===Ti&&(Rt=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Rt,_.width,_.height,0,Et,Yt,null)}}else st(_.depthTexture,0);let ot=at.__webglTexture,ft=_e(_),lt=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ut=_.depthTexture.format===Ti?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)xe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,lt,ot,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,ut,lt,ot,0);else if(_.depthTexture.format===Ti)xe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,lt,ot,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,ut,lt,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(R){let _=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let at=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),_.__depthDisposeCallback=at}_.__boundDepthTexture=j}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(X)for(let j=0;j<6;j++)Qt(_.__webglFramebuffer[j],R,j);else{let j=R.texture.mipmaps;j&&j.length>0?Qt(_.__webglFramebuffer[0],R,0):Qt(_.__webglFramebuffer,R,0)}else if(X){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ft(_.__webglDepthbuffer[j],R,!1);else{let at=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,ot)}}else{let j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ft(_.__webglDepthbuffer,R,!1);else{let at=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(R,_,X){let j=i.get(R);_!==void 0&&dt(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&zt(R)}function te(R){let _=R.texture,X=i.get(R),j=i.get(_);R.addEventListener("dispose",v);let at=R.textures,ot=R.isWebGLCubeRenderTarget===!0,ft=at.length>1;if(ft||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++),ot){X.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[lt]=[];for(let ut=0;ut<_.mipmaps.length;ut++)X.__webglFramebuffer[lt][ut]=n.createFramebuffer()}else X.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)X.__webglFramebuffer[lt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ft)for(let lt=0,ut=at.length;lt<ut;lt++){let Et=i.get(at[lt]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let lt=0;lt<at.length;lt++){let ut=at[lt];X.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[lt]);let Et=r.convert(ut.format,ut.colorSpace),Yt=r.convert(ut.type),Rt=w(ut.internalFormat,Et,Yt,ut.normalized,ut.colorSpace,R.isXRRenderTarget===!0),At=_e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Rt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,X.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)dt(X.__webglFramebuffer[lt][ut],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else dt(X.__webglFramebuffer[lt],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);d(_)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let lt=0,ut=at.length;lt<ut;lt++){let Et=at[lt],Yt=i.get(Et),Rt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Rt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Rt,Yt.__webglTexture),Mt(Rt,Et),dt(X.__webglFramebuffer,R,Et,n.COLOR_ATTACHMENT0+lt,Rt,0),d(Et)&&A(Rt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),Mt(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)dt(X.__webglFramebuffer[ut],R,_,n.COLOR_ATTACHMENT0,lt,ut);else dt(X.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,lt,0);d(_)&&A(lt),e.unbindTexture()}R.depthBuffer&&zt(R)}function Bt(R){let _=R.textures;for(let X=0,j=_.length;X<j;X++){let at=_[X];if(d(at)){let ot=P(R),ft=i.get(at).__webglTexture;e.bindTexture(ot,ft),A(ot),e.unbindTexture()}}}let ee=[],we=[];function Ae(R){if(R.samples>0){if(xe(R)===!1){let _=R.textures,X=R.width,j=R.height,at=n.COLOR_BUFFER_BIT,ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(R),lt=_.length>1;if(lt)for(let Et=0;Et<_.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let ut=R.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Et=0;Et<_.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Et]);let Yt=i.get(_[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,X,j,0,0,X,j,at,n.NEAREST),l===!0&&(ee.length=0,we.length=0,ee.push(n.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ee.push(ot),we.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Et=0;Et<_.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Et]);let Yt=i.get(_[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function _e(R){return Math.min(s.maxSamples,R.samples)}function xe(R){let _=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(R){let _=o.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Ce(R,_){let X=R.colorSpace,j=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Xs&&X!==ii&&(he.getTransfer(X)===ye?(j!==vn||at!==mn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",X)),_}function ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=st,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=rt,this.rebindTextures=$t,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function I_(n,t){function e(i,s=ii){let r,o=he.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===Jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ko)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kl)return n.BYTE;if(i===jl)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Zo)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===ec)return n.ALPHA;if(i===nc)return n.RGB;if(i===vn)return n.RGBA;if(i===Vn)return n.DEPTH_COMPONENT;if(i===Ti)return n.DEPTH_STENCIL;if(i===ic)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===Ai)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===ta)return n.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===xr)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ea||i===na||i===ia||i===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ra||i===oa||i===aa||i===la||i===ca||i===yr||i===ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ra||i===oa)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===aa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===la)return r.COMPRESSED_R11_EAC;if(i===ca)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yr)return r.COMPRESSED_RG11_EAC;if(i===ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ua||i===fa||i===da||i===pa||i===ma||i===ga||i===_a||i===xa||i===ya||i===va||i===Ma||i===Sa||i===ba||i===wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ua)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ga)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_a)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ya)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===va)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ba)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Ta||i===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ca||i===Ra||i===vr||i===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ke({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends Gn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Rc,d={},A=e.getContextAttributes(),P=null,w=null,E=[],T=[],D=new ce,v=null,b=null,C=new Je;C.viewport=new Pe;let N=new Je;N.viewport=new Pe;let V=[C,N],U=new Wo,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let tt=E[H];return tt===void 0&&(tt=new ms,E[H]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(H){let tt=E[H];return tt===void 0&&(tt=new ms,E[H]=tt),tt.getGripSpace()},this.getHand=function(H){let tt=E[H];return tt===void 0&&(tt=new ms,E[H]=tt),tt.getHandSpace()};function Y(H){let tt=T.indexOf(H.inputSource);if(tt===-1)return;let xt=E[tt];xt!==void 0&&(xt.update(H.inputSource,H.frame,c||o),xt.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",st);for(let H=0;H<E.length;H++){let tt=T[H];tt!==null&&(T[H]=null,E[H].disconnect(tt))}I=null,O=null,m.reset();for(let H in d)delete d[H];if(t.setRenderTarget(P),p=null,f=null,h=null,s=null,w=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(D.width,D.height,!1),b!==null){let H=b.camera;H.fov=b.fov,H.zoom=b.zoom,H.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",B),s.addEventListener("inputsourceschange",st),A.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,dt=null;A.depth&&(dt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=A.stencil?Ti:Vn,Ut=A.stencil?vs:In);let Ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new rn(f.textureWidth,f.textureHeight,{format:vn,type:mn,depthTexture:new yi(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new rn(p.framebufferWidth,p.framebufferHeight,{format:vn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(H){for(let tt=0;tt<H.removed.length;tt++){let xt=H.removed[tt],Ut=T.indexOf(xt);Ut>=0&&(T[Ut]=null,E[Ut].disconnect(xt))}for(let tt=0;tt<H.added.length;tt++){let xt=H.added[tt],Ut=T.indexOf(xt);if(Ut===-1){for(let Ft=0;Ft<E.length;Ft++)if(Ft>=T.length){T.push(xt),Ut=Ft;break}else if(T[Ft]===null){T[Ft]=xt,Ut=Ft;break}if(Ut===-1)break}let dt=E[Ut];dt&&dt.connect(xt)}}let W=new q,it=new q;function rt(H,tt,xt){W.setFromMatrixPosition(tt.matrixWorld),it.setFromMatrixPosition(xt.matrixWorld);let Ut=W.distanceTo(it),dt=tt.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,Qt=dt[14]/(dt[10]-1),zt=dt[14]/(dt[10]+1),$t=(dt[9]+1)/dt[5],te=(dt[9]-1)/dt[5],Bt=(dt[8]-1)/dt[0],ee=(Ft[8]+1)/Ft[0],we=Qt*Bt,Ae=Qt*ee,_e=Ut/(-Bt+ee),xe=_e*-Bt;if(tt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(xe),H.translateZ(_e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),dt[10]===-1)H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let k=Qt+_e,Ce=zt+_e,ue=we-xe,R=Ae+(Ut-xe),_=$t*zt/Ce*k,X=te*zt/Ce*k;H.projectionMatrix.makePerspective(ue,R,_,X,k,Ce),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function vt(H,tt){tt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(tt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let tt=H.near,xt=H.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),U.near=N.near=C.near=tt,U.far=N.far=C.far=xt,(I!==U.near||O!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,O=U.far),U.layers.mask=H.layers.mask|6,C.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let Ut=H.parent,dt=U.cameras;vt(U,Ut);for(let Ft=0;Ft<dt.length;Ft++)vt(dt[Ft],Ut);dt.length===2?rt(U,C,N):U.projectionMatrix.copy(C.projectionMatrix),b===null&&H.isPerspectiveCamera&&(b={camera:H,fov:H.fov,zoom:H.zoom}),mt(H,U,Ut)};function mt(H,tt,xt){xt===null?H.matrix.copy(tt.matrixWorld):(H.matrix.copy(xt.matrixWorld),H.matrix.invert(),H.matrix.multiply(tt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=vo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(H){return d[H]};let St=null;function Mt(H,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){let xt=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let Ut=!1;xt.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let zt=0;zt<xt.length;zt++){let $t=xt[zt],te=null;if(p!==null)te=p.getViewport($t);else{let ee=h.getViewSubImage(f,$t);te=ee.viewport,zt===0&&(t.setRenderTargetTextures(w,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(w))}let Bt=V[zt];Bt===void 0&&(Bt=new Je,Bt.layers.enable(zt),Bt.viewport=new Pe,V[zt]=Bt),Bt.matrix.fromArray($t.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray($t.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(te.x,te.y,te.width,te.height),zt===0&&(U.matrix.copy(Bt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(Bt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let zt=h.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let zt=0;zt<xt.length;zt++){let $t=xt[zt].camera;if($t){let te=d[$t];te||(te=new or,d[$t]=te);let Bt=h.getCameraImage($t);te.sourceTexture=Bt}}}}for(let xt=0;xt<E.length;xt++){let Ut=T[xt],dt=E[xt];Ut!==null&&dt!==void 0&&dt.update(Ut,tt,c||o)}St&&St(H,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let _t=new Ku;_t.setAnimationLoop(Mt),this.setAnimationLoop=function(H){St=H},this.dispose=function(){}}},D_=new Ie,sf=new ne;sf.set(-1,0,0,0,1,0,0,0,1);function N_(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ac(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,P,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,P):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=t.get(d),P=A.envMap,w=A.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(w)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,P){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=P*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function U_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let T=E.program;i.uniformBlockBinding(w,T)}function c(w,E){let T=s[w.id];T===void 0&&(m(w),T=u(w),s[w.id]=T,w.addEventListener("dispose",A));let D=E.program;i.updateUBOMapping(w,D);let v=t.render.frame;r[w.id]!==v&&(f(w),r[w.id]=v)}function u(w){let E=h();w.__bindingPointIndex=E;let T=n.createBuffer(),D=w.__size,v=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=s[w.id],T=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,b=T.length;v<b;v++){let C=T[v];if(Array.isArray(C))for(let N=0,V=C.length;N<V;N++)p(C[N],v,N,D);else p(C,v,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,T,D){if(y(w,E,T,D)===!0){let v=w.__offset,b=w.value;if(Array.isArray(b)){let C=0;for(let N=0;N<b.length;N++){let V=b[N],U=d(V);g(V,w.__data,C),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,w.__data)}}function g(w,E,T){typeof w=="number"||typeof w=="boolean"?E[0]=w:w.isMatrix3?(E[0]=w.elements[0],E[1]=w.elements[1],E[2]=w.elements[2],E[3]=0,E[4]=w.elements[3],E[5]=w.elements[4],E[6]=w.elements[5],E[7]=0,E[8]=w.elements[6],E[9]=w.elements[7],E[10]=w.elements[8],E[11]=0):ArrayBuffer.isView(w)?E.set(new w.constructor(w.buffer,w.byteOffset,E.length)):w.toArray(E,T)}function y(w,E,T,D){let v=w.value,b=E+"_"+T;if(D[b]===void 0)return typeof v=="number"||typeof v=="boolean"?D[b]=v:ArrayBuffer.isView(v)?D[b]=v.slice():D[b]=v.clone(),!0;{let C=D[b];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return D[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(w){let E=w.uniforms,T=0,D=16;for(let b=0,C=E.length;b<C;b++){let N=Array.isArray(E[b])?E[b]:[E[b]];for(let V=0,U=N.length;V<U;V++){let I=N[V],O=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,B=O.length;Y<B;Y++){let st=O[Y],W=d(st),it=T%D,rt=it%W.boundary,vt=it+rt;T+=rt,vt!==0&&D-vt<W.storage&&(T+=D-vt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=W.storage}}}let v=T%D;return v>0&&(T+=D-v),w.__size=T,w.__cache={},this}function d(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(E.boundary=16,E.storage=w.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",w),E}function A(w){let E=w.target;E.removeEventListener("dispose",A);let T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function P(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:P}}var F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function O_(){return qn===null&&(qn=new Eo(F_,16,16,Ai,Ln),qn.name="DFG_LUT",qn.minFilter=Fe,qn.magFilter=Fe,qn.wrapS=kn,qn.wrapT=kn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var Oa=class{constructor(t={}){let{canvas:e=Mu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=mn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=p,m=new Set([ta,Qo,jo]),d=new Set([mn,In,ys,vs,Jo,Ko]),A=new Uint32Array(4),P=new Int32Array(4),w=new q,E=null,T=null,D=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,V=null,U=null,I=null,O=null;this._outputColorSpace=He;let Y=0,B=0,st=null,W=-1,it=null,rt=new Pe,vt=new Pe,mt=null,St=new re(0),Mt=0,_t=e.width,H=e.height,tt=1,xt=null,Ut=null,dt=new Pe(0,0,_t,H),Ft=new Pe(0,0,_t,H),Qt=!1,zt=new ir,$t=!1,te=!1,Bt=new Ie,ee=new q,we=new Pe,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function xe(){return st===null?tt:1}let k=i;function Ce(S,z){return e.getContext(S,z)}let ue,R,_,X,j,at,ot,ft,lt,ut,Et,Yt,Rt,At,Pt,Zt,ie,G,wt,ht,Ct,Nt,pt;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",sn,!1),k===null){let z="webgl2";if(k=Ce(z,S),k===null)throw Ce(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(S){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),jt("WebGLRenderer: "+S.message),S}function Xt(){ue=new W0(k),ue.init(),Ct=new I_(k,ue),R=new N0(k,ue,t,Ct),_=new C_(k,ue),R.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),U=k.createFramebuffer(),I=k.createFramebuffer(),O=k.createFramebuffer(),X=new Y0(k),j=new p_,at=new R_(k,ue,_,j,R,Ct,X),ot=new H0(C),ft=new Zd(k),Nt=new L0(k,ft),lt=new X0(k,ft,X,Nt),ut=new Z0(k,lt,ft,Nt,X),G=new $0(k,R,at),Pt=new U0(j),Et=new d_(C,ot,ue,R,Nt,Pt),Yt=new N_(C,j),Rt=new g_,At=new S_(ue),ie=new P0(C,ot,_,ut,g,l),Zt=new A_(C,ut,R),pt=new U_(k,X,R,_),wt=new D0(k,ue,X),ht=new q0(k,ue,X),X.programs=Et.programs,C.capabilities=R,C.extensions=ue,C.properties=j,C.renderLists=Rt,C.shadowMap=Zt,C.state=_,C.info=X}y!==mn&&(b=new K0(y,e.width,e.height,a,s,r));let kt=new Ic(C,k);this.xr=kt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(_t,H,!1))},this.getSize=function(S){return S.set(_t,H)},this.setSize=function(S,z,et=!0){if(kt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=S,H=z,e.width=Math.floor(S*tt),e.height=Math.floor(z*tt),et===!0&&(e.style.width=S+"px",e.style.height=z+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(_t*tt,H*tt).floor()},this.setDrawingBufferSize=function(S,z,et){_t=S,H=z,tt=et,e.width=Math.floor(S*et),e.height=Math.floor(z*et),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(y===mn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(rt)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,z,et,J){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,z,et,J),_.viewport(rt.copy(dt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,z,et,J){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,z,et,J),_.scissor(vt.copy(Ft).multiplyScalar(tt).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(S){_.setScissorTest(Qt=S)},this.setOpaqueSort=function(S){xt=S},this.setTransparentSort=function(S){Ut=S},this.getClearColor=function(S){return S.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,et=!0){let J=0;if(S){let Z=!1;if(st!==null){let Lt=st.texture.format;Z=m.has(Lt)}if(Z){let Lt=st.texture.type,Tt=d.has(Lt),It=ie.getClearColor(),Vt=ie.getClearAlpha(),Gt=It.r,se=It.g,le=It.b;Tt?(A[0]=Gt,A[1]=se,A[2]=le,A[3]=Vt,k.clearBufferuiv(k.COLOR,0,A)):(P[0]=Gt,P[1]=se,P[2]=le,P[3]=Vt,k.clearBufferiv(k.COLOR,0,P))}else J|=k.COLOR_BUFFER_BIT}z&&(J|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),V=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),ie.dispose(),Rt.dispose(),At.dispose(),j.dispose(),ot.dispose(),ut.dispose(),Nt.dispose(),pt.dispose(),Et.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ir),kt.removeEventListener("sessionend",qi),Zn.stop()};function ve(S){S.preventDefault(),Zs("WebGLRenderer: Context Lost."),N=!0}function de(){Zs("WebGLRenderer: Context Restored."),N=!1;let S=X.autoReset,z=Zt.enabled,et=Zt.autoUpdate,J=Zt.needsUpdate,Z=Zt.type;Xt(),X.autoReset=S,Zt.enabled=z,Zt.autoUpdate=et,Zt.needsUpdate=J,Zt.type=Z}function sn(S){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gn(S){let z=S.target;z.removeEventListener("dispose",gn),nl(z)}function nl(S){Is(S),j.remove(S)}function Is(S){let z=j.get(S).programs;z!==void 0&&(z.forEach(function(et){Et.releaseProgram(et)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,et,J,Z,Lt){z===null&&(z=Ae);let Tt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,It=_n(S,z,et,J,Z);_.setMaterial(J,Tt);let Vt=et.index,Gt=1;if(J.wireframe===!0){if(Vt=lt.getWireframeAttribute(et),Vt===void 0)return;Gt=2}let se=et.drawRange,le=et.attributes.position,Ht=se.start*Gt,me=(se.start+se.count)*Gt;Lt!==null&&(Ht=Math.max(Ht,Lt.start*Gt),me=Math.min(me,(Lt.start+Lt.count)*Gt)),Vt!==null?(Ht=Math.max(Ht,0),me=Math.min(me,Vt.count)):le!=null&&(Ht=Math.max(Ht,0),me=Math.min(me,le.count));let Re=me-Ht;if(Re<0||Re===1/0)return;Nt.setup(Z,J,It,et,Vt);let Ee,Me=wt;if(Vt!==null&&(Ee=ft.get(Vt),Me=ht,Me.setIndex(Ee)),Z.isMesh)J.wireframe===!0?(_.setLineWidth(J.wireframeLinewidth*xe()),Me.setMode(k.LINES)):Me.setMode(k.TRIANGLES);else if(Z.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),_.setLineWidth(Ve*xe()),Z.isLineSegments?Me.setMode(k.LINES):Z.isLineLoop?Me.setMode(k.LINE_LOOP):Me.setMode(k.LINE_STRIP)}else Z.isPoints?Me.setMode(k.POINTS):Z.isSprite&&Me.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ve=Z._multiDrawStarts,Ot=Z._multiDrawCounts,Xe=Z._multiDrawCount,x=Vt?ft.get(Vt).bytesPerElement:1,L=j.get(J).currentProgram.getUniforms();for(let K=0;K<Xe;K++)L.setValue(k,"_gl_DrawID",K),Me.render(Ve[K]/x,Ot[K])}else if(Z.isInstancedMesh)Me.renderInstances(Ht,Re,Z.count);else if(et.isInstancedBufferGeometry){let Ve=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ot=Math.min(et.instanceCount,Ve);Me.renderInstances(Ht,Re,Ot)}else Me.render(Ht,Re)};function li(S,z,et,J){V!==null&&S.isNodeMaterial&&V.setObject(J,S),$t===!0&&Pt.setState(S,et,!1),S.transparent===!0&&S.side===yn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,hn(S,z,J),S.side=bi,S.needsUpdate=!0,hn(S,z,J),S.side=yn):hn(S,z,J)}this.compile=function(S,z,et=null){et===null&&(et=S),V!==null&&V.renderStart(S,z,et),T=At.get(et),T.init(z),v.push(T),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),S!==et&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),te=this.localClippingEnabled,$t=Pt.init(this.clippingPlanes,te),$t===!0&&Pt.setGlobalState(this.clippingPlanes,z),V!==null&&Zt.render(T.state.shadowsArray,et,z);let J=new Set;return S.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Lt=Z.material;if(Lt)if(Array.isArray(Lt))for(let Tt=0;Tt<Lt.length;Tt++){let It=Lt[Tt];li(It,et,z,Z),J.add(It)}else li(Lt,et,z,Z),J.add(Lt)}),T=v.pop(),V!==null&&V.renderEnd(),J},this.compileAsync=function(S,z,et=null){let J=this.compile(S,z,et);return new Promise(Z=>{function Lt(){if(J.forEach(function(Tt){let Vt=j.get(Tt).currentProgram;(Vt===void 0||Vt.isReady())&&J.delete(Tt)}),J.size===0){Z(S);return}setTimeout(Lt,10)}ue.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ps=null;function Ls(S){Ps&&Ps(S)}function Ir(){Zn.stop()}function qi(){Zn.start()}let Zn=new Ku;Zn.setAnimationLoop(Ls),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(S){Ps=S,kt.setAnimationLoop(S),S===null?Zn.stop():Zn.start()},kt.addEventListener("sessionstart",Ir),kt.addEventListener("sessionend",qi),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;V!==null&&V.renderStart(S,z);let et=kt.enabled===!0&&kt.isPresenting===!0,J=b!==null&&(st===null||et)&&b.begin(C,st);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(z),z=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,z,st),T=At.get(S,v.length),T.init(z),T.state.textureUnits=at.getTextureUnits(),v.push(T),Bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),zt.setFromProjectionMatrix(Bt,Tn,z.reversedDepth),te=this.localClippingEnabled,$t=Pt.init(this.clippingPlanes,te),E=Rt.get(S,D.length),E.init(),D.push(E),kt.enabled===!0&&kt.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&Ds(Tt,z,-1/0,C.sortObjects)}Ds(S,z,0,C.sortObjects),E.finish(),V!==null&&V.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(xt,Ut),_e=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,_e&&ie.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Pt.beginShadows();let Z=T.state.shadowsArray;if(Zt.render(Z,S,z),$t===!0&&Pt.endShadows(),(J&&b.hasRenderPass())===!1){let Tt=E.opaque,It=E.transmissive;if(T.setupLights(),z.isArrayCamera){let Vt=z.cameras;if(It.length>0)for(let Gt=0,se=Vt.length;Gt<se;Gt++){let le=Vt[Gt];Le(Tt,It,S,le)}_e&&ie.render(S);for(let Gt=0,se=Vt.length;Gt<se;Gt++){let le=Vt[Gt];cn(E,S,le,le.viewport)}}else It.length>0&&Le(Tt,It,S,z),_e&&ie.render(S),cn(E,S,z)}st!==null&&B===0&&(at.updateMultisampleRenderTarget(st),at.updateRenderTargetMipmap(st)),J&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,z),Nt.resetDefaultState(),W=-1,it=null,v.pop(),v.length>0?(T=v[v.length-1],at.setTextureUnits(T.state.textureUnits),$t===!0&&Pt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,V!==null&&V.renderEnd()};function Ds(S,z,et,J){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(zt)){J&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Bt);let Tt=ut.update(S),It=S.material;It.visible&&E.push(S,Tt,It,et,we.z,null,z)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(zt))){let Tt=ut.update(S),It=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),we.copy(Tt.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(Bt)),Array.isArray(It)){let Vt=Tt.groups;for(let Gt=0,se=Vt.length;Gt<se;Gt++){let le=Vt[Gt],Ht=It[le.materialIndex];Ht&&Ht.visible&&E.push(S,Tt,Ht,et,we.z,le,z)}}else It.visible&&E.push(S,Tt,It,et,we.z,null,z)}}let Lt=S.children;for(let Tt=0,It=Lt.length;Tt<It;Tt++)Ds(Lt[Tt],z,et,J)}function cn(S,z,et,J){let{opaque:Z,transmissive:Lt,transparent:Tt}=S;T.setupLightsView(et),$t===!0&&Pt.setGlobalState(C.clippingPlanes,et),J&&_.viewport(rt.copy(J)),Z.length>0&&Ci(Z,z,et),Lt.length>0&&Ci(Lt,z,et),Tt.length>0&&Ci(Tt,z,et),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Le(S,z,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Ht=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new rn(1,1,{generateMipmaps:!0,type:Ht?Ln:mn,minFilter:Ei,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Lt=T.state.transmissionRenderTarget[J.id],Tt=J.viewport||rt;Lt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let It=C.getRenderTarget(),Vt=C.getActiveCubeFace(),Gt=C.getActiveMipmapLevel();C.setRenderTarget(Lt),C.getClearColor(St),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),_e&&ie.render(et);let se=C.toneMapping;C.toneMapping=Rn;let le=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),$t===!0&&Pt.setGlobalState(C.clippingPlanes,J),Ci(S,et,J),at.updateMultisampleRenderTarget(Lt),at.updateRenderTargetMipmap(Lt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let me=0,Re=z.length;me<Re;me++){let Ee=z[me],{object:Me,geometry:Ve,material:Ot,group:Xe}=Ee;if(Ot.side===yn&&Me.layers.test(J.layers)){let x=Ot.side;Ot.side=nn,Ot.needsUpdate=!0,Ns(Me,et,J,Ve,Ot,Xe),Ot.side=x,Ot.needsUpdate=!0,Ht=!0}}Ht===!0&&(at.updateMultisampleRenderTarget(Lt),at.updateRenderTargetMipmap(Lt))}C.setRenderTarget(It,Vt,Gt),C.setClearColor(St,Mt),le!==void 0&&(J.viewport=le),C.toneMapping=se}function Ci(S,z,et){let J=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Lt=S.length;Z<Lt;Z++){let Tt=S[Z],{object:It,geometry:Vt,group:Gt}=Tt,se=Tt.material;se.allowOverride===!0&&J!==null&&(se=J),It.layers.test(et.layers)&&Ns(It,z,et,Vt,se,Gt)}}function Ns(S,z,et,J,Z,Lt){V!==null&&Z.isNodeMaterial&&V.setObject(S,Z),S.onBeforeRender(C,z,et,J,Z,Lt),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(C,z,et,J,S,Lt),Z.transparent===!0&&Z.side===yn&&Z.forceSinglePass===!1?(Z.side=nn,Z.needsUpdate=!0,C.renderBufferDirect(et,z,J,Z,S,Lt),Z.side=bi,Z.needsUpdate=!0,C.renderBufferDirect(et,z,J,Z,S,Lt),Z.side=yn):C.renderBufferDirect(et,z,J,Z,S,Lt),S.onAfterRender(C,z,et,J,Z,Lt)}function hn(S,z,et){z.isScene!==!0&&(z=Ae);let J=j.get(S),Z=T.state.lights,Lt=T.state.shadowsArray,Tt=Z.state.version,It=Et.getParameters(S,Z.state,Lt,z,et,T.state.lightProbeGridArray),Vt=Et.getProgramCacheKey(It),Gt=J.programs;J.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let se=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;J.envMap=ot.get(S.envMap||J.environment,se),J.envMapRotation=J.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Gt===void 0&&(S.addEventListener("dispose",gn),Gt=new Map,J.programs=Gt);let le=Gt.get(Vt);if(le!==void 0){if(J.currentProgram===le&&J.lightsStateVersion===Tt)return Ri(S,It),le}else It.uniforms=Et.getUniforms(S),V!==null&&S.isNodeMaterial&&V.build(S,et,It),S.onBeforeCompile(It,C),le=Et.acquireProgram(It,Vt),Gt.set(Vt,le),J.uniforms=It.uniforms;let Ht=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ht.clippingPlanes=Pt.uniform),Ri(S,It),J.needsLights=il(S),J.lightsStateVersion=Tt,J.needsLights&&(Ht.ambientLightColor.value=Z.state.ambient,Ht.lightProbe.value=Z.state.probe,Ht.sunLights.value=Z.state.sun,Ht.sunLightShadows.value=Z.state.sunShadow,Ht.directionalLights.value=Z.state.directional,Ht.directionalLightShadows.value=Z.state.directionalShadow,Ht.spotLights.value=Z.state.spot,Ht.spotLightShadows.value=Z.state.spotShadow,Ht.rectAreaLights.value=Z.state.rectArea,Ht.ltc_1.value=Z.state.rectAreaLTC1,Ht.ltc_2.value=Z.state.rectAreaLTC2,Ht.pointLights.value=Z.state.point,Ht.pointLightShadows.value=Z.state.pointShadow,Ht.hemisphereLights.value=Z.state.hemi,Ht.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ht.sunShadowCascade.value=Z.state.sunShadowCascade,Ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Z.state.spotLightMatrix,Ht.spotLightMap.value=Z.state.spotLightMap,Ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=le,J.uniformsList=null,le}function Yi(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=bs.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Ri(S,z){let et=j.get(S);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function Pr(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(z.matrixWorld);for(let et=0,J=S.length;et<J;et++){let Z=S[et];if(Z.texture!==null&&Z.boundingBox.containsPoint(w))return Z}return null}function _n(S,z,et,J,Z){z.isScene!==!0&&(z=Ae),at.resetTextureUnits();let Lt=z.fog,Tt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,It=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,Vt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Gt=ot.get(J.envMap||Tt,Vt),se=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,le=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!et.morphAttributes.position,me=!!et.morphAttributes.normal,Re=!!et.morphAttributes.color,Ee=Rn;J.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ee=C.toneMapping);let Me=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ve=Me!==void 0?Me.length:0,Ot=j.get(J),Xe=T.state.lights;if($t===!0&&(te===!0||S!==it)){let yt=S===it&&J.id===W;Pt.setState(J,S,yt)}let x=!1;J.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Xe.state.version||Ot.outputColorSpace!==It||Z.isBatchedMesh&&Ot.batching===!1||!Z.isBatchedMesh&&Ot.batching===!0||Z.isBatchedMesh&&Ot.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ot.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ot.instancing===!1||!Z.isInstancedMesh&&Ot.instancing===!0||Z.isSkinnedMesh&&Ot.skinning===!1||!Z.isSkinnedMesh&&Ot.skinning===!0||Z.isInstancedMesh&&Ot.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ot.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ot.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ot.instancingMorph===!1&&Z.morphTexture!==null||Ot.envMap!==Gt||J.fog===!0&&Ot.fog!==Lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Pt.numPlanes||Ot.numIntersection!==Pt.numIntersection)||Ot.vertexAlphas!==se||Ot.vertexTangents!==le||Ot.morphTargets!==Ht||Ot.morphNormals!==me||Ot.morphColors!==Re||Ot.toneMapping!==Ee||Ot.morphTargetsCount!==Ve||!!Ot.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(x=!0):(x=!0,Ot.__version=J.version);let L=Ot.currentProgram;x===!0&&(L=hn(J,z,Z),V&&J.isNodeMaterial&&V.onUpdateProgram(J,L,Ot));let K=!1,Q=!1,$=!1,nt=L.getUniforms(),ct=Ot.uniforms;if(_.useProgram(L.program)&&(K=!0,Q=!0,$=!0),J.id!==W&&(W=J.id,Q=!0),Ot.needsLights){let yt=Pr(T.state.lightProbeGridArray,Z);Ot.lightProbeGrid!==yt&&(Ot.lightProbeGrid=yt,Q=!0)}if(K||it!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),nt.setValue(k,"projectionMatrix",S.projectionMatrix),nt.setValue(k,"viewMatrix",S.matrixWorldInverse);let qt=nt.map.cameraPosition;qt!==void 0&&qt.setValue(k,ee.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&nt.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&nt.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),it!==S&&(it=S,Q=!0,$=!0)}if(Ot.needsLights&&(Xe.state.sunShadowMap.length>0&&nt.setValue(k,"sunShadowMap",Xe.state.sunShadowMap,at),Xe.state.directionalShadowMap.length>0&&nt.setValue(k,"directionalShadowMap",Xe.state.directionalShadowMap,at),Xe.state.spotShadowMap.length>0&&nt.setValue(k,"spotShadowMap",Xe.state.spotShadowMap,at),Xe.state.pointShadowMap.length>0&&nt.setValue(k,"pointShadowMap",Xe.state.pointShadowMap,at)),Z.isSkinnedMesh){nt.setOptional(k,Z,"bindMatrix"),nt.setOptional(k,Z,"bindMatrixInverse");let yt=Z.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),nt.setValue(k,"boneTexture",yt.boneTexture,at))}Z.isBatchedMesh&&(nt.setOptional(k,Z,"batchingTexture"),nt.setValue(k,"batchingTexture",Z._matricesTexture,at),nt.setOptional(k,Z,"batchingIdTexture"),nt.setValue(k,"batchingIdTexture",Z._indirectTexture,at),nt.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&nt.setValue(k,"batchingColorTexture",Z._colorsTexture,at));let gt=et.morphAttributes;if((gt.position!==void 0||gt.normal!==void 0||gt.color!==void 0)&&G.update(Z,et,L),(Q||Ot.receiveShadow!==Z.receiveShadow)&&(Ot.receiveShadow=Z.receiveShadow,nt.setValue(k,"receiveShadow",Z.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(ct.envMapIntensity.value=z.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=O_()),Q){if(nt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&Fn(ct,$),Lt&&J.fog===!0&&Yt.refreshFogUniforms(ct,Lt),Yt.refreshMaterialUniforms(ct,J,tt,H,T.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.lightProbeGrid){let yt=Ot.lightProbeGrid;ct.probesSH.value=yt.texture,ct.probesMin.value.copy(yt.boundingBox.min),ct.probesMax.value.copy(yt.boundingBox.max),ct.probesResolution.value.copy(yt.resolution)}bs.upload(k,Yi(Ot),ct,at)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(bs.upload(k,Yi(Ot),ct,at),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&nt.setValue(k,"center",Z.center),nt.setValue(k,"modelViewMatrix",Z.modelViewMatrix),nt.setValue(k,"normalMatrix",Z.normalMatrix),nt.setValue(k,"modelMatrix",Z.matrixWorld),J.uniformsGroups!==void 0){let yt=J.uniformsGroups;for(let qt=0,Jt=yt.length;qt<Jt;qt++){let pe=yt[qt];pt.update(pe,L),pt.bind(pe,L)}}return L}function Fn(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.sunLights.needsUpdate=z,S.sunLightShadows.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function il(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(S,z,et){let J=j.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=z,j.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let et=j.get(S);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,et=0){st=S,Y=z,B=et;let J=null,Z=!1,Lt=!1;if(S){let It=j.get(S);if(It.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(k.FRAMEBUFFER,It.__webglFramebuffer),rt.copy(S.viewport),vt.copy(S.scissor),mt=S.scissorTest,_.viewport(rt),_.scissor(vt),_.setScissorTest(mt),W=-1;return}else if(It.__webglFramebuffer===void 0)at.setupRenderTarget(S);else if(It.__hasExternalTextures)at.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let se=S.depthTexture;if(It.__boundDepthTexture!==se){if(se!==null&&j.has(se)&&(S.width!==se.image.width||S.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);let Gt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?J=Gt[z][et]:J=Gt[z],Z=!0):S.samples>0&&at.useMultisampledRTT(S)===!1?J=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?J=Gt[et]:J=Gt,rt.copy(S.viewport),vt.copy(S.scissor),mt=S.scissorTest}else rt.copy(dt).multiplyScalar(tt).floor(),vt.copy(Ft).multiplyScalar(tt).floor(),mt=Qt;if(et!==0&&(J=U),_.bindFramebuffer(k.FRAMEBUFFER,J)&&_.drawBuffers(S,J),_.viewport(rt),_.scissor(vt),_.setScissorTest(mt),Z){let It=j.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,et)}else if(Lt){let It=z;for(let Vt=0;Vt<S.textures.length;Vt++){let Gt=j.get(S.textures[Vt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Vt,Gt.__webglTexture,et,It)}}else if(S!==null&&et!==0){let It=j.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,It.__webglTexture,et)}W=-1};function Us(S){let z=j.get(S);return(z.__readFormat!==S.format||z.__readType!==S.type)&&(z.__readFormat=S.format,z.__readType=S.type,z.__formatReadable=R.textureFormatReadable(S.format),z.__typeReadable=R.textureTypeReadable(S.type)),z}this.readRenderTargetPixels=function(S,z,et,J,Z,Lt,Tt,It=0){if(!(S&&S.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Vt=Vt[Tt]),Vt){_.bindFramebuffer(k.FRAMEBUFFER,Vt);try{let Gt=S.textures[It],se=Gt.format,le=Gt.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It);let Ht=Us(Gt);if(Ht.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-J&&et>=0&&et<=S.height-Z&&k.readPixels(z,et,J,Z,Ct.convert(se),Ct.convert(le),Lt)}finally{let Gt=st!==null?j.get(st).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(S,z,et,J,Z,Lt,Tt,It=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Vt=Vt[Tt]),Vt)if(z>=0&&z<=S.width-J&&et>=0&&et<=S.height-Z){_.bindFramebuffer(k.FRAMEBUFFER,Vt);let Gt=S.textures[It],se=Gt.format,le=Gt.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It);let Ht=Us(Gt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,me),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(z,et,J,Z,Ct.convert(se),Ct.convert(le),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Re=st!==null?j.get(st).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Re);let Ee=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bu(k,Ee,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,me),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(me),k.deleteSync(Ee),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,et=0){let J=Math.pow(2,-et),Z=Math.floor(S.image.width*J),Lt=Math.floor(S.image.height*J),Tt=z!==null?z.x:0,It=z!==null?z.y:0;at.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,et,0,0,Tt,It,Z,Lt),_.unbindTexture()},this.copyTextureToTexture=function(S,z,et=null,J=null,Z=0,Lt=0){let Tt,It,Vt,Gt,se,le,Ht,me,Re,Ee=S.isCompressedTexture?S.mipmaps[Lt]:S.image;if(et!==null)Tt=et.max.x-et.min.x,It=et.max.y-et.min.y,Vt=et.isBox3?et.max.z-et.min.z:1,Gt=et.min.x,se=et.min.y,le=et.isBox3?et.min.z:0;else{let ct=Math.pow(2,-Z);Tt=Math.floor(Ee.width*ct),It=Math.floor(Ee.height*ct),S.isDataArrayTexture?Vt=Ee.depth:S.isData3DTexture?Vt=Math.floor(Ee.depth*ct):Vt=1,Gt=0,se=0,le=0}J!==null?(Ht=J.x,me=J.y,Re=J.z):(Ht=0,me=0,Re=0);let Me=Ct.convert(z.format),Ve=Ct.convert(z.type),Ot;z.isData3DTexture?(at.setTexture3D(z,0),Ot=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(at.setTexture2DArray(z,0),Ot=k.TEXTURE_2D_ARRAY):(at.setTexture2D(z,0),Ot=k.TEXTURE_2D),_.activeTexture(k.TEXTURE0),_.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let Xe=_.getParameter(k.UNPACK_ROW_LENGTH),x=_.getParameter(k.UNPACK_IMAGE_HEIGHT),L=_.getParameter(k.UNPACK_SKIP_PIXELS),K=_.getParameter(k.UNPACK_SKIP_ROWS),Q=_.getParameter(k.UNPACK_SKIP_IMAGES);_.pixelStorei(k.UNPACK_ROW_LENGTH,Ee.width),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ee.height),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Gt),_.pixelStorei(k.UNPACK_SKIP_ROWS,se),_.pixelStorei(k.UNPACK_SKIP_IMAGES,le);let $=S.isDataArrayTexture||S.isData3DTexture,nt=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let ct=j.get(S),gt=j.get(z),yt=j.get(ct.__renderTarget),qt=j.get(gt.__renderTarget);_.bindFramebuffer(k.READ_FRAMEBUFFER,yt.__webglFramebuffer),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Jt=0;Jt<Vt;Jt++)$&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(S).__webglTexture,Z,le+Jt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(z).__webglTexture,Lt,Re+Jt)),k.blitFramebuffer(Gt,se,Tt,It,Ht,me,Tt,It,k.DEPTH_BUFFER_BIT,k.NEAREST);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||S.isRenderTargetTexture||j.has(S)){let ct=j.get(S),gt=j.get(z);_.bindFramebuffer(k.READ_FRAMEBUFFER,I),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let yt=0;yt<Vt;yt++)$?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ct.__webglTexture,Z,le+yt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ct.__webglTexture,Z),nt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gt.__webglTexture,Lt,Re+yt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gt.__webglTexture,Lt),Z!==0?k.blitFramebuffer(Gt,se,Tt,It,Ht,me,Tt,It,k.COLOR_BUFFER_BIT,k.NEAREST):nt?k.copyTexSubImage3D(Ot,Lt,Ht,me,Re+yt,Gt,se,Tt,It):k.copyTexSubImage2D(Ot,Lt,Ht,me,Gt,se,Tt,It);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else nt?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(Ot,Lt,Ht,me,Re,Tt,It,Vt,Me,Ve,Ee.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,Lt,Ht,me,Re,Tt,It,Vt,Me,Ee.data):k.texSubImage3D(Ot,Lt,Ht,me,Re,Tt,It,Vt,Me,Ve,Ee):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Ht,me,Tt,It,Me,Ve,Ee.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Ht,me,Ee.width,Ee.height,Me,Ee.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Ht,me,Tt,It,Me,Ve,Ee);_.pixelStorei(k.UNPACK_ROW_LENGTH,Xe),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,x),_.pixelStorei(k.UNPACK_SKIP_PIXELS,L),_.pixelStorei(k.UNPACK_SKIP_ROWS,K),_.pixelStorei(k.UNPACK_SKIP_IMAGES,Q),Lt===0&&z.generateMipmaps&&k.generateMipmap(Ot),_.unbindTexture()},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&at.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?at.setTextureCube(S,0):S.isData3DTexture?at.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?at.setTexture2DArray(S,0):at.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Y=0,B=0,st=null,_.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var B_=["top","side","bottom"],z_={slab_bottom:1,slab_top:1,stairs:1},rf=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function k_(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],rf[n.facing|0]]:null}function of(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let b of t){if(!b||typeof b.id!="string")throw new Error("block without id");if(!Number.isInteger(b.n)||b.n<0||b.n>255)throw new Error("bad n for "+b.id);if(i[b.n])throw new Error("duplicate n "+b.n+" ("+b.id+")");if(s[b.id])throw new Error("duplicate id "+b.id);let C=b.colors||{},N=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},b);if(N.placeable=N.n!==0&&!N.liquid,N.colors={top:C.top||"#888888",side:C.side||C.top||"#888888",bottom:C.bottom||C.top||"#888888"},N.opaque=N.solid&&!N.transparent&&!N.cutout&&!z_[N.shape],N.tile={},N.tileOf&&s[N.tileOf])N.tile=Object.assign({},s[N.tileOf].tile);else if(N.n!==0){let V={};for(let U of B_){let I=N.colors[U]+"|"+(N.pattern==="grass"||N.pattern==="log"||N.pattern==="lamp"||N.pattern==="table"||N.pattern==="stele"||N.pattern==="torch"||N.pattern==="bed"||N.pattern==="snow"||N.pattern==="lantern"||N.pattern==="bookshelf"||N.pattern==="hay"||N.pattern==="barrel"?U:"");V[I]===void 0&&(V[I]=r.length,r.push({block:N.id,face:U,color:N.colors[U],pattern:N.pattern,accent:N.accent||null,top:N.colors.top})),N.tile[U]=V[I]}}i[N.n]=N,s[N.id]=N}if(!s.air)throw new Error("registry needs air");for(let b of e){if(s[b.id])throw new Error("duplicate id "+b.id);s[b.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},b)}for(let b in s){let C=s[b].drops;if(C&&C!=="self"&&!s[C])throw new Error(b+" drops unknown "+C)}let o=b=>(typeof b=="number"?i[b]:s[b])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),u=new Uint8Array(256),h=new Uint8Array(256),f=new Uint8Array(256),p={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7},g=new Uint8Array(256),y=new Array(256).fill(null),m=new Uint8Array(256),d=new Uint8Array(256),A=new Uint8Array(256),P=new Uint8Array(256),w=new Uint8Array(256),E=new Int16Array(256).fill(-1),T=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((b,C)=>{b&&(m[C]=b.solid?1:0,d[C]=b.opaque?1:0,A[C]=b.transparent?1:0,P[C]=b.emissive?1:0,w[C]=b.liquid?1:0,a[C]=b.light!=null?b.light:b.emissive?15:0,l[C]=b.liquid?2:0,c[C]=p[b.shape]||0,u[C]=b.cutout?1:0,h[C]=b.climbable?1:0,f[C]=b.plant?1:0,g[C]=b.facing|0,b.solid&&(y[C]=k_(b)),C&&(E[C]=b.tile.top,T[C]=b.tile.side,D[C]=b.tile.bottom))});let v=(n&&n.blueprints||[]).map(b=>Object.assign({kind:"blueprint"},b));return{blocks:i.filter(Boolean),items:e.map(b=>s[b.id]),blueprints:v,tiles:r,get:o,toolOf:b=>{let C=b&&s[b];return C&&C.kind==="item"&&C.tool&&typeof C.tool=="object"?C.tool:null},num:b=>{let C=s[b];if(!C||C.kind!=="block")throw new Error("no block "+b);return C.n},name:b=>{let C=o(b);return C?C.name_zh:String(b)},maxStack:b=>{let C=s[b];return C?C.maxStack:64},dropOf:b=>{let C=i[b];return!C||!C.drops?null:C.drops==="self"?C.id:C.drops},breakTime:b=>{let C=i[b];return!C||C.hardness<0?1/0:.25+C.hardness*.55},flat:{solid:m,opaque:d,trans:A,emit:P,liquid:w,tileTop:E,tileSide:T,tileBottom:D,lightEmit:a,attn:l,shape:c,cutout:u,climb:h,plant:f,facing:g,boxes:y}}}var si=n=>Math.floor(n/16);var ge=(n,t,e)=>(t*16+e)*16+n;var Gi=(n,t)=>n+","+t;function Pc(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=si(n),s=si(e);return{cx:i,cz:s,i:ge(n-i*16,t,e-s*16)}}function af(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Dn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var Es=(n,t,e)=>Dn(n,t,0,e);function V_(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Lc=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],G_=.5*(Math.sqrt(3)-1),wr=(3-Math.sqrt(3))/6;function Hi(n){let t=V_(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*G_,a=Math.floor(s+o),l=Math.floor(r+o),c=(a+l)*wr,u=s-(a-c),h=r-(l-c),f=u>h?1:0,p=1-f,g=u-f+wr,y=h-p+wr,m=u-1+2*wr,d=h-1+2*wr,A=a&255,P=l&255,w=0,E,T;return E=.5-u*u-h*h,E>0&&(T=Lc[i[A+i[P]]&7],E*=E,w+=E*E*(T[0]*u+T[1]*h)),E=.5-g*g-y*y,E>0&&(T=Lc[i[A+f+i[P+p]]&7],E*=E,w+=E*E*(T[0]*g+T[1]*y)),E=.5-m*m-d*d,E>0&&(T=Lc[i[A+1+i[P+1]]&7],E*=E,w+=E*E*(T[0]*m+T[1]*d)),70*w}}function Wi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Dc(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),l=t(e-r),c=t(i-o),u=t(s-a),h=(p,g,y)=>Dn(n,r+p,o+g,a+y),f=(p,g,y)=>p+(g-p)*y;return f(f(f(h(0,0,0),h(1,0,0),l),f(h(0,1,0),h(1,1,0),l),c),f(f(h(0,0,1),h(1,0,1),l),f(h(0,1,1),h(1,1,1),l),c),u)}}var Ts=160,Nn=18,Nc=[[0,1],[-1,0],[0,-1],[1,0]];function lf(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var H_=(n,t,e)=>e&1?[t,n]:[n,t];function cf(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(l,c){let u=l+","+c;if(i.has(u))return i.get(u);let h=null,f=p=>Dn(n+909,l,p,c);if(f(0)<.45&&e&&e.houses&&e.houses.length){let p=Math.floor((l+.2+f(1)*.6)*Ts),g=Math.floor((c+.2+f(2)*.6)*Ts),y=t.biomeOf(p,g),m=t.height(p,g),d=(y==="plains"||y==="desert")&&Math.hypot(p,g)>110;if(d&&m>s+1)for(let A=0;A<16&&d;A++)for(let P of[7,14]){let w=t.height(p+Math.round(Math.cos(A*.39)*P),g+Math.round(Math.sin(A*.39)*P));(Math.abs(w-m)>3||w<=s)&&(d=!1)}else d=!1;if(d){let A=[],P=[],w=3+Math.floor(f(3)*4),E=(T,D,v,b)=>{let C=r[T];if(!C)return null;let[N,V]=H_(C.size[0],C.size[2],b),U={tpl:T,rot:b,x0:D-(N>>1),z0:v-(V>>1),y:m,w:N,d:V,h:C.size[1]};return A.push(U),U};E("well",p,g,0),E("lamp_post",p+3,g+3,0),E("lamp_post",p-3,g-3,0);for(let T=0;T<w;T++){let D=T/w*Math.PI*2+f(10+T)*.5,v=9+f(20+T)*3,b=p+Math.round(Math.cos(D)*v),C=g+Math.round(Math.sin(D)*v),N=p-b,V=g-C,U=0,I=-1/0;Nc.forEach((rt,vt)=>{let mt=rt[0]*N+rt[1]*V;mt>I&&(I=mt,U=vt)});let O=e.houses[Math.floor(f(30+T)*e.houses.length)],Y=E(O,b,C,U);if(!Y)continue;let B=r[O],[st,W]=lf(B.door[0],B.door[1],B.size[0],B.size[2],U),it={x:Y.x0+st+Nc[U][0],z:Y.z0+W+Nc[U][1]};P.push({ax:p,az:g,bx:it.x,bz:it.z})}h={id:u,x:p,z:g,y:m,biome:y,structures:A,paths:P,villagers:2+Math.floor(f(4)*3)}}}return i.set(u,h),h}function a(l,c,u,h){let f=[];for(let p=Math.floor((c-Nn)/Ts);p<=Math.floor((h+Nn)/Ts);p++)for(let g=Math.floor((l-Nn)/Ts);g<=Math.floor((u+Nn)/Ts);g++){let y=o(g,p);y&&y.x+Nn>=l&&y.x-Nn<=u&&y.z+Nn>=c&&y.z-Nn<=h&&f.push(y)}return f}return{plan:o,around:a,chunk:(l,c)=>a(l*16,c*16,l*16+16-1,c*16+16-1)}}function hf(n,t,e,i,s,r,o){let a=t*16,l=e*16,c=(g,y)=>g>=a&&g<a+16&&y>=l&&y<l+16,u=i.biome==="desert",h=u?s.desert||{}:{},f=g=>{let y=s.palette[g];if(!y)return null;let m=h[y]||y;return r.byId(m)},p=u?r.byId("sandstone"):r.byId("cobblestone");for(let g of i.paths){let y=Math.max(Math.abs(g.bx-g.ax),Math.abs(g.bz-g.az));for(let m=0;m<=y;m++){let d=Math.round(g.ax+(g.bx-g.ax)*m/y),A=Math.round(g.az+(g.bz-g.az)*m/y);if(!c(d,A))continue;let P=o.height(d,A),w=ge(d-a,P,A-l);n[w]&&n[w]!==r.water&&(n[w]=r.path);for(let E=P+1;E<Math.min(64,P+4);E++){let T=ge(d-a,E,A-l);(n[T]===r.leaves||n[T]===r.log||E===P+1)&&(n[T]=0)}}}for(let g of i.structures){let y=s.templates[g.tpl];if(!y)continue;let[m,,d]=y.size;for(let A=0;A<d;A++)for(let P=0;P<m;P++){let[w,E]=lf(P,A,m,d,g.rot),T=g.x0+w,D=g.z0+E;if(!c(T,D))continue;let v=T-a,b=D-l;for(let C=g.y-1;C>Math.max(0,g.y-8);C--){let N=ge(v,C,b);if(n[N]&&n[N]!==r.water)break;n[N]=p}for(let C=g.y+y.size[1];C<Math.min(64,g.y+y.size[1]+3);C++)n[ge(v,C,b)]=0;y.layers.forEach((C,N)=>{let V=(C[A]||"")[P];if(!V||V===" ")return;let U=g.y+N;U>=64||(n[ge(v,U,b)]=V==="."?0:f(V)||0)})}}}var an=24;var ff={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},uf=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],As=112;function df(n,t,e){let i=U=>t.num(U),s=U=>{try{return i(U)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Hi(n),l=Hi(n+101),c=Hi(n+202),u=Hi(n+303),h=Hi(n+404),f=Dc(n+505),p=Dc(n+606);function g(U,I){let O=Wi(a,U/190,I/190,3),Y=Wi(l,U/55,I/55,4),B=Math.max(0,Wi(c,U/130,I/130,2)-.1),st=27+O*9+Y*6+B*B*75;return Math.max(4,Math.min(54,Math.floor(st)))}let y=Hi(n+808);function m(U,I){let O=g(U,I),Y=Wi(y,U/900,I/900,2),B=Math.min(1,Math.max(0,(Math.hypot(U,I)-240)/80)),st=Math.min(1,Math.max(0,(-.18-Y)/.17)),W=st*st*(3-2*st)*B;return W>0&&(O=Math.round(O*(1-W)+(an-14)*W)),O<an-1?Math.max(3,Math.floor(an-1-(an-1-O)*1.8)):O}function d(U,I){let O=(Es(n+3,U,I)-.5)*.025;return{t:Wi(u,U/420,I/420,2)+O,u:Wi(h,U/380,I/380,2)-O}}function A(U,I,O=m(U,I)){if(O<an-1)return"ocean";let{t:Y,u:B}=d(U,I);return Y<-.3?"snow":Y>.28&&B<.05?"desert":B>.12?"forest":"plains"}let P=null;function w(){if(P)return P;let U=(I,O)=>{let Y=m(I,O);return Y>=an+2&&Math.abs(m(I+1,O)-Y)<2&&Math.abs(m(I,O+1)-Y)<2};for(let I=0;I<400;I+=2)for(let O=0;O<Math.max(1,I*2);O++){let Y=O/Math.max(1,I*2)*Math.PI*2,B=Math.round(Math.cos(Y)*I),st=Math.round(Math.sin(Y)*I);if(U(B,st)&&U(B+3,st+2))return P={x:B+.5,y:m(B,st)+1,z:st+.5,stele:{x:B+3,y:m(B+3,st+2)+1,z:st+2},portal:{x:B-3,y:Math.max(an+1,m(B-3,st+2))+1,z:st+2}},P}return P={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},P}function E(U,I){let O=[],Y=U*16,B=I*16,st=Math.floor((Y-80)/As),W=Math.floor((Y+16+80)/As),it=Math.floor((B-80)/As),rt=Math.floor((B+16+80)/As);for(let vt=it;vt<=rt;vt++)for(let mt=st;mt<=W;mt++){let St=xt=>Dn(n+707,mt,xt,vt);if(St(0)>.25)continue;let Mt=(mt+St(1))*As,_t=(vt+St(2))*As,H=St(3)*Math.PI,tt=40+St(4)*30;O.push({ax:Mt-Math.cos(H)*tt/2,az:_t-Math.sin(H)*tt/2,dx:Math.cos(H)*tt,dz:Math.sin(H)*tt,len:tt,floor:7+Math.floor(St(5)*6),w:1.6+St(6)*1.2})}return O}function T(U,I){let O=new Uint8Array(16384),Y=U*16,B=I*16,st=18,W=new Int16Array(st*st);for(let Mt=-1;Mt<=16;Mt++)for(let _t=-1;_t<=16;_t++)W[(Mt+1)*st+_t+1]=m(Y+_t,B+Mt);let it=w(),rt=new Array(256);for(let Mt=0;Mt<16;Mt++)for(let _t=0;_t<16;_t++){let H=Y+_t,tt=B+Mt,xt=W[(Mt+1)*st+_t+1],Ut=Math.max(Math.abs(W[(Mt+1)*st+_t]-xt),Math.abs(W[(Mt+1)*st+_t+2]-xt),Math.abs(W[Mt*st+_t+1]-xt),Math.abs(W[(Mt+2)*st+_t+1]-xt))>=3,dt=rt[Mt*16+_t]=A(H,tt,xt),Ft=xt<=an+1,Qt,zt;dt==="ocean"||Ft||dt==="desert"?(Qt=r.sand,zt=r.sand):Ut?(Qt=r.stone,zt=r.stone):dt==="snow"?(Qt=r.snow,zt=r.dirt):(Qt=r.grass,zt=r.dirt);for(let $t=0;$t<=xt;$t++){let te;if($t===0?te=r.bedrock:$t===xt?te=Qt:$t>=xt-3?te=zt:dt==="desert"&&$t>=xt-7?te=r.sandstone:te=r.stone,te===r.stone&&Ut&&$t>=xt-4){let Bt=Dn(n,H,$t,tt);Bt<.06?te=r.coal:Bt<.09?te=r.iron:Bt<.096&&(te=r.ruby)}O[ge(_t,$t,Mt)]=te}for(let $t=xt+1;$t<=an;$t++)O[ge(_t,$t,Mt)]=$t===an&&dt==="snow"?r.ice:r.water}D(O,U,I,W,st);for(let Mt=0;Mt<uf.length;Mt++){let _t=uf[Mt],H=r[_t.ore];for(let tt=0;tt<_t.count;tt++){let xt=Qt=>Dn(n+31*Mt+Qt,U*977+tt,Qt,I*131+tt);if(xt(9)>_t.chance)continue;let Ut=Math.floor(xt(1)*16),dt=_t.y0+Math.floor(xt(2)*(_t.y1-_t.y0)),Ft=Math.floor(xt(3)*16);for(let Qt=0;Qt<_t.size;Qt++){Ut>=0&&Ut<16&&Ft>=0&&Ft<16&&dt>0&&dt<64&&O[ge(Ut,dt,Ft)]===r.stone&&(O[ge(Ut,dt,Ft)]=H);let zt=Math.floor(xt(10+Qt)*6);zt===0?Ut++:zt===1?Ut--:zt===2?dt++:zt===3?dt--:zt===4?Ft++:Ft--}}}let vt=e?V.chunk(U,I):[];v(O,U,I,W,st,rt,it,vt);for(let Mt of vt)hf(O,U,I,Mt,e,r,N);let mt=it.stele;if(Math.floor(mt.x/16)===U&&Math.floor(mt.z/16)===I){let Mt=mt.x-Y,_t=mt.z-B;O[ge(Mt,mt.y,_t)]=r.stele,O[ge(Mt,mt.y+1,_t)]=r.stele}let St=it.portal;if(r.portal&&St&&Math.floor(St.x/16)===U&&Math.floor(St.z/16)===I){let Mt=St.x-Y,_t=St.z-B;for(let H=Math.max(1,St.y-3);H<St.y;H++)(!O[ge(Mt,H,_t)]||O[ge(Mt,H,_t)]===r.water)&&(O[ge(Mt,H,_t)]=r.stone);O[ge(Mt,St.y,_t)]=r.portal,O[ge(Mt,St.y+1,_t)]=r.portal}return O}function D(U,I,O,Y,B){let st=I*16,W=O*16,it=4,rt=16/it+1,vt=64/it+1,mt=new Float32Array(rt*rt*vt);for(let _t=0;_t<vt;_t++)for(let H=0;H<rt;H++)for(let tt=0;tt<rt;tt++){let xt=st+tt*it,Ut=_t*it,dt=W+H*it,Ft=f(xt/22,Ut/14,dt/22)-.5,Qt=p(xt/22,Ut/14,dt/22)-.5;mt[(_t*rt+H)*rt+tt]=Ft*Ft+Qt*Qt}let St=(_t,H,tt)=>mt[(H*rt+tt)*rt+_t],Mt=E(I,O);for(let _t=0;_t<16;_t++)for(let H=0;H<16;H++){let tt=Y[(_t+1)*B+H+1],xt=tt<=an+1,Ut=xt?tt-5:tt,dt=H>>2,Ft=_t>>2,Qt=(H&3)/it,zt=(_t&3)/it;for(let Bt=3;Bt<=Ut;Bt++){let ee=Bt>>2,we=(Bt&3)/it,Ae=St(dt,ee,Ft)+(St(dt+1,ee,Ft)-St(dt,ee,Ft))*Qt,_e=St(dt,ee,Ft+1)+(St(dt+1,ee,Ft+1)-St(dt,ee,Ft+1))*Qt,xe=St(dt,ee+1,Ft)+(St(dt+1,ee+1,Ft)-St(dt,ee+1,Ft))*Qt,k=St(dt,ee+1,Ft+1)+(St(dt+1,ee+1,Ft+1)-St(dt,ee+1,Ft+1))*Qt;if((Ae+(_e-Ae)*zt)*(1-we)+(xe+(k-xe)*zt)*we<.008){let ue=ge(H,Bt,_t);U[ue]!==r.bedrock&&U[ue]!==r.water&&(U[ue]=0)}}if(!Mt.length||xt)continue;let $t=st+H,te=W+_t;for(let Bt of Mt){let ee=Math.max(0,Math.min(1,(($t-Bt.ax)*Bt.dx+(te-Bt.az)*Bt.dz)/(Bt.len*Bt.len))),we=Bt.ax+Bt.dx*ee,Ae=Bt.az+Bt.dz*ee,_e=Math.hypot($t-we,te-Ae),xe=Bt.w*Math.sin(Math.PI*ee);if(_e<xe)for(let k=Bt.floor+Math.floor(_e*2);k<=tt;k++){let Ce=ge(H,k,_t);U[Ce]!==r.water&&(U[Ce]=0)}}}}function v(U,I,O,Y,B,st,W,it){let rt=I*16,vt=O*16;for(let mt=0;mt<16;mt++)for(let St=0;St<16;St++){let Mt=rt+St,_t=vt+mt,H=Y[(mt+1)*B+St+1],tt=st[mt*16+St];if(H+1>=64||Math.hypot(Mt-W.x,_t-W.z)<48)continue;let xt=U[ge(St,H,mt)],Ut=ge(St,H+1,mt);if(U[Ut])continue;let dt=Es(n+11,Mt,_t),Ft=Es(n+13,Mt,_t);xt===r.grass?dt<.012&&o.length?U[Ut]=o[Math.floor(Ft*o.length)]:dt<(tt==="plains"?.1:.05)&&r.tallgrass?U[Ut]=r.tallgrass:tt==="forest"&&dt<.08&&r.fern?U[Ut]=r.fern:tt==="forest"&&dt<.084&&r.mushR&&(U[Ut]=Ft<.5?r.mushR:r.mushB):xt===r.sand&&tt==="desert"&&H>an+1&&dt<.008&&r.deadbush&&(U[Ut]=r.deadbush)}for(let mt=2;mt<14;mt++)for(let St=2;St<14;St++){let Mt=rt+St,_t=vt+mt,H=Y[(mt+1)*B+St+1],tt=st[mt*16+St],xt=U[ge(St,H,mt)];if(Math.abs(Mt-W.x)<7&&Math.abs(_t-W.z)<7||it.some(Qt=>Math.abs(Mt-Qt.x)<Nn+2&&Math.abs(_t-Qt.z)<Nn+2))continue;let Ut=Es(n+7,Mt,_t),dt=Es(n+9,Mt,_t);if(tt==="desert"&&xt===r.sand&&H>an+1&&Ut<.008&&r.cactus){let Qt=1+Math.floor(dt*3);for(let zt=H+1;zt<=H+Qt&&zt<64;zt++)U[ge(St,zt,mt)]=r.cactus;continue}if(tt==="snow"&&xt===r.snow&&Ut<.02){C(U,St,mt,H,5+Math.floor(dt*3));continue}let Ft=tt==="forest"?.035:tt==="plains"?.003:0;xt===r.grass&&Ut<Ft&&b(U,St,mt,H,Mt,_t,4+Math.floor(dt*2))}}function b(U,I,O,Y,B,st,W){let it=Y+W;if(!(it+2>=64)){for(let rt=it-2;rt<=it+1;rt++){let vt=rt>=it?1:2;for(let mt=-vt;mt<=vt;mt++)for(let St=-vt;St<=vt;St++){if(vt===2&&Math.abs(St)===2&&Math.abs(mt)===2&&Dn(n,B+St,rt,st+mt)<.6)continue;let Mt=ge(I+St,rt,O+mt);U[Mt]===r.air&&(U[Mt]=r.leaves)}}U[ge(I,Y,O)]=r.dirt;for(let rt=Y+1;rt<=it;rt++)U[ge(I,rt,O)]=r.log}}function C(U,I,O,Y,B){let st=Y+B;if(!(st+2>=64)){for(let W=Y+2;W<=st+1;W++){let it=st+1-W,rt=it>=4?2:it>=1?1:0;for(let vt=-rt;vt<=rt;vt++)for(let mt=-rt;mt<=rt;mt++){if(rt===2&&Math.abs(mt)+Math.abs(vt)>3)continue;let St=ge(I+mt,W,O+vt);U[St]===r.air&&(U[St]=r.sleaves)}}U[ge(I,Y,O)]=r.dirt;for(let W=Y+1;W<=st;W++)U[ge(I,W,O)]=r.slog}}let N={height:m,baseHeight:g,biomeOf:A,climate:d,genChunk:T,findSpawn:w,SEA:an},V=cf(n,N,e);return N.villages=V,N}function Uc(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,u=t,h=t+s,f=e-a,p=e+a,g=Math.floor(l),y=Math.floor(c-1e-6),m=Math.floor(u),d=Math.floor(h-1e-6),A=Math.floor(f),P=Math.floor(p-1e-6),w=!1;for(let E=m;E<=d;E++)for(let T=A;T<=P;T++)for(let D=g;D<=y;D++){let v=r(D,E,T);if(!v)continue;let b=v===!0?X_:v;for(let C of b){let N=D+C[0],V=E+C[1],U=T+C[2],I=D+C[3],O=E+C[4],Y=T+C[5];if(!(I<=l+1e-6||N>=c-1e-6||O<=u+1e-6||V>=h-1e-6||Y<=f+1e-6||U>=p-1e-6)){if(!o)return!0;w=!0,o.push([N,V,U,I,O,Y])}}}return w}var X_=[[0,0,0,1,1,1]],ka=(n,t,e,i,s,r)=>Uc(n,t,e,i,s,r,null);function Va(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,u=0,h=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,f=Math.max(1,Math.ceil(h/.3)),p=e/f,g=[];for(let y=0;y<f;y++){let m=t.y*p;m&&(g.length=0,Uc(n.x,n.y+m,n.z,r,o,i,g)?(m<0?(n.y=Math.max(...g.map(d=>d[4])),c=!0):n.y=Math.min(...g.map(d=>d[1]))-o,t.y=0):n.y+=m);for(let d of["x","z"]){let A=t[d]*p;if(!A)continue;let P={x:n.x,y:n.y,z:n.z};if(P[d]+=A,g.length=0,!Uc(P.x,P.y,P.z,r,o,i,g)){n[d]=P[d];continue}if(a&&(c||s.grounded)){let E=Math.max(...g.map(T=>T[4]));if(E-n.y>0&&E-n.y<=1.01&&!ka(P.x,E,P.z,r,o,i)&&!ka(n.x,E,n.z,r,o,i)){u+=E-n.y,n.y=E,n[d]=P[d];continue}}let w=d==="x"?0:2;n[d]=A>0?Math.min(...g.map(E=>E[w]))-l-1e-4:Math.max(...g.map(E=>E[w+3]))+l+1e-4,ka(n.x,n.y,n.z,r,o,i)&&(n[d]=P[d]-A),t[d]=0}}return!c&&t.y<=0&&ka(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:u}}function Ga(n,t,e,i,s){let r=Math.floor(n.x),o=Math.floor(n.y),a=Math.floor(n.z),l=Math.sign(t.x),c=Math.sign(t.y),u=Math.sign(t.z),h=l?Math.abs(1/t.x):1/0,f=c?Math.abs(1/t.y):1/0,p=u?Math.abs(1/t.z):1/0,g=l?(l>0?r+1-n.x:n.x-r)*h:1/0,y=c?(c>0?o+1-n.y:n.y-o)*f:1/0,m=u?(u>0?a+1-n.z:n.z-a)*p:1/0,d=[0,0,0],A=0;for(;A<=e;){let P=i(r,o,a);if(P&&s(P))return{x:r,y:o,z:a,n:P,face:d,dist:A};g<y&&g<m?(r+=l,A=g,g+=h,d=[-l,0,0]):y<m?(o+=c,A=y,y+=f,d=[0,-c,0]):(a+=u,A=m,m+=p,d=[0,0,-u])}return null}var Vc={};rl(Vc,{HOTBAR:()=>Oc,SIZE:()=>Fc,add:()=>ln,canAdd:()=>Tr,count:()=>Un,craft:()=>kc,craftable:()=>qa,createInventory:()=>Ha,deserialize:()=>zc,moveSlot:()=>Bc,remove:()=>Er,serialize:()=>Xa,takeFromSlot:()=>Wa});var Fc=36,Oc=9;function Ha(n=36){return{slots:new Array(n).fill(null)}}function ln(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function Un(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Er(n,t,e){if(Un(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Wa(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Bc(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Tr(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return ln(s,t,e,i)===0}var Xa=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function zc(n,t=36){let e=Ha(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function qa(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Un(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function kc(n,t,e=()=>64,i){let s=qa(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Er(n,o,t.in[o]);return ln(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function q_(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Cs=(n,t)=>n.owned.includes(t),pf=(n,t)=>n?t?2:1:0;function Xi(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Ar(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function mf(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function gf(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Cs(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Ar(n,e.price),n.owned.push(e.id),{ok:!0}):Tr(t,e.id,e.qty,i)?(Ar(n,e.price),ln(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var _f=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function xf(n){let t=q_(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function $_(){return new Map}function yf(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Gc(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Z_(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function vf(n){let t=$_();for(let e in n||{})t.set(e,Z_(n[e]));return t}var Ya=16;var MS=18;var oi=32;function Mf(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Oe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],bt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function J_(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ae(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function ri(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}ae(n,o)}var K_=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open"]);function j_(n,t){let e=Oe(t.color),i=Mf(J_(t.block+t.face)),s=oi;if(K_.has(t.pattern)){Q_(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=bt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Oe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=bt(e,1.12);for(let h=0;h<4;h++)ri(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=bt(e,.96);for(let h=0;h<4;h++)ri(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let h=Oe(t.top);n.fillStyle=bt(h);let f=[[0,0],[s,0]];for(let p=s;p>=0;p-=4)f.push([p,8+Math.round(i()*5)]);ae(n,f)}if(o==="stone"||o==="bedrock")for(let h=0;h<5;h++)n.fillStyle=bt(e,i()<.5?.9:1.08),ri(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let h=0;h<4;h++)n.fillStyle=bt(e,.92),ri(n,i,i()*s,i()*s,5);n.fillStyle=bt(a);for(let h=0;h<5;h++)ri(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let h=0;h<26;h++)n.fillStyle=bt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=bt(e,.82),n.fillRect(h,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=bt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let h=0;h<9;h++)n.fillStyle=bt(e,i()<.5?.78:1.15),ri(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=bt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=bt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=bt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=bt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=bt([185,182,174]),ae(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=bt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ae(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=bt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(o==="gold"&&(n.fillStyle=bt(e,1.15),ae(n,[[0,0],[s,0],[0,s]]),n.fillStyle=bt(e,.9),ae(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=bt(Oe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=bt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=bt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=bt(Oe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=bt(Oe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=bt(a),n.fillRect(14,0,4,4)):(n.fillStyle=bt(Oe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=bt(a),n.fillRect(0,0,s,10),n.fillStyle=bt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=bt(Oe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=bt(a),n.fillRect(0,0,9,14))),o==="wool")for(let h=0;h<7;h++)n.fillStyle=bt(e,i()<.5?.94:1.04),ri(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=bt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(a,1.3),ae(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=bt(Oe("#EFEBDD"),1,.8),ae(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=bt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=bt(e,.9),n.fillRect(0,h,s,2);if(o==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=bt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=bt(Oe("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ae(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ae(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=bt(e,1.1),ae(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=bt(e,.92),ae(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=bt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let f=h/8%2?0:8;for(let p=f;p<s;p+=16)n.fillRect(p,h,1,8)}}if(o==="mossy"){n.fillStyle=bt(a);for(let h=0;h<6;h++)ri(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=bt(e,.6),ae(n,[[4,2],[12,14],[10,15],[3,4]]),ae(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=bt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=bt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=bt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=bt(e,1.08),ae(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=bt(Oe("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let f=h/8%2?0:8;for(let p=f;p<s;p+=16)n.fillRect(p,h,2,6)}}if(o==="checker"&&(n.fillStyle=bt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let f of[3,18]){let p=3;for(;p<s-4;){let g=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(p,f+Math.floor(i()*3),g,11),p+=g+1}}n.fillStyle=bt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=bt(e,.8),n.fillRect(0,h,s,1);if(o==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=bt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=bt(Oe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=bt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=bt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=bt(Oe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=bt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=bt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=bt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ae(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let h=7;h<s;h+=8)n.fillStyle=bt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=bt(Oe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=bt(Oe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=bt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=bt(e),n.fillRect(0,0,s,s),n.fillStyle=bt(Oe("#F2C46B")),n.fillRect(12,12,8,8))),o==="furnace"){for(let h=0;h<4;h++)n.fillStyle=bt(e,i()<.5?.9:1.08),ri(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=bt(a),n.fillRect(8,15,s-16,11),n.fillStyle=bt(Oe("#E0352B"),1,.85),ae(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=bt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=bt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=bt(a),ae(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let h=0;h<c.length;h+=4){let f=1+(i()-.5)*.09;c[h]=Math.min(255,c[h]*f),c[h+1]=Math.min(255,c[h+1]*f),c[h+2]=Math.min(255,c[h+2]*f)}n.putImageData(l,0,0);let u=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=u,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Sf(n){let t=document.createElement("canvas");t.width=t.height=oi*Ya;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=oi;let a=o.getContext("2d",{willReadFrequently:!0});j_(a,s),e.drawImage(o,r%Ya*oi,Math.floor(r/Ya)*oi),i[r]=o}),{canvas:t,tileCanvas:i}}function bf(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ae(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ae(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/oi,l=(c,u,h,f,p,g,y,m)=>{r.setTransform(u*a,h*a,f*a,p*a,g,y),r.drawImage(o[c],0,0),m&&(r.fillStyle=`rgba(20,24,20,${m})`,r.fillRect(0,0,oi,oi))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,l="#8C6640";r.save(),r.translate(24,24),o==="lump"?(r.fillStyle=a,ae(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ae(r,[[-8,-12],[6,-14],[2,-4]])):o==="ingot"?(r.fillStyle=a,ae(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ae(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4)):o==="hide"?(r.fillStyle=a,ae(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ae(r,[[-6,-4],[6,-6],[4,6],[-5,5]])):o==="feather"?(r.rotate(-Math.PI/4),r.fillStyle=a,ae(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32)):o==="dye"?(r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,ae(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ae(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:l,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ae(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ae(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="sword"&&(r.fillRect(-4,-24,8,30),ae(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4))),r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ae(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ae(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function wf(){let n=Mf(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=oi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,l=6+n()*20,c=n()*Math.PI;ae(r,[[a,l],[a+Math.cos(c)*9,l+Math.sin(c)*9],[a+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function Q_(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Oe(t.accent):e,a=(l,c,u)=>{n.fillStyle=u,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,bt(e)),n.fillStyle=bt(e,1.1),ae(n,[[16,26],[9,20],[15,22]]),ae(n,[[17,24],[24,18],[18,21]]),n.fillStyle=bt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;ae(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=bt(Oe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),u=14+Math.floor(i()*14);n.fillStyle=bt(e,i()<.5?.9:1.1),ae(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-u]])}else if(r==="deadbush")n.strokeStyle=bt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=bt(e),n.fillRect(14,18,4,14),n.fillStyle=bt(o),ae(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=bt(Oe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=bt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=bt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else r==="door_open"&&(n.fillStyle=bt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var Ef=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Tf=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function tx(n,t){let e=si(n),i=si(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,u=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,u)<=14&&s.push([e+o,i+r])}return s}function Cf(n){let t=new Wn(n);t.magFilter=Fe,t.minFilter=Fe,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Ke({uniforms:e,vertexShader:Ef,fragmentShader:Tf}),s=new Ke({uniforms:e,vertexShader:Ef,fragmentShader:Tf,transparent:!0,depthWrite:!1,side:yn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Af(n){let t=new en;return t.setAttribute("position",new Be(n.pos,3)),t.setAttribute("uv",new Be(n.uv,2)),t.setAttribute("light",new Be(n.light,1)),t.setAttribute("lt",new Be(n.lt,2,!0)),t.setIndex(new Be(n.index,1)),t.computeBoundingSphere(),t}var $a=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Gi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Ne(Af(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ne(Af(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=si(t),s=si(e),r=af(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=Gi(l.cx,l.cz);if(this.chunks.has(c))continue;let u={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,u),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:u.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let u=c.cx-i,h=c.cz-s;if(u*u+h*h>o*o){for(let f of["o","t"])c[f]&&(this.scene.remove(c[f]),c[f].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,u]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(u-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(Gi(si(t),si(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Pc(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Gi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Pc(t,e,i);if(!r)return!1;let o=Gi(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,yf(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[u,h]of tx(l,c))this.dirtyMesh.add(Gi(u,h));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Hc="hw_world",Cr=null;function Rf(n){n!==Hc&&(Hc=n,Cr=null)}function If(){return Cr||(Cr=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Hc,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Cr)}function Wc(n,t){return If().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Xc=n=>Wc("readonly",t=>t.get(n)),qc=n=>Wc("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Pf(n){let t=await If();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Lf(n){let t={};for(let e of n){let i=await Xc(e);i!==void 0&&(t[e]=i)}await Wc("readwrite",e=>e.clear()),await qc(t)}function F(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var ai=n=>document.querySelector(n);var nx="../../",ix=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],Yc=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Za=null;function sx(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function $c(){return Za||(Za=(async()=>{for(let t of ix)await sx(nx+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Za=null,n})),Za}async function Df(n,{onReward:t,onClose:e,count:i=5}){n.innerHTML="",n.hidden=!1;let s=F("div",{class:"panel quiz"});n.append(s),s.append(F("div",{class:"p-head"},F("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await $c()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let o=window.KE,a=[],l=0,c=0,u=0;function h(){n.hidden=!0,n.innerHTML="",e&&e()}function f(){a=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Yc,lv:1,count:i}),a.length||(a=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:i})),l=0,c=0,u=0,p()}function p(){s.innerHTML="";let m=a[l],d=o.isTyped(m);n._q=m;let A=F("div",{class:"fb"}),P=F("div",{class:"q-body"});s.append(F("div",{class:"p-head"},F("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",F("small",{},`\u7B2C ${l+1} / ${a.length} \u984C`)),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("div",{class:"q-type"},(o.TYPES[m.type]||"\u984C\u76EE")+(d?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),F("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?F("div",{class:"q-sub"},m.sub):null,P,A);let w=!1,E=T=>{if(w)return;w=!0;let D=pf(T,d);T&&(u++,c+=D,t&&t(D)),A.className="fb "+(T?"ok":"bad"),A.append(F("div",{},T?`\u7B54\u5C0D\u4E86\uFF01 +${D} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",T?null:F("b",{class:"en"},m.answer)),!T&&m.why?F("div",{class:"why"},m.why):null,F("button",{class:"btn",onclick:g},l+1<a.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let T=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),D=()=>{w||!T.value.trim()||E(r.check(m,T.value).ok)};T.addEventListener("keydown",v=>{v.stopPropagation(),v.key==="Enter"&&D()}),P.append(F("div",{class:"typerow"},T,F("button",{class:"btn",onclick:D},"\u9001\u51FA"))),setTimeout(()=>T.focus(),50)}else{let T=F("div",{class:"opts"});(m.options||[]).forEach(D=>T.append(F("button",{class:"opt"+(/[a-z]/i.test(D)?" en":""),onclick:v=>{if(w)return;let b=r.check(m,D).ok;v.currentTarget.classList.add(b?"ok":"bad"),E(b)}},D))),P.append(T)}}function g(){l++,l<a.length?p():y()}function y(){s.innerHTML="",s.append(F("div",{class:"p-head"},F("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("p",{class:"big"},`\u7B54\u5C0D ${u} / ${a.length} \u984C\uFF0C\u62FF\u5230 ${c} \u91D1\u5E63`),F("div",{class:"row"},F("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),F("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var rx=new Set(Yc);async function Nf(n,{ids:t=[],onDone:e}){n.innerHTML="",n.hidden=!1;let i=F("div",{class:"panel quiz"});n.append(i),i.append(F("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await $c()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let r=window.KE,o=null;for(let p of t){let g=s.byId[p];if(g&&rx.has(g.type)){o=s.get(p);break}}let a=!!o;o||(o=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Yc,lv:1,count:1})[0]);let l=r.isTyped(o);n._q=o,i.innerHTML="";let c=F("div",{class:"fb"}),u=F("div",{class:"q-body"});i.append(F("div",{class:"p-head"},F("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),F("div",{class:"q-type"},(a?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[o.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),F("div",{class:"q-prompt"+(o.en?" en":"")},o.prompt),o.sub?F("div",{class:"q-sub"},o.sub):null,u,c);let h=!1,f=p=>{h||(h=!0,c.className="fb "+(p?"ok":"bad"),c.append(F("div",{},p?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",p?null:F("b",{class:"en"},o.answer)),!p&&o.why?F("div",{class:"why"},o.why):null,F("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(p,l)}},"\u7E7C\u7E8C")))};if(o.input==="type"){let p=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{h||!p.value.trim()||f(s.check(o,p.value).ok)};p.addEventListener("keydown",y=>{y.stopPropagation(),y.key==="Enter"&&g()}),u.append(F("div",{class:"typerow"},p,F("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>p.focus(),50)}else{let p=F("div",{class:"opts"});(o.options||[]).forEach(g=>p.append(F("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:y=>{if(h)return;let m=s.check(o,g).ok;y.currentTarget.classList.add(m?"ok":"bad"),f(m)}},g))),u.append(p)}}async function Uf(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=F("div",{class:"panel quiz"});n.append(i),i.append(F("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await $c()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,l=0,c=()=>{i.innerHTML="";let u=o[a];n._q=u;let h=F("div",{class:"fb"}),f=F("div",{class:"q-body"});i.append(F("div",{class:"p-head"},F("h2",{},t.title_zh+" ",F("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),F("div",{class:"q-type"},r.TYPES[u.type]||"\u984C\u76EE"),F("div",{class:"q-prompt"+(u.en?" en":"")},u.prompt),u.sub?F("div",{class:"q-sub"},u.sub):null,f,h);let p=!1,g=y=>{p||(p=!0,y&&l++,h.className="fb "+(y?"ok":"bad"),h.append(F("div",{},y?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",y?null:F("b",{class:"en"},u.answer)),!y&&u.why?F("div",{class:"why"},u.why):null,F("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(u.input==="type"){let y=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),m=()=>{p||!y.value.trim()||g(s.check(u,y.value).ok)};y.addEventListener("keydown",d=>{d.stopPropagation(),d.key==="Enter"&&m()}),f.append(F("div",{class:"typerow"},y,F("button",{class:"btn",onclick:m},"\u9001\u51FA"))),setTimeout(()=>y.focus(),50)}else{let y=F("div",{class:"opts"});(u.options||[]).forEach(m=>y.append(F("button",{class:"opt"+(/[a-z]/i.test(m)?" en":""),onclick:d=>{if(p)return;let A=s.check(u,m).ok;d.currentTarget.classList.add(A?"ok":"bad"),g(A)}},m))),f.append(y)}};c()}function Ff(n,t,e){let[i,s]=String(n).split(",").map(Number),r=u=>Dn(4242,i|0,t*7+u,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,l=Math.floor(r(2)*a.length),c=(l+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[l],a[c]]}}function Of(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Cs(n,e.blueprint)?{ok:!1,reason:"owned"}:(Ar(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Tr(t,e.give,e.count,i)?(Ar(n,e.price),ln(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Zc=(n,t,e)=>!!(n&&n[t.id]===e);function Bf(n,t,e,i,s,r,o=()=>64){if(Zc(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Xi(s,t.reward.coins|0);let a={};for(let l in t.reward.items||{}){let c=ln(r,l,t.reward.items[l],o);c&&(a[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function zf(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Jc={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Ja=n=>n==="creative"?"creative":"survival",kf=n=>Jc[Ja(n)].db;function Vf(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Gf(n){let t=Ja(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Hf(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Wf=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var lx=[1,2,4,6,8];function Ka(n,t){if(!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/lx[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Kc(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function Xf(n,t){let e=n&&t.toolOf(n.id);if(!e)return null;let i=e.durability,s=n.dur==null?i:n.dur;return{left:s,max:i,frac:s/i}}var ih={};rl(ih,{collect:()=>eh,createFurnace:()=>jc,dismantle:()=>nh,start:()=>Qc,tick:()=>th});function jc(){return{fuel:0,jobs:[],done:{}}}function Qc(n,t,e,i=4){if(Un(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Un(t,"coal")<1)return{ok:!1,reason:"fuel"};Er(t,"coal",1),n.fuel+=i}return Er(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function th(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function eh(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=ln(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function nh(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var hh={};rl(hh,{MAX_HP:()=>ja,REGEN_EVERY:()=>hx,SAFE_FALL:()=>cx,createHealth:()=>sh,damage:()=>oh,fallDamage:()=>rh,hearts:()=>ch,regen:()=>ah,respawnPoint:()=>lh});var ja=20,cx=4,hx=4;function sh(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function rh(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function oh(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function ah(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function lh(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function ch(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Qa={animal:8,quiz:4};function qf(){return{list:[],nextId:1}}var tl=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Yf(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function $f(n,t){return n<.2&&!t}function Zf(n,t,e){return n.kind==="quiz"?t>.45||e>48:e>72}function Jf(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,u=Math.hypot(l,c);if(u>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/u*s.speed,n.v.z=c/u*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let l=a>1.6?s.speed:0;n.v.x=r/(a||1)*l,n.v.z=o/(a||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Kf(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var jf=(n,t)=>n?(t?2:1)+1:0;function Qf(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,u=1/0;for(let h=0;h<3;h++){if(Math.abs(l[h])<1e-9){if(a[h]<r[h]||a[h]>o[h])return null;continue}let f=(r[h]-a[h])/l[h],p=(o[h]-a[h])/l[h];if(f>p&&([f,p]=[p,f]),c=Math.max(c,f),u=Math.min(u,p),c>u)return null}return c}function td(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var ed=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function nd(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function id(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),l={};Xi(i,o);for(let c in a){let u=ln(e,c,a[c],s);u&&(l[c]=u)}return{ok:!0,coins:o,items:a,leftovers:l,name_zh:r.name_zh}}function sd(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function uh(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function rd(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:uh(n[e].map,n,t).ok?n[e]:null}var $n={};function Rs(n){return $n[n]||($n[n]=new Cn({color:n,transparent:!0}),$n[n].userData.base=new re(n)),$n[n]}var Rr=null;function dx(){if(Rr)return Rr;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Rr=new Wn(n),Rr.colorSpace=He,Rr}function od(n,t){let e=new An,i=n.colors,[s,r]=n.size,o=(l,c,u,h,f,p,g,y)=>{let m=new Ne(new dn(l,c,u),y||Rs(h));return m.position.set(f,p,g),e.add(m),m},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let u=o(.2,.6,.22,i.leg,c,.6,0);u.geometry.translate(0,-.6/2,0),a.push(u)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);$n.__face||($n.__face=new Cn({map:dx(),transparent:!0}),$n.__face.userData.base=new re("#ffffff"));let c=[Rs(i.head),Rs(i.head),Rs(i.head),Rs(i.head),Rs(i.head),$n.__face],u=new Ne(new dn(s*.9,s*.8,s*.8),c);u.position.set(0,r*.72+s*.4,0),e.add(u),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let u=n.id==="chicken"?.3:.45,h=o(u,u,u,i.head,0,l+c+u*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,h.position.y+u/2+.05,h.position.z),o(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-u/2-.05));let f=n.id==="chicken"?.06:.18,p=n.id==="chicken"?0:s*.45,g=s*.3;for(let[y,m]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-g,-p],[g,-p],[-g,p],[g,p]]){let d=o(f,l,f,i.leg,y,l/2,m);d.geometry.translate(0,-l/2,0),d.position.y=l,a.push(d)}}return e.userData.legs=a,e}function ad(n){for(let t in $n){let e=$n[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function fh(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var el="4a8b1e5ef7",dh=new URLSearchParams(location.search),gx=720,cd=5,_x=20261008,xx=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,M={touch:xx,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function hd(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ud(n,t){try{localStorage.setItem(n,t)}catch{}}async function yx(){let n=Ja(hd("hw_mode","survival")),t=Gf(n);Rf(kf(n));let[e,i,s,r,o,a]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json"].map(x=>fetch(x,{cache:"no-cache"}).then(L=>L.json()))),l=of(e),c=i.recipes||[],u=x=>l.maxStack(x),h={};try{let[x,L,K,Q,$,nt,ct]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests"].map(Xc));h={meta:x,player:L,inv:K,coins:Q,furnaces:$,claimed:nt,quests:ct,chunks:await Pf("hw_chunk:")}}catch(x){console.warn("save unavailable",x)}let f=h.meta&&h.meta.seed||_x+Jc[n].seedOffset,p=df(f,l,o),g=vf(Object.fromEntries(Object.entries(h.chunks||{}).map(([x,L])=>[x.slice(9),L]))),y=h.inv?zc(h.inv):Ha();t.creative&&!h.inv&&Wf.forEach((x,L)=>{l.get(x)&&(y.slots[L]={id:x,count:64})});let m=xf(h.coins),d=sh(h.player&&h.player.hp!=null?h.player.hp:20);M.bed=h.player&&h.player.bed||null;let A=r.portals||[],P=Array.isArray(h.claimed)?h.claimed.slice():[],w=h.furnaces||{},E=h.quests||{},T=i.smelt||[],D=i.fuelPerCoal||4;h.meta&&typeof h.meta.time=="number"&&(M.time=h.meta.time);let v=ai("#c"),b=new Oa({canvas:v,antialias:!1,powerPreference:"high-performance"});b.setPixelRatio(Math.min(window.devicePixelRatio||1,M.touch?1.5:1.25));let C=new js,N=new re("#EFEBDD");C.background=N;let V=new Je(72,1,.08,200);V.rotation.order="YXZ";let U=Sf(l),I=bf(l,U),O=Cf(U.canvas),Y=new Worker("assets/hw-worker.js?v="+el),B=new $a({scene:C,mats:O,reg:l,worker:Y,diffs:g,onDirty:x=>M.dirty.add(x)}),st=Math.max(2,Math.min(6,parseInt(dh.get("rd")||hd("hw_rd",M.touch?"3":"4"),10)||4));B.setRenderDistance(st),V.far=st*16+40,V.updateProjectionMatrix();let W=await new Promise(x=>{let L=K=>{K.data.type==="ready"&&(Y.removeEventListener("message",L),x(K.data.spawn))};Y.addEventListener("message",L),Y.postMessage({type:"init",seed:f,blocks:e,structures:o,diffs:Object.fromEntries([...g].map(([K,Q])=>[K,Gc(Q)]))})});h.player?Object.assign(M,{p:{x:h.player.x,y:h.player.y,z:h.player.z},yaw:h.player.yaw||0,pitch:h.player.pitch||0,fly:!!h.player.fly,sel:h.player.sel|0}):(M.p={x:W.x,y:W.y,z:W.z},M.yaw=Math.atan2(-(W.stele.x+.5-W.x),-(W.stele.z+.5-W.z)),M.pitch=-.15);let it=new sr(new ar(new dn(1.004,1.004,1.004)),new gs({color:1382164,transparent:!0,opacity:.45}));it.visible=!1,C.add(it);let rt=wf().map(x=>new Wn(x)),vt=new Ne(new dn(1.01,1.01,1.01),new Cn({map:rt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));vt.visible=!1,C.add(vt);let mt=(x,L)=>{let K=document.createElement("canvas");K.width=K.height=64;let Q=K.getContext("2d");Q.fillStyle=x,Q.beginPath(),Q.arc(32,32,28,0,7),Q.fill(),L&&(Q.globalCompositeOperation="destination-out",Q.beginPath(),Q.arc(44,26,24,0,7),Q.fill());let $=new Wn(K);return $.colorSpace=He,$},St=new Oi(new xi({map:mt("#F2C46B"),depthWrite:!1,fog:!1})),Mt=new Oi(new xi({map:mt("#EDE6D0",!0),depthWrite:!1,fog:!1}));C.add(St,Mt);let _t=new An,H=(x,L,K,Q,$,nt,ct)=>{let gt=new Ne(new dn(x,L,K),new Cn({color:Q}));return gt.position.set($,nt,ct),gt.userData.base=new re(Q),_t.add(gt),gt},tt=H(.24,.75,.26,"#26302A",-.14,.375,0),xt=H(.24,.75,.26,"#26302A",.14,.375,0);H(.56,.7,.3,"#2F5A34",0,1.1,0);let Ut=H(.18,.66,.2,"#E7CDA6",-.38,1.12,0),dt=H(.18,.66,.2,"#E7CDA6",.38,1.12,0);H(.46,.42,.42,"#E7CDA6",0,1.66,0),H(.5,.14,.46,"#151714",0,1.9,.02),H(.12,.12,.05,"#E0352B",.16,1.92,-.24),[tt,xt,Ut,dt].forEach(x=>{x.geometry.translate(0,-x.geometry.parameters.height/2+.05,0),x.position.y+=x.geometry.parameters.height/2-.05}),_t.visible=!1,C.add(_t);let Ft={},Qt=x=>Ft[x]||(Ft[x]=(()=>{let L=new Image;L.src=I[x];let K=new qe(L);return K.colorSpace=He,L.onload=()=>{K.needsUpdate=!0},new xi({map:K,depthWrite:!0,alphaTest:.3})})());function zt(x,L,K,Q){let $=new Oi(Qt(x));$.scale.set(.42,.42,1),C.add($),M.drops.push({id:x,s:$,p:{x:L,y:K,z:Q},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let $t=(x,L,K)=>{let Q=B.get(x,L,K);return l.flat.solid[Q]===1&&(l.flat.boxes[Q]||!0)},te=Object.fromEntries((s.mobs||[]).map(x=>[x.id,x])),Bt=qf(),ee=new Map,we=0;function Ae(x,L){for(let K=61;K>0;K--){let Q=B.get(x,K,L);if(l.flat.solid[Q])return B.get(x,K+1,L)||B.get(x,K+2,L)?null:{y:K+1,n:Q};if(l.flat.liquid[Q])return null}return null}function _e(x,L,K,Q=7){for(let $=-Q;$<=Q;$++)for(let nt=-Q;nt<=Q;nt++)for(let ct=-Q;ct<=Q;ct++)if(l.flat.lightEmit[B.get(x+ct,L+$,K+nt)])return!0;return!1}function xe(x,L,K,Q,$){let nt=Yf(Bt,x,{x:L+.5,y:K,z:Q+.5}),ct=od(x,$);return ee.set(nt.id,ct),C.add(ct),nt}let k=new Set;function Ce(){for(let x of p.villages.around(M.p.x-64,M.p.z-64,M.p.x+64,M.p.z+64))if(!(k.has(x.id)||!B.ready(x.x,x.z))){k.add(x.id);for(let L=0;L<x.villagers;L++){let K=Ff(x.id,L,a),Q=x.x+(L%2?2:-2),$=x.z+(L-1),nt=Ae(Q,$),ct=xe(te.villager,Q,nt?nt.y:x.y+1,$,K.prof.color);Object.assign(ct,{home:{x:x.x,z:x.z},village:x.id,role:K})}}}function ue(x){te.villager&&Ce();let L=Math.random()*Math.PI*2,K=14+Math.random()*14,Q=Math.floor(M.p.x+Math.cos(L)*K),$=Math.floor(M.p.z+Math.sin(L)*K);if(!B.ready(Q,$))return;let nt=Ae(Q,$);if(nt)if(tl(Bt,"animal")<Qa.animal&&nt.n===l.num("grass")&&x>.3){let ct=Object.values(te).filter(qt=>qt.kind==="animal"),gt=ct[Math.floor(Math.random()*ct.length)],yt=1+Math.floor(Math.random()*3);for(let qt=0;qt<yt&&tl(Bt,"animal")<Qa.animal;qt++){let Jt=Q+qt%2,pe=$+(qt>>1),Se=Ae(Jt,pe);Se&&xe(gt,Jt,Se.y,pe)}}else t.quizMobs&&tl(Bt,"quiz")<Qa.quiz&&$f(x,_e(Q,nt.y,$))&&te.quizling&&xe(te.quizling,Q,nt.y,$)}function R(x,L,K){we+=x,we>2.5&&M.started&&(we=0,ue(L));for(let Q=Bt.list.length-1;Q>=0;Q--){let $=Bt.list[Q],nt=ee.get($.id),ct=Math.hypot($.p.x-M.p.x,$.p.z-M.p.z);if($.gone){$.goneT=($.goneT||0)+x,fh(nt,$,K/1e3),$.goneT>.35&&(C.remove(nt),ee.delete($.id),Bt.list.splice(Q,1));continue}if(Zf($,L,ct)){$.gone=!0,$.goneT=0,$.village&&k.delete($.village);continue}if(!B.ready($.p.x,$.p.z))continue;Jf($,M.p,x,Math.random),$.v.y-=20*x,$.v.y<-20&&($.v.y=-20);let gt=Va($.p,$.v,x,$t,{w:Math.min(.9,$.def.size[0]),h:$.def.size[1],canStep:!0,grounded:$.onGround});$.onGround=gt.onGround,l.flat.liquid[B.get($.p.x,$.p.y+.3,$.p.z)]&&($.v.y=2),fh(nt,$,K/1e3)}ad(.35+.65*L)}function _(x,L,K){let Q,$;x==="screen"?(hn.set(L/innerWidth*2-1,-(K/innerHeight)*2+1,.5).unproject(V).sub(V.position).normalize(),Q={x:V.position.x,y:V.position.y,z:V.position.z},$={x:hn.x,y:hn.y,z:hn.z}):(Q=Ri(),$=Yi());let nt=x==="screen"?_n("screen",L,K):_n("center"),ct=null,gt=M.view==="tp"&&x==="screen"?8:4.5;nt&&(gt=Math.min(gt,nt.dist+.5));for(let yt of Bt.list){if(yt.gone)continue;let qt=Qf(Q,$,yt.p,yt.def.size[0],yt.def.size[1]);qt!=null&&qt<gt&&(gt=qt,ct=yt)}return ct}function X(){try{return td(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function j(x){if(x.kind==="villager"){if(!t.trading){ft("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}Ps(x);return}if(x.kind==="animal"){let K=y.slots[M.sel],Q=!!(K&&l.toolOf(K.id)&&l.toolOf(K.id).type==="sword"),$=Kf(x,Q,Math.random);if(x.v.y=4,x.v.x+=(x.p.x-M.p.x)*1.5,x.v.z+=(x.p.z-M.p.z)*1.5,Q){let nt=Kc(y,M.sel,l);nt.broke&&ft(`\u4F60\u7684${l.name(nt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Pt()}if($&&$.drops)for(let nt=0;nt<$.drops.n;nt++)zt($.drops.id,x.p.x,x.p.y+.6,x.p.z);return}if(x.busy)return;x.busy=!0,Fn(),document.pointerLockElement&&document.exitPointerLock(),M.overlay="ask";let L=X().slice(0,30).sort(()=>Math.random()-.5);Nf(ot.ov,{ids:L,onDone:(K,Q)=>{if(M.overlay=null,x.busy=!1,K){let $=jf(!0,Q);Xi(m,$),lt(),x.gone=!0,x.goneT=0,ft(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${$} \u91D1\u5E63`),M.dirtyMeta=!0,Tt(),M.stats.quizWins=(M.stats.quizWins||0)+1}else if(K===!1){let $=M.p.x-x.p.x,nt=M.p.z-x.p.z,ct=Math.hypot($,nt)||1;M.v.x=$/ct*7,M.v.z=nt/ct*7,M.v.y=4.5,x.p.x-=$/ct*1.5,x.p.z-=nt/ct*1.5,ft("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let at=(x,L,K)=>B.get(x,L,K),ot=vx();function ft(x){let L=F("div",{class:"toast"},x);ot.toasts.append(L),setTimeout(()=>L.remove(),2200)}function lt(){ot.coins.textContent=m.coins}let ut="";function Et(){let x=ch(d.hp),L=x.join();L!==ut&&(ut=L,ot.hearts.innerHTML="",x.forEach(K=>ot.hearts.append(F("i",{class:"ht "+K}))))}function Yt(x){if(M.dead||x<=0||!t.damage)return;let L=oh(d,x);Et(),M.dirtyMeta=!0,ot.flash.classList.remove("on"),ot.flash.offsetWidth,ot.flash.classList.add("on"),L&&Rt()}function Rt(){M.dead=!0,Fn(),document.pointerLockElement&&document.exitPointerLock(),M.overlay="dead";let x=ot.ov;x.innerHTML="",x.hidden=!1,x.append(F("div",{class:"panel start"},F("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),F("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),F("button",{class:"btn big",onclick:At},M.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function At(){let x=lh(M.bed,W,!!M.bed);M.p={x:x.x,y:x.y,z:x.z},M.v={x:0,y:0,z:0},M.fallTop=x.y,d.hp=20,M.dead=!1,Et(),Le(),M.dirtyMeta=!0,ft(M.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Pt(){ot.hotbar.innerHTML="";for(let L=0;L<9;L++){let K=y.slots[L];ot.hotbar.append(F("button",{class:"slot"+(L===M.sel?" on":""),"aria-label":K?l.name(K.id):"\u7A7A\u683C",onpointerdown:Q=>{Q.stopPropagation(),M.sel=L,Pt()}},K?F("img",{src:I[K.id],alt:""}):null,K&&K.count>1?F("span",{class:"cnt"},K.count):null,Zt(K),F("span",{class:"key"},L+1)))}let x=y.slots[M.sel];ot.selName.textContent=x?l.name(x.id):""}function Zt(x){let L=Xf(x,l);return!L||L.left>=L.max?null:F("span",{class:"dur"+(L.frac<.25?" low":"")},F("i",{style:"width:"+Math.round(L.frac*100)+"%"}))}function ie(x=4){let L=new Set,K=Math.floor(M.p.x),Q=Math.floor(M.p.y),$=Math.floor(M.p.z);for(let nt=-x;nt<=x;nt++)for(let ct=-x;ct<=x;ct++)for(let gt=-x;gt<=x;gt++){let yt=B.get(K+gt,Q+nt,$+ct);yt&&L.add(l.get(yt).id)}return L}let G=()=>({near:ie(),owned:new Set(m.owned)}),wt=-1;function ht(){let x=ot.ov;x.innerHTML="",x.hidden=!1;let L=F("div",{class:"inv-grid"}),K=gt=>{let yt=y.slots[gt];return F("button",{class:"slot"+(gt===wt?" pick":"")+(gt<9?" hb":""),title:yt?l.name(yt.id):"",onclick:()=>{wt<0?y.slots[gt]&&(wt=gt):(Bc(y,wt,gt,u),wt=-1,M.dirtyMeta=!0),ht(),Pt()}},yt?F("img",{src:I[yt.id],alt:""}):null,yt&&yt.count>1?F("span",{class:"cnt"},yt.count):null,Zt(yt))};for(let gt=9;gt<36;gt++)L.append(K(gt));let Q=F("div",{class:"inv-grid hbrow"});for(let gt=0;gt<9;gt++)Q.append(K(gt));let $=F("div",{class:"craft"},F("h3",{},"\u5408\u6210"));if(t.creative){let gt=F("div",{class:"craft"},F("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),F("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),yt=F("div",{class:"cat-grid"});Hf(l).forEach(qt=>yt.append(F("button",{class:"slot",title:l.name(qt),onclick:()=>{y.slots[M.sel]={id:qt,count:64},M.dirtyMeta=!0,Pt(),ht(),ft(`${l.name(qt)} \u653E\u9032\u7B2C ${M.sel+1} \u683C`)}},F("img",{src:I[qt],alt:""})))),gt.append(yt),x.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("div",{class:"inv-wrap"},F("div",{},F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),L,Q),gt)));return}let nt=G(),ct={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};c.forEach(gt=>{let yt=qa(y,gt,nt),qt=yt.ok;gt.blueprint&&yt.reason==="blueprint"&&!Object.keys(gt.in).some(Jt=>Jt!=="stick"&&Un(y,Jt)>0)||$.append(F("div",{class:"rcp"+(qt?"":" no")},F("img",{src:I[gt.out.id],alt:""}),F("div",{class:"rcp-t"},F("b",{},`${gt.name_zh} \xD7${gt.out.count}`),F("small",{},Object.keys(gt.in).map(Jt=>`${l.name(Jt)} ${Un(y,Jt)}/${gt.in[Jt]}`).join("\u3001")+(ct[yt.reason]?"\u3000\xB7 "+ct[yt.reason]:""))),F("button",{class:"btn small",onclick:()=>{let Jt=kc(y,gt,u,G());Jt.ok?(ft(`\u505A\u597D\u4E86\uFF1A${gt.name_zh} \xD7${gt.out.count}`),M.dirtyMeta=!0):ft({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Jt.reason]||"\u6750\u6599\u4E0D\u5920"),ht(),Pt()}},"\u88FD\u4F5C")))}),x.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u80CC\u5305"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("div",{class:"inv-wrap"},F("div",{},F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),L,Q),$)))}let Ct=mf(l);function Nt(){let x=ot.ov;x.innerHTML="",x.hidden=!1;let L=F("div",{class:"shop"}),K=rd(A,sn());Ct.filter(Q=>!Q.id.startsWith("portal_")||K&&Q.id===K.block).forEach(Q=>L.append(F("div",{class:"offer"+(Q.locked?" locked":"")},F("img",{src:I[Q.id],alt:""}),F("div",{class:"of-t"},F("b",{},`${Q.name_zh}${Q.qty>1?" \xD7"+Q.qty:""}`),F("small",{},Q.locked?`\uFF08${Q.locked}\uFF09`:`${Q.price} \u91D1\u5E63${Q.desc?"\u3000"+Q.desc:""}`)),Cs(m,Q.id)?F("span",{class:"owned"},"\u5DF2\u64C1\u6709"):F("button",{class:"btn small",disabled:Q.locked?!0:null,onclick:()=>pt(Q)},Q.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),x.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u5546\u5E97\u3000",F("span",{class:"coin"}),` ${m.coins}`),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),L))}function pt(x){let L=gf(m,y,x,u);L.ok?(ft(x.blueprint?`\u62FF\u5230 ${x.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${x.name_zh} \xD7${x.qty}`),M.dirtyMeta=!0,lt(),Pt(),Tt()):ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[L.reason]||"\u8CB7\u4E0D\u4E86"),Nt()}let Xt=null;function kt(){let x=ot.ov,L=w[Xt]||(w[Xt]=jc());x.innerHTML="",x.hidden=!1;let K=L.jobs[0],Q=F("div",{class:"shop"});T.forEach(nt=>{let ct=Un(y,nt.in);Q.append(F("div",{class:"offer"+(ct?"":" locked")},F("img",{src:I[nt.in],alt:""}),F("div",{class:"of-t"},F("b",{},`${l.name(nt.in)} \u2192 ${l.name(nt.out)}`),F("small",{},`\u6709 ${ct} \u500B \xB7 \u6BCF\u500B ${nt.time} \u79D2`)),F("button",{class:"btn small",onclick:()=>{let gt=Qc(L,y,nt,D);gt.ok||ft(gt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),M.dirtyMeta=!0,Pt(),kt()}},"\u653E\u9032\u53BB")))});let $=Object.values(L.done).reduce((nt,ct)=>nt+ct,0);x.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u7194\u7210"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,L.fuel-L.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Un(y,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${D} \u500B\uFF09`),F("div",{class:"furnace-st"},K?`\u6B63\u5728\u71D2\uFF1A${l.name(K.in)}\uFF08\u9084\u8981 ${Math.ceil(K.left)} \u79D2\uFF0C\u6392\u968A ${L.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),F("div",{class:"row"},F("button",{class:"btn",disabled:$?null:!0,onclick:()=>{let nt=eh(L,y,u);nt&&ft(`\u62FF\u51FA ${nt} \u500B`),M.dirtyMeta=!0,Pt(),kt()}},`\u62FF\u51FA\u4F86\uFF08${$}\uFF09`)),Q))}let ve=null,de=(x,L)=>{try{return JSON.parse(localStorage.getItem(x)||"null")||L}catch{return L}},sn=()=>sd(de("hw_portal_rewards",[]),de("hi_save",null),A),gn='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function nl(){let x=A.find($=>$.map===ve),L=ot.ov;if(L.innerHTML="",L.hidden=!1,!x){Le();return}let K=Object.keys(x.reward.items).map($=>`${l.name($)} \xD7${x.reward.items[$]}`).join("\u3001"),Q=uh(x.map,A,sn());if(!Q.ok){L.append(F("div",{class:"panel start"},F("div",{class:"p-head"},F("h2",{},"\u50B3\u9001\u9580\u30FB"+x.name_zh),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("div",{class:"padlock",html:gn}),F("p",{class:"big"},`\u5148\u6253\u5012 ${Q.need.boss_zh} \u624D\u80FD\u9032\u5165`),F("p",{class:"muted"},`\u5F9E\u300C${Q.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${Q.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),F("div",{class:"row"},F("button",{class:"btn ghost",onclick:Le},"\u77E5\u9053\u4E86"))));return}L.append(F("div",{class:"panel start"},F("div",{class:"p-head"},F("h2",{},"\u50B3\u9001\u9580\u30FB"+x.name_zh),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${x.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${x.reward.coins} \u91D1\u5E63\u3001${K}\u3002`),F("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),F("div",{class:"row"},F("button",{class:"btn big",onclick:async()=>{await Tt(),M.leaving=ed(x.map),location.href=M.leaving}},"\u9032\u5165"),F("button",{class:"btn ghost",onclick:Le},"\u5148\u4E0D\u8981"))))}function Is(){if(!t.portals)return 0;let x;try{x=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{x=[]}let L=nd(x,P);for(let K of L){let Q=id(K,A,y,m,u);if(P.push(K.id),!!Q.ok){for(let $ in Q.leftovers)for(let nt=0;nt<Q.leftovers[$];nt++)zt($,M.p.x,M.p.y+1,M.p.z);ft(`\u5F9E${Q.name_zh}\u5E36\u56DE\u4F86\uFF1A${Q.coins} \u91D1\u5E63\u3001${Object.keys(Q.items).map($=>l.name($)+" \xD7"+Q.items[$]).join("\u3001")}`)}}return L.length&&(lt(),Pt(),M.dirtyMeta=!0,Tt()),L.length}let li=null;function Ps(x){li=x,x.busy=!0,cn("trade")}function Ls(){let x=li,L=ot.ov;if(!x)return Le();L.innerHTML="",L.hidden=!1;let K=x.role,Q=zf(),$=F("div",{class:"shop"});K.prof.offers.forEach(ct=>{let gt=ct.blueprint||ct.give,yt=!!ct.blueprint,qt=yt&&l.blueprints.find(pe=>pe.id===ct.blueprint),Jt=yt&&Cs(m,ct.blueprint);$.append(F("div",{class:"offer"},F("img",{src:I[gt],alt:""}),F("div",{class:"of-t"},F("b",{},yt?qt.name_zh:`${l.name(gt)}${ct.count>1?" \xD7"+ct.count:""}`),F("small",{},`${ct.price} \u91D1\u5E63${yt?"\u3000"+(qt.desc||""):""}`)),Jt?F("span",{class:"owned"},"\u5DF2\u64C1\u6709"):F("button",{class:"btn small",onclick:()=>{let pe=Of(m,y,ct,u);pe.ok?(ft(yt?`\u62FF\u5230 ${qt.name_zh}\uFF01`:`\u8CB7\u5230 ${l.name(gt)} \xD7${ct.count}`),M.dirtyMeta=!0,lt(),Pt(),Tt()):ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[pe.reason]||"\u8CB7\u4E0D\u4E86"),Ls()}},"\u8CFC\u8CB7")))});let nt=F("div",{class:"quests"});K.quests.forEach(ct=>{let gt=Zc(E,ct,Q),yt=Object.keys(ct.reward.items||{}).map(qt=>`${l.name(qt)} \xD7${ct.reward.items[qt]}`).join("\u3001");nt.append(F("div",{class:"offer quest"+(gt?" locked":"")},F("div",{class:"of-t"},F("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+ct.title_zh),F("small",{},`${ct.desc}\uFF0C\u7B54\u5C0D ${ct.need} \u984C \u2192 ${ct.reward.coins} \u91D1\u5E63\u3001${yt}`)),gt?F("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):F("button",{class:"btn small",onclick:()=>{M.overlay="quest",Uf(ot.ov,{quest:ct,onDone:qt=>{if(M.overlay="trade",qt>=0){let Jt=Bf(E,ct,qt,Q,m,y,u);if(Jt.ok){for(let pe in Jt.leftovers)for(let Se=0;Se<Jt.leftovers[pe];Se++)zt(pe,M.p.x,M.p.y+1,M.p.z);ft(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Jt.coins} \u91D1\u5E63\u3001${yt}`),lt(),Pt(),M.dirtyMeta=!0,Tt(),M.stats.quests=(M.stats.quests||0)+1}else ft(`\u7B54\u5C0D ${qt} \u984C\uFF0C\u8981 ${ct.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Ls()}})}},"\u63A5\u59D4\u8A17")))}),L.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},`\u6751\u6C11\u30FB${K.prof.name_zh}\u3000`,F("span",{class:"coin"}),` ${m.coins}`),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("h3",{},"\u4EA4\u6613"),$,F("h3",{},"\u82F1\u6587\u59D4\u8A17"),F("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),nt))}function Ir(){let x=ot.ov;x.innerHTML="",x.hidden=!1;let L=F("b",{},B.rd),K=F("input",{type:"range",min:2,max:6,step:1,value:B.rd,oninput:Q=>{L.textContent=Q.target.value},onchange:Q=>{let $=+Q.target.value;B.setRenderDistance($),V.far=$*16+40,V.updateProjectionMatrix(),ud("hw_rd",$)}});x.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u8A2D\u5B9A"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Le},"\xD7")),F("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",L,K),F("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),F("div",{class:"row"},F("button",{class:"btn ghost",onclick:Ds},"\u91CD\u7F6E\u4E16\u754C"),t.creative?F("button",{class:"btn",onclick:()=>qi("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):F("button",{class:"btn",onclick:Zn},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),F("div",{id:"pinbox"}),F("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),F("p",{},F("a",{class:"home-link",href:"../../#s/game",onclick:()=>{Tt()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),F("p",{class:"muted small"},"\u7248\u672C "+el)))}async function qi(x){await Tt(),ud("hw_mode",x),M.resetting=!0,location.reload()}function Zn(){let x=document.getElementById("pinbox"),L=window.KSParentPin;if(x.innerHTML="",!L||!L.isSet()){x.append(F("div",{class:"pin-ask"},F("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),F("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let K=F("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),Q=()=>{let $=Vf(L,K.value.trim());$.ok?qi("creative"):(ft($.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),K.value="")};K.addEventListener("keydown",$=>{$.stopPropagation(),$.key==="Enter"&&Q()}),x.append(F("div",{class:"pin-ask"},F("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),F("div",{class:"typerow"},K,F("button",{class:"btn",onclick:Q},"\u78BA\u5B9A")))),setTimeout(()=>K.focus(),50)}async function Ds(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){M.resetting=!0;try{await Lf(["hw_coins"])}catch(x){console.warn(x)}location.reload()}}function cn(x){document.pointerLockElement&&document.exitPointerLock(),M.overlay=x,Fn(),x==="inv"?(wt=-1,ht()):x==="shop"?Nt():x==="set"?Ir():x==="furnace"?kt():x==="portal"?nl():x==="trade"?Ls():x==="quiz"&&Df(ot.ov,{onReward:L=>{Xi(m,L),lt(),M.dirtyMeta=!0,Tt()},onClose:()=>{M.overlay=null}})}function Le(){ot.ov.hidden=!0,ot.ov.innerHTML="",M.overlay=null,li&&(li.busy=!1,li=null)}ot.btnInv.onclick=()=>M.overlay==="inv"?Le():cn("inv"),ot.btnShop.onclick=()=>M.overlay==="shop"?Le():cn("shop"),ot.btnSet.onclick=()=>M.overlay==="set"?Le():cn("set"),ot.btnView.onclick=()=>Ci();function Ci(){M.view=M.view==="fp"?"tp":"fp",ft(M.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Ns(){M.fly=!M.fly,M.v.y=0,ot.root.classList.toggle("flying",M.fly),ft(M.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let hn=new q;function Yi(){let x=Math.cos(M.pitch);return{x:-Math.sin(M.yaw)*x,y:Math.sin(M.pitch),z:-Math.cos(M.yaw)*x}}let Ri=()=>({x:M.p.x,y:M.p.y+1.62+M.eyeOff,z:M.p.z}),Pr=x=>x&&!l.flat.liquid[x];function _n(x,L,K){if(x==="screen"){hn.set(L/innerWidth*2-1,-(K/innerHeight)*2+1,.5).unproject(V).sub(V.position).normalize();let ct=V.position,gt=M.view==="tp"?ct.distanceTo(new q(M.p.x,M.p.y+1.62,M.p.z)):0,yt={x:ct.x,y:ct.y,z:ct.z},qt={x:hn.x,y:hn.y,z:hn.z},Jt=Ga(yt,qt,cd+1+gt,at,Pr);return Jt&&(Jt.at={x:yt.x+qt.x*Jt.dist,y:yt.y+qt.y*Jt.dist,z:yt.z+qt.z*Jt.dist}),Jt}let Q=Ri(),$=Yi(),nt=Ga(Q,$,cd,at,Pr);return nt&&(nt.at={x:Q.x+$.x*nt.dist,y:Q.y+$.y*nt.dist,z:Q.z+$.z*nt.dist}),nt}function Fn(){M.mining.active=!1,M.mining.k="",M.mining.t=0,vt.visible=!1}function il(x,L,K){let Q=l.get(B.get(x,L,K)),$=l.get(Q.openAs||Q.closeAs);if(!$)return;let nt=gt=>{let yt=l.get(gt);return yt&&yt.interact==="door"},ct=L;for(;nt(B.get(x,ct-1,K));)ct--;for(let gt=ct;nt(B.get(x,gt,K));gt++)B.set(x,gt,K,$.n);M.dirtyMeta=!0}let Us=()=>{let x=y.slots[M.sel];return x?l.toolOf(x.id):null};function S(x){let L=x.n,K=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Ka(l.get(L),Us());if(!B.set(x.x,x.y,x.z,0))return;let Q=K.harvest?l.dropOf(L):null;Q?zt(Q,x.x+.5,x.y+.4,x.z+.5):!K.harvest&&!K.creative&&ft(`${l.name(L)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let $=B.get(x.x,x.y+1,x.z);if(l.flat.plant[$]){B.set(x.x,x.y+1,x.z,0);let ct=t.drops&&l.dropOf($);ct&&zt(ct,x.x+.5,x.y+1.3,x.z+.5)}if(l.get(L).interact==="door")for(let ct of[-1,1]){let gt=B.get(x.x,x.y+ct,x.z);l.get(gt)&&l.get(gt).interact==="door"&&B.set(x.x,x.y+ct,x.z,0)}let nt=x.x+","+x.y+","+x.z;if(M.bed&&M.bed.x===x.x&&M.bed.y===x.y&&M.bed.z===x.z&&(M.bed=null,ft("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),w[nt]){let ct=nh(w[nt]);for(let gt in ct)for(let yt=0;yt<ct[gt];yt++)zt(gt,x.x+.5,x.y+.4,x.z+.5);delete w[nt]}if(K.usesTool){let ct=Kc(y,M.sel,l);ct.broke&&ft(`\u4F60\u7684${l.name(ct.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Pt()}M.dirtyMeta=!0,M.stats.mined++}function z(x){if(!x)return!1;let L=l.get(x.n);if(L&&L.interact==="quiz")return t.coins?(cn("quiz"),!0):(ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let K=y.slots[M.sel]&&l.get(y.slots[M.sel].id).placeable;if(L&&L.interact==="door")return il(x.x,x.y,x.z),!0;if(L&&L.interact==="portal"&&!K&&!t.portals)return ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(L&&L.interact==="portal"&&!K)return ve=L.portal,cn("portal"),!0;if(L&&L.interact==="bed"&&!K)return M.bed={x:x.x,y:x.y,z:x.z},M.dirtyMeta=!0,ft("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(L&&L.interact==="craft"&&!K)return cn("inv"),!0;if(L&&L.interact==="furnace"&&!K)return Xt=x.x+","+x.y+","+x.z,cn("furnace"),!0;let Q=y.slots[M.sel];if(!Q)return ft("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let $=l.get(Q.id);if(!$||!$.placeable)return ft(`${l.name(Q.id)} \u4E0D\u80FD\u653E`),!1;if($.place==="slab"&&$.fullAs&&x.n===$.n&&x.face[1]===1&&B.set(x.x,x.y,x.z,l.num($.fullAs)))return t.consume&&Wa(y,M.sel,1),Pt(),M.stats.placed++,M.dirtyMeta=!0,!0;let nt=l.flat.plant[x.n]&&!l.flat.plant[$.n],ct=nt?x.x:x.x+x.face[0],gt=nt?x.y:x.y+x.face[1],yt=nt?x.z:x.z+x.face[2];if(gt<0||gt>=64)return!1;let qt=B.get(ct,gt,yt);if(qt&&!l.flat.liquid[qt]&&!(nt&&l.flat.plant[qt]))return!1;let Jt=.6/2;if($.solid&&ct+1>M.p.x-Jt&&ct<M.p.x+Jt&&yt+1>M.p.z-Jt&&yt<M.p.z+Jt&&gt+1>M.p.y&&gt<M.p.y+1.8)return!1;if(l.flat.plant[$.n]&&!l.flat.solid[B.get(ct,gt-1,yt)])return ft(`${$.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let pe=$.n;if($.place==="slab"){let Se=x.at?x.at.y-Math.floor(x.at.y):0;(x.face[1]===-1||x.face[1]===0&&Se>.5)&&l.get($.id+"_top")&&(pe=l.num($.id+"_top"))}else if($.place==="stairs"){let Se=-Math.sin(M.yaw),De=-Math.cos(M.yaw),Mn=Math.abs(Se)>Math.abs(De)?Se>0?1:3:De>0?2:0,ci=l.get($.id+["","_e","_s","_w"][Mn]);ci&&(pe=ci.n)}return B.set(ct,gt,yt,pe)?($.interact==="door"&&!B.get(ct,gt+1,yt)&&B.set(ct,gt+1,yt,$.n),t.consume&&Wa(y,M.sel,1),M.dirtyMeta=!0,Pt(),M.stats.placed++,!0):!1}addEventListener("keydown",x=>{if(x.target&&x.target.tagName==="INPUT")return;let L=x.key.toLowerCase();if(L==="e"){M.overlay==="inv"?Le():!M.overlay&&cn("inv"),x.preventDefault();return}if(M.overlay!=="dead"&&!(M.overlay==="ask"||M.overlay==="quest")){if(L==="escape"&&M.overlay){M.overlay==="quiz"?(ot.ov.hidden=!0,ot.ov.innerHTML="",M.overlay=null):Le();return}M.overlay||(M.keys[L]=!0,x.code==="Space"&&(M.keys[" "]=!0,x.preventDefault()),L>="1"&&L<="9"&&(M.sel=+L-1,Pt()),L==="f"&&Ns(),L==="v"&&Ci())}}),addEventListener("keyup",x=>{M.keys[x.key.toLowerCase()]=!1,x.code==="Space"&&(M.keys[" "]=!1)}),addEventListener("blur",()=>{M.keys={},Fn()}),v.addEventListener("mousedown",x=>{if(!(M.touch||M.overlay)){if(document.pointerLockElement!==v){v.requestPointerLock&&v.requestPointerLock();return}if(x.button===0){let L=_("center");if(L){j(L);return}M.mining.active=!0,M.mining.src="center"}x.button===2&&(z(_n("center")),M.placeRepeat=.3,M.rightHeld=!0)}}),addEventListener("mouseup",x=>{x.button===0&&Fn(),x.button===2&&(M.rightHeld=!1)}),v.addEventListener("contextmenu",x=>x.preventDefault()),addEventListener("mousemove",x=>{document.pointerLockElement===v&&(M.yaw-=x.movementX*.0024,M.pitch=Math.max(-1.55,Math.min(1.55,M.pitch-x.movementY*.0024)))}),addEventListener("wheel",x=>{M.overlay||M.touch||(M.sel=(M.sel+(x.deltaY>0?1:8))%9,Pt())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{ot.root.classList.toggle("locked",document.pointerLockElement===v)});let et=new Map;function J(x){M.touch!==x&&(M.touch=x,ot.root.classList.toggle("touch",x),document.body.classList.toggle("is-touch",x))}ot.root.classList.toggle("touch",M.touch),document.body.classList.toggle("is-touch",M.touch),v.addEventListener("pointerdown",x=>{if(x.pointerType!=="touch"||(J(!0),M.overlay))return;if(x.preventDefault(),x.clientX<innerWidth*.4&&x.clientY>innerHeight*.35&&!M.joy.active){M.joy={x:0,y:0,active:!0,id:x.pointerId,ox:x.clientX,oy:x.clientY},ot.joy.style.transform=`translate(${x.clientX-60}px, ${x.clientY-60}px)`,ot.joy.hidden=!1,ot.knob.style.transform="translate(0px,0px)",et.set(x.pointerId,{kind:"joy"});return}let L={kind:"look",x:x.clientX,y:x.clientY,sx:x.clientX,sy:x.clientY,t0:performance.now(),drag:!1,hold:!1};L.timer=setTimeout(()=>{L.drag||(L.hold=!0,M.mining.active=!0,M.mining.src="screen",M.mining.sx=L.x,M.mining.sy=L.y)},280),et.set(x.pointerId,L)},{passive:!1}),addEventListener("pointermove",x=>{let L=et.get(x.pointerId);if(!L)return;if(L.kind==="joy"){let $=x.clientX-M.joy.ox,nt=x.clientY-M.joy.oy,ct=Math.hypot($,nt),gt=55;ct>gt&&($*=gt/ct,nt*=gt/ct),M.joy.x=$/gt,M.joy.y=nt/gt,ot.knob.style.transform=`translate(${$}px,${nt}px)`;return}let K=x.clientX-L.x,Q=x.clientY-L.y;L.x=x.clientX,L.y=x.clientY,!L.drag&&Math.hypot(L.x-L.sx,L.y-L.sy)>12&&(L.drag=!0,clearTimeout(L.timer),L.hold&&(Fn(),L.hold=!1)),L.drag?(M.yaw-=K*.0055,M.pitch=Math.max(-1.55,Math.min(1.55,M.pitch-Q*.0055))):L.hold&&(M.mining.sx=L.x,M.mining.sy=L.y)});let Z=x=>{let L=et.get(x.pointerId);if(L){if(et.delete(x.pointerId),L.kind==="joy"){M.joy={x:0,y:0,active:!1},ot.joy.hidden=!0;return}if(clearTimeout(L.timer),L.hold)Fn();else if(!L.drag&&performance.now()-L.t0<280&&!M.overlay){let K=_("screen",L.x,L.y);K?j(K):z(_n("screen",L.x,L.y))}}};addEventListener("pointerup",Z),addEventListener("pointercancel",Z);let Lt=(x,L,K)=>{x.addEventListener("pointerdown",Q=>{Q.preventDefault(),Q.stopPropagation(),L()}),x.addEventListener("pointerup",K),x.addEventListener("pointercancel",K),x.addEventListener("pointerleave",K)};Lt(ot.bJump,()=>{M.jumpHeld=!0},()=>{M.jumpHeld=!1}),Lt(ot.bDown,()=>{M.downHeld=!0},()=>{M.downHeld=!1}),ot.bFly.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),Ns()}),ot.bPlace.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),z(_n("center"))}),document.addEventListener("touchmove",x=>{x.target.closest(".scroll, .panel")||x.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(x=>document.addEventListener(x,L=>L.preventDefault(),{passive:!1})),ot.start.hidden=!1,ot.go.onclick=()=>{ot.start.hidden=!0,M.started=!0,M.paused=!1,ot.root.classList.add("started"),!M.touch&&v.requestPointerLock&&v.requestPointerLock()};async function Tt(){if(M.resetting)return;let x={hw_meta:{v:1,seed:f,time:M.time,build:el},hw_player:{x:M.p.x,y:M.p.y,z:M.p.z,yaw:M.yaw,pitch:M.pitch,fly:M.fly,sel:M.sel,hp:d.hp,bed:M.bed},hw_inventory:Xa(y),hw_coins:_f(m),hw_furnaces:w,hw_quests:E,hw_portal_claimed:P.slice(-200)};for(let L of M.dirty){let K=g.get(L);K&&(x["hw_chunk:"+L]=Gc(K))}M.dirty.clear(),M.dirtyMeta=!1;try{await qc(x),M.lastSave=Date.now()}catch(L){console.warn("save failed",L)}}setInterval(()=>{M.started&&Tt()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&M.started&&Tt()}),addEventListener("pagehide",()=>{M.started&&Tt()}),M.stats={mined:0,placed:0};function It(){let x=innerWidth,L=innerHeight;b.setSize(x,L,!1),V.aspect=x/L,V.updateProjectionMatrix()}addEventListener("resize",It),It(),lt(),Pt(),Et(),t.creative&&(ai("#coinpill").hidden=!0,ai("#modebadge").hidden=!1,ot.btnShop.hidden=!0,ot.hearts.hidden=!0),Is(),addEventListener("pageshow",x=>{x.persisted&&Is()});let Vt=performance.now(),Gt=0,se=0,le=new re("#EFEBDD"),Ht=new re("#22302F"),me=new re("#E6B48C");function Re(x){requestAnimationFrame(Re);let L=(x-Vt)/1e3;Vt=x;let K=Math.min(.05,L);M.frames.push(L*1e3),M.frames.length>4e3&&M.frames.shift(),B.update(M.p.x,M.p.z);let Q=B.ready(M.p.x,M.p.z);M.auto&&Xe(K),M.started&&!M.overlay&&Q&&Me(K),M.started&&!M.dead&&ah(d,K)&&(Et(),M.dirtyMeta=!0),M.time=(M.time+K/gx)%1;let $=M.time*Math.PI*2,nt=Math.sin($),ct=Math.min(1,Math.max(0,(nt+.12)/.42));N.copy(Ht).lerp(le,ct);let gt=Math.max(0,1-Math.abs(nt)/.3)*(ct>.05?1:.4);N.lerp(me,gt*.55),O.uniforms.uDay.value=ct,O.uniforms.uFog.value.set(...Ee(N));let yt=Ri();M.eyeOff*=Math.pow(5e-4,K);let qt=Yi();if(M.view==="tp"){let Se=Ga(yt,{x:-qt.x,y:-qt.y,z:-qt.z},4,at,Mn=>l.flat.opaque[Mn]===1),De=Se?Math.max(.4,Se.dist-.25):4;V.position.set(yt.x-qt.x*De,yt.y-qt.y*De,yt.z-qt.z*De)}else V.position.set(yt.x,yt.y,yt.z);V.rotation.set(M.pitch,M.yaw,0);let Jt=V.far*.8;if(St.position.set(V.position.x+Math.cos($)*Jt,V.position.y+Math.sin($)*Jt,V.position.z+.25*Jt),St.scale.setScalar(Jt*.14),Mt.position.set(V.position.x-Math.cos($)*Jt,V.position.y-Math.sin($)*Jt,V.position.z-.25*Jt),Mt.scale.setScalar(Jt*.1),_t.visible=M.view==="tp",_t.visible){_t.position.set(M.p.x,M.p.y,M.p.z),_t.rotation.y=M.yaw;let Se=Math.hypot(M.v.x,M.v.z),De=Math.sin(x/120)*Math.min(1,Se/4)*.7;tt.rotation.x=De,xt.rotation.x=-De,Ut.rotation.x=-De,dt.rotation.x=De;let Mn=.35+.65*ct;_t.children.forEach(ci=>ci.material.color.copy(ci.userData.base).multiplyScalar(Mn))}for(let Se in Ft)Ft[Se].color.setScalar(.4+.6*ct);let pe=M.started&&!M.overlay?M.mining.active&&M.mining.src==="screen"?_n("screen",M.mining.sx,M.mining.sy):_n("center"):null;if(pe?(it.visible=!0,it.position.set(pe.x+.5,pe.y+.5,pe.z+.5)):it.visible=!1,M.mining.active&&pe){let Se=pe.x+","+pe.y+","+pe.z;Se!==M.mining.k&&(M.mining.k=Se,M.mining.t=0),M.mining.t+=K;let De=t.creative?l.get(pe.n).hardness<0?1/0:t.breakTime:Ka(l.get(pe.n),Us()).time;if(De===1/0)vt.visible=!1,M.mining.warned||(ft(l.name(pe.n)+"\u6316\u4E0D\u52D5"),M.mining.warned=!0);else{let Mn=M.mining.t/De;vt.visible=!0,vt.position.copy(it.position),vt.material.map=rt[Math.min(3,Math.floor(Mn*4))],Mn>=1&&(S(pe),M.mining.k="",M.mining.t=0,vt.visible=!1)}}else vt.visible=!1,M.mining.active||(M.mining.warned=!1);M.rightHeld&&!M.overlay&&(M.placeRepeat-=K,M.placeRepeat<=0&&(z(_n("center")),M.placeRepeat=.25)),Ve(K),R(M.overlay?0:K,ct,x);for(let Se in w){let De=w[Se];De.jobs.length&&(th(De,K),M.dirtyMeta=!0,M.overlay==="furnace"&&Se===Xt&&(M.furnUi=(M.furnUi||0)+K)>.5&&(M.furnUi=0,kt()))}b.render(C,V),Gt+=L,se++,Gt>.5&&(ot.dbg&&(ot.dbg.textContent=`${Math.round(se/Gt)} fps \xB7 \u5340\u584A ${B.stats.loaded} \xB7 ${ff[p.biomeOf(Math.floor(M.p.x),Math.floor(M.p.z))]} \xB7 ${M.p.x.toFixed(1)}, ${M.p.y.toFixed(1)}, ${M.p.z.toFixed(1)}`),Gt=0,se=0),!Q&&M.started?ot.loading.hidden=!1:ot.loading.hidden=!0}function Ee(x){let L=x.getHexString();return[parseInt(L.slice(0,2),16)/255,parseInt(L.slice(2,4),16)/255,parseInt(L.slice(4,6),16)/255]}function Me(x){let L=M.keys,K=(L.d?1:0)-(L.a?1:0),Q=(L.w?1:0)-(L.s?1:0);M.joy.active&&(K=M.joy.x,Q=-M.joy.y);let $=Math.min(1,Math.hypot(K,Q));if($>0){let Ii=Math.hypot(K,Q);K=K/Ii*$,Q=Q/Ii*$}let nt=-Math.sin(M.yaw),ct=-Math.cos(M.yaw),gt=Math.cos(M.yaw),yt=-Math.sin(M.yaw),qt=L.control||!M.fly&&L.shift||M.joy.active&&$>.92,Jt=at(M.p.x,M.p.y+.1,M.p.z),pe=at(M.p.x,M.p.y+1,M.p.z),Se=l.flat.liquid[Jt]===1||l.flat.liquid[pe]===1,De=M.fly?10:Se?2.6:qt?6.2:4.3,Mn=(nt*Q+gt*K)*De,ci=(ct*Q+yt*K)*De,Lr=L[" "]||M.jumpHeld,ph=M.fly&&L.shift||M.downHeld;if(M.fly)M.v.x=Mn,M.v.z=ci,M.v.y=((Lr?1:0)-(ph?1:0))*8;else{let Ii=M.onGround?14:5,gh=1-Math.exp(-Ii*x);M.v.x+=(Mn-M.v.x)*gh,M.v.z+=(ci-M.v.z)*gh,Se?(M.v.y-=9*x,M.v.y<-3&&(M.v.y=-3),Lr&&(M.v.y=3.4)):l.flat.climb[Jt]||l.flat.climb[pe]?(M.v.y=Lr||Q>.1?3.2:ph?-3:Math.max(M.v.y-28*x,-1.5),M.fallTop=M.p.y):(M.v.y-=28*x,M.v.y<-40&&(M.v.y=-40),Lr&&M.onGround&&(M.v.y=8.6,M.onGround=!1))}let mh=M.onGround,sl=Va(M.p,M.v,x,$t,{canStep:!M.fly,grounded:M.onGround});if(M.onGround=sl.onGround,sl.stepped&&(M.eyeOff-=sl.stepped),M.fallTop==null||M.fly||Se||M.onGround&&mh?M.fallTop=M.p.y:M.onGround||(M.fallTop=Math.max(M.fallTop,M.p.y)),M.onGround&&!mh){let Ii=rh(M.fallTop-M.p.y,{water:Se,flying:M.fly});Ii&&(Yt(Ii),ft("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),M.fallTop=M.p.y}M.p.y<-20&&(M.p={x:W.x,y:W.y+1,z:W.z},M.v={x:0,y:0,z:0},M.fallTop=M.p.y)}function Ve(x){let L=M.p.x,K=M.p.y+.9,Q=M.p.z;for(let $=M.drops.length-1;$>=0;$--){let nt=M.drops[$];nt.age+=x;let ct=L-nt.p.x,gt=K-nt.p.y,yt=Q-nt.p.z,qt=Math.hypot(ct,gt,yt);if(qt<1.5&&nt.age>.25&&ln(y,nt.id,1,u)===0){C.remove(nt.s),M.drops.splice($,1),M.dirtyMeta=!0,Pt();continue}if(qt<4.5&&nt.age>.25?(nt.v.x=ct/qt*6,nt.v.y=gt/qt*6,nt.v.z=yt/qt*6,nt.p.x+=nt.v.x*x,nt.p.y+=nt.v.y*x,nt.p.z+=nt.v.z*x):(nt.v.y-=18*x,nt.v.x*=.9,nt.v.z*=.9,Va(nt.p,nt.v,x,$t,{w:.25,h:.25})),nt.age>300){C.remove(nt.s),M.drops.splice($,1);continue}nt.s.position.set(nt.p.x,nt.p.y+.2+Math.sin(nt.age*3)*.06,nt.p.z)}}M.auto=dh.get("auto")==="walk";let Ot=0;function Xe(x){M.started||ot.go.click(),Ot+=x,M.keys.w=!0,M.keys[" "]=Ot%1.6<.15,M.yaw+=x*.08}window.HW={build:el,G:M,reg:l,inv:y,wallet:m,world:B,Inv:Vc,MODE:n,RULE:t,switchMode:qi,questState:E,tradesJson:a,spawnVillagers:Ce,terr:p,claimPortalRewards:Is,portals:A,claimedIds:P,mobS:Bt,mobDefs:te,spawnMob:xe,hitMob:j,mobAt:_,surfaceY:Ae,health:d,hurt:Yt,Health:hh,furnaces:w,Smelt:ih,smeltList:T,recipes:c,craftCtx:G,breakInfo:Ka,start(){ot.go.click()},state(){return{pos:{...M.p},coins:m.coins,inv:Xa(y),loaded:B.stats.loaded,stats:{...M.stats},overlay:M.overlay,fly:M.fly}},lookAt(x,L,K){let Q=Ri(),$=x-Q.x,nt=L-Q.y,ct=K-Q.z;M.yaw=Math.atan2(-$,-ct),M.pitch=Math.atan2(nt,Math.hypot($,ct))},target(){let x=_n("center");return x&&{x:x.x,y:x.y,z:x.z,n:x.n,face:x.face}},mine(x){x?(M.mining.active=!0,M.mining.src="center"):Fn()},use(){return z(_n("center"))},key(x,L){M.keys[x]=L},open:cn,close:Le,save:Tt,spawn:W,perf(){return{frames:M.frames.slice(),meshMs:B.stats.meshMs.slice(),genMs:B.stats.genMs.slice(),loaded:B.stats.loaded}},resetPerf(){M.frames.length=0,B.stats.meshMs.length=0,B.stats.genMs.length=0},ready:()=>B.ready(M.p.x,M.p.z)},requestAnimationFrame(Re)}function vx(){let n=ai("#ui"),t=e=>n.querySelector(e);return dh.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),hearts:t("#hearts"),flash:ai("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:ai("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:ai("#start"),go:ai("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}yx().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
