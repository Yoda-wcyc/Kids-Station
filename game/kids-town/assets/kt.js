(()=>{var Bu=0,Tc=1,zu=2;var Br=1,Vu=2,Gs=3,zi=0,xn=1,Ln=2,ri=0,Hs=1,Cc=2,Rc=3,Pc=4,Gu=5;var os=100,Hu=101,Wu=102,Xu=103,qu=104,$u=200,Yu=201,Zu=202,Ju=203,Ic=204,Lc=205,Ku=206,ju=207,Qu=208,tf=209,ef=210,nf=211,sf=212,rf=213,of=214,Xo=0,qo=1,$o=2,ks=3,Yo=4,Zo=5,Jo=6,Ko=7,Dc=0,af=1,lf=2,Hn=0,Nc=1,Uc=2,Fc=3,kc=4,Oc=5,Bc=6,zc=7;var Vc=300,Vi=301,as=302,Aa=303,Ea=304,zr=306,jo=1e3,Qn=1001,Qo=1002,Qe=1003,cf=1004;var Vr=1005;var qe=1006,Ta=1007;var Gi=1008;var Rn=1009,Gc=1010,Hc=1011,Ws=1012,Ca=1013,Wn=1014,Xn=1015,qn=1016,Ra=1017,Pa=1018,Xs=1020,Wc=35902,Xc=35899,qc=1021,$c=1022,Dn=1023,ti=1026,Hi=1027,Yc=1028,Ia=1029,Wi=1030,La=1031;var Da=1033,Gr=33776,Hr=33777,Wr=33778,Xr=33779,Na=35840,Ua=35841,Fa=35842,ka=35843,Oa=36196,Ba=37492,za=37496,Va=37488,Ga=37489,qr=37490,Ha=37491,Wa=37808,Xa=37809,qa=37810,$a=37811,Ya=37812,Za=37813,Ja=37814,Ka=37815,ja=37816,Qa=37817,tl=37818,el=37819,nl=37820,il=37821,sl=36492,rl=36494,ol=36495,al=36283,ll=36284,$r=36285,cl=36286;var vr=2300,ta=2301,Ho=2302,bc=2303,Mc=2400,Sc=2401,wc=2402;var hf=3200;var Zc=0,uf=1,Si="",Ve="srgb",br="srgb-linear",Mr="linear",Se="srgb";var Wo=7680;var ff=519,df=512,pf=513,mf=514,hl=515,gf=516,xf=517,ul=518,_f=519,Jc=35044;var Kc="300 es",Gn=2e3,Sr=2001;function jp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yf(){let n=wr("canvas");return n.style.display="block",n}var _u={},Os=null;function Ar(...n){let t="THREE."+n.shift();Os?Os("log",t,...n):console.log(t,...n)}function vf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=vf(n);let t="THREE."+n.shift();if(Os)Os("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=vf(n);let t="THREE."+n.shift();if(Os)Os("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function rs(...n){let t=n.join(" ");t in _u||(_u[t]=!0,Wt(...n))}function bf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Mf={[Xo]:qo,[$o]:Jo,[Yo]:Ko,[ks]:Zo,[qo]:Xo,[Jo]:$o,[Ko]:Yo,[Zo]:ks},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jl=Math.PI/180,ea=180/Math.PI;function Di(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function tm(n,t){return(n%t+t)%t}function Ql(n,t,e){return(1-e)*n+e*t}function jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nh=class nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;var oe=nh,ni=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let h=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3],d=r[o+0],x=r[o+1],_=r[o+2],M=r[o+3];if(u!==M||h!==d||c!==x||f!==_){let g=h*d+c*x+f*_+u*M;g<0&&(d=-d,x=-x,_=-_,M=-M,g=-g);let m=1-a;if(g<.9995){let P=Math.acos(g),D=Math.sin(P);m=Math.sin(m*P)/D,a=Math.sin(a*P)/D,h=h*m+d*a,c=c*m+x*a,f=f*m+_*a,u=u*m+M*a}else{h=h*m+d*a,c=c*m+x*a,f=f*m+_*a,u=u*m+M*a;let P=1/Math.sqrt(h*h+c*c+f*f+u*u);h*=P,c*=P,f*=P,u*=P}}t[e]=h,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],h=i[s+1],c=i[s+2],f=i[s+3],u=r[o],d=r[o+1],x=r[o+2],_=r[o+3];return t[e]=a*_+f*u+h*x-c*d,t[e+1]=h*_+f*d+c*u-a*x,t[e+2]=c*_+f*x+a*d-h*u,t[e+3]=f*_-a*u-h*d-c*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,c=a(i/2),f=a(s/2),u=a(r/2),d=h(i/2),x=h(s/2),_=h(r/2);switch(o){case"XYZ":this._x=d*f*u+c*x*_,this._y=c*x*u-d*f*_,this._z=c*f*_+d*x*u,this._w=c*f*u-d*x*_;break;case"YXZ":this._x=d*f*u+c*x*_,this._y=c*x*u-d*f*_,this._z=c*f*_-d*x*u,this._w=c*f*u+d*x*_;break;case"ZXY":this._x=d*f*u-c*x*_,this._y=c*x*u+d*f*_,this._z=c*f*_+d*x*u,this._w=c*f*u-d*x*_;break;case"ZYX":this._x=d*f*u-c*x*_,this._y=c*x*u+d*f*_,this._z=c*f*_-d*x*u,this._w=c*f*u+d*x*_;break;case"YZX":this._x=d*f*u+c*x*_,this._y=c*x*u+d*f*_,this._z=c*f*_-d*x*u,this._w=c*f*u-d*x*_;break;case"XZY":this._x=d*f*u-c*x*_,this._y=c*x*u-d*f*_,this._z=c*f*_+d*x*u,this._w=c*f*u+d*x*_;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],c=e[2],f=e[6],u=e[10],d=i+a+u;if(d>0){let x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(f-h)*x,this._y=(r-c)*x,this._z=(o-s)*x}else if(i>a&&i>u){let x=2*Math.sqrt(1+i-a-u);this._w=(f-h)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+c)/x}else if(a>u){let x=2*Math.sqrt(1+a-i-u);this._w=(r-c)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(h+f)/x}else{let x=2*Math.sqrt(1+u-i-a);this._w=(o-s)/x,this._x=(r+c)/x,this._y=(h+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+s*c-r*h,this._y=s*f+o*h+r*a-i*c,this._z=r*f+o*c+i*h-s*a,this._w=o*f-i*a-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let h=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);h=Math.sin(h*c)/f,e=Math.sin(e*c)/f,this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ih=class ih{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,c=2*(o*s-a*i),f=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+h*c+o*u-a*f,this.y=i+h*f+a*c-r*u,this.z=s+h*u+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-i*h,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;var Q=ih,tc=new Q,yu=new ni,sh=class sh{constructor(t,e,i,s,r,o,a,h,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,c)}set(t,e,i,s,r,o,a,h,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=h,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],h=i[6],c=i[1],f=i[4],u=i[7],d=i[2],x=i[5],_=i[8],M=s[0],g=s[3],m=s[6],P=s[1],D=s[4],S=s[7],E=s[2],T=s[5],U=s[8];return r[0]=o*M+a*P+h*E,r[3]=o*g+a*D+h*T,r[6]=o*m+a*S+h*U,r[1]=c*M+f*P+u*E,r[4]=c*g+f*D+u*T,r[7]=c*m+f*S+u*U,r[2]=d*M+x*P+_*E,r[5]=d*g+x*D+_*T,r[8]=d*m+x*S+_*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*r*f+i*a*h+s*r*c-s*o*h}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],f=t[8],u=f*o-a*c,d=a*h-f*r,x=c*r-o*h,_=e*u+i*d+s*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=u*M,t[1]=(s*c-f*i)*M,t[2]=(a*i-s*o)*M,t[3]=d*M,t[4]=(f*e-s*h)*M,t[5]=(s*r-a*e)*M,t[6]=x*M,t[7]=(i*h-c*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let h=Math.cos(r),c=Math.sin(r);return this.set(i*h,i*c,-i*(h*o+c*a)+o+t,-s*c,s*h,-s*(-c*o+h*a)+a+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var $t=sh,ec=new $t,vu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:t,whitePoint:i,transfer:Mr,toXYZ:vu,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:vu,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),n}var he=em();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ys,na=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ys===void 0&&(ys=wr("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ys}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nm=0,Bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?na.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var im=0,ic=new Q,gn=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=qe,o=Gi,a=Dn,h=Rn,c=n.DEFAULT_ANISOTROPY,f=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Di(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Vc;gn.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,h=t.elements,c=h[0],f=h[4],u=h[8],d=h[1],x=h[5],_=h[9],M=h[2],g=h[6],m=h[10];if(Math.abs(f-d)<.01&&Math.abs(u-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,S=(x+1)/2,E=(m+1)/2,T=(f+d)/4,U=(u+M)/4,w=(_+g)/4;return D>S&&D>E?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=T/i,r=U/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=w/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=U/r,s=w/r),this.set(i,s,r,e),this}let P=Math.sqrt((g-_)*(g-_)+(u-M)*(u-M)+(d-f)*(d-f));return Math.abs(P)<.001&&(P=1),this.x=(g-_)/P,this.y=(u-M)/P,this.z=(d-f)/P,this.w=Math.acos((c+x+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var ke=rh,ia=class extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new gn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends ia{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Er=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wa=class wa{constructor(t,e,i,s,r,o,a,h,c,f,u,d,x,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,c,f,u,d,x,_,M,g)}set(t,e,i,s,r,o,a,h,c,f,u,d,x,_,M,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=h,m[2]=c,m[6]=f,m[10]=u,m[14]=d,m[3]=x,m[7]=_,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*f,x=o*u,_=a*f,M=a*u;e[0]=h*f,e[4]=-h*u,e[8]=c,e[1]=x+_*c,e[5]=d-M*c,e[9]=-a*h,e[2]=M-d*c,e[6]=_+x*c,e[10]=o*h}else if(t.order==="YXZ"){let d=h*f,x=h*u,_=c*f,M=c*u;e[0]=d+M*a,e[4]=_*a-x,e[8]=o*c,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=x*a-_,e[6]=M+d*a,e[10]=o*h}else if(t.order==="ZXY"){let d=h*f,x=h*u,_=c*f,M=c*u;e[0]=d-M*a,e[4]=-o*u,e[8]=_+x*a,e[1]=x+_*a,e[5]=o*f,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let d=o*f,x=o*u,_=a*f,M=a*u;e[0]=h*f,e[4]=_*c-x,e[8]=d*c+M,e[1]=h*u,e[5]=M*c+d,e[9]=x*c-_,e[2]=-c,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let d=o*h,x=o*c,_=a*h,M=a*c;e[0]=h*f,e[4]=M-d*u,e[8]=_*u+x,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=x*u+_,e[10]=d-M*u}else if(t.order==="XZY"){let d=o*h,x=o*c,_=a*h,M=a*c;e[0]=h*f,e[4]=-u,e[8]=c*f,e[1]=d*u+M,e[5]=o*f,e[9]=x*u-_,e[2]=_*u-x,e[6]=a*f,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,i){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ci.crossVectors(i,Sn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ci.crossVectors(i,Sn)),Ci.normalize(),bo.crossVectors(Sn,Ci),s[0]=Ci.x,s[4]=bo.x,s[8]=Sn.x,s[1]=Ci.y,s[5]=bo.y,s[9]=Sn.y,s[2]=Ci.z,s[6]=bo.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],h=i[8],c=i[12],f=i[1],u=i[5],d=i[9],x=i[13],_=i[2],M=i[6],g=i[10],m=i[14],P=i[3],D=i[7],S=i[11],E=i[15],T=s[0],U=s[4],w=s[8],R=s[12],I=s[1],F=s[5],z=s[9],X=s[13],k=s[2],q=s[6],st=s[10],et=s[14],pt=s[3],$=s[7],lt=s[11],ut=s[15];return r[0]=o*T+a*I+h*k+c*pt,r[4]=o*U+a*F+h*q+c*$,r[8]=o*w+a*z+h*st+c*lt,r[12]=o*R+a*X+h*et+c*ut,r[1]=f*T+u*I+d*k+x*pt,r[5]=f*U+u*F+d*q+x*$,r[9]=f*w+u*z+d*st+x*lt,r[13]=f*R+u*X+d*et+x*ut,r[2]=_*T+M*I+g*k+m*pt,r[6]=_*U+M*F+g*q+m*$,r[10]=_*w+M*z+g*st+m*lt,r[14]=_*R+M*X+g*et+m*ut,r[3]=P*T+D*I+S*k+E*pt,r[7]=P*U+D*F+S*q+E*$,r[11]=P*w+D*z+S*st+E*lt,r[15]=P*R+D*X+S*et+E*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],c=t[13],f=t[2],u=t[6],d=t[10],x=t[14],_=t[3],M=t[7],g=t[11],m=t[15],P=h*x-c*d,D=a*x-c*u,S=a*d-h*u,E=o*x-c*f,T=o*d-h*f,U=o*u-a*f;return e*(M*P-g*D+m*S)-i*(_*P-g*E+m*T)+s*(_*D-M*E+m*U)-r*(_*S-M*T+g*U)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],h=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-i*(r*f-a*h)+s*(r*c-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],c=t[7],f=t[8],u=t[9],d=t[10],x=t[11],_=t[12],M=t[13],g=t[14],m=t[15],P=e*a-i*o,D=e*h-s*o,S=e*c-r*o,E=i*h-s*a,T=i*c-r*a,U=s*c-r*h,w=f*M-u*_,R=f*g-d*_,I=f*m-x*_,F=u*g-d*M,z=u*m-x*M,X=d*m-x*g,k=P*X-D*z+S*F+E*I-T*R+U*w;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/k;return t[0]=(a*X-h*z+c*F)*q,t[1]=(s*z-i*X-r*F)*q,t[2]=(M*U-g*T+m*E)*q,t[3]=(d*T-u*U-x*E)*q,t[4]=(h*I-o*X-c*R)*q,t[5]=(e*X-s*I+r*R)*q,t[6]=(g*S-_*U-m*D)*q,t[7]=(f*U-d*S+x*D)*q,t[8]=(o*z-a*I+c*w)*q,t[9]=(i*I-e*z-r*w)*q,t[10]=(_*T-M*S+m*P)*q,t[11]=(u*S-f*T-x*P)*q,t[12]=(a*R-o*F-h*w)*q,t[13]=(e*F-i*R+s*w)*q,t[14]=(M*D-_*E-g*P)*q,t[15]=(f*E-u*D+d*P)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,h=t.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*h,c*h+s*a,0,c*a+s*h,f*a+i,f*h-s*o,0,c*h-s*a,f*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,c=r+r,f=o+o,u=a+a,d=r*c,x=r*f,_=r*u,M=o*f,g=o*u,m=a*u,P=h*c,D=h*f,S=h*u,E=i.x,T=i.y,U=i.z;return s[0]=(1-(M+m))*E,s[1]=(x+S)*E,s[2]=(_-D)*E,s[3]=0,s[4]=(x-S)*T,s[5]=(1-(d+m))*T,s[6]=(g+P)*T,s[7]=0,s[8]=(_+D)*U,s[9]=(g-P)*U,s[10]=(1-(d+M))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=vs.set(s[0],s[1],s[2]).length(),a=vs.set(s[4],s[5],s[6]).length(),h=vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);let c=1/o,f=1/a,u=1/h;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=h,this}makePerspective(t,e,i,s,r,o,a=Gn,h=!1){let c=this.elements,f=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),x=(i+s)/(i-s),_,M;if(h)_=r/(o-r),M=o*r/(o-r);else if(a===Gn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Sr)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Gn,h=!1){let c=this.elements,f=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),x=-(i+s)/(i-s),_,M;if(h)_=1/(o-r),M=o/(o-r);else if(a===Gn)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Sr)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=x,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};wa.prototype.isMatrix4=!0;var Oe=wa,vs=new Q,On=new Oe,sm=new Q(0,0,0),rm=new Q(1,1,1),Ci=new Q,bo=new Q,Sn=new Q,Mu=new Oe,Su=new ni,Ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],c=s[5],f=s[9],u=s[2],d=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,x),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},om=0,wu=new Q,bs=new ni,mi=new Oe,Mo=new Q,dr=new Q,am=new Q,lm=new ni,Au=new Q(1,0,0),Eu=new Q(0,1,0),Tu=new Q(0,0,1),Cu={type:"added"},cm={type:"removed"},Ms={type:"childadded",child:null},sc={type:"childremoved",child:null},An=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Q,e=new Ni,i=new ni,s=new Q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new $t}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(dr,Mo,this.up):mi.lookAt(Mo,dr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(mi),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let c=0,f=h.length;c<f;c++){let u=h[c];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),c=o(t.textures),f=o(t.images),u=o(t.shapes),d=o(t.skeletons),x=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),x.length>0&&(i.animations=x),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let h=[];for(let c in a){let f=a[c];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=f.position.distanceTo(u.position),x=.02,_=.005;c.inputState.pinching&&d>x+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=x-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},So={h:0,s:0,l:0};function rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=tm(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=rc(o,r,t+1/3),this.g=rc(o,r,t),this.b=rc(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ve){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let i=Sf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return he.workingToColorSpace(hn.copy(this),t),Math.round(fe(hn.r*255,0,255))*65536+Math.round(fe(hn.g*255,0,255))*256+Math.round(fe(hn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(hn.copy(this),e);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),h,c,f=(a+o)/2;if(a===o)h=0,c=0;else{let u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-i)/u+2;break;case r:h=(i-s)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=f,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ve){he.workingToColorSpace(hn.copy(this),t);let e=hn.r,i=hn.g,s=hn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(So);let i=Ql(Ri.h,So.h,e),s=Ql(Ri.s,So.s,e),r=Ql(Ri.l,So.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Yt;Yt.NAMES=Sf;var Cr=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new Q,gi=new Q,oc=new Q,xi=new Q,Ss=new Q,ws=new Q,Ru=new Q,ac=new Q,lc=new Q,cc=new Q,hc=new ke,uc=new ke,fc=new ke,vi=class n{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Bn.subVectors(s,e),gi.subVectors(i,e),oc.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(gi),h=Bn.dot(oc),c=gi.dot(gi),f=gi.dot(oc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,x=(c*h-a*f)*d,_=(o*f-a*h)*d;return r.set(1-x-_,_,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,i,s,r,o,a,h){return this.getBarycoord(t,e,i,s,xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,xi.x),h.addScaledVector(o,xi.y),h.addScaledVector(a,xi.z),h)}static getInterpolatedAttribute(t,e,i,s,r,o){return hc.setScalar(0),uc.setScalar(0),fc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,i),fc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(t,e,i,s){return Bn.subVectors(i,e),gi.subVectors(t,e),Bn.cross(gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,i),ws.subVectors(r,i),ac.subVectors(t,i);let h=Ss.dot(ac),c=ws.dot(ac);if(h<=0&&c<=0)return e.copy(i);lc.subVectors(t,s);let f=Ss.dot(lc),u=ws.dot(lc);if(f>=0&&u<=f)return e.copy(s);let d=h*u-f*c;if(d<=0&&h>=0&&f<=0)return o=h/(h-f),e.copy(i).addScaledVector(Ss,o);cc.subVectors(t,r);let x=Ss.dot(cc),_=ws.dot(cc);if(_>=0&&x<=_)return e.copy(r);let M=x*c-h*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(ws,a);let g=f*_-x*u;if(g<=0&&u-f>=0&&x-_>=0)return Ru.subVectors(r,s),a=(u-f)/(u-f+(x-_)),e.copy(s).addScaledVector(Ru,a);let m=1/(g+M+d);return o=M*m,a=d*m,e.copy(i).addScaledVector(Ss,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),Ao.subVectors(this.max,pr),As.subVectors(t.a,pr),Es.subVectors(t.b,pr),Ts.subVectors(t.c,pr),Pi.subVectors(Es,As),Ii.subVectors(Ts,Es),es.subVectors(As,Ts);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-es.z,es.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,es.z,0,-es.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-es.y,es.x,0];return!dc(e,As,Es,Ts,Ao)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,As,Es,Ts,Ao))?!1:(Eo.crossVectors(Pi,Ii),e=[Eo.x,Eo.y,Eo.z],dc(e,As,Es,Ts,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zn=new Q,wo=new ii,As=new Q,Es=new Q,Ts=new Q,Pi=new Q,Ii=new Q,es=new Q,pr=new Q,Ao=new Q,Eo=new Q,ns=new Q;function dc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),h=t.dot(ns),c=e.dot(ns),f=i.dot(ns);if(Math.max(-Math.max(h,c,f),Math.min(h,c,f))>a)return!1}return!0}var Xe=new Q,To=new oe,um=0,$e=class extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Pr=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var In=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},fm=new ii,mr=new Q,pc=new Q,Vs=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);let e=mr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(pc)),this.expandByPoint(mr.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dm=0,Pn=new Oe,mc=new An,Cs=new Q,wn=new ii,gr=new ii,je=new Q,En=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jp(t)?Pr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new In(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(wn.min,gr.min),wn.expandByPoint(je),je.addVectors(wn.max,gr.max),wn.expandByPoint(je)):(wn.expandByPoint(gr.min),wn.expandByPoint(gr.max))}wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],h=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)je.fromBufferAttribute(a,c),h&&(Cs.fromBufferAttribute(t,c),je.add(Cs)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],h=[];for(let w=0;w<i.count;w++)a[w]=new Q,h[w]=new Q;let c=new Q,f=new Q,u=new Q,d=new oe,x=new oe,_=new oe,M=new Q,g=new Q;function m(w,R,I){c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,R),u.fromBufferAttribute(i,I),d.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),_.fromBufferAttribute(r,I),f.sub(c),u.sub(c),x.sub(d),_.sub(d);let F=1/(x.x*_.y-_.x*x.y);isFinite(F)&&(M.copy(f).multiplyScalar(_.y).addScaledVector(u,-x.y).multiplyScalar(F),g.copy(u).multiplyScalar(x.x).addScaledVector(f,-_.x).multiplyScalar(F),a[w].add(M),a[R].add(M),a[I].add(M),h[w].add(g),h[R].add(g),h[I].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let w=0,R=P.length;w<R;++w){let I=P[w],F=I.start,z=I.count;for(let X=F,k=F+z;X<k;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let D=new Q,S=new Q,E=new Q,T=new Q;function U(w){E.fromBufferAttribute(s,w),T.copy(E);let R=a[w];D.copy(R),D.sub(E.multiplyScalar(E.dot(R))).normalize(),S.crossVectors(T,R);let F=S.dot(h[w])<0?-1:1;o.setXYZW(w,D.x,D.y,D.z,F)}for(let w=0,R=P.length;w<R;++w){let I=P[w],F=I.start,z=I.count;for(let X=F,k=F+z;X<k;X+=3)U(t.getX(X+0)),U(t.getX(X+1)),U(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,x=i.count;d<x;d++)i.setXYZ(d,0,0,0);let s=new Q,r=new Q,o=new Q,a=new Q,h=new Q,c=new Q,f=new Q,u=new Q;if(t)for(let d=0,x=t.count;d<x;d+=3){let _=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,_),h.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(f),h.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,x=e.count;d<x;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,h){let c=a.array,f=a.itemSize,u=a.normalized,d=new c.constructor(h.length*f),x=0,_=0;for(let M=0,g=h.length;M<g;M++){a.isInterleavedBufferAttribute?x=h[M]*a.data.stride+a.offset:x=h[M]*f;for(let m=0;m<f;m++)d[_++]=c[x++]}return new $e(d,f,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let h=s[a],c=t(h,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let h=[],c=r[a];for(let f=0,u=c.length;f<u;f++){let d=c[f],x=t(d,i);h.push(x)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let c=i[h];t.data.attributes[h]=c.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],f=[];for(let u=0,d=c.length;u<d;u++){let x=c[u];f.push(x.toJSON(t.data))}f.length>0&&(s[h]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],u=r[c];for(let d=0,x=u.length;d<x;d++)f.push(u[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ra=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},mn=new Q,Ir=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gc=new Q,pm=new Q,mm=new $t,Vn=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=gc.subVectors(i,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||mm.getNormalMatrix(t),s=this.coplanarPoint(gc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gm=0,Ui=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Hs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Lc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Vn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rs,xr=new Q,Ps=new Q,Is=new Q,Ls=new oe,_r=new oe,wf=new Oe,Co=new Q,yr=new Q,Ro=new Q,Pu=new oe,xc=new oe,Iu=new oe,Mi=class extends An{constructor(t=new si){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new En;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ra(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Ir(i,3,0,!1)),Rs.setAttribute("uv",new Ir(i,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Po(Co.set(-.5,-.5,0),Is,o,Ps,s,r),Po(yr.set(.5,-.5,0),Is,o,Ps,s,r),Po(Ro.set(.5,.5,0),Is,o,Ps,s,r),Pu.set(0,0),xc.set(1,0),Iu.set(1,1);let a=t.ray.intersectTriangle(Co,yr,Ro,!1,xr);if(a===null&&(Po(yr.set(-.5,.5,0),Is,o,Ps,s,r),xc.set(0,1),a=t.ray.intersectTriangle(Co,Ro,yr,!1,xr),a===null))return;let h=t.ray.origin.distanceTo(xr);h<t.near||h>t.far||e.push({distance:h,point:xr.clone(),uv:vi.getInterpolation(xr,Co,yr,Ro,Pu,xc,Iu,new oe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Po(n,t,e,i,s,r){Ls.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Ls.x-s*Ls.y,_r.y=s*Ls.x+r*Ls.y):_r.copy(Ls),n.copy(t),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(wf)}var yi=new Q,_c=new Q,Io=new Q,Lo=new Q,oa=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_c.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Lo.copy(this.origin).sub(_c);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=Lo.dot(this.direction),h=-Lo.dot(Io),c=Lo.lengthSq(),f=Math.abs(1-o*o),u,d,x,_;if(f>0)if(u=o*h-a,d=o*a-h,_=r*f,u>=0)if(d>=-_)if(d<=_){let M=1/f;u*=M,d*=M,x=u*(u+o*d+2*a)+d*(o*u+d+2*h)+c}else d=r,u=Math.max(0,-(o*d+a)),x=-u*u+d*(d+2*h)+c;else d=-r,u=Math.max(0,-(o*d+a)),x=-u*u+d*(d+2*h)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-h),r),x=-u*u+d*(d+2*h)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-h),r),x=d*(d+2*h)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-h),r),x=-u*u+d*(d+2*h)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),x=-u*u+d*(d+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_c).addScaledVector(Io,d),x}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,h,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),f>=0?(r=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),i>h||a>s)||((a>i||i!==i)&&(i=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,h=a.x,c=a.y,f=a.z,u=t.x-o.x,d=t.y-o.y,x=t.z-o.z,_=e.x-o.x,M=e.y-o.y,g=e.z-o.z,m=i.x-o.x,P=i.y-o.y,D=i.z-o.z,S=Math.abs(h),E=Math.abs(c),T=Math.abs(f),U,w,R,I,F,z,X,k,q,st,et,pt;if(S>=E&&S>=T?(R=h,z=u,q=_,pt=m,h>=0?(U=c,w=f,I=d,F=x,X=M,k=g,st=P,et=D):(U=f,w=c,I=x,F=d,X=g,k=M,st=D,et=P)):E>=T?(R=c,z=d,q=M,pt=P,c>=0?(U=f,w=h,I=x,F=u,X=g,k=_,st=D,et=m):(U=h,w=f,I=u,F=x,X=_,k=g,st=m,et=D)):(R=f,z=x,q=g,pt=D,f>=0?(U=h,w=c,I=u,F=d,X=_,k=M,st=m,et=P):(U=c,w=h,I=d,F=u,X=M,k=_,st=P,et=m)),R===0)return null;let $=U/R,lt=w/R,ut=1/R,Vt=I-$*z,Ot=F-lt*z,we=X-$*q,ae=k-lt*q,re=st-$*pt,ot=et-lt*pt,ht=re*ae-ot*we,Lt=Vt*ot-Ot*re,qt=we*Ot-ae*Vt;if(s){if(ht<0||Lt<0||qt<0)return null}else if((ht<0||Lt<0||qt<0)&&(ht>0||Lt>0||qt>0))return null;let Dt=ht+Lt+qt;if(Dt===0)return null;let te=ut*(ht*z+Lt*q+qt*pt);return(Dt>0?te<0:te>0)?null:this.at(te/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lu=new Oe,is=new oa,Do=new Vs,Du=new Q,No=new Q,Uo=new Q,Fo=new Q,yc=new Q,ko=new Q,Nu=new Q,Oo=new Q,Ie=class extends An{constructor(t=new En,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let f=a[h],u=r[h];f!==0&&(yc.fromBufferAttribute(u,t),o?ko.addScaledVector(yc,f):ko.addScaledVector(yc.sub(e),f))}e.add(ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Do.containsPoint(is.origin)===!1&&(is.intersectSphere(Do,Du)===null||is.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),is.copy(t.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,d=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){let g=d[_],m=o[g.materialIndex],P=Math.max(g.start,x.start),D=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let S=P,E=D;S<E;S+=3){let T=a.getX(S),U=a.getX(S+1),w=a.getX(S+2);s=Bo(this,m,t,i,c,f,u,T,U,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let g=_,m=M;g<m;g+=3){let P=a.getX(g),D=a.getX(g+1),S=a.getX(g+2);s=Bo(this,o,t,i,c,f,u,P,D,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){let g=d[_],m=o[g.materialIndex],P=Math.max(g.start,x.start),D=Math.min(h.count,Math.min(g.start+g.count,x.start+x.count));for(let S=P,E=D;S<E;S+=3){let T=S,U=S+1,w=S+2;s=Bo(this,m,t,i,c,f,u,T,U,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let g=_,m=M;g<m;g+=3){let P=g,D=g+1,S=g+2;s=Bo(this,o,t,i,c,f,u,P,D,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function xm(n,t,e,i,s,r,o,a){let h;if(t.side===xn?h=i.intersectTriangle(o,r,s,!0,a):h=i.intersectTriangle(s,r,o,t.side===zi,a),h===null)return null;Oo.copy(a),Oo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Oo);return c<e.near||c>e.far?null:{distance:c,point:Oo.clone(),object:n}}function Bo(n,t,e,i,s,r,o,a,h,c){n.getVertexPosition(a,No),n.getVertexPosition(h,Uo),n.getVertexPosition(c,Fo);let f=xm(n,t,e,i,No,Uo,Fo,Nu);if(f){let u=new Q;vi.getBarycoord(Nu,No,Uo,Fo,u),s&&(f.uv=vi.getInterpolatedAttribute(s,a,h,c,u,new oe)),r&&(f.uv1=vi.getInterpolatedAttribute(r,a,h,c,u,new oe)),o&&(f.normal=vi.getInterpolatedAttribute(o,a,h,c,u,new Q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:h,c,normal:new Q,materialIndex:0};vi.getNormal(No,Uo,Fo,d.normal),f.face=d,f.barycoord=u}return f}var aa=class extends gn{constructor(t=null,e=1,i=1,s,r,o,a,h,c=Qe,f=Qe,u,d){super(null,o,a,h,c,f,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=new Vs,_m=new oe(.5,.5),zo=new Q,Lr=class{constructor(t=new Vn,e=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],c=r[3],f=r[4],u=r[5],d=r[6],x=r[7],_=r[8],M=r[9],g=r[10],m=r[11],P=r[12],D=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,x-f,m-_,E-P).normalize(),s[1].setComponents(c+o,x+f,m+_,E+P).normalize(),s[2].setComponents(c+a,x+u,m+M,E+D).normalize(),s[3].setComponents(c-a,x-u,m-M,E-D).normalize(),i)s[4].setComponents(h,d,g,S).normalize(),s[5].setComponents(c-h,x-d,m-g,E-S).normalize();else if(s[4].setComponents(c-h,x-d,m-g,E-S).normalize(),e===Gn)s[5].setComponents(c+h,x+d,m+g,E+S).normalize();else if(e===Sr)s[5].setComponents(h,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);let e=_m.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(zo.x=s.normal.x>0?t.max.x:t.min.x,zo.y=s.normal.y>0?t.max.y:t.min.y,zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dr=class extends gn{constructor(t=[],e=Vi,i,s,r,o,a,h,c,f){super(t,e,i,s,r,o,a,h,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tn=class extends gn{constructor(t,e,i,s,r,o,a,h,c){super(t,e,i,s,r,o,a,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends gn{constructor(t,e,i=Wn,s,r,o,a=Qe,h=Qe,c,f=ti,u=1){if(f!==ti&&f!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,h,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends Fi{constructor(t,e=Wn,i=Vi,s,r,o=Qe,a=Qe,h,c=ti){let f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,i,s,r,o,a,h,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Nr=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rn=class n extends En{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],c=[],f=[],u=[],d=0,x=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(f,3)),this.setAttribute("uv",new In(u,2));function _(M,g,m,P,D,S,E,T,U,w,R){let I=S/U,F=E/w,z=S/2,X=E/2,k=T/2,q=U+1,st=w+1,et=0,pt=0,$=new Q;for(let lt=0;lt<st;lt++){let ut=lt*F-X;for(let Vt=0;Vt<q;Vt++){let Ot=Vt*I-z;$[M]=Ot*P,$[g]=ut*D,$[m]=k,c.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[m]=T>0?1:-1,f.push($.x,$.y,$.z),u.push(Vt/U),u.push(1-lt/w),et+=1}}for(let lt=0;lt<w;lt++)for(let ut=0;ut<U;ut++){let Vt=d+ut+q*lt,Ot=d+ut+q*(lt+1),we=d+(ut+1)+q*(lt+1),ae=d+(ut+1)+q*lt;h.push(Vt,Ot,ae),h.push(Ot,we,ae),pt+=6}a.addGroup(x,pt,R),x+=pt,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ur=class n extends En{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),h=Math.floor(s),c=a+1,f=h+1,u=t/a,d=e/h,x=[],_=[],M=[],g=[];for(let m=0;m<f;m++){let P=m*d-o;for(let D=0;D<c;D++){let S=D*u-r;_.push(S,-P,0),M.push(0,0,1),g.push(D/a),g.push(1-m/h)}}for(let m=0;m<h;m++)for(let P=0;P<a;P++){let D=P+c*m,S=P+c*(m+1),E=P+1+c*(m+1),T=P+1+c*m;x.push(D,S,T),x.push(S,E,T)}this.setIndex(x),this.setAttribute("position",new In(_,3)),this.setAttribute("normal",new In(M,3)),this.setAttribute("uv",new In(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function ls(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Uu(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=ls(n[e]);for(let s in i)t[s]=i[s]}return t}function Uu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ym(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Af={clone:ls,merge:pn},vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ca=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ha=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ds(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fa=class extends ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:r=t,a=2*e-i;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Sc:o=t,h=2*i-e;break;case wc:o=1,h=i+s[1]-s[0];break;default:o=t-1,h=e}let c=(i-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(h-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,c=h-a,f=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,x=this._weightNext,_=(i-e)/(s-e),M=_*_,g=M*_,m=-d*g+2*d*M-d*_,P=(1+d)*g+(-1.5-2*d)*M+(-.5+d)*_+1,D=(-1-x)*g+(1.5+x)*M+.5*_,S=x*g-x*M;for(let E=0;E!==a;++E)r[E]=m*o[f+E]+P*o[c+E]+D*o[h+E]+S*o[u+E];return r}},da=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,c=h-a,f=(i-e)/(s-e),u=1-f;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[h+d]*f;return r}},pa=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ma=class extends ki{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,c=h-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let _=(i-e)/(s-e),M=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*M+o[h+g]*_;return r}let d=a*2,x=t-1;for(let _=0;_!==a;++_){let M=o[c+_],g=o[h+_],m=x*d+_*2,P=u[m],D=u[m+1],S=t*d+_*2,E=f[S],T=f[S+1],U=Sm(i,e,P,E,s);r[_]=Ef(U,M,D,T,g)}return r}};function Ef(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Mm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Sm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ef(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let h=Mm(r,t,e,i,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-a/h))}return r}var Cn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vc(t.settings)&&(i.settings={inTangents:Ds(t.settings.inTangents,Array),outTangents:Ds(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case bc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;vc(this.settings)&&(Fu(this.settings.inTangents,t),Fu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let h=i[a];if(typeof h=="number"&&isNaN(h)){Ht("KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){Ht("KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(s!==void 0&&Qp(s))for(let a=0,h=s.length;a!==h;++a){let c=s[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let h=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)h=!0;else{let u=a*i,d=u-i,x=u+i;for(let _=0;_!==i;++_){let M=e[u+_];if(M!==e[d+_]||M!==e[x+_]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let x=0;x!==i;++x)e[d+x]=e[u+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,h=o*i,c=0;c!==i;++c)e[h+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ta;var Oi=class extends Cn{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=vr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};ga.prototype.ValueTypeName="color";var xa=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};xa.prototype.ValueTypeName="number";var _a=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(i-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)ni.slerpFlat(r,0,o,c-a,o,c,h);return r}},Fr=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Cn{constructor(t,e,i){super(t,e,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=vr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,d=c.length;u<d;u+=2){let x=c[u],_=c[u+1];if(x.global&&(x.lastIndex=0),x.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tf=new va,ba=class{constructor(t){this.manager=t!==void 0?t:Tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vo=new Q,Go=new ni,Kn=new Q,kr=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Go,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Go,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Vo,Go,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Go,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new Q,ku=new oe,Ou=new oe,un=class extends kr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Ou),e.subVectors(Ou,ku)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*i/c,s*=o.width/h,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Or=class extends kr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,h=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ns=-90,Us=1,Ma=class extends An{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Ns,Us,t,e);s.layers=this.layers,this.add(s);let r=new un(Ns,Us,t,e);r.layers=this.layers,this.add(r);let o=new un(Ns,Us,t,e);o.layers=this.layers,this.add(o);let a=new un(Ns,Us,t,e);a.layers=this.layers,this.add(a);let h=new un(Ns,Us,t,e);h.layers=this.layers,this.add(h);let c=new un(Ns,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,h]=e;for(let c of e)this.remove(c);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,c,f]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,d,x),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Sa=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qc="\\[\\]\\.:\\/",wm=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",Am="[^"+Qc.replace("\\.","")+"]",Em=/((?:WC+[\/:])*)/.source.replace("WC",th),Tm=/(WCOD+)?/.source.replace("WCOD",Am),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Pm=new RegExp("^"+Em+Tm+Cm+Rm+"$"),Im=["material","materials","bones","map"],Ac=class{constructor(t,e,i){let s=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(t){let e=Pm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let h=i(a.children);if(h)return h}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Ac;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sv=new Float32Array(1);var oh=class oh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};oh.prototype.isMatrix2=!0;var Ec=oh;function eh(n,t,e,i){let s=Lm(i);switch(e){case qc:return n*t;case Yc:return n*t/s.components*s.byteLength;case Ia:return n*t/s.components*s.byteLength;case Wi:return n*t*2/s.components*s.byteLength;case La:return n*t*2/s.components*s.byteLength;case $c:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case Da:return n*t*4/s.components*s.byteLength;case Gr:case Hr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ua:case ka:return Math.max(n,16)*Math.max(t,8)/4;case Na:case Fa:return Math.max(n,8)*Math.max(t,8)/2;case Oa:case Ba:case Va:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case za:case qr:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sl:case rl:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case al:case ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $r:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(n){switch(n){case Rn:case Gc:return{byteLength:1,components:1};case Ws:case Hc:case qn:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case Wn:case Ca:case Xn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Zf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Nm(n){let t=new WeakMap;function e(a,h){let c=a.array,f=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(h,d),n.bufferData(h,c,f),a.onUploadCallback();let x;if(c instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)x=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)x=n.SHORT;else if(c instanceof Uint32Array)x=n.UNSIGNED_INT;else if(c instanceof Int32Array)x=n.INT;else if(c instanceof Int8Array)x=n.BYTE;else if(c instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,h,c){let f=h.array,u=h.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,f);else{u.sort((x,_)=>x.start-_.start);let d=0;for(let x=1;x<u.length;x++){let _=u[d],M=u[x];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,u[d]=M)}u.length=d+1;for(let x=0,_=u.length;x<_;x++){let M=u[x];n.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(n.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,h),c.version=a.version}}return{get:s,remove:r,update:o}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T0=`#ifdef USE_ENVMAP
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,D0=`uniform sampler2D dfgLUT;
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
}`,N0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Hg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,nx=`#define NORMAL
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
}`,ix=`#define PHONG
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
}`,sx=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,lx=`#define TOON
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
}`,cx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,fx=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Um,alphahash_pars_fragment:Fm,alphamap_fragment:km,alphamap_pars_fragment:Om,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Hm,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:qm,bsdfs:$m,iridescence_fragment:Ym,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:s0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:h0,colorspace_fragment:u0,colorspace_pars_fragment:f0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:T0,envmap_vertex:x0,fog_vertex:_0,fog_pars_vertex:y0,fog_fragment:v0,fog_pars_fragment:b0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:A0,lights_pars_begin:E0,lights_toon_fragment:C0,lights_toon_pars_fragment:R0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:N0,lights_fragment_maps:U0,lights_fragment_end:F0,lightprobes_pars_fragment:k0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:H0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:$0,morphinstance_vertex:Y0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:K0,morphtarget_vertex:j0,normal_fragment_begin:Q0,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:fg,dithering_fragment:dg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:_g,shadowmap_vertex:yg,shadowmask_pars_fragment:vg,skinbase_vertex:bg,skinning_pars_vertex:Mg,skinning_vertex:Sg,skinnormal_vertex:wg,specularmap_fragment:Ag,specularmap_pars_fragment:Eg,tonemapping_fragment:Tg,tonemapping_pars_fragment:Cg,transmission_fragment:Rg,transmission_pars_fragment:Pg,uv_pars_fragment:Ig,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ng,background_vert:Ug,background_frag:Fg,backgroundCube_vert:kg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:Vg,depth_frag:Gg,distance_vert:Hg,distance_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:$g,linedashed_frag:Yg,meshbasic_vert:Zg,meshbasic_frag:Jg,meshlambert_vert:Kg,meshlambert_frag:jg,meshmatcap_vert:Qg,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ox,meshtoon_vert:ax,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:fx,sprite_vert:dx,sprite_frag:px},Ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ai={basic:{uniforms:pn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:pn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:pn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:pn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:pn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:pn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:pn([Ct.points,Ct.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:pn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:pn([Ct.common,Ct.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:pn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:pn([Ct.sprite,Ct.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:pn([Ct.common,Ct.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:pn([Ct.lights,Ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ai.physical={uniforms:pn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var fl={r:0,b:0,g:0},mx=new Oe,Jf=new $t;Jf.set(-1,0,0,0,1,0,0,0,1);function gx(n,t,e,i,s,r){let o=new Yt(0),a=s===!0?0:1,h,c,f=null,u=0,d=null;function x(P){let D=P.isScene===!0?P.background:null;if(D&&D.isTexture){let S=P.backgroundBlurriness>0;D=t.get(D,S)}return D}function _(P){let D=!1,S=x(P);S===null?g(o,a):S&&S.isColor&&(g(S,1),D=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(P,D){let S=x(D);S&&(S.isCubeTexture||S.mapping===zr)?(c===void 0&&(c=new Ie(new rn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ls(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(D.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jf),c.material.toneMapped=he.getTransfer(S.colorSpace)!==Se,(f!==S||u!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,d=n.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Ie(new Ur(2,2),new dn({name:"BackgroundMaterial",uniforms:ls(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=he.getTransfer(S.colorSpace)!==Se,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=S,u=S.version,d=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function g(P,D){P.getRGB(fl,jc(n)),e.buffers.color.setClear(fl.r,fl.g,fl.b,D,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,D=1){o.set(P),a=D,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,g(o,a)},render:_,addToRenderList:M,dispose:m}}function xx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(F,z,X,k,q){let st=!1,et=u(F,k,X,z);r!==et&&(r=et,c(r.object)),st=x(F,k,X,q),st&&_(F,k,X,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,S(F,z,X,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function f(F){return n.deleteVertexArray(F)}function u(F,z,X,k){let q=k.wireframe===!0,st=i[z.id];st===void 0&&(st={},i[z.id]=st);let et=F.isInstancedMesh===!0?F.id:0,pt=st[et];pt===void 0&&(pt={},st[et]=pt);let $=pt[X.id];$===void 0&&($={},pt[X.id]=$);let lt=$[q];return lt===void 0&&(lt=d(h()),$[q]=lt),lt}function d(F){let z=[],X=[],k=[];for(let q=0;q<e;q++)z[q]=0,X[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:k,object:F,attributes:{},index:null}}function x(F,z,X,k){let q=r.attributes,st=z.attributes,et=0,pt=X.getAttributes();for(let $ in pt)if(pt[$].location>=0){let ut=q[$],Vt=st[$];if(Vt===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(Vt=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(Vt=F.instanceColor)),ut===void 0||ut.attribute!==Vt||Vt&&ut.data!==Vt.data)return!0;et++}return r.attributesNum!==et||r.index!==k}function _(F,z,X,k){let q={},st=z.attributes,et=0,pt=X.getAttributes();for(let $ in pt)if(pt[$].location>=0){let ut=st[$];ut===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(ut=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(ut=F.instanceColor));let Vt={};Vt.attribute=ut,ut&&ut.data&&(Vt.data=ut.data),q[$]=Vt,et++}r.attributes=q,r.attributesNum=et,r.index=k}function M(){let F=r.newAttributes;for(let z=0,X=F.length;z<X;z++)F[z]=0}function g(F){m(F,0)}function m(F,z){let X=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;X[F]=1,k[F]===0&&(n.enableVertexAttribArray(F),k[F]=1),q[F]!==z&&(n.vertexAttribDivisor(F,z),q[F]=z)}function P(){let F=r.newAttributes,z=r.enabledAttributes;for(let X=0,k=z.length;X<k;X++)z[X]!==F[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function D(F,z,X,k,q,st,et){et===!0?n.vertexAttribIPointer(F,z,X,q,st):n.vertexAttribPointer(F,z,X,k,q,st)}function S(F,z,X,k){M();let q=k.attributes,st=X.getAttributes(),et=z.defaultAttributeValues;for(let pt in st){let $=st[pt];if($.location>=0){let lt=q[pt];if(lt===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(lt=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(lt=F.instanceColor)),lt!==void 0){let ut=lt.normalized,Vt=lt.itemSize,Ot=t.get(lt);if(Ot===void 0)continue;let we=Ot.buffer,ae=Ot.type,re=Ot.bytesPerElement,ot=ae===n.INT||ae===n.UNSIGNED_INT||lt.gpuType===Ca;if(lt.isInterleavedBufferAttribute){let ht=lt.data,Lt=ht.stride,qt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Dt=0;Dt<$.locationSize;Dt++)m($.location+Dt,ht.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Dt=0;Dt<$.locationSize;Dt++)g($.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Dt=0;Dt<$.locationSize;Dt++)D($.location+Dt,Vt/$.locationSize,ae,ut,Lt*re,(qt+Vt/$.locationSize*Dt)*re,ot)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<$.locationSize;ht++)m($.location+ht,lt.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<$.locationSize;ht++)g($.location+ht);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ht=0;ht<$.locationSize;ht++)D($.location+ht,Vt/$.locationSize,ae,ut,Vt*re,Vt/$.locationSize*ht*re,ot)}}else if(et!==void 0){let ut=et[pt];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv($.location,ut);break;case 3:n.vertexAttrib3fv($.location,ut);break;case 4:n.vertexAttrib4fv($.location,ut);break;default:n.vertexAttrib1fv($.location,ut)}}}}P()}function E(){R();for(let F in i){let z=i[F];for(let X in z){let k=z[X];for(let q in k){let st=k[q];for(let et in st)f(st[et].object),delete st[et];delete k[q]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;let z=i[F.id];for(let X in z){let k=z[X];for(let q in k){let st=k[q];for(let et in st)f(st[et].object),delete st[et];delete k[q]}}delete i[F.id]}function U(F){for(let z in i){let X=i[z];for(let k in X){let q=X[k];if(q[F.id]===void 0)continue;let st=q[F.id];for(let et in st)f(st[et].object),delete st[et];delete q[F.id]}}}function w(F){for(let z in i){let X=i[z],k=F.isInstancedMesh===!0?F.id:0,q=X[k];if(q!==void 0){for(let st in q){let et=q[st];for(let pt in et)f(et[pt].object),delete et[pt];delete q[st]}delete X[k],Object.keys(X).length===0&&delete i[z]}}}function R(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:g,disableUnusedAttributes:P}}function _x(n,t,e){let i;function s(h){i=h}function r(h,c){n.drawArrays(i,h,c),e.update(c,i,1)}function o(h,c,f){f!==0&&(n.drawArraysInstanced(i,h,c,f),e.update(c,i,f))}function a(h,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,f);let d=0;for(let x=0;x<f;x++)d+=c[x];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function yx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Dn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let w=U===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Rn&&U!==Xn&&!w&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=h(c);f!==c&&(Wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:x,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:S,maxSamples:E,samples:T}}function vx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Vn,a=new $t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let x=u.length!==0||d||i!==0||s;return s=d,i=u.length,x},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=f(u,d,0)},this.setState=function(u,d,x){let _=u.clippingPlanes,M=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!g)r?f(null):c();else{let P=r?0:i,D=P*4,S=m.clippingState||null;h.value=S,S=f(_,d,D,x);for(let E=0;E!==D;++E)S[E]=e[E];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,d,x,_){let M=u!==null?u.length:0,g=null;if(M!==0){if(g=h.value,_!==!0||g===null){let m=x+M*4,P=d.matrixWorldInverse;a.getNormalMatrix(P),(g===null||g.length<m)&&(g=new Float32Array(m));for(let D=0,S=x;D!==M;++D,S+=4)o.copy(u[D]).applyMatrix4(P,a),o.normal.toArray(g,S),g[S+3]=o.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var $s=4,bx=6,Mx=20,Sx=256,Yr=new Or,Cf=new Yt,ah=null,lh=0,ch=0,hh=!1,wx=new Q,cs=new Q,pl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=wx}=r;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=hh,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:qn,format:Dn,colorSpace:br,depthBuffer:!1},s=Rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ax(r)),this._blurMaterial=Tx(r,t,e),this._ggxMaterial=Ex(r,t,e)}return s}_compileMaterial(t){let e=new Ie(new En,t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,i,s,r){let h=new un(90,1,e,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,x=u.toneMapping;u.getClearColor(Cf),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new rn,new fn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,m=!1,P=t.background;P?P.isColor&&(g.color.copy(P),t.background=null,m=!0):(g.color.copy(Cf),m=!0);for(let D=0;D<6;D++){let S=D%3;S===0?(h.up.set(0,c[D],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+f[D],r.y,r.z)):S===1?(h.up.set(0,0,c[D]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+f[D],r.z)):(h.up.set(0,c[D],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+f[D]));let E=this._cubeSize;qs(s,S*E,D>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(M,h),u.render(t,h)}u.toneMapping=x,u.autoClear=d,t.background=P}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Vi||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;qs(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,Yr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let h=o.uniforms,c=i/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),d=c*1.25,x=u*d,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-$s?i-_+$s:0),m=4*(this._cubeSize-M);h.envMap.value=t.texture,h.roughness.value=x,h.mipInt.value=_-e,qs(r,g,m,3*M,2*M),s.setRenderTarget(r),s.render(a,Yr),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=_-i,qs(t,g,m,3*M,2*M),s.setRenderTarget(t),s.render(a,Yr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,h=this._lodMeshes[s];h.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-$s?s-this._lodMax+$s:0),d=4*(this._cubeSize-f);qs(e,u,d,3*f,2*f),o.setRenderTarget(e),o.render(h,Yr)}};function Ax(n){let t=[],e=[],i=n,s=n-$s+1+bx;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),h=-a,c=1+a,f=[h,h,c,h,c,c,h,h,c,c,h,c],u=6,d=6,x=3,_=new Float32Array(x*d*u),M=new Float32Array(x*d*u);for(let m=0;m<u;m++){let P=m%3*2/3-1,D=m>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];_.set(S,x*d*m);for(let E=0;E<d;E++){let T=f[E*2]*2-1,U=f[E*2+1]*2-1;m===0?cs.set(1,U,T):m===1?cs.set(-T,1,-U):m===2?cs.set(-T,U,1):m===3?cs.set(-1,U,-T):m===4?cs.set(-T,-1,U):cs.set(T,U,-1),cs.toArray(M,(m*d+E)*x)}}let g=new En;g.setAttribute("position",new $e(_,x)),g.setAttribute("outputDirection",new $e(M,x)),e.push(new Ie(g,null)),i>$s&&i--}return{lodMeshes:e,sizeLods:t}}function Rf(n,t,e){let i=new yn(n,t,e);return i.texture.mapping=zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ex(n,t,e){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Tx(n,t,e){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:Mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Pf(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function If(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ml=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:ri});r.uniforms.tEquirect.value=e;let o=new Ie(s,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=qe),new Ma(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Cx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,x=!1){return d==null?null:x?o(d):r(d)}function r(d){if(d&&d.isTexture){let x=d.mapping;if(x===Aa||x===Ea)if(t.has(d)){let _=t.get(d).texture;return a(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let M=new ml(_.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let x=d.mapping,_=x===Aa||x===Ea,M=x===Vi||x===as;if(_||M){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new pl(n)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let P=d.image;return _&&P&&P.height>0||M&&P&&h(P)?(i===null&&(i=new pl(n)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function a(d,x){return x===Aa?d.mapping=Vi:x===Ea&&(d.mapping=as),d}function h(d){let x=0,_=6;for(let M=0;M<_;M++)d[M]!==void 0&&x++;return x===_}function c(d){let x=d.target;x.removeEventListener("dispose",c);let _=t.get(x);_!==void 0&&(t.delete(x),_.dispose())}function f(d){let x=d.target;x.removeEventListener("dispose",f);let _=e.get(x);_!==void 0&&(e.delete(x),_.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Rx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&rs("WebGLRenderer: "+i+" extension not supported."),s}}}function Px(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let x=r.get(d);x&&(t.remove(x),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function h(u){let d=u.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER)}function c(u){let d=[],x=u.index,_=u.attributes.position,M=0;if(_===void 0)return;if(x!==null){let P=x.array;M=x.version;for(let D=0,S=P.length;D<S;D+=3){let E=P[D+0],T=P[D+1],U=P[D+2];d.push(E,T,T,U,U,E)}}else{let P=_.array;M=_.version;for(let D=0,S=P.length/3-1;D<S;D+=3){let E=D+0,T=D+1,U=D+2;d.push(E,T,T,U,U,E)}}let g=new(_.count>=65535?Pr:Rr)(d,1);g.version=M;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function f(u){let d=r.get(u);if(d){let x=u.index;x!==null&&d.version<x.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:f}}function Ix(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function h(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function c(u,d,x){x!==0&&(n.drawElementsInstanced(i,d,r,u*o,x),e.update(d,i,x))}function f(u,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,x);let M=0;for(let g=0;g<x;g++)M+=d[g];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=f}function Lx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dx(n,t,e){let i=new WeakMap,s=new ke;function r(o,a,h){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,d=i.get(a);if(d===void 0||d.count!==u){let R=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],D=0;x===!0&&(D=1),_===!0&&(D=2),M===!0&&(D=3);let S=a.attributes.position.count*D,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*E*4*u),U=new Er(T,S,E,u);U.type=Xn,U.needsUpdate=!0;let w=D*4;for(let I=0;I<u;I++){let F=g[I],z=m[I],X=P[I],k=S*E*4*I;for(let q=0;q<F.count;q++){let st=q*w;x===!0&&(s.fromBufferAttribute(F,q),T[k+st+0]=s.x,T[k+st+1]=s.y,T[k+st+2]=s.z,T[k+st+3]=0),_===!0&&(s.fromBufferAttribute(z,q),T[k+st+4]=s.x,T[k+st+5]=s.y,T[k+st+6]=s.z,T[k+st+7]=0),M===!0&&(s.fromBufferAttribute(X,q),T[k+st+8]=s.x,T[k+st+9]=s.y,T[k+st+10]=s.z,T[k+st+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new oe(S,E)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let M=0;M<c.length;M++)x+=c[M];let _=a.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",c)}h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Nx(n,t,e,i,s){let r=new WeakMap;function o(c){let f=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",h)===!1&&c.addEventListener("dispose",h),r.get(c)!==f&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let x=c.skeleton;r.get(x)!==f&&(x.update(),r.set(x,f))}return d}function a(){r=new WeakMap}function h(c){let f=c.target;f.removeEventListener("dispose",h),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var Ux={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[kc]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function Fx(n,t,e,i,s,r){let o=new yn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,c=new En;c.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new In([0,2,0,0,2,0],2));let f=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ie(c,f),d=new Or(-1,1,1,-1,0,1),x=null,_=null,M=!1,g,m=null,P=[],D=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),h!==null&&h.setSize(S,E);for(let T=0;T<P.length;T++){let U=P[T];U.setSize&&U.setSize(S,E)}},this.setEffects=function(S){P=S,D=P.length>0&&P[0].isRenderPass===!0;let E=o.width,T=o.height;P.length>0&&a===null&&(a=new yn(E,T,{type:qn,depthBuffer:!1,stencilBuffer:!1}),h=new yn(E,T,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<P.length;U++){let w=P[U];w.setSize&&w.setSize(E,T)}},this.begin=function(S,E){if(M||S.toneMapping===Hn&&P.length===0)return!1;if(m=E,E!==null){let T=E.width,U=E.height;(o.width!==T||o.height!==U)&&this.setSize(T,U)}return D===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Hn,!0},this.hasRenderPass=function(){return D},this.end=function(S,E){S.toneMapping=g,M=!0;let T=o,U=a;for(let w=0;w<P.length;w++){let R=P[w];R.enabled!==!1&&(R.render(S,U,T,E),R.needsSwap!==!1&&(T=U,U=U===a?h:a))}if(x!==S.outputColorSpace||_!==S.toneMapping){x=S.outputColorSpace,_=S.toneMapping,f.defines={},he.getTransfer(x)===Se&&(f.defines.SRGB_TRANSFER="");let w=Ux[_];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(u,d),m=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),c.dispose(),f.dispose()}}var Kf=new gn,dh=new Fi(1,1),jf=new Er,Qf=new sa,td=new Dr,Lf=[],Df=[],Nf=new Float32Array(16),Uf=new Float32Array(9),Ff=new Float32Array(4);function Zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Lf[s];if(r===void 0&&(r=new Float32Array(s),Lf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _l(n,t){let e=Df[t];e===void 0&&(e=new Int32Array(t),Df[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function Vx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),Ze(e,i)}}function Gx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;Uf.set(i),n.uniformMatrix3fv(this.addr,!1,Uf),Ze(e,i)}}function Hx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;Nf.set(i),n.uniformMatrix4fv(this.addr,!1,Nf),Ze(e,i)}}function Wx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function $x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function Yx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function jx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dh.compareFunction=e.isReversedDepthBuffer()?ul:hl,r=dh):r=Kf,e.setTexture2D(t||r,s)}function Qx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Qf,s)}function t_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||td,s)}function e_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jf,s)}function n_(n){switch(n){case 5126:return kx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return Vx;case 35675:return Gx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return $x;case 5125:return Yx;case 36294:return Zx;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function i_(n,t){n.uniform1fv(this.addr,t)}function s_(n,t){let e=Zs(t,this.size,2);n.uniform2fv(this.addr,e)}function r_(n,t){let e=Zs(t,this.size,3);n.uniform3fv(this.addr,e)}function o_(n,t){let e=Zs(t,this.size,4);n.uniform4fv(this.addr,e)}function a_(n,t){let e=Zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function l_(n,t){let e=Zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function c_(n,t){let e=Zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function h_(n,t){n.uniform1iv(this.addr,t)}function u_(n,t){n.uniform2iv(this.addr,t)}function f_(n,t){n.uniform3iv(this.addr,t)}function d_(n,t){n.uniform4iv(this.addr,t)}function p_(n,t){n.uniform1uiv(this.addr,t)}function m_(n,t){n.uniform2uiv(this.addr,t)}function g_(n,t){n.uniform3uiv(this.addr,t)}function x_(n,t){n.uniform4uiv(this.addr,t)}function __(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=dh:o=Kf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function y_(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qf,r[o])}function v_(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||td,r[o])}function b_(n,t,e){let i=this.cache,s=t.length,r=_l(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jf,r[o])}function M_(n){switch(n){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return b_}}var ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=n_(e.type)}},mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M_(e.type)}},gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},uh=/(\w+)(\])?(\[|\.)?/g;function kf(n,t){n.seq.push(t),n.map[t.id]=t}function S_(n,t,e){let i=n.name,s=i.length;for(uh.lastIndex=0;;){let r=uh.exec(i),o=uh.lastIndex,a=r[1],h=r[2]==="]",c=r[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===s){kf(e,c===void 0?new ph(a,n,t):new mh(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new gh(a),kf(e,u)),e=u}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);S_(a,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Of(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var w_=37297,A_=0;function E_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Bf=new $t;function T_(n){he._getMatrix(Bf,he.workingColorSpace,n);let t=`mat3( ${Bf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Mr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+E_(n.getShaderSource(t),a)}else return r}function C_(n,t){let e=T_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var R_={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[kc]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function P_(n,t){let e=R_[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new Q;function I_(){he.getLuminanceCoefficients(dl);let n=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function D_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function N_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Jr(n){return n!==""}function Vf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(U_,k_)}var F_=new Map;function k_(n,t){let e=se[t];if(e===void 0){let i=F_.get(t);if(i!==void 0)e=se[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xh(e)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(n){return n.replace(O_,B_)}function B_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var z_={[Br]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function V_(n){return z_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G_={[Vi]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function H_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":G_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var W_={[as]:"ENVMAP_MODE_REFRACTION"};function X_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":W_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q_={[Dc]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function $_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":q_[n.combine]||"ENVMAP_BLENDING_NONE"}function Y_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Z_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,h=V_(e),c=H_(e),f=X_(e),u=$_(e),d=Y_(e),x=L_(e),_=D_(r),M=s.createProgram(),g,m,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Jr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Jr).join(`
`),m.length>0&&(m+=`
`)):(g=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?se.tonemapping_pars_fragment:"",e.toneMapping!==Hn?P_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,C_("linearToOutputTexel",e.outputColorSpace),I_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=xh(o),o=Vf(o,e),o=Gf(o,e),a=xh(a),a=Vf(a,e),a=Gf(a,e),o=Hf(o),a=Hf(a),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let D=P+g+o,S=P+m+a,E=Of(s,s.VERTEX_SHADER,D),T=Of(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(F){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(T)||"",q=z.trim(),st=X.trim(),et=k.trim(),pt=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(pt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,E,T);else{let lt=zf(s,E,"vertex"),ut=zf(s,T,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+lt+`
`+ut)}else q!==""?Wt("WebGLProgram: Program Info Log:",q):(st===""||et==="")&&($=!1);$&&(F.diagnostics={runnable:pt,programLog:q,vertexShader:{log:st,prefix:g},fragmentShader:{log:et,prefix:m}})}s.deleteShader(E),s.deleteShader(T),w=new Ys(s,M),R=N_(s,M)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,w_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}var J_=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yh(t),e.set(t,i)),i}},yh=class{constructor(t){this.id=J_++,this.code=t,this.usedTimes=0}};function K_(n){return n===Wi||n===qr||n===$r}function j_(n,t,e,i,s,r){let o=new Tr,a=new _h,h=new Set,c=[],f=new Map,u=i.logarithmicDepthBuffer,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return h.add(w),w===0?"uv":`uv${w}`}function M(w,R,I,F,z,X){let k=F.fog,q=z.geometry,st=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,pt=t.get(w.envMap||st,et),$=pt&&pt.mapping===zr?pt.image.height:null,lt=x[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&Wt("WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Vt=ut!==void 0?ut.length:0,Ot=0;q.morphAttributes.position!==void 0&&(Ot=1),q.morphAttributes.normal!==void 0&&(Ot=2),q.morphAttributes.color!==void 0&&(Ot=3);let we,ae,re,ot;if(lt){let ve=ai[lt];we=ve.vertexShader,ae=ve.fragmentShader}else{we=w.vertexShader,ae=w.fragmentShader;let ve=a.getVertexShaderStage(w),ge=a.getFragmentShaderStage(w);a.update(w,ve,ge),re=ve.id,ot=ge.id}let ht=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),qt=z.isInstancedMesh===!0,Dt=z.isBatchedMesh===!0,te=!!w.map,Ue=!!w.matcap,ne=!!pt,le=!!w.aoMap,ye=!!w.lightMap,ie=!!w.bumpMap&&w.wireframe===!1,me=!!w.normalMap,He=!!w.displacementMap,tn=!!w.emissiveMap,de=!!w.metalnessMap,ue=!!w.roughnessMap,H=w.anisotropy>0,ze=w.clearcoat>0,Zt=w.dispersion>0,N=w.retroreflectivity>0,b=w.iridescence>0,Y=w.sheen>0,W=w.transmission>0,Z=H&&!!w.anisotropyMap,xt=ze&&!!w.clearcoatMap,ct=ze&&!!w.clearcoatNormalMap,j=ze&&!!w.clearcoatRoughnessMap,rt=b&&!!w.iridescenceMap,_t=b&&!!w.iridescenceThicknessMap,Bt=Y&&!!w.sheenColorMap,yt=Y&&!!w.sheenRoughnessMap,vt=!!w.specularMap,gt=!!w.specularColorMap,Mt=!!w.specularIntensityMap,Jt=W&&!!w.transmissionMap,V=W&&!!w.thicknessMap,St=!!w.gradientMap,at=!!w.alphaMap,wt=w.alphaTest>0,Pt=!!w.alphaHash,ft=!!w.extensions,zt=Hn;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(zt=n.toneMapping);let Ft={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:ae,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:ot,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Dt,batchingColor:Dt&&z._colorsTexture!==null,instancing:qt,instancingColor:qt&&z.instanceColor!==null,instancingMorph:qt&&z.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:Ue,envMap:ne,envMapMode:ne&&pt.mapping,envMapCubeUVHeight:$,aoMap:le,lightMap:ye,bumpMap:ie,normalMap:me,displacementMap:He,emissiveMap:tn,normalMapObjectSpace:me&&w.normalMapType===uf,normalMapTangentSpace:me&&w.normalMapType===Zc,packedNormalMap:me&&w.normalMapType===Zc&&K_(w.normalMap.format),metalnessMap:de,roughnessMap:ue,anisotropy:H,anisotropyMap:Z,clearcoat:ze,clearcoatMap:xt,clearcoatNormalMap:ct,clearcoatRoughnessMap:j,dispersion:Zt,retroreflection:N,iridescence:b,iridescenceMap:rt,iridescenceThicknessMap:_t,sheen:Y,sheenColorMap:Bt,sheenRoughnessMap:yt,specularMap:vt,specularColorMap:gt,specularIntensityMap:Mt,transmission:W,transmissionMap:Jt,thicknessMap:V,gradientMap:St,opaque:w.transparent===!1&&w.blending===Hs&&w.alphaToCoverage===!1,alphaMap:at,alphaTest:wt,alphaHash:Pt,combine:w.combine,mapUv:te&&_(w.map.channel),aoMapUv:le&&_(w.aoMap.channel),lightMapUv:ye&&_(w.lightMap.channel),bumpMapUv:ie&&_(w.bumpMap.channel),normalMapUv:me&&_(w.normalMap.channel),displacementMapUv:He&&_(w.displacementMap.channel),emissiveMapUv:tn&&_(w.emissiveMap.channel),metalnessMapUv:de&&_(w.metalnessMap.channel),roughnessMapUv:ue&&_(w.roughnessMap.channel),anisotropyMapUv:Z&&_(w.anisotropyMap.channel),clearcoatMapUv:xt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(w.sheenRoughnessMap.channel),specularMapUv:vt&&_(w.specularMap.channel),specularColorMapUv:gt&&_(w.specularColorMap.channel),specularIntensityMapUv:Mt&&_(w.specularIntensityMap.channel),transmissionMapUv:Jt&&_(w.transmissionMap.channel),thicknessMapUv:V&&_(w.thicknessMap.channel),alphaMapUv:at&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(me||H),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(te||at),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&me===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Lt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Ot,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&he.getTransfer(w.map.colorSpace)===Se,decodeVideoTextureEmissive:tn&&w.emissiveMap.isVideoTexture===!0&&he.getTransfer(w.emissiveMap.colorSpace)===Se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ln,flipSided:w.side===xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ft&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&w.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=h.has(1),Ft.vertexUv2s=h.has(2),Ft.vertexUv3s=h.has(3),h.clear(),Ft}function g(w){let R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)R.push(I),R.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(m(R,w),P(R,w),R.push(n.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function m(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numSunLights),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numSunLightShadows),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),w.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),w.push(o.mask)}function D(w){let R=x[w.type],I;if(R){let F=ai[R];I=Af.clone(F.uniforms)}else I=w.uniforms;return I}function S(w,R){let I=f.get(R);return I!==void 0?++I.usedTimes:(I=new Z_(n,R,w,s),c.push(I),f.set(R,I)),I}function E(w){if(--w.usedTimes===0){let R=c.indexOf(w);c[R]=c[c.length-1],c.pop(),f.delete(w.cacheKey),w.destroy()}}function T(w){a.remove(w)}function U(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:U}}function Q_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,h){n.get(o)[a]=h}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ty(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Xf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let x=0;return d.isInstancedMesh&&(x+=2),d.isSkinnedMesh&&(x+=1),x}function a(d,x,_,M,g,m){let P=n[t];return P===void 0?(P={id:d.id,object:d,geometry:x,material:_,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:m},n[t]=P):(P.id=d.id,P.object=d,P.geometry=x,P.material=_,P.materialVariant=o(d),P.groupOrder=M,P.renderOrder=d.renderOrder,P.z=g,P.group=m),t++,P}function h(d,x,_,M,g,m,P){P.reversedDepth===!0&&(g=-g);let D=a(d,x,_,M,g,m);_.transmission>0?i.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(d,x,_,M,g,m){let P=a(d,x,_,M,g,m);_.transmission>0?i.unshift(P):_.transparent===!0?s.unshift(P):e.unshift(P)}function f(d,x){e.length>1&&e.sort(d||ty),i.length>1&&i.sort(x||Xf),s.length>1&&s.sort(x||Xf)}function u(){for(let d=t,x=n.length;d<x;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:h,unshift:c,finish:u,sort:f}}function ey(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new qf,n.set(i,[o])):s>=r.length?(o=new qf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ny(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new Yt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function iy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var sy=0;function ry(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function oy(n){let t=new ny,e=iy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);let s=new Q,r=new Oe,o=new Oe;function a(c){let f=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let x=0,_=0,M=0,g=0,m=0,P=0,D=0,S=0,E=0,T=0,U=0,w=0,R=0,I=0;c.sort(ry);for(let z=0,X=c.length;z<X;z++){let k=c[z],q=k.color,st=k.intensity,et=k.distance,pt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Wi?pt=k.shadow.map.texture:pt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)f+=q.r*st,u+=q.g*st,d+=q.b*st;else if(k.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(k.sh.coefficients[$],st);I++}else if(k.isSunLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let lt=k.shadow,ut=e.get(k);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),i.sunShadow[_]=ut,i.sunShadowMap[_]=pt;let Vt=lt.getViewportCount();for(let Ot=0;Ot<Vt;Ot++)i.sunShadowMatrix[M+Ot]=lt.getMatrix(Ot),i.sunShadowCascade[M+Ot]=lt._cascadeData[Ot];M+=Vt,_++}i.sun[x]=$,x++}else if(k.isDirectionalLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let lt=k.shadow,ut=e.get(k);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,i.directionalShadow[g]=ut,i.directionalShadowMap[g]=pt,i.directionalShadowMatrix[g]=k.shadow.matrix,E++}i.directional[g]=$,g++}else if(k.isSpotLight){let $=t.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(q).multiplyScalar(st),$.distance=et,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,i.spot[P]=$;let lt=k.shadow;if(k.map&&(i.spotLightMap[w]=k.map,w++,lt.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[P]=lt.matrix,k.castShadow){let ut=e.get(k);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,i.spotShadow[P]=ut,i.spotShadowMap[P]=pt,U++}P++}else if(k.isRectAreaLight){let $=t.get(k);$.color.copy(q).multiplyScalar(st),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),i.rectArea[D]=$,D++}else if(k.isPointLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){let lt=k.shadow,ut=e.get(k);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,ut.shadowCameraNear=lt.camera.near,ut.shadowCameraFar=lt.camera.far,i.pointShadow[m]=ut,i.pointShadowMap[m]=pt,i.pointShadowMatrix[m]=k.shadow.matrix,T++}i.point[m]=$,m++}else if(k.isHemisphereLight){let $=t.get(k);$.skyColor.copy(k.color).multiplyScalar(st),$.groundColor.copy(k.groundColor).multiplyScalar(st),i.hemi[S]=$,S++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.sunLength!==x||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==P||F.rectAreaLength!==D||F.hemiLength!==S||F.numSunShadows!==_||F.numDirectionalShadows!==E||F.numPointShadows!==T||F.numSpotShadows!==U||F.numSpotMaps!==w||F.numLightProbes!==I)&&(i.sun.length=x,i.directional.length=g,i.spot.length=P,i.rectArea.length=D,i.point.length=m,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=U,i.spotShadowMap.length=U,i.spotLightMatrix.length=U+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,F.sunLength=x,F.directionalLength=g,F.pointLength=m,F.spotLength=P,F.rectAreaLength=D,F.hemiLength=S,F.numSunShadows=_,F.numDirectionalShadows=E,F.numPointShadows=T,F.numSpotShadows=U,F.numSpotMaps=w,F.numLightProbes=I,i.version=sy++)}function h(c,f){let u=0,d=0,x=0,_=0,M=0,g=0,m=f.matrixWorldInverse;for(let P=0,D=c.length;P<D;P++){let S=c[P];if(S.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(S.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),_++}else if(S.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let E=i.point[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),x++}else if(S.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:h,state:i}}function $f(n){let t=new oy(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function h(d){s.push(d)}function c(){t.setup(e)}function f(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:h}}function ay(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new $f(n),t.set(s,[a])):r>=o.length?(a=new $f(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`,hy=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],uy=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Yf=new Oe,Zr=new Q,fh=new Q;function fy(n,t,e){let i=new Lr,s=new oe,r=new oe,o=new ke,a=new ha,h=new ua,c={},f=e.maxTextureSize,u={[zi]:xn,[xn]:zi,[Ln]:Ln},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),x=d.clone();x.defines.HORIZONTAL_PASS=1;let _=new En;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ie(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Br;let m=this.type;this.render=function(T,U,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Vu&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Br);let R=n.getRenderTarget(),I=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ri),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=m!==this.type;X&&U.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=T.length;k<q;k++){let st=T[k],et=st.shadow;if(et===void 0){Wt("WebGLShadowMap:",st,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let pt=et.getFrameExtents();s.multiply(pt),r.copy(et.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/pt.x),s.x=r.x*pt.x,et.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/pt.y),s.y=r.y*pt.y,et.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(et.camera._reversedDepth=$,et.map===null||X===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===Gs){if(st.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new yn(s.x,s.y,{format:Wi,type:qn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),et.map.texture.name=st.name+".shadowMap",et.map.depthTexture=new Fi(s.x,s.y,Xn),et.map.depthTexture.name=st.name+".shadowMapDepth",et.map.depthTexture.format=ti,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=Qe,et.map.depthTexture.magFilter=Qe}else st.isPointLight?(et.map=new ml(s.x),et.map.depthTexture=new la(s.x,Wn)):(et.map=new yn(s.x,s.y),et.map.depthTexture=new Fi(s.x,s.y,Wn)),et.map.depthTexture.name=st.name+".shadowMap",et.map.depthTexture.format=ti,this.type===Br?(et.map.depthTexture.compareFunction=$?ul:hl,et.map.depthTexture.minFilter=qe,et.map.depthTexture.magFilter=qe):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=Qe,et.map.depthTexture.magFilter=Qe);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let lt=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();st.isPointLight!==!0&&et.updateMatrices(st,w);for(let ut=0;ut<lt;ut++){let Vt=et.getCamera(ut);if(st.isPointLight){let Ot=et.camera,we=et.matrix,ae=st.distance||Ot.far;ae!==Ot.far&&(Ot.far=ae,Ot.updateProjectionMatrix()),Zr.setFromMatrixPosition(st.matrixWorld),Ot.position.copy(Zr),fh.copy(Ot.position),fh.add(hy[ut]),Ot.up.copy(uy[ut]),Ot.lookAt(fh),Ot.updateMatrixWorld(),we.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Yf.multiplyMatrices(Ot.projectionMatrix,Ot.matrixWorldInverse),et._frustum.setFromProjectionMatrix(Yf,Ot.coordinateSystem,Ot.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)n.setRenderTarget(et.map,ut),n.clear();else{ut===0&&(n.setRenderTarget(et.map),n.clear());let Ot=et.getViewport(ut);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),z.viewport(o)}i=et.getFrustum(ut),S(U,w,Vt,st,this.type)}et.isPointLightShadow!==!0&&this.type===Gs&&P(et,w),et.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(R,I,F)};function P(T,U){let w=t.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new yn(s.x,s.y,{format:Wi,type:qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(U,null,w,d,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(U,null,w,x,M,null)}function D(T,U,w,R){let I=null,F=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)I=F;else if(I=w.isPointLight===!0?h:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let z=I.uuid,X=U.uuid,k=c[z];k===void 0&&(k={},c[z]=k);let q=k[X];q===void 0&&(q=I.clone(),k[X]=q,U.addEventListener("dispose",E)),I=q}if(I.visible=U.visible,I.wireframe=U.wireframe,R===Gs?I.side=U.shadowSide!==null?U.shadowSide:U.side:I.side=U.shadowSide!==null?U.shadowSide:u[U.side],I.alphaMap=U.alphaMap,I.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,I.map=U.map,I.clipShadows=U.clipShadows,I.clippingPlanes=U.clippingPlanes,I.clipIntersection=U.clipIntersection,I.displacementMap=U.displacementMap,I.displacementScale=U.displacementScale,I.displacementBias=U.displacementBias,I.wireframeLinewidth=U.wireframeLinewidth,I.linewidth=U.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=w}return I}function S(T,U,w,R,I){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Gs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let X=t.update(T),k=T.material;if(Array.isArray(k)){let q=X.groups;for(let st=0,et=q.length;st<et;st++){let pt=q[st],$=k[pt.materialIndex];if($&&$.visible){let lt=D(T,$,R,I);T.onBeforeShadow(n,T,U,w,X,lt,pt),n.renderBufferDirect(w,null,X,lt,T,pt),T.onAfterShadow(n,T,U,w,X,lt,pt)}}}else if(k.visible){let q=D(T,k,R,I);T.onBeforeShadow(n,T,U,w,X,q,null),n.renderBufferDirect(w,null,X,q,T,null),T.onAfterShadow(n,T,U,w,X,q,null)}}let z=T.children;for(let X=0,k=z.length;X<k;X++)S(z[X],U,w,R,I)}function E(T){T.target.removeEventListener("dispose",E);for(let w in c){let R=c[w],I=T.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function dy(n,t){function e(){let V=!1,St=new ke,at=null,wt=new ke(0,0,0,0);return{setMask:function(Pt){at!==Pt&&!V&&(n.colorMask(Pt,Pt,Pt,Pt),at=Pt)},setLocked:function(Pt){V=Pt},setClear:function(Pt,ft,zt,Ft,ve){ve===!0&&(Pt*=Ft,ft*=Ft,zt*=Ft),St.set(Pt,ft,zt,Ft),wt.equals(St)===!1&&(n.clearColor(Pt,ft,zt,Ft),wt.copy(St))},reset:function(){V=!1,at=null,wt.set(-1,0,0,0)}}}function i(){let V=!1,St=!1,at=null,wt=null,Pt=null;return{setReversed:function(ft){if(St!==ft){let zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),St=ft;let Ft=Pt;Pt=null,this.setClear(Ft)}},getReversed:function(){return St},setTest:function(ft){ft?ht(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(ft){at!==ft&&!V&&(n.depthMask(ft),at=ft)},setFunc:function(ft){if(St&&(ft=Mf[ft]),wt!==ft){switch(ft){case Xo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case Yo:n.depthFunc(n.EQUAL);break;case Zo:n.depthFunc(n.GEQUAL);break;case Jo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=ft}},setLocked:function(ft){V=ft},setClear:function(ft){Pt!==ft&&(Pt=ft,St&&(ft=1-ft),n.clearDepth(ft))},reset:function(){V=!1,at=null,wt=null,Pt=null,St=!1}}}function s(){let V=!1,St=null,at=null,wt=null,Pt=null,ft=null,zt=null,Ft=null,ve=null;return{setTest:function(ge){V||(ge?ht(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(ge){St!==ge&&!V&&(n.stencilMask(ge),St=ge)},setFunc:function(ge,bn,an){(at!==ge||wt!==bn||Pt!==an)&&(n.stencilFunc(ge,bn,an),at=ge,wt=bn,Pt=an)},setOp:function(ge,bn,an){(ft!==ge||zt!==bn||Ft!==an)&&(n.stencilOp(ge,bn,an),ft=ge,zt=bn,Ft=an)},setLocked:function(ge){V=ge},setClear:function(ge){ve!==ge&&(n.clearStencil(ge),ve=ge)},reset:function(){V=!1,St=null,at=null,wt=null,Pt=null,ft=null,zt=null,Ft=null,ve=null}}}let r=new e,o=new i,a=new s,h=new WeakMap,c=new WeakMap,f={},u={},d={},x=new WeakMap,_=[],M=null,g=!1,m=null,P=null,D=null,S=null,E=null,T=null,U=null,w=new Yt(0,0,0),R=0,I=!1,F=null,z=null,X=null,k=null,q=null,st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,pt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec($)[1]),et=pt>=1):$.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),et=pt>=2);let lt=null,ut={},Vt=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),we=new ke().fromArray(Vt),ae=new ke().fromArray(Ot);function re(V,St,at,wt){let Pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(V,ft),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<at;zt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(St+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return ft}let ot={};ot[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(ks),ie(!1),me(Tc),ht(n.CULL_FACE),le(ri);function ht(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function Lt(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function qt(V,St){return d[V]!==St?(n.bindFramebuffer(V,St),d[V]=St,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=St),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=St),!0):!1}function Dt(V,St){let at=_,wt=!1;if(V){at=x.get(St),at===void 0&&(at=[],x.set(St,at));let Pt=V.textures;if(at.length!==Pt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,zt=Pt.length;ft<zt;ft++)at[ft]=n.COLOR_ATTACHMENT0+ft;at.length=Pt.length,wt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,wt=!0);wt&&n.drawBuffers(at)}function te(V){return M!==V?(n.useProgram(V),M=V,!0):!1}let Ue={[os]:n.FUNC_ADD,[Hu]:n.FUNC_SUBTRACT,[Wu]:n.FUNC_REVERSE_SUBTRACT};Ue[Xu]=n.MIN,Ue[qu]=n.MAX;let ne={[$u]:n.ZERO,[Yu]:n.ONE,[Zu]:n.SRC_COLOR,[Ic]:n.SRC_ALPHA,[ef]:n.SRC_ALPHA_SATURATE,[Qu]:n.DST_COLOR,[Ku]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[Lc]:n.ONE_MINUS_SRC_ALPHA,[tf]:n.ONE_MINUS_DST_COLOR,[ju]:n.ONE_MINUS_DST_ALPHA,[nf]:n.CONSTANT_COLOR,[sf]:n.ONE_MINUS_CONSTANT_COLOR,[rf]:n.CONSTANT_ALPHA,[of]:n.ONE_MINUS_CONSTANT_ALPHA};function le(V,St,at,wt,Pt,ft,zt,Ft,ve,ge){if(V===ri){g===!0&&(Lt(n.BLEND),g=!1);return}if(g===!1&&(ht(n.BLEND),g=!0),V!==Gu){if(V!==m||ge!==I){if((P!==os||E!==os)&&(n.blendEquation(n.FUNC_ADD),P=os,E=os),ge)switch(V){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",V);break}else switch(V){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",V);break}D=null,S=null,T=null,U=null,w.set(0,0,0),R=0,m=V,I=ge}return}Pt=Pt||St,ft=ft||at,zt=zt||wt,(St!==P||Pt!==E)&&(n.blendEquationSeparate(Ue[St],Ue[Pt]),P=St,E=Pt),(at!==D||wt!==S||ft!==T||zt!==U)&&(n.blendFuncSeparate(ne[at],ne[wt],ne[ft],ne[zt]),D=at,S=wt,T=ft,U=zt),(Ft.equals(w)===!1||ve!==R)&&(n.blendColor(Ft.r,Ft.g,Ft.b,ve),w.copy(Ft),R=ve),m=V,I=!1}function ye(V,St){V.side===Ln?Lt(n.CULL_FACE):ht(n.CULL_FACE);let at=V.side===xn;St&&(at=!at),ie(at),V.blending===Hs&&V.transparent===!1?le(ri):le(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let wt=V.stencilWrite;a.setTest(wt),wt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(V){F!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),F=V)}function me(V){V!==Bu?(ht(n.CULL_FACE),V!==z&&(V===Tc?n.cullFace(n.BACK):V===zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),z=V}function He(V){V!==X&&(et&&n.lineWidth(V),X=V)}function tn(V,St,at){V?(ht(n.POLYGON_OFFSET_FILL),(k!==St||q!==at)&&(k=St,q=at,o.getReversed()&&(St=-St),n.polygonOffset(St,at))):Lt(n.POLYGON_OFFSET_FILL)}function de(V){V?ht(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function ue(V){V===void 0&&(V=n.TEXTURE0+st-1),lt!==V&&(n.activeTexture(V),lt=V)}function H(V,St,at){at===void 0&&(lt===null?at=n.TEXTURE0+st-1:at=lt);let wt=ut[at];wt===void 0&&(wt={type:void 0,texture:void 0},ut[at]=wt),(wt.type!==V||wt.texture!==St)&&(lt!==at&&(n.activeTexture(at),lt=at),n.bindTexture(V,St||ot[V]),wt.type=V,wt.texture=St)}function ze(){let V=ut[lt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Zt(){try{n.compressedTexImage2D(...arguments)}catch(V){Ht("WebGLState:",V)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(V){Ht("WebGLState:",V)}}function b(){try{n.texSubImage2D(...arguments)}catch(V){Ht("WebGLState:",V)}}function Y(){try{n.texSubImage3D(...arguments)}catch(V){Ht("WebGLState:",V)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(V){Ht("WebGLState:",V)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(V){Ht("WebGLState:",V)}}function xt(){try{n.texStorage2D(...arguments)}catch(V){Ht("WebGLState:",V)}}function ct(){try{n.texStorage3D(...arguments)}catch(V){Ht("WebGLState:",V)}}function j(){try{n.texImage2D(...arguments)}catch(V){Ht("WebGLState:",V)}}function rt(){try{n.texImage3D(...arguments)}catch(V){Ht("WebGLState:",V)}}function _t(V){return u[V]!==void 0?u[V]:n.getParameter(V)}function Bt(V,St){u[V]!==St&&(n.pixelStorei(V,St),u[V]=St)}function yt(V){we.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function vt(V){ae.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ae.copy(V))}function gt(V,St){let at=c.get(St);at===void 0&&(at=new WeakMap,c.set(St,at));let wt=at.get(V);wt===void 0&&(wt=n.getUniformBlockIndex(St,V.name),at.set(V,wt))}function Mt(V,St){let wt=c.get(St).get(V);h.get(St)!==wt&&(n.uniformBlockBinding(St,wt,V.__bindingPointIndex),h.set(St,wt))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},lt=null,ut={},d={},x=new WeakMap,_=[],M=null,g=!1,m=null,P=null,D=null,S=null,E=null,T=null,U=null,w=new Yt(0,0,0),R=0,I=!1,F=null,z=null,X=null,k=null,q=null,we.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Lt,bindFramebuffer:qt,drawBuffers:Dt,useProgram:te,setBlending:le,setMaterial:ye,setFlipSided:ie,setCullFace:me,setLineWidth:He,setPolygonOffset:tn,setScissorTest:de,activeTexture:ue,bindTexture:H,unbindTexture:ze,compressedTexImage2D:Zt,compressedTexImage3D:N,texImage2D:j,texImage3D:rt,pixelStorei:Bt,getParameter:_t,updateUBOMapping:gt,uniformBlockBinding:Mt,texStorage2D:xt,texStorage3D:ct,texSubImage2D:b,texSubImage3D:Y,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:yt,viewport:vt,reset:Jt}}function py(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,f=new WeakMap,u=new Set,d,x=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,b){return _?new OffscreenCanvas(N,b):wr("canvas")}function g(N,b,Y){let W=1,Z=Zt(N);if((Z.width>Y||Z.height>Y)&&(W=Y/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let xt=Math.floor(W*Z.width),ct=Math.floor(W*Z.height);d===void 0&&(d=M(xt,ct));let j=b?M(xt,ct):d;return j.width=xt,j.height=ct,j.getContext("2d").drawImage(N,0,0,xt,ct),Wt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+xt+"x"+ct+")."),j}else return"data"in N&&Wt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),N;return N}function m(N){return N.generateMipmaps}function P(N){n.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(N,b,Y,W,Z,xt=!1){if(N!==null){if(n[N]!==void 0)return n[N];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct;W&&(ct=t.get("EXT_texture_norm16"),ct||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===n.RED&&(Y===n.FLOAT&&(j=n.R32F),Y===n.HALF_FLOAT&&(j=n.R16F),Y===n.UNSIGNED_BYTE&&(j=n.R8),Y===n.UNSIGNED_SHORT&&ct&&(j=ct.R16_EXT),Y===n.SHORT&&ct&&(j=ct.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(j=n.R8UI),Y===n.UNSIGNED_SHORT&&(j=n.R16UI),Y===n.UNSIGNED_INT&&(j=n.R32UI),Y===n.BYTE&&(j=n.R8I),Y===n.SHORT&&(j=n.R16I),Y===n.INT&&(j=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(j=n.RG32F),Y===n.HALF_FLOAT&&(j=n.RG16F),Y===n.UNSIGNED_BYTE&&(j=n.RG8),Y===n.UNSIGNED_SHORT&&ct&&(j=ct.RG16_EXT),Y===n.SHORT&&ct&&(j=ct.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(j=n.RG8UI),Y===n.UNSIGNED_SHORT&&(j=n.RG16UI),Y===n.UNSIGNED_INT&&(j=n.RG32UI),Y===n.BYTE&&(j=n.RG8I),Y===n.SHORT&&(j=n.RG16I),Y===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(j=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(j=n.RGB16UI),Y===n.UNSIGNED_INT&&(j=n.RGB32UI),Y===n.BYTE&&(j=n.RGB8I),Y===n.SHORT&&(j=n.RGB16I),Y===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),Y===n.UNSIGNED_INT&&(j=n.RGBA32UI),Y===n.BYTE&&(j=n.RGBA8I),Y===n.SHORT&&(j=n.RGBA16I),Y===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_SHORT&&ct&&(j=ct.RGB16_EXT),Y===n.SHORT&&ct&&(j=ct.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){let rt=xt?Mr:he.getTransfer(Z);Y===n.FLOAT&&(j=n.RGBA32F),Y===n.HALF_FLOAT&&(j=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(j=rt===Se?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&ct&&(j=ct.RGBA16_EXT),Y===n.SHORT&&ct&&(j=ct.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(N,b){let Y;return N?b===null||b===Wn||b===Xs?Y=n.DEPTH24_STENCIL8:b===Xn?Y=n.DEPTH32F_STENCIL8:b===Ws&&(Y=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wn||b===Xs?Y=n.DEPTH_COMPONENT24:b===Xn?Y=n.DEPTH_COMPONENT32F:b===Ws&&(Y=n.DEPTH_COMPONENT16),Y}function T(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Qe&&N.minFilter!==qe?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function U(N){let b=N.target;b.removeEventListener("dispose",U),R(b),b.isVideoTexture&&f.delete(b),b.isHTMLTexture&&u.delete(b)}function w(N){let b=N.target;b.removeEventListener("dispose",w),F(b)}function R(N){let b=i.get(N);if(b.__webglInit===void 0)return;let Y=N.source,W=x.get(Y);if(W){let Z=W[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(N),Object.keys(W).length===0&&x.delete(Y)}i.remove(N)}function I(N){let b=i.get(N);n.deleteTexture(b.__webglTexture);let Y=N.source,W=x.get(Y);delete W[b.__cacheKey],o.memory.textures--}function F(N){let b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let Z=0;Z<b.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)n.deleteFramebuffer(b.__webglFramebuffer[W]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=N.textures;for(let W=0,Z=Y.length;W<Z;W++){let xt=i.get(Y[W]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(Y[W])}i.remove(N)}let z=0;function X(){z=0}function k(){return z}function q(N){z=N}function st(){let N=z;return N>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,N}function et(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function pt(N,b){let Y=i.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let W=N.image;if(W===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(Y,N,b);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function $(N,b){let Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Lt(Y,N,b);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function lt(N,b){let Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Lt(Y,N,b);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function ut(N,b){let Y=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){qt(Y,N,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}let Vt={[jo]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Qo]:n.MIRRORED_REPEAT},Ot={[Qe]:n.NEAREST,[cf]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[qe]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},we={[df]:n.NEVER,[_f]:n.ALWAYS,[pf]:n.LESS,[hl]:n.LEQUAL,[mf]:n.EQUAL,[ul]:n.GEQUAL,[gf]:n.GREATER,[xf]:n.NOTEQUAL};function ae(N,b){if(b.type===Xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===qe||b.magFilter===Ta||b.magFilter===Vr||b.magFilter===Gi||b.minFilter===qe||b.minFilter===Ta||b.minFilter===Vr||b.minFilter===Gi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Vt[b.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Vt[b.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Vt[b.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ot[b.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ot[b.minFilter]),b.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qe||b.minFilter!==Vr&&b.minFilter!==Gi||b.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function re(N,b){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",U));let W=b.source,Z=x.get(W);Z===void 0&&(Z={},x.set(W,Z));let xt=et(b);if(xt!==N.__cacheKey){Z[xt]===void 0&&(Z[xt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),Z[xt].usedTimes++;let ct=Z[N.__cacheKey];ct!==void 0&&(Z[N.__cacheKey].usedTimes--,ct.usedTimes===0&&I(b)),N.__cacheKey=xt,N.__webglTexture=Z[xt].texture}return Y}function ot(N,b,Y){return Math.floor(Math.floor(N/Y)/b)}function ht(N,b,Y,W){let xt=N.updateRanges;if(xt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,W,b.data);else{xt.sort((Bt,yt)=>Bt.start-yt.start);let ct=0;for(let Bt=1;Bt<xt.length;Bt++){let yt=xt[ct],vt=xt[Bt],gt=yt.start+yt.count,Mt=ot(vt.start,b.width,4),Jt=ot(yt.start,b.width,4);vt.start<=gt+1&&Mt===Jt&&ot(vt.start+vt.count-1,b.width,4)===Mt?yt.count=Math.max(yt.count,vt.start+vt.count-yt.start):(++ct,xt[ct]=vt)}xt.length=ct+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),rt=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Bt=0,yt=xt.length;Bt<yt;Bt++){let vt=xt[Bt],gt=Math.floor(vt.start/4),Mt=Math.ceil(vt.count/4),Jt=gt%b.width,V=Math.floor(gt/b.width),St=Mt,at=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Jt,V,St,at,Y,W,b.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function Lt(N,b,Y){let W=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=n.TEXTURE_3D);let Z=re(N,b),xt=b.source;e.bindTexture(W,N.__webglTexture,n.TEXTURE0+Y);let ct=i.get(xt);if(xt.version!==ct.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let at=he.getPrimaries(he.workingColorSpace),wt=b.colorSpace===Si?null:he.getPrimaries(b.colorSpace),Pt=b.colorSpace===Si||at===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let rt=g(b.image,!1,s.maxTextureSize);rt=ze(b,rt);let _t=r.convert(b.format,b.colorSpace),Bt=r.convert(b.type),yt=S(b.internalFormat,_t,Bt,b.normalized,b.colorSpace,b.isVideoTexture);ae(W,b);let vt,gt=b.mipmaps,Mt=b.isVideoTexture!==!0,Jt=ct.__version===void 0||Z===!0,V=xt.dataReady,St=T(b,rt);if(b.isDepthTexture)yt=E(b.format===Hi,b.type),Jt&&(Mt?e.texStorage2D(n.TEXTURE_2D,1,yt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,yt,rt.width,rt.height,0,_t,Bt,null));else if(b.isDataTexture)if(gt.length>0){Mt&&Jt&&e.texStorage2D(n.TEXTURE_2D,St,yt,gt[0].width,gt[0].height);for(let at=0,wt=gt.length;at<wt;at++)vt=gt[at],Mt?V&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,vt.width,vt.height,_t,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,at,yt,vt.width,vt.height,0,_t,Bt,vt.data);b.generateMipmaps=!1}else Mt?(Jt&&e.texStorage2D(n.TEXTURE_2D,St,yt,rt.width,rt.height),V&&ht(b,rt,_t,Bt)):e.texImage2D(n.TEXTURE_2D,0,yt,rt.width,rt.height,0,_t,Bt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Mt&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,yt,gt[0].width,gt[0].height,rt.depth);for(let at=0,wt=gt.length;at<wt;at++)if(vt=gt[at],b.format!==Dn)if(_t!==null)if(Mt){if(V)if(b.layerUpdates.size>0){let Pt=eh(vt.width,vt.height,b.format,b.type);for(let ft of b.layerUpdates){let zt=vt.data.subarray(ft*Pt/vt.data.BYTES_PER_ELEMENT,(ft+1)*Pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,ft,vt.width,vt.height,1,_t,zt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,_t,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,yt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Mt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,_t,Bt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,yt,vt.width,vt.height,rt.depth,0,_t,Bt,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Mt&&Jt&&e.texStorage2D(n.TEXTURE_2D,St,yt,gt[0].width,gt[0].height);for(let at=0,wt=gt.length;at<wt;at++)vt=gt[at],b.format!==Dn?_t!==null?Mt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,yt,vt.width,vt.height,0,vt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?V&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,vt.width,vt.height,_t,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,at,yt,vt.width,vt.height,0,_t,Bt,vt.data)}else if(b.isDataArrayTexture)if(Mt){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,yt,rt.width,rt.height,rt.depth),V)if(b.layerUpdates.size>0){let at=eh(rt.width,rt.height,b.format,b.type);for(let wt of b.layerUpdates){let Pt=rt.data.subarray(wt*at/rt.data.BYTES_PER_ELEMENT,(wt+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,rt.width,rt.height,1,_t,Bt,Pt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Bt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,rt.width,rt.height,rt.depth,0,_t,Bt,rt.data);else if(b.isData3DTexture)Mt?(Jt&&e.texStorage3D(n.TEXTURE_3D,St,yt,rt.width,rt.height,rt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Bt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,rt.width,rt.height,rt.depth,0,_t,Bt,rt.data);else if(b.isFramebufferTexture){if(Jt)if(Mt)e.texStorage2D(n.TEXTURE_2D,St,yt,rt.width,rt.height);else{let at=rt.width,wt=rt.height;for(let Pt=0;Pt<St;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,yt,at,wt,0,_t,Bt,null),at>>=1,wt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let at=n.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),rt.parentNode!==at){at.appendChild(rt),u.add(b),at.onpaint=wt=>{let Pt=wt.changedElements;for(let ft of u)Pt.includes(ft.image)&&(ft.needsUpdate=!0)},at.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,rt);else{let Pt=n.RGBA,ft=n.RGBA,zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pt,ft,zt,rt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(gt.length>0){if(Mt&&Jt){let at=Zt(gt[0]);e.texStorage2D(n.TEXTURE_2D,St,yt,at.width,at.height)}for(let at=0,wt=gt.length;at<wt;at++)vt=gt[at],Mt?V&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,_t,Bt,vt):e.texImage2D(n.TEXTURE_2D,at,yt,_t,Bt,vt);b.generateMipmaps=!1}else if(Mt){if(Jt){let at=Zt(rt);e.texStorage2D(n.TEXTURE_2D,St,yt,at.width,at.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Bt,rt)}else e.texImage2D(n.TEXTURE_2D,0,yt,_t,Bt,rt);m(b)&&P(W),ct.__version=xt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function qt(N,b,Y){if(b.image.length!==6)return;let W=re(N,b),Z=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Y);let xt=i.get(Z);if(Z.version!==xt.__version||W===!0){e.activeTexture(n.TEXTURE0+Y);let ct=he.getPrimaries(he.workingColorSpace),j=b.colorSpace===Si?null:he.getPrimaries(b.colorSpace),rt=b.colorSpace===Si||ct===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let _t=b.isCompressedTexture||b.image[0].isCompressedTexture,Bt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let ft=0;ft<6;ft++)!_t&&!Bt?yt[ft]=g(b.image[ft],!0,s.maxCubemapSize):yt[ft]=Bt?b.image[ft].image:b.image[ft],yt[ft]=ze(b,yt[ft]);let vt=yt[0],gt=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),Jt=S(b.internalFormat,gt,Mt,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,St=xt.__version===void 0||W===!0,at=Z.dataReady,wt=T(b,vt);ae(n.TEXTURE_CUBE_MAP,b);let Pt;if(_t){V&&St&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Jt,vt.width,vt.height);for(let ft=0;ft<6;ft++){Pt=yt[ft].mipmaps;for(let zt=0;zt<Pt.length;zt++){let Ft=Pt[zt];b.format!==Dn?gt!==null?V?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ft.width,Ft.height,gt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,Jt,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ft.width,Ft.height,gt,Mt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,Jt,Ft.width,Ft.height,0,gt,Mt,Ft.data)}}}else{if(Pt=b.mipmaps,V&&St){Pt.length>0&&wt++;let ft=Zt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Jt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Bt){V?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,yt[ft].width,yt[ft].height,gt,Mt,yt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Jt,yt[ft].width,yt[ft].height,0,gt,Mt,yt[ft].data);for(let zt=0;zt<Pt.length;zt++){let ve=Pt[zt].image[ft].image;V?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,ve.width,ve.height,gt,Mt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,Jt,ve.width,ve.height,0,gt,Mt,ve.data)}}else{V?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,gt,Mt,yt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Jt,gt,Mt,yt[ft]);for(let zt=0;zt<Pt.length;zt++){let Ft=Pt[zt];V?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,gt,Mt,Ft.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,Jt,gt,Mt,Ft.image[ft])}}}m(b)&&P(n.TEXTURE_CUBE_MAP),xt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Dt(N,b,Y,W,Z,xt){let ct=r.convert(Y.format,Y.colorSpace),j=r.convert(Y.type),rt=S(Y.internalFormat,ct,j,Y.normalized,Y.colorSpace),_t=i.get(b),Bt=i.get(Y);if(Bt.__renderTarget=b,!_t.__hasExternalTextures){let yt=Math.max(1,b.width>>xt),vt=Math.max(1,b.height>>xt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,xt,rt,yt,vt,b.depth,0,ct,j,null):e.texImage2D(Z,xt,rt,yt,vt,0,ct,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),ue(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Bt.__webglTexture,0,de(b)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Bt.__webglTexture,xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(N,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,N),b.depthBuffer){let W=b.depthTexture,Z=W&&W.isDepthTexture?W.type:null,xt=E(b.stencilBuffer,Z),ct=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(b),xt,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(b),xt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,N)}else{let W=b.textures;for(let Z=0;Z<W.length;Z++){let xt=W[Z],ct=r.convert(xt.format,xt.colorSpace),j=r.convert(xt.type),rt=S(xt.internalFormat,ct,j,xt.normalized,xt.colorSpace);ue(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(b),rt,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(b),rt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,rt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(N,b,Y){let W=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",U)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ae(n.TEXTURE_CUBE_MAP,b.depthTexture);let _t=r.convert(b.depthTexture.format),Bt=r.convert(b.depthTexture.type),yt;b.depthTexture.format===ti?yt=n.DEPTH_COMPONENT24:b.depthTexture.format===Hi&&(yt=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,b.width,b.height,0,_t,Bt,null)}}else pt(b.depthTexture,0);let xt=Z.__webglTexture,ct=de(b),j=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,rt=b.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ti)ue(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,j,xt,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,rt,j,xt,0);else if(b.depthTexture.format===Hi)ue(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,j,xt,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,rt,j,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(N){let b=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let W=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){let Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=W}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let W=0;W<6;W++)Ue(b.__webglFramebuffer[W],N,W);else{let W=N.texture.mipmaps;W&&W.length>0?Ue(b.__webglFramebuffer[0],N,0):Ue(b.__webglFramebuffer,N,0)}else if(Y){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=n.createRenderbuffer(),te(b.__webglDepthbuffer[W],N,!1);else{let Z=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,xt)}}else{let W=N.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),te(b.__webglDepthbuffer,N,!1);else{let Z=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,xt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(N,b,Y){let W=i.get(N);b!==void 0&&Dt(W.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ne(N)}function ye(N){let b=N.texture,Y=i.get(N),W=i.get(b);N.addEventListener("dispose",w);let Z=N.textures,xt=N.isWebGLCubeRenderTarget===!0,ct=Z.length>1;if(ct||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=b.version,o.memory.textures++),xt){Y.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[j]=[];for(let rt=0;rt<b.mipmaps.length;rt++)Y.__webglFramebuffer[j][rt]=n.createFramebuffer()}else Y.__webglFramebuffer[j]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)Y.__webglFramebuffer[j]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ct)for(let j=0,rt=Z.length;j<rt;j++){let _t=i.get(Z[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&ue(N)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){let rt=Z[j];Y.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[j]);let _t=r.convert(rt.format,rt.colorSpace),Bt=r.convert(rt.type),yt=S(rt.internalFormat,_t,Bt,rt.normalized,rt.colorSpace,N.isXRRenderTarget===!0),vt=de(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,yt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,Y.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),te(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ae(n.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)Dt(Y.__webglFramebuffer[j][rt],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt);else Dt(Y.__webglFramebuffer[j],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(b)&&P(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let j=0,rt=Z.length;j<rt;j++){let _t=Z[j],Bt=i.get(_t),yt=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(yt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Bt.__webglTexture),ae(yt,_t),Dt(Y.__webglFramebuffer,N,_t,n.COLOR_ATTACHMENT0+j,yt,0),m(_t)&&P(yt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(j=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,W.__webglTexture),ae(j,b),b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)Dt(Y.__webglFramebuffer[rt],N,b,n.COLOR_ATTACHMENT0,j,rt);else Dt(Y.__webglFramebuffer,N,b,n.COLOR_ATTACHMENT0,j,0);m(b)&&P(j),e.unbindTexture()}N.depthBuffer&&ne(N)}function ie(N){let b=N.textures;for(let Y=0,W=b.length;Y<W;Y++){let Z=b[Y];if(m(Z)){let xt=D(N),ct=i.get(Z).__webglTexture;e.bindTexture(xt,ct),P(xt),e.unbindTexture()}}}let me=[],He=[];function tn(N){if(N.samples>0){if(ue(N)===!1){let b=N.textures,Y=N.width,W=N.height,Z=n.COLOR_BUFFER_BIT,xt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(N),j=b.length>1;if(j)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let rt=N.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[_t]);let Bt=i.get(b[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,Y,W,0,0,Y,W,Z,n.NEAREST),h===!0&&(me.length=0,He.length=0,me.push(n.COLOR_ATTACHMENT0+_t),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(me.push(xt),He.push(xt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,ct.__webglColorRenderbuffer[_t]);let Bt=i.get(b[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&h){let b=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function de(N){return Math.min(s.maxSamples,N.samples)}function ue(N){let b=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(N){let b=o.render.frame;f.get(N)!==b&&(f.set(N,b),N.update())}function ze(N,b){let Y=N.colorSpace,W=N.format,Z=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==br&&Y!==Si&&(he.getTransfer(Y)===Se?(W!==Dn||Z!==Rn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",Y)),b}function Zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=X,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=pt,this.setTexture2DArray=$,this.setTexture3D=lt,this.setTextureCube=ut,this.rebindTextures=le,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function my(n,t){function e(i,s=Si){let r,o=he.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Ra)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return n.BYTE;if(i===Hc)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===Ca)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===qc)return n.ALPHA;if(i===$c)return n.RGB;if(i===Dn)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Yc)return n.RED;if(i===Ia)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===Gr||i===Hr||i===Wr||i===Xr)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Ua||i===Fa||i===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Ba||i===za||i===Va||i===Ga||i===qr||i===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oa||i===Ba)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===za)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Va)return r.COMPRESSED_R11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qr)return r.COMPRESSED_RG11_EAC;if(i===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wa||i===Xa||i===qa||i===$a||i===Ya||i===Za||i===Ja||i===Ka||i===ja||i===Qa||i===tl||i===el||i===nl||i===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===rl||i===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ll||i===$r||i===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new dn({vertexShader:gy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends ei{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",h=1,c=null,f=null,u=null,d=null,x=null,_=null,M=typeof XRWebGLBinding<"u",g=new vh,m={},P=e.getContextAttributes(),D=null,S=null,E=[],T=[],U=new oe,w=null,R=null,I=new un;I.viewport=new ke;let F=new un;F.viewport=new ke;let z=[I,F],X=new Sa,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ht=E[ot];return ht===void 0&&(ht=new zs,E[ot]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(ot){let ht=E[ot];return ht===void 0&&(ht=new zs,E[ot]=ht),ht.getGripSpace()},this.getHand=function(ot){let ht=E[ot];return ht===void 0&&(ht=new zs,E[ot]=ht),ht.getHandSpace()};function st(ot){let ht=T.indexOf(ot.inputSource);if(ht===-1)return;let Lt=E[ht];Lt!==void 0&&(Lt.update(ot.inputSource,ot.frame,c||o),Lt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function et(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",pt);for(let ot=0;ot<E.length;ot++){let ht=T[ot];ht!==null&&(T[ot]=null,E[ot].disconnect(ht))}k=null,q=null,g.reset();for(let ot in m)delete m[ot];if(t.setRenderTarget(D),x=null,d=null,u=null,s=null,S=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(U.width,U.height,!1),R!==null){let ot=R.camera;ot.fov=R.fov,ot.zoom=R.zoom,ot.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",et),s.addEventListener("inputsourceschange",pt),P.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,qt=null,Dt=null;P.depth&&(Dt=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=P.stencil?Hi:ti,qt=P.stencil?Xs:Wn);let te={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(te),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new yn(d.textureWidth,d.textureHeight,{format:Dn,type:Rn,depthTexture:new Fi(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Lt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),S=new yn(x.framebufferWidth,x.framebufferHeight,{format:Dn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function pt(ot){for(let ht=0;ht<ot.removed.length;ht++){let Lt=ot.removed[ht],qt=T.indexOf(Lt);qt>=0&&(T[qt]=null,E[qt].disconnect(Lt))}for(let ht=0;ht<ot.added.length;ht++){let Lt=ot.added[ht],qt=T.indexOf(Lt);if(qt===-1){for(let te=0;te<E.length;te++)if(te>=T.length){T.push(Lt),qt=te;break}else if(T[te]===null){T[te]=Lt,qt=te;break}if(qt===-1)break}let Dt=E[qt];Dt&&Dt.connect(Lt)}}let $=new Q,lt=new Q;function ut(ot,ht,Lt){$.setFromMatrixPosition(ht.matrixWorld),lt.setFromMatrixPosition(Lt.matrixWorld);let qt=$.distanceTo(lt),Dt=ht.projectionMatrix.elements,te=Lt.projectionMatrix.elements,Ue=Dt[14]/(Dt[10]-1),ne=Dt[14]/(Dt[10]+1),le=(Dt[9]+1)/Dt[5],ye=(Dt[9]-1)/Dt[5],ie=(Dt[8]-1)/Dt[0],me=(te[8]+1)/te[0],He=Ue*ie,tn=Ue*me,de=qt/(-ie+me),ue=de*-ie;if(ht.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(ue),ot.translateZ(de),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Dt[10]===-1)ot.projectionMatrix.copy(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let H=Ue+de,ze=ne+de,Zt=He-ue,N=tn+(qt-ue),b=le*ne/ze*H,Y=ye*ne/ze*H;ot.projectionMatrix.makePerspective(Zt,N,b,Y,H,ze),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Vt(ot,ht){ht===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ht.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let ht=ot.near,Lt=ot.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(Lt=g.depthFar)),X.near=F.near=I.near=ht,X.far=F.far=I.far=Lt,(k!==X.near||q!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),k=X.near,q=X.far),X.layers.mask=ot.layers.mask|6,I.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;let qt=ot.parent,Dt=X.cameras;Vt(X,qt);for(let te=0;te<Dt.length;te++)Vt(Dt[te],qt);Dt.length===2?ut(X,I,F):X.projectionMatrix.copy(I.projectionMatrix),R===null&&ot.isPerspectiveCamera&&(R={camera:ot,fov:ot.fov,zoom:ot.zoom}),Ot(ot,X,qt)};function Ot(ot,ht,Lt){Lt===null?ot.matrix.copy(ht.matrixWorld):(ot.matrix.copy(Lt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ht.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ht.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ea*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&x===null))return h},this.setFoveation=function(ot){h=ot,d!==null&&(d.fixedFoveation=ot),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ot)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(ot){return m[ot]};let we=null;function ae(ot,ht){if(f=ht.getViewerPose(c||o),_=ht,f!==null){let Lt=f.views;x!==null&&(t.setRenderTargetFramebuffer(S,x.framebuffer),t.setRenderTarget(S));let qt=!1;Lt.length!==X.cameras.length&&(X.cameras.length=0,qt=!0);for(let ne=0;ne<Lt.length;ne++){let le=Lt[ne],ye=null;if(x!==null)ye=x.getViewport(le);else{let me=u.getViewSubImage(d,le);ye=me.viewport,ne===0&&(t.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(S))}let ie=z[ne];ie===void 0&&(ie=new un,ie.layers.enable(ne),ie.viewport=new ke,z[ne]=ie),ie.matrix.fromArray(le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ye.x,ye.y,ye.width,ye.height),ne===0&&(X.matrix.copy(ie.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),qt===!0&&X.cameras.push(ie)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let ne=u.getDepthInformation(Lt[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(Dt&&Dt.includes("camera-access")&&M){t.state.unbindTexture(),u=i.getBinding();for(let ne=0;ne<Lt.length;ne++){let le=Lt[ne].camera;if(le){let ye=m[le];ye||(ye=new Nr,m[le]=ye);let ie=u.getCameraImage(le);ye.sourceTexture=ie}}}}for(let Lt=0;Lt<E.length;Lt++){let qt=T[Lt],Dt=E[Lt];qt!==null&&Dt!==void 0&&Dt.update(qt,ht,c||o)}we&&we(ot,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}let re=new Zf;re.setAnimationLoop(ae),this.setAnimationLoop=function(ot){we=ot},this.dispose=function(){}}},_y=new Oe,ed=new $t;ed.set(-1,0,0,0,1,0,0,0,1);function yy(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,jc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,P,D,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&x(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?h(g,m,P,D):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===xn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===xn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let P=t.get(m),D=P.envMap,S=P.envMapRotation;D&&(g.envMap.value=D,g.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(S)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ed),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function h(g,m,P,D){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*P,g.scale.value=D*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function x(g,m,P){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let P=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vy(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(S,E){let T=E.program;i.uniformBlockBinding(S,T)}function c(S,E){let T=s[S.id];T===void 0&&(g(S),T=f(S),s[S.id]=T,S.addEventListener("dispose",P));let U=E.program;i.updateUBOMapping(S,U);let w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function f(S){let E=u();S.__bindingPointIndex=E;let T=n.createBuffer(),U=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let E=s[S.id],T=S.uniforms,U=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,R=T.length;w<R;w++){let I=T[w];if(Array.isArray(I))for(let F=0,z=I.length;F<z;F++)x(I[F],w,F,U);else x(I,w,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(S,E,T,U){if(M(S,E,T,U)===!0){let w=S.__offset,R=S.value;if(Array.isArray(R)){let I=0;for(let F=0;F<R.length;F++){let z=R[F],X=m(z);_(z,S.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,S.__data)}}function _(S,E,T){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,T)}function M(S,E,T,U){let w=S.value,R=E+"_"+T;if(U[R]===void 0)return typeof w=="number"||typeof w=="boolean"?U[R]=w:ArrayBuffer.isView(w)?U[R]=w.slice():U[R]=w.clone(),!0;{let I=U[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return U[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(I.equals(w)===!1)return I.copy(w),!0}}return!1}function g(S){let E=S.uniforms,T=0,U=16;for(let R=0,I=E.length;R<I;R++){let F=Array.isArray(E[R])?E[R]:[E[R]];for(let z=0,X=F.length;z<X;z++){let k=F[z],q=Array.isArray(k.value)?k.value:[k.value];for(let st=0,et=q.length;st<et;st++){let pt=q[st],$=m(pt),lt=T%U,ut=lt%$.boundary,Vt=lt+ut;T+=ut,Vt!==0&&U-Vt<$.storage&&(T+=U-Vt),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=$.storage}}}let w=T%U;return w>0&&(T+=U-w),S.__size=T,S.__cache={},this}function m(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",S),E}function P(S){let E=S.target;E.removeEventListener("dispose",P);let T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function D(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:h,update:c,dispose:D}}var by=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function My(){return oi===null&&(oi=new aa(by,16,16,Wi,qn),oi.name="DFG_LUT",oi.minFilter=qe,oi.magFilter=qe,oi.wrapS=Qn,oi.wrapT=Qn,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var gl=class{constructor(t={}){let{canvas:e=yf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:x=Rn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=x,g=new Set([Da,La,Ia]),m=new Set([Rn,Wn,Ws,Xs,Ra,Pa]),P=new Uint32Array(4),D=new Int32Array(4),S=new Q,E=null,T=null,U=[],w=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,z=null,X=null,k=null,q=null;this._outputColorSpace=Ve;let st=0,et=0,pt=null,$=-1,lt=null,ut=new ke,Vt=new ke,Ot=null,we=new Yt(0),ae=0,re=e.width,ot=e.height,ht=1,Lt=null,qt=null,Dt=new ke(0,0,re,ot),te=new ke(0,0,re,ot),Ue=!1,ne=new Lr,le=!1,ye=!1,ie=new Oe,me=new Q,He=new ke,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ue(){return pt===null?ht:1}let H=i;function ze(A,G){return e.getContext(A,G)}let Zt,N,b,Y,W,Z,xt,ct,j,rt,_t,Bt,yt,vt,gt,Mt,Jt,V,St,at,wt,Pt,ft;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",bn,!1),H===null){let G="webgl2";if(H=ze(G,A),H===null)throw ze(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(A){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Ht("WebGLRenderer: "+A.message),A}function zt(){Zt=new Rx(H),Zt.init(),wt=new my(H,Zt),N=new yx(H,Zt,t,wt),b=new dy(H,Zt),N.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),X=H.createFramebuffer(),k=H.createFramebuffer(),q=H.createFramebuffer(),Y=new Lx(H),W=new Q_,Z=new py(H,Zt,b,W,N,wt,Y),xt=new Cx(I),ct=new Nm(H),Pt=new xx(H,ct),j=new Px(H,ct,Y,Pt),rt=new Nx(H,j,ct,Pt,Y),V=new Dx(H,N,Z),gt=new vx(W),_t=new j_(I,xt,Zt,N,Pt,gt),Bt=new yy(I,W),yt=new ey,vt=new ay(Zt),Jt=new gx(I,xt,b,rt,_,h),Mt=new fy(I,rt,N),ft=new vy(H,Y,N,b),St=new _x(H,Zt,Y),at=new Ix(H,Zt,Y),Y.programs=_t.programs,I.capabilities=N,I.extensions=Zt,I.properties=W,I.renderLists=yt,I.shadowMap=Mt,I.state=b,I.info=Y}M!==Rn&&(R=new Fx(M,e.width,e.height,a,s,r));let Ft=new bh(I,H);this.xr=Ft,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(A){A!==void 0&&(ht=A,this.setSize(re,ot,!1))},this.getSize=function(A){return A.set(re,ot)},this.setSize=function(A,G,tt=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,ot=G,e.width=Math.floor(A*ht),e.height=Math.floor(G*ht),tt===!0&&(e.style.width=A+"px",e.style.height=G+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(re*ht,ot*ht).floor()},this.setDrawingBufferSize=function(A,G,tt){re=A,ot=G,ht=tt,e.width=Math.floor(A*tt),e.height=Math.floor(G*tt),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(M===Rn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ut)},this.getViewport=function(A){return A.copy(Dt)},this.setViewport=function(A,G,tt,K){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,G,tt,K),b.viewport(ut.copy(Dt).multiplyScalar(ht).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,G,tt,K){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,G,tt,K),b.scissor(Vt.copy(te).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){b.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){Lt=A},this.setTransparentSort=function(A){qt=A},this.getClearColor=function(A){return A.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,tt=!0){let K=0;if(A){let J=!1;if(pt!==null){let Et=pt.texture.format;J=g.has(Et)}if(J){let Et=pt.texture.type,Nt=m.has(Et),Tt=Jt.getClearColor(),kt=Jt.getClearAlpha(),bt=Tt.r,jt=Tt.g,ee=Tt.b;Nt?(P[0]=bt,P[1]=jt,P[2]=ee,P[3]=kt,H.clearBufferuiv(H.COLOR,0,P)):(D[0]=bt,D[1]=jt,D[2]=ee,D[3]=kt,H.clearBufferiv(H.COLOR,0,D))}else K|=H.COLOR_BUFFER_BIT}G&&(K|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Jt.dispose(),yt.dispose(),vt.dispose(),W.dispose(),xt.dispose(),rt.dispose(),Pt.dispose(),ft.dispose(),_t.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",ds),Ft.removeEventListener("sessionend",We),fi.stop()};function ve(A){A.preventDefault(),Ar("WebGLRenderer: Context Lost."),F=!0}function ge(){Ar("WebGLRenderer: Context Restored."),F=!1;let A=Y.autoReset,G=Mt.enabled,tt=Mt.autoUpdate,K=Mt.needsUpdate,J=Mt.type;zt(),Y.autoReset=A,Mt.enabled=G,Mt.autoUpdate=tt,Mt.needsUpdate=K,Mt.type=J}function bn(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){let G=A.target;G.removeEventListener("dispose",an),fs(G)}function fs(A){lo(A),W.remove(A)}function lo(A){let G=W.get(A).programs;G!==void 0&&(G.forEach(function(tt){_t.releaseProgram(tt)}),A.isShaderMaterial&&_t.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,tt,K,J,Et){G===null&&(G=tn);let Nt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Tt=Ei(A,G,tt,K,J);b.setMaterial(K,Nt);let kt=tt.index,bt=1;if(K.wireframe===!0){if(kt=j.getWireframeAttribute(tt),kt===void 0)return;bt=2}let jt=tt.drawRange,ee=tt.attributes.position,Ut=jt.start*bt,Qt=(jt.start+jt.count)*bt;Et!==null&&(Ut=Math.max(Ut,Et.start*bt),Qt=Math.min(Qt,(Et.start+Et.count)*bt)),kt!==null?(Ut=Math.max(Ut,0),Qt=Math.min(Qt,kt.count)):ee!=null&&(Ut=Math.max(Ut,0),Qt=Math.min(Qt,ee.count));let Ae=Qt-Ut;if(Ae<0||Ae===1/0)return;Pt.setup(J,K,Tt,tt,kt);let Ee,be=St;if(kt!==null&&(Ee=ct.get(kt),be=at,be.setIndex(Ee)),J.isMesh)K.wireframe===!0?(b.setLineWidth(K.wireframeLinewidth*ue()),be.setMode(H.LINES)):be.setMode(H.TRIANGLES);else if(J.isLine){let Pe=K.linewidth;Pe===void 0&&(Pe=1),b.setLineWidth(Pe*ue()),J.isLineSegments?be.setMode(H.LINES):J.isLineLoop?be.setMode(H.LINE_LOOP):be.setMode(H.LINE_STRIP)}else J.isPoints?be.setMode(H.POINTS):J.isSprite&&be.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))be.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Pe=J._multiDrawStarts,It=J._multiDrawCounts,Ke=J._multiDrawCount,ce=kt?ct.get(kt).bytesPerElement:1,ln=W.get(K).currentProgram.getUniforms();for(let Mn=0;Mn<Ke;Mn++)ln.setValue(H,"_gl_DrawID",Mn),be.render(Pe[Mn]/ce,It[Mn])}else if(J.isInstancedMesh)be.renderInstances(Ut,Ae,J.count);else if(tt.isInstancedBufferGeometry){let Pe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,It=Math.min(tt.instanceCount,Pe);be.renderInstances(Ut,Ae,It)}else be.render(Ut,Ae)};function ui(A,G,tt,K){z!==null&&A.isNodeMaterial&&z.setObject(K,A),le===!0&&gt.setState(A,tt,!1),A.transparent===!0&&A.side===Ln&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,gs(A,G,K),A.side=zi,A.needsUpdate=!0,gs(A,G,K),A.side=Ln):gs(A,G,K)}this.compile=function(A,G,tt=null){tt===null&&(tt=A),z!==null&&z.renderStart(A,G,tt),T=vt.get(tt),T.init(G),w.push(T),tt.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),A!==tt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ye=this.localClippingEnabled,le=gt.init(this.clippingPlanes,ye),le===!0&&gt.setGlobalState(this.clippingPlanes,G),z!==null&&Mt.render(T.state.shadowsArray,tt,G);let K=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Et=J.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){let Tt=Et[Nt];ui(Tt,tt,G,J),K.add(Tt)}else ui(Et,tt,G,J),K.add(Et)}),T=w.pop(),z!==null&&z.renderEnd(),K},this.compileAsync=function(A,G,tt=null){let K=this.compile(A,G,tt);return new Promise(J=>{function Et(){if(K.forEach(function(Nt){let kt=W.get(Nt).currentProgram;(kt===void 0||kt.isReady())&&K.delete(Nt)}),K.size===0){J(A);return}setTimeout(Et,10)}Zt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Yi=null;function Zi(A){Yi&&Yi(A)}function ds(){fi.stop()}function We(){fi.start()}let fi=new Zf;fi.setAnimationLoop(Zi),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(A){Yi=A,Ft.setAnimationLoop(A),A===null?fi.stop():fi.start()},Ft.addEventListener("sessionstart",ds),Ft.addEventListener("sessionend",We),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(A,G);let tt=Ft.enabled===!0&&Ft.isPresenting===!0,K=R!==null&&(pt===null||tt)&&R.begin(I,pt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(G),G=Ft.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,G,pt),T=vt.get(A,w.length),T.init(G),T.state.textureUnits=Z.getTextureUnits(),w.push(T),ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(ie,Gn,G.reversedDepth),ye=this.localClippingEnabled,le=gt.init(this.clippingPlanes,ye),E=yt.get(A,U.length),E.init(),U.push(E),Ft.enabled===!0&&Ft.isPresenting===!0){let Nt=I.xr.getDepthSensingMesh();Nt!==null&&Je(Nt,G,-1/0,I.sortObjects)}Je(A,G,0,I.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),I.sortObjects===!0&&E.sort(Lt,qt),de=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,de&&Jt.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&gt.beginShadows();let J=T.state.shadowsArray;if(Mt.render(J,A,G),le===!0&&gt.endShadows(),(K&&R.hasRenderPass())===!1){let Nt=E.opaque,Tt=E.transmissive;if(T.setupLights(),G.isArrayCamera){let kt=G.cameras;if(Tt.length>0)for(let bt=0,jt=kt.length;bt<jt;bt++){let ee=kt[bt];ps(Nt,Tt,A,ee)}de&&Jt.render(A);for(let bt=0,jt=kt.length;bt<jt;bt++){let ee=kt[bt];di(E,A,ee,ee.viewport)}}else Tt.length>0&&ps(Nt,Tt,A,G),de&&Jt.render(A),di(E,A,G)}pt!==null&&et===0&&(Z.updateMultisampleRenderTarget(pt),Z.updateRenderTargetMipmap(pt)),K&&R.end(I),A.isScene===!0&&A.onAfterRender(I,A,G),Pt.resetDefaultState(),$=-1,lt=null,w.pop(),w.length>0?(T=w[w.length-1],Z.setTextureUnits(T.state.textureUnits),le===!0&&gt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,U.pop(),U.length>0?E=U[U.length-1]:E=null,z!==null&&z.renderEnd()};function Je(A,G,tt,K){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ne)){K&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);let Nt=rt.update(A),Tt=A.material;Tt.visible&&E.push(A,Nt,Tt,tt,He.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ne))){let Nt=rt.update(A),Tt=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),He.copy(Nt.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(Tt)){let kt=Nt.groups;for(let bt=0,jt=kt.length;bt<jt;bt++){let ee=kt[bt],Ut=Tt[ee.materialIndex];Ut&&Ut.visible&&E.push(A,Nt,Ut,tt,He.z,ee,G)}}else Tt.visible&&E.push(A,Nt,Tt,tt,He.z,null,G)}}let Et=A.children;for(let Nt=0,Tt=Et.length;Nt<Tt;Nt++)Je(Et[Nt],G,tt,K)}function di(A,G,tt,K){let{opaque:J,transmissive:Et,transparent:Nt}=A;T.setupLightsView(tt),le===!0&&gt.setGlobalState(I.clippingPlanes,tt),K&&b.viewport(ut.copy(K)),J.length>0&&ms(J,G,tt),Et.length>0&&ms(Et,G,tt),Nt.length>0&&ms(Nt,G,tt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ps(A,G,tt,K){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Ut=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new yn(1,1,{generateMipmaps:!0,type:Ut?qn:Rn,minFilter:Gi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Et=T.state.transmissionRenderTarget[K.id],Nt=K.viewport||ut;Et.setSize(Nt.z*I.transmissionResolutionScale,Nt.w*I.transmissionResolutionScale);let Tt=I.getRenderTarget(),kt=I.getActiveCubeFace(),bt=I.getActiveMipmapLevel();I.setRenderTarget(Et),I.getClearColor(we),ae=I.getClearAlpha(),ae<1&&I.setClearColor(16777215,.5),I.clear(),de&&Jt.render(tt);let jt=I.toneMapping;I.toneMapping=Hn;let ee=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),le===!0&&gt.setGlobalState(I.clippingPlanes,K),ms(A,tt,K),Z.updateMultisampleRenderTarget(Et),Z.updateRenderTargetMipmap(Et),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Qt=0,Ae=G.length;Qt<Ae;Qt++){let Ee=G[Qt],{object:be,geometry:Pe,material:It,group:Ke}=Ee;if(It.side===Ln&&be.layers.test(K.layers)){let ce=It.side;It.side=xn,It.needsUpdate=!0,ir(be,tt,K,Pe,It,Ke),It.side=ce,It.needsUpdate=!0,Ut=!0}}Ut===!0&&(Z.updateMultisampleRenderTarget(Et),Z.updateRenderTargetMipmap(Et))}I.setRenderTarget(Tt,kt,bt),I.setClearColor(we,ae),ee!==void 0&&(K.viewport=ee),I.toneMapping=jt}function ms(A,G,tt){let K=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Et=A.length;J<Et;J++){let Nt=A[J],{object:Tt,geometry:kt,group:bt}=Nt,jt=Nt.material;jt.allowOverride===!0&&K!==null&&(jt=K),Tt.layers.test(tt.layers)&&ir(Tt,G,tt,kt,jt,bt)}}function ir(A,G,tt,K,J,Et){z!==null&&J.isNodeMaterial&&z.setObject(A,J),A.onBeforeRender(I,G,tt,K,J,Et),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(I,G,tt,K,A,Et),J.transparent===!0&&J.side===Ln&&J.forceSinglePass===!1?(J.side=xn,J.needsUpdate=!0,I.renderBufferDirect(tt,G,K,J,A,Et),J.side=zi,J.needsUpdate=!0,I.renderBufferDirect(tt,G,K,J,A,Et),J.side=Ln):I.renderBufferDirect(tt,G,K,J,A,Et),A.onAfterRender(I,G,tt,K,J,Et)}function gs(A,G,tt){G.isScene!==!0&&(G=tn);let K=W.get(A),J=T.state.lights,Et=T.state.shadowsArray,Nt=J.state.version,Tt=_t.getParameters(A,J.state,Et,G,tt,T.state.lightProbeGridArray),kt=_t.getProgramCacheKey(Tt),bt=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=xt.get(A.envMap||K.environment,jt),K.envMapRotation=K.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,bt===void 0&&(A.addEventListener("dispose",an),bt=new Map,K.programs=bt);let ee=bt.get(kt);if(ee!==void 0){if(K.currentProgram===ee&&K.lightsStateVersion===Nt)return rr(A,Tt),ee}else Tt.uniforms=_t.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,tt,Tt),A.onBeforeCompile(Tt,I),ee=_t.acquireProgram(Tt,kt),bt.set(kt,ee),K.uniforms=Tt.uniforms;let Ut=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=gt.uniform),rr(A,Tt),K.needsLights=co(A),K.lightsStateVersion=Nt,K.needsLights&&(Ut.ambientLightColor.value=J.state.ambient,Ut.lightProbe.value=J.state.probe,Ut.sunLights.value=J.state.sun,Ut.sunLightShadows.value=J.state.sunShadow,Ut.directionalLights.value=J.state.directional,Ut.directionalLightShadows.value=J.state.directionalShadow,Ut.spotLights.value=J.state.spot,Ut.spotLightShadows.value=J.state.spotShadow,Ut.rectAreaLights.value=J.state.rectArea,Ut.ltc_1.value=J.state.rectAreaLTC1,Ut.ltc_2.value=J.state.rectAreaLTC2,Ut.pointLights.value=J.state.point,Ut.pointLightShadows.value=J.state.pointShadow,Ut.hemisphereLights.value=J.state.hemi,Ut.sunShadowMatrix.value=J.state.sunShadowMatrix,Ut.sunShadowCascade.value=J.state.sunShadowCascade,Ut.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ut.spotLightMatrix.value=J.state.spotLightMatrix,Ut.spotLightMap.value=J.state.spotLightMap,Ut.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=ee,K.uniformsList=null,ee}function sr(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Ys.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function rr(A,G){let tt=W.get(A);tt.outputColorSpace=G.outputColorSpace,tt.batching=G.batching,tt.batchingColor=G.batchingColor,tt.instancing=G.instancing,tt.instancingColor=G.instancingColor,tt.instancingMorph=G.instancingMorph,tt.skinning=G.skinning,tt.morphTargets=G.morphTargets,tt.morphNormals=G.morphNormals,tt.morphColors=G.morphColors,tt.morphTargetsCount=G.morphTargetsCount,tt.numClippingPlanes=G.numClippingPlanes,tt.numIntersection=G.numClipIntersection,tt.vertexAlphas=G.vertexAlphas,tt.vertexTangents=G.vertexTangents,tt.toneMapping=G.toneMapping}function Fe(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(G.matrixWorld);for(let tt=0,K=A.length;tt<K;tt++){let J=A[tt];if(J.texture!==null&&J.boundingBox.containsPoint(S))return J}return null}function Ei(A,G,tt,K,J){G.isScene!==!0&&(G=tn),Z.resetTextureUnits();let Et=G.fog,Nt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,Tt=pt===null?I.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:he.workingColorSpace,kt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,bt=xt.get(K.envMap||Nt,kt),jt=K.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ut=!!tt.morphAttributes.position,Qt=!!tt.morphAttributes.normal,Ae=!!tt.morphAttributes.color,Ee=Hn;K.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Ee=I.toneMapping);let be=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Pe=be!==void 0?be.length:0,It=W.get(K),Ke=T.state.lights;if(le===!0&&(ye===!0||A!==lt)){let Gt=A===lt&&K.id===$;gt.setState(K,A,Gt)}let ce=!1;K.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ke.state.version||It.outputColorSpace!==Tt||J.isBatchedMesh&&It.batching===!1||!J.isBatchedMesh&&It.batching===!0||J.isBatchedMesh&&It.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&It.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&It.instancing===!1||!J.isInstancedMesh&&It.instancing===!0||J.isSkinnedMesh&&It.skinning===!1||!J.isSkinnedMesh&&It.skinning===!0||J.isInstancedMesh&&It.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&It.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&It.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&It.instancingMorph===!1&&J.morphTexture!==null||It.envMap!==bt||K.fog===!0&&It.fog!==Et||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==gt.numPlanes||It.numIntersection!==gt.numIntersection)||It.vertexAlphas!==jt||It.vertexTangents!==ee||It.morphTargets!==Ut||It.morphNormals!==Qt||It.morphColors!==Ae||It.toneMapping!==Ee||It.morphTargetsCount!==Pe||!!It.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,It.__version=K.version);let ln=It.currentProgram;ce===!0&&(ln=gs(K,G,J),z&&K.isNodeMaterial&&z.onUpdateProgram(K,ln,It));let Mn=!1,Zn=!1,en=!1,xe=ln.getUniforms(),Le=It.uniforms;if(b.useProgram(ln.program)&&(Mn=!0,Zn=!0,en=!0),K.id!==$&&($=K.id,Zn=!0),It.needsLights){let Gt=Fe(T.state.lightProbeGridArray,J);It.lightProbeGrid!==Gt&&(It.lightProbeGrid=Gt,Zn=!0)}if(Mn||lt!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xe.setValue(H,"projectionMatrix",A.projectionMatrix),xe.setValue(H,"viewMatrix",A.matrixWorldInverse);let Fn=xe.map.cameraPosition;Fn!==void 0&&Fn.setValue(H,me.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&xe.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xe.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),lt!==A&&(lt=A,Zn=!0,en=!0)}if(It.needsLights&&(Ke.state.sunShadowMap.length>0&&xe.setValue(H,"sunShadowMap",Ke.state.sunShadowMap,Z),Ke.state.directionalShadowMap.length>0&&xe.setValue(H,"directionalShadowMap",Ke.state.directionalShadowMap,Z),Ke.state.spotShadowMap.length>0&&xe.setValue(H,"spotShadowMap",Ke.state.spotShadowMap,Z),Ke.state.pointShadowMap.length>0&&xe.setValue(H,"pointShadowMap",Ke.state.pointShadowMap,Z)),J.isSkinnedMesh){xe.setOptional(H,J,"bindMatrix"),xe.setOptional(H,J,"bindMatrixInverse");let Gt=J.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),xe.setValue(H,"boneTexture",Gt.boneTexture,Z))}J.isBatchedMesh&&(xe.setOptional(H,J,"batchingTexture"),xe.setValue(H,"batchingTexture",J._matricesTexture,Z),xe.setOptional(H,J,"batchingIdTexture"),xe.setValue(H,"batchingIdTexture",J._indirectTexture,Z),xe.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&xe.setValue(H,"batchingColorTexture",J._colorsTexture,Z));let pe=tt.morphAttributes;if((pe.position!==void 0||pe.normal!==void 0||pe.color!==void 0)&&V.update(J,tt,ln),(Zn||It.receiveShadow!==J.receiveShadow)&&(It.receiveShadow=J.receiveShadow,xe.setValue(H,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(Le.envMapIntensity.value=G.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=My()),Zn){if(xe.setValue(H,"toneMappingExposure",I.toneMappingExposure),It.needsLights&&Cl(Le,en),Et&&K.fog===!0&&Bt.refreshFogUniforms(Le,Et),Bt.refreshMaterialUniforms(Le,K,ht,ot,T.state.transmissionRenderTarget[A.id]),It.needsLights&&It.lightProbeGrid){let Gt=It.lightProbeGrid;Le.probesSH.value=Gt.texture,Le.probesMin.value.copy(Gt.boundingBox.min),Le.probesMax.value.copy(Gt.boundingBox.max),Le.probesResolution.value.copy(Gt.resolution)}Ys.upload(H,sr(It),Le,Z)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ys.upload(H,sr(It),Le,Z),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xe.setValue(H,"center",J.center),xe.setValue(H,"modelViewMatrix",J.modelViewMatrix),xe.setValue(H,"normalMatrix",J.normalMatrix),xe.setValue(H,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let Gt=K.uniformsGroups;for(let Fn=0,pi=Gt.length;Fn<pi;Fn++){let uo=Gt[Fn];ft.update(uo,ln),ft.bind(uo,ln)}}return ln}function Cl(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function co(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(A,G,tt){let K=W.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=G,W.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:tt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let tt=W.get(A);tt.__webglFramebuffer=G,tt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,tt=0){pt=A,st=G,et=tt;let K=null,J=!1,Et=!1;if(A){let Tt=W.get(A);if(Tt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(H.FRAMEBUFFER,Tt.__webglFramebuffer),ut.copy(A.viewport),Vt.copy(A.scissor),Ot=A.scissorTest,b.viewport(ut),b.scissor(Vt),b.setScissorTest(Ot),$=-1;return}else if(Tt.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Tt.__hasExternalTextures)Z.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let jt=A.depthTexture;if(Tt.__boundDepthTexture!==jt){if(jt!==null&&W.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}let kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Et=!0);let bt=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(bt[G])?K=bt[G][tt]:K=bt[G],J=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?K=W.get(A).__webglMultisampledFramebuffer:Array.isArray(bt)?K=bt[tt]:K=bt,ut.copy(A.viewport),Vt.copy(A.scissor),Ot=A.scissorTest}else ut.copy(Dt).multiplyScalar(ht).floor(),Vt.copy(te).multiplyScalar(ht).floor(),Ot=Ue;if(tt!==0&&(K=X),b.bindFramebuffer(H.FRAMEBUFFER,K)&&b.drawBuffers(A,K),b.viewport(ut),b.scissor(Vt),b.setScissorTest(Ot),J){let Tt=W.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Tt.__webglTexture,tt)}else if(Et){let Tt=G;for(let kt=0;kt<A.textures.length;kt++){let bt=W.get(A.textures[kt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+kt,bt.__webglTexture,tt,Tt)}}else if(A!==null&&tt!==0){let Tt=W.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tt.__webglTexture,tt)}$=-1};function ho(A){let G=W.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=N.textureFormatReadable(A.format),G.__typeReadable=N.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,tt,K,J,Et,Nt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){b.bindFramebuffer(H.FRAMEBUFFER,kt);try{let bt=A.textures[Tt],jt=bt.format,ee=bt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Ut=ho(bt);if(Ut.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-K&&tt>=0&&tt<=A.height-J&&H.readPixels(G,tt,K,J,wt.convert(jt),wt.convert(ee),Et)}finally{let bt=pt!==null?W.get(pt).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(A,G,tt,K,J,Et,Nt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt)if(G>=0&&G<=A.width-K&&tt>=0&&tt<=A.height-J){b.bindFramebuffer(H.FRAMEBUFFER,kt);let bt=A.textures[Tt],jt=bt.format,ee=bt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Ut=ho(bt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qt),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(G,tt,K,J,wt.convert(jt),wt.convert(ee),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ae=pt!==null?W.get(pt).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,Ae);let Ee=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await bf(H,Ee,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Qt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Qt),H.deleteSync(Ee),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,tt=0){let K=Math.pow(2,-tt),J=Math.floor(A.image.width*K),Et=Math.floor(A.image.height*K),Nt=G!==null?G.x:0,Tt=G!==null?G.y:0;Z.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,tt,0,0,Nt,Tt,J,Et),b.unbindTexture()},this.copyTextureToTexture=function(A,G,tt=null,K=null,J=0,Et=0){let Nt,Tt,kt,bt,jt,ee,Ut,Qt,Ae,Ee=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(tt!==null)Nt=tt.max.x-tt.min.x,Tt=tt.max.y-tt.min.y,kt=tt.isBox3?tt.max.z-tt.min.z:1,bt=tt.min.x,jt=tt.min.y,ee=tt.isBox3?tt.min.z:0;else{let Le=Math.pow(2,-J);Nt=Math.floor(Ee.width*Le),Tt=Math.floor(Ee.height*Le),A.isDataArrayTexture?kt=Ee.depth:A.isData3DTexture?kt=Math.floor(Ee.depth*Le):kt=1,bt=0,jt=0,ee=0}K!==null?(Ut=K.x,Qt=K.y,Ae=K.z):(Ut=0,Qt=0,Ae=0);let be=wt.convert(G.format),Pe=wt.convert(G.type),It;G.isData3DTexture?(Z.setTexture3D(G,0),It=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Z.setTexture2DArray(G,0),It=H.TEXTURE_2D_ARRAY):(Z.setTexture2D(G,0),It=H.TEXTURE_2D),b.activeTexture(H.TEXTURE0),b.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let Ke=b.getParameter(H.UNPACK_ROW_LENGTH),ce=b.getParameter(H.UNPACK_IMAGE_HEIGHT),ln=b.getParameter(H.UNPACK_SKIP_PIXELS),Mn=b.getParameter(H.UNPACK_SKIP_ROWS),Zn=b.getParameter(H.UNPACK_SKIP_IMAGES);b.pixelStorei(H.UNPACK_ROW_LENGTH,Ee.width),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee.height),b.pixelStorei(H.UNPACK_SKIP_PIXELS,bt),b.pixelStorei(H.UNPACK_SKIP_ROWS,jt),b.pixelStorei(H.UNPACK_SKIP_IMAGES,ee);let en=A.isDataArrayTexture||A.isData3DTexture,xe=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let Le=W.get(A),pe=W.get(G),Gt=W.get(Le.__renderTarget),Fn=W.get(pe.__renderTarget);b.bindFramebuffer(H.READ_FRAMEBUFFER,Gt.__webglFramebuffer),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let pi=0;pi<kt;pi++)en&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(A).__webglTexture,J,ee+pi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(G).__webglTexture,Et,Ae+pi)),H.blitFramebuffer(bt,jt,Nt,Tt,Ut,Qt,Nt,Tt,H.DEPTH_BUFFER_BIT,H.NEAREST);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||W.has(A)){let Le=W.get(A),pe=W.get(G);b.bindFramebuffer(H.READ_FRAMEBUFFER,k),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,q);for(let Gt=0;Gt<kt;Gt++)en?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,J,ee+Gt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Le.__webglTexture,J),xe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pe.__webglTexture,Et,Ae+Gt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pe.__webglTexture,Et),J!==0?H.blitFramebuffer(bt,jt,Nt,Tt,Ut,Qt,Nt,Tt,H.COLOR_BUFFER_BIT,H.NEAREST):xe?H.copyTexSubImage3D(It,Et,Ut,Qt,Ae+Gt,bt,jt,Nt,Tt):H.copyTexSubImage2D(It,Et,Ut,Qt,bt,jt,Nt,Tt);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(It,Et,Ut,Qt,Ae,Nt,Tt,kt,be,Pe,Ee.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(It,Et,Ut,Qt,Ae,Nt,Tt,kt,be,Ee.data):H.texSubImage3D(It,Et,Ut,Qt,Ae,Nt,Tt,kt,be,Pe,Ee):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,Ut,Qt,Nt,Tt,be,Pe,Ee.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,Ut,Qt,Ee.width,Ee.height,be,Ee.data):H.texSubImage2D(H.TEXTURE_2D,Et,Ut,Qt,Nt,Tt,be,Pe,Ee);b.pixelStorei(H.UNPACK_ROW_LENGTH,Ke),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ce),b.pixelStorei(H.UNPACK_SKIP_PIXELS,ln),b.pixelStorei(H.UNPACK_SKIP_ROWS,Mn),b.pixelStorei(H.UNPACK_SKIP_IMAGES,Zn),Et===0&&G.generateMipmaps&&H.generateMipmap(It),b.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){st=0,et=0,pt=null,b.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Sy=["top","side","bottom"],wy={slab_bottom:1,slab_top:1,stairs:1},nd=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function Ay(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],nd[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function id(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let R of t){if(!R||typeof R.id!="string")throw new Error("block without id");if(!Number.isInteger(R.n)||R.n<0||R.n>255)throw new Error("bad n for "+R.id);if(i[R.n])throw new Error("duplicate n "+R.n+" ("+R.id+")");if(s[R.id])throw new Error("duplicate id "+R.id);let I=R.colors||{},F=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},R);if(F.placeable=F.n!==0&&!F.liquid,F.colors={top:I.top||"#888888",side:I.side||I.top||"#888888",bottom:I.bottom||I.top||"#888888"},F.opaque=F.solid&&!F.transparent&&!F.cutout&&!wy[F.shape],F.tile={},F.tileOf&&s[F.tileOf])F.tile=Object.assign({},s[F.tileOf].tile);else if(F.n!==0){let z={};for(let X of Sy){let k=F.colors[X]+"|"+(F.pattern==="grass"||F.pattern==="log"||F.pattern==="lamp"||F.pattern==="table"||F.pattern==="stele"||F.pattern==="torch"||F.pattern==="bed"||F.pattern==="snow"||F.pattern==="lantern"||F.pattern==="bookshelf"||F.pattern==="hay"||F.pattern==="barrel"||F.pattern==="chest"||F.pattern==="farmland"?X:"");z[k]===void 0&&(z[k]=r.length,r.push({block:F.id,face:X,color:F.colors[X],pattern:F.pattern,accent:F.accent||null,top:F.colors.top})),F.tile[X]=z[k]}}i[F.n]=F,s[F.id]=F}if(!s.air)throw new Error("registry needs air");for(let R of e){if(s[R.id])throw new Error("duplicate id "+R.id);s[R.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},R)}for(let R in s){let I=s[R].drops;if(I&&I!=="self"&&!s[I])throw new Error(R+" drops unknown "+I)}let o=R=>(typeof R=="number"?i[R]:s[R])||null,a=new Uint8Array(256),h=new Uint8Array(256),c=new Uint8Array(256),f=new Uint8Array(256),u=new Uint8Array(256),d=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},_=new Uint8Array(256),M=new Array(256).fill(null),g=new Uint8Array(256),m=new Uint8Array(256),P=new Uint8Array(256),D=new Uint8Array(256),S=new Uint8Array(256),E=new Int16Array(256).fill(-1),T=new Int16Array(256).fill(-1),U=new Int16Array(256).fill(-1);i.forEach((R,I)=>{R&&(g[I]=R.solid?1:0,m[I]=R.opaque?1:0,P[I]=R.transparent?1:0,D[I]=R.emissive?1:0,S[I]=R.liquid?1:0,a[I]=R.light!=null?R.light:R.emissive?15:0,h[I]=R.liquid?2:0,c[I]=x[R.shape]||0,f[I]=R.cutout?1:0,u[I]=+R.climbable||0,d[I]=R.plant?1:0,_[I]=R.facing|0,R.solid&&(M[I]=Ay(R)),I&&(E[I]=R.tile.top,T[I]=R.tile.side,U[I]=R.tile.bottom))});let w=(n&&n.blueprints||[]).map(R=>Object.assign({kind:"blueprint"},R));return{blocks:i.filter(Boolean),items:e.map(R=>s[R.id]),blueprints:w,tiles:r,get:o,toolOf:R=>{let I=R&&s[R];return I&&I.kind==="item"&&I.tool&&typeof I.tool=="object"?I.tool:null},num:R=>{let I=s[R];if(!I||I.kind!=="block")throw new Error("no block "+R);return I.n},name:R=>{let I=o(R);return I?I.name_zh:String(R)},maxStack:R=>{let I=s[R];return I?I.maxStack:64},dropOf:R=>{let I=i[R];return!I||!I.drops?null:I.drops==="self"?I.id:I.drops},breakTime:R=>{let I=i[R];return!I||I.hardness<0?1/0:.25+I.hardness*.55},flat:{solid:g,opaque:m,trans:P,emit:D,liquid:S,tileTop:E,tileSide:T,tileBottom:U,lightEmit:a,attn:h,shape:c,cutout:f,climb:u,plant:d,facing:_,boxes:M}}}var wi=n=>Math.floor(n/16);var Nn=(n,t,e)=>(t*16+e)*16+n;var hs=(n,t)=>n+","+t;function Mh(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=wi(n),s=wi(e);return{cx:i,cz:s,i:Nn(n-i*16,t,e-s*16)}}function sd(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Sh(n,t,e,i,s,r,o){let a=i/2,h=n-a,c=n+a,f=t,u=t+s,d=e-a,x=e+a,_=Math.floor(h),M=Math.floor(c-1e-6),g=Math.floor(f),m=Math.floor(u-1e-6),P=Math.floor(d),D=Math.floor(x-1e-6),S=!1;for(let E=g;E<=m;E++)for(let T=P;T<=D;T++)for(let U=_;U<=M;U++){let w=r(U,E,T);if(!w)continue;let R=w===!0?Ey:w;for(let I of R){let F=U+I[0],z=E+I[1],X=T+I[2],k=U+I[3],q=E+I[4],st=T+I[5];if(!(k<=h+1e-6||F>=c-1e-6||q<=f+1e-6||z>=u-1e-6||st<=d+1e-6||X>=x-1e-6)){if(!o)return!0;S=!0,o.push([F,z,X,k,q,st])}}}return S}var Ey=[[0,0,0,1,1,1]],Kr=(n,t,e,i,s,r)=>Sh(n,t,e,i,s,r,null),rd=(n,t,e=.6,i=1.8)=>!Kr(n.x,n.y,n.z,e,i,t);function od(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,h=r/2,c=!1,f=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(u/.3)),x=e/d,_=[];for(let M=0;M<d;M++){let g=t.y*x;g&&(_.length=0,Sh(n.x,n.y+g,n.z,r,o,i,_)?(g<0?(n.y=Math.max(..._.map(m=>m[4])),c=!0):n.y=Math.min(..._.map(m=>m[1]))-o,t.y=0):n.y+=g);for(let m of["x","z"]){let P=t[m]*x;if(!P)continue;let D={x:n.x,y:n.y,z:n.z};if(D[m]+=P,_.length=0,!Sh(D.x,D.y,D.z,r,o,i,_)){n[m]=D[m];continue}if(a&&(c||s.grounded)){let E=Math.max(..._.map(T=>T[4]));if(E-n.y>0&&E-n.y<=1.01&&!Kr(D.x,E,D.z,r,o,i)&&!Kr(n.x,E,n.z,r,o,i)){f+=E-n.y,n.y=E,n[m]=D[m];continue}}let S=m==="x"?0:2;n[m]=P>0?Math.min(..._.map(E=>E[S]))-h-1e-4:Math.max(..._.map(E=>E[S+3]))+h+1e-4,Kr(n.x,n.y,n.z,r,o,i)&&(n[m]=D[m]-P),t[m]=0}}return!c&&t.y<=0&&Kr(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:f}}function Ty(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],h=null;for(let c of r){let f=[e+c[0],i+c[1],s+c[2]],u=[e+c[3],i+c[4],s+c[5]],d=0,x=1/0,_=-1,M=!0;for(let g=0;g<3&&M;g++){if(Math.abs(a[g])<1e-12){(o[g]<f[g]||o[g]>u[g])&&(M=!1);continue}let m=(f[g]-o[g])/a[g],P=(u[g]-o[g])/a[g];m>P&&([m,P]=[P,m]),m>d&&(d=m,_=g),P<x&&(x=P),d>x&&(M=!1)}if(M&&(!h||d<h.t)){let g=[0,0,0];_>=0&&(g[_]=-Math.sign(a[_])),h={t:d,face:_>=0?g:null}}}return h}function wh(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),h=Math.floor(n.z),c=Math.sign(t.x),f=Math.sign(t.y),u=Math.sign(t.z),d=c?Math.abs(1/t.x):1/0,x=f?Math.abs(1/t.y):1/0,_=u?Math.abs(1/t.z):1/0,M=c?(c>0?o+1-n.x:n.x-o)*d:1/0,g=f?(f>0?a+1-n.y:n.y-a)*x:1/0,m=u?(u>0?h+1-n.z:n.z-h)*_:1/0,P=[0,0,0],D=0;for(;D<=e;){let S=i(o,a,h);if(S&&s(S)){let E=r&&r(S);if(!E)return{x:o,y:a,z:h,n:S,face:P,dist:D};let T=Ty(n,t,o,a,h,E);if(T&&T.t<=e)return{x:o,y:a,z:h,n:S,face:T.face||P,dist:T.t}}M<g&&M<m?(o+=c,D=M,M+=d,P=[-c,0,0]):g<m?(a+=f,D=g,g+=x,P=[0,-f,0]):(h+=u,D=m,m+=_,P=[0,0,-u])}return null}function Js(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],h=[t.x,t.y,t.z],c=0,f=1/0;for(let u=0;u<3;u++){if(Math.abs(h[u])<1e-9){if(a[u]<r[u]||a[u]>o[u])return null;continue}let d=(r[u]-a[u])/h[u],x=(o[u]-a[u])/h[u];if(d>x&&([d,x]=[x,d]),c=Math.max(c,d),f=Math.min(f,x),c>f)return null}return c}function ad(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}function Py(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Ah=(n,t)=>n?t?2:1:0;function Ks(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Eh(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}var Th=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function yl(n){let t=Py(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function C(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Re=n=>document.querySelector(n);function Ch(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function cd(n,t,e,i,s,r){if(!t||!t.id)return null;let o=Ch(t,e,i,s,r),a=n.get("ke_log"),h=Array.isArray(a)?a:[];if(h.push(o),n.set("ke_log",h),t.local)return o;if(e){let u=n.get("ke_correct"),d=Array.isArray(u)?u:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let c=n.get("ke_mistakes")||{},f=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?f&&(f.c++,f.u=s,f.c>=3&&(c[t.id]={d:1,w:f.w,t:f.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||f)&&n.set("ke_mistakes",c),o}var js=(n,t=()=>!1)=>n.filter(e=>!t(e)).concat(n.filter(e=>t(e)));function hd(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set,arrange:s=a=>a}={},r=5,o=Math.random){let a=[],h=[],c=[],f=[];for(let M of n)e[M]&&!e[M].d?a.push(M):t.has(M)?f.push(M):i.has(M)?c.push(M):h.push(M);let u=M=>{for(let g=M.length-1;g>0;g--){let m=Math.floor(o()*(g+1));[M[g],M[m]]=[M[m],M[g]]}return M};[a,h,c,f]=[a,h,c,f].map(M=>s(u(M)));let d=[],x=(M,g)=>{for(;g-- >0&&M.length;)d.push(M.pop())},_=Math.round(r*.7);return x(a,Math.ceil(_/2)),x(h,_-d.length),x(a,_-d.length),x(c,r-d.length),x(h,r-d.length),x(a,r-d.length),x(f,r-d.length),d}var Iy="../../",Ly=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/words-5.js","data/words-6.js","data/words-7.js","data/words-8.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],dd=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],vl=null,Ml=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),ud=null;var bl=null;function pd(n=bl){let t=window.KidsDaily&&window.KidsDaily._core,e=Ml();return n&&t?n.markOld(t.okCounts(e.get("ke_log"),(e.get("ke_agg")||{}).agg),e.get("ke_learned")):new Set}function Sl(){try{let n=window.KidsDaily&&window.KidsDaily._core,t=Ml();if(!n)return()=>!1;let e=n.okCounts(t.get("ke_log"),(t.get("ke_agg")||{}).agg);return i=>!!i&&!n.isNew(e.get(i)||0)}catch{return()=>!1}}var Dy=n=>{try{return n&&n.local?Sl()(n.id):!!(n&&bl&&bl.byId[n.id]&&pd().has(n.id))}catch{return!1}};function Ny(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t,null,Dy(n)?2:0);try{cd(Ml(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(ud)try{ud(t,n)}catch{}}function Uy(n,t,e){try{let i=Ml(),s=pd(n),r=window.KE;t=Object.assign({},t,{scope:(i.get("ke_settings")||{}).wordScope||""});let o=n.list(t).filter(u=>u.type!=="speak"&&(u.module!=="words"||r.wordScopeOk(t.scope,u))).map(u=>u.id),a=u=>n.byId[u].module==="words",h=u=>{let d=r.lvWeave(u.filter(a).map(_=>n.byId[_]),Math.floor(Math.random()*6)).map(_=>_.id).reverse(),x=0;return u.map(_=>a(_)?d[x++]:_)},c=hd(o,{learnedQ:s,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[]),arrange:h},e),f=c.length?n.buildQuiz(Object.assign({},t,{ids:c,count:c.length})):[];if(f.length)return f}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function Fy(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.async=!1,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function ky(){return vl||(vl=(async()=>{await Promise.all(Ly.map(t=>Fy(Iy+t)));let n=window;return bl=new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw vl=null,n})),vl}var fd=new Set(dd);async function md(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:h=null}){n.innerHTML="",n.hidden=!1;let c=C("div",{class:"panel quiz"});n.append(c),c.append(C("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let f;try{f=await ky()}catch{c.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let u=window.KE,d=h,x=i?new Set(i.filter(S=>fd.has(S))):fd;if(!d)for(let S of t){let E=f.byId[S];if(E&&x.has(E.type)){d=f.get(S);break}}let _=!!d&&!h;d||(d=Uy(f,{modules:s||["words","phrases","grammar","patterns"],types:i?[...x]:dd},1)[0]||f.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:1})[0]);let M=u.isTyped(d);n._q=d,c.innerHTML="";let g=C("div",{class:"fb"}),m=C("div",{class:"q-body"});c.append(C("div",{class:"p-head"},C("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),C("div",{class:"q-type"},h?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(_?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":u.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),C("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?C("div",{class:"q-sub"},d.sub):null,m,g);let P=!1,D=(S,E)=>{P||(P=!0,Ny(d,S,E,a),g.className="fb "+(S?"ok":"bad"),g.append(C("div",{},S?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",S?null:C("b",{class:"en"},d.answer)),!S&&d.why?C("div",{class:"why"},d.why):null,C("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(S,M,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let S=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),E=()=>{P||!S.value.trim()||D(f.check(d,S.value).ok,S.value)};S.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"&&E()}),m.append(C("div",{class:"typerow"},S,C("button",{class:"btn",onclick:E},"\u9001\u51FA"))),setTimeout(()=>S.focus(),50)}else{let S=C("div",{class:"opts"});(d.options||[]).forEach(E=>S.append(C("button",{class:"opt"+(/[a-z]/i.test(E)?" en":""),onclick:T=>{if(P)return;let U=f.check(d,E).ok;T.currentTarget.classList.add(U?"ok":"bad"),D(U,E)}},E))),m.append(S)}}function Oy(){return new Map}function gd(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Rh(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function By(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function xd(n){let t=Oy();for(let e in n||{})t.set(e,By(n[e]));return t}var wl=16;var T1=18;var jr=32;function zy(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Be=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function Vy(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Ne(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function li(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let h=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(h)*s*(.6+t()*.5),i+Math.sin(h)*s*(.6+t()*.5)])}Ne(n,o)}var Gy=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail","scaffold"]);function Hy(n,t){let e=Be(t.color),i=zy(Vy(t.block+t.face)),s=jr;if(Gy.has(t.pattern)){Wy(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Be(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=mt(e,1.12);for(let u=0;u<4;u++)li(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=mt(e,.96);for(let u=0;u<4;u++)li(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let u=Be(t.top);n.fillStyle=mt(u);let d=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)d.push([x,8+Math.round(i()*5)]);Ne(n,d)}if(o==="stone"||o==="bedrock")for(let u=0;u<5;u++)n.fillStyle=mt(e,i()<.5?.9:1.08),li(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let u=0;u<4;u++)n.fillStyle=mt(e,.92),li(n,i,i()*s,i()*s,5);n.fillStyle=mt(a);for(let u=0;u<5;u++)li(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let u=0;u<26;u++)n.fillStyle=mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let u=3;u<s;u+=7)n.fillStyle=mt(e,.82),n.fillRect(u,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let u=0;u<9;u++)n.fillStyle=mt(e,i()<.5?.78:1.15),li(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.78),n.fillRect(0,u,s,1);n.fillStyle=mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=mt([185,182,174]),Ne(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Ne(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=mt(e,1.18,.72);for(let u=6;u<s;u+=10)n.fillRect(4+Math.floor(i()*10),u,10,2)}if(o==="gold"&&(n.fillStyle=mt(e,1.15),Ne(n,[[0,0],[s,0],[0,s]]),n.fillStyle=mt(e,.9),Ne(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=mt(Be("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=mt(Be("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=mt(Be("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=mt(a),n.fillRect(14,0,4,4)):(n.fillStyle=mt(Be(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=mt(a),n.fillRect(0,0,s,10),n.fillStyle=mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=mt(Be("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=mt(a),n.fillRect(0,0,9,14))),o==="wool")for(let u=0;u<7;u++)n.fillStyle=mt(e,i()<.5?.94:1.04),li(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=mt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=mt(a,1.3),Ne(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=mt(Be("#EFEBDD"),1,.8),Ne(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=mt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let u=8;u<s;u+=9)n.fillStyle=mt(e,.9),n.fillRect(0,u,s,2);if(o==="cactus")if(t.face==="side"){for(let u=4;u<s;u+=8)n.fillStyle=mt(e,.82),n.fillRect(u,0,2,s);n.fillStyle=mt(Be("#EFEBDD"),1,.7);for(let u=0;u<6;u++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=mt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=mt(e,1.25);for(let u of[9,24])n.fillRect(0,u,s,3)}else n.fillStyle=mt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="snowblock")for(let u=0;u<5;u++)n.fillStyle=mt(e,i()<.5?.94:1.03),li(n,i,i()*s,i()*s,4+i()*5);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Ne(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Ne(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=mt(e,1.1),Ne(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=mt(e,.92),Ne(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=mt(e,.78);for(let u=0;u<s;u+=8){n.fillRect(0,u+7,s,1);let d=u/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,u,1,8)}}if(o==="mossy"){n.fillStyle=mt(a);for(let u=0;u<6;u++)li(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=mt(e,.6),Ne(n,[[4,2],[12,14],[10,15],[3,4]]),Ne(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=mt(e,1.08),Ne(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=mt(Be("#D9CBB5"));for(let u=0;u<s;u+=8){n.fillRect(0,u+6,s,2);let d=u/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,u,2,6)}}if(o==="checker"&&(n.fillStyle=mt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let u=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let x=3;for(;x<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=u[Math.floor(i()*u.length)],n.fillRect(x,d+Math.floor(i()*3),_,11),x+=_+1}}n.fillStyle=mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.8),n.fillRect(0,u,s,1);if(o==="hay")if(t.face==="side"){for(let u=3;u<s;u+=5)n.fillStyle=mt(e,.88),n.fillRect(u,0,1,s);n.fillStyle=mt(Be("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let u=5;u<s;u+=6)n.fillStyle=mt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=mt(Be("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Ne(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=mt(Be("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=mt(Be("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=mt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=mt(e),n.fillRect(0,0,s,s),n.fillStyle=mt(Be("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.85),n.fillRect(0,u,s,1);t.face==="side"&&(n.fillStyle=mt(a),n.fillRect(0,11,s,3),n.fillStyle=mt(Be("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let u=3;u<s;u+=6)n.fillStyle=mt(e,.72),n.fillRect(0,u,s,2);if(o==="furnace"){for(let u=0;u<4;u++)n.fillStyle=mt(e,i()<.5?.9:1.08),li(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=mt(a),n.fillRect(8,15,s-16,11),n.fillStyle=mt(Be("#E0352B"),1,.85),Ne(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=mt(a),Ne(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let h=n.getImageData(0,0,s,s),c=h.data;for(let u=0;u<c.length;u+=4){let d=1+(i()-.5)*.09;c[u]=Math.min(255,c[u]*d),c[u+1]=Math.min(255,c[u+1]*d),c[u+2]=Math.min(255,c[u+2]*d)}n.putImageData(h,0,0);let f=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=f,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function yd(n){let t=document.createElement("canvas");t.width=t.height=jr*wl;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=jr;let a=o.getContext("2d",{willReadFrequently:!0});Hy(a,s),e.drawImage(o,r%wl*jr,Math.floor(r/wl)*jr),i[r]=o}),{canvas:t,tileCanvas:i}}function Wy(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Be(t.accent):e,a=(h,c,f)=>{n.fillStyle=f,n.fillRect(h,s-c,2,c)};if(r==="flower"){a(15,18,mt(e)),n.fillStyle=mt(e,1.1),Ne(n,[[16,26],[9,20],[15,22]]),Ne(n,[[17,24],[24,18],[18,21]]),n.fillStyle=mt(o);for(let h=0;h<5;h++){let c=h/5*Math.PI*2;Ne(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=mt(Be("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let h=0;h<6;h++){let c=4+h*4+Math.floor(i()*2),f=14+Math.floor(i()*14);n.fillStyle=mt(e,i()<.5?.9:1.1),Ne(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-f]])}else if(r==="deadbush")n.strokeStyle=mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=mt(e),n.fillRect(14,18,4,14),n.fillStyle=mt(o),Ne(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=mt(Be("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=mt(e,1.12);for(let h=3;h<s;h+=7)n.fillRect(5,h,s-10,3)}else if(r==="scaffold")n.fillStyle=mt(e,.82),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),n.fillStyle=mt(e),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillStyle=mt(e,1.1),Ne(n,[[3,s-6],[s-6,3],[s-3,6],[6,s-3]]);else if(r==="wheat"){let h=Number(t.block.split("_")[1])||0,c=[8,14,21,28][h];for(let f=0;f<5;f++){let u=5+f*5;n.fillStyle=mt(e),n.fillRect(u,s-c,2,c),h===3&&(n.fillStyle=mt(o),Ne(n,[[u-2,s-c+9],[u+1,s-c-1],[u+4,s-c+9]]))}}else if(r==="rail"){let h=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[h];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let f=mt(Be("#8C6640")),u=mt(e),d=s*.33,x=s*.67;if(h==="ns"||h==="ew"){n.fillStyle=f;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=u,n.fillRect(d-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=f,n.lineWidth=3;for(let _=0;_<5;_++){let M=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(M)*(s-x-4),Math.sin(M)*(s-x-4)),n.lineTo(s+Math.cos(M)*(s-d+4),Math.sin(M)*(s-d+4)),n.stroke()}n.strokeStyle=u;for(let _ of[s-d,s-x])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var vd=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,bd=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function Xy(n,t){let e=wi(n),i=wi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,h=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,f=t<h?h-t:t>=h+16?t-(h+16-1):0;Math.max(c,f)<=14&&s.push([e+o,i+r])}return s}function Sd(n){let t=new Tn(n);t.magFilter=qe,t.minFilter=qe,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new Q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new dn({uniforms:e,vertexShader:vd,fragmentShader:bd}),s=new dn({uniforms:e,vertexShader:vd,fragmentShader:bd,transparent:!0,depthWrite:!1,side:Ln});return{opaque:i,trans:s,uniforms:e,tex:t}}function Md(n){let t=new En;return t.setAttribute("position",new $e(n.pos,3)),t.setAttribute("uv",new $e(n.uv,2)),t.setAttribute("light",new $e(n.light,1)),t.setAttribute("lt",new $e(n.lt,2,!0)),t.setIndex(new $e(n.index,1)),t.computeBoundingSphere(),t}var Al=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=hs(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Ie(Md(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ie(Md(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=wi(t),s=wi(e),r=sd(i,s,this.rd);for(let h of r){if(this.inflight>=this.maxInflight)break;let c=hs(h.cx,h.cz);if(this.chunks.has(c))continue;let f={cx:h.cx,cz:h.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,f),this.inflight++,this.worker.postMessage({type:"load",cx:h.cx,cz:h.cz,rev:f.meshRev})}let o=this.rd+1.5,a=[];for(let[h,c]of this.chunks){let f=c.cx-i,u=c.cz-s;if(f*f+u*u>o*o){for(let d of["o","t"])c[d]&&(this.scene.remove(c[d]),c[d].geometry.dispose());this.chunks.delete(h),a.push(h)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(h=>{let[c,f]=h.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(f-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(h=>h.state==="ready").length}ready(t,e){let i=this.chunks.get(hs(wi(t),wi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Mh(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(hs(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Mh(t,e,i);if(!r)return!1;let o=hs(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,gd(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let h=Math.floor(t),c=Math.floor(i);for(let[f,u]of Xy(h,c))this.dirtyMesh.add(hs(f,u));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var ci={};function Qs(n){return ci[n]||(ci[n]=new fn({color:n,transparent:!0}),ci[n].userData.base=new Yt(n)),ci[n]}var Qr=null;function qy(){if(Qr)return Qr;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Qr=new Tn(n),Qr.colorSpace=Ve,Qr}function wd(n,t){let e=new _n,i=n.colors,[s,r]=n.size,o=(h,c,f,u,d,x,_,M)=>{let g=new Ie(new rn(h,c,f),M||Qs(u));return g.position.set(d,x,_),e.add(g),g},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let f=o(.2,.6,.22,i.leg,c,.6,0);f.geometry.translate(0,-.6/2,0),a.push(f)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let h=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);ci.__face||(ci.__face=new fn({map:qy(),transparent:!0}),ci.__face.userData.base=new Yt("#ffffff"));let c=[Qs(i.head),Qs(i.head),Qs(i.head),Qs(i.head),Qs(i.head),ci.__face],f=new Ie(new rn(s*.9,s*.8,s*.8),c);f.position.set(0,r*.72+s*.4,0),e.add(f),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else if(n.shape==="upright"){let c=r-.1-s*.5,f=s*.62;o(s,c,s*.8,i.body,0,.1+c/2,0),o(s*.62,c*.8,.02,i.patch,0,.1+c*.45,-s*.41);let u=o(f,f,f,i.head,0,.1+c+f/2,-.04);o(f*.7,f*.5,.02,i.patch,0,u.position.y-f*.05,u.position.z-f/2-.01);for(let d of[-f*.2,f*.2])o(.05,.06,.02,"#151714",d,u.position.y+f*.08,u.position.z-f/2-.02);o(.1,.06,.12,i.beak,0,u.position.y-f*.12,u.position.z-f/2-.06);for(let d of[-1,1]){let x=o(.06,c*.6,s*.4,i.body,d*(s/2+.03),.1+c*.55,0);x.rotation.z=d*.25}for(let d of[-s*.2,s*.2]){let x=o(.14,.1,.2,i.leg,d,.1,-.04);x.geometry.translate(0,-.1/2,0),a.push(x)}}else{let h=r<1&&n.id!=="chicken",c=n.id==="chicken"?.25:h?r*.35:.45,f=r-c-(n.id==="chicken"?.15:.25);o(s,f,n.id==="chicken"?s:s*1.35,i.body,0,c+f/2,0),i.patch&&o(s*.5,f*.55,.02+s*1.36,i.patch,s*.12,c+f*.55,0);let u=n.id==="chicken"?.3:h?.32:.45,d=o(u,u,u,i.head,0,c+f+u*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let g of[-u*.3,u*.3])o(u*.26,u*.3,u*.16,i.ear,g,d.position.y+u*.6,d.position.z);if(i.eye)for(let g of[-u*.24,u*.24])o(u*.24,u*.26,.02,i.eye,g,d.position.y+u*.05,d.position.z-u/2-.01);if(n.pet){let g=o(.08,.08,.32,i.body,0,c+f*.85,s*.68+.12);g.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+u/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-u/2-.05));let x=n.id==="chicken"?.06:.18,_=n.id==="chicken"?0:s*.45,M=s*.3;for(let[g,m]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-M,-_],[M,-_],[-M,_],[M,_]]){let P=o(x,c,x,i.leg,g,c/2,m);P.geometry.translate(0,-c/2,0),P.position.y=c,a.push(P)}}return e.userData.legs=a,e}function Ad(n){for(let t in ci){let e=ci[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Ed(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var on=null,tr=null,Ph=null;var hi=()=>window.HIAudio||null,Cd=()=>hi()?hi().get():{muted:!1,music:.35,sfx:.7};function El(){try{hi()&&hi().unlock()}catch{}if(!on){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;on=new n,tr=on.createGain(),tr.connect(on.destination),Ph=on.createBuffer(1,on.sampleRate,on.sampleRate);let t=Ph.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}on.state==="suspended"&&on.resume(),Ih()}function Ih(){if(tr){let n=Cd();tr.gain.setTargetAtTime(n.muted?0:n.sfx,on.currentTime,.03)}}var Tl=()=>Cd().muted;function Rd(){return hi()&&hi().toggle(),Ih(),Tl()}function Lh(n){hi()&&hi().set(n),Ih()}function Pd(n){try{hi()&&hi().scene(n)}catch{}}function Id(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Un(n,t,e,i,s,r,o){let a=on.createOscillator(),h=on.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),Id(h,e,i,s,r),a.connect(h),h.connect(tr),a.start(e),a.stop(e+i+r+.05)}function Xi(n,t,e,i,s,r=1){let o=on.createBufferSource(),a=on.createBiquadFilter(),h=on.createGain();o.buffer=Ph,a.type=n,a.frequency.value=t,a.Q.value=r,Id(h,e,.004,i,s),o.connect(a),a.connect(h),h.connect(tr),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Td={wood:(n,t)=>{Un("sine",190*t,n,.003,.16,.12,95*t),Xi("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Xi("highpass",1800*t,n,.1,.06),Un("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Xi("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Un("sine",1900*t,n,.002,.08,.25,1500*t),Xi("highpass",4200,n,.06,.12)},soft:(n,t)=>{Xi("bandpass",850*t,n,.09,.1,.8)}};function Ge(n,t="soft"){if(!on||Tl())return;let e=on.currentTime+.005,i=Td[t]||Td.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Xi(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Un("sine",880,e,.002,.07,.08,1320);break;case"chest":Un("triangle",160,e,.02,.07,.3,120),Un("sine",330,e+.12,.005,.05,.15);break;case"door":Un("sawtooth",120,e,.03,.04,.3,160),Xi("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Xi("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Un("triangle",659,e,.005,.08,.15),Un("triangle",988,e+.1,.005,.08,.25);break;case"coin":Un("sine",1319,e,.002,.08,.08),Un("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Un("triangle",300,e,.005,.1,.18,200);break;default:break}}var qi=(n,t,e,i=0)=>t>=n[0]-i&&t<=n[2]+i&&e>=n[1]-i&&e<=n[3]+i,Ld=(n,t)=>{let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296};function Zy(n,t,e,i){let s=new Map,r=t.GY,o=n.x+n.w-1,a=n.z+n.d-1,h=(_,M,g,m)=>s.set(_+","+M+","+g,m),c=i?"s2n":n.door,f=i?1:n.doorW||2,u=i?"n":c,d=u==="n"||u==="s"?n.x+(n.w>>1):n.z+(n.d>>1),x=(_,M)=>{let g=u==="n"||u==="s"?_:M,m=d-(f>>1);return g<m||g>=m+f?!1:u==="n"&&M===n.z||u==="s"&&M===a||u==="w"&&_===n.x||u==="e"&&_===o};for(let _=n.x;_<=o;_++)for(let M=n.z;M<=a;M++){let g=_===n.x||_===o||M===n.z||M===a,m=(_===n.x||_===o)&&(M===n.z||M===a);h(_,r,M,e(n.floor||"planks")),h(_,r+n.h+1,M,e(n.roof));for(let P=r+1;P<=r+n.h;P++){if(!g){h(_,P,M,0);continue}if(x(_,M)&&P<=r+2){h(_,P,M,i?e("door"):0);continue}let D=_===n.x||_===o?M-n.z:_-n.x,S=!m&&P===r+2&&D%3===1&&!x((_===n.x||_===o,_),M)&&n.h>=4;h(_,P,M,e(S?"glass":n.wall))}}for(let[_,M,g,m]of n.props||[])h(n.x+M,r+1+g,n.z+m,e(_));return s}function Dd(n,t){let e=S=>n.num(S),i=t.GY,s=t.sidewalk,r=t.bound,o=t.homes.map(S=>Object.assign({floor:"planks",door:"n",isHome:!0},S)),a=t.buildings.concat(o),h=a.map(S=>({b:S,arr:[...Zy(S,t,e,!!S.isHome)].map(([E,T])=>E.split(",").map(Number).concat(T))})),c=new Set;for(let S of a){let E=S.isHome?"n":S.door,T=S.x+S.w-1,U=S.z+S.d-1,w=S.x+(S.w>>1),R=S.z+(S.d>>1),I={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]}[E],F=E==="w"?S.x-1:E==="e"?T+1:w,z=E==="n"?S.z-1:E==="s"?U+1:R;for(let X=0;X<14&&!t.roads.some(k=>qi(k,F,z,s));X++){for(let k of[-1,0,1])c.add((I[0]?F:F+k)+","+(I[0]?z+k:z));F+=I[0],z+=I[1]}}let f=t.park,u=f.pond,d=(S,E)=>S>=f.x&&S<f.x+f.w&&E>=f.z&&E<f.z+f.d,x=new Set;for(let S of t.roads){let E=S[2]-S[0]>S[3]-S[1];for(let T=E?S[0]:S[1];T<=(E?S[2]:S[3]);T+=12)for(let U of[-1,1]){let w=E?T:U<0?S[0]-s:S[2]+s,R=E?U<0?S[1]-s:S[3]+s:T;t.roads.some(I=>I!==S&&qi(I,w,R,s+2))||[-1,0,1].some(I=>[-1,0,1].some(F=>c.has(w+I+","+(R+F))))||x.add(w+","+R)}}let _=(S,E)=>{for(let T of t.roads)if(qi(T,S,E)){let U=T[2]-T[0]>T[3]-T[1];return t.roads.find(I=>I!==T&&qi(I,S,E,5)&&!qi(I,S,E))?(U?S:E)&1?e("crossing"):e("road"):t.roads.some(I=>I!==T&&qi(I,S,E))?e("road"):(U?E===Math.round((T[1]+T[3])/2):S===Math.round((T[0]+T[2])/2))&&((U?S:E)%4+4)%4<2?e("road_line"):e("road")}return t.roads.some(T=>qi(T,S,E,s))||c.has(S+","+E)?e("sidewalk"):d(S,E)&&S>=u[0]&&S<=u[2]&&E>=u[1]&&E<=u[3]?e("water"):e("grass")},M=new Set(f.trees.map(([S,E])=>S+","+E));for(let S=-r+2;S<=r-2;S+=6)for(let[E,T]of[[S,-r+1],[S,r-1],[-r+1,S],[r-1,S]])t.roads.some(U=>qi(U,E,T,s+1))||M.add(E+","+T);let g=t.secrets||{rooms:[]},m=(g.board?g.board.ops:[]).concat(...g.rooms.map(S=>S.ops));function P(S,E){let T=new Uint8Array(16384),U=S*16,w=E*16,R=(I,F,z,X)=>{F>0&&F<64&&(T[Nn(I,F,z)]=X)};for(let I=0;I<16;I++)for(let F=0;F<16;F++){let z=U+F,X=w+I;T[Nn(F,0,I)]=e("bedrock");for(let q=1;q<i-3;q++)T[Nn(F,q,I)]=e("stone");for(let q=i-3;q<i;q++)T[Nn(F,q,I)]=e("dirt");let k=_(z,X);if(T[Nn(F,i,I)]=k,k===e("water")){T[Nn(F,i-1,I)]=e("sand");continue}if(Math.abs(z)>r||Math.abs(X)>r){R(F,i+1,I,e("hedge")),R(F,i+2,I,e("hedge"));continue}if(x.has(z+","+X)){for(let q=i+1;q<=i+3;q++)R(F,q,I,e("lamp_pole"));R(F,i+4,I,e("lantern"));continue}if(M.has(z+","+X)){for(let q=i+1;q<=i+3;q++)R(F,q,I,e("log"));continue}k===e("grass")&&d(z,X)&&Ld(z,X)<.06&&R(F,i+1,I,e(["flower_rose","flower_dandelion","flower_cornflower","tallgrass"][Math.floor(Ld(X,z)*4)]))}for(let I of M){let[F,z]=I.split(",").map(Number);for(let X=-2;X<=2;X++)for(let k=-2;k<=2;k++)for(let q=3;q<=5;q++){if(Math.abs(X)+Math.abs(k)>(q===5?1:3))continue;let st=F+X-U,et=z+k-w;st<0||st>=16||et<0||et>=16||X===0&&k===0&&q===3||R(st,i+q+1,et,e("leaves"))}}for(let{b:I,arr:F}of h)if(!(I.x>U+16-1||I.x+I.w-1<U||I.z>w+16-1||I.z+I.d-1<w))for(let[z,X,k,q]of F){let st=z-U,et=k-w;st>=0&&st<16&&et>=0&&et<16&&R(st,X,et,q)}for(let[I,F,z,X,k,q=z,st=X,et=k]of m){if(q<U||z>U+16-1||et<w||k>w+16-1)continue;let pt=F==="air"?0:e(F);for(let $=Math.max(z,U);$<=Math.min(q,U+16-1);$++)for(let lt=Math.max(k,w);lt<=Math.min(et,w+16-1);lt++)for(let ut=X;ut<=st;ut++){let Vt=$===z||$===q||ut===X||ut===st||lt===k||lt===et;R($-U,ut,lt-w,I==="hollow"&&!Vt?0:pt)}}for(let[I,F,z]of f.benches){let X=I-U,k=F-w;X>=0&&X<16&&k>=0&&k<16&&R(X,i+1,k,e("stairs_planks"+["","_e","_s","_w"][z]))}for(let[I,F,z,X]of t.cars)for(let k=0;k<4;k++)for(let q=0;q<2;q++){let st=I+(X==="x"?k:q),et=F+(X==="x"?q:k),pt=st-U,$=et-w;pt<0||pt>=16||$<0||$>=16||(R(pt,i+1,$,e(z)),R(pt,i+2,$,e(k===1||k===2?"glass":z)))}return T}let D={x:t.spawn[0],y:i+1,z:t.spawn[1],stele:{x:0,y:i+1,z:0}};return{genChunk:P,findSpawn:()=>D,height:()=>i,baseHeight:()=>i,biomeOf:()=>"town",villages:{around:()=>[]},homes:o,buildings:t.buildings,GY:i}}function Nd(n,t,e,i,s){return n?t>n.x&&t<n.x+n.w-1&&i>n.z&&i<n.z+n.d-1&&e>=s+1&&e<=s+n.h:!1}function Ud(n,t,e){let i=[];for(let s=n.x;s<n.x+n.w;s++)for(let r=n.z;r<n.z+n.d;r++)for(let o=t+1;o<=t+n.h;o++)(s===n.x||s===n.x+n.w-1||r===n.z||r===n.z+n.d-1)&&e(s,o,r)&&i.push([s,o,r]);return i}var Dh=18;function to(n,t,e=1){let i=t+n.h+1;return{slab:i,roof:e===2?i+n.h+1:i,ladder:[n.x+1,n.z+n.d-2],h:e===2?n.h*2+1:n.h}}function Fd(n,t,e={}){let i=e.floors===2?2:1,s=e.theme||"none",r=to(n,t,i),o=[],a=(g,m,P,D)=>o.push([g,m,P,D]),h=n.x+n.w-1,c=n.z+n.d-1,f=n.x+(n.w>>1),u=f,d=n.z+(n.d>>1),x=(g,m)=>s==="castle"?"stone_bricks":s==="tree"?m?"log":"planks":s==="lighthouse"?(g-t)%4<2?"wool":"wool_red":e.wall||n.wall,_={castle:"stone_bricks",tree:"leaves",lighthouse:"wool_red"}[s]||n.roof;for(let g=n.x;g<=h;g++)for(let m=n.z;m<=c;m++){let P=g===n.x||g===h||m===n.z||m===c,D=(g===n.x||g===h)&&(m===n.z||m===c),S=g===n.x||g===h?m-n.z:g-n.x,E=g===r.ladder[0]&&m===r.ladder[1];for(let T=t+1;T<=t+Dh;T++)if(T>r.roof)a(g,T,m,"air");else if(T===r.roof)a(g,T,m,_);else if(P){if(g===f&&m===n.z&&T<=t+2)continue;let U=(T-t-1)%(n.h+1);a(g,T,m,!D&&U===1&&S%3===1&&n.h>=4?"glass":x(T,D))}else i===2&&T===r.slab?a(g,T,m,E?"air":"planks"):i===2&&E&&T<r.slab&&a(g,T,m,"ladder")}let M=r.roof;if(s==="tree")for(let g=n.x-1;g<=h+1;g++)for(let m=n.z-1;m<=c+1;m++){let P=Math.max(n.x-g,g-h,0),D=Math.max(n.z-m,m-c,0),S=Math.min(g-n.x,h-g,m-n.z,c-m);P||D||(S>=1&&a(g,M+1,m,"leaves"),S>=2&&a(g,M+2,m,"leaves"))}if(s==="lighthouse")for(let g=u-1;g<=u+1;g++)for(let m=d-1;m<=d+1;m++){let P=g!==u||m!==d;for(let D=M+1;D<=M+3;D++)a(g,D,m,(D-M)%2?"wool":"wool_red");a(g,M+4,m,P?"glass":"lantern"),a(g,M+5,m,"wool_red")}if(s==="castle")for(let g=n.x;g<=h;g++)for(let m=n.z;m<=c;m++){let P=g===n.x||g===h||m===n.z||m===c,D=(g===n.x||g===h)&&(m===n.z||m===c),S=g===n.x||g===h?m-n.z:g-n.x;D?(a(g,M+1,m,"stone_bricks"),a(g,M+2,m,"stone_bricks"),a(g,M+3,m,"stone_bricks")):P&&S%2===0&&a(g,M+1,m,"stone_bricks")}return o}function kd(n,t=Math.random){let e=i=>{let s=i.slice();for(let r=s.length-1;r>0;r--){let o=Math.floor(t()*(r+1));[s[r],s[o]]=[s[o],s[r]]}return s};return{d:n,turn:0,tries:0,coins:0,right:0,phase:"talk",cards:n.turns.map(i=>e(i.cards)),check:e(n.check.options.map((i,s)=>({zh:i,ok:s===n.check.answer})))}}function Od(n,t){if(n.phase!=="talk")return{ok:!1};let e=n.cards[n.turn][t];if(!e)return{ok:!1};if(!e.ok)return n.tries++,{ok:!1,card:e};let i=n.tries===0;return i&&(n.coins++,n.right++),n.turn++,n.tries=0,n.turn>=n.d.turns.length&&(n.phase="check"),{ok:!0,first:i,card:e,next:n.phase}}function Bd(n,t){if(n.phase!=="check")return{ok:!1};let e=n.check[t];return n.phase="done",e&&e.ok&&(n.coins+=2),{ok:!!(e&&e.ok),coins:n.coins}}function zd(n,t,e=1.2){if(n.wait>0){n.wait-=t,n.v={x:0,y:0,z:0};return}let i=n.route,s=i[n.ri%i.length],r=s[0]+.5-n.p.x,o=s[1]+.5-n.p.z,a=Math.hypot(r,o);if(a<.15){n.ri=(n.ri+1)%i.length,n.wait=s[2]?0:1.5;return}let h=Math.min(a,e*t);n.p.x+=r/a*h,n.p.z+=o/a*h,n.yaw=Math.atan2(-r,-o),n.v={x:r/a*e,y:0,z:o/a*e}}var $n={skin:["#F3D6B8","#E7CDA6","#C99A6B","#8C5A3A","#5C3A24"],hair:["short","long","bun","spiky","none"],hairColor:["#151714","#5C3A24","#C9904F","#D9B860","#C2443A"],top:["#2F5A34","#3F6E9A","#C2443A","#D9A63A","#C9709F","#EFEBDD","stripe","star"],bottom:["#26302A","#3F6E9A","#8C6640","#5E6660"],hat:["none","cap","beanie","bow","flower","tophat","crown"],glasses:[!1,!0],acc:["none","scarf","goldbadge","backpack","cape"]},Jy=()=>({skin:1,hair:0,hairColor:0,top:0,bottom:0,hat:0,glasses:0,acc:0});function er(n){let t=Jy();for(let e in t){let i=n&&Number.isInteger(n[e])?n[e]:t[e];t[e]=Math.max(0,Math.min($n[e].length-1,i))}return t}var Vd=n=>({skin:$n.skin[n.skin],hair:$n.hair[n.hair],hairColor:$n.hairColor[n.hairColor],top:$n.top[n.top],bottom:$n.bottom[n.bottom],hat:$n.hat[n.hat],glasses:$n.glasses[n.glasses],acc:$n.acc[n.acc]}),Gd=(n,t,e,i)=>{let s=n[e+":"+i];return!!s&&!t.has(s)},Hd=n=>Object.fromEntries(n.items.filter(t=>t.slot).map(t=>[t.slot+":"+t.value,t.id]));function Wd(n,t,{coins:e=0,hasHome:i=!1}={}){return n?t.has(n.id)?{ok:!1,reason:"owned"}:n.needHome&&!i?{ok:!1,reason:"home"}:e<n.price?{ok:!1,reason:"coins",short:n.price-e}:{ok:!0}:{ok:!1,reason:"missing"}}var Xd=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var eo=8,nr=3,vn=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},qd=n=>(/^[aeiou]/i.test(n)?"an ":"a ")+n,Nh=n=>n.charAt(0).toUpperCase()+n.slice(1),Uh=n=>String(n??"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim(),jy=(n,t)=>!!Uh(t)&&[n.a].concat(n.alts||[]).some(e=>Uh(e)===Uh(t)),$d=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],Qy=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function $i(n){return n>=100?"one hundred"+(n%100?" and "+$i(n%100):""):n<20?$d[n]:Qy[Math.floor(n/10)]+(n%10?"-"+$d[n%10]:"")}function Yd(n,t=Math.random,e=()=>!1){let i=n.exam.map((s,r)=>s.type==="typed"?{...s,k:r}:{...s,k:r,cards:vn(s.opts.map((o,a)=>({t:o,ok:a===s.a})),t)});return{job:n,i:0,right:0,answers:[],qs:js(i,s=>e(String(s.k))),done:!1}}function Zd(n,t){if(n.done)return null;let e=n.qs[n.i],i=e.type==="typed",s=i?jy(e,t):!!(e.cards[t]&&e.cards[t].ok);return n.answers.push(s),s&&n.right++,n.i++,n.i>=n.qs.length&&(n.done=!0),{ok:s,typed:i,answer:i?e.a:e.opts[e.a],text:i?String(t):(e.cards[t]||{}).t}}var Jd=n=>n.done&&n.right>=eo;function Kd(n,t=Math.random,e=()=>!1){let i=n.task,s=(h,c)=>vn(h,t).slice(0,c),r=(h,c)=>({t:h,ok:c}),o=(h,c,f=(u,d)=>"k"+d)=>js(vn(h.map((u,d)=>({x:u,key:f(u,d)})),t),u=>e(u.key)).slice(0,c);if(i.kind==="go"){let h=o(i.calls,1,c=>c.to)[0].x;return{kind:"go",to:h.to,en:h.en,zh:h.zh,pay:i.pay||5,tries:0}}let a;if(i.kind==="cases")a=o(i.cases,nr).map(({x:h,key:c})=>({key:c,en:`${i.who}: "${h.says}"`,zh:h.zh,cards:vn([r(h.a,!0),...h.wrong.map(f=>r(f,!1))],t)}));else if(i.kind==="judge")a=o(i.items,nr).map(({x:h,key:c})=>{let f=s(i.students,1)[0],u="That's right! Good job.",d=_=>`Almost! Say: "${_}"`,x=h.ok?[r(u,!0),r(d(h.wrong[0]),!1),r(d(h.wrong[1]||h.wrong[0]),!1)]:[r(d(h.fix),!0),r(u,!1),r(d(h.wrong[0]),!1)];return{key:c,en:`${f} says: "${h.says}"`,zh:"\u9019\u53E5\u8A71\u5C0D\u4E0D\u5C0D\uFF1F\u9078\u8001\u5E2B\u8981\u8AAA\u7684\u8A71\u3002",cards:vn(x,t)}});else if(i.kind==="change")a=o(i.items.map(h=>({it:h,pay:h.price<50&&t()<.5?50:100})),nr,(h,c)=>"k"+c+"p"+h.pay).map(({x:{it:h,pay:c},key:f})=>{let u=c-h.price,d=[u+10,u-5,u+5,h.price,u-10].filter(_=>_>0&&_!==u&&_<200),x=[...new Set(d)].slice(0,2);return{key:f,en:`${Nh(qd(h.en))} is ${$i(h.price)} dollars. The customer gives you ${$i(c)} dollars. How much change do you give?`,zh:`${h.zh} ${h.price} \u5143\uFF0C\u5BA2\u4EBA\u7D66 ${c} \u5143\uFF0C\u8981\u627E\u591A\u5C11\u9322\uFF1F`,cards:vn([r(Nh($i(u))+" dollars.",!0),...x.map(_=>r(Nh($i(_))+" dollars.",!1))],t),change:u}});else if(i.kind==="order")a=Array.from({length:nr},()=>{let[h,c]=s(i.foods,2),f=1+Math.floor(t()*3),u=1+Math.floor(t()*3),d=(g,m)=>m===1?qd(g.sg):$i(m)+" "+g.pl,x=(g,m,P,D)=>g.icon.repeat(m)+" \uFF0B "+P.icon.repeat(D),_=s(i.foods.filter(g=>g!==h&&g!==c),1)[0],M=[f===u?x(h,f%3+1,c,u):x(h,u,c,f),x(h,f,_,u)];return{en:`Customer: "I'd like ${d(h,f)} and ${d(c,u)}, please."`,zh:"\u5BA2\u4EBA\u9EDE\u4E86\u4EC0\u9EBC\uFF1F\u9078\u5C0D\u7684\u9910\u76E4\u3002",cards:vn([r(x(h,f,c,u),!0),...M.map(g=>r(g,!1))],t)}});else if(i.kind==="library"){let h=o(i.books,nr),c=vn([0,1,2],t),f=x=>i.shelves.find(_=>_.id===x),u=x=>`The ${x.en} shelf.`,d=()=>s(i.readers,1)[0];a=h.map(({x,key:_},M)=>{let g=f(x.s),m=s(i.shelves.filter(D=>D.id!==x.s),2),P=c[M%3];return P===0?{key:_,en:`${d()}: "${s(i.borrow,1)[0].replace("{topic}",g.topic)}"`,zh:"\u8B80\u8005\u60F3\u501F\u4EC0\u9EBC\u66F8\uFF1F\u9078\u4E00\u672C\u7D66\u4ED6\u3002",cards:vn([r(x.t,!0),...m.map(D=>r(s(i.books.filter(S=>S.s===D.id),1)[0].t,!1))],t)}:{key:_,en:P===1?`${i.who}: "${i.shelve.replace("{t}",x.t)}"`:`${d()}: "${i.giveBack.replace("{t}",x.t)}"`,zh:P===1?"\u9019\u672C\u66F8\u8981\u653E\u5728\u54EA\u500B\u66F8\u67B6\uFF1F":"\u8B80\u8005\u9084\u66F8\u4E86\uFF0C\u9019\u672C\u66F8\u8981\u653E\u56DE\u54EA\u500B\u66F8\u67B6\uFF1F",cards:vn([r(u(g),!0),...m.map(D=>r(u(D),!1))],t)}})}else{if(i.kind==="police")return{kind:"police",i:0,right:0,coins:0,n:nr};if(i.kind==="bus")return{kind:"bus",i:0,right:0,coins:0,pass:ev(i,t,e),tries:0}}return{kind:"quiz",i:0,right:0,qs:a,coins:0}}function tv(n,t){let e=n.kinds[t.kind];return{en:`a ${e.en} with ${t.hat.en}. ${e.he} is wearing a ${t.shirt.en} shirt`+(t.glasses?" and glasses.":`. ${e.he} doesn't wear glasses.`),zh:`${t.hat.none?"\u6C92\u6234\u5E3D\u5B50":"\u6234"+t.hat.zh}\u7684${e.zh}\uFF0C\u7A7F${t.shirt.zh}\u4E0A\u8863\uFF0C${t.glasses?"\u6709\u6234\u773C\u93E1":"\u6C92\u6234\u773C\u93E1"}`}}function jd(n,t=Math.random){let e=f=>f[Math.floor(t()*f.length)],i=Object.keys(n.kinds),s={kind:e(i),hat:e(n.hats),shirt:e(n.shirts),glasses:t()<.5},r={kind:()=>({...s,kind:i.find(f=>f!==s.kind)}),hat:()=>({...s,hat:e(n.hats.filter(f=>f.i!==s.hat.i))}),shirt:()=>({...s,shirt:e(n.shirts.filter(f=>f.i!==s.shirt.i))}),glasses:()=>({...s,glasses:!s.glasses})},o=vn([s,...vn(Object.keys(r),t).slice(0,n.spots.length-1).map(f=>r[f]())],t),a=tv(n,s),h=e(n.clues),c=f=>({skin:Math.floor(t()*5),hair:e(n.kinds[f.kind].hair),hairColor:Math.floor(t()*4),top:f.shirt.i,bottom:Math.floor(t()*4),hat:f.hat.i,glasses:f.glasses?1:0,acc:0});return{people:o.map(f=>Object.assign({},f,{av:c(f)})),right:o.indexOf(s),en:h.en.replace("{d}",a.en),zh:h.zh.replace("{dz}",a.zh)+"\u3002"}}function ev(n,t=Math.random,e=()=>!1){let i=js(vn(n.stops,t),o=>e(o.id)).slice(0,n.per),s=vn(n.passengers,t),r=o=>o[Math.floor(t()*o.length)];return i.map((o,a)=>{let h=t()<.5,c=r(o.why),f=h?r(n.direct).replace("{stop}",o.en):c[0];return{to:o.id,who:s[a%s.length],direct:h,en:`${s[a%s.length]}: "${f}"`,zh:h?`\u4E58\u5BA2\u8981\u53BB${o.zh}\u3002`:c[1]}})}var Fh=(n,t,e)=>n.stops.find(i=>Math.hypot(t-i.at[0],e-i.at[1])<=(n.near||4))||null;function Qd(n,t){if(n.kind!=="quiz"||n.i>=n.qs.length)return null;let e=n.qs[n.i],i=e.cards[t];if(!i)return null;let s=!!i.ok;return s&&(n.right++,n.coins+=2),n.i++,{ok:s,answer:e.cards.find(r=>r.ok).t,text:i.t,done:n.i>=n.qs.length}}var tp=n=>({lic:Object.assign({},n&&n.lic),wear:n&&n.wear||null,done:Object.assign({},n&&n.done)});var iv=[["Can you say this in English?","\u4F60\u6703\u7528\u82F1\u6587\u8AAA\u9019\u53E5\u55CE\uFF1F"],["How do you say this in English?","\u9019\u53E5\u82F1\u6587\u600E\u9EBC\u8AAA\uFF1F"],["Your turn! Say it in English.","\u63DB\u4F60\u4E86\uFF01\u7528\u82F1\u6587\u8AAA\u8AAA\u770B\u3002"]],kh=(n,t)=>n[Math.floor(t()*n.length)],no=n=>typeof n=="string"&&/^[A-Z0-9"]/.test(n)&&/[.!?]$/.test(n);function sv(n,t,{learned:e={},mistakes:i={}}={}){let s=(n==="pattern"?"p:":"ph:")+t+":";for(let o in i)if(o.startsWith(s)&&i[o]&&!i[o].d)return 0;let r=e[n+":"+t];return r&&r.at?2:1}function rv(n,t){if(!n)return[];let e=new Map((t.patterns||[]).map(s=>[s.id,s])),i=new Map((t.phrases||[]).map(s=>[s.id,s]));return(n.patterns||[]).filter(s=>e.has(s)).map(s=>({kind:"pattern",id:s,item:e.get(s)})).concat((n.phrases||[]).filter(s=>i.has(s)).map(s=>({kind:"phrase",id:s,item:i.get(s)})))}function ep(n,t,e={},i=Math.random){let s=rv(n,t);if(!s.length)return null;let r=[[],[],[]];for(let a of s)r[sv(a.kind,a.id,e)].push(a);let o=r.find(a=>a.length);for(let a=0;a<6;a++){let h=kh(o,i),c,f;if(h.kind==="pattern"){let _=(h.item.ex||[]).concat(h.item.extra||[]).filter(M=>no(M.en)&&M.zh);if(c=kh((h.item.ex||[]).filter(M=>no(M.en)&&M.zh),i),!c)continue;f=_.filter(M=>M.en!==c.en&&M.zh!==c.zh).map(M=>M.en)}else{if(!no(h.item.ex)||!h.item.exZh)continue;c={en:h.item.ex,zh:h.item.exZh},f=s.filter(_=>_.kind==="phrase"&&_.id!==h.id&&no(_.item.ex)).map(_=>_.item.ex),f.length<2&&(f=f.concat((t.phrases||[]).filter(_=>_.tag===h.item.tag&&_.id!==h.id&&no(_.ex)).map(_=>_.ex)))}let u=[...new Set(f.filter(_=>_!==c.en))].sort(()=>i()-.5).slice(0,2);if(u.length<2)continue;let[d,x]=kh(iv,i);return{npc:d,zh:x,say:c.zh,cards:[{en:c.en,ok:!0}].concat(u.map(_=>({en:_,ok:!1}))),src:h.kind+":"+h.id}}return null}function io(n,t=null){let e=Vd(n),i=new _n,s=[],r={stripe:"#EFEBDD",star:"#2B3F5C"},o=r[e.top]?e.top:null;o&&(e.top=r[o]),t&&(e.top=t.top||e.top,t.hat&&t.hat!=="none"&&(e.hat="none"));let a=(x,_,M,g,m,P,D,S=i)=>{let E=new fn({color:g});E.userData.base=new Yt(g),s.push(E);let T=new Ie(new rn(x,_,M),E);return T.position.set(m,P,D),S.add(T),T},h=(x,_,M,g,m,P)=>{let D=a(x,_,M,g,m,P,0);return D.geometry.translate(0,-_/2+.05,0),D.position.y+=_/2-.05,D},c=h(.24,.75,.26,e.bottom,-.14,.375),f=h(.24,.75,.26,e.bottom,.14,.375);if(a(.56,.7,.3,e.top,0,1.1,0),o==="stripe"&&!t)for(let x of[.86,1.06,1.26])a(.57,.08,.31,"#C2443A",0,x,0);o==="star"&&!t&&(a(.22,.07,.02,"#F2C46B",0,1.16,-.16),a(.07,.22,.02,"#F2C46B",0,1.16,-.16),a(.14,.14,.02,"#F2C46B",0,1.16,-.158));let u=h(.18,.66,.2,e.top,-.38,1.12),d=h(.18,.66,.2,e.top,.38,1.12);if(a(.12,.14,.18,e.skin,-.38,.84,0),a(.12,.14,.18,e.skin,.38,.84,0),a(.5,.48,.46,e.skin,0,1.7,0),a(.08,.08,.02,"#151714",-.11,1.74,-.235),a(.08,.08,.02,"#151714",.11,1.74,-.235),a(.14,.04,.02,"#C2443A",0,1.6,-.235),e.hair==="short"&&a(.54,.16,.5,e.hairColor,0,1.97,.02),e.hair==="long"&&(a(.54,.16,.5,e.hairColor,0,1.97,.02),a(.54,.5,.12,e.hairColor,0,1.7,.25)),e.hair==="bun"&&(a(.54,.14,.5,e.hairColor,0,1.96,.02),a(.22,.2,.22,e.hairColor,0,2.12,.12)),e.hair==="spiky")for(let x of[-.18,0,.18])a(.14,.24,.4,e.hairColor,x,2.02,.02);if(e.hat==="cap"&&(a(.56,.14,.52,"#C2443A",0,2.03,.02),a(.4,.04,.2,"#C2443A",0,1.97,-.32)),e.hat==="beanie"&&a(.56,.24,.52,"#3F6E9A",0,2.06,.02),e.hat==="bow"&&(a(.2,.14,.06,"#C9709F",-.12,2.02,-.1),a(.2,.14,.06,"#C9709F",.12,2.02,-.1)),e.hat==="flower"&&["#C2443A","#F2C46B","#C9709F","#EFEBDD","#3F6E9A","#F2C46B"].forEach((x,_)=>{let M=_/6*Math.PI*2;a(.12,.1,.12,x,Math.sin(M)*.24,1.99,Math.cos(M)*.22)}),e.hat==="tophat"&&(a(.62,.04,.58,"#151714",0,1.97,.02),a(.38,.38,.36,"#151714",0,2.18,.02),a(.39,.06,.37,"#C2443A",0,2.03,.02)),e.hat==="crown"){a(.5,.12,.46,"#D9A63A",0,2,.02);for(let[x,_]of[[-.2,-.2],[0,-.2],[.2,-.2],[-.2,.22],[.2,.22]])a(.09,.12,.06,"#D9A63A",x,2.12,_);a(.07,.07,.02,"#C2443A",0,2,-.215)}if(e.acc==="scarf"&&(a(.56,.1,.34,"#C2443A",0,1.43,0),a(.12,.3,.04,"#C2443A",.12,1.26,-.18)),e.acc==="goldbadge"&&a(.12,.12,.03,"#D9A63A",.14,1.28,-.165),e.acc==="backpack"&&(a(.42,.5,.18,"#D9A63A",0,1.1,.24),a(.3,.16,.04,"#8C6640",0,1,.34)),e.acc==="cape"&&a(.56,.95,.04,"#6E3F8C",0,.98,.18),e.glasses&&(a(.16,.12,.02,"#26302A",-.12,1.74,-.245),a(.16,.12,.02,"#26302A",.12,1.74,-.245)),t){let x=t.hatColor||"#F4F1E8",_=t.extraColor||"#26302A";t.hat==="chef"&&(a(.5,.1,.48,x,0,1.98,.02),a(.44,.36,.42,x,0,2.2,.02)),t.hat==="helmet"&&(a(.6,.22,.56,x,0,2.04,.02),a(.68,.04,.66,x,0,1.94,.04),a(.12,.1,.02,"#C2443A",0,2.06,-.255)),t.hat==="cap"&&(a(.56,.14,.52,x,0,2.03,.02),a(.4,.04,.2,x,0,1.97,-.32)),t.hat==="nurse"&&(a(.4,.12,.3,x,0,2,0),a(.08,.08,.02,"#C2443A",0,2,-.155)),t.extra==="apron"&&a(.44,.62,.03,_,0,1,-.165),t.extra==="tie"&&a(.08,.36,.03,_,0,1.22,-.165),t.extra==="bag"&&(a(.06,.62,.32,_,.32,1.12,0),a(.12,.26,.34,_,.36,.86,0)),t.extra==="stethoscope"&&(a(.04,.3,.03,_,-.12,1.28,-.165),a(.04,.3,.03,_,.12,1.28,-.165),a(.1,.1,.03,"#B9B6AE",.12,1.1,-.17)),t.extra==="badge"&&a(.12,.12,.03,_,-.14,1.28,-.165)}return i.userData={legL:c,legR:f,armL:u,armR:d,mats:s},i}function so(n,t,e,i){let s=n.userData,r=Math.sin(e*9)*Math.min(1,t/4)*.7;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r,s.armR.rotation.x=r;for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var np=()=>{let n=new _n,t=[],e=(i,s,r,o,a,h,c,f=n)=>{let u=new fn({color:o});u.userData.base=new Yt(o),t.push(u);let d=new Ie(new rn(i,s,r),u);return d.position.set(a,h,c),f.add(d),d};return n.userData.mats=t,{g:n,bx:e}};function ip(n){let{g:t,bx:e}=np(),i=(s,r,o)=>{for(let a of s)for(let h of r)e(.16,o,o,"#26302A",a,o/2,h)};if(n==="bike"){for(let s of[-.55,.55])e(.08,.5,.5,"#26302A",0,.25,s),e(.1,.2,.2,"#B9B6AE",0,.25,s);e(.08,.08,1.1,"#C2443A",0,.5,0),e(.08,.4,.08,"#C2443A",0,.65,-.5),e(.5,.06,.06,"#26302A",0,.86,-.5),e(.22,.06,.3,"#26302A",0,.62,.3)}else if(n==="scooter"){e(.3,.06,1,"#3F6E9A",0,.1,0);for(let s of[-.45,.45])e(.08,.16,.16,"#26302A",0,.08,s);e(.06,.95,.06,"#B9B6AE",0,.58,-.46),e(.5,.06,.06,"#26302A",0,1.05,-.46)}else if(n==="car")e(1.3,.55,2.4,"#C2443A",0,.55,0),e(1.2,.4,1,"#CFE3DF",0,1.02,.15),e(1.32,.08,1.02,"#C2443A",0,1.25,.15),e(.3,.14,.04,"#F2C46B",-.42,.62,-1.21),e(.3,.14,.04,"#F2C46B",.42,.62,-1.21),i([-.66,.66],[-.8,.8],.44);else if(n==="bus"){e(1.9,1.5,4.6,"#D9A63A",0,1,0);for(let s of[-1.6,-.6,.4,1.4])e(1.92,.5,.7,"#CFE3DF",0,1.25,s);e(1.6,.5,.04,"#CFE3DF",0,1.25,-2.31),e(1.92,.12,4.62,"#26302A",0,.5,0),i([-.9,.9],[-1.5,1.5],.6)}else n==="boat"&&(e(1.1,.36,2.2,"#8C6640",0,-.05,0),e(.9,.06,1.9,"#C49A63",0,.12,0),e(1.12,.1,.5,"#EFEBDD",0,.16,-.9));return t}function sp(n){let{g:t,bx:e}=np(),i={dog:["#B88B55","#5C3A24"],cat:["#8C8A84","#5E6660"],rabbit:["#EFEBDD","#E8B4AC"],dalmatian:["#F4F1E8","#151714"]}[n]||["#B88B55","#5C3A24"],s=[-.12,.12].flatMap(o=>[-.18,.18].map(a=>e(.1,.22,.1,i[0],o,.11,a)));e(.32,.26,.56,i[0],0,.34,0);let r=e(.3,.28,.28,i[0],0,.56,-.32);if(e(.05,.05,.02,"#151714",-.08,.6,-.465),e(.05,.05,.02,"#151714",.08,.6,-.465),e(.06,.04,.02,"#151714",0,.52,-.465),n==="rabbit"?(e(.08,.3,.06,i[0],-.08,.84,-.3),e(.08,.3,.06,i[0],.08,.84,-.3),e(.04,.2,.02,i[1],-.08,.84,-.335),e(.04,.2,.02,i[1],.08,.84,-.335),e(.12,.12,.12,"#FFFFFF",0,.38,.32)):n==="cat"?(e(.08,.1,.06,i[1],-.1,.74,-.3),e(.08,.1,.06,i[1],.1,.74,-.3),e(.06,.06,.4,i[0],0,.5,.42)):(e(.08,.16,.08,i[1],-.15,.6,-.28),e(.08,.16,.08,i[1],.15,.6,-.28),e(.06,.06,.24,i[0],0,.46,.36)),n==="dalmatian")for(let[o,a,h]of[[.165,.38,-.1],[-.165,.32,.12],[.1,.475,.15],[-.08,.475,-.12],[.155,.6,-.32]])e(.02+(Math.abs(o)>.15?0:.08),.08,.08+(Math.abs(o)>.15?0:-.06),i[1],o,a,h);return t.userData.legs=s,t.userData.head=r,t}function rp(n,t,e,i){let s=n.userData,r=Math.sin(e*12)*Math.min(1,t/3)*.6;s.legs.forEach((o,a)=>{o.rotation.x=a%3===0?r:-r});for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var op=(n,t)=>{for(let e of n.userData.mats)e.color.copy(e.userData.base).multiplyScalar(t)};function ap(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Ks(n,s),canSpend:s=>n.coins>=s,spend:async s=>Eh(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}var Yn=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},Bh=n=>n.charAt(0).toUpperCase()+n.slice(1),av=n=>typeof n=="string"&&/^[A-Z0-9"']/.test(n)&&/[.!?]$/.test(n),Oh=(n,t)=>t===1?n.sg:$i(t)+" "+n.pl,lv=n=>n.length<2?n.join(""):n.length===2?n.join(" and "):n.slice(0,-1).join(", ")+", and "+n[n.length-1];function up(n,t=Math.random){let e=Yn(n.items,t).slice(0,n.lines).map(i=>{let s=1+Math.floor(t()*n.maxQty);return{id:i.id,n:s,en:Oh(i,s),zh:i.zh}});return{lines:e,en:`${n.please} ${lv(e.map(i=>i.en))}.`,shelf:Yn(n.items,t).map(i=>i.id)}}function fp(n,t){let e=Object.fromEntries(n.map(i=>[i.id,i.n]));return{results:n.map(i=>({id:i.id,want:i.n,got:t[i.id]||0,ok:(t[i.id]||0)===i.n})),extra:Object.keys(t).filter(i=>t[i]>0&&!e[i])}}function dp(n,t=Math.random){let e=Yn(n.customers,t);return Array.from({length:n.per},(i,s)=>{let[r,o]=Yn(n.menu,t),a=t()<.3?2:1,h=t()<.3?2:1,c=n.say[Math.floor(t()*n.say.length)],f=Oh(r,a),u=Oh(o,h);return{who:e[s%e.length],en:c.replace("{A}",Bh(f)).replace("{a}",f).replace("{b}",u),want:{[r.id]:a,[o.id]:h}}})}var pp=(n,t)=>{let e=new Set(Object.keys(n).concat(Object.keys(t).filter(i=>t[i]>0)));for(let i of e)if((n[i]||0)!==(t[i]||0))return!1;return!0},cv=["first","second","third","fourth"],hv=["\u4E00","\u4E8C","\u4E09","\u56DB"];function uv(n,t,e){let i={left:n.filter(r=>r.x>t).sort((r,o)=>r.x-o.x),right:n.filter(r=>r.x<t).sort((r,o)=>o.x-r.x)},s=[];for(let r of["left","right"])i[r].forEach((o,a,h)=>{let c=i[r==="left"?"right":"left"];for(let f of[h[a-1],h[a+1]].filter(Boolean)){let u=r==="left"?"right":"left",d=(x,_)=>x.replace("{turn}",r).replace("{nth}",cv[a]).replace("{side}",u).replace("{next}",f.en).replace("{turnZh}",r==="left"?"\u5DE6":"\u53F3").replace("{nthZh}",hv[a]).replace("{sideZh}",u==="left"?"\u5DE6":"\u53F3").replace("{nextZh}",_?f.zh:"");s.push({to:o.id,turn:r,nth:a,next:f.id,en:d(e.how),zh:d(e.howZh,!0),cards:[o.id,f.id,(c[a]||c[0]).id]})}});return s}function mp(n,t,e,i=Math.random,s=()=>!1){let r=uv(n,t,e),o=r.filter(c=>!s(c.to)),a=o.length?o:r,h=a[Math.floor(i()*a.length)];return Object.assign({},h,{cards:Yn(h.cards,i),tries:0})}var lp=/^hanlin-[56]-u\d+$/,cp=n=>{let t=/^hanlin-(\d)-u(\d+)$/.exec(n);return t?`${t[1]==="5"?"\u4E94\u4E0A":"\u4E94\u4E0B"} Unit ${t[2]}`:n};function gp(n,t){let e=(n||[]).filter(s=>lp.test(s.id)&&(s.sents||[]).length).map(s=>({id:s.id,title:s.title||cp(s.id),sents:s.sents}));if(e.length)return e;let i={};for(let s of t||[])for(let r of s.tb||[])if(lp.test(r))for(let[o,a]of(s.ex||[]).entries())(i[r]=i[r]||[]).push({key:s.id+":"+o,en:a.en,zh:a.zh});return Object.keys(i).sort().map(s=>({id:s,title:cp(s),sents:i[s]}))}function xp(n,t,e){if(!n.length)return null;let i=new Set(n.map(r=>r.id));for(let r=(t||[]).length-1;r>=0;r--){let o=/^tb:(hanlin-[56]-u\d+):/.exec(t[r]&&t[r].id||"");if(o&&i.has(o[1]))return o[1]}let s=0;for(let r of String(e))s=s*31+r.charCodeAt(0)>>>0;return n[s%n.length].id}function _p(n,t,e=Math.random,i={},s=()=>!1){let r=n.sents.filter(d=>av(d.en)&&d.zh),o=[],a=new Set,h=d=>(d.blanks||[]).find(x=>x.w&&new RegExp("\\b"+x.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(d.en)&&(x.opts||[]).filter(_=>_!==x.w).length>=2),c=d=>{let x=Yn(r.filter(_=>_.en!==d.en&&_.zh!==d.zh),e).map(_=>_.en).filter((_,M,g)=>g.indexOf(_)===M).slice(0,2);return x.length<2?null:{kind:"zh2en",key:d.key,en:i.zh2en||"How do we say this in English?",zh:d.zh,showZh:!0,cards:Yn([{t:d.en,ok:!0}].concat(x.map(_=>({t:_,ok:!1}))),e),say:""}},f=d=>{let x=h(d);if(!x)return null;let _=Yn(x.opts.filter(M=>M!==x.w),e).slice(0,2);return{kind:"blank",key:d.key,en:d.en.replace(new RegExp("\\b"+x.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b"),"____"),zh:d.zh+(x.cue?`\uFF08\u7A7A\u683C\uFF1A${x.cue}\uFF09`:""),showZh:!0,cards:Yn([{t:x.w,ok:!0}].concat(_.map(M=>({t:M,ok:!1}))),e),say:"",full:d.en}},u=Yn(r,e);for(let d=0;d<t;d++){let x=d%2?f:c,_=null;for(let M of[!0,!1]){for(let g of u){if(a.has(g.key))continue;let m=x(g)||(x===f?c(g):null);if(m&&(!M||!s(m))){_=m,a.add(g.key);break}}if(_)break}_&&o.push(_)}return o}var yp=(n,t)=>n.steps.length===5?[t.seq5,t.seqZh5]:[t.seq4,t.seqZh4],hp=n=>Bh(n.v)+" "+n.r+".";function zh(n,t){let[e,i]=yp(n,t);return n.steps.map((s,r)=>({en:`${e[r]}, ${s.v} ${s.r}.`,zh:`${i[r]}\uFF0C${s.zh}\u3002`}))}function vp(n,t,e=Math.random){let i=n.steps.length,[s,r]=yp(n,t),o=zh(n,t);return n.steps.map((a,h)=>{let c=n.steps.slice(h+1),f=c.length?c[Math.floor(e()*c.length)]:n.steps[Math.floor(e()*h)],u=Yn([{t:hp(a),ok:!0},{t:hp(f),ok:!1},{t:Bh(a.x)+" "+a.r+".",ok:!1}],e);return{kind:"step",key:n.id+":"+h,en:t.ask.replace("{seq}",s[h]),zh:t.askZh.replace("{seq}",r[h]),cards:u,full:o[h].en,n:i}})}function dv(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}function bp(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=dv(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(h=>h.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Mp=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var X1=.5*(Math.sqrt(3)-1),q1=(3-Math.sqrt(3))/6;function us(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function Sp(n){let t=new Map;return(e,i,s)=>{let r=Math.floor(e/16),o=Math.floor(s/16),a=r+","+o,h=t.get(a);return h||(h=n.genChunk(r,o),t.set(a,h)),h[Nn(e-r*16,i,s-o*16)]}}function Vh(n,t,e,i,s=t.num("water")){let r=t.flat.solid,o=h=>{let c=t.get(h);return!!(c&&c.interact==="door")},a=h=>!r[h]||o(h);return(h,c)=>Math.abs(h)<=i&&Math.abs(c)<=i&&n(h,e,c)!==s&&!!r[n(h,e,c)]&&a(n(h,e+1,c))&&a(n(h,e+2,c))}function ro(n,t,e,i,s,r=.3){let o=Math.hypot(i-t,s-e),a=Math.max(1,Math.ceil(o/.25));for(let h=0;h<=a;h++){let c=t+(i-t)*h/a,f=e+(s-e)*h/a;for(let[u,d]of[[-r,-r],[r,-r],[-r,r],[r,r]])if(!n(Math.floor(c+u),Math.floor(f+d)))return!1}return!0}function wp(n,t,e,i,s,r=25e3){if(!n(i,s))return null;if(t===i&&e===s)return[[t,e]];let o=(g,m)=>(g+2048)*4096+(m+2048),a=new Map,h=new Map,c=new Set,f=(g,m)=>{let P=Math.abs(g-i),D=Math.abs(m-s);return Math.max(P,D)+.4142*Math.min(P,D)},u=[],d=g=>{u.push(g);let m=u.length-1;for(;m;){let P=m-1>>1;if(u[P][0]<=g[0])break;u[m]=u[P],u[m=P]=g}},x=()=>{let g=u[0],m=u.pop();if(u.length){let P=0;for(u[0]=m;;){let D=2*P+1,S=D+1,E=P;if(D<u.length&&u[D][0]<u[E][0]&&(E=D),S<u.length&&u[S][0]<u[E][0]&&(E=S),E===P)break;[u[P],u[E]]=[u[E],u[P]],P=E}}return g},_=o(t,e);a.set(_,0),d([f(t,e),t,e]);let M=0;for(;u.length&&M<r;){let[,g,m]=x(),P=o(g,m);if(c.has(P))continue;if(c.add(P),M++,g===i&&m===s){let S=[[g,m]],E=P;for(;h.has(E);)E=h.get(E),S.push([Math.floor(E/4096)-2048,E%4096-2048]);return S.reverse()}let D=a.get(P);for(let S=-1;S<=1;S++)for(let E=-1;E<=1;E++){if(!S&&!E)continue;let T=g+S,U=m+E;if(!n(T,U)||S&&E&&(!n(g+S,m)||!n(g,m+E)))continue;let w=o(T,U),R=D+(S&&E?1.4142:1);c.has(w)||R>=(a.has(w)?a.get(w):1/0)||(a.set(w,R),h.set(w,P),d([R+f(T,U),T,U]))}}return null}function Ap(n,t){if(!t||t.length<3)return t;let e=s=>s[0]+.5,i=[t[0]];for(let s=0;s<t.length-1;){let r=t.length-1;for(;r>s+1&&!ro(n,e(t[s]),t[s][1]+.5,e(t[r]),t[r][1]+.5);)r--;i.push(t[r]),s=r}return i}function Ep(n=64){let t=new Map;return{find(e,i,s,r,o){let a=i+","+s+">"+r+","+o;if(t.has(a)){let c=t.get(a);return t.delete(a),t.set(a,c),c}let h=Ap(e,wp(e,i,s,r,o));return t.set(a,h),t.size>n&&t.delete(t.keys().next().value),h},clear(){t.clear()},size:()=>t.size}}function Tp(n,t){let e=[];for(let i=0;i<t.length;i++){let s=t[i],r=t[(i+1)%t.length];if(e.push(s),t.length<2||ro(n,s[0]+.5,s[1]+.5,r[0]+.5,r[1]+.5))continue;let o=Ap(n,wp(n,s[0],s[1],r[0],r[1]));if(o)for(let a of o.slice(1,-1))e.push([a[0],a[1],1])}return e}var Cp=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e};function gv(n,t){for(let[e,i]of Object.entries(n&&n.festivals||{}))if((i.dates||[]).some(([s,r])=>t>=s&&t<=r))return e;return null}function Rp(n,t,e,i){return e&&i!=null&&i!==""?i==="none"||!n.festivals[i]?null:i:gv(n,t)}var Pp=(n,t)=>n.dates.find(([e,i])=>t>=e&&t<=i)||n.dates[0];function Ip(n,t,e=Math.random,i=()=>!1){return js(Cp(n.qs.map((s,r)=>({q:s,i:r})),e),s=>i(String(s.i))).slice(0,t).map(({q:s,i:r})=>({key:String(r),en:s.q,zh:s.zh,cards:Cp(s.opts.map((o,a)=>({t:o,ok:a===0})),e)}))}var Gh="fbcaca59cb",Hh=new URLSearchParams(location.search),oo=Hh.get("test")==="1"||window.__HW_TEST__===!0,yv=720,vv=(n,t)=>{try{let e=localStorage.getItem(n);return e??t}catch{return t}},bv=(n,t)=>{try{localStorage.setItem(n,t)}catch{}};function Lp(n){let t=null,e=()=>t||(t=new Promise((s,r)=>{let o=indexedDB.open(n,1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})),i=(s,r)=>e().then(o=>new Promise((a,h)=>{let c=o.transaction("kv",s),f=r(c.objectStore("kv"));c.oncomplete=()=>a(f&&f.result),c.onerror=()=>h(c.error)}));return{get:s=>i("readonly",r=>r.get(s)),putMany:s=>i("readwrite",r=>{for(let o in s)r.put(s[o],o)}),all:s=>e().then(r=>new Promise((o,a)=>{let h={},c=r.transaction("kv").objectStore("kv").openCursor(IDBKeyRange.bound(s,s+"\uFFFF"));c.onsuccess=()=>{let f=c.result;f?(h[f.key]=f.value,f.continue()):o(h)},c.onerror=()=>a(c.error)}))}}var Ai=Lp("kids_town"),ao=Lp("hw_world"),y={started:!1,overlay:null,p:{x:.5,y:22,z:8.5},v:{x:0,y:0,z:0},yaw:Math.PI,pitch:-.15,onGround:!1,view:"tp",bike:!1,keys:{},joy:{x:0,y:0,active:!1},time:.25,frames:[],dirty:new Set,furn:!1,furnSel:0,furnRot:0,zh:vv("kt_zh","on")==="on",touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,pending:0};async function Mv(){let[n,t,e,i,s,r,o,a]=await Promise.all(["data/blocks.json","data/town.json","data/dialogues.json","data/jobs.json","data/shop.json","data/chatgen.json","data/life.json","data/festivals.json"].map(l=>fetch(l,{cache:"no-cache"}).then(p=>p.json()))),h={blocks:n.blocks.concat(t.blocks),items:n.items,blueprints:n.blueprints},c=id(h),f=t.GY,u=Dd(c,t),d={};try{let[l,p,v,L,B,O,nt,it]=await Promise.all([Ai.get("kt_player"),Ai.get("kt_home"),Ai.get("kt_avatar"),ao.get("hw_coins"),Ai.get("kt_jobs"),Ai.get("kt_owned"),Ai.get("kt_pets"),Ai.get("kt_life")]);d={pl:l,home:p,av:v,coins:L,jobs:B,owned:O,pets:nt,life:it,chunks:await Ai.all("kt_chunk:")}}catch(l){console.warn("save unavailable",l)}let x=yl(d.coins),_=xd(Object.fromEntries(Object.entries(d.chunks||{}).map(([l,p])=>[l.slice(9),p]))),M=Object.assign({id:null,locked:!1,wall:null,floor:null},d.home||{}),g=er(d.av),m=i.jobs,P=tp(d.jobs),D=new Set(Array.isArray(d.owned)?d.owned:[]),S=Object.fromEntries(s.items.map(l=>[l.id,l])),E=Hd(s),T=Object.assign({active:null,names:{}},d.pets||{}),U=Object.assign({stats:{},daily:null},d.life||{}),w=t.secrets&&t.secrets.rooms||[],R=()=>P.wear&&m[P.wear]?m[P.wear].uniform:null;d.pl&&Object.assign(y,{p:{x:d.pl.x,y:d.pl.y,z:d.pl.z},yaw:d.pl.yaw||0,view:d.pl.view||"tp"});let I=Re("#c"),F=new gl({canvas:I,antialias:!1,powerPreference:"high-performance"});F.setPixelRatio(Math.min(window.devicePixelRatio||1,y.touch?1.5:1.25));let z=new Cr,X=new Yt("#EFEBDD");z.background=X;let k=new un(70,1,.08,200);k.rotation.order="YXZ";let q=yd(c),st=Sd(q.canvas),et=new Worker("assets/kt-worker.js?v="+Gh),pt=Ep(),$=new Al({scene:z,mats:st,reg:c,worker:et,diffs:_,onDirty:l=>{y.dirty.add(l),pt.clear()}});$.setRenderDistance(y.touch?3:4),k.far=$.rd*16+40,k.updateProjectionMatrix();let lt=await new Promise(l=>{let p=v=>{v.data.type==="ready"&&(et.removeEventListener("message",p),l(v.data.spawn))};et.addEventListener("message",p),et.postMessage({type:"init",seed:1,blocks:h,structures:t,diffs:Object.fromEntries([..._].map(([v,L])=>[v,Rh(L)]))})});d.pl||(y.p={x:lt.x,y:lt.y,z:lt.z});let ut=new Set;for(let l of t.buildings.concat(u.homes))for(let p=l.x;p<l.x+l.w;p++)for(let v=l.z;v<l.z+l.d;v++)ut.add(p+","+v);let Vt=c.num("water"),Ot=(l,p)=>$.get(l,f,p)===Vt,we=Sp(u),ae=Vh(we,c,f,t.bound),re=Vh((l,p,v)=>$.ready(l,v)?$.get(l,p,v):we(l,p,v),c,f,t.bound),ot=(l,p,v)=>ht(Zt(),l,p,v),ht=(l,p,v,L)=>{if(l&&ue[l].big&&v>f&&v<=f+3&&ut.has(p+","+L)||l==="boat"&&(v===f&&Ot(p,L)||v>f&&v<=f+2&&!Ot(p,L)))return!0;let B=$.get(p,v,L);return c.flat.solid[B]===1&&(c.flat.boxes[B]||!0)},Lt=(l,p,v,L,B,O="#26302A")=>{let nt=document.createElement("canvas");nt.width=320,nt.height=120;let it=nt.getContext("2d");it.fillStyle="#EFEBDD",it.fillRect(6,6,308,108),it.strokeStyle=O,it.lineWidth=8,it.strokeRect(6,6,308,108),it.fillStyle=O,it.textAlign="center",it.font="bold 46px sans-serif",it.fillText(l,160,60),it.font="30px sans-serif",it.fillText(p,160,100);let dt=new Tn(nt);dt.colorSpace=Ve;let Rt=new Mi(new si({map:dt,depthWrite:!1}));return Rt.scale.set(3.2,1.2,1),Rt.position.set(v,L,B),z.add(Rt),Rt};for(let l of t.buildings){let p=l.door==="s"?l.z+l.d+.4:l.door==="n"?l.z-.4:l.z+l.d/2,v=l.door==="e"?l.x+l.w+.4:l.door==="w"?l.x-.4:l.x+l.w/2;Lt(l.en,l.zh,v,f+l.h+.4,p,"#C2443A")}Lt(t.park.en,t.park.zh,t.park.x+2,f+3.5,t.park.z-.5,"#3E6B3A");let qt=l=>"note:"+l.room.id+":"+l.i,Dt=l=>{let p=document.createElement("canvas");p.width=96,p.height=96;let v=p.getContext("2d");v.fillStyle="#F4F1E8",v.fillRect(8,8,80,80),v.strokeStyle="#26302A",v.lineWidth=4,v.strokeRect(8,8,80,80),v.fillStyle="#C2443A",v.fillRect(40,2,16,14),v.fillStyle="#5E6660";for(let B=34;B<80;B+=12)v.fillRect(20,B,56,4);v.fillStyle="#26302A",v.font="bold 18px sans-serif",v.textAlign="center",v.fillText("NOTE",48,30),l&&(v.fillStyle="#3E6B3A",v.beginPath(),v.arc(70,72,20,0,Math.PI*2),v.fill(),v.strokeStyle="#EFEBDD",v.lineWidth=6,v.beginPath(),v.moveTo(60,72),v.lineTo(68,80),v.lineTo(81,63),v.stroke());let L=new Tn(p);return L.colorSpace=Ve,L},te=Dt(!1),Ue=Dt(!0),ne=w.flatMap(l=>l.notes.map((p,v)=>{let L=new Mi(new si({map:D.has("note:"+l.id+":"+v)?Ue:te,depthWrite:!1}));return L.scale.set(.7,.7,1),L.position.set(p.at[0],p.at[1],p.at[2]),z.add(L),{room:l,i:v,n:p,sp:L,p:{x:p.at[0],y:p.at[1]-.35,z:p.at[2]}}}));t.secrets&&t.secrets.board&&Lt("Notice Board","\u516C\u544A\u6B04",...t.secrets.board.sign,"#8C6640");let le={},ye=()=>{for(let l of u.homes){le[l.id]&&z.remove(le[l.id]);let p=M.id===l.id;le[l.id]=Lt(p?"My Home":"For Rent",p?"\u6211\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F",l.x+l.w/2,f+(p&&M.floors===2?to(l,f,2).h:l.h)+.6,l.z-.4,p?"#3E6B3A":"#5E6660")}};ye();let ie=()=>u.homes.find(l=>l.id===M.id)||null,me=()=>{let l=ie();return l&&M.floors===2?Object.assign({},l,{h:to(l,f,2).h}):l},He=()=>{let l=m[P.wear];if(!l)return null;let p=document.createElement("canvas");p.width=256,p.height=64;let v=p.getContext("2d");v.fillStyle=l.color,v.fillRect(4,4,248,56),v.fillStyle="#EFEBDD",v.textAlign="center",v.font="bold 30px sans-serif",v.fillText(l.en+" "+l.zh,128,43);let L=new Tn(p);L.colorSpace=Ve;let B=new Mi(new si({map:L,depthWrite:!1}));return B.scale.set(1.6,.4,1),B.position.y=2.75,B},tn=()=>{let l=io(g,R()),p=He();return p&&l.add(p),l},de=tn();z.add(de);let ue={bike:{zh:"\u8173\u8E0F\u8ECA",speed:8,run:10,lift:.35}};for(let l of s.items)l.cat==="ride"&&(ue[l.id]=l);let H=Object.fromEntries(Object.keys(ue).map(l=>{let p=ip(l);return p.visible=!1,z.add(p),[l,p]})),ze=Object.fromEntries(Object.keys(ue).filter(l=>ue[l].big).map(l=>{let p=new ii().setFromObject(H[l]).getSize(new Q);return[l,Math.hypot(p.x,p.z)]})),Zt=()=>y.bike?ue[y.ride]?y.ride:"bike":null,N=()=>y.bike?ue[Zt()].lift:0,b=()=>{z.remove(de),de=tn(),z.add(de)},Y=t.npcs.map((l,p)=>{let v={id:l.id,kind:"villager",size:[.6,1.8],speed:1.2,colors:{leg:"#26302A",body:l.robe,head:"#E7CDA6",hat:l.hat}},L={id:p+1,type:l.id,kind:"villager",def:v,n:l,route:Tp(ae,l.route),ri:1,wait:0,p:{x:l.route[0][0]+.5,y:f+1,z:l.route[0][1]+.5},v:{x:0,y:0,z:0},yaw:0,gone:!1};return L.g=wd(v,l.robe),z.add(L.g),L}),W={coins:Re("#coins"),ov:Re("#ov"),toasts:Re("#toasts"),joy:Re("#joy"),knob:Re("#knob"),hotbar:Re("#hotbar"),start:Re("#start"),dbg:Hh.get("debug")!==null?Re("#dbg"):null,loading:Re("#loading")};W.dbg&&(W.dbg.hidden=!1);let Z=l=>{for(;W.toasts.children.length>3;)W.toasts.firstChild.remove();let p=C("div",{class:"toast"},l);W.toasts.append(p),setTimeout(()=>p.remove(),2400)},xt=()=>{W.coins.textContent=x.coins},ct=()=>{W.ov.hidden=!0,W.ov.innerHTML="",y.overlay=null,y.talkNpc&&(y.talkNpc.busy=!1,y.talkNpc=null);try{speechSynthesis.cancel()}catch{}},j=(l,...p)=>{document.pointerLockElement&&document.exitPointerLock(),W.ov.innerHTML="",W.ov.hidden=!1,W.ov.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},l),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")),...p))},rt=l=>{l<=0||(Ks(x,l),y.pending+=l,xt(),Ge("coin"))};function _t(l,p,v,L,B){try{let O=JSON.parse(localStorage.getItem("ke_log")||"[]");if(!Array.isArray(O))return;O.push(Ch({id:l,module:"town",tkey:p,type:v},L,B,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)),localStorage.setItem("ke_log",JSON.stringify(O))}catch(O){console.warn("ke_log",O)}}let Bt=(l,p,v,L)=>_t(`town:${l}:${p}`,"town:"+l,"town-dialogue",v,L);function yt(l,p){window.KidsDaily&&window.KidsDaily.rec("english",l,null,p&&Sl()(p)?2:0)}let vt=l=>(p=>v=>p(l+v))(Sl()),gt=l=>{if(!(oo||!l||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let p=new SpeechSynthesisUtterance(l.replace(/_{2,}/g," ... "));p.lang="en-US",p.rate=.9,speechSynthesis.speak(p)}catch{}},Mt=(l,p,v)=>[C("div",{class:"npc-line"},C("button",{class:"say","aria-label":"\u518D\u5538\u4E00\u6B21",onclick:()=>gt(l)},"\u{1F50A}"),C("b",{class:"en"},l)),p&&v?C("p",{class:"muted"},p):null],Jt=l=>Object.keys(m).find(p=>m[p].npc===l.n.id)||null,V=[];function St(l){let p=Jt(l),v=V.map(O=>O(l)).filter(Boolean);if(!p&&!v.length){Ft(l);return}let L=m[p],B=p&&P.lic[p];j(`${l.n.en}\u30FB${l.n.zh}`,C("p",{},"\u4F60\u60F3\u8981\u505A\u4EC0\u9EBC\uFF1F"),C("div",{class:"cards"},C("button",{class:"card",onclick:()=>Ft(l)},"\u{1F4AC} \u804A\u5929"),p?C("button",{class:"card",onclick:()=>B?ui(p):fs(p)},B?`\u{1F9F0} ${L.zh}\u7684\u5DE5\u4F5C\uFF1A${L.task.title}`:`\u{1F4DD} \u8003${L.zh}\u57F7\u7167\uFF0810 \u984C\uFF0C\u5C0D ${eo} \u984C\u5C31\u901A\u904E\uFF09`):null,...v)),y.talkNpc=l,l.busy=!0,y.overlay="menu",l.yaw=Math.atan2(-(y.p.x-l.p.x),-(y.p.z-l.p.z))}let at=null,wt=l=>new Promise((p,v)=>{let L=document.createElement("script");L.src=l,L.onload=p,L.onerror=()=>v(new Error("load "+l)),document.head.appendChild(L)});async function Pt(){try{for(let l of["patterns.js","patterns-2.js","phrases.js","phrases-2.js"])await wt("../../data/"+l);at={patterns:(window.DATA_PATTERNS||[]).slice(),phrases:(window.DATA_PHRASES||[]).slice()}}catch(l){console.warn("chat data",l)}try{await wt("../../data/textbook.js"),Pl=(window.DATA_TEXTBOOK||[]).slice()}catch(l){console.warn("textbook",l)}}let ft=(l,p)=>{try{return JSON.parse(localStorage.getItem(l)||"null")||p}catch{return p}};function zt(l,p){let v=at&&ep(r[l.replace(/\d+$/,"")],at,{learned:ft("ke_learned",{}),mistakes:ft("ke_mistakes",{})});return v?Object.assign({},p,{turns:p.turns.concat(v)}):p}function Ft(l,p){let v=[].concat(l.n.dlg);p=p||v[(l.dlgN=(l.dlgN==null?-1:l.dlgN)+1)%v.length];let L=e[p]&&zt(p,e[p]);L&&(y.talkNpc=l,l.busy=!0,y.overlay="talk",y.dlg=kd(L),y.dlg.id=p,l.yaw=Math.atan2(-(y.p.x-l.p.x),-(y.p.z-l.p.z)),ve(!0))}function ve(l){let p=y.dlg,v=y.talkNpc,L=W.ov;L.innerHTML="",L.hidden=!1;let B=C("div",{class:"p-head"},C("h2",{},`${v.n.en}\u30FB${v.n.zh}`,C("small",{},`\u3000${p.d.place}`)),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")),O=C("div",{class:"panel talk"},B);if(L.append(O),p.phase==="talk"){let nt=p.d.turns[p.turn];O.append(...Mt(nt.npc,nt.zh,y.zh),nt.say?C("p",{class:"say-zh"},"\u8981\u8AAA\uFF1A"+nt.say):null,C("p",{class:"muted small"},`\u7B2C ${p.turn+1} / ${p.d.turns.length} \u53E5\u3000\u9078\u4E00\u5F35\u5361\u7247\u56DE\u7B54`),C("div",{class:"cards"},p.cards[p.turn].map((it,dt)=>C("button",{class:"card en",onclick:Rt=>ge(dt,Rt.currentTarget)},it.en)))),l&&gt(nt.npc)}else p.phase==="check"?O.append(C("p",{class:"big"},"\u5C0F\u6E2C\u9A57\uFF1A"+p.d.check.q),C("div",{class:"cards"},p.check.map((nt,it)=>C("button",{class:"card",onclick:()=>bn(it)},nt.zh)))):O.append(C("p",{class:"big"},p.coins?`\u5C0D\u8A71\u5B8C\u6210\uFF01 +${p.coins} \u91D1\u5E63`:"\u5C0D\u8A71\u5B8C\u6210\uFF01"),C("p",{class:"muted"},`\u7B2C\u4E00\u6B21\u5C31\u9078\u5C0D ${p.right} / ${p.d.turns.length} \u53E5`),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u597D")))}function ge(l,p){let v=y.dlg,L=v.turn,B=v.cards[L][l],O=Od(v,l);if(Bt(v.id,v.d.turns[L].src?"gen:"+v.d.turns[L].src:L,O.ok&&O.first,B.en),!O.ok){p.classList.add("bad"),Ge("hurt"),Z("\u518D\u60F3\u60F3\u770B\uFF0C\u54EA\u4E00\u53E5\u6700\u5408\u9069\uFF1F");return}O.first&&rt(1),Ge("pickup"),gt(B.en),setTimeout(()=>ve(v.phase==="talk"),450)}function bn(l){let p=y.dlg,v=p.coins,L=Bd(p,l);Bt(p.id,"check",L.ok,p.check[l].zh),L.ok?rt(p.coins-v):Z("\u7B54\u6848\u662F\uFF1A"+p.check.find(B=>B.ok).zh),Qt("talk"),ve(!1)}function an(l,p,v,L){let B=C("div",{class:"fb"}),O=C("div",{}),nt=!1,it=(dt,Rt)=>{if(nt)return;nt=!0;let At=v(dt);Rt&&Rt.classList.add(At.ok?"ok":"bad"),Ge(At.ok?"pickup":"hurt"),At.coins&&rt(At.coins),B.className="fb "+(At.ok?"ok":"bad"),B.append(C("div",{},At.ok?`\u7B54\u5C0D\u4E86\uFF01${At.coins?` +${At.coins} \u91D1\u5E63`:""}`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",At.ok?null:C("b",{class:"en"},At.answer)),C("button",{class:"btn",onclick:L},At.last?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u984C"))};if(p.typed){let dt=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),Rt=()=>{nt||!dt.value.trim()||(dt.disabled=!0,it(dt.value))};dt.addEventListener("keydown",At=>{At.stopPropagation(),At.key==="Enter"&&Rt()}),O.append(C("div",{class:"typerow"},dt,C("button",{class:"btn",onclick:Rt},"\u9001\u51FA"))),setTimeout(()=>dt.focus(),50)}else O.append(C("div",{class:"cards"},p.cards.map((dt,Rt)=>C("button",{class:"card"+(/[a-z]/i.test(dt.t)?" en":""),onclick:At=>it(Rt,At.currentTarget)},dt.t))));l.append(...Mt(p.en,p.zh,p.typed||p.showZh||y.zh),O,B),p.say!==""&&gt(p.say||p.en)}function fs(l){y.exam=Yd(m[l],Math.random,vt(`town:lic:${l}:`)),y.exam.id=l,lo()}function lo(){let l=y.exam,p=m[l.id],v=W.ov;v.innerHTML="",v.hidden=!1,y.overlay="exam";let L=C("div",{class:"panel talk"},C("div",{class:"p-head"},C("h2",{},`${p.zh}\u57F7\u7167\u8003\u8A66`,C("small",{},l.done?"":`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C\u30FB\u7B54\u5C0D ${l.right}`)),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")));if(v.append(L),!l.done){let nt=l.qs[l.i],it=`town:lic:${l.id}:${nt.k}`;an(L,{en:nt.q,zh:nt.zh,typed:nt.type==="typed",cards:nt.cards},dt=>{let Rt=Zd(l,dt);return yt(Rt.ok,it),_t(it,"town:license:"+l.id,"town-license",Rt.ok,Rt.text),{ok:Rt.ok,answer:Rt.answer,coins:Ah(Rt.ok,Rt.typed),last:l.done}},lo);return}let B=Jd(l),O=B&&!P.lic[l.id];B&&(O&&(P.lic[l.id]=Date.now(),rt(10)),P.wear=l.id,b(),_e()),L.append(C("p",{class:"big"},B?`\u{1F389} \u901A\u904E\u4E86\uFF01\u4F60\u62FF\u5230${p.zh}\u57F7\u7167`:`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C\uFF0C\u8981 ${eo} \u984C\u624D\u901A\u904E`),C("p",{class:"muted"},B?`${O?"\u57F7\u7167\u734E\u52F5 +10 \u91D1\u5E63\u3002":""}\u63DB\u4E0A${p.zh}\u5236\u670D\u4E86\uFF0C\u982D\u4E0A\u6703\u51FA\u73FE\u300C${p.en}\u300D\u3002\u4EE5\u5F8C\u627E\u9019\u4F4D\u5C45\u6C11\u5C31\u80FD\u4E0A\u73ED\u8CFA\u91D1\u5E63\uFF1B\u5728\u300C\u5DE5\u4F5C\u300D\u53EF\u4EE5\u63DB\u5236\u670D\u3002`:"\u6C92\u95DC\u4FC2\uFF0C\u518D\u8003\u4E00\u6B21\uFF01\u984C\u76EE\u4E00\u6A23\uFF0C\u9078\u9805\u9806\u5E8F\u6703\u63DB\u3002"),C("div",{class:"row"},B?C("button",{class:"btn big",onclick:()=>ui(l.id)},"\u99AC\u4E0A\u4E0A\u73ED"):C("button",{class:"btn big",onclick:()=>fs(l.id)},"\u518D\u8003\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u5148\u4E0D\u8981")))}function ui(l){if(!P.lic[l]){fs(l);return}let p=Kd(m[l],Math.random,vt(`town:job:${l}:`));if(p.id=l,p.kind==="go"){y.go=p,y.goWrong=null,ds(),We();return}if(p.kind==="police"){ms(p);return}if(p.kind==="bus"){Cl(p);return}y.task=p,Yi()}function Yi(){let l=y.task,p=m[l.id],v=W.ov;v.innerHTML="",v.hidden=!1,y.overlay="task";let L=C("div",{class:"panel talk"},C("div",{class:"p-head"},C("h2",{},`${p.zh}\u7684\u5DE5\u4F5C\uFF1A${p.task.title}`,C("small",{},l.i<l.qs.length&&l.started?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C`:"")),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")));if(v.append(L),!l.started){l.started=!0,L.append(...Mt(p.task.intro,p.task.introZh,!0),C("div",{class:"row"},C("button",{class:"btn big",onclick:Yi},"\u958B\u59CB"))),gt(p.task.intro);return}if(l.i<l.qs.length){let B=l.qs[l.i],O=l.i,nt=`town:job:${l.id}:${B.key!=null?B.key:O}`;an(L,{en:B.en,zh:B.zh,cards:B.cards},it=>{let dt=Qd(l,it);return yt(dt.ok,B.key!=null?nt:null),_t(nt,"town:job:"+l.id,"town-job",dt.ok,dt.text),{ok:dt.ok,answer:dt.answer,coins:dt.ok?2:0,last:dt.done}},Yi);return}P.done[l.id]=(P.done[l.id]||0)+1,Qt("work"),_e(),L.append(C("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C\uFF0C\u8CFA\u5230 ${l.coins} \u91D1\u5E63`),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>ui(l.id)},"\u518D\u505A\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u4F11\u606F")))}let Zi=t.buildings.map(l=>({id:l.id,en:"the "+l.en,zh:l.zh,b:l})).concat(u.homes.map(l=>({id:l.id,en:"the "+l.en,zh:l.zh,b:l})));for(let l of Zi){let p=l.b,v=p.isHome?"n":p.door,L=p.x+(p.w>>1)+.5,B=p.z+(p.d>>1)+.5;l.f=v==="n"?[L,p.z-.5]:v==="s"?[L,p.z+p.d+.5]:v==="w"?[p.x-.5,B]:[p.x+p.w+.5,B]}function ds(){let l=y.go,p=m[l.id];j(`${p.zh}\u7684\u5DE5\u4F5C\uFF1A${p.task.title}`,...Mt(l.en,l.zh,y.zh),C("p",{class:"muted small"},`\u8D70\u5230\u5C0D\u7684\u5730\u65B9\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\uFF08\u734E\u52F5 ${l.pay} \u91D1\u5E63\uFF09\u3002\u5DE6\u4E0A\u89D2\u7684\u4EFB\u52D9\u5361\u53EF\u4EE5\u518D\u770B\u4E00\u6B21\u3002`),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u51FA\u767C\uFF01"),C("button",{class:"btn ghost",onclick:()=>{y.go=null,We(),ct(),Z("\u9019\u8D9F\u5148\u4E0D\u505A\u4E86")}},"\u9019\u8D9F\u4E0D\u505A\u4E86"))),y.overlay="task",gt(l.en)}function We(){let l=Re("#task");if(!l)return;let p=y.go?(y.go.id==="firefighter"?"\u{1F525} ":"\u2709\uFE0F ")+y.go.en.split(/[.!] /)[0]:y.police&&y.police.L?"\u{1F46E} "+y.police.L.en:Ei()?"\u{1F68C} "+Ei().en:y.lost?`\u{1F9D2} \u5E36 ${o.lost.kid.en} \u56DE\u5BB6`:y.list?"\u{1F9FA} \u8CFC\u7269\u6E05\u55AE\uFF1A"+y.list.lines.map(v=>v.en).join("\u3001"):null;l.hidden=!p,p&&(l.textContent=p+"\u2026\uFF08\u9EDE\u6211\u518D\u770B\uFF09")}function fi(){let l=y.go;if(l)for(let p of Zi){if(Math.hypot(y.p.x-p.f[0],y.p.z-p.f[1])>3.2){y.goWrong===p.id&&(y.goWrong=null);continue}if(p.id!==l.to){y.goWrong!==p.id&&p.id!==m[l.id].place&&(y.goWrong=p.id,l.tries++,Z(`\u9019\u88E1\u662F ${p.en}\uFF08${p.zh}\uFF09\uFF0C\u4E0D\u662F\u9019\u88E1\u5594\u3002\u518D\u770B\u4E00\u6B21\u4EFB\u52D9\u5361`));continue}let v=m[l.id],L=l.tries===0,B=`town:job:${l.id}:${l.to}`;y.go=null,We(),yt(L,B),_t(B,"town:job:"+l.id,"town-job",L,l.to),P.done[l.id]=(P.done[l.id]||0)+1,Qt("work"),j(`${v.zh}\u7684\u5DE5\u4F5C`,...Mt(v.task.arrive,v.task.arriveZh,!0),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>{rt(l.pay),_e(),ct(),Z(`\u5B8C\u6210\u4E86\uFF01 +${l.pay} \u91D1\u5E63`)}},v.task.button))),y.overlay="task";return}}let Je=m.police&&m.police.task,di=[],ps=()=>{for(let l of di)z.remove(l.g);di.length=0};function ms(l){y.police=Object.assign(l,{L:null}),j(`${m.police.zh}\u7684\u5DE5\u4F5C\uFF1A${Je.title}`,...Mt(Je.intro,Je.introZh,!0),C("p",{class:"muted small"},`\u8B66\u5BDF\u5C40\u9580\u53E3\u6703\u7AD9 4 \u500B\u4EBA\u3002\u770B\u756B\u9762\u4E0B\u65B9\u7684\u7DDA\u7D22\u5361\uFF0C\u9EDE\u5C0D\u7684\u90A3\u500B\u4EBA\uFF08\u4E00\u56DE ${l.n} \u500B\u4EBA\uFF0C\u6BCF\u500B\u7B2C\u4E00\u6B21\u5C31\u9EDE\u5C0D +2 \u91D1\u5E63\uFF09\u3002`),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>{ct(),ir()}},"\u958B\u59CB"),C("button",{class:"btn ghost",onclick:sr},"\u5148\u4E0D\u8981"))),y.overlay="task",gt(Je.intro)}function ir(){ps();let l=y.police;l&&(l.L=jd(Je),l.tries=0,l.L.people.forEach((p,v)=>{let L=io(er(p.av)),[B,O]=Je.spots[v];L.position.set(B,f+1,O),L.rotation.y=Math.PI,z.add(L),di.push({g:L,i:v,p:{x:B,y:f+1,z:O},suspect:!0})}),(y.p.z<-12||y.p.z>-5||y.p.x<53||y.p.x>69)&&(y.p={x:61.5,y:f+1,z:-4.5},y.v={x:0,y:0,z:0},y.yaw=0,y.pitch=-.1),We(),gt(l.L.en))}function gs(){let l=y.police;!l||!l.L||(j(`\u{1F46E} \u7DDA\u7D22\uFF08\u7B2C ${l.i+1} / ${l.n} \u500B\u4EBA\uFF09`,...Mt(l.L.en,l.L.zh,y.zh),C("p",{class:"muted small"},"\u5728\u8B66\u5BDF\u5C40\u9580\u53E3\u7684 4 \u500B\u4EBA\u88E1\uFF0C\u9EDE\u7B26\u5408\u7DDA\u7D22\u7684\u90A3\u4E00\u500B\u3002"),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u53BB\u627E"),C("button",{class:"btn ghost",onclick:sr},"\u4ECA\u5929\u5148\u4E0D\u505A\u4E86"))),y.overlay="task",gt(l.L.en))}function sr(){y.police=null,ps(),We(),ct()}function rr(l){let p=y.police;if(!p||!p.L)return;let v=l===p.L.right,L=`town:job:police:${p.i}`;if(!v){p.tries++||(yt(!1),_t(L,"town:job:police","town-job",!1,p.L.en)),Ge("hurt"),Z(`${Je.wrong}\u3000${y.zh?Je.wrongZh:""}`);return}let B=!p.tries;if(B&&(yt(!0),_t(L,"town:job:police","town-job",!0,p.L.en),p.right++,p.coins+=2,rt(2)),Ge("pickup"),p.i++,p.i<p.n){Z(`${Je.right}${B?"\u3000+2 \u91D1\u5E63":""}`),ir(),gt(Je.right+" "+p.L.en);return}ps(),y.police=null,We(),P.done.police=(P.done.police||0)+1,Qt("work"),_e(),j(`${m.police.zh}\u7684\u5DE5\u4F5C\uFF1A${Je.title}`,...Mt(Je.right,Je.rightZh,y.zh),C("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u4E00\u6B21\u5C31\u627E\u5C0D ${p.right} / ${p.n} \u500B\u4EBA\uFF0C\u8CFA\u5230 ${p.coins} \u91D1\u5E63`),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>ui("police")},"\u518D\u505A\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u4F11\u606F"))),y.overlay="task",gt(Je.right)}let Fe=m.busdriver&&m.busdriver.task;if(Fe)for(let l of Fe.stops){Lt(l.en,l.zh,l.sign[0],f+2.7,l.sign[1],"#2F6E5A");let p=new Ie(new rn(.12,2.1,.12),new fn({color:6186592}));p.position.set(l.sign[0],f+1.05,l.sign[1]),z.add(p)}let Ei=()=>y.bus&&y.bus.pass[y.bus.i];function Cl(l){y.bus=Object.assign(l,{at:null}),j(`${m.busdriver.zh}\u7684\u5DE5\u4F5C\uFF1A${Fe.title}`,...Mt(Fe.intro,Fe.introZh,!0),C("p",{class:"muted small"},`\u6703\u5E36\u4F60\u5230\u516C\u8ECA\u7E3D\u7AD9\u524D\u9762\u5750\u4E0A\u516C\u8ECA\uFF08\u4E0A\u73ED\u7684\u516C\u8ECA\uFF0C\u4E0D\u7528\u8CB7\uFF09\u3002\u958B\u5230\u4E58\u5BA2\u8981\u53BB\u7684\u7AD9\u724C\u524D\u9762\u300C\u505C\u4E0B\u4F86\u300D\u624D\u7B97\u5230\u7AD9\u3002\u4E00\u56DE ${l.pass.length} \u4F4D\u4E58\u5BA2\uFF0C\u6BCF\u4F4D\u4E00\u6B21\u5C31\u958B\u5C0D +${Fe.pay} \u91D1\u5E63\u3002`),C("div",{class:"row"},C("button",{class:"btn big",onclick:co},"\u{1F68C} \u4E0A\u8ECA\u51FA\u767C"),C("button",{class:"btn ghost",onclick:A},"\u5148\u4E0D\u8981"))),y.overlay="task",gt(Fe.intro)}function co(){let l=y.bus;if(!l)return;ct(),Zt()!=="bus"&&(y.p={x:Fe.depot[0],y:f+1,z:Fe.depot[1]},y.v={x:0,y:0,z:0},y.yaw=-Math.PI/2,y.pitch=-.15,y.view="tp",Ki("bus")),l.at=null,We();let p=Ei();p&&gt(p.en)}function ho(){let l=y.bus,p=Ei();!l||!p||(j(`\u{1F68C} \u7B2C ${l.i+1} / ${l.pass.length} \u4F4D\u4E58\u5BA2`,...Mt(p.en,p.zh,y.zh),C("p",{class:"muted small"},"\u958B\u5230\u5C0D\u7684\u7AD9\u724C\u524D\u9762\u505C\u4E0B\u4F86\u3002\u7AD9\u724C\uFF1A"+Fe.stops.map(v=>v.en).join("\u3001")),C("div",{class:"row"},Zt()==="bus"?C("button",{class:"btn big",onclick:ct},"\u7E7C\u7E8C\u958B"):C("button",{class:"btn big",onclick:co},"\u{1F68C} \u5750\u4E0A\u516C\u8ECA"),C("button",{class:"btn ghost",onclick:A},"\u4ECA\u5929\u5148\u4E0D\u958B\u4E86"))),y.overlay="task",gt(p.en))}function A(){let l=y.bus;y.bus=null,We(),ct(),l&&Zt()==="bus"&&!D.has("bus")&&Ki(null)}function G(){let l=y.bus,p=Ei();if(!l||!p||Zt()!=="bus")return;let v=Math.hypot(y.v.x,y.v.z)<2?Fh(Fe,y.p.x,y.p.z):null;if(!v){Fh(Fe,y.p.x,y.p.z)||(l.at=null);return}if(v.id===l.at)return;l.at=v.id;let L=`town:job:busdriver:${p.to}`;if(v.id!==p.to){l.tries++||(yt(!1,L),_t(L,"town:job:busdriver","town-job",!1,v.id)),Ge("hurt"),Z(`This is ${v.en}\uFF08${v.zh}\uFF09. \u4E0D\u662F\u9019\u4E00\u7AD9\uFF0C\u518D\u807D\u4E00\u6B21\u4E58\u5BA2\u8AAA\u4EC0\u9EBC`);return}let B=!l.tries;B&&(yt(!0,L),_t(L,"town:job:busdriver","town-job",!0,v.id),l.right++,l.coins+=Fe.pay,rt(Fe.pay)),l.i++,l.tries=0,Ge("pickup");let O=Ei();if(O){Z(`${B?`+${Fe.pay} \u91D1\u5E63\u3000`:""}${Fe.thanks}`),We(),gt(Fe.thanks+" "+O.en);return}y.bus=null,We(),P.done.busdriver=(P.done.busdriver||0)+1,Qt("work"),D.has("bus")||Ki(null),_e(),j(`${m.busdriver.zh}\u7684\u5DE5\u4F5C\uFF1A${Fe.title}`,...Mt(Fe.thanks,Fe.thanksZh,y.zh),C("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u8F09\u4E86 ${l.pass.length} \u4F4D\u4E58\u5BA2\uFF0C\u4E00\u6B21\u5C31\u958B\u5C0D ${l.right} \u4F4D\uFF0C\u8CFA\u5230 ${l.coins} \u91D1\u5E63`),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>ui("busdriver")},"\u518D\u958B\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u4F11\u606F"))),y.overlay="task",gt(Fe.thanks)}let tt=null;async function K(){if(tt)return tt;try{let l=await(await fetch("../hero-world/data/books.json",{cache:"no-cache"})).json(),p=(l&&Array.isArray(l.books)?l.books:[]).filter(v=>v&&typeof v.id=="string"&&typeof v.title=="string"&&typeof v.en=="string"&&v.en.length>20);p.length&&(tt=p)}catch(l){console.warn("books",l)}return tt}async function J(l){let p=await K();if(!p){Z("\u4ECA\u5929\u7684\u66F8\u9084\u6C92\u9001\u5230\uFF08\u8B80\u4E0D\u5230\u66F8\u55AE\uFF09\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86");return}let v=l&&p.find(O=>O.id===l);if(!v){j("\u{1F4D6} \u5716\u66F8\u9928\u7684\u95B1\u8B80\u89D2",C("p",{class:"muted"},`\u9019\u88E1\u6709 ${p.length} \u672C\u82F1\u6587\u5C0F\u66F8\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u5957\uFF09\u3002\u53EF\u4EE5\u6162\u6162\u770B\u3001\u807D\u6717\u8B80\uFF0C\u4E0D\u7528\u7B54\u984C\u3002\u60F3\u8B80\u5B8C\u7B54\u984C\u8CFA\u91D1\u5E63\uFF0C\u5230\u65B9\u584A\u4E16\u754C\u62FF\u300C\u82F1\u6587\u5C0F\u66F8\u300D\u8B80\u3002`),C("div",{class:"shop"},p.map(O=>C("div",{class:"offer"},C("div",{class:"of-t"},C("b",{class:"en"},O.title),C("small",{},typeof O.title_zh=="string"?O.title_zh:"")),C("button",{class:"btn small","data-book":O.id,onclick:()=>J(O.id)},"\u8B80"))))),y.overlay="panel";return}let L=!1,B=()=>{j("\u{1F4D6} "+(typeof v.title_zh=="string"?v.title_zh:v.title),C("h3",{class:"en"},v.title),C("p",{class:"book-text en"},v.en),L&&typeof v.zh=="string"?C("p",{class:"book-text zh"},v.zh):null,C("div",{class:"row"},typeof v.zh=="string"?C("button",{class:"btn ghost",onclick:()=>{L=!L,B()}},L?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"):null,C("button",{class:"btn ghost",onclick:()=>gt(v.en)},"\u{1F50A} \u6717\u8B80"),C("button",{class:"btn ghost",onclick:()=>J()},"\u2190 \u63DB\u4E00\u672C"))),W.ov.querySelector(".panel").classList.add("book"),y.overlay="panel"};B()}V.push(l=>l.n.id==="librarian"?C("button",{class:"card",onclick:()=>J()},"\u{1F4D6} \u5230\u95B1\u8B80\u89D2\u770B\u82F1\u6587\u5C0F\u66F8"):null);let Et=()=>w.filter(l=>D.has("secret:"+l.id)).length;function Nt(l){let p=D.has(qt(l));p||(D.add(qt(l)),l.sp.material.map=Ue,l.sp.material.needsUpdate=!0,_e()),j(`\u{1F4DC} \u7D19\u689D\uFF08${l.room.zh}\uFF09${p?"\u3000\u2713 \u8B80\u904E\u4E86":""}`,...Mt(l.n.en,l.n.zh,y.zh),C("p",{class:"muted small"},D.has("secret:"+l.room.id)?"\u9019\u500B\u79D8\u5BC6\u623F\u9593\u4F60\u5DF2\u7D93\u627E\u5230\u4E86\uFF01":"\u7167\u8457\u82F1\u6587\u8D70\uFF0C\u627E\u5230\u79D8\u5BC6\u7684\u9580\u3002"),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u77E5\u9053\u4E86"))),y.overlay="panel",gt(l.n.en)}function Tt(l){if(y.riddleBusy)return;y.riddleBusy=!0,document.pointerLockElement&&document.exitPointerLock(),y.overlay="ask";let p=[];try{p=ad(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{}md(W.ov,{ids:p.slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u79D8\u5BC6\u623F\u9593\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",daily:!1,onDone:v=>{if(y.overlay=null,y.riddleBusy=!1,!v){v===!1&&Z("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let L=-2;L<=2;L++){let B=c.get($.get(l.x,l.y+L,l.z));B&&B.interact==="riddle"&&$.set(l.x,l.y+L,l.z,0)}Ge("door"),_e()}})}function kt(l){let p=w.find(L=>L.treasure[0]===l.x&&L.treasure[1]===l.y&&L.treasure[2]===l.z);if(!p||($.set(l.x,l.y,l.z,c.num("chest")),D.has("secret:"+p.id)))return;D.add("secret:"+p.id),D.add(p.reward.id),$h();let v;p.reward.kind==="pet"?(v="\u4E00\u96BB"+xs[p.reward.id]+"\uFF01\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",T.active||(T.active=p.reward.id,ji())):(v="\u7A00\u6709\u5BB6\u5177\u300C"+c.name(p.reward.id)+"\u300D\uFF01\u5BB6\u5177\u6A21\u5F0F\u53EF\u4EE5\u653E",lr()),_e(),Ge("coin"),j("\u{1F389} \u627E\u5230\u79D8\u5BC6\u623F\u9593\uFF1A"+p.zh,C("p",{class:"big"},"\u5BF6\u7BB1\u88E1\u6709"+v),C("p",{class:"muted"},`\u79D8\u5BC6\u623F\u9593\u627E\u5230 ${Et()} / ${w.length} \u9593`),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u592A\u68D2\u4E86"))),y.overlay="panel"}let bt=o.pay,jt={tutorial:[],main:[],daily:o.daily},ee=l=>U.stats[l]||0;function Ut(){let l={tut:{done:!0},main:0,daily:U.daily};for(let p of bp(l,jt,ee,us()))rt(p.q.coins),Z(`\u{1F4EE} \u59D4\u8A17\u5B8C\u6210\uFF1A${p.q.zh} +${p.q.coins} \u91D1\u5E63`);U.daily=l.daily}function Qt(l,p=1){U.stats[l]=ee(l)+p,Ut()}function Ae(l,p,v,L,B=!0){let O=`town:life:${l}:${p}`;yt(v,B?O:null),_t(O,"town:life:"+l,"town-life",v,L)}let Ee=()=>(Ut(),C("div",{class:"quests"},C("h3",{},"\u{1F4EE} \u4ECA\u65E5\u93AE\u6C11\u59D4\u8A17\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),U.daily.picks.map(l=>{let p=o.daily.find(L=>L.id===l),v=U.daily.done.includes(l);return C("div",{class:"quest"+(v?" done":"")},C("b",{},(v?"\u2713 ":"")+p.zh),C("small",{class:"en"},p.en),C("small",{},v?"\u5B8C\u6210\u4E86\uFF01":`${Mp(U,jt,ee,l)} / ${p.need}\u30FB\u734E\u52F5 ${p.coins} \u91D1\u5E63`))})));function be(l,p,v,L){let B=C("div",{class:"tray"}),O=Object.fromEntries(l.map(it=>[it.id,it])),nt=()=>{B.innerHTML="";let it=Object.keys(p).filter(dt=>p[dt]>0);B.append(C("b",{},v+"\uFF1A"),...it.length?it.map(dt=>C("button",{class:"chip","data-id":dt,onclick:()=>{p[dt]--,nt(),L&&L()}},`${O[dt].icon} ${O[dt].label} \xD7${p[dt]}`)):[C("span",{class:"muted small"},"\u9084\u662F\u7A7A\u7684")])};return nt(),[C("div",{class:"cards items"},l.map(it=>C("button",{class:"card item","data-id":it.id,onclick:()=>{p[it.id]=(p[it.id]||0)+1,nt(),Ge("pickup"),L&&L()}},C("span",{class:"ico"},it.icon),C("span",{class:"en"},it.label)))),B]}let Pe=o.grocery,It=Object.fromEntries(Pe.items.map(l=>[l.id,l])),Ke=l=>C("div",{class:"glist"},l.lines.map(p=>C("div",{class:"npc-line"},C("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u884C",onclick:()=>gt(p.en)},"\u{1F50A}"),C("b",{class:"en"},p.en),y.zh?C("small",{class:"muted"},"\u3000"+p.zh):null)));function ce(){y.list=up(Pe),y.basket={},We(),ln(!0)}function ln(l){let p=y.list;p&&(j("\u{1F9FA} \u55AC\u723A\u723A\u7684\u8CFC\u7269\u6E05\u55AE",...l?Mt(Pe.intro,Pe.introZh,y.zh):[],Ke(p),C("p",{class:"muted small"},"\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\uFF0C\u7167\u6E05\u55AE\u628A\u6771\u897F\u653E\u9032\u7C43\u5B50\u3001\u7D50\u5E33\u3002\u6578\u91CF\u8981\u525B\u525B\u597D\u5594\uFF01"),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u51FA\u767C\uFF01"),C("button",{class:"btn ghost",onclick:()=>{y.list=null,We(),ct(),Z("\u9019\u6B21\u5148\u4E0D\u8CB7\u4E86")}},"\u9019\u6B21\u4E0D\u8CB7\u4E86"))),y.overlay="task",gt(l?Pe.intro+" "+p.en:p.en))}function Mn(){let l=y.list;if(!l)return;let p=y.basket=y.basket||{},v=Ke(l),L=C("button",{class:"btn ghost small",onclick:()=>{v.classList.toggle("listen"),L.textContent=v.classList.contains("listen")?"\u{1F440} \u770B\u6587\u5B57":"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09"}},"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09");j("\u{1F9FA} \u7167\u6E05\u55AE\u62FF\u6771\u897F",v,C("div",{class:"row"},C("button",{class:"btn ghost small",onclick:()=>gt(l.en)},"\u{1F50A} \u807D\u6574\u5F35\u6E05\u55AE"),L),...be(l.shelf.map(B=>It[B]),p,"\u7C43\u5B50"),C("div",{class:"row"},C("button",{class:"btn big",onclick:Zn},"\u{1F9FE} \u7D50\u5E33"))),y.overlay="task"}function Zn(){let l=y.list,p=fp(l.lines,y.basket||{}),v=p.results.filter(O=>O.ok).length,L=v===l.lines.length&&!p.extra.length;p.results.forEach(O=>Ae("shop",O.id,O.ok,`${O.got} ${O.id}`,!1));let B=v*bt.perQ+(L?bt.allRight:0);rt(B),y.list=null,y.basket=null,We(),Qt("shop"),_e(),Ge(L?"coin":"pickup"),j("\u{1F9FE} \u7D50\u5E33",...p.results.map((O,nt)=>C("p",{},`${O.ok?"\u2705":"\u274C"} ${It[O.id].icon} `,C("b",{class:"en"},l.lines[nt].en),O.ok?"":`\uFF08\u7C43\u5B50\u88E1\u6709 ${O.got} \u500B\uFF09`)),p.extra.length?C("p",{class:"muted"},"\u6E05\u55AE\u4E0A\u6C92\u6709\u7684\uFF1A"+p.extra.map(O=>It[O].icon+" "+It[O].label).join("\u3001")+"\uFF08\u4E0B\u6B21\u53EA\u62FF\u6E05\u55AE\u4E0A\u7684\uFF09"):null,...L?Mt(Pe.thanks,Pe.thanksZh,y.zh):[C("p",{},`\u6E05\u55AE\u4E0A ${l.lines.length} \u6A23\uFF0C\u5C0D\u4E86 ${v} \u6A23\u3002\u518D\u5E6B\u55AC\u723A\u723A\u8CB7\u4E00\u6B21\u5427\uFF01`)],C("p",{class:"big"},`+${B} \u91D1\u5E63`),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u597D"))),y.overlay="task",L&&gt(Pe.thanks)}let en=o.waiter;function xe(){y.waiter={orders:dp(en),i:-1,right:0},Le()}function Le(){let l=y.waiter;if(y.overlay="task",l.i<0){j("\u{1F37D}\uFE0F \u9910\u5EF3\u670D\u52D9\u751F",...Mt(en.intro,en.introZh,y.zh),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>{l.i=0,Le()}},"\u958B\u59CB"))),gt(en.intro),y.overlay="task";return}if(l.i>=l.orders.length){let nt=l.right===l.orders.length,it=nt?bt.allRight:0;rt(it),Qt("waiter"),_e(),j("\u{1F37D}\uFE0F \u4E0B\u73ED\u4E86",...nt?Mt(en.thanks,en.thanksZh,y.zh):[],C("p",{class:"big"},`\u9001\u5C0D ${l.right} / ${l.orders.length} \u4F4D\u5BA2\u4EBA${it?`\uFF0C\u5168\u5C0D +${it} \u91D1\u5E63`:""}`),C("div",{class:"row"},C("button",{class:"btn big",onclick:xe},"\u518D\u505A\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u4F11\u606F"))),y.overlay="task",nt&&gt(en.thanks);return}let p=l.orders[l.i],v={},L=C("div",{class:"fb"}),B=`${p.who}: "${p.en}"`,O=C("button",{class:"btn big",onclick:()=>{if(O.disabled)return;O.disabled=!0;let nt=pp(p.want,v),it=Object.keys(p.want).map(dt=>`${en.menu.find(Rt=>Rt.id===dt).icon} \xD7${p.want[dt]}`).join(" \uFF0B ");Ae("waiter",Object.keys(p.want).join("+"),nt,Object.keys(v).filter(dt=>v[dt]>0).map(dt=>dt+"x"+v[dt]).join(","),!1),nt&&(l.right++,rt(bt.perQ),Qt("served")),Ge(nt?"pickup":"hurt"),L.className="fb "+(nt?"ok":"bad"),L.append(C("div",{},nt?`\u9001\u5C0D\u4E86\uFF01 +${bt.perQ} \u91D1\u5E63`:"\u9001\u932F\u4E86\uFF01\u5BA2\u4EBA\u9EDE\u7684\u662F\uFF1A"+it),C("button",{class:"btn",onclick:()=>{l.i++,Le()}},l.i+1>=l.orders.length?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u4F4D\u5BA2\u4EBA"))}},"\u{1F6CE}\uFE0F \u9001\u9910");j(`\u{1F37D}\uFE0F \u7B2C ${l.i+1} / ${l.orders.length} \u4F4D\u5BA2\u4EBA`,...Mt(B,null,!1),...be(en.menu,v,"\u6258\u76E4"),C("div",{class:"row"},O),L),y.overlay="task",gt(p.en)}let pe=o.lost,Gt=(()=>{let l=io(er({skin:0,hair:3,hairColor:2,top:1,bottom:2,hat:1})),p=Vl("\u{1F9D2} "+pe.kid.en);p.position.y=2.75,p.scale.multiplyScalar(1.5),l.add(p),l.scale.setScalar(.7),z.add(l);let[v,L]=pe.kid.at;return{n:{id:"lostkid",en:pe.kid.en,zh:pe.kid.zh},spot:{x:v,z:L},p:{x:v,y:f+1,z:L},g:l,yaw:Math.PI,sp:0}})(),Fn=l=>u.homes.find(p=>p.id===l);function pi(){if(y.lost){Wh();return}let l=y.lostQ=mp(u.homes,pe.kid.at[0],pe,Math.random,(p=>v=>p(v+":pick"))(vt("town:life:lost:")));j(`\u{1F9D2} ${pe.kid.en}\u30FB${pe.kid.zh}`,...Mt(pe.hello,pe.helloZh,y.zh),...Mt(l.en,l.zh,y.zh),C("p",{class:"big"},pe.ask+(y.zh?"\u3000"+pe.askZh:"")),C("div",{class:"cards"},l.cards.map(p=>C("button",{class:"card en","data-id":p,onclick:v=>uo(p,v.currentTarget)},Fn(p).en)))),y.overlay="task",gt(pe.hello+" "+l.en)}function uo(l,p){let v=y.lostQ;if(!v||v.picked)return;v.picked=!0;let L=l===v.to;Ae("lost",v.to+":pick",L,l),L&&rt(bt.perQ),p.classList.add(L?"ok":"bad"),Ge(L?"pickup":"hurt"),W.ov.querySelector(".panel").append(C("div",{class:"fb "+(L?"ok":"bad")},C("div",{},L?`\u7B54\u5C0D\u4E86\uFF01 +${bt.perQ} \u91D1\u5E63`:`\u5DEE\u4E00\u9EDE\uFF01${pe.kid.en} \u4F4F\u5728 `,L?null:C("b",{class:"en"},Fn(v.to).en)),...Mt(pe.walk,pe.walkZh,y.zh),C("button",{class:"btn big",onclick:()=>{y.lost={to:v.to,tries:0,right:L,en:v.en,zh:v.zh},y.lostQ=null,We(),ct()}},"\u5E36\u4ED6\u56DE\u5BB6")))}function Wh(){let l=y.lost;l&&(j(`\u{1F9D2} \u5E36 ${pe.kid.en} \u56DE\u5BB6`,...Mt(l.en,l.zh,y.zh),C("p",{class:"muted small"},`${pe.kid.en} \u8DDF\u5728\u4F60\u5F8C\u9762\u3002\u8D70\u5230\u4ED6\u5BB6\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\u3002`),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u597D"),C("button",{class:"btn ghost",onclick:()=>{y.lost=null,We(),ct()}},"\u5148\u4E0D\u5E36\u4E86"))),y.overlay="task",gt(l.en))}function Dp(){let l=y.lost;if(l)for(let p of Zi){if(!p.b.isHome)continue;if(Math.hypot(y.p.x-p.f[0],y.p.z-p.f[1])>3.2){y.lostWrong===p.id&&(y.lostWrong=null);continue}if(p.id!==l.to){y.lostWrong!==p.id&&(y.lostWrong=p.id,l.tries++,Z(`${pe.kid.en}\uFF1A\u300C${pe.wrong}\u300D${pe.wrongZh}`));continue}let v=l.tries===0,L=(v?bt.perQ:0)+(v&&l.right?bt.allRight:0);y.lost=null,We(),Ae("lost",l.to+":walk",v,l.to),rt(L),Qt("lost"),_e(),j(`\u{1F3E0} ${p.b.en}`,...Mt(pe.home,pe.homeZh,y.zh),C("p",{class:"big"},v?`\u4E00\u6B21\u5C31\u8D70\u5C0D\u4E86\uFF01 +${L} \u91D1\u5E63`:"\u627E\u5230\u4E86\uFF01\u4E0B\u6B21\u8A66\u8A66\u770B\u4E00\u6B21\u5C31\u8D70\u5230\u5C0D\u7684\u9580\u53E3\u3002"),C("div",{class:"row"},C("button",{class:"btn big",onclick:ct},"\u63B0\u63B0"))),y.overlay="task",gt(pe.home);return}}let Rl=(l,p)=>{for(let v=0;v<=4;v++)for(let L=-v;L<=v;L++)for(let B=-v;B<=v;B++){let O=Math.floor(l)+L,nt=Math.floor(p)+B;if(re(O,nt))return[O+.5,nt+.5]}return null};function Np(l,p){return re(Math.floor(l),Math.floor(p))?[l,p]:re(Math.floor(y.p.x),Math.floor(y.p.z))?[y.p.x,y.p.z]:Rl(y.p.x,y.p.z)}function Xh(l,p,v){let L=y.p.x+Math.sin(y.yaw)*1.4+Math.cos(y.yaw)*v,B=y.p.z+Math.cos(y.yaw)*1.4-Math.sin(y.yaw)*v,O=Math.hypot(L-l.p.x,B-l.p.z),nt=0;if(O>30||l.stuck){let At=Rl(y.p.x,y.p.z);At&&(l.p.x=At[0],l.p.z=At[1],l.jumps=(l.jumps||0)+1),l.stuck=!1,l.path=null,l.pt=0}else if(O>.3){if((l.pt=(l.pt||0)-p)<=0&&(l.pt=.3,l.goal=Np(L,B),l.path=null,l.goal&&!ro(re,l.p.x,l.p.z,l.goal[0],l.goal[1]))){let Xt=pt.find(re,Math.floor(l.p.x),Math.floor(l.p.z),Math.floor(l.goal[0]),Math.floor(l.goal[1]));Xt?l.path=Xt.slice(1,-1).map(Ce=>[Ce[0]+.5,Ce[1]+.5]):l.stuck=!0}for(;l.path&&l.path.length&&Math.hypot(l.path[0][0]-l.p.x,l.path[0][1]-l.p.z)<.25;)l.path.shift();let At=l.path&&l.path.length?l.path[0]:l.goal;if(At&&!l.stuck){let Xt=At[0]-l.p.x,Ce=At[1]-l.p.z,sn=Math.hypot(Xt,Ce);if(sn>.05){nt=Math.min(9,O*2.5);let Qi=Math.min(sn,nt*p),ts=l.p.x+Xt/sn*Qi,fr=l.p.z+Ce/sn*Qi;Ot(Math.floor(ts),Math.floor(fr))?nt=0:(l.p.x=ts,l.p.z=fr),l.yaw=Math.atan2(-Xt,-Ce)}}}let it=Math.floor(y.p.y)+1,dt=Math.floor(l.p.x),Rt=Math.floor(l.p.z);for(;it>f-3&&!c.flat.solid[$.get(dt,it-1,Rt)];)it--;return l.p.y+=(it-l.p.y)*Math.min(1,p*10),nt}function Up(l,p,v){y.lost&&!y.overlay?Gt.sp=Xh(Gt,l,-.7):!y.lost&&!y.overlay&&Math.hypot(Gt.p.x-Gt.spot.x,Gt.p.z-Gt.spot.z)>.5?(Gt.p={x:Gt.spot.x,y:f+1,z:Gt.spot.z},Gt.yaw=Math.PI,Gt.sp=0):y.overlay&&(Gt.sp=0),Gt.g.position.set(Gt.p.x,Gt.p.y,Gt.p.z),Gt.g.rotation.y=Gt.yaw,so(Gt.g,Gt.sp,p,v)}let Pl=null,Fp=()=>gp(Pl,at&&at.patterns);function fo(l){let p=Fp();if(!p.length){Z("\u8AB2\u672C\u9084\u6C92\u8F09\u597D\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86\u4E0A\u8AB2");return}let v=p.find(L=>L.id===(l||xp(p,ft("ke_log",[]),us())))||p[0];y.cls={u:v,U:p,qs:_p(v,o.class.n,Math.random,o.class,(L=>B=>L(`${B.kind}:${B.key}`))(vt(`town:life:class:${v.id}:`))),i:-1,right:0},Il()}function Il(){let l=y.cls,p=o.class,v=W.ov;v.innerHTML="",v.hidden=!1,y.overlay="task";let L=C("div",{class:"panel talk"},C("div",{class:"p-head"},C("h2",{},`\u{1F4D8} \u82F1\u6587\u8AB2\uFF1A${l.u.title}`,C("small",{},l.i>=0&&l.i<l.qs.length?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C`:"")),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")));if(v.append(L),l.i<0){let O=l.U[(l.U.indexOf(l.u)+1)%l.U.length];L.append(...Mt(p.intro.replace("{unit}",l.u.title),p.introZh.replace("{unit}",l.u.title),y.zh),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>{l.i=0,Il()}},"\u958B\u59CB\u4E0A\u8AB2"),l.U.length>1?C("button",{class:"btn ghost",onclick:()=>fo(O.id)},"\u63DB\u4E00\u8AB2\uFF1A"+O.title):null)),gt(p.intro.replace("{unit}",l.u.title));return}if(l.i<l.qs.length){let O=l.qs[l.i];an(L,O,nt=>{let it=O.cards[nt],dt=!!(it&&it.ok),Rt=O.cards.find(At=>At.ok).t;return Ae("class",`${l.u.id}:${O.kind}:${O.key}`,dt,it&&it.t),dt&&l.right++,l.i++,gt(O.full||Rt),{ok:dt,answer:O.full||Rt,coins:dt?bt.perQ:0,last:l.i>=l.qs.length}},Il);return}let B=l.right===l.qs.length;B&&rt(bt.allRight),Qt("class"),_e(),L.append(...Mt(p.thanks,p.thanksZh,y.zh),C("p",{class:"big"},`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C${B?`\uFF0C\u5168\u5C0D +${bt.allRight} \u91D1\u5E63`:""}`),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>fo(l.u.id)},"\u518D\u4E0A\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u4E0B\u8AB2"))),gt(p.thanks)}let kn=o.cook;function po(){let l=new Set(U.cooked||[]);j("\u{1F373} \u6E6F\u59C6\u4E3B\u5EDA\u7684\u5EDA\u623F",...Mt(kn.intro,kn.introZh,y.zh),C("p",{class:"muted small"},`\u505A\u904E ${l.size} / ${kn.dishes.length} \u9053\u83DC\u3002\u6BCF\u4E00\u6B65\u7B54\u5C0D +${bt.perQ} \u91D1\u5E63\uFF0C\u6574\u9053\u83DC\u5168\u5C0D\u518D +${bt.allRight}\u3002`),C("div",{class:"cards items"},kn.dishes.map(p=>C("button",{class:"card item"+(l.has(p.id)?" ok":""),"data-dish":p.id,onclick:()=>qh(p.id)},C("span",{class:"ico"},p.icon),C("span",{class:"en"},p.en))))),y.overlay="task",gt(kn.intro)}function qh(l){let p=kn.dishes.find(v=>v.id===l);p&&(y.cook={d:p,lines:zh(p,kn),qs:vp(p,kn),i:-1,right:0,hide:!1},Ll())}function Ll(){let l=y.cook,p=W.ov;p.innerHTML="",p.hidden=!1,y.overlay="task";let v=C("div",{class:"panel talk"},C("div",{class:"p-head"},C("h2",{},`${l.d.icon} ${l.d.en}\u30FB${l.d.zh}`,C("small",{},l.i>=0&&l.i<l.qs.length?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u6B65`:"")),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")));p.append(v);let L=C("div",{class:"glist recipe"+(l.hide&&l.i<l.qs.length?" listen":"")},l.lines.map((it,dt)=>C("div",{class:"npc-line"+(dt<l.i?" done":"")},C("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u6B65",onclick:()=>gt(it.en)},"\u{1F50A}"),C("b",{class:"en"},it.en),y.zh?C("small",{class:"muted"},"\u3000"+it.zh):null))),B=C("button",{class:"btn ghost small",onclick:()=>{l.hide=!l.hide,L.classList.toggle("listen",l.hide),B.textContent=l.hide?"\u{1F440} \u770B\u98DF\u8B5C":"\u{1F648} \u84CB\u4F4F\u98DF\u8B5C\uFF08\u6311\u6230\uFF09"}},l.hide?"\u{1F440} \u770B\u98DF\u8B5C":"\u{1F648} \u84CB\u4F4F\u98DF\u8B5C\uFF08\u6311\u6230\uFF09");if(l.i<0){v.append(C("p",{class:"big"},"\u{1F4DC} \u98DF\u8B5C Recipe"),L,C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>{l.i=0,Ll()}},"\u958B\u59CB\u505A\u83DC"),C("button",{class:"btn ghost",onclick:po},"\u63DB\u4E00\u9053\u83DC"))),gt(l.d.en+". "+l.lines.map(it=>it.en).join(" "));return}if(l.i<l.qs.length){v.append(L,C("div",{class:"row"},B));let it=l.qs[l.i];an(v,it,dt=>{let Rt=it.cards[dt],At=!!(Rt&&Rt.ok);return Ae("cook",it.key,At,Rt&&Rt.t),At&&l.right++,l.i++,gt(it.full),{ok:At,answer:it.cards.find(Xt=>Xt.ok).t,coins:At?bt.perQ:0,last:l.i>=l.qs.length}},Ll);return}let O=l.right===l.qs.length;O&&rt(bt.allRight),U.cooked=[...new Set((U.cooked||[]).concat(l.d.id))],Qt("cook"),_e();let nt=kn.done.replace("{dish}",l.d.en);v.append(C("p",{class:"dish-big"},l.d.icon),...Mt(nt,kn.doneZh.replace("{dishZh}",l.d.zh),y.zh),C("p",{class:"big"},`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u6B65${O?`\uFF0C\u5168\u5C0D +${bt.allRight} \u91D1\u5E63`:""}`),C("div",{class:"row"},C("button",{class:"btn big",onclick:po},"\u518D\u505A\u4E00\u9053"),C("button",{class:"btn ghost",onclick:ct},"\u4F11\u606F"))),gt(nt)}V.push(l=>l.n.id===kn.npc?C("button",{class:"card",onclick:po},"\u{1F373} \u8DDF\u4E3B\u5EDA\u5B78\u505A\u83DC\uFF08\u82F1\u6587\u98DF\u8B5C\uFF09"):null),V.push(l=>l.n.id===Pe.npc?C("button",{class:"card",onclick:()=>y.list?ln(!1):ce()},y.list?"\u{1F9FA} \u518D\u770B\u4E00\u6B21\u8CFC\u7269\u6E05\u55AE":"\u{1F9FA} \u5E6B\u55AC\u723A\u723A\u8CB7\u6771\u897F\uFF08\u8CFC\u7269\u6E05\u55AE\uFF09"):null),V.push(l=>l.n.id==="shopkeeper"&&y.list?C("button",{class:"card",onclick:Mn},"\u{1F9FA} \u7167\u55AC\u723A\u723A\u7684\u6E05\u55AE\u62FF\u6771\u897F\u3001\u7D50\u5E33"):null),V.push(l=>l.n.id===en.npc?C("button",{class:"card",onclick:xe},"\u{1F37D}\uFE0F \u7576\u670D\u52D9\u751F\uFF08\u9001\u9910\u7D66 3 \u4F4D\u5BA2\u4EBA\uFF09"):null),V.push(l=>l.n.id===o.class.npc?C("button",{class:"card",onclick:()=>fo()},"\u{1F4D8} \u4E0A\u4E00\u5802\u82F1\u6587\u8AB2\uFF08\u8AB2\u672C\uFF09"):null);let or=Rp(a,us(),oo,Hh.get("fest")),Me=or?a.festivals[or]:null,ar=[];function Dl(l){let p=document.createElement("canvas");p.width=128,p.height=128;let v=p.getContext("2d"),L=(O,nt,it,dt)=>{v.fillStyle=dt,v.beginPath(),v.arc(O,nt,it,0,Math.PI*2),v.fill()};if(v.lineWidth=5,v.strokeStyle="#26302A",v.lineJoin="round",l==="pumpkin"){v.fillStyle="#E07A1F",v.beginPath(),v.ellipse(64,74,50,40,0,0,Math.PI*2),v.fill(),v.stroke(),v.fillStyle="#3E6B3A",v.fillRect(58,22,12,18),v.fillStyle="#26302A";for(let O of[44,84])v.beginPath(),v.moveTo(O-9,72),v.lineTo(O,56),v.lineTo(O+9,72),v.fill();v.beginPath(),v.moveTo(36,86);for(let O=0;O<=8;O++)v.lineTo(36+O*7,O%2?98:88);v.lineTo(92,86),v.fill()}else if(l==="wreath"){v.strokeStyle="#2F6E3A",v.lineWidth=22,v.beginPath(),v.arc(64,64,38,0,Math.PI*2),v.stroke();for(let O=0;O<8;O++)L(64+Math.cos(O*.8)*38,64+Math.sin(O*.8)*38,6,"#C2443A");v.fillStyle="#C2443A",v.beginPath(),v.moveTo(64,30),v.lineTo(40,14),v.lineTo(40,40),v.closePath(),v.moveTo(64,30),v.lineTo(88,14),v.lineTo(88,40),v.closePath(),v.fill()}else if(l==="gift")v.fillStyle="#3F6E9A",v.fillRect(22,44,84,70),v.strokeRect(22,44,84,70),v.fillStyle="#F2C46B",v.fillRect(56,44,16,70),v.fillRect(22,70,84,14),L(52,36,12,"#F2C46B"),L(76,36,12,"#F2C46B");else if(l==="lantern"){v.fillStyle="#C2443A",v.beginPath(),v.ellipse(64,66,40,34,0,0,Math.PI*2),v.fill(),v.stroke(),v.fillStyle="#F2C46B",v.fillRect(44,26,40,10),v.fillRect(44,96,40,10),v.fillRect(60,106,8,18),v.strokeStyle="#F2C46B",v.lineWidth=3;for(let O of[48,64,80])v.beginPath(),v.moveTo(O,36),v.quadraticCurveTo(O+(O-64)*.6,66,O,96),v.stroke()}else if(l==="fu")v.save(),v.translate(64,64),v.rotate(Math.PI/4),v.fillStyle="#C2443A",v.fillRect(-40,-40,80,80),v.strokeRect(-40,-40,80,80),v.restore(),v.fillStyle="#F2C46B",v.font="bold 54px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText("\u798F",64,68);else if(l==="rabbit"){v.fillStyle="#F4F1E8";for(let O of[50,74])v.beginPath(),v.ellipse(O,34,9,24,0,0,Math.PI*2),v.fill(),v.stroke();v.beginPath(),v.ellipse(64,80,40,30,0,0,Math.PI*2),v.fill(),v.stroke(),L(82,74,5,"#C2443A"),L(64,112,6,"#F2C46B")}else if(l==="moon")L(64,64,58,"#F6E7A8"),L(44,50,9,"#E9D58A"),L(80,78,12,"#E9D58A"),L(70,40,6,"#E9D58A");else if(l==="star"){v.fillStyle="#F2C46B",v.beginPath();for(let O=0;O<10;O++){let nt=O%2?22:54,it=-Math.PI/2+O*Math.PI/5;v.lineTo(64+Math.cos(it)*nt,64+Math.sin(it)*nt)}v.closePath(),v.fill(),v.stroke()}let B=new Tn(p);return B.colorSpace=Ve,B}let Nl=(l,p,v,L,B)=>{let O=new Mi(new si({map:l,depthWrite:!1}));return O.scale.set(B,B,1),O.position.set(p,v,L),z.add(O),ar.push(O),O},Ji=null,mo=null;if(Me){let l=Me.deco.map(Dl);for(let nt of Zi){let it=nt.b.isHome?"n":nt.b.door,dt=it==="n"||it==="s",[Rt,At]=nt.f;[-1,1].forEach((Xt,Ce)=>Nl(l[Ce%l.length],Rt+(dt?Xt*2.2:0),f+1.6,At+(dt?0:Xt*2.2),1.1))}if(Me.tree){let[nt,it]=Me.tree,dt=(Rt,At,Xt,Ce)=>{let sn=new Ie(new rn(Rt,At,Rt),new fn({color:Ce}));sn.position.set(nt,Xt,it),z.add(sn),ar.push(sn)};dt(.5,1,f+1.5,9201216),dt(3.2,1.1,f+2.5,3108410),dt(2.4,1.1,f+3.5,4094789),dt(1.5,1.1,f+4.5,3108410),[[1.4,2.6,12731450],[-1.2,3.6,15909995],[.6,4.6,4157082],[-1.5,2.4,13201567]].forEach(([Rt,At,Xt])=>{let Ce=new Ie(new rn(.3,.3,.3),new fn({color:Xt}));Ce.position.set(nt+Rt,f+At,it-1.2),z.add(Ce),ar.push(Ce)}),Nl(Dl("star"),nt,f+5.6,it,1.1)}Me.moon&&(mo=Nl(Dl("moon"),0,0,0,20));let[p,v]=a.stand,L=Me.outfit,B=io(er({skin:1,hair:1,hairColor:1,top:L.top,bottom:0,hat:L.hat,glasses:0,acc:L.acc})),O=Vl(Me.icon+" "+a.host.en);O.position.y=2.75,O.scale.multiplyScalar(1.4),B.add(O),B.position.set(p,f+1,v),B.rotation.y=-Math.PI/2,z.add(B),Ji={g:B,p:{x:p,y:f+1,z:v},fest:!0},ar.push(Lt(Me.banner[0],Me.banner[1],p,f+3.6,v,Me.color))}function Ul(){Me&&(y.fest={qs:Ip(Me,a.n,Math.random,vt(`town:life:fest:${or}:`)),i:-1,right:0},Fl())}function Fl(){let l=y.fest,p=W.ov;p.innerHTML="",p.hidden=!1,y.overlay="task";let[v,L]=Pp(Me,us()),B=C("div",{class:"panel talk"},C("div",{class:"p-head"},C("h2",{},`${Me.icon} ${Me.en}\u30FB${Me.zh}`,C("small",{},l.i>=0&&l.i<l.qs.length?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C`:"")),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ct},"\xD7")));if(p.append(B),l.i<0){B.append(...Mt(Me.hello,Me.helloZh,y.zh),C("p",{class:"muted small"},`${Me.zh}\u9650\u5B9A\u6D3B\u52D5\uFF08${v.slice(5).replace("-","/")}\uFF5E${L.slice(5).replace("-","/")}\uFF09\uFF1A${l.qs.length} \u984C\u82F1\u6587\uFF0C\u6BCF\u984C\u7B54\u5C0D +${bt.perQ} \u91D1\u5E63\u3001\u5168\u5C0D\u518D +${bt.allRight}\uFF08\u7B97\u6BCF\u65E5\u82F1\u6587\uFF09\u3002`),C("div",{class:"row"},C("button",{class:"btn big",onclick:()=>{l.i=0,Fl()}},"\u958B\u59CB"),C("button",{class:"btn ghost",onclick:ct},"\u7B49\u4E00\u4E0B"))),gt(Me.hello);return}if(l.i<l.qs.length){let nt=l.qs[l.i];an(B,nt,it=>{let dt=nt.cards[it],Rt=!!(dt&&dt.ok);return Ae("fest",`${or}:${nt.key}`,Rt,dt&&dt.t),Rt&&l.right++,l.i++,{ok:Rt,answer:nt.cards.find(At=>At.ok).t,coins:Rt?bt.perQ:0,last:l.i>=l.qs.length}},Fl);return}let O=l.right===l.qs.length;O&&rt(bt.allRight),Qt("fest"),_e(),B.append(C("p",{class:"dish-big"},Me.icon),...Mt(O?Me.thanks:Me.banner[0],O?Me.thanksZh:Me.banner[1],y.zh),C("p",{class:"big"},`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C${O?`\uFF0C\u5168\u5C0D +${bt.allRight} \u91D1\u5E63`:""}`),C("div",{class:"row"},C("button",{class:"btn big",onclick:Ul},"\u518D\u73A9\u4E00\u6B21"),C("button",{class:"btn ghost",onclick:ct},"\u597D"))),gt(O?Me.thanks:Me.banner[0])}function kl(){j("\u5DE5\u4F5C",Ee(),C("p",{class:"muted"},`\u5230\u5DE5\u4F5C\u5730\u9EDE\u627E\u5C45\u6C11\u8003\u57F7\u7167\uFF0810 \u984C\u82F1\u6587\uFF0C\u7B54\u5C0D ${eo} \u984C\u901A\u904E\uFF09\uFF0C\u901A\u904E\u5C31\u80FD\u7A7F\u5236\u670D\u3001\u4E0A\u73ED\u8CFA\u91D1\u5E63\u3002\u751F\u6D3B\u4EFB\u52D9\uFF08\u627E\u55AC\u723A\u723A\u3001\u6E6F\u59C6\u4E3B\u5EDA\u3001\u6797\u8001\u5E2B\u3001\u8FF7\u8DEF\u7684\u5C0F\u9EA5\u514B\uFF09\u4E0D\u7528\u57F7\u7167\u3002`),y.go?C("div",{class:"row"},C("button",{class:"btn",onclick:ds},"\u770B\u73FE\u5728\u7684\u4EFB\u52D9")):null,C("div",{class:"shop"},Object.keys(m).map(l=>{let p=m[l],v=t.buildings.find(O=>O.id===p.place),L=t.npcs.find(O=>O.id===p.npc),B=P.lic[l];return C("div",{class:"offer"},C("div",{class:"of-t"},C("b",{},`${p.zh} ${p.en}`),C("small",{},B?`\u2713 \u6709\u57F7\u7167\u30FB\u4E0A\u73ED ${P.done[l]||0} \u6B21`:`\u5230${v?v.zh:""}\u627E${L?L.zh:""}\u8003\u8A66`)),B?C("button",{class:"btn small",onclick:()=>{P.wear=P.wear===l?null:l,b(),_e(),kl()}},P.wear===l?"\u812B\u4E0B\u5236\u670D":"\u7A7F\u4E0A\u5236\u670D"):null)}))),y.overlay="panel"}let kp=w.filter(l=>l.reward.kind==="furniture").map(l=>l.reward.id),go=t.furniture.slice(),$h=()=>{for(let l of kp)D.has(l)&&!go.includes(l)&&go.push(l)};$h();function lr(){W.hotbar.innerHTML="",W.hotbar.hidden=!y.furn,y.furn&&(go.forEach((l,p)=>W.hotbar.append(C("button",{class:"slot"+(p===y.furnSel?" on":""),title:c.name(l),onpointerdown:v=>{v.stopPropagation(),y.furnSel=p,lr()}},C("span",{class:"fname"},c.name(l))))),W.hotbar.append(C("button",{class:"slot rot",onpointerdown:l=>{l.stopPropagation(),y.furnRot=(y.furnRot+1)%4,Z("\u6905\u5B50\u65B9\u5411\uFF1A"+["\u5317","\u6771","\u5357","\u897F"][y.furnRot])}},"\u8F49\u5411")))}function xo(){let l=me(),p=C("div",{class:"shop"},u.homes.map((L,B)=>C("div",{class:"offer"},C("div",{class:"of-t"},C("b",{},`${B+1} \u865F\u623F\u5B50`),C("small",{},M.id===L.id?"\u9019\u662F\u4F60\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F")),M.id===L.id?C("button",{class:"btn small",onclick:()=>{Ol(),ct()}},"\u56DE\u5BB6"):C("button",{class:"btn small",onclick:()=>Yh(L.id)},M.id?"\u642C\u904E\u53BB":"\u4F4F\u9019\u9593")))),v=(L,B)=>C("div",{class:"swatches"},L.map(O=>C("button",{class:"sw",title:c.name(O),style:"background:"+c.get(O).colors.top,onclick:()=>B(O)})));j("\u6211\u7684\u5BB6",p,l?C("div",{},C("div",{class:"row"},C("button",{class:"btn",onclick:()=>{y.furn=!y.furn,lr(),ct(),Z(y.furn?"\u5BB6\u5177\u6A21\u5F0F\uFF1A\u9EDE\u5730\u677F\u653E\u3001\u9577\u6309\uFF08\u6216\u5DE6\u9375\uFF09\u62FF\u6389\uFF0C\u53EA\u6709\u5BB6\u88E1\u53EF\u4EE5":"\u5BB6\u5177\u6A21\u5F0F\u95DC\u6389\u4E86")}},y.furn?"\u95DC\u6389\u5BB6\u5177\u6A21\u5F0F":"\u5BB6\u5177\u6A21\u5F0F\uFF08\u653E\u5BB6\u5177\uFF09"),C("button",{class:"btn ghost",onclick:()=>{M.locked=!M.locked,Z(M.locked?"\u9580\u9396\u4E0A\u4E86":"\u9580\u6253\u958B\u9396\u4E86"),xo()}},M.locked?"\u9580\uFF1A\u9396\u8457\uFF08\u9EDE\u4E00\u4E0B\u89E3\u9396\uFF09":"\u9580\uFF1A\u6C92\u9396\uFF08\u9EDE\u4E00\u4E0B\u4E0A\u9396\uFF09")),C("h3",{},"\u7246\u58C1\u984F\u8272"),v(t.wallColors,L=>Bl("wall",L)),C("h3",{},"\u5730\u677F"),v(t.floorColors,L=>Bl("floor",L)),Vp()):C("p",{class:"muted"},"\u5148\u9078\u4E00\u9593\u623F\u5B50\u4F4F\u4E0B\u4F86\uFF08\u514D\u8CBB\uFF09\u3002"))}function Yh(l){M.id&&M.id!==l&&(M.restore=(M.restore||[]).filter(p=>p!==l).concat(M.id),M.wall=null,M.floor=null),M.id=l,ye(),Ol(),ct(),Z("\u6B61\u8FCE\u56DE\u5BB6\uFF01\u6253\u958B\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u653E\u5BB6\u5177\u3001\u63DB\u984F\u8272"),_e()}function Ol(){let l=me();l&&(y.p={x:l.x+l.w/2,y:f+1,z:l.z-1.5},y.v={x:0,y:0,z:0},y.yaw=Math.PI)}function Bl(l,p){let v=me();if(v){if(Math.hypot(y.p.x-(v.x+v.w/2),y.p.z-(v.z+v.d/2))>30){Z("\u5148\u56DE\u5BB6\u518D\u63DB\u984F\u8272");return}if(l==="wall"){let L=["glass","door","door_open"];for(let[B,O,nt]of Ud(v,f,(it,dt,Rt)=>{let At=$.get(it,dt,Rt);return At&&!L.includes(c.get(At).id)}))$.set(B,O,nt,c.num(p));M.wall=p}else for(let L=v.x+1;L<v.x+v.w-1;L++)for(let B=v.z+1;B<v.z+v.d-1;B++){let O=p.startsWith("carpet");$.set(L,f,B,c.num(O?"planks":p));let nt=c.get($.get(L,f+1,B));O&&nt&&nt.n===0?$.set(L,f+1,B,c.num(p)):!O&&nt&&nt.id.startsWith("carpet")&&$.set(L,f+1,B,0)}l==="floor"&&(M.floor=p),Z("\u63DB\u597D\u4E86\uFF01"),_e()}}let Zh={bike:"\u{1F6B2}",scooter:"\u{1F6F4}",boat:"\u{1F6F6}",car:"\u{1F697}",bus:"\u{1F68C}"};function Jh(){let l=Re("#b-bike");l&&(l.textContent=Object.keys(ue).some(p=>D.has(p))?"\u4EA4\u901A":"\u8173\u8E0F\u8ECA")}function Ki(l){let p=Zt(),v=Math.floor(y.p.x),L=Math.floor(y.p.z);if(l&&ue[l].big&&ut.has(v+","+L))return Z("\u5728\u5C4B\u5B50\u88E1\u4E0D\u80FD\u958B\u8ECA\uFF0C\u5148\u8D70\u5230\u5916\u9762"),!1;if(ze[l]){let B=null;for(let O=0;O<=3&&!B;O++)for(let nt=-O;nt<=O&&!B;nt++)for(let it=-O;it<=O&&!B;it++){let dt={x:y.p.x+nt,y:y.p.y,z:y.p.z+it};rd(dt,(Rt,At,Xt)=>ht(l,Rt,At,Xt),ze[l])&&(B=dt)}if(!B)return Z("\u9019\u88E1\u592A\u7A84\u4E86\uFF0C\u8ECA\u5B50\u653E\u4E0D\u4E0B\u3002\u5230\u99AC\u8DEF\u4E0A\u518D\u53EB\u8ECA"),!1;y.p=B}if(l==="boat"){let B=null;for(let O=-2;O<=2&&!B;O++)for(let nt=-2;nt<=2&&!B;nt++)Ot(v+O,L+nt)&&(B=[v+O,L+nt]);if(!B)return Z("\u5C0F\u8239\u8981\u5728\u516C\u5712\u7684\u6C60\u5858\u908A\u624D\u80FD\u5750"),!1;y.p={x:B[0]+.5,y:f+1,z:B[1]+.5}}if(p==="boat"&&l!=="boat"){let B=null;for(let O=1;O<=4&&!B;O++)for(let nt=-O;nt<=O&&!B;nt++)for(let it=-O;it<=O&&!B;it++){let dt=v+nt,Rt=L+it;!Ot(dt,Rt)&&!c.flat.solid[$.get(dt,f+1,Rt)]&&!c.flat.solid[$.get(dt,f+2,Rt)]&&(B=[dt,Rt])}B&&(y.p={x:B[0]+.5,y:f+1,z:B[1]+.5})}return y.ride=l||null,y.bike=!!l,y.v={x:0,y:0,z:0},Z(l?`${Zh[l]||""} \u5750\u4E0A${ue[l].zh.replace(/（.*）/,"")}\u4E86\uFF01`:"\u4E0B\u8ECA\u4E86\uFF0C\u7528\u8D70\u7684"),!0}function Kh(){let l=["bike"].concat(Object.keys(ue).filter(p=>D.has(p)));j("\u4EA4\u901A\u5DE5\u5177",C("div",{class:"cards"},C("button",{class:"card",onclick:()=>{Ki(null),ct()}},"\u{1F6B6} \u8D70\u8DEF"),l.map(p=>C("button",{class:"card"+(Zt()===p?" ok":""),onclick:()=>{Ki(p)&&ct()}},`${Zh[p]||""} ${ue[p].zh}`))),C("p",{class:"muted small"},"\u6C7D\u8ECA\u3001\u516C\u8ECA\u958B\u4E0D\u9032\u5C4B\u5B50\uFF1B\u5C0F\u8239\u53EA\u80FD\u5728\u516C\u5712\u7684\u6C60\u5858\u3002")),y.overlay="panel"}let nn=null,xs={dog:"\u5C0F\u72D7",cat:"\u5C0F\u8C93",rabbit:"\u5154\u5B50",dalmatian:"\u6591\u9EDE\u72D7"},zl=()=>Object.keys(xs).filter(l=>D.has(l));function Vl(l){let p=document.createElement("canvas");p.width=256,p.height=56;let v=p.getContext("2d");v.fillStyle="rgba(239,235,221,.92)",v.fillRect(4,4,248,48),v.fillStyle="#26302A",v.textAlign="center",v.font="bold 30px sans-serif",v.fillText(l,128,40);let L=new Tn(p);L.colorSpace=Ve;let B=new Mi(new si({map:L,depthWrite:!1}));return B.scale.set(1.3,.28,1),B.position.y=1,B}function ji(){nn&&(z.remove(nn.g),nn=null);let l=T.active;if(!l||!D.has(l)){T.active=null;return}let p=sp(l);p.add(Vl(T.names[l]||xs[l])),z.add(p);let v=Rl(y.p.x+1,y.p.z+1)||[y.p.x+1,y.p.z+1];nn={id:l,g:p,p:{x:v[0],y:y.p.y,z:v[1]},sp:0}}function Op(l,p,v){let L=Re("#b-pet"),B=!zl().length;L.hidden!==B&&(L.hidden=B),nn&&(nn.sp=Xh(nn,l,.7),nn.g.position.set(nn.p.x,nn.p.y,nn.p.z),nn.yaw!=null&&(nn.g.rotation.y=nn.yaw),rp(nn.g,nn.sp,p,v))}function Gl(){j("\u6211\u7684\u5BF5\u7269",C("p",{class:"muted"},"\u5BF5\u7269\u6703\u8DDF\u8457\u4F60\u8D70\u3002\u540D\u5B57\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002"),C("div",{class:"shop"},zl().map(l=>C("div",{class:"offer"},C("div",{class:"of-t"},C("b",{},xs[l]),C("input",{class:"typein pet-name",type:"text",maxlength:12,value:T.names[l]||"",placeholder:"\u5E6B\u7260\u53D6\u540D\u5B57",onkeydown:p=>p.stopPropagation(),onchange:p=>{T.names[l]=Xd(p.target.value),p.target.value=T.names[l],T.active===l&&ji(),_e()}})),C("button",{class:"btn small",onclick:()=>{T.active=T.active===l?null:l,ji(),_e(),Gl()}},T.active===l?"\u8B93\u7260\u5F85\u5728\u5BB6":"\u5E36\u7260\u51FA\u9580"))))),y.overlay="panel"}let Hl=()=>C("button",{class:"btn ghost",onclick:Wl},"\u2190 \u56DE\u624B\u6A5F");function Wl(){let l=(v,L,B,O)=>C("button",{class:"app","data-app":v,onclick:O},C("span",{class:"ico"},L),C("span",{},B)),p=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date);j("\u{1F4F1} \u5C0F\u93AE\u624B\u6A5F",C("div",{class:"phone-bar"},C("b",{},p),C("span",{},`\u{1FA99} ${x.coins}`)),C("div",{class:"apps"},l("ride","\u{1F697}","\u53EB\u8ECA",Kh),l("wear","\u{1F455}","\u63DB\u8863\u670D",cr),l("pet","\u{1F436}","\u53EB\u5BF5\u7269",jh),l("today","\u{1F4CA}","\u4ECA\u65E5\u984C\u6578",Bp),l("photo","\u{1F4F7}","\u62CD\u7167",tu))),W.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"}function jh(){let l=zl();if(!l.length){Z("\u9084\u6C92\u6709\u5BF5\u7269\uFF1A\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\u8CB7\uFF0C\u6216\u627E\u79D8\u5BC6\u623F\u9593");return}j("\u{1F436} \u53EB\u5BF5\u7269",C("p",{class:"muted"},"\u9EDE\u4E00\u96BB\uFF0C\u7260\u6703\u99AC\u4E0A\u8DD1\u5230\u4F60\u8EAB\u908A\u3002"),C("div",{class:"cards"},l.map(p=>C("button",{class:"card"+(T.active===p?" ok":""),"data-pet":p,onclick:()=>{T.active=p,ji(),_e(),ct(),Z(`${T.names[p]||xs[p]} \u8DD1\u904E\u4F86\u4E86\uFF01`)}},`${xs[p]}${T.names[p]?"\u300C"+T.names[p]+"\u300D":""}`))),C("div",{class:"row"},T.active?C("button",{class:"btn ghost",onclick:()=>{T.active=null,ji(),_e(),jh()}},"\u8B93\u7260\u5F85\u5728\u5BB6"):null,Hl())),W.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"}function Qh(){let l=us(),p=Date.parse(l+"T00:00:00+08:00"),v=ft("ke_log",[]).filter(B=>B&&B.m==="town"&&B.t>=p&&B.t<p+864e5),L=B=>v.filter(O=>B.test(O.k||"")).length;return{all:v.length,license:L(/^town:license:/),job:L(/^town:job:/),life:L(/^town:life:/),chat:v.length-L(/^town:(license|job|life):/)}}function Bp(){let l=null;try{l=window.KidsDaily&&window.KidsDaily.today()}catch{}let p=l&&l.rows?l.rows.find(L=>L.k==="english"):null,v=Qh();j("\u{1F4CA} \u4ECA\u65E5\u984C\u6578",p?C("p",{class:"big"},`\u6BCF\u65E5\u82F1\u6587\uFF1A${p.n} / ${p.goal} \u984C ${p.done?"\u2713":""}`):C("p",{class:"muted"},"\u6BCF\u65E5\u82F1\u6587\u6E05\u55AE\u8981\u767B\u5165\u5B78\u7FD2\u7AD9\u624D\u6703\u8A18\u9304\u3002"),C("div",{class:"quests"},C("div",{class:"quest"},C("b",{},`\u4ECA\u5929\u5728\u5C0F\u93AE\u7B54\u4E86 ${v.license+v.job+v.life} \u984C\uFF08\u7B97\u9032\u6BCF\u65E5\u82F1\u6587\uFF09`),C("small",{},`\u57F7\u7167\u8003\u8A66 ${v.license}\u30FB\u5DE5\u4F5C ${v.job}\u30FB\u751F\u6D3B\u4EFB\u52D9 ${v.life}`)),C("div",{class:"quest"},C("b",{},`\u8DDF\u5C45\u6C11\u804A\u5929 ${v.chat} \u53E5`),C("small",{},"\u804A\u5929\u7DF4\u7FD2\u4E0D\u7B97\u6BCF\u65E5\u984C\u6578"))),Ee(),C("div",{class:"row"},Hl())),W.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"}function tu(){ct(),F.render(z,k);let l=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date).replace(/:/g,"");I.toBlob(p=>{if(!p){Z("\u62CD\u7167\u5931\u6557\uFF0C\u518D\u8A66\u4E00\u6B21");return}y.photo&&URL.revokeObjectURL(y.photo.url),y.photo={url:URL.createObjectURL(p),name:`\u5C0F\u670B\u53CB\u93AE_${us()}_${l}.png`,size:p.size},Ge("pickup"),j("\u{1F4F7} \u7167\u7247",C("img",{class:"photo",src:y.photo.url,alt:"\u525B\u525B\u62CD\u7684\u5C0F\u93AE\u7167\u7247"}),C("p",{class:"muted small"},"iPad\uFF1A\u9577\u6309\u7167\u7247 \u2192\u300C\u52A0\u5165\u7167\u7247\u300D\uFF0C\u6216\u6309\u300C\u4E0B\u8F09\u7167\u7247\u300D\u3002\u7167\u7247\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u4EFB\u4F55\u5730\u65B9\u3002"),C("div",{class:"row"},C("a",{class:"btn",href:y.photo.url,download:y.photo.name},"\u2B07\uFE0F \u4E0B\u8F09\u7167\u7247"),C("button",{class:"btn ghost",onclick:tu},"\u518D\u62CD\u4E00\u5F35"),Hl())),W.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"},"image/png")}let Xl=s.cats[0][0];function _o(){let l=s.items.filter(p=>p.cat===Xl);j("\u674E\u8001\u95C6\u7684\u5546\u5E97",C("div",{class:"row tabs"},s.cats.map(([p,v])=>C("button",{class:"btn small"+(p===Xl?"":" ghost"),onclick:()=>{Xl=p,_o()}},v))),C("p",{class:"muted small"},`\u4F60\u6709 ${x.coins} \u91D1\u5E63\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u500B\u9322\u5305\uFF09\u3002`),C("div",{class:"shop"},l.map(p=>{let v=D.has(p.id);return C("div",{class:"offer"},C("div",{class:"of-t"},C("b",{},`${p.zh}`),C("small",{},v?"\u2713 \u5DF2\u7D93\u6709\u4E86":`${p.price} \u91D1\u5E63`)),v?null:C("button",{class:"btn small",onclick:()=>eu(p.id)},"\u8CB7"))}))),y.overlay="shop"}async function eu(l){let p=S[l];if(!p||y.buying)return!1;y.buying=!0;try{await _e();let v=yl(await ao.get("hw_coins")),L=ap(v),B=Wd(p,D,{coins:L.balance(),hasHome:!!M.id});return B.ok?(await L.spend(p.price,"town:"+p.id)).ok?(D.add(p.id),await ao.putMany({hw_coins:Th(v)}),x.coins=v.coins,xt(),p.cat==="pet"&&!T.active&&(T.active=p.id,ji()),p.id==="floor2"&&(M.floors=2,ye()),p.theme&&(M.theme=p.theme),await _e(),Jh(),Ge("coin"),Z({ride:"\u8CB7\u5230\u4E86\uFF01\u6309\u300C\u4EA4\u901A\u300D\u5750\u4E0A\u53BB",pet:"\u8CB7\u5230\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\uFF0C\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",wear:"\u8CB7\u5230\u4E86\uFF01\u5230\u300C\u5916\u89C0\u300D\u7A7F\u4E0A",house:"\u8CB7\u5230\u4E86\uFF01\u56DE\u5BB6\u770B\u770B\uFF08\u5728\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u63DB\u6A23\u5F0F\uFF09"}[p.cat]),y.overlay==="shop"&&_o(),!0):(Z("\u8CB7\u4E0D\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21"),!1):(Z(B.reason==="coins"?`\u91D1\u5E63\u4E0D\u5920\uFF0C\u9084\u5DEE ${B.short} \u679A\u3002\u53BB\u4E0A\u73ED\u6216\u7B54\u984C\u8CFA\u91D1\u5E63\u5427\uFF01`:B.reason==="home"?"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50":"\u5DF2\u7D93\u6709\u4E86"),!1)}finally{y.buying=!1}}V.push(l=>l.n.id==="shopkeeper"?C("button",{class:"card",onclick:_o},"\u{1F6D2} \u8CB7\u6771\u897F\uFF08\u4EA4\u901A\u5DE5\u5177\u30FB\u5BF5\u7269\u30FB\u8863\u670D\u30FB\u623F\u5B50\uFF09"):null);let ql=()=>[M.id,M.floors||1,M.theme||"none"].join(":"),nu=l=>[[l.x,l.z],[l.x+l.w-1,l.z],[l.x,l.z+l.d-1],[l.x+l.w-1,l.z+l.d-1]].every(([p,v])=>$.ready(p,v));function zp(){for(let l of(M.restore||[]).slice()){let p=u.homes.find(B=>B.id===l);if(!p||l===M.id){M.restore=M.restore.filter(B=>B!==l);continue}if(!nu(p))continue;let v=new Map,L=(B,O,nt)=>{let it=Math.floor(B/16),dt=Math.floor(nt/16),Rt=it+","+dt;return v.has(Rt)||v.set(Rt,u.genChunk(it,dt)),v.get(Rt)[Nn(B-it*16,O,nt-dt*16)]};for(let B=p.x;B<p.x+p.w;B++)for(let O=p.z;O<p.z+p.d;O++)for(let nt=f;nt<=f+Dh;nt++){let it=L(B,nt,O);$.get(B,nt,O)!==it&&$.set(B,nt,O,it)}M.restore=M.restore.filter(B=>B!==l),_e()}}function $l(){zp();let l=ie();if(!l||M.built===ql()||!nu(l))return;let p=0;for(let[v,L,B,O]of Fd(l,f,{floors:M.floors,theme:M.theme,wall:M.wall})){let nt=O==="air"?0:c.num(O);$.get(v,L,B)!==nt&&($.set(v,L,B,nt),p++)}M.built=ql(),p&&_e()}let iu={none:"\u539F\u672C\u7684\u6A23\u5B50",tree:"\u6A39\u5C4B",lighthouse:"\u71C8\u5854",castle:"\u57CE\u5821"},Vp=()=>{let l=["none"].concat(s.items.filter(p=>p.theme&&D.has(p.id)).map(p=>p.theme));return l.length<2&&M.floors!==2?C("p",{class:"muted small"},"\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u53EF\u4EE5\u8CB7\u4E8C\u6A13\u548C\u6A39\u5C4B\uFF0F\u71C8\u5854\uFF0F\u57CE\u5821\u6A23\u5F0F\u3002"):C("div",{},C("h3",{},"\u623F\u5B50\u6A23\u5F0F"+(M.floors===2?"\uFF08\u6709\u4E8C\u6A13\uFF0C\u5C4B\u88E1\u89D2\u843D\u6709\u68AF\u5B50\uFF09":"")),C("div",{class:"swatches"},l.map(p=>C("button",{class:"sw"+((M.theme||"none")===p?" on":""),onclick:()=>{M.theme=p,$l(),_e(),xo(),Z("\u63DB\u6210"+iu[p])}},iu[p]))))};function cr(){let l=(v,L,B)=>C("div",{class:"av-row"},C("b",{},v),C("div",{class:"swatches"},$n[L].map((O,nt)=>Gd(E,D,L,O)?null:C("button",{class:"sw"+(g[L]===nt?" on":""),style:typeof O=="string"&&O[0]==="#"?"background:"+O:"",onclick:()=>{g[L]=nt,b(),cr(),_e()}},B?B(O):"")))),p={short:"\u77ED\u9AEE",long:"\u9577\u9AEE",bun:"\u5305\u982D",spiky:"\u523A\u523A",none:"\u5149\u982D",cap:"\u68D2\u7403\u5E3D",beanie:"\u6BDB\u5E3D",bow:"\u8774\u8776\u7D50",true:"\u6234",false:"\u4E0D\u6234",flower:"\u82B1\u5708",tophat:"\u7D33\u58EB\u5E3D",crown:"\u7687\u51A0",stripe:"\u689D\u7D0B",star:"\u661F\u661F",scarf:"\u570D\u5DFE",goldbadge:"\u91D1\u5FBD\u7AE0",backpack:"\u80CC\u5305",cape:"\u62AB\u98A8"};j("\u6211\u7684\u6A23\u5B50",l("\u819A\u8272","skin"),l("\u9AEE\u578B","hair",v=>p[v]),l("\u982D\u9AEE\u984F\u8272","hairColor"),l("\u4E0A\u8863","top",v=>v[0]==="#"?"":p[v]),l("\u8932\u5B50","bottom"),l("\u5E3D\u5B50","hat",v=>v==="none"?"\u4E0D\u6234":p[v]),l("\u773C\u93E1","glasses",v=>p[v]),l("\u914D\u4EF6","acc",v=>v==="none"?"\u4E0D\u6234":p[v]),C("p",{class:"muted small"},"\u5E3D\u5B50\u3001\u8863\u670D\u3001\u914D\u4EF6\u53EF\u4EE5\u5728\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u8CB7\u66F4\u591A\u3002"),C("p",{class:"muted"},"\u63DB\u597D\u5C31\u81EA\u52D5\u5B58\u8D77\u4F86\u3002"),C("div",{class:"row"},C("button",{class:"btn",onclick:ct},"\u5B8C\u6210")))}function Gp(){j("\u8A2D\u5B9A",C("label",{class:"set"},"\u97F3\u6A02",C("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:l=>Lh({music:+l.target.value,muted:!1})})),C("label",{class:"set"},"\u97F3\u6548",C("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:l=>Lh({sfx:+l.target.value,muted:!1})})),C("p",{},"\u91D1\u5E63\u8DDF\u300C\u65B9\u584A\u4E16\u754C\u300D\u662F\u540C\u4E00\u500B\u9322\u5305\u3002"),C("p",{},`\u79D8\u5BC6\u623F\u9593\uFF1A\u627E\u5230 ${Et()} / ${w.length} \u9593\uFF08\u7DDA\u7D22\u5728\u516C\u5712\u65C1\u908A\u7684\u516C\u544A\u6B04\uFF09`),C("p",{},C("a",{class:"home-link",href:"../../#s/game",onclick:()=>_e()},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),C("p",{class:"muted small"},"\u7248\u672C "+Gh))}let Jn=(l,p)=>{let v=Re(l);v&&(v.onclick=L=>{L.stopPropagation(),El(),p()})};Jn("#b-av",cr),Jn("#b-home",xo),Jn("#b-set",Gp),Jn("#b-job",kl),Jn("#b-pet",Gl),Jn("#b-phone",Wl),Re("#task").onclick=l=>{l.stopPropagation(),!y.overlay&&(y.go?ds():y.police?gs():y.bus?ho():y.lost?Wh():y.list&&ln(!1))},Jn("#b-bike",()=>{if(!Object.keys(ue).some(l=>D.has(l))){Ki(y.bike?null:"bike");return}Kh()}),Jn("#b-view",()=>{y.view=y.view==="tp"?"fp":"tp"}),Jn("#b-zh",()=>{y.zh=!y.zh,bv("kt_zh",y.zh?"on":"off"),Re("#b-zh").textContent=y.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC"}),Re("#b-zh").textContent=y.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC",Jn("#b-snd",()=>{Rd(),Re("#b-snd").textContent=Tl()?"\u{1F507}":"\u{1F50A}"});let Ti=new Q,su=()=>{let l=Math.cos(y.pitch);return{x:-Math.sin(y.yaw)*l,y:Math.sin(y.pitch),z:-Math.cos(y.yaw)*l}},Yl=()=>({x:y.p.x,y:y.p.y+1.62+N(),z:y.p.z}),Hp=l=>c.flat.boxes[l]||(c.flat.shape[l]===4?[[0,0,0,1,.1,1]]:null);function Wp(l,p,v){return l==="screen"?(Ti.set(p/innerWidth*2-1,-(v/innerHeight)*2+1,.5).unproject(k).sub(k.position).normalize(),{o:{x:k.position.x,y:k.position.y,z:k.position.z},d:{x:Ti.x,y:Ti.y,z:Ti.z}}):y.view==="tp"?(k.getWorldDirection(Ti),{o:{x:k.position.x,y:k.position.y,z:k.position.z},d:{x:Ti.x,y:Ti.y,z:Ti.z}}):{o:Yl(),d:su()}}function ru(l,p,v){let{o:L,d:B}=Wp(l,p,v),O=y.view==="tp"?9:5,nt=wh(L,B,O,(At,Xt,Ce)=>$.get(At,Xt,Ce),At=>At&&!c.flat.liquid[At],Hp),it=null,dt=nt?nt.dist+.3:O;for(let At of Y){let Xt=Js(L,B,At.p,.8,1.9);Xt!=null&&Xt<dt&&(dt=Xt,it=At)}{let At=Js(L,B,Gt.p,.7,1.4);At!=null&&At<dt&&(dt=At,it=Gt)}for(let At of di){let Xt=Js(L,B,At.p,.8,1.9);Xt!=null&&Xt<dt&&(dt=Xt,it=At)}if(Ji){let At=Js(L,B,Ji.p,.8,1.9);At!=null&&At<dt&&(dt=At,it=Ji)}let Rt=null;for(let At of ne){let Xt=Js(L,B,At.p,.7,.7);Xt!=null&&Xt<dt&&(dt=Xt,Rt=At,it=null)}return nt&&(nt.at={x:L.x+B.x*nt.dist,y:L.y+B.y*nt.dist,z:L.z+B.z*nt.dist}),{npc:it,blk:Rt?null:nt,note:Rt}}function hr(l,p,v,L){if(y.overlay)return;let{npc:B,blk:O,note:nt}=ru(l,p,v);if(nt&&!L){Nt(nt);return}if(B&&!L){B===Gt?pi():B.suspect?rr(B.i):B.fest?Ul():St(B);return}if(!O)return;let it=c.get(O.n);if(!y.furn&&it&&it.interact==="door"){qp(O);return}if(!y.furn&&it&&it.interact==="riddle"){Tt(O);return}if(!y.furn&&it&&it.interact==="treasure"){kt(O);return}if(y.furn){if(L){y.furnPrev=null,ou(O.x,O.y,O.z)?($.set(O.x,O.y,O.z,0),Ge("break","wood")):Z("\u53EA\u6709\u81EA\u5DF1\u5BB6\u88E1\u9762\u53EF\u4EE5\u62FF\u6389\u6771\u897F");return}let dt=Zl(O);if(!dt.ok){dt.why&&Z(dt.why);return}if(l==="screen"&&!(y.furnPrev&&y.furnPrev.x===dt.x&&y.furnPrev.y===dt.y&&y.furnPrev.z===dt.z)){y.furnPrev=dt,Z("\u770B\u534A\u900F\u660E\u7684\u9810\u89BD\uFF1A\u518D\u9EDE\u4E00\u6B21\u5C31\u653E\u4E0B\uFF0C\u300C\u8F49\u5411\u300D\u53EF\u4EE5\u8F49\u65B9\u5411");return}y.furnPrev=null,$.set(dt.x,dt.y,dt.z,c.num(au())),Ge("place","wood");return}L&&Z("\u9019\u88E1\u662F\u5C0F\u93AE\u7684\u516C\u5171\u7A7A\u9593\uFF0C\u4E0D\u80FD\u6316\u4E5F\u4E0D\u80FD\u84CB\u5594")}let ou=(l,p,v)=>{let L=me(),B=M.floors===2?to(ie(),f,2).slab:-1;return p!==B&&Nd(L,l,p,v,f)},au=()=>{let l=go[y.furnSel];return c.get(l).place==="stairs"?l+["","_e","_s","_w"][y.furnRot]:l};function Zl(l){let p=l.x+l.face[0],v=l.y+l.face[1],L=l.z+l.face[2];return ou(p,v,L)?$.get(p,v,L)?{ok:!1}:Math.abs(p+.5-y.p.x)<.8&&Math.abs(L+.5-y.p.z)<.8&&v>=Math.floor(y.p.y)&&v<=Math.floor(y.p.y)+1?{ok:!1}:{ok:!0,x:p,y:v,z:L}:{ok:!1,why:me()?"\u5BB6\u5177\u53EA\u80FD\u653E\u5728\u81EA\u5DF1\u5BB6\u88E1\u9762":"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50"}}let lu=new fn({color:15723485,transparent:!0,opacity:.45,depthWrite:!1}),_s=new _n,cu=[0,1].map(()=>{let l=new Ie(new rn(1,1,1),lu);return _s.add(l),l});_s.visible=!1,z.add(_s);function Xp(l){let p=null;if(y.furn&&y.started&&!y.overlay)if(y.touch)p=y.furnPrev&&Zl({x:y.furnPrev.x,y:y.furnPrev.y,z:y.furnPrev.z,face:[0,0,0]});else{let{blk:O}=ru("center");p=O&&Zl(O)}if(!p||!p.ok){_s.visible=!1;return}let v=c.num(au()),L=c.flat.shape[v],B=c.flat.boxes[v]||(L===4?[[0,0,0,1,.1,1]]:L>=1&&L<=3?[[.2,0,.2,.8,.7,.8]]:[[0,0,0,1,1,1]]);cu.forEach((O,nt)=>{let it=B[nt];O.visible=!!it,it&&(O.scale.set((it[3]-it[0])*.98,(it[4]-it[1])*.98,(it[5]-it[2])*.98),O.position.set(p.x+(it[0]+it[3])/2,p.y+(it[1]+it[4])/2,p.z+(it[2]+it[5])/2))}),lu.color.setScalar(.5+.5*l),_s.visible=!0}function qp(l){let p=me(),v=p&&l.x>=p.x&&l.x<p.x+p.w&&l.z>=p.z&&l.z<p.z+p.d;if(u.homes.find(it=>l.x>=it.x&&l.x<it.x+it.w&&l.z>=it.z&&l.z<it.z+it.d)&&!v){Z("\u9019\u4E0D\u662F\u4F60\u7684\u5BB6\uFF0C\u6572\u6572\u9580\u5C31\u597D");return}if(v&&M.locked){Z("\u9580\u9396\u8457\uFF0C\u5230\u300C\u6211\u7684\u5BB6\u300D\u89E3\u9396");return}let B=c.get(l.n),O=c.get(B.openAs||B.closeAs);if(!O)return;let nt=l.y;for(;c.get($.get(l.x,nt-1,l.z)).interact==="door";)nt--;for(let it=nt;c.get($.get(l.x,it,l.z)).interact==="door";it++)$.set(l.x,it,l.z,O.n);Ge("door")}let hu=()=>{oo||!I.requestPointerLock||I.requestPointerLock()};addEventListener("keydown",l=>{if(l.target&&l.target.tagName==="INPUT")return;let p=l.key.toLowerCase();if(p==="escape"&&y.overlay){ct();return}y.overlay||(y.keys[p]=!0,l.code==="Space"&&(y.keys[" "]=!0,l.preventDefault()),p==="b"&&Re("#b-bike").click(),p==="v"&&Re("#b-view").click(),p==="p"&&Re("#b-phone").click(),p==="r"&&(y.furnRot=(y.furnRot+1)%4),p>="1"&&p<="9"&&y.furn&&(y.furnSel=+p-1,lr()))}),addEventListener("keyup",l=>{y.keys[l.key.toLowerCase()]=!1,l.code==="Space"&&(y.keys[" "]=!1)}),addEventListener("blur",()=>{y.keys={}}),I.addEventListener("mousedown",l=>{y.touch||y.overlay||document.pointerLockElement!==I&&(hu(),!oo)||(l.button===0&&hr("center",0,0,y.furn),l.button===2&&hr("center",0,0,!1))}),I.addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{document.pointerLockElement===I&&(y.yaw-=l.movementX*.0024,y.pitch=Math.max(-1.4,Math.min(1.4,y.pitch-l.movementY*.0024)))});let ur=new Map;I.addEventListener("pointerdown",l=>{if(l.pointerType!=="touch"||y.overlay)return;if(y.touch=!0,l.preventDefault(),El(),l.clientX<innerWidth*.4&&l.clientY>innerHeight*.35&&!y.joy.active){y.joy={x:0,y:0,active:!0,ox:l.clientX,oy:l.clientY},W.joy.style.transform=`translate(${l.clientX-60}px, ${l.clientY-60}px)`,W.joy.hidden=!1,ur.set(l.pointerId,{kind:"joy"});return}let p={kind:"look",x:l.clientX,y:l.clientY,sx:l.clientX,sy:l.clientY,t0:performance.now(),drag:!1};p.timer=setTimeout(()=>{p.drag||(p.long=!0,hr("screen",p.x,p.y,!0))},450),ur.set(l.pointerId,p)},{passive:!1}),addEventListener("pointermove",l=>{let p=ur.get(l.pointerId);if(!p)return;if(p.kind==="joy"){let B=l.clientX-y.joy.ox,O=l.clientY-y.joy.oy,nt=Math.hypot(B,O);nt>55&&(B*=55/nt,O*=55/nt),y.joy.x=B/55,y.joy.y=O/55,W.knob.style.transform=`translate(${B}px,${O}px)`;return}let v=l.clientX-p.x,L=l.clientY-p.y;p.x=l.clientX,p.y=l.clientY,!p.drag&&Math.hypot(p.x-p.sx,p.y-p.sy)>12&&(p.drag=!0,clearTimeout(p.timer)),p.drag&&(y.yaw-=v*.0055,y.pitch=Math.max(-1.4,Math.min(1.4,y.pitch-L*.0055)))});let uu=l=>{let p=ur.get(l.pointerId);if(p){if(ur.delete(l.pointerId),p.kind==="joy"){y.joy={x:0,y:0,active:!1},W.joy.hidden=!0;return}clearTimeout(p.timer),!p.drag&&!p.long&&performance.now()-p.t0<450&&hr("screen",p.x,p.y,!1)}};addEventListener("pointerup",uu),addEventListener("pointercancel",uu);let Jl=Re("#b-jump");Jl.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),y.jumpHeld=!0}),Jl.addEventListener("pointerup",()=>{y.jumpHeld=!1}),Jl.addEventListener("pointerleave",()=>{y.jumpHeld=!1}),document.addEventListener("touchmove",l=>{l.target.closest(".panel")||l.preventDefault()},{passive:!1}),["gesturestart","dblclick"].forEach(l=>document.addEventListener(l,p=>p.preventDefault(),{passive:!1})),document.body.classList.toggle("is-touch",y.touch),Re("#ui").classList.toggle("touch",y.touch);async function _e(){let l={kt_player:{x:y.p.x,y:y.p.y,z:y.p.z,yaw:y.yaw,view:y.view},kt_home:M,kt_avatar:g,kt_jobs:P,kt_owned:[...D],kt_pets:T,kt_life:U};for(let p of y.dirty){let v=_.get(p);v&&(l["kt_chunk:"+p]=Rh(v))}y.dirty.clear();try{if(await Ai.putMany(l),y.pending){let p=y.pending;y.pending=0;let v=yl(await ao.get("hw_coins"));Ks(v,p),await ao.putMany({hw_coins:Th(v)}),x.coins=v.coins,xt()}}catch(p){console.warn("save failed",p),!y.quotaWarned&&p&&p.name==="QuotaExceededError"&&(y.quotaWarned=!0,Z("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF0C\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{y.started&&_e()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&y.started&&_e()}),addEventListener("pagehide",()=>{y.started&&_e()}),Re("#go").onclick=()=>{Re("#start").hidden=!0,y.started=!0,at||Pt(),El(),y.touch||hu(),d.av||setTimeout(cr,300),Me&&setTimeout(()=>Z(`${Me.icon} ${Me.zh}\u6D3B\u52D5\u958B\u59CB\u4E86\uFF01\u5F9E\u51FA\u751F\u9EDE\u5F80\u5357\u8D70\uFF0C\u8DEF\u908A\u6709\u6D3B\u52D5\u5C0F\u5E6B\u624B`),1200)},xt(),lr(),We(),Jh(),ji(),Ut();let $p=new Yt("#EFEBDD"),Yp=new Yt("#22302F"),Zp=new Yt("#E6B48C"),fu=performance.now(),yo=0,Kl=0;function Jp(l){let p=y.keys,v=(p.d?1:0)-(p.a?1:0),L=(p.w?1:0)-(p.s?1:0);y.joy.active&&(v=y.joy.x,L=-y.joy.y);let B=Math.min(1,Math.hypot(v,L));if(B>0){let xu=Math.hypot(v,L);v=v/xu*B,L=L/xu*B}let O=-Math.sin(y.yaw),nt=-Math.cos(y.yaw),it=Math.cos(y.yaw),dt=-Math.sin(y.yaw),Rt=p.shift||y.joy.active&&B>.92,At=y.bike?ue[Zt()]:null,Xt=At?Rt?At.run:At.speed:Rt?6.2:4.3,Ce=(O*L+it*v)*Xt,sn=(nt*L+dt*v)*Xt,Qi=1-Math.exp(-(y.onGround?12:5)*l);y.v.x+=(Ce-y.v.x)*Qi,y.v.z+=(sn-y.v.z)*Qi;let ts=Math.floor(y.p.x),fr=Math.floor(y.p.z),mu=!y.bike&&(c.flat.climb[$.get(ts,Math.floor(y.p.y),fr)]||c.flat.climb[$.get(ts,Math.floor(y.p.y)+1,fr)]);mu?y.v.y=p[" "]||y.jumpHeld||L>.1?3.2:Math.max(y.v.y-28*l,-1.5):(y.v.y-=28*l,y.v.y<-40&&(y.v.y=-40)),(p[" "]||y.jumpHeld)&&y.onGround&&!mu&&Zt()!=="boat"&&(y.v.y=8.6,y.onGround=!1);let Kp=od(y.p,y.v,l,ot,{canStep:!0,grounded:y.onGround,w:ze[Zt()]});y.onGround=Kp.onGround;let vo=t.bound+1;y.p.x=Math.max(-vo,Math.min(vo,y.p.x)),y.p.z=Math.max(-vo,Math.min(vo,y.p.z)),y.p.y<0&&(y.p={x:lt.x,y:lt.y,z:lt.z},y.v={x:0,y:0,z:0});let gu=Math.hypot(y.v.x,y.v.z);y.onGround&&gu>1&&(y.stepT=(y.stepT||0)+l*gu,y.stepT>(y.bike?4:1.8)&&Zt()!=="boat"&&(y.stepT=0,Ge("step","stone")))}function du(l){requestAnimationFrame(du);let p=(l-fu)/1e3;fu=l;let v=Math.min(.05,p);y.frames.push(p*1e3),y.frames.length>4e3&&y.frames.shift(),$.update(y.p.x,y.p.z);let L=$.ready(y.p.x,y.p.z);y.started&&!y.overlay&&L&&(Jp(v),(y.go||y.lost||y.bus)&&(y.goT=(y.goT||0)+v)>.25&&(y.goT=0,fi(),Dp(),G())),y.time=(y.time+v/yv)%1;let B=Math.sin(y.time*Math.PI*2),O=Math.min(1,Math.max(0,(B+.12)/.42)),nt=.35+.65*O;X.copy(Yp).lerp($p,O).lerp(Zp,Math.max(0,1-Math.abs(B)/.3)*.4*(O>.05?1:.4)),st.uniforms.uDay.value=O;let it=X.getHexString();st.uniforms.uFog.value.set(parseInt(it.slice(0,2),16)/255,parseInt(it.slice(2,4),16)/255,parseInt(it.slice(4,6),16)/255);let dt=O>.3?"calm":"night";dt!==y.scene&&(y.scene=dt,Pd(dt));for(let Xt of Y)!Xt.busy&&!y.overlay?zd(Xt,v):Xt.v={x:0,y:0,z:0},Ed(Xt.g,Xt,l/1e3);Ad(nt),de.position.set(y.p.x,y.p.y+N(),y.p.z),de.rotation.y=y.yaw,so(de,y.bike?0:Math.hypot(y.v.x,y.v.z),l/1e3,nt),de.visible=y.view==="tp";for(let Xt in H){let Ce=H[Xt],sn=Xt===Zt();Ce.visible=sn,sn&&(Ce.position.set(y.p.x,y.p.y,y.p.z),Ce.rotation.y=y.yaw,op(Ce,nt))}Op(v,l/1e3,nt),Up(v,l/1e3,nt),Xp(nt);for(let Xt of di)so(Xt.g,0,l/1e3,nt);Ji&&so(Ji.g,0,l/1e3,nt),mo&&mo.position.set(y.p.x+38,y.p.y+34,y.p.z-42),(y.houseT=(y.houseT||0)+v)>1&&(y.houseT=0,$l());let Rt=Yl(),At=su();if(y.view==="tp"){let Xt=wh(Rt,{x:-At.x,y:-At.y,z:-At.z},4.5,(sn,Qi,ts)=>$.get(sn,Qi,ts),sn=>c.flat.opaque[sn]===1),Ce=Xt?Math.max(.4,Xt.dist-.25):4.5;k.position.set(Rt.x-At.x*Ce,Rt.y-At.y*Ce+.3,Rt.z-At.z*Ce)}else k.position.set(Rt.x,Rt.y,Rt.z);k.rotation.set(y.pitch,y.yaw,0),F.render(z,k),yo+=p,Kl++,yo>.5&&(W.dbg&&(W.dbg.textContent=`${Math.round(Kl/yo)} fps \xB7 \u5340\u584A ${$.stats.loaded} \xB7 ${y.p.x.toFixed(1)}, ${y.p.y.toFixed(1)}, ${y.p.z.toFixed(1)}`),yo=0,Kl=0),W.loading.hidden=L||!y.started}let pu=()=>{F.setSize(innerWidth,innerHeight,!1),k.aspect=innerWidth/innerHeight,k.updateProjectionMatrix()};addEventListener("resize",pu),pu(),window.KT={build:Gh,TEST:oo,G:y,reg:c,world:$,wallet:x,npcs:Y,terr:u,homeState:M,DLG:e,spawn:lt,start(){Re("#go").click()},ready:()=>$.ready(y.p.x,y.p.z),state:()=>({pos:{...y.p},coins:x.coins,loaded:$.stats.loaded,overlay:y.overlay}),talk:(l,p)=>Ft(Y.find(v=>v.n.id===l),p),menu:l=>St(Y.find(p=>p.n.id===l)),JOBS:m,jobs:P,places:Zi,me:()=>de,openShop:_o,buy:eu,owned:D,notes:ne,readNote:Nt,secrets:w,chatReady:()=>!!at,setRide:Ki,rideId:Zt,pets:T,pet:()=>nn,openPets:Gl,houseTick:$l,houseSig:ql,myHome:me,exam:fs,work:ui,ex:()=>y.exam,task:()=>y.task,go:()=>y.go,openJobs:kl,pick:l=>{let p=W.ov.querySelectorAll(".cards .card")[l];p&&p.click()},dlg:()=>y.dlg,claim:Yh,goHome:Ol,paint:Bl,close:ct,save:_e,avatar:()=>g,setAvatar(l){g=er(l),b()},openAvatar:cr,openHome:xo,lookAt(l,p,v){let L=Yl(),B=l-L.x,O=p-L.y,nt=v-L.z;y.yaw=Math.atan2(-B,-nt),y.pitch=Math.atan2(O,Math.hypot(B,nt))},use(l){hr("center",0,0,!!l)},ghost:()=>({visible:_s.visible,boxes:cu.filter(l=>l.visible).map(l=>[...l.position.toArray().map(p=>+p.toFixed(2)),...l.scale.toArray().map(p=>+p.toFixed(2))])}),furnPrev:()=>y.furnPrev,noteTex:()=>[te,Ue],phone:Wl,photo:()=>y.photo,rideW:l=>ze[l],townToday:Qh,LIFE:o,life:U,lifeTick:Ut,giveList:ce,basketPanel:Mn,waiterStart:xe,waiter:()=>y.waiter,cookMenu:po,cookStart:qh,cook:()=>y.cook,lostStart:pi,lost:()=>y.lost,lostQ:()=>y.lostQ,kid:Gt,classStart:fo,cls:()=>y.cls,tbReady:()=>!!Pl,list:()=>y.list,festId:or,fest:()=>y.fest,festStart:Ul,festHost:()=>Ji,deco:()=>ar.length,moon:()=>mo,police:()=>y.police,suspects:di,policePick:rr,bus:()=>y.bus,busTick:G,readingCorner:J,loadBooks:K,walk:(l,p)=>re(l,p),los:(l,p,v,L)=>ro(re,l,p,v,L),perf(){return{frames:y.frames.slice()}},resetPerf(){y.frames.length=0}},requestAnimationFrame(du)}Mv().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
