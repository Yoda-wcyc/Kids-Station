(()=>{var nu=0,Jl=1,iu=2;var Cr=1,su=2,Us=3,Oi=0,cn=1,Rn=2,ii=0,Fs=1,Kl=2,jl=3,Ql=4,ru=5;var ns=100,ou=101,au=102,lu=103,cu=104,hu=200,uu=201,fu=202,du=203,tc=204,ec=205,pu=206,mu=207,gu=208,xu=209,_u=210,yu=211,vu=212,Mu=213,Su=214,Eo=0,Co=1,Ro=2,Ps=3,Po=4,Io=5,Lo=6,Do=7,nc=0,bu=1,wu=2,Vn=0,ic=1,sc=2,rc=3,oc=4,ac=5,lc=6,cc=7;var hc=300,ki=301,is=302,aa=303,la=304,Rr=306,No=1e3,jn=1001,Uo=1002,$e=1003,Au=1004;var Pr=1005;var ze=1006,ca=1007;var Bi=1008;var bn=1009,uc=1010,fc=1011,Os=1012,ha=1013,Gn=1014,Hn=1015,Wn=1016,ua=1017,fa=1018,ks=1020,dc=35902,pc=35899,mc=1021,gc=1022,Pn=1023,Qn=1026,zi=1027,xc=1028,da=1029,Vi=1030,pa=1031;var ma=1033,Ir=33776,Lr=33777,Dr=33778,Nr=33779,ga=35840,xa=35841,_a=35842,ya=35843,va=36196,Ma=37492,Sa=37496,ba=37488,wa=37489,Ur=37490,Aa=37491,Ta=37808,Ea=37809,Ca=37810,Ra=37811,Pa=37812,Ia=37813,La=37814,Da=37815,Na=37816,Ua=37817,Fa=37818,Oa=37819,ka=37820,Ba=37821,za=36492,Va=36494,Ga=36495,Ha=36283,Wa=36284,Fr=36285,Xa=36286;var cr=2300,Fo=2301,Ao=2302,Wl=2303,Xl=2400,ql=2401,$l=2402;var Tu=3200;var _c=0,Eu=1,_i="",Be="srgb",hr="srgb-linear",ur="linear",ge="srgb";var To=7680;var Cu=519,Ru=512,Pu=513,Iu=514,qa=515,Lu=516,Du=517,$a=518,Nu=519,yc=35044;var vc="300 es",zn=2e3,fr=2001;function ip(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uu(){let n=dr("canvas");return n.style.display="block",n}var Uh={},Is=null;function pr(...n){let t="THREE."+n.shift();Is?Is("log",t,...n):console.log(t,...n)}function Fu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=Fu(n);let t="THREE."+n.shift();if(Is)Is("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Gt(...n){n=Fu(n);let t="THREE."+n.shift();if(Is)Is("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function es(...n){let t=n.join(" ");t in Uh||(Uh[t]=!0,Ht(...n))}function Ou(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ku={[Eo]:Co,[Ro]:Lo,[Po]:Do,[Ps]:Io,[Co]:Eo,[Lo]:Ro,[Do]:Po,[Io]:Ps},ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ml=Math.PI/180,Oo=180/Math.PI;function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function rp(n,t){return(n%t+t)%t}function Sl(n,t,e){return(1-e)*n+e*t}function Kn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ac=class Ac{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ac.prototype.isVector2=!0;var ne=Ac,ei=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],f=r[o+0],x=r[o+1],g=r[o+2],w=r[o+3];if(u!==w||l!==f||c!==x||d!==g){let m=l*f+c*x+d*g+u*w;m<0&&(f=-f,x=-x,g=-g,w=-w,m=-m);let p=1-a;if(m<.9995){let R=Math.acos(m),U=Math.sin(R);p=Math.sin(p*R)/U,a=Math.sin(a*R)/U,l=l*p+f*a,c=c*p+x*a,d=d*p+g*a,u=u*p+w*a}else{l=l*p+f*a,c=c*p+x*a,d=d*p+g*a,u=u*p+w*a;let R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],f=r[o+1],x=r[o+2],g=r[o+3];return t[e]=a*g+d*u+l*x-c*f,t[e+1]=l*g+d*f+c*u-a*x,t[e+2]=c*g+d*x+a*f-l*u,t[e+3]=d*g-a*u-l*f-c*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),f=l(i/2),x=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*x*g,this._y=c*x*u-f*d*g,this._z=c*d*g+f*x*u,this._w=c*d*u-f*x*g;break;case"YXZ":this._x=f*d*u+c*x*g,this._y=c*x*u-f*d*g,this._z=c*d*g-f*x*u,this._w=c*d*u+f*x*g;break;case"ZXY":this._x=f*d*u-c*x*g,this._y=c*x*u+f*d*g,this._z=c*d*g+f*x*u,this._w=c*d*u-f*x*g;break;case"ZYX":this._x=f*d*u-c*x*g,this._y=c*x*u+f*d*g,this._z=c*d*g-f*x*u,this._w=c*d*u+f*x*g;break;case"YZX":this._x=f*d*u+c*x*g,this._y=c*x*u+f*d*g,this._z=c*d*g-f*x*u,this._w=c*d*u-f*x*g;break;case"XZY":this._x=f*d*u-c*x*g,this._y=c*x*u-f*d*g,this._z=c*d*g+f*x*u,this._w=c*d*u+f*x*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=i+a+u;if(f>0){let x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(d-l)*x,this._y=(r-c)*x,this._z=(o-s)*x}else if(i>a&&i>u){let x=2*Math.sqrt(1+i-a-u);this._w=(d-l)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+c)/x}else if(a>u){let x=2*Math.sqrt(1+a-i-u);this._w=(r-c)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(l+d)/x}else{let x=2*Math.sqrt(1+u-i-a);this._w=(o-s)/x,this._x=(r+c)/x,this._y=(l+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tc=class Tc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),d=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bl.copy(this).projectOnVector(t),this.sub(bl)}reflect(t){return this.sub(bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tc.prototype.isVector3=!0;var J=Tc,bl=new J,Fh=new ei,Ec=class Ec{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],x=i[5],g=i[8],w=s[0],m=s[3],p=s[6],R=s[1],U=s[4],v=s[7],b=s[2],E=s[5],N=s[8];return r[0]=o*w+a*R+l*b,r[3]=o*m+a*U+l*E,r[6]=o*p+a*v+l*N,r[1]=c*w+d*R+u*b,r[4]=c*m+d*U+u*E,r[7]=c*p+d*v+u*N,r[2]=f*w+x*R+g*b,r[5]=f*m+x*U+g*E,r[8]=f*p+x*v+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,f=a*l-d*r,x=c*r-o*l,g=e*u+i*f+s*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/g;return t[0]=u*w,t[1]=(s*c-d*i)*w,t[2]=(a*i-s*o)*w,t[3]=f*w,t[4]=(d*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=x*w,t[7]=(i*l-c*e)*w,t[8]=(o*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ec.prototype.isMatrix3=!0;var qt=Ec,wl=new qt,Oh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){let n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:t,whitePoint:i,transfer:ur,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),n}var oe=op();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fs,ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fs===void 0&&(fs=dr("canvas")),fs.width=t.width,fs.height=t.height;let s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ap=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var lp=0,Tl=new J,ln=class n extends ti{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=jn,s=jn,r=ze,o=Bi,a=Pn,l=bn,c=n.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ri(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=hc;ln.DEFAULT_ANISOTROPY=1;var Cc=class Cc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],x=l[5],g=l[9],w=l[2],m=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-w)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+w)<.1&&Math.abs(g+m)<.1&&Math.abs(c+x+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,v=(x+1)/2,b=(p+1)/2,E=(d+f)/4,N=(u+w)/4,S=(g+m)/4;return U>v&&U>b?U<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(U),s=E/i,r=N/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=S/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=N/r,s=S/r),this.set(i,s,r,e),this}let R=Math.sqrt((m-g)*(m-g)+(u-w)*(u-w)+(f-d)*(f-d));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(u-w)/R,this.z=(f-d)/R,this.w=Math.acos((c+x+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cc.prototype.isVector4=!0;var Le=Cc,Bo=class extends ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ln(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Bo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},mr=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oa=class oa{constructor(t,e,i,s,r,o,a,l,c,d,u,f,x,g,w,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,d,u,f,x,g,w,m)}set(t,e,i,s,r,o,a,l,c,d,u,f,x,g,w,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=f,p[3]=x,p[7]=g,p[11]=w,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*d,x=o*u,g=a*d,w=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=x+g*c,e[5]=f-w*c,e[9]=-a*l,e[2]=w-f*c,e[6]=g+x*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*d,x=l*u,g=c*d,w=c*u;e[0]=f+w*a,e[4]=g*a-x,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=x*a-g,e[6]=w+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*d,x=l*u,g=c*d,w=c*u;e[0]=f-w*a,e[4]=-o*u,e[8]=g+x*a,e[1]=x+g*a,e[5]=o*d,e[9]=w-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*d,x=o*u,g=a*d,w=a*u;e[0]=l*d,e[4]=g*c-x,e[8]=f*c+w,e[1]=l*u,e[5]=w*c+f,e[9]=x*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,x=o*c,g=a*l,w=a*c;e[0]=l*d,e[4]=w-f*u,e[8]=g*u+x,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=x*u+g,e[10]=f-w*u}else if(t.order==="XZY"){let f=o*l,x=o*c,g=a*l,w=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+w,e[5]=o*d,e[9]=x*u-g,e[2]=g*u-x,e[6]=a*d,e[10]=w*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cp,t,hp)}lookAt(t,e,i){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),wi.crossVectors(i,xn),wi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),wi.crossVectors(i,xn)),wi.normalize(),no.crossVectors(xn,wi),s[0]=wi.x,s[4]=no.x,s[8]=xn.x,s[1]=wi.y,s[5]=no.y,s[9]=xn.y,s[2]=wi.z,s[6]=no.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],x=i[13],g=i[2],w=i[6],m=i[10],p=i[14],R=i[3],U=i[7],v=i[11],b=i[15],E=s[0],N=s[4],S=s[8],T=s[12],P=s[1],D=s[5],H=s[9],B=s[13],O=s[2],X=s[6],et=s[10],tt=s[14],Q=s[3],j=s[7],at=s[11],ft=s[15];return r[0]=o*E+a*P+l*O+c*Q,r[4]=o*N+a*D+l*X+c*j,r[8]=o*S+a*H+l*et+c*at,r[12]=o*T+a*B+l*tt+c*ft,r[1]=d*E+u*P+f*O+x*Q,r[5]=d*N+u*D+f*X+x*j,r[9]=d*S+u*H+f*et+x*at,r[13]=d*T+u*B+f*tt+x*ft,r[2]=g*E+w*P+m*O+p*Q,r[6]=g*N+w*D+m*X+p*j,r[10]=g*S+w*H+m*et+p*at,r[14]=g*T+w*B+m*tt+p*ft,r[3]=R*E+U*P+v*O+b*Q,r[7]=R*N+U*D+v*X+b*j,r[11]=R*S+U*H+v*et+b*at,r[15]=R*T+U*B+v*tt+b*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],x=t[14],g=t[3],w=t[7],m=t[11],p=t[15],R=l*x-c*f,U=a*x-c*u,v=a*f-l*u,b=o*x-c*d,E=o*f-l*d,N=o*u-a*d;return e*(w*R-m*U+p*v)-i*(g*R-m*b+p*E)+s*(g*U-w*b+p*N)-r*(g*v-w*E+m*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-i*(r*d-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],x=t[11],g=t[12],w=t[13],m=t[14],p=t[15],R=e*a-i*o,U=e*l-s*o,v=e*c-r*o,b=i*l-s*a,E=i*c-r*a,N=s*c-r*l,S=d*w-u*g,T=d*m-f*g,P=d*p-x*g,D=u*m-f*w,H=u*p-x*w,B=f*p-x*m,O=R*B-U*H+v*D+b*P-E*T+N*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/O;return t[0]=(a*B-l*H+c*D)*X,t[1]=(s*H-i*B-r*D)*X,t[2]=(w*N-m*E+p*b)*X,t[3]=(f*E-u*N-x*b)*X,t[4]=(l*P-o*B-c*T)*X,t[5]=(e*B-s*P+r*T)*X,t[6]=(m*v-g*N-p*U)*X,t[7]=(d*N-f*v+x*U)*X,t[8]=(o*H-a*P+c*S)*X,t[9]=(i*P-e*H-r*S)*X,t[10]=(g*E-w*v+p*R)*X,t[11]=(u*v-d*E-x*R)*X,t[12]=(a*T-o*D-l*S)*X,t[13]=(e*D-i*T+s*S)*X,t[14]=(w*U-g*b-m*R)*X,t[15]=(d*b-u*U+f*R)*X,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,f=r*c,x=r*d,g=r*u,w=o*d,m=o*u,p=a*u,R=l*c,U=l*d,v=l*u,b=i.x,E=i.y,N=i.z;return s[0]=(1-(w+p))*b,s[1]=(x+v)*b,s[2]=(g-U)*b,s[3]=0,s[4]=(x-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+R)*E,s[7]=0,s[8]=(g+U)*N,s[9]=(m-R)*N,s[10]=(1-(f+w))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fn.copy(this);let c=1/o,d=1/a,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=zn,l=!1){let c=this.elements,d=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),x=(i+s)/(i-s),g,w;if(l)g=r/(o-r),w=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===fr)g=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zn,l=!1){let c=this.elements,d=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),x=-(i+s)/(i-s),g,w;if(l)g=1/(o-r),w=o/(o-r);else if(a===zn)g=-2/(o-r),w=-(o+r)/(o-r);else if(a===fr)g=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=x,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};oa.prototype.isMatrix4=!0;var Ue=oa,ds=new J,Fn=new Ue,cp=new J(0,0,0),hp=new J(1,1,1),wi=new J,no=new J,xn=new J,Bh=new Ue,zh=new ei,Pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,x),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},up=0,Vh=new J,ps=new ei,hi=new Ue,io=new J,nr=new J,fp=new J,dp=new ei,Gh=new J(1,0,0),Hh=new J(0,1,0),Wh=new J(0,0,1),Xh={type:"added"},pp={type:"removed"},ms={type:"childadded",child:null},El={type:"childremoved",child:null},yn=class n extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new Pi,i=new ei,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new qt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?io.copy(t):io.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(nr,io,this.up):hi.lookAt(io,nr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(hi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xh),ms.child=t,this.dispatchEvent(ms),ms.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xh),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),x=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),x.length>0&&(i.animations=x),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new J(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mp={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let m=e.getJointPose(w,i),p=this._getHandJoint(c,w);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),x=.02,g=.005;c.inputState.pinching&&f>x+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=x-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},so={h:0,s:0,l:0};function Cl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=rp(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Cl(o,r,t+1/3),this.g=Cl(o,r,t),this.b=Cl(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let i=Bu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return oe.workingToColorSpace(en.copy(this),t),Math.round(ae(en.r*255,0,255))*65536+Math.round(ae(en.g*255,0,255))*256+Math.round(ae(en.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(en.copy(this),e);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Be){oe.workingToColorSpace(en.copy(this),t);let e=en.r,i=en.g,s=en.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(so);let i=Sl(Ai.h,so.h,e),s=Sl(Ai.s,so.s,e),r=Sl(Ai.l,so.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new $t;$t.NAMES=Bu;var xr=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new J,ui=new J,Rl=new J,fi=new J,gs=new J,xs=new J,qh=new J,Pl=new J,Il=new J,Ll=new J,Dl=new Le,Nl=new Le,Ul=new Le,mi=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){On.subVectors(s,e),ui.subVectors(i,e),Rl.subVectors(t,e);let o=On.dot(On),a=On.dot(ui),l=On.dot(Rl),c=ui.dot(ui),d=ui.dot(Rl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,x=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-x-g,g,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Dl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(t,e),Nl.fromBufferAttribute(t,i),Ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),ui.subVectors(t,e),On.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),On.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,i),xs.subVectors(r,i),Pl.subVectors(t,i);let l=gs.dot(Pl),c=xs.dot(Pl);if(l<=0&&c<=0)return e.copy(i);Il.subVectors(t,s);let d=gs.dot(Il),u=xs.dot(Il);if(d>=0&&u<=d)return e.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(gs,o);Ll.subVectors(t,r);let x=gs.dot(Ll),g=xs.dot(Ll);if(g>=0&&x<=g)return e.copy(r);let w=x*c-l*g;if(w<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(xs,a);let m=d*g-x*u;if(m<=0&&u-d>=0&&x-g>=0)return qh.subVectors(r,s),a=(u-d)/(u-d+(x-g)),e.copy(s).addScaledVector(qh,a);let p=1/(m+w+f);return o=w*p,a=f*p,e.copy(i).addScaledVector(gs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),oo.subVectors(this.max,ir),_s.subVectors(t.a,ir),ys.subVectors(t.b,ir),vs.subVectors(t.c,ir),Ti.subVectors(ys,_s),Ei.subVectors(vs,ys),Ki.subVectors(_s,vs);let e=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Ki.z,Ki.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Ki.z,0,-Ki.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Ki.y,Ki.x,0];return!Fl(e,_s,ys,vs,oo)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,_s,ys,vs,oo))?!1:(ao.crossVectors(Ti,Ei),e=[ao.x,ao.y,ao.z],Fl(e,_s,ys,vs,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new J,new J,new J,new J,new J,new J,new J,new J],kn=new J,ro=new ni,_s=new J,ys=new J,vs=new J,Ti=new J,Ei=new J,Ki=new J,ir=new J,oo=new J,ao=new J,ji=new J;function Fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),d=i.dot(ji);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var ke=new J,lo=new ne,gp=0,Ge=class extends ti{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var yr=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var En=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},xp=new ni,sr=new J,Ol=new J,Ns=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):xp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Ol)),this.expandByPoint(sr.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_p=0,Tn=new Ue,kl=new yn,Ms=new J,_n=new ni,rr=new ni,qe=new J,vn=class n extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?yr:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return kl.lookAt(t),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(_n.min,rr.min),_n.expandByPoint(qe),qe.addVectors(_n.max,rr.max),_n.expandByPoint(qe)):(_n.expandByPoint(rr.min),_n.expandByPoint(rr.max))}_n.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)qe.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),qe.add(Ms)),s=Math.max(s,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new J,l[S]=new J;let c=new J,d=new J,u=new J,f=new ne,x=new ne,g=new ne,w=new J,m=new J;function p(S,T,P){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,T),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,S),x.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),d.sub(c),u.sub(c),x.sub(f),g.sub(f);let D=1/(x.x*g.y-g.x*x.y);isFinite(D)&&(w.copy(d).multiplyScalar(g.y).addScaledVector(u,-x.y).multiplyScalar(D),m.copy(u).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(D),a[S].add(w),a[T].add(w),a[P].add(w),l[S].add(m),l[T].add(m),l[P].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let S=0,T=R.length;S<T;++S){let P=R[S],D=P.start,H=P.count;for(let B=D,O=D+H;B<O;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let U=new J,v=new J,b=new J,E=new J;function N(S){b.fromBufferAttribute(s,S),E.copy(b);let T=a[S];U.copy(T),U.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(E,T);let D=v.dot(l[S])<0?-1:1;o.setXYZW(S,U.x,U.y,U.z,D)}for(let S=0,T=R.length;S<T;++S){let P=R[S],D=P.start,H=P.count;for(let B=D,O=D+H;B<O;B+=3)N(t.getX(B+0)),N(t.getX(B+1)),N(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,x=i.count;f<x;f++)i.setXYZ(f,0,0,0);let s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,d=new J,u=new J;if(t)for(let f=0,x=t.count;f<x;f+=3){let g=t.getX(f+0),w=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,x=e.count;f<x;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d),x=0,g=0;for(let w=0,m=l.length;w<m;w++){a.isInterleavedBufferAttribute?x=l[w]*a.data.stride+a.offset:x=l[w]*d;for(let p=0;p<d;p++)f[g++]=c[x++]}return new Ge(f,d,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let f=c[d],x=t(f,i);l.push(x)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let x=c[u];d.push(x.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,x=u.length;f<x;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},an=new J,vr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bl=new J,yp=new J,vp=new qt,Bn=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Bl.subVectors(i,e).cross(yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vp.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mp=0,Ii=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Fs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Bn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,or=new J,bs=new J,ws=new J,As=new ne,ar=new ne,zu=new Ue,co=new J,lr=new J,ho=new J,$h=new ne,zl=new ne,Yh=new ne,Li=class extends yn{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new vn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vo(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new vr(i,3,0,!1)),Ss.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new ne(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-ws.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;uo(co.set(-.5,-.5,0),ws,o,bs,s,r),uo(lr.set(.5,-.5,0),ws,o,bs,s,r),uo(ho.set(.5,.5,0),ws,o,bs,s,r),$h.set(0,0),zl.set(1,0),Yh.set(1,1);let a=t.ray.intersectTriangle(co,lr,ho,!1,or);if(a===null&&(uo(lr.set(-.5,.5,0),ws,o,bs,s,r),zl.set(0,1),a=t.ray.intersectTriangle(co,ho,lr,!1,or),a===null))return;let l=t.ray.origin.distanceTo(or);l<t.near||l>t.far||e.push({distance:l,point:or.clone(),uv:mi.getInterpolation(or,co,lr,ho,$h,zl,Yh,new ne),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function uo(n,t,e,i,s,r){As.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ar.x=r*As.x-s*As.y,ar.y=s*As.x+r*As.y):ar.copy(As),n.copy(t),n.x+=ar.x,n.y+=ar.y,n.applyMatrix4(zu)}var pi=new J,Vl=new J,fo=new J,po=new J,Go=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vl.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),po.copy(this.origin).sub(Vl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=po.dot(this.direction),l=-po.dot(fo),c=po.lengthSq(),d=Math.abs(1-o*o),u,f,x,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){let w=1/d;u*=w,f*=w,x=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),x=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),x=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),x=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),x=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),x=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),x=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vl).addScaledVector(fo,f),x}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,u=t.x-o.x,f=t.y-o.y,x=t.z-o.z,g=e.x-o.x,w=e.y-o.y,m=e.z-o.z,p=i.x-o.x,R=i.y-o.y,U=i.z-o.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(d),N,S,T,P,D,H,B,O,X,et,tt,Q;if(v>=b&&v>=E?(T=l,H=u,X=g,Q=p,l>=0?(N=c,S=d,P=f,D=x,B=w,O=m,et=R,tt=U):(N=d,S=c,P=x,D=f,B=m,O=w,et=U,tt=R)):b>=E?(T=c,H=f,X=w,Q=R,c>=0?(N=d,S=l,P=x,D=u,B=m,O=g,et=U,tt=p):(N=l,S=d,P=u,D=x,B=g,O=m,et=p,tt=U)):(T=d,H=x,X=m,Q=U,d>=0?(N=l,S=c,P=u,D=f,B=g,O=w,et=p,tt=R):(N=c,S=l,P=f,D=u,B=w,O=g,et=R,tt=p)),T===0)return null;let j=N/T,at=S/T,ft=1/T,Ut=P-j*H,Ot=D-at*H,_e=B-j*X,Kt=O-at*X,ce=et-j*Q,st=tt-at*Q,ut=ce*Kt-st*_e,Pt=Ut*st-Ot*ce,Wt=_e*Ot-Kt*Ut;if(s){if(ut<0||Pt<0||Wt<0)return null}else if((ut<0||Pt<0||Wt<0)&&(ut>0||Pt>0||Wt>0))return null;let Rt=ut+Pt+Wt;if(Rt===0)return null;let jt=ft*(ut*H+Pt*X+Wt*Q);return(Rt>0?jt<0:jt>0)?null:this.at(jt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zh=new Ue,Qi=new Go,mo=new Ns,Jh=new J,go=new J,xo=new J,_o=new J,Gl=new J,yo=new J,Kh=new J,vo=new J,De=class extends yn{constructor(t=new vn,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(Gl.fromBufferAttribute(u,t),o?yo.addScaledVector(Gl,d):yo.addScaledVector(Gl.sub(e),d))}e.add(yo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(mo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(mo,Jh)===null||Qi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,w=f.length;g<w;g++){let m=f[g],p=o[m.materialIndex],R=Math.max(m.start,x.start),U=Math.min(a.count,Math.min(m.start+m.count,x.start+x.count));for(let v=R,b=U;v<b;v+=3){let E=a.getX(v),N=a.getX(v+1),S=a.getX(v+2);s=Mo(this,p,t,i,c,d,u,E,N,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,x.start),w=Math.min(a.count,x.start+x.count);for(let m=g,p=w;m<p;m+=3){let R=a.getX(m),U=a.getX(m+1),v=a.getX(m+2);s=Mo(this,o,t,i,c,d,u,R,U,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,w=f.length;g<w;g++){let m=f[g],p=o[m.materialIndex],R=Math.max(m.start,x.start),U=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let v=R,b=U;v<b;v+=3){let E=v,N=v+1,S=v+2;s=Mo(this,p,t,i,c,d,u,E,N,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,x.start),w=Math.min(l.count,x.start+x.count);for(let m=g,p=w;m<p;m+=3){let R=m,U=m+1,v=m+2;s=Mo(this,o,t,i,c,d,u,R,U,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Sp(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Oi,a),l===null)return null;vo.copy(a),vo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:n}}function Mo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,go),n.getVertexPosition(l,xo),n.getVertexPosition(c,_o);let d=Sp(n,t,e,i,go,xo,_o,Kh);if(d){let u=new J;mi.getBarycoord(Kh,go,xo,_o,u),s&&(d.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new ne)),r&&(d.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new ne)),o&&(d.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new J),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new J,materialIndex:0};mi.getNormal(go,xo,_o,f.normal),d.face=f,d.barycoord=u}return d}var Ho=class extends ln{constructor(t=null,e=1,i=1,s,r,o,a,l,c=$e,d=$e,u,f){super(null,o,a,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=new Ns,bp=new ne(.5,.5),So=new J,Mr=class{constructor(t=new Bn,e=new Bn,i=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],x=r[7],g=r[8],w=r[9],m=r[10],p=r[11],R=r[12],U=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,x-d,p-g,b-R).normalize(),s[1].setComponents(c+o,x+d,p+g,b+R).normalize(),s[2].setComponents(c+a,x+u,p+w,b+U).normalize(),s[3].setComponents(c-a,x-u,p-w,b-U).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,x-f,p-m,b-v).normalize();else if(s[4].setComponents(c-l,x-f,p-m,b-v).normalize(),e===zn)s[5].setComponents(c+l,x+f,p+m,b+v).normalize();else if(e===fr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);let e=bp.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sr=class extends ln{constructor(t=[],e=ki,i,s,r,o,a,l,c,d){super(t,e,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cn=class extends ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends ln{constructor(t,e,i=Gn,s,r,o,a=$e,l=$e,c,d=Qn,u=1){if(d!==Qn&&d!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wo=class extends Di{constructor(t,e=Gn,i=ki,s,r,o=$e,a=$e,l,c=Qn){let d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class n extends vn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],f=0,x=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(d,3)),this.setAttribute("uv",new En(u,2));function g(w,m,p,R,U,v,b,E,N,S,T){let P=v/N,D=b/S,H=v/2,B=b/2,O=E/2,X=N+1,et=S+1,tt=0,Q=0,j=new J;for(let at=0;at<et;at++){let ft=at*D-B;for(let Ut=0;Ut<X;Ut++){let Ot=Ut*P-H;j[w]=Ot*R,j[m]=ft*U,j[p]=O,c.push(j.x,j.y,j.z),j[w]=0,j[m]=0,j[p]=E>0?1:-1,d.push(j.x,j.y,j.z),u.push(Ut/N),u.push(1-at/S),tt+=1}}for(let at=0;at<S;at++)for(let ft=0;ft<N;ft++){let Ut=f+ft+X*at,Ot=f+ft+X*(at+1),_e=f+(ft+1)+X*(at+1),Kt=f+(ft+1)+X*at;l.push(Ut,Ot,Kt),l.push(Ot,_e,Kt),Q+=6}a.addGroup(x,Q,T),x+=Q,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wr=class n extends vn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=t/a,f=e/l,x=[],g=[],w=[],m=[];for(let p=0;p<d;p++){let R=p*f-o;for(let U=0;U<c;U++){let v=U*u-r;g.push(v,-R,0),w.push(0,0,1),m.push(U/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){let U=R+c*p,v=R+c*(p+1),b=R+1+c*(p+1),E=R+1+c*p;x.push(U,v,E),x.push(v,b,E)}this.setIndex(x),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(w,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function ss(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(jh(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(jh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function rn(n){let t={};for(let e=0;e<n.length;e++){let i=ss(n[e]);for(let s in i)t[s]=i[s]}return t}function jh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Vu={clone:ss,merge:rn},Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new $t().setHex(s.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xo=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qo=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$o=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ts(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Hl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ni=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends Ni{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ql:r=t,a=2*e-i;break;case $l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:o=t,l=2*i-e;break;case $l:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,x=this._weightNext,g=(i-e)/(s-e),w=g*g,m=w*g,p=-f*m+2*f*w-f*g,R=(1+f)*m+(-1.5-2*f)*w+(-.5+f)*g+1,U=(-1-x)*m+(1.5+x)*w+.5*g,v=x*m-x*w;for(let b=0;b!==a;++b)r[b]=p*o[d+b]+R*o[c+b]+U*o[l+b]+v*o[u+b];return r}},Zo=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(i-e)/(s-e),u=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*d;return r}},Jo=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ko=class extends Ni{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(i-e)/(s-e),w=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*w+o[l+m]*g;return r}let f=a*2,x=t-1;for(let g=0;g!==a;++g){let w=o[c+g],m=o[l+g],p=x*f+g*2,R=u[p],U=u[p+1],v=t*f+g*2,b=d[v],E=d[v+1],N=Cp(i,e,R,b,s);r[g]=Gu(N,w,U,E,m)}return r}};function Gu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ep(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Cp(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Gu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Ep(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Hl(t.settings)&&(i.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ko(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Fo:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break;case Wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Ao;case this.InterpolantFactoryMethodBezier:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Hl(this.settings)&&(Qh(this.settings.inTangents,t),Qh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&sp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,x=u+i;for(let g=0;g!==i;++g){let w=e[u+g];if(w!==e[f+g]||w!==e[x+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let x=0;x!==i;++x)e[f+x]=e[u+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Hl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Fo;var Ui=class extends Sn{constructor(t,e,i){super(t,e,i)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=cr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}};jo.prototype.ValueTypeName="color";var Qo=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}};Qo.prototype.ValueTypeName="number";var ta=class extends Ni{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)ei.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ar=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Sn{constructor(t,e,i){super(t,e,i)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=cr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}};ea.prototype.ValueTypeName="vector";var na=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let x=c[u],g=c[u+1];if(x.global&&(x.lastIndex=0),x.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hu=new na,ia=class{constructor(t){this.manager=t!==void 0?t:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=new J,wo=new ei,Jn=new J,Tr=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bo,wo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,wo,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(bo,wo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,wo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new J,tu=new ne,eu=new ne,nn=class extends Tr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ml*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Er=class extends Tr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Es=-90,Cs=1,sa=class extends yn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Es,Cs,t,e);s.layers=this.layers,this.add(s);let r=new nn(Es,Cs,t,e);r.layers=this.layers,this.add(r);let o=new nn(Es,Cs,t,e);o.layers=this.layers,this.add(o);let a=new nn(Es,Cs,t,e);a.layers=this.layers,this.add(a);let l=new nn(Es,Cs,t,e);l.layers=this.layers,this.add(l);let c=new nn(Es,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,f,x),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ra=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sc="\\[\\]\\.:\\/",Rp=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Pp="[^"+Sc.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",bc),Lp=/(WCOD+)?/.source.replace("WCOD",Pp),Dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Up=new RegExp("^"+Ip+Lp+Dp+Np+"$"),Fp=["material","materials","bones","map"],Yl=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(t){let e=Up.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Yl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wy=new Float32Array(1);var Rc=class Rc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Rc.prototype.isMatrix2=!0;var Zl=Rc;function wc(n,t,e,i){let s=Op(i);switch(e){case mc:return n*t;case xc:return n*t/s.components*s.byteLength;case da:return n*t/s.components*s.byteLength;case Vi:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case gc:return n*t*3/s.components*s.byteLength;case Pn:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case Ir:case Lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(n,16)*Math.max(t,8)/4;case ga:case _a:return Math.max(n,8)*Math.max(t,8)/2;case va:case Ma:case ba:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ur:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case za:case Va:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ha:case Wa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fr:case Xa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Op(n){switch(n){case bn:case uc:return{byteLength:1,components:1};case Os:case fc:case Wn:return{byteLength:2,components:1};case ua:case fa:return{byteLength:2,components:4};case Gn:case ha:case Hn:return{byteLength:4,components:1};case dc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bp(n){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let x;if(c instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)x=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)x=n.SHORT;else if(c instanceof Uint32Array)x=n.UNSIGNED_INT;else if(c instanceof Int32Array)x=n.INT;else if(c instanceof Int8Array)x=n.BYTE;else if(c instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((x,g)=>x.start-g.start);let f=0;for(let x=1;x<u.length;x++){let g=u[f],w=u[x];w.start<=g.start+g.count+1?g.count=Math.max(g.count,w.start+w.count-g.start):(++f,u[f]=w)}u.length=f+1;for(let x=0,g=u.length;x<g;x++){let w=u[x];n.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
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
#endif`,km=`uniform sampler2D dfgLUT;
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
}`,Bm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,dg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:zp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Hp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:$p,batching_pars_vertex:Yp,batching_vertex:Zp,begin_vertex:Jp,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:Qp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:_m,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:Sm,fog_vertex:bm,fog_pars_vertex:wm,fog_fragment:Am,fog_pars_fragment:Tm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Cm,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Um,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:km,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:Vm,lightprobes_pars_fragment:Gm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:$m,map_pars_fragment:Ym,map_particle_fragment:Zm,map_particle_pars_fragment:Jm,metalnessmap_fragment:Km,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:x0,dithering_fragment:_0,dithering_pars_fragment:y0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:b0,shadowmap_vertex:w0,shadowmask_pars_fragment:A0,skinbase_vertex:T0,skinning_pars_vertex:E0,skinning_vertex:C0,skinnormal_vertex:R0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:L0,tonemapping_pars_fragment:D0,transmission_fragment:N0,transmission_pars_fragment:U0,uv_pars_fragment:F0,uv_pars_vertex:O0,uv_vertex:k0,worldpos_vertex:B0,background_vert:z0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:H0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:$0,distance_vert:Y0,distance_frag:Z0,equirect_vert:J0,equirect_frag:K0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:xg,sprite_vert:_g,sprite_frag:yg},At={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},ri={basic:{uniforms:rn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:rn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:rn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:rn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:rn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:rn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:rn([At.points,At.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:rn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:rn([At.common,At.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:rn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:rn([At.sprite,At.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:rn([At.common,At.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:rn([At.lights,At.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ri.physical={uniforms:rn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ya={r:0,b:0,g:0},vg=new Ue,df=new qt;df.set(-1,0,0,0,1,0,0,0,1);function Mg(n,t,e,i,s,r){let o=new $t(0),a=s===!0?0:1,l,c,d=null,u=0,f=null;function x(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){let v=R.backgroundBlurriness>0;U=t.get(U,v)}return U}function g(R){let U=!1,v=x(R);v===null?m(o,a):v&&v.isColor&&(m(v,1),U=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(R,U){let v=x(U);v&&(v.isCubeTexture||v.mapping===Rr)?(c===void 0&&(c=new De(new dn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ss(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(U.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(df),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,(d!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new wr(2,2),new sn({name:"BackgroundMaterial",uniforms:ss(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function m(R,U){R.getRGB(Ya,Mc(n)),e.buffers.color.setClear(Ya.r,Ya.g,Ya.b,U,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,U=1){o.set(R),a=U,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(R){a=R,m(o,a)},render:g,addToRenderList:w,dispose:p}}function Sg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(D,H,B,O,X){let et=!1,tt=u(D,O,B,H);r!==tt&&(r=tt,c(r.object)),et=x(D,O,B,X),et&&g(D,O,B,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,v(D,H,B,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function u(D,H,B,O){let X=O.wireframe===!0,et=i[H.id];et===void 0&&(et={},i[H.id]=et);let tt=D.isInstancedMesh===!0?D.id:0,Q=et[tt];Q===void 0&&(Q={},et[tt]=Q);let j=Q[B.id];j===void 0&&(j={},Q[B.id]=j);let at=j[X];return at===void 0&&(at=f(l()),j[X]=at),at}function f(D){let H=[],B=[],O=[];for(let X=0;X<e;X++)H[X]=0,B[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:O,object:D,attributes:{},index:null}}function x(D,H,B,O){let X=r.attributes,et=H.attributes,tt=0,Q=B.getAttributes();for(let j in Q)if(Q[j].location>=0){let ft=X[j],Ut=et[j];if(Ut===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Ut=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Ut=D.instanceColor)),ft===void 0||ft.attribute!==Ut||Ut&&ft.data!==Ut.data)return!0;tt++}return r.attributesNum!==tt||r.index!==O}function g(D,H,B,O){let X={},et=H.attributes,tt=0,Q=B.getAttributes();for(let j in Q)if(Q[j].location>=0){let ft=et[j];ft===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor));let Ut={};Ut.attribute=ft,ft&&ft.data&&(Ut.data=ft.data),X[j]=Ut,tt++}r.attributes=X,r.attributesNum=tt,r.index=O}function w(){let D=r.newAttributes;for(let H=0,B=D.length;H<B;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let B=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;B[D]=1,O[D]===0&&(n.enableVertexAttribArray(D),O[D]=1),X[D]!==H&&(n.vertexAttribDivisor(D,H),X[D]=H)}function R(){let D=r.newAttributes,H=r.enabledAttributes;for(let B=0,O=H.length;B<O;B++)H[B]!==D[B]&&(n.disableVertexAttribArray(B),H[B]=0)}function U(D,H,B,O,X,et,tt){tt===!0?n.vertexAttribIPointer(D,H,B,X,et):n.vertexAttribPointer(D,H,B,O,X,et)}function v(D,H,B,O){w();let X=O.attributes,et=B.getAttributes(),tt=H.defaultAttributeValues;for(let Q in et){let j=et[Q];if(j.location>=0){let at=X[Q];if(at===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(at=D.instanceColor)),at!==void 0){let ft=at.normalized,Ut=at.itemSize,Ot=t.get(at);if(Ot===void 0)continue;let _e=Ot.buffer,Kt=Ot.type,ce=Ot.bytesPerElement,st=Kt===n.INT||Kt===n.UNSIGNED_INT||at.gpuType===ha;if(at.isInterleavedBufferAttribute){let ut=at.data,Pt=ut.stride,Wt=at.offset;if(ut.isInstancedInterleavedBuffer){for(let Rt=0;Rt<j.locationSize;Rt++)p(j.location+Rt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)m(j.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Rt=0;Rt<j.locationSize;Rt++)U(j.location+Rt,Ut/j.locationSize,Kt,ft,Pt*ce,(Wt+Ut/j.locationSize*Rt)*ce,st)}else{if(at.isInstancedBufferAttribute){for(let ut=0;ut<j.locationSize;ut++)p(j.location+ut,at.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ut=0;ut<j.locationSize;ut++)m(j.location+ut);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ut=0;ut<j.locationSize;ut++)U(j.location+ut,Ut/j.locationSize,Kt,ft,Ut*ce,Ut/j.locationSize*ut*ce,st)}}else if(tt!==void 0){let ft=tt[Q];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(j.location,ft);break;case 3:n.vertexAttrib3fv(j.location,ft);break;case 4:n.vertexAttrib4fv(j.location,ft);break;default:n.vertexAttrib1fv(j.location,ft)}}}}R()}function b(){T();for(let D in i){let H=i[D];for(let B in H){let O=H[B];for(let X in O){let et=O[X];for(let tt in et)d(et[tt].object),delete et[tt];delete O[X]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let H=i[D.id];for(let B in H){let O=H[B];for(let X in O){let et=O[X];for(let tt in et)d(et[tt].object),delete et[tt];delete O[X]}}delete i[D.id]}function N(D){for(let H in i){let B=i[H];for(let O in B){let X=B[O];if(X[D.id]===void 0)continue;let et=X[D.id];for(let tt in et)d(et[tt].object),delete et[tt];delete X[D.id]}}}function S(D){for(let H in i){let B=i[H],O=D.isInstancedMesh===!0?D.id:0,X=B[O];if(X!==void 0){for(let et in X){let tt=X[et];for(let Q in tt)d(tt[Q].object),delete tt[Q];delete X[et]}delete B[O],Object.keys(B).length===0&&delete i[H]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:m,disableUnusedAttributes:R}}function bg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let x=0;x<d;x++)f+=c[x];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Pn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let S=N===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==bn&&N!==Hn&&!S&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(Ht("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:x,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:v,maxSamples:b,samples:E}}function Ag(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Bn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let x=u.length!==0||f||i!==0||s;return s=f,i=u.length,x},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,x){let g=u.clippingPlanes,w=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{let R=r?0:i,U=R*4,v=p.clippingState||null;l.value=v,v=d(g,f,U,x);for(let b=0;b!==U;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,f,x,g){let w=u!==null?u.length:0,m=null;if(w!==0){if(m=l.value,g!==!0||m===null){let p=x+w*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let U=0,v=x;U!==w;++U,v+=4)o.copy(u[U]).applyMatrix4(R,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,m}}var zs=4,Tg=6,Eg=20,Cg=256,Or=new Er,Wu=new $t,Pc=null,Ic=0,Lc=0,Dc=!1,Rg=new J,rs=new J,Ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Rg}=r;Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pc,Ic,Lc),this._renderer.xr.enabled=Dc,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Wn,format:Pn,colorSpace:hr,depthBuffer:!1},s=Xu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Lg(r,t,e),this._ggxMaterial=Ig(r,t,e)}return s}_compileMaterial(t){let e=new De(new vn,t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,i,s,r){let l=new nn(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,x=u.toneMapping;u.getClearColor(Wu),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new dn,new Mn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,m=w.material,p=!1,R=t.background;R?R.isColor&&(m.color.copy(R),t.background=null,p=!0):(m.color.copy(Wu),p=!0);for(let U=0;U<6;U++){let v=U%3;v===0?(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[U],r.y,r.z)):v===1?(l.up.set(0,0,c[U]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[U],r.z)):(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[U]));let b=this._cubeSize;Bs(s,v*b,U>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(w,l),u.render(t,l)}u.toneMapping=x,u.autoClear=f,t.background=R}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ki||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Or)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),f=c*1.25,x=u*f,{_lodMax:g}=this,w=this._sizeLods[i],m=3*w*(i>g-zs?i-g+zs:0),p=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=x,l.mipInt.value=g-e,Bs(r,m,p,3*w,2*w),s.setRenderTarget(r),s.render(a,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Bs(t,m,p,3*w,2*w),s.setRenderTarget(t),s.render(a,Or)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-zs?s-this._lodMax+zs:0),f=4*(this._cubeSize-d);Bs(e,u,f,3*d,2*d),o.setRenderTarget(e),o.render(l,Or)}};function Pg(n){let t=[],e=[],i=n,s=n-zs+1+Tg;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,x=3,g=new Float32Array(x*f*u),w=new Float32Array(x*f*u);for(let p=0;p<u;p++){let R=p%3*2/3-1,U=p>2?0:-1,v=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];g.set(v,x*f*p);for(let b=0;b<f;b++){let E=d[b*2]*2-1,N=d[b*2+1]*2-1;p===0?rs.set(1,N,E):p===1?rs.set(-E,1,-N):p===2?rs.set(-E,N,1):p===3?rs.set(-1,N,-E):p===4?rs.set(-E,-1,N):rs.set(E,N,-1),rs.toArray(w,(p*f+b)*x)}}let m=new vn;m.setAttribute("position",new Ge(g,x)),m.setAttribute("outputDirection",new Ge(w,x)),e.push(new De(m,null)),i>zs&&i--}return{lodMeshes:e,sizeLods:t}}function Xu(n,t,e){let i=new fn(n,t,e);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ig(n,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Lg(n,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qu(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function $u(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ka=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ii});r.uniforms.tEquirect.value=e;let o=new De(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=ze),new sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,x=!1){return f==null?null:x?o(f):r(f)}function r(f){if(f&&f.isTexture){let x=f.mapping;if(x===aa||x===la)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let w=new Ka(g.height);return w.fromEquirectangularTexture(n,f),t.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let x=f.mapping,g=x===aa||x===la,w=x===ki||x===is;if(g||w){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Ja(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let R=f.image;return g&&R&&R.height>0||w&&R&&l(R)?(i===null&&(i=new Ja(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function a(f,x){return x===aa?f.mapping=ki:x===la&&(f.mapping=is),f}function l(f){let x=0,g=6;for(let w=0;w<g;w++)f[w]!==void 0&&x++;return x===g}function c(f){let x=f.target;x.removeEventListener("dispose",c);let g=t.get(x);g!==void 0&&(t.delete(x),g.dispose())}function d(f){let x=f.target;x.removeEventListener("dispose",d);let g=e.get(x);g!==void 0&&(e.delete(x),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Ng(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&es("WebGLRenderer: "+i+" extension not supported."),s}}}function Ug(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let x=r.get(f);x&&(t.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],n.ARRAY_BUFFER)}function c(u){let f=[],x=u.index,g=u.attributes.position,w=0;if(g===void 0)return;if(x!==null){let R=x.array;w=x.version;for(let U=0,v=R.length;U<v;U+=3){let b=R[U+0],E=R[U+1],N=R[U+2];f.push(b,E,E,N,N,b)}}else{let R=g.array;w=g.version;for(let U=0,v=R.length/3-1;U<v;U+=3){let b=U+0,E=U+1,N=U+2;f.push(b,E,E,N,N,b)}}let m=new(g.count>=65535?yr:_r)(f,1);m.version=w;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function d(u){let f=r.get(u);if(f){let x=u.index;x!==null&&f.version<x.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Fg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,u*o,x),e.update(f,i,x))}function d(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,x);let w=0;for(let m=0;m<x;m++)w+=f[m];e.update(w,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Og(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,t,e){let i=new WeakMap,s=new Le;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==u){let T=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],U=0;x===!0&&(U=1),g===!0&&(U=2),w===!0&&(U=3);let v=a.attributes.position.count*U,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*b*4*u),N=new mr(E,v,b,u);N.type=Hn,N.needsUpdate=!0;let S=U*4;for(let P=0;P<u;P++){let D=m[P],H=p[P],B=R[P],O=v*b*4*P;for(let X=0;X<D.count;X++){let et=X*S;x===!0&&(s.fromBufferAttribute(D,X),E[O+et+0]=s.x,E[O+et+1]=s.y,E[O+et+2]=s.z,E[O+et+3]=0),g===!0&&(s.fromBufferAttribute(H,X),E[O+et+4]=s.x,E[O+et+5]=s.y,E[O+et+6]=s.z,E[O+et+7]=0),w===!0&&(s.fromBufferAttribute(B,X),E[O+et+8]=s.x,E[O+et+9]=s.y,E[O+et+10]=s.z,E[O+et+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:N,size:new ne(v,b)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let w=0;w<c.length;w++)x+=c[w];let g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Bg(n,t,e,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let x=c.skeleton;r.get(x)!==d&&(x.update(),r.set(x,d))}return f}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var zg={[ic]:"LINEAR_TONE_MAPPING",[sc]:"REINHARD_TONE_MAPPING",[rc]:"CINEON_TONE_MAPPING",[oc]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function Vg(n,t,e,i,s,r){let o=new fn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new vn;c.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new En([0,2,0,0,2,0],2));let d=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new De(c,d),f=new Er(-1,1,1,-1,0,1),x=null,g=null,w=!1,m,p=null,R=[],U=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<R.length;E++){let N=R[E];N.setSize&&N.setSize(v,b)}},this.setEffects=function(v){R=v,U=R.length>0&&R[0].isRenderPass===!0;let b=o.width,E=o.height;R.length>0&&a===null&&(a=new fn(b,E,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(b,E,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<R.length;N++){let S=R[N];S.setSize&&S.setSize(b,E)}},this.begin=function(v,b){if(w||v.toneMapping===Vn&&R.length===0)return!1;if(p=b,b!==null){let E=b.width,N=b.height;(o.width!==E||o.height!==N)&&this.setSize(E,N)}return U===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return U},this.end=function(v,b){v.toneMapping=m,w=!0;let E=o,N=a;for(let S=0;S<R.length;S++){let T=R[S];T.enabled!==!1&&(T.render(v,N,E,b),T.needsSwap!==!1&&(E=N,N=N===a?l:a))}if(x!==v.outputColorSpace||g!==v.toneMapping){x=v.outputColorSpace,g=v.toneMapping,d.defines={},oe.getTransfer(x)===ge&&(d.defines.SRGB_TRANSFER="");let S=zg[g];S&&(d.defines[S]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(u,f),p=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var pf=new ln,Fc=new Di(1,1),mf=new mr,gf=new zo,xf=new Sr,Yu=[],Zu=[],Ju=new Float32Array(16),Ku=new Float32Array(9),ju=new Float32Array(4);function Gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tl(n,t){let e=Zu[t];e===void 0&&(e=new Int32Array(t),Zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,i))return;ju.set(i),n.uniformMatrix2fv(this.addr,!1,ju),We(e,i)}}function $g(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,i))return;Ku.set(i),n.uniformMatrix3fv(this.addr,!1,Ku),We(e,i)}}function Yg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),We(e,i)}}function Zg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function Qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function ix(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fc.compareFunction=e.isReversedDepthBuffer()?$a:qa,r=Fc):r=pf,e.setTexture2D(t||r,s)}function sx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gf,s)}function rx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xf,s)}function ox(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mf,s)}function ax(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return $g;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(n,t){n.uniform1fv(this.addr,t)}function cx(n,t){let e=Gs(t,this.size,2);n.uniform2fv(this.addr,e)}function hx(n,t){let e=Gs(t,this.size,3);n.uniform3fv(this.addr,e)}function ux(n,t){let e=Gs(t,this.size,4);n.uniform4fv(this.addr,e)}function fx(n,t){let e=Gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function dx(n,t){let e=Gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function px(n,t){let e=Gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mx(n,t){n.uniform1iv(this.addr,t)}function gx(n,t){n.uniform2iv(this.addr,t)}function xx(n,t){n.uniform3iv(this.addr,t)}function _x(n,t){n.uniform4iv(this.addr,t)}function yx(n,t){n.uniform1uiv(this.addr,t)}function vx(n,t){n.uniform2uiv(this.addr,t)}function Mx(n,t){n.uniform3uiv(this.addr,t)}function Sx(n,t){n.uniform4uiv(this.addr,t)}function bx(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);He(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fc:o=pf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function wx(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);He(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gf,r[o])}function Ax(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);He(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function Tx(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);He(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mf,r[o])}function Ex(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return vx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Tx}}var Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}},kc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},Bc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Qu(n,t){n.seq.push(t),n.map[t.id]=t}function Cx(n,t,e){let i=n.name,s=i.length;for(Nc.lastIndex=0;;){let r=Nc.exec(i),o=Nc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qu(e,c===void 0?new Oc(a,n,t):new kc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Bc(a),Qu(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Cx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function tf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Rx=37297,Px=0;function Ix(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ef=new qt;function Lx(n){oe._getMatrix(ef,oe.workingColorSpace,n);let t=`mat3( ${ef.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case ur:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ix(n.getShaderSource(t),a)}else return r}function Dx(n,t){let e=Lx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Nx={[ic]:"Linear",[sc]:"Reinhard",[rc]:"Cineon",[oc]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[ac]:"Custom"};function Ux(n,t){let e=Nx[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Za=new J;function Fx(){oe.getLuminanceCoefficients(Za);let n=Za.x.toFixed(4),t=Za.y.toFixed(4),e=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function kx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Br(n){return n!==""}function sf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(zx,Gx)}var Vx=new Map;function Gx(n,t){let e=te[t];if(e===void 0){let i=Vx.get(t);if(i!==void 0)e=te[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zc(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(Hx,Wx)}function Wx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Xx={[Cr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function qx(n){return Xx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $x={[ki]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function Yx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$x[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zx={[is]:"ENVMAP_MODE_REFRACTION"};function Jx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[nc]:"ENVMAP_BLENDING_MULTIPLY",[bu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function jx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[n.combine]||"ENVMAP_BLENDING_NONE"}function Qx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function t_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qx(e),c=Yx(e),d=Jx(e),u=jx(e),f=Qx(e),x=Ox(e),g=kx(r),w=s.createProgram(),m,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?te.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=zc(o),o=sf(o,e),o=rf(o,e),a=zc(a),a=sf(a,e),a=rf(a,e),o=of(o),a=of(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let U=R+m+o,v=R+p+a,b=tf(s,s.VERTEX_SHADER,U),E=tf(s,s.FRAGMENT_SHADER,v);s.attachShader(w,b),s.attachShader(w,E),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function N(D){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(w)||"",B=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(E)||"",X=H.trim(),et=B.trim(),tt=O.trim(),Q=!0,j=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,w,b,E);else{let at=nf(s,b,"vertex"),ft=nf(s,E,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+at+`
`+ft)}else X!==""?Ht("WebGLProgram: Program Info Log:",X):(et===""||tt==="")&&(j=!1);j&&(D.diagnostics={runnable:Q,programLog:X,vertexShader:{log:et,prefix:m},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(b),s.deleteShader(E),S=new Vs(s,w),T=Bx(s,w)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(w,Rx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=E,this}var e_=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gc(t),e.set(t,i)),i}},Gc=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function n_(n){return n===Vi||n===Ur||n===Fr}function i_(n,t,e,i,s,r){let o=new gr,a=new Vc,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,f=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function w(S,T,P,D,H,B){let O=D.fog,X=H.geometry,et=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,tt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Q=t.get(S.envMap||et,tt),j=Q&&Q.mapping===Rr?Q.image.height:null,at=x[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ht("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=ft!==void 0?ft.length:0,Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let _e,Kt,ce,st;if(at){let ye=ri[at];_e=ye.vertexShader,Kt=ye.fragmentShader}else{_e=S.vertexShader,Kt=S.fragmentShader;let ye=a.getVertexShaderStage(S),le=a.getFragmentShaderStage(S);a.update(S,ye,le),ce=ye.id,st=le.id}let ut=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Wt=H.isInstancedMesh===!0,Rt=H.isBatchedMesh===!0,jt=!!S.map,Ne=!!S.matcap,Qt=!!Q,re=!!S.aoMap,pe=!!S.lightMap,Yt=!!S.bumpMap&&S.wireframe===!1,Te=!!S.normalMap,Oe=!!S.displacementMap,Re=!!S.emissiveMap,ie=!!S.metalnessMap,Pe=!!S.roughnessMap,G=S.anisotropy>0,Se=S.clearcoat>0,ue=S.dispersion>0,I=S.retroreflectivity>0,y=S.iridescence>0,k=S.sheen>0,W=S.transmission>0,it=G&&!!S.anisotropyMap,ht=Se&&!!S.clearcoatMap,pt=Se&&!!S.clearcoatNormalMap,nt=Se&&!!S.clearcoatRoughnessMap,rt=y&&!!S.iridescenceMap,Mt=y&&!!S.iridescenceThicknessMap,Lt=k&&!!S.sheenColorMap,xt=k&&!!S.sheenRoughnessMap,_t=!!S.specularMap,kt=!!S.specularColorMap,Bt=!!S.specularIntensityMap,Xt=W&&!!S.transmissionMap,V=W&&!!S.thicknessMap,St=!!S.gradientMap,ot=!!S.alphaMap,vt=S.alphaTest>0,Tt=!!S.alphaHash,dt=!!S.extensions,Ft=Vn;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let Dt={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:Kt,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:st,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&H._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&H.instanceColor!==null,instancingMorph:Wt&&H.morphTexture!==null,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:Ne,envMap:Qt,envMapMode:Qt&&Q.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:pe,bumpMap:Yt,normalMap:Te,displacementMap:Oe,emissiveMap:Re,normalMapObjectSpace:Te&&S.normalMapType===Eu,normalMapTangentSpace:Te&&S.normalMapType===_c,packedNormalMap:Te&&S.normalMapType===_c&&n_(S.normalMap.format),metalnessMap:ie,roughnessMap:Pe,anisotropy:G,anisotropyMap:it,clearcoat:Se,clearcoatMap:ht,clearcoatNormalMap:pt,clearcoatRoughnessMap:nt,dispersion:ue,retroreflection:I,iridescence:y,iridescenceMap:rt,iridescenceThicknessMap:Mt,sheen:k,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:_t,specularColorMap:kt,specularIntensityMap:Bt,transmission:W,transmissionMap:Xt,thicknessMap:V,gradientMap:St,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:ot,alphaTest:vt,alphaHash:Tt,combine:S.combine,mapUv:jt&&g(S.map.channel),aoMapUv:re&&g(S.aoMap.channel),lightMapUv:pe&&g(S.lightMap.channel),bumpMapUv:Yt&&g(S.bumpMap.channel),normalMapUv:Te&&g(S.normalMap.channel),displacementMapUv:Oe&&g(S.displacementMap.channel),emissiveMapUv:Re&&g(S.emissiveMap.channel),metalnessMapUv:ie&&g(S.metalnessMap.channel),roughnessMapUv:Pe&&g(S.roughnessMap.channel),anisotropyMapUv:it&&g(S.anisotropyMap.channel),clearcoatMapUv:ht&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(S.sheenRoughnessMap.channel),specularMapUv:_t&&g(S.specularMap.channel),specularColorMapUv:kt&&g(S.specularColorMap.channel),specularIntensityMapUv:Bt&&g(S.specularIntensityMap.channel),transmissionMapUv:Xt&&g(S.transmissionMap.channel),thicknessMapUv:V&&g(S.thicknessMap.channel),alphaMapUv:ot&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Te||G),vertexNormals:!!X.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(jt||ot),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||X.attributes.normal===void 0&&Te===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===ge,decodeVideoTextureEmissive:Re&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rn,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:dt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&S.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(p(T,S),R(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function R(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function U(S){let T=x[S.type],P;if(T){let D=ri[T];P=Vu.clone(D.uniforms)}else P=S.uniforms;return P}function v(S,T){let P=d.get(T);return P!==void 0?++P.usedTimes:(P=new t_(n,T,S,s),c.push(P),d.set(T,P)),P}function b(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function E(S){a.remove(S)}function N(){a.dispose()}return{getParameters:w,getProgramCacheKey:m,getUniforms:U,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:N}}function s_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function r_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function lf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let x=0;return f.isInstancedMesh&&(x+=2),f.isSkinnedMesh&&(x+=1),x}function a(f,x,g,w,m,p){let R=n[t];return R===void 0?(R={id:f.id,object:f,geometry:x,material:g,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:m,group:p},n[t]=R):(R.id=f.id,R.object=f,R.geometry=x,R.material=g,R.materialVariant=o(f),R.groupOrder=w,R.renderOrder=f.renderOrder,R.z=m,R.group=p),t++,R}function l(f,x,g,w,m,p,R){R.reversedDepth===!0&&(m=-m);let U=a(f,x,g,w,m,p);g.transmission>0?i.push(U):g.transparent===!0?s.push(U):e.push(U)}function c(f,x,g,w,m,p){let R=a(f,x,g,w,m,p);g.transmission>0?i.unshift(R):g.transparent===!0?s.unshift(R):e.unshift(R)}function d(f,x){e.length>1&&e.sort(f||r_),i.length>1&&i.sort(x||lf),s.length>1&&s.sort(x||lf)}function u(){for(let f=t,x=n.length;f<x;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function o_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new cf,n.set(i,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function a_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new $t};break;case"SpotLight":e={position:new J,direction:new J,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function l_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var c_=0;function h_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function u_(n){let t=new a_,e=l_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let s=new J,r=new Ue,o=new Ue;function a(c){let d=0,u=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,g=0,w=0,m=0,p=0,R=0,U=0,v=0,b=0,E=0,N=0,S=0,T=0,P=0;c.sort(h_);for(let H=0,B=c.length;H<B;H++){let O=c[H],X=O.color,et=O.intensity,tt=O.distance,Q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Vi?Q=O.shadow.map.texture:Q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=X.r*et,u+=X.g*et,f+=X.b*et;else if(O.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(O.sh.coefficients[j],et);P++}else if(O.isSunLight){let j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let at=O.shadow,ft=e.get(O);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),i.sunShadow[g]=ft,i.sunShadowMap[g]=Q;let Ut=at.getViewportCount();for(let Ot=0;Ot<Ut;Ot++)i.sunShadowMatrix[w+Ot]=at.getMatrix(Ot),i.sunShadowCascade[w+Ot]=at._cascadeData[Ot];w+=Ut,g++}i.sun[x]=j,x++}else if(O.isDirectionalLight){let j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let at=O.shadow,ft=e.get(O);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize=at.mapSize,i.directionalShadow[m]=ft,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=O.shadow.matrix,b++}i.directional[m]=j,m++}else if(O.isSpotLight){let j=t.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(X).multiplyScalar(et),j.distance=tt,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,i.spot[R]=j;let at=O.shadow;if(O.map&&(i.spotLightMap[S]=O.map,S++,at.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[R]=at.matrix,O.castShadow){let ft=e.get(O);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize=at.mapSize,i.spotShadow[R]=ft,i.spotShadowMap[R]=Q,N++}R++}else if(O.isRectAreaLight){let j=t.get(O);j.color.copy(X).multiplyScalar(et),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),i.rectArea[U]=j,U++}else if(O.isPointLight){let j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),j.distance=O.distance,j.decay=O.decay,O.castShadow){let at=O.shadow,ft=e.get(O);ft.shadowIntensity=at.intensity,ft.shadowBias=at.bias,ft.shadowNormalBias=at.normalBias,ft.shadowRadius=at.radius,ft.shadowMapSize=at.mapSize,ft.shadowCameraNear=at.camera.near,ft.shadowCameraFar=at.camera.far,i.pointShadow[p]=ft,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=O.shadow.matrix,E++}i.point[p]=j,p++}else if(O.isHemisphereLight){let j=t.get(O);j.skyColor.copy(O.color).multiplyScalar(et),j.groundColor.copy(O.groundColor).multiplyScalar(et),i.hemi[v]=j,v++}}U>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;let D=i.hash;(D.sunLength!==x||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==R||D.rectAreaLength!==U||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==N||D.numSpotMaps!==S||D.numLightProbes!==P)&&(i.sun.length=x,i.directional.length=m,i.spot.length=R,i.rectArea.length=U,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,D.sunLength=x,D.directionalLength=m,D.pointLength=p,D.spotLength=R,D.rectAreaLength=U,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=N,D.numSpotMaps=S,D.numLightProbes=P,i.version=c_++)}function l(c,d){let u=0,f=0,x=0,g=0,w=0,m=0,p=d.matrixWorldInverse;for(let R=0,U=c.length;R<U;R++){let v=c[R];if(v.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(v.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let b=i.rectArea[w];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),w++}else if(v.isPointLight){let b=i.point[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),x++}else if(v.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function hf(n){let t=new u_(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function d(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function f_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hf(n),t.set(s,[a])):r>=o.length?(a=new hf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],g_=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],uf=new Ue,kr=new J,Uc=new J;function x_(n,t,e){let i=new Mr,s=new ne,r=new ne,o=new Le,a=new qo,l=new $o,c={},d=e.maxTextureSize,u={[Oi]:cn,[cn]:Oi,[Rn]:Rn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:d_,fragmentShader:p_}),x=f.clone();x.defines.HORIZONTAL_PASS=1;let g=new vn;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new De(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let p=this.type;this.render=function(E,N,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===su&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let T=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ii),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=p!==this.type;B&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=E.length;O<X;O++){let et=E[O],tt=et.shadow;if(tt===void 0){Ht("WebGLShadowMap:",et,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let Q=tt.getFrameExtents();s.multiply(Q),r.copy(tt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,tt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,tt.mapSize.y=r.y));let j=n.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=j,tt.map===null||B===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===Us){if(et.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new fn(s.x,s.y,{format:Vi,type:Wn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),tt.map.texture.name=et.name+".shadowMap",tt.map.depthTexture=new Di(s.x,s.y,Hn),tt.map.depthTexture.name=et.name+".shadowMapDepth",tt.map.depthTexture.format=Qn,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=$e,tt.map.depthTexture.magFilter=$e}else et.isPointLight?(tt.map=new Ka(s.x),tt.map.depthTexture=new Wo(s.x,Gn)):(tt.map=new fn(s.x,s.y),tt.map.depthTexture=new Di(s.x,s.y,Gn)),tt.map.depthTexture.name=et.name+".shadowMap",tt.map.depthTexture.format=Qn,this.type===Cr?(tt.map.depthTexture.compareFunction=j?$a:qa,tt.map.depthTexture.minFilter=ze,tt.map.depthTexture.magFilter=ze):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=$e,tt.map.depthTexture.magFilter=$e);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let at=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();et.isPointLight!==!0&&tt.updateMatrices(et,S);for(let ft=0;ft<at;ft++){let Ut=tt.getCamera(ft);if(et.isPointLight){let Ot=tt.camera,_e=tt.matrix,Kt=et.distance||Ot.far;Kt!==Ot.far&&(Ot.far=Kt,Ot.updateProjectionMatrix()),kr.setFromMatrixPosition(et.matrixWorld),Ot.position.copy(kr),Uc.copy(Ot.position),Uc.add(m_[ft]),Ot.up.copy(g_[ft]),Ot.lookAt(Uc),Ot.updateMatrixWorld(),_e.makeTranslation(-kr.x,-kr.y,-kr.z),uf.multiplyMatrices(Ot.projectionMatrix,Ot.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(uf,Ot.coordinateSystem,Ot.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)n.setRenderTarget(tt.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(tt.map),n.clear());let Ot=tt.getViewport(ft);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),H.viewport(o)}i=tt.getFrustum(ft),v(N,S,Ut,et,this.type)}tt.isPointLightShadow!==!0&&this.type===Us&&R(tt,S),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,D)};function R(E,N){let S=t.update(w);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new fn(s.x,s.y,{format:Vi,type:Wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(N,null,S,f,w,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(N,null,S,x,w,null)}function U(E,N,S,T){let P=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let H=P.uuid,B=N.uuid,O=c[H];O===void 0&&(O={},c[H]=O);let X=O[B];X===void 0&&(X=P.clone(),O[B]=X,N.addEventListener("dispose",b)),P=X}if(P.visible=N.visible,P.wireframe=N.wireframe,T===Us?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:u[N.side],P.alphaMap=N.alphaMap,P.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,P.map=N.map,P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.displacementMap=N.displacementMap,P.displacementScale=N.displacementScale,P.displacementBias=N.displacementBias,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=n.properties.get(P);H.light=S}return P}function v(E,N,S,T,P){if(E.visible===!1)return;if(E.layers.test(N.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Us)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let B=t.update(E),O=E.material;if(Array.isArray(O)){let X=B.groups;for(let et=0,tt=X.length;et<tt;et++){let Q=X[et],j=O[Q.materialIndex];if(j&&j.visible){let at=U(E,j,T,P);E.onBeforeShadow(n,E,N,S,B,at,Q),n.renderBufferDirect(S,null,B,at,E,Q),E.onAfterShadow(n,E,N,S,B,at,Q)}}}else if(O.visible){let X=U(E,O,T,P);E.onBeforeShadow(n,E,N,S,B,X,null),n.renderBufferDirect(S,null,B,X,E,null),E.onAfterShadow(n,E,N,S,B,X,null)}}let H=E.children;for(let B=0,O=H.length;B<O;B++)v(H[B],N,S,T,P)}function b(E){E.target.removeEventListener("dispose",b);for(let S in c){let T=c[S],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function __(n,t){function e(){let V=!1,St=new Le,ot=null,vt=new Le(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!V&&(n.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){V=Tt},setClear:function(Tt,dt,Ft,Dt,ye){ye===!0&&(Tt*=Dt,dt*=Dt,Ft*=Dt),St.set(Tt,dt,Ft,Dt),vt.equals(St)===!1&&(n.clearColor(Tt,dt,Ft,Dt),vt.copy(St))},reset:function(){V=!1,ot=null,vt.set(-1,0,0,0)}}}function i(){let V=!1,St=!1,ot=null,vt=null,Tt=null;return{setReversed:function(dt){if(St!==dt){let Ft=t.get("EXT_clip_control");dt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),St=dt;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return St},setTest:function(dt){dt?ut(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(dt){ot!==dt&&!V&&(n.depthMask(dt),ot=dt)},setFunc:function(dt){if(St&&(dt=ku[dt]),vt!==dt){switch(dt){case Eo:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case Ro:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case Po:n.depthFunc(n.EQUAL);break;case Io:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case Do:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=dt}},setLocked:function(dt){V=dt},setClear:function(dt){Tt!==dt&&(Tt=dt,St&&(dt=1-dt),n.clearDepth(dt))},reset:function(){V=!1,ot=null,vt=null,Tt=null,St=!1}}}function s(){let V=!1,St=null,ot=null,vt=null,Tt=null,dt=null,Ft=null,Dt=null,ye=null;return{setTest:function(le){V||(le?ut(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(le){St!==le&&!V&&(n.stencilMask(le),St=le)},setFunc:function(le,je,pn){(ot!==le||vt!==je||Tt!==pn)&&(n.stencilFunc(le,je,pn),ot=le,vt=je,Tt=pn)},setOp:function(le,je,pn){(dt!==le||Ft!==je||Dt!==pn)&&(n.stencilOp(le,je,pn),dt=le,Ft=je,Dt=pn)},setLocked:function(le){V=le},setClear:function(le){ye!==le&&(n.clearStencil(le),ye=le)},reset:function(){V=!1,St=null,ot=null,vt=null,Tt=null,dt=null,Ft=null,Dt=null,ye=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},f={},x=new WeakMap,g=[],w=null,m=!1,p=null,R=null,U=null,v=null,b=null,E=null,N=null,S=new $t(0,0,0),T=0,P=!1,D=null,H=null,B=null,O=null,X=null,et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,Q=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),tt=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),tt=Q>=2);let at=null,ft={},Ut=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),_e=new Le().fromArray(Ut),Kt=new Le().fromArray(Ot);function ce(V,St,ot,vt){let Tt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(V,dt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<ot;Ft++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(St+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return dt}let st={};st[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(n.DEPTH_TEST),o.setFunc(Ps),Yt(!1),Te(Jl),ut(n.CULL_FACE),re(ii);function ut(V){d[V]!==!0&&(n.enable(V),d[V]=!0)}function Pt(V){d[V]!==!1&&(n.disable(V),d[V]=!1)}function Wt(V,St){return f[V]!==St?(n.bindFramebuffer(V,St),f[V]=St,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=St),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=St),!0):!1}function Rt(V,St){let ot=g,vt=!1;if(V){ot=x.get(St),ot===void 0&&(ot=[],x.set(St,ot));let Tt=V.textures;if(ot.length!==Tt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Ft=Tt.length;dt<Ft;dt++)ot[dt]=n.COLOR_ATTACHMENT0+dt;ot.length=Tt.length,vt=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,vt=!0);vt&&n.drawBuffers(ot)}function jt(V){return w!==V?(n.useProgram(V),w=V,!0):!1}let Ne={[ns]:n.FUNC_ADD,[ou]:n.FUNC_SUBTRACT,[au]:n.FUNC_REVERSE_SUBTRACT};Ne[lu]=n.MIN,Ne[cu]=n.MAX;let Qt={[hu]:n.ZERO,[uu]:n.ONE,[fu]:n.SRC_COLOR,[tc]:n.SRC_ALPHA,[_u]:n.SRC_ALPHA_SATURATE,[gu]:n.DST_COLOR,[pu]:n.DST_ALPHA,[du]:n.ONE_MINUS_SRC_COLOR,[ec]:n.ONE_MINUS_SRC_ALPHA,[xu]:n.ONE_MINUS_DST_COLOR,[mu]:n.ONE_MINUS_DST_ALPHA,[yu]:n.CONSTANT_COLOR,[vu]:n.ONE_MINUS_CONSTANT_COLOR,[Mu]:n.CONSTANT_ALPHA,[Su]:n.ONE_MINUS_CONSTANT_ALPHA};function re(V,St,ot,vt,Tt,dt,Ft,Dt,ye,le){if(V===ii){m===!0&&(Pt(n.BLEND),m=!1);return}if(m===!1&&(ut(n.BLEND),m=!0),V!==ru){if(V!==p||le!==P){if((R!==ns||b!==ns)&&(n.blendEquation(n.FUNC_ADD),R=ns,b=ns),le)switch(V){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kl:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jl:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",V);break}U=null,v=null,E=null,N=null,S.set(0,0,0),T=0,p=V,P=le}return}Tt=Tt||St,dt=dt||ot,Ft=Ft||vt,(St!==R||Tt!==b)&&(n.blendEquationSeparate(Ne[St],Ne[Tt]),R=St,b=Tt),(ot!==U||vt!==v||dt!==E||Ft!==N)&&(n.blendFuncSeparate(Qt[ot],Qt[vt],Qt[dt],Qt[Ft]),U=ot,v=vt,E=dt,N=Ft),(Dt.equals(S)===!1||ye!==T)&&(n.blendColor(Dt.r,Dt.g,Dt.b,ye),S.copy(Dt),T=ye),p=V,P=!1}function pe(V,St){V.side===Rn?Pt(n.CULL_FACE):ut(n.CULL_FACE);let ot=V.side===cn;St&&(ot=!ot),Yt(ot),V.blending===Fs&&V.transparent===!1?re(ii):re(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let vt=V.stencilWrite;a.setTest(vt),vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(V){D!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),D=V)}function Te(V){V!==nu?(ut(n.CULL_FACE),V!==H&&(V===Jl?n.cullFace(n.BACK):V===iu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),H=V}function Oe(V){V!==B&&(tt&&n.lineWidth(V),B=V)}function Re(V,St,ot){V?(ut(n.POLYGON_OFFSET_FILL),(O!==St||X!==ot)&&(O=St,X=ot,o.getReversed()&&(St=-St),n.polygonOffset(St,ot))):Pt(n.POLYGON_OFFSET_FILL)}function ie(V){V?ut(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function Pe(V){V===void 0&&(V=n.TEXTURE0+et-1),at!==V&&(n.activeTexture(V),at=V)}function G(V,St,ot){ot===void 0&&(at===null?ot=n.TEXTURE0+et-1:ot=at);let vt=ft[ot];vt===void 0&&(vt={type:void 0,texture:void 0},ft[ot]=vt),(vt.type!==V||vt.texture!==St)&&(at!==ot&&(n.activeTexture(ot),at=ot),n.bindTexture(V,St||st[V]),vt.type=V,vt.texture=St)}function Se(){let V=ft[at];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function y(){try{n.texSubImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function k(){try{n.texSubImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function ht(){try{n.texStorage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function pt(){try{n.texStorage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function nt(){try{n.texImage2D(...arguments)}catch(V){Gt("WebGLState:",V)}}function rt(){try{n.texImage3D(...arguments)}catch(V){Gt("WebGLState:",V)}}function Mt(V){return u[V]!==void 0?u[V]:n.getParameter(V)}function Lt(V,St){u[V]!==St&&(n.pixelStorei(V,St),u[V]=St)}function xt(V){_e.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),_e.copy(V))}function _t(V){Kt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Kt.copy(V))}function kt(V,St){let ot=c.get(St);ot===void 0&&(ot=new WeakMap,c.set(St,ot));let vt=ot.get(V);vt===void 0&&(vt=n.getUniformBlockIndex(St,V.name),ot.set(V,vt))}function Bt(V,St){let vt=c.get(St).get(V);l.get(St)!==vt&&(n.uniformBlockBinding(St,vt,V.__bindingPointIndex),l.set(St,vt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},at=null,ft={},f={},x=new WeakMap,g=[],w=null,m=!1,p=null,R=null,U=null,v=null,b=null,E=null,N=null,S=new $t(0,0,0),T=0,P=!1,D=null,H=null,B=null,O=null,X=null,_e.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Pt,bindFramebuffer:Wt,drawBuffers:Rt,useProgram:jt,setBlending:re,setMaterial:pe,setFlipSided:Yt,setCullFace:Te,setLineWidth:Oe,setPolygonOffset:Re,setScissorTest:ie,activeTexture:Pe,bindTexture:G,unbindTexture:Se,compressedTexImage2D:ue,compressedTexImage3D:I,texImage2D:nt,texImage3D:rt,pixelStorei:Lt,getParameter:Mt,updateUBOMapping:kt,uniformBlockBinding:Bt,texStorage2D:ht,texStorage3D:pt,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:it,scissor:xt,viewport:_t,reset:Xt}}function y_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,d=new WeakMap,u=new Set,f,x=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,y){return g?new OffscreenCanvas(I,y):dr("canvas")}function m(I,y,k){let W=1,it=ue(I);if((it.width>k||it.height>k)&&(W=k/Math.max(it.width,it.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ht=Math.floor(W*it.width),pt=Math.floor(W*it.height);f===void 0&&(f=w(ht,pt));let nt=y?w(ht,pt):f;return nt.width=ht,nt.height=pt,nt.getContext("2d").drawImage(I,0,0,ht,pt),Ht("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+pt+")."),nt}else return"data"in I&&Ht("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function p(I){return I.generateMipmaps}function R(I){n.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,y,k,W,it,ht=!1){if(I!==null){if(n[I]!==void 0)return n[I];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt;W&&(pt=t.get("EXT_texture_norm16"),pt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=y;if(y===n.RED&&(k===n.FLOAT&&(nt=n.R32F),k===n.HALF_FLOAT&&(nt=n.R16F),k===n.UNSIGNED_BYTE&&(nt=n.R8),k===n.UNSIGNED_SHORT&&pt&&(nt=pt.R16_EXT),k===n.SHORT&&pt&&(nt=pt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(nt=n.R8UI),k===n.UNSIGNED_SHORT&&(nt=n.R16UI),k===n.UNSIGNED_INT&&(nt=n.R32UI),k===n.BYTE&&(nt=n.R8I),k===n.SHORT&&(nt=n.R16I),k===n.INT&&(nt=n.R32I)),y===n.RG&&(k===n.FLOAT&&(nt=n.RG32F),k===n.HALF_FLOAT&&(nt=n.RG16F),k===n.UNSIGNED_BYTE&&(nt=n.RG8),k===n.UNSIGNED_SHORT&&pt&&(nt=pt.RG16_EXT),k===n.SHORT&&pt&&(nt=pt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(nt=n.RG8UI),k===n.UNSIGNED_SHORT&&(nt=n.RG16UI),k===n.UNSIGNED_INT&&(nt=n.RG32UI),k===n.BYTE&&(nt=n.RG8I),k===n.SHORT&&(nt=n.RG16I),k===n.INT&&(nt=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),k===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),k===n.UNSIGNED_INT&&(nt=n.RGB32UI),k===n.BYTE&&(nt=n.RGB8I),k===n.SHORT&&(nt=n.RGB16I),k===n.INT&&(nt=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),k===n.UNSIGNED_INT&&(nt=n.RGBA32UI),k===n.BYTE&&(nt=n.RGBA8I),k===n.SHORT&&(nt=n.RGBA16I),k===n.INT&&(nt=n.RGBA32I)),y===n.RGB&&(k===n.UNSIGNED_SHORT&&pt&&(nt=pt.RGB16_EXT),k===n.SHORT&&pt&&(nt=pt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),y===n.RGBA){let rt=ht?ur:oe.getTransfer(it);k===n.FLOAT&&(nt=n.RGBA32F),k===n.HALF_FLOAT&&(nt=n.RGBA16F),k===n.UNSIGNED_BYTE&&(nt=rt===ge?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&pt&&(nt=pt.RGBA16_EXT),k===n.SHORT&&pt&&(nt=pt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(I,y){let k;return I?y===null||y===Gn||y===ks?k=n.DEPTH24_STENCIL8:y===Hn?k=n.DEPTH32F_STENCIL8:y===Os&&(k=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===ks?k=n.DEPTH_COMPONENT24:y===Hn?k=n.DEPTH_COMPONENT32F:y===Os&&(k=n.DEPTH_COMPONENT16),k}function E(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==$e&&I.minFilter!==ze?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function N(I){let y=I.target;y.removeEventListener("dispose",N),T(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function S(I){let y=I.target;y.removeEventListener("dispose",S),D(y)}function T(I){let y=i.get(I);if(y.__webglInit===void 0)return;let k=I.source,W=x.get(k);if(W){let it=W[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(I),Object.keys(W).length===0&&x.delete(k)}i.remove(I)}function P(I){let y=i.get(I);n.deleteTexture(y.__webglTexture);let k=I.source,W=x.get(k);delete W[y.__cacheKey],o.memory.textures--}function D(I){let y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let it=0;it<y.__webglFramebuffer[W].length;it++)n.deleteFramebuffer(y.__webglFramebuffer[W][it]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=I.textures;for(let W=0,it=k.length;W<it;W++){let ht=i.get(k[W]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(k[W])}i.remove(I)}let H=0;function B(){H=0}function O(){return H}function X(I){H=I}function et(){let I=H;return I>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function tt(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function Q(I,y){let k=i.get(I);if(I.isVideoTexture&&G(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let W=I.image;if(W===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(k,I,y);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function j(I,y){let k=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Pt(k,I,y);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function at(I,y){let k=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Pt(k,I,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function ft(I,y){let k=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){Wt(k,I,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let Ut={[No]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Uo]:n.MIRRORED_REPEAT},Ot={[$e]:n.NEAREST,[Au]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},_e={[Ru]:n.NEVER,[Nu]:n.ALWAYS,[Pu]:n.LESS,[qa]:n.LEQUAL,[Iu]:n.EQUAL,[$a]:n.GEQUAL,[Lu]:n.GREATER,[Du]:n.NOTEQUAL};function Kt(I,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ze||y.magFilter===ca||y.magFilter===Pr||y.magFilter===Bi||y.minFilter===ze||y.minFilter===ca||y.minFilter===Pr||y.minFilter===Bi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ut[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ut[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ut[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Ot[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Ot[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$e||y.minFilter!==Pr&&y.minFilter!==Bi||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ce(I,y){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",N));let W=y.source,it=x.get(W);it===void 0&&(it={},x.set(W,it));let ht=tt(y);if(ht!==I.__cacheKey){it[ht]===void 0&&(it[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[ht].usedTimes++;let pt=it[I.__cacheKey];pt!==void 0&&(it[I.__cacheKey].usedTimes--,pt.usedTimes===0&&P(y)),I.__cacheKey=ht,I.__webglTexture=it[ht].texture}return k}function st(I,y,k){return Math.floor(Math.floor(I/k)/y)}function ut(I,y,k,W){let ht=I.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,W,y.data);else{ht.sort((Lt,xt)=>Lt.start-xt.start);let pt=0;for(let Lt=1;Lt<ht.length;Lt++){let xt=ht[pt],_t=ht[Lt],kt=xt.start+xt.count,Bt=st(_t.start,y.width,4),Xt=st(xt.start,y.width,4);_t.start<=kt+1&&Bt===Xt&&st(_t.start+_t.count-1,y.width,4)===Bt?xt.count=Math.max(xt.count,_t.start+_t.count-xt.start):(++pt,ht[pt]=_t)}ht.length=pt+1;let nt=e.getParameter(n.UNPACK_ROW_LENGTH),rt=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Lt=0,xt=ht.length;Lt<xt;Lt++){let _t=ht[Lt],kt=Math.floor(_t.start/4),Bt=Math.ceil(_t.count/4),Xt=kt%y.width,V=Math.floor(kt/y.width),St=Bt,ot=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Xt,V,St,ot,k,W,y.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,nt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function Pt(I,y,k){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let it=ce(I,y),ht=y.source;e.bindTexture(W,I.__webglTexture,n.TEXTURE0+k);let pt=i.get(ht);if(ht.version!==pt.__version||it===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ot=oe.getPrimaries(oe.workingColorSpace),vt=y.colorSpace===_i?null:oe.getPrimaries(y.colorSpace),Tt=y.colorSpace===_i||ot===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let rt=m(y.image,!1,s.maxTextureSize);rt=Se(y,rt);let Mt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),xt=v(y.internalFormat,Mt,Lt,y.normalized,y.colorSpace,y.isVideoTexture);Kt(W,y);let _t,kt=y.mipmaps,Bt=y.isVideoTexture!==!0,Xt=pt.__version===void 0||it===!0,V=ht.dataReady,St=E(y,rt);if(y.isDepthTexture)xt=b(y.format===zi,y.type),Xt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,xt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,xt,rt.width,rt.height,0,Mt,Lt,null));else if(y.isDataTexture)if(kt.length>0){Bt&&Xt&&e.texStorage2D(n.TEXTURE_2D,St,xt,kt[0].width,kt[0].height);for(let ot=0,vt=kt.length;ot<vt;ot++)_t=kt[ot],Bt?V&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,_t.width,_t.height,Mt,Lt,_t.data):e.texImage2D(n.TEXTURE_2D,ot,xt,_t.width,_t.height,0,Mt,Lt,_t.data);y.generateMipmaps=!1}else Bt?(Xt&&e.texStorage2D(n.TEXTURE_2D,St,xt,rt.width,rt.height),V&&ut(y,rt,Mt,Lt)):e.texImage2D(n.TEXTURE_2D,0,xt,rt.width,rt.height,0,Mt,Lt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,xt,kt[0].width,kt[0].height,rt.depth);for(let ot=0,vt=kt.length;ot<vt;ot++)if(_t=kt[ot],y.format!==Pn)if(Mt!==null)if(Bt){if(V)if(y.layerUpdates.size>0){let Tt=wc(_t.width,_t.height,y.format,y.type);for(let dt of y.layerUpdates){let Ft=_t.data.subarray(dt*Tt/_t.data.BYTES_PER_ELEMENT,(dt+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,dt,_t.width,_t.height,1,Mt,Ft)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,rt.depth,Mt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,xt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,rt.depth,Mt,Lt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,xt,_t.width,_t.height,rt.depth,0,Mt,Lt,_t.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Bt&&Xt&&e.texStorage2D(n.TEXTURE_2D,St,xt,kt[0].width,kt[0].height);for(let ot=0,vt=kt.length;ot<vt;ot++)_t=kt[ot],y.format!==Pn?Mt!==null?Bt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,xt,_t.width,_t.height,0,_t.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?V&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,_t.width,_t.height,Mt,Lt,_t.data):e.texImage2D(n.TEXTURE_2D,ot,xt,_t.width,_t.height,0,Mt,Lt,_t.data)}else if(y.isDataArrayTexture)if(Bt){if(Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,xt,rt.width,rt.height,rt.depth),V)if(y.layerUpdates.size>0){let ot=wc(rt.width,rt.height,y.format,y.type);for(let vt of y.layerUpdates){let Tt=rt.data.subarray(vt*ot/rt.data.BYTES_PER_ELEMENT,(vt+1)*ot/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,rt.width,rt.height,1,Mt,Lt,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Lt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,rt.width,rt.height,rt.depth,0,Mt,Lt,rt.data);else if(y.isData3DTexture)Bt?(Xt&&e.texStorage3D(n.TEXTURE_3D,St,xt,rt.width,rt.height,rt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Lt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,xt,rt.width,rt.height,rt.depth,0,Mt,Lt,rt.data);else if(y.isFramebufferTexture){if(Xt)if(Bt)e.texStorage2D(n.TEXTURE_2D,St,xt,rt.width,rt.height);else{let ot=rt.width,vt=rt.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,xt,ot,vt,0,Mt,Lt,null),ot>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ot=n.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),rt.parentNode!==ot){ot.appendChild(rt),u.add(y),ot.onpaint=vt=>{let Tt=vt.changedElements;for(let dt of u)Tt.includes(dt.image)&&(dt.needsUpdate=!0)},ot.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,rt);else{let Tt=n.RGBA,dt=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Tt,dt,Ft,rt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Bt&&Xt){let ot=ue(kt[0]);e.texStorage2D(n.TEXTURE_2D,St,xt,ot.width,ot.height)}for(let ot=0,vt=kt.length;ot<vt;ot++)_t=kt[ot],Bt?V&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Mt,Lt,_t):e.texImage2D(n.TEXTURE_2D,ot,xt,Mt,Lt,_t);y.generateMipmaps=!1}else if(Bt){if(Xt){let ot=ue(rt);e.texStorage2D(n.TEXTURE_2D,St,xt,ot.width,ot.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Lt,rt)}else e.texImage2D(n.TEXTURE_2D,0,xt,Mt,Lt,rt);p(y)&&R(W),pt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Wt(I,y,k){if(y.image.length!==6)return;let W=ce(I,y),it=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+k);let ht=i.get(it);if(it.version!==ht.__version||W===!0){e.activeTexture(n.TEXTURE0+k);let pt=oe.getPrimaries(oe.workingColorSpace),nt=y.colorSpace===_i?null:oe.getPrimaries(y.colorSpace),rt=y.colorSpace===_i||pt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,Lt=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let dt=0;dt<6;dt++)!Mt&&!Lt?xt[dt]=m(y.image[dt],!0,s.maxCubemapSize):xt[dt]=Lt?y.image[dt].image:y.image[dt],xt[dt]=Se(y,xt[dt]);let _t=xt[0],kt=r.convert(y.format,y.colorSpace),Bt=r.convert(y.type),Xt=v(y.internalFormat,kt,Bt,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,St=ht.__version===void 0||W===!0,ot=it.dataReady,vt=E(y,_t);Kt(n.TEXTURE_CUBE_MAP,y);let Tt;if(Mt){V&&St&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Xt,_t.width,_t.height);for(let dt=0;dt<6;dt++){Tt=xt[dt].mipmaps;for(let Ft=0;Ft<Tt.length;Ft++){let Dt=Tt[Ft];y.format!==Pn?kt!==null?V?ot&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft,0,0,Dt.width,Dt.height,kt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft,Xt,Dt.width,Dt.height,0,Dt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft,0,0,Dt.width,Dt.height,kt,Bt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft,Xt,Dt.width,Dt.height,0,kt,Bt,Dt.data)}}}else{if(Tt=y.mipmaps,V&&St){Tt.length>0&&vt++;let dt=ue(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Xt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Lt){V?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,xt[dt].width,xt[dt].height,kt,Bt,xt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Xt,xt[dt].width,xt[dt].height,0,kt,Bt,xt[dt].data);for(let Ft=0;Ft<Tt.length;Ft++){let ye=Tt[Ft].image[dt].image;V?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft+1,0,0,ye.width,ye.height,kt,Bt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft+1,Xt,ye.width,ye.height,0,kt,Bt,ye.data)}}else{V?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,kt,Bt,xt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Xt,kt,Bt,xt[dt]);for(let Ft=0;Ft<Tt.length;Ft++){let Dt=Tt[Ft];V?ot&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft+1,0,0,kt,Bt,Dt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft+1,Xt,kt,Bt,Dt.image[dt])}}}p(y)&&R(n.TEXTURE_CUBE_MAP),ht.__version=it.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Rt(I,y,k,W,it,ht){let pt=r.convert(k.format,k.colorSpace),nt=r.convert(k.type),rt=v(k.internalFormat,pt,nt,k.normalized,k.colorSpace),Mt=i.get(y),Lt=i.get(k);if(Lt.__renderTarget=y,!Mt.__hasExternalTextures){let xt=Math.max(1,y.width>>ht),_t=Math.max(1,y.height>>ht);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,rt,xt,_t,y.depth,0,pt,nt,null):e.texImage2D(it,ht,rt,xt,_t,0,pt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Pe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,it,Lt.__webglTexture,0,ie(y)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,it,Lt.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(I,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){let W=y.depthTexture,it=W&&W.isDepthTexture?W.type:null,ht=b(y.stencilBuffer,it),pt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(y),ht,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(y),ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,I)}else{let W=y.textures;for(let it=0;it<W.length;it++){let ht=W[it],pt=r.convert(ht.format,ht.colorSpace),nt=r.convert(ht.type),rt=v(ht.internalFormat,pt,nt,ht.normalized,ht.colorSpace);Pe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie(y),rt,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie(y),rt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,rt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(I,y,k){let W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(y.depthTexture);if(it.__renderTarget=y,(!it.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(it.__webglInit===void 0&&(it.__webglInit=!0,y.depthTexture.addEventListener("dispose",N)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Mt=r.convert(y.depthTexture.format),Lt=r.convert(y.depthTexture.type),xt;y.depthTexture.format===Qn?xt=n.DEPTH_COMPONENT24:y.depthTexture.format===zi&&(xt=n.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,xt,y.width,y.height,0,Mt,Lt,null)}}else Q(y.depthTexture,0);let ht=it.__webglTexture,pt=ie(y),nt=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,rt=y.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Qn)Pe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,nt,ht,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,nt,ht,0);else if(y.depthTexture.format===zi)Pe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,nt,ht,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,nt,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(I){let y=i.get(I),k=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",it)};W.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=W}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Ne(y.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?Ne(y.__webglFramebuffer[0],I,0):Ne(y.__webglFramebuffer,I,0)}else if(k){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),jt(y.__webglDepthbuffer[W],I,!1);else{let it=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ht)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),jt(y.__webglDepthbuffer,I,!1);else{let it=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(I,y,k){let W=i.get(I);y!==void 0&&Rt(W.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Qt(I)}function pe(I){let y=I.texture,k=i.get(I),W=i.get(y);I.addEventListener("dispose",S);let it=I.textures,ht=I.isWebGLCubeRenderTarget===!0,pt=it.length>1;if(pt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,o.memory.textures++),ht){k.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[nt]=[];for(let rt=0;rt<y.mipmaps.length;rt++)k.__webglFramebuffer[nt][rt]=n.createFramebuffer()}else k.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)k.__webglFramebuffer[nt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pt)for(let nt=0,rt=it.length;nt<rt;nt++){let Mt=i.get(it[nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Pe(I)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let nt=0;nt<it.length;nt++){let rt=it[nt];k.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[nt]);let Mt=r.convert(rt.format,rt.colorSpace),Lt=r.convert(rt.type),xt=v(rt.internalFormat,Mt,Lt,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),_t=ie(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,xt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,k.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),jt(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Rt(k.__webglFramebuffer[nt][rt],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else Rt(k.__webglFramebuffer[nt],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(y)&&R(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let nt=0,rt=it.length;nt<rt;nt++){let Mt=it[nt],Lt=i.get(Mt),xt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Lt.__webglTexture),Kt(xt,Mt),Rt(k.__webglFramebuffer,I,Mt,n.COLOR_ATTACHMENT0+nt,xt,0),p(Mt)&&R(xt)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(nt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,W.__webglTexture),Kt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Rt(k.__webglFramebuffer[rt],I,y,n.COLOR_ATTACHMENT0,nt,rt);else Rt(k.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,nt,0);p(y)&&R(nt),e.unbindTexture()}I.depthBuffer&&Qt(I)}function Yt(I){let y=I.textures;for(let k=0,W=y.length;k<W;k++){let it=y[k];if(p(it)){let ht=U(I),pt=i.get(it).__webglTexture;e.bindTexture(ht,pt),R(ht),e.unbindTexture()}}}let Te=[],Oe=[];function Re(I){if(I.samples>0){if(Pe(I)===!1){let y=I.textures,k=I.width,W=I.height,it=n.COLOR_BUFFER_BIT,ht=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(I),nt=y.length>1;if(nt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let rt=I.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[Mt]);let Lt=i.get(y[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,it,n.NEAREST),l===!0&&(Te.length=0,Oe.length=0,Te.push(n.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Te.push(ht),Oe.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[Mt]);let Lt=i.get(y[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ie(I){return Math.min(s.maxSamples,I.samples)}function Pe(I){let y=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(I){let y=o.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function Se(I,y){let k=I.colorSpace,W=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==hr&&k!==_i&&(oe.getTransfer(k)===ge?(W!==Pn||it!==bn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",k)),y}function ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=et,this.resetTextureUnits=B,this.getTextureUnits=O,this.setTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=at,this.setTextureCube=ft,this.rebindTextures=re,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function v_(n,t){function e(i,s=_i){let r,o=oe.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return n.BYTE;if(i===fc)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===ha)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===mc)return n.ALPHA;if(i===gc)return n.RGB;if(i===Pn)return n.RGBA;if(i===Qn)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===xc)return n.RED;if(i===da)return n.RED_INTEGER;if(i===Vi)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Ir||i===Lr||i===Dr||i===Nr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===xa||i===_a||i===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===Ma||i===Sa||i===ba||i===wa||i===Ur||i===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===va||i===Ma)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ba)return r.COMPRESSED_R11_EAC;if(i===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ur)return r.COMPRESSED_RG11_EAC;if(i===Aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ta||i===Ea||i===Ca||i===Ra||i===Pa||i===Ia||i===La||i===Da||i===Na||i===Ua||i===Fa||i===Oa||i===ka||i===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ta)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ca)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ia)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Da)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Na)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===Va||i===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ha||i===Wa||i===Fr||i===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new sn({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends ti{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,x=null,g=null,w=typeof XRWebGLBinding<"u",m=new Hc,p={},R=e.getContextAttributes(),U=null,v=null,b=[],E=[],N=new ne,S=null,T=null,P=new nn;P.viewport=new Le;let D=new nn;D.viewport=new Le;let H=[P,D],B=new ra,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ut=b[st];return ut===void 0&&(ut=new Ds,b[st]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(st){let ut=b[st];return ut===void 0&&(ut=new Ds,b[st]=ut),ut.getGripSpace()},this.getHand=function(st){let ut=b[st];return ut===void 0&&(ut=new Ds,b[st]=ut),ut.getHandSpace()};function et(st){let ut=E.indexOf(st.inputSource);if(ut===-1)return;let Pt=b[ut];Pt!==void 0&&(Pt.update(st.inputSource,st.frame,c||o),Pt.dispatchEvent({type:st.type,data:st.inputSource}))}function tt(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",Q);for(let st=0;st<b.length;st++){let ut=E[st];ut!==null&&(E[st]=null,b[st].disconnect(ut))}O=null,X=null,m.reset();for(let st in p)delete p[st];if(t.setRenderTarget(U),x=null,f=null,u=null,s=null,v=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(N.width,N.height,!1),T!==null){let st=T.camera;st.fov=T.fov,st.zoom=T.zoom,st.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return u===null&&w&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",Q),R.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Wt=null,Rt=null;R.depth&&(Rt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=R.stencil?zi:Qn,Wt=R.stencil?ks:Gn);let jt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new fn(f.textureWidth,f.textureHeight,{format:Pn,type:bn,depthTexture:new Di(f.textureWidth,f.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Pt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new fn(x.framebufferWidth,x.framebufferHeight,{format:Pn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(st){for(let ut=0;ut<st.removed.length;ut++){let Pt=st.removed[ut],Wt=E.indexOf(Pt);Wt>=0&&(E[Wt]=null,b[Wt].disconnect(Pt))}for(let ut=0;ut<st.added.length;ut++){let Pt=st.added[ut],Wt=E.indexOf(Pt);if(Wt===-1){for(let jt=0;jt<b.length;jt++)if(jt>=E.length){E.push(Pt),Wt=jt;break}else if(E[jt]===null){E[jt]=Pt,Wt=jt;break}if(Wt===-1)break}let Rt=b[Wt];Rt&&Rt.connect(Pt)}}let j=new J,at=new J;function ft(st,ut,Pt){j.setFromMatrixPosition(ut.matrixWorld),at.setFromMatrixPosition(Pt.matrixWorld);let Wt=j.distanceTo(at),Rt=ut.projectionMatrix.elements,jt=Pt.projectionMatrix.elements,Ne=Rt[14]/(Rt[10]-1),Qt=Rt[14]/(Rt[10]+1),re=(Rt[9]+1)/Rt[5],pe=(Rt[9]-1)/Rt[5],Yt=(Rt[8]-1)/Rt[0],Te=(jt[8]+1)/jt[0],Oe=Ne*Yt,Re=Ne*Te,ie=Wt/(-Yt+Te),Pe=ie*-Yt;if(ut.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Pe),st.translateZ(ie),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Rt[10]===-1)st.projectionMatrix.copy(ut.projectionMatrix),st.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let G=Ne+ie,Se=Qt+ie,ue=Oe-Pe,I=Re+(Wt-Pe),y=re*Qt/Se*G,k=pe*Qt/Se*G;st.projectionMatrix.makePerspective(ue,I,y,k,G,Se),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Ut(st,ut){ut===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ut.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ut=st.near,Pt=st.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(Pt=m.depthFar)),B.near=D.near=P.near=ut,B.far=D.far=P.far=Pt,(O!==B.near||X!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,X=B.far),B.layers.mask=st.layers.mask|6,P.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Wt=st.parent,Rt=B.cameras;Ut(B,Wt);for(let jt=0;jt<Rt.length;jt++)Ut(Rt[jt],Wt);Rt.length===2?ft(B,P,D):B.projectionMatrix.copy(P.projectionMatrix),T===null&&st.isPerspectiveCamera&&(T={camera:st,fov:st.fov,zoom:st.zoom}),Ot(st,B,Wt)};function Ot(st,ut,Pt){Pt===null?st.matrix.copy(ut.matrixWorld):(st.matrix.copy(Pt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ut.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ut.projectionMatrix),st.projectionMatrixInverse.copy(ut.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Oo*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&x===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(st){return p[st]};let _e=null;function Kt(st,ut){if(d=ut.getViewerPose(c||o),g=ut,d!==null){let Pt=d.views;x!==null&&(t.setRenderTargetFramebuffer(v,x.framebuffer),t.setRenderTarget(v));let Wt=!1;Pt.length!==B.cameras.length&&(B.cameras.length=0,Wt=!0);for(let Qt=0;Qt<Pt.length;Qt++){let re=Pt[Qt],pe=null;if(x!==null)pe=x.getViewport(re);else{let Te=u.getViewSubImage(f,re);pe=Te.viewport,Qt===0&&(t.setRenderTargetTextures(v,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(v))}let Yt=H[Qt];Yt===void 0&&(Yt=new nn,Yt.layers.enable(Qt),Yt.viewport=new Le,H[Qt]=Yt),Yt.matrix.fromArray(re.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(re.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(pe.x,pe.y,pe.width,pe.height),Qt===0&&(B.matrix.copy(Yt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Wt===!0&&B.cameras.push(Yt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){u=i.getBinding();let Qt=u.getDepthInformation(Pt[0]);Qt&&Qt.isValid&&Qt.texture&&m.init(Qt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&w){t.state.unbindTexture(),u=i.getBinding();for(let Qt=0;Qt<Pt.length;Qt++){let re=Pt[Qt].camera;if(re){let pe=p[re];pe||(pe=new br,p[re]=pe);let Yt=u.getCameraImage(re);pe.sourceTexture=Yt}}}}for(let Pt=0;Pt<b.length;Pt++){let Wt=E[Pt],Rt=b[Pt];Wt!==null&&Rt!==void 0&&Rt.update(Wt,ut,c||o)}_e&&_e(st,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let ce=new ff;ce.setAnimationLoop(Kt),this.setAnimationLoop=function(st){_e=st},this.dispose=function(){}}},b_=new Ue,_f=new qt;_f.set(-1,0,0,0,1,0,0,0,1);function w_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,U,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&x(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),w(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,U):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let R=t.get(p),U=R.envMap,v=R.envMapRotation;U&&(m.envMap.value=U,m.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(v)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_f),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,U){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=U*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function w(m,p){let R=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let E=b.program;i.uniformBlockBinding(v,E)}function c(v,b){let E=s[v.id];E===void 0&&(m(v),E=d(v),s[v.id]=E,v.addEventListener("dispose",R));let N=b.program;i.updateUBOMapping(v,N);let S=t.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function d(v){let b=u();v.__bindingPointIndex=b;let E=n.createBuffer(),N=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],E=v.uniforms,N=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,T=E.length;S<T;S++){let P=E[S];if(Array.isArray(P))for(let D=0,H=P.length;D<H;D++)x(P[D],S,D,N);else x(P,S,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(v,b,E,N){if(w(v,b,E,N)===!0){let S=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let H=T[D],B=p(H);g(H,v.__data,P),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,v.__data)}}function g(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function w(v,b,E,N){let S=v.value,T=b+"_"+E;if(N[T]===void 0)return typeof S=="number"||typeof S=="boolean"?N[T]=S:ArrayBuffer.isView(S)?N[T]=S.slice():N[T]=S.clone(),!0;{let P=N[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return N[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function m(v){let b=v.uniforms,E=0,N=16;for(let T=0,P=b.length;T<P;T++){let D=Array.isArray(b[T])?b[T]:[b[T]];for(let H=0,B=D.length;H<B;H++){let O=D[H],X=Array.isArray(O.value)?O.value:[O.value];for(let et=0,tt=X.length;et<tt;et++){let Q=X[et],j=p(Q),at=E%N,ft=at%j.boundary,Ut=at+ft;E+=ft,Ut!==0&&N-Ut<j.storage&&(E+=N-Ut),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=j.storage}}}let S=E%N;return S>0&&(E+=N-S),v.__size=E,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),b}function R(v){let b=v.target;b.removeEventListener("dispose",R);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function U(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:U}}var T_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function E_(){return si===null&&(si=new Ho(T_,16,16,Vi,Wn),si.name="DFG_LUT",si.minFilter=ze,si.magFilter=ze,si.wrapS=jn,si.wrapT=jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var ja=class{constructor(t={}){let{canvas:e=Uu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:x=bn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let w=x,m=new Set([ma,pa,da]),p=new Set([bn,Gn,Os,ks,ua,fa]),R=new Uint32Array(4),U=new Int32Array(4),v=new J,b=null,E=null,N=[],S=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,H=null,B=null,O=null,X=null;this._outputColorSpace=Be;let et=0,tt=0,Q=null,j=-1,at=null,ft=new Le,Ut=new Le,Ot=null,_e=new $t(0),Kt=0,ce=e.width,st=e.height,ut=1,Pt=null,Wt=null,Rt=new Le(0,0,ce,st),jt=new Le(0,0,ce,st),Ne=!1,Qt=new Mr,re=!1,pe=!1,Yt=new Ue,Te=new J,Oe=new Le,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function Pe(){return Q===null?ut:1}let G=i;function Se(A,z){return e.getContext(A,z)}let ue,I,y,k,W,it,ht,pt,nt,rt,Mt,Lt,xt,_t,kt,Bt,Xt,V,St,ot,vt,Tt,dt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",je,!1),G===null){let z="webgl2";if(G=Se(z,A),G===null)throw Se(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(A){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",je,!1),Gt("WebGLRenderer: "+A.message),A}function Ft(){ue=new Ng(G),ue.init(),vt=new v_(G,ue),I=new wg(G,ue,t,vt),y=new __(G,ue),I.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),B=G.createFramebuffer(),O=G.createFramebuffer(),X=G.createFramebuffer(),k=new Og(G),W=new s_,it=new y_(G,ue,y,W,I,vt,k),ht=new Dg(P),pt=new Bp(G),Tt=new Sg(G,pt),nt=new Ug(G,pt,k,Tt),rt=new Bg(G,nt,pt,Tt,k),V=new kg(G,I,it),kt=new Ag(W),Mt=new i_(P,ht,ue,I,Tt,kt),Lt=new w_(P,W),xt=new o_,_t=new f_(ue),Xt=new Mg(P,ht,y,rt,g,l),Bt=new x_(P,rt,I),dt=new A_(G,k,I,y),St=new bg(G,ue,k),ot=new Fg(G,ue,k),k.programs=Mt.programs,P.capabilities=I,P.extensions=ue,P.properties=W,P.renderLists=xt,P.shadowMap=Bt,P.state=y,P.info=k}w!==bn&&(T=new Vg(w,e.width,e.height,a,s,r));let Dt=new Wc(P,G);this.xr=Dt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(A){A!==void 0&&(ut=A,this.setSize(ce,st,!1))},this.getSize=function(A){return A.set(ce,st)},this.setSize=function(A,z,K=!0){if(Dt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,st=z,e.width=Math.floor(A*ut),e.height=Math.floor(z*ut),K===!0&&(e.style.width=A+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(ce*ut,st*ut).floor()},this.setDrawingBufferSize=function(A,z,K){ce=A,st=z,ut=K,e.width=Math.floor(A*K),e.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(w===bn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ft)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,z,K,Z){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,z,K,Z),y.viewport(ft.copy(Rt).multiplyScalar(ut).round())},this.getScissor=function(A){return A.copy(jt)},this.setScissor=function(A,z,K,Z){A.isVector4?jt.set(A.x,A.y,A.z,A.w):jt.set(A,z,K,Z),y.scissor(Ut.copy(jt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){y.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){Pt=A},this.setTransparentSort=function(A){Wt=A},this.getClearColor=function(A){return A.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,K=!0){let Z=0;if(A){let $=!1;if(Q!==null){let wt=Q.texture.format;$=m.has(wt)}if($){let wt=Q.texture.type,Ct=p.has(wt),gt=Xt.getClearColor(),yt=Xt.getClearAlpha(),Nt=gt.r,Jt=gt.g,ee=gt.b;Ct?(R[0]=Nt,R[1]=Jt,R[2]=ee,R[3]=yt,G.clearBufferuiv(G.COLOR,0,R)):(U[0]=Nt,U[1]=Jt,U[2]=ee,U[3]=yt,G.clearBufferiv(G.COLOR,0,U))}else Z|=G.COLOR_BUFFER_BIT}z&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",je,!1),Xt.dispose(),xt.dispose(),_t.dispose(),W.dispose(),ht.dispose(),rt.dispose(),Tt.dispose(),dt.dispose(),Mt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Yr),Dt.removeEventListener("sessionend",Ys),qn.stop()};function ye(A){A.preventDefault(),pr("WebGLRenderer: Context Lost."),D=!0}function le(){pr("WebGLRenderer: Context Restored."),D=!1;let A=k.autoReset,z=Bt.enabled,K=Bt.autoUpdate,Z=Bt.needsUpdate,$=Bt.type;Ft(),k.autoReset=A,Bt.enabled=z,Bt.autoUpdate=K,Bt.needsUpdate=Z,Bt.type=$}function je(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pn(A){let z=A.target;z.removeEventListener("dispose",pn),as(z)}function as(A){$s(A),W.remove(A)}function $s(A){let z=W.get(A).programs;z!==void 0&&(z.forEach(function(K){Mt.releaseProgram(K)}),A.isShaderMaterial&&Mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,Z,$,wt){z===null&&(z=Re);let Ct=$.isMesh&&$.matrixWorld.determinantAffine()<0,gt=Kr(A,z,K,Z,$);y.setMaterial(Z,Ct);let yt=K.index,Nt=1;if(Z.wireframe===!0){if(yt=nt.getWireframeAttribute(K),yt===void 0)return;Nt=2}let Jt=K.drawRange,ee=K.attributes.position,It=Jt.start*Nt,fe=(Jt.start+Jt.count)*Nt;wt!==null&&(It=Math.max(It,wt.start*Nt),fe=Math.min(fe,(wt.start+wt.count)*Nt)),yt!==null?(It=Math.max(It,0),fe=Math.min(fe,yt.count)):ee!=null&&(It=Math.max(It,0),fe=Math.min(fe,ee.count));let Ie=fe-It;if(Ie<0||Ie===1/0)return;Tt.setup($,Z,gt,K,yt);let be,me=St;if(yt!==null&&(be=pt.get(yt),me=ot,me.setIndex(be)),$.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*Pe()),me.setMode(G.LINES)):me.setMode(G.TRIANGLES);else if($.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),y.setLineWidth(Xe*Pe()),$.isLineSegments?me.setMode(G.LINES):$.isLineLoop?me.setMode(G.LINE_LOOP):me.setMode(G.LINE_STRIP)}else $.isPoints?me.setMode(G.POINTS):$.isSprite&&me.setMode(G.TRIANGLES);if($.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))me.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Xe=$._multiDrawStarts,Et=$._multiDrawCounts,Ye=$._multiDrawCount,se=yt?pt.get(yt).bytesPerElement:1,Qe=W.get(Z).currentProgram.getUniforms();for(let hn=0;hn<Ye;hn++)Qe.setValue(G,"_gl_DrawID",hn),me.render(Xe[hn]/se,Et[hn])}else if($.isInstancedMesh)me.renderInstances(It,Ie,$.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Et=Math.min(K.instanceCount,Xe);me.renderInstances(It,Ie,Et)}else me.render(It,Ie)};function Xi(A,z,K,Z){H!==null&&A.isNodeMaterial&&H.setObject(Z,A),re===!0&&kt.setState(A,K,!1),A.transparent===!0&&A.side===Rn&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,ci(A,z,Z),A.side=Oi,A.needsUpdate=!0,ci(A,z,Z),A.side=Rn):ci(A,z,Z)}this.compile=function(A,z,K=null){K===null&&(K=A),H!==null&&H.renderStart(A,z,K),E=_t.get(K),E.init(z),S.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),A!==K&&A.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),pe=this.localClippingEnabled,re=kt.init(this.clippingPlanes,pe),re===!0&&kt.setGlobalState(this.clippingPlanes,z),H!==null&&Bt.render(E.state.shadowsArray,K,z);let Z=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let wt=$.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let gt=wt[Ct];Xi(gt,K,z,$),Z.add(gt)}else Xi(wt,K,z,$),Z.add(wt)}),E=S.pop(),H!==null&&H.renderEnd(),Z},this.compileAsync=function(A,z,K=null){let Z=this.compile(A,z,K);return new Promise($=>{function wt(){if(Z.forEach(function(Ct){let yt=W.get(Ct).currentProgram;(yt===void 0||yt.isReady())&&Z.delete(Ct)}),Z.size===0){$(A);return}setTimeout(wt,10)}ue.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let qi=null;function wn(A){qi&&qi(A)}function Yr(){qn.stop()}function Ys(){qn.start()}let qn=new ff;qn.setAnimationLoop(wn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){qi=A,Dt.setAnimationLoop(A),A===null?qn.stop():qn.start()},Dt.addEventListener("sessionstart",Yr),Dt.addEventListener("sessionend",Ys),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(A,z);let K=Dt.enabled===!0&&Dt.isPresenting===!0,Z=T!==null&&(Q===null||K)&&T.begin(P,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(z),z=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,z,Q),E=_t.get(A,S.length),E.init(z),E.state.textureUnits=it.getTextureUnits(),S.push(E),Yt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qt.setFromProjectionMatrix(Yt,zn,z.reversedDepth),pe=this.localClippingEnabled,re=kt.init(this.clippingPlanes,pe),b=xt.get(A,N.length),b.init(),N.push(b),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=P.xr.getDepthSensingMesh();Ct!==null&&Zs(Ct,z,-1/0,P.sortObjects)}Zs(A,z,0,P.sortObjects),b.finish(),H!==null&&H.updateLights(E.state.lightsArray),P.sortObjects===!0&&b.sort(Pt,Wt),ie=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,ie&&Xt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&kt.beginShadows();let $=E.state.shadowsArray;if(Bt.render($,A,z),re===!0&&kt.endShadows(),(Z&&T.hasRenderPass())===!1){let Ct=b.opaque,gt=b.transmissive;if(E.setupLights(),z.isArrayCamera){let yt=z.cameras;if(gt.length>0)for(let Nt=0,Jt=yt.length;Nt<Jt;Nt++){let ee=yt[Nt];on(Ct,gt,A,ee)}ie&&Xt.render(A);for(let Nt=0,Jt=yt.length;Nt<Jt;Nt++){let ee=yt[Nt];Zr(b,A,ee,ee.viewport)}}else gt.length>0&&on(Ct,gt,A,z),ie&&Xt.render(A),Zr(b,A,z)}Q!==null&&tt===0&&(it.updateMultisampleRenderTarget(Q),it.updateRenderTargetMipmap(Q)),Z&&T.end(P),A.isScene===!0&&A.onAfterRender(P,A,z),Tt.resetDefaultState(),j=-1,at=null,S.pop(),S.length>0?(E=S[S.length-1],it.setTextureUnits(E.state.textureUnits),re===!0&&kt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,N.pop(),N.length>0?b=N[N.length-1]:b=null,H!==null&&H.renderEnd()};function Zs(A,z,K,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Qt)){Z&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Yt);let Ct=rt.update(A),gt=A.material;gt.visible&&b.push(A,Ct,gt,K,Oe.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Qt))){let Ct=rt.update(A),gt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Oe.copy(Ct.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(Yt)),Array.isArray(gt)){let yt=Ct.groups;for(let Nt=0,Jt=yt.length;Nt<Jt;Nt++){let ee=yt[Nt],It=gt[ee.materialIndex];It&&It.visible&&b.push(A,Ct,It,K,Oe.z,ee,z)}}else gt.visible&&b.push(A,Ct,gt,K,Oe.z,null,z)}}let wt=A.children;for(let Ct=0,gt=wt.length;Ct<gt;Ct++)Zs(wt[Ct],z,K,Z)}function Zr(A,z,K,Z){let{opaque:$,transmissive:wt,transparent:Ct}=A;E.setupLightsView(K),re===!0&&kt.setGlobalState(P.clippingPlanes,K),Z&&y.viewport(ft.copy(Z)),$.length>0&&$i($,z,K),wt.length>0&&$i(wt,z,K),Ct.length>0&&$i(Ct,z,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function on(A,z,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let It=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new fn(1,1,{generateMipmaps:!0,type:It?Wn:bn,minFilter:Bi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let wt=E.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||ft;wt.setSize(Ct.z*P.transmissionResolutionScale,Ct.w*P.transmissionResolutionScale);let gt=P.getRenderTarget(),yt=P.getActiveCubeFace(),Nt=P.getActiveMipmapLevel();P.setRenderTarget(wt),P.getClearColor(_e),Kt=P.getClearAlpha(),Kt<1&&P.setClearColor(16777215,.5),P.clear(),ie&&Xt.render(K);let Jt=P.toneMapping;P.toneMapping=Vn;let ee=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),re===!0&&kt.setGlobalState(P.clippingPlanes,Z),$i(A,K,Z),it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let fe=0,Ie=z.length;fe<Ie;fe++){let be=z[fe],{object:me,geometry:Xe,material:Et,group:Ye}=be;if(Et.side===Rn&&me.layers.test(Z.layers)){let se=Et.side;Et.side=cn,Et.needsUpdate=!0,ls(me,K,Z,Xe,Et,Ye),Et.side=se,Et.needsUpdate=!0,It=!0}}It===!0&&(it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt))}P.setRenderTarget(gt,yt,Nt),P.setClearColor(_e,Kt),ee!==void 0&&(Z.viewport=ee),P.toneMapping=Jt}function $i(A,z,K){let Z=z.isScene===!0?z.overrideMaterial:null;for(let $=0,wt=A.length;$<wt;$++){let Ct=A[$],{object:gt,geometry:yt,group:Nt}=Ct,Jt=Ct.material;Jt.allowOverride===!0&&Z!==null&&(Jt=Z),gt.layers.test(K.layers)&&ls(gt,z,K,yt,Jt,Nt)}}function ls(A,z,K,Z,$,wt){H!==null&&$.isNodeMaterial&&H.setObject(A,$),A.onBeforeRender(P,z,K,Z,$,wt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(P,z,K,Z,A,wt),$.transparent===!0&&$.side===Rn&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,P.renderBufferDirect(K,z,Z,$,A,wt),$.side=Oi,$.needsUpdate=!0,P.renderBufferDirect(K,z,Z,$,A,wt),$.side=Rn):P.renderBufferDirect(K,z,Z,$,A,wt),A.onAfterRender(P,z,K,Z,$,wt)}function ci(A,z,K){z.isScene!==!0&&(z=Re);let Z=W.get(A),$=E.state.lights,wt=E.state.shadowsArray,Ct=$.state.version,gt=Mt.getParameters(A,$.state,wt,z,K,E.state.lightProbeGridArray),yt=Mt.getProgramCacheKey(gt),Nt=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;let Jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=ht.get(A.envMap||Z.environment,Jt),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",pn),Nt=new Map,Z.programs=Nt);let ee=Nt.get(yt);if(ee!==void 0){if(Z.currentProgram===ee&&Z.lightsStateVersion===Ct)return Si(A,gt),ee}else gt.uniforms=Mt.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,K,gt),A.onBeforeCompile(gt,P),ee=Mt.acquireProgram(gt,yt),Nt.set(yt,ee),Z.uniforms=gt.uniforms;let It=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=kt.uniform),Si(A,gt),Z.needsLights=cs(A),Z.lightsStateVersion=Ct,Z.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.sunLights.value=$.state.sun,It.sunLightShadows.value=$.state.sunShadow,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.sunShadowMatrix.value=$.state.sunShadowMatrix,It.sunShadowCascade.value=$.state.sunShadowCascade,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=E.state.lightProbeGridArray.length>0,Z.currentProgram=ee,Z.uniformsList=null,ee}function Dn(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Vs.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Si(A,z){let K=W.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Jr(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let K=0,Z=A.length;K<Z;K++){let $=A[K];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function Kr(A,z,K,Z,$){z.isScene!==!0&&(z=Re),it.resetTextureUnits();let wt=z.fog,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,gt=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:oe.workingColorSpace,yt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Nt=ht.get(Z.envMap||Ct,yt),Jt=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ee=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!K.morphAttributes.position,fe=!!K.morphAttributes.normal,Ie=!!K.morphAttributes.color,be=Vn;Z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(be=P.toneMapping);let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xe=me!==void 0?me.length:0,Et=W.get(Z),Ye=E.state.lights;if(re===!0&&(pe===!0||A!==at)){let xe=A===at&&Z.id===j;kt.setState(Z,A,xe)}let se=!1;Z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ye.state.version||Et.outputColorSpace!==gt||$.isBatchedMesh&&Et.batching===!1||!$.isBatchedMesh&&Et.batching===!0||$.isBatchedMesh&&Et.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Et.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Et.instancing===!1||!$.isInstancedMesh&&Et.instancing===!0||$.isSkinnedMesh&&Et.skinning===!1||!$.isSkinnedMesh&&Et.skinning===!0||$.isInstancedMesh&&Et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Et.instancingMorph===!1&&$.morphTexture!==null||Et.envMap!==Nt||Z.fog===!0&&Et.fog!==wt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==kt.numPlanes||Et.numIntersection!==kt.numIntersection)||Et.vertexAlphas!==Jt||Et.vertexTangents!==ee||Et.morphTargets!==It||Et.morphNormals!==fe||Et.morphColors!==Ie||Et.toneMapping!==be||Et.morphTargetsCount!==Xe||!!Et.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Et.__version=Z.version);let Qe=Et.currentProgram;se===!0&&(Qe=ci(Z,z,$),H&&Z.isNodeMaterial&&H.onUpdateProgram(Z,Qe,Et));let hn=!1,$n=!1,Un=!1,de=Qe.getUniforms(),we=Et.uniforms;if(y.useProgram(Qe.program)&&(hn=!0,$n=!0,Un=!0),Z.id!==j&&(j=Z.id,$n=!0),Et.needsLights){let xe=Jr(E.state.lightProbeGridArray,$);Et.lightProbeGrid!==xe&&(Et.lightProbeGrid=xe,$n=!0)}if(hn||at!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),de.setValue(G,"projectionMatrix",A.projectionMatrix),de.setValue(G,"viewMatrix",A.matrixWorldInverse);let An=de.map.cameraPosition;An!==void 0&&An.setValue(G,Te.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&de.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&de.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),at!==A&&(at=A,$n=!0,Un=!0)}if(Et.needsLights&&(Ye.state.sunShadowMap.length>0&&de.setValue(G,"sunShadowMap",Ye.state.sunShadowMap,it),Ye.state.directionalShadowMap.length>0&&de.setValue(G,"directionalShadowMap",Ye.state.directionalShadowMap,it),Ye.state.spotShadowMap.length>0&&de.setValue(G,"spotShadowMap",Ye.state.spotShadowMap,it),Ye.state.pointShadowMap.length>0&&de.setValue(G,"pointShadowMap",Ye.state.pointShadowMap,it)),$.isSkinnedMesh){de.setOptional(G,$,"bindMatrix"),de.setOptional(G,$,"bindMatrixInverse");let xe=$.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),de.setValue(G,"boneTexture",xe.boneTexture,it))}$.isBatchedMesh&&(de.setOptional(G,$,"batchingTexture"),de.setValue(G,"batchingTexture",$._matricesTexture,it),de.setOptional(G,$,"batchingIdTexture"),de.setValue(G,"batchingIdTexture",$._indirectTexture,it),de.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&de.setValue(G,"batchingColorTexture",$._colorsTexture,it));let mn=K.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&V.update($,K,Qe),($n||Et.receiveShadow!==$.receiveShadow)&&(Et.receiveShadow=$.receiveShadow,de.setValue(G,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(we.envMapIntensity.value=z.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=E_()),$n){if(de.setValue(G,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&Nn(we,Un),wt&&Z.fog===!0&&Lt.refreshFogUniforms(we,wt),Lt.refreshMaterialUniforms(we,Z,ut,st,E.state.transmissionRenderTarget[A.id]),Et.needsLights&&Et.lightProbeGrid){let xe=Et.lightProbeGrid;we.probesSH.value=xe.texture,we.probesMin.value.copy(xe.boundingBox.min),we.probesMax.value.copy(xe.boundingBox.max),we.probesResolution.value.copy(xe.resolution)}Vs.upload(G,Dn(Et),we,it)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vs.upload(G,Dn(Et),we,it),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&de.setValue(G,"center",$.center),de.setValue(G,"modelViewMatrix",$.modelViewMatrix),de.setValue(G,"normalMatrix",$.normalMatrix),de.setValue(G,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let xe=Z.uniformsGroups;for(let An=0,Yn=xe.length;An<Yn;An++){let Ks=xe[An];dt.update(Ks,Qe),dt.bind(Ks,Qe)}}return Qe}function Nn(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function cs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,z,K){let Z=W.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=z,W.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let K=W.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){Q=A,et=z,tt=K;let Z=null,$=!1,wt=!1;if(A){let gt=W.get(A);if(gt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(G.FRAMEBUFFER,gt.__webglFramebuffer),ft.copy(A.viewport),Ut.copy(A.scissor),Ot=A.scissorTest,y.viewport(ft),y.scissor(Ut),y.setScissorTest(Ot),j=-1;return}else if(gt.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(gt.__hasExternalTextures)it.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Jt=A.depthTexture;if(gt.__boundDepthTexture!==Jt){if(Jt!==null&&W.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}let yt=A.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(wt=!0);let Nt=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[z])?Z=Nt[z][K]:Z=Nt[z],$=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?Z=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?Z=Nt[K]:Z=Nt,ft.copy(A.viewport),Ut.copy(A.scissor),Ot=A.scissorTest}else ft.copy(Rt).multiplyScalar(ut).floor(),Ut.copy(jt).multiplyScalar(ut).floor(),Ot=Ne;if(K!==0&&(Z=B),y.bindFramebuffer(G.FRAMEBUFFER,Z)&&y.drawBuffers(A,Z),y.viewport(ft),y.scissor(Ut),y.setScissorTest(Ot),$){let gt=W.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,gt.__webglTexture,K)}else if(wt){let gt=z;for(let yt=0;yt<A.textures.length;yt++){let Nt=W.get(A.textures[yt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+yt,Nt.__webglTexture,K,gt)}}else if(A!==null&&K!==0){let gt=W.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gt.__webglTexture,K)}j=-1};function Js(A){let z=W.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=I.textureFormatReadable(A.format),z.__typeReadable=I.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,K,Z,$,wt,Ct,gt=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(yt=yt[Ct]),yt){y.bindFramebuffer(G.FRAMEBUFFER,yt);try{let Nt=A.textures[gt],Jt=Nt.format,ee=Nt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+gt);let It=Js(Nt);if(It.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&K>=0&&K<=A.height-$&&G.readPixels(z,K,Z,$,vt.convert(Jt),vt.convert(ee),wt)}finally{let Nt=Q!==null?W.get(Q).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,z,K,Z,$,wt,Ct,gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(yt=yt[Ct]),yt)if(z>=0&&z<=A.width-Z&&K>=0&&K<=A.height-$){y.bindFramebuffer(G.FRAMEBUFFER,yt);let Nt=A.textures[gt],Jt=Nt.format,ee=Nt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+gt);let It=Js(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),G.readPixels(z,K,Z,$,vt.convert(Jt),vt.convert(ee),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ie=Q!==null?W.get(Q).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Ie);let be=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ou(G,be,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(fe),G.deleteSync(be),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,K=0){let Z=Math.pow(2,-K),$=Math.floor(A.image.width*Z),wt=Math.floor(A.image.height*Z),Ct=z!==null?z.x:0,gt=z!==null?z.y:0;it.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,Ct,gt,$,wt),y.unbindTexture()},this.copyTextureToTexture=function(A,z,K=null,Z=null,$=0,wt=0){let Ct,gt,yt,Nt,Jt,ee,It,fe,Ie,be=A.isCompressedTexture?A.mipmaps[wt]:A.image;if(K!==null)Ct=K.max.x-K.min.x,gt=K.max.y-K.min.y,yt=K.isBox3?K.max.z-K.min.z:1,Nt=K.min.x,Jt=K.min.y,ee=K.isBox3?K.min.z:0;else{let we=Math.pow(2,-$);Ct=Math.floor(be.width*we),gt=Math.floor(be.height*we),A.isDataArrayTexture?yt=be.depth:A.isData3DTexture?yt=Math.floor(be.depth*we):yt=1,Nt=0,Jt=0,ee=0}Z!==null?(It=Z.x,fe=Z.y,Ie=Z.z):(It=0,fe=0,Ie=0);let me=vt.convert(z.format),Xe=vt.convert(z.type),Et;z.isData3DTexture?(it.setTexture3D(z,0),Et=G.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(it.setTexture2DArray(z,0),Et=G.TEXTURE_2D_ARRAY):(it.setTexture2D(z,0),Et=G.TEXTURE_2D),y.activeTexture(G.TEXTURE0),y.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);let Ye=y.getParameter(G.UNPACK_ROW_LENGTH),se=y.getParameter(G.UNPACK_IMAGE_HEIGHT),Qe=y.getParameter(G.UNPACK_SKIP_PIXELS),hn=y.getParameter(G.UNPACK_SKIP_ROWS),$n=y.getParameter(G.UNPACK_SKIP_IMAGES);y.pixelStorei(G.UNPACK_ROW_LENGTH,be.width),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be.height),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Nt),y.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(G.UNPACK_SKIP_IMAGES,ee);let Un=A.isDataArrayTexture||A.isData3DTexture,de=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let we=W.get(A),mn=W.get(z),xe=W.get(we.__renderTarget),An=W.get(mn.__renderTarget);y.bindFramebuffer(G.READ_FRAMEBUFFER,xe.__webglFramebuffer),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Yn=0;Yn<yt;Yn++)Un&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.get(A).__webglTexture,$,ee+Yn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.get(z).__webglTexture,wt,Ie+Yn)),G.blitFramebuffer(Nt,Jt,Ct,gt,It,fe,Ct,gt,G.DEPTH_BUFFER_BIT,G.NEAREST);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||W.has(A)){let we=W.get(A),mn=W.get(z);y.bindFramebuffer(G.READ_FRAMEBUFFER,O),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,X);for(let xe=0;xe<yt;xe++)Un?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,we.__webglTexture,$,ee+xe):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,we.__webglTexture,$),de?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,wt,Ie+xe):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,wt),$!==0?G.blitFramebuffer(Nt,Jt,Ct,gt,It,fe,Ct,gt,G.COLOR_BUFFER_BIT,G.NEAREST):de?G.copyTexSubImage3D(Et,wt,It,fe,Ie+xe,Nt,Jt,Ct,gt):G.copyTexSubImage2D(Et,wt,It,fe,Nt,Jt,Ct,gt);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else de?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Et,wt,It,fe,Ie,Ct,gt,yt,me,Xe,be.data):z.isCompressedArrayTexture?G.compressedTexSubImage3D(Et,wt,It,fe,Ie,Ct,gt,yt,me,be.data):G.texSubImage3D(Et,wt,It,fe,Ie,Ct,gt,yt,me,Xe,be):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,It,fe,Ct,gt,me,Xe,be.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,It,fe,be.width,be.height,me,be.data):G.texSubImage2D(G.TEXTURE_2D,wt,It,fe,Ct,gt,me,Xe,be);y.pixelStorei(G.UNPACK_ROW_LENGTH,Ye),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,se),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),y.pixelStorei(G.UNPACK_SKIP_ROWS,hn),y.pixelStorei(G.UNPACK_SKIP_IMAGES,$n),wt===0&&z.generateMipmaps&&G.generateMipmap(Et),y.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){et=0,tt=0,Q=null,y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var C_=["top","side","bottom"],R_={slab_bottom:1,slab_top:1,stairs:1},yf=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function P_(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],yf[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function vf(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let T of t){if(!T||typeof T.id!="string")throw new Error("block without id");if(!Number.isInteger(T.n)||T.n<0||T.n>255)throw new Error("bad n for "+T.id);if(i[T.n])throw new Error("duplicate n "+T.n+" ("+T.id+")");if(s[T.id])throw new Error("duplicate id "+T.id);let P=T.colors||{},D=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},T);if(D.placeable=D.n!==0&&!D.liquid,D.colors={top:P.top||"#888888",side:P.side||P.top||"#888888",bottom:P.bottom||P.top||"#888888"},D.opaque=D.solid&&!D.transparent&&!D.cutout&&!R_[D.shape],D.tile={},D.tileOf&&s[D.tileOf])D.tile=Object.assign({},s[D.tileOf].tile);else if(D.n!==0){let H={};for(let B of C_){let O=D.colors[B]+"|"+(D.pattern==="grass"||D.pattern==="log"||D.pattern==="lamp"||D.pattern==="table"||D.pattern==="stele"||D.pattern==="torch"||D.pattern==="bed"||D.pattern==="snow"||D.pattern==="lantern"||D.pattern==="bookshelf"||D.pattern==="hay"||D.pattern==="barrel"||D.pattern==="chest"||D.pattern==="farmland"?B:"");H[O]===void 0&&(H[O]=r.length,r.push({block:D.id,face:B,color:D.colors[B],pattern:D.pattern,accent:D.accent||null,top:D.colors.top})),D.tile[B]=H[O]}}i[D.n]=D,s[D.id]=D}if(!s.air)throw new Error("registry needs air");for(let T of e){if(s[T.id])throw new Error("duplicate id "+T.id);s[T.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},T)}for(let T in s){let P=s[T].drops;if(P&&P!=="self"&&!s[P])throw new Error(T+" drops unknown "+P)}let o=T=>(typeof T=="number"?i[T]:s[T])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),d=new Uint8Array(256),u=new Uint8Array(256),f=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},g=new Uint8Array(256),w=new Array(256).fill(null),m=new Uint8Array(256),p=new Uint8Array(256),R=new Uint8Array(256),U=new Uint8Array(256),v=new Uint8Array(256),b=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((T,P)=>{T&&(m[P]=T.solid?1:0,p[P]=T.opaque?1:0,R[P]=T.transparent?1:0,U[P]=T.emissive?1:0,v[P]=T.liquid?1:0,a[P]=T.light!=null?T.light:T.emissive?15:0,l[P]=T.liquid?2:0,c[P]=x[T.shape]||0,d[P]=T.cutout?1:0,u[P]=+T.climbable||0,f[P]=T.plant?1:0,g[P]=T.facing|0,T.solid&&(w[P]=P_(T)),P&&(b[P]=T.tile.top,E[P]=T.tile.side,N[P]=T.tile.bottom))});let S=(n&&n.blueprints||[]).map(T=>Object.assign({kind:"blueprint"},T));return{blocks:i.filter(Boolean),items:e.map(T=>s[T.id]),blueprints:S,tiles:r,get:o,toolOf:T=>{let P=T&&s[T];return P&&P.kind==="item"&&P.tool&&typeof P.tool=="object"?P.tool:null},num:T=>{let P=s[T];if(!P||P.kind!=="block")throw new Error("no block "+T);return P.n},name:T=>{let P=o(T);return P?P.name_zh:String(T)},maxStack:T=>{let P=s[T];return P?P.maxStack:64},dropOf:T=>{let P=i[T];return!P||!P.drops?null:P.drops==="self"?P.id:P.drops},breakTime:T=>{let P=i[T];return!P||P.hardness<0?1/0:.25+P.hardness*.55},flat:{solid:m,opaque:p,trans:R,emit:U,liquid:v,tileTop:b,tileSide:E,tileBottom:N,lightEmit:a,attn:l,shape:c,cutout:d,climb:u,plant:f,facing:g,boxes:w}}}var yi=n=>Math.floor(n/16);var In=(n,t,e)=>(t*16+e)*16+n;var os=(n,t)=>n+","+t;function Xc(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=yi(n),s=yi(e);return{cx:i,cz:s,i:In(n-i*16,t,e-s*16)}}function Mf(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function qc(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,d=t,u=t+s,f=e-a,x=e+a,g=Math.floor(l),w=Math.floor(c-1e-6),m=Math.floor(d),p=Math.floor(u-1e-6),R=Math.floor(f),U=Math.floor(x-1e-6),v=!1;for(let b=m;b<=p;b++)for(let E=R;E<=U;E++)for(let N=g;N<=w;N++){let S=r(N,b,E);if(!S)continue;let T=S===!0?I_:S;for(let P of T){let D=N+P[0],H=b+P[1],B=E+P[2],O=N+P[3],X=b+P[4],et=E+P[5];if(!(O<=l+1e-6||D>=c-1e-6||X<=d+1e-6||H>=u-1e-6||et<=f+1e-6||B>=x-1e-6)){if(!o)return!0;v=!0,o.push([D,H,B,O,X,et])}}}return v}var I_=[[0,0,0,1,1,1]],zr=(n,t,e,i,s,r)=>qc(n,t,e,i,s,r,null),Sf=(n,t,e=.6,i=1.8)=>!zr(n.x,n.y,n.z,e,i,t);function bf(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,d=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,f=Math.max(1,Math.ceil(u/.3)),x=e/f,g=[];for(let w=0;w<f;w++){let m=t.y*x;m&&(g.length=0,qc(n.x,n.y+m,n.z,r,o,i,g)?(m<0?(n.y=Math.max(...g.map(p=>p[4])),c=!0):n.y=Math.min(...g.map(p=>p[1]))-o,t.y=0):n.y+=m);for(let p of["x","z"]){let R=t[p]*x;if(!R)continue;let U={x:n.x,y:n.y,z:n.z};if(U[p]+=R,g.length=0,!qc(U.x,U.y,U.z,r,o,i,g)){n[p]=U[p];continue}if(a&&(c||s.grounded)){let b=Math.max(...g.map(E=>E[4]));if(b-n.y>0&&b-n.y<=1.01&&!zr(U.x,b,U.z,r,o,i)&&!zr(n.x,b,n.z,r,o,i)){d+=b-n.y,n.y=b,n[p]=U[p];continue}}let v=p==="x"?0:2;n[p]=R>0?Math.min(...g.map(b=>b[v]))-l-1e-4:Math.max(...g.map(b=>b[v+3]))+l+1e-4,zr(n.x,n.y,n.z,r,o,i)&&(n[p]=U[p]-R),t[p]=0}}return!c&&t.y<=0&&zr(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:d}}function L_(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let d=[e+c[0],i+c[1],s+c[2]],u=[e+c[3],i+c[4],s+c[5]],f=0,x=1/0,g=-1,w=!0;for(let m=0;m<3&&w;m++){if(Math.abs(a[m])<1e-12){(o[m]<d[m]||o[m]>u[m])&&(w=!1);continue}let p=(d[m]-o[m])/a[m],R=(u[m]-o[m])/a[m];p>R&&([p,R]=[R,p]),p>f&&(f=p,g=m),R<x&&(x=R),f>x&&(w=!1)}if(w&&(!l||f<l.t)){let m=[0,0,0];g>=0&&(m[g]=-Math.sign(a[g])),l={t:f,face:g>=0?m:null}}}return l}function $c(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),d=Math.sign(t.y),u=Math.sign(t.z),f=c?Math.abs(1/t.x):1/0,x=d?Math.abs(1/t.y):1/0,g=u?Math.abs(1/t.z):1/0,w=c?(c>0?o+1-n.x:n.x-o)*f:1/0,m=d?(d>0?a+1-n.y:n.y-a)*x:1/0,p=u?(u>0?l+1-n.z:n.z-l)*g:1/0,R=[0,0,0],U=0;for(;U<=e;){let v=i(o,a,l);if(v&&s(v)){let b=r&&r(v);if(!b)return{x:o,y:a,z:l,n:v,face:R,dist:U};let E=L_(n,t,o,a,l,b);if(E&&E.t<=e)return{x:o,y:a,z:l,n:v,face:E.face||R,dist:E.t}}w<m&&w<p?(o+=c,U=w,w+=f,R=[-c,0,0]):m<p?(a+=d,U=m,m+=x,R=[0,-d,0]):(l+=u,U=p,p+=g,R=[0,0,-u])}return null}function el(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,d=1/0;for(let u=0;u<3;u++){if(Math.abs(l[u])<1e-9){if(a[u]<r[u]||a[u]>o[u])return null;continue}let f=(r[u]-a[u])/l[u],x=(o[u]-a[u])/l[u];if(f>x&&([f,x]=[x,f]),c=Math.max(c,f),d=Math.min(d,x),c>d)return null}return c}function wf(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}function U_(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Yc=(n,t)=>n?t?2:1:0;function Hs(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Zc(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}var Jc=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function nl(n){let t=U_(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function L(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Ae=n=>document.querySelector(n);function Kc(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function Tf(n,t,e,i,s,r){if(!t||!t.id)return null;let o=Kc(t,e,i,s,r),a=n.get("ke_log"),l=Array.isArray(a)?a:[];if(l.push(o),n.set("ke_log",l),t.local)return o;if(e){let u=n.get("ke_correct"),f=Array.isArray(u)?u:[];f.includes(t.id)||(f.push(t.id),n.set("ke_correct",f))}let c=n.get("ke_mistakes")||{},d=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?d&&(d.c++,d.u=s,d.c>=3&&(c[t.id]={d:1,w:d.w,t:d.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||d)&&n.set("ke_mistakes",c),o}function Ef(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],l=[];for(let x of n)e[x]&&!e[x].d?o.push(x):t.has(x)||i.has(x)?l.push(x):a.push(x);let c=x=>{for(let g=x.length-1;g>0;g--){let w=Math.floor(r()*(g+1));[x[g],x[w]]=[x[w],x[g]]}return x};[o,a,l].forEach(c);let d=[],u=(x,g)=>{for(;g-- >0&&x.length;)d.push(x.pop())},f=Math.round(s*.7);return u(o,Math.ceil(f/2)),u(a,f-d.length),u(o,f-d.length),u(l,s-d.length),u(a,s-d.length),u(o,s-d.length),d}var F_="../../",O_=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],Pf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],il=null,If=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),Cf=null;function k_(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{Tf(If(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(Cf)try{Cf(t,n)}catch{}}function B_(n,t,e){try{let i=If(),s=i.get("ke_learned")||{},r=new Set;for(let c in s)s[c]&&s[c].at&&(n.sets&&n.sets[c]||[]).forEach(d=>r.add(d));let o=n.list(t).filter(c=>c.type!=="speak").map(c=>c.id),a=Ef(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),l=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(l.length)return l}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function z_(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function V_(){return il||(il=(async()=>{for(let t of O_)await z_(F_+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw il=null,n})),il}var Rf=new Set(Pf);async function Lf(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:l=null}){n.innerHTML="",n.hidden=!1;let c=L("div",{class:"panel quiz"});n.append(c),c.append(L("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let d;try{d=await V_()}catch{c.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let u=window.KE,f=l,x=i?new Set(i.filter(v=>Rf.has(v))):Rf;if(!f)for(let v of t){let b=d.byId[v];if(b&&x.has(b.type)){f=d.get(v);break}}let g=!!f&&!l;f||(f=B_(d,{modules:s||["words","phrases","grammar","patterns"],types:i?[...x]:Pf,lv:1},1)[0]||d.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let w=u.isTyped(f);n._q=f,c.innerHTML="";let m=L("div",{class:"fb"}),p=L("div",{class:"q-body"});c.append(L("div",{class:"p-head"},L("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),L("div",{class:"q-type"},l?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(g?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":u.TYPES[f.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),L("div",{class:"q-prompt"+(f.en?" en":"")},f.prompt),f.sub?L("div",{class:"q-sub"},f.sub):null,p,m);let R=!1,U=(v,b)=>{R||(R=!0,k_(f,v,b,a),m.className="fb "+(v?"ok":"bad"),m.append(L("div",{},v?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:L("b",{class:"en"},f.answer)),!v&&f.why?L("div",{class:"why"},f.why):null,L("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(v,w,f)}},"\u7E7C\u7E8C")))};if(f.input==="type"){let v=L("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{R||!v.value.trim()||U(d.check(f,v.value).ok,v.value)};v.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&b()}),p.append(L("div",{class:"typerow"},v,L("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=L("div",{class:"opts"});(f.options||[]).forEach(b=>v.append(L("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:E=>{if(R)return;let N=d.check(f,b).ok;E.currentTarget.classList.add(N?"ok":"bad"),U(N,b)}},b))),p.append(v)}}function G_(){return new Map}function Df(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function jc(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function H_(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Nf(n){let t=G_();for(let e in n||{})t.set(e,H_(n[e]));return t}var sl=16;var Cb=18;var Vr=32;function W_(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Fe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function X_(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Ce(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function vi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}Ce(n,o)}var q_=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail","scaffold"]);function $_(n,t){let e=Fe(t.color),i=W_(X_(t.block+t.face)),s=Vr;if(q_.has(t.pattern)){Y_(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Fe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=mt(e,1.12);for(let u=0;u<4;u++)vi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=mt(e,.96);for(let u=0;u<4;u++)vi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let u=Fe(t.top);n.fillStyle=mt(u);let f=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)f.push([x,8+Math.round(i()*5)]);Ce(n,f)}if(o==="stone"||o==="bedrock")for(let u=0;u<5;u++)n.fillStyle=mt(e,i()<.5?.9:1.08),vi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let u=0;u<4;u++)n.fillStyle=mt(e,.92),vi(n,i,i()*s,i()*s,5);n.fillStyle=mt(a);for(let u=0;u<5;u++)vi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let u=0;u<26;u++)n.fillStyle=mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let u=3;u<s;u+=7)n.fillStyle=mt(e,.82),n.fillRect(u,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let u=0;u<9;u++)n.fillStyle=mt(e,i()<.5?.78:1.15),vi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.78),n.fillRect(0,u,s,1);n.fillStyle=mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=mt([185,182,174]),Ce(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Ce(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=mt(e,1.18,.72);for(let u=6;u<s;u+=10)n.fillRect(4+Math.floor(i()*10),u,10,2)}if(o==="gold"&&(n.fillStyle=mt(e,1.15),Ce(n,[[0,0],[s,0],[0,s]]),n.fillStyle=mt(e,.9),Ce(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=mt(Fe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=mt(Fe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=mt(Fe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=mt(a),n.fillRect(14,0,4,4)):(n.fillStyle=mt(Fe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=mt(a),n.fillRect(0,0,s,10),n.fillStyle=mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=mt(Fe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=mt(a),n.fillRect(0,0,9,14))),o==="wool")for(let u=0;u<7;u++)n.fillStyle=mt(e,i()<.5?.94:1.04),vi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=mt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=mt(a,1.3),Ce(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=mt(Fe("#EFEBDD"),1,.8),Ce(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=mt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let u=8;u<s;u+=9)n.fillStyle=mt(e,.9),n.fillRect(0,u,s,2);if(o==="cactus")if(t.face==="side"){for(let u=4;u<s;u+=8)n.fillStyle=mt(e,.82),n.fillRect(u,0,2,s);n.fillStyle=mt(Fe("#EFEBDD"),1,.7);for(let u=0;u<6;u++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=mt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=mt(e,1.25);for(let u of[9,24])n.fillRect(0,u,s,3)}else n.fillStyle=mt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Ce(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Ce(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=mt(e,1.1),Ce(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=mt(e,.92),Ce(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=mt(e,.78);for(let u=0;u<s;u+=8){n.fillRect(0,u+7,s,1);let f=u/8%2?0:8;for(let x=f;x<s;x+=16)n.fillRect(x,u,1,8)}}if(o==="mossy"){n.fillStyle=mt(a);for(let u=0;u<6;u++)vi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=mt(e,.6),Ce(n,[[4,2],[12,14],[10,15],[3,4]]),Ce(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=mt(e,1.08),Ce(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=mt(Fe("#D9CBB5"));for(let u=0;u<s;u+=8){n.fillRect(0,u+6,s,2);let f=u/8%2?0:8;for(let x=f;x<s;x+=16)n.fillRect(x,u,2,6)}}if(o==="checker"&&(n.fillStyle=mt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let u=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let f of[3,18]){let x=3;for(;x<s-4;){let g=3+Math.floor(i()*3);n.fillStyle=u[Math.floor(i()*u.length)],n.fillRect(x,f+Math.floor(i()*3),g,11),x+=g+1}}n.fillStyle=mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.8),n.fillRect(0,u,s,1);if(o==="hay")if(t.face==="side"){for(let u=3;u<s;u+=5)n.fillStyle=mt(e,.88),n.fillRect(u,0,1,s);n.fillStyle=mt(Fe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let u=5;u<s;u+=6)n.fillStyle=mt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=mt(Fe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Ce(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=mt(Fe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=mt(Fe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=mt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=mt(e),n.fillRect(0,0,s,s),n.fillStyle=mt(Fe("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let u=7;u<s;u+=8)n.fillStyle=mt(e,.85),n.fillRect(0,u,s,1);t.face==="side"&&(n.fillStyle=mt(a),n.fillRect(0,11,s,3),n.fillStyle=mt(Fe("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let u=3;u<s;u+=6)n.fillStyle=mt(e,.72),n.fillRect(0,u,s,2);if(o==="furnace"){for(let u=0;u<4;u++)n.fillStyle=mt(e,i()<.5?.9:1.08),vi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=mt(a),n.fillRect(8,15,s-16,11),n.fillStyle=mt(Fe("#E0352B"),1,.85),Ce(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=mt(a),Ce(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let u=0;u<c.length;u+=4){let f=1+(i()-.5)*.09;c[u]=Math.min(255,c[u]*f),c[u+1]=Math.min(255,c[u+1]*f),c[u+2]=Math.min(255,c[u+2]*f)}n.putImageData(l,0,0);let d=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=d,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Ff(n){let t=document.createElement("canvas");t.width=t.height=Vr*sl;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Vr;let a=o.getContext("2d",{willReadFrequently:!0});$_(a,s),e.drawImage(o,r%sl*Vr,Math.floor(r/sl)*Vr),i[r]=o}),{canvas:t,tileCanvas:i}}function Y_(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Fe(t.accent):e,a=(l,c,d)=>{n.fillStyle=d,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,mt(e)),n.fillStyle=mt(e,1.1),Ce(n,[[16,26],[9,20],[15,22]]),Ce(n,[[17,24],[24,18],[18,21]]),n.fillStyle=mt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;Ce(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=mt(Fe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),d=14+Math.floor(i()*14);n.fillStyle=mt(e,i()<.5?.9:1.1),Ce(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-d]])}else if(r==="deadbush")n.strokeStyle=mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=mt(e),n.fillRect(14,18,4,14),n.fillStyle=mt(o),Ce(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=mt(Fe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=mt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="scaffold")n.fillStyle=mt(e,.82),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),n.fillStyle=mt(e),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillStyle=mt(e,1.1),Ce(n,[[3,s-6],[s-6,3],[s-3,6],[6,s-3]]);else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let d=0;d<5;d++){let u=5+d*5;n.fillStyle=mt(e),n.fillRect(u,s-c,2,c),l===3&&(n.fillStyle=mt(o),Ce(n,[[u-2,s-c+9],[u+1,s-c-1],[u+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let d=mt(Fe("#8C6640")),u=mt(e),f=s*.33,x=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=d;for(let g=2;g<s;g+=6)n.fillRect(4,g,s-8,3);n.fillStyle=u,n.fillRect(f-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=d,n.lineWidth=3;for(let g=0;g<5;g++){let w=Math.PI/2+(g+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(w)*(s-x-4),Math.sin(w)*(s-x-4)),n.lineTo(s+Math.cos(w)*(s-f+4),Math.sin(w)*(s-f+4)),n.stroke()}n.strokeStyle=u;for(let g of[s-f,s-x])n.beginPath(),n.arc(s,0,g,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var Of=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,kf=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function Z_(n,t){let e=yi(n),i=yi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,d=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,d)<=14&&s.push([e+o,i+r])}return s}function zf(n){let t=new Cn(n);t.magFilter=ze,t.minFilter=ze,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new J(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new sn({uniforms:e,vertexShader:Of,fragmentShader:kf}),s=new sn({uniforms:e,vertexShader:Of,fragmentShader:kf,transparent:!0,depthWrite:!1,side:Rn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Bf(n){let t=new vn;return t.setAttribute("position",new Ge(n.pos,3)),t.setAttribute("uv",new Ge(n.uv,2)),t.setAttribute("light",new Ge(n.light,1)),t.setAttribute("lt",new Ge(n.lt,2,!0)),t.setIndex(new Ge(n.index,1)),t.computeBoundingSphere(),t}var rl=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=os(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new De(Bf(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new De(Bf(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=yi(t),s=yi(e),r=Mf(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=os(l.cx,l.cz);if(this.chunks.has(c))continue;let d={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,d),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:d.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let d=c.cx-i,u=c.cz-s;if(d*d+u*u>o*o){for(let f of["o","t"])c[f]&&(this.scene.remove(c[f]),c[f].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,d]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(d-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(os(yi(t),yi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Xc(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(os(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Xc(t,e,i);if(!r)return!1;let o=os(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,Df(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[d,u]of Z_(l,c))this.dirtyMesh.add(os(d,u));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var oi={};function Ws(n){return oi[n]||(oi[n]=new Mn({color:n,transparent:!0}),oi[n].userData.base=new $t(n)),oi[n]}var Gr=null;function J_(){if(Gr)return Gr;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Gr=new Cn(n),Gr.colorSpace=Be,Gr}function Vf(n,t){let e=new un,i=n.colors,[s,r]=n.size,o=(l,c,d,u,f,x,g,w)=>{let m=new De(new dn(l,c,d),w||Ws(u));return m.position.set(f,x,g),e.add(m),m},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let d=o(.2,.6,.22,i.leg,c,.6,0);d.geometry.translate(0,-.6/2,0),a.push(d)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);oi.__face||(oi.__face=new Mn({map:J_(),transparent:!0}),oi.__face.userData.base=new $t("#ffffff"));let c=[Ws(i.head),Ws(i.head),Ws(i.head),Ws(i.head),Ws(i.head),oi.__face],d=new De(new dn(s*.9,s*.8,s*.8),c);d.position.set(0,r*.72+s*.4,0),e.add(d),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=r<1&&n.id!=="chicken",c=n.id==="chicken"?.25:l?r*.35:.45,d=r-c-(n.id==="chicken"?.15:.25);o(s,d,n.id==="chicken"?s:s*1.35,i.body,0,c+d/2,0),i.patch&&o(s*.5,d*.55,.02+s*1.36,i.patch,s*.12,c+d*.55,0);let u=n.id==="chicken"?.3:l?.32:.45,f=o(u,u,u,i.head,0,c+d+u*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let m of[-u*.3,u*.3])o(u*.26,u*.3,u*.16,i.ear,m,f.position.y+u*.6,f.position.z);if(i.eye)for(let m of[-u*.24,u*.24])o(u*.24,u*.26,.02,i.eye,m,f.position.y+u*.05,f.position.z-u/2-.01);if(n.pet){let m=o(.08,.08,.32,i.body,0,c+d*.85,s*.68+.12);m.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,f.position.y+u/2+.05,f.position.z),o(.12,.06,.12,"#D9A63A",0,f.position.y-.02,f.position.z-u/2-.05));let x=n.id==="chicken"?.06:.18,g=n.id==="chicken"?0:s*.45,w=s*.3;for(let[m,p]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-w,-g],[w,-g],[-w,g],[w,g]]){let R=o(x,c,x,i.leg,m,c/2,p);R.geometry.translate(0,-c/2,0),R.position.y=c,a.push(R)}}return e.userData.legs=a,e}function Gf(n){for(let t in oi){let e=oi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Hf(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Je=null,Xs=null,Qc=null;var ai=()=>window.HIAudio||null,Xf=()=>ai()?ai().get():{muted:!1,music:.35,sfx:.7};function ol(){try{ai()&&ai().unlock()}catch{}if(!Je){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Je=new n,Xs=Je.createGain(),Xs.connect(Je.destination),Qc=Je.createBuffer(1,Je.sampleRate,Je.sampleRate);let t=Qc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Je.state==="suspended"&&Je.resume(),th()}function th(){if(Xs){let n=Xf();Xs.gain.setTargetAtTime(n.muted?0:n.sfx,Je.currentTime,.03)}}var al=()=>Xf().muted;function qf(){return ai()&&ai().toggle(),th(),al()}function eh(n){ai()&&ai().set(n),th()}function $f(n){try{ai()&&ai().scene(n)}catch{}}function Yf(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Ln(n,t,e,i,s,r,o){let a=Je.createOscillator(),l=Je.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),Yf(l,e,i,s,r),a.connect(l),l.connect(Xs),a.start(e),a.stop(e+i+r+.05)}function Gi(n,t,e,i,s,r=1){let o=Je.createBufferSource(),a=Je.createBiquadFilter(),l=Je.createGain();o.buffer=Qc,a.type=n,a.frequency.value=t,a.Q.value=r,Yf(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Xs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Wf={wood:(n,t)=>{Ln("sine",190*t,n,.003,.16,.12,95*t),Gi("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Gi("highpass",1800*t,n,.1,.06),Ln("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Gi("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Ln("sine",1900*t,n,.002,.08,.25,1500*t),Gi("highpass",4200,n,.06,.12)},soft:(n,t)=>{Gi("bandpass",850*t,n,.09,.1,.8)}};function Ke(n,t="soft"){if(!Je||al())return;let e=Je.currentTime+.005,i=Wf[t]||Wf.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Gi(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Ln("sine",880,e,.002,.07,.08,1320);break;case"chest":Ln("triangle",160,e,.02,.07,.3,120),Ln("sine",330,e+.12,.005,.05,.15);break;case"door":Ln("sawtooth",120,e,.03,.04,.3,160),Gi("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Gi("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Ln("triangle",659,e,.005,.08,.15),Ln("triangle",988,e+.1,.005,.08,.25);break;case"coin":Ln("sine",1319,e,.002,.08,.08),Ln("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Ln("triangle",300,e,.005,.1,.18,200);break;default:break}}var Hi=(n,t,e,i=0)=>t>=n[0]-i&&t<=n[2]+i&&e>=n[1]-i&&e<=n[3]+i,Zf=(n,t)=>{let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296};function Q_(n,t,e,i){let s=new Map,r=t.GY,o=n.x+n.w-1,a=n.z+n.d-1,l=(g,w,m,p)=>s.set(g+","+w+","+m,p),c=i?"s2n":n.door,d=i?1:n.doorW||2,u=i?"n":c,f=u==="n"||u==="s"?n.x+(n.w>>1):n.z+(n.d>>1),x=(g,w)=>{let m=u==="n"||u==="s"?g:w,p=f-(d>>1);return m<p||m>=p+d?!1:u==="n"&&w===n.z||u==="s"&&w===a||u==="w"&&g===n.x||u==="e"&&g===o};for(let g=n.x;g<=o;g++)for(let w=n.z;w<=a;w++){let m=g===n.x||g===o||w===n.z||w===a,p=(g===n.x||g===o)&&(w===n.z||w===a);l(g,r,w,e(n.floor||"planks")),l(g,r+n.h+1,w,e(n.roof));for(let R=r+1;R<=r+n.h;R++){if(!m){l(g,R,w,0);continue}if(x(g,w)&&R<=r+2){l(g,R,w,i?e("door"):0);continue}let U=g===n.x||g===o?w-n.z:g-n.x,v=!p&&R===r+2&&U%3===1&&!x((g===n.x||g===o,g),w)&&n.h>=4;l(g,R,w,e(v?"glass":n.wall))}}for(let[g,w,m,p]of n.props||[])l(n.x+w,r+1+m,n.z+p,e(g));return s}function Jf(n,t){let e=v=>n.num(v),i=t.GY,s=t.sidewalk,r=t.bound,o=t.homes.map(v=>Object.assign({floor:"planks",door:"n",isHome:!0},v)),a=t.buildings.concat(o),l=a.map(v=>({b:v,arr:[...Q_(v,t,e,!!v.isHome)].map(([b,E])=>b.split(",").map(Number).concat(E))})),c=new Set;for(let v of a){let b=v.isHome?"n":v.door,E=v.x+v.w-1,N=v.z+v.d-1,S=v.x+(v.w>>1),T=v.z+(v.d>>1),P={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]}[b],D=b==="w"?v.x-1:b==="e"?E+1:S,H=b==="n"?v.z-1:b==="s"?N+1:T;for(let B=0;B<14&&!t.roads.some(O=>Hi(O,D,H,s));B++){for(let O of[-1,0,1])c.add((P[0]?D:D+O)+","+(P[0]?H+O:H));D+=P[0],H+=P[1]}}let d=t.park,u=d.pond,f=(v,b)=>v>=d.x&&v<d.x+d.w&&b>=d.z&&b<d.z+d.d,x=new Set;for(let v of t.roads){let b=v[2]-v[0]>v[3]-v[1];for(let E=b?v[0]:v[1];E<=(b?v[2]:v[3]);E+=12)for(let N of[-1,1]){let S=b?E:N<0?v[0]-s:v[2]+s,T=b?N<0?v[1]-s:v[3]+s:E;t.roads.some(P=>P!==v&&Hi(P,S,T,s+2))||[-1,0,1].some(P=>[-1,0,1].some(D=>c.has(S+P+","+(T+D))))||x.add(S+","+T)}}let g=(v,b)=>{for(let E of t.roads)if(Hi(E,v,b)){let N=E[2]-E[0]>E[3]-E[1];return t.roads.find(P=>P!==E&&Hi(P,v,b,5)&&!Hi(P,v,b))?(N?v:b)&1?e("crossing"):e("road"):t.roads.some(P=>P!==E&&Hi(P,v,b))?e("road"):(N?b===Math.round((E[1]+E[3])/2):v===Math.round((E[0]+E[2])/2))&&((N?v:b)%4+4)%4<2?e("road_line"):e("road")}return t.roads.some(E=>Hi(E,v,b,s))||c.has(v+","+b)?e("sidewalk"):f(v,b)&&v>=u[0]&&v<=u[2]&&b>=u[1]&&b<=u[3]?e("water"):e("grass")},w=new Set(d.trees.map(([v,b])=>v+","+b));for(let v=-r+2;v<=r-2;v+=6)for(let[b,E]of[[v,-r+1],[v,r-1],[-r+1,v],[r-1,v]])t.roads.some(N=>Hi(N,b,E,s+1))||w.add(b+","+E);let m=t.secrets||{rooms:[]},p=(m.board?m.board.ops:[]).concat(...m.rooms.map(v=>v.ops));function R(v,b){let E=new Uint8Array(16384),N=v*16,S=b*16,T=(P,D,H,B)=>{D>0&&D<64&&(E[In(P,D,H)]=B)};for(let P=0;P<16;P++)for(let D=0;D<16;D++){let H=N+D,B=S+P;E[In(D,0,P)]=e("bedrock");for(let X=1;X<i-3;X++)E[In(D,X,P)]=e("stone");for(let X=i-3;X<i;X++)E[In(D,X,P)]=e("dirt");let O=g(H,B);if(E[In(D,i,P)]=O,O===e("water")){E[In(D,i-1,P)]=e("sand");continue}if(Math.abs(H)>r||Math.abs(B)>r){T(D,i+1,P,e("hedge")),T(D,i+2,P,e("hedge"));continue}if(x.has(H+","+B)){for(let X=i+1;X<=i+3;X++)T(D,X,P,e("lamp_pole"));T(D,i+4,P,e("lantern"));continue}if(w.has(H+","+B)){for(let X=i+1;X<=i+3;X++)T(D,X,P,e("log"));continue}O===e("grass")&&f(H,B)&&Zf(H,B)<.06&&T(D,i+1,P,e(["flower_rose","flower_dandelion","flower_cornflower","tallgrass"][Math.floor(Zf(B,H)*4)]))}for(let P of w){let[D,H]=P.split(",").map(Number);for(let B=-2;B<=2;B++)for(let O=-2;O<=2;O++)for(let X=3;X<=5;X++){if(Math.abs(B)+Math.abs(O)>(X===5?1:3))continue;let et=D+B-N,tt=H+O-S;et<0||et>=16||tt<0||tt>=16||B===0&&O===0&&X===3||T(et,i+X+1,tt,e("leaves"))}}for(let{b:P,arr:D}of l)if(!(P.x>N+16-1||P.x+P.w-1<N||P.z>S+16-1||P.z+P.d-1<S))for(let[H,B,O,X]of D){let et=H-N,tt=O-S;et>=0&&et<16&&tt>=0&&tt<16&&T(et,B,tt,X)}for(let[P,D,H,B,O,X=H,et=B,tt=O]of p){if(X<N||H>N+16-1||tt<S||O>S+16-1)continue;let Q=D==="air"?0:e(D);for(let j=Math.max(H,N);j<=Math.min(X,N+16-1);j++)for(let at=Math.max(O,S);at<=Math.min(tt,S+16-1);at++)for(let ft=B;ft<=et;ft++){let Ut=j===H||j===X||ft===B||ft===et||at===O||at===tt;T(j-N,ft,at-S,P==="hollow"&&!Ut?0:Q)}}for(let[P,D,H]of d.benches){let B=P-N,O=D-S;B>=0&&B<16&&O>=0&&O<16&&T(B,i+1,O,e("stairs_planks"+["","_e","_s","_w"][H]))}for(let[P,D,H,B]of t.cars)for(let O=0;O<4;O++)for(let X=0;X<2;X++){let et=P+(B==="x"?O:X),tt=D+(B==="x"?X:O),Q=et-N,j=tt-S;Q<0||Q>=16||j<0||j>=16||(T(Q,i+1,j,e(H)),T(Q,i+2,j,e(O===1||O===2?"glass":H)))}return E}let U={x:t.spawn[0],y:i+1,z:t.spawn[1],stele:{x:0,y:i+1,z:0}};return{genChunk:R,findSpawn:()=>U,height:()=>i,baseHeight:()=>i,biomeOf:()=>"town",villages:{around:()=>[]},homes:o,buildings:t.buildings,GY:i}}function Kf(n,t,e,i,s){return n?t>n.x&&t<n.x+n.w-1&&i>n.z&&i<n.z+n.d-1&&e>=s+1&&e<=s+n.h:!1}function jf(n,t,e){let i=[];for(let s=n.x;s<n.x+n.w;s++)for(let r=n.z;r<n.z+n.d;r++)for(let o=t+1;o<=t+n.h;o++)(s===n.x||s===n.x+n.w-1||r===n.z||r===n.z+n.d-1)&&e(s,o,r)&&i.push([s,o,r]);return i}var nh=18;function Hr(n,t,e=1){let i=t+n.h+1;return{slab:i,roof:e===2?i+n.h+1:i,ladder:[n.x+1,n.z+n.d-2],h:e===2?n.h*2+1:n.h}}function Qf(n,t,e={}){let i=e.floors===2?2:1,s=e.theme||"none",r=Hr(n,t,i),o=[],a=(m,p,R,U)=>o.push([m,p,R,U]),l=n.x+n.w-1,c=n.z+n.d-1,d=n.x+(n.w>>1),u=d,f=n.z+(n.d>>1),x=(m,p)=>s==="castle"?"stone_bricks":s==="tree"?p?"log":"planks":s==="lighthouse"?(m-t)%4<2?"wool":"wool_red":e.wall||n.wall,g={castle:"stone_bricks",tree:"leaves",lighthouse:"wool_red"}[s]||n.roof;for(let m=n.x;m<=l;m++)for(let p=n.z;p<=c;p++){let R=m===n.x||m===l||p===n.z||p===c,U=(m===n.x||m===l)&&(p===n.z||p===c),v=m===n.x||m===l?p-n.z:m-n.x,b=m===r.ladder[0]&&p===r.ladder[1];for(let E=t+1;E<=t+nh;E++)if(E>r.roof)a(m,E,p,"air");else if(E===r.roof)a(m,E,p,g);else if(R){if(m===d&&p===n.z&&E<=t+2)continue;let N=(E-t-1)%(n.h+1);a(m,E,p,!U&&N===1&&v%3===1&&n.h>=4?"glass":x(E,U))}else i===2&&E===r.slab?a(m,E,p,b?"air":"planks"):i===2&&b&&E<r.slab&&a(m,E,p,"ladder")}let w=r.roof;if(s==="tree")for(let m=n.x-1;m<=l+1;m++)for(let p=n.z-1;p<=c+1;p++){let R=Math.max(n.x-m,m-l,0),U=Math.max(n.z-p,p-c,0),v=Math.min(m-n.x,l-m,p-n.z,c-p);R||U||(v>=1&&a(m,w+1,p,"leaves"),v>=2&&a(m,w+2,p,"leaves"))}if(s==="lighthouse")for(let m=u-1;m<=u+1;m++)for(let p=f-1;p<=f+1;p++){let R=m!==u||p!==f;for(let U=w+1;U<=w+3;U++)a(m,U,p,(U-w)%2?"wool":"wool_red");a(m,w+4,p,R?"glass":"lantern"),a(m,w+5,p,"wool_red")}if(s==="castle")for(let m=n.x;m<=l;m++)for(let p=n.z;p<=c;p++){let R=m===n.x||m===l||p===n.z||p===c,U=(m===n.x||m===l)&&(p===n.z||p===c),v=m===n.x||m===l?p-n.z:m-n.x;U?(a(m,w+1,p,"stone_bricks"),a(m,w+2,p,"stone_bricks"),a(m,w+3,p,"stone_bricks")):R&&v%2===0&&a(m,w+1,p,"stone_bricks")}return o}function td(n,t=Math.random){let e=i=>{let s=i.slice();for(let r=s.length-1;r>0;r--){let o=Math.floor(t()*(r+1));[s[r],s[o]]=[s[o],s[r]]}return s};return{d:n,turn:0,tries:0,coins:0,right:0,phase:"talk",cards:n.turns.map(i=>e(i.cards)),check:e(n.check.options.map((i,s)=>({zh:i,ok:s===n.check.answer})))}}function ed(n,t){if(n.phase!=="talk")return{ok:!1};let e=n.cards[n.turn][t];if(!e)return{ok:!1};if(!e.ok)return n.tries++,{ok:!1,card:e};let i=n.tries===0;return i&&(n.coins++,n.right++),n.turn++,n.tries=0,n.turn>=n.d.turns.length&&(n.phase="check"),{ok:!0,first:i,card:e,next:n.phase}}function nd(n,t){if(n.phase!=="check")return{ok:!1};let e=n.check[t];return n.phase="done",e&&e.ok&&(n.coins+=2),{ok:!!(e&&e.ok),coins:n.coins}}function id(n,t,e=1.2){if(n.wait>0){n.wait-=t,n.v={x:0,y:0,z:0};return}let i=n.route,s=i[n.ri%i.length],r=s[0]+.5-n.p.x,o=s[1]+.5-n.p.z,a=Math.hypot(r,o);if(a<.15){n.ri=(n.ri+1)%i.length,n.wait=s[2]?0:1.5;return}let l=Math.min(a,e*t);n.p.x+=r/a*l,n.p.z+=o/a*l,n.yaw=Math.atan2(-r,-o),n.v={x:r/a*e,y:0,z:o/a*e}}var Xn={skin:["#F3D6B8","#E7CDA6","#C99A6B","#8C5A3A","#5C3A24"],hair:["short","long","bun","spiky","none"],hairColor:["#151714","#5C3A24","#C9904F","#D9B860","#C2443A"],top:["#2F5A34","#3F6E9A","#C2443A","#D9A63A","#C9709F","#EFEBDD","stripe","star"],bottom:["#26302A","#3F6E9A","#8C6640","#5E6660"],hat:["none","cap","beanie","bow","flower","tophat","crown"],glasses:[!1,!0],acc:["none","scarf","goldbadge","backpack","cape"]},ty=()=>({skin:1,hair:0,hairColor:0,top:0,bottom:0,hat:0,glasses:0,acc:0});function ll(n){let t=ty();for(let e in t){let i=n&&Number.isInteger(n[e])?n[e]:t[e];t[e]=Math.max(0,Math.min(Xn[e].length-1,i))}return t}var sd=n=>({skin:Xn.skin[n.skin],hair:Xn.hair[n.hair],hairColor:Xn.hairColor[n.hairColor],top:Xn.top[n.top],bottom:Xn.bottom[n.bottom],hat:Xn.hat[n.hat],glasses:Xn.glasses[n.glasses],acc:Xn.acc[n.acc]}),rd=(n,t,e,i)=>{let s=n[e+":"+i];return!!s&&!t.has(s)},od=n=>Object.fromEntries(n.items.filter(t=>t.slot).map(t=>[t.slot+":"+t.value,t.id]));function ad(n,t,{coins:e=0,hasHome:i=!1}={}){return n?t.has(n.id)?{ok:!1,reason:"owned"}:n.needHome&&!i?{ok:!1,reason:"home"}:e<n.price?{ok:!1,reason:"coins",short:n.price-e}:{ok:!0}:{ok:!1,reason:"missing"}}var ld=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var qs=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},cd=n=>(/^[aeiou]/i.test(n)?"an ":"a ")+n,ih=n=>n.charAt(0).toUpperCase()+n.slice(1),sh=n=>String(n??"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim(),ny=(n,t)=>!!sh(t)&&[n.a].concat(n.alts||[]).some(e=>sh(e)===sh(t)),hd=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],iy=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function Wi(n){return n>=100?"one hundred"+(n%100?" and "+Wi(n%100):""):n<20?hd[n]:iy[Math.floor(n/10)]+(n%10?"-"+hd[n%10]:"")}function ud(n,t=Math.random){return{job:n,i:0,right:0,answers:[],qs:n.exam.map(e=>e.type==="typed"?{...e}:{...e,cards:qs(e.opts.map((i,s)=>({t:i,ok:s===e.a})),t)}),done:!1}}function fd(n,t){if(n.done)return null;let e=n.qs[n.i],i=e.type==="typed",s=i?ny(e,t):!!(e.cards[t]&&e.cards[t].ok);return n.answers.push(s),s&&n.right++,n.i++,n.i>=n.qs.length&&(n.done=!0),{ok:s,typed:i,answer:i?e.a:e.opts[e.a],text:i?String(t):(e.cards[t]||{}).t}}var dd=n=>n.done&&n.right>=8;function pd(n,t=Math.random){let e=n.task,i=(o,a)=>qs(o,t).slice(0,a),s=(o,a)=>({t:o,ok:a});if(e.kind==="go"){let o=i(e.calls,1)[0];return{kind:"go",to:o.to,en:o.en,zh:o.zh,pay:e.pay||5,tries:0}}let r;return e.kind==="cases"?r=i(e.cases,3).map(o=>({en:`${e.who}: "${o.says}"`,zh:o.zh,cards:qs([s(o.a,!0),...o.wrong.map(a=>s(a,!1))],t)})):e.kind==="judge"?r=i(e.items,3).map(o=>{let a=i(e.students,1)[0],l="That's right! Good job.",c=u=>`Almost! Say: "${u}"`,d=o.ok?[s(l,!0),s(c(o.wrong[0]),!1),s(c(o.wrong[1]||o.wrong[0]),!1)]:[s(c(o.fix),!0),s(l,!1),s(c(o.wrong[0]),!1)];return{en:`${a} says: "${o.says}"`,zh:"\u9019\u53E5\u8A71\u5C0D\u4E0D\u5C0D\uFF1F\u9078\u8001\u5E2B\u8981\u8AAA\u7684\u8A71\u3002",cards:qs(d,t)}}):e.kind==="change"?r=i(e.items,3).map(o=>{let a=o.price<50&&t()<.5?50:100,l=a-o.price,c=[l+10,l-5,l+5,o.price,l-10].filter(u=>u>0&&u!==l&&u<200),d=[...new Set(c)].slice(0,2);return{en:`${ih(cd(o.en))} is ${Wi(o.price)} dollars. The customer gives you ${Wi(a)} dollars. How much change do you give?`,zh:`${o.zh} ${o.price} \u5143\uFF0C\u5BA2\u4EBA\u7D66 ${a} \u5143\uFF0C\u8981\u627E\u591A\u5C11\u9322\uFF1F`,cards:qs([s(ih(Wi(l))+" dollars.",!0),...d.map(u=>s(ih(Wi(u))+" dollars.",!1))],t),change:l}}):e.kind==="order"&&(r=Array.from({length:3},()=>{let[o,a]=i(e.foods,2),l=1+Math.floor(t()*3),c=1+Math.floor(t()*3),d=(g,w)=>w===1?cd(g.sg):Wi(w)+" "+g.pl,u=(g,w,m,p)=>g.icon.repeat(w)+" \uFF0B "+m.icon.repeat(p),f=i(e.foods.filter(g=>g!==o&&g!==a),1)[0],x=[l===c?u(o,l%3+1,a,c):u(o,c,a,l),u(o,l,f,c)];return{en:`Customer: "I'd like ${d(o,l)} and ${d(a,c)}, please."`,zh:"\u5BA2\u4EBA\u9EDE\u4E86\u4EC0\u9EBC\uFF1F\u9078\u5C0D\u7684\u9910\u76E4\u3002",cards:qs([s(u(o,l,a,c),!0),...x.map(g=>s(g,!1))],t)}})),{kind:"quiz",i:0,right:0,qs:r,coins:0}}function md(n,t){if(n.kind!=="quiz"||n.i>=n.qs.length)return null;let e=n.qs[n.i],i=e.cards[t];if(!i)return null;let s=!!i.ok;return s&&(n.right++,n.coins+=2),n.i++,{ok:s,answer:e.cards.find(r=>r.ok).t,text:i.t,done:n.i>=n.qs.length}}var gd=n=>({lic:Object.assign({},n&&n.lic),wear:n&&n.wear||null,done:Object.assign({},n&&n.done)});var ry=[["Can you say this in English?","\u4F60\u6703\u7528\u82F1\u6587\u8AAA\u9019\u53E5\u55CE\uFF1F"],["How do you say this in English?","\u9019\u53E5\u82F1\u6587\u600E\u9EBC\u8AAA\uFF1F"],["Your turn! Say it in English.","\u63DB\u4F60\u4E86\uFF01\u7528\u82F1\u6587\u8AAA\u8AAA\u770B\u3002"]],rh=(n,t)=>n[Math.floor(t()*n.length)],Wr=n=>typeof n=="string"&&/^[A-Z0-9"]/.test(n)&&/[.!?]$/.test(n);function oy(n,t,{learned:e={},mistakes:i={}}={}){let s=(n==="pattern"?"p:":"ph:")+t+":";for(let o in i)if(o.startsWith(s)&&i[o]&&!i[o].d)return 0;let r=e[n+":"+t];return r&&r.at?2:1}function ay(n,t){if(!n)return[];let e=new Map((t.patterns||[]).map(s=>[s.id,s])),i=new Map((t.phrases||[]).map(s=>[s.id,s]));return(n.patterns||[]).filter(s=>e.has(s)).map(s=>({kind:"pattern",id:s,item:e.get(s)})).concat((n.phrases||[]).filter(s=>i.has(s)).map(s=>({kind:"phrase",id:s,item:i.get(s)})))}function xd(n,t,e={},i=Math.random){let s=ay(n,t);if(!s.length)return null;let r=[[],[],[]];for(let a of s)r[oy(a.kind,a.id,e)].push(a);let o=r.find(a=>a.length);for(let a=0;a<6;a++){let l=rh(o,i),c,d;if(l.kind==="pattern"){let g=(l.item.ex||[]).concat(l.item.extra||[]).filter(w=>Wr(w.en)&&w.zh);if(c=rh((l.item.ex||[]).filter(w=>Wr(w.en)&&w.zh),i),!c)continue;d=g.filter(w=>w.en!==c.en&&w.zh!==c.zh).map(w=>w.en)}else{if(!Wr(l.item.ex)||!l.item.exZh)continue;c={en:l.item.ex,zh:l.item.exZh},d=s.filter(g=>g.kind==="phrase"&&g.id!==l.id&&Wr(g.item.ex)).map(g=>g.item.ex),d.length<2&&(d=d.concat((t.phrases||[]).filter(g=>g.tag===l.item.tag&&g.id!==l.id&&Wr(g.ex)).map(g=>g.ex)))}let u=[...new Set(d.filter(g=>g!==c.en))].sort(()=>i()-.5).slice(0,2);if(u.length<2)continue;let[f,x]=rh(ry,i);return{npc:f,zh:x,say:c.zh,cards:[{en:c.en,ok:!0}].concat(u.map(g=>({en:g,ok:!1}))),src:l.kind+":"+l.id}}return null}function oh(n,t=null){let e=sd(n),i=new un,s=[],r={stripe:"#EFEBDD",star:"#2B3F5C"},o=r[e.top]?e.top:null;o&&(e.top=r[o]),t&&(e.top=t.top||e.top,t.hat&&t.hat!=="none"&&(e.hat="none"));let a=(x,g,w,m,p,R,U,v=i)=>{let b=new Mn({color:m});b.userData.base=new $t(m),s.push(b);let E=new De(new dn(x,g,w),b);return E.position.set(p,R,U),v.add(E),E},l=(x,g,w,m,p,R)=>{let U=a(x,g,w,m,p,R,0);return U.geometry.translate(0,-g/2+.05,0),U.position.y+=g/2-.05,U},c=l(.24,.75,.26,e.bottom,-.14,.375),d=l(.24,.75,.26,e.bottom,.14,.375);if(a(.56,.7,.3,e.top,0,1.1,0),o==="stripe"&&!t)for(let x of[.86,1.06,1.26])a(.57,.08,.31,"#C2443A",0,x,0);o==="star"&&!t&&(a(.22,.07,.02,"#F2C46B",0,1.16,-.16),a(.07,.22,.02,"#F2C46B",0,1.16,-.16),a(.14,.14,.02,"#F2C46B",0,1.16,-.158));let u=l(.18,.66,.2,e.top,-.38,1.12),f=l(.18,.66,.2,e.top,.38,1.12);if(a(.12,.14,.18,e.skin,-.38,.84,0),a(.12,.14,.18,e.skin,.38,.84,0),a(.5,.48,.46,e.skin,0,1.7,0),a(.08,.08,.02,"#151714",-.11,1.74,-.235),a(.08,.08,.02,"#151714",.11,1.74,-.235),a(.14,.04,.02,"#C2443A",0,1.6,-.235),e.hair==="short"&&a(.54,.16,.5,e.hairColor,0,1.97,.02),e.hair==="long"&&(a(.54,.16,.5,e.hairColor,0,1.97,.02),a(.54,.5,.12,e.hairColor,0,1.7,.25)),e.hair==="bun"&&(a(.54,.14,.5,e.hairColor,0,1.96,.02),a(.22,.2,.22,e.hairColor,0,2.12,.12)),e.hair==="spiky")for(let x of[-.18,0,.18])a(.14,.24,.4,e.hairColor,x,2.02,.02);if(e.hat==="cap"&&(a(.56,.14,.52,"#C2443A",0,2.03,.02),a(.4,.04,.2,"#C2443A",0,1.97,-.32)),e.hat==="beanie"&&a(.56,.24,.52,"#3F6E9A",0,2.06,.02),e.hat==="bow"&&(a(.2,.14,.06,"#C9709F",-.12,2.02,-.1),a(.2,.14,.06,"#C9709F",.12,2.02,-.1)),e.hat==="flower"&&["#C2443A","#F2C46B","#C9709F","#EFEBDD","#3F6E9A","#F2C46B"].forEach((x,g)=>{let w=g/6*Math.PI*2;a(.12,.1,.12,x,Math.sin(w)*.24,1.99,Math.cos(w)*.22)}),e.hat==="tophat"&&(a(.62,.04,.58,"#151714",0,1.97,.02),a(.38,.38,.36,"#151714",0,2.18,.02),a(.39,.06,.37,"#C2443A",0,2.03,.02)),e.hat==="crown"){a(.5,.12,.46,"#D9A63A",0,2,.02);for(let[x,g]of[[-.2,-.2],[0,-.2],[.2,-.2],[-.2,.22],[.2,.22]])a(.09,.12,.06,"#D9A63A",x,2.12,g);a(.07,.07,.02,"#C2443A",0,2,-.215)}if(e.acc==="scarf"&&(a(.56,.1,.34,"#C2443A",0,1.43,0),a(.12,.3,.04,"#C2443A",.12,1.26,-.18)),e.acc==="goldbadge"&&a(.12,.12,.03,"#D9A63A",.14,1.28,-.165),e.acc==="backpack"&&(a(.42,.5,.18,"#D9A63A",0,1.1,.24),a(.3,.16,.04,"#8C6640",0,1,.34)),e.acc==="cape"&&a(.56,.95,.04,"#6E3F8C",0,.98,.18),e.glasses&&(a(.16,.12,.02,"#26302A",-.12,1.74,-.245),a(.16,.12,.02,"#26302A",.12,1.74,-.245)),t){let x=t.hatColor||"#F4F1E8",g=t.extraColor||"#26302A";t.hat==="chef"&&(a(.5,.1,.48,x,0,1.98,.02),a(.44,.36,.42,x,0,2.2,.02)),t.hat==="helmet"&&(a(.6,.22,.56,x,0,2.04,.02),a(.68,.04,.66,x,0,1.94,.04),a(.12,.1,.02,"#C2443A",0,2.06,-.255)),t.hat==="cap"&&(a(.56,.14,.52,x,0,2.03,.02),a(.4,.04,.2,x,0,1.97,-.32)),t.hat==="nurse"&&(a(.4,.12,.3,x,0,2,0),a(.08,.08,.02,"#C2443A",0,2,-.155)),t.extra==="apron"&&a(.44,.62,.03,g,0,1,-.165),t.extra==="tie"&&a(.08,.36,.03,g,0,1.22,-.165),t.extra==="bag"&&(a(.06,.62,.32,g,.32,1.12,0),a(.12,.26,.34,g,.36,.86,0)),t.extra==="stethoscope"&&(a(.04,.3,.03,g,-.12,1.28,-.165),a(.04,.3,.03,g,.12,1.28,-.165),a(.1,.1,.03,"#B9B6AE",.12,1.1,-.17)),t.extra==="badge"&&a(.12,.12,.03,g,-.14,1.28,-.165)}return i.userData={legL:c,legR:d,armL:u,armR:f,mats:s},i}function ah(n,t,e,i){let s=n.userData,r=Math.sin(e*9)*Math.min(1,t/4)*.7;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r,s.armR.rotation.x=r;for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var _d=()=>{let n=new un,t=[],e=(i,s,r,o,a,l,c,d=n)=>{let u=new Mn({color:o});u.userData.base=new $t(o),t.push(u);let f=new De(new dn(i,s,r),u);return f.position.set(a,l,c),d.add(f),f};return n.userData.mats=t,{g:n,bx:e}};function yd(n){let{g:t,bx:e}=_d(),i=(s,r,o)=>{for(let a of s)for(let l of r)e(.16,o,o,"#26302A",a,o/2,l)};if(n==="bike"){for(let s of[-.55,.55])e(.08,.5,.5,"#26302A",0,.25,s),e(.1,.2,.2,"#B9B6AE",0,.25,s);e(.08,.08,1.1,"#C2443A",0,.5,0),e(.08,.4,.08,"#C2443A",0,.65,-.5),e(.5,.06,.06,"#26302A",0,.86,-.5),e(.22,.06,.3,"#26302A",0,.62,.3)}else if(n==="scooter"){e(.3,.06,1,"#3F6E9A",0,.1,0);for(let s of[-.45,.45])e(.08,.16,.16,"#26302A",0,.08,s);e(.06,.95,.06,"#B9B6AE",0,.58,-.46),e(.5,.06,.06,"#26302A",0,1.05,-.46)}else if(n==="car")e(1.3,.55,2.4,"#C2443A",0,.55,0),e(1.2,.4,1,"#CFE3DF",0,1.02,.15),e(1.32,.08,1.02,"#C2443A",0,1.25,.15),e(.3,.14,.04,"#F2C46B",-.42,.62,-1.21),e(.3,.14,.04,"#F2C46B",.42,.62,-1.21),i([-.66,.66],[-.8,.8],.44);else if(n==="bus"){e(1.9,1.5,4.6,"#D9A63A",0,1,0);for(let s of[-1.6,-.6,.4,1.4])e(1.92,.5,.7,"#CFE3DF",0,1.25,s);e(1.6,.5,.04,"#CFE3DF",0,1.25,-2.31),e(1.92,.12,4.62,"#26302A",0,.5,0),i([-.9,.9],[-1.5,1.5],.6)}else n==="boat"&&(e(1.1,.36,2.2,"#8C6640",0,-.05,0),e(.9,.06,1.9,"#C49A63",0,.12,0),e(1.12,.1,.5,"#EFEBDD",0,.16,-.9));return t}function vd(n){let{g:t,bx:e}=_d(),i={dog:["#B88B55","#5C3A24"],cat:["#8C8A84","#5E6660"],rabbit:["#EFEBDD","#E8B4AC"],dalmatian:["#F4F1E8","#151714"]}[n]||["#B88B55","#5C3A24"],s=[-.12,.12].flatMap(o=>[-.18,.18].map(a=>e(.1,.22,.1,i[0],o,.11,a)));e(.32,.26,.56,i[0],0,.34,0);let r=e(.3,.28,.28,i[0],0,.56,-.32);if(e(.05,.05,.02,"#151714",-.08,.6,-.465),e(.05,.05,.02,"#151714",.08,.6,-.465),e(.06,.04,.02,"#151714",0,.52,-.465),n==="rabbit"?(e(.08,.3,.06,i[0],-.08,.84,-.3),e(.08,.3,.06,i[0],.08,.84,-.3),e(.04,.2,.02,i[1],-.08,.84,-.335),e(.04,.2,.02,i[1],.08,.84,-.335),e(.12,.12,.12,"#FFFFFF",0,.38,.32)):n==="cat"?(e(.08,.1,.06,i[1],-.1,.74,-.3),e(.08,.1,.06,i[1],.1,.74,-.3),e(.06,.06,.4,i[0],0,.5,.42)):(e(.08,.16,.08,i[1],-.15,.6,-.28),e(.08,.16,.08,i[1],.15,.6,-.28),e(.06,.06,.24,i[0],0,.46,.36)),n==="dalmatian")for(let[o,a,l]of[[.165,.38,-.1],[-.165,.32,.12],[.1,.475,.15],[-.08,.475,-.12],[.155,.6,-.32]])e(.02+(Math.abs(o)>.15?0:.08),.08,.08+(Math.abs(o)>.15?0:-.06),i[1],o,a,l);return t.userData.legs=s,t.userData.head=r,t}function Md(n,t,e,i){let s=n.userData,r=Math.sin(e*12)*Math.min(1,t/3)*.6;s.legs.forEach((o,a)=>{o.rotation.x=a%3===0?r:-r});for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var Sd=(n,t)=>{for(let e of n.userData.mats)e.color.copy(e.userData.base).multiplyScalar(t)};function bd(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Hs(n,s),canSpend:s=>n.coins>=s,spend:async s=>Zc(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}var li=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},cy=n=>n.charAt(0).toUpperCase()+n.slice(1),hy=n=>typeof n=="string"&&/^[A-Z0-9"']/.test(n)&&/[.!?]$/.test(n),lh=(n,t)=>t===1?n.sg:Wi(t)+" "+n.pl,uy=n=>n.length<2?n.join(""):n.length===2?n.join(" and "):n.slice(0,-1).join(", ")+", and "+n[n.length-1];function Td(n,t=Math.random){let e=li(n.items,t).slice(0,n.lines).map(i=>{let s=1+Math.floor(t()*n.maxQty);return{id:i.id,n:s,en:lh(i,s),zh:i.zh}});return{lines:e,en:`${n.please} ${uy(e.map(i=>i.en))}.`,shelf:li(n.items,t).map(i=>i.id)}}function Ed(n,t){let e=Object.fromEntries(n.map(i=>[i.id,i.n]));return{results:n.map(i=>({id:i.id,want:i.n,got:t[i.id]||0,ok:(t[i.id]||0)===i.n})),extra:Object.keys(t).filter(i=>t[i]>0&&!e[i])}}function Cd(n,t=Math.random){let e=li(n.customers,t);return Array.from({length:n.per},(i,s)=>{let[r,o]=li(n.menu,t),a=t()<.3?2:1,l=t()<.3?2:1,c=n.say[Math.floor(t()*n.say.length)],d=lh(r,a),u=lh(o,l);return{who:e[s%e.length],en:c.replace("{A}",cy(d)).replace("{a}",d).replace("{b}",u),want:{[r.id]:a,[o.id]:l}}})}var Rd=(n,t)=>{let e=new Set(Object.keys(n).concat(Object.keys(t).filter(i=>t[i]>0)));for(let i of e)if((n[i]||0)!==(t[i]||0))return!1;return!0},fy=["first","second","third","fourth"],dy=["\u4E00","\u4E8C","\u4E09","\u56DB"];function py(n,t,e){let i={left:n.filter(r=>r.x>t).sort((r,o)=>r.x-o.x),right:n.filter(r=>r.x<t).sort((r,o)=>o.x-r.x)},s=[];for(let r of["left","right"])i[r].forEach((o,a,l)=>{let c=i[r==="left"?"right":"left"];for(let d of[l[a-1],l[a+1]].filter(Boolean)){let u=r==="left"?"right":"left",f=(x,g)=>x.replace("{turn}",r).replace("{nth}",fy[a]).replace("{side}",u).replace("{next}",d.en).replace("{turnZh}",r==="left"?"\u5DE6":"\u53F3").replace("{nthZh}",dy[a]).replace("{sideZh}",u==="left"?"\u5DE6":"\u53F3").replace("{nextZh}",g?d.zh:"");s.push({to:o.id,turn:r,nth:a,next:d.id,en:f(e.how),zh:f(e.howZh,!0),cards:[o.id,d.id,(c[a]||c[0]).id]})}});return s}function Pd(n,t,e,i=Math.random){let s=py(n,t,e),r=s[Math.floor(i()*s.length)];return Object.assign({},r,{cards:li(r.cards,i),tries:0})}var wd=/^hanlin-[56]-u\d+$/,Ad=n=>{let t=/^hanlin-(\d)-u(\d+)$/.exec(n);return t?`${t[1]==="5"?"\u4E94\u4E0A":"\u4E94\u4E0B"} Unit ${t[2]}`:n};function Id(n,t){let e=(n||[]).filter(s=>wd.test(s.id)&&(s.sents||[]).length).map(s=>({id:s.id,title:s.title||Ad(s.id),sents:s.sents}));if(e.length)return e;let i={};for(let s of t||[])for(let r of s.tb||[])if(wd.test(r))for(let[o,a]of(s.ex||[]).entries())(i[r]=i[r]||[]).push({key:s.id+":"+o,en:a.en,zh:a.zh});return Object.keys(i).sort().map(s=>({id:s,title:Ad(s),sents:i[s]}))}function Ld(n,t,e){if(!n.length)return null;let i=new Set(n.map(r=>r.id));for(let r=(t||[]).length-1;r>=0;r--){let o=/^tb:(hanlin-[56]-u\d+):/.exec(t[r]&&t[r].id||"");if(o&&i.has(o[1]))return o[1]}let s=0;for(let r of String(e))s=s*31+r.charCodeAt(0)>>>0;return n[s%n.length].id}function Dd(n,t,e=Math.random,i={}){let s=n.sents.filter(u=>hy(u.en)&&u.zh),r=[],o=new Set,a=u=>(u.blanks||[]).find(f=>f.w&&new RegExp("\\b"+f.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(u.en)&&(f.opts||[]).filter(x=>x!==f.w).length>=2),l=u=>{let f=li(s.filter(x=>x.en!==u.en&&x.zh!==u.zh),e).map(x=>x.en).filter((x,g,w)=>w.indexOf(x)===g).slice(0,2);return f.length<2?null:{kind:"zh2en",key:u.key,en:i.zh2en||"How do we say this in English?",zh:u.zh,showZh:!0,cards:li([{t:u.en,ok:!0}].concat(f.map(x=>({t:x,ok:!1}))),e),say:""}},c=u=>{let f=a(u);if(!f)return null;let x=li(f.opts.filter(g=>g!==f.w),e).slice(0,2);return{kind:"blank",key:u.key,en:u.en.replace(new RegExp("\\b"+f.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b"),"____"),zh:u.zh+(f.cue?`\uFF08\u7A7A\u683C\uFF1A${f.cue}\uFF09`:""),showZh:!0,cards:li([{t:f.w,ok:!0}].concat(x.map(g=>({t:g,ok:!1}))),e),say:"",full:u.en}},d=li(s,e);for(let u=0;u<t;u++){let f=u%2?c:l,x=null;for(let g of d)if(!o.has(g.key)&&(x=f(g)||(f===c?l(g):null),x)){o.add(g.key);break}x&&r.push(x)}return r}function gy(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}function Nd(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=gy(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(l=>l.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Ud=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Xb=.5*(Math.sqrt(3)-1),qb=(3-Math.sqrt(3))/6;function Xr(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function Fd(n){let t=new Map;return(e,i,s)=>{let r=Math.floor(e/16),o=Math.floor(s/16),a=r+","+o,l=t.get(a);return l||(l=n.genChunk(r,o),t.set(a,l)),l[In(e-r*16,i,s-o*16)]}}function ch(n,t,e,i,s=t.num("water")){let r=t.flat.solid,o=l=>{let c=t.get(l);return!!(c&&c.interact==="door")},a=l=>!r[l]||o(l);return(l,c)=>Math.abs(l)<=i&&Math.abs(c)<=i&&n(l,e,c)!==s&&!!r[n(l,e,c)]&&a(n(l,e+1,c))&&a(n(l,e+2,c))}function qr(n,t,e,i,s,r=.3){let o=Math.hypot(i-t,s-e),a=Math.max(1,Math.ceil(o/.25));for(let l=0;l<=a;l++){let c=t+(i-t)*l/a,d=e+(s-e)*l/a;for(let[u,f]of[[-r,-r],[r,-r],[-r,r],[r,r]])if(!n(Math.floor(c+u),Math.floor(d+f)))return!1}return!0}function Od(n,t,e,i,s,r=25e3){if(!n(i,s))return null;if(t===i&&e===s)return[[t,e]];let o=(m,p)=>(m+2048)*4096+(p+2048),a=new Map,l=new Map,c=new Set,d=(m,p)=>{let R=Math.abs(m-i),U=Math.abs(p-s);return Math.max(R,U)+.4142*Math.min(R,U)},u=[],f=m=>{u.push(m);let p=u.length-1;for(;p;){let R=p-1>>1;if(u[R][0]<=m[0])break;u[p]=u[R],u[p=R]=m}},x=()=>{let m=u[0],p=u.pop();if(u.length){let R=0;for(u[0]=p;;){let U=2*R+1,v=U+1,b=R;if(U<u.length&&u[U][0]<u[b][0]&&(b=U),v<u.length&&u[v][0]<u[b][0]&&(b=v),b===R)break;[u[R],u[b]]=[u[b],u[R]],R=b}}return m},g=o(t,e);a.set(g,0),f([d(t,e),t,e]);let w=0;for(;u.length&&w<r;){let[,m,p]=x(),R=o(m,p);if(c.has(R))continue;if(c.add(R),w++,m===i&&p===s){let v=[[m,p]],b=R;for(;l.has(b);)b=l.get(b),v.push([Math.floor(b/4096)-2048,b%4096-2048]);return v.reverse()}let U=a.get(R);for(let v=-1;v<=1;v++)for(let b=-1;b<=1;b++){if(!v&&!b)continue;let E=m+v,N=p+b;if(!n(E,N)||v&&b&&(!n(m+v,p)||!n(m,p+b)))continue;let S=o(E,N),T=U+(v&&b?1.4142:1);c.has(S)||T>=(a.has(S)?a.get(S):1/0)||(a.set(S,T),l.set(S,R),f([T+d(E,N),E,N]))}}return null}function kd(n,t){if(!t||t.length<3)return t;let e=s=>s[0]+.5,i=[t[0]];for(let s=0;s<t.length-1;){let r=t.length-1;for(;r>s+1&&!qr(n,e(t[s]),t[s][1]+.5,e(t[r]),t[r][1]+.5);)r--;i.push(t[r]),s=r}return i}function Bd(n=64){let t=new Map;return{find(e,i,s,r,o){let a=i+","+s+">"+r+","+o;if(t.has(a)){let c=t.get(a);return t.delete(a),t.set(a,c),c}let l=kd(e,Od(e,i,s,r,o));return t.set(a,l),t.size>n&&t.delete(t.keys().next().value),l},clear(){t.clear()},size:()=>t.size}}function zd(n,t){let e=[];for(let i=0;i<t.length;i++){let s=t[i],r=t[(i+1)%t.length];if(e.push(s),t.length<2||qr(n,s[0]+.5,s[1]+.5,r[0]+.5,r[1]+.5))continue;let o=kd(n,Od(n,s[0],s[1],r[0],r[1]));if(o)for(let a of o.slice(1,-1))e.push([a[0],a[1],1])}return e}var uh="10b8da4b37",Vd=new URLSearchParams(location.search),cl=Vd.get("test")==="1"||window.__HW_TEST__===!0,vy=720,My=(n,t)=>{try{let e=localStorage.getItem(n);return e??t}catch{return t}},Sy=(n,t)=>{try{localStorage.setItem(n,t)}catch{}};function Gd(n){let t=null,e=()=>t||(t=new Promise((s,r)=>{let o=indexedDB.open(n,1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})),i=(s,r)=>e().then(o=>new Promise((a,l)=>{let c=o.transaction("kv",s),d=r(c.objectStore("kv"));c.oncomplete=()=>a(d&&d.result),c.onerror=()=>l(c.error)}));return{get:s=>i("readonly",r=>r.get(s)),putMany:s=>i("readwrite",r=>{for(let o in s)r.put(s[o],o)}),all:s=>e().then(r=>new Promise((o,a)=>{let l={},c=r.transaction("kv").objectStore("kv").openCursor(IDBKeyRange.bound(s,s+"\uFFFF"));c.onsuccess=()=>{let d=c.result;d?(l[d.key]=d.value,d.continue()):o(l)},c.onerror=()=>a(c.error)}))}}var Mi=Gd("kids_town"),$r=Gd("hw_world"),M={started:!1,overlay:null,p:{x:.5,y:22,z:8.5},v:{x:0,y:0,z:0},yaw:Math.PI,pitch:-.15,onGround:!1,view:"tp",bike:!1,keys:{},joy:{x:0,y:0,active:!1},time:.25,frames:[],dirty:new Set,furn:!1,furnSel:0,furnRot:0,zh:My("kt_zh","on")==="on",touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,pending:0};async function by(){let[n,t,e,i,s,r,o]=await Promise.all(["data/blocks.json","data/town.json","data/dialogues.json","data/jobs.json","data/shop.json","data/chatgen.json","data/life.json"].map(h=>fetch(h,{cache:"no-cache"}).then(_=>_.json()))),a={blocks:n.blocks.concat(t.blocks),items:n.items,blueprints:n.blueprints},l=vf(a),c=t.GY,d=Jf(l,t),u={};try{let[h,_,C,F,q,Y,lt,ct]=await Promise.all([Mi.get("kt_player"),Mi.get("kt_home"),Mi.get("kt_avatar"),$r.get("hw_coins"),Mi.get("kt_jobs"),Mi.get("kt_owned"),Mi.get("kt_pets"),Mi.get("kt_life")]);u={pl:h,home:_,av:C,coins:F,jobs:q,owned:Y,pets:lt,life:ct,chunks:await Mi.all("kt_chunk:")}}catch(h){console.warn("save unavailable",h)}let f=nl(u.coins),x=Nf(Object.fromEntries(Object.entries(u.chunks||{}).map(([h,_])=>[h.slice(9),_]))),g=Object.assign({id:null,locked:!1,wall:null,floor:null},u.home||{}),w=ll(u.av),m=i.jobs,p=gd(u.jobs),R=new Set(Array.isArray(u.owned)?u.owned:[]),U=Object.fromEntries(s.items.map(h=>[h.id,h])),v=od(s),b=Object.assign({active:null,names:{}},u.pets||{}),E=Object.assign({stats:{},daily:null},u.life||{}),N=t.secrets&&t.secrets.rooms||[],S=()=>p.wear&&m[p.wear]?m[p.wear].uniform:null;u.pl&&Object.assign(M,{p:{x:u.pl.x,y:u.pl.y,z:u.pl.z},yaw:u.pl.yaw||0,view:u.pl.view||"tp"});let T=Ae("#c"),P=new ja({canvas:T,antialias:!1,powerPreference:"high-performance"});P.setPixelRatio(Math.min(window.devicePixelRatio||1,M.touch?1.5:1.25));let D=new xr,H=new $t("#EFEBDD");D.background=H;let B=new nn(70,1,.08,200);B.rotation.order="YXZ";let O=Ff(l),X=zf(O.canvas),et=new Worker("assets/kt-worker.js?v="+uh),tt=Bd(),Q=new rl({scene:D,mats:X,reg:l,worker:et,diffs:x,onDirty:h=>{M.dirty.add(h),tt.clear()}});Q.setRenderDistance(M.touch?3:4),B.far=Q.rd*16+40,B.updateProjectionMatrix();let j=await new Promise(h=>{let _=C=>{C.data.type==="ready"&&(et.removeEventListener("message",_),h(C.data.spawn))};et.addEventListener("message",_),et.postMessage({type:"init",seed:1,blocks:a,structures:t,diffs:Object.fromEntries([...x].map(([C,F])=>[C,jc(F)]))})});u.pl||(M.p={x:j.x,y:j.y,z:j.z});let at=new Set;for(let h of t.buildings.concat(d.homes))for(let _=h.x;_<h.x+h.w;_++)for(let C=h.z;C<h.z+h.d;C++)at.add(_+","+C);let ft=l.num("water"),Ut=(h,_)=>Q.get(h,c,_)===ft,Ot=Fd(d),_e=ch(Ot,l,c,t.bound),Kt=ch((h,_,C)=>Q.ready(h,C)?Q.get(h,_,C):Ot(h,_,C),l,c,t.bound),ce=(h,_,C)=>st(Se(),h,_,C),st=(h,_,C,F)=>{if(h&&ie[h].big&&C>c&&C<=c+3&&at.has(_+","+F)||h==="boat"&&(C===c&&Ut(_,F)||C>c&&C<=c+2&&!Ut(_,F)))return!0;let q=Q.get(_,C,F);return l.flat.solid[q]===1&&(l.flat.boxes[q]||!0)},ut=(h,_,C,F,q,Y="#26302A")=>{let lt=document.createElement("canvas");lt.width=320,lt.height=120;let ct=lt.getContext("2d");ct.fillStyle="#EFEBDD",ct.fillRect(6,6,308,108),ct.strokeStyle=Y,ct.lineWidth=8,ct.strokeRect(6,6,308,108),ct.fillStyle=Y,ct.textAlign="center",ct.font="bold 46px sans-serif",ct.fillText(h,160,60),ct.font="30px sans-serif",ct.fillText(_,160,100);let bt=new Cn(lt);bt.colorSpace=Be;let zt=new Li(new xi({map:bt,depthWrite:!1}));return zt.scale.set(3.2,1.2,1),zt.position.set(C,F,q),D.add(zt),zt};for(let h of t.buildings){let _=h.door==="s"?h.z+h.d+.4:h.door==="n"?h.z-.4:h.z+h.d/2,C=h.door==="e"?h.x+h.w+.4:h.door==="w"?h.x-.4:h.x+h.w/2;ut(h.en,h.zh,C,c+h.h+.4,_,"#C2443A")}ut(t.park.en,t.park.zh,t.park.x+2,c+3.5,t.park.z-.5,"#3E6B3A");let Pt=h=>"note:"+h.room.id+":"+h.i,Wt=h=>{let _=document.createElement("canvas");_.width=96,_.height=96;let C=_.getContext("2d");C.fillStyle="#F4F1E8",C.fillRect(8,8,80,80),C.strokeStyle="#26302A",C.lineWidth=4,C.strokeRect(8,8,80,80),C.fillStyle="#C2443A",C.fillRect(40,2,16,14),C.fillStyle="#5E6660";for(let q=34;q<80;q+=12)C.fillRect(20,q,56,4);C.fillStyle="#26302A",C.font="bold 18px sans-serif",C.textAlign="center",C.fillText("NOTE",48,30),h&&(C.fillStyle="#3E6B3A",C.beginPath(),C.arc(70,72,20,0,Math.PI*2),C.fill(),C.strokeStyle="#EFEBDD",C.lineWidth=6,C.beginPath(),C.moveTo(60,72),C.lineTo(68,80),C.lineTo(81,63),C.stroke());let F=new Cn(_);return F.colorSpace=Be,F},Rt=Wt(!1),jt=Wt(!0),Ne=N.flatMap(h=>h.notes.map((_,C)=>{let F=new Li(new xi({map:R.has("note:"+h.id+":"+C)?jt:Rt,depthWrite:!1}));return F.scale.set(.7,.7,1),F.position.set(_.at[0],_.at[1],_.at[2]),D.add(F),{room:h,i:C,n:_,sp:F,p:{x:_.at[0],y:_.at[1]-.35,z:_.at[2]}}}));t.secrets&&t.secrets.board&&ut("Notice Board","\u516C\u544A\u6B04",...t.secrets.board.sign,"#8C6640");let Qt={},re=()=>{for(let h of d.homes){Qt[h.id]&&D.remove(Qt[h.id]);let _=g.id===h.id;Qt[h.id]=ut(_?"My Home":"For Rent",_?"\u6211\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F",h.x+h.w/2,c+(_&&g.floors===2?Hr(h,c,2).h:h.h)+.6,h.z-.4,_?"#3E6B3A":"#5E6660")}};re();let pe=()=>d.homes.find(h=>h.id===g.id)||null,Yt=()=>{let h=pe();return h&&g.floors===2?Object.assign({},h,{h:Hr(h,c,2).h}):h},Te=()=>{let h=m[p.wear];if(!h)return null;let _=document.createElement("canvas");_.width=256,_.height=64;let C=_.getContext("2d");C.fillStyle=h.color,C.fillRect(4,4,248,56),C.fillStyle="#EFEBDD",C.textAlign="center",C.font="bold 30px sans-serif",C.fillText(h.en+" "+h.zh,128,43);let F=new Cn(_);F.colorSpace=Be;let q=new Li(new xi({map:F,depthWrite:!1}));return q.scale.set(1.6,.4,1),q.position.y=2.75,q},Oe=()=>{let h=oh(w,S()),_=Te();return _&&h.add(_),h},Re=Oe();D.add(Re);let ie={bike:{zh:"\u8173\u8E0F\u8ECA",speed:8,run:10,lift:.35}};for(let h of s.items)h.cat==="ride"&&(ie[h.id]=h);let Pe=Object.fromEntries(Object.keys(ie).map(h=>{let _=yd(h);return _.visible=!1,D.add(_),[h,_]})),G=Object.fromEntries(Object.keys(ie).filter(h=>ie[h].big).map(h=>{let _=new ni().setFromObject(Pe[h]).getSize(new J);return[h,Math.hypot(_.x,_.z)]})),Se=()=>M.bike?ie[M.ride]?M.ride:"bike":null,ue=()=>M.bike?ie[Se()].lift:0,I=()=>{D.remove(Re),Re=Oe(),D.add(Re)},y=t.npcs.map((h,_)=>{let C={id:h.id,kind:"villager",size:[.6,1.8],speed:1.2,colors:{leg:"#26302A",body:h.robe,head:"#E7CDA6",hat:h.hat}},F={id:_+1,type:h.id,kind:"villager",def:C,n:h,route:zd(_e,h.route),ri:1,wait:0,p:{x:h.route[0][0]+.5,y:c+1,z:h.route[0][1]+.5},v:{x:0,y:0,z:0},yaw:0,gone:!1};return F.g=Vf(C,h.robe),D.add(F.g),F}),k={coins:Ae("#coins"),ov:Ae("#ov"),toasts:Ae("#toasts"),joy:Ae("#joy"),knob:Ae("#knob"),hotbar:Ae("#hotbar"),start:Ae("#start"),dbg:Vd.get("debug")!==null?Ae("#dbg"):null,loading:Ae("#loading")};k.dbg&&(k.dbg.hidden=!1);let W=h=>{for(;k.toasts.children.length>3;)k.toasts.firstChild.remove();let _=L("div",{class:"toast"},h);k.toasts.append(_),setTimeout(()=>_.remove(),2400)},it=()=>{k.coins.textContent=f.coins},ht=()=>{k.ov.hidden=!0,k.ov.innerHTML="",M.overlay=null,M.talkNpc&&(M.talkNpc.busy=!1,M.talkNpc=null);try{speechSynthesis.cancel()}catch{}},pt=(h,..._)=>{document.pointerLockElement&&document.exitPointerLock(),k.ov.innerHTML="",k.ov.hidden=!1,k.ov.append(L("div",{class:"panel"},L("div",{class:"p-head"},L("h2",{},h),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ht},"\xD7")),..._))},nt=h=>{h<=0||(Hs(f,h),M.pending+=h,it(),Ke("coin"))};function rt(h,_,C,F,q){try{let Y=JSON.parse(localStorage.getItem("ke_log")||"[]");if(!Array.isArray(Y))return;Y.push(Kc({id:h,module:"town",tkey:_,type:C},F,q,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)),localStorage.setItem("ke_log",JSON.stringify(Y))}catch(Y){console.warn("ke_log",Y)}}let Mt=(h,_,C,F)=>rt(`town:${h}:${_}`,"town:"+h,"town-dialogue",C,F);function Lt(h){window.KidsDaily&&window.KidsDaily.rec("english",h)}let xt=h=>{if(!(cl||!h||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let _=new SpeechSynthesisUtterance(h.replace(/_{2,}/g," ... "));_.lang="en-US",_.rate=.9,speechSynthesis.speak(_)}catch{}},_t=(h,_,C)=>[L("div",{class:"npc-line"},L("button",{class:"say","aria-label":"\u518D\u5538\u4E00\u6B21",onclick:()=>xt(h)},"\u{1F50A}"),L("b",{class:"en"},h)),_&&C?L("p",{class:"muted"},_):null],kt=h=>Object.keys(m).find(_=>m[_].npc===h.n.id)||null,Bt=[];function Xt(h){let _=kt(h),C=Bt.map(Y=>Y(h)).filter(Boolean);if(!_&&!C.length){dt(h);return}let F=m[_],q=_&&p.lic[_];pt(`${h.n.en}\u30FB${h.n.zh}`,L("p",{},"\u4F60\u60F3\u8981\u505A\u4EC0\u9EBC\uFF1F"),L("div",{class:"cards"},L("button",{class:"card",onclick:()=>dt(h)},"\u{1F4AC} \u804A\u5929"),_?L("button",{class:"card",onclick:()=>q?as(_):je(_)},q?`\u{1F9F0} ${F.zh}\u7684\u5DE5\u4F5C\uFF1A${F.task.title}`:`\u{1F4DD} \u8003${F.zh}\u57F7\u7167\uFF0810 \u984C\uFF0C\u5C0D ${8} \u984C\u5C31\u901A\u904E\uFF09`):null,...C)),M.talkNpc=h,h.busy=!0,M.overlay="menu",h.yaw=Math.atan2(-(M.p.x-h.p.x),-(M.p.z-h.p.z))}let V=null,St=h=>new Promise((_,C)=>{let F=document.createElement("script");F.src=h,F.onload=_,F.onerror=()=>C(new Error("load "+h)),document.head.appendChild(F)});async function ot(){try{for(let h of["patterns.js","patterns-2.js","phrases.js","phrases-2.js"])await St("../../data/"+h);V={patterns:(window.DATA_PATTERNS||[]).slice(),phrases:(window.DATA_PHRASES||[]).slice()}}catch(h){console.warn("chat data",h)}try{await St("../../data/textbook.js"),Et=(window.DATA_TEXTBOOK||[]).slice()}catch(h){console.warn("textbook",h)}}let vt=(h,_)=>{try{return JSON.parse(localStorage.getItem(h)||"null")||_}catch{return _}};function Tt(h,_){let C=V&&xd(r[h.replace(/\d+$/,"")],V,{learned:vt("ke_learned",{}),mistakes:vt("ke_mistakes",{})});return C?Object.assign({},_,{turns:_.turns.concat(C)}):_}function dt(h,_){let C=[].concat(h.n.dlg);_=_||C[(h.dlgN=(h.dlgN==null?-1:h.dlgN)+1)%C.length];let F=e[_]&&Tt(_,e[_]);F&&(M.talkNpc=h,h.busy=!0,M.overlay="talk",M.dlg=td(F),M.dlg.id=_,h.yaw=Math.atan2(-(M.p.x-h.p.x),-(M.p.z-h.p.z)),Ft(!0))}function Ft(h){let _=M.dlg,C=M.talkNpc,F=k.ov;F.innerHTML="",F.hidden=!1;let q=L("div",{class:"p-head"},L("h2",{},`${C.n.en}\u30FB${C.n.zh}`,L("small",{},`\u3000${_.d.place}`)),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ht},"\xD7")),Y=L("div",{class:"panel talk"},q);if(F.append(Y),_.phase==="talk"){let lt=_.d.turns[_.turn];Y.append(..._t(lt.npc,lt.zh,M.zh),lt.say?L("p",{class:"say-zh"},"\u8981\u8AAA\uFF1A"+lt.say):null,L("p",{class:"muted small"},`\u7B2C ${_.turn+1} / ${_.d.turns.length} \u53E5\u3000\u9078\u4E00\u5F35\u5361\u7247\u56DE\u7B54`),L("div",{class:"cards"},_.cards[_.turn].map((ct,bt)=>L("button",{class:"card en",onclick:zt=>Dt(bt,zt.currentTarget)},ct.en)))),h&&xt(lt.npc)}else _.phase==="check"?Y.append(L("p",{class:"big"},"\u5C0F\u6E2C\u9A57\uFF1A"+_.d.check.q),L("div",{class:"cards"},_.check.map((lt,ct)=>L("button",{class:"card",onclick:()=>ye(ct)},lt.zh)))):Y.append(L("p",{class:"big"},_.coins?`\u5C0D\u8A71\u5B8C\u6210\uFF01 +${_.coins} \u91D1\u5E63`:"\u5C0D\u8A71\u5B8C\u6210\uFF01"),L("p",{class:"muted"},`\u7B2C\u4E00\u6B21\u5C31\u9078\u5C0D ${_.right} / ${_.d.turns.length} \u53E5`),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u597D")))}function Dt(h,_){let C=M.dlg,F=C.turn,q=C.cards[F][h],Y=ed(C,h);if(Mt(C.id,C.d.turns[F].src?"gen:"+C.d.turns[F].src:F,Y.ok&&Y.first,q.en),!Y.ok){_.classList.add("bad"),Ke("hurt"),W("\u518D\u60F3\u60F3\u770B\uFF0C\u54EA\u4E00\u53E5\u6700\u5408\u9069\uFF1F");return}Y.first&&nt(1),Ke("pickup"),xt(q.en),setTimeout(()=>Ft(C.phase==="talk"),450)}function ye(h){let _=M.dlg,C=_.coins,F=nd(_,h);Mt(_.id,"check",F.ok,_.check[h].zh),F.ok?nt(_.coins-C):W("\u7B54\u6848\u662F\uFF1A"+_.check.find(q=>q.ok).zh),Dn("talk"),Ft(!1)}function le(h,_,C,F){let q=L("div",{class:"fb"}),Y=L("div",{}),lt=!1,ct=(bt,zt)=>{if(lt)return;lt=!0;let Vt=C(bt);zt&&zt.classList.add(Vt.ok?"ok":"bad"),Ke(Vt.ok?"pickup":"hurt"),Vt.coins&&nt(Vt.coins),q.className="fb "+(Vt.ok?"ok":"bad"),q.append(L("div",{},Vt.ok?`\u7B54\u5C0D\u4E86\uFF01${Vt.coins?` +${Vt.coins} \u91D1\u5E63`:""}`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",Vt.ok?null:L("b",{class:"en"},Vt.answer)),L("button",{class:"btn",onclick:F},Vt.last?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u984C"))};if(_.typed){let bt=L("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),zt=()=>{lt||!bt.value.trim()||(bt.disabled=!0,ct(bt.value))};bt.addEventListener("keydown",Vt=>{Vt.stopPropagation(),Vt.key==="Enter"&&zt()}),Y.append(L("div",{class:"typerow"},bt,L("button",{class:"btn",onclick:zt},"\u9001\u51FA"))),setTimeout(()=>bt.focus(),50)}else Y.append(L("div",{class:"cards"},_.cards.map((bt,zt)=>L("button",{class:"card"+(/[a-z]/i.test(bt.t)?" en":""),onclick:Vt=>ct(zt,Vt.currentTarget)},bt.t))));h.append(..._t(_.en,_.zh,_.typed||_.showZh||M.zh),Y,q),_.say!==""&&xt(_.say||_.en)}function je(h){M.exam=ud(m[h]),M.exam.id=h,pn()}function pn(){let h=M.exam,_=m[h.id],C=k.ov;C.innerHTML="",C.hidden=!1,M.overlay="exam";let F=L("div",{class:"panel talk"},L("div",{class:"p-head"},L("h2",{},`${_.zh}\u57F7\u7167\u8003\u8A66`,L("small",{},h.done?"":`\u3000\u7B2C ${h.i+1} / ${h.qs.length} \u984C\u30FB\u7B54\u5C0D ${h.right}`)),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ht},"\xD7")));if(C.append(F),!h.done){let lt=h.qs[h.i],ct=h.i;le(F,{en:lt.q,zh:lt.zh,typed:lt.type==="typed",cards:lt.cards},bt=>{let zt=fd(h,bt);return Lt(zt.ok),rt(`town:lic:${h.id}:${ct}`,"town:license:"+h.id,"town-license",zt.ok,zt.text),{ok:zt.ok,answer:zt.answer,coins:Yc(zt.ok,zt.typed),last:h.done}},pn);return}let q=dd(h),Y=q&&!p.lic[h.id];q&&(Y&&(p.lic[h.id]=Date.now(),nt(10)),p.wear=h.id,I(),ve()),F.append(L("p",{class:"big"},q?`\u{1F389} \u901A\u904E\u4E86\uFF01\u4F60\u62FF\u5230${_.zh}\u57F7\u7167`:`\u7B54\u5C0D ${h.right} / ${h.qs.length} \u984C\uFF0C\u8981 ${8} \u984C\u624D\u901A\u904E`),L("p",{class:"muted"},q?`${Y?"\u57F7\u7167\u734E\u52F5 +10 \u91D1\u5E63\u3002":""}\u63DB\u4E0A${_.zh}\u5236\u670D\u4E86\uFF0C\u982D\u4E0A\u6703\u51FA\u73FE\u300C${_.en}\u300D\u3002\u4EE5\u5F8C\u627E\u9019\u4F4D\u5C45\u6C11\u5C31\u80FD\u4E0A\u73ED\u8CFA\u91D1\u5E63\uFF1B\u5728\u300C\u5DE5\u4F5C\u300D\u53EF\u4EE5\u63DB\u5236\u670D\u3002`:"\u6C92\u95DC\u4FC2\uFF0C\u518D\u8003\u4E00\u6B21\uFF01\u984C\u76EE\u4E00\u6A23\uFF0C\u9078\u9805\u9806\u5E8F\u6703\u63DB\u3002"),L("div",{class:"row"},q?L("button",{class:"btn big",onclick:()=>as(h.id)},"\u99AC\u4E0A\u4E0A\u73ED"):L("button",{class:"btn big",onclick:()=>je(h.id)},"\u518D\u8003\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:ht},"\u5148\u4E0D\u8981")))}function as(h){if(!p.lic[h]){je(h);return}let _=pd(m[h]);if(_.id=h,_.kind==="go"){M.go=_,M.goWrong=null,qi(),wn();return}M.task=_,$s()}function $s(){let h=M.task,_=m[h.id],C=k.ov;C.innerHTML="",C.hidden=!1,M.overlay="task";let F=L("div",{class:"panel talk"},L("div",{class:"p-head"},L("h2",{},`${_.zh}\u7684\u5DE5\u4F5C\uFF1A${_.task.title}`,L("small",{},h.i<h.qs.length&&h.started?`\u3000\u7B2C ${h.i+1} / ${h.qs.length} \u984C`:"")),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ht},"\xD7")));if(C.append(F),!h.started){h.started=!0,F.append(..._t(_.task.intro,_.task.introZh,!0),L("div",{class:"row"},L("button",{class:"btn big",onclick:$s},"\u958B\u59CB"))),xt(_.task.intro);return}if(h.i<h.qs.length){let q=h.qs[h.i],Y=h.i;le(F,{en:q.en,zh:q.zh,cards:q.cards},lt=>{let ct=md(h,lt);return Lt(ct.ok),rt(`town:job:${h.id}:${Y}`,"town:job:"+h.id,"town-job",ct.ok,ct.text),{ok:ct.ok,answer:ct.answer,coins:ct.ok?2:0,last:ct.done}},$s);return}p.done[h.id]=(p.done[h.id]||0)+1,Dn("work"),ve(),F.append(L("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u7B54\u5C0D ${h.right} / ${h.qs.length} \u984C\uFF0C\u8CFA\u5230 ${h.coins} \u91D1\u5E63`),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>as(h.id)},"\u518D\u505A\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:ht},"\u4F11\u606F")))}let Xi=t.buildings.map(h=>({id:h.id,en:"the "+h.en,zh:h.zh,b:h})).concat(d.homes.map(h=>({id:h.id,en:"the "+h.en,zh:h.zh,b:h})));for(let h of Xi){let _=h.b,C=_.isHome?"n":_.door,F=_.x+(_.w>>1)+.5,q=_.z+(_.d>>1)+.5;h.f=C==="n"?[F,_.z-.5]:C==="s"?[F,_.z+_.d+.5]:C==="w"?[_.x-.5,q]:[_.x+_.w+.5,q]}function qi(){let h=M.go,_=m[h.id];pt(`${_.zh}\u7684\u5DE5\u4F5C\uFF1A${_.task.title}`,..._t(h.en,h.zh,M.zh),L("p",{class:"muted small"},`\u8D70\u5230\u5C0D\u7684\u5730\u65B9\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\uFF08\u734E\u52F5 ${h.pay} \u91D1\u5E63\uFF09\u3002\u5DE6\u4E0A\u89D2\u7684\u4EFB\u52D9\u5361\u53EF\u4EE5\u518D\u770B\u4E00\u6B21\u3002`),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u51FA\u767C\uFF01"),L("button",{class:"btn ghost",onclick:()=>{M.go=null,wn(),ht(),W("\u9019\u8D9F\u5148\u4E0D\u505A\u4E86")}},"\u9019\u8D9F\u4E0D\u505A\u4E86"))),M.overlay="task",xt(h.en)}function wn(){let h=Ae("#task");if(!h)return;let _=M.go?(M.go.id==="firefighter"?"\u{1F525} ":"\u2709\uFE0F ")+M.go.en.split(/[.!] /)[0]:M.lost?`\u{1F9D2} \u5E36 ${o.lost.kid.en} \u56DE\u5BB6`:M.list?"\u{1F9FA} \u8CFC\u7269\u6E05\u55AE\uFF1A"+M.list.lines.map(C=>C.en).join("\u3001"):null;h.hidden=!_,_&&(h.textContent=_+"\u2026\uFF08\u9EDE\u6211\u518D\u770B\uFF09")}function Yr(){let h=M.go;if(h)for(let _ of Xi){if(Math.hypot(M.p.x-_.f[0],M.p.z-_.f[1])>3.2){M.goWrong===_.id&&(M.goWrong=null);continue}if(_.id!==h.to){M.goWrong!==_.id&&_.id!==m[h.id].place&&(M.goWrong=_.id,h.tries++,W(`\u9019\u88E1\u662F ${_.en}\uFF08${_.zh}\uFF09\uFF0C\u4E0D\u662F\u9019\u88E1\u5594\u3002\u518D\u770B\u4E00\u6B21\u4EFB\u52D9\u5361`));continue}let C=m[h.id],F=h.tries===0;M.go=null,wn(),Lt(F),rt(`town:job:${h.id}:${h.to}`,"town:job:"+h.id,"town-job",F,h.to),p.done[h.id]=(p.done[h.id]||0)+1,Dn("work"),pt(`${C.zh}\u7684\u5DE5\u4F5C`,..._t(C.task.arrive,C.task.arriveZh,!0),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>{nt(h.pay),ve(),ht(),W(`\u5B8C\u6210\u4E86\uFF01 +${h.pay} \u91D1\u5E63`)}},C.task.button))),M.overlay="task";return}}let Ys=()=>N.filter(h=>R.has("secret:"+h.id)).length;function qn(h){let _=R.has(Pt(h));_||(R.add(Pt(h)),h.sp.material.map=jt,h.sp.material.needsUpdate=!0,ve()),pt(`\u{1F4DC} \u7D19\u689D\uFF08${h.room.zh}\uFF09${_?"\u3000\u2713 \u8B80\u904E\u4E86":""}`,..._t(h.n.en,h.n.zh,M.zh),L("p",{class:"muted small"},R.has("secret:"+h.room.id)?"\u9019\u500B\u79D8\u5BC6\u623F\u9593\u4F60\u5DF2\u7D93\u627E\u5230\u4E86\uFF01":"\u7167\u8457\u82F1\u6587\u8D70\uFF0C\u627E\u5230\u79D8\u5BC6\u7684\u9580\u3002"),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u77E5\u9053\u4E86"))),M.overlay="panel",xt(h.n.en)}function Zs(h){if(M.riddleBusy)return;M.riddleBusy=!0,document.pointerLockElement&&document.exitPointerLock(),M.overlay="ask";let _=[];try{_=wf(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{}Lf(k.ov,{ids:_.slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u79D8\u5BC6\u623F\u9593\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",daily:!1,onDone:C=>{if(M.overlay=null,M.riddleBusy=!1,!C){C===!1&&W("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let F=-2;F<=2;F++){let q=l.get(Q.get(h.x,h.y+F,h.z));q&&q.interact==="riddle"&&Q.set(h.x,h.y+F,h.z,0)}Ke("door"),ve()}})}function Zr(h){let _=N.find(F=>F.treasure[0]===h.x&&F.treasure[1]===h.y&&F.treasure[2]===h.z);if(!_||(Q.set(h.x,h.y,h.z,l.num("chest")),R.has("secret:"+_.id)))return;R.add("secret:"+_.id),R.add(_.reward.id),de();let C;_.reward.kind==="pet"?(C="\u4E00\u96BB"+hs[_.reward.id]+"\uFF01\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",b.active||(b.active=_.reward.id,Yi())):(C="\u7A00\u6709\u5BB6\u5177\u300C"+l.name(_.reward.id)+"\u300D\uFF01\u5BB6\u5177\u6A21\u5F0F\u53EF\u4EE5\u653E",we()),ve(),Ke("coin"),pt("\u{1F389} \u627E\u5230\u79D8\u5BC6\u623F\u9593\uFF1A"+_.zh,L("p",{class:"big"},"\u5BF6\u7BB1\u88E1\u6709"+C),L("p",{class:"muted"},`\u79D8\u5BC6\u623F\u9593\u627E\u5230 ${Ys()} / ${N.length} \u9593`),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u592A\u68D2\u4E86"))),M.overlay="panel"}let on=o.pay,$i={tutorial:[],main:[],daily:o.daily},ls=h=>E.stats[h]||0;function ci(){let h={tut:{done:!0},main:0,daily:E.daily};for(let _ of Nd(h,$i,ls,Xr()))nt(_.q.coins),W(`\u{1F4EE} \u59D4\u8A17\u5B8C\u6210\uFF1A${_.q.zh} +${_.q.coins} \u91D1\u5E63`);E.daily=h.daily}function Dn(h,_=1){E.stats[h]=ls(h)+_,ci()}function Si(h,_,C,F){Lt(C),rt(`town:life:${h}:${_}`,"town:life:"+h,"town-life",C,F)}let Jr=()=>(ci(),L("div",{class:"quests"},L("h3",{},"\u{1F4EE} \u4ECA\u65E5\u93AE\u6C11\u59D4\u8A17\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),E.daily.picks.map(h=>{let _=o.daily.find(F=>F.id===h),C=E.daily.done.includes(h);return L("div",{class:"quest"+(C?" done":"")},L("b",{},(C?"\u2713 ":"")+_.zh),L("small",{class:"en"},_.en),L("small",{},C?"\u5B8C\u6210\u4E86\uFF01":`${Ud(E,$i,ls,h)} / ${_.need}\u30FB\u734E\u52F5 ${_.coins} \u91D1\u5E63`))})));function Kr(h,_,C,F){let q=L("div",{class:"tray"}),Y=Object.fromEntries(h.map(ct=>[ct.id,ct])),lt=()=>{q.innerHTML="";let ct=Object.keys(_).filter(bt=>_[bt]>0);q.append(L("b",{},C+"\uFF1A"),...ct.length?ct.map(bt=>L("button",{class:"chip","data-id":bt,onclick:()=>{_[bt]--,lt(),F&&F()}},`${Y[bt].icon} ${Y[bt].label} \xD7${_[bt]}`)):[L("span",{class:"muted small"},"\u9084\u662F\u7A7A\u7684")])};return lt(),[L("div",{class:"cards items"},h.map(ct=>L("button",{class:"card item","data-id":ct.id,onclick:()=>{_[ct.id]=(_[ct.id]||0)+1,lt(),Ke("pickup"),F&&F()}},L("span",{class:"ico"},ct.icon),L("span",{class:"en"},ct.label)))),q]}let Nn=o.grocery,cs=Object.fromEntries(Nn.items.map(h=>[h.id,h])),Js=h=>L("div",{class:"glist"},h.lines.map(_=>L("div",{class:"npc-line"},L("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u884C",onclick:()=>xt(_.en)},"\u{1F50A}"),L("b",{class:"en"},_.en),M.zh?L("small",{class:"muted"},"\u3000"+_.zh):null)));function A(){M.list=Td(Nn),M.basket={},wn(),z(!0)}function z(h){let _=M.list;_&&(pt("\u{1F9FA} \u55AC\u723A\u723A\u7684\u8CFC\u7269\u6E05\u55AE",...h?_t(Nn.intro,Nn.introZh,M.zh):[],Js(_),L("p",{class:"muted small"},"\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\uFF0C\u7167\u6E05\u55AE\u628A\u6771\u897F\u653E\u9032\u7C43\u5B50\u3001\u7D50\u5E33\u3002\u6578\u91CF\u8981\u525B\u525B\u597D\u5594\uFF01"),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u51FA\u767C\uFF01"),L("button",{class:"btn ghost",onclick:()=>{M.list=null,wn(),ht(),W("\u9019\u6B21\u5148\u4E0D\u8CB7\u4E86")}},"\u9019\u6B21\u4E0D\u8CB7\u4E86"))),M.overlay="task",xt(h?Nn.intro+" "+_.en:_.en))}function K(){let h=M.list;if(!h)return;let _=M.basket=M.basket||{},C=Js(h),F=L("button",{class:"btn ghost small",onclick:()=>{C.classList.toggle("listen"),F.textContent=C.classList.contains("listen")?"\u{1F440} \u770B\u6587\u5B57":"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09"}},"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09");pt("\u{1F9FA} \u7167\u6E05\u55AE\u62FF\u6771\u897F",C,L("div",{class:"row"},L("button",{class:"btn ghost small",onclick:()=>xt(h.en)},"\u{1F50A} \u807D\u6574\u5F35\u6E05\u55AE"),F),...Kr(h.shelf.map(q=>cs[q]),_,"\u7C43\u5B50"),L("div",{class:"row"},L("button",{class:"btn big",onclick:Z},"\u{1F9FE} \u7D50\u5E33"))),M.overlay="task"}function Z(){let h=M.list,_=Ed(h.lines,M.basket||{}),C=_.results.filter(Y=>Y.ok).length,F=C===h.lines.length&&!_.extra.length;_.results.forEach(Y=>Si("shop",Y.id,Y.ok,`${Y.got} ${Y.id}`));let q=C*on.perQ+(F?on.allRight:0);nt(q),M.list=null,M.basket=null,wn(),Dn("shop"),ve(),Ke(F?"coin":"pickup"),pt("\u{1F9FE} \u7D50\u5E33",..._.results.map((Y,lt)=>L("p",{},`${Y.ok?"\u2705":"\u274C"} ${cs[Y.id].icon} `,L("b",{class:"en"},h.lines[lt].en),Y.ok?"":`\uFF08\u7C43\u5B50\u88E1\u6709 ${Y.got} \u500B\uFF09`)),_.extra.length?L("p",{class:"muted"},"\u6E05\u55AE\u4E0A\u6C92\u6709\u7684\uFF1A"+_.extra.map(Y=>cs[Y].icon+" "+cs[Y].label).join("\u3001")+"\uFF08\u4E0B\u6B21\u53EA\u62FF\u6E05\u55AE\u4E0A\u7684\uFF09"):null,...F?_t(Nn.thanks,Nn.thanksZh,M.zh):[L("p",{},`\u6E05\u55AE\u4E0A ${h.lines.length} \u6A23\uFF0C\u5C0D\u4E86 ${C} \u6A23\u3002\u518D\u5E6B\u55AC\u723A\u723A\u8CB7\u4E00\u6B21\u5427\uFF01`)],L("p",{class:"big"},`+${q} \u91D1\u5E63`),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u597D"))),M.overlay="task",F&&xt(Nn.thanks)}let $=o.waiter;function wt(){M.waiter={orders:Cd($),i:-1,right:0},Ct()}function Ct(){let h=M.waiter;if(M.overlay="task",h.i<0){pt("\u{1F37D}\uFE0F \u9910\u5EF3\u670D\u52D9\u751F",..._t($.intro,$.introZh,M.zh),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>{h.i=0,Ct()}},"\u958B\u59CB"))),xt($.intro),M.overlay="task";return}if(h.i>=h.orders.length){let lt=h.right===h.orders.length,ct=lt?on.allRight:0;nt(ct),Dn("waiter"),ve(),pt("\u{1F37D}\uFE0F \u4E0B\u73ED\u4E86",...lt?_t($.thanks,$.thanksZh,M.zh):[],L("p",{class:"big"},`\u9001\u5C0D ${h.right} / ${h.orders.length} \u4F4D\u5BA2\u4EBA${ct?`\uFF0C\u5168\u5C0D +${ct} \u91D1\u5E63`:""}`),L("div",{class:"row"},L("button",{class:"btn big",onclick:wt},"\u518D\u505A\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:ht},"\u4F11\u606F"))),M.overlay="task",lt&&xt($.thanks);return}let _=h.orders[h.i],C={},F=L("div",{class:"fb"}),q=`${_.who}: "${_.en}"`,Y=L("button",{class:"btn big",onclick:()=>{if(Y.disabled)return;Y.disabled=!0;let lt=Rd(_.want,C),ct=Object.keys(_.want).map(bt=>`${$.menu.find(zt=>zt.id===bt).icon} \xD7${_.want[bt]}`).join(" \uFF0B ");Si("waiter",Object.keys(_.want).join("+"),lt,Object.keys(C).filter(bt=>C[bt]>0).map(bt=>bt+"x"+C[bt]).join(",")),lt&&(h.right++,nt(on.perQ),Dn("served")),Ke(lt?"pickup":"hurt"),F.className="fb "+(lt?"ok":"bad"),F.append(L("div",{},lt?`\u9001\u5C0D\u4E86\uFF01 +${on.perQ} \u91D1\u5E63`:"\u9001\u932F\u4E86\uFF01\u5BA2\u4EBA\u9EDE\u7684\u662F\uFF1A"+ct),L("button",{class:"btn",onclick:()=>{h.i++,Ct()}},h.i+1>=h.orders.length?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u4F4D\u5BA2\u4EBA"))}},"\u{1F6CE}\uFE0F \u9001\u9910");pt(`\u{1F37D}\uFE0F \u7B2C ${h.i+1} / ${h.orders.length} \u4F4D\u5BA2\u4EBA`,..._t(q,null,!1),...Kr($.menu,C,"\u6258\u76E4"),L("div",{class:"row"},Y),F),M.overlay="task",xt(_.en)}let gt=o.lost,yt=(()=>{let h=oh(ll({skin:0,hair:3,hairColor:2,top:1,bottom:2,hat:1})),_=ph("\u{1F9D2} "+gt.kid.en);_.position.y=2.75,_.scale.multiplyScalar(1.5),h.add(_),h.scale.setScalar(.7),D.add(h);let[C,F]=gt.kid.at;return{n:{id:"lostkid",en:gt.kid.en,zh:gt.kid.zh},spot:{x:C,z:F},p:{x:C,y:c+1,z:F},g:h,yaw:Math.PI,sp:0}})(),Nt=h=>d.homes.find(_=>_.id===h);function Jt(){if(M.lost){It();return}let h=M.lostQ=Pd(d.homes,gt.kid.at[0],gt);pt(`\u{1F9D2} ${gt.kid.en}\u30FB${gt.kid.zh}`,..._t(gt.hello,gt.helloZh,M.zh),..._t(h.en,h.zh,M.zh),L("p",{class:"big"},gt.ask+(M.zh?"\u3000"+gt.askZh:"")),L("div",{class:"cards"},h.cards.map(_=>L("button",{class:"card en","data-id":_,onclick:C=>ee(_,C.currentTarget)},Nt(_).en)))),M.overlay="task",xt(gt.hello+" "+h.en)}function ee(h,_){let C=M.lostQ;if(!C||C.picked)return;C.picked=!0;let F=h===C.to;Si("lost",C.to+":pick",F,h),F&&nt(on.perQ),_.classList.add(F?"ok":"bad"),Ke(F?"pickup":"hurt"),k.ov.querySelector(".panel").append(L("div",{class:"fb "+(F?"ok":"bad")},L("div",{},F?`\u7B54\u5C0D\u4E86\uFF01 +${on.perQ} \u91D1\u5E63`:`\u5DEE\u4E00\u9EDE\uFF01${gt.kid.en} \u4F4F\u5728 `,F?null:L("b",{class:"en"},Nt(C.to).en)),..._t(gt.walk,gt.walkZh,M.zh),L("button",{class:"btn big",onclick:()=>{M.lost={to:C.to,tries:0,right:F,en:C.en,zh:C.zh},M.lostQ=null,wn(),ht()}},"\u5E36\u4ED6\u56DE\u5BB6")))}function It(){let h=M.lost;h&&(pt(`\u{1F9D2} \u5E36 ${gt.kid.en} \u56DE\u5BB6`,..._t(h.en,h.zh,M.zh),L("p",{class:"muted small"},`${gt.kid.en} \u8DDF\u5728\u4F60\u5F8C\u9762\u3002\u8D70\u5230\u4ED6\u5BB6\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\u3002`),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u597D"),L("button",{class:"btn ghost",onclick:()=>{M.lost=null,wn(),ht()}},"\u5148\u4E0D\u5E36\u4E86"))),M.overlay="task",xt(h.en))}function fe(){let h=M.lost;if(h)for(let _ of Xi){if(!_.b.isHome)continue;if(Math.hypot(M.p.x-_.f[0],M.p.z-_.f[1])>3.2){M.lostWrong===_.id&&(M.lostWrong=null);continue}if(_.id!==h.to){M.lostWrong!==_.id&&(M.lostWrong=_.id,h.tries++,W(`${gt.kid.en}\uFF1A\u300C${gt.wrong}\u300D${gt.wrongZh}`));continue}let C=h.tries===0,F=(C?on.perQ:0)+(C&&h.right?on.allRight:0);M.lost=null,wn(),Si("lost",h.to+":walk",C,h.to),nt(F),Dn("lost"),ve(),pt(`\u{1F3E0} ${_.b.en}`,..._t(gt.home,gt.homeZh,M.zh),L("p",{class:"big"},C?`\u4E00\u6B21\u5C31\u8D70\u5C0D\u4E86\uFF01 +${F} \u91D1\u5E63`:"\u627E\u5230\u4E86\uFF01\u4E0B\u6B21\u8A66\u8A66\u770B\u4E00\u6B21\u5C31\u8D70\u5230\u5C0D\u7684\u9580\u53E3\u3002"),L("div",{class:"row"},L("button",{class:"btn big",onclick:ht},"\u63B0\u63B0"))),M.overlay="task",xt(gt.home);return}}let Ie=(h,_)=>{for(let C=0;C<=4;C++)for(let F=-C;F<=C;F++)for(let q=-C;q<=C;q++){let Y=Math.floor(h)+F,lt=Math.floor(_)+q;if(Kt(Y,lt))return[Y+.5,lt+.5]}return null};function be(h,_){return Kt(Math.floor(h),Math.floor(_))?[h,_]:Kt(Math.floor(M.p.x),Math.floor(M.p.z))?[M.p.x,M.p.z]:Ie(M.p.x,M.p.z)}function me(h,_,C){let F=M.p.x+Math.sin(M.yaw)*1.4+Math.cos(M.yaw)*C,q=M.p.z+Math.cos(M.yaw)*1.4-Math.sin(M.yaw)*C,Y=Math.hypot(F-h.p.x,q-h.p.z),lt=0;if(Y>30||h.stuck){let Vt=Ie(M.p.x,M.p.z);Vt&&(h.p.x=Vt[0],h.p.z=Vt[1],h.jumps=(h.jumps||0)+1),h.stuck=!1,h.path=null,h.pt=0}else if(Y>.3){if((h.pt=(h.pt||0)-_)<=0&&(h.pt=.3,h.goal=be(F,q),h.path=null,h.goal&&!qr(Kt,h.p.x,h.p.z,h.goal[0],h.goal[1]))){let he=tt.find(Kt,Math.floor(h.p.x),Math.floor(h.p.z),Math.floor(h.goal[0]),Math.floor(h.goal[1]));he?h.path=he.slice(1,-1).map(Ve=>[Ve[0]+.5,Ve[1]+.5]):h.stuck=!0}for(;h.path&&h.path.length&&Math.hypot(h.path[0][0]-h.p.x,h.path[0][1]-h.p.z)<.25;)h.path.shift();let Vt=h.path&&h.path.length?h.path[0]:h.goal;if(Vt&&!h.stuck){let he=Vt[0]-h.p.x,Ve=Vt[1]-h.p.z,gn=Math.hypot(he,Ve);if(gn>.05){lt=Math.min(9,Y*2.5);let Zi=Math.min(gn,lt*_),Ji=h.p.x+he/gn*Zi,er=h.p.z+Ve/gn*Zi;Ut(Math.floor(Ji),Math.floor(er))?lt=0:(h.p.x=Ji,h.p.z=er),h.yaw=Math.atan2(-he,-Ve)}}}let ct=Math.floor(M.p.y)+1,bt=Math.floor(h.p.x),zt=Math.floor(h.p.z);for(;ct>c-3&&!l.flat.solid[Q.get(bt,ct-1,zt)];)ct--;return h.p.y+=(ct-h.p.y)*Math.min(1,_*10),lt}function Xe(h,_,C){M.lost&&!M.overlay?yt.sp=me(yt,h,-.7):!M.lost&&!M.overlay&&Math.hypot(yt.p.x-yt.spot.x,yt.p.z-yt.spot.z)>.5?(yt.p={x:yt.spot.x,y:c+1,z:yt.spot.z},yt.yaw=Math.PI,yt.sp=0):M.overlay&&(yt.sp=0),yt.g.position.set(yt.p.x,yt.p.y,yt.p.z),yt.g.rotation.y=yt.yaw,ah(yt.g,yt.sp,_,C)}let Et=null,Ye=()=>Id(Et,V&&V.patterns);function se(h){let _=Ye();if(!_.length){W("\u8AB2\u672C\u9084\u6C92\u8F09\u597D\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86\u4E0A\u8AB2");return}let C=_.find(F=>F.id===(h||Ld(_,vt("ke_log",[]),Xr())))||_[0];M.cls={u:C,U:_,qs:Dd(C,o.class.n,Math.random,o.class),i:-1,right:0},Qe()}function Qe(){let h=M.cls,_=o.class,C=k.ov;C.innerHTML="",C.hidden=!1,M.overlay="task";let F=L("div",{class:"panel talk"},L("div",{class:"p-head"},L("h2",{},`\u{1F4D8} \u82F1\u6587\u8AB2\uFF1A${h.u.title}`,L("small",{},h.i>=0&&h.i<h.qs.length?`\u3000\u7B2C ${h.i+1} / ${h.qs.length} \u984C`:"")),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ht},"\xD7")));if(C.append(F),h.i<0){let Y=h.U[(h.U.indexOf(h.u)+1)%h.U.length];F.append(..._t(_.intro.replace("{unit}",h.u.title),_.introZh.replace("{unit}",h.u.title),M.zh),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>{h.i=0,Qe()}},"\u958B\u59CB\u4E0A\u8AB2"),h.U.length>1?L("button",{class:"btn ghost",onclick:()=>se(Y.id)},"\u63DB\u4E00\u8AB2\uFF1A"+Y.title):null)),xt(_.intro.replace("{unit}",h.u.title));return}if(h.i<h.qs.length){let Y=h.qs[h.i];le(F,Y,lt=>{let ct=Y.cards[lt],bt=!!(ct&&ct.ok),zt=Y.cards.find(Vt=>Vt.ok).t;return Si("class",`${h.u.id}:${Y.kind}:${Y.key}`,bt,ct&&ct.t),bt&&h.right++,h.i++,xt(Y.full||zt),{ok:bt,answer:Y.full||zt,coins:bt?on.perQ:0,last:h.i>=h.qs.length}},Qe);return}let q=h.right===h.qs.length;q&&nt(on.allRight),Dn("class"),ve(),F.append(..._t(_.thanks,_.thanksZh,M.zh),L("p",{class:"big"},`\u7B54\u5C0D ${h.right} / ${h.qs.length} \u984C${q?`\uFF0C\u5168\u5C0D +${on.allRight} \u91D1\u5E63`:""}`),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>se(h.u.id)},"\u518D\u4E0A\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:ht},"\u4E0B\u8AB2"))),xt(_.thanks)}Bt.push(h=>h.n.id===Nn.npc?L("button",{class:"card",onclick:()=>M.list?z(!1):A()},M.list?"\u{1F9FA} \u518D\u770B\u4E00\u6B21\u8CFC\u7269\u6E05\u55AE":"\u{1F9FA} \u5E6B\u55AC\u723A\u723A\u8CB7\u6771\u897F\uFF08\u8CFC\u7269\u6E05\u55AE\uFF09"):null),Bt.push(h=>h.n.id==="shopkeeper"&&M.list?L("button",{class:"card",onclick:K},"\u{1F9FA} \u7167\u55AC\u723A\u723A\u7684\u6E05\u55AE\u62FF\u6771\u897F\u3001\u7D50\u5E33"):null),Bt.push(h=>h.n.id===$.npc?L("button",{class:"card",onclick:wt},"\u{1F37D}\uFE0F \u7576\u670D\u52D9\u751F\uFF08\u9001\u9910\u7D66 3 \u4F4D\u5BA2\u4EBA\uFF09"):null),Bt.push(h=>h.n.id===o.class.npc?L("button",{class:"card",onclick:()=>se()},"\u{1F4D8} \u4E0A\u4E00\u5802\u82F1\u6587\u8AB2\uFF08\u8AB2\u672C\uFF09"):null);function hn(){pt("\u5DE5\u4F5C",Jr(),L("p",{class:"muted"},`\u5230\u5DE5\u4F5C\u5730\u9EDE\u627E\u5C45\u6C11\u8003\u57F7\u7167\uFF0810 \u984C\u82F1\u6587\uFF0C\u7B54\u5C0D ${8} \u984C\u901A\u904E\uFF09\uFF0C\u901A\u904E\u5C31\u80FD\u7A7F\u5236\u670D\u3001\u4E0A\u73ED\u8CFA\u91D1\u5E63\u3002\u751F\u6D3B\u4EFB\u52D9\uFF08\u627E\u55AC\u723A\u723A\u3001\u6E6F\u59C6\u4E3B\u5EDA\u3001\u6797\u8001\u5E2B\u3001\u8FF7\u8DEF\u7684\u5C0F\u9EA5\u514B\uFF09\u4E0D\u7528\u57F7\u7167\u3002`),M.go?L("div",{class:"row"},L("button",{class:"btn",onclick:qi},"\u770B\u73FE\u5728\u7684\u4EFB\u52D9")):null,L("div",{class:"shop"},Object.keys(m).map(h=>{let _=m[h],C=t.buildings.find(Y=>Y.id===_.place),F=t.npcs.find(Y=>Y.id===_.npc),q=p.lic[h];return L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},`${_.zh} ${_.en}`),L("small",{},q?`\u2713 \u6709\u57F7\u7167\u30FB\u4E0A\u73ED ${p.done[h]||0} \u6B21`:`\u5230${C?C.zh:""}\u627E${F?F.zh:""}\u8003\u8A66`)),q?L("button",{class:"btn small",onclick:()=>{p.wear=p.wear===h?null:h,I(),ve(),hn()}},p.wear===h?"\u812B\u4E0B\u5236\u670D":"\u7A7F\u4E0A\u5236\u670D"):null)}))),M.overlay="panel"}let $n=N.filter(h=>h.reward.kind==="furniture").map(h=>h.reward.id),Un=t.furniture.slice(),de=()=>{for(let h of $n)R.has(h)&&!Un.includes(h)&&Un.push(h)};de();function we(){k.hotbar.innerHTML="",k.hotbar.hidden=!M.furn,M.furn&&(Un.forEach((h,_)=>k.hotbar.append(L("button",{class:"slot"+(_===M.furnSel?" on":""),title:l.name(h),onpointerdown:C=>{C.stopPropagation(),M.furnSel=_,we()}},L("span",{class:"fname"},l.name(h))))),k.hotbar.append(L("button",{class:"slot rot",onpointerdown:h=>{h.stopPropagation(),M.furnRot=(M.furnRot+1)%4,W("\u6905\u5B50\u65B9\u5411\uFF1A"+["\u5317","\u6771","\u5357","\u897F"][M.furnRot])}},"\u8F49\u5411")))}function mn(){let h=Yt(),_=L("div",{class:"shop"},d.homes.map((F,q)=>L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},`${q+1} \u865F\u623F\u5B50`),L("small",{},g.id===F.id?"\u9019\u662F\u4F60\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F")),g.id===F.id?L("button",{class:"btn small",onclick:()=>{An(),ht()}},"\u56DE\u5BB6"):L("button",{class:"btn small",onclick:()=>xe(F.id)},g.id?"\u642C\u904E\u53BB":"\u4F4F\u9019\u9593")))),C=(F,q)=>L("div",{class:"swatches"},F.map(Y=>L("button",{class:"sw",title:l.name(Y),style:"background:"+l.get(Y).colors.top,onclick:()=>q(Y)})));pt("\u6211\u7684\u5BB6",_,h?L("div",{},L("div",{class:"row"},L("button",{class:"btn",onclick:()=>{M.furn=!M.furn,we(),ht(),W(M.furn?"\u5BB6\u5177\u6A21\u5F0F\uFF1A\u9EDE\u5730\u677F\u653E\u3001\u9577\u6309\uFF08\u6216\u5DE6\u9375\uFF09\u62FF\u6389\uFF0C\u53EA\u6709\u5BB6\u88E1\u53EF\u4EE5":"\u5BB6\u5177\u6A21\u5F0F\u95DC\u6389\u4E86")}},M.furn?"\u95DC\u6389\u5BB6\u5177\u6A21\u5F0F":"\u5BB6\u5177\u6A21\u5F0F\uFF08\u653E\u5BB6\u5177\uFF09"),L("button",{class:"btn ghost",onclick:()=>{g.locked=!g.locked,W(g.locked?"\u9580\u9396\u4E0A\u4E86":"\u9580\u6253\u958B\u9396\u4E86"),mn()}},g.locked?"\u9580\uFF1A\u9396\u8457\uFF08\u9EDE\u4E00\u4E0B\u89E3\u9396\uFF09":"\u9580\uFF1A\u6C92\u9396\uFF08\u9EDE\u4E00\u4E0B\u4E0A\u9396\uFF09")),L("h3",{},"\u7246\u58C1\u984F\u8272"),C(t.wallColors,F=>Yn("wall",F)),L("h3",{},"\u5730\u677F"),C(t.floorColors,F=>Yn("floor",F)),qd()):L("p",{class:"muted"},"\u5148\u9078\u4E00\u9593\u623F\u5B50\u4F4F\u4E0B\u4F86\uFF08\u514D\u8CBB\uFF09\u3002"))}function xe(h){g.id&&g.id!==h&&(g.restore=(g.restore||[]).filter(_=>_!==h).concat(g.id),g.wall=null,g.floor=null),g.id=h,re(),An(),ht(),W("\u6B61\u8FCE\u56DE\u5BB6\uFF01\u6253\u958B\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u653E\u5BB6\u5177\u3001\u63DB\u984F\u8272"),ve()}function An(){let h=Yt();h&&(M.p={x:h.x+h.w/2,y:c+1,z:h.z-1.5},M.v={x:0,y:0,z:0},M.yaw=Math.PI)}function Yn(h,_){let C=Yt();if(C){if(Math.hypot(M.p.x-(C.x+C.w/2),M.p.z-(C.z+C.d/2))>30){W("\u5148\u56DE\u5BB6\u518D\u63DB\u984F\u8272");return}if(h==="wall"){let F=["glass","door","door_open"];for(let[q,Y,lt]of jf(C,c,(ct,bt,zt)=>{let Vt=Q.get(ct,bt,zt);return Vt&&!F.includes(l.get(Vt).id)}))Q.set(q,Y,lt,l.num(_));g.wall=_}else for(let F=C.x+1;F<C.x+C.w-1;F++)for(let q=C.z+1;q<C.z+C.d-1;q++){let Y=_.startsWith("carpet");Q.set(F,c,q,l.num(Y?"planks":_));let lt=l.get(Q.get(F,c+1,q));Y&&lt&&lt.n===0?Q.set(F,c+1,q,l.num(_)):!Y&&lt&&lt.id.startsWith("carpet")&&Q.set(F,c+1,q,0)}h==="floor"&&(g.floor=_),W("\u63DB\u597D\u4E86\uFF01"),ve()}}let Ks={bike:"\u{1F6B2}",scooter:"\u{1F6F4}",boat:"\u{1F6F6}",car:"\u{1F697}",bus:"\u{1F68C}"};function fh(){let h=Ae("#b-bike");h&&(h.textContent=Object.keys(ie).some(_=>R.has(_))?"\u4EA4\u901A":"\u8173\u8E0F\u8ECA")}function jr(h){let _=Se(),C=Math.floor(M.p.x),F=Math.floor(M.p.z);if(h&&ie[h].big&&at.has(C+","+F))return W("\u5728\u5C4B\u5B50\u88E1\u4E0D\u80FD\u958B\u8ECA\uFF0C\u5148\u8D70\u5230\u5916\u9762"),!1;if(G[h]){let q=null;for(let Y=0;Y<=3&&!q;Y++)for(let lt=-Y;lt<=Y&&!q;lt++)for(let ct=-Y;ct<=Y&&!q;ct++){let bt={x:M.p.x+lt,y:M.p.y,z:M.p.z+ct};Sf(bt,(zt,Vt,he)=>st(h,zt,Vt,he),G[h])&&(q=bt)}if(!q)return W("\u9019\u88E1\u592A\u7A84\u4E86\uFF0C\u8ECA\u5B50\u653E\u4E0D\u4E0B\u3002\u5230\u99AC\u8DEF\u4E0A\u518D\u53EB\u8ECA"),!1;M.p=q}if(h==="boat"){let q=null;for(let Y=-2;Y<=2&&!q;Y++)for(let lt=-2;lt<=2&&!q;lt++)Ut(C+Y,F+lt)&&(q=[C+Y,F+lt]);if(!q)return W("\u5C0F\u8239\u8981\u5728\u516C\u5712\u7684\u6C60\u5858\u908A\u624D\u80FD\u5750"),!1;M.p={x:q[0]+.5,y:c+1,z:q[1]+.5}}if(_==="boat"&&h!=="boat"){let q=null;for(let Y=1;Y<=4&&!q;Y++)for(let lt=-Y;lt<=Y&&!q;lt++)for(let ct=-Y;ct<=Y&&!q;ct++){let bt=C+lt,zt=F+ct;!Ut(bt,zt)&&!l.flat.solid[Q.get(bt,c+1,zt)]&&!l.flat.solid[Q.get(bt,c+2,zt)]&&(q=[bt,zt])}q&&(M.p={x:q[0]+.5,y:c+1,z:q[1]+.5})}return M.ride=h||null,M.bike=!!h,M.v={x:0,y:0,z:0},W(h?`${Ks[h]||""} \u5750\u4E0A${ie[h].zh.replace(/（.*）/,"")}\u4E86\uFF01`:"\u4E0B\u8ECA\u4E86\uFF0C\u7528\u8D70\u7684"),!0}function dh(){let h=["bike"].concat(Object.keys(ie).filter(_=>R.has(_)));pt("\u4EA4\u901A\u5DE5\u5177",L("div",{class:"cards"},L("button",{class:"card",onclick:()=>{jr(null),ht()}},"\u{1F6B6} \u8D70\u8DEF"),h.map(_=>L("button",{class:"card"+(Se()===_?" ok":""),onclick:()=>{jr(_)&&ht()}},`${Ks[_]||""} ${ie[_].zh}`))),L("p",{class:"muted small"},"\u6C7D\u8ECA\u3001\u516C\u8ECA\u958B\u4E0D\u9032\u5C4B\u5B50\uFF1B\u5C0F\u8239\u53EA\u80FD\u5728\u516C\u5712\u7684\u6C60\u5858\u3002")),M.overlay="panel"}let Ze=null,hs={dog:"\u5C0F\u72D7",cat:"\u5C0F\u8C93",rabbit:"\u5154\u5B50",dalmatian:"\u6591\u9EDE\u72D7"},hl=()=>Object.keys(hs).filter(h=>R.has(h));function ph(h){let _=document.createElement("canvas");_.width=256,_.height=56;let C=_.getContext("2d");C.fillStyle="rgba(239,235,221,.92)",C.fillRect(4,4,248,48),C.fillStyle="#26302A",C.textAlign="center",C.font="bold 30px sans-serif",C.fillText(h,128,40);let F=new Cn(_);F.colorSpace=Be;let q=new Li(new xi({map:F,depthWrite:!1}));return q.scale.set(1.3,.28,1),q.position.y=1,q}function Yi(){Ze&&(D.remove(Ze.g),Ze=null);let h=b.active;if(!h||!R.has(h)){b.active=null;return}let _=vd(h);_.add(ph(b.names[h]||hs[h])),D.add(_);let C=Ie(M.p.x+1,M.p.z+1)||[M.p.x+1,M.p.z+1];Ze={id:h,g:_,p:{x:C[0],y:M.p.y,z:C[1]},sp:0}}function Hd(h,_,C){let F=Ae("#b-pet"),q=!hl().length;F.hidden!==q&&(F.hidden=q),Ze&&(Ze.sp=me(Ze,h,.7),Ze.g.position.set(Ze.p.x,Ze.p.y,Ze.p.z),Ze.yaw!=null&&(Ze.g.rotation.y=Ze.yaw),Md(Ze.g,Ze.sp,_,C))}function ul(){pt("\u6211\u7684\u5BF5\u7269",L("p",{class:"muted"},"\u5BF5\u7269\u6703\u8DDF\u8457\u4F60\u8D70\u3002\u540D\u5B57\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002"),L("div",{class:"shop"},hl().map(h=>L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},hs[h]),L("input",{class:"typein pet-name",type:"text",maxlength:12,value:b.names[h]||"",placeholder:"\u5E6B\u7260\u53D6\u540D\u5B57",onkeydown:_=>_.stopPropagation(),onchange:_=>{b.names[h]=ld(_.target.value),_.target.value=b.names[h],b.active===h&&Yi(),ve()}})),L("button",{class:"btn small",onclick:()=>{b.active=b.active===h?null:h,Yi(),ve(),ul()}},b.active===h?"\u8B93\u7260\u5F85\u5728\u5BB6":"\u5E36\u7260\u51FA\u9580"))))),M.overlay="panel"}let fl=()=>L("button",{class:"btn ghost",onclick:dl},"\u2190 \u56DE\u624B\u6A5F");function dl(){let h=(C,F,q,Y)=>L("button",{class:"app","data-app":C,onclick:Y},L("span",{class:"ico"},F),L("span",{},q)),_=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date);pt("\u{1F4F1} \u5C0F\u93AE\u624B\u6A5F",L("div",{class:"phone-bar"},L("b",{},_),L("span",{},`\u{1FA99} ${f.coins}`)),L("div",{class:"apps"},h("ride","\u{1F697}","\u53EB\u8ECA",dh),h("wear","\u{1F455}","\u63DB\u8863\u670D",js),h("pet","\u{1F436}","\u53EB\u5BF5\u7269",mh),h("today","\u{1F4CA}","\u4ECA\u65E5\u984C\u6578",Wd),h("photo","\u{1F4F7}","\u62CD\u7167",xh))),k.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"}function mh(){let h=hl();if(!h.length){W("\u9084\u6C92\u6709\u5BF5\u7269\uFF1A\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\u8CB7\uFF0C\u6216\u627E\u79D8\u5BC6\u623F\u9593");return}pt("\u{1F436} \u53EB\u5BF5\u7269",L("p",{class:"muted"},"\u9EDE\u4E00\u96BB\uFF0C\u7260\u6703\u99AC\u4E0A\u8DD1\u5230\u4F60\u8EAB\u908A\u3002"),L("div",{class:"cards"},h.map(_=>L("button",{class:"card"+(b.active===_?" ok":""),"data-pet":_,onclick:()=>{b.active=_,Yi(),ve(),ht(),W(`${b.names[_]||hs[_]} \u8DD1\u904E\u4F86\u4E86\uFF01`)}},`${hs[_]}${b.names[_]?"\u300C"+b.names[_]+"\u300D":""}`))),L("div",{class:"row"},b.active?L("button",{class:"btn ghost",onclick:()=>{b.active=null,Yi(),ve(),mh()}},"\u8B93\u7260\u5F85\u5728\u5BB6"):null,fl())),k.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"}function gh(){let h=Xr(),_=Date.parse(h+"T00:00:00+08:00"),C=vt("ke_log",[]).filter(q=>q&&q.m==="town"&&q.t>=_&&q.t<_+864e5),F=q=>C.filter(Y=>q.test(Y.k||"")).length;return{all:C.length,license:F(/^town:license:/),job:F(/^town:job:/),life:F(/^town:life:/),chat:C.length-F(/^town:(license|job|life):/)}}function Wd(){let h=null;try{h=window.KidsDaily&&window.KidsDaily.today()}catch{}let _=h&&h.rows?h.rows.find(F=>F.k==="english"):null,C=gh();pt("\u{1F4CA} \u4ECA\u65E5\u984C\u6578",_?L("p",{class:"big"},`\u6BCF\u65E5\u82F1\u6587\uFF1A${_.n} / ${_.goal} \u984C ${_.done?"\u2713":""}`):L("p",{class:"muted"},"\u6BCF\u65E5\u82F1\u6587\u6E05\u55AE\u8981\u767B\u5165\u5B78\u7FD2\u7AD9\u624D\u6703\u8A18\u9304\u3002"),L("div",{class:"quests"},L("div",{class:"quest"},L("b",{},`\u4ECA\u5929\u5728\u5C0F\u93AE\u7B54\u4E86 ${C.license+C.job+C.life} \u984C\uFF08\u7B97\u9032\u6BCF\u65E5\u82F1\u6587\uFF09`),L("small",{},`\u57F7\u7167\u8003\u8A66 ${C.license}\u30FB\u5DE5\u4F5C ${C.job}\u30FB\u751F\u6D3B\u4EFB\u52D9 ${C.life}`)),L("div",{class:"quest"},L("b",{},`\u8DDF\u5C45\u6C11\u804A\u5929 ${C.chat} \u53E5`),L("small",{},"\u804A\u5929\u7DF4\u7FD2\u4E0D\u7B97\u6BCF\u65E5\u984C\u6578"))),Jr(),L("div",{class:"row"},fl())),k.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"}function xh(){ht(),P.render(D,B);let h=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date).replace(/:/g,"");T.toBlob(_=>{if(!_){W("\u62CD\u7167\u5931\u6557\uFF0C\u518D\u8A66\u4E00\u6B21");return}M.photo&&URL.revokeObjectURL(M.photo.url),M.photo={url:URL.createObjectURL(_),name:`\u5C0F\u670B\u53CB\u93AE_${Xr()}_${h}.png`,size:_.size},Ke("pickup"),pt("\u{1F4F7} \u7167\u7247",L("img",{class:"photo",src:M.photo.url,alt:"\u525B\u525B\u62CD\u7684\u5C0F\u93AE\u7167\u7247"}),L("p",{class:"muted small"},"iPad\uFF1A\u9577\u6309\u7167\u7247 \u2192\u300C\u52A0\u5165\u7167\u7247\u300D\uFF0C\u6216\u6309\u300C\u4E0B\u8F09\u7167\u7247\u300D\u3002\u7167\u7247\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u4EFB\u4F55\u5730\u65B9\u3002"),L("div",{class:"row"},L("a",{class:"btn",href:M.photo.url,download:M.photo.name},"\u2B07\uFE0F \u4E0B\u8F09\u7167\u7247"),L("button",{class:"btn ghost",onclick:xh},"\u518D\u62CD\u4E00\u5F35"),fl())),k.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"},"image/png")}let pl=s.cats[0][0];function Qr(){let h=s.items.filter(_=>_.cat===pl);pt("\u674E\u8001\u95C6\u7684\u5546\u5E97",L("div",{class:"row tabs"},s.cats.map(([_,C])=>L("button",{class:"btn small"+(_===pl?"":" ghost"),onclick:()=>{pl=_,Qr()}},C))),L("p",{class:"muted small"},`\u4F60\u6709 ${f.coins} \u91D1\u5E63\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u500B\u9322\u5305\uFF09\u3002`),L("div",{class:"shop"},h.map(_=>{let C=R.has(_.id);return L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},`${_.zh}`),L("small",{},C?"\u2713 \u5DF2\u7D93\u6709\u4E86":`${_.price} \u91D1\u5E63`)),C?null:L("button",{class:"btn small",onclick:()=>_h(_.id)},"\u8CB7"))}))),M.overlay="shop"}async function _h(h){let _=U[h];if(!_||M.buying)return!1;M.buying=!0;try{await ve();let C=nl(await $r.get("hw_coins")),F=bd(C),q=ad(_,R,{coins:F.balance(),hasHome:!!g.id});return q.ok?(await F.spend(_.price,"town:"+_.id)).ok?(R.add(_.id),await $r.putMany({hw_coins:Jc(C)}),f.coins=C.coins,it(),_.cat==="pet"&&!b.active&&(b.active=_.id,Yi()),_.id==="floor2"&&(g.floors=2,re()),_.theme&&(g.theme=_.theme),await ve(),fh(),Ke("coin"),W({ride:"\u8CB7\u5230\u4E86\uFF01\u6309\u300C\u4EA4\u901A\u300D\u5750\u4E0A\u53BB",pet:"\u8CB7\u5230\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\uFF0C\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",wear:"\u8CB7\u5230\u4E86\uFF01\u5230\u300C\u5916\u89C0\u300D\u7A7F\u4E0A",house:"\u8CB7\u5230\u4E86\uFF01\u56DE\u5BB6\u770B\u770B\uFF08\u5728\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u63DB\u6A23\u5F0F\uFF09"}[_.cat]),M.overlay==="shop"&&Qr(),!0):(W("\u8CB7\u4E0D\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21"),!1):(W(q.reason==="coins"?`\u91D1\u5E63\u4E0D\u5920\uFF0C\u9084\u5DEE ${q.short} \u679A\u3002\u53BB\u4E0A\u73ED\u6216\u7B54\u984C\u8CFA\u91D1\u5E63\u5427\uFF01`:q.reason==="home"?"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50":"\u5DF2\u7D93\u6709\u4E86"),!1)}finally{M.buying=!1}}Bt.push(h=>h.n.id==="shopkeeper"?L("button",{class:"card",onclick:Qr},"\u{1F6D2} \u8CB7\u6771\u897F\uFF08\u4EA4\u901A\u5DE5\u5177\u30FB\u5BF5\u7269\u30FB\u8863\u670D\u30FB\u623F\u5B50\uFF09"):null);let ml=()=>[g.id,g.floors||1,g.theme||"none"].join(":"),yh=h=>[[h.x,h.z],[h.x+h.w-1,h.z],[h.x,h.z+h.d-1],[h.x+h.w-1,h.z+h.d-1]].every(([_,C])=>Q.ready(_,C));function Xd(){for(let h of(g.restore||[]).slice()){let _=d.homes.find(q=>q.id===h);if(!_||h===g.id){g.restore=g.restore.filter(q=>q!==h);continue}if(!yh(_))continue;let C=new Map,F=(q,Y,lt)=>{let ct=Math.floor(q/16),bt=Math.floor(lt/16),zt=ct+","+bt;return C.has(zt)||C.set(zt,d.genChunk(ct,bt)),C.get(zt)[In(q-ct*16,Y,lt-bt*16)]};for(let q=_.x;q<_.x+_.w;q++)for(let Y=_.z;Y<_.z+_.d;Y++)for(let lt=c;lt<=c+nh;lt++){let ct=F(q,lt,Y);Q.get(q,lt,Y)!==ct&&Q.set(q,lt,Y,ct)}g.restore=g.restore.filter(q=>q!==h),ve()}}function gl(){Xd();let h=pe();if(!h||g.built===ml()||!yh(h))return;let _=0;for(let[C,F,q,Y]of Qf(h,c,{floors:g.floors,theme:g.theme,wall:g.wall})){let lt=Y==="air"?0:l.num(Y);Q.get(C,F,q)!==lt&&(Q.set(C,F,q,lt),_++)}g.built=ml(),_&&ve()}let vh={none:"\u539F\u672C\u7684\u6A23\u5B50",tree:"\u6A39\u5C4B",lighthouse:"\u71C8\u5854",castle:"\u57CE\u5821"},qd=()=>{let h=["none"].concat(s.items.filter(_=>_.theme&&R.has(_.id)).map(_=>_.theme));return h.length<2&&g.floors!==2?L("p",{class:"muted small"},"\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u53EF\u4EE5\u8CB7\u4E8C\u6A13\u548C\u6A39\u5C4B\uFF0F\u71C8\u5854\uFF0F\u57CE\u5821\u6A23\u5F0F\u3002"):L("div",{},L("h3",{},"\u623F\u5B50\u6A23\u5F0F"+(g.floors===2?"\uFF08\u6709\u4E8C\u6A13\uFF0C\u5C4B\u88E1\u89D2\u843D\u6709\u68AF\u5B50\uFF09":"")),L("div",{class:"swatches"},h.map(_=>L("button",{class:"sw"+((g.theme||"none")===_?" on":""),onclick:()=>{g.theme=_,gl(),ve(),mn(),W("\u63DB\u6210"+vh[_])}},vh[_]))))};function js(){let h=(C,F,q)=>L("div",{class:"av-row"},L("b",{},C),L("div",{class:"swatches"},Xn[F].map((Y,lt)=>rd(v,R,F,Y)?null:L("button",{class:"sw"+(w[F]===lt?" on":""),style:typeof Y=="string"&&Y[0]==="#"?"background:"+Y:"",onclick:()=>{w[F]=lt,I(),js(),ve()}},q?q(Y):"")))),_={short:"\u77ED\u9AEE",long:"\u9577\u9AEE",bun:"\u5305\u982D",spiky:"\u523A\u523A",none:"\u5149\u982D",cap:"\u68D2\u7403\u5E3D",beanie:"\u6BDB\u5E3D",bow:"\u8774\u8776\u7D50",true:"\u6234",false:"\u4E0D\u6234",flower:"\u82B1\u5708",tophat:"\u7D33\u58EB\u5E3D",crown:"\u7687\u51A0",stripe:"\u689D\u7D0B",star:"\u661F\u661F",scarf:"\u570D\u5DFE",goldbadge:"\u91D1\u5FBD\u7AE0",backpack:"\u80CC\u5305",cape:"\u62AB\u98A8"};pt("\u6211\u7684\u6A23\u5B50",h("\u819A\u8272","skin"),h("\u9AEE\u578B","hair",C=>_[C]),h("\u982D\u9AEE\u984F\u8272","hairColor"),h("\u4E0A\u8863","top",C=>C[0]==="#"?"":_[C]),h("\u8932\u5B50","bottom"),h("\u5E3D\u5B50","hat",C=>C==="none"?"\u4E0D\u6234":_[C]),h("\u773C\u93E1","glasses",C=>_[C]),h("\u914D\u4EF6","acc",C=>C==="none"?"\u4E0D\u6234":_[C]),L("p",{class:"muted small"},"\u5E3D\u5B50\u3001\u8863\u670D\u3001\u914D\u4EF6\u53EF\u4EE5\u5728\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u8CB7\u66F4\u591A\u3002"),L("p",{class:"muted"},"\u63DB\u597D\u5C31\u81EA\u52D5\u5B58\u8D77\u4F86\u3002"),L("div",{class:"row"},L("button",{class:"btn",onclick:ht},"\u5B8C\u6210")))}function $d(){pt("\u8A2D\u5B9A",L("label",{class:"set"},"\u97F3\u6A02",L("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:h=>eh({music:+h.target.value,muted:!1})})),L("label",{class:"set"},"\u97F3\u6548",L("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:h=>eh({sfx:+h.target.value,muted:!1})})),L("p",{},"\u91D1\u5E63\u8DDF\u300C\u65B9\u584A\u4E16\u754C\u300D\u662F\u540C\u4E00\u500B\u9322\u5305\u3002"),L("p",{},`\u79D8\u5BC6\u623F\u9593\uFF1A\u627E\u5230 ${Ys()} / ${N.length} \u9593\uFF08\u7DDA\u7D22\u5728\u516C\u5712\u65C1\u908A\u7684\u516C\u544A\u6B04\uFF09`),L("p",{},L("a",{class:"home-link",href:"../../#s/game",onclick:()=>ve()},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),L("p",{class:"muted small"},"\u7248\u672C "+uh))}let Zn=(h,_)=>{let C=Ae(h);C&&(C.onclick=F=>{F.stopPropagation(),ol(),_()})};Zn("#b-av",js),Zn("#b-home",mn),Zn("#b-set",$d),Zn("#b-job",hn),Zn("#b-pet",ul),Zn("#b-phone",dl),Ae("#task").onclick=h=>{h.stopPropagation(),!M.overlay&&(M.go?qi():M.lost?It():M.list&&z(!1))},Zn("#b-bike",()=>{if(!Object.keys(ie).some(h=>R.has(h))){jr(M.bike?null:"bike");return}dh()}),Zn("#b-view",()=>{M.view=M.view==="tp"?"fp":"tp"}),Zn("#b-zh",()=>{M.zh=!M.zh,Sy("kt_zh",M.zh?"on":"off"),Ae("#b-zh").textContent=M.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC"}),Ae("#b-zh").textContent=M.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC",Zn("#b-snd",()=>{qf(),Ae("#b-snd").textContent=al()?"\u{1F507}":"\u{1F50A}"});let bi=new J,Mh=()=>{let h=Math.cos(M.pitch);return{x:-Math.sin(M.yaw)*h,y:Math.sin(M.pitch),z:-Math.cos(M.yaw)*h}},xl=()=>({x:M.p.x,y:M.p.y+1.62+ue(),z:M.p.z}),Yd=h=>l.flat.boxes[h]||(l.flat.shape[h]===4?[[0,0,0,1,.1,1]]:null);function Zd(h,_,C){return h==="screen"?(bi.set(_/innerWidth*2-1,-(C/innerHeight)*2+1,.5).unproject(B).sub(B.position).normalize(),{o:{x:B.position.x,y:B.position.y,z:B.position.z},d:{x:bi.x,y:bi.y,z:bi.z}}):M.view==="tp"?(B.getWorldDirection(bi),{o:{x:B.position.x,y:B.position.y,z:B.position.z},d:{x:bi.x,y:bi.y,z:bi.z}}):{o:xl(),d:Mh()}}function Sh(h,_,C){let{o:F,d:q}=Zd(h,_,C),Y=M.view==="tp"?9:5,lt=$c(F,q,Y,(Vt,he,Ve)=>Q.get(Vt,he,Ve),Vt=>Vt&&!l.flat.liquid[Vt],Yd),ct=null,bt=lt?lt.dist+.3:Y;for(let Vt of y){let he=el(F,q,Vt.p,.8,1.9);he!=null&&he<bt&&(bt=he,ct=Vt)}{let Vt=el(F,q,yt.p,.7,1.4);Vt!=null&&Vt<bt&&(bt=Vt,ct=yt)}let zt=null;for(let Vt of Ne){let he=el(F,q,Vt.p,.7,.7);he!=null&&he<bt&&(bt=he,zt=Vt,ct=null)}return lt&&(lt.at={x:F.x+q.x*lt.dist,y:F.y+q.y*lt.dist,z:F.z+q.z*lt.dist}),{npc:ct,blk:zt?null:lt,note:zt}}function Qs(h,_,C,F){if(M.overlay)return;let{npc:q,blk:Y,note:lt}=Sh(h,_,C);if(lt&&!F){qn(lt);return}if(q&&!F){q===yt?Jt():Xt(q);return}if(!Y)return;let ct=l.get(Y.n);if(!M.furn&&ct&&ct.interact==="door"){Kd(Y);return}if(!M.furn&&ct&&ct.interact==="riddle"){Zs(Y);return}if(!M.furn&&ct&&ct.interact==="treasure"){Zr(Y);return}if(M.furn){if(F){M.furnPrev=null,bh(Y.x,Y.y,Y.z)?(Q.set(Y.x,Y.y,Y.z,0),Ke("break","wood")):W("\u53EA\u6709\u81EA\u5DF1\u5BB6\u88E1\u9762\u53EF\u4EE5\u62FF\u6389\u6771\u897F");return}let bt=_l(Y);if(!bt.ok){bt.why&&W(bt.why);return}if(h==="screen"&&!(M.furnPrev&&M.furnPrev.x===bt.x&&M.furnPrev.y===bt.y&&M.furnPrev.z===bt.z)){M.furnPrev=bt,W("\u770B\u534A\u900F\u660E\u7684\u9810\u89BD\uFF1A\u518D\u9EDE\u4E00\u6B21\u5C31\u653E\u4E0B\uFF0C\u300C\u8F49\u5411\u300D\u53EF\u4EE5\u8F49\u65B9\u5411");return}M.furnPrev=null,Q.set(bt.x,bt.y,bt.z,l.num(wh())),Ke("place","wood");return}F&&W("\u9019\u88E1\u662F\u5C0F\u93AE\u7684\u516C\u5171\u7A7A\u9593\uFF0C\u4E0D\u80FD\u6316\u4E5F\u4E0D\u80FD\u84CB\u5594")}let bh=(h,_,C)=>{let F=Yt(),q=g.floors===2?Hr(pe(),c,2).slab:-1;return _!==q&&Kf(F,h,_,C,c)},wh=()=>{let h=Un[M.furnSel];return l.get(h).place==="stairs"?h+["","_e","_s","_w"][M.furnRot]:h};function _l(h){let _=h.x+h.face[0],C=h.y+h.face[1],F=h.z+h.face[2];return bh(_,C,F)?Q.get(_,C,F)?{ok:!1}:Math.abs(_+.5-M.p.x)<.8&&Math.abs(F+.5-M.p.z)<.8&&C>=Math.floor(M.p.y)&&C<=Math.floor(M.p.y)+1?{ok:!1}:{ok:!0,x:_,y:C,z:F}:{ok:!1,why:Yt()?"\u5BB6\u5177\u53EA\u80FD\u653E\u5728\u81EA\u5DF1\u5BB6\u88E1\u9762":"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50"}}let Ah=new Mn({color:15723485,transparent:!0,opacity:.45,depthWrite:!1}),us=new un,Th=[0,1].map(()=>{let h=new De(new dn(1,1,1),Ah);return us.add(h),h});us.visible=!1,D.add(us);function Jd(h){let _=null;if(M.furn&&M.started&&!M.overlay)if(M.touch)_=M.furnPrev&&_l({x:M.furnPrev.x,y:M.furnPrev.y,z:M.furnPrev.z,face:[0,0,0]});else{let{blk:Y}=Sh("center");_=Y&&_l(Y)}if(!_||!_.ok){us.visible=!1;return}let C=l.num(wh()),F=l.flat.shape[C],q=l.flat.boxes[C]||(F===4?[[0,0,0,1,.1,1]]:F>=1&&F<=3?[[.2,0,.2,.8,.7,.8]]:[[0,0,0,1,1,1]]);Th.forEach((Y,lt)=>{let ct=q[lt];Y.visible=!!ct,ct&&(Y.scale.set((ct[3]-ct[0])*.98,(ct[4]-ct[1])*.98,(ct[5]-ct[2])*.98),Y.position.set(_.x+(ct[0]+ct[3])/2,_.y+(ct[1]+ct[4])/2,_.z+(ct[2]+ct[5])/2))}),Ah.color.setScalar(.5+.5*h),us.visible=!0}function Kd(h){let _=Yt(),C=_&&h.x>=_.x&&h.x<_.x+_.w&&h.z>=_.z&&h.z<_.z+_.d;if(d.homes.find(ct=>h.x>=ct.x&&h.x<ct.x+ct.w&&h.z>=ct.z&&h.z<ct.z+ct.d)&&!C){W("\u9019\u4E0D\u662F\u4F60\u7684\u5BB6\uFF0C\u6572\u6572\u9580\u5C31\u597D");return}if(C&&g.locked){W("\u9580\u9396\u8457\uFF0C\u5230\u300C\u6211\u7684\u5BB6\u300D\u89E3\u9396");return}let q=l.get(h.n),Y=l.get(q.openAs||q.closeAs);if(!Y)return;let lt=h.y;for(;l.get(Q.get(h.x,lt-1,h.z)).interact==="door";)lt--;for(let ct=lt;l.get(Q.get(h.x,ct,h.z)).interact==="door";ct++)Q.set(h.x,ct,h.z,Y.n);Ke("door")}let Eh=()=>{cl||!T.requestPointerLock||T.requestPointerLock()};addEventListener("keydown",h=>{if(h.target&&h.target.tagName==="INPUT")return;let _=h.key.toLowerCase();if(_==="escape"&&M.overlay){ht();return}M.overlay||(M.keys[_]=!0,h.code==="Space"&&(M.keys[" "]=!0,h.preventDefault()),_==="b"&&Ae("#b-bike").click(),_==="v"&&Ae("#b-view").click(),_==="p"&&Ae("#b-phone").click(),_==="r"&&(M.furnRot=(M.furnRot+1)%4),_>="1"&&_<="9"&&M.furn&&(M.furnSel=+_-1,we()))}),addEventListener("keyup",h=>{M.keys[h.key.toLowerCase()]=!1,h.code==="Space"&&(M.keys[" "]=!1)}),addEventListener("blur",()=>{M.keys={}}),T.addEventListener("mousedown",h=>{M.touch||M.overlay||document.pointerLockElement!==T&&(Eh(),!cl)||(h.button===0&&Qs("center",0,0,M.furn),h.button===2&&Qs("center",0,0,!1))}),T.addEventListener("contextmenu",h=>h.preventDefault()),addEventListener("mousemove",h=>{document.pointerLockElement===T&&(M.yaw-=h.movementX*.0024,M.pitch=Math.max(-1.4,Math.min(1.4,M.pitch-h.movementY*.0024)))});let tr=new Map;T.addEventListener("pointerdown",h=>{if(h.pointerType!=="touch"||M.overlay)return;if(M.touch=!0,h.preventDefault(),ol(),h.clientX<innerWidth*.4&&h.clientY>innerHeight*.35&&!M.joy.active){M.joy={x:0,y:0,active:!0,ox:h.clientX,oy:h.clientY},k.joy.style.transform=`translate(${h.clientX-60}px, ${h.clientY-60}px)`,k.joy.hidden=!1,tr.set(h.pointerId,{kind:"joy"});return}let _={kind:"look",x:h.clientX,y:h.clientY,sx:h.clientX,sy:h.clientY,t0:performance.now(),drag:!1};_.timer=setTimeout(()=>{_.drag||(_.long=!0,Qs("screen",_.x,_.y,!0))},450),tr.set(h.pointerId,_)},{passive:!1}),addEventListener("pointermove",h=>{let _=tr.get(h.pointerId);if(!_)return;if(_.kind==="joy"){let q=h.clientX-M.joy.ox,Y=h.clientY-M.joy.oy,lt=Math.hypot(q,Y);lt>55&&(q*=55/lt,Y*=55/lt),M.joy.x=q/55,M.joy.y=Y/55,k.knob.style.transform=`translate(${q}px,${Y}px)`;return}let C=h.clientX-_.x,F=h.clientY-_.y;_.x=h.clientX,_.y=h.clientY,!_.drag&&Math.hypot(_.x-_.sx,_.y-_.sy)>12&&(_.drag=!0,clearTimeout(_.timer)),_.drag&&(M.yaw-=C*.0055,M.pitch=Math.max(-1.4,Math.min(1.4,M.pitch-F*.0055)))});let Ch=h=>{let _=tr.get(h.pointerId);if(_){if(tr.delete(h.pointerId),_.kind==="joy"){M.joy={x:0,y:0,active:!1},k.joy.hidden=!0;return}clearTimeout(_.timer),!_.drag&&!_.long&&performance.now()-_.t0<450&&Qs("screen",_.x,_.y,!1)}};addEventListener("pointerup",Ch),addEventListener("pointercancel",Ch);let yl=Ae("#b-jump");yl.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),M.jumpHeld=!0}),yl.addEventListener("pointerup",()=>{M.jumpHeld=!1}),yl.addEventListener("pointerleave",()=>{M.jumpHeld=!1}),document.addEventListener("touchmove",h=>{h.target.closest(".panel")||h.preventDefault()},{passive:!1}),["gesturestart","dblclick"].forEach(h=>document.addEventListener(h,_=>_.preventDefault(),{passive:!1})),document.body.classList.toggle("is-touch",M.touch),Ae("#ui").classList.toggle("touch",M.touch);async function ve(){let h={kt_player:{x:M.p.x,y:M.p.y,z:M.p.z,yaw:M.yaw,view:M.view},kt_home:g,kt_avatar:w,kt_jobs:p,kt_owned:[...R],kt_pets:b,kt_life:E};for(let _ of M.dirty){let C=x.get(_);C&&(h["kt_chunk:"+_]=jc(C))}M.dirty.clear();try{if(await Mi.putMany(h),M.pending){let _=M.pending;M.pending=0;let C=nl(await $r.get("hw_coins"));Hs(C,_),await $r.putMany({hw_coins:Jc(C)}),f.coins=C.coins,it()}}catch(_){console.warn("save failed",_),!M.quotaWarned&&_&&_.name==="QuotaExceededError"&&(M.quotaWarned=!0,W("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF0C\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{M.started&&ve()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&M.started&&ve()}),addEventListener("pagehide",()=>{M.started&&ve()}),Ae("#go").onclick=()=>{Ae("#start").hidden=!0,M.started=!0,V||ot(),ol(),M.touch||Eh(),u.av||setTimeout(js,300)},it(),we(),wn(),fh(),Yi(),ci();let jd=new $t("#EFEBDD"),Qd=new $t("#22302F"),tp=new $t("#E6B48C"),Rh=performance.now(),to=0,vl=0;function ep(h){let _=M.keys,C=(_.d?1:0)-(_.a?1:0),F=(_.w?1:0)-(_.s?1:0);M.joy.active&&(C=M.joy.x,F=-M.joy.y);let q=Math.min(1,Math.hypot(C,F));if(q>0){let Nh=Math.hypot(C,F);C=C/Nh*q,F=F/Nh*q}let Y=-Math.sin(M.yaw),lt=-Math.cos(M.yaw),ct=Math.cos(M.yaw),bt=-Math.sin(M.yaw),zt=_.shift||M.joy.active&&q>.92,Vt=M.bike?ie[Se()]:null,he=Vt?zt?Vt.run:Vt.speed:zt?6.2:4.3,Ve=(Y*F+ct*C)*he,gn=(lt*F+bt*C)*he,Zi=1-Math.exp(-(M.onGround?12:5)*h);M.v.x+=(Ve-M.v.x)*Zi,M.v.z+=(gn-M.v.z)*Zi;let Ji=Math.floor(M.p.x),er=Math.floor(M.p.z),Lh=!M.bike&&(l.flat.climb[Q.get(Ji,Math.floor(M.p.y),er)]||l.flat.climb[Q.get(Ji,Math.floor(M.p.y)+1,er)]);Lh?M.v.y=_[" "]||M.jumpHeld||F>.1?3.2:Math.max(M.v.y-28*h,-1.5):(M.v.y-=28*h,M.v.y<-40&&(M.v.y=-40)),(_[" "]||M.jumpHeld)&&M.onGround&&!Lh&&Se()!=="boat"&&(M.v.y=8.6,M.onGround=!1);let np=bf(M.p,M.v,h,ce,{canStep:!0,grounded:M.onGround,w:G[Se()]});M.onGround=np.onGround;let eo=t.bound+1;M.p.x=Math.max(-eo,Math.min(eo,M.p.x)),M.p.z=Math.max(-eo,Math.min(eo,M.p.z)),M.p.y<0&&(M.p={x:j.x,y:j.y,z:j.z},M.v={x:0,y:0,z:0});let Dh=Math.hypot(M.v.x,M.v.z);M.onGround&&Dh>1&&(M.stepT=(M.stepT||0)+h*Dh,M.stepT>(M.bike?4:1.8)&&Se()!=="boat"&&(M.stepT=0,Ke("step","stone")))}function Ph(h){requestAnimationFrame(Ph);let _=(h-Rh)/1e3;Rh=h;let C=Math.min(.05,_);M.frames.push(_*1e3),M.frames.length>4e3&&M.frames.shift(),Q.update(M.p.x,M.p.z);let F=Q.ready(M.p.x,M.p.z);M.started&&!M.overlay&&F&&(ep(C),(M.go||M.lost)&&(M.goT=(M.goT||0)+C)>.25&&(M.goT=0,Yr(),fe())),M.time=(M.time+C/vy)%1;let q=Math.sin(M.time*Math.PI*2),Y=Math.min(1,Math.max(0,(q+.12)/.42)),lt=.35+.65*Y;H.copy(Qd).lerp(jd,Y).lerp(tp,Math.max(0,1-Math.abs(q)/.3)*.4*(Y>.05?1:.4)),X.uniforms.uDay.value=Y;let ct=H.getHexString();X.uniforms.uFog.value.set(parseInt(ct.slice(0,2),16)/255,parseInt(ct.slice(2,4),16)/255,parseInt(ct.slice(4,6),16)/255);let bt=Y>.3?"calm":"night";bt!==M.scene&&(M.scene=bt,$f(bt));for(let he of y)!he.busy&&!M.overlay?id(he,C):he.v={x:0,y:0,z:0},Hf(he.g,he,h/1e3);Gf(lt),Re.position.set(M.p.x,M.p.y+ue(),M.p.z),Re.rotation.y=M.yaw,ah(Re,M.bike?0:Math.hypot(M.v.x,M.v.z),h/1e3,lt),Re.visible=M.view==="tp";for(let he in Pe){let Ve=Pe[he],gn=he===Se();Ve.visible=gn,gn&&(Ve.position.set(M.p.x,M.p.y,M.p.z),Ve.rotation.y=M.yaw,Sd(Ve,lt))}Hd(C,h/1e3,lt),Xe(C,h/1e3,lt),Jd(lt),(M.houseT=(M.houseT||0)+C)>1&&(M.houseT=0,gl());let zt=xl(),Vt=Mh();if(M.view==="tp"){let he=$c(zt,{x:-Vt.x,y:-Vt.y,z:-Vt.z},4.5,(gn,Zi,Ji)=>Q.get(gn,Zi,Ji),gn=>l.flat.opaque[gn]===1),Ve=he?Math.max(.4,he.dist-.25):4.5;B.position.set(zt.x-Vt.x*Ve,zt.y-Vt.y*Ve+.3,zt.z-Vt.z*Ve)}else B.position.set(zt.x,zt.y,zt.z);B.rotation.set(M.pitch,M.yaw,0),P.render(D,B),to+=_,vl++,to>.5&&(k.dbg&&(k.dbg.textContent=`${Math.round(vl/to)} fps \xB7 \u5340\u584A ${Q.stats.loaded} \xB7 ${M.p.x.toFixed(1)}, ${M.p.y.toFixed(1)}, ${M.p.z.toFixed(1)}`),to=0,vl=0),k.loading.hidden=F||!M.started}let Ih=()=>{P.setSize(innerWidth,innerHeight,!1),B.aspect=innerWidth/innerHeight,B.updateProjectionMatrix()};addEventListener("resize",Ih),Ih(),window.KT={build:uh,TEST:cl,G:M,reg:l,world:Q,wallet:f,npcs:y,terr:d,homeState:g,DLG:e,spawn:j,start(){Ae("#go").click()},ready:()=>Q.ready(M.p.x,M.p.z),state:()=>({pos:{...M.p},coins:f.coins,loaded:Q.stats.loaded,overlay:M.overlay}),talk:(h,_)=>dt(y.find(C=>C.n.id===h),_),menu:h=>Xt(y.find(_=>_.n.id===h)),JOBS:m,jobs:p,places:Xi,me:()=>Re,openShop:Qr,buy:_h,owned:R,notes:Ne,readNote:qn,secrets:N,chatReady:()=>!!V,setRide:jr,rideId:Se,pets:b,pet:()=>Ze,openPets:ul,houseTick:gl,houseSig:ml,myHome:Yt,exam:je,work:as,ex:()=>M.exam,task:()=>M.task,go:()=>M.go,openJobs:hn,pick:h=>{let _=k.ov.querySelectorAll(".cards .card")[h];_&&_.click()},dlg:()=>M.dlg,claim:xe,goHome:An,paint:Yn,close:ht,save:ve,avatar:()=>w,setAvatar(h){w=ll(h),I()},openAvatar:js,openHome:mn,lookAt(h,_,C){let F=xl(),q=h-F.x,Y=_-F.y,lt=C-F.z;M.yaw=Math.atan2(-q,-lt),M.pitch=Math.atan2(Y,Math.hypot(q,lt))},use(h){Qs("center",0,0,!!h)},ghost:()=>({visible:us.visible,boxes:Th.filter(h=>h.visible).map(h=>[...h.position.toArray().map(_=>+_.toFixed(2)),...h.scale.toArray().map(_=>+_.toFixed(2))])}),furnPrev:()=>M.furnPrev,noteTex:()=>[Rt,jt],phone:dl,photo:()=>M.photo,rideW:h=>G[h],townToday:gh,LIFE:o,life:E,lifeTick:ci,giveList:A,basketPanel:K,waiterStart:wt,waiter:()=>M.waiter,lostStart:Jt,lost:()=>M.lost,lostQ:()=>M.lostQ,kid:yt,classStart:se,cls:()=>M.cls,tbReady:()=>!!Et,list:()=>M.list,walk:(h,_)=>Kt(h,_),los:(h,_,C,F)=>qr(Kt,h,_,C,F),perf(){return{frames:M.frames.slice()}},resetPerf(){M.frames.length=0}},requestAnimationFrame(Ph)}by().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
