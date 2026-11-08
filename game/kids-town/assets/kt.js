(()=>{var Su=0,uc=1,wu=2;var Cr=1,Au=2,Fs=3,Oi=0,fn=1,In=2,si=0,ks=1,fc=2,dc=3,pc=4,Eu=5;var rs=100,Tu=101,Cu=102,Ru=103,Pu=104,Iu=200,Lu=201,Du=202,Nu=203,mc=204,gc=205,Uu=206,Fu=207,ku=208,Ou=209,Bu=210,zu=211,Vu=212,Gu=213,Hu=214,Do=0,No=1,Uo=2,Is=3,Fo=4,ko=5,Oo=6,Bo=7,xc=0,Wu=1,Xu=2,Gn=0,_c=1,yc=2,vc=3,bc=4,Mc=5,Sc=6,wc=7;var Ac=300,Bi=301,os=302,da=303,pa=304,Rr=306,zo=1e3,Qn=1001,Vo=1002,je=1003,qu=1004;var Pr=1005;var He=1006,ma=1007;var zi=1008;var An=1009,Ec=1010,Tc=1011,Os=1012,ga=1013,Hn=1014,Wn=1015,Xn=1016,xa=1017,_a=1018,Bs=1020,Cc=35902,Rc=35899,Pc=1021,Ic=1022,Ln=1023,ti=1026,Vi=1027,Lc=1028,ya=1029,Gi=1030,va=1031;var ba=1033,Ir=33776,Lr=33777,Dr=33778,Nr=33779,Ma=35840,Sa=35841,wa=35842,Aa=35843,Ea=36196,Ta=37492,Ca=37496,Ra=37488,Pa=37489,Ur=37490,Ia=37491,La=37808,Da=37809,Na=37810,Ua=37811,Fa=37812,ka=37813,Oa=37814,Ba=37815,za=37816,Va=37817,Ga=37818,Ha=37819,Wa=37820,Xa=37821,qa=36492,$a=36494,Ya=36495,Za=36283,Ja=36284,Fr=36285,Ka=36286;var cr=2300,Go=2301,Io=2302,rc=2303,oc=2400,ac=2401,lc=2402;var $u=3200;var Dc=0,Yu=1,yi="",Ge="srgb",hr="srgb-linear",ur="linear",ve="srgb";var Lo=7680;var Zu=519,Ju=512,Ku=513,ju=514,ja=515,Qu=516,tf=517,Qa=518,ef=519,Nc=35044;var Uc="300 es",Vn=2e3,fr=2001;function Lp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Dp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nf(){let n=dr("canvas");return n.style.display="block",n}var nu={},Ls=null;function pr(...n){let t="THREE."+n.shift();Ls?Ls("log",t,...n):console.log(t,...n)}function sf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xt(...n){n=sf(n);let t="THREE."+n.shift();if(Ls)Ls("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Wt(...n){n=sf(n);let t="THREE."+n.shift();if(Ls)Ls("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ss(...n){let t=n.join(" ");t in nu||(nu[t]=!0,Xt(...n))}function rf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var of={[Do]:No,[Uo]:Oo,[Fo]:Bo,[Is]:ko,[No]:Do,[Oo]:Uo,[Bo]:Fo,[ko]:Is},ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fl=Math.PI/180,Ho=180/Math.PI;function Pi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function Np(n,t){return(n%t+t)%t}function kl(n,t,e){return(1-e)*n+e*t}function jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;var re=zc,ni=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],h=i[s+1],f=i[s+2],u=i[s+3],d=r[o+0],_=r[o+1],x=r[o+2],w=r[o+3];if(u!==w||c!==d||h!==_||f!==x){let g=c*d+h*_+f*x+u*w;g<0&&(d=-d,_=-_,x=-x,w=-w,g=-g);let p=1-a;if(g<.9995){let P=Math.acos(g),F=Math.sin(P);p=Math.sin(p*P)/F,a=Math.sin(a*P)/F,c=c*p+d*a,h=h*p+_*a,f=f*p+x*a,u=u*p+w*a}else{c=c*p+d*a,h=h*p+_*a,f=f*p+x*a,u=u*p+w*a;let P=1/Math.sqrt(c*c+h*h+f*f+u*u);c*=P,h*=P,f*=P,u*=P}}t[e]=c,t[e+1]=h,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o],d=r[o+1],_=r[o+2],x=r[o+3];return t[e]=a*x+f*u+c*_-h*d,t[e+1]=c*x+f*d+h*u-a*_,t[e+2]=h*x+f*_+a*d-c*u,t[e+3]=f*x-a*u-c*d-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(i/2),f=a(s/2),u=a(r/2),d=c(i/2),_=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=d*f*u+h*_*x,this._y=h*_*u-d*f*x,this._z=h*f*x+d*_*u,this._w=h*f*u-d*_*x;break;case"YXZ":this._x=d*f*u+h*_*x,this._y=h*_*u-d*f*x,this._z=h*f*x-d*_*u,this._w=h*f*u+d*_*x;break;case"ZXY":this._x=d*f*u-h*_*x,this._y=h*_*u+d*f*x,this._z=h*f*x+d*_*u,this._w=h*f*u-d*_*x;break;case"ZYX":this._x=d*f*u-h*_*x,this._y=h*_*u+d*f*x,this._z=h*f*x-d*_*u,this._w=h*f*u+d*_*x;break;case"YZX":this._x=d*f*u+h*_*x,this._y=h*_*u+d*f*x,this._z=h*f*x-d*_*u,this._w=h*f*u-d*_*x;break;case"XZY":this._x=d*f*u-h*_*x,this._y=h*_*u-d*f*x,this._z=h*f*x+d*_*u,this._w=h*f*u+d*_*x;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],f=e[6],u=e[10],d=i+a+u;if(d>0){let _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(f-c)*_,this._y=(r-h)*_,this._z=(o-s)*_}else if(i>a&&i>u){let _=2*Math.sqrt(1+i-a-u);this._w=(f-c)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+h)/_}else if(a>u){let _=2*Math.sqrt(1+a-i-u);this._w=(r-h)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(c+f)/_}else{let _=2*Math.sqrt(1+u-i-a);this._w=(o-s)/_,this._x=(r+h)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,f=e._w;return this._x=i*f+o*a+s*h-r*c,this._y=s*f+o*c+r*a-i*h,this._z=r*f+o*h+i*c-s*a,this._w=o*f-i*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let h=Math.acos(a),f=Math.sin(h);c=Math.sin(c*h)/f,e=Math.sin(e*h)/f,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*i),f=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*h+o*u-a*f,this.y=i+c*f+a*h-r*u,this.z=s+c*u+r*f-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var J=Vc,Ol=new J,iu=new ni,Gc=class Gc{constructor(t,e,i,s,r,o,a,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,h)}set(t,e,i,s,r,o,a,c,h){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=c,f[6]=i,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],h=i[1],f=i[4],u=i[7],d=i[2],_=i[5],x=i[8],w=s[0],g=s[3],p=s[6],P=s[1],F=s[4],b=s[7],S=s[2],T=s[5],U=s[8];return r[0]=o*w+a*P+c*S,r[3]=o*g+a*F+c*T,r[6]=o*p+a*b+c*U,r[1]=h*w+f*P+u*S,r[4]=h*g+f*F+u*T,r[7]=h*p+f*b+u*U,r[2]=d*w+_*P+x*S,r[5]=d*g+_*F+x*T,r[8]=d*p+_*b+x*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],f=t[8];return e*o*f-e*a*h-i*r*f+i*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],f=t[8],u=f*o-a*h,d=a*c-f*r,_=h*r-o*c,x=e*u+i*d+s*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=u*w,t[1]=(s*h-f*i)*w,t[2]=(a*i-s*o)*w,t[3]=d*w,t[4]=(f*e-s*c)*w,t[5]=(s*r-a*e)*w,t[6]=_*w,t[7]=(i*c-h*e)*w,t[8]=(o*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;var Jt=Gc,Bl=new Jt,su=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:t,whitePoint:i,transfer:ur,toXYZ:su,fromXYZ:ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:su,fromXYZ:ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var ce=Up();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ds,Wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ds===void 0&&(ds=dr("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fp=0,Ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zl(s[o].image)):r.push(zl(s[o]))}else r=zl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var kp=0,Vl=new J,hn=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=He,o=zi,a=Ln,c=An,h=n.DEFAULT_ANISOTROPY,f=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Pi(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Ac;hn.DEFAULT_ANISOTROPY=1;var Hc=class Hc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,h=c[0],f=c[4],u=c[8],d=c[1],_=c[5],x=c[9],w=c[2],g=c[6],p=c[10];if(Math.abs(f-d)<.01&&Math.abs(u-w)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+w)<.1&&Math.abs(x+g)<.1&&Math.abs(h+_+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(h+1)/2,b=(_+1)/2,S=(p+1)/2,T=(f+d)/4,U=(u+w)/4,M=(x+g)/4;return F>b&&F>S?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=T/i,r=U/i):b>S?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=U/r,s=M/r),this.set(i,s,r,e),this}let P=Math.sqrt((g-x)*(g-x)+(u-w)*(u-w)+(d-f)*(d-f));return Math.abs(P)<.001&&(P=1),this.x=(g-x)/P,this.y=(u-w)/P,this.z=(d-f)/P,this.w=Math.acos((h+_+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;var Ne=Hc,Xo=class extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new hn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Xo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},mr=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qo=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fa=class fa{constructor(t,e,i,s,r,o,a,c,h,f,u,d,_,x,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,h,f,u,d,_,x,w,g)}set(t,e,i,s,r,o,a,c,h,f,u,d,_,x,w,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=f,p[10]=u,p[14]=d,p[3]=_,p[7]=x,p[11]=w,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),h=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*f,_=o*u,x=a*f,w=a*u;e[0]=c*f,e[4]=-c*u,e[8]=h,e[1]=_+x*h,e[5]=d-w*h,e[9]=-a*c,e[2]=w-d*h,e[6]=x+_*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*f,_=c*u,x=h*f,w=h*u;e[0]=d+w*a,e[4]=x*a-_,e[8]=o*h,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=_*a-x,e[6]=w+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*f,_=c*u,x=h*f,w=h*u;e[0]=d-w*a,e[4]=-o*u,e[8]=x+_*a,e[1]=_+x*a,e[5]=o*f,e[9]=w-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*f,_=o*u,x=a*f,w=a*u;e[0]=c*f,e[4]=x*h-_,e[8]=d*h+w,e[1]=c*u,e[5]=w*h+d,e[9]=_*h-x,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,_=o*h,x=a*c,w=a*h;e[0]=c*f,e[4]=w-d*u,e[8]=x*u+_,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-h*f,e[6]=_*u+x,e[10]=d-w*u}else if(t.order==="XZY"){let d=o*c,_=o*h,x=a*c,w=a*h;e[0]=c*f,e[4]=-u,e[8]=h*f,e[1]=d*u+w,e[5]=o*f,e[9]=_*u-x,e[2]=x*u-_,e[6]=a*f,e[10]=w*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Bp)}lookAt(t,e,i){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ai.crossVectors(i,vn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ai.crossVectors(i,vn)),Ai.normalize(),lo.crossVectors(vn,Ai),s[0]=Ai.x,s[4]=lo.x,s[8]=vn.x,s[1]=Ai.y,s[5]=lo.y,s[9]=vn.y,s[2]=Ai.z,s[6]=lo.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],h=i[12],f=i[1],u=i[5],d=i[9],_=i[13],x=i[2],w=i[6],g=i[10],p=i[14],P=i[3],F=i[7],b=i[11],S=i[15],T=s[0],U=s[4],M=s[8],C=s[12],I=s[1],D=s[5],X=s[9],B=s[13],k=s[2],q=s[6],nt=s[10],tt=s[14],Q=s[3],j=s[7],ht=s[11],dt=s[15];return r[0]=o*T+a*I+c*k+h*Q,r[4]=o*U+a*D+c*q+h*j,r[8]=o*M+a*X+c*nt+h*ht,r[12]=o*C+a*B+c*tt+h*dt,r[1]=f*T+u*I+d*k+_*Q,r[5]=f*U+u*D+d*q+_*j,r[9]=f*M+u*X+d*nt+_*ht,r[13]=f*C+u*B+d*tt+_*dt,r[2]=x*T+w*I+g*k+p*Q,r[6]=x*U+w*D+g*q+p*j,r[10]=x*M+w*X+g*nt+p*ht,r[14]=x*C+w*B+g*tt+p*dt,r[3]=P*T+F*I+b*k+S*Q,r[7]=P*U+F*D+b*q+S*j,r[11]=P*M+F*X+b*nt+S*ht,r[15]=P*C+F*B+b*tt+S*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],f=t[2],u=t[6],d=t[10],_=t[14],x=t[3],w=t[7],g=t[11],p=t[15],P=c*_-h*d,F=a*_-h*u,b=a*d-c*u,S=o*_-h*f,T=o*d-c*f,U=o*u-a*f;return e*(w*P-g*F+p*b)-i*(x*P-g*S+p*T)+s*(x*F-w*S+p*U)-r*(x*b-w*T+g*U)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],h=t[6],f=t[10];return e*(o*f-a*h)-i*(r*f-a*c)+s*(r*h-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],f=t[8],u=t[9],d=t[10],_=t[11],x=t[12],w=t[13],g=t[14],p=t[15],P=e*a-i*o,F=e*c-s*o,b=e*h-r*o,S=i*c-s*a,T=i*h-r*a,U=s*h-r*c,M=f*w-u*x,C=f*g-d*x,I=f*p-_*x,D=u*g-d*w,X=u*p-_*w,B=d*p-_*g,k=P*B-F*X+b*D+S*I-T*C+U*M;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/k;return t[0]=(a*B-c*X+h*D)*q,t[1]=(s*X-i*B-r*D)*q,t[2]=(w*U-g*T+p*S)*q,t[3]=(d*T-u*U-_*S)*q,t[4]=(c*I-o*B-h*C)*q,t[5]=(e*B-s*I+r*C)*q,t[6]=(g*b-x*U-p*F)*q,t[7]=(f*U-d*b+_*F)*q,t[8]=(o*X-a*I+h*M)*q,t[9]=(i*I-e*X-r*M)*q,t[10]=(x*T-w*b+p*P)*q,t[11]=(u*b-f*T-_*P)*q,t[12]=(a*C-o*D-c*M)*q,t[13]=(e*D-i*C+s*M)*q,t[14]=(w*F-x*S-g*P)*q,t[15]=(f*S-u*F+d*P)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,h=r*o,f=r*a;return this.set(h*o+i,h*a-s*c,h*c+s*a,0,h*a+s*c,f*a+i,f*c-s*o,0,h*c-s*a,f*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,f=o+o,u=a+a,d=r*h,_=r*f,x=r*u,w=o*f,g=o*u,p=a*u,P=c*h,F=c*f,b=c*u,S=i.x,T=i.y,U=i.z;return s[0]=(1-(w+p))*S,s[1]=(_+b)*S,s[2]=(x-F)*S,s[3]=0,s[4]=(_-b)*T,s[5]=(1-(d+p))*T,s[6]=(g+P)*T,s[7]=0,s[8]=(x+F)*U,s[9]=(g-P)*U,s[10]=(1-(d+w))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ps.set(s[0],s[1],s[2]).length(),a=ps.set(s[4],s[5],s[6]).length(),c=ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kn.copy(this);let h=1/o,f=1/a,u=1/c;return kn.elements[0]*=h,kn.elements[1]*=h,kn.elements[2]*=h,kn.elements[4]*=f,kn.elements[5]*=f,kn.elements[6]*=f,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=Vn,c=!1){let h=this.elements,f=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),_=(i+s)/(i-s),x,w;if(c)x=r/(o-r),w=o*r/(o-r);else if(a===Vn)x=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===fr)x=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Vn,c=!1){let h=this.elements,f=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),_=-(i+s)/(i-s),x,w;if(c)x=1/(o-r),w=o/(o-r);else if(a===Vn)x=-2/(o-r),w=-(o+r)/(o-r);else if(a===fr)x=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=x,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fa.prototype.isMatrix4=!0;var Fe=fa,ps=new J,kn=new Fe,Op=new J(0,0,0),Bp=new J(1,1,1),Ai=new J,lo=new J,vn=new J,ou=new Fe,au=new ni,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],f=s[9],u=s[2],d=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,_),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ou,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,lu=new J,ms=new ni,ui=new Fe,co=new J,nr=new J,Vp=new J,Gp=new ni,cu=new J(1,0,0),hu=new J(0,1,0),uu=new J(0,0,1),fu={type:"added"},Hp={type:"removed"},gs={type:"childadded",child:null},Gl={type:"childremoved",child:null},Mn=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new Ii,i=new ni,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Jt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?co.copy(t):co.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(nr,co,this.up):ui.lookAt(co,nr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ui),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),gs.child=t,this.dispatchEvent(gs),gs.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),f=o(t.images),u=o(t.shapes),d=o(t.skeletons),_=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let c=[];for(let h in a){let f=a[h];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wp={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,i),p=this._getHandJoint(h,w);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let f=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=f.position.distanceTo(u.position),_=.02,x=.005;h.inputState.pinching&&d>_+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=_-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Hl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=Np(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Hl(o,r,t+1/3),this.g=Hl(o,r,t),this.b=Hl(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=af[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ce.workingToColorSpace(rn.copy(this),t),Math.round(fe(rn.r*255,0,255))*65536+Math.round(fe(rn.g*255,0,255))*256+Math.round(fe(rn.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(rn.copy(this),e);let i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,h,f=(a+o)/2;if(a===o)c=0,h=0;else{let u=o-a;switch(h=f<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=f,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ge){ce.workingToColorSpace(rn.copy(this),t);let e=rn.r,i=rn.g,s=rn.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(ho);let i=kl(Ei.h,ho.h,e),s=kl(Ei.s,ho.s,e),r=kl(Ei.l,ho.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Kt;Kt.NAMES=af;var xr=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new J,fi=new J,Wl=new J,di=new J,xs=new J,_s=new J,du=new J,Xl=new J,ql=new J,$l=new J,Yl=new Ne,Zl=new Ne,Jl=new Ne,gi=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){On.subVectors(s,e),fi.subVectors(i,e),Wl.subVectors(t,e);let o=On.dot(On),a=On.dot(fi),c=On.dot(Wl),h=fi.dot(fi),f=fi.dot(Wl),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,_=(h*c-a*f)*d,x=(o*f-a*c)*d;return r.set(1-_-x,x,_)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Yl.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),Yl.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,i),Jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yl,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),fi.subVectors(t,e),On.cross(fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),On.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,i),_s.subVectors(r,i),Xl.subVectors(t,i);let c=xs.dot(Xl),h=_s.dot(Xl);if(c<=0&&h<=0)return e.copy(i);ql.subVectors(t,s);let f=xs.dot(ql),u=_s.dot(ql);if(f>=0&&u<=f)return e.copy(s);let d=c*u-f*h;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(i).addScaledVector(xs,o);$l.subVectors(t,r);let _=xs.dot($l),x=_s.dot($l);if(x>=0&&_<=x)return e.copy(r);let w=_*h-c*x;if(w<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(i).addScaledVector(_s,a);let g=f*x-_*u;if(g<=0&&u-f>=0&&_-x>=0)return du.subVectors(r,s),a=(u-f)/(u-f+(_-x)),e.copy(s).addScaledVector(du,a);let p=1/(g+w+d);return o=w*p,a=d*p,e.copy(i).addScaledVector(xs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),fo.subVectors(this.max,ir),ys.subVectors(t.a,ir),vs.subVectors(t.b,ir),bs.subVectors(t.c,ir),Ti.subVectors(vs,ys),Ci.subVectors(bs,vs),ts.subVectors(ys,bs);let e=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-ts.z,ts.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,ts.z,0,-ts.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-ts.y,ts.x,0];return!Kl(e,ys,vs,bs,fo)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,ys,vs,bs,fo))?!1:(po.crossVectors(Ti,Ci),e=[po.x,po.y,po.z],Kl(e,ys,vs,bs,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pi=[new J,new J,new J,new J,new J,new J,new J,new J],Bn=new J,uo=new ii,ys=new J,vs=new J,bs=new J,Ti=new J,Ci=new J,ts=new J,ir=new J,fo=new J,po=new J,es=new J;function Kl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=t.dot(es),h=e.dot(es),f=i.dot(es);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>a)return!1}return!0}var Ve=new J,mo=new re,Xp=0,Ye=class extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var yr=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Rn=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},qp=new ii,sr=new J,jl=new J,Us=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):qp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(jl)),this.expandByPoint(sr.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$p=0,Cn=new Fe,Ql=new Mn,Ms=new J,bn=new ii,rr=new ii,Ke=new J,Sn=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lp(t)?yr:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(bn.min,rr.min),bn.expandByPoint(Ke),Ke.addVectors(bn.max,rr.max),bn.expandByPoint(Ke)):(bn.expandByPoint(rr.min),bn.expandByPoint(rr.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)Ke.fromBufferAttribute(a,h),c&&(Ms.fromBufferAttribute(t,h),Ke.add(Ms)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new J,c[M]=new J;let h=new J,f=new J,u=new J,d=new re,_=new re,x=new re,w=new J,g=new J;function p(M,C,I){h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,I),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,C),x.fromBufferAttribute(r,I),f.sub(h),u.sub(h),_.sub(d),x.sub(d);let D=1/(_.x*x.y-x.x*_.y);isFinite(D)&&(w.copy(f).multiplyScalar(x.y).addScaledVector(u,-_.y).multiplyScalar(D),g.copy(u).multiplyScalar(_.x).addScaledVector(f,-x.x).multiplyScalar(D),a[M].add(w),a[C].add(w),a[I].add(w),c[M].add(g),c[C].add(g),c[I].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let M=0,C=P.length;M<C;++M){let I=P[M],D=I.start,X=I.count;for(let B=D,k=D+X;B<k;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let F=new J,b=new J,S=new J,T=new J;function U(M){S.fromBufferAttribute(s,M),T.copy(S);let C=a[M];F.copy(C),F.sub(S.multiplyScalar(S.dot(C))).normalize(),b.crossVectors(T,C);let D=b.dot(c[M])<0?-1:1;o.setXYZW(M,F.x,F.y,F.z,D)}for(let M=0,C=P.length;M<C;++M){let I=P[M],D=I.start,X=I.count;for(let B=D,k=D+X;B<k;B+=3)U(t.getX(B+0)),U(t.getX(B+1)),U(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);let s=new J,r=new J,o=new J,a=new J,c=new J,h=new J,f=new J,u=new J;if(t)for(let d=0,_=t.count;d<_;d+=3){let x=t.getX(d+0),w=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,g),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,g),a.add(f),c.add(f),h.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,_=e.count;d<_;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let h=a.array,f=a.itemSize,u=a.normalized,d=new h.constructor(c.length*f),_=0,x=0;for(let w=0,g=c.length;w<g;w++){a.isInterleavedBufferAttribute?_=c[w]*a.data.stride+a.offset:_=c[w]*f;for(let p=0;p<f;p++)d[x++]=h[_++]}return new Ye(d,f,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let f=0,u=h.length;f<u;f++){let d=h[f],_=t(d,i);c.push(_)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],f=[];for(let u=0,d=h.length;u<d;u++){let _=h[u];f.push(_.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],u=r[h];for(let d=0,_=u.length;d<_;d++)f.push(u[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,f=o.length;h<f;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},cn=new J,vr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tc=new J,Yp=new J,Zp=new Jt,zn=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=tc.subVectors(i,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jp=0,Li=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=ks,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new zn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_i=class extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,or=new J,ws=new J,As=new J,Es=new re,ar=new re,lf=new Fe,go=new J,lr=new J,xo=new J,pu=new re,ec=new re,mu=new re,Di=class extends Mn{constructor(t=new _i){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Sn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $o(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new vr(i,3,0,!1)),Ss.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new re(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;_o(go.set(-.5,-.5,0),As,o,ws,s,r),_o(lr.set(.5,-.5,0),As,o,ws,s,r),_o(xo.set(.5,.5,0),As,o,ws,s,r),pu.set(0,0),ec.set(1,0),mu.set(1,1);let a=t.ray.intersectTriangle(go,lr,xo,!1,or);if(a===null&&(_o(lr.set(-.5,.5,0),As,o,ws,s,r),ec.set(0,1),a=t.ray.intersectTriangle(go,xo,lr,!1,or),a===null))return;let c=t.ray.origin.distanceTo(or);c<t.near||c>t.far||e.push({distance:c,point:or.clone(),uv:gi.getInterpolation(or,go,lr,xo,pu,ec,mu,new re),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _o(n,t,e,i,s,r){Es.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ar.x=r*Es.x-s*Es.y,ar.y=s*Es.x+r*Es.y):ar.copy(Es),n.copy(t),n.x+=ar.x,n.y+=ar.y,n.applyMatrix4(lf)}var mi=new J,nc=new J,yo=new J,vo=new J,Yo=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nc.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),vo.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),a=vo.dot(this.direction),c=-vo.dot(yo),h=vo.lengthSq(),f=Math.abs(1-o*o),u,d,_,x;if(f>0)if(u=o*c-a,d=o*a-c,x=r*f,u>=0)if(d>=-x)if(d<=x){let w=1/f;u*=w,d*=w,_=u*(u+o*d+2*a)+d*(o*u+d+2*c)+h}else d=r,u=Math.max(0,-(o*d+a)),_=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(o*d+a)),_=-u*u+d*(d+2*c)+h;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),_=-u*u+d*(d+2*c)+h):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),_=d*(d+2*c)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),_=-u*u+d*(d+2*c)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),_=-u*u+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nc).addScaledVector(yo,d),_}intersectSphere(t,e){if(t.radius<0)return null;mi.subVectors(t.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,h=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),f>=0?(r=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,h=a.y,f=a.z,u=t.x-o.x,d=t.y-o.y,_=t.z-o.z,x=e.x-o.x,w=e.y-o.y,g=e.z-o.z,p=i.x-o.x,P=i.y-o.y,F=i.z-o.z,b=Math.abs(c),S=Math.abs(h),T=Math.abs(f),U,M,C,I,D,X,B,k,q,nt,tt,Q;if(b>=S&&b>=T?(C=c,X=u,q=x,Q=p,c>=0?(U=h,M=f,I=d,D=_,B=w,k=g,nt=P,tt=F):(U=f,M=h,I=_,D=d,B=g,k=w,nt=F,tt=P)):S>=T?(C=h,X=d,q=w,Q=P,h>=0?(U=f,M=c,I=_,D=u,B=g,k=x,nt=F,tt=p):(U=c,M=f,I=u,D=_,B=x,k=g,nt=p,tt=F)):(C=f,X=_,q=g,Q=F,f>=0?(U=c,M=h,I=u,D=d,B=x,k=w,nt=p,tt=P):(U=h,M=c,I=d,D=u,B=w,k=x,nt=P,tt=p)),C===0)return null;let j=U/C,ht=M/C,dt=1/C,kt=I-j*X,zt=D-ht*X,Me=B-j*q,te=k-ht*q,de=nt-j*Q,rt=tt-ht*Q,ut=de*te-rt*Me,Pt=kt*rt-zt*de,qt=Me*zt-te*kt;if(s){if(ut<0||Pt<0||qt<0)return null}else if((ut<0||Pt<0||qt<0)&&(ut>0||Pt>0||qt>0))return null;let Tt=ut+Pt+qt;if(Tt===0)return null;let ee=dt*(ut*X+Pt*q+qt*Q);return(Tt>0?ee<0:ee>0)?null:this.at(ee/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gu=new Fe,ns=new Yo,bo=new Us,xu=new J,Mo=new J,So=new J,wo=new J,ic=new J,Ao=new J,_u=new J,Eo=new J,Le=class extends Mn{constructor(t=new Sn,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let f=a[c],u=r[c];f!==0&&(ic.fromBufferAttribute(u,t),o?Ao.addScaledVector(ic,f):Ao.addScaledVector(ic.sub(e),f))}e.add(Ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(bo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(bo,xu)===null||ns.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(gu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(gu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,d=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,w=d.length;x<w;x++){let g=d[x],p=o[g.materialIndex],P=Math.max(g.start,_.start),F=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let b=P,S=F;b<S;b+=3){let T=a.getX(b),U=a.getX(b+1),M=a.getX(b+2);s=To(this,p,t,i,h,f,u,T,U,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,_.start),w=Math.min(a.count,_.start+_.count);for(let g=x,p=w;g<p;g+=3){let P=a.getX(g),F=a.getX(g+1),b=a.getX(g+2);s=To(this,o,t,i,h,f,u,P,F,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,w=d.length;x<w;x++){let g=d[x],p=o[g.materialIndex],P=Math.max(g.start,_.start),F=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let b=P,S=F;b<S;b+=3){let T=b,U=b+1,M=b+2;s=To(this,p,t,i,h,f,u,T,U,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,_.start),w=Math.min(c.count,_.start+_.count);for(let g=x,p=w;g<p;g+=3){let P=g,F=g+1,b=g+2;s=To(this,o,t,i,h,f,u,P,F,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Kp(n,t,e,i,s,r,o,a){let c;if(t.side===fn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Oi,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:n}}function To(n,t,e,i,s,r,o,a,c,h){n.getVertexPosition(a,Mo),n.getVertexPosition(c,So),n.getVertexPosition(h,wo);let f=Kp(n,t,e,i,Mo,So,wo,_u);if(f){let u=new J;gi.getBarycoord(_u,Mo,So,wo,u),s&&(f.uv=gi.getInterpolatedAttribute(s,a,c,h,u,new re)),r&&(f.uv1=gi.getInterpolatedAttribute(r,a,c,h,u,new re)),o&&(f.normal=gi.getInterpolatedAttribute(o,a,c,h,u,new J),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new J,materialIndex:0};gi.getNormal(Mo,So,wo,d.normal),f.face=d,f.barycoord=u}return f}var Zo=class extends hn{constructor(t=null,e=1,i=1,s,r,o,a,c,h=je,f=je,u,d){super(null,o,a,c,h,f,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=new Us,jp=new re(.5,.5),Co=new J,br=class{constructor(t=new zn,e=new zn,i=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],f=r[4],u=r[5],d=r[6],_=r[7],x=r[8],w=r[9],g=r[10],p=r[11],P=r[12],F=r[13],b=r[14],S=r[15];if(s[0].setComponents(h-o,_-f,p-x,S-P).normalize(),s[1].setComponents(h+o,_+f,p+x,S+P).normalize(),s[2].setComponents(h+a,_+u,p+w,S+F).normalize(),s[3].setComponents(h-a,_-u,p-w,S-F).normalize(),i)s[4].setComponents(c,d,g,b).normalize(),s[5].setComponents(h-c,_-d,p-g,S-b).normalize();else if(s[4].setComponents(h-c,_-d,p-g,S-b).normalize(),e===Vn)s[5].setComponents(h+c,_+d,p+g,S+b).normalize();else if(e===fr)s[5].setComponents(c,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=jp.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends hn{constructor(t=[],e=Bi,i,s,r,o,a,c,h,f){super(t,e,i,s,r,o,a,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pn=class extends hn{constructor(t,e,i,s,r,o,a,c,h){super(t,e,i,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends hn{constructor(t,e,i=Hn,s,r,o,a=je,c=je,h,f=ti,u=1){if(f!==ti&&f!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,f,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends Ni{constructor(t,e=Hn,i=Bi,s,r,o=je,a=je,c,h=ti){let f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,i,s,r,o,a,c,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sr=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},un=class n extends Sn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],f=[],u=[],d=0,_=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Rn(h,3)),this.setAttribute("normal",new Rn(f,3)),this.setAttribute("uv",new Rn(u,2));function x(w,g,p,P,F,b,S,T,U,M,C){let I=b/U,D=S/M,X=b/2,B=S/2,k=T/2,q=U+1,nt=M+1,tt=0,Q=0,j=new J;for(let ht=0;ht<nt;ht++){let dt=ht*D-B;for(let kt=0;kt<q;kt++){let zt=kt*I-X;j[w]=zt*P,j[g]=dt*F,j[p]=k,h.push(j.x,j.y,j.z),j[w]=0,j[g]=0,j[p]=T>0?1:-1,f.push(j.x,j.y,j.z),u.push(kt/U),u.push(1-ht/M),tt+=1}}for(let ht=0;ht<M;ht++)for(let dt=0;dt<U;dt++){let kt=d+dt+q*ht,zt=d+dt+q*(ht+1),Me=d+(dt+1)+q*(ht+1),te=d+(dt+1)+q*ht;c.push(kt,zt,te),c.push(zt,Me,te),Q+=6}a.addGroup(_,Q,C),_+=Q,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wr=class n extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),h=a+1,f=c+1,u=t/a,d=e/c,_=[],x=[],w=[],g=[];for(let p=0;p<f;p++){let P=p*d-o;for(let F=0;F<h;F++){let b=F*u-r;x.push(b,-P,0),w.push(0,0,1),g.push(F/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let P=0;P<a;P++){let F=P+h*p,b=P+h*(p+1),S=P+1+h*(p+1),T=P+1+h*p;_.push(F,b,T),_.push(b,S,T)}this.setIndex(_),this.setAttribute("position",new Rn(x,3)),this.setAttribute("normal",new Rn(w,3)),this.setAttribute("uv",new Rn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function as(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(yu(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(yu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ln(n){let t={};for(let e=0;e<n.length;e++){let i=as(n[e]);for(let s in i)t[s]=i[s]}return t}function yu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var cf={clone:as,merge:ln},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ko=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jo=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ts(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function sc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ui=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends Ui{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ac:r=t,a=2*e-i;break;case lc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ac:o=t,c=2*i-e;break;case lc:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let h=(i-e)*.5,f=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,f=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,_=this._weightNext,x=(i-e)/(s-e),w=x*x,g=w*x,p=-d*g+2*d*w-d*x,P=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*x+1,F=(-1-_)*g+(1.5+_)*w+.5*x,b=_*g-_*w;for(let S=0;S!==a;++S)r[S]=p*o[f+S]+P*o[h+S]+F*o[c+S]+b*o[u+S];return r}},ea=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,f=(i-e)/(s-e),u=1-f;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[c+d]*f;return r}},na=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ia=class extends Ui{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let x=(i-e)/(s-e),w=1-x;for(let g=0;g!==a;++g)r[g]=o[h+g]*w+o[c+g]*x;return r}let d=a*2,_=t-1;for(let x=0;x!==a;++x){let w=o[h+x],g=o[c+x],p=_*d+x*2,P=u[p],F=u[p+1],b=t*d+x*2,S=f[b],T=f[b+1],U=im(i,e,P,S,s);r[x]=hf(U,w,F,T,g)}return r}};function hf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function nm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function im(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=hf(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=nm(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var wn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),sc(t.settings)&&(i.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case rc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;sc(this.settings)&&(vu(this.settings.inTangents,t),vu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Wt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Wt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Dp(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){Wt("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],f=t[a+1];if(h!==f&&(a!==1||h!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,_=u+i;for(let x=0;x!==i;++x){let w=e[u+x];if(w!==e[d+x]||w!==e[_+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let _=0;_!==i;++_)e[d+_]=e[u+_]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,h=0;h!==i;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,sc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Go;var Fi=class extends wn{constructor(t,e,i){super(t,e,i)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=cr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends wn{constructor(t,e,i,s){super(t,e,i,s)}};sa.prototype.ValueTypeName="color";var ra=class extends wn{constructor(t,e,i,s){super(t,e,i,s)}};ra.prototype.ValueTypeName="number";var oa=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),h=t*a;for(let f=h+a;h!==f;h+=4)ni.slerpFlat(r,0,o,h-a,o,h,c);return r}},Ar=class extends wn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends wn{constructor(t,e,i){super(t,e,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=cr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends wn{constructor(t,e,i,s){super(t,e,i,s)}};aa.prototype.ValueTypeName="vector";var la=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return h.push(f,u),this},this.removeHandler=function(f){let u=h.indexOf(f);return u!==-1&&h.splice(u,2),this},this.getHandler=function(f){for(let u=0,d=h.length;u<d;u+=2){let _=h[u],x=h[u+1];if(_.global&&(_.lastIndex=0),_.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uf=new la,ca=class{constructor(t){this.manager=t!==void 0?t:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ro=new J,Po=new ni,Kn=new J,Er=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Po,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ro,Po,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new J,bu=new re,Mu=new re,on=class extends Er{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Mu),e.subVectors(Mu,bu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/h,s*=o.width/c,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Tr=class extends Er{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Cs=-90,Rs=1,ha=class extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Cs,Rs,t,e);s.layers=this.layers,this.add(s);let r=new on(Cs,Rs,t,e);r.layers=this.layers,this.add(r);let o=new on(Cs,Rs,t,e);o.layers=this.layers,this.add(o);let a=new on(Cs,Rs,t,e);a.layers=this.layers,this.add(a);let c=new on(Cs,Rs,t,e);c.layers=this.layers,this.add(c);let h=new on(Cs,Rs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,f]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,d,_),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ua=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kc="\\[\\]\\.:\\/",sm=new RegExp("["+kc+"]","g"),Oc="[^"+kc+"]",rm="[^"+kc.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",Oc),am=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),hm=new RegExp("^"+om+am+lm+cm+"$"),um=["material","materials","bones","map"],cc=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);um.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=cc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var Wc=class Wc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Wc.prototype.isMatrix2=!0;var hc=Wc;function Bc(n,t,e,i){let s=fm(i);switch(e){case Pc:return n*t;case Lc:return n*t/s.components*s.byteLength;case ya:return n*t/s.components*s.byteLength;case Gi:return n*t*2/s.components*s.byteLength;case va:return n*t*2/s.components*s.byteLength;case Ic:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case ba:return n*t*4/s.components*s.byteLength;case Ir:case Lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Aa:return Math.max(n,16)*Math.max(t,8)/4;case Ma:case wa:return Math.max(n,8)*Math.max(t,8)/2;case Ea:case Ta:case Ra:case Pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ur:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qa:case $a:case Ya:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Za:case Ja:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fr:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fm(n){switch(n){case An:case Ec:return{byteLength:1,components:1};case Os:case Tc:case Xn:return{byteLength:2,components:1};case xa:case _a:return{byteLength:2,components:4};case Hn:case ga:case Wn:return{byteLength:4,components:1};case Cc:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Df(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function pm(n){let t=new WeakMap;function e(a,c){let h=a.array,f=a.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,h,f),a.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,h){let f=c.array,u=c.updateRanges;if(n.bindBuffer(h,a),u.length===0)n.bufferSubData(h,0,f);else{u.sort((_,x)=>_.start-x.start);let d=0;for(let _=1;_<u.length;_++){let x=u[d],w=u[_];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++d,u[d]=w)}u.length=d+1;for(let _=0,x=u.length;_<x;_++){let w=u[_];n.bufferSubData(h,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cm=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
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
#endif`,d0=`uniform sampler2D dfgLUT;
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
}`,p0=`
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,qg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:xm,alphamap_pars_fragment:_m,alphatest_fragment:ym,alphatest_pars_fragment:vm,aomap_fragment:bm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:wm,begin_vertex:Am,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Cm,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:Nm,color_pars_fragment:Um,color_pars_vertex:Fm,color_vertex:km,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Gm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:qm,envmap_fragment:$m,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Zm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:a0,envmap_vertex:Km,fog_vertex:jm,fog_pars_vertex:Qm,fog_fragment:t0,fog_pars_fragment:e0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:f0,lights_physical_pars_fragment:d0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,lightprobes_pars_fragment:x0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:b0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:w0,map_particle_pars_fragment:A0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:T0,morphinstance_vertex:C0,morphcolor_vertex:R0,morphnormal_vertex:P0,morphtarget_pars_vertex:I0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:N0,normal_pars_fragment:U0,normal_pars_vertex:F0,normal_vertex:k0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:G0,opaque_fragment:H0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:$0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:j0,shadowmap_vertex:Q0,shadowmask_pars_fragment:tg,skinbase_vertex:eg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:fg,uv_vertex:dg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:xg,backgroundCube_frag:_g,cube_vert:yg,cube_frag:vg,depth_vert:bg,depth_frag:Mg,distance_vert:Sg,distance_frag:wg,equirect_vert:Ag,equirect_frag:Eg,linedashed_vert:Tg,linedashed_frag:Cg,meshbasic_vert:Rg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ng,meshnormal_vert:Ug,meshnormal_frag:Fg,meshphong_vert:kg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:Vg,meshtoon_frag:Gg,points_vert:Hg,points_frag:Wg,shadow_vert:Xg,shadow_frag:qg,sprite_vert:$g,sprite_frag:Yg},wt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},oi={basic:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:ln([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:ln([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:ln([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:ln([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:ln([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:ln([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:ln([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:ln([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:ln([wt.common,wt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:ln([wt.lights,wt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};oi.physical={uniforms:ln([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var tl={r:0,b:0,g:0},Zg=new Fe,Nf=new Jt;Nf.set(-1,0,0,0,1,0,0,0,1);function Jg(n,t,e,i,s,r){let o=new Kt(0),a=s===!0?0:1,c,h,f=null,u=0,d=null;function _(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){let b=P.backgroundBlurriness>0;F=t.get(F,b)}return F}function x(P){let F=!1,b=_(P);b===null?g(o,a):b&&b.isColor&&(g(b,1),F=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(P,F){let b=_(F);b&&(b.isCubeTexture||b.mapping===Rr)?(h===void 0&&(h=new Le(new un(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:as(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Nf),h.material.toneMapped=ce.getTransfer(b.colorSpace)!==ve,(f!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Le(new wr(2,2),new an({name:"BackgroundMaterial",uniforms:as(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.toneMapped=ce.getTransfer(b.colorSpace)!==ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null))}function g(P,F){P.getRGB(tl,Fc(n)),e.buffers.color.setClear(tl.r,tl.g,tl.b,F,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,F=1){o.set(P),a=F,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,g(o,a)},render:x,addToRenderList:w,dispose:p}}function Kg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(D,X,B,k,q){let nt=!1,tt=u(D,k,B,X);r!==tt&&(r=tt,h(r.object)),nt=_(D,k,B,q),nt&&x(D,k,B,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,b(D,X,B,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return n.createVertexArray()}function h(D){return n.bindVertexArray(D)}function f(D){return n.deleteVertexArray(D)}function u(D,X,B,k){let q=k.wireframe===!0,nt=i[X.id];nt===void 0&&(nt={},i[X.id]=nt);let tt=D.isInstancedMesh===!0?D.id:0,Q=nt[tt];Q===void 0&&(Q={},nt[tt]=Q);let j=Q[B.id];j===void 0&&(j={},Q[B.id]=j);let ht=j[q];return ht===void 0&&(ht=d(c()),j[q]=ht),ht}function d(D){let X=[],B=[],k=[];for(let q=0;q<e;q++)X[q]=0,B[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:B,attributeDivisors:k,object:D,attributes:{},index:null}}function _(D,X,B,k){let q=r.attributes,nt=X.attributes,tt=0,Q=B.getAttributes();for(let j in Q)if(Q[j].location>=0){let dt=q[j],kt=nt[j];if(kt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(kt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(kt=D.instanceColor)),dt===void 0||dt.attribute!==kt||kt&&dt.data!==kt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==k}function x(D,X,B,k){let q={},nt=X.attributes,tt=0,Q=B.getAttributes();for(let j in Q)if(Q[j].location>=0){let dt=nt[j];dt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(dt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(dt=D.instanceColor));let kt={};kt.attribute=dt,dt&&dt.data&&(kt.data=dt.data),q[j]=kt,tt++}r.attributes=q,r.attributesNum=tt,r.index=k}function w(){let D=r.newAttributes;for(let X=0,B=D.length;X<B;X++)D[X]=0}function g(D){p(D,0)}function p(D,X){let B=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;B[D]=1,k[D]===0&&(n.enableVertexAttribArray(D),k[D]=1),q[D]!==X&&(n.vertexAttribDivisor(D,X),q[D]=X)}function P(){let D=r.newAttributes,X=r.enabledAttributes;for(let B=0,k=X.length;B<k;B++)X[B]!==D[B]&&(n.disableVertexAttribArray(B),X[B]=0)}function F(D,X,B,k,q,nt,tt){tt===!0?n.vertexAttribIPointer(D,X,B,q,nt):n.vertexAttribPointer(D,X,B,k,q,nt)}function b(D,X,B,k){w();let q=k.attributes,nt=B.getAttributes(),tt=X.defaultAttributeValues;for(let Q in nt){let j=nt[Q];if(j.location>=0){let ht=q[Q];if(ht===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),ht!==void 0){let dt=ht.normalized,kt=ht.itemSize,zt=t.get(ht);if(zt===void 0)continue;let Me=zt.buffer,te=zt.type,de=zt.bytesPerElement,rt=te===n.INT||te===n.UNSIGNED_INT||ht.gpuType===ga;if(ht.isInterleavedBufferAttribute){let ut=ht.data,Pt=ut.stride,qt=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let Tt=0;Tt<j.locationSize;Tt++)p(j.location+Tt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)g(j.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Tt=0;Tt<j.locationSize;Tt++)F(j.location+Tt,kt/j.locationSize,te,dt,Pt*de,(qt+kt/j.locationSize*Tt)*de,rt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<j.locationSize;ut++)p(j.location+ut,ht.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<j.locationSize;ut++)g(j.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ut=0;ut<j.locationSize;ut++)F(j.location+ut,kt/j.locationSize,te,dt,kt*de,kt/j.locationSize*ut*de,rt)}}else if(tt!==void 0){let dt=tt[Q];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(j.location,dt);break;case 3:n.vertexAttrib3fv(j.location,dt);break;case 4:n.vertexAttrib4fv(j.location,dt);break;default:n.vertexAttrib1fv(j.location,dt)}}}}P()}function S(){C();for(let D in i){let X=i[D];for(let B in X){let k=X[B];for(let q in k){let nt=k[q];for(let tt in nt)f(nt[tt].object),delete nt[tt];delete k[q]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let X=i[D.id];for(let B in X){let k=X[B];for(let q in k){let nt=k[q];for(let tt in nt)f(nt[tt].object),delete nt[tt];delete k[q]}}delete i[D.id]}function U(D){for(let X in i){let B=i[X];for(let k in B){let q=B[k];if(q[D.id]===void 0)continue;let nt=q[D.id];for(let tt in nt)f(nt[tt].object),delete nt[tt];delete q[D.id]}}}function M(D){for(let X in i){let B=i[X],k=D.isInstancedMesh===!0?D.id:0,q=B[k];if(q!==void 0){for(let nt in q){let tt=q[nt];for(let Q in tt)f(tt[Q].object),delete tt[Q];delete q[nt]}delete B[k],Object.keys(B).length===0&&delete i[X]}}}function C(){I(),o=!0,r!==s&&(r=s,h(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:g,disableUnusedAttributes:P}}function jg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let _=0;_<f;_++)d+=h[_];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Ln&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let M=U===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==An&&U!==Wn&&!M&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=c(h);f!==h&&(Xt("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:b,maxSamples:S,samples:T}}function tx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new zn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let _=u.length!==0||d||i!==0||s;return s=d,i=u.length,_},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=f(u,d,0)},this.setState=function(u,d,_){let x=u.clippingPlanes,w=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||x===null||x.length===0||r&&!g)r?f(null):h();else{let P=r?0:i,F=P*4,b=p.clippingState||null;c.value=b,b=f(x,d,F,_);for(let S=0;S!==F;++S)b[S]=e[S];p.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,d,_,x){let w=u!==null?u.length:0,g=null;if(w!==0){if(g=c.value,x!==!0||g===null){let p=_+w*4,P=d.matrixWorldInverse;a.getNormalMatrix(P),(g===null||g.length<p)&&(g=new Float32Array(p));for(let F=0,b=_;F!==w;++F,b+=4)o.copy(u[F]).applyMatrix4(P,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var Vs=4,ex=6,nx=20,ix=256,kr=new Tr,ff=new Kt,Xc=null,qc=0,$c=0,Yc=!1,sx=new J,ls=new J,nl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=sx}=r;Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xc,qc,$c),this._renderer.xr.enabled=Yc,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:Xn,format:Ln,colorSpace:hr,depthBuffer:!1},s=df(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rx(r)),this._blurMaterial=ax(r,t,e),this._ggxMaterial=ox(r,t,e)}return s}_compileMaterial(t){let e=new Le(new Sn,t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,i,s,r){let c=new on(90,1,e,i),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,_=u.toneMapping;u.getClearColor(ff),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new un,new xn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,g=w.material,p=!1,P=t.background;P?P.isColor&&(g.color.copy(P),t.background=null,p=!0):(g.color.copy(ff),p=!0);for(let F=0;F<6;F++){let b=F%3;b===0?(c.up.set(0,h[F],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[F],r.y,r.z)):b===1?(c.up.set(0,0,h[F]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[F],r.z)):(c.up.set(0,h[F],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[F]));let S=this._cubeSize;zs(s,b*S,F>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(w,c),u.render(t,c)}u.toneMapping=_,u.autoClear=d,t.background=P}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Bi||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;zs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,kr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,h=i/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(h*h-f*f),d=h*1.25,_=u*d,{_lodMax:x}=this,w=this._sizeLods[i],g=3*w*(i>x-Vs?i-x+Vs:0),p=4*(this._cubeSize-w);c.envMap.value=t.texture,c.roughness.value=_,c.mipInt.value=x-e,zs(r,g,p,3*w,2*w),s.setRenderTarget(r),s.render(a,kr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,zs(t,g,p,3*w,2*w),s.setRenderTarget(t),s.render(a,kr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-Vs?s-this._lodMax+Vs:0),d=4*(this._cubeSize-f);zs(e,u,d,3*f,2*f),o.setRenderTarget(e),o.render(c,kr)}};function rx(n){let t=[],e=[],i=n,s=n-Vs+1+ex;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,h=1+a,f=[c,c,h,c,h,h,c,c,h,h,c,h],u=6,d=6,_=3,x=new Float32Array(_*d*u),w=new Float32Array(_*d*u);for(let p=0;p<u;p++){let P=p%3*2/3-1,F=p>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];x.set(b,_*d*p);for(let S=0;S<d;S++){let T=f[S*2]*2-1,U=f[S*2+1]*2-1;p===0?ls.set(1,U,T):p===1?ls.set(-T,1,-U):p===2?ls.set(-T,U,1):p===3?ls.set(-1,U,-T):p===4?ls.set(-T,-1,U):ls.set(T,U,-1),ls.toArray(w,(p*d+S)*_)}}let g=new Sn;g.setAttribute("position",new Ye(x,_)),g.setAttribute("outputDirection",new Ye(w,_)),e.push(new Le(g,null)),i>Vs&&i--}return{lodMeshes:e,sizeLods:t}}function df(n,t,e){let i=new gn(n,t,e);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ox(n,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function ax(n,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function pf(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function mf(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var il=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:si});r.uniforms.tEquirect.value=e;let o=new Le(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=He),new ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function lx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,_=!1){return d==null?null:_?o(d):r(d)}function r(d){if(d&&d.isTexture){let _=d.mapping;if(_===da||_===pa)if(t.has(d)){let x=t.get(d).texture;return a(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let w=new il(x.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",h),a(w.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let _=d.mapping,x=_===da||_===pa,w=_===Bi||_===os;if(x||w){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new nl(n)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let P=d.image;return x&&P&&P.height>0||w&&P&&c(P)?(i===null&&(i=new nl(n)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function a(d,_){return _===da?d.mapping=Bi:_===pa&&(d.mapping=os),d}function c(d){let _=0,x=6;for(let w=0;w<x;w++)d[w]!==void 0&&_++;return _===x}function h(d){let _=d.target;_.removeEventListener("dispose",h);let x=t.get(_);x!==void 0&&(t.delete(_),x.dispose())}function f(d){let _=d.target;_.removeEventListener("dispose",f);let x=e.get(_);x!==void 0&&(e.delete(_),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function cx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ss("WebGLRenderer: "+i+" extension not supported."),s}}}function hx(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];let _=r.get(d);_&&(t.remove(_),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)t.update(d[_],n.ARRAY_BUFFER)}function h(u){let d=[],_=u.index,x=u.attributes.position,w=0;if(x===void 0)return;if(_!==null){let P=_.array;w=_.version;for(let F=0,b=P.length;F<b;F+=3){let S=P[F+0],T=P[F+1],U=P[F+2];d.push(S,T,T,U,U,S)}}else{let P=x.array;w=x.version;for(let F=0,b=P.length/3-1;F<b;F+=3){let S=F+0,T=F+1,U=F+2;d.push(S,T,T,U,U,S)}}let g=new(x.count>=65535?yr:_r)(d,1);g.version=w;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function f(u){let d=r.get(u);if(d){let _=u.index;_!==null&&d.version<_.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function ux(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function h(u,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,u*o,_),e.update(d,i,_))}function f(u,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,_);let w=0;for(let g=0;g<_;g++)w+=d[g];e.update(w,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function fx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dx(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,c){let h=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,d=i.get(a);if(d===void 0||d.count!==u){let C=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],F=0;_===!0&&(F=1),x===!0&&(F=2),w===!0&&(F=3);let b=a.attributes.position.count*F,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*S*4*u),U=new mr(T,b,S,u);U.type=Wn,U.needsUpdate=!0;let M=F*4;for(let I=0;I<u;I++){let D=g[I],X=p[I],B=P[I],k=b*S*4*I;for(let q=0;q<D.count;q++){let nt=q*M;_===!0&&(s.fromBufferAttribute(D,q),T[k+nt+0]=s.x,T[k+nt+1]=s.y,T[k+nt+2]=s.z,T[k+nt+3]=0),x===!0&&(s.fromBufferAttribute(X,q),T[k+nt+4]=s.x,T[k+nt+5]=s.y,T[k+nt+6]=s.z,T[k+nt+7]=0),w===!0&&(s.fromBufferAttribute(B,q),T[k+nt+8]=s.x,T[k+nt+9]=s.y,T[k+nt+10]=s.z,T[k+nt+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new re(b,S)},i.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let w=0;w<h.length;w++)_+=h[w];let x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function px(n,t,e,i,s){let r=new WeakMap;function o(h){let f=s.render.frame,u=h.geometry,d=t.get(h,u);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==f&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){let _=h.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return d}function a(){r=new WeakMap}function c(h){let f=h.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var mx={[_c]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[bc]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function gx(n,t,e,i,s,r){let o=new gn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,h=new Sn;h.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rn([0,2,0,0,2,0],2));let f=new Ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Le(h,f),d=new Tr(-1,1,1,-1,0,1),_=null,x=null,w=!1,g,p=null,P=[],F=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),c!==null&&c.setSize(b,S);for(let T=0;T<P.length;T++){let U=P[T];U.setSize&&U.setSize(b,S)}},this.setEffects=function(b){P=b,F=P.length>0&&P[0].isRenderPass===!0;let S=o.width,T=o.height;P.length>0&&a===null&&(a=new gn(S,T,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(S,T,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<P.length;U++){let M=P[U];M.setSize&&M.setSize(S,T)}},this.begin=function(b,S){if(w||b.toneMapping===Gn&&P.length===0)return!1;if(p=S,S!==null){let T=S.width,U=S.height;(o.width!==T||o.height!==U)&&this.setSize(T,U)}return F===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Gn,!0},this.hasRenderPass=function(){return F},this.end=function(b,S){b.toneMapping=g,w=!0;let T=o,U=a;for(let M=0;M<P.length;M++){let C=P[M];C.enabled!==!1&&(C.render(b,U,T,S),C.needsSwap!==!1&&(T=U,U=U===a?c:a))}if(_!==b.outputColorSpace||x!==b.toneMapping){_=b.outputColorSpace,x=b.toneMapping,f.defines={},ce.getTransfer(_)===ve&&(f.defines.SRGB_TRANSFER="");let M=mx[x];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(p),b.render(u,d),p=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Uf=new hn,Kc=new Ni(1,1),Ff=new mr,kf=new qo,Of=new Mr,gf=[],xf=[],_f=new Float32Array(16),yf=new Float32Array(9),vf=new Float32Array(4);function Hs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ol(n,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function xx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function bx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),Je(e,i)}}function Mx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;yf.set(i),n.uniformMatrix3fv(this.addr,!1,yf),Je(e,i)}}function Sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;_f.set(i),n.uniformMatrix4fv(this.addr,!1,_f),Je(e,i)}}function wx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function Cx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function Ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function Lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kc.compareFunction=e.isReversedDepthBuffer()?Qa:ja,r=Kc):r=Uf,e.setTexture2D(t||r,s)}function Dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kf,s)}function Nx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Of,s)}function Ux(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ff,s)}function Fx(n){switch(n){case 5126:return xx;case 35664:return _x;case 35665:return yx;case 35666:return vx;case 35674:return bx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function kx(n,t){n.uniform1fv(this.addr,t)}function Ox(n,t){let e=Hs(t,this.size,2);n.uniform2fv(this.addr,e)}function Bx(n,t){let e=Hs(t,this.size,3);n.uniform3fv(this.addr,e)}function zx(n,t){let e=Hs(t,this.size,4);n.uniform4fv(this.addr,e)}function Vx(n,t){let e=Hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Gx(n,t){let e=Hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Hx(n,t){let e=Hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wx(n,t){n.uniform1iv(this.addr,t)}function Xx(n,t){n.uniform2iv(this.addr,t)}function qx(n,t){n.uniform3iv(this.addr,t)}function $x(n,t){n.uniform4iv(this.addr,t)}function Yx(n,t){n.uniform1uiv(this.addr,t)}function Zx(n,t){n.uniform2uiv(this.addr,t)}function Jx(n,t){n.uniform3uiv(this.addr,t)}function Kx(n,t){n.uniform4uiv(this.addr,t)}function jx(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Kc:o=Uf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qx(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kf,r[o])}function t_(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Of,r[o])}function e_(n,t,e){let i=this.cache,s=t.length,r=ol(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ff,r[o])}function n_(n){switch(n){case 5126:return kx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return Vx;case 35675:return Gx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return $x;case 5125:return Yx;case 36294:return Zx;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}var jc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}},Qc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}},th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function bf(n,t){n.seq.push(t),n.map[t.id]=t}function i_(n,t,e){let i=n.name,s=i.length;for(Zc.lastIndex=0;;){let r=Zc.exec(i),o=Zc.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){bf(e,h===void 0?new jc(a,n,t):new Qc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new th(a),bf(e,u)),e=u}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);i_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Mf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var s_=37297,r_=0;function o_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Sf=new Jt;function a_(n){ce._getMatrix(Sf,ce.workingColorSpace,n);let t=`mat3( ${Sf.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case ur:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+o_(n.getShaderSource(t),a)}else return r}function l_(n,t){let e=a_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var c_={[_c]:"Linear",[yc]:"Reinhard",[vc]:"Cineon",[bc]:"ACESFilmic",[Sc]:"AgX",[wc]:"Neutral",[Mc]:"Custom"};function h_(n,t){let e=c_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var el=new J;function u_(){ce.getLuminanceCoefficients(el);let n=el.x.toFixed(4),t=el.y.toFixed(4),e=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function d_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function p_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Br(n){return n!==""}function Af(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ef(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(n){return n.replace(m_,x_)}var g_=new Map;function x_(n,t){let e=se[t];if(e===void 0){let i=g_.get(t);if(i!==void 0)e=se[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return eh(e)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(n){return n.replace(__,y_)}function y_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var v_={[Cr]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function b_(n){return v_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M_={[Bi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function S_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":M_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var w_={[os]:"ENVMAP_MODE_REFRACTION"};function A_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":w_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E_={[xc]:"ENVMAP_BLENDING_MULTIPLY",[Wu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};function T_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":E_[n.combine]||"ENVMAP_BLENDING_NONE"}function C_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function R_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=b_(e),h=S_(e),f=A_(e),u=T_(e),d=C_(e),_=f_(e),x=d_(r),w=s.createProgram(),g,p,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Br).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(g=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?se.tonemapping_pars_fragment:"",e.toneMapping!==Gn?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,l_("linearToOutputTexel",e.outputColorSpace),u_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=eh(o),o=Af(o,e),o=Ef(o,e),a=eh(a),a=Af(a,e),a=Ef(a,e),o=Tf(o),a=Tf(a),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let F=P+g+o,b=P+p+a,S=Mf(s,s.VERTEX_SHADER,F),T=Mf(s,s.FRAGMENT_SHADER,b);s.attachShader(w,S),s.attachShader(w,T),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function U(D){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(w)||"",B=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",q=X.trim(),nt=B.trim(),tt=k.trim(),Q=!0,j=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,w,S,T);else{let ht=wf(s,S,"vertex"),dt=wf(s,T,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+ht+`
`+dt)}else q!==""?Xt("WebGLProgram: Program Info Log:",q):(nt===""||tt==="")&&(j=!1);j&&(D.diagnostics={runnable:Q,programLog:q,vertexShader:{log:nt,prefix:g},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(S),s.deleteShader(T),M=new Gs(s,w),C=p_(s,w)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(w,s_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r_++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=S,this.fragmentShader=T,this}var P_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ih(t),e.set(t,i)),i}},ih=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function I_(n){return n===Gi||n===Ur||n===Fr}function L_(n,t,e,i,s,r){let o=new gr,a=new nh,c=new Set,h=[],f=new Map,u=i.logarithmicDepthBuffer,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function w(M,C,I,D,X,B){let k=D.fog,q=X.geometry,nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,tt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Q=t.get(M.envMap||nt,tt),j=Q&&Q.mapping===Rr?Q.image.height:null,ht=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&Xt("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,kt=dt!==void 0?dt.length:0,zt=0;q.morphAttributes.position!==void 0&&(zt=1),q.morphAttributes.normal!==void 0&&(zt=2),q.morphAttributes.color!==void 0&&(zt=3);let Me,te,de,rt;if(ht){let Se=oi[ht];Me=Se.vertexShader,te=Se.fragmentShader}else{Me=M.vertexShader,te=M.fragmentShader;let Se=a.getVertexShaderStage(M),he=a.getFragmentShaderStage(M);a.update(M,Se,he),de=Se.id,rt=he.id}let ut=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),qt=X.isInstancedMesh===!0,Tt=X.isBatchedMesh===!0,ee=!!M.map,Ue=!!M.matcap,ne=!!Q,ae=!!M.aoMap,ye=!!M.lightMap,jt=!!M.bumpMap&&M.wireframe===!1,Ee=!!M.normalMap,Oe=!!M.displacementMap,Re=!!M.emissiveMap,oe=!!M.metalnessMap,Pe=!!M.roughnessMap,H=M.anisotropy>0,xe=M.clearcoat>0,me=M.dispersion>0,L=M.retroreflectivity>0,v=M.iridescence>0,O=M.sheen>0,W=M.transmission>0,it=H&&!!M.anisotropyMap,ot=xe&&!!M.clearcoatMap,ft=xe&&!!M.clearcoatNormalMap,et=xe&&!!M.clearcoatRoughnessMap,at=v&&!!M.iridescenceMap,bt=v&&!!M.iridescenceThicknessMap,It=O&&!!M.sheenColorMap,pt=O&&!!M.sheenRoughnessMap,gt=!!M.specularMap,Vt=!!M.specularColorMap,Ot=!!M.specularIntensityMap,Yt=W&&!!M.transmissionMap,z=W&&!!M.thicknessMap,Mt=!!M.gradientMap,ct=!!M.alphaMap,vt=M.alphaTest>0,At=!!M.alphaHash,mt=!!M.extensions,Bt=Gn;M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Bt=n.toneMapping);let Ut={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:Me,fragmentShader:te,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&X._colorsTexture!==null,instancing:qt,instancingColor:qt&&X.instanceColor!==null,instancingMorph:qt&&X.morphTexture!==null,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:Ue,envMap:ne,envMapMode:ne&&Q.mapping,envMapCubeUVHeight:j,aoMap:ae,lightMap:ye,bumpMap:jt,normalMap:Ee,displacementMap:Oe,emissiveMap:Re,normalMapObjectSpace:Ee&&M.normalMapType===Yu,normalMapTangentSpace:Ee&&M.normalMapType===Dc,packedNormalMap:Ee&&M.normalMapType===Dc&&I_(M.normalMap.format),metalnessMap:oe,roughnessMap:Pe,anisotropy:H,anisotropyMap:it,clearcoat:xe,clearcoatMap:ot,clearcoatNormalMap:ft,clearcoatRoughnessMap:et,dispersion:me,retroreflection:L,iridescence:v,iridescenceMap:at,iridescenceThicknessMap:bt,sheen:O,sheenColorMap:It,sheenRoughnessMap:pt,specularMap:gt,specularColorMap:Vt,specularIntensityMap:Ot,transmission:W,transmissionMap:Yt,thicknessMap:z,gradientMap:Mt,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:ct,alphaTest:vt,alphaHash:At,combine:M.combine,mapUv:ee&&x(M.map.channel),aoMapUv:ae&&x(M.aoMap.channel),lightMapUv:ye&&x(M.lightMap.channel),bumpMapUv:jt&&x(M.bumpMap.channel),normalMapUv:Ee&&x(M.normalMap.channel),displacementMapUv:Oe&&x(M.displacementMap.channel),emissiveMapUv:Re&&x(M.emissiveMap.channel),metalnessMapUv:oe&&x(M.metalnessMap.channel),roughnessMapUv:Pe&&x(M.roughnessMap.channel),anisotropyMapUv:it&&x(M.anisotropyMap.channel),clearcoatMapUv:ot&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(M.sheenRoughnessMap.channel),specularMapUv:gt&&x(M.specularMap.channel),specularColorMapUv:Vt&&x(M.specularColorMap.channel),specularIntensityMapUv:Ot&&x(M.specularIntensityMap.channel),transmissionMapUv:Yt&&x(M.transmissionMap.channel),thicknessMapUv:z&&x(M.thicknessMap.channel),alphaMapUv:ct&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ee||H),vertexNormals:!!q.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(ee||ct),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||q.attributes.normal===void 0&&Ee===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pt,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:zt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===ve,decodeVideoTextureEmissive:Re&&M.emissiveMap.isVideoTexture===!0&&ce.getTransfer(M.emissiveMap.colorSpace)===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:mt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&M.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function g(M){let C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)C.push(I),C.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(p(C,M),P(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function p(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function P(M,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function F(M){let C=_[M.type],I;if(C){let D=oi[C];I=cf.clone(D.uniforms)}else I=M.uniforms;return I}function b(M,C){let I=f.get(C);return I!==void 0?++I.usedTimes:(I=new R_(n,C,M,s),h.push(I),f.set(C,I)),I}function S(M){if(--M.usedTimes===0){let C=h.indexOf(M);h[C]=h[h.length-1],h.pop(),f.delete(M.cacheKey),M.destroy()}}function T(M){a.remove(M)}function U(){a.dispose()}return{getParameters:w,getProgramCacheKey:g,getUniforms:F,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:U}}function D_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function N_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Rf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function a(d,_,x,w,g,p){let P=n[t];return P===void 0?(P={id:d.id,object:d,geometry:_,material:x,materialVariant:o(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:p},n[t]=P):(P.id=d.id,P.object=d,P.geometry=_,P.material=x,P.materialVariant=o(d),P.groupOrder=w,P.renderOrder=d.renderOrder,P.z=g,P.group=p),t++,P}function c(d,_,x,w,g,p,P){P.reversedDepth===!0&&(g=-g);let F=a(d,_,x,w,g,p);x.transmission>0?i.push(F):x.transparent===!0?s.push(F):e.push(F)}function h(d,_,x,w,g,p){let P=a(d,_,x,w,g,p);x.transmission>0?i.unshift(P):x.transparent===!0?s.unshift(P):e.unshift(P)}function f(d,_){e.length>1&&e.sort(d||N_),i.length>1&&i.sort(_||Rf),s.length>1&&s.sort(_||Rf)}function u(){for(let d=t,_=n.length;d<_;d++){let x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:h,finish:u,sort:f}}function U_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Pf,n.set(i,[o])):s>=r.length?(o=new Pf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function F_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Kt};break;case"SpotLight":e={position:new J,direction:new J,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function k_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var O_=0;function B_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function z_(n){let t=new F_,e=k_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new J);let s=new J,r=new Fe,o=new Fe;function a(h){let f=0,u=0,d=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,x=0,w=0,g=0,p=0,P=0,F=0,b=0,S=0,T=0,U=0,M=0,C=0,I=0;h.sort(B_);for(let X=0,B=h.length;X<B;X++){let k=h[X],q=k.color,nt=k.intensity,tt=k.distance,Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Gi?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)f+=q.r*nt,u+=q.g*nt,d+=q.b*nt;else if(k.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(k.sh.coefficients[j],nt);I++}else if(k.isSunLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ht=k.shadow,dt=e.get(k);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),i.sunShadow[x]=dt,i.sunShadowMap[x]=Q;let kt=ht.getViewportCount();for(let zt=0;zt<kt;zt++)i.sunShadowMatrix[w+zt]=ht.getMatrix(zt),i.sunShadowCascade[w+zt]=ht._cascadeData[zt];w+=kt,x++}i.sun[_]=j,_++}else if(k.isDirectionalLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ht=k.shadow,dt=e.get(k);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,i.directionalShadow[g]=dt,i.directionalShadowMap[g]=Q,i.directionalShadowMatrix[g]=k.shadow.matrix,S++}i.directional[g]=j,g++}else if(k.isSpotLight){let j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(q).multiplyScalar(nt),j.distance=tt,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,i.spot[P]=j;let ht=k.shadow;if(k.map&&(i.spotLightMap[M]=k.map,M++,ht.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[P]=ht.matrix,k.castShadow){let dt=e.get(k);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,i.spotShadow[P]=dt,i.spotShadowMap[P]=Q,U++}P++}else if(k.isRectAreaLight){let j=t.get(k);j.color.copy(q).multiplyScalar(nt),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),i.rectArea[F]=j,F++}else if(k.isPointLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),j.distance=k.distance,j.decay=k.decay,k.castShadow){let ht=k.shadow,dt=e.get(k);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,dt.shadowCameraNear=ht.camera.near,dt.shadowCameraFar=ht.camera.far,i.pointShadow[p]=dt,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=k.shadow.matrix,T++}i.point[p]=j,p++}else if(k.isHemisphereLight){let j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(nt),j.groundColor.copy(k.groundColor).multiplyScalar(nt),i.hemi[b]=j,b++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==_||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==P||D.rectAreaLength!==F||D.hemiLength!==b||D.numSunShadows!==x||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==U||D.numSpotMaps!==M||D.numLightProbes!==I)&&(i.sun.length=_,i.directional.length=g,i.spot.length=P,i.rectArea.length=F,i.point.length=p,i.hemi.length=b,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=U,i.spotShadowMap.length=U,i.spotLightMatrix.length=U+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,D.sunLength=_,D.directionalLength=g,D.pointLength=p,D.spotLength=P,D.rectAreaLength=F,D.hemiLength=b,D.numSunShadows=x,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=U,D.numSpotMaps=M,D.numLightProbes=I,i.version=O_++)}function c(h,f){let u=0,d=0,_=0,x=0,w=0,g=0,p=f.matrixWorldInverse;for(let P=0,F=h.length;P<F;P++){let b=h[P];if(b.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(b.isSpotLight){let S=i.spot[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),x++}else if(b.isRectAreaLight){let S=i.rectArea[w];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),w++}else if(b.isPointLight){let S=i.point[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),_++}else if(b.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:i}}function If(n){let t=new z_(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function h(){t.setup(e)}function f(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function V_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new If(n),t.set(s,[a])):r>=o.length?(a=new If(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`,W_=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],X_=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Lf=new Fe,Or=new J,Jc=new J;function q_(n,t,e){let i=new br,s=new re,r=new re,o=new Ne,a=new jo,c=new Qo,h={},f=e.maxTextureSize,u={[Oi]:fn,[fn]:Oi,[In]:In},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:G_,fragmentShader:H_}),_=d.clone();_.defines.HORIZONTAL_PASS=1;let x=new Sn;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Le(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let p=this.type;this.render=function(T,U,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Au&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let C=n.getRenderTarget(),I=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(si),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let B=p!==this.type;B&&U.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=T.length;k<q;k++){let nt=T[k],tt=nt.shadow;if(tt===void 0){Xt("WebGLShadowMap:",nt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let Q=tt.getFrameExtents();s.multiply(Q),r.copy(tt.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Q.x),s.x=r.x*Q.x,tt.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Q.y),s.y=r.y*Q.y,tt.mapSize.y=r.y));let j=n.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=j,tt.map===null||B===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===Fs){if(nt.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new gn(s.x,s.y,{format:Gi,type:Xn,minFilter:He,magFilter:He,generateMipmaps:!1}),tt.map.texture.name=nt.name+".shadowMap",tt.map.depthTexture=new Ni(s.x,s.y,Wn),tt.map.depthTexture.name=nt.name+".shadowMapDepth",tt.map.depthTexture.format=ti,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=je,tt.map.depthTexture.magFilter=je}else nt.isPointLight?(tt.map=new il(s.x),tt.map.depthTexture=new Jo(s.x,Hn)):(tt.map=new gn(s.x,s.y),tt.map.depthTexture=new Ni(s.x,s.y,Hn)),tt.map.depthTexture.name=nt.name+".shadowMap",tt.map.depthTexture.format=ti,this.type===Cr?(tt.map.depthTexture.compareFunction=j?Qa:ja,tt.map.depthTexture.minFilter=He,tt.map.depthTexture.magFilter=He):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=je,tt.map.depthTexture.magFilter=je);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let ht=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();nt.isPointLight!==!0&&tt.updateMatrices(nt,M);for(let dt=0;dt<ht;dt++){let kt=tt.getCamera(dt);if(nt.isPointLight){let zt=tt.camera,Me=tt.matrix,te=nt.distance||zt.far;te!==zt.far&&(zt.far=te,zt.updateProjectionMatrix()),Or.setFromMatrixPosition(nt.matrixWorld),zt.position.copy(Or),Jc.copy(zt.position),Jc.add(W_[dt]),zt.up.copy(X_[dt]),zt.lookAt(Jc),zt.updateMatrixWorld(),Me.makeTranslation(-Or.x,-Or.y,-Or.z),Lf.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(Lf,zt.coordinateSystem,zt.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)n.setRenderTarget(tt.map,dt),n.clear();else{dt===0&&(n.setRenderTarget(tt.map),n.clear());let zt=tt.getViewport(dt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),X.viewport(o)}i=tt.getFrustum(dt),b(U,M,kt,nt,this.type)}tt.isPointLightShadow!==!0&&this.type===Fs&&P(tt,M),tt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(C,I,D)};function P(T,U){let M=t.update(w);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:Gi,type:Xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(U,null,M,d,w,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value.set(T.map.width,T.map.height),_.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(U,null,M,_,w,null)}function F(T,U,M,C){let I=null,D=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)I=D;else if(I=M.isPointLight===!0?c:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let X=I.uuid,B=U.uuid,k=h[X];k===void 0&&(k={},h[X]=k);let q=k[B];q===void 0&&(q=I.clone(),k[B]=q,U.addEventListener("dispose",S)),I=q}if(I.visible=U.visible,I.wireframe=U.wireframe,C===Fs?I.side=U.shadowSide!==null?U.shadowSide:U.side:I.side=U.shadowSide!==null?U.shadowSide:u[U.side],I.alphaMap=U.alphaMap,I.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,I.map=U.map,I.clipShadows=U.clipShadows,I.clippingPlanes=U.clippingPlanes,I.clipIntersection=U.clipIntersection,I.displacementMap=U.displacementMap,I.displacementScale=U.displacementScale,I.displacementBias=U.displacementBias,I.wireframeLinewidth=U.wireframeLinewidth,I.linewidth=U.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let X=n.properties.get(I);X.light=M}return I}function b(T,U,M,C,I){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Fs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let B=t.update(T),k=T.material;if(Array.isArray(k)){let q=B.groups;for(let nt=0,tt=q.length;nt<tt;nt++){let Q=q[nt],j=k[Q.materialIndex];if(j&&j.visible){let ht=F(T,j,C,I);T.onBeforeShadow(n,T,U,M,B,ht,Q),n.renderBufferDirect(M,null,B,ht,T,Q),T.onAfterShadow(n,T,U,M,B,ht,Q)}}}else if(k.visible){let q=F(T,k,C,I);T.onBeforeShadow(n,T,U,M,B,q,null),n.renderBufferDirect(M,null,B,q,T,null),T.onAfterShadow(n,T,U,M,B,q,null)}}let X=T.children;for(let B=0,k=X.length;B<k;B++)b(X[B],U,M,C,I)}function S(T){T.target.removeEventListener("dispose",S);for(let M in h){let C=h[M],I=T.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}}function $_(n,t){function e(){let z=!1,Mt=new Ne,ct=null,vt=new Ne(0,0,0,0);return{setMask:function(At){ct!==At&&!z&&(n.colorMask(At,At,At,At),ct=At)},setLocked:function(At){z=At},setClear:function(At,mt,Bt,Ut,Se){Se===!0&&(At*=Ut,mt*=Ut,Bt*=Ut),Mt.set(At,mt,Bt,Ut),vt.equals(Mt)===!1&&(n.clearColor(At,mt,Bt,Ut),vt.copy(Mt))},reset:function(){z=!1,ct=null,vt.set(-1,0,0,0)}}}function i(){let z=!1,Mt=!1,ct=null,vt=null,At=null;return{setReversed:function(mt){if(Mt!==mt){let Bt=t.get("EXT_clip_control");mt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Mt=mt;let Ut=At;At=null,this.setClear(Ut)}},getReversed:function(){return Mt},setTest:function(mt){mt?ut(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(mt){ct!==mt&&!z&&(n.depthMask(mt),ct=mt)},setFunc:function(mt){if(Mt&&(mt=of[mt]),vt!==mt){switch(mt){case Do:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Oo:n.depthFunc(n.GREATER);break;case Bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=mt}},setLocked:function(mt){z=mt},setClear:function(mt){At!==mt&&(At=mt,Mt&&(mt=1-mt),n.clearDepth(mt))},reset:function(){z=!1,ct=null,vt=null,At=null,Mt=!1}}}function s(){let z=!1,Mt=null,ct=null,vt=null,At=null,mt=null,Bt=null,Ut=null,Se=null;return{setTest:function(he){z||(he?ut(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(he){Mt!==he&&!z&&(n.stencilMask(he),Mt=he)},setFunc:function(he,nn,_n){(ct!==he||vt!==nn||At!==_n)&&(n.stencilFunc(he,nn,_n),ct=he,vt=nn,At=_n)},setOp:function(he,nn,_n){(mt!==he||Bt!==nn||Ut!==_n)&&(n.stencilOp(he,nn,_n),mt=he,Bt=nn,Ut=_n)},setLocked:function(he){z=he},setClear:function(he){Se!==he&&(n.clearStencil(he),Se=he)},reset:function(){z=!1,Mt=null,ct=null,vt=null,At=null,mt=null,Bt=null,Ut=null,Se=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,h=new WeakMap,f={},u={},d={},_=new WeakMap,x=[],w=null,g=!1,p=null,P=null,F=null,b=null,S=null,T=null,U=null,M=new Kt(0,0,0),C=0,I=!1,D=null,X=null,B=null,k=null,q=null,nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,Q=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),tt=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),tt=Q>=2);let ht=null,dt={},kt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),Me=new Ne().fromArray(kt),te=new Ne().fromArray(zt);function de(z,Mt,ct,vt){let At=new Uint8Array(4),mt=n.createTexture();n.bindTexture(z,mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<ct;Bt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Mt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return mt}let rt={};rt[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),rt[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rt[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(Is),jt(!1),Ee(uc),ut(n.CULL_FACE),ae(si);function ut(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Pt(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function qt(z,Mt){return d[z]!==Mt?(n.bindFramebuffer(z,Mt),d[z]=Mt,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Mt),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Tt(z,Mt){let ct=x,vt=!1;if(z){ct=_.get(Mt),ct===void 0&&(ct=[],_.set(Mt,ct));let At=z.textures;if(ct.length!==At.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Bt=At.length;mt<Bt;mt++)ct[mt]=n.COLOR_ATTACHMENT0+mt;ct.length=At.length,vt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,vt=!0);vt&&n.drawBuffers(ct)}function ee(z){return w!==z?(n.useProgram(z),w=z,!0):!1}let Ue={[rs]:n.FUNC_ADD,[Tu]:n.FUNC_SUBTRACT,[Cu]:n.FUNC_REVERSE_SUBTRACT};Ue[Ru]=n.MIN,Ue[Pu]=n.MAX;let ne={[Iu]:n.ZERO,[Lu]:n.ONE,[Du]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[Bu]:n.SRC_ALPHA_SATURATE,[ku]:n.DST_COLOR,[Uu]:n.DST_ALPHA,[Nu]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[Ou]:n.ONE_MINUS_DST_COLOR,[Fu]:n.ONE_MINUS_DST_ALPHA,[zu]:n.CONSTANT_COLOR,[Vu]:n.ONE_MINUS_CONSTANT_COLOR,[Gu]:n.CONSTANT_ALPHA,[Hu]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(z,Mt,ct,vt,At,mt,Bt,Ut,Se,he){if(z===si){g===!0&&(Pt(n.BLEND),g=!1);return}if(g===!1&&(ut(n.BLEND),g=!0),z!==Eu){if(z!==p||he!==I){if((P!==rs||S!==rs)&&(n.blendEquation(n.FUNC_ADD),P=rs,S=rs),he)switch(z){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",z);break}else switch(z){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",z);break}F=null,b=null,T=null,U=null,M.set(0,0,0),C=0,p=z,I=he}return}At=At||Mt,mt=mt||ct,Bt=Bt||vt,(Mt!==P||At!==S)&&(n.blendEquationSeparate(Ue[Mt],Ue[At]),P=Mt,S=At),(ct!==F||vt!==b||mt!==T||Bt!==U)&&(n.blendFuncSeparate(ne[ct],ne[vt],ne[mt],ne[Bt]),F=ct,b=vt,T=mt,U=Bt),(Ut.equals(M)===!1||Se!==C)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Se),M.copy(Ut),C=Se),p=z,I=!1}function ye(z,Mt){z.side===In?Pt(n.CULL_FACE):ut(n.CULL_FACE);let ct=z.side===fn;Mt&&(ct=!ct),jt(ct),z.blending===ks&&z.transparent===!1?ae(si):ae(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let vt=z.stencilWrite;a.setTest(vt),vt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(z){D!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),D=z)}function Ee(z){z!==Su?(ut(n.CULL_FACE),z!==X&&(z===uc?n.cullFace(n.BACK):z===wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),X=z}function Oe(z){z!==B&&(tt&&n.lineWidth(z),B=z)}function Re(z,Mt,ct){z?(ut(n.POLYGON_OFFSET_FILL),(k!==Mt||q!==ct)&&(k=Mt,q=ct,o.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,ct))):Pt(n.POLYGON_OFFSET_FILL)}function oe(z){z?ut(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function Pe(z){z===void 0&&(z=n.TEXTURE0+nt-1),ht!==z&&(n.activeTexture(z),ht=z)}function H(z,Mt,ct){ct===void 0&&(ht===null?ct=n.TEXTURE0+nt-1:ct=ht);let vt=dt[ct];vt===void 0&&(vt={type:void 0,texture:void 0},dt[ct]=vt),(vt.type!==z||vt.texture!==Mt)&&(ht!==ct&&(n.activeTexture(ct),ht=ct),n.bindTexture(z,Mt||rt[z]),vt.type=z,vt.texture=Mt)}function xe(){let z=dt[ht];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function v(){try{n.texSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function O(){try{n.texSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function ot(){try{n.texStorage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function ft(){try{n.texStorage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function et(){try{n.texImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function at(){try{n.texImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function bt(z){return u[z]!==void 0?u[z]:n.getParameter(z)}function It(z,Mt){u[z]!==Mt&&(n.pixelStorei(z,Mt),u[z]=Mt)}function pt(z){Me.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Me.copy(z))}function gt(z){te.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function Vt(z,Mt){let ct=h.get(Mt);ct===void 0&&(ct=new WeakMap,h.set(Mt,ct));let vt=ct.get(z);vt===void 0&&(vt=n.getUniformBlockIndex(Mt,z.name),ct.set(z,vt))}function Ot(z,Mt){let vt=h.get(Mt).get(z);c.get(Mt)!==vt&&(n.uniformBlockBinding(Mt,vt,z.__bindingPointIndex),c.set(Mt,vt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},ht=null,dt={},d={},_=new WeakMap,x=[],w=null,g=!1,p=null,P=null,F=null,b=null,S=null,T=null,U=null,M=new Kt(0,0,0),C=0,I=!1,D=null,X=null,B=null,k=null,q=null,Me.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Pt,bindFramebuffer:qt,drawBuffers:Tt,useProgram:ee,setBlending:ae,setMaterial:ye,setFlipSided:jt,setCullFace:Ee,setLineWidth:Oe,setPolygonOffset:Re,setScissorTest:oe,activeTexture:Pe,bindTexture:H,unbindTexture:xe,compressedTexImage2D:me,compressedTexImage3D:L,texImage2D:et,texImage3D:at,pixelStorei:It,getParameter:bt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:ot,texStorage3D:ft,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:it,scissor:pt,viewport:gt,reset:Yt}}function Y_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new re,f=new WeakMap,u=new Set,d,_=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,v){return x?new OffscreenCanvas(L,v):dr("canvas")}function g(L,v,O){let W=1,it=me(L);if((it.width>O||it.height>O)&&(W=O/Math.max(it.width,it.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ot=Math.floor(W*it.width),ft=Math.floor(W*it.height);d===void 0&&(d=w(ot,ft));let et=v?w(ot,ft):d;return et.width=ot,et.height=ft,et.getContext("2d").drawImage(L,0,0,ot,ft),Xt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ot+"x"+ft+")."),et}else return"data"in L&&Xt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function p(L){return L.generateMipmaps}function P(L){n.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,v,O,W,it,ot=!1){if(L!==null){if(n[L]!==void 0)return n[L];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft;W&&(ft=t.get("EXT_texture_norm16"),ft||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=v;if(v===n.RED&&(O===n.FLOAT&&(et=n.R32F),O===n.HALF_FLOAT&&(et=n.R16F),O===n.UNSIGNED_BYTE&&(et=n.R8),O===n.UNSIGNED_SHORT&&ft&&(et=ft.R16_EXT),O===n.SHORT&&ft&&(et=ft.R16_SNORM_EXT)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.R8UI),O===n.UNSIGNED_SHORT&&(et=n.R16UI),O===n.UNSIGNED_INT&&(et=n.R32UI),O===n.BYTE&&(et=n.R8I),O===n.SHORT&&(et=n.R16I),O===n.INT&&(et=n.R32I)),v===n.RG&&(O===n.FLOAT&&(et=n.RG32F),O===n.HALF_FLOAT&&(et=n.RG16F),O===n.UNSIGNED_BYTE&&(et=n.RG8),O===n.UNSIGNED_SHORT&&ft&&(et=ft.RG16_EXT),O===n.SHORT&&ft&&(et=ft.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.RG8UI),O===n.UNSIGNED_SHORT&&(et=n.RG16UI),O===n.UNSIGNED_INT&&(et=n.RG32UI),O===n.BYTE&&(et=n.RG8I),O===n.SHORT&&(et=n.RG16I),O===n.INT&&(et=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.RGB8UI),O===n.UNSIGNED_SHORT&&(et=n.RGB16UI),O===n.UNSIGNED_INT&&(et=n.RGB32UI),O===n.BYTE&&(et=n.RGB8I),O===n.SHORT&&(et=n.RGB16I),O===n.INT&&(et=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),O===n.UNSIGNED_INT&&(et=n.RGBA32UI),O===n.BYTE&&(et=n.RGBA8I),O===n.SHORT&&(et=n.RGBA16I),O===n.INT&&(et=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_SHORT&&ft&&(et=ft.RGB16_EXT),O===n.SHORT&&ft&&(et=ft.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),v===n.RGBA){let at=ot?ur:ce.getTransfer(it);O===n.FLOAT&&(et=n.RGBA32F),O===n.HALF_FLOAT&&(et=n.RGBA16F),O===n.UNSIGNED_BYTE&&(et=at===ve?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&ft&&(et=ft.RGBA16_EXT),O===n.SHORT&&ft&&(et=ft.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(L,v){let O;return L?v===null||v===Hn||v===Bs?O=n.DEPTH24_STENCIL8:v===Wn?O=n.DEPTH32F_STENCIL8:v===Os&&(O=n.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===Bs?O=n.DEPTH_COMPONENT24:v===Wn?O=n.DEPTH_COMPONENT32F:v===Os&&(O=n.DEPTH_COMPONENT16),O}function T(L,v){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==je&&L.minFilter!==He?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function U(L){let v=L.target;v.removeEventListener("dispose",U),C(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&u.delete(v)}function M(L){let v=L.target;v.removeEventListener("dispose",M),D(v)}function C(L){let v=i.get(L);if(v.__webglInit===void 0)return;let O=L.source,W=_.get(O);if(W){let it=W[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&I(L),Object.keys(W).length===0&&_.delete(O)}i.remove(L)}function I(L){let v=i.get(L);n.deleteTexture(v.__webglTexture);let O=L.source,W=_.get(O);delete W[v.__cacheKey],o.memory.textures--}function D(L){let v=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let it=0;it<v.__webglFramebuffer[W].length;it++)n.deleteFramebuffer(v.__webglFramebuffer[W][it]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=L.textures;for(let W=0,it=O.length;W<it;W++){let ot=i.get(O[W]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(O[W])}i.remove(L)}let X=0;function B(){X=0}function k(){return X}function q(L){X=L}function nt(){let L=X;return L>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,L}function tt(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function Q(L,v){let O=i.get(L);if(L.isVideoTexture&&H(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&O.__version!==L.version){let W=L.image;if(W===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(O,L,v);return}}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function j(L,v){let O=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){Pt(O,L,v);return}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function ht(L,v){let O=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){Pt(O,L,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function dt(L,v){let O=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&O.__version!==L.version){qt(O,L,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let kt={[zo]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},zt={[je]:n.NEAREST,[qu]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[He]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Me={[Ju]:n.NEVER,[ef]:n.ALWAYS,[Ku]:n.LESS,[ja]:n.LEQUAL,[ju]:n.EQUAL,[Qa]:n.GEQUAL,[Qu]:n.GREATER,[tf]:n.NOTEQUAL};function te(L,v){if(v.type===Wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===He||v.magFilter===ma||v.magFilter===Pr||v.magFilter===zi||v.minFilter===He||v.minFilter===ma||v.minFilter===Pr||v.minFilter===zi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,kt[v.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,kt[v.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,kt[v.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,zt[v.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,zt[v.minFilter]),v.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Pr&&v.minFilter!==zi||v.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function de(L,v){let O=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",U));let W=v.source,it=_.get(W);it===void 0&&(it={},_.set(W,it));let ot=tt(v);if(ot!==L.__cacheKey){it[ot]===void 0&&(it[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),it[ot].usedTimes++;let ft=it[L.__cacheKey];ft!==void 0&&(it[L.__cacheKey].usedTimes--,ft.usedTimes===0&&I(v)),L.__cacheKey=ot,L.__webglTexture=it[ot].texture}return O}function rt(L,v,O){return Math.floor(Math.floor(L/O)/v)}function ut(L,v,O,W){let ot=L.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,W,v.data);else{ot.sort((It,pt)=>It.start-pt.start);let ft=0;for(let It=1;It<ot.length;It++){let pt=ot[ft],gt=ot[It],Vt=pt.start+pt.count,Ot=rt(gt.start,v.width,4),Yt=rt(pt.start,v.width,4);gt.start<=Vt+1&&Ot===Yt&&rt(gt.start+gt.count-1,v.width,4)===Ot?pt.count=Math.max(pt.count,gt.start+gt.count-pt.start):(++ft,ot[ft]=gt)}ot.length=ft+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),bt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let It=0,pt=ot.length;It<pt;It++){let gt=ot[It],Vt=Math.floor(gt.start/4),Ot=Math.ceil(gt.count/4),Yt=Vt%v.width,z=Math.floor(Vt/v.width),Mt=Ot,ct=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,Yt,z,Mt,ct,O,W,v.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function Pt(L,v,O){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let it=de(L,v),ot=v.source;e.bindTexture(W,L.__webglTexture,n.TEXTURE0+O);let ft=i.get(ot);if(ot.version!==ft.__version||it===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ct=ce.getPrimaries(ce.workingColorSpace),vt=v.colorSpace===yi?null:ce.getPrimaries(v.colorSpace),At=v.colorSpace===yi||ct===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let at=g(v.image,!1,s.maxTextureSize);at=xe(v,at);let bt=r.convert(v.format,v.colorSpace),It=r.convert(v.type),pt=b(v.internalFormat,bt,It,v.normalized,v.colorSpace,v.isVideoTexture);te(W,v);let gt,Vt=v.mipmaps,Ot=v.isVideoTexture!==!0,Yt=ft.__version===void 0||it===!0,z=ot.dataReady,Mt=T(v,at);if(v.isDepthTexture)pt=S(v.format===Vi,v.type),Yt&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,pt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,pt,at.width,at.height,0,bt,It,null));else if(v.isDataTexture)if(Vt.length>0){Ot&&Yt&&e.texStorage2D(n.TEXTURE_2D,Mt,pt,Vt[0].width,Vt[0].height);for(let ct=0,vt=Vt.length;ct<vt;ct++)gt=Vt[ct],Ot?z&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,gt.width,gt.height,bt,It,gt.data):e.texImage2D(n.TEXTURE_2D,ct,pt,gt.width,gt.height,0,bt,It,gt.data);v.generateMipmaps=!1}else Ot?(Yt&&e.texStorage2D(n.TEXTURE_2D,Mt,pt,at.width,at.height),z&&ut(v,at,bt,It)):e.texImage2D(n.TEXTURE_2D,0,pt,at.width,at.height,0,bt,It,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,pt,Vt[0].width,Vt[0].height,at.depth);for(let ct=0,vt=Vt.length;ct<vt;ct++)if(gt=Vt[ct],v.format!==Ln)if(bt!==null)if(Ot){if(z)if(v.layerUpdates.size>0){let At=Bc(gt.width,gt.height,v.format,v.type);for(let mt of v.layerUpdates){let Bt=gt.data.subarray(mt*At/gt.data.BYTES_PER_ELEMENT,(mt+1)*At/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,mt,gt.width,gt.height,1,bt,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,at.depth,bt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,pt,gt.width,gt.height,at.depth,0,gt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,at.depth,bt,It,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,pt,gt.width,gt.height,at.depth,0,bt,It,gt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ot&&Yt&&e.texStorage2D(n.TEXTURE_2D,Mt,pt,Vt[0].width,Vt[0].height);for(let ct=0,vt=Vt.length;ct<vt;ct++)gt=Vt[ct],v.format!==Ln?bt!==null?Ot?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,gt.width,gt.height,bt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,pt,gt.width,gt.height,0,gt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?z&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,gt.width,gt.height,bt,It,gt.data):e.texImage2D(n.TEXTURE_2D,ct,pt,gt.width,gt.height,0,bt,It,gt.data)}else if(v.isDataArrayTexture)if(Ot){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,pt,at.width,at.height,at.depth),z)if(v.layerUpdates.size>0){let ct=Bc(at.width,at.height,v.format,v.type);for(let vt of v.layerUpdates){let At=at.data.subarray(vt*ct/at.data.BYTES_PER_ELEMENT,(vt+1)*ct/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,at.width,at.height,1,bt,It,At)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,It,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,at.width,at.height,at.depth,0,bt,It,at.data);else if(v.isData3DTexture)Ot?(Yt&&e.texStorage3D(n.TEXTURE_3D,Mt,pt,at.width,at.height,at.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,It,at.data)):e.texImage3D(n.TEXTURE_3D,0,pt,at.width,at.height,at.depth,0,bt,It,at.data);else if(v.isFramebufferTexture){if(Yt)if(Ot)e.texStorage2D(n.TEXTURE_2D,Mt,pt,at.width,at.height);else{let ct=at.width,vt=at.height;for(let At=0;At<Mt;At++)e.texImage2D(n.TEXTURE_2D,At,pt,ct,vt,0,bt,It,null),ct>>=1,vt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ct=n.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),at.parentNode!==ct){ct.appendChild(at),u.add(v),ct.onpaint=vt=>{let At=vt.changedElements;for(let mt of u)At.includes(mt.image)&&(mt.needsUpdate=!0)},ct.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let At=n.RGBA,mt=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,mt,Bt,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(Ot&&Yt){let ct=me(Vt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,pt,ct.width,ct.height)}for(let ct=0,vt=Vt.length;ct<vt;ct++)gt=Vt[ct],Ot?z&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,bt,It,gt):e.texImage2D(n.TEXTURE_2D,ct,pt,bt,It,gt);v.generateMipmaps=!1}else if(Ot){if(Yt){let ct=me(at);e.texStorage2D(n.TEXTURE_2D,Mt,pt,ct.width,ct.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,It,at)}else e.texImage2D(n.TEXTURE_2D,0,pt,bt,It,at);p(v)&&P(W),ft.__version=ot.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function qt(L,v,O){if(v.image.length!==6)return;let W=de(L,v),it=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+O);let ot=i.get(it);if(it.version!==ot.__version||W===!0){e.activeTexture(n.TEXTURE0+O);let ft=ce.getPrimaries(ce.workingColorSpace),et=v.colorSpace===yi?null:ce.getPrimaries(v.colorSpace),at=v.colorSpace===yi||ft===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let bt=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let mt=0;mt<6;mt++)!bt&&!It?pt[mt]=g(v.image[mt],!0,s.maxCubemapSize):pt[mt]=It?v.image[mt].image:v.image[mt],pt[mt]=xe(v,pt[mt]);let gt=pt[0],Vt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type),Yt=b(v.internalFormat,Vt,Ot,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,Mt=ot.__version===void 0||W===!0,ct=it.dataReady,vt=T(v,gt);te(n.TEXTURE_CUBE_MAP,v);let At;if(bt){z&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Yt,gt.width,gt.height);for(let mt=0;mt<6;mt++){At=pt[mt].mipmaps;for(let Bt=0;Bt<At.length;Bt++){let Ut=At[Bt];v.format!==Ln?Vt!==null?z?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,0,0,Ut.width,Ut.height,Vt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,Yt,Ut.width,Ut.height,0,Ut.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,0,0,Ut.width,Ut.height,Vt,Ot,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,Yt,Ut.width,Ut.height,0,Vt,Ot,Ut.data)}}}else{if(At=v.mipmaps,z&&Mt){At.length>0&&vt++;let mt=me(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Yt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(It){z?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,pt[mt].width,pt[mt].height,Vt,Ot,pt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,pt[mt].width,pt[mt].height,0,Vt,Ot,pt[mt].data);for(let Bt=0;Bt<At.length;Bt++){let Se=At[Bt].image[mt].image;z?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,0,0,Se.width,Se.height,Vt,Ot,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,Yt,Se.width,Se.height,0,Vt,Ot,Se.data)}}else{z?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Vt,Ot,pt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,Vt,Ot,pt[mt]);for(let Bt=0;Bt<At.length;Bt++){let Ut=At[Bt];z?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,0,0,Vt,Ot,Ut.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,Yt,Vt,Ot,Ut.image[mt])}}}p(v)&&P(n.TEXTURE_CUBE_MAP),ot.__version=it.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Tt(L,v,O,W,it,ot){let ft=r.convert(O.format,O.colorSpace),et=r.convert(O.type),at=b(O.internalFormat,ft,et,O.normalized,O.colorSpace),bt=i.get(v),It=i.get(O);if(It.__renderTarget=v,!bt.__hasExternalTextures){let pt=Math.max(1,v.width>>ot),gt=Math.max(1,v.height>>ot);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,ot,at,pt,gt,v.depth,0,ft,et,null):e.texImage2D(it,ot,at,pt,gt,0,ft,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,it,It.__webglTexture,0,oe(v)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,it,It.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(L,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,L),v.depthBuffer){let W=v.depthTexture,it=W&&W.isDepthTexture?W.type:null,ot=S(v.stencilBuffer,it),ft=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(v),ot,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(v),ot,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ot,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,L)}else{let W=v.textures;for(let it=0;it<W.length;it++){let ot=W[it],ft=r.convert(ot.format,ot.colorSpace),et=r.convert(ot.type),at=b(ot.internalFormat,ft,et,ot.normalized,ot.colorSpace);Pe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(v),at,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(v),at,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,at,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(L,v,O){let W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(v.depthTexture);if(it.__renderTarget=v,(!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(it.__webglInit===void 0&&(it.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),te(n.TEXTURE_CUBE_MAP,v.depthTexture);let bt=r.convert(v.depthTexture.format),It=r.convert(v.depthTexture.type),pt;v.depthTexture.format===ti?pt=n.DEPTH_COMPONENT24:v.depthTexture.format===Vi&&(pt=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,pt,v.width,v.height,0,bt,It,null)}}else Q(v.depthTexture,0);let ot=it.__webglTexture,ft=oe(v),et=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,at=v.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ti)Pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,et,ot,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,at,et,ot,0);else if(v.depthTexture.format===Vi)Pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,et,ot,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,at,et,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(L){let v=i.get(L),O=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let W=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",it)};W.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=W}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Ue(v.__webglFramebuffer[W],L,W);else{let W=L.texture.mipmaps;W&&W.length>0?Ue(v.__webglFramebuffer[0],L,0):Ue(v.__webglFramebuffer,L,0)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),ee(v.__webglDepthbuffer[W],L,!1);else{let it=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ot)}}else{let W=L.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ee(v.__webglDepthbuffer,L,!1);else{let it=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(L,v,O){let W=i.get(L);v!==void 0&&Tt(W.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ne(L)}function ye(L){let v=L.texture,O=i.get(L),W=i.get(v);L.addEventListener("dispose",M);let it=L.textures,ot=L.isWebGLCubeRenderTarget===!0,ft=it.length>1;if(ft||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),ot){O.__webglFramebuffer=[];for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[et]=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[et][at]=n.createFramebuffer()}else O.__webglFramebuffer[et]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let et=0;et<v.mipmaps.length;et++)O.__webglFramebuffer[et]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ft)for(let et=0,at=it.length;et<at;et++){let bt=i.get(it[et]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Pe(L)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let et=0;et<it.length;et++){let at=it[et];O.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[et]);let bt=r.convert(at.format,at.colorSpace),It=r.convert(at.type),pt=b(at.internalFormat,bt,It,at.normalized,at.colorSpace,L.isXRRenderTarget===!0),gt=oe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,pt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,O.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(O.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),te(n.TEXTURE_CUBE_MAP,v);for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)Tt(O.__webglFramebuffer[et][at],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,at);else Tt(O.__webglFramebuffer[et],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(v)&&P(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let et=0,at=it.length;et<at;et++){let bt=it[et],It=i.get(bt),pt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,It.__webglTexture),te(pt,bt),Tt(O.__webglFramebuffer,L,bt,n.COLOR_ATTACHMENT0+et,pt,0),p(bt)&&P(pt)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,W.__webglTexture),te(et,v),v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)Tt(O.__webglFramebuffer[at],L,v,n.COLOR_ATTACHMENT0,et,at);else Tt(O.__webglFramebuffer,L,v,n.COLOR_ATTACHMENT0,et,0);p(v)&&P(et),e.unbindTexture()}L.depthBuffer&&ne(L)}function jt(L){let v=L.textures;for(let O=0,W=v.length;O<W;O++){let it=v[O];if(p(it)){let ot=F(L),ft=i.get(it).__webglTexture;e.bindTexture(ot,ft),P(ot),e.unbindTexture()}}}let Ee=[],Oe=[];function Re(L){if(L.samples>0){if(Pe(L)===!1){let v=L.textures,O=L.width,W=L.height,it=n.COLOR_BUFFER_BIT,ot=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(L),et=v.length>1;if(et)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let at=L.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);let It=i.get(v[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,it,n.NEAREST),c===!0&&(Ee.length=0,Oe.length=0,Ee.push(n.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ee.push(ot),Oe.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);let It=i.get(v[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let v=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function oe(L){return Math.min(s.maxSamples,L.samples)}function Pe(L){let v=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(L){let v=o.render.frame;f.get(L)!==v&&(f.set(L,v),L.update())}function xe(L,v){let O=L.colorSpace,W=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||O!==hr&&O!==yi&&(ce.getTransfer(O)===ve?(W!==Ln||it!==An)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",O)),v}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=dt,this.rebindTextures=ae,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(n,t){function e(i,s=yi){let r,o=ce.getTransfer(s);if(i===An)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return n.BYTE;if(i===Tc)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===ga)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Pc)return n.ALPHA;if(i===Ic)return n.RGB;if(i===Ln)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Lc)return n.RED;if(i===ya)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===va)return n.RG_INTEGER;if(i===ba)return n.RGBA_INTEGER;if(i===Ir||i===Lr||i===Dr||i===Nr)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ma||i===Sa||i===wa||i===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===Ta||i===Ca||i===Ra||i===Pa||i===Ur||i===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===Ta)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ca)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ra)return r.COMPRESSED_R11_EAC;if(i===Pa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ur)return r.COMPRESSED_RG11_EAC;if(i===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===La||i===Da||i===Na||i===Ua||i===Fa||i===ka||i===Oa||i===Ba||i===za||i===Va||i===Ga||i===Ha||i===Wa||i===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===La)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Da)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ua)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ka)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ba)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===za)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Va)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ga)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ha)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===$a||i===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===qa)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Za||i===Ja||i===Fr||i===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Sr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new an({vertexShader:J_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends ei{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,f=null,u=null,d=null,_=null,x=null,w=typeof XRWebGLBinding<"u",g=new sh,p={},P=e.getContextAttributes(),F=null,b=null,S=[],T=[],U=new re,M=null,C=null,I=new on;I.viewport=new Ne;let D=new on;D.viewport=new Ne;let X=[I,D],B=new ua,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ut=S[rt];return ut===void 0&&(ut=new Ns,S[rt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(rt){let ut=S[rt];return ut===void 0&&(ut=new Ns,S[rt]=ut),ut.getGripSpace()},this.getHand=function(rt){let ut=S[rt];return ut===void 0&&(ut=new Ns,S[rt]=ut),ut.getHandSpace()};function nt(rt){let ut=T.indexOf(rt.inputSource);if(ut===-1)return;let Pt=S[ut];Pt!==void 0&&(Pt.update(rt.inputSource,rt.frame,h||o),Pt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function tt(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",Q);for(let rt=0;rt<S.length;rt++){let ut=T[rt];ut!==null&&(T[rt]=null,S[rt].disconnect(ut))}k=null,q=null,g.reset();for(let rt in p)delete p[rt];if(t.setRenderTarget(F),_=null,d=null,u=null,s=null,b=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(U.width,U.height,!1),C!==null){let rt=C.camera;rt.fov=C.fov,rt.zoom=C.zoom,rt.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return u===null&&w&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",Q),P.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,qt=null,Tt=null;P.depth&&(Tt=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=P.stencil?Vi:ti,qt=P.stencil?Bs:Hn);let ee={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ee),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new gn(d.textureWidth,d.textureHeight,{format:Ln,type:An,depthTexture:new Ni(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Pt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new gn(_.framebufferWidth,_.framebufferHeight,{format:Ln,type:An,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(rt){for(let ut=0;ut<rt.removed.length;ut++){let Pt=rt.removed[ut],qt=T.indexOf(Pt);qt>=0&&(T[qt]=null,S[qt].disconnect(Pt))}for(let ut=0;ut<rt.added.length;ut++){let Pt=rt.added[ut],qt=T.indexOf(Pt);if(qt===-1){for(let ee=0;ee<S.length;ee++)if(ee>=T.length){T.push(Pt),qt=ee;break}else if(T[ee]===null){T[ee]=Pt,qt=ee;break}if(qt===-1)break}let Tt=S[qt];Tt&&Tt.connect(Pt)}}let j=new J,ht=new J;function dt(rt,ut,Pt){j.setFromMatrixPosition(ut.matrixWorld),ht.setFromMatrixPosition(Pt.matrixWorld);let qt=j.distanceTo(ht),Tt=ut.projectionMatrix.elements,ee=Pt.projectionMatrix.elements,Ue=Tt[14]/(Tt[10]-1),ne=Tt[14]/(Tt[10]+1),ae=(Tt[9]+1)/Tt[5],ye=(Tt[9]-1)/Tt[5],jt=(Tt[8]-1)/Tt[0],Ee=(ee[8]+1)/ee[0],Oe=Ue*jt,Re=Ue*Ee,oe=qt/(-jt+Ee),Pe=oe*-jt;if(ut.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Pe),rt.translateZ(oe),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Tt[10]===-1)rt.projectionMatrix.copy(ut.projectionMatrix),rt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let H=Ue+oe,xe=ne+oe,me=Oe-Pe,L=Re+(qt-Pe),v=ae*ne/xe*H,O=ye*ne/xe*H;rt.projectionMatrix.makePerspective(me,L,v,O,H,xe),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function kt(rt,ut){ut===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ut.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ut=rt.near,Pt=rt.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(Pt=g.depthFar)),B.near=D.near=I.near=ut,B.far=D.far=I.far=Pt,(k!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,q=B.far),B.layers.mask=rt.layers.mask|6,I.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let qt=rt.parent,Tt=B.cameras;kt(B,qt);for(let ee=0;ee<Tt.length;ee++)kt(Tt[ee],qt);Tt.length===2?dt(B,I,D):B.projectionMatrix.copy(I.projectionMatrix),C===null&&rt.isPerspectiveCamera&&(C={camera:rt,fov:rt.fov,zoom:rt.zoom}),zt(rt,B,qt)};function zt(rt,ut,Pt){Pt===null?rt.matrix.copy(ut.matrixWorld):(rt.matrix.copy(Pt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ut.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ut.projectionMatrix),rt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Ho*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&_===null))return c},this.setFoveation=function(rt){c=rt,d!==null&&(d.fixedFoveation=rt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=rt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(rt){return p[rt]};let Me=null;function te(rt,ut){if(f=ut.getViewerPose(h||o),x=ut,f!==null){let Pt=f.views;_!==null&&(t.setRenderTargetFramebuffer(b,_.framebuffer),t.setRenderTarget(b));let qt=!1;Pt.length!==B.cameras.length&&(B.cameras.length=0,qt=!0);for(let ne=0;ne<Pt.length;ne++){let ae=Pt[ne],ye=null;if(_!==null)ye=_.getViewport(ae);else{let Ee=u.getViewSubImage(d,ae);ye=Ee.viewport,ne===0&&(t.setRenderTargetTextures(b,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(b))}let jt=X[ne];jt===void 0&&(jt=new on,jt.layers.enable(ne),jt.viewport=new Ne,X[ne]=jt),jt.matrix.fromArray(ae.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(ae.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ye.x,ye.y,ye.width,ye.height),ne===0&&(B.matrix.copy(jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),qt===!0&&B.cameras.push(jt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){u=i.getBinding();let ne=u.getDepthInformation(Pt[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(Tt&&Tt.includes("camera-access")&&w){t.state.unbindTexture(),u=i.getBinding();for(let ne=0;ne<Pt.length;ne++){let ae=Pt[ne].camera;if(ae){let ye=p[ae];ye||(ye=new Sr,p[ae]=ye);let jt=u.getCameraImage(ae);ye.sourceTexture=jt}}}}for(let Pt=0;Pt<S.length;Pt++){let qt=T[Pt],Tt=S[Pt];qt!==null&&Tt!==void 0&&Tt.update(qt,ut,h||o)}Me&&Me(rt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),x=null}let de=new Df;de.setAnimationLoop(te),this.setAnimationLoop=function(rt){Me=rt},this.dispose=function(){}}},j_=new Fe,Bf=new Jt;Bf.set(-1,0,0,0,1,0,0,0,1);function Q_(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Fc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,P,F,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&_(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),w(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,P,F):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let P=t.get(p),F=P.envMap,b=P.envMapRotation;F&&(g.envMap.value=F,g.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Bf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,P,F){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*P,g.scale.value=F*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function _(g,p,P){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function w(g,p){let P=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ty(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let T=S.program;i.uniformBlockBinding(b,T)}function h(b,S){let T=s[b.id];T===void 0&&(g(b),T=f(b),s[b.id]=T,b.addEventListener("dispose",P));let U=S.program;i.updateUBOMapping(b,U);let M=t.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function f(b){let S=u();b.__bindingPointIndex=S;let T=n.createBuffer(),U=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=s[b.id],T=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let M=0,C=T.length;M<C;M++){let I=T[M];if(Array.isArray(I))for(let D=0,X=I.length;D<X;D++)_(I[D],M,D,U);else _(I,M,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(b,S,T,U){if(w(b,S,T,U)===!0){let M=b.__offset,C=b.value;if(Array.isArray(C)){let I=0;for(let D=0;D<C.length;D++){let X=C[D],B=p(X);x(X,b.__data,I),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(I+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function x(b,S,T){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,T)}function w(b,S,T,U){let M=b.value,C=S+"_"+T;if(U[C]===void 0)return typeof M=="number"||typeof M=="boolean"?U[C]=M:ArrayBuffer.isView(M)?U[C]=M.slice():U[C]=M.clone(),!0;{let I=U[C];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return U[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function g(b){let S=b.uniforms,T=0,U=16;for(let C=0,I=S.length;C<I;C++){let D=Array.isArray(S[C])?S[C]:[S[C]];for(let X=0,B=D.length;X<B;X++){let k=D[X],q=Array.isArray(k.value)?k.value:[k.value];for(let nt=0,tt=q.length;nt<tt;nt++){let Q=q[nt],j=p(Q),ht=T%U,dt=ht%j.boundary,kt=ht+dt;T+=dt,kt!==0&&U-kt<j.storage&&(T+=U-kt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=j.storage}}}let M=T%U;return M>0&&(T+=U-M),b.__size=T,b.__cache={},this}function p(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",b),S}function P(b){let S=b.target;S.removeEventListener("dispose",P);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function F(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:h,dispose:F}}var ey=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function ny(){return ri===null&&(ri=new Zo(ey,16,16,Gi,Xn),ri.name="DFG_LUT",ri.minFilter=He,ri.magFilter=He,ri.wrapS=Qn,ri.wrapT=Qn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var sl=class{constructor(t={}){let{canvas:e=nf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:_=An}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let w=_,g=new Set([ba,va,ya]),p=new Set([An,Hn,Os,Bs,xa,_a]),P=new Uint32Array(4),F=new Int32Array(4),b=new J,S=null,T=null,U=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,X=null,B=null,k=null,q=null;this._outputColorSpace=Ge;let nt=0,tt=0,Q=null,j=-1,ht=null,dt=new Ne,kt=new Ne,zt=null,Me=new Kt(0),te=0,de=e.width,rt=e.height,ut=1,Pt=null,qt=null,Tt=new Ne(0,0,de,rt),ee=new Ne(0,0,de,rt),Ue=!1,ne=new br,ae=!1,ye=!1,jt=new Fe,Ee=new J,Oe=new Ne,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Pe(){return Q===null?ut:1}let H=i;function xe(A,V){return e.getContext(A,V)}let me,L,v,O,W,it,ot,ft,et,at,bt,It,pt,gt,Vt,Ot,Yt,z,Mt,ct,vt,At,mt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",nn,!1),H===null){let V="webgl2";if(H=xe(V,A),H===null)throw xe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(A){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Wt("WebGLRenderer: "+A.message),A}function Bt(){me=new cx(H),me.init(),vt=new Z_(H,me),L=new Qg(H,me,t,vt),v=new $_(H,me),L.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),B=H.createFramebuffer(),k=H.createFramebuffer(),q=H.createFramebuffer(),O=new fx(H),W=new D_,it=new Y_(H,me,v,W,L,vt,O),ot=new lx(I),ft=new pm(H),At=new Kg(H,ft),et=new hx(H,ft,O,At),at=new px(H,et,ft,At,O),z=new dx(H,L,it),Vt=new tx(W),bt=new L_(I,ot,me,L,At,Vt),It=new Q_(I,W),pt=new U_,gt=new V_(me),Yt=new Jg(I,ot,v,at,x,c),Ot=new q_(I,at,L),mt=new ty(H,O,L,v),Mt=new jg(H,me,O),ct=new ux(H,me,O),O.programs=bt.programs,I.capabilities=L,I.extensions=me,I.properties=W,I.renderLists=pt,I.shadowMap=Ot,I.state=v,I.info=O}w!==An&&(C=new gx(w,e.width,e.height,a,s,r));let Ut=new rh(I,H);this.xr=Ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(A){A!==void 0&&(ut=A,this.setSize(de,rt,!1))},this.getSize=function(A){return A.set(de,rt)},this.setSize=function(A,V,K=!0){if(Ut.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=A,rt=V,e.width=Math.floor(A*ut),e.height=Math.floor(V*ut),K===!0&&(e.style.width=A+"px",e.style.height=V+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(de*ut,rt*ut).floor()},this.setDrawingBufferSize=function(A,V,K){de=A,rt=V,ut=K,e.width=Math.floor(A*K),e.height=Math.floor(V*K),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(w===An){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(dt)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,V,K,Y){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,V,K,Y),v.viewport(dt.copy(Tt).multiplyScalar(ut).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,V,K,Y){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,V,K,Y),v.scissor(kt.copy(ee).multiplyScalar(ut).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){v.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){Pt=A},this.setTransparentSort=function(A){qt=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,K=!0){let Y=0;if(A){let Z=!1;if(Q!==null){let St=Q.texture.format;Z=g.has(St)}if(Z){let St=Q.texture.type,Rt=p.has(St),_t=Yt.getClearColor(),Lt=Yt.getClearAlpha(),Nt=_t.r,Zt=_t.g,Ht=_t.b;Rt?(P[0]=Nt,P[1]=Zt,P[2]=Ht,P[3]=Lt,H.clearBufferuiv(H.COLOR,0,P)):(F[0]=Nt,F[1]=Zt,F[2]=Ht,F[3]=Lt,H.clearBufferiv(H.COLOR,0,F))}else Y|=H.COLOR_BUFFER_BIT}V&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),X=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Yt.dispose(),pt.dispose(),gt.dispose(),W.dispose(),ot.dispose(),at.dispose(),At.dispose(),mt.dispose(),bt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Jr),Ut.removeEventListener("sessionend",Qe),dn.stop()};function Se(A){A.preventDefault(),pr("WebGLRenderer: Context Lost."),D=!0}function he(){pr("WebGLRenderer: Context Restored."),D=!1;let A=O.autoReset,V=Ot.enabled,K=Ot.autoUpdate,Y=Ot.needsUpdate,Z=Ot.type;Bt(),O.autoReset=A,Ot.enabled=V,Ot.autoUpdate=K,Ot.needsUpdate=Y,Ot.type=Z}function nn(A){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _n(A){let V=A.target;V.removeEventListener("dispose",_n),Si(V)}function Si(A){$s(A),W.remove(A)}function $s(A){let V=W.get(A).programs;V!==void 0&&(V.forEach(function(K){bt.releaseProgram(K)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,K,Y,Z,St){V===null&&(V=Re);let Rt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,_t=jr(A,V,K,Y,Z);v.setMaterial(Y,Rt);let Lt=K.index,Nt=1;if(Y.wireframe===!0){if(Lt=et.getWireframeAttribute(K),Lt===void 0)return;Nt=2}let Zt=K.drawRange,Ht=K.attributes.position,Ct=Zt.start*Nt,pe=(Zt.start+Zt.count)*Nt;St!==null&&(Ct=Math.max(Ct,St.start*Nt),pe=Math.min(pe,(St.start+St.count)*Nt)),Lt!==null?(Ct=Math.max(Ct,0),pe=Math.min(pe,Lt.count)):Ht!=null&&(Ct=Math.max(Ct,0),pe=Math.min(pe,Ht.count));let De=pe-Ct;if(De<0||De===1/0)return;At.setup(Z,Y,_t,K,Lt);let ue,ge=Mt;if(Lt!==null&&(ue=ft.get(Lt),ge=ct,ge.setIndex(ue)),Z.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*Pe()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(Z.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),v.setLineWidth(Xe*Pe()),Z.isLineSegments?ge.setMode(H.LINES):Z.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else Z.isPoints?ge.setMode(H.POINTS):Z.isSprite&&ge.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(me.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Xe=Z._multiDrawStarts,Et=Z._multiDrawCounts,qe=Z._multiDrawCount,le=Lt?ft.get(Lt).bytesPerElement:1,pn=W.get(Y).currentProgram.getUniforms();for(let Be=0;Be<qe;Be++)pn.setValue(H,"_gl_DrawID",Be),ge.render(Xe[Be]/le,Et[Be])}else if(Z.isInstancedMesh)ge.renderInstances(Ct,De,Z.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Et=Math.min(K.instanceCount,Xe);ge.renderInstances(Ct,De,Et)}else ge.render(Ct,De)};function qi(A,V,K,Y){X!==null&&A.isNodeMaterial&&X.setObject(Y,A),ae===!0&&Vt.setState(A,K,!1),A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,Zi(A,V,Y),A.side=Oi,A.needsUpdate=!0,Zi(A,V,Y),A.side=In):Zi(A,V,Y)}this.compile=function(A,V,K=null){K===null&&(K=A),X!==null&&X.renderStart(A,V,K),T=gt.get(K),T.init(V),M.push(T),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),A!==K&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),X!==null&&X.updateLights(T.state.lightsArray),ye=this.localClippingEnabled,ae=Vt.init(this.clippingPlanes,ye),ae===!0&&Vt.setGlobalState(this.clippingPlanes,V),X!==null&&Ot.render(T.state.shadowsArray,K,V);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let St=Z.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let _t=St[Rt];qi(_t,K,V,Z),Y.add(_t)}else qi(St,K,V,Z),Y.add(St)}),T=M.pop(),X!==null&&X.renderEnd(),Y},this.compileAsync=function(A,V,K=null){let Y=this.compile(A,V,K);return new Promise(Z=>{function St(){if(Y.forEach(function(Rt){let Lt=W.get(Rt).currentProgram;(Lt===void 0||Lt.isReady())&&Y.delete(Rt)}),Y.size===0){Z(A);return}setTimeout(St,10)}me.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let $i=null;function We(A){$i&&$i(A)}function Jr(){dn.stop()}function Qe(){dn.start()}let dn=new Df;dn.setAnimationLoop(We),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(A){$i=A,Ut.setAnimationLoop(A),A===null?dn.stop():dn.start()},Ut.addEventListener("sessionstart",Jr),Ut.addEventListener("sessionend",Qe),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;X!==null&&X.renderStart(A,V);let K=Ut.enabled===!0&&Ut.isPresenting===!0,Y=C!==null&&(Q===null||K)&&C.begin(I,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(V),V=Ut.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,V,Q),T=gt.get(A,M.length),T.init(V),T.state.textureUnits=it.getTextureUnits(),M.push(T),jt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ne.setFromProjectionMatrix(jt,Vn,V.reversedDepth),ye=this.localClippingEnabled,ae=Vt.init(this.clippingPlanes,ye),S=pt.get(A,U.length),S.init(),U.push(S),Ut.enabled===!0&&Ut.isPresenting===!0){let Rt=I.xr.getDepthSensingMesh();Rt!==null&&Yi(Rt,V,-1/0,I.sortObjects)}Yi(A,V,0,I.sortObjects),S.finish(),X!==null&&X.updateLights(T.state.lightsArray),I.sortObjects===!0&&S.sort(Pt,qt),oe=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,oe&&Yt.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Vt.beginShadows();let Z=T.state.shadowsArray;if(Ot.render(Z,A,V),ae===!0&&Vt.endShadows(),(Y&&C.hasRenderPass())===!1){let Rt=S.opaque,_t=S.transmissive;if(T.setupLights(),V.isArrayCamera){let Lt=V.cameras;if(_t.length>0)for(let Nt=0,Zt=Lt.length;Nt<Zt;Nt++){let Ht=Lt[Nt];Ys(Rt,_t,A,Ht)}oe&&Yt.render(A);for(let Nt=0,Zt=Lt.length;Nt<Zt;Nt++){let Ht=Lt[Nt];Kr(S,A,Ht,Ht.viewport)}}else _t.length>0&&Ys(Rt,_t,A,V),oe&&Yt.render(A),Kr(S,A,V)}Q!==null&&tt===0&&(it.updateMultisampleRenderTarget(Q),it.updateRenderTargetMipmap(Q)),Y&&C.end(I),A.isScene===!0&&A.onAfterRender(I,A,V),At.resetDefaultState(),j=-1,ht=null,M.pop(),M.length>0?(T=M[M.length-1],it.setTextureUnits(T.state.textureUnits),ae===!0&&Vt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,U.pop(),U.length>0?S=U[U.length-1]:S=null,X!==null&&X.renderEnd()};function Yi(A,V,K,Y){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ne)){Y&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(jt);let Rt=at.update(A),_t=A.material;_t.visible&&S.push(A,Rt,_t,K,Oe.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ne))){let Rt=at.update(A),_t=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Oe.copy(Rt.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(jt)),Array.isArray(_t)){let Lt=Rt.groups;for(let Nt=0,Zt=Lt.length;Nt<Zt;Nt++){let Ht=Lt[Nt],Ct=_t[Ht.materialIndex];Ct&&Ct.visible&&S.push(A,Rt,Ct,K,Oe.z,Ht,V)}}else _t.visible&&S.push(A,Rt,_t,K,Oe.z,null,V)}}let St=A.children;for(let Rt=0,_t=St.length;Rt<_t;Rt++)Yi(St[Rt],V,K,Y)}function Kr(A,V,K,Y){let{opaque:Z,transmissive:St,transparent:Rt}=A;T.setupLightsView(K),ae===!0&&Vt.setGlobalState(I.clippingPlanes,K),Y&&v.viewport(dt.copy(Y)),Z.length>0&&hs(Z,V,K),St.length>0&&hs(St,V,K),Rt.length>0&&hs(Rt,V,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ys(A,V,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Ct=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new gn(1,1,{generateMipmaps:!0,type:Ct?Xn:An,minFilter:zi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let St=T.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||dt;St.setSize(Rt.z*I.transmissionResolutionScale,Rt.w*I.transmissionResolutionScale);let _t=I.getRenderTarget(),Lt=I.getActiveCubeFace(),Nt=I.getActiveMipmapLevel();I.setRenderTarget(St),I.getClearColor(Me),te=I.getClearAlpha(),te<1&&I.setClearColor(16777215,.5),I.clear(),oe&&Yt.render(K);let Zt=I.toneMapping;I.toneMapping=Gn;let Ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),ae===!0&&Vt.setGlobalState(I.clippingPlanes,Y),hs(A,K,Y),it.updateMultisampleRenderTarget(St),it.updateRenderTargetMipmap(St),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let pe=0,De=V.length;pe<De;pe++){let ue=V[pe],{object:ge,geometry:Xe,material:Et,group:qe}=ue;if(Et.side===In&&ge.layers.test(Y.layers)){let le=Et.side;Et.side=fn,Et.needsUpdate=!0,Zs(ge,K,Y,Xe,Et,qe),Et.side=le,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(it.updateMultisampleRenderTarget(St),it.updateRenderTargetMipmap(St))}I.setRenderTarget(_t,Lt,Nt),I.setClearColor(Me,te),Ht!==void 0&&(Y.viewport=Ht),I.toneMapping=Zt}function hs(A,V,K){let Y=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,St=A.length;Z<St;Z++){let Rt=A[Z],{object:_t,geometry:Lt,group:Nt}=Rt,Zt=Rt.material;Zt.allowOverride===!0&&Y!==null&&(Zt=Y),_t.layers.test(K.layers)&&Zs(_t,V,K,Lt,Zt,Nt)}}function Zs(A,V,K,Y,Z,St){X!==null&&Z.isNodeMaterial&&X.setObject(A,Z),A.onBeforeRender(I,V,K,Y,Z,St),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(I,V,K,Y,A,St),Z.transparent===!0&&Z.side===In&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,I.renderBufferDirect(K,V,Y,Z,A,St),Z.side=Oi,Z.needsUpdate=!0,I.renderBufferDirect(K,V,Y,Z,A,St),Z.side=In):I.renderBufferDirect(K,V,Y,Z,A,St),A.onAfterRender(I,V,K,Y,Z,St)}function Zi(A,V,K){V.isScene!==!0&&(V=Re);let Y=W.get(A),Z=T.state.lights,St=T.state.shadowsArray,Rt=Z.state.version,_t=bt.getParameters(A,Z.state,St,V,K,T.state.lightProbeGridArray),Lt=bt.getProgramCacheKey(_t),Nt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;let Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ot.get(A.envMap||Y.environment,Zt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",_n),Nt=new Map,Y.programs=Nt);let Ht=Nt.get(Lt);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===Rt)return ci(A,_t),Ht}else _t.uniforms=bt.getUniforms(A),X!==null&&A.isNodeMaterial&&X.build(A,K,_t),A.onBeforeCompile(_t,I),Ht=bt.acquireProgram(_t,Lt),Nt.set(Lt,Ht),Y.uniforms=_t.uniforms;let Ct=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=Vt.uniform),ci(A,_t),Y.needsLights=Qr(A),Y.lightsStateVersion=Rt,Y.needsLights&&(Ct.ambientLightColor.value=Z.state.ambient,Ct.lightProbe.value=Z.state.probe,Ct.sunLights.value=Z.state.sun,Ct.sunLightShadows.value=Z.state.sunShadow,Ct.directionalLights.value=Z.state.directional,Ct.directionalLightShadows.value=Z.state.directionalShadow,Ct.spotLights.value=Z.state.spot,Ct.spotLightShadows.value=Z.state.spotShadow,Ct.rectAreaLights.value=Z.state.rectArea,Ct.ltc_1.value=Z.state.rectAreaLTC1,Ct.ltc_2.value=Z.state.rectAreaLTC2,Ct.pointLights.value=Z.state.point,Ct.pointLightShadows.value=Z.state.pointShadow,Ct.hemisphereLights.value=Z.state.hemi,Ct.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ct.sunShadowCascade.value=Z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=Z.state.spotLightMatrix,Ct.spotLightMap.value=Z.state.spotLightMap,Ct.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=Ht,Y.uniformsList=null,Ht}function Ie(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ci(A,V){let K=W.get(A);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function gl(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let K=0,Y=A.length;K<Y;K++){let Z=A[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(b))return Z}return null}function jr(A,V,K,Y,Z){V.isScene!==!0&&(V=Re),it.resetTextureUnits();let St=V.fog,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,_t=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ce.workingColorSpace,Lt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Nt=ot.get(Y.envMap||Rt,Lt),Zt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!K.morphAttributes.position,pe=!!K.morphAttributes.normal,De=!!K.morphAttributes.color,ue=Gn;Y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=I.toneMapping);let ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xe=ge!==void 0?ge.length:0,Et=W.get(Y),qe=T.state.lights;if(ae===!0&&(ye===!0||A!==ht)){let be=A===ht&&Y.id===j;Vt.setState(Y,A,be)}let le=!1;Y.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==qe.state.version||Et.outputColorSpace!==_t||Z.isBatchedMesh&&Et.batching===!1||!Z.isBatchedMesh&&Et.batching===!0||Z.isBatchedMesh&&Et.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Et.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Et.instancing===!1||!Z.isInstancedMesh&&Et.instancing===!0||Z.isSkinnedMesh&&Et.skinning===!1||!Z.isSkinnedMesh&&Et.skinning===!0||Z.isInstancedMesh&&Et.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Et.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Et.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Et.instancingMorph===!1&&Z.morphTexture!==null||Et.envMap!==Nt||Y.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Vt.numPlanes||Et.numIntersection!==Vt.numIntersection)||Et.vertexAlphas!==Zt||Et.vertexTangents!==Ht||Et.morphTargets!==Ct||Et.morphNormals!==pe||Et.morphColors!==De||Et.toneMapping!==ue||Et.morphTargetsCount!==Xe||!!Et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Et.__version=Y.version);let pn=Et.currentProgram;le===!0&&(pn=Zi(Y,V,Z),X&&Y.isNodeMaterial&&X.onUpdateProgram(Y,pn,Et));let Be=!1,Tn=!1,Yn=!1,Gt=pn.getUniforms(),$t=Et.uniforms;if(v.useProgram(pn.program)&&(Be=!0,Tn=!0,Yn=!0),Y.id!==j&&(j=Y.id,Tn=!0),Et.needsLights){let be=gl(T.state.lightProbeGridArray,Z);Et.lightProbeGrid!==be&&(Et.lightProbeGrid=be,Tn=!0)}if(Be||ht!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(H,"projectionMatrix",A.projectionMatrix),Gt.setValue(H,"viewMatrix",A.matrixWorldInverse);let Zn=Gt.map.cameraPosition;Zn!==void 0&&Zn.setValue(H,Ee.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),ht!==A&&(ht=A,Tn=!0,Yn=!0)}if(Et.needsLights&&(qe.state.sunShadowMap.length>0&&Gt.setValue(H,"sunShadowMap",qe.state.sunShadowMap,it),qe.state.directionalShadowMap.length>0&&Gt.setValue(H,"directionalShadowMap",qe.state.directionalShadowMap,it),qe.state.spotShadowMap.length>0&&Gt.setValue(H,"spotShadowMap",qe.state.spotShadowMap,it),qe.state.pointShadowMap.length>0&&Gt.setValue(H,"pointShadowMap",qe.state.pointShadowMap,it)),Z.isSkinnedMesh){Gt.setOptional(H,Z,"bindMatrix"),Gt.setOptional(H,Z,"bindMatrixInverse");let be=Z.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Gt.setValue(H,"boneTexture",be.boneTexture,it))}Z.isBatchedMesh&&(Gt.setOptional(H,Z,"batchingTexture"),Gt.setValue(H,"batchingTexture",Z._matricesTexture,it),Gt.setOptional(H,Z,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",Z._indirectTexture,it),Gt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",Z._colorsTexture,it));let Un=K.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&z.update(Z,K,pn),(Tn||Et.receiveShadow!==Z.receiveShadow)&&(Et.receiveShadow=Z.receiveShadow,Gt.setValue(H,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&($t.envMapIntensity.value=V.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=ny()),Tn){if(Gt.setValue(H,"toneMappingExposure",I.toneMappingExposure),Et.needsLights&&xl($t,Yn),St&&Y.fog===!0&&It.refreshFogUniforms($t,St),It.refreshMaterialUniforms($t,Y,ut,rt,T.state.transmissionRenderTarget[A.id]),Et.needsLights&&Et.lightProbeGrid){let be=Et.lightProbeGrid;$t.probesSH.value=be.texture,$t.probesMin.value.copy(be.boundingBox.min),$t.probesMax.value.copy(be.boundingBox.max),$t.probesResolution.value.copy(be.resolution)}Gs.upload(H,Ie(Et),$t,it)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Gs.upload(H,Ie(Et),$t,it),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Gt.setValue(H,"center",Z.center),Gt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Gt.setValue(H,"normalMatrix",Z.normalMatrix),Gt.setValue(H,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let be=Y.uniformsGroups;for(let Zn=0,hi=be.length;Zn<hi;Zn++){let to=be[Zn];mt.update(to,pn),mt.bind(to,pn)}}return pn}function xl(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Qr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,V,K){let Y=W.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=V,W.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let K=W.get(A);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,K=0){Q=A,nt=V,tt=K;let Y=null,Z=!1,St=!1;if(A){let _t=W.get(A);if(_t.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,_t.__webglFramebuffer),dt.copy(A.viewport),kt.copy(A.scissor),zt=A.scissorTest,v.viewport(dt),v.scissor(kt),v.setScissorTest(zt),j=-1;return}else if(_t.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(_t.__hasExternalTextures)it.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Zt=A.depthTexture;if(_t.__boundDepthTexture!==Zt){if(Zt!==null&&W.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(St=!0);let Nt=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[V])?Y=Nt[V][K]:Y=Nt[V],Z=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?Y=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?Y=Nt[K]:Y=Nt,dt.copy(A.viewport),kt.copy(A.scissor),zt=A.scissorTest}else dt.copy(Tt).multiplyScalar(ut).floor(),kt.copy(ee).multiplyScalar(ut).floor(),zt=Ue;if(K!==0&&(Y=B),v.bindFramebuffer(H.FRAMEBUFFER,Y)&&v.drawBuffers(A,Y),v.viewport(dt),v.scissor(kt),v.setScissorTest(zt),Z){let _t=W.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,K)}else if(St){let _t=V;for(let Lt=0;Lt<A.textures.length;Lt++){let Nt=W.get(A.textures[Lt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,K,_t)}}else if(A!==null&&K!==0){let _t=W.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_t.__webglTexture,K)}j=-1};function Js(A){let V=W.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=L.textureFormatReadable(A.format),V.__typeReadable=L.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,K,Y,Z,St,Rt,_t=0){if(!(A&&A.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){v.bindFramebuffer(H.FRAMEBUFFER,Lt);try{let Nt=A.textures[_t],Zt=Nt.format,Ht=Nt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+_t);let Ct=Js(Nt);if(Ct.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Y&&K>=0&&K<=A.height-Z&&H.readPixels(V,K,Y,Z,vt.convert(Zt),vt.convert(Ht),St)}finally{let Nt=Q!==null?W.get(Q).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,V,K,Y,Z,St,Rt,_t=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt)if(V>=0&&V<=A.width-Y&&K>=0&&K<=A.height-Z){v.bindFramebuffer(H.FRAMEBUFFER,Lt);let Nt=A.textures[_t],Zt=Nt.format,Ht=Nt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+_t);let Ct=Js(Nt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.bufferData(H.PIXEL_PACK_BUFFER,St.byteLength,H.STREAM_READ),H.readPixels(V,K,Y,Z,vt.convert(Zt),vt.convert(Ht),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let De=Q!==null?W.get(Q).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,De);let ue=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await rf(H,ue,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,St),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(pe),H.deleteSync(ue),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(A.image.width*Y),St=Math.floor(A.image.height*Y),Rt=V!==null?V.x:0,_t=V!==null?V.y:0;it.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,Rt,_t,Z,St),v.unbindTexture()},this.copyTextureToTexture=function(A,V,K=null,Y=null,Z=0,St=0){let Rt,_t,Lt,Nt,Zt,Ht,Ct,pe,De,ue=A.isCompressedTexture?A.mipmaps[St]:A.image;if(K!==null)Rt=K.max.x-K.min.x,_t=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Nt=K.min.x,Zt=K.min.y,Ht=K.isBox3?K.min.z:0;else{let $t=Math.pow(2,-Z);Rt=Math.floor(ue.width*$t),_t=Math.floor(ue.height*$t),A.isDataArrayTexture?Lt=ue.depth:A.isData3DTexture?Lt=Math.floor(ue.depth*$t):Lt=1,Nt=0,Zt=0,Ht=0}Y!==null?(Ct=Y.x,pe=Y.y,De=Y.z):(Ct=0,pe=0,De=0);let ge=vt.convert(V.format),Xe=vt.convert(V.type),Et;V.isData3DTexture?(it.setTexture3D(V,0),Et=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(it.setTexture2DArray(V,0),Et=H.TEXTURE_2D_ARRAY):(it.setTexture2D(V,0),Et=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let qe=v.getParameter(H.UNPACK_ROW_LENGTH),le=v.getParameter(H.UNPACK_IMAGE_HEIGHT),pn=v.getParameter(H.UNPACK_SKIP_PIXELS),Be=v.getParameter(H.UNPACK_SKIP_ROWS),Tn=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,ue.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ue.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Nt),v.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Ht);let Yn=A.isDataArrayTexture||A.isData3DTexture,Gt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let $t=W.get(A),Un=W.get(V),be=W.get($t.__renderTarget),Zn=W.get(Un.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,be.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let hi=0;hi<Lt;hi++)Yn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(A).__webglTexture,Z,Ht+hi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(V).__webglTexture,St,De+hi)),H.blitFramebuffer(Nt,Zt,Rt,_t,Ct,pe,Rt,_t,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||W.has(A)){let $t=W.get(A),Un=W.get(V);v.bindFramebuffer(H.READ_FRAMEBUFFER,k),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,q);for(let be=0;be<Lt;be++)Yn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.__webglTexture,Z,Ht+be):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$t.__webglTexture,Z),Gt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Un.__webglTexture,St,De+be):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Un.__webglTexture,St),Z!==0?H.blitFramebuffer(Nt,Zt,Rt,_t,Ct,pe,Rt,_t,H.COLOR_BUFFER_BIT,H.NEAREST):Gt?H.copyTexSubImage3D(Et,St,Ct,pe,De+be,Nt,Zt,Rt,_t):H.copyTexSubImage2D(Et,St,Ct,pe,Nt,Zt,Rt,_t);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Et,St,Ct,pe,De,Rt,_t,Lt,ge,Xe,ue.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Et,St,Ct,pe,De,Rt,_t,Lt,ge,ue.data):H.texSubImage3D(Et,St,Ct,pe,De,Rt,_t,Lt,ge,Xe,ue):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,St,Ct,pe,Rt,_t,ge,Xe,ue.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,St,Ct,pe,ue.width,ue.height,ge,ue.data):H.texSubImage2D(H.TEXTURE_2D,St,Ct,pe,Rt,_t,ge,Xe,ue);v.pixelStorei(H.UNPACK_ROW_LENGTH,qe),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,le),v.pixelStorei(H.UNPACK_SKIP_PIXELS,pn),v.pixelStorei(H.UNPACK_SKIP_ROWS,Be),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Tn),St===0&&V.generateMipmaps&&H.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){nt=0,tt=0,Q=null,v.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var iy=["top","side","bottom"],sy={slab_bottom:1,slab_top:1,stairs:1},zf=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function ry(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],zf[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function Vf(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let C of t){if(!C||typeof C.id!="string")throw new Error("block without id");if(!Number.isInteger(C.n)||C.n<0||C.n>255)throw new Error("bad n for "+C.id);if(i[C.n])throw new Error("duplicate n "+C.n+" ("+C.id+")");if(s[C.id])throw new Error("duplicate id "+C.id);let I=C.colors||{},D=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},C);if(D.placeable=D.n!==0&&!D.liquid,D.colors={top:I.top||"#888888",side:I.side||I.top||"#888888",bottom:I.bottom||I.top||"#888888"},D.opaque=D.solid&&!D.transparent&&!D.cutout&&!sy[D.shape],D.tile={},D.tileOf&&s[D.tileOf])D.tile=Object.assign({},s[D.tileOf].tile);else if(D.n!==0){let X={};for(let B of iy){let k=D.colors[B]+"|"+(D.pattern==="grass"||D.pattern==="log"||D.pattern==="lamp"||D.pattern==="table"||D.pattern==="stele"||D.pattern==="torch"||D.pattern==="bed"||D.pattern==="snow"||D.pattern==="lantern"||D.pattern==="bookshelf"||D.pattern==="hay"||D.pattern==="barrel"||D.pattern==="chest"||D.pattern==="farmland"?B:"");X[k]===void 0&&(X[k]=r.length,r.push({block:D.id,face:B,color:D.colors[B],pattern:D.pattern,accent:D.accent||null,top:D.colors.top})),D.tile[B]=X[k]}}i[D.n]=D,s[D.id]=D}if(!s.air)throw new Error("registry needs air");for(let C of e){if(s[C.id])throw new Error("duplicate id "+C.id);s[C.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},C)}for(let C in s){let I=s[C].drops;if(I&&I!=="self"&&!s[I])throw new Error(C+" drops unknown "+I)}let o=C=>(typeof C=="number"?i[C]:s[C])||null,a=new Uint8Array(256),c=new Uint8Array(256),h=new Uint8Array(256),f=new Uint8Array(256),u=new Uint8Array(256),d=new Uint8Array(256),_={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},x=new Uint8Array(256),w=new Array(256).fill(null),g=new Uint8Array(256),p=new Uint8Array(256),P=new Uint8Array(256),F=new Uint8Array(256),b=new Uint8Array(256),S=new Int16Array(256).fill(-1),T=new Int16Array(256).fill(-1),U=new Int16Array(256).fill(-1);i.forEach((C,I)=>{C&&(g[I]=C.solid?1:0,p[I]=C.opaque?1:0,P[I]=C.transparent?1:0,F[I]=C.emissive?1:0,b[I]=C.liquid?1:0,a[I]=C.light!=null?C.light:C.emissive?15:0,c[I]=C.liquid?2:0,h[I]=_[C.shape]||0,f[I]=C.cutout?1:0,u[I]=+C.climbable||0,d[I]=C.plant?1:0,x[I]=C.facing|0,C.solid&&(w[I]=ry(C)),I&&(S[I]=C.tile.top,T[I]=C.tile.side,U[I]=C.tile.bottom))});let M=(n&&n.blueprints||[]).map(C=>Object.assign({kind:"blueprint"},C));return{blocks:i.filter(Boolean),items:e.map(C=>s[C.id]),blueprints:M,tiles:r,get:o,toolOf:C=>{let I=C&&s[C];return I&&I.kind==="item"&&I.tool&&typeof I.tool=="object"?I.tool:null},num:C=>{let I=s[C];if(!I||I.kind!=="block")throw new Error("no block "+C);return I.n},name:C=>{let I=o(C);return I?I.name_zh:String(C)},maxStack:C=>{let I=s[C];return I?I.maxStack:64},dropOf:C=>{let I=i[C];return!I||!I.drops?null:I.drops==="self"?I.id:I.drops},breakTime:C=>{let I=i[C];return!I||I.hardness<0?1/0:.25+I.hardness*.55},flat:{solid:g,opaque:p,trans:P,emit:F,liquid:b,tileTop:S,tileSide:T,tileBottom:U,lightEmit:a,attn:c,shape:h,cutout:f,climb:u,plant:d,facing:x,boxes:w}}}var vi=n=>Math.floor(n/16);var Dn=(n,t,e)=>(t*16+e)*16+n;var cs=(n,t)=>n+","+t;function oh(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=vi(n),s=vi(e);return{cx:i,cz:s,i:Dn(n-i*16,t,e-s*16)}}function Gf(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function ah(n,t,e,i,s,r,o){let a=i/2,c=n-a,h=n+a,f=t,u=t+s,d=e-a,_=e+a,x=Math.floor(c),w=Math.floor(h-1e-6),g=Math.floor(f),p=Math.floor(u-1e-6),P=Math.floor(d),F=Math.floor(_-1e-6),b=!1;for(let S=g;S<=p;S++)for(let T=P;T<=F;T++)for(let U=x;U<=w;U++){let M=r(U,S,T);if(!M)continue;let C=M===!0?oy:M;for(let I of C){let D=U+I[0],X=S+I[1],B=T+I[2],k=U+I[3],q=S+I[4],nt=T+I[5];if(!(k<=c+1e-6||D>=h-1e-6||q<=f+1e-6||X>=u-1e-6||nt<=d+1e-6||B>=_-1e-6)){if(!o)return!0;b=!0,o.push([D,X,B,k,q,nt])}}}return b}var oy=[[0,0,0,1,1,1]],zr=(n,t,e,i,s,r)=>ah(n,t,e,i,s,r,null),Hf=(n,t,e=.6,i=1.8)=>!zr(n.x,n.y,n.z,e,i,t);function Wf(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,c=r/2,h=!1,f=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(u/.3)),_=e/d,x=[];for(let w=0;w<d;w++){let g=t.y*_;g&&(x.length=0,ah(n.x,n.y+g,n.z,r,o,i,x)?(g<0?(n.y=Math.max(...x.map(p=>p[4])),h=!0):n.y=Math.min(...x.map(p=>p[1]))-o,t.y=0):n.y+=g);for(let p of["x","z"]){let P=t[p]*_;if(!P)continue;let F={x:n.x,y:n.y,z:n.z};if(F[p]+=P,x.length=0,!ah(F.x,F.y,F.z,r,o,i,x)){n[p]=F[p];continue}if(a&&(h||s.grounded)){let S=Math.max(...x.map(T=>T[4]));if(S-n.y>0&&S-n.y<=1.01&&!zr(F.x,S,F.z,r,o,i)&&!zr(n.x,S,n.z,r,o,i)){f+=S-n.y,n.y=S,n[p]=F[p];continue}}let b=p==="x"?0:2;n[p]=P>0?Math.min(...x.map(S=>S[b]))-c-1e-4:Math.max(...x.map(S=>S[b+3]))+c+1e-4,zr(n.x,n.y,n.z,r,o,i)&&(n[p]=F[p]-P),t[p]=0}}return!h&&t.y<=0&&zr(n.x,n.y-.02,n.z,r,o,i)&&(h=!0),{onGround:h,stepped:f}}function ay(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],c=null;for(let h of r){let f=[e+h[0],i+h[1],s+h[2]],u=[e+h[3],i+h[4],s+h[5]],d=0,_=1/0,x=-1,w=!0;for(let g=0;g<3&&w;g++){if(Math.abs(a[g])<1e-12){(o[g]<f[g]||o[g]>u[g])&&(w=!1);continue}let p=(f[g]-o[g])/a[g],P=(u[g]-o[g])/a[g];p>P&&([p,P]=[P,p]),p>d&&(d=p,x=g),P<_&&(_=P),d>_&&(w=!1)}if(w&&(!c||d<c.t)){let g=[0,0,0];x>=0&&(g[x]=-Math.sign(a[x])),c={t:d,face:x>=0?g:null}}}return c}function lh(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),c=Math.floor(n.z),h=Math.sign(t.x),f=Math.sign(t.y),u=Math.sign(t.z),d=h?Math.abs(1/t.x):1/0,_=f?Math.abs(1/t.y):1/0,x=u?Math.abs(1/t.z):1/0,w=h?(h>0?o+1-n.x:n.x-o)*d:1/0,g=f?(f>0?a+1-n.y:n.y-a)*_:1/0,p=u?(u>0?c+1-n.z:n.z-c)*x:1/0,P=[0,0,0],F=0;for(;F<=e;){let b=i(o,a,c);if(b&&s(b)){let S=r&&r(b);if(!S)return{x:o,y:a,z:c,n:b,face:P,dist:F};let T=ay(n,t,o,a,c,S);if(T&&T.t<=e)return{x:o,y:a,z:c,n:b,face:T.face||P,dist:T.t}}w<g&&w<p?(o+=h,F=w,w+=d,P=[-h,0,0]):g<p?(a+=f,F=g,g+=_,P=[0,-f,0]):(c+=u,F=p,p+=x,P=[0,0,-u])}return null}function Vr(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],c=[t.x,t.y,t.z],h=0,f=1/0;for(let u=0;u<3;u++){if(Math.abs(c[u])<1e-9){if(a[u]<r[u]||a[u]>o[u])return null;continue}let d=(r[u]-a[u])/c[u],_=(o[u]-a[u])/c[u];if(d>_&&([d,_]=[_,d]),h=Math.max(h,d),f=Math.min(f,_),h>f)return null}return h}function Xf(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}function hy(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var ch=(n,t)=>n?t?2:1:0;function Ws(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function hh(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}var uh=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function al(n){let t=hy(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function R(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Ae=n=>document.querySelector(n);function fh(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function $f(n,t,e,i,s,r){if(!t||!t.id)return null;let o=fh(t,e,i,s,r),a=n.get("ke_log"),c=Array.isArray(a)?a:[];if(c.push(o),n.set("ke_log",c),t.local)return o;if(e){let u=n.get("ke_correct"),d=Array.isArray(u)?u:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let h=n.get("ke_mistakes")||{},f=h[t.id]&&!h[t.id].d?h[t.id]:null;return e?f&&(f.c++,f.u=s,f.c>=3&&(h[t.id]={d:1,w:f.w,t:f.t,u:s})):h[t.id]={c:0,w:((h[t.id]||{}).w||0)+1,t:s,u:s},(!e||f)&&n.set("ke_mistakes",h),o}function Yf(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],c=[];for(let _ of n)e[_]&&!e[_].d?o.push(_):t.has(_)||i.has(_)?c.push(_):a.push(_);let h=_=>{for(let x=_.length-1;x>0;x--){let w=Math.floor(r()*(x+1));[_[x],_[w]]=[_[w],_[x]]}return _};[o,a,c].forEach(h);let f=[],u=(_,x)=>{for(;x-- >0&&_.length;)f.push(_.pop())},d=Math.round(s*.7);return u(o,Math.ceil(d/2)),u(a,d-f.length),u(o,d-f.length),u(c,s-f.length),u(a,s-f.length),u(o,s-f.length),f}var uy="../../",fy=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],Kf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],ll=null,jf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),Zf=null;function dy(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{$f(jf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(Zf)try{Zf(t,n)}catch{}}function py(n,t,e){try{let i=jf(),s=i.get("ke_learned")||{},r=new Set;for(let h in s)s[h]&&s[h].at&&(n.sets&&n.sets[h]||[]).forEach(f=>r.add(f));let o=n.list(t).filter(h=>h.type!=="speak").map(h=>h.id),a=Yf(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),c=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(c.length)return c}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function my(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function gy(){return ll||(ll=(async()=>{for(let t of fy)await my(uy+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw ll=null,n})),ll}var Jf=new Set(Kf);async function Qf(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:c=null}){n.innerHTML="",n.hidden=!1;let h=R("div",{class:"panel quiz"});n.append(h),h.append(R("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let f;try{f=await gy()}catch{h.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let u=window.KE,d=c,_=i?new Set(i.filter(b=>Jf.has(b))):Jf;if(!d)for(let b of t){let S=f.byId[b];if(S&&_.has(S.type)){d=f.get(b);break}}let x=!!d&&!c;d||(d=py(f,{modules:s||["words","phrases","grammar","patterns"],types:i?[..._]:Kf,lv:1},1)[0]||f.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let w=u.isTyped(d);n._q=d,h.innerHTML="";let g=R("div",{class:"fb"}),p=R("div",{class:"q-body"});h.append(R("div",{class:"p-head"},R("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),R("div",{class:"q-type"},c?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(x?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":u.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),R("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?R("div",{class:"q-sub"},d.sub):null,p,g);let P=!1,F=(b,S)=>{P||(P=!0,dy(d,b,S,a),g.className="fb "+(b?"ok":"bad"),g.append(R("div",{},b?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",b?null:R("b",{class:"en"},d.answer)),!b&&d.why?R("div",{class:"why"},d.why):null,R("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(b,w,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let b=R("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),S=()=>{P||!b.value.trim()||F(f.check(d,b.value).ok,b.value)};b.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"&&S()}),p.append(R("div",{class:"typerow"},b,R("button",{class:"btn",onclick:S},"\u9001\u51FA"))),setTimeout(()=>b.focus(),50)}else{let b=R("div",{class:"opts"});(d.options||[]).forEach(S=>b.append(R("button",{class:"opt"+(/[a-z]/i.test(S)?" en":""),onclick:T=>{if(P)return;let U=f.check(d,S).ok;T.currentTarget.classList.add(U?"ok":"bad"),F(U,S)}},S))),p.append(b)}}function xy(){return new Map}function td(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function dh(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function _y(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function ed(n){let t=xy();for(let e in n||{})t.set(e,_y(n[e]));return t}var cl=16;var s1=18;var Gr=32;function yy(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ke=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],xt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function vy(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Ce(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function bi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let c=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(c)*s*(.6+t()*.5),i+Math.sin(c)*s*(.6+t()*.5)])}Ce(n,o)}var by=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail","scaffold"]);function My(n,t){let e=ke(t.color),i=yy(vy(t.block+t.face)),s=Gr;if(by.has(t.pattern)){Sy(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=xt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?ke(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=xt(e,1.12);for(let u=0;u<4;u++)bi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=xt(e,.96);for(let u=0;u<4;u++)bi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let u=ke(t.top);n.fillStyle=xt(u);let d=[[0,0],[s,0]];for(let _=s;_>=0;_-=4)d.push([_,8+Math.round(i()*5)]);Ce(n,d)}if(o==="stone"||o==="bedrock")for(let u=0;u<5;u++)n.fillStyle=xt(e,i()<.5?.9:1.08),bi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let u=0;u<4;u++)n.fillStyle=xt(e,.92),bi(n,i,i()*s,i()*s,5);n.fillStyle=xt(a);for(let u=0;u<5;u++)bi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let u=0;u<26;u++)n.fillStyle=xt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let u=3;u<s;u+=7)n.fillStyle=xt(e,.82),n.fillRect(u,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=xt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=xt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let u=0;u<9;u++)n.fillStyle=xt(e,i()<.5?.78:1.15),bi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let u=7;u<s;u+=8)n.fillStyle=xt(e,.78),n.fillRect(0,u,s,1);n.fillStyle=xt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=xt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=xt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=xt([185,182,174]),Ce(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=xt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Ce(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=xt(e,1.18,.72);for(let u=6;u<s;u+=10)n.fillRect(4+Math.floor(i()*10),u,10,2)}if(o==="gold"&&(n.fillStyle=xt(e,1.15),Ce(n,[[0,0],[s,0],[0,s]]),n.fillStyle=xt(e,.9),Ce(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=xt(ke("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=xt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=xt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=xt(ke("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=xt(ke("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=xt(a),n.fillRect(14,0,4,4)):(n.fillStyle=xt(ke(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=xt(a),n.fillRect(0,0,s,10),n.fillStyle=xt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=xt(ke("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=xt(a),n.fillRect(0,0,9,14))),o==="wool")for(let u=0;u<7;u++)n.fillStyle=xt(e,i()<.5?.94:1.04),bi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=xt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=xt(a,1.3),Ce(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=xt(ke("#EFEBDD"),1,.8),Ce(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=xt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let u=8;u<s;u+=9)n.fillStyle=xt(e,.9),n.fillRect(0,u,s,2);if(o==="cactus")if(t.face==="side"){for(let u=4;u<s;u+=8)n.fillStyle=xt(e,.82),n.fillRect(u,0,2,s);n.fillStyle=xt(ke("#EFEBDD"),1,.7);for(let u=0;u<6;u++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=xt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=xt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=xt(e,1.25);for(let u of[9,24])n.fillRect(0,u,s,3)}else n.fillStyle=xt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Ce(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Ce(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=xt(e,1.1),Ce(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=xt(e,.92),Ce(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=xt(e,.78);for(let u=0;u<s;u+=8){n.fillRect(0,u+7,s,1);let d=u/8%2?0:8;for(let _=d;_<s;_+=16)n.fillRect(_,u,1,8)}}if(o==="mossy"){n.fillStyle=xt(a);for(let u=0;u<6;u++)bi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=xt(e,.6),Ce(n,[[4,2],[12,14],[10,15],[3,4]]),Ce(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=xt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=xt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=xt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=xt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=xt(e,1.08),Ce(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=xt(ke("#D9CBB5"));for(let u=0;u<s;u+=8){n.fillRect(0,u+6,s,2);let d=u/8%2?0:8;for(let _=d;_<s;_+=16)n.fillRect(_,u,2,6)}}if(o==="checker"&&(n.fillStyle=xt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let u=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let _=3;for(;_<s-4;){let x=3+Math.floor(i()*3);n.fillStyle=u[Math.floor(i()*u.length)],n.fillRect(_,d+Math.floor(i()*3),x,11),_+=x+1}}n.fillStyle=xt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let u=7;u<s;u+=8)n.fillStyle=xt(e,.8),n.fillRect(0,u,s,1);if(o==="hay")if(t.face==="side"){for(let u=3;u<s;u+=5)n.fillStyle=xt(e,.88),n.fillRect(u,0,1,s);n.fillStyle=xt(ke("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=xt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let u=5;u<s;u+=6)n.fillStyle=xt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=xt(ke("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=xt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=xt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=xt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Ce(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let u=7;u<s;u+=8)n.fillStyle=xt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=xt(ke("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=xt(ke("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=xt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=xt(e),n.fillRect(0,0,s,s),n.fillStyle=xt(ke("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let u=7;u<s;u+=8)n.fillStyle=xt(e,.85),n.fillRect(0,u,s,1);t.face==="side"&&(n.fillStyle=xt(a),n.fillRect(0,11,s,3),n.fillStyle=xt(ke("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let u=3;u<s;u+=6)n.fillStyle=xt(e,.72),n.fillRect(0,u,s,2);if(o==="furnace"){for(let u=0;u<4;u++)n.fillStyle=xt(e,i()<.5?.9:1.08),bi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=xt(a),n.fillRect(8,15,s-16,11),n.fillStyle=xt(ke("#E0352B"),1,.85),Ce(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=xt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=xt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=xt(a),Ce(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=n.getImageData(0,0,s,s),h=c.data;for(let u=0;u<h.length;u+=4){let d=1+(i()-.5)*.09;h[u]=Math.min(255,h[u]*d),h[u+1]=Math.min(255,h[u+1]*d),h[u+2]=Math.min(255,h[u+2]*d)}n.putImageData(c,0,0);let f=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=f,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function id(n){let t=document.createElement("canvas");t.width=t.height=Gr*cl;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Gr;let a=o.getContext("2d",{willReadFrequently:!0});My(a,s),e.drawImage(o,r%cl*Gr,Math.floor(r/cl)*Gr),i[r]=o}),{canvas:t,tileCanvas:i}}function Sy(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?ke(t.accent):e,a=(c,h,f)=>{n.fillStyle=f,n.fillRect(c,s-h,2,h)};if(r==="flower"){a(15,18,xt(e)),n.fillStyle=xt(e,1.1),Ce(n,[[16,26],[9,20],[15,22]]),Ce(n,[[17,24],[24,18],[18,21]]),n.fillStyle=xt(o);for(let c=0;c<5;c++){let h=c/5*Math.PI*2;Ce(n,[[16,9],[16+Math.cos(h)*7,9+Math.sin(h)*7],[16+Math.cos(h+.6)*7,9+Math.sin(h+.6)*7]])}n.fillStyle=xt(ke("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let c=0;c<6;c++){let h=4+c*4+Math.floor(i()*2),f=14+Math.floor(i()*14);n.fillStyle=xt(e,i()<.5?.9:1.1),Ce(n,[[h,s],[h+3,s],[h+1+(r==="fern"?2:0),s-f]])}else if(r==="deadbush")n.strokeStyle=xt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=xt(e),n.fillRect(14,18,4,14),n.fillStyle=xt(o),Ce(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=xt(ke("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=xt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=xt(e,1.12);for(let c=3;c<s;c+=7)n.fillRect(5,c,s-10,3)}else if(r==="scaffold")n.fillStyle=xt(e,.82),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),n.fillStyle=xt(e),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillStyle=xt(e,1.1),Ce(n,[[3,s-6],[s-6,3],[s-3,6],[6,s-3]]);else if(r==="wheat"){let c=Number(t.block.split("_")[1])||0,h=[8,14,21,28][c];for(let f=0;f<5;f++){let u=5+f*5;n.fillStyle=xt(e),n.fillRect(u,s-h,2,h),c===3&&(n.fillStyle=xt(o),Ce(n,[[u-2,s-h+9],[u+1,s-h-1],[u+4,s-h+9]]))}}else if(r==="rail"){let c=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],h={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[c];n.save(),n.translate(s/2,s/2),n.rotate(h*Math.PI/2),n.translate(-s/2,-s/2);let f=xt(ke("#8C6640")),u=xt(e),d=s*.33,_=s*.67;if(c==="ns"||c==="ew"){n.fillStyle=f;for(let x=2;x<s;x+=6)n.fillRect(4,x,s-8,3);n.fillStyle=u,n.fillRect(d-1.5,0,3,s),n.fillRect(_-1.5,0,3,s),t.accent&&(n.fillStyle=xt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=f,n.lineWidth=3;for(let x=0;x<5;x++){let w=Math.PI/2+(x+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(w)*(s-_-4),Math.sin(w)*(s-_-4)),n.lineTo(s+Math.cos(w)*(s-d+4),Math.sin(w)*(s-d+4)),n.stroke()}n.strokeStyle=u;for(let x of[s-d,s-_])n.beginPath(),n.arc(s,0,x,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=xt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var sd=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,rd=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function wy(n,t){let e=vi(n),i=vi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,c=(i+r)*16,h=n<a?a-n:n>=a+16?n-(a+16-1):0,f=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(h,f)<=14&&s.push([e+o,i+r])}return s}function ad(n){let t=new Pn(n);t.magFilter=He,t.minFilter=He,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new J(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new an({uniforms:e,vertexShader:sd,fragmentShader:rd}),s=new an({uniforms:e,vertexShader:sd,fragmentShader:rd,transparent:!0,depthWrite:!1,side:In});return{opaque:i,trans:s,uniforms:e,tex:t}}function od(n){let t=new Sn;return t.setAttribute("position",new Ye(n.pos,3)),t.setAttribute("uv",new Ye(n.uv,2)),t.setAttribute("light",new Ye(n.light,1)),t.setAttribute("lt",new Ye(n.lt,2,!0)),t.setIndex(new Ye(n.index,1)),t.computeBoundingSphere(),t}var hl=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=cs(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Le(od(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Le(od(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=vi(t),s=vi(e),r=Gf(i,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let h=cs(c.cx,c.cz);if(this.chunks.has(h))continue;let f={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(h,f),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:f.meshRev})}let o=this.rd+1.5,a=[];for(let[c,h]of this.chunks){let f=h.cx-i,u=h.cz-s;if(f*f+u*u>o*o){for(let d of["o","t"])h[d]&&(this.scene.remove(h[d]),h[d].geometry.dispose());this.chunks.delete(c),a.push(c)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(c=>{let[h,f]=c.split(",").map(Number);return Math.abs(h-i)>this.rd+3||Math.abs(f-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let i=this.chunks.get(cs(vi(t),vi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=oh(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(cs(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=oh(t,e,i);if(!r)return!1;let o=cs(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,td(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let c=Math.floor(t),h=Math.floor(i);for(let[f,u]of wy(c,h))this.dirtyMesh.add(cs(f,u));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var ai={};function Xs(n){return ai[n]||(ai[n]=new xn({color:n,transparent:!0}),ai[n].userData.base=new Kt(n)),ai[n]}var Hr=null;function Ay(){if(Hr)return Hr;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Hr=new Pn(n),Hr.colorSpace=Ge,Hr}function ld(n,t){let e=new mn,i=n.colors,[s,r]=n.size,o=(c,h,f,u,d,_,x,w)=>{let g=new Le(new un(c,h,f),w||Xs(u));return g.position.set(d,_,x),e.add(g),g},a=[];if(n.kind==="villager"){for(let h of[-.13,.13]){let f=o(.2,.6,.22,i.leg,h,.6,0);f.geometry.translate(0,-.6/2,0),a.push(f)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let h of[-.36,.36])o(.16,.62,.18,t||i.body,h,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let c=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);ai.__face||(ai.__face=new xn({map:Ay(),transparent:!0}),ai.__face.userData.base=new Kt("#ffffff"));let h=[Xs(i.head),Xs(i.head),Xs(i.head),Xs(i.head),Xs(i.head),ai.__face],f=new Le(new un(s*.9,s*.8,s*.8),h);f.position.set(0,r*.72+s*.4,0),e.add(f),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let c=r<1&&n.id!=="chicken",h=n.id==="chicken"?.25:c?r*.35:.45,f=r-h-(n.id==="chicken"?.15:.25);o(s,f,n.id==="chicken"?s:s*1.35,i.body,0,h+f/2,0),i.patch&&o(s*.5,f*.55,.02+s*1.36,i.patch,s*.12,h+f*.55,0);let u=n.id==="chicken"?.3:c?.32:.45,d=o(u,u,u,i.head,0,h+f+u*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let g of[-u*.3,u*.3])o(u*.26,u*.3,u*.16,i.ear,g,d.position.y+u*.6,d.position.z);if(i.eye)for(let g of[-u*.24,u*.24])o(u*.24,u*.26,.02,i.eye,g,d.position.y+u*.05,d.position.z-u/2-.01);if(n.pet){let g=o(.08,.08,.32,i.body,0,h+f*.85,s*.68+.12);g.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+u/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-u/2-.05));let _=n.id==="chicken"?.06:.18,x=n.id==="chicken"?0:s*.45,w=s*.3;for(let[g,p]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-w,-x],[w,-x],[-w,x],[w,x]]){let P=o(_,h,_,i.leg,g,h/2,p);P.geometry.translate(0,-h/2,0),P.position.y=h,a.push(P)}}return e.userData.legs=a,e}function cd(n){for(let t in ai){let e=ai[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function hd(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var en=null,qs=null,ph=null;var li=()=>window.HIAudio||null,fd=()=>li()?li().get():{muted:!1,music:.35,sfx:.7};function ul(){try{li()&&li().unlock()}catch{}if(!en){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;en=new n,qs=en.createGain(),qs.connect(en.destination),ph=en.createBuffer(1,en.sampleRate,en.sampleRate);let t=ph.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}en.state==="suspended"&&en.resume(),mh()}function mh(){if(qs){let n=fd();qs.gain.setTargetAtTime(n.muted?0:n.sfx,en.currentTime,.03)}}var fl=()=>fd().muted;function dd(){return li()&&li().toggle(),mh(),fl()}function gh(n){li()&&li().set(n),mh()}function pd(n){try{li()&&li().scene(n)}catch{}}function md(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Nn(n,t,e,i,s,r,o){let a=en.createOscillator(),c=en.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),md(c,e,i,s,r),a.connect(c),c.connect(qs),a.start(e),a.stop(e+i+r+.05)}function Hi(n,t,e,i,s,r=1){let o=en.createBufferSource(),a=en.createBiquadFilter(),c=en.createGain();o.buffer=ph,a.type=n,a.frequency.value=t,a.Q.value=r,md(c,e,.004,i,s),o.connect(a),a.connect(c),c.connect(qs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var ud={wood:(n,t)=>{Nn("sine",190*t,n,.003,.16,.12,95*t),Hi("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Hi("highpass",1800*t,n,.1,.06),Nn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Hi("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Nn("sine",1900*t,n,.002,.08,.25,1500*t),Hi("highpass",4200,n,.06,.12)},soft:(n,t)=>{Hi("bandpass",850*t,n,.09,.1,.8)}};function ze(n,t="soft"){if(!en||fl())return;let e=en.currentTime+.005,i=ud[t]||ud.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Hi(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Nn("sine",880,e,.002,.07,.08,1320);break;case"chest":Nn("triangle",160,e,.02,.07,.3,120),Nn("sine",330,e+.12,.005,.05,.15);break;case"door":Nn("sawtooth",120,e,.03,.04,.3,160),Hi("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Hi("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Nn("triangle",659,e,.005,.08,.15),Nn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Nn("sine",1319,e,.002,.08,.08),Nn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Nn("triangle",300,e,.005,.1,.18,200);break;default:break}}var Wi=(n,t,e,i=0)=>t>=n[0]-i&&t<=n[2]+i&&e>=n[1]-i&&e<=n[3]+i,gd=(n,t)=>{let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296};function Cy(n,t,e,i){let s=new Map,r=t.GY,o=n.x+n.w-1,a=n.z+n.d-1,c=(x,w,g,p)=>s.set(x+","+w+","+g,p),h=i?"s2n":n.door,f=i?1:n.doorW||2,u=i?"n":h,d=u==="n"||u==="s"?n.x+(n.w>>1):n.z+(n.d>>1),_=(x,w)=>{let g=u==="n"||u==="s"?x:w,p=d-(f>>1);return g<p||g>=p+f?!1:u==="n"&&w===n.z||u==="s"&&w===a||u==="w"&&x===n.x||u==="e"&&x===o};for(let x=n.x;x<=o;x++)for(let w=n.z;w<=a;w++){let g=x===n.x||x===o||w===n.z||w===a,p=(x===n.x||x===o)&&(w===n.z||w===a);c(x,r,w,e(n.floor||"planks")),c(x,r+n.h+1,w,e(n.roof));for(let P=r+1;P<=r+n.h;P++){if(!g){c(x,P,w,0);continue}if(_(x,w)&&P<=r+2){c(x,P,w,i?e("door"):0);continue}let F=x===n.x||x===o?w-n.z:x-n.x,b=!p&&P===r+2&&F%3===1&&!_((x===n.x||x===o,x),w)&&n.h>=4;c(x,P,w,e(b?"glass":n.wall))}}for(let[x,w,g,p]of n.props||[])c(n.x+w,r+1+g,n.z+p,e(x));return s}function xd(n,t){let e=b=>n.num(b),i=t.GY,s=t.sidewalk,r=t.bound,o=t.homes.map(b=>Object.assign({floor:"planks",door:"n",isHome:!0},b)),a=t.buildings.concat(o),c=a.map(b=>({b,arr:[...Cy(b,t,e,!!b.isHome)].map(([S,T])=>S.split(",").map(Number).concat(T))})),h=new Set;for(let b of a){let S=b.isHome?"n":b.door,T=b.x+b.w-1,U=b.z+b.d-1,M=b.x+(b.w>>1),C=b.z+(b.d>>1),I={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]}[S],D=S==="w"?b.x-1:S==="e"?T+1:M,X=S==="n"?b.z-1:S==="s"?U+1:C;for(let B=0;B<14&&!t.roads.some(k=>Wi(k,D,X,s));B++){for(let k of[-1,0,1])h.add((I[0]?D:D+k)+","+(I[0]?X+k:X));D+=I[0],X+=I[1]}}let f=t.park,u=f.pond,d=(b,S)=>b>=f.x&&b<f.x+f.w&&S>=f.z&&S<f.z+f.d,_=new Set;for(let b of t.roads){let S=b[2]-b[0]>b[3]-b[1];for(let T=S?b[0]:b[1];T<=(S?b[2]:b[3]);T+=12)for(let U of[-1,1]){let M=S?T:U<0?b[0]-s:b[2]+s,C=S?U<0?b[1]-s:b[3]+s:T;t.roads.some(I=>I!==b&&Wi(I,M,C,s+2))||[-1,0,1].some(I=>[-1,0,1].some(D=>h.has(M+I+","+(C+D))))||_.add(M+","+C)}}let x=(b,S)=>{for(let T of t.roads)if(Wi(T,b,S)){let U=T[2]-T[0]>T[3]-T[1];return t.roads.find(I=>I!==T&&Wi(I,b,S,5)&&!Wi(I,b,S))?(U?b:S)&1?e("crossing"):e("road"):t.roads.some(I=>I!==T&&Wi(I,b,S))?e("road"):(U?S===Math.round((T[1]+T[3])/2):b===Math.round((T[0]+T[2])/2))&&((U?b:S)%4+4)%4<2?e("road_line"):e("road")}return t.roads.some(T=>Wi(T,b,S,s))||h.has(b+","+S)?e("sidewalk"):d(b,S)&&b>=u[0]&&b<=u[2]&&S>=u[1]&&S<=u[3]?e("water"):e("grass")},w=new Set(f.trees.map(([b,S])=>b+","+S));for(let b=-r+2;b<=r-2;b+=6)for(let[S,T]of[[b,-r+1],[b,r-1],[-r+1,b],[r-1,b]])t.roads.some(U=>Wi(U,S,T,s+1))||w.add(S+","+T);let g=t.secrets||{rooms:[]},p=(g.board?g.board.ops:[]).concat(...g.rooms.map(b=>b.ops));function P(b,S){let T=new Uint8Array(16384),U=b*16,M=S*16,C=(I,D,X,B)=>{D>0&&D<64&&(T[Dn(I,D,X)]=B)};for(let I=0;I<16;I++)for(let D=0;D<16;D++){let X=U+D,B=M+I;T[Dn(D,0,I)]=e("bedrock");for(let q=1;q<i-3;q++)T[Dn(D,q,I)]=e("stone");for(let q=i-3;q<i;q++)T[Dn(D,q,I)]=e("dirt");let k=x(X,B);if(T[Dn(D,i,I)]=k,k===e("water")){T[Dn(D,i-1,I)]=e("sand");continue}if(Math.abs(X)>r||Math.abs(B)>r){C(D,i+1,I,e("hedge")),C(D,i+2,I,e("hedge"));continue}if(_.has(X+","+B)){for(let q=i+1;q<=i+3;q++)C(D,q,I,e("lamp_pole"));C(D,i+4,I,e("lantern"));continue}if(w.has(X+","+B)){for(let q=i+1;q<=i+3;q++)C(D,q,I,e("log"));continue}k===e("grass")&&d(X,B)&&gd(X,B)<.06&&C(D,i+1,I,e(["flower_rose","flower_dandelion","flower_cornflower","tallgrass"][Math.floor(gd(B,X)*4)]))}for(let I of w){let[D,X]=I.split(",").map(Number);for(let B=-2;B<=2;B++)for(let k=-2;k<=2;k++)for(let q=3;q<=5;q++){if(Math.abs(B)+Math.abs(k)>(q===5?1:3))continue;let nt=D+B-U,tt=X+k-M;nt<0||nt>=16||tt<0||tt>=16||B===0&&k===0&&q===3||C(nt,i+q+1,tt,e("leaves"))}}for(let{b:I,arr:D}of c)if(!(I.x>U+16-1||I.x+I.w-1<U||I.z>M+16-1||I.z+I.d-1<M))for(let[X,B,k,q]of D){let nt=X-U,tt=k-M;nt>=0&&nt<16&&tt>=0&&tt<16&&C(nt,B,tt,q)}for(let[I,D,X,B,k,q=X,nt=B,tt=k]of p){if(q<U||X>U+16-1||tt<M||k>M+16-1)continue;let Q=D==="air"?0:e(D);for(let j=Math.max(X,U);j<=Math.min(q,U+16-1);j++)for(let ht=Math.max(k,M);ht<=Math.min(tt,M+16-1);ht++)for(let dt=B;dt<=nt;dt++){let kt=j===X||j===q||dt===B||dt===nt||ht===k||ht===tt;C(j-U,dt,ht-M,I==="hollow"&&!kt?0:Q)}}for(let[I,D,X]of f.benches){let B=I-U,k=D-M;B>=0&&B<16&&k>=0&&k<16&&C(B,i+1,k,e("stairs_planks"+["","_e","_s","_w"][X]))}for(let[I,D,X,B]of t.cars)for(let k=0;k<4;k++)for(let q=0;q<2;q++){let nt=I+(B==="x"?k:q),tt=D+(B==="x"?q:k),Q=nt-U,j=tt-M;Q<0||Q>=16||j<0||j>=16||(C(Q,i+1,j,e(X)),C(Q,i+2,j,e(k===1||k===2?"glass":X)))}return T}let F={x:t.spawn[0],y:i+1,z:t.spawn[1],stele:{x:0,y:i+1,z:0}};return{genChunk:P,findSpawn:()=>F,height:()=>i,baseHeight:()=>i,biomeOf:()=>"town",villages:{around:()=>[]},homes:o,buildings:t.buildings,GY:i}}function _d(n,t,e,i,s){return n?t>n.x&&t<n.x+n.w-1&&i>n.z&&i<n.z+n.d-1&&e>=s+1&&e<=s+n.h:!1}function yd(n,t,e){let i=[];for(let s=n.x;s<n.x+n.w;s++)for(let r=n.z;r<n.z+n.d;r++)for(let o=t+1;o<=t+n.h;o++)(s===n.x||s===n.x+n.w-1||r===n.z||r===n.z+n.d-1)&&e(s,o,r)&&i.push([s,o,r]);return i}var xh=18;function Wr(n,t,e=1){let i=t+n.h+1;return{slab:i,roof:e===2?i+n.h+1:i,ladder:[n.x+1,n.z+n.d-2],h:e===2?n.h*2+1:n.h}}function vd(n,t,e={}){let i=e.floors===2?2:1,s=e.theme||"none",r=Wr(n,t,i),o=[],a=(g,p,P,F)=>o.push([g,p,P,F]),c=n.x+n.w-1,h=n.z+n.d-1,f=n.x+(n.w>>1),u=f,d=n.z+(n.d>>1),_=(g,p)=>s==="castle"?"stone_bricks":s==="tree"?p?"log":"planks":s==="lighthouse"?(g-t)%4<2?"wool":"wool_red":e.wall||n.wall,x={castle:"stone_bricks",tree:"leaves",lighthouse:"wool_red"}[s]||n.roof;for(let g=n.x;g<=c;g++)for(let p=n.z;p<=h;p++){let P=g===n.x||g===c||p===n.z||p===h,F=(g===n.x||g===c)&&(p===n.z||p===h),b=g===n.x||g===c?p-n.z:g-n.x,S=g===r.ladder[0]&&p===r.ladder[1];for(let T=t+1;T<=t+xh;T++)if(T>r.roof)a(g,T,p,"air");else if(T===r.roof)a(g,T,p,x);else if(P){if(g===f&&p===n.z&&T<=t+2)continue;let U=(T-t-1)%(n.h+1);a(g,T,p,!F&&U===1&&b%3===1&&n.h>=4?"glass":_(T,F))}else i===2&&T===r.slab?a(g,T,p,S?"air":"planks"):i===2&&S&&T<r.slab&&a(g,T,p,"ladder")}let w=r.roof;if(s==="tree")for(let g=n.x-1;g<=c+1;g++)for(let p=n.z-1;p<=h+1;p++){let P=Math.max(n.x-g,g-c,0),F=Math.max(n.z-p,p-h,0),b=Math.min(g-n.x,c-g,p-n.z,h-p);P||F||(b>=1&&a(g,w+1,p,"leaves"),b>=2&&a(g,w+2,p,"leaves"))}if(s==="lighthouse")for(let g=u-1;g<=u+1;g++)for(let p=d-1;p<=d+1;p++){let P=g!==u||p!==d;for(let F=w+1;F<=w+3;F++)a(g,F,p,(F-w)%2?"wool":"wool_red");a(g,w+4,p,P?"glass":"lantern"),a(g,w+5,p,"wool_red")}if(s==="castle")for(let g=n.x;g<=c;g++)for(let p=n.z;p<=h;p++){let P=g===n.x||g===c||p===n.z||p===h,F=(g===n.x||g===c)&&(p===n.z||p===h),b=g===n.x||g===c?p-n.z:g-n.x;F?(a(g,w+1,p,"stone_bricks"),a(g,w+2,p,"stone_bricks"),a(g,w+3,p,"stone_bricks")):P&&b%2===0&&a(g,w+1,p,"stone_bricks")}return o}function bd(n,t=Math.random){let e=i=>{let s=i.slice();for(let r=s.length-1;r>0;r--){let o=Math.floor(t()*(r+1));[s[r],s[o]]=[s[o],s[r]]}return s};return{d:n,turn:0,tries:0,coins:0,right:0,phase:"talk",cards:n.turns.map(i=>e(i.cards)),check:e(n.check.options.map((i,s)=>({zh:i,ok:s===n.check.answer})))}}function Md(n,t){if(n.phase!=="talk")return{ok:!1};let e=n.cards[n.turn][t];if(!e)return{ok:!1};if(!e.ok)return n.tries++,{ok:!1,card:e};let i=n.tries===0;return i&&(n.coins++,n.right++),n.turn++,n.tries=0,n.turn>=n.d.turns.length&&(n.phase="check"),{ok:!0,first:i,card:e,next:n.phase}}function Sd(n,t){if(n.phase!=="check")return{ok:!1};let e=n.check[t];return n.phase="done",e&&e.ok&&(n.coins+=2),{ok:!!(e&&e.ok),coins:n.coins}}function wd(n,t,e=1.2){if(n.wait>0){n.wait-=t,n.v={x:0,y:0,z:0};return}let i=n.route,s=i[n.ri%i.length],r=s[0]+.5-n.p.x,o=s[1]+.5-n.p.z,a=Math.hypot(r,o);if(a<.15){n.ri=(n.ri+1)%i.length,n.wait=s[2]?0:1.5;return}let c=Math.min(a,e*t);n.p.x+=r/a*c,n.p.z+=o/a*c,n.yaw=Math.atan2(-r,-o),n.v={x:r/a*e,y:0,z:o/a*e}}var qn={skin:["#F3D6B8","#E7CDA6","#C99A6B","#8C5A3A","#5C3A24"],hair:["short","long","bun","spiky","none"],hairColor:["#151714","#5C3A24","#C9904F","#D9B860","#C2443A"],top:["#2F5A34","#3F6E9A","#C2443A","#D9A63A","#C9709F","#EFEBDD","stripe","star"],bottom:["#26302A","#3F6E9A","#8C6640","#5E6660"],hat:["none","cap","beanie","bow","flower","tophat","crown"],glasses:[!1,!0],acc:["none","scarf","goldbadge","backpack","cape"]},Ry=()=>({skin:1,hair:0,hairColor:0,top:0,bottom:0,hat:0,glasses:0,acc:0});function Xr(n){let t=Ry();for(let e in t){let i=n&&Number.isInteger(n[e])?n[e]:t[e];t[e]=Math.max(0,Math.min(qn[e].length-1,i))}return t}var Ad=n=>({skin:qn.skin[n.skin],hair:qn.hair[n.hair],hairColor:qn.hairColor[n.hairColor],top:qn.top[n.top],bottom:qn.bottom[n.bottom],hat:qn.hat[n.hat],glasses:qn.glasses[n.glasses],acc:qn.acc[n.acc]}),Ed=(n,t,e,i)=>{let s=n[e+":"+i];return!!s&&!t.has(s)},Td=n=>Object.fromEntries(n.items.filter(t=>t.slot).map(t=>[t.slot+":"+t.value,t.id]));function Cd(n,t,{coins:e=0,hasHome:i=!1}={}){return n?t.has(n.id)?{ok:!1,reason:"owned"}:n.needHome&&!i?{ok:!1,reason:"home"}:e<n.price?{ok:!1,reason:"coins",short:n.price-e}:{ok:!0}:{ok:!1,reason:"missing"}}var Rd=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var En=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},Pd=n=>(/^[aeiou]/i.test(n)?"an ":"a ")+n,_h=n=>n.charAt(0).toUpperCase()+n.slice(1),yh=n=>String(n??"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim(),Iy=(n,t)=>!!yh(t)&&[n.a].concat(n.alts||[]).some(e=>yh(e)===yh(t)),Id=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],Ly=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function Xi(n){return n>=100?"one hundred"+(n%100?" and "+Xi(n%100):""):n<20?Id[n]:Ly[Math.floor(n/10)]+(n%10?"-"+Id[n%10]:"")}function Ld(n,t=Math.random){return{job:n,i:0,right:0,answers:[],qs:n.exam.map(e=>e.type==="typed"?{...e}:{...e,cards:En(e.opts.map((i,s)=>({t:i,ok:s===e.a})),t)}),done:!1}}function Dd(n,t){if(n.done)return null;let e=n.qs[n.i],i=e.type==="typed",s=i?Iy(e,t):!!(e.cards[t]&&e.cards[t].ok);return n.answers.push(s),s&&n.right++,n.i++,n.i>=n.qs.length&&(n.done=!0),{ok:s,typed:i,answer:i?e.a:e.opts[e.a],text:i?String(t):(e.cards[t]||{}).t}}var Nd=n=>n.done&&n.right>=8;function Ud(n,t=Math.random){let e=n.task,i=(o,a)=>En(o,t).slice(0,a),s=(o,a)=>({t:o,ok:a});if(e.kind==="go"){let o=i(e.calls,1)[0];return{kind:"go",to:o.to,en:o.en,zh:o.zh,pay:e.pay||5,tries:0}}let r;if(e.kind==="cases")r=i(e.cases,3).map(o=>({en:`${e.who}: "${o.says}"`,zh:o.zh,cards:En([s(o.a,!0),...o.wrong.map(a=>s(a,!1))],t)}));else if(e.kind==="judge")r=i(e.items,3).map(o=>{let a=i(e.students,1)[0],c="That's right! Good job.",h=u=>`Almost! Say: "${u}"`,f=o.ok?[s(c,!0),s(h(o.wrong[0]),!1),s(h(o.wrong[1]||o.wrong[0]),!1)]:[s(h(o.fix),!0),s(c,!1),s(h(o.wrong[0]),!1)];return{en:`${a} says: "${o.says}"`,zh:"\u9019\u53E5\u8A71\u5C0D\u4E0D\u5C0D\uFF1F\u9078\u8001\u5E2B\u8981\u8AAA\u7684\u8A71\u3002",cards:En(f,t)}});else if(e.kind==="change")r=i(e.items,3).map(o=>{let a=o.price<50&&t()<.5?50:100,c=a-o.price,h=[c+10,c-5,c+5,o.price,c-10].filter(u=>u>0&&u!==c&&u<200),f=[...new Set(h)].slice(0,2);return{en:`${_h(Pd(o.en))} is ${Xi(o.price)} dollars. The customer gives you ${Xi(a)} dollars. How much change do you give?`,zh:`${o.zh} ${o.price} \u5143\uFF0C\u5BA2\u4EBA\u7D66 ${a} \u5143\uFF0C\u8981\u627E\u591A\u5C11\u9322\uFF1F`,cards:En([s(_h(Xi(c))+" dollars.",!0),...f.map(u=>s(_h(Xi(u))+" dollars.",!1))],t),change:c}});else if(e.kind==="order")r=Array.from({length:3},()=>{let[o,a]=i(e.foods,2),c=1+Math.floor(t()*3),h=1+Math.floor(t()*3),f=(x,w)=>w===1?Pd(x.sg):Xi(w)+" "+x.pl,u=(x,w,g,p)=>x.icon.repeat(w)+" \uFF0B "+g.icon.repeat(p),d=i(e.foods.filter(x=>x!==o&&x!==a),1)[0],_=[c===h?u(o,c%3+1,a,h):u(o,h,a,c),u(o,c,d,h)];return{en:`Customer: "I'd like ${f(o,c)} and ${f(a,h)}, please."`,zh:"\u5BA2\u4EBA\u9EDE\u4E86\u4EC0\u9EBC\uFF1F\u9078\u5C0D\u7684\u9910\u76E4\u3002",cards:En([s(u(o,c,a,h),!0),..._.map(x=>s(x,!1))],t)}});else if(e.kind==="library"){let o=i(e.books,3),a=En([0,1,2],t),c=u=>e.shelves.find(d=>d.id===u),h=u=>`The ${u.en} shelf.`,f=()=>i(e.readers,1)[0];r=o.map((u,d)=>{let _=c(u.s),x=i(e.shelves.filter(g=>g.id!==u.s),2),w=a[d%3];return w===0?{en:`${f()}: "${i(e.borrow,1)[0].replace("{topic}",_.topic)}"`,zh:"\u8B80\u8005\u60F3\u501F\u4EC0\u9EBC\u66F8\uFF1F\u9078\u4E00\u672C\u7D66\u4ED6\u3002",cards:En([s(u.t,!0),...x.map(g=>s(i(e.books.filter(p=>p.s===g.id),1)[0].t,!1))],t)}:{en:w===1?`${e.who}: "${e.shelve.replace("{t}",u.t)}"`:`${f()}: "${e.giveBack.replace("{t}",u.t)}"`,zh:w===1?"\u9019\u672C\u66F8\u8981\u653E\u5728\u54EA\u500B\u66F8\u67B6\uFF1F":"\u8B80\u8005\u9084\u66F8\u4E86\uFF0C\u9019\u672C\u66F8\u8981\u653E\u56DE\u54EA\u500B\u66F8\u67B6\uFF1F",cards:En([s(h(_),!0),...x.map(g=>s(h(g),!1))],t)}})}else{if(e.kind==="police")return{kind:"police",i:0,right:0,coins:0,n:3};if(e.kind==="bus")return{kind:"bus",i:0,right:0,coins:0,pass:Ny(e,t),tries:0}}return{kind:"quiz",i:0,right:0,qs:r,coins:0}}function Dy(n,t){let e=n.kinds[t.kind];return{en:`a ${e.en} with ${t.hat.en}. ${e.he} is wearing a ${t.shirt.en} shirt`+(t.glasses?" and glasses.":`. ${e.he} doesn't wear glasses.`),zh:`${t.hat.none?"\u6C92\u6234\u5E3D\u5B50":"\u6234"+t.hat.zh}\u7684${e.zh}\uFF0C\u7A7F${t.shirt.zh}\u4E0A\u8863\uFF0C${t.glasses?"\u6709\u6234\u773C\u93E1":"\u6C92\u6234\u773C\u93E1"}`}}function Fd(n,t=Math.random){let e=f=>f[Math.floor(t()*f.length)],i=Object.keys(n.kinds),s={kind:e(i),hat:e(n.hats),shirt:e(n.shirts),glasses:t()<.5},r={kind:()=>({...s,kind:i.find(f=>f!==s.kind)}),hat:()=>({...s,hat:e(n.hats.filter(f=>f.i!==s.hat.i))}),shirt:()=>({...s,shirt:e(n.shirts.filter(f=>f.i!==s.shirt.i))}),glasses:()=>({...s,glasses:!s.glasses})},o=En([s,...En(Object.keys(r),t).slice(0,n.spots.length-1).map(f=>r[f]())],t),a=Dy(n,s),c=e(n.clues),h=f=>({skin:Math.floor(t()*5),hair:e(n.kinds[f.kind].hair),hairColor:Math.floor(t()*4),top:f.shirt.i,bottom:Math.floor(t()*4),hat:f.hat.i,glasses:f.glasses?1:0,acc:0});return{people:o.map(f=>Object.assign({},f,{av:h(f)})),right:o.indexOf(s),en:c.en.replace("{d}",a.en),zh:c.zh.replace("{dz}",a.zh)+"\u3002"}}function Ny(n,t=Math.random){let e=En(n.stops,t).slice(0,n.per),i=En(n.passengers,t),s=r=>r[Math.floor(t()*r.length)];return e.map((r,o)=>{let a=t()<.5,c=s(r.why),h=a?s(n.direct).replace("{stop}",r.en):c[0];return{to:r.id,who:i[o%i.length],direct:a,en:`${i[o%i.length]}: "${h}"`,zh:a?`\u4E58\u5BA2\u8981\u53BB${r.zh}\u3002`:c[1]}})}var vh=(n,t,e)=>n.stops.find(i=>Math.hypot(t-i.at[0],e-i.at[1])<=(n.near||4))||null;function kd(n,t){if(n.kind!=="quiz"||n.i>=n.qs.length)return null;let e=n.qs[n.i],i=e.cards[t];if(!i)return null;let s=!!i.ok;return s&&(n.right++,n.coins+=2),n.i++,{ok:s,answer:e.cards.find(r=>r.ok).t,text:i.t,done:n.i>=n.qs.length}}var Od=n=>({lic:Object.assign({},n&&n.lic),wear:n&&n.wear||null,done:Object.assign({},n&&n.done)});var Fy=[["Can you say this in English?","\u4F60\u6703\u7528\u82F1\u6587\u8AAA\u9019\u53E5\u55CE\uFF1F"],["How do you say this in English?","\u9019\u53E5\u82F1\u6587\u600E\u9EBC\u8AAA\uFF1F"],["Your turn! Say it in English.","\u63DB\u4F60\u4E86\uFF01\u7528\u82F1\u6587\u8AAA\u8AAA\u770B\u3002"]],bh=(n,t)=>n[Math.floor(t()*n.length)],qr=n=>typeof n=="string"&&/^[A-Z0-9"]/.test(n)&&/[.!?]$/.test(n);function ky(n,t,{learned:e={},mistakes:i={}}={}){let s=(n==="pattern"?"p:":"ph:")+t+":";for(let o in i)if(o.startsWith(s)&&i[o]&&!i[o].d)return 0;let r=e[n+":"+t];return r&&r.at?2:1}function Oy(n,t){if(!n)return[];let e=new Map((t.patterns||[]).map(s=>[s.id,s])),i=new Map((t.phrases||[]).map(s=>[s.id,s]));return(n.patterns||[]).filter(s=>e.has(s)).map(s=>({kind:"pattern",id:s,item:e.get(s)})).concat((n.phrases||[]).filter(s=>i.has(s)).map(s=>({kind:"phrase",id:s,item:i.get(s)})))}function Bd(n,t,e={},i=Math.random){let s=Oy(n,t);if(!s.length)return null;let r=[[],[],[]];for(let a of s)r[ky(a.kind,a.id,e)].push(a);let o=r.find(a=>a.length);for(let a=0;a<6;a++){let c=bh(o,i),h,f;if(c.kind==="pattern"){let x=(c.item.ex||[]).concat(c.item.extra||[]).filter(w=>qr(w.en)&&w.zh);if(h=bh((c.item.ex||[]).filter(w=>qr(w.en)&&w.zh),i),!h)continue;f=x.filter(w=>w.en!==h.en&&w.zh!==h.zh).map(w=>w.en)}else{if(!qr(c.item.ex)||!c.item.exZh)continue;h={en:c.item.ex,zh:c.item.exZh},f=s.filter(x=>x.kind==="phrase"&&x.id!==c.id&&qr(x.item.ex)).map(x=>x.item.ex),f.length<2&&(f=f.concat((t.phrases||[]).filter(x=>x.tag===c.item.tag&&x.id!==c.id&&qr(x.ex)).map(x=>x.ex)))}let u=[...new Set(f.filter(x=>x!==h.en))].sort(()=>i()-.5).slice(0,2);if(u.length<2)continue;let[d,_]=bh(Fy,i);return{npc:d,zh:_,say:h.zh,cards:[{en:h.en,ok:!0}].concat(u.map(x=>({en:x,ok:!1}))),src:c.kind+":"+c.id}}return null}function dl(n,t=null){let e=Ad(n),i=new mn,s=[],r={stripe:"#EFEBDD",star:"#2B3F5C"},o=r[e.top]?e.top:null;o&&(e.top=r[o]),t&&(e.top=t.top||e.top,t.hat&&t.hat!=="none"&&(e.hat="none"));let a=(_,x,w,g,p,P,F,b=i)=>{let S=new xn({color:g});S.userData.base=new Kt(g),s.push(S);let T=new Le(new un(_,x,w),S);return T.position.set(p,P,F),b.add(T),T},c=(_,x,w,g,p,P)=>{let F=a(_,x,w,g,p,P,0);return F.geometry.translate(0,-x/2+.05,0),F.position.y+=x/2-.05,F},h=c(.24,.75,.26,e.bottom,-.14,.375),f=c(.24,.75,.26,e.bottom,.14,.375);if(a(.56,.7,.3,e.top,0,1.1,0),o==="stripe"&&!t)for(let _ of[.86,1.06,1.26])a(.57,.08,.31,"#C2443A",0,_,0);o==="star"&&!t&&(a(.22,.07,.02,"#F2C46B",0,1.16,-.16),a(.07,.22,.02,"#F2C46B",0,1.16,-.16),a(.14,.14,.02,"#F2C46B",0,1.16,-.158));let u=c(.18,.66,.2,e.top,-.38,1.12),d=c(.18,.66,.2,e.top,.38,1.12);if(a(.12,.14,.18,e.skin,-.38,.84,0),a(.12,.14,.18,e.skin,.38,.84,0),a(.5,.48,.46,e.skin,0,1.7,0),a(.08,.08,.02,"#151714",-.11,1.74,-.235),a(.08,.08,.02,"#151714",.11,1.74,-.235),a(.14,.04,.02,"#C2443A",0,1.6,-.235),e.hair==="short"&&a(.54,.16,.5,e.hairColor,0,1.97,.02),e.hair==="long"&&(a(.54,.16,.5,e.hairColor,0,1.97,.02),a(.54,.5,.12,e.hairColor,0,1.7,.25)),e.hair==="bun"&&(a(.54,.14,.5,e.hairColor,0,1.96,.02),a(.22,.2,.22,e.hairColor,0,2.12,.12)),e.hair==="spiky")for(let _ of[-.18,0,.18])a(.14,.24,.4,e.hairColor,_,2.02,.02);if(e.hat==="cap"&&(a(.56,.14,.52,"#C2443A",0,2.03,.02),a(.4,.04,.2,"#C2443A",0,1.97,-.32)),e.hat==="beanie"&&a(.56,.24,.52,"#3F6E9A",0,2.06,.02),e.hat==="bow"&&(a(.2,.14,.06,"#C9709F",-.12,2.02,-.1),a(.2,.14,.06,"#C9709F",.12,2.02,-.1)),e.hat==="flower"&&["#C2443A","#F2C46B","#C9709F","#EFEBDD","#3F6E9A","#F2C46B"].forEach((_,x)=>{let w=x/6*Math.PI*2;a(.12,.1,.12,_,Math.sin(w)*.24,1.99,Math.cos(w)*.22)}),e.hat==="tophat"&&(a(.62,.04,.58,"#151714",0,1.97,.02),a(.38,.38,.36,"#151714",0,2.18,.02),a(.39,.06,.37,"#C2443A",0,2.03,.02)),e.hat==="crown"){a(.5,.12,.46,"#D9A63A",0,2,.02);for(let[_,x]of[[-.2,-.2],[0,-.2],[.2,-.2],[-.2,.22],[.2,.22]])a(.09,.12,.06,"#D9A63A",_,2.12,x);a(.07,.07,.02,"#C2443A",0,2,-.215)}if(e.acc==="scarf"&&(a(.56,.1,.34,"#C2443A",0,1.43,0),a(.12,.3,.04,"#C2443A",.12,1.26,-.18)),e.acc==="goldbadge"&&a(.12,.12,.03,"#D9A63A",.14,1.28,-.165),e.acc==="backpack"&&(a(.42,.5,.18,"#D9A63A",0,1.1,.24),a(.3,.16,.04,"#8C6640",0,1,.34)),e.acc==="cape"&&a(.56,.95,.04,"#6E3F8C",0,.98,.18),e.glasses&&(a(.16,.12,.02,"#26302A",-.12,1.74,-.245),a(.16,.12,.02,"#26302A",.12,1.74,-.245)),t){let _=t.hatColor||"#F4F1E8",x=t.extraColor||"#26302A";t.hat==="chef"&&(a(.5,.1,.48,_,0,1.98,.02),a(.44,.36,.42,_,0,2.2,.02)),t.hat==="helmet"&&(a(.6,.22,.56,_,0,2.04,.02),a(.68,.04,.66,_,0,1.94,.04),a(.12,.1,.02,"#C2443A",0,2.06,-.255)),t.hat==="cap"&&(a(.56,.14,.52,_,0,2.03,.02),a(.4,.04,.2,_,0,1.97,-.32)),t.hat==="nurse"&&(a(.4,.12,.3,_,0,2,0),a(.08,.08,.02,"#C2443A",0,2,-.155)),t.extra==="apron"&&a(.44,.62,.03,x,0,1,-.165),t.extra==="tie"&&a(.08,.36,.03,x,0,1.22,-.165),t.extra==="bag"&&(a(.06,.62,.32,x,.32,1.12,0),a(.12,.26,.34,x,.36,.86,0)),t.extra==="stethoscope"&&(a(.04,.3,.03,x,-.12,1.28,-.165),a(.04,.3,.03,x,.12,1.28,-.165),a(.1,.1,.03,"#B9B6AE",.12,1.1,-.17)),t.extra==="badge"&&a(.12,.12,.03,x,-.14,1.28,-.165)}return i.userData={legL:h,legR:f,armL:u,armR:d,mats:s},i}function pl(n,t,e,i){let s=n.userData,r=Math.sin(e*9)*Math.min(1,t/4)*.7;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r,s.armR.rotation.x=r;for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var zd=()=>{let n=new mn,t=[],e=(i,s,r,o,a,c,h,f=n)=>{let u=new xn({color:o});u.userData.base=new Kt(o),t.push(u);let d=new Le(new un(i,s,r),u);return d.position.set(a,c,h),f.add(d),d};return n.userData.mats=t,{g:n,bx:e}};function Vd(n){let{g:t,bx:e}=zd(),i=(s,r,o)=>{for(let a of s)for(let c of r)e(.16,o,o,"#26302A",a,o/2,c)};if(n==="bike"){for(let s of[-.55,.55])e(.08,.5,.5,"#26302A",0,.25,s),e(.1,.2,.2,"#B9B6AE",0,.25,s);e(.08,.08,1.1,"#C2443A",0,.5,0),e(.08,.4,.08,"#C2443A",0,.65,-.5),e(.5,.06,.06,"#26302A",0,.86,-.5),e(.22,.06,.3,"#26302A",0,.62,.3)}else if(n==="scooter"){e(.3,.06,1,"#3F6E9A",0,.1,0);for(let s of[-.45,.45])e(.08,.16,.16,"#26302A",0,.08,s);e(.06,.95,.06,"#B9B6AE",0,.58,-.46),e(.5,.06,.06,"#26302A",0,1.05,-.46)}else if(n==="car")e(1.3,.55,2.4,"#C2443A",0,.55,0),e(1.2,.4,1,"#CFE3DF",0,1.02,.15),e(1.32,.08,1.02,"#C2443A",0,1.25,.15),e(.3,.14,.04,"#F2C46B",-.42,.62,-1.21),e(.3,.14,.04,"#F2C46B",.42,.62,-1.21),i([-.66,.66],[-.8,.8],.44);else if(n==="bus"){e(1.9,1.5,4.6,"#D9A63A",0,1,0);for(let s of[-1.6,-.6,.4,1.4])e(1.92,.5,.7,"#CFE3DF",0,1.25,s);e(1.6,.5,.04,"#CFE3DF",0,1.25,-2.31),e(1.92,.12,4.62,"#26302A",0,.5,0),i([-.9,.9],[-1.5,1.5],.6)}else n==="boat"&&(e(1.1,.36,2.2,"#8C6640",0,-.05,0),e(.9,.06,1.9,"#C49A63",0,.12,0),e(1.12,.1,.5,"#EFEBDD",0,.16,-.9));return t}function Gd(n){let{g:t,bx:e}=zd(),i={dog:["#B88B55","#5C3A24"],cat:["#8C8A84","#5E6660"],rabbit:["#EFEBDD","#E8B4AC"],dalmatian:["#F4F1E8","#151714"]}[n]||["#B88B55","#5C3A24"],s=[-.12,.12].flatMap(o=>[-.18,.18].map(a=>e(.1,.22,.1,i[0],o,.11,a)));e(.32,.26,.56,i[0],0,.34,0);let r=e(.3,.28,.28,i[0],0,.56,-.32);if(e(.05,.05,.02,"#151714",-.08,.6,-.465),e(.05,.05,.02,"#151714",.08,.6,-.465),e(.06,.04,.02,"#151714",0,.52,-.465),n==="rabbit"?(e(.08,.3,.06,i[0],-.08,.84,-.3),e(.08,.3,.06,i[0],.08,.84,-.3),e(.04,.2,.02,i[1],-.08,.84,-.335),e(.04,.2,.02,i[1],.08,.84,-.335),e(.12,.12,.12,"#FFFFFF",0,.38,.32)):n==="cat"?(e(.08,.1,.06,i[1],-.1,.74,-.3),e(.08,.1,.06,i[1],.1,.74,-.3),e(.06,.06,.4,i[0],0,.5,.42)):(e(.08,.16,.08,i[1],-.15,.6,-.28),e(.08,.16,.08,i[1],.15,.6,-.28),e(.06,.06,.24,i[0],0,.46,.36)),n==="dalmatian")for(let[o,a,c]of[[.165,.38,-.1],[-.165,.32,.12],[.1,.475,.15],[-.08,.475,-.12],[.155,.6,-.32]])e(.02+(Math.abs(o)>.15?0:.08),.08,.08+(Math.abs(o)>.15?0:-.06),i[1],o,a,c);return t.userData.legs=s,t.userData.head=r,t}function Hd(n,t,e,i){let s=n.userData,r=Math.sin(e*12)*Math.min(1,t/3)*.6;s.legs.forEach((o,a)=>{o.rotation.x=a%3===0?r:-r});for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var Wd=(n,t)=>{for(let e of n.userData.mats)e.color.copy(e.userData.base).multiplyScalar(t)};function Xd(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Ws(n,s),canSpend:s=>n.coins>=s,spend:async s=>hh(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}var $n=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},Sh=n=>n.charAt(0).toUpperCase()+n.slice(1),zy=n=>typeof n=="string"&&/^[A-Z0-9"']/.test(n)&&/[.!?]$/.test(n),Mh=(n,t)=>t===1?n.sg:Xi(t)+" "+n.pl,Vy=n=>n.length<2?n.join(""):n.length===2?n.join(" and "):n.slice(0,-1).join(", ")+", and "+n[n.length-1];function Zd(n,t=Math.random){let e=$n(n.items,t).slice(0,n.lines).map(i=>{let s=1+Math.floor(t()*n.maxQty);return{id:i.id,n:s,en:Mh(i,s),zh:i.zh}});return{lines:e,en:`${n.please} ${Vy(e.map(i=>i.en))}.`,shelf:$n(n.items,t).map(i=>i.id)}}function Jd(n,t){let e=Object.fromEntries(n.map(i=>[i.id,i.n]));return{results:n.map(i=>({id:i.id,want:i.n,got:t[i.id]||0,ok:(t[i.id]||0)===i.n})),extra:Object.keys(t).filter(i=>t[i]>0&&!e[i])}}function Kd(n,t=Math.random){let e=$n(n.customers,t);return Array.from({length:n.per},(i,s)=>{let[r,o]=$n(n.menu,t),a=t()<.3?2:1,c=t()<.3?2:1,h=n.say[Math.floor(t()*n.say.length)],f=Mh(r,a),u=Mh(o,c);return{who:e[s%e.length],en:h.replace("{A}",Sh(f)).replace("{a}",f).replace("{b}",u),want:{[r.id]:a,[o.id]:c}}})}var jd=(n,t)=>{let e=new Set(Object.keys(n).concat(Object.keys(t).filter(i=>t[i]>0)));for(let i of e)if((n[i]||0)!==(t[i]||0))return!1;return!0},Gy=["first","second","third","fourth"],Hy=["\u4E00","\u4E8C","\u4E09","\u56DB"];function Wy(n,t,e){let i={left:n.filter(r=>r.x>t).sort((r,o)=>r.x-o.x),right:n.filter(r=>r.x<t).sort((r,o)=>o.x-r.x)},s=[];for(let r of["left","right"])i[r].forEach((o,a,c)=>{let h=i[r==="left"?"right":"left"];for(let f of[c[a-1],c[a+1]].filter(Boolean)){let u=r==="left"?"right":"left",d=(_,x)=>_.replace("{turn}",r).replace("{nth}",Gy[a]).replace("{side}",u).replace("{next}",f.en).replace("{turnZh}",r==="left"?"\u5DE6":"\u53F3").replace("{nthZh}",Hy[a]).replace("{sideZh}",u==="left"?"\u5DE6":"\u53F3").replace("{nextZh}",x?f.zh:"");s.push({to:o.id,turn:r,nth:a,next:f.id,en:d(e.how),zh:d(e.howZh,!0),cards:[o.id,f.id,(h[a]||h[0]).id]})}});return s}function Qd(n,t,e,i=Math.random){let s=Wy(n,t,e),r=s[Math.floor(i()*s.length)];return Object.assign({},r,{cards:$n(r.cards,i),tries:0})}var qd=/^hanlin-[56]-u\d+$/,$d=n=>{let t=/^hanlin-(\d)-u(\d+)$/.exec(n);return t?`${t[1]==="5"?"\u4E94\u4E0A":"\u4E94\u4E0B"} Unit ${t[2]}`:n};function tp(n,t){let e=(n||[]).filter(s=>qd.test(s.id)&&(s.sents||[]).length).map(s=>({id:s.id,title:s.title||$d(s.id),sents:s.sents}));if(e.length)return e;let i={};for(let s of t||[])for(let r of s.tb||[])if(qd.test(r))for(let[o,a]of(s.ex||[]).entries())(i[r]=i[r]||[]).push({key:s.id+":"+o,en:a.en,zh:a.zh});return Object.keys(i).sort().map(s=>({id:s,title:$d(s),sents:i[s]}))}function ep(n,t,e){if(!n.length)return null;let i=new Set(n.map(r=>r.id));for(let r=(t||[]).length-1;r>=0;r--){let o=/^tb:(hanlin-[56]-u\d+):/.exec(t[r]&&t[r].id||"");if(o&&i.has(o[1]))return o[1]}let s=0;for(let r of String(e))s=s*31+r.charCodeAt(0)>>>0;return n[s%n.length].id}function np(n,t,e=Math.random,i={}){let s=n.sents.filter(u=>zy(u.en)&&u.zh),r=[],o=new Set,a=u=>(u.blanks||[]).find(d=>d.w&&new RegExp("\\b"+d.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(u.en)&&(d.opts||[]).filter(_=>_!==d.w).length>=2),c=u=>{let d=$n(s.filter(_=>_.en!==u.en&&_.zh!==u.zh),e).map(_=>_.en).filter((_,x,w)=>w.indexOf(_)===x).slice(0,2);return d.length<2?null:{kind:"zh2en",key:u.key,en:i.zh2en||"How do we say this in English?",zh:u.zh,showZh:!0,cards:$n([{t:u.en,ok:!0}].concat(d.map(_=>({t:_,ok:!1}))),e),say:""}},h=u=>{let d=a(u);if(!d)return null;let _=$n(d.opts.filter(x=>x!==d.w),e).slice(0,2);return{kind:"blank",key:u.key,en:u.en.replace(new RegExp("\\b"+d.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b"),"____"),zh:u.zh+(d.cue?`\uFF08\u7A7A\u683C\uFF1A${d.cue}\uFF09`:""),showZh:!0,cards:$n([{t:d.w,ok:!0}].concat(_.map(x=>({t:x,ok:!1}))),e),say:"",full:u.en}},f=$n(s,e);for(let u=0;u<t;u++){let d=u%2?h:c,_=null;for(let x of f)if(!o.has(x.key)&&(_=d(x)||(d===h?c(x):null),_)){o.add(x.key);break}_&&r.push(_)}return r}var ip=(n,t)=>n.steps.length===5?[t.seq5,t.seqZh5]:[t.seq4,t.seqZh4],Yd=n=>Sh(n.v)+" "+n.r+".";function wh(n,t){let[e,i]=ip(n,t);return n.steps.map((s,r)=>({en:`${e[r]}, ${s.v} ${s.r}.`,zh:`${i[r]}\uFF0C${s.zh}\u3002`}))}function sp(n,t,e=Math.random){let i=n.steps.length,[s,r]=ip(n,t),o=wh(n,t);return n.steps.map((a,c)=>{let h=n.steps.slice(c+1),f=h.length?h[Math.floor(e()*h.length)]:n.steps[Math.floor(e()*c)],u=$n([{t:Yd(a),ok:!0},{t:Yd(f),ok:!1},{t:Sh(a.x)+" "+a.r+".",ok:!1}],e);return{kind:"step",key:n.id+":"+c,en:t.ask.replace("{seq}",s[c]),zh:t.askZh.replace("{seq}",r[c]),cards:u,full:o[c].en,n:i}})}function qy(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}function rp(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=qy(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(c=>c.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var op=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var b1=.5*(Math.sqrt(3)-1),M1=(3-Math.sqrt(3))/6;function $r(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function ap(n){let t=new Map;return(e,i,s)=>{let r=Math.floor(e/16),o=Math.floor(s/16),a=r+","+o,c=t.get(a);return c||(c=n.genChunk(r,o),t.set(a,c)),c[Dn(e-r*16,i,s-o*16)]}}function Ah(n,t,e,i,s=t.num("water")){let r=t.flat.solid,o=c=>{let h=t.get(c);return!!(h&&h.interact==="door")},a=c=>!r[c]||o(c);return(c,h)=>Math.abs(c)<=i&&Math.abs(h)<=i&&n(c,e,h)!==s&&!!r[n(c,e,h)]&&a(n(c,e+1,h))&&a(n(c,e+2,h))}function Yr(n,t,e,i,s,r=.3){let o=Math.hypot(i-t,s-e),a=Math.max(1,Math.ceil(o/.25));for(let c=0;c<=a;c++){let h=t+(i-t)*c/a,f=e+(s-e)*c/a;for(let[u,d]of[[-r,-r],[r,-r],[-r,r],[r,r]])if(!n(Math.floor(h+u),Math.floor(f+d)))return!1}return!0}function lp(n,t,e,i,s,r=25e3){if(!n(i,s))return null;if(t===i&&e===s)return[[t,e]];let o=(g,p)=>(g+2048)*4096+(p+2048),a=new Map,c=new Map,h=new Set,f=(g,p)=>{let P=Math.abs(g-i),F=Math.abs(p-s);return Math.max(P,F)+.4142*Math.min(P,F)},u=[],d=g=>{u.push(g);let p=u.length-1;for(;p;){let P=p-1>>1;if(u[P][0]<=g[0])break;u[p]=u[P],u[p=P]=g}},_=()=>{let g=u[0],p=u.pop();if(u.length){let P=0;for(u[0]=p;;){let F=2*P+1,b=F+1,S=P;if(F<u.length&&u[F][0]<u[S][0]&&(S=F),b<u.length&&u[b][0]<u[S][0]&&(S=b),S===P)break;[u[P],u[S]]=[u[S],u[P]],P=S}}return g},x=o(t,e);a.set(x,0),d([f(t,e),t,e]);let w=0;for(;u.length&&w<r;){let[,g,p]=_(),P=o(g,p);if(h.has(P))continue;if(h.add(P),w++,g===i&&p===s){let b=[[g,p]],S=P;for(;c.has(S);)S=c.get(S),b.push([Math.floor(S/4096)-2048,S%4096-2048]);return b.reverse()}let F=a.get(P);for(let b=-1;b<=1;b++)for(let S=-1;S<=1;S++){if(!b&&!S)continue;let T=g+b,U=p+S;if(!n(T,U)||b&&S&&(!n(g+b,p)||!n(g,p+S)))continue;let M=o(T,U),C=F+(b&&S?1.4142:1);h.has(M)||C>=(a.has(M)?a.get(M):1/0)||(a.set(M,C),c.set(M,P),d([C+f(T,U),T,U]))}}return null}function cp(n,t){if(!t||t.length<3)return t;let e=s=>s[0]+.5,i=[t[0]];for(let s=0;s<t.length-1;){let r=t.length-1;for(;r>s+1&&!Yr(n,e(t[s]),t[s][1]+.5,e(t[r]),t[r][1]+.5);)r--;i.push(t[r]),s=r}return i}function hp(n=64){let t=new Map;return{find(e,i,s,r,o){let a=i+","+s+">"+r+","+o;if(t.has(a)){let h=t.get(a);return t.delete(a),t.set(a,h),h}let c=cp(e,lp(e,i,s,r,o));return t.set(a,c),t.size>n&&t.delete(t.keys().next().value),c},clear(){t.clear()},size:()=>t.size}}function up(n,t){let e=[];for(let i=0;i<t.length;i++){let s=t[i],r=t[(i+1)%t.length];if(e.push(s),t.length<2||Yr(n,s[0]+.5,s[1]+.5,r[0]+.5,r[1]+.5))continue;let o=cp(n,lp(n,s[0],s[1],r[0],r[1]));if(o)for(let a of o.slice(1,-1))e.push([a[0],a[1],1])}return e}var Th="b022d786df",fp=new URLSearchParams(location.search),ml=fp.get("test")==="1"||window.__HW_TEST__===!0,Jy=720,Ky=(n,t)=>{try{let e=localStorage.getItem(n);return e??t}catch{return t}},jy=(n,t)=>{try{localStorage.setItem(n,t)}catch{}};function dp(n){let t=null,e=()=>t||(t=new Promise((s,r)=>{let o=indexedDB.open(n,1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})),i=(s,r)=>e().then(o=>new Promise((a,c)=>{let h=o.transaction("kv",s),f=r(h.objectStore("kv"));h.oncomplete=()=>a(f&&f.result),h.onerror=()=>c(h.error)}));return{get:s=>i("readonly",r=>r.get(s)),putMany:s=>i("readwrite",r=>{for(let o in s)r.put(s[o],o)}),all:s=>e().then(r=>new Promise((o,a)=>{let c={},h=r.transaction("kv").objectStore("kv").openCursor(IDBKeyRange.bound(s,s+"\uFFFF"));h.onsuccess=()=>{let f=h.result;f?(c[f.key]=f.value,f.continue()):o(c)},h.onerror=()=>a(h.error)}))}}var Mi=dp("kids_town"),Zr=dp("hw_world"),y={started:!1,overlay:null,p:{x:.5,y:22,z:8.5},v:{x:0,y:0,z:0},yaw:Math.PI,pitch:-.15,onGround:!1,view:"tp",bike:!1,keys:{},joy:{x:0,y:0,active:!1},time:.25,frames:[],dirty:new Set,furn:!1,furnSel:0,furnRot:0,zh:Ky("kt_zh","on")==="on",touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,pending:0};async function Qy(){let[n,t,e,i,s,r,o]=await Promise.all(["data/blocks.json","data/town.json","data/dialogues.json","data/jobs.json","data/shop.json","data/chatgen.json","data/life.json"].map(l=>fetch(l,{cache:"no-cache"}).then(m=>m.json()))),a={blocks:n.blocks.concat(t.blocks),items:n.items,blueprints:n.blueprints},c=Vf(a),h=t.GY,f=xd(c,t),u={};try{let[l,m,E,N,G,$,lt,st]=await Promise.all([Mi.get("kt_player"),Mi.get("kt_home"),Mi.get("kt_avatar"),Zr.get("hw_coins"),Mi.get("kt_jobs"),Mi.get("kt_owned"),Mi.get("kt_pets"),Mi.get("kt_life")]);u={pl:l,home:m,av:E,coins:N,jobs:G,owned:$,pets:lt,life:st,chunks:await Mi.all("kt_chunk:")}}catch(l){console.warn("save unavailable",l)}let d=al(u.coins),_=ed(Object.fromEntries(Object.entries(u.chunks||{}).map(([l,m])=>[l.slice(9),m]))),x=Object.assign({id:null,locked:!1,wall:null,floor:null},u.home||{}),w=Xr(u.av),g=i.jobs,p=Od(u.jobs),P=new Set(Array.isArray(u.owned)?u.owned:[]),F=Object.fromEntries(s.items.map(l=>[l.id,l])),b=Td(s),S=Object.assign({active:null,names:{}},u.pets||{}),T=Object.assign({stats:{},daily:null},u.life||{}),U=t.secrets&&t.secrets.rooms||[],M=()=>p.wear&&g[p.wear]?g[p.wear].uniform:null;u.pl&&Object.assign(y,{p:{x:u.pl.x,y:u.pl.y,z:u.pl.z},yaw:u.pl.yaw||0,view:u.pl.view||"tp"});let C=Ae("#c"),I=new sl({canvas:C,antialias:!1,powerPreference:"high-performance"});I.setPixelRatio(Math.min(window.devicePixelRatio||1,y.touch?1.5:1.25));let D=new xr,X=new Kt("#EFEBDD");D.background=X;let B=new on(70,1,.08,200);B.rotation.order="YXZ";let k=id(c),q=ad(k.canvas),nt=new Worker("assets/kt-worker.js?v="+Th),tt=hp(),Q=new hl({scene:D,mats:q,reg:c,worker:nt,diffs:_,onDirty:l=>{y.dirty.add(l),tt.clear()}});Q.setRenderDistance(y.touch?3:4),B.far=Q.rd*16+40,B.updateProjectionMatrix();let j=await new Promise(l=>{let m=E=>{E.data.type==="ready"&&(nt.removeEventListener("message",m),l(E.data.spawn))};nt.addEventListener("message",m),nt.postMessage({type:"init",seed:1,blocks:a,structures:t,diffs:Object.fromEntries([..._].map(([E,N])=>[E,dh(N)]))})});u.pl||(y.p={x:j.x,y:j.y,z:j.z});let ht=new Set;for(let l of t.buildings.concat(f.homes))for(let m=l.x;m<l.x+l.w;m++)for(let E=l.z;E<l.z+l.d;E++)ht.add(m+","+E);let dt=c.num("water"),kt=(l,m)=>Q.get(l,h,m)===dt,zt=ap(f),Me=Ah(zt,c,h,t.bound),te=Ah((l,m,E)=>Q.ready(l,E)?Q.get(l,m,E):zt(l,m,E),c,h,t.bound),de=(l,m,E)=>rt(xe(),l,m,E),rt=(l,m,E,N)=>{if(l&&oe[l].big&&E>h&&E<=h+3&&ht.has(m+","+N)||l==="boat"&&(E===h&&kt(m,N)||E>h&&E<=h+2&&!kt(m,N)))return!0;let G=Q.get(m,E,N);return c.flat.solid[G]===1&&(c.flat.boxes[G]||!0)},ut=(l,m,E,N,G,$="#26302A")=>{let lt=document.createElement("canvas");lt.width=320,lt.height=120;let st=lt.getContext("2d");st.fillStyle="#EFEBDD",st.fillRect(6,6,308,108),st.strokeStyle=$,st.lineWidth=8,st.strokeRect(6,6,308,108),st.fillStyle=$,st.textAlign="center",st.font="bold 46px sans-serif",st.fillText(l,160,60),st.font="30px sans-serif",st.fillText(m,160,100);let yt=new Pn(lt);yt.colorSpace=Ge;let Ft=new Di(new _i({map:yt,depthWrite:!1}));return Ft.scale.set(3.2,1.2,1),Ft.position.set(E,N,G),D.add(Ft),Ft};for(let l of t.buildings){let m=l.door==="s"?l.z+l.d+.4:l.door==="n"?l.z-.4:l.z+l.d/2,E=l.door==="e"?l.x+l.w+.4:l.door==="w"?l.x-.4:l.x+l.w/2;ut(l.en,l.zh,E,h+l.h+.4,m,"#C2443A")}ut(t.park.en,t.park.zh,t.park.x+2,h+3.5,t.park.z-.5,"#3E6B3A");let Pt=l=>"note:"+l.room.id+":"+l.i,qt=l=>{let m=document.createElement("canvas");m.width=96,m.height=96;let E=m.getContext("2d");E.fillStyle="#F4F1E8",E.fillRect(8,8,80,80),E.strokeStyle="#26302A",E.lineWidth=4,E.strokeRect(8,8,80,80),E.fillStyle="#C2443A",E.fillRect(40,2,16,14),E.fillStyle="#5E6660";for(let G=34;G<80;G+=12)E.fillRect(20,G,56,4);E.fillStyle="#26302A",E.font="bold 18px sans-serif",E.textAlign="center",E.fillText("NOTE",48,30),l&&(E.fillStyle="#3E6B3A",E.beginPath(),E.arc(70,72,20,0,Math.PI*2),E.fill(),E.strokeStyle="#EFEBDD",E.lineWidth=6,E.beginPath(),E.moveTo(60,72),E.lineTo(68,80),E.lineTo(81,63),E.stroke());let N=new Pn(m);return N.colorSpace=Ge,N},Tt=qt(!1),ee=qt(!0),Ue=U.flatMap(l=>l.notes.map((m,E)=>{let N=new Di(new _i({map:P.has("note:"+l.id+":"+E)?ee:Tt,depthWrite:!1}));return N.scale.set(.7,.7,1),N.position.set(m.at[0],m.at[1],m.at[2]),D.add(N),{room:l,i:E,n:m,sp:N,p:{x:m.at[0],y:m.at[1]-.35,z:m.at[2]}}}));t.secrets&&t.secrets.board&&ut("Notice Board","\u516C\u544A\u6B04",...t.secrets.board.sign,"#8C6640");let ne={},ae=()=>{for(let l of f.homes){ne[l.id]&&D.remove(ne[l.id]);let m=x.id===l.id;ne[l.id]=ut(m?"My Home":"For Rent",m?"\u6211\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F",l.x+l.w/2,h+(m&&x.floors===2?Wr(l,h,2).h:l.h)+.6,l.z-.4,m?"#3E6B3A":"#5E6660")}};ae();let ye=()=>f.homes.find(l=>l.id===x.id)||null,jt=()=>{let l=ye();return l&&x.floors===2?Object.assign({},l,{h:Wr(l,h,2).h}):l},Ee=()=>{let l=g[p.wear];if(!l)return null;let m=document.createElement("canvas");m.width=256,m.height=64;let E=m.getContext("2d");E.fillStyle=l.color,E.fillRect(4,4,248,56),E.fillStyle="#EFEBDD",E.textAlign="center",E.font="bold 30px sans-serif",E.fillText(l.en+" "+l.zh,128,43);let N=new Pn(m);N.colorSpace=Ge;let G=new Di(new _i({map:N,depthWrite:!1}));return G.scale.set(1.6,.4,1),G.position.y=2.75,G},Oe=()=>{let l=dl(w,M()),m=Ee();return m&&l.add(m),l},Re=Oe();D.add(Re);let oe={bike:{zh:"\u8173\u8E0F\u8ECA",speed:8,run:10,lift:.35}};for(let l of s.items)l.cat==="ride"&&(oe[l.id]=l);let Pe=Object.fromEntries(Object.keys(oe).map(l=>{let m=Vd(l);return m.visible=!1,D.add(m),[l,m]})),H=Object.fromEntries(Object.keys(oe).filter(l=>oe[l].big).map(l=>{let m=new ii().setFromObject(Pe[l]).getSize(new J);return[l,Math.hypot(m.x,m.z)]})),xe=()=>y.bike?oe[y.ride]?y.ride:"bike":null,me=()=>y.bike?oe[xe()].lift:0,L=()=>{D.remove(Re),Re=Oe(),D.add(Re)},v=t.npcs.map((l,m)=>{let E={id:l.id,kind:"villager",size:[.6,1.8],speed:1.2,colors:{leg:"#26302A",body:l.robe,head:"#E7CDA6",hat:l.hat}},N={id:m+1,type:l.id,kind:"villager",def:E,n:l,route:up(Me,l.route),ri:1,wait:0,p:{x:l.route[0][0]+.5,y:h+1,z:l.route[0][1]+.5},v:{x:0,y:0,z:0},yaw:0,gone:!1};return N.g=ld(E,l.robe),D.add(N.g),N}),O={coins:Ae("#coins"),ov:Ae("#ov"),toasts:Ae("#toasts"),joy:Ae("#joy"),knob:Ae("#knob"),hotbar:Ae("#hotbar"),start:Ae("#start"),dbg:fp.get("debug")!==null?Ae("#dbg"):null,loading:Ae("#loading")};O.dbg&&(O.dbg.hidden=!1);let W=l=>{for(;O.toasts.children.length>3;)O.toasts.firstChild.remove();let m=R("div",{class:"toast"},l);O.toasts.append(m),setTimeout(()=>m.remove(),2400)},it=()=>{O.coins.textContent=d.coins},ot=()=>{O.ov.hidden=!0,O.ov.innerHTML="",y.overlay=null,y.talkNpc&&(y.talkNpc.busy=!1,y.talkNpc=null);try{speechSynthesis.cancel()}catch{}},ft=(l,...m)=>{document.pointerLockElement&&document.exitPointerLock(),O.ov.innerHTML="",O.ov.hidden=!1,O.ov.append(R("div",{class:"panel"},R("div",{class:"p-head"},R("h2",{},l),R("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ot},"\xD7")),...m))},et=l=>{l<=0||(Ws(d,l),y.pending+=l,it(),ze("coin"))};function at(l,m,E,N,G){try{let $=JSON.parse(localStorage.getItem("ke_log")||"[]");if(!Array.isArray($))return;$.push(fh({id:l,module:"town",tkey:m,type:E},N,G,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)),localStorage.setItem("ke_log",JSON.stringify($))}catch($){console.warn("ke_log",$)}}let bt=(l,m,E,N)=>at(`town:${l}:${m}`,"town:"+l,"town-dialogue",E,N);function It(l){window.KidsDaily&&window.KidsDaily.rec("english",l)}let pt=l=>{if(!(ml||!l||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let m=new SpeechSynthesisUtterance(l.replace(/_{2,}/g," ... "));m.lang="en-US",m.rate=.9,speechSynthesis.speak(m)}catch{}},gt=(l,m,E)=>[R("div",{class:"npc-line"},R("button",{class:"say","aria-label":"\u518D\u5538\u4E00\u6B21",onclick:()=>pt(l)},"\u{1F50A}"),R("b",{class:"en"},l)),m&&E?R("p",{class:"muted"},m):null],Vt=l=>Object.keys(g).find(m=>g[m].npc===l.n.id)||null,Ot=[];function Yt(l){let m=Vt(l),E=Ot.map($=>$(l)).filter(Boolean);if(!m&&!E.length){mt(l);return}let N=g[m],G=m&&p.lic[m];ft(`${l.n.en}\u30FB${l.n.zh}`,R("p",{},"\u4F60\u60F3\u8981\u505A\u4EC0\u9EBC\uFF1F"),R("div",{class:"cards"},R("button",{class:"card",onclick:()=>mt(l)},"\u{1F4AC} \u804A\u5929"),m?R("button",{class:"card",onclick:()=>G?Si(m):nn(m)},G?`\u{1F9F0} ${N.zh}\u7684\u5DE5\u4F5C\uFF1A${N.task.title}`:`\u{1F4DD} \u8003${N.zh}\u57F7\u7167\uFF0810 \u984C\uFF0C\u5C0D ${8} \u984C\u5C31\u901A\u904E\uFF09`):null,...E)),y.talkNpc=l,l.busy=!0,y.overlay="menu",l.yaw=Math.atan2(-(y.p.x-l.p.x),-(y.p.z-l.p.z))}let z=null,Mt=l=>new Promise((m,E)=>{let N=document.createElement("script");N.src=l,N.onload=m,N.onerror=()=>E(new Error("load "+l)),document.head.appendChild(N)});async function ct(){try{for(let l of["patterns.js","patterns-2.js","phrases.js","phrases-2.js"])await Mt("../../data/"+l);z={patterns:(window.DATA_PATTERNS||[]).slice(),phrases:(window.DATA_PHRASES||[]).slice()}}catch(l){console.warn("chat data",l)}try{await Mt("../../data/textbook.js"),yl=(window.DATA_TEXTBOOK||[]).slice()}catch(l){console.warn("textbook",l)}}let vt=(l,m)=>{try{return JSON.parse(localStorage.getItem(l)||"null")||m}catch{return m}};function At(l,m){let E=z&&Bd(r[l.replace(/\d+$/,"")],z,{learned:vt("ke_learned",{}),mistakes:vt("ke_mistakes",{})});return E?Object.assign({},m,{turns:m.turns.concat(E)}):m}function mt(l,m){let E=[].concat(l.n.dlg);m=m||E[(l.dlgN=(l.dlgN==null?-1:l.dlgN)+1)%E.length];let N=e[m]&&At(m,e[m]);N&&(y.talkNpc=l,l.busy=!0,y.overlay="talk",y.dlg=bd(N),y.dlg.id=m,l.yaw=Math.atan2(-(y.p.x-l.p.x),-(y.p.z-l.p.z)),Bt(!0))}function Bt(l){let m=y.dlg,E=y.talkNpc,N=O.ov;N.innerHTML="",N.hidden=!1;let G=R("div",{class:"p-head"},R("h2",{},`${E.n.en}\u30FB${E.n.zh}`,R("small",{},`\u3000${m.d.place}`)),R("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ot},"\xD7")),$=R("div",{class:"panel talk"},G);if(N.append($),m.phase==="talk"){let lt=m.d.turns[m.turn];$.append(...gt(lt.npc,lt.zh,y.zh),lt.say?R("p",{class:"say-zh"},"\u8981\u8AAA\uFF1A"+lt.say):null,R("p",{class:"muted small"},`\u7B2C ${m.turn+1} / ${m.d.turns.length} \u53E5\u3000\u9078\u4E00\u5F35\u5361\u7247\u56DE\u7B54`),R("div",{class:"cards"},m.cards[m.turn].map((st,yt)=>R("button",{class:"card en",onclick:Ft=>Ut(yt,Ft.currentTarget)},st.en)))),l&&pt(lt.npc)}else m.phase==="check"?$.append(R("p",{class:"big"},"\u5C0F\u6E2C\u9A57\uFF1A"+m.d.check.q),R("div",{class:"cards"},m.check.map((lt,st)=>R("button",{class:"card",onclick:()=>Se(st)},lt.zh)))):$.append(R("p",{class:"big"},m.coins?`\u5C0D\u8A71\u5B8C\u6210\uFF01 +${m.coins} \u91D1\u5E63`:"\u5C0D\u8A71\u5B8C\u6210\uFF01"),R("p",{class:"muted"},`\u7B2C\u4E00\u6B21\u5C31\u9078\u5C0D ${m.right} / ${m.d.turns.length} \u53E5`),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u597D")))}function Ut(l,m){let E=y.dlg,N=E.turn,G=E.cards[N][l],$=Md(E,l);if(bt(E.id,E.d.turns[N].src?"gen:"+E.d.turns[N].src:N,$.ok&&$.first,G.en),!$.ok){m.classList.add("bad"),ze("hurt"),W("\u518D\u60F3\u60F3\u770B\uFF0C\u54EA\u4E00\u53E5\u6700\u5408\u9069\uFF1F");return}$.first&&et(1),ze("pickup"),pt(G.en),setTimeout(()=>Bt(E.phase==="talk"),450)}function Se(l){let m=y.dlg,E=m.coins,N=Sd(m,l);bt(m.id,"check",N.ok,m.check[l].zh),N.ok?et(m.coins-E):W("\u7B54\u6848\u662F\uFF1A"+m.check.find(G=>G.ok).zh),Ht("talk"),Bt(!1)}function he(l,m,E,N){let G=R("div",{class:"fb"}),$=R("div",{}),lt=!1,st=(yt,Ft)=>{if(lt)return;lt=!0;let Dt=E(yt);Ft&&Ft.classList.add(Dt.ok?"ok":"bad"),ze(Dt.ok?"pickup":"hurt"),Dt.coins&&et(Dt.coins),G.className="fb "+(Dt.ok?"ok":"bad"),G.append(R("div",{},Dt.ok?`\u7B54\u5C0D\u4E86\uFF01${Dt.coins?` +${Dt.coins} \u91D1\u5E63`:""}`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",Dt.ok?null:R("b",{class:"en"},Dt.answer)),R("button",{class:"btn",onclick:N},Dt.last?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u984C"))};if(m.typed){let yt=R("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),Ft=()=>{lt||!yt.value.trim()||(yt.disabled=!0,st(yt.value))};yt.addEventListener("keydown",Dt=>{Dt.stopPropagation(),Dt.key==="Enter"&&Ft()}),$.append(R("div",{class:"typerow"},yt,R("button",{class:"btn",onclick:Ft},"\u9001\u51FA"))),setTimeout(()=>yt.focus(),50)}else $.append(R("div",{class:"cards"},m.cards.map((yt,Ft)=>R("button",{class:"card"+(/[a-z]/i.test(yt.t)?" en":""),onclick:Dt=>st(Ft,Dt.currentTarget)},yt.t))));l.append(...gt(m.en,m.zh,m.typed||m.showZh||y.zh),$,G),m.say!==""&&pt(m.say||m.en)}function nn(l){y.exam=Ld(g[l]),y.exam.id=l,_n()}function _n(){let l=y.exam,m=g[l.id],E=O.ov;E.innerHTML="",E.hidden=!1,y.overlay="exam";let N=R("div",{class:"panel talk"},R("div",{class:"p-head"},R("h2",{},`${m.zh}\u57F7\u7167\u8003\u8A66`,R("small",{},l.done?"":`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C\u30FB\u7B54\u5C0D ${l.right}`)),R("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ot},"\xD7")));if(E.append(N),!l.done){let lt=l.qs[l.i],st=l.i;he(N,{en:lt.q,zh:lt.zh,typed:lt.type==="typed",cards:lt.cards},yt=>{let Ft=Dd(l,yt);return It(Ft.ok),at(`town:lic:${l.id}:${st}`,"town:license:"+l.id,"town-license",Ft.ok,Ft.text),{ok:Ft.ok,answer:Ft.answer,coins:ch(Ft.ok,Ft.typed),last:l.done}},_n);return}let G=Nd(l),$=G&&!p.lic[l.id];G&&($&&(p.lic[l.id]=Date.now(),et(10)),p.wear=l.id,L(),_e()),N.append(R("p",{class:"big"},G?`\u{1F389} \u901A\u904E\u4E86\uFF01\u4F60\u62FF\u5230${m.zh}\u57F7\u7167`:`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C\uFF0C\u8981 ${8} \u984C\u624D\u901A\u904E`),R("p",{class:"muted"},G?`${$?"\u57F7\u7167\u734E\u52F5 +10 \u91D1\u5E63\u3002":""}\u63DB\u4E0A${m.zh}\u5236\u670D\u4E86\uFF0C\u982D\u4E0A\u6703\u51FA\u73FE\u300C${m.en}\u300D\u3002\u4EE5\u5F8C\u627E\u9019\u4F4D\u5C45\u6C11\u5C31\u80FD\u4E0A\u73ED\u8CFA\u91D1\u5E63\uFF1B\u5728\u300C\u5DE5\u4F5C\u300D\u53EF\u4EE5\u63DB\u5236\u670D\u3002`:"\u6C92\u95DC\u4FC2\uFF0C\u518D\u8003\u4E00\u6B21\uFF01\u984C\u76EE\u4E00\u6A23\uFF0C\u9078\u9805\u9806\u5E8F\u6703\u63DB\u3002"),R("div",{class:"row"},G?R("button",{class:"btn big",onclick:()=>Si(l.id)},"\u99AC\u4E0A\u4E0A\u73ED"):R("button",{class:"btn big",onclick:()=>nn(l.id)},"\u518D\u8003\u4E00\u6B21"),R("button",{class:"btn ghost",onclick:ot},"\u5148\u4E0D\u8981")))}function Si(l){if(!p.lic[l]){nn(l);return}let m=Ud(g[l]);if(m.id=l,m.kind==="go"){y.go=m,y.goWrong=null,$i(),We();return}if(m.kind==="police"){Kr(m);return}if(m.kind==="bus"){gl(m);return}y.task=m,$s()}function $s(){let l=y.task,m=g[l.id],E=O.ov;E.innerHTML="",E.hidden=!1,y.overlay="task";let N=R("div",{class:"panel talk"},R("div",{class:"p-head"},R("h2",{},`${m.zh}\u7684\u5DE5\u4F5C\uFF1A${m.task.title}`,R("small",{},l.i<l.qs.length&&l.started?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C`:"")),R("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ot},"\xD7")));if(E.append(N),!l.started){l.started=!0,N.append(...gt(m.task.intro,m.task.introZh,!0),R("div",{class:"row"},R("button",{class:"btn big",onclick:$s},"\u958B\u59CB"))),pt(m.task.intro);return}if(l.i<l.qs.length){let G=l.qs[l.i],$=l.i;he(N,{en:G.en,zh:G.zh,cards:G.cards},lt=>{let st=kd(l,lt);return It(st.ok),at(`town:job:${l.id}:${$}`,"town:job:"+l.id,"town-job",st.ok,st.text),{ok:st.ok,answer:st.answer,coins:st.ok?2:0,last:st.done}},$s);return}p.done[l.id]=(p.done[l.id]||0)+1,Ht("work"),_e(),N.append(R("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C\uFF0C\u8CFA\u5230 ${l.coins} \u91D1\u5E63`),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>Si(l.id)},"\u518D\u505A\u4E00\u6B21"),R("button",{class:"btn ghost",onclick:ot},"\u4F11\u606F")))}let qi=t.buildings.map(l=>({id:l.id,en:"the "+l.en,zh:l.zh,b:l})).concat(f.homes.map(l=>({id:l.id,en:"the "+l.en,zh:l.zh,b:l})));for(let l of qi){let m=l.b,E=m.isHome?"n":m.door,N=m.x+(m.w>>1)+.5,G=m.z+(m.d>>1)+.5;l.f=E==="n"?[N,m.z-.5]:E==="s"?[N,m.z+m.d+.5]:E==="w"?[m.x-.5,G]:[m.x+m.w+.5,G]}function $i(){let l=y.go,m=g[l.id];ft(`${m.zh}\u7684\u5DE5\u4F5C\uFF1A${m.task.title}`,...gt(l.en,l.zh,y.zh),R("p",{class:"muted small"},`\u8D70\u5230\u5C0D\u7684\u5730\u65B9\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\uFF08\u734E\u52F5 ${l.pay} \u91D1\u5E63\uFF09\u3002\u5DE6\u4E0A\u89D2\u7684\u4EFB\u52D9\u5361\u53EF\u4EE5\u518D\u770B\u4E00\u6B21\u3002`),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u51FA\u767C\uFF01"),R("button",{class:"btn ghost",onclick:()=>{y.go=null,We(),ot(),W("\u9019\u8D9F\u5148\u4E0D\u505A\u4E86")}},"\u9019\u8D9F\u4E0D\u505A\u4E86"))),y.overlay="task",pt(l.en)}function We(){let l=Ae("#task");if(!l)return;let m=y.go?(y.go.id==="firefighter"?"\u{1F525} ":"\u2709\uFE0F ")+y.go.en.split(/[.!] /)[0]:y.police&&y.police.L?"\u{1F46E} "+y.police.L.en:ci()?"\u{1F68C} "+ci().en:y.lost?`\u{1F9D2} \u5E36 ${o.lost.kid.en} \u56DE\u5BB6`:y.list?"\u{1F9FA} \u8CFC\u7269\u6E05\u55AE\uFF1A"+y.list.lines.map(E=>E.en).join("\u3001"):null;l.hidden=!m,m&&(l.textContent=m+"\u2026\uFF08\u9EDE\u6211\u518D\u770B\uFF09")}function Jr(){let l=y.go;if(l)for(let m of qi){if(Math.hypot(y.p.x-m.f[0],y.p.z-m.f[1])>3.2){y.goWrong===m.id&&(y.goWrong=null);continue}if(m.id!==l.to){y.goWrong!==m.id&&m.id!==g[l.id].place&&(y.goWrong=m.id,l.tries++,W(`\u9019\u88E1\u662F ${m.en}\uFF08${m.zh}\uFF09\uFF0C\u4E0D\u662F\u9019\u88E1\u5594\u3002\u518D\u770B\u4E00\u6B21\u4EFB\u52D9\u5361`));continue}let E=g[l.id],N=l.tries===0;y.go=null,We(),It(N),at(`town:job:${l.id}:${l.to}`,"town:job:"+l.id,"town-job",N,l.to),p.done[l.id]=(p.done[l.id]||0)+1,Ht("work"),ft(`${E.zh}\u7684\u5DE5\u4F5C`,...gt(E.task.arrive,E.task.arriveZh,!0),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>{et(l.pay),_e(),ot(),W(`\u5B8C\u6210\u4E86\uFF01 +${l.pay} \u91D1\u5E63`)}},E.task.button))),y.overlay="task";return}}let Qe=g.police&&g.police.task,dn=[],Yi=()=>{for(let l of dn)D.remove(l.g);dn.length=0};function Kr(l){y.police=Object.assign(l,{L:null}),ft(`${g.police.zh}\u7684\u5DE5\u4F5C\uFF1A${Qe.title}`,...gt(Qe.intro,Qe.introZh,!0),R("p",{class:"muted small"},`\u8B66\u5BDF\u5C40\u9580\u53E3\u6703\u7AD9 4 \u500B\u4EBA\u3002\u770B\u756B\u9762\u4E0B\u65B9\u7684\u7DDA\u7D22\u5361\uFF0C\u9EDE\u5C0D\u7684\u90A3\u500B\u4EBA\uFF08\u4E00\u56DE ${l.n} \u500B\u4EBA\uFF0C\u6BCF\u500B\u7B2C\u4E00\u6B21\u5C31\u9EDE\u5C0D +2 \u91D1\u5E63\uFF09\u3002`),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>{ot(),Ys()}},"\u958B\u59CB"),R("button",{class:"btn ghost",onclick:Zs},"\u5148\u4E0D\u8981"))),y.overlay="task",pt(Qe.intro)}function Ys(){Yi();let l=y.police;l&&(l.L=Fd(Qe),l.tries=0,l.L.people.forEach((m,E)=>{let N=dl(Xr(m.av)),[G,$]=Qe.spots[E];N.position.set(G,h+1,$),N.rotation.y=Math.PI,D.add(N),dn.push({g:N,i:E,p:{x:G,y:h+1,z:$},suspect:!0})}),(y.p.z<-12||y.p.z>-5||y.p.x<53||y.p.x>69)&&(y.p={x:61.5,y:h+1,z:-4.5},y.v={x:0,y:0,z:0},y.yaw=0,y.pitch=-.1),We(),pt(l.L.en))}function hs(){let l=y.police;!l||!l.L||(ft(`\u{1F46E} \u7DDA\u7D22\uFF08\u7B2C ${l.i+1} / ${l.n} \u500B\u4EBA\uFF09`,...gt(l.L.en,l.L.zh,y.zh),R("p",{class:"muted small"},"\u5728\u8B66\u5BDF\u5C40\u9580\u53E3\u7684 4 \u500B\u4EBA\u88E1\uFF0C\u9EDE\u7B26\u5408\u7DDA\u7D22\u7684\u90A3\u4E00\u500B\u3002"),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u53BB\u627E"),R("button",{class:"btn ghost",onclick:Zs},"\u4ECA\u5929\u5148\u4E0D\u505A\u4E86"))),y.overlay="task",pt(l.L.en))}function Zs(){y.police=null,Yi(),We(),ot()}function Zi(l){let m=y.police;if(!m||!m.L)return;let E=l===m.L.right,N=`town:job:police:${m.i}`;if(!E){m.tries++||(It(!1),at(N,"town:job:police","town-job",!1,m.L.en)),ze("hurt"),W(`${Qe.wrong}\u3000${y.zh?Qe.wrongZh:""}`);return}let G=!m.tries;if(G&&(It(!0),at(N,"town:job:police","town-job",!0,m.L.en),m.right++,m.coins+=2,et(2)),ze("pickup"),m.i++,m.i<m.n){W(`${Qe.right}${G?"\u3000+2 \u91D1\u5E63":""}`),Ys(),pt(Qe.right+" "+m.L.en);return}Yi(),y.police=null,We(),p.done.police=(p.done.police||0)+1,Ht("work"),_e(),ft(`${g.police.zh}\u7684\u5DE5\u4F5C\uFF1A${Qe.title}`,...gt(Qe.right,Qe.rightZh,y.zh),R("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u4E00\u6B21\u5C31\u627E\u5C0D ${m.right} / ${m.n} \u500B\u4EBA\uFF0C\u8CFA\u5230 ${m.coins} \u91D1\u5E63`),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>Si("police")},"\u518D\u505A\u4E00\u6B21"),R("button",{class:"btn ghost",onclick:ot},"\u4F11\u606F"))),y.overlay="task",pt(Qe.right)}let Ie=g.busdriver&&g.busdriver.task;if(Ie)for(let l of Ie.stops){ut(l.en,l.zh,l.sign[0],h+2.7,l.sign[1],"#2F6E5A");let m=new Le(new un(.12,2.1,.12),new xn({color:6186592}));m.position.set(l.sign[0],h+1.05,l.sign[1]),D.add(m)}let ci=()=>y.bus&&y.bus.pass[y.bus.i];function gl(l){y.bus=Object.assign(l,{at:null}),ft(`${g.busdriver.zh}\u7684\u5DE5\u4F5C\uFF1A${Ie.title}`,...gt(Ie.intro,Ie.introZh,!0),R("p",{class:"muted small"},`\u6703\u5E36\u4F60\u5230\u516C\u8ECA\u7E3D\u7AD9\u524D\u9762\u5750\u4E0A\u516C\u8ECA\uFF08\u4E0A\u73ED\u7684\u516C\u8ECA\uFF0C\u4E0D\u7528\u8CB7\uFF09\u3002\u958B\u5230\u4E58\u5BA2\u8981\u53BB\u7684\u7AD9\u724C\u524D\u9762\u300C\u505C\u4E0B\u4F86\u300D\u624D\u7B97\u5230\u7AD9\u3002\u4E00\u56DE ${l.pass.length} \u4F4D\u4E58\u5BA2\uFF0C\u6BCF\u4F4D\u4E00\u6B21\u5C31\u958B\u5C0D +${Ie.pay} \u91D1\u5E63\u3002`),R("div",{class:"row"},R("button",{class:"btn big",onclick:jr},"\u{1F68C} \u4E0A\u8ECA\u51FA\u767C"),R("button",{class:"btn ghost",onclick:Qr},"\u5148\u4E0D\u8981"))),y.overlay="task",pt(Ie.intro)}function jr(){let l=y.bus;if(!l)return;ot(),xe()!=="bus"&&(y.p={x:Ie.depot[0],y:h+1,z:Ie.depot[1]},y.v={x:0,y:0,z:0},y.yaw=-Math.PI/2,y.pitch=-.15,y.view="tp",Ji("bus")),l.at=null,We();let m=ci();m&&pt(m.en)}function xl(){let l=y.bus,m=ci();!l||!m||(ft(`\u{1F68C} \u7B2C ${l.i+1} / ${l.pass.length} \u4F4D\u4E58\u5BA2`,...gt(m.en,m.zh,y.zh),R("p",{class:"muted small"},"\u958B\u5230\u5C0D\u7684\u7AD9\u724C\u524D\u9762\u505C\u4E0B\u4F86\u3002\u7AD9\u724C\uFF1A"+Ie.stops.map(E=>E.en).join("\u3001")),R("div",{class:"row"},xe()==="bus"?R("button",{class:"btn big",onclick:ot},"\u7E7C\u7E8C\u958B"):R("button",{class:"btn big",onclick:jr},"\u{1F68C} \u5750\u4E0A\u516C\u8ECA"),R("button",{class:"btn ghost",onclick:Qr},"\u4ECA\u5929\u5148\u4E0D\u958B\u4E86"))),y.overlay="task",pt(m.en))}function Qr(){let l=y.bus;y.bus=null,We(),ot(),l&&xe()==="bus"&&!P.has("bus")&&Ji(null)}function Js(){let l=y.bus,m=ci();if(!l||!m||xe()!=="bus")return;let E=Math.hypot(y.v.x,y.v.z)<2?vh(Ie,y.p.x,y.p.z):null;if(!E){vh(Ie,y.p.x,y.p.z)||(l.at=null);return}if(E.id===l.at)return;if(l.at=E.id,E.id!==m.to){l.tries++||(It(!1),at(`town:job:busdriver:${m.to}`,"town:job:busdriver","town-job",!1,E.id)),ze("hurt"),W(`This is ${E.en}\uFF08${E.zh}\uFF09. \u4E0D\u662F\u9019\u4E00\u7AD9\uFF0C\u518D\u807D\u4E00\u6B21\u4E58\u5BA2\u8AAA\u4EC0\u9EBC`);return}let N=!l.tries;N&&(It(!0),at(`town:job:busdriver:${m.to}`,"town:job:busdriver","town-job",!0,E.id),l.right++,l.coins+=Ie.pay,et(Ie.pay)),l.i++,l.tries=0,ze("pickup");let G=ci();if(G){W(`${N?`+${Ie.pay} \u91D1\u5E63\u3000`:""}${Ie.thanks}`),We(),pt(Ie.thanks+" "+G.en);return}y.bus=null,We(),p.done.busdriver=(p.done.busdriver||0)+1,Ht("work"),P.has("bus")||Ji(null),_e(),ft(`${g.busdriver.zh}\u7684\u5DE5\u4F5C\uFF1A${Ie.title}`,...gt(Ie.thanks,Ie.thanksZh,y.zh),R("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u8F09\u4E86 ${l.pass.length} \u4F4D\u4E58\u5BA2\uFF0C\u4E00\u6B21\u5C31\u958B\u5C0D ${l.right} \u4F4D\uFF0C\u8CFA\u5230 ${l.coins} \u91D1\u5E63`),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>Si("busdriver")},"\u518D\u958B\u4E00\u6B21"),R("button",{class:"btn ghost",onclick:ot},"\u4F11\u606F"))),y.overlay="task",pt(Ie.thanks)}let A=null;async function V(){if(A)return A;try{let l=await(await fetch("../hero-world/data/books.json",{cache:"no-cache"})).json(),m=(l&&Array.isArray(l.books)?l.books:[]).filter(E=>E&&typeof E.id=="string"&&typeof E.title=="string"&&typeof E.en=="string"&&E.en.length>20);m.length&&(A=m)}catch(l){console.warn("books",l)}return A}async function K(l){let m=await V();if(!m){W("\u4ECA\u5929\u7684\u66F8\u9084\u6C92\u9001\u5230\uFF08\u8B80\u4E0D\u5230\u66F8\u55AE\uFF09\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86");return}let E=l&&m.find($=>$.id===l);if(!E){ft("\u{1F4D6} \u5716\u66F8\u9928\u7684\u95B1\u8B80\u89D2",R("p",{class:"muted"},`\u9019\u88E1\u6709 ${m.length} \u672C\u82F1\u6587\u5C0F\u66F8\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u5957\uFF09\u3002\u53EF\u4EE5\u6162\u6162\u770B\u3001\u807D\u6717\u8B80\uFF0C\u4E0D\u7528\u7B54\u984C\u3002\u60F3\u8B80\u5B8C\u7B54\u984C\u8CFA\u91D1\u5E63\uFF0C\u5230\u65B9\u584A\u4E16\u754C\u62FF\u300C\u82F1\u6587\u5C0F\u66F8\u300D\u8B80\u3002`),R("div",{class:"shop"},m.map($=>R("div",{class:"offer"},R("div",{class:"of-t"},R("b",{class:"en"},$.title),R("small",{},typeof $.title_zh=="string"?$.title_zh:"")),R("button",{class:"btn small","data-book":$.id,onclick:()=>K($.id)},"\u8B80"))))),y.overlay="panel";return}let N=!1,G=()=>{ft("\u{1F4D6} "+(typeof E.title_zh=="string"?E.title_zh:E.title),R("h3",{class:"en"},E.title),R("p",{class:"book-text en"},E.en),N&&typeof E.zh=="string"?R("p",{class:"book-text zh"},E.zh):null,R("div",{class:"row"},typeof E.zh=="string"?R("button",{class:"btn ghost",onclick:()=>{N=!N,G()}},N?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"):null,R("button",{class:"btn ghost",onclick:()=>pt(E.en)},"\u{1F50A} \u6717\u8B80"),R("button",{class:"btn ghost",onclick:()=>K()},"\u2190 \u63DB\u4E00\u672C"))),O.ov.querySelector(".panel").classList.add("book"),y.overlay="panel"};G()}Ot.push(l=>l.n.id==="librarian"?R("button",{class:"card",onclick:()=>K()},"\u{1F4D6} \u5230\u95B1\u8B80\u89D2\u770B\u82F1\u6587\u5C0F\u66F8"):null);let Y=()=>U.filter(l=>P.has("secret:"+l.id)).length;function Z(l){let m=P.has(Pt(l));m||(P.add(Pt(l)),l.sp.material.map=ee,l.sp.material.needsUpdate=!0,_e()),ft(`\u{1F4DC} \u7D19\u689D\uFF08${l.room.zh}\uFF09${m?"\u3000\u2713 \u8B80\u904E\u4E86":""}`,...gt(l.n.en,l.n.zh,y.zh),R("p",{class:"muted small"},P.has("secret:"+l.room.id)?"\u9019\u500B\u79D8\u5BC6\u623F\u9593\u4F60\u5DF2\u7D93\u627E\u5230\u4E86\uFF01":"\u7167\u8457\u82F1\u6587\u8D70\uFF0C\u627E\u5230\u79D8\u5BC6\u7684\u9580\u3002"),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u77E5\u9053\u4E86"))),y.overlay="panel",pt(l.n.en)}function St(l){if(y.riddleBusy)return;y.riddleBusy=!0,document.pointerLockElement&&document.exitPointerLock(),y.overlay="ask";let m=[];try{m=Xf(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{}Qf(O.ov,{ids:m.slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u79D8\u5BC6\u623F\u9593\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",daily:!1,onDone:E=>{if(y.overlay=null,y.riddleBusy=!1,!E){E===!1&&W("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let N=-2;N<=2;N++){let G=c.get(Q.get(l.x,l.y+N,l.z));G&&G.interact==="riddle"&&Q.set(l.x,l.y+N,l.z,0)}ze("door"),_e()}})}function Rt(l){let m=U.find(N=>N.treasure[0]===l.x&&N.treasure[1]===l.y&&N.treasure[2]===l.z);if(!m||(Q.set(l.x,l.y,l.z,c.num("chest")),P.has("secret:"+m.id)))return;P.add("secret:"+m.id),P.add(m.reward.id),Ph();let E;m.reward.kind==="pet"?(E="\u4E00\u96BB"+us[m.reward.id]+"\uFF01\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",S.active||(S.active=m.reward.id,Ki())):(E="\u7A00\u6709\u5BB6\u5177\u300C"+c.name(m.reward.id)+"\u300D\uFF01\u5BB6\u5177\u6A21\u5F0F\u53EF\u4EE5\u653E",Ks()),_e(),ze("coin"),ft("\u{1F389} \u627E\u5230\u79D8\u5BC6\u623F\u9593\uFF1A"+m.zh,R("p",{class:"big"},"\u5BF6\u7BB1\u88E1\u6709"+E),R("p",{class:"muted"},`\u79D8\u5BC6\u623F\u9593\u627E\u5230 ${Y()} / ${U.length} \u9593`),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u592A\u68D2\u4E86"))),y.overlay="panel"}let _t=o.pay,Lt={tutorial:[],main:[],daily:o.daily},Nt=l=>T.stats[l]||0;function Zt(){let l={tut:{done:!0},main:0,daily:T.daily};for(let m of rp(l,Lt,Nt,$r()))et(m.q.coins),W(`\u{1F4EE} \u59D4\u8A17\u5B8C\u6210\uFF1A${m.q.zh} +${m.q.coins} \u91D1\u5E63`);T.daily=l.daily}function Ht(l,m=1){T.stats[l]=Nt(l)+m,Zt()}function Ct(l,m,E,N){It(E),at(`town:life:${l}:${m}`,"town:life:"+l,"town-life",E,N)}let pe=()=>(Zt(),R("div",{class:"quests"},R("h3",{},"\u{1F4EE} \u4ECA\u65E5\u93AE\u6C11\u59D4\u8A17\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),T.daily.picks.map(l=>{let m=o.daily.find(N=>N.id===l),E=T.daily.done.includes(l);return R("div",{class:"quest"+(E?" done":"")},R("b",{},(E?"\u2713 ":"")+m.zh),R("small",{class:"en"},m.en),R("small",{},E?"\u5B8C\u6210\u4E86\uFF01":`${op(T,Lt,Nt,l)} / ${m.need}\u30FB\u734E\u52F5 ${m.coins} \u91D1\u5E63`))})));function De(l,m,E,N){let G=R("div",{class:"tray"}),$=Object.fromEntries(l.map(st=>[st.id,st])),lt=()=>{G.innerHTML="";let st=Object.keys(m).filter(yt=>m[yt]>0);G.append(R("b",{},E+"\uFF1A"),...st.length?st.map(yt=>R("button",{class:"chip","data-id":yt,onclick:()=>{m[yt]--,lt(),N&&N()}},`${$[yt].icon} ${$[yt].label} \xD7${m[yt]}`)):[R("span",{class:"muted small"},"\u9084\u662F\u7A7A\u7684")])};return lt(),[R("div",{class:"cards items"},l.map(st=>R("button",{class:"card item","data-id":st.id,onclick:()=>{m[st.id]=(m[st.id]||0)+1,lt(),ze("pickup"),N&&N()}},R("span",{class:"ico"},st.icon),R("span",{class:"en"},st.label)))),G]}let ue=o.grocery,ge=Object.fromEntries(ue.items.map(l=>[l.id,l])),Xe=l=>R("div",{class:"glist"},l.lines.map(m=>R("div",{class:"npc-line"},R("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u884C",onclick:()=>pt(m.en)},"\u{1F50A}"),R("b",{class:"en"},m.en),y.zh?R("small",{class:"muted"},"\u3000"+m.zh):null)));function Et(){y.list=Zd(ue),y.basket={},We(),qe(!0)}function qe(l){let m=y.list;m&&(ft("\u{1F9FA} \u55AC\u723A\u723A\u7684\u8CFC\u7269\u6E05\u55AE",...l?gt(ue.intro,ue.introZh,y.zh):[],Xe(m),R("p",{class:"muted small"},"\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\uFF0C\u7167\u6E05\u55AE\u628A\u6771\u897F\u653E\u9032\u7C43\u5B50\u3001\u7D50\u5E33\u3002\u6578\u91CF\u8981\u525B\u525B\u597D\u5594\uFF01"),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u51FA\u767C\uFF01"),R("button",{class:"btn ghost",onclick:()=>{y.list=null,We(),ot(),W("\u9019\u6B21\u5148\u4E0D\u8CB7\u4E86")}},"\u9019\u6B21\u4E0D\u8CB7\u4E86"))),y.overlay="task",pt(l?ue.intro+" "+m.en:m.en))}function le(){let l=y.list;if(!l)return;let m=y.basket=y.basket||{},E=Xe(l),N=R("button",{class:"btn ghost small",onclick:()=>{E.classList.toggle("listen"),N.textContent=E.classList.contains("listen")?"\u{1F440} \u770B\u6587\u5B57":"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09"}},"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09");ft("\u{1F9FA} \u7167\u6E05\u55AE\u62FF\u6771\u897F",E,R("div",{class:"row"},R("button",{class:"btn ghost small",onclick:()=>pt(l.en)},"\u{1F50A} \u807D\u6574\u5F35\u6E05\u55AE"),N),...De(l.shelf.map(G=>ge[G]),m,"\u7C43\u5B50"),R("div",{class:"row"},R("button",{class:"btn big",onclick:pn},"\u{1F9FE} \u7D50\u5E33"))),y.overlay="task"}function pn(){let l=y.list,m=Jd(l.lines,y.basket||{}),E=m.results.filter($=>$.ok).length,N=E===l.lines.length&&!m.extra.length;m.results.forEach($=>Ct("shop",$.id,$.ok,`${$.got} ${$.id}`));let G=E*_t.perQ+(N?_t.allRight:0);et(G),y.list=null,y.basket=null,We(),Ht("shop"),_e(),ze(N?"coin":"pickup"),ft("\u{1F9FE} \u7D50\u5E33",...m.results.map(($,lt)=>R("p",{},`${$.ok?"\u2705":"\u274C"} ${ge[$.id].icon} `,R("b",{class:"en"},l.lines[lt].en),$.ok?"":`\uFF08\u7C43\u5B50\u88E1\u6709 ${$.got} \u500B\uFF09`)),m.extra.length?R("p",{class:"muted"},"\u6E05\u55AE\u4E0A\u6C92\u6709\u7684\uFF1A"+m.extra.map($=>ge[$].icon+" "+ge[$].label).join("\u3001")+"\uFF08\u4E0B\u6B21\u53EA\u62FF\u6E05\u55AE\u4E0A\u7684\uFF09"):null,...N?gt(ue.thanks,ue.thanksZh,y.zh):[R("p",{},`\u6E05\u55AE\u4E0A ${l.lines.length} \u6A23\uFF0C\u5C0D\u4E86 ${E} \u6A23\u3002\u518D\u5E6B\u55AC\u723A\u723A\u8CB7\u4E00\u6B21\u5427\uFF01`)],R("p",{class:"big"},`+${G} \u91D1\u5E63`),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u597D"))),y.overlay="task",N&&pt(ue.thanks)}let Be=o.waiter;function Tn(){y.waiter={orders:Kd(Be),i:-1,right:0},Yn()}function Yn(){let l=y.waiter;if(y.overlay="task",l.i<0){ft("\u{1F37D}\uFE0F \u9910\u5EF3\u670D\u52D9\u751F",...gt(Be.intro,Be.introZh,y.zh),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>{l.i=0,Yn()}},"\u958B\u59CB"))),pt(Be.intro),y.overlay="task";return}if(l.i>=l.orders.length){let lt=l.right===l.orders.length,st=lt?_t.allRight:0;et(st),Ht("waiter"),_e(),ft("\u{1F37D}\uFE0F \u4E0B\u73ED\u4E86",...lt?gt(Be.thanks,Be.thanksZh,y.zh):[],R("p",{class:"big"},`\u9001\u5C0D ${l.right} / ${l.orders.length} \u4F4D\u5BA2\u4EBA${st?`\uFF0C\u5168\u5C0D +${st} \u91D1\u5E63`:""}`),R("div",{class:"row"},R("button",{class:"btn big",onclick:Tn},"\u518D\u505A\u4E00\u6B21"),R("button",{class:"btn ghost",onclick:ot},"\u4F11\u606F"))),y.overlay="task",lt&&pt(Be.thanks);return}let m=l.orders[l.i],E={},N=R("div",{class:"fb"}),G=`${m.who}: "${m.en}"`,$=R("button",{class:"btn big",onclick:()=>{if($.disabled)return;$.disabled=!0;let lt=jd(m.want,E),st=Object.keys(m.want).map(yt=>`${Be.menu.find(Ft=>Ft.id===yt).icon} \xD7${m.want[yt]}`).join(" \uFF0B ");Ct("waiter",Object.keys(m.want).join("+"),lt,Object.keys(E).filter(yt=>E[yt]>0).map(yt=>yt+"x"+E[yt]).join(",")),lt&&(l.right++,et(_t.perQ),Ht("served")),ze(lt?"pickup":"hurt"),N.className="fb "+(lt?"ok":"bad"),N.append(R("div",{},lt?`\u9001\u5C0D\u4E86\uFF01 +${_t.perQ} \u91D1\u5E63`:"\u9001\u932F\u4E86\uFF01\u5BA2\u4EBA\u9EDE\u7684\u662F\uFF1A"+st),R("button",{class:"btn",onclick:()=>{l.i++,Yn()}},l.i+1>=l.orders.length?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u4F4D\u5BA2\u4EBA"))}},"\u{1F6CE}\uFE0F \u9001\u9910");ft(`\u{1F37D}\uFE0F \u7B2C ${l.i+1} / ${l.orders.length} \u4F4D\u5BA2\u4EBA`,...gt(G,null,!1),...De(Be.menu,E,"\u6258\u76E4"),R("div",{class:"row"},$),N),y.overlay="task",pt(m.en)}let Gt=o.lost,$t=(()=>{let l=dl(Xr({skin:0,hair:3,hairColor:2,top:1,bottom:2,hat:1})),m=Uh("\u{1F9D2} "+Gt.kid.en);m.position.y=2.75,m.scale.multiplyScalar(1.5),l.add(m),l.scale.setScalar(.7),D.add(l);let[E,N]=Gt.kid.at;return{n:{id:"lostkid",en:Gt.kid.en,zh:Gt.kid.zh},spot:{x:E,z:N},p:{x:E,y:h+1,z:N},g:l,yaw:Math.PI,sp:0}})(),Un=l=>f.homes.find(m=>m.id===l);function be(){if(y.lost){hi();return}let l=y.lostQ=Qd(f.homes,Gt.kid.at[0],Gt);ft(`\u{1F9D2} ${Gt.kid.en}\u30FB${Gt.kid.zh}`,...gt(Gt.hello,Gt.helloZh,y.zh),...gt(l.en,l.zh,y.zh),R("p",{class:"big"},Gt.ask+(y.zh?"\u3000"+Gt.askZh:"")),R("div",{class:"cards"},l.cards.map(m=>R("button",{class:"card en","data-id":m,onclick:E=>Zn(m,E.currentTarget)},Un(m).en)))),y.overlay="task",pt(Gt.hello+" "+l.en)}function Zn(l,m){let E=y.lostQ;if(!E||E.picked)return;E.picked=!0;let N=l===E.to;Ct("lost",E.to+":pick",N,l),N&&et(_t.perQ),m.classList.add(N?"ok":"bad"),ze(N?"pickup":"hurt"),O.ov.querySelector(".panel").append(R("div",{class:"fb "+(N?"ok":"bad")},R("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${_t.perQ} \u91D1\u5E63`:`\u5DEE\u4E00\u9EDE\uFF01${Gt.kid.en} \u4F4F\u5728 `,N?null:R("b",{class:"en"},Un(E.to).en)),...gt(Gt.walk,Gt.walkZh,y.zh),R("button",{class:"btn big",onclick:()=>{y.lost={to:E.to,tries:0,right:N,en:E.en,zh:E.zh},y.lostQ=null,We(),ot()}},"\u5E36\u4ED6\u56DE\u5BB6")))}function hi(){let l=y.lost;l&&(ft(`\u{1F9D2} \u5E36 ${Gt.kid.en} \u56DE\u5BB6`,...gt(l.en,l.zh,y.zh),R("p",{class:"muted small"},`${Gt.kid.en} \u8DDF\u5728\u4F60\u5F8C\u9762\u3002\u8D70\u5230\u4ED6\u5BB6\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\u3002`),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u597D"),R("button",{class:"btn ghost",onclick:()=>{y.lost=null,We(),ot()}},"\u5148\u4E0D\u5E36\u4E86"))),y.overlay="task",pt(l.en))}function to(){let l=y.lost;if(l)for(let m of qi){if(!m.b.isHome)continue;if(Math.hypot(y.p.x-m.f[0],y.p.z-m.f[1])>3.2){y.lostWrong===m.id&&(y.lostWrong=null);continue}if(m.id!==l.to){y.lostWrong!==m.id&&(y.lostWrong=m.id,l.tries++,W(`${Gt.kid.en}\uFF1A\u300C${Gt.wrong}\u300D${Gt.wrongZh}`));continue}let E=l.tries===0,N=(E?_t.perQ:0)+(E&&l.right?_t.allRight:0);y.lost=null,We(),Ct("lost",l.to+":walk",E,l.to),et(N),Ht("lost"),_e(),ft(`\u{1F3E0} ${m.b.en}`,...gt(Gt.home,Gt.homeZh,y.zh),R("p",{class:"big"},E?`\u4E00\u6B21\u5C31\u8D70\u5C0D\u4E86\uFF01 +${N} \u91D1\u5E63`:"\u627E\u5230\u4E86\uFF01\u4E0B\u6B21\u8A66\u8A66\u770B\u4E00\u6B21\u5C31\u8D70\u5230\u5C0D\u7684\u9580\u53E3\u3002"),R("div",{class:"row"},R("button",{class:"btn big",onclick:ot},"\u63B0\u63B0"))),y.overlay="task",pt(Gt.home);return}}let _l=(l,m)=>{for(let E=0;E<=4;E++)for(let N=-E;N<=E;N++)for(let G=-E;G<=E;G++){let $=Math.floor(l)+N,lt=Math.floor(m)+G;if(te($,lt))return[$+.5,lt+.5]}return null};function pp(l,m){return te(Math.floor(l),Math.floor(m))?[l,m]:te(Math.floor(y.p.x),Math.floor(y.p.z))?[y.p.x,y.p.z]:_l(y.p.x,y.p.z)}function Ch(l,m,E){let N=y.p.x+Math.sin(y.yaw)*1.4+Math.cos(y.yaw)*E,G=y.p.z+Math.cos(y.yaw)*1.4-Math.sin(y.yaw)*E,$=Math.hypot(N-l.p.x,G-l.p.z),lt=0;if($>30||l.stuck){let Dt=_l(y.p.x,y.p.z);Dt&&(l.p.x=Dt[0],l.p.z=Dt[1],l.jumps=(l.jumps||0)+1),l.stuck=!1,l.path=null,l.pt=0}else if($>.3){if((l.pt=(l.pt||0)-m)<=0&&(l.pt=.3,l.goal=pp(N,G),l.path=null,l.goal&&!Yr(te,l.p.x,l.p.z,l.goal[0],l.goal[1]))){let ie=tt.find(te,Math.floor(l.p.x),Math.floor(l.p.z),Math.floor(l.goal[0]),Math.floor(l.goal[1]));ie?l.path=ie.slice(1,-1).map($e=>[$e[0]+.5,$e[1]+.5]):l.stuck=!0}for(;l.path&&l.path.length&&Math.hypot(l.path[0][0]-l.p.x,l.path[0][1]-l.p.z)<.25;)l.path.shift();let Dt=l.path&&l.path.length?l.path[0]:l.goal;if(Dt&&!l.stuck){let ie=Dt[0]-l.p.x,$e=Dt[1]-l.p.z,yn=Math.hypot(ie,$e);if(yn>.05){lt=Math.min(9,$*2.5);let ji=Math.min(yn,lt*m),Qi=l.p.x+ie/yn*ji,er=l.p.z+$e/yn*ji;kt(Math.floor(Qi),Math.floor(er))?lt=0:(l.p.x=Qi,l.p.z=er),l.yaw=Math.atan2(-ie,-$e)}}}let st=Math.floor(y.p.y)+1,yt=Math.floor(l.p.x),Ft=Math.floor(l.p.z);for(;st>h-3&&!c.flat.solid[Q.get(yt,st-1,Ft)];)st--;return l.p.y+=(st-l.p.y)*Math.min(1,m*10),lt}function mp(l,m,E){y.lost&&!y.overlay?$t.sp=Ch($t,l,-.7):!y.lost&&!y.overlay&&Math.hypot($t.p.x-$t.spot.x,$t.p.z-$t.spot.z)>.5?($t.p={x:$t.spot.x,y:h+1,z:$t.spot.z},$t.yaw=Math.PI,$t.sp=0):y.overlay&&($t.sp=0),$t.g.position.set($t.p.x,$t.p.y,$t.p.z),$t.g.rotation.y=$t.yaw,pl($t.g,$t.sp,m,E)}let yl=null,gp=()=>tp(yl,z&&z.patterns);function eo(l){let m=gp();if(!m.length){W("\u8AB2\u672C\u9084\u6C92\u8F09\u597D\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86\u4E0A\u8AB2");return}let E=m.find(N=>N.id===(l||ep(m,vt("ke_log",[]),$r())))||m[0];y.cls={u:E,U:m,qs:np(E,o.class.n,Math.random,o.class),i:-1,right:0},vl()}function vl(){let l=y.cls,m=o.class,E=O.ov;E.innerHTML="",E.hidden=!1,y.overlay="task";let N=R("div",{class:"panel talk"},R("div",{class:"p-head"},R("h2",{},`\u{1F4D8} \u82F1\u6587\u8AB2\uFF1A${l.u.title}`,R("small",{},l.i>=0&&l.i<l.qs.length?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u984C`:"")),R("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ot},"\xD7")));if(E.append(N),l.i<0){let $=l.U[(l.U.indexOf(l.u)+1)%l.U.length];N.append(...gt(m.intro.replace("{unit}",l.u.title),m.introZh.replace("{unit}",l.u.title),y.zh),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>{l.i=0,vl()}},"\u958B\u59CB\u4E0A\u8AB2"),l.U.length>1?R("button",{class:"btn ghost",onclick:()=>eo($.id)},"\u63DB\u4E00\u8AB2\uFF1A"+$.title):null)),pt(m.intro.replace("{unit}",l.u.title));return}if(l.i<l.qs.length){let $=l.qs[l.i];he(N,$,lt=>{let st=$.cards[lt],yt=!!(st&&st.ok),Ft=$.cards.find(Dt=>Dt.ok).t;return Ct("class",`${l.u.id}:${$.kind}:${$.key}`,yt,st&&st.t),yt&&l.right++,l.i++,pt($.full||Ft),{ok:yt,answer:$.full||Ft,coins:yt?_t.perQ:0,last:l.i>=l.qs.length}},vl);return}let G=l.right===l.qs.length;G&&et(_t.allRight),Ht("class"),_e(),N.append(...gt(m.thanks,m.thanksZh,y.zh),R("p",{class:"big"},`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u984C${G?`\uFF0C\u5168\u5C0D +${_t.allRight} \u91D1\u5E63`:""}`),R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>eo(l.u.id)},"\u518D\u4E0A\u4E00\u6B21"),R("button",{class:"btn ghost",onclick:ot},"\u4E0B\u8AB2"))),pt(m.thanks)}let Fn=o.cook;function no(){let l=new Set(T.cooked||[]);ft("\u{1F373} \u6E6F\u59C6\u4E3B\u5EDA\u7684\u5EDA\u623F",...gt(Fn.intro,Fn.introZh,y.zh),R("p",{class:"muted small"},`\u505A\u904E ${l.size} / ${Fn.dishes.length} \u9053\u83DC\u3002\u6BCF\u4E00\u6B65\u7B54\u5C0D +${_t.perQ} \u91D1\u5E63\uFF0C\u6574\u9053\u83DC\u5168\u5C0D\u518D +${_t.allRight}\u3002`),R("div",{class:"cards items"},Fn.dishes.map(m=>R("button",{class:"card item"+(l.has(m.id)?" ok":""),"data-dish":m.id,onclick:()=>Rh(m.id)},R("span",{class:"ico"},m.icon),R("span",{class:"en"},m.en))))),y.overlay="task",pt(Fn.intro)}function Rh(l){let m=Fn.dishes.find(E=>E.id===l);m&&(y.cook={d:m,lines:wh(m,Fn),qs:sp(m,Fn),i:-1,right:0,hide:!1},bl())}function bl(){let l=y.cook,m=O.ov;m.innerHTML="",m.hidden=!1,y.overlay="task";let E=R("div",{class:"panel talk"},R("div",{class:"p-head"},R("h2",{},`${l.d.icon} ${l.d.en}\u30FB${l.d.zh}`,R("small",{},l.i>=0&&l.i<l.qs.length?`\u3000\u7B2C ${l.i+1} / ${l.qs.length} \u6B65`:"")),R("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ot},"\xD7")));m.append(E);let N=R("div",{class:"glist recipe"+(l.hide&&l.i<l.qs.length?" listen":"")},l.lines.map((st,yt)=>R("div",{class:"npc-line"+(yt<l.i?" done":"")},R("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u6B65",onclick:()=>pt(st.en)},"\u{1F50A}"),R("b",{class:"en"},st.en),y.zh?R("small",{class:"muted"},"\u3000"+st.zh):null))),G=R("button",{class:"btn ghost small",onclick:()=>{l.hide=!l.hide,N.classList.toggle("listen",l.hide),G.textContent=l.hide?"\u{1F440} \u770B\u98DF\u8B5C":"\u{1F648} \u84CB\u4F4F\u98DF\u8B5C\uFF08\u6311\u6230\uFF09"}},l.hide?"\u{1F440} \u770B\u98DF\u8B5C":"\u{1F648} \u84CB\u4F4F\u98DF\u8B5C\uFF08\u6311\u6230\uFF09");if(l.i<0){E.append(R("p",{class:"big"},"\u{1F4DC} \u98DF\u8B5C Recipe"),N,R("div",{class:"row"},R("button",{class:"btn big",onclick:()=>{l.i=0,bl()}},"\u958B\u59CB\u505A\u83DC"),R("button",{class:"btn ghost",onclick:no},"\u63DB\u4E00\u9053\u83DC"))),pt(l.d.en+". "+l.lines.map(st=>st.en).join(" "));return}if(l.i<l.qs.length){E.append(N,R("div",{class:"row"},G));let st=l.qs[l.i];he(E,st,yt=>{let Ft=st.cards[yt],Dt=!!(Ft&&Ft.ok);return Ct("cook",st.key,Dt,Ft&&Ft.t),Dt&&l.right++,l.i++,pt(st.full),{ok:Dt,answer:st.cards.find(ie=>ie.ok).t,coins:Dt?_t.perQ:0,last:l.i>=l.qs.length}},bl);return}let $=l.right===l.qs.length;$&&et(_t.allRight),T.cooked=[...new Set((T.cooked||[]).concat(l.d.id))],Ht("cook"),_e();let lt=Fn.done.replace("{dish}",l.d.en);E.append(R("p",{class:"dish-big"},l.d.icon),...gt(lt,Fn.doneZh.replace("{dishZh}",l.d.zh),y.zh),R("p",{class:"big"},`\u7B54\u5C0D ${l.right} / ${l.qs.length} \u6B65${$?`\uFF0C\u5168\u5C0D +${_t.allRight} \u91D1\u5E63`:""}`),R("div",{class:"row"},R("button",{class:"btn big",onclick:no},"\u518D\u505A\u4E00\u9053"),R("button",{class:"btn ghost",onclick:ot},"\u4F11\u606F"))),pt(lt)}Ot.push(l=>l.n.id===Fn.npc?R("button",{class:"card",onclick:no},"\u{1F373} \u8DDF\u4E3B\u5EDA\u5B78\u505A\u83DC\uFF08\u82F1\u6587\u98DF\u8B5C\uFF09"):null),Ot.push(l=>l.n.id===ue.npc?R("button",{class:"card",onclick:()=>y.list?qe(!1):Et()},y.list?"\u{1F9FA} \u518D\u770B\u4E00\u6B21\u8CFC\u7269\u6E05\u55AE":"\u{1F9FA} \u5E6B\u55AC\u723A\u723A\u8CB7\u6771\u897F\uFF08\u8CFC\u7269\u6E05\u55AE\uFF09"):null),Ot.push(l=>l.n.id==="shopkeeper"&&y.list?R("button",{class:"card",onclick:le},"\u{1F9FA} \u7167\u55AC\u723A\u723A\u7684\u6E05\u55AE\u62FF\u6771\u897F\u3001\u7D50\u5E33"):null),Ot.push(l=>l.n.id===Be.npc?R("button",{class:"card",onclick:Tn},"\u{1F37D}\uFE0F \u7576\u670D\u52D9\u751F\uFF08\u9001\u9910\u7D66 3 \u4F4D\u5BA2\u4EBA\uFF09"):null),Ot.push(l=>l.n.id===o.class.npc?R("button",{class:"card",onclick:()=>eo()},"\u{1F4D8} \u4E0A\u4E00\u5802\u82F1\u6587\u8AB2\uFF08\u8AB2\u672C\uFF09"):null);function Ml(){ft("\u5DE5\u4F5C",pe(),R("p",{class:"muted"},`\u5230\u5DE5\u4F5C\u5730\u9EDE\u627E\u5C45\u6C11\u8003\u57F7\u7167\uFF0810 \u984C\u82F1\u6587\uFF0C\u7B54\u5C0D ${8} \u984C\u901A\u904E\uFF09\uFF0C\u901A\u904E\u5C31\u80FD\u7A7F\u5236\u670D\u3001\u4E0A\u73ED\u8CFA\u91D1\u5E63\u3002\u751F\u6D3B\u4EFB\u52D9\uFF08\u627E\u55AC\u723A\u723A\u3001\u6E6F\u59C6\u4E3B\u5EDA\u3001\u6797\u8001\u5E2B\u3001\u8FF7\u8DEF\u7684\u5C0F\u9EA5\u514B\uFF09\u4E0D\u7528\u57F7\u7167\u3002`),y.go?R("div",{class:"row"},R("button",{class:"btn",onclick:$i},"\u770B\u73FE\u5728\u7684\u4EFB\u52D9")):null,R("div",{class:"shop"},Object.keys(g).map(l=>{let m=g[l],E=t.buildings.find($=>$.id===m.place),N=t.npcs.find($=>$.id===m.npc),G=p.lic[l];return R("div",{class:"offer"},R("div",{class:"of-t"},R("b",{},`${m.zh} ${m.en}`),R("small",{},G?`\u2713 \u6709\u57F7\u7167\u30FB\u4E0A\u73ED ${p.done[l]||0} \u6B21`:`\u5230${E?E.zh:""}\u627E${N?N.zh:""}\u8003\u8A66`)),G?R("button",{class:"btn small",onclick:()=>{p.wear=p.wear===l?null:l,L(),_e(),Ml()}},p.wear===l?"\u812B\u4E0B\u5236\u670D":"\u7A7F\u4E0A\u5236\u670D"):null)}))),y.overlay="panel"}let xp=U.filter(l=>l.reward.kind==="furniture").map(l=>l.reward.id),io=t.furniture.slice(),Ph=()=>{for(let l of xp)P.has(l)&&!io.includes(l)&&io.push(l)};Ph();function Ks(){O.hotbar.innerHTML="",O.hotbar.hidden=!y.furn,y.furn&&(io.forEach((l,m)=>O.hotbar.append(R("button",{class:"slot"+(m===y.furnSel?" on":""),title:c.name(l),onpointerdown:E=>{E.stopPropagation(),y.furnSel=m,Ks()}},R("span",{class:"fname"},c.name(l))))),O.hotbar.append(R("button",{class:"slot rot",onpointerdown:l=>{l.stopPropagation(),y.furnRot=(y.furnRot+1)%4,W("\u6905\u5B50\u65B9\u5411\uFF1A"+["\u5317","\u6771","\u5357","\u897F"][y.furnRot])}},"\u8F49\u5411")))}function so(){let l=jt(),m=R("div",{class:"shop"},f.homes.map((N,G)=>R("div",{class:"offer"},R("div",{class:"of-t"},R("b",{},`${G+1} \u865F\u623F\u5B50`),R("small",{},x.id===N.id?"\u9019\u662F\u4F60\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F")),x.id===N.id?R("button",{class:"btn small",onclick:()=>{Sl(),ot()}},"\u56DE\u5BB6"):R("button",{class:"btn small",onclick:()=>Ih(N.id)},x.id?"\u642C\u904E\u53BB":"\u4F4F\u9019\u9593")))),E=(N,G)=>R("div",{class:"swatches"},N.map($=>R("button",{class:"sw",title:c.name($),style:"background:"+c.get($).colors.top,onclick:()=>G($)})));ft("\u6211\u7684\u5BB6",m,l?R("div",{},R("div",{class:"row"},R("button",{class:"btn",onclick:()=>{y.furn=!y.furn,Ks(),ot(),W(y.furn?"\u5BB6\u5177\u6A21\u5F0F\uFF1A\u9EDE\u5730\u677F\u653E\u3001\u9577\u6309\uFF08\u6216\u5DE6\u9375\uFF09\u62FF\u6389\uFF0C\u53EA\u6709\u5BB6\u88E1\u53EF\u4EE5":"\u5BB6\u5177\u6A21\u5F0F\u95DC\u6389\u4E86")}},y.furn?"\u95DC\u6389\u5BB6\u5177\u6A21\u5F0F":"\u5BB6\u5177\u6A21\u5F0F\uFF08\u653E\u5BB6\u5177\uFF09"),R("button",{class:"btn ghost",onclick:()=>{x.locked=!x.locked,W(x.locked?"\u9580\u9396\u4E0A\u4E86":"\u9580\u6253\u958B\u9396\u4E86"),so()}},x.locked?"\u9580\uFF1A\u9396\u8457\uFF08\u9EDE\u4E00\u4E0B\u89E3\u9396\uFF09":"\u9580\uFF1A\u6C92\u9396\uFF08\u9EDE\u4E00\u4E0B\u4E0A\u9396\uFF09")),R("h3",{},"\u7246\u58C1\u984F\u8272"),E(t.wallColors,N=>wl("wall",N)),R("h3",{},"\u5730\u677F"),E(t.floorColors,N=>wl("floor",N)),bp()):R("p",{class:"muted"},"\u5148\u9078\u4E00\u9593\u623F\u5B50\u4F4F\u4E0B\u4F86\uFF08\u514D\u8CBB\uFF09\u3002"))}function Ih(l){x.id&&x.id!==l&&(x.restore=(x.restore||[]).filter(m=>m!==l).concat(x.id),x.wall=null,x.floor=null),x.id=l,ae(),Sl(),ot(),W("\u6B61\u8FCE\u56DE\u5BB6\uFF01\u6253\u958B\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u653E\u5BB6\u5177\u3001\u63DB\u984F\u8272"),_e()}function Sl(){let l=jt();l&&(y.p={x:l.x+l.w/2,y:h+1,z:l.z-1.5},y.v={x:0,y:0,z:0},y.yaw=Math.PI)}function wl(l,m){let E=jt();if(E){if(Math.hypot(y.p.x-(E.x+E.w/2),y.p.z-(E.z+E.d/2))>30){W("\u5148\u56DE\u5BB6\u518D\u63DB\u984F\u8272");return}if(l==="wall"){let N=["glass","door","door_open"];for(let[G,$,lt]of yd(E,h,(st,yt,Ft)=>{let Dt=Q.get(st,yt,Ft);return Dt&&!N.includes(c.get(Dt).id)}))Q.set(G,$,lt,c.num(m));x.wall=m}else for(let N=E.x+1;N<E.x+E.w-1;N++)for(let G=E.z+1;G<E.z+E.d-1;G++){let $=m.startsWith("carpet");Q.set(N,h,G,c.num($?"planks":m));let lt=c.get(Q.get(N,h+1,G));$&&lt&&lt.n===0?Q.set(N,h+1,G,c.num(m)):!$&&lt&&lt.id.startsWith("carpet")&&Q.set(N,h+1,G,0)}l==="floor"&&(x.floor=m),W("\u63DB\u597D\u4E86\uFF01"),_e()}}let Lh={bike:"\u{1F6B2}",scooter:"\u{1F6F4}",boat:"\u{1F6F6}",car:"\u{1F697}",bus:"\u{1F68C}"};function Dh(){let l=Ae("#b-bike");l&&(l.textContent=Object.keys(oe).some(m=>P.has(m))?"\u4EA4\u901A":"\u8173\u8E0F\u8ECA")}function Ji(l){let m=xe(),E=Math.floor(y.p.x),N=Math.floor(y.p.z);if(l&&oe[l].big&&ht.has(E+","+N))return W("\u5728\u5C4B\u5B50\u88E1\u4E0D\u80FD\u958B\u8ECA\uFF0C\u5148\u8D70\u5230\u5916\u9762"),!1;if(H[l]){let G=null;for(let $=0;$<=3&&!G;$++)for(let lt=-$;lt<=$&&!G;lt++)for(let st=-$;st<=$&&!G;st++){let yt={x:y.p.x+lt,y:y.p.y,z:y.p.z+st};Hf(yt,(Ft,Dt,ie)=>rt(l,Ft,Dt,ie),H[l])&&(G=yt)}if(!G)return W("\u9019\u88E1\u592A\u7A84\u4E86\uFF0C\u8ECA\u5B50\u653E\u4E0D\u4E0B\u3002\u5230\u99AC\u8DEF\u4E0A\u518D\u53EB\u8ECA"),!1;y.p=G}if(l==="boat"){let G=null;for(let $=-2;$<=2&&!G;$++)for(let lt=-2;lt<=2&&!G;lt++)kt(E+$,N+lt)&&(G=[E+$,N+lt]);if(!G)return W("\u5C0F\u8239\u8981\u5728\u516C\u5712\u7684\u6C60\u5858\u908A\u624D\u80FD\u5750"),!1;y.p={x:G[0]+.5,y:h+1,z:G[1]+.5}}if(m==="boat"&&l!=="boat"){let G=null;for(let $=1;$<=4&&!G;$++)for(let lt=-$;lt<=$&&!G;lt++)for(let st=-$;st<=$&&!G;st++){let yt=E+lt,Ft=N+st;!kt(yt,Ft)&&!c.flat.solid[Q.get(yt,h+1,Ft)]&&!c.flat.solid[Q.get(yt,h+2,Ft)]&&(G=[yt,Ft])}G&&(y.p={x:G[0]+.5,y:h+1,z:G[1]+.5})}return y.ride=l||null,y.bike=!!l,y.v={x:0,y:0,z:0},W(l?`${Lh[l]||""} \u5750\u4E0A${oe[l].zh.replace(/（.*）/,"")}\u4E86\uFF01`:"\u4E0B\u8ECA\u4E86\uFF0C\u7528\u8D70\u7684"),!0}function Nh(){let l=["bike"].concat(Object.keys(oe).filter(m=>P.has(m)));ft("\u4EA4\u901A\u5DE5\u5177",R("div",{class:"cards"},R("button",{class:"card",onclick:()=>{Ji(null),ot()}},"\u{1F6B6} \u8D70\u8DEF"),l.map(m=>R("button",{class:"card"+(xe()===m?" ok":""),onclick:()=>{Ji(m)&&ot()}},`${Lh[m]||""} ${oe[m].zh}`))),R("p",{class:"muted small"},"\u6C7D\u8ECA\u3001\u516C\u8ECA\u958B\u4E0D\u9032\u5C4B\u5B50\uFF1B\u5C0F\u8239\u53EA\u80FD\u5728\u516C\u5712\u7684\u6C60\u5858\u3002")),y.overlay="panel"}let tn=null,us={dog:"\u5C0F\u72D7",cat:"\u5C0F\u8C93",rabbit:"\u5154\u5B50",dalmatian:"\u6591\u9EDE\u72D7"},Al=()=>Object.keys(us).filter(l=>P.has(l));function Uh(l){let m=document.createElement("canvas");m.width=256,m.height=56;let E=m.getContext("2d");E.fillStyle="rgba(239,235,221,.92)",E.fillRect(4,4,248,48),E.fillStyle="#26302A",E.textAlign="center",E.font="bold 30px sans-serif",E.fillText(l,128,40);let N=new Pn(m);N.colorSpace=Ge;let G=new Di(new _i({map:N,depthWrite:!1}));return G.scale.set(1.3,.28,1),G.position.y=1,G}function Ki(){tn&&(D.remove(tn.g),tn=null);let l=S.active;if(!l||!P.has(l)){S.active=null;return}let m=Gd(l);m.add(Uh(S.names[l]||us[l])),D.add(m);let E=_l(y.p.x+1,y.p.z+1)||[y.p.x+1,y.p.z+1];tn={id:l,g:m,p:{x:E[0],y:y.p.y,z:E[1]},sp:0}}function _p(l,m,E){let N=Ae("#b-pet"),G=!Al().length;N.hidden!==G&&(N.hidden=G),tn&&(tn.sp=Ch(tn,l,.7),tn.g.position.set(tn.p.x,tn.p.y,tn.p.z),tn.yaw!=null&&(tn.g.rotation.y=tn.yaw),Hd(tn.g,tn.sp,m,E))}function El(){ft("\u6211\u7684\u5BF5\u7269",R("p",{class:"muted"},"\u5BF5\u7269\u6703\u8DDF\u8457\u4F60\u8D70\u3002\u540D\u5B57\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002"),R("div",{class:"shop"},Al().map(l=>R("div",{class:"offer"},R("div",{class:"of-t"},R("b",{},us[l]),R("input",{class:"typein pet-name",type:"text",maxlength:12,value:S.names[l]||"",placeholder:"\u5E6B\u7260\u53D6\u540D\u5B57",onkeydown:m=>m.stopPropagation(),onchange:m=>{S.names[l]=Rd(m.target.value),m.target.value=S.names[l],S.active===l&&Ki(),_e()}})),R("button",{class:"btn small",onclick:()=>{S.active=S.active===l?null:l,Ki(),_e(),El()}},S.active===l?"\u8B93\u7260\u5F85\u5728\u5BB6":"\u5E36\u7260\u51FA\u9580"))))),y.overlay="panel"}let Tl=()=>R("button",{class:"btn ghost",onclick:Cl},"\u2190 \u56DE\u624B\u6A5F");function Cl(){let l=(E,N,G,$)=>R("button",{class:"app","data-app":E,onclick:$},R("span",{class:"ico"},N),R("span",{},G)),m=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date);ft("\u{1F4F1} \u5C0F\u93AE\u624B\u6A5F",R("div",{class:"phone-bar"},R("b",{},m),R("span",{},`\u{1FA99} ${d.coins}`)),R("div",{class:"apps"},l("ride","\u{1F697}","\u53EB\u8ECA",Nh),l("wear","\u{1F455}","\u63DB\u8863\u670D",js),l("pet","\u{1F436}","\u53EB\u5BF5\u7269",Fh),l("today","\u{1F4CA}","\u4ECA\u65E5\u984C\u6578",yp),l("photo","\u{1F4F7}","\u62CD\u7167",Oh))),O.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"}function Fh(){let l=Al();if(!l.length){W("\u9084\u6C92\u6709\u5BF5\u7269\uFF1A\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\u8CB7\uFF0C\u6216\u627E\u79D8\u5BC6\u623F\u9593");return}ft("\u{1F436} \u53EB\u5BF5\u7269",R("p",{class:"muted"},"\u9EDE\u4E00\u96BB\uFF0C\u7260\u6703\u99AC\u4E0A\u8DD1\u5230\u4F60\u8EAB\u908A\u3002"),R("div",{class:"cards"},l.map(m=>R("button",{class:"card"+(S.active===m?" ok":""),"data-pet":m,onclick:()=>{S.active=m,Ki(),_e(),ot(),W(`${S.names[m]||us[m]} \u8DD1\u904E\u4F86\u4E86\uFF01`)}},`${us[m]}${S.names[m]?"\u300C"+S.names[m]+"\u300D":""}`))),R("div",{class:"row"},S.active?R("button",{class:"btn ghost",onclick:()=>{S.active=null,Ki(),_e(),Fh()}},"\u8B93\u7260\u5F85\u5728\u5BB6"):null,Tl())),O.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"}function kh(){let l=$r(),m=Date.parse(l+"T00:00:00+08:00"),E=vt("ke_log",[]).filter(G=>G&&G.m==="town"&&G.t>=m&&G.t<m+864e5),N=G=>E.filter($=>G.test($.k||"")).length;return{all:E.length,license:N(/^town:license:/),job:N(/^town:job:/),life:N(/^town:life:/),chat:E.length-N(/^town:(license|job|life):/)}}function yp(){let l=null;try{l=window.KidsDaily&&window.KidsDaily.today()}catch{}let m=l&&l.rows?l.rows.find(N=>N.k==="english"):null,E=kh();ft("\u{1F4CA} \u4ECA\u65E5\u984C\u6578",m?R("p",{class:"big"},`\u6BCF\u65E5\u82F1\u6587\uFF1A${m.n} / ${m.goal} \u984C ${m.done?"\u2713":""}`):R("p",{class:"muted"},"\u6BCF\u65E5\u82F1\u6587\u6E05\u55AE\u8981\u767B\u5165\u5B78\u7FD2\u7AD9\u624D\u6703\u8A18\u9304\u3002"),R("div",{class:"quests"},R("div",{class:"quest"},R("b",{},`\u4ECA\u5929\u5728\u5C0F\u93AE\u7B54\u4E86 ${E.license+E.job+E.life} \u984C\uFF08\u7B97\u9032\u6BCF\u65E5\u82F1\u6587\uFF09`),R("small",{},`\u57F7\u7167\u8003\u8A66 ${E.license}\u30FB\u5DE5\u4F5C ${E.job}\u30FB\u751F\u6D3B\u4EFB\u52D9 ${E.life}`)),R("div",{class:"quest"},R("b",{},`\u8DDF\u5C45\u6C11\u804A\u5929 ${E.chat} \u53E5`),R("small",{},"\u804A\u5929\u7DF4\u7FD2\u4E0D\u7B97\u6BCF\u65E5\u984C\u6578"))),pe(),R("div",{class:"row"},Tl())),O.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"}function Oh(){ot(),I.render(D,B);let l=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date).replace(/:/g,"");C.toBlob(m=>{if(!m){W("\u62CD\u7167\u5931\u6557\uFF0C\u518D\u8A66\u4E00\u6B21");return}y.photo&&URL.revokeObjectURL(y.photo.url),y.photo={url:URL.createObjectURL(m),name:`\u5C0F\u670B\u53CB\u93AE_${$r()}_${l}.png`,size:m.size},ze("pickup"),ft("\u{1F4F7} \u7167\u7247",R("img",{class:"photo",src:y.photo.url,alt:"\u525B\u525B\u62CD\u7684\u5C0F\u93AE\u7167\u7247"}),R("p",{class:"muted small"},"iPad\uFF1A\u9577\u6309\u7167\u7247 \u2192\u300C\u52A0\u5165\u7167\u7247\u300D\uFF0C\u6216\u6309\u300C\u4E0B\u8F09\u7167\u7247\u300D\u3002\u7167\u7247\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u4EFB\u4F55\u5730\u65B9\u3002"),R("div",{class:"row"},R("a",{class:"btn",href:y.photo.url,download:y.photo.name},"\u2B07\uFE0F \u4E0B\u8F09\u7167\u7247"),R("button",{class:"btn ghost",onclick:Oh},"\u518D\u62CD\u4E00\u5F35"),Tl())),O.ov.querySelector(".panel").classList.add("phone"),y.overlay="panel"},"image/png")}let Rl=s.cats[0][0];function ro(){let l=s.items.filter(m=>m.cat===Rl);ft("\u674E\u8001\u95C6\u7684\u5546\u5E97",R("div",{class:"row tabs"},s.cats.map(([m,E])=>R("button",{class:"btn small"+(m===Rl?"":" ghost"),onclick:()=>{Rl=m,ro()}},E))),R("p",{class:"muted small"},`\u4F60\u6709 ${d.coins} \u91D1\u5E63\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u500B\u9322\u5305\uFF09\u3002`),R("div",{class:"shop"},l.map(m=>{let E=P.has(m.id);return R("div",{class:"offer"},R("div",{class:"of-t"},R("b",{},`${m.zh}`),R("small",{},E?"\u2713 \u5DF2\u7D93\u6709\u4E86":`${m.price} \u91D1\u5E63`)),E?null:R("button",{class:"btn small",onclick:()=>Bh(m.id)},"\u8CB7"))}))),y.overlay="shop"}async function Bh(l){let m=F[l];if(!m||y.buying)return!1;y.buying=!0;try{await _e();let E=al(await Zr.get("hw_coins")),N=Xd(E),G=Cd(m,P,{coins:N.balance(),hasHome:!!x.id});return G.ok?(await N.spend(m.price,"town:"+m.id)).ok?(P.add(m.id),await Zr.putMany({hw_coins:uh(E)}),d.coins=E.coins,it(),m.cat==="pet"&&!S.active&&(S.active=m.id,Ki()),m.id==="floor2"&&(x.floors=2,ae()),m.theme&&(x.theme=m.theme),await _e(),Dh(),ze("coin"),W({ride:"\u8CB7\u5230\u4E86\uFF01\u6309\u300C\u4EA4\u901A\u300D\u5750\u4E0A\u53BB",pet:"\u8CB7\u5230\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\uFF0C\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",wear:"\u8CB7\u5230\u4E86\uFF01\u5230\u300C\u5916\u89C0\u300D\u7A7F\u4E0A",house:"\u8CB7\u5230\u4E86\uFF01\u56DE\u5BB6\u770B\u770B\uFF08\u5728\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u63DB\u6A23\u5F0F\uFF09"}[m.cat]),y.overlay==="shop"&&ro(),!0):(W("\u8CB7\u4E0D\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21"),!1):(W(G.reason==="coins"?`\u91D1\u5E63\u4E0D\u5920\uFF0C\u9084\u5DEE ${G.short} \u679A\u3002\u53BB\u4E0A\u73ED\u6216\u7B54\u984C\u8CFA\u91D1\u5E63\u5427\uFF01`:G.reason==="home"?"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50":"\u5DF2\u7D93\u6709\u4E86"),!1)}finally{y.buying=!1}}Ot.push(l=>l.n.id==="shopkeeper"?R("button",{class:"card",onclick:ro},"\u{1F6D2} \u8CB7\u6771\u897F\uFF08\u4EA4\u901A\u5DE5\u5177\u30FB\u5BF5\u7269\u30FB\u8863\u670D\u30FB\u623F\u5B50\uFF09"):null);let Pl=()=>[x.id,x.floors||1,x.theme||"none"].join(":"),zh=l=>[[l.x,l.z],[l.x+l.w-1,l.z],[l.x,l.z+l.d-1],[l.x+l.w-1,l.z+l.d-1]].every(([m,E])=>Q.ready(m,E));function vp(){for(let l of(x.restore||[]).slice()){let m=f.homes.find(G=>G.id===l);if(!m||l===x.id){x.restore=x.restore.filter(G=>G!==l);continue}if(!zh(m))continue;let E=new Map,N=(G,$,lt)=>{let st=Math.floor(G/16),yt=Math.floor(lt/16),Ft=st+","+yt;return E.has(Ft)||E.set(Ft,f.genChunk(st,yt)),E.get(Ft)[Dn(G-st*16,$,lt-yt*16)]};for(let G=m.x;G<m.x+m.w;G++)for(let $=m.z;$<m.z+m.d;$++)for(let lt=h;lt<=h+xh;lt++){let st=N(G,lt,$);Q.get(G,lt,$)!==st&&Q.set(G,lt,$,st)}x.restore=x.restore.filter(G=>G!==l),_e()}}function Il(){vp();let l=ye();if(!l||x.built===Pl()||!zh(l))return;let m=0;for(let[E,N,G,$]of vd(l,h,{floors:x.floors,theme:x.theme,wall:x.wall})){let lt=$==="air"?0:c.num($);Q.get(E,N,G)!==lt&&(Q.set(E,N,G,lt),m++)}x.built=Pl(),m&&_e()}let Vh={none:"\u539F\u672C\u7684\u6A23\u5B50",tree:"\u6A39\u5C4B",lighthouse:"\u71C8\u5854",castle:"\u57CE\u5821"},bp=()=>{let l=["none"].concat(s.items.filter(m=>m.theme&&P.has(m.id)).map(m=>m.theme));return l.length<2&&x.floors!==2?R("p",{class:"muted small"},"\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u53EF\u4EE5\u8CB7\u4E8C\u6A13\u548C\u6A39\u5C4B\uFF0F\u71C8\u5854\uFF0F\u57CE\u5821\u6A23\u5F0F\u3002"):R("div",{},R("h3",{},"\u623F\u5B50\u6A23\u5F0F"+(x.floors===2?"\uFF08\u6709\u4E8C\u6A13\uFF0C\u5C4B\u88E1\u89D2\u843D\u6709\u68AF\u5B50\uFF09":"")),R("div",{class:"swatches"},l.map(m=>R("button",{class:"sw"+((x.theme||"none")===m?" on":""),onclick:()=>{x.theme=m,Il(),_e(),so(),W("\u63DB\u6210"+Vh[m])}},Vh[m]))))};function js(){let l=(E,N,G)=>R("div",{class:"av-row"},R("b",{},E),R("div",{class:"swatches"},qn[N].map(($,lt)=>Ed(b,P,N,$)?null:R("button",{class:"sw"+(w[N]===lt?" on":""),style:typeof $=="string"&&$[0]==="#"?"background:"+$:"",onclick:()=>{w[N]=lt,L(),js(),_e()}},G?G($):"")))),m={short:"\u77ED\u9AEE",long:"\u9577\u9AEE",bun:"\u5305\u982D",spiky:"\u523A\u523A",none:"\u5149\u982D",cap:"\u68D2\u7403\u5E3D",beanie:"\u6BDB\u5E3D",bow:"\u8774\u8776\u7D50",true:"\u6234",false:"\u4E0D\u6234",flower:"\u82B1\u5708",tophat:"\u7D33\u58EB\u5E3D",crown:"\u7687\u51A0",stripe:"\u689D\u7D0B",star:"\u661F\u661F",scarf:"\u570D\u5DFE",goldbadge:"\u91D1\u5FBD\u7AE0",backpack:"\u80CC\u5305",cape:"\u62AB\u98A8"};ft("\u6211\u7684\u6A23\u5B50",l("\u819A\u8272","skin"),l("\u9AEE\u578B","hair",E=>m[E]),l("\u982D\u9AEE\u984F\u8272","hairColor"),l("\u4E0A\u8863","top",E=>E[0]==="#"?"":m[E]),l("\u8932\u5B50","bottom"),l("\u5E3D\u5B50","hat",E=>E==="none"?"\u4E0D\u6234":m[E]),l("\u773C\u93E1","glasses",E=>m[E]),l("\u914D\u4EF6","acc",E=>E==="none"?"\u4E0D\u6234":m[E]),R("p",{class:"muted small"},"\u5E3D\u5B50\u3001\u8863\u670D\u3001\u914D\u4EF6\u53EF\u4EE5\u5728\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u8CB7\u66F4\u591A\u3002"),R("p",{class:"muted"},"\u63DB\u597D\u5C31\u81EA\u52D5\u5B58\u8D77\u4F86\u3002"),R("div",{class:"row"},R("button",{class:"btn",onclick:ot},"\u5B8C\u6210")))}function Mp(){ft("\u8A2D\u5B9A",R("label",{class:"set"},"\u97F3\u6A02",R("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:l=>gh({music:+l.target.value,muted:!1})})),R("label",{class:"set"},"\u97F3\u6548",R("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:l=>gh({sfx:+l.target.value,muted:!1})})),R("p",{},"\u91D1\u5E63\u8DDF\u300C\u65B9\u584A\u4E16\u754C\u300D\u662F\u540C\u4E00\u500B\u9322\u5305\u3002"),R("p",{},`\u79D8\u5BC6\u623F\u9593\uFF1A\u627E\u5230 ${Y()} / ${U.length} \u9593\uFF08\u7DDA\u7D22\u5728\u516C\u5712\u65C1\u908A\u7684\u516C\u544A\u6B04\uFF09`),R("p",{},R("a",{class:"home-link",href:"../../#s/game",onclick:()=>_e()},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),R("p",{class:"muted small"},"\u7248\u672C "+Th))}let Jn=(l,m)=>{let E=Ae(l);E&&(E.onclick=N=>{N.stopPropagation(),ul(),m()})};Jn("#b-av",js),Jn("#b-home",so),Jn("#b-set",Mp),Jn("#b-job",Ml),Jn("#b-pet",El),Jn("#b-phone",Cl),Ae("#task").onclick=l=>{l.stopPropagation(),!y.overlay&&(y.go?$i():y.police?hs():y.bus?xl():y.lost?hi():y.list&&qe(!1))},Jn("#b-bike",()=>{if(!Object.keys(oe).some(l=>P.has(l))){Ji(y.bike?null:"bike");return}Nh()}),Jn("#b-view",()=>{y.view=y.view==="tp"?"fp":"tp"}),Jn("#b-zh",()=>{y.zh=!y.zh,jy("kt_zh",y.zh?"on":"off"),Ae("#b-zh").textContent=y.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC"}),Ae("#b-zh").textContent=y.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC",Jn("#b-snd",()=>{dd(),Ae("#b-snd").textContent=fl()?"\u{1F507}":"\u{1F50A}"});let wi=new J,Gh=()=>{let l=Math.cos(y.pitch);return{x:-Math.sin(y.yaw)*l,y:Math.sin(y.pitch),z:-Math.cos(y.yaw)*l}},Ll=()=>({x:y.p.x,y:y.p.y+1.62+me(),z:y.p.z}),Sp=l=>c.flat.boxes[l]||(c.flat.shape[l]===4?[[0,0,0,1,.1,1]]:null);function wp(l,m,E){return l==="screen"?(wi.set(m/innerWidth*2-1,-(E/innerHeight)*2+1,.5).unproject(B).sub(B.position).normalize(),{o:{x:B.position.x,y:B.position.y,z:B.position.z},d:{x:wi.x,y:wi.y,z:wi.z}}):y.view==="tp"?(B.getWorldDirection(wi),{o:{x:B.position.x,y:B.position.y,z:B.position.z},d:{x:wi.x,y:wi.y,z:wi.z}}):{o:Ll(),d:Gh()}}function Hh(l,m,E){let{o:N,d:G}=wp(l,m,E),$=y.view==="tp"?9:5,lt=lh(N,G,$,(Dt,ie,$e)=>Q.get(Dt,ie,$e),Dt=>Dt&&!c.flat.liquid[Dt],Sp),st=null,yt=lt?lt.dist+.3:$;for(let Dt of v){let ie=Vr(N,G,Dt.p,.8,1.9);ie!=null&&ie<yt&&(yt=ie,st=Dt)}{let Dt=Vr(N,G,$t.p,.7,1.4);Dt!=null&&Dt<yt&&(yt=Dt,st=$t)}for(let Dt of dn){let ie=Vr(N,G,Dt.p,.8,1.9);ie!=null&&ie<yt&&(yt=ie,st=Dt)}let Ft=null;for(let Dt of Ue){let ie=Vr(N,G,Dt.p,.7,.7);ie!=null&&ie<yt&&(yt=ie,Ft=Dt,st=null)}return lt&&(lt.at={x:N.x+G.x*lt.dist,y:N.y+G.y*lt.dist,z:N.z+G.z*lt.dist}),{npc:st,blk:Ft?null:lt,note:Ft}}function Qs(l,m,E,N){if(y.overlay)return;let{npc:G,blk:$,note:lt}=Hh(l,m,E);if(lt&&!N){Z(lt);return}if(G&&!N){G===$t?be():G.suspect?Zi(G.i):Yt(G);return}if(!$)return;let st=c.get($.n);if(!y.furn&&st&&st.interact==="door"){Ep($);return}if(!y.furn&&st&&st.interact==="riddle"){St($);return}if(!y.furn&&st&&st.interact==="treasure"){Rt($);return}if(y.furn){if(N){y.furnPrev=null,Wh($.x,$.y,$.z)?(Q.set($.x,$.y,$.z,0),ze("break","wood")):W("\u53EA\u6709\u81EA\u5DF1\u5BB6\u88E1\u9762\u53EF\u4EE5\u62FF\u6389\u6771\u897F");return}let yt=Dl($);if(!yt.ok){yt.why&&W(yt.why);return}if(l==="screen"&&!(y.furnPrev&&y.furnPrev.x===yt.x&&y.furnPrev.y===yt.y&&y.furnPrev.z===yt.z)){y.furnPrev=yt,W("\u770B\u534A\u900F\u660E\u7684\u9810\u89BD\uFF1A\u518D\u9EDE\u4E00\u6B21\u5C31\u653E\u4E0B\uFF0C\u300C\u8F49\u5411\u300D\u53EF\u4EE5\u8F49\u65B9\u5411");return}y.furnPrev=null,Q.set(yt.x,yt.y,yt.z,c.num(Xh())),ze("place","wood");return}N&&W("\u9019\u88E1\u662F\u5C0F\u93AE\u7684\u516C\u5171\u7A7A\u9593\uFF0C\u4E0D\u80FD\u6316\u4E5F\u4E0D\u80FD\u84CB\u5594")}let Wh=(l,m,E)=>{let N=jt(),G=x.floors===2?Wr(ye(),h,2).slab:-1;return m!==G&&_d(N,l,m,E,h)},Xh=()=>{let l=io[y.furnSel];return c.get(l).place==="stairs"?l+["","_e","_s","_w"][y.furnRot]:l};function Dl(l){let m=l.x+l.face[0],E=l.y+l.face[1],N=l.z+l.face[2];return Wh(m,E,N)?Q.get(m,E,N)?{ok:!1}:Math.abs(m+.5-y.p.x)<.8&&Math.abs(N+.5-y.p.z)<.8&&E>=Math.floor(y.p.y)&&E<=Math.floor(y.p.y)+1?{ok:!1}:{ok:!0,x:m,y:E,z:N}:{ok:!1,why:jt()?"\u5BB6\u5177\u53EA\u80FD\u653E\u5728\u81EA\u5DF1\u5BB6\u88E1\u9762":"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50"}}let qh=new xn({color:15723485,transparent:!0,opacity:.45,depthWrite:!1}),fs=new mn,$h=[0,1].map(()=>{let l=new Le(new un(1,1,1),qh);return fs.add(l),l});fs.visible=!1,D.add(fs);function Ap(l){let m=null;if(y.furn&&y.started&&!y.overlay)if(y.touch)m=y.furnPrev&&Dl({x:y.furnPrev.x,y:y.furnPrev.y,z:y.furnPrev.z,face:[0,0,0]});else{let{blk:$}=Hh("center");m=$&&Dl($)}if(!m||!m.ok){fs.visible=!1;return}let E=c.num(Xh()),N=c.flat.shape[E],G=c.flat.boxes[E]||(N===4?[[0,0,0,1,.1,1]]:N>=1&&N<=3?[[.2,0,.2,.8,.7,.8]]:[[0,0,0,1,1,1]]);$h.forEach(($,lt)=>{let st=G[lt];$.visible=!!st,st&&($.scale.set((st[3]-st[0])*.98,(st[4]-st[1])*.98,(st[5]-st[2])*.98),$.position.set(m.x+(st[0]+st[3])/2,m.y+(st[1]+st[4])/2,m.z+(st[2]+st[5])/2))}),qh.color.setScalar(.5+.5*l),fs.visible=!0}function Ep(l){let m=jt(),E=m&&l.x>=m.x&&l.x<m.x+m.w&&l.z>=m.z&&l.z<m.z+m.d;if(f.homes.find(st=>l.x>=st.x&&l.x<st.x+st.w&&l.z>=st.z&&l.z<st.z+st.d)&&!E){W("\u9019\u4E0D\u662F\u4F60\u7684\u5BB6\uFF0C\u6572\u6572\u9580\u5C31\u597D");return}if(E&&x.locked){W("\u9580\u9396\u8457\uFF0C\u5230\u300C\u6211\u7684\u5BB6\u300D\u89E3\u9396");return}let G=c.get(l.n),$=c.get(G.openAs||G.closeAs);if(!$)return;let lt=l.y;for(;c.get(Q.get(l.x,lt-1,l.z)).interact==="door";)lt--;for(let st=lt;c.get(Q.get(l.x,st,l.z)).interact==="door";st++)Q.set(l.x,st,l.z,$.n);ze("door")}let Yh=()=>{ml||!C.requestPointerLock||C.requestPointerLock()};addEventListener("keydown",l=>{if(l.target&&l.target.tagName==="INPUT")return;let m=l.key.toLowerCase();if(m==="escape"&&y.overlay){ot();return}y.overlay||(y.keys[m]=!0,l.code==="Space"&&(y.keys[" "]=!0,l.preventDefault()),m==="b"&&Ae("#b-bike").click(),m==="v"&&Ae("#b-view").click(),m==="p"&&Ae("#b-phone").click(),m==="r"&&(y.furnRot=(y.furnRot+1)%4),m>="1"&&m<="9"&&y.furn&&(y.furnSel=+m-1,Ks()))}),addEventListener("keyup",l=>{y.keys[l.key.toLowerCase()]=!1,l.code==="Space"&&(y.keys[" "]=!1)}),addEventListener("blur",()=>{y.keys={}}),C.addEventListener("mousedown",l=>{y.touch||y.overlay||document.pointerLockElement!==C&&(Yh(),!ml)||(l.button===0&&Qs("center",0,0,y.furn),l.button===2&&Qs("center",0,0,!1))}),C.addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{document.pointerLockElement===C&&(y.yaw-=l.movementX*.0024,y.pitch=Math.max(-1.4,Math.min(1.4,y.pitch-l.movementY*.0024)))});let tr=new Map;C.addEventListener("pointerdown",l=>{if(l.pointerType!=="touch"||y.overlay)return;if(y.touch=!0,l.preventDefault(),ul(),l.clientX<innerWidth*.4&&l.clientY>innerHeight*.35&&!y.joy.active){y.joy={x:0,y:0,active:!0,ox:l.clientX,oy:l.clientY},O.joy.style.transform=`translate(${l.clientX-60}px, ${l.clientY-60}px)`,O.joy.hidden=!1,tr.set(l.pointerId,{kind:"joy"});return}let m={kind:"look",x:l.clientX,y:l.clientY,sx:l.clientX,sy:l.clientY,t0:performance.now(),drag:!1};m.timer=setTimeout(()=>{m.drag||(m.long=!0,Qs("screen",m.x,m.y,!0))},450),tr.set(l.pointerId,m)},{passive:!1}),addEventListener("pointermove",l=>{let m=tr.get(l.pointerId);if(!m)return;if(m.kind==="joy"){let G=l.clientX-y.joy.ox,$=l.clientY-y.joy.oy,lt=Math.hypot(G,$);lt>55&&(G*=55/lt,$*=55/lt),y.joy.x=G/55,y.joy.y=$/55,O.knob.style.transform=`translate(${G}px,${$}px)`;return}let E=l.clientX-m.x,N=l.clientY-m.y;m.x=l.clientX,m.y=l.clientY,!m.drag&&Math.hypot(m.x-m.sx,m.y-m.sy)>12&&(m.drag=!0,clearTimeout(m.timer)),m.drag&&(y.yaw-=E*.0055,y.pitch=Math.max(-1.4,Math.min(1.4,y.pitch-N*.0055)))});let Zh=l=>{let m=tr.get(l.pointerId);if(m){if(tr.delete(l.pointerId),m.kind==="joy"){y.joy={x:0,y:0,active:!1},O.joy.hidden=!0;return}clearTimeout(m.timer),!m.drag&&!m.long&&performance.now()-m.t0<450&&Qs("screen",m.x,m.y,!1)}};addEventListener("pointerup",Zh),addEventListener("pointercancel",Zh);let Nl=Ae("#b-jump");Nl.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),y.jumpHeld=!0}),Nl.addEventListener("pointerup",()=>{y.jumpHeld=!1}),Nl.addEventListener("pointerleave",()=>{y.jumpHeld=!1}),document.addEventListener("touchmove",l=>{l.target.closest(".panel")||l.preventDefault()},{passive:!1}),["gesturestart","dblclick"].forEach(l=>document.addEventListener(l,m=>m.preventDefault(),{passive:!1})),document.body.classList.toggle("is-touch",y.touch),Ae("#ui").classList.toggle("touch",y.touch);async function _e(){let l={kt_player:{x:y.p.x,y:y.p.y,z:y.p.z,yaw:y.yaw,view:y.view},kt_home:x,kt_avatar:w,kt_jobs:p,kt_owned:[...P],kt_pets:S,kt_life:T};for(let m of y.dirty){let E=_.get(m);E&&(l["kt_chunk:"+m]=dh(E))}y.dirty.clear();try{if(await Mi.putMany(l),y.pending){let m=y.pending;y.pending=0;let E=al(await Zr.get("hw_coins"));Ws(E,m),await Zr.putMany({hw_coins:uh(E)}),d.coins=E.coins,it()}}catch(m){console.warn("save failed",m),!y.quotaWarned&&m&&m.name==="QuotaExceededError"&&(y.quotaWarned=!0,W("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF0C\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{y.started&&_e()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&y.started&&_e()}),addEventListener("pagehide",()=>{y.started&&_e()}),Ae("#go").onclick=()=>{Ae("#start").hidden=!0,y.started=!0,z||ct(),ul(),y.touch||Yh(),u.av||setTimeout(js,300)},it(),Ks(),We(),Dh(),Ki(),Zt();let Tp=new Kt("#EFEBDD"),Cp=new Kt("#22302F"),Rp=new Kt("#E6B48C"),Jh=performance.now(),oo=0,Ul=0;function Pp(l){let m=y.keys,E=(m.d?1:0)-(m.a?1:0),N=(m.w?1:0)-(m.s?1:0);y.joy.active&&(E=y.joy.x,N=-y.joy.y);let G=Math.min(1,Math.hypot(E,N));if(G>0){let eu=Math.hypot(E,N);E=E/eu*G,N=N/eu*G}let $=-Math.sin(y.yaw),lt=-Math.cos(y.yaw),st=Math.cos(y.yaw),yt=-Math.sin(y.yaw),Ft=m.shift||y.joy.active&&G>.92,Dt=y.bike?oe[xe()]:null,ie=Dt?Ft?Dt.run:Dt.speed:Ft?6.2:4.3,$e=($*N+st*E)*ie,yn=(lt*N+yt*E)*ie,ji=1-Math.exp(-(y.onGround?12:5)*l);y.v.x+=($e-y.v.x)*ji,y.v.z+=(yn-y.v.z)*ji;let Qi=Math.floor(y.p.x),er=Math.floor(y.p.z),Qh=!y.bike&&(c.flat.climb[Q.get(Qi,Math.floor(y.p.y),er)]||c.flat.climb[Q.get(Qi,Math.floor(y.p.y)+1,er)]);Qh?y.v.y=m[" "]||y.jumpHeld||N>.1?3.2:Math.max(y.v.y-28*l,-1.5):(y.v.y-=28*l,y.v.y<-40&&(y.v.y=-40)),(m[" "]||y.jumpHeld)&&y.onGround&&!Qh&&xe()!=="boat"&&(y.v.y=8.6,y.onGround=!1);let Ip=Wf(y.p,y.v,l,de,{canStep:!0,grounded:y.onGround,w:H[xe()]});y.onGround=Ip.onGround;let ao=t.bound+1;y.p.x=Math.max(-ao,Math.min(ao,y.p.x)),y.p.z=Math.max(-ao,Math.min(ao,y.p.z)),y.p.y<0&&(y.p={x:j.x,y:j.y,z:j.z},y.v={x:0,y:0,z:0});let tu=Math.hypot(y.v.x,y.v.z);y.onGround&&tu>1&&(y.stepT=(y.stepT||0)+l*tu,y.stepT>(y.bike?4:1.8)&&xe()!=="boat"&&(y.stepT=0,ze("step","stone")))}function Kh(l){requestAnimationFrame(Kh);let m=(l-Jh)/1e3;Jh=l;let E=Math.min(.05,m);y.frames.push(m*1e3),y.frames.length>4e3&&y.frames.shift(),Q.update(y.p.x,y.p.z);let N=Q.ready(y.p.x,y.p.z);y.started&&!y.overlay&&N&&(Pp(E),(y.go||y.lost||y.bus)&&(y.goT=(y.goT||0)+E)>.25&&(y.goT=0,Jr(),to(),Js())),y.time=(y.time+E/Jy)%1;let G=Math.sin(y.time*Math.PI*2),$=Math.min(1,Math.max(0,(G+.12)/.42)),lt=.35+.65*$;X.copy(Cp).lerp(Tp,$).lerp(Rp,Math.max(0,1-Math.abs(G)/.3)*.4*($>.05?1:.4)),q.uniforms.uDay.value=$;let st=X.getHexString();q.uniforms.uFog.value.set(parseInt(st.slice(0,2),16)/255,parseInt(st.slice(2,4),16)/255,parseInt(st.slice(4,6),16)/255);let yt=$>.3?"calm":"night";yt!==y.scene&&(y.scene=yt,pd(yt));for(let ie of v)!ie.busy&&!y.overlay?wd(ie,E):ie.v={x:0,y:0,z:0},hd(ie.g,ie,l/1e3);cd(lt),Re.position.set(y.p.x,y.p.y+me(),y.p.z),Re.rotation.y=y.yaw,pl(Re,y.bike?0:Math.hypot(y.v.x,y.v.z),l/1e3,lt),Re.visible=y.view==="tp";for(let ie in Pe){let $e=Pe[ie],yn=ie===xe();$e.visible=yn,yn&&($e.position.set(y.p.x,y.p.y,y.p.z),$e.rotation.y=y.yaw,Wd($e,lt))}_p(E,l/1e3,lt),mp(E,l/1e3,lt),Ap(lt);for(let ie of dn)pl(ie.g,0,l/1e3,lt);(y.houseT=(y.houseT||0)+E)>1&&(y.houseT=0,Il());let Ft=Ll(),Dt=Gh();if(y.view==="tp"){let ie=lh(Ft,{x:-Dt.x,y:-Dt.y,z:-Dt.z},4.5,(yn,ji,Qi)=>Q.get(yn,ji,Qi),yn=>c.flat.opaque[yn]===1),$e=ie?Math.max(.4,ie.dist-.25):4.5;B.position.set(Ft.x-Dt.x*$e,Ft.y-Dt.y*$e+.3,Ft.z-Dt.z*$e)}else B.position.set(Ft.x,Ft.y,Ft.z);B.rotation.set(y.pitch,y.yaw,0),I.render(D,B),oo+=m,Ul++,oo>.5&&(O.dbg&&(O.dbg.textContent=`${Math.round(Ul/oo)} fps \xB7 \u5340\u584A ${Q.stats.loaded} \xB7 ${y.p.x.toFixed(1)}, ${y.p.y.toFixed(1)}, ${y.p.z.toFixed(1)}`),oo=0,Ul=0),O.loading.hidden=N||!y.started}let jh=()=>{I.setSize(innerWidth,innerHeight,!1),B.aspect=innerWidth/innerHeight,B.updateProjectionMatrix()};addEventListener("resize",jh),jh(),window.KT={build:Th,TEST:ml,G:y,reg:c,world:Q,wallet:d,npcs:v,terr:f,homeState:x,DLG:e,spawn:j,start(){Ae("#go").click()},ready:()=>Q.ready(y.p.x,y.p.z),state:()=>({pos:{...y.p},coins:d.coins,loaded:Q.stats.loaded,overlay:y.overlay}),talk:(l,m)=>mt(v.find(E=>E.n.id===l),m),menu:l=>Yt(v.find(m=>m.n.id===l)),JOBS:g,jobs:p,places:qi,me:()=>Re,openShop:ro,buy:Bh,owned:P,notes:Ue,readNote:Z,secrets:U,chatReady:()=>!!z,setRide:Ji,rideId:xe,pets:S,pet:()=>tn,openPets:El,houseTick:Il,houseSig:Pl,myHome:jt,exam:nn,work:Si,ex:()=>y.exam,task:()=>y.task,go:()=>y.go,openJobs:Ml,pick:l=>{let m=O.ov.querySelectorAll(".cards .card")[l];m&&m.click()},dlg:()=>y.dlg,claim:Ih,goHome:Sl,paint:wl,close:ot,save:_e,avatar:()=>w,setAvatar(l){w=Xr(l),L()},openAvatar:js,openHome:so,lookAt(l,m,E){let N=Ll(),G=l-N.x,$=m-N.y,lt=E-N.z;y.yaw=Math.atan2(-G,-lt),y.pitch=Math.atan2($,Math.hypot(G,lt))},use(l){Qs("center",0,0,!!l)},ghost:()=>({visible:fs.visible,boxes:$h.filter(l=>l.visible).map(l=>[...l.position.toArray().map(m=>+m.toFixed(2)),...l.scale.toArray().map(m=>+m.toFixed(2))])}),furnPrev:()=>y.furnPrev,noteTex:()=>[Tt,ee],phone:Cl,photo:()=>y.photo,rideW:l=>H[l],townToday:kh,LIFE:o,life:T,lifeTick:Zt,giveList:Et,basketPanel:le,waiterStart:Tn,waiter:()=>y.waiter,cookMenu:no,cookStart:Rh,cook:()=>y.cook,lostStart:be,lost:()=>y.lost,lostQ:()=>y.lostQ,kid:$t,classStart:eo,cls:()=>y.cls,tbReady:()=>!!yl,list:()=>y.list,police:()=>y.police,suspects:dn,policePick:Zi,bus:()=>y.bus,busTick:Js,readingCorner:K,loadBooks:V,walk:(l,m)=>te(l,m),los:(l,m,E,N)=>Yr(te,l,m,E,N),perf(){return{frames:y.frames.slice()}},resetPerf(){y.frames.length=0}},requestAnimationFrame(Kh)}Qy().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
