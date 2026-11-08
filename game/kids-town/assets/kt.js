(()=>{var Ih=0,kl=1,Lh=2;var Ar=1,Dh=2,Ds=3,Bi=0,cn=1,Pn=2,Qn=0,Ns=1,zl=2,Vl=3,Gl=4,Nh=5;var es=100,Uh=101,Fh=102,Oh=103,Bh=104,kh=200,zh=201,Vh=202,Gh=203,Hl=204,Wl=205,Hh=206,Wh=207,Xh=208,qh=209,Yh=210,$h=211,Zh=212,Jh=213,Kh=214,yo=0,vo=1,Mo=2,Cs=3,So=4,bo=5,wo=6,Ao=7,Xl=0,jh=1,Qh=2,Gn=0,ql=1,Yl=2,$l=3,Zl=4,Jl=5,Kl=6,jl=7;var Ql=300,ki=301,ns=302,Qo=303,ta=304,Tr=306,To=1e3,Zn=1001,Eo=1002,Ke=1003,tu=1004;var Er=1005;var We=1006,ea=1007;var zi=1008;var Mn=1009,tc=1010,ec=1011,Us=1012,na=1013,Hn=1014,Wn=1015,Xn=1016,ia=1017,sa=1018,Fs=1020,nc=35902,ic=35899,sc=1021,rc=1022,In=1023,Jn=1026,Vi=1027,oc=1028,ra=1029,Gi=1030,oa=1031;var aa=1033,Cr=33776,Rr=33777,Pr=33778,Ir=33779,la=35840,ca=35841,ha=35842,ua=35843,fa=36196,da=37492,pa=37496,ma=37488,ga=37489,Lr=37490,xa=37491,_a=37808,ya=37809,va=37810,Ma=37811,Sa=37812,ba=37813,wa=37814,Aa=37815,Ta=37816,Ea=37817,Ca=37818,Ra=37819,Pa=37820,Ia=37821,La=36492,Da=36494,Na=36495,Ua=36283,Fa=36284,Dr=36285,Oa=36286;var or=2300,Co=2301,xo=2302,Dl=2303,Nl=2400,Ul=2401,Fl=2402;var eu=3200;var ac=0,nu=1,mi="",He="srgb",ar="srgb-linear",lr="linear",ye="srgb";var _o=7680;var iu=519,su=512,ru=513,ou=514,Ba=515,au=516,lu=517,ka=518,cu=519,lc=35044;var cc="300 es",zn=2e3,cr=2001;function bd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hu(){let n=hr("canvas");return n.style.display="block",n}var hh={},Rs=null;function ur(...n){let t="THREE."+n.shift();Rs?Rs("log",t,...n):console.log(t,...n)}function uu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xt(...n){n=uu(n);let t="THREE."+n.shift();if(Rs)Rs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Wt(...n){n=uu(n);let t="THREE."+n.shift();if(Rs)Rs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ts(...n){let t=n.join(" ");t in hh||(hh[t]=!0,Xt(...n))}function fu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var du={[yo]:vo,[Mo]:wo,[So]:Ao,[Cs]:bo,[vo]:yo,[wo]:Mo,[Ao]:So,[bo]:Cs},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hl=Math.PI/180,Ro=180/Math.PI;function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function Ad(n,t){return(n%t+t)%t}function ul(n,t,e){return(1-e)*n+e*t}function $n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pc=class pc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pc.prototype.isVector2=!0;var re=pc,jn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],f=r[o+0],g=r[o+1],x=r[o+2],S=r[o+3];if(h!==S||l!==f||c!==g||d!==x){let m=l*f+c*g+d*x+h*S;m<0&&(f=-f,g=-g,x=-x,S=-S,m=-m);let p=1-a;if(m<.9995){let C=Math.acos(m),U=Math.sin(C);p=Math.sin(p*C)/U,a=Math.sin(a*C)/U,l=l*p+f*a,c=c*p+g*a,d=d*p+x*a,h=h*p+S*a}else{l=l*p+f*a,c=c*p+g*a,d=d*p+x*a,h=h*p+S*a;let C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[o],f=r[o+1],g=r[o+2],x=r[o+3];return t[e]=a*x+d*h+l*g-c*f,t[e+1]=l*x+d*f+c*h-a*g,t[e+2]=c*x+d*g+a*f-l*h,t[e+3]=d*x-a*h-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),h=a(r/2),f=l(i/2),g=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"YXZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"ZXY":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"ZYX":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"YZX":this._x=f*d*h+c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h-f*g*x;break;case"XZY":this._x=f*d*h-c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h+f*g*x;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=i+a+h;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>h){let g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>h){let g=2*Math.sqrt(1+a-i-h);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+h-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mc=class mc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),d=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*d,this.y=i+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mc.prototype.isVector3=!0;var Z=mc,fl=new Z,uh=new jn,gc=class gc{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],x=i[8],S=s[0],m=s[3],p=s[6],C=s[1],U=s[4],v=s[7],A=s[2],E=s[5],D=s[8];return r[0]=o*S+a*C+l*A,r[3]=o*m+a*U+l*E,r[6]=o*p+a*v+l*D,r[1]=c*S+d*C+h*A,r[4]=c*m+d*U+h*E,r[7]=c*p+d*v+h*D,r[2]=f*S+g*C+x*A,r[5]=f*m+g*U+x*E,r[8]=f*p+g*v+x*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,f=a*l-d*r,g=c*r-o*l,x=e*h+i*f+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=h*S,t[1]=(s*c-d*i)*S,t[2]=(a*i-s*o)*S,t[3]=f*S,t[4]=(d*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=g*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dl.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gc.prototype.isMatrix3=!0;var Jt=gc,dl=new Jt,fh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){let n={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ar]:{primaries:t,whitePoint:i,transfer:lr,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),n}var le=Td();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hs,Po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=hr("canvas")),hs.width=t.width,hs.height=t.height;let s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ed=0,Ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Po.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Cd=0,ml=new Z,ln=class n extends Kn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=We,o=zi,a=In,l=Mn,c=n.DEFAULT_ANISOTROPY,d=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ri(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ql;ln.DEFAULT_ANISOTROPY=1;var xc=class xc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],x=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,v=(g+1)/2,A=(p+1)/2,E=(d+f)/4,D=(h+S)/4,M=(x+m)/4;return U>v&&U>A?U<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(U),s=E/i,r=D/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=M/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=M/r),this.set(i,s,r,e),this}let C=Math.sqrt((m-x)*(m-x)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(C)<.001&&(C=1),this.x=(m-x)/C,this.y=(h-S)/C,this.z=(f-d)/C,this.w=Math.acos((c+g+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;var Oe=xc,Io=class extends Kn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ln(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Io{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},fr=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var jo=class jo{constructor(t,e,i,s,r,o,a,l,c,d,h,f,g,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,d,h,f,g,x,S,m)}set(t,e,i,s,r,o,a,l,c,d,h,f,g,x,S,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=f,p[3]=g,p[7]=x,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*d,g=o*h,x=a*d,S=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=g+x*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=x+g*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*d,g=l*h,x=c*d,S=c*h;e[0]=f+S*a,e[4]=x*a-g,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=g*a-x,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*d,g=l*h,x=c*d,S=c*h;e[0]=f-S*a,e[4]=-o*h,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*d,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*d,g=o*h,x=a*d,S=a*h;e[0]=l*d,e[4]=x*c-g,e[8]=f*c+S,e[1]=l*h,e[5]=S*c+f,e[9]=g*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,g=o*c,x=a*l,S=a*c;e[0]=l*d,e[4]=S-f*h,e[8]=x*h+g,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=g*h+x,e[10]=f-S*h}else if(t.order==="XZY"){let f=o*l,g=o*c,x=a*l,S=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+S,e[5]=o*d,e[9]=g*h-x,e[2]=x*h-g,e[6]=a*d,e[10]=S*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Pd)}lookAt(t,e,i){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),wi.crossVectors(i,gn),wi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),wi.crossVectors(i,gn)),wi.normalize(),$r.crossVectors(gn,wi),s[0]=wi.x,s[4]=$r.x,s[8]=gn.x,s[1]=wi.y,s[5]=$r.y,s[9]=gn.y,s[2]=wi.z,s[6]=$r.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],x=i[2],S=i[6],m=i[10],p=i[14],C=i[3],U=i[7],v=i[11],A=i[15],E=s[0],D=s[4],M=s[8],T=s[12],R=s[1],I=s[5],H=s[9],k=s[13],F=s[2],W=s[6],tt=s[10],X=s[14],ct=s[3],j=s[7],ot=s[11],at=s[15];return r[0]=o*E+a*R+l*F+c*ct,r[4]=o*D+a*I+l*W+c*j,r[8]=o*M+a*H+l*tt+c*ot,r[12]=o*T+a*k+l*X+c*at,r[1]=d*E+h*R+f*F+g*ct,r[5]=d*D+h*I+f*W+g*j,r[9]=d*M+h*H+f*tt+g*ot,r[13]=d*T+h*k+f*X+g*at,r[2]=x*E+S*R+m*F+p*ct,r[6]=x*D+S*I+m*W+p*j,r[10]=x*M+S*H+m*tt+p*ot,r[14]=x*T+S*k+m*X+p*at,r[3]=C*E+U*R+v*F+A*ct,r[7]=C*D+U*I+v*W+A*j,r[11]=C*M+U*H+v*tt+A*ot,r[15]=C*T+U*k+v*X+A*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],g=t[14],x=t[3],S=t[7],m=t[11],p=t[15],C=l*g-c*f,U=a*g-c*h,v=a*f-l*h,A=o*g-c*d,E=o*f-l*d,D=o*h-a*d;return e*(S*C-m*U+p*v)-i*(x*C-m*A+p*E)+s*(x*U-S*A+p*D)-r*(x*v-S*E+m*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-i*(r*d-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],g=t[11],x=t[12],S=t[13],m=t[14],p=t[15],C=e*a-i*o,U=e*l-s*o,v=e*c-r*o,A=i*l-s*a,E=i*c-r*a,D=s*c-r*l,M=d*S-h*x,T=d*m-f*x,R=d*p-g*x,I=h*m-f*S,H=h*p-g*S,k=f*p-g*m,F=C*k-U*H+v*I+A*R-E*T+D*M;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/F;return t[0]=(a*k-l*H+c*I)*W,t[1]=(s*H-i*k-r*I)*W,t[2]=(S*D-m*E+p*A)*W,t[3]=(f*E-h*D-g*A)*W,t[4]=(l*R-o*k-c*T)*W,t[5]=(e*k-s*R+r*T)*W,t[6]=(m*v-x*D-p*U)*W,t[7]=(d*D-f*v+g*U)*W,t[8]=(o*H-a*R+c*M)*W,t[9]=(i*R-e*H-r*M)*W,t[10]=(x*E-S*v+p*C)*W,t[11]=(h*v-d*E-g*C)*W,t[12]=(a*T-o*I-l*M)*W,t[13]=(e*I-i*T+s*M)*W,t[14]=(S*U-x*A-m*C)*W,t[15]=(d*A-h*U+f*C)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,f=r*c,g=r*d,x=r*h,S=o*d,m=o*h,p=a*h,C=l*c,U=l*d,v=l*h,A=i.x,E=i.y,D=i.z;return s[0]=(1-(S+p))*A,s[1]=(g+v)*A,s[2]=(x-U)*A,s[3]=0,s[4]=(g-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+C)*E,s[7]=0,s[8]=(x+U)*D,s[9]=(m-C)*D,s[10]=(1-(f+S))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=us.set(s[0],s[1],s[2]).length(),a=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fn.copy(this);let c=1/o,d=1/a,h=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,e.setFromRotationMatrix(Fn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=zn,l=!1){let c=this.elements,d=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),g=(i+s)/(i-s),x,S;if(l)x=r/(o-r),S=o*r/(o-r);else if(a===zn)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===cr)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zn,l=!1){let c=this.elements,d=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),g=-(i+s)/(i-s),x,S;if(l)x=1/(o-r),S=o/(o-r);else if(a===zn)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===cr)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};jo.prototype.isMatrix4=!0;var Be=jo,us=new Z,Fn=new Be,Rd=new Z(0,0,0),Pd=new Z(1,1,1),wi=new Z,$r=new Z,gn=new Z,ph=new Be,mh=new jn,Pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Id=0,gh=new Z,fs=new jn,ai=new Be,Zr=new Z,Qs=new Z,Ld=new Z,Dd=new jn,xh=new Z(1,0,0),_h=new Z(0,1,0),yh=new Z(0,0,1),vh={type:"added"},Nd={type:"removed"},ds={type:"childadded",child:null},gl={type:"childremoved",child:null},_n=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Z,e=new Pi,i=new jn,s=new Z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Jt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Qs,Zr,this.up):ai.lookAt(Zr,Qs,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ai),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),ds.child=t,this.dispatchEvent(ds),ds.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new Z(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ud={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=Ad(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=xl(o,r,t+1/3),this.g=xl(o,r,t),this.b=xl(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function i(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let i=pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return le.workingToColorSpace(tn.copy(this),t),Math.round(fe(tn.r*255,0,255))*65536+Math.round(fe(tn.g*255,0,255))*256+Math.round(fe(tn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(tn.copy(this),e);let i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=He){le.workingToColorSpace(tn.copy(this),t);let e=tn.r,i=tn.g,s=tn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Jr);let i=ul(Ai.h,Jr.h,e),s=ul(Ai.s,Jr.s,e),r=ul(Ai.l,Jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Kt;Kt.NAMES=pu;var pr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new Z,li=new Z,_l=new Z,ci=new Z,ps=new Z,ms=new Z,Mh=new Z,yl=new Z,vl=new Z,Ml=new Z,Sl=new Oe,bl=new Oe,wl=new Oe,fi=class n{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){On.subVectors(s,e),li.subVectors(i,e),_l.subVectors(t,e);let o=On.dot(On),a=On.dot(li),l=On.dot(_l),c=li.dot(li),d=li.dot(_l),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,g=(c*l-a*d)*f,x=(o*d-a*l)*f;return r.set(1-g-x,x,g)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Sl.setScalar(0),bl.setScalar(0),wl.setScalar(0),Sl.fromBufferAttribute(t,e),bl.fromBufferAttribute(t,i),wl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(bl,r.y),o.addScaledVector(wl,r.z),o}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),li.subVectors(t,e),On.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ps.subVectors(s,i),ms.subVectors(r,i),yl.subVectors(t,i);let l=ps.dot(yl),c=ms.dot(yl);if(l<=0&&c<=0)return e.copy(i);vl.subVectors(t,s);let d=ps.dot(vl),h=ms.dot(vl);if(d>=0&&h<=d)return e.copy(s);let f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(ps,o);Ml.subVectors(t,r);let g=ps.dot(Ml),x=ms.dot(Ml);if(x>=0&&g<=x)return e.copy(r);let S=g*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(ms,a);let m=d*x-g*h;if(m<=0&&h-d>=0&&g-x>=0)return Mh.subVectors(r,s),a=(h-d)/(h-d+(g-x)),e.copy(s).addScaledVector(Mh,a);let p=1/(m+S+f);return o=S*p,a=f*p,e.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ii=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),jr.subVectors(this.max,tr),gs.subVectors(t.a,tr),xs.subVectors(t.b,tr),_s.subVectors(t.c,tr),Ti.subVectors(xs,gs),Ei.subVectors(_s,xs),Ji.subVectors(gs,_s);let e=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Ji.z,Ji.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Ji.z,0,-Ji.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Ji.y,Ji.x,0];return!Al(e,gs,xs,_s,jr)||(e=[1,0,0,0,1,0,0,0,1],!Al(e,gs,xs,_s,jr))?!1:(Qr.crossVectors(Ti,Ei),e=[Qr.x,Qr.y,Qr.z],Al(e,gs,xs,_s,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Bn=new Z,Kr=new Ii,gs=new Z,xs=new Z,_s=new Z,Ti=new Z,Ei=new Z,Ji=new Z,tr=new Z,jr=new Z,Qr=new Z,Ki=new Z;function Al(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),d=i.dot(Ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ge=new Z,to=new re,Fd=0,Ye=class extends Kn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var mr=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var gr=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var En=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Od=new Ii,er=new Z,Tl=new Z,Ls=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Od.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Tl)),this.expandByPoint(er.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bd=0,An=new Be,El=new _n,ys=new Z,xn=new Ii,nr=new Ii,Je=new Z,yn=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bd(t)?gr:mr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,i){return An.makeTranslation(t,e,i),this.applyMatrix4(An),this}scale(t,e,i){return An.makeScale(t,e,i),this.applyMatrix4(An),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(xn.min,nr.min),xn.expandByPoint(Je),Je.addVectors(xn.max,nr.max),xn.expandByPoint(Je)):(xn.expandByPoint(nr.min),xn.expandByPoint(nr.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Je.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Je.add(ys)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new Z,l[M]=new Z;let c=new Z,d=new Z,h=new Z,f=new re,g=new re,x=new re,S=new Z,m=new Z;function p(M,T,R){c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,T),x.fromBufferAttribute(r,R),d.sub(c),h.sub(c),g.sub(f),x.sub(f);let I=1/(g.x*x.y-x.x*g.y);isFinite(I)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(I),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(I),a[M].add(S),a[T].add(S),a[R].add(S),l[M].add(m),l[T].add(m),l[R].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let M=0,T=C.length;M<T;++M){let R=C[M],I=R.start,H=R.count;for(let k=I,F=I+H;k<F;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let U=new Z,v=new Z,A=new Z,E=new Z;function D(M){A.fromBufferAttribute(s,M),E.copy(A);let T=a[M];U.copy(T),U.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(E,T);let I=v.dot(l[M])<0?-1:1;o.setXYZW(M,U.x,U.y,U.z,I)}for(let M=0,T=C.length;M<T;++M){let R=C[M],I=R.start,H=R.count;for(let k=I,F=I+H;k<F;k+=3)D(t.getX(k+0)),D(t.getX(k+1)),D(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);let s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,d=new Z,h=new Z;if(t)for(let f=0,g=t.count;f<g;f+=3){let x=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d),g=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*d;for(let p=0;p<d;p++)f[x++]=c[g++]}return new Ye(f,d,h)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let f=c[d],g=t(f,i);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){let g=c[h];d.push(g.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],h=r[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Do=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},an=new Z,xr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cl=new Z,kd=new Z,zd=new Jt,kn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Cl.subVectors(i,e).cross(kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Cl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zd.getNormalMatrix(t),s=this.coplanarPoint(Cl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vd=0,Li=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Ns,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Wl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pi=class extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,ir=new Z,Ms=new Z,Ss=new Z,bs=new re,sr=new re,mu=new Be,eo=new Z,rr=new Z,no=new Z,Sh=new re,Rl=new re,bh=new re,Di=class extends _n{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new yn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Do(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new xr(i,3,0,!1)),vs.setAttribute("uv",new xr(i,2,3,!1))}this.geometry=vs,this.material=t,this.center=new re(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;io(eo.set(-.5,-.5,0),Ss,o,Ms,s,r),io(rr.set(.5,-.5,0),Ss,o,Ms,s,r),io(no.set(.5,.5,0),Ss,o,Ms,s,r),Sh.set(0,0),Rl.set(1,0),bh.set(1,1);let a=t.ray.intersectTriangle(eo,rr,no,!1,ir);if(a===null&&(io(rr.set(-.5,.5,0),Ss,o,Ms,s,r),Rl.set(0,1),a=t.ray.intersectTriangle(eo,no,rr,!1,ir),a===null))return;let l=t.ray.origin.distanceTo(ir);l<t.near||l>t.far||e.push({distance:l,point:ir.clone(),uv:fi.getInterpolation(ir,eo,rr,no,Sh,Rl,bh,new re),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function io(n,t,e,i,s,r){bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(sr.x=r*bs.x-s*bs.y,sr.y=s*bs.x+r*bs.y):sr.copy(bs),n.copy(t),n.x+=sr.x,n.y+=sr.y,n.applyMatrix4(mu)}var ui=new Z,Pl=new Z,so=new Z,ro=new Z,No=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Pl.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),ro.copy(this.origin).sub(Pl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),d=Math.abs(1-o*o),h,f,g,x;if(d>0)if(h=o*l-a,f=o*a-l,x=r*d,h>=0)if(f>=-x)if(f<=x){let S=1/d;h*=S,f*=S,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pl).addScaledVector(so,f),g}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);let i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,h=t.x-o.x,f=t.y-o.y,g=t.z-o.z,x=e.x-o.x,S=e.y-o.y,m=e.z-o.z,p=i.x-o.x,C=i.y-o.y,U=i.z-o.z,v=Math.abs(l),A=Math.abs(c),E=Math.abs(d),D,M,T,R,I,H,k,F,W,tt,X,ct;if(v>=A&&v>=E?(T=l,H=h,W=x,ct=p,l>=0?(D=c,M=d,R=f,I=g,k=S,F=m,tt=C,X=U):(D=d,M=c,R=g,I=f,k=m,F=S,tt=U,X=C)):A>=E?(T=c,H=f,W=S,ct=C,c>=0?(D=d,M=l,R=g,I=h,k=m,F=x,tt=U,X=p):(D=l,M=d,R=h,I=g,k=x,F=m,tt=p,X=U)):(T=d,H=g,W=m,ct=U,d>=0?(D=l,M=c,R=h,I=f,k=x,F=S,tt=p,X=C):(D=c,M=l,R=f,I=h,k=S,F=x,tt=C,X=p)),T===0)return null;let j=D/T,ot=M/T,at=1/T,zt=R-j*H,Nt=I-ot*H,we=k-j*W,oe=F-ot*W,ce=tt-j*ct,it=X-ot*ct,lt=ce*oe-it*we,At=zt*it-Nt*ce,$t=we*Nt-oe*zt;if(s){if(lt<0||At<0||$t<0)return null}else if((lt<0||At<0||$t<0)&&(lt>0||At>0||$t>0))return null;let Rt=lt+At+$t;if(Rt===0)return null;let qt=at*(lt*H+At*W+$t*ct);return(Rt>0?qt<0:qt>0)?null:this.at(qt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vn=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wh=new Be,ji=new No,oo=new Ls,Ah=new Z,ao=new Z,lo=new Z,co=new Z,Il=new Z,ho=new Z,Th=new Z,uo=new Z,Ve=class extends _n{constructor(t=new yn,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&(Il.fromBufferAttribute(h,t),o?ho.addScaledVector(Il,d):ho.addScaledVector(Il.sub(e),d))}e.add(ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(oo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(oo,Ah)===null||ji.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(wh.copy(r).invert(),ji.copy(t.ray).applyMatrix4(wh),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){let m=f[x],p=o[m.materialIndex],C=Math.max(m.start,g.start),U=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let v=C,A=U;v<A;v+=3){let E=a.getX(v),D=a.getX(v+1),M=a.getX(v+2);s=fo(this,p,t,i,c,d,h,E,D,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let m=x,p=S;m<p;m+=3){let C=a.getX(m),U=a.getX(m+1),v=a.getX(m+2);s=fo(this,o,t,i,c,d,h,C,U,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=f.length;x<S;x++){let m=f[x],p=o[m.materialIndex],C=Math.max(m.start,g.start),U=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let v=C,A=U;v<A;v+=3){let E=v,D=v+1,M=v+2;s=fo(this,p,t,i,c,d,h,E,D,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=x,p=S;m<p;m+=3){let C=m,U=m+1,v=m+2;s=fo(this,o,t,i,c,d,h,C,U,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gd(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Bi,a),l===null)return null;uo.copy(a),uo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:n}}function fo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ao),n.getVertexPosition(l,lo),n.getVertexPosition(c,co);let d=Gd(n,t,e,i,ao,lo,co,Th);if(d){let h=new Z;fi.getBarycoord(Th,ao,lo,co,h),s&&(d.uv=fi.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(d.uv1=fi.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(d.normal=fi.getInterpolatedAttribute(o,a,l,c,h,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Z,materialIndex:0};fi.getNormal(ao,lo,co,f.normal),d.face=f,d.barycoord=h}return d}var Uo=class extends ln{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ke,d=Ke,h,f){super(null,o,a,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=new Ls,Hd=new re(.5,.5),po=new Z,_r=class{constructor(t=new kn,e=new kn,i=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],g=r[7],x=r[8],S=r[9],m=r[10],p=r[11],C=r[12],U=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,g-d,p-x,A-C).normalize(),s[1].setComponents(c+o,g+d,p+x,A+C).normalize(),s[2].setComponents(c+a,g+h,p+S,A+U).normalize(),s[3].setComponents(c-a,g-h,p-S,A-U).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,g-f,p-m,A-v).normalize();else if(s[4].setComponents(c-l,g-f,p-m,A-v).normalize(),e===zn)s[5].setComponents(c+l,g+f,p+m,A+v).normalize();else if(e===cr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=Hd.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yr=class extends ln{constructor(t=[],e=ki,i,s,r,o,a,l,c,d){super(t,e,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cn=class extends ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends ln{constructor(t,e,i=Hn,s,r,o,a=Ke,l=Ke,c,d=Jn,h=1){if(d!==Jn&&d!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fo=class extends Ni{constructor(t,e=Hn,i=ki,s,r,o=Ke,a=Ke,l,c=Jn){let d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vr=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Rn=class n extends yn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],f=0,g=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(d,3)),this.setAttribute("uv",new En(h,2));function x(S,m,p,C,U,v,A,E,D,M,T){let R=v/D,I=A/M,H=v/2,k=A/2,F=E/2,W=D+1,tt=M+1,X=0,ct=0,j=new Z;for(let ot=0;ot<tt;ot++){let at=ot*I-k;for(let zt=0;zt<W;zt++){let Nt=zt*R-H;j[S]=Nt*C,j[m]=at*U,j[p]=F,c.push(j.x,j.y,j.z),j[S]=0,j[m]=0,j[p]=E>0?1:-1,d.push(j.x,j.y,j.z),h.push(zt/D),h.push(1-ot/M),X+=1}}for(let ot=0;ot<M;ot++)for(let at=0;at<D;at++){let zt=f+at+W*ot,Nt=f+at+W*(ot+1),we=f+(at+1)+W*(ot+1),oe=f+(at+1)+W*ot;l.push(zt,Nt,oe),l.push(Nt,we,oe),ct+=6}a.addGroup(g,ct,T),g+=ct,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Mr=class n extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,h=t/a,f=e/l,g=[],x=[],S=[],m=[];for(let p=0;p<d;p++){let C=p*f-o;for(let U=0;U<c;U++){let v=U*h-r;x.push(v,-C,0),S.push(0,0,1),m.push(U/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let U=C+c*p,v=C+c*(p+1),A=C+1+c*(p+1),E=C+1+c*p;g.push(U,v,E),g.push(v,A,E)}this.setIndex(g),this.setAttribute("position",new En(x,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function is(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Eh(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function sn(n){let t={};for(let e=0;e<n.length;e++){let i=is(n[e]);for(let s in i)t[s]=i[s]}return t}function Eh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var gu={clone:is,merge:sn},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Oo=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bo=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ko=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ll(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ui=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Ui{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ul:r=t,a=2*e-i;break;case Fl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ul:o=t,l=2*i-e;break;case Fl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,g=this._weightNext,x=(i-e)/(s-e),S=x*x,m=S*x,p=-f*m+2*f*S-f*x,C=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*x+1,U=(-1-g)*m+(1.5+g)*S+.5*x,v=g*m-g*S;for(let A=0;A!==a;++A)r[A]=p*o[d+A]+C*o[c+A]+U*o[l+A]+v*o[h+A];return r}},Vo=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(i-e)/(s-e),h=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*d;return r}},Go=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends Ui{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this.inTangents,h=this.outTangents;if(!d||!h){let x=(i-e)/(s-e),S=1-x;for(let m=0;m!==a;++m)r[m]=o[c+m]*S+o[l+m]*x;return r}let f=a*2,g=t-1;for(let x=0;x!==a;++x){let S=o[c+x],m=o[l+x],p=g*f+x*2,C=h[p],U=h[p+1],v=t*f+x*2,A=d[v],E=d[v+1],D=$d(i,e,C,A,s);r[x]=xu(D,S,U,E,m)}return r}};function xu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Yd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function $d(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=xu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Yd(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var vn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ll(t.settings)&&(i.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case Co:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break;case Dl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ll(this.settings)&&(Ch(this.settings.inTangents,t),Ch(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&wd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,f=h-i,g=h+i;for(let x=0;x!==i;++x){let S=e[h+x];if(S!==e[f+x]||S!==e[g+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let g=0;g!==i;++g)e[f+g]=e[h+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ll(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ch(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Co;var Fi=class extends vn{constructor(t,e,i){super(t,e,i)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=or;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};Xo.prototype.ValueTypeName="number";var qo=class extends Ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Sr=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends vn{constructor(t,e,i){super(t,e,i)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=or;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};Yo.prototype.ValueTypeName="vector";var $o=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){let g=c[h],x=c[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new $o,Zo=class{constructor(t){this.manager=t!==void 0?t:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var mo=new Z,go=new jn,Yn=new Z,br=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mo,go,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(mo,go,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new Z,Rh=new re,Ph=new re,en=class extends br{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ph),e.subVectors(Ph,Rh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var wr=class extends br{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var As=-90,Ts=1,Jo=class extends _n{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(As,Ts,t,e);s.layers=this.layers,this.add(s);let r=new en(As,Ts,t,e);r.layers=this.layers,this.add(r);let o=new en(As,Ts,t,e);o.layers=this.layers,this.add(o);let a=new en(As,Ts,t,e);a.layers=this.layers,this.add(a);let l=new en(As,Ts,t,e);l.layers=this.layers,this.add(l);let c=new en(As,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,f,g),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ko=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uc="\\[\\]\\.:\\/",Zd=new RegExp("["+uc+"]","g"),fc="[^"+uc+"]",Jd="[^"+uc.replace("\\.","")+"]",Kd=/((?:WC+[\/:])*)/.source.replace("WC",fc),jd=/(WCOD+)?/.source.replace("WCOD",Jd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),ep=new RegExp("^"+Kd+jd+Qd+tp+"$"),np=["material","materials","bones","map"],Ol=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zd,"")}static parseTrackName(t){let e=ep.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);np.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Ol;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var _c=class _c{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};_c.prototype.isMatrix2=!0;var Bl=_c;function dc(n,t,e,i){let s=ip(i);switch(e){case sc:return n*t;case oc:return n*t/s.components*s.byteLength;case ra:return n*t/s.components*s.byteLength;case Gi:return n*t*2/s.components*s.byteLength;case oa:return n*t*2/s.components*s.byteLength;case rc:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case aa:return n*t*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ca:case ua:return Math.max(n,16)*Math.max(t,8)/4;case la:case ha:return Math.max(n,8)*Math.max(t,8)/2;case fa:case da:case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pa:case Lr:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case La:case Da:case Na:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ua:case Fa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dr:case Oa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(n){switch(n){case Mn:case tc:return{byteLength:1,components:1};case Us:case ec:case Xn:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case Hn:case na:case Wn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zu(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rp(n){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,d);else{h.sort((g,x)=>g.start-x.start);let f=0;for(let g=1;g<h.length;g++){let x=h[f],S=h[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,h[f]=S)}h.length=f+1;for(let g=0,x=h.length;g<x;g++){let S=h[g];n.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`uniform sampler2D dfgLUT;
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
}`,rm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,T0=`#define NORMAL
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
}`,E0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,D0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:fp,aomap_pars_fragment:dp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:xp,bsdfs:_p,iridescence_fragment:yp,bumpmap_pars_fragment:vp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Ap,color_pars_fragment:Tp,color_pars_vertex:Ep,color_vertex:Cp,common:Rp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:kp,envmap_pars_fragment:zp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:jp,envmap_vertex:Gp,fog_vertex:Hp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:$p,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Kp,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:fm,map_fragment:dm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Am,normal_pars_fragment:Tm,normal_pars_vertex:Em,normal_vertex:Cm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:km,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:$m,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:Km,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:f0,depth_frag:d0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:y0,meshbasic_vert:v0,meshbasic_frag:M0,meshlambert_vert:S0,meshlambert_frag:b0,meshmatcap_vert:w0,meshmatcap_frag:A0,meshnormal_vert:T0,meshnormal_frag:E0,meshphong_vert:C0,meshphong_frag:R0,meshphysical_vert:P0,meshphysical_frag:I0,meshtoon_vert:L0,meshtoon_frag:D0,points_vert:N0,points_frag:U0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:k0},wt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ei={basic:{uniforms:sn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:sn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:sn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:sn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:sn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:sn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:sn([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:sn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:sn([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:sn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:sn([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:sn([wt.common,wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:sn([wt.lights,wt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ei.physical={uniforms:sn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var za={r:0,b:0,g:0},z0=new Be,Vu=new Jt;Vu.set(-1,0,0,0,1,0,0,0,1);function V0(n,t,e,i,s,r){let o=new Kt(0),a=s===!0?0:1,l,c,d=null,h=0,f=null;function g(C){let U=C.isScene===!0?C.background:null;if(U&&U.isTexture){let v=C.backgroundBlurriness>0;U=t.get(U,v)}return U}function x(C){let U=!1,v=g(C);v===null?m(o,a):v&&v.isColor&&(m(v,1),U=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(C,U){let v=g(U);v&&(v.isCubeTexture||v.mapping===Tr)?(c===void 0&&(c=new Ve(new Rn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:is(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(U.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vu),c.material.toneMapped=le.getTransfer(v.colorSpace)!==ye,(d!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ve(new Mr(2,2),new nn({name:"BackgroundMaterial",uniforms:is(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=le.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,U){C.getRGB(za,hc(n)),e.buffers.color.setClear(za.r,za.g,za.b,U,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,U=1){o.set(C),a=U,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,m(o,a)},render:x,addToRenderList:S,dispose:p}}function G0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(I,H,k,F,W){let tt=!1,X=h(I,F,k,H);r!==X&&(r=X,c(r.object)),tt=g(I,F,k,W),tt&&x(I,F,k,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,v(I,H,k,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function d(I){return n.deleteVertexArray(I)}function h(I,H,k,F){let W=F.wireframe===!0,tt=i[H.id];tt===void 0&&(tt={},i[H.id]=tt);let X=I.isInstancedMesh===!0?I.id:0,ct=tt[X];ct===void 0&&(ct={},tt[X]=ct);let j=ct[k.id];j===void 0&&(j={},ct[k.id]=j);let ot=j[W];return ot===void 0&&(ot=f(l()),j[W]=ot),ot}function f(I){let H=[],k=[],F=[];for(let W=0;W<e;W++)H[W]=0,k[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:F,object:I,attributes:{},index:null}}function g(I,H,k,F){let W=r.attributes,tt=H.attributes,X=0,ct=k.getAttributes();for(let j in ct)if(ct[j].location>=0){let at=W[j],zt=tt[j];if(zt===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(zt=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(zt=I.instanceColor)),at===void 0||at.attribute!==zt||zt&&at.data!==zt.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function x(I,H,k,F){let W={},tt=H.attributes,X=0,ct=k.getAttributes();for(let j in ct)if(ct[j].location>=0){let at=tt[j];at===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));let zt={};zt.attribute=at,at&&at.data&&(zt.data=at.data),W[j]=zt,X++}r.attributes=W,r.attributesNum=X,r.index=F}function S(){let I=r.newAttributes;for(let H=0,k=I.length;H<k;H++)I[H]=0}function m(I){p(I,0)}function p(I,H){let k=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;k[I]=1,F[I]===0&&(n.enableVertexAttribArray(I),F[I]=1),W[I]!==H&&(n.vertexAttribDivisor(I,H),W[I]=H)}function C(){let I=r.newAttributes,H=r.enabledAttributes;for(let k=0,F=H.length;k<F;k++)H[k]!==I[k]&&(n.disableVertexAttribArray(k),H[k]=0)}function U(I,H,k,F,W,tt,X){X===!0?n.vertexAttribIPointer(I,H,k,W,tt):n.vertexAttribPointer(I,H,k,F,W,tt)}function v(I,H,k,F){S();let W=F.attributes,tt=k.getAttributes(),X=H.defaultAttributeValues;for(let ct in tt){let j=tt[ct];if(j.location>=0){let ot=W[ct];if(ot===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor)),ot!==void 0){let at=ot.normalized,zt=ot.itemSize,Nt=t.get(ot);if(Nt===void 0)continue;let we=Nt.buffer,oe=Nt.type,ce=Nt.bytesPerElement,it=oe===n.INT||oe===n.UNSIGNED_INT||ot.gpuType===na;if(ot.isInterleavedBufferAttribute){let lt=ot.data,At=lt.stride,$t=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<j.locationSize;Rt++)p(j.location+Rt,lt.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)m(j.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Rt=0;Rt<j.locationSize;Rt++)U(j.location+Rt,zt/j.locationSize,oe,at,At*ce,($t+zt/j.locationSize*Rt)*ce,it)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<j.locationSize;lt++)p(j.location+lt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<j.locationSize;lt++)m(j.location+lt);n.bindBuffer(n.ARRAY_BUFFER,we);for(let lt=0;lt<j.locationSize;lt++)U(j.location+lt,zt/j.locationSize,oe,at,zt*ce,zt/j.locationSize*lt*ce,it)}}else if(X!==void 0){let at=X[ct];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(j.location,at);break;case 3:n.vertexAttrib3fv(j.location,at);break;case 4:n.vertexAttrib4fv(j.location,at);break;default:n.vertexAttrib1fv(j.location,at)}}}}C()}function A(){T();for(let I in i){let H=i[I];for(let k in H){let F=H[k];for(let W in F){let tt=F[W];for(let X in tt)d(tt[X].object),delete tt[X];delete F[W]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let H=i[I.id];for(let k in H){let F=H[k];for(let W in F){let tt=F[W];for(let X in tt)d(tt[X].object),delete tt[X];delete F[W]}}delete i[I.id]}function D(I){for(let H in i){let k=i[H];for(let F in k){let W=k[F];if(W[I.id]===void 0)continue;let tt=W[I.id];for(let X in tt)d(tt[X].object),delete tt[X];delete W[I.id]}}}function M(I){for(let H in i){let k=i[H],F=I.isInstancedMesh===!0?I.id:0,W=k[F];if(W!==void 0){for(let tt in W){let X=W[tt];for(let ct in X)d(X[ct].object),delete X[ct];delete W[tt]}delete k[F],Object.keys(k).length===0&&delete i[H]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:m,disableUnusedAttributes:C}}function H0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function W0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==In&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let M=D===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Mn&&D!==Wn&&!M&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(Xt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:v,maxSamples:A,samples:E}}function X0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new kn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let g=h.length!==0||f||i!==0||s;return s=f,i=h.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,g){let x=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||x===null||x.length===0||r&&!m)r?d(null):c();else{let C=r?0:i,U=C*4,v=p.clippingState||null;l.value=v,v=d(x,f,U,g);for(let A=0;A!==U;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,g,x){let S=h!==null?h.length:0,m=null;if(S!==0){if(m=l.value,x!==!0||m===null){let p=g+S*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let U=0,v=g;U!==S;++U,v+=4)o.copy(h[U]).applyMatrix4(C,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var Bs=4,q0=6,Y0=20,$0=256,Nr=new wr,yu=new Kt,yc=null,vc=0,Mc=0,Sc=!1,Z0=new Z,ss=new Z,Ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Z0}=r;yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,vc,Mc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:Xn,format:In,colorSpace:ar,depthBuffer:!1},s=vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J0(r)),this._blurMaterial=j0(r,t,e),this._ggxMaterial=K0(r,t,e)}return s}_compileMaterial(t){let e=new Ve(new yn,t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,i,s,r){let l=new en(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(yu),h.toneMapping=Gn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Rn,new Vn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,C=t.background;C?C.isColor&&(m.color.copy(C),t.background=null,p=!0):(m.color.copy(yu),p=!0);for(let U=0;U<6;U++){let v=U%3;v===0?(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[U],r.y,r.z)):v===1?(l.up.set(0,0,c[U]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[U],r.z)):(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[U]));let A=this._cubeSize;Os(s,v*A,U>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(S,l),h.render(t,l)}h.toneMapping=g,h.autoClear=f,t.background=C}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ki||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Os(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Nr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=c*1.25,g=h*f,{_lodMax:x}=this,S=this._sizeLods[i],m=3*S*(i>x-Bs?i-x+Bs:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,Os(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(a,Nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Os(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(a,Nr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],h=3*d*(s>this._lodMax-Bs?s-this._lodMax+Bs:0),f=4*(this._cubeSize-d);Os(e,h,f,3*d,2*d),o.setRenderTarget(e),o.render(l,Nr)}};function J0(n){let t=[],e=[],i=n,s=n-Bs+1+q0;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,g=3,x=new Float32Array(g*f*h),S=new Float32Array(g*f*h);for(let p=0;p<h;p++){let C=p%3*2/3-1,U=p>2?0:-1,v=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];x.set(v,g*f*p);for(let A=0;A<f;A++){let E=d[A*2]*2-1,D=d[A*2+1]*2-1;p===0?ss.set(1,D,E):p===1?ss.set(-E,1,-D):p===2?ss.set(-E,D,1):p===3?ss.set(-1,D,-E):p===4?ss.set(-E,-1,D):ss.set(E,D,-1),ss.toArray(S,(p*f+A)*g)}}let m=new yn;m.setAttribute("position",new Ye(x,g)),m.setAttribute("outputDirection",new Ye(S,g)),e.push(new Ve(m,null)),i>Bs&&i--}return{lodMeshes:e,sizeLods:t}}function vu(n,t,e){let i=new dn(n,t,e);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function K0(n,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function j0(n,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:Y0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Su(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ha=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Qn});r.uniforms.tEquirect.value=e;let o=new Ve(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=We),new Jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Q0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,g=!1){return f==null?null:g?o(f):r(f)}function r(f){if(f&&f.isTexture){let g=f.mapping;if(g===Qo||g===ta)if(t.has(f)){let x=t.get(f).texture;return a(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let S=new Ha(x.height);return S.fromEquirectangularTexture(n,f),t.set(f,S),f.addEventListener("dispose",c),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let g=f.mapping,x=g===Qo||g===ta,S=g===ki||g===ns;if(x||S){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Ga(n)),m=x?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let C=f.image;return x&&C&&C.height>0||S&&C&&l(C)?(i===null&&(i=new Ga(n)),m=x?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function a(f,g){return g===Qo?f.mapping=ki:g===ta&&(f.mapping=ns),f}function l(f){let g=0,x=6;for(let S=0;S<x;S++)f[S]!==void 0&&g++;return g===x}function c(f){let g=f.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function d(f){let g=f.target;g.removeEventListener("dispose",d);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function tg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ts("WebGLRenderer: "+i+" extension not supported."),s}}}function eg(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER)}function c(h){let f=[],g=h.index,x=h.attributes.position,S=0;if(x===void 0)return;if(g!==null){let C=g.array;S=g.version;for(let U=0,v=C.length;U<v;U+=3){let A=C[U+0],E=C[U+1],D=C[U+2];f.push(A,E,E,D,D,A)}}else{let C=x.array;S=x.version;for(let U=0,v=C.length/3-1;U<v;U+=3){let A=U+0,E=U+1,D=U+2;f.push(A,E,E,D,D,A)}}let m=new(x.count>=65535?gr:mr)(f,1);m.version=S;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function d(h){let f=r.get(h);if(f){let g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function ng(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,h*o,g),e.update(f,i,g))}function d(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,g);let S=0;for(let m=0;m<g;m++)S+=f[m];e.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ig(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sg(n,t,e){let i=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==h){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],U=0;g===!0&&(U=1),x===!0&&(U=2),S===!0&&(U=3);let v=a.attributes.position.count*U,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*A*4*h),D=new fr(E,v,A,h);D.type=Wn,D.needsUpdate=!0;let M=U*4;for(let R=0;R<h;R++){let I=m[R],H=p[R],k=C[R],F=v*A*4*R;for(let W=0;W<I.count;W++){let tt=W*M;g===!0&&(s.fromBufferAttribute(I,W),E[F+tt+0]=s.x,E[F+tt+1]=s.y,E[F+tt+2]=s.z,E[F+tt+3]=0),x===!0&&(s.fromBufferAttribute(H,W),E[F+tt+4]=s.x,E[F+tt+5]=s.y,E[F+tt+6]=s.z,E[F+tt+7]=0),S===!0&&(s.fromBufferAttribute(k,W),E[F+tt+8]=s.x,E[F+tt+9]=s.y,E[F+tt+10]=s.z,E[F+tt+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new re(v,A)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let S=0;S<c.length;S++)g+=c[S];let x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function rg(n,t,e,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return f}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var og={[ql]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[$l]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[jl]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function ag(n,t,e,i,s,r){let o=new dn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new yn;c.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new En([0,2,0,0,2,0],2));let d=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ve(c,d),f=new wr(-1,1,1,-1,0,1),g=null,x=null,S=!1,m,p=null,C=[],U=!1;this.setSize=function(v,A){o.setSize(v,A),a!==null&&a.setSize(v,A),l!==null&&l.setSize(v,A);for(let E=0;E<C.length;E++){let D=C[E];D.setSize&&D.setSize(v,A)}},this.setEffects=function(v){C=v,U=C.length>0&&C[0].isRenderPass===!0;let A=o.width,E=o.height;C.length>0&&a===null&&(a=new dn(A,E,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new dn(A,E,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<C.length;D++){let M=C[D];M.setSize&&M.setSize(A,E)}},this.begin=function(v,A){if(S||v.toneMapping===Gn&&C.length===0)return!1;if(p=A,A!==null){let E=A.width,D=A.height;(o.width!==E||o.height!==D)&&this.setSize(E,D)}return U===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return U},this.end=function(v,A){v.toneMapping=m,S=!0;let E=o,D=a;for(let M=0;M<C.length;M++){let T=C[M];T.enabled!==!1&&(T.render(v,D,E,A),T.needsSwap!==!1&&(E=D,D=D===a?l:a))}if(g!==v.outputColorSpace||x!==v.toneMapping){g=v.outputColorSpace,x=v.toneMapping,d.defines={},le.getTransfer(g)===ye&&(d.defines.SRGB_TRANSFER="");let M=og[x];M&&(d.defines[M]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(h,f),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Gu=new ln,Ac=new Ni(1,1),Hu=new fr,Wu=new Lo,Xu=new yr,bu=[],wu=[],Au=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function fg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),Ze(e,i)}}function dg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Tu.set(i),n.uniformMatrix3fv(this.addr,!1,Tu),Ze(e,i)}}function pg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Au.set(i),n.uniformMatrix4fv(this.addr,!1,Au),Ze(e,i)}}function mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function _g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function yg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ac.compareFunction=e.isReversedDepthBuffer()?ka:Ba,r=Ac):r=Gu,e.setTexture2D(t||r,s)}function wg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wu,s)}function Ag(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xu,s)}function Tg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Hu,s)}function Eg(n){switch(n){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Tg}}function Cg(n,t){n.uniform1fv(this.addr,t)}function Rg(n,t){let e=zs(t,this.size,2);n.uniform2fv(this.addr,e)}function Pg(n,t){let e=zs(t,this.size,3);n.uniform3fv(this.addr,e)}function Ig(n,t){let e=zs(t,this.size,4);n.uniform4fv(this.addr,e)}function Lg(n,t){let e=zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dg(n,t){let e=zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ng(n,t){let e=zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ug(n,t){n.uniform1iv(this.addr,t)}function Fg(n,t){n.uniform2iv(this.addr,t)}function Og(n,t){n.uniform3iv(this.addr,t)}function Bg(n,t){n.uniform4iv(this.addr,t)}function kg(n,t){n.uniform1uiv(this.addr,t)}function zg(n,t){n.uniform2uiv(this.addr,t)}function Vg(n,t){n.uniform3uiv(this.addr,t)}function Gg(n,t){n.uniform4uiv(this.addr,t)}function Hg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ac:o=Gu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Wg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wu,r[o])}function Xg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xu,r[o])}function qg(n,t,e){let i=this.cache,s=t.length,r=qa(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hu,r[o])}function Yg(n){switch(n){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var Tc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}},Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},bc=/(\w+)(\])?(\[|\.)?/g;function Cu(n,t){n.seq.push(t),n.map[t.id]=t}function $g(n,t,e){let i=n.name,s=i.length;for(bc.lastIndex=0;;){let r=bc.exec(i),o=bc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cu(e,c===void 0?new Tc(a,n,t):new Ec(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Cc(a),Cu(e,h)),e=h}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$g(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Ru(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Zg=37297,Jg=0;function Kg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Pu=new Jt;function jg(n){le._getMatrix(Pu,le.workingColorSpace,n);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case lr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Iu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Kg(n.getShaderSource(t),a)}else return r}function Qg(n,t){let e=jg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var tx={[ql]:"Linear",[Yl]:"Reinhard",[$l]:"Cineon",[Zl]:"ACESFilmic",[Kl]:"AgX",[jl]:"Neutral",[Jl]:"Custom"};function ex(n,t){let e=tx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Va=new Z;function nx(){le.getLuminanceCoefficients(Va);let n=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function sx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Fr(n){return n!==""}function Lu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(ox,lx)}var ax=new Map;function lx(n,t){let e=se[t];if(e===void 0){let i=ax.get(t);if(i!==void 0)e=se[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rc(e)}var cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(cx,hx)}function hx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var ux={[Ar]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function fx(n){return ux[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dx={[ki]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function px(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var mx={[ns]:"ENVMAP_MODE_REFRACTION"};function gx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xx={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function _x(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xx[n.combine]||"ENVMAP_BLENDING_NONE"}function yx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fx(e),c=px(e),d=gx(e),h=_x(e),f=yx(e),g=ix(e),x=sx(r),S=s.createProgram(),m,p,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?se.tonemapping_pars_fragment:"",e.toneMapping!==Gn?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Rc(o),o=Lu(o,e),o=Du(o,e),a=Rc(a),a=Lu(a,e),a=Du(a,e),o=Nu(o),a=Nu(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let U=C+m+o,v=C+p+a,A=Ru(s,s.VERTEX_SHADER,U),E=Ru(s,s.FRAGMENT_SHADER,v);s.attachShader(S,A),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function D(I){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(A)||"",F=s.getShaderInfoLog(E)||"",W=H.trim(),tt=k.trim(),X=F.trim(),ct=!0,j=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,A,E);else{let ot=Iu(s,A,"vertex"),at=Iu(s,E,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+ot+`
`+at)}else W!==""?Xt("WebGLProgram: Program Info Log:",W):(tt===""||X==="")&&(j=!1);j&&(I.diagnostics={runnable:ct,programLog:W,vertexShader:{log:tt,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(A),s.deleteShader(E),M=new ks(s,S),T=rx(s,S)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,Zg)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=E,this}var Mx=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ic(t),e.set(t,i)),i}},Ic=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function Sx(n){return n===Gi||n===Lr||n===Dr}function bx(n,t,e,i,s,r){let o=new dr,a=new Pc,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function S(M,T,R,I,H,k){let F=I.fog,W=H.geometry,tt=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ct=t.get(M.envMap||tt,X),j=ct&&ct.mapping===Tr?ct.image.height:null,ot=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&Xt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=at!==void 0?at.length:0,Nt=0;W.morphAttributes.position!==void 0&&(Nt=1),W.morphAttributes.normal!==void 0&&(Nt=2),W.morphAttributes.color!==void 0&&(Nt=3);let we,oe,ce,it;if(ot){let Te=ei[ot];we=Te.vertexShader,oe=Te.fragmentShader}else{we=M.vertexShader,oe=M.fragmentShader;let Te=a.getVertexShaderStage(M),pe=a.getFragmentShaderStage(M);a.update(M,Te,pe),ce=Te.id,it=pe.id}let lt=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),$t=H.isInstancedMesh===!0,Rt=H.isBatchedMesh===!0,qt=!!M.map,ge=!!M.matcap,ie=!!ct,te=!!M.aoMap,ve=!!M.lightMap,ee=!!M.bumpMap&&M.wireframe===!1,_e=!!M.normalMap,Yt=!!M.displacementMap,jt=!!M.emissiveMap,Ae=!!M.metalnessMap,Ht=!!M.roughnessMap,O=M.anisotropy>0,Me=M.clearcoat>0,he=M.dispersion>0,P=M.retroreflectivity>0,y=M.iridescence>0,G=M.sheen>0,q=M.transmission>0,nt=O&&!!M.anisotropyMap,pt=Me&&!!M.clearcoatMap,xt=Me&&!!M.clearcoatNormalMap,et=Me&&!!M.clearcoatRoughnessMap,rt=y&&!!M.iridescenceMap,yt=y&&!!M.iridescenceThicknessMap,Ut=G&&!!M.sheenColorMap,vt=G&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Ft=!!M.specularColorMap,Vt=!!M.specularIntensityMap,Qt=q&&!!M.transmissionMap,V=q&&!!M.thicknessMap,mt=!!M.gradientMap,st=!!M.alphaMap,gt=M.alphaTest>0,St=!!M.alphaHash,ht=!!M.extensions,Bt=Gn;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Bt=n.toneMapping);let Tt={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:oe,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&H._colorsTexture!==null,instancing:$t,instancingColor:$t&&H.instanceColor!==null,instancingMorph:$t&&H.morphTexture!==null,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:qt,matcap:ge,envMap:ie,envMapMode:ie&&ct.mapping,envMapCubeUVHeight:j,aoMap:te,lightMap:ve,bumpMap:ee,normalMap:_e,displacementMap:Yt,emissiveMap:jt,normalMapObjectSpace:_e&&M.normalMapType===nu,normalMapTangentSpace:_e&&M.normalMapType===ac,packedNormalMap:_e&&M.normalMapType===ac&&Sx(M.normalMap.format),metalnessMap:Ae,roughnessMap:Ht,anisotropy:O,anisotropyMap:nt,clearcoat:Me,clearcoatMap:pt,clearcoatNormalMap:xt,clearcoatRoughnessMap:et,dispersion:he,retroreflection:P,iridescence:y,iridescenceMap:rt,iridescenceThicknessMap:yt,sheen:G,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:_t,specularColorMap:Ft,specularIntensityMap:Vt,transmission:q,transmissionMap:Qt,thicknessMap:V,gradientMap:mt,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:gt,alphaHash:St,combine:M.combine,mapUv:qt&&x(M.map.channel),aoMapUv:te&&x(M.aoMap.channel),lightMapUv:ve&&x(M.lightMap.channel),bumpMapUv:ee&&x(M.bumpMap.channel),normalMapUv:_e&&x(M.normalMap.channel),displacementMapUv:Yt&&x(M.displacementMap.channel),emissiveMapUv:jt&&x(M.emissiveMap.channel),metalnessMapUv:Ae&&x(M.metalnessMap.channel),roughnessMapUv:Ht&&x(M.roughnessMap.channel),anisotropyMapUv:nt&&x(M.anisotropyMap.channel),clearcoatMapUv:pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(M.sheenRoughnessMap.channel),specularMapUv:_t&&x(M.specularMap.channel),specularColorMapUv:Ft&&x(M.specularColorMap.channel),specularIntensityMapUv:Vt&&x(M.specularIntensityMap.channel),transmissionMapUv:Qt&&x(M.transmissionMap.channel),thicknessMapUv:V&&x(M.thicknessMap.channel),alphaMapUv:st&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_e||O),vertexNormals:!!W.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(qt||st),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||W.attributes.normal===void 0&&_e===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:At,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Nt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:qt&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===ye,decodeVideoTextureEmissive:jt&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ht&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&M.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)T.push(R),T.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(p(T,M),C(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function p(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function C(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function U(M){let T=g[M.type],R;if(T){let I=ei[T];R=gu.clone(I.uniforms)}else R=M.uniforms;return R}function v(M,T){let R=d.get(T);return R!==void 0?++R.usedTimes:(R=new vx(n,T,M,s),c.push(R),d.set(T,R)),R}function A(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),d.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function D(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:U,acquireProgram:v,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:D}}function wx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ax(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ou(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,x,S,m,p){let C=n[t];return C===void 0?(C={id:f.id,object:f,geometry:g,material:x,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:p},n[t]=C):(C.id=f.id,C.object=f,C.geometry=g,C.material=x,C.materialVariant=o(f),C.groupOrder=S,C.renderOrder=f.renderOrder,C.z=m,C.group=p),t++,C}function l(f,g,x,S,m,p,C){C.reversedDepth===!0&&(m=-m);let U=a(f,g,x,S,m,p);x.transmission>0?i.push(U):x.transparent===!0?s.push(U):e.push(U)}function c(f,g,x,S,m,p){let C=a(f,g,x,S,m,p);x.transmission>0?i.unshift(C):x.transparent===!0?s.unshift(C):e.unshift(C)}function d(f,g){e.length>1&&e.sort(f||Ax),i.length>1&&i.sort(g||Fu),s.length>1&&s.sort(g||Fu)}function h(){for(let f=t,g=n.length;f<g;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function Tx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ou,n.set(i,[o])):s>=r.length?(o=new Ou,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ex(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new Kt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function Cx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Rx=0;function Px(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ix(n){let t=new Ex,e=Cx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);let s=new Z,r=new Be,o=new Be;function a(c){let d=0,h=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,x=0,S=0,m=0,p=0,C=0,U=0,v=0,A=0,E=0,D=0,M=0,T=0,R=0;c.sort(Px);for(let H=0,k=c.length;H<k;H++){let F=c[H],W=F.color,tt=F.intensity,X=F.distance,ct=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Gi?ct=F.shadow.map.texture:ct=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=W.r*tt,h+=W.g*tt,f+=W.b*tt;else if(F.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],tt);R++}else if(F.isSunLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ot=F.shadow,at=e.get(F);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[x]=at,i.sunShadowMap[x]=ct;let zt=ot.getViewportCount();for(let Nt=0;Nt<zt;Nt++)i.sunShadowMatrix[S+Nt]=ot.getMatrix(Nt),i.sunShadowCascade[S+Nt]=ot._cascadeData[Nt];S+=zt,x++}i.sun[g]=j,g++}else if(F.isDirectionalLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ot=F.shadow,at=e.get(F);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,i.directionalShadow[m]=at,i.directionalShadowMap[m]=ct,i.directionalShadowMatrix[m]=F.shadow.matrix,A++}i.directional[m]=j,m++}else if(F.isSpotLight){let j=t.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(W).multiplyScalar(tt),j.distance=X,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[C]=j;let ot=F.shadow;if(F.map&&(i.spotLightMap[M]=F.map,M++,ot.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[C]=ot.matrix,F.castShadow){let at=e.get(F);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,i.spotShadow[C]=at,i.spotShadowMap[C]=ct,D++}C++}else if(F.isRectAreaLight){let j=t.get(F);j.color.copy(W).multiplyScalar(tt),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[U]=j,U++}else if(F.isPointLight){let j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){let ot=F.shadow,at=e.get(F);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,at.shadowCameraNear=ot.camera.near,at.shadowCameraFar=ot.camera.far,i.pointShadow[p]=at,i.pointShadowMap[p]=ct,i.pointShadowMatrix[p]=F.shadow.matrix,E++}i.point[p]=j,p++}else if(F.isHemisphereLight){let j=t.get(F);j.skyColor.copy(F.color).multiplyScalar(tt),j.groundColor.copy(F.groundColor).multiplyScalar(tt),i.hemi[v]=j,v++}}U>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;let I=i.hash;(I.sunLength!==g||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==C||I.rectAreaLength!==U||I.hemiLength!==v||I.numSunShadows!==x||I.numDirectionalShadows!==A||I.numPointShadows!==E||I.numSpotShadows!==D||I.numSpotMaps!==M||I.numLightProbes!==R)&&(i.sun.length=g,i.directional.length=m,i.spot.length=C,i.rectArea.length=U,i.point.length=p,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.sunLength=g,I.directionalLength=m,I.pointLength=p,I.spotLength=C,I.rectAreaLength=U,I.hemiLength=v,I.numSunShadows=x,I.numDirectionalShadows=A,I.numPointShadows=E,I.numSpotShadows=D,I.numSpotMaps=M,I.numLightProbes=R,i.version=Rx++)}function l(c,d){let h=0,f=0,g=0,x=0,S=0,m=0,p=d.matrixWorldInverse;for(let C=0,U=c.length;C<U;C++){let v=c[C];if(v.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(v.isSpotLight){let A=i.spot[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let A=i.rectArea[S];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){let A=i.point[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),g++}else if(v.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function Bu(n){let t=new Ix(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function d(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Lx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Bu(n),t.set(s,[a])):r>=o.length?(a=new Bu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`,Ux=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Fx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],ku=new Be,Ur=new Z,wc=new Z;function Ox(n,t,e){let i=new _r,s=new re,r=new re,o=new Oe,a=new Bo,l=new ko,c={},d=e.maxTextureSize,h={[Bi]:cn,[cn]:Bi,[Pn]:Pn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Dx,fragmentShader:Nx}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let x=new yn;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ve(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let p=this.type;this.render=function(E,D,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Dh&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Qn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==this.type;k&&D.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(W=>W.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,W=E.length;F<W;F++){let tt=E[F],X=tt.shadow;if(X===void 0){Xt("WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ct=X.getFrameExtents();s.multiply(ct),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ct.x),s.x=r.x*ct.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ct.y),s.y=r.y*ct.y,X.mapSize.y=r.y));let j=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=j,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ds){if(tt.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new dn(s.x,s.y,{format:Gi,type:Xn,minFilter:We,magFilter:We,generateMipmaps:!1}),X.map.texture.name=tt.name+".shadowMap",X.map.depthTexture=new Ni(s.x,s.y,Wn),X.map.depthTexture.name=tt.name+".shadowMapDepth",X.map.depthTexture.format=Jn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke}else tt.isPointLight?(X.map=new Ha(s.x),X.map.depthTexture=new Fo(s.x,Hn)):(X.map=new dn(s.x,s.y),X.map.depthTexture=new Ni(s.x,s.y,Hn)),X.map.depthTexture.name=tt.name+".shadowMap",X.map.depthTexture.format=Jn,this.type===Ar?(X.map.depthTexture.compareFunction=j?ka:Ba,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ot=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();tt.isPointLight!==!0&&X.updateMatrices(tt,M);for(let at=0;at<ot;at++){let zt=X.getCamera(at);if(tt.isPointLight){let Nt=X.camera,we=X.matrix,oe=tt.distance||Nt.far;oe!==Nt.far&&(Nt.far=oe,Nt.updateProjectionMatrix()),Ur.setFromMatrixPosition(tt.matrixWorld),Nt.position.copy(Ur),wc.copy(Nt.position),wc.add(Ux[at]),Nt.up.copy(Fx[at]),Nt.lookAt(wc),Nt.updateMatrixWorld(),we.makeTranslation(-Ur.x,-Ur.y,-Ur.z),ku.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ku,Nt.coordinateSystem,Nt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,at),n.clear();else{at===0&&(n.setRenderTarget(X.map),n.clear());let Nt=X.getViewport(at);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),H.viewport(o)}i=X.getFrustum(at),v(D,M,zt,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Ds&&C(X,M),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,I)};function C(E,D){let M=t.update(S);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null?E.mapPass=new dn(s.x,s.y,{format:Gi,type:Xn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,M,f,S,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value.set(E.map.width,E.map.height),g.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,M,g,S,null)}function U(E,D,M,T){let R=null,I=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=R.uuid,k=D.uuid,F=c[H];F===void 0&&(F={},c[H]=F);let W=F[k];W===void 0&&(W=R.clone(),F[k]=W,D.addEventListener("dispose",A)),R=W}if(R.visible=D.visible,R.wireframe=D.wireframe,T===Ds?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:h[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=n.properties.get(R);H.light=M}return R}function v(E,D,M,T,R){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ds)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let k=t.update(E),F=E.material;if(Array.isArray(F)){let W=k.groups;for(let tt=0,X=W.length;tt<X;tt++){let ct=W[tt],j=F[ct.materialIndex];if(j&&j.visible){let ot=U(E,j,T,R);E.onBeforeShadow(n,E,D,M,k,ot,ct),n.renderBufferDirect(M,null,k,ot,E,ct),E.onAfterShadow(n,E,D,M,k,ot,ct)}}}else if(F.visible){let W=U(E,F,T,R);E.onBeforeShadow(n,E,D,M,k,W,null),n.renderBufferDirect(M,null,k,W,E,null),E.onAfterShadow(n,E,D,M,k,W,null)}}let H=E.children;for(let k=0,F=H.length;k<F;k++)v(H[k],D,M,T,R)}function A(E){E.target.removeEventListener("dispose",A);for(let M in c){let T=c[M],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Bx(n,t){function e(){let V=!1,mt=new Oe,st=null,gt=new Oe(0,0,0,0);return{setMask:function(St){st!==St&&!V&&(n.colorMask(St,St,St,St),st=St)},setLocked:function(St){V=St},setClear:function(St,ht,Bt,Tt,Te){Te===!0&&(St*=Tt,ht*=Tt,Bt*=Tt),mt.set(St,ht,Bt,Tt),gt.equals(mt)===!1&&(n.clearColor(St,ht,Bt,Tt),gt.copy(mt))},reset:function(){V=!1,st=null,gt.set(-1,0,0,0)}}}function i(){let V=!1,mt=!1,st=null,gt=null,St=null;return{setReversed:function(ht){if(mt!==ht){let Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),mt=ht;let Tt=St;St=null,this.setClear(Tt)}},getReversed:function(){return mt},setTest:function(ht){ht?lt(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ht){st!==ht&&!V&&(n.depthMask(ht),st=ht)},setFunc:function(ht){if(mt&&(ht=du[ht]),gt!==ht){switch(ht){case yo:n.depthFunc(n.NEVER);break;case vo:n.depthFunc(n.ALWAYS);break;case Mo:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case So:n.depthFunc(n.EQUAL);break;case bo:n.depthFunc(n.GEQUAL);break;case wo:n.depthFunc(n.GREATER);break;case Ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=ht}},setLocked:function(ht){V=ht},setClear:function(ht){St!==ht&&(St=ht,mt&&(ht=1-ht),n.clearDepth(ht))},reset:function(){V=!1,st=null,gt=null,St=null,mt=!1}}}function s(){let V=!1,mt=null,st=null,gt=null,St=null,ht=null,Bt=null,Tt=null,Te=null;return{setTest:function(pe){V||(pe?lt(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!V&&(n.stencilMask(pe),mt=pe)},setFunc:function(pe,hn,Sn){(st!==pe||gt!==hn||St!==Sn)&&(n.stencilFunc(pe,hn,Sn),st=pe,gt=hn,St=Sn)},setOp:function(pe,hn,Sn){(ht!==pe||Bt!==hn||Tt!==Sn)&&(n.stencilOp(pe,hn,Sn),ht=pe,Bt=hn,Tt=Sn)},setLocked:function(pe){V=pe},setClear:function(pe){Te!==pe&&(n.clearStencil(pe),Te=pe)},reset:function(){V=!1,mt=null,st=null,gt=null,St=null,ht=null,Bt=null,Tt=null,Te=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},f={},g=new WeakMap,x=[],S=null,m=!1,p=null,C=null,U=null,v=null,A=null,E=null,D=null,M=new Kt(0,0,0),T=0,R=!1,I=null,H=null,k=null,F=null,W=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ct=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=ct>=1):j.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=ct>=2);let ot=null,at={},zt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),we=new Oe().fromArray(zt),oe=new Oe().fromArray(Nt);function ce(V,mt,st,gt){let St=new Uint8Array(4),ht=n.createTexture();n.bindTexture(V,ht),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<st;Bt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(mt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return ht}let it={};it[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Cs),ee(!1),_e(kl),lt(n.CULL_FACE),te(Qn);function lt(V){d[V]!==!0&&(n.enable(V),d[V]=!0)}function At(V){d[V]!==!1&&(n.disable(V),d[V]=!1)}function $t(V,mt){return f[V]!==mt?(n.bindFramebuffer(V,mt),f[V]=mt,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=mt),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Rt(V,mt){let st=x,gt=!1;if(V){st=g.get(mt),st===void 0&&(st=[],g.set(mt,st));let St=V.textures;if(st.length!==St.length||st[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Bt=St.length;ht<Bt;ht++)st[ht]=n.COLOR_ATTACHMENT0+ht;st.length=St.length,gt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,gt=!0);gt&&n.drawBuffers(st)}function qt(V){return S!==V?(n.useProgram(V),S=V,!0):!1}let ge={[es]:n.FUNC_ADD,[Uh]:n.FUNC_SUBTRACT,[Fh]:n.FUNC_REVERSE_SUBTRACT};ge[Oh]=n.MIN,ge[Bh]=n.MAX;let ie={[kh]:n.ZERO,[zh]:n.ONE,[Vh]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[Yh]:n.SRC_ALPHA_SATURATE,[Xh]:n.DST_COLOR,[Hh]:n.DST_ALPHA,[Gh]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[qh]:n.ONE_MINUS_DST_COLOR,[Wh]:n.ONE_MINUS_DST_ALPHA,[$h]:n.CONSTANT_COLOR,[Zh]:n.ONE_MINUS_CONSTANT_COLOR,[Jh]:n.CONSTANT_ALPHA,[Kh]:n.ONE_MINUS_CONSTANT_ALPHA};function te(V,mt,st,gt,St,ht,Bt,Tt,Te,pe){if(V===Qn){m===!0&&(At(n.BLEND),m=!1);return}if(m===!1&&(lt(n.BLEND),m=!0),V!==Nh){if(V!==p||pe!==R){if((C!==es||A!==es)&&(n.blendEquation(n.FUNC_ADD),C=es,A=es),pe)switch(V){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vl:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",V);break}U=null,v=null,E=null,D=null,M.set(0,0,0),T=0,p=V,R=pe}return}St=St||mt,ht=ht||st,Bt=Bt||gt,(mt!==C||St!==A)&&(n.blendEquationSeparate(ge[mt],ge[St]),C=mt,A=St),(st!==U||gt!==v||ht!==E||Bt!==D)&&(n.blendFuncSeparate(ie[st],ie[gt],ie[ht],ie[Bt]),U=st,v=gt,E=ht,D=Bt),(Tt.equals(M)===!1||Te!==T)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Te),M.copy(Tt),T=Te),p=V,R=!1}function ve(V,mt){V.side===Pn?At(n.CULL_FACE):lt(n.CULL_FACE);let st=V.side===cn;mt&&(st=!st),ee(st),V.blending===Ns&&V.transparent===!1?te(Qn):te(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let gt=V.stencilWrite;a.setTest(gt),gt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),jt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){I!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),I=V)}function _e(V){V!==Ih?(lt(n.CULL_FACE),V!==H&&(V===kl?n.cullFace(n.BACK):V===Lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),H=V}function Yt(V){V!==k&&(X&&n.lineWidth(V),k=V)}function jt(V,mt,st){V?(lt(n.POLYGON_OFFSET_FILL),(F!==mt||W!==st)&&(F=mt,W=st,o.getReversed()&&(mt=-mt),n.polygonOffset(mt,st))):At(n.POLYGON_OFFSET_FILL)}function Ae(V){V?lt(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function Ht(V){V===void 0&&(V=n.TEXTURE0+tt-1),ot!==V&&(n.activeTexture(V),ot=V)}function O(V,mt,st){st===void 0&&(ot===null?st=n.TEXTURE0+tt-1:st=ot);let gt=at[st];gt===void 0&&(gt={type:void 0,texture:void 0},at[st]=gt),(gt.type!==V||gt.texture!==mt)&&(ot!==st&&(n.activeTexture(st),ot=st),n.bindTexture(V,mt||it[V]),gt.type=V,gt.texture=mt)}function Me(){let V=at[ot];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function y(){try{n.texSubImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function G(){try{n.texSubImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function nt(){try{n.compressedTexSubImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function pt(){try{n.texStorage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function xt(){try{n.texStorage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function et(){try{n.texImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function rt(){try{n.texImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function yt(V){return h[V]!==void 0?h[V]:n.getParameter(V)}function Ut(V,mt){h[V]!==mt&&(n.pixelStorei(V,mt),h[V]=mt)}function vt(V){we.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function _t(V){oe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function Ft(V,mt){let st=c.get(mt);st===void 0&&(st=new WeakMap,c.set(mt,st));let gt=st.get(V);gt===void 0&&(gt=n.getUniformBlockIndex(mt,V.name),st.set(V,gt))}function Vt(V,mt){let gt=c.get(mt).get(V);l.get(mt)!==gt&&(n.uniformBlockBinding(mt,gt,V.__bindingPointIndex),l.set(mt,gt))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},ot=null,at={},f={},g=new WeakMap,x=[],S=null,m=!1,p=null,C=null,U=null,v=null,A=null,E=null,D=null,M=new Kt(0,0,0),T=0,R=!1,I=null,H=null,k=null,F=null,W=null,we.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:At,bindFramebuffer:$t,drawBuffers:Rt,useProgram:qt,setBlending:te,setMaterial:ve,setFlipSided:ee,setCullFace:_e,setLineWidth:Yt,setPolygonOffset:jt,setScissorTest:Ae,activeTexture:Ht,bindTexture:O,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:P,texImage2D:et,texImage3D:rt,pixelStorei:Ut,getParameter:yt,updateUBOMapping:Ft,uniformBlockBinding:Vt,texStorage2D:pt,texStorage3D:xt,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:nt,scissor:vt,viewport:_t,reset:Qt}}function kx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,d=new WeakMap,h=new Set,f,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,y){return x?new OffscreenCanvas(P,y):hr("canvas")}function m(P,y,G){let q=1,nt=he(P);if((nt.width>G||nt.height>G)&&(q=G/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let pt=Math.floor(q*nt.width),xt=Math.floor(q*nt.height);f===void 0&&(f=S(pt,xt));let et=y?S(pt,xt):f;return et.width=pt,et.height=xt,et.getContext("2d").drawImage(P,0,0,pt,xt),Xt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+pt+"x"+xt+")."),et}else return"data"in P&&Xt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function p(P){return P.generateMipmaps}function C(P){n.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,y,G,q,nt,pt=!1){if(P!==null){if(n[P]!==void 0)return n[P];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt;q&&(xt=t.get("EXT_texture_norm16"),xt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=y;if(y===n.RED&&(G===n.FLOAT&&(et=n.R32F),G===n.HALF_FLOAT&&(et=n.R16F),G===n.UNSIGNED_BYTE&&(et=n.R8),G===n.UNSIGNED_SHORT&&xt&&(et=xt.R16_EXT),G===n.SHORT&&xt&&(et=xt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.R8UI),G===n.UNSIGNED_SHORT&&(et=n.R16UI),G===n.UNSIGNED_INT&&(et=n.R32UI),G===n.BYTE&&(et=n.R8I),G===n.SHORT&&(et=n.R16I),G===n.INT&&(et=n.R32I)),y===n.RG&&(G===n.FLOAT&&(et=n.RG32F),G===n.HALF_FLOAT&&(et=n.RG16F),G===n.UNSIGNED_BYTE&&(et=n.RG8),G===n.UNSIGNED_SHORT&&xt&&(et=xt.RG16_EXT),G===n.SHORT&&xt&&(et=xt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RG8UI),G===n.UNSIGNED_SHORT&&(et=n.RG16UI),G===n.UNSIGNED_INT&&(et=n.RG32UI),G===n.BYTE&&(et=n.RG8I),G===n.SHORT&&(et=n.RG16I),G===n.INT&&(et=n.RG32I)),y===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RGB8UI),G===n.UNSIGNED_SHORT&&(et=n.RGB16UI),G===n.UNSIGNED_INT&&(et=n.RGB32UI),G===n.BYTE&&(et=n.RGB8I),G===n.SHORT&&(et=n.RGB16I),G===n.INT&&(et=n.RGB32I)),y===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),G===n.UNSIGNED_INT&&(et=n.RGBA32UI),G===n.BYTE&&(et=n.RGBA8I),G===n.SHORT&&(et=n.RGBA16I),G===n.INT&&(et=n.RGBA32I)),y===n.RGB&&(G===n.UNSIGNED_SHORT&&xt&&(et=xt.RGB16_EXT),G===n.SHORT&&xt&&(et=xt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),y===n.RGBA){let rt=pt?lr:le.getTransfer(nt);G===n.FLOAT&&(et=n.RGBA32F),G===n.HALF_FLOAT&&(et=n.RGBA16F),G===n.UNSIGNED_BYTE&&(et=rt===ye?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&xt&&(et=xt.RGBA16_EXT),G===n.SHORT&&xt&&(et=xt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function A(P,y){let G;return P?y===null||y===Hn||y===Fs?G=n.DEPTH24_STENCIL8:y===Wn?G=n.DEPTH32F_STENCIL8:y===Us&&(G=n.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hn||y===Fs?G=n.DEPTH_COMPONENT24:y===Wn?G=n.DEPTH_COMPONENT32F:y===Us&&(G=n.DEPTH_COMPONENT16),G}function E(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ke&&P.minFilter!==We?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function D(P){let y=P.target;y.removeEventListener("dispose",D),T(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&h.delete(y)}function M(P){let y=P.target;y.removeEventListener("dispose",M),I(y)}function T(P){let y=i.get(P);if(y.__webglInit===void 0)return;let G=P.source,q=g.get(G);if(q){let nt=q[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(P),Object.keys(q).length===0&&g.delete(G)}i.remove(P)}function R(P){let y=i.get(P);n.deleteTexture(y.__webglTexture);let G=P.source,q=g.get(G);delete q[y.__cacheKey],o.memory.textures--}function I(P){let y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let nt=0;nt<y.__webglFramebuffer[q].length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[q][nt]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let G=P.textures;for(let q=0,nt=G.length;q<nt;q++){let pt=i.get(G[q]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(P)}let H=0;function k(){H=0}function F(){return H}function W(P){H=P}function tt(){let P=H;return P>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,P}function X(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function ct(P,y){let G=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let q=P.image;if(q===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(G,P,y);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+y)}function j(P,y){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){At(G,P,y);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+y)}function ot(P,y){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){At(G,P,y);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+y)}function at(P,y){let G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){$t(G,P,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+y)}let zt={[To]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},Nt={[Ke]:n.NEAREST,[tu]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},we={[su]:n.NEVER,[cu]:n.ALWAYS,[ru]:n.LESS,[Ba]:n.LEQUAL,[ou]:n.EQUAL,[ka]:n.GEQUAL,[au]:n.GREATER,[lu]:n.NOTEQUAL};function oe(P,y){if(y.type===Wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===We||y.magFilter===ea||y.magFilter===Er||y.magFilter===zi||y.minFilter===We||y.minFilter===ea||y.minFilter===Er||y.minFilter===zi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,zt[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,zt[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,zt[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Nt[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==Er&&y.minFilter!==zi||y.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ce(P,y){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",D));let q=y.source,nt=g.get(q);nt===void 0&&(nt={},g.set(q,nt));let pt=X(y);if(pt!==P.__cacheKey){nt[pt]===void 0&&(nt[pt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[pt].usedTimes++;let xt=nt[P.__cacheKey];xt!==void 0&&(nt[P.__cacheKey].usedTimes--,xt.usedTimes===0&&R(y)),P.__cacheKey=pt,P.__webglTexture=nt[pt].texture}return G}function it(P,y,G){return Math.floor(Math.floor(P/G)/y)}function lt(P,y,G,q){let pt=P.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,G,q,y.data);else{pt.sort((Ut,vt)=>Ut.start-vt.start);let xt=0;for(let Ut=1;Ut<pt.length;Ut++){let vt=pt[xt],_t=pt[Ut],Ft=vt.start+vt.count,Vt=it(_t.start,y.width,4),Qt=it(vt.start,y.width,4);_t.start<=Ft+1&&Vt===Qt&&it(_t.start+_t.count-1,y.width,4)===Vt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++xt,pt[xt]=_t)}pt.length=xt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),rt=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ut=0,vt=pt.length;Ut<vt;Ut++){let _t=pt[Ut],Ft=Math.floor(_t.start/4),Vt=Math.ceil(_t.count/4),Qt=Ft%y.width,V=Math.floor(Ft/y.width),mt=Vt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Qt,V,mt,st,G,q,y.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function At(P,y,G){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let nt=ce(P,y),pt=y.source;e.bindTexture(q,P.__webglTexture,n.TEXTURE0+G);let xt=i.get(pt);if(pt.version!==xt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let st=le.getPrimaries(le.workingColorSpace),gt=y.colorSpace===mi?null:le.getPrimaries(y.colorSpace),St=y.colorSpace===mi||st===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let rt=m(y.image,!1,s.maxTextureSize);rt=Me(y,rt);let yt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),vt=v(y.internalFormat,yt,Ut,y.normalized,y.colorSpace,y.isVideoTexture);oe(q,y);let _t,Ft=y.mipmaps,Vt=y.isVideoTexture!==!0,Qt=xt.__version===void 0||nt===!0,V=pt.dataReady,mt=E(y,rt);if(y.isDepthTexture)vt=A(y.format===Vi,y.type),Qt&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,vt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,vt,rt.width,rt.height,0,yt,Ut,null));else if(y.isDataTexture)if(Ft.length>0){Vt&&Qt&&e.texStorage2D(n.TEXTURE_2D,mt,vt,Ft[0].width,Ft[0].height);for(let st=0,gt=Ft.length;st<gt;st++)_t=Ft[st],Vt?V&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t.width,_t.height,yt,Ut,_t.data):e.texImage2D(n.TEXTURE_2D,st,vt,_t.width,_t.height,0,yt,Ut,_t.data);y.generateMipmaps=!1}else Vt?(Qt&&e.texStorage2D(n.TEXTURE_2D,mt,vt,rt.width,rt.height),V&&lt(y,rt,yt,Ut)):e.texImage2D(n.TEXTURE_2D,0,vt,rt.width,rt.height,0,yt,Ut,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,vt,Ft[0].width,Ft[0].height,rt.depth);for(let st=0,gt=Ft.length;st<gt;st++)if(_t=Ft[st],y.format!==In)if(yt!==null)if(Vt){if(V)if(y.layerUpdates.size>0){let St=dc(_t.width,_t.height,y.format,y.type);for(let ht of y.layerUpdates){let Bt=_t.data.subarray(ht*St/_t.data.BYTES_PER_ELEMENT,(ht+1)*St/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,ht,_t.width,_t.height,1,yt,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,rt.depth,yt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,_t.width,_t.height,rt.depth,yt,Ut,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,vt,_t.width,_t.height,rt.depth,0,yt,Ut,_t.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Vt&&Qt&&e.texStorage2D(n.TEXTURE_2D,mt,vt,Ft[0].width,Ft[0].height);for(let st=0,gt=Ft.length;st<gt;st++)_t=Ft[st],y.format!==In?yt!==null?Vt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,st,vt,_t.width,_t.height,0,_t.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?V&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t.width,_t.height,yt,Ut,_t.data):e.texImage2D(n.TEXTURE_2D,st,vt,_t.width,_t.height,0,yt,Ut,_t.data)}else if(y.isDataArrayTexture)if(Vt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,vt,rt.width,rt.height,rt.depth),V)if(y.layerUpdates.size>0){let st=dc(rt.width,rt.height,y.format,y.type);for(let gt of y.layerUpdates){let St=rt.data.subarray(gt*st/rt.data.BYTES_PER_ELEMENT,(gt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,rt.width,rt.height,1,yt,Ut,St)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Ut,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,yt,Ut,rt.data);else if(y.isData3DTexture)Vt?(Qt&&e.texStorage3D(n.TEXTURE_3D,mt,vt,rt.width,rt.height,rt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Ut,rt.data)):e.texImage3D(n.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,yt,Ut,rt.data);else if(y.isFramebufferTexture){if(Qt)if(Vt)e.texStorage2D(n.TEXTURE_2D,mt,vt,rt.width,rt.height);else{let st=rt.width,gt=rt.height;for(let St=0;St<mt;St++)e.texImage2D(n.TEXTURE_2D,St,vt,st,gt,0,yt,Ut,null),st>>=1,gt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(y),st.onpaint=gt=>{let St=gt.changedElements;for(let ht of h)St.includes(ht.image)&&(ht.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,rt);else{let St=n.RGBA,ht=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,St,ht,Bt,rt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Vt&&Qt){let st=he(Ft[0]);e.texStorage2D(n.TEXTURE_2D,mt,vt,st.width,st.height)}for(let st=0,gt=Ft.length;st<gt;st++)_t=Ft[st],Vt?V&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,yt,Ut,_t):e.texImage2D(n.TEXTURE_2D,st,vt,yt,Ut,_t);y.generateMipmaps=!1}else if(Vt){if(Qt){let st=he(rt);e.texStorage2D(n.TEXTURE_2D,mt,vt,st.width,st.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Ut,rt)}else e.texImage2D(n.TEXTURE_2D,0,vt,yt,Ut,rt);p(y)&&C(q),xt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function $t(P,y,G){if(y.image.length!==6)return;let q=ce(P,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let pt=i.get(nt);if(nt.version!==pt.__version||q===!0){e.activeTexture(n.TEXTURE0+G);let xt=le.getPrimaries(le.workingColorSpace),et=y.colorSpace===mi?null:le.getPrimaries(y.colorSpace),rt=y.colorSpace===mi||xt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let yt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let ht=0;ht<6;ht++)!yt&&!Ut?vt[ht]=m(y.image[ht],!0,s.maxCubemapSize):vt[ht]=Ut?y.image[ht].image:y.image[ht],vt[ht]=Me(y,vt[ht]);let _t=vt[0],Ft=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type),Qt=v(y.internalFormat,Ft,Vt,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,mt=pt.__version===void 0||q===!0,st=nt.dataReady,gt=E(y,_t);oe(n.TEXTURE_CUBE_MAP,y);let St;if(yt){V&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Qt,_t.width,_t.height);for(let ht=0;ht<6;ht++){St=vt[ht].mipmaps;for(let Bt=0;Bt<St.length;Bt++){let Tt=St[Bt];y.format!==In?Ft!==null?V?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,Tt.width,Tt.height,Ft,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,Qt,Tt.width,Tt.height,0,Tt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,Tt.width,Tt.height,Ft,Vt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,Qt,Tt.width,Tt.height,0,Ft,Vt,Tt.data)}}}else{if(St=y.mipmaps,V&&mt){St.length>0&&gt++;let ht=he(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Qt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ut){V?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,vt[ht].width,vt[ht].height,Ft,Vt,vt[ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,vt[ht].width,vt[ht].height,0,Ft,Vt,vt[ht].data);for(let Bt=0;Bt<St.length;Bt++){let Te=St[Bt].image[ht].image;V?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Te.width,Te.height,Ft,Vt,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,Qt,Te.width,Te.height,0,Ft,Vt,Te.data)}}else{V?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ft,Vt,vt[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,Ft,Vt,vt[ht]);for(let Bt=0;Bt<St.length;Bt++){let Tt=St[Bt];V?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Ft,Vt,Tt.image[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,Qt,Ft,Vt,Tt.image[ht])}}}p(y)&&C(n.TEXTURE_CUBE_MAP),pt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Rt(P,y,G,q,nt,pt){let xt=r.convert(G.format,G.colorSpace),et=r.convert(G.type),rt=v(G.internalFormat,xt,et,G.normalized,G.colorSpace),yt=i.get(y),Ut=i.get(G);if(Ut.__renderTarget=y,!yt.__hasExternalTextures){let vt=Math.max(1,y.width>>pt),_t=Math.max(1,y.height>>pt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,pt,rt,vt,_t,y.depth,0,xt,et,null):e.texImage2D(nt,pt,rt,vt,_t,0,xt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ht(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,nt,Ut.__webglTexture,0,Ae(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,nt,Ut.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(P,y,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){let q=y.depthTexture,nt=q&&q.isDepthTexture?q.type:null,pt=A(y.stencilBuffer,nt),xt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ht(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae(y),pt,y.width,y.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae(y),pt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,pt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,P)}else{let q=y.textures;for(let nt=0;nt<q.length;nt++){let pt=q[nt],xt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),rt=v(pt.internalFormat,xt,et,pt.normalized,pt.colorSpace);Ht(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae(y),rt,y.width,y.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae(y),rt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,rt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(P,y,G){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(y.depthTexture);if(nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),oe(n.TEXTURE_CUBE_MAP,y.depthTexture);let yt=r.convert(y.depthTexture.format),Ut=r.convert(y.depthTexture.type),vt;y.depthTexture.format===Jn?vt=n.DEPTH_COMPONENT24:y.depthTexture.format===Vi&&(vt=n.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,y.width,y.height,0,yt,Ut,null)}}else ct(y.depthTexture,0);let pt=nt.__webglTexture,xt=Ae(y),et=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,rt=y.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Jn)Ht(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,et,pt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,et,pt,0);else if(y.depthTexture.format===Vi)Ht(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,et,pt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,et,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(P){let y=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=q}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)ge(y.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?ge(y.__webglFramebuffer[0],P,0):ge(y.__webglFramebuffer,P,0)}else if(G){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),qt(y.__webglDepthbuffer[q],P,!1);else{let nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),qt(y.__webglDepthbuffer,P,!1);else{let nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(P,y,G){let q=i.get(P);y!==void 0&&Rt(q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ie(P)}function ve(P){let y=P.texture,G=i.get(P),q=i.get(y);P.addEventListener("dispose",M);let nt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,xt=nt.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),pt){G.__webglFramebuffer=[];for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[et]=[];for(let rt=0;rt<y.mipmaps.length;rt++)G.__webglFramebuffer[et][rt]=n.createFramebuffer()}else G.__webglFramebuffer[et]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let et=0;et<y.mipmaps.length;et++)G.__webglFramebuffer[et]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(xt)for(let et=0,rt=nt.length;et<rt;et++){let yt=i.get(nt[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ht(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let et=0;et<nt.length;et++){let rt=nt[et];G.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[et]);let yt=r.convert(rt.format,rt.colorSpace),Ut=r.convert(rt.type),vt=v(rt.internalFormat,yt,Ut,rt.normalized,rt.colorSpace,P.isXRRenderTarget===!0),_t=Ae(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,vt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,G.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),oe(n.TEXTURE_CUBE_MAP,y);for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Rt(G.__webglFramebuffer[et][rt],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else Rt(G.__webglFramebuffer[et],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(y)&&C(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let et=0,rt=nt.length;et<rt;et++){let yt=nt[et],Ut=i.get(yt),vt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ut.__webglTexture),oe(vt,yt),Rt(G.__webglFramebuffer,P,yt,n.COLOR_ATTACHMENT0+et,vt,0),p(yt)&&C(vt)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,q.__webglTexture),oe(et,y),y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Rt(G.__webglFramebuffer[rt],P,y,n.COLOR_ATTACHMENT0,et,rt);else Rt(G.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,et,0);p(y)&&C(et),e.unbindTexture()}P.depthBuffer&&ie(P)}function ee(P){let y=P.textures;for(let G=0,q=y.length;G<q;G++){let nt=y[G];if(p(nt)){let pt=U(P),xt=i.get(nt).__webglTexture;e.bindTexture(pt,xt),C(pt),e.unbindTexture()}}}let _e=[],Yt=[];function jt(P){if(P.samples>0){if(Ht(P)===!1){let y=P.textures,G=P.width,q=P.height,nt=n.COLOR_BUFFER_BIT,pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(P),et=y.length>1;if(et)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let rt=P.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Ut=i.get(y[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,G,q,0,0,G,q,nt,n.NEAREST),l===!0&&(_e.length=0,Yt.length=0,_e.push(n.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(_e.push(pt),Yt.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Ut=i.get(y[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ae(P){return Math.min(s.maxSamples,P.samples)}function Ht(P){let y=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=o.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function Me(P,y){let G=P.colorSpace,q=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ar&&G!==mi&&(le.getTransfer(G)===ye?(q!==In||nt!==Mn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",G)),y}function he(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=k,this.getTextureUnits=F,this.setTextureUnits=W,this.setTexture2D=ct,this.setTexture2DArray=j,this.setTexture3D=ot,this.setTextureCube=at,this.rebindTextures=te,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zx(n,t){function e(i,s=mi){let r,o=le.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ic)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tc)return n.BYTE;if(i===ec)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===na)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===sc)return n.ALPHA;if(i===rc)return n.RGB;if(i===In)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===oc)return n.RED;if(i===ra)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===oa)return n.RG_INTEGER;if(i===aa)return n.RGBA_INTEGER;if(i===Cr||i===Rr||i===Pr||i===Ir)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===la||i===ca||i===ha||i===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fa||i===da||i===pa||i===ma||i===ga||i===Lr||i===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fa||i===da)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ma)return r.COMPRESSED_R11_EAC;if(i===ga)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Lr)return r.COMPRESSED_RG11_EAC;if(i===xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_a||i===ya||i===va||i===Ma||i===Sa||i===ba||i===wa||i===Aa||i===Ta||i===Ea||i===Ca||i===Ra||i===Pa||i===Ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_a)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ea)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===Da||i===Na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===La)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ua||i===Fa||i===Dr||i===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new nn({vertexShader:Vx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Kn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,x=null,S=typeof XRWebGLBinding<"u",m=new Lc,p={},C=e.getContextAttributes(),U=null,v=null,A=[],E=[],D=new re,M=null,T=null,R=new en;R.viewport=new Oe;let I=new en;I.viewport=new Oe;let H=[R,I],k=new Ko,F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let lt=A[it];return lt===void 0&&(lt=new Is,A[it]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(it){let lt=A[it];return lt===void 0&&(lt=new Is,A[it]=lt),lt.getGripSpace()},this.getHand=function(it){let lt=A[it];return lt===void 0&&(lt=new Is,A[it]=lt),lt.getHandSpace()};function tt(it){let lt=E.indexOf(it.inputSource);if(lt===-1)return;let At=A[lt];At!==void 0&&(At.update(it.inputSource,it.frame,c||o),At.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ct);for(let it=0;it<A.length;it++){let lt=E[it];lt!==null&&(E[it]=null,A[it].disconnect(lt))}F=null,W=null,m.reset();for(let it in p)delete p[it];if(t.setRenderTarget(U),g=null,f=null,h=null,s=null,v=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(D.width,D.height,!1),T!==null){let it=T.camera;it.fov=T.fov,it.zoom=T.zoom,it.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ct),C.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,$t=null,Rt=null;C.depth&&(Rt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=C.stencil?Vi:Jn,$t=C.stencil?Fs:Hn);let qt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new dn(f.textureWidth,f.textureHeight,{format:In,type:Mn,depthTexture:new Ni(f.textureWidth,f.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let At={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new dn(g.framebufferWidth,g.framebufferHeight,{format:In,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(it){for(let lt=0;lt<it.removed.length;lt++){let At=it.removed[lt],$t=E.indexOf(At);$t>=0&&(E[$t]=null,A[$t].disconnect(At))}for(let lt=0;lt<it.added.length;lt++){let At=it.added[lt],$t=E.indexOf(At);if($t===-1){for(let qt=0;qt<A.length;qt++)if(qt>=E.length){E.push(At),$t=qt;break}else if(E[qt]===null){E[qt]=At,$t=qt;break}if($t===-1)break}let Rt=A[$t];Rt&&Rt.connect(At)}}let j=new Z,ot=new Z;function at(it,lt,At){j.setFromMatrixPosition(lt.matrixWorld),ot.setFromMatrixPosition(At.matrixWorld);let $t=j.distanceTo(ot),Rt=lt.projectionMatrix.elements,qt=At.projectionMatrix.elements,ge=Rt[14]/(Rt[10]-1),ie=Rt[14]/(Rt[10]+1),te=(Rt[9]+1)/Rt[5],ve=(Rt[9]-1)/Rt[5],ee=(Rt[8]-1)/Rt[0],_e=(qt[8]+1)/qt[0],Yt=ge*ee,jt=ge*_e,Ae=$t/(-ee+_e),Ht=Ae*-ee;if(lt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ht),it.translateZ(Ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Rt[10]===-1)it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let O=ge+Ae,Me=ie+Ae,he=Yt-Ht,P=jt+($t-Ht),y=te*ie/Me*O,G=ve*ie/Me*O;it.projectionMatrix.makePerspective(he,P,y,G,O,Me),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function zt(it,lt){lt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(lt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let lt=it.near,At=it.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(At=m.depthFar)),k.near=I.near=R.near=lt,k.far=I.far=R.far=At,(F!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,W=k.far),k.layers.mask=it.layers.mask|6,R.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let $t=it.parent,Rt=k.cameras;zt(k,$t);for(let qt=0;qt<Rt.length;qt++)zt(Rt[qt],$t);Rt.length===2?at(k,R,I):k.projectionMatrix.copy(R.projectionMatrix),T===null&&it.isPerspectiveCamera&&(T={camera:it,fov:it.fov,zoom:it.zoom}),Nt(it,k,$t)};function Nt(it,lt,At){At===null?it.matrix.copy(lt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(lt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ro*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(it){return p[it]};let we=null;function oe(it,lt){if(d=lt.getViewerPose(c||o),x=lt,d!==null){let At=d.views;g!==null&&(t.setRenderTargetFramebuffer(v,g.framebuffer),t.setRenderTarget(v));let $t=!1;At.length!==k.cameras.length&&(k.cameras.length=0,$t=!0);for(let ie=0;ie<At.length;ie++){let te=At[ie],ve=null;if(g!==null)ve=g.getViewport(te);else{let _e=h.getViewSubImage(f,te);ve=_e.viewport,ie===0&&(t.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(v))}let ee=H[ie];ee===void 0&&(ee=new en,ee.layers.enable(ie),ee.viewport=new Oe,H[ie]=ee),ee.matrix.fromArray(te.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(te.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ve.x,ve.y,ve.width,ve.height),ie===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),$t===!0&&k.cameras.push(ee)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=i.getBinding();let ie=h.getDepthInformation(At[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(Rt&&Rt.includes("camera-access")&&S){t.state.unbindTexture(),h=i.getBinding();for(let ie=0;ie<At.length;ie++){let te=At[ie].camera;if(te){let ve=p[te];ve||(ve=new vr,p[te]=ve);let ee=h.getCameraImage(te);ve.sourceTexture=ee}}}}for(let At=0;At<A.length;At++){let $t=E[At],Rt=A[At];$t!==null&&Rt!==void 0&&Rt.update($t,lt,c||o)}we&&we(it,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),x=null}let ce=new zu;ce.setAnimationLoop(oe),this.setAnimationLoop=function(it){we=it},this.dispose=function(){}}},Hx=new Be,qu=new Jt;qu.set(-1,0,0,0,1,0,0,0,1);function Wx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,U,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,U):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=t.get(p),U=C.envMap,v=C.envMapRotation;U&&(m.envMap.value=U,m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(v)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,U){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=U*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let C=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let E=A.program;i.uniformBlockBinding(v,E)}function c(v,A){let E=s[v.id];E===void 0&&(m(v),E=d(v),s[v.id]=E,v.addEventListener("dispose",C));let D=A.program;i.updateUBOMapping(v,D);let M=t.render.frame;r[v.id]!==M&&(f(v),r[v.id]=M)}function d(v){let A=h();v.__bindingPointIndex=A;let E=n.createBuffer(),D=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let A=s[v.id],E=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let M=0,T=E.length;M<T;M++){let R=E[M];if(Array.isArray(R))for(let I=0,H=R.length;I<H;I++)g(R[I],M,I,D);else g(R,M,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(v,A,E,D){if(S(v,A,E,D)===!0){let M=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let H=T[I],k=p(H);x(H,v.__data,R),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,v.__data)}}function x(v,A,E){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,E)}function S(v,A,E,D){let M=v.value,T=A+"_"+E;if(D[T]===void 0)return typeof M=="number"||typeof M=="boolean"?D[T]=M:ArrayBuffer.isView(M)?D[T]=M.slice():D[T]=M.clone(),!0;{let R=D[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return D[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function m(v){let A=v.uniforms,E=0,D=16;for(let T=0,R=A.length;T<R;T++){let I=Array.isArray(A[T])?A[T]:[A[T]];for(let H=0,k=I.length;H<k;H++){let F=I[H],W=Array.isArray(F.value)?F.value:[F.value];for(let tt=0,X=W.length;tt<X;tt++){let ct=W[tt],j=p(ct),ot=E%D,at=ot%j.boundary,zt=ot+at;E+=at,zt!==0&&D-zt<j.storage&&(E+=D-zt),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=j.storage}}}let M=E%D;return M>0&&(E+=D-M),v.__size=E,v.__cache={},this}function p(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",v),A}function C(v){let A=v.target;A.removeEventListener("dispose",C);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function U(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:U}}var qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Yx(){return ti===null&&(ti=new Uo(qx,16,16,Gi,Xn),ti.name="DFG_LUT",ti.minFilter=We,ti.magFilter=We,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Wa=class{constructor(t={}){let{canvas:e=hu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Mn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let S=g,m=new Set([aa,oa,ra]),p=new Set([Mn,Hn,Us,Fs,ia,sa]),C=new Uint32Array(4),U=new Int32Array(4),v=new Z,A=null,E=null,D=[],M=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,H=null,k=null,F=null,W=null;this._outputColorSpace=He;let tt=0,X=0,ct=null,j=-1,ot=null,at=new Oe,zt=new Oe,Nt=null,we=new Kt(0),oe=0,ce=e.width,it=e.height,lt=1,At=null,$t=null,Rt=new Oe(0,0,ce,it),qt=new Oe(0,0,ce,it),ge=!1,ie=new _r,te=!1,ve=!1,ee=new Be,_e=new Z,Yt=new Oe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Ht(){return ct===null?lt:1}let O=i;function Me(w,z){return e.getContext(w,z)}let he,P,y,G,q,nt,pt,xt,et,rt,yt,Ut,vt,_t,Ft,Vt,Qt,V,mt,st,gt,St,ht;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",hn,!1),O===null){let z="webgl2";if(O=Me(z,w),O===null)throw Me(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(w){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),Wt("WebGLRenderer: "+w.message),w}function Bt(){he=new tg(O),he.init(),gt=new zx(O,he),P=new W0(O,he,t,gt),y=new Bx(O,he),P.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),k=O.createFramebuffer(),F=O.createFramebuffer(),W=O.createFramebuffer(),G=new ig(O),q=new wx,nt=new kx(O,he,y,q,P,gt,G),pt=new Q0(R),xt=new rp(O),St=new G0(O,xt),et=new eg(O,xt,G,St),rt=new rg(O,et,xt,St,G),V=new sg(O,P,nt),Ft=new X0(q),yt=new bx(R,pt,he,P,St,Ft),Ut=new Wx(R,q),vt=new Tx,_t=new Lx(he),Qt=new V0(R,pt,y,rt,x,l),Vt=new Ox(R,rt,P),ht=new Xx(O,G,P,y),mt=new H0(O,he,G),st=new ng(O,he,G),G.programs=yt.programs,R.capabilities=P,R.extensions=he,R.properties=q,R.renderLists=vt,R.shadowMap=Vt,R.state=y,R.info=G}S!==Mn&&(T=new ag(S,e.width,e.height,a,s,r));let Tt=new Dc(R,O);this.xr=Tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(w){w!==void 0&&(lt=w,this.setSize(ce,it,!1))},this.getSize=function(w){return w.set(ce,it)},this.setSize=function(w,z,K=!0){if(Tt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=w,it=z,e.width=Math.floor(w*lt),e.height=Math.floor(z*lt),K===!0&&(e.style.width=w+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(ce*lt,it*lt).floor()},this.setDrawingBufferSize=function(w,z,K){ce=w,it=z,lt=K,e.width=Math.floor(w*K),e.height=Math.floor(z*K),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(S===Mn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(at)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,z,K,Y){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,z,K,Y),y.viewport(at.copy(Rt).multiplyScalar(lt).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,z,K,Y){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,z,K,Y),y.scissor(zt.copy(qt).multiplyScalar(lt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){y.setScissorTest(ge=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){$t=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,K=!0){let Y=0;if(w){let $=!1;if(ct!==null){let bt=ct.texture.format;$=m.has(bt)}if($){let bt=ct.texture.type,Pt=p.has(bt),Mt=Qt.getClearColor(),It=Qt.getClearAlpha(),Ot=Mt.r,Zt=Mt.g,ne=Mt.b;Pt?(C[0]=Ot,C[1]=Zt,C[2]=ne,C[3]=It,O.clearBufferuiv(O.COLOR,0,C)):(U[0]=Ot,U[1]=Zt,U[2]=ne,U[3]=It,O.clearBufferiv(O.COLOR,0,U))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),H=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),Qt.dispose(),vt.dispose(),_t.dispose(),q.dispose(),pt.dispose(),rt.dispose(),St.dispose(),ht.dispose(),yt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Dn),Tt.removeEventListener("sessionend",yi),ri.stop()};function Te(w){w.preventDefault(),ur("WebGLRenderer: Context Lost."),I=!0}function pe(){ur("WebGLRenderer: Context Restored."),I=!1;let w=G.autoReset,z=Vt.enabled,K=Vt.autoUpdate,Y=Vt.needsUpdate,$=Vt.type;Bt(),G.autoReset=w,Vt.enabled=z,Vt.autoUpdate=K,Vt.needsUpdate=Y,Vt.type=$}function hn(w){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Sn(w){let z=w.target;z.removeEventListener("dispose",Sn),il(z)}function il(w){un(w),q.remove(w)}function un(w){let z=q.get(w).programs;z!==void 0&&(z.forEach(function(K){yt.releaseProgram(K)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,K,Y,$,bt){z===null&&(z=jt);let Pt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Mt=$s(w,z,K,Y,$);y.setMaterial(Y,Pt);let It=K.index,Ot=1;if(Y.wireframe===!0){if(It=et.getWireframeAttribute(K),It===void 0)return;Ot=2}let Zt=K.drawRange,ne=K.attributes.position,Lt=Zt.start*Ot,xe=(Zt.start+Zt.count)*Ot;bt!==null&&(Lt=Math.max(Lt,bt.start*Ot),xe=Math.min(xe,(bt.start+bt.count)*Ot)),It!==null?(Lt=Math.max(Lt,0),xe=Math.min(xe,It.count)):ne!=null&&(Lt=Math.max(Lt,0),xe=Math.min(xe,ne.count));let De=xe-Lt;if(De<0||De===1/0)return;St.setup($,Y,Mt,K,It);let Ee,me=mt;if(It!==null&&(Ee=xt.get(It),me=st,me.setIndex(Ee)),$.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*Ht()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if($.isLine){let ze=Y.linewidth;ze===void 0&&(ze=1),y.setLineWidth(ze*Ht()),$.isLineSegments?me.setMode(O.LINES):$.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else $.isPoints?me.setMode(O.POINTS):$.isSprite&&me.setMode(O.TRIANGLES);if($.isBatchedMesh)if(he.get("WEBGL_multi_draw"))me.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let ze=$._multiDrawStarts,Ct=$._multiDrawCounts,Xe=$._multiDrawCount,ae=It?xt.get(It).bytesPerElement:1,on=q.get(Y).currentProgram.getUniforms();for(let pn=0;pn<Xe;pn++)on.setValue(O,"_gl_DrawID",pn),me.render(ze[pn]/ae,Ct[pn])}else if($.isInstancedMesh)me.renderInstances(Lt,De,$.count);else if(K.isInstancedBufferGeometry){let ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ct=Math.min(K.instanceCount,ze);me.renderInstances(Lt,De,Ct)}else me.render(Lt,De)};function Xs(w,z,K,Y){H!==null&&w.isNodeMaterial&&H.setObject(Y,w),te===!0&&Ft.setState(w,K,!1),w.transparent===!0&&w.side===Pn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,vi(w,z,Y),w.side=Bi,w.needsUpdate=!0,vi(w,z,Y),w.side=Pn):vi(w,z,Y)}this.compile=function(w,z,K=null){K===null&&(K=w),H!==null&&H.renderStart(w,z,K),E=_t.get(K),E.init(z),M.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==K&&w.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),ve=this.localClippingEnabled,te=Ft.init(this.clippingPlanes,ve),te===!0&&Ft.setGlobalState(this.clippingPlanes,z),H!==null&&Vt.render(E.state.shadowsArray,K,z);let Y=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let bt=$.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){let Mt=bt[Pt];Xs(Mt,K,z,$),Y.add(Mt)}else Xs(bt,K,z,$),Y.add(bt)}),E=M.pop(),H!==null&&H.renderEnd(),Y},this.compileAsync=function(w,z,K=null){let Y=this.compile(w,z,K);return new Promise($=>{function bt(){if(Y.forEach(function(Pt){let It=q.get(Pt).currentProgram;(It===void 0||It.isReady())&&Y.delete(Pt)}),Y.size===0){$(w);return}setTimeout(bt,10)}he.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Yi=null;function os(w){Yi&&Yi(w)}function Dn(){ri.stop()}function yi(){ri.start()}let ri=new zu;ri.setAnimationLoop(os),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(w){Yi=w,Tt.setAnimationLoop(w),w===null?ri.stop():ri.start()},Tt.addEventListener("sessionstart",Dn),Tt.addEventListener("sessionend",yi),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;H!==null&&H.renderStart(w,z);let K=Tt.enabled===!0&&Tt.isPresenting===!0,Y=T!==null&&(ct===null||K)&&T.begin(R,ct);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(z),z=Tt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,z,ct),E=_t.get(w,M.length),E.init(z),E.state.textureUnits=nt.getTextureUnits(),M.push(E),ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(ee,zn,z.reversedDepth),ve=this.localClippingEnabled,te=Ft.init(this.clippingPlanes,ve),A=vt.get(w,D.length),A.init(),D.push(A),Tt.enabled===!0&&Tt.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&as(Pt,z,-1/0,R.sortObjects)}as(w,z,0,R.sortObjects),A.finish(),H!==null&&H.updateLights(E.state.lightsArray),R.sortObjects===!0&&A.sort(At,$t),Ae=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Ae&&Qt.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Ft.beginShadows();let $=E.state.shadowsArray;if(Vt.render($,w,z),te===!0&&Ft.endShadows(),(Y&&T.hasRenderPass())===!1){let Pt=A.opaque,Mt=A.transmissive;if(E.setupLights(),z.isArrayCamera){let It=z.cameras;if(Mt.length>0)for(let Ot=0,Zt=It.length;Ot<Zt;Ot++){let ne=It[Ot];$i(Pt,Mt,w,ne)}Ae&&Qt.render(w);for(let Ot=0,Zt=It.length;Ot<Zt;Ot++){let ne=It[Ot];bn(A,w,ne,ne.viewport)}}else Mt.length>0&&$i(Pt,Mt,w,z),Ae&&Qt.render(w),bn(A,w,z)}ct!==null&&X===0&&(nt.updateMultisampleRenderTarget(ct),nt.updateRenderTargetMipmap(ct)),Y&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,z),St.resetDefaultState(),j=-1,ot=null,M.pop(),M.length>0?(E=M[M.length-1],nt.setTextureUnits(E.state.textureUnits),te===!0&&Ft.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,H!==null&&H.renderEnd()};function as(w,z,K,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ie)){Y&&Yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);let Pt=rt.update(w),Mt=w.material;Mt.visible&&A.push(w,Pt,Mt,K,Yt.z,null,z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ie))){let Pt=rt.update(w),Mt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Yt.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Yt.copy(Pt.boundingSphere.center)),Yt.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(Mt)){let It=Pt.groups;for(let Ot=0,Zt=It.length;Ot<Zt;Ot++){let ne=It[Ot],Lt=Mt[ne.materialIndex];Lt&&Lt.visible&&A.push(w,Pt,Lt,K,Yt.z,ne,z)}}else Mt.visible&&A.push(w,Pt,Mt,K,Yt.z,null,z)}}let bt=w.children;for(let Pt=0,Mt=bt.length;Pt<Mt;Pt++)as(bt[Pt],z,K,Y)}function bn(w,z,K,Y){let{opaque:$,transmissive:bt,transparent:Pt}=w;E.setupLightsView(K),te===!0&&Ft.setGlobalState(R.clippingPlanes,K),Y&&y.viewport(at.copy(Y)),$.length>0&&Zi($,z,K),bt.length>0&&Zi(bt,z,K),Pt.length>0&&Zi(Pt,z,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function $i(w,z,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let Lt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new dn(1,1,{generateMipmaps:!0,type:Lt?Xn:Mn,minFilter:zi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let bt=E.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||at;bt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),It=R.getActiveCubeFace(),Ot=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(we),oe=R.getClearAlpha(),oe<1&&R.setClearColor(16777215,.5),R.clear(),Ae&&Qt.render(K);let Zt=R.toneMapping;R.toneMapping=Gn;let ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),te===!0&&Ft.setGlobalState(R.clippingPlanes,Y),Zi(w,K,Y),nt.updateMultisampleRenderTarget(bt),nt.updateRenderTargetMipmap(bt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let xe=0,De=z.length;xe<De;xe++){let Ee=z[xe],{object:me,geometry:ze,material:Ct,group:Xe}=Ee;if(Ct.side===Pn&&me.layers.test(Y.layers)){let ae=Ct.side;Ct.side=cn,Ct.needsUpdate=!0,qs(me,K,Y,ze,Ct,Xe),Ct.side=ae,Ct.needsUpdate=!0,Lt=!0}}Lt===!0&&(nt.updateMultisampleRenderTarget(bt),nt.updateRenderTargetMipmap(bt))}R.setRenderTarget(Mt,It,Ot),R.setClearColor(we,oe),ne!==void 0&&(Y.viewport=ne),R.toneMapping=Zt}function Zi(w,z,K){let Y=z.isScene===!0?z.overrideMaterial:null;for(let $=0,bt=w.length;$<bt;$++){let Pt=w[$],{object:Mt,geometry:It,group:Ot}=Pt,Zt=Pt.material;Zt.allowOverride===!0&&Y!==null&&(Zt=Y),Mt.layers.test(K.layers)&&qs(Mt,z,K,It,Zt,Ot)}}function qs(w,z,K,Y,$,bt){H!==null&&$.isNodeMaterial&&H.setObject(w,$),w.onBeforeRender(R,z,K,Y,$,bt),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(R,z,K,Y,w,bt),$.transparent===!0&&$.side===Pn&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,R.renderBufferDirect(K,z,Y,$,w,bt),$.side=Bi,$.needsUpdate=!0,R.renderBufferDirect(K,z,Y,$,w,bt),$.side=Pn):R.renderBufferDirect(K,z,Y,$,w,bt),w.onAfterRender(R,z,K,Y,$,bt)}function vi(w,z,K){z.isScene!==!0&&(z=jt);let Y=q.get(w),$=E.state.lights,bt=E.state.shadowsArray,Pt=$.state.version,Mt=yt.getParameters(w,$.state,bt,z,K,E.state.lightProbeGridArray),It=yt.getProgramCacheKey(Mt),Ot=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let Zt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=pt.get(w.envMap||Y.environment,Zt),Y.envMapRotation=Y.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Sn),Ot=new Map,Y.programs=Ot);let ne=Ot.get(It);if(ne!==void 0){if(Y.currentProgram===ne&&Y.lightsStateVersion===Pt)return Gr(w,Mt),ne}else Mt.uniforms=yt.getUniforms(w),H!==null&&w.isNodeMaterial&&H.build(w,K,Mt),w.onBeforeCompile(Mt,R),ne=yt.acquireProgram(Mt,It),Ot.set(It,ne),Y.uniforms=Mt.uniforms;let Lt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=Ft.uniform),Gr(w,Mt),Y.needsLights=Pe(w),Y.lightsStateVersion=Pt,Y.needsLights&&(Lt.ambientLightColor.value=$.state.ambient,Lt.lightProbe.value=$.state.probe,Lt.sunLights.value=$.state.sun,Lt.sunLightShadows.value=$.state.sunShadow,Lt.directionalLights.value=$.state.directional,Lt.directionalLightShadows.value=$.state.directionalShadow,Lt.spotLights.value=$.state.spot,Lt.spotLightShadows.value=$.state.spotShadow,Lt.rectAreaLights.value=$.state.rectArea,Lt.ltc_1.value=$.state.rectAreaLTC1,Lt.ltc_2.value=$.state.rectAreaLTC2,Lt.pointLights.value=$.state.point,Lt.pointLightShadows.value=$.state.pointShadow,Lt.hemisphereLights.value=$.state.hemi,Lt.sunShadowMatrix.value=$.state.sunShadowMatrix,Lt.sunShadowCascade.value=$.state.sunShadowCascade,Lt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Lt.spotLightMatrix.value=$.state.spotLightMatrix,Lt.spotLightMap.value=$.state.spotLightMap,Lt.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=ne,Y.uniformsList=null,ne}function Ys(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Gr(w,z){let K=q.get(w);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function wn(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let K=0,Y=w.length;K<Y;K++){let $=w[K];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function $s(w,z,K,Y,$){z.isScene!==!0&&(z=jt),nt.resetTextureUnits();let bt=z.fog,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Mt=ct===null?R.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:le.workingColorSpace,It=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ot=pt.get(Y.envMap||Pt,It),Zt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ne=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!K.morphAttributes.position,xe=!!K.morphAttributes.normal,De=!!K.morphAttributes.color,Ee=Gn;Y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ee=R.toneMapping);let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ze=me!==void 0?me.length:0,Ct=q.get(Y),Xe=E.state.lights;if(te===!0&&(ve===!0||w!==ot)){let Se=w===ot&&Y.id===j;Ft.setState(Y,w,Se)}let ae=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Xe.state.version||Ct.outputColorSpace!==Mt||$.isBatchedMesh&&Ct.batching===!1||!$.isBatchedMesh&&Ct.batching===!0||$.isBatchedMesh&&Ct.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ct.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ct.instancing===!1||!$.isInstancedMesh&&Ct.instancing===!0||$.isSkinnedMesh&&Ct.skinning===!1||!$.isSkinnedMesh&&Ct.skinning===!0||$.isInstancedMesh&&Ct.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ct.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ct.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ct.instancingMorph===!1&&$.morphTexture!==null||Ct.envMap!==Ot||Y.fog===!0&&Ct.fog!==bt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ft.numPlanes||Ct.numIntersection!==Ft.numIntersection)||Ct.vertexAlphas!==Zt||Ct.vertexTangents!==ne||Ct.morphTargets!==Lt||Ct.morphNormals!==xe||Ct.morphColors!==De||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==ze||!!Ct.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Ct.__version=Y.version);let on=Ct.currentProgram;ae===!0&&(on=vi(Y,z,$),H&&Y.isNodeMaterial&&H.onUpdateProgram(Y,on,Ct));let pn=!1,mn=!1,Mi=!1,Gt=on.getUniforms(),Ie=Ct.uniforms;if(y.useProgram(on.program)&&(pn=!0,mn=!0,Mi=!0),Y.id!==j&&(j=Y.id,mn=!0),Ct.needsLights){let Se=wn(E.state.lightProbeGridArray,$);Ct.lightProbeGrid!==Se&&(Ct.lightProbeGrid=Se,mn=!0)}if(pn||ot!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Gt.setValue(O,"projectionMatrix",w.projectionMatrix),Gt.setValue(O,"viewMatrix",w.matrixWorldInverse);let fn=Gt.map.cameraPosition;fn!==void 0&&fn.setValue(O,_e.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),ot!==w&&(ot=w,mn=!0,Mi=!0)}if(Ct.needsLights&&(Xe.state.sunShadowMap.length>0&&Gt.setValue(O,"sunShadowMap",Xe.state.sunShadowMap,nt),Xe.state.directionalShadowMap.length>0&&Gt.setValue(O,"directionalShadowMap",Xe.state.directionalShadowMap,nt),Xe.state.spotShadowMap.length>0&&Gt.setValue(O,"spotShadowMap",Xe.state.spotShadowMap,nt),Xe.state.pointShadowMap.length>0&&Gt.setValue(O,"pointShadowMap",Xe.state.pointShadowMap,nt)),$.isSkinnedMesh){Gt.setOptional(O,$,"bindMatrix"),Gt.setOptional(O,$,"bindMatrixInverse");let Se=$.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),Gt.setValue(O,"boneTexture",Se.boneTexture,nt))}$.isBatchedMesh&&(Gt.setOptional(O,$,"batchingTexture"),Gt.setValue(O,"batchingTexture",$._matricesTexture,nt),Gt.setOptional(O,$,"batchingIdTexture"),Gt.setValue(O,"batchingIdTexture",$._indirectTexture,nt),Gt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Gt.setValue(O,"batchingColorTexture",$._colorsTexture,nt));let Nn=K.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&V.update($,K,on),(mn||Ct.receiveShadow!==$.receiveShadow)&&(Ct.receiveShadow=$.receiveShadow,Gt.setValue(O,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Ie.envMapIntensity.value=z.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=Yx()),mn){if(Gt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&Zs(Ie,Mi),bt&&Y.fog===!0&&Ut.refreshFogUniforms(Ie,bt),Ut.refreshMaterialUniforms(Ie,Y,lt,it,E.state.transmissionRenderTarget[w.id]),Ct.needsLights&&Ct.lightProbeGrid){let Se=Ct.lightProbeGrid;Ie.probesSH.value=Se.texture,Ie.probesMin.value.copy(Se.boundingBox.min),Ie.probesMax.value.copy(Se.boundingBox.max),Ie.probesResolution.value.copy(Se.resolution)}ks.upload(O,Ys(Ct),Ie,nt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ks.upload(O,Ys(Ct),Ie,nt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Gt.setValue(O,"center",$.center),Gt.setValue(O,"modelViewMatrix",$.modelViewMatrix),Gt.setValue(O,"normalMatrix",$.normalMatrix),Gt.setValue(O,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Se=Y.uniformsGroups;for(let fn=0,Si=Se.length;fn<Si;fn++){let ls=Se[fn];ht.update(ls,on),ht.bind(ls,on)}}return on}function Zs(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.sunLights.needsUpdate=z,w.sunLightShadows.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Pe(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(w,z,K){let Y=q.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=z,q.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let K=q.get(w);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,K=0){ct=w,tt=z,X=K;let Y=null,$=!1,bt=!1;if(w){let Mt=q.get(w);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),at.copy(w.viewport),zt.copy(w.scissor),Nt=w.scissorTest,y.viewport(at),y.scissor(zt),y.setScissorTest(Nt),j=-1;return}else if(Mt.__webglFramebuffer===void 0)nt.setupRenderTarget(w);else if(Mt.__hasExternalTextures)nt.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Zt=w.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&q.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let Ot=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?Y=Ot[z][K]:Y=Ot[z],$=!0):w.samples>0&&nt.useMultisampledRTT(w)===!1?Y=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?Y=Ot[K]:Y=Ot,at.copy(w.viewport),zt.copy(w.scissor),Nt=w.scissorTest}else at.copy(Rt).multiplyScalar(lt).floor(),zt.copy(qt).multiplyScalar(lt).floor(),Nt=ge;if(K!==0&&(Y=k),y.bindFramebuffer(O.FRAMEBUFFER,Y)&&y.drawBuffers(w,Y),y.viewport(at),y.scissor(zt),y.setScissorTest(Nt),$){let Mt=q.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,K)}else if(bt){let Mt=z;for(let It=0;It<w.textures.length;It++){let Ot=q.get(w.textures[It]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+It,Ot.__webglTexture,K,Mt)}}else if(w!==null&&K!==0){let Mt=q.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,K)}j=-1};function Re(w){let z=q.get(w);return(z.__readFormat!==w.format||z.__readType!==w.type)&&(z.__readFormat=w.format,z.__readType=w.type,z.__formatReadable=P.textureFormatReadable(w.format),z.__typeReadable=P.textureTypeReadable(w.type)),z}this.readRenderTargetPixels=function(w,z,K,Y,$,bt,Pt,Mt=0){if(!(w&&w.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){y.bindFramebuffer(O.FRAMEBUFFER,It);try{let Ot=w.textures[Mt],Zt=Ot.format,ne=Ot.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Lt=Re(Ot);if(Lt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&K>=0&&K<=w.height-$&&O.readPixels(z,K,Y,$,gt.convert(Zt),gt.convert(ne),bt)}finally{let Ot=ct!==null?q.get(ct).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,z,K,Y,$,bt,Pt,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(z>=0&&z<=w.width-Y&&K>=0&&K<=w.height-$){y.bindFramebuffer(O.FRAMEBUFFER,It);let Ot=w.textures[Mt],Zt=Ot.format,ne=Ot.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Lt=Re(Ot);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xe),O.bufferData(O.PIXEL_PACK_BUFFER,bt.byteLength,O.STREAM_READ),O.readPixels(z,K,Y,$,gt.convert(Zt),gt.convert(ne),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let De=ct!==null?q.get(ct).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,De);let Ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await fu(O,Ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,bt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(xe),O.deleteSync(Ee),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,K=0){let Y=Math.pow(2,-K),$=Math.floor(w.image.width*Y),bt=Math.floor(w.image.height*Y),Pt=z!==null?z.x:0,Mt=z!==null?z.y:0;nt.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Pt,Mt,$,bt),y.unbindTexture()},this.copyTextureToTexture=function(w,z,K=null,Y=null,$=0,bt=0){let Pt,Mt,It,Ot,Zt,ne,Lt,xe,De,Ee=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(K!==null)Pt=K.max.x-K.min.x,Mt=K.max.y-K.min.y,It=K.isBox3?K.max.z-K.min.z:1,Ot=K.min.x,Zt=K.min.y,ne=K.isBox3?K.min.z:0;else{let Ie=Math.pow(2,-$);Pt=Math.floor(Ee.width*Ie),Mt=Math.floor(Ee.height*Ie),w.isDataArrayTexture?It=Ee.depth:w.isData3DTexture?It=Math.floor(Ee.depth*Ie):It=1,Ot=0,Zt=0,ne=0}Y!==null?(Lt=Y.x,xe=Y.y,De=Y.z):(Lt=0,xe=0,De=0);let me=gt.convert(z.format),ze=gt.convert(z.type),Ct;z.isData3DTexture?(nt.setTexture3D(z,0),Ct=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(nt.setTexture2DArray(z,0),Ct=O.TEXTURE_2D_ARRAY):(nt.setTexture2D(z,0),Ct=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Xe=y.getParameter(O.UNPACK_ROW_LENGTH),ae=y.getParameter(O.UNPACK_IMAGE_HEIGHT),on=y.getParameter(O.UNPACK_SKIP_PIXELS),pn=y.getParameter(O.UNPACK_SKIP_ROWS),mn=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),y.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ne);let Mi=w.isDataArrayTexture||w.isData3DTexture,Gt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let Ie=q.get(w),Nn=q.get(z),Se=q.get(Ie.__renderTarget),fn=q.get(Nn.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,Se.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let Si=0;Si<It;Si++)Mi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(w).__webglTexture,$,ne+Si),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(z).__webglTexture,bt,De+Si)),O.blitFramebuffer(Ot,Zt,Pt,Mt,Lt,xe,Pt,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||q.has(w)){let Ie=q.get(w),Nn=q.get(z);y.bindFramebuffer(O.READ_FRAMEBUFFER,F),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,W);for(let Se=0;Se<It;Se++)Mi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,$,ne+Se):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,$),Gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nn.__webglTexture,bt,De+Se):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nn.__webglTexture,bt),$!==0?O.blitFramebuffer(Ot,Zt,Pt,Mt,Lt,xe,Pt,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):Gt?O.copyTexSubImage3D(Ct,bt,Lt,xe,De+Se,Ot,Zt,Pt,Mt):O.copyTexSubImage2D(Ct,bt,Lt,xe,Ot,Zt,Pt,Mt);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Gt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ct,bt,Lt,xe,De,Pt,Mt,It,me,ze,Ee.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,bt,Lt,xe,De,Pt,Mt,It,me,Ee.data):O.texSubImage3D(Ct,bt,Lt,xe,De,Pt,Mt,It,me,ze,Ee):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,bt,Lt,xe,Pt,Mt,me,ze,Ee.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,bt,Lt,xe,Ee.width,Ee.height,me,Ee.data):O.texSubImage2D(O.TEXTURE_2D,bt,Lt,xe,Pt,Mt,me,ze,Ee);y.pixelStorei(O.UNPACK_ROW_LENGTH,Xe),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae),y.pixelStorei(O.UNPACK_SKIP_PIXELS,on),y.pixelStorei(O.UNPACK_SKIP_ROWS,pn),y.pixelStorei(O.UNPACK_SKIP_IMAGES,mn),bt===0&&z.generateMipmaps&&O.generateMipmap(Ct),y.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?nt.setTextureCube(w,0):w.isData3DTexture?nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?nt.setTexture2DArray(w,0):nt.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){tt=0,X=0,ct=null,y.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var $x=["top","side","bottom"],Zx={slab_bottom:1,slab_top:1,stairs:1},Yu=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function Jx(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Yu[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function $u(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let T of t){if(!T||typeof T.id!="string")throw new Error("block without id");if(!Number.isInteger(T.n)||T.n<0||T.n>255)throw new Error("bad n for "+T.id);if(i[T.n])throw new Error("duplicate n "+T.n+" ("+T.id+")");if(s[T.id])throw new Error("duplicate id "+T.id);let R=T.colors||{},I=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},T);if(I.placeable=I.n!==0&&!I.liquid,I.colors={top:R.top||"#888888",side:R.side||R.top||"#888888",bottom:R.bottom||R.top||"#888888"},I.opaque=I.solid&&!I.transparent&&!I.cutout&&!Zx[I.shape],I.tile={},I.tileOf&&s[I.tileOf])I.tile=Object.assign({},s[I.tileOf].tile);else if(I.n!==0){let H={};for(let k of $x){let F=I.colors[k]+"|"+(I.pattern==="grass"||I.pattern==="log"||I.pattern==="lamp"||I.pattern==="table"||I.pattern==="stele"||I.pattern==="torch"||I.pattern==="bed"||I.pattern==="snow"||I.pattern==="lantern"||I.pattern==="bookshelf"||I.pattern==="hay"||I.pattern==="barrel"||I.pattern==="chest"||I.pattern==="farmland"?k:"");H[F]===void 0&&(H[F]=r.length,r.push({block:I.id,face:k,color:I.colors[k],pattern:I.pattern,accent:I.accent||null,top:I.colors.top})),I.tile[k]=H[F]}}i[I.n]=I,s[I.id]=I}if(!s.air)throw new Error("registry needs air");for(let T of e){if(s[T.id])throw new Error("duplicate id "+T.id);s[T.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},T)}for(let T in s){let R=s[T].drops;if(R&&R!=="self"&&!s[R])throw new Error(T+" drops unknown "+R)}let o=T=>(typeof T=="number"?i[T]:s[T])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),d=new Uint8Array(256),h=new Uint8Array(256),f=new Uint8Array(256),g={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},x=new Uint8Array(256),S=new Array(256).fill(null),m=new Uint8Array(256),p=new Uint8Array(256),C=new Uint8Array(256),U=new Uint8Array(256),v=new Uint8Array(256),A=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((T,R)=>{T&&(m[R]=T.solid?1:0,p[R]=T.opaque?1:0,C[R]=T.transparent?1:0,U[R]=T.emissive?1:0,v[R]=T.liquid?1:0,a[R]=T.light!=null?T.light:T.emissive?15:0,l[R]=T.liquid?2:0,c[R]=g[T.shape]||0,d[R]=T.cutout?1:0,h[R]=T.climbable?1:0,f[R]=T.plant?1:0,x[R]=T.facing|0,T.solid&&(S[R]=Jx(T)),R&&(A[R]=T.tile.top,E[R]=T.tile.side,D[R]=T.tile.bottom))});let M=(n&&n.blueprints||[]).map(T=>Object.assign({kind:"blueprint"},T));return{blocks:i.filter(Boolean),items:e.map(T=>s[T.id]),blueprints:M,tiles:r,get:o,toolOf:T=>{let R=T&&s[T];return R&&R.kind==="item"&&R.tool&&typeof R.tool=="object"?R.tool:null},num:T=>{let R=s[T];if(!R||R.kind!=="block")throw new Error("no block "+T);return R.n},name:T=>{let R=o(T);return R?R.name_zh:String(T)},maxStack:T=>{let R=s[T];return R?R.maxStack:64},dropOf:T=>{let R=i[T];return!R||!R.drops?null:R.drops==="self"?R.id:R.drops},breakTime:T=>{let R=i[T];return!R||R.hardness<0?1/0:.25+R.hardness*.55},flat:{solid:m,opaque:p,trans:C,emit:U,liquid:v,tileTop:A,tileSide:E,tileBottom:D,lightEmit:a,attn:l,shape:c,cutout:d,climb:h,plant:f,facing:x,boxes:S}}}var gi=n=>Math.floor(n/16);var Hi=(n,t,e)=>(t*16+e)*16+n;var rs=(n,t)=>n+","+t;function Nc(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=gi(n),s=gi(e);return{cx:i,cz:s,i:Hi(n-i*16,t,e-s*16)}}function Zu(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Uc(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,d=t,h=t+s,f=e-a,g=e+a,x=Math.floor(l),S=Math.floor(c-1e-6),m=Math.floor(d),p=Math.floor(h-1e-6),C=Math.floor(f),U=Math.floor(g-1e-6),v=!1;for(let A=m;A<=p;A++)for(let E=C;E<=U;E++)for(let D=x;D<=S;D++){let M=r(D,A,E);if(!M)continue;let T=M===!0?Kx:M;for(let R of T){let I=D+R[0],H=A+R[1],k=E+R[2],F=D+R[3],W=A+R[4],tt=E+R[5];if(!(F<=l+1e-6||I>=c-1e-6||W<=d+1e-6||H>=h-1e-6||tt<=f+1e-6||k>=g-1e-6)){if(!o)return!0;v=!0,o.push([I,H,k,F,W,tt])}}}return v}var Kx=[[0,0,0,1,1,1]],Ya=(n,t,e,i,s,r)=>Uc(n,t,e,i,s,r,null);function Ju(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,d=0,h=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,f=Math.max(1,Math.ceil(h/.3)),g=e/f,x=[];for(let S=0;S<f;S++){let m=t.y*g;m&&(x.length=0,Uc(n.x,n.y+m,n.z,r,o,i,x)?(m<0?(n.y=Math.max(...x.map(p=>p[4])),c=!0):n.y=Math.min(...x.map(p=>p[1]))-o,t.y=0):n.y+=m);for(let p of["x","z"]){let C=t[p]*g;if(!C)continue;let U={x:n.x,y:n.y,z:n.z};if(U[p]+=C,x.length=0,!Uc(U.x,U.y,U.z,r,o,i,x)){n[p]=U[p];continue}if(a&&(c||s.grounded)){let A=Math.max(...x.map(E=>E[4]));if(A-n.y>0&&A-n.y<=1.01&&!Ya(U.x,A,U.z,r,o,i)&&!Ya(n.x,A,n.z,r,o,i)){d+=A-n.y,n.y=A,n[p]=U[p];continue}}let v=p==="x"?0:2;n[p]=C>0?Math.min(...x.map(A=>A[v]))-l-1e-4:Math.max(...x.map(A=>A[v+3]))+l+1e-4,Ya(n.x,n.y,n.z,r,o,i)&&(n[p]=U[p]-C),t[p]=0}}return!c&&t.y<=0&&Ya(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:d}}function jx(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let d=[e+c[0],i+c[1],s+c[2]],h=[e+c[3],i+c[4],s+c[5]],f=0,g=1/0,x=-1,S=!0;for(let m=0;m<3&&S;m++){if(Math.abs(a[m])<1e-12){(o[m]<d[m]||o[m]>h[m])&&(S=!1);continue}let p=(d[m]-o[m])/a[m],C=(h[m]-o[m])/a[m];p>C&&([p,C]=[C,p]),p>f&&(f=p,x=m),C<g&&(g=C),f>g&&(S=!1)}if(S&&(!l||f<l.t)){let m=[0,0,0];x>=0&&(m[x]=-Math.sign(a[x])),l={t:f,face:x>=0?m:null}}}return l}function Fc(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),d=Math.sign(t.y),h=Math.sign(t.z),f=c?Math.abs(1/t.x):1/0,g=d?Math.abs(1/t.y):1/0,x=h?Math.abs(1/t.z):1/0,S=c?(c>0?o+1-n.x:n.x-o)*f:1/0,m=d?(d>0?a+1-n.y:n.y-a)*g:1/0,p=h?(h>0?l+1-n.z:n.z-l)*x:1/0,C=[0,0,0],U=0;for(;U<=e;){let v=i(o,a,l);if(v&&s(v)){let A=r&&r(v);if(!A)return{x:o,y:a,z:l,n:v,face:C,dist:U};let E=jx(n,t,o,a,l,A);if(E&&E.t<=e)return{x:o,y:a,z:l,n:v,face:E.face||C,dist:E.t}}S<m&&S<p?(o+=c,U=S,S+=f,C=[-c,0,0]):m<p?(a+=d,U=m,m+=g,C=[0,-d,0]):(l+=h,U=p,p+=x,C=[0,0,-h])}return null}function $a(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,d=1/0;for(let h=0;h<3;h++){if(Math.abs(l[h])<1e-9){if(a[h]<r[h]||a[h]>o[h])return null;continue}let f=(r[h]-a[h])/l[h],g=(o[h]-a[h])/l[h];if(f>g&&([f,g]=[g,f]),c=Math.max(c,f),d=Math.min(d,g),c>d)return null}return c}function Ku(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}function e_(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Oc=(n,t)=>n?t?2:1:0;function Vs(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Bc(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}var kc=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Za(n){let t=e_(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function N(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Le=n=>document.querySelector(n);function zc(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function Qu(n,t,e,i,s,r){if(!t||!t.id)return null;let o=zc(t,e,i,s,r),a=n.get("ke_log"),l=Array.isArray(a)?a:[];if(l.push(o),n.set("ke_log",l),t.local)return o;if(e){let h=n.get("ke_correct"),f=Array.isArray(h)?h:[];f.includes(t.id)||(f.push(t.id),n.set("ke_correct",f))}let c=n.get("ke_mistakes")||{},d=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?d&&(d.c++,d.u=s,d.c>=3&&(c[t.id]={d:1,w:d.w,t:d.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||d)&&n.set("ke_mistakes",c),o}function tf(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],l=[];for(let g of n)e[g]&&!e[g].d?o.push(g):t.has(g)||i.has(g)?l.push(g):a.push(g);let c=g=>{for(let x=g.length-1;x>0;x--){let S=Math.floor(r()*(x+1));[g[x],g[S]]=[g[S],g[x]]}return g};[o,a,l].forEach(c);let d=[],h=(g,x)=>{for(;x-- >0&&g.length;)d.push(g.pop())},f=Math.round(s*.7);return h(o,Math.ceil(f/2)),h(a,f-d.length),h(o,f-d.length),h(l,s-d.length),h(a,s-d.length),h(o,s-d.length),d}var n_="../../",i_=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],sf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Ja=null,rf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),ef=null;function s_(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{Qu(rf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(ef)try{ef(t,n)}catch{}}function r_(n,t,e){try{let i=rf(),s=i.get("ke_learned")||{},r=new Set;for(let c in s)s[c]&&s[c].at&&(n.sets&&n.sets[c]||[]).forEach(d=>r.add(d));let o=n.list(t).filter(c=>c.type!=="speak").map(c=>c.id),a=tf(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),l=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(l.length)return l}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function o_(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function a_(){return Ja||(Ja=(async()=>{for(let t of i_)await o_(n_+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Ja=null,n})),Ja}var nf=new Set(sf);async function of(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:l=null}){n.innerHTML="",n.hidden=!1;let c=N("div",{class:"panel quiz"});n.append(c),c.append(N("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let d;try{d=await a_()}catch{c.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let h=window.KE,f=l,g=i?new Set(i.filter(v=>nf.has(v))):nf;if(!f)for(let v of t){let A=d.byId[v];if(A&&g.has(A.type)){f=d.get(v);break}}let x=!!f&&!l;f||(f=r_(d,{modules:s||["words","phrases","grammar","patterns"],types:i?[...g]:sf,lv:1},1)[0]||d.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let S=h.isTyped(f);n._q=f,c.innerHTML="";let m=N("div",{class:"fb"}),p=N("div",{class:"q-body"});c.append(N("div",{class:"p-head"},N("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),N("div",{class:"q-type"},l?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(x?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":h.TYPES[f.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),N("div",{class:"q-prompt"+(f.en?" en":"")},f.prompt),f.sub?N("div",{class:"q-sub"},f.sub):null,p,m);let C=!1,U=(v,A)=>{C||(C=!0,s_(f,v,A,a),m.className="fb "+(v?"ok":"bad"),m.append(N("div",{},v?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:N("b",{class:"en"},f.answer)),!v&&f.why?N("div",{class:"why"},f.why):null,N("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(v,S,f)}},"\u7E7C\u7E8C")))};if(f.input==="type"){let v=N("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),A=()=>{C||!v.value.trim()||U(d.check(f,v.value).ok,v.value)};v.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&A()}),p.append(N("div",{class:"typerow"},v,N("button",{class:"btn",onclick:A},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=N("div",{class:"opts"});(f.options||[]).forEach(A=>v.append(N("button",{class:"opt"+(/[a-z]/i.test(A)?" en":""),onclick:E=>{if(C)return;let D=d.check(f,A).ok;E.currentTarget.classList.add(D?"ok":"bad"),U(D,A)}},A))),p.append(v)}}function l_(){return new Map}function af(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Vc(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function c_(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function lf(n){let t=l_();for(let e in n||{})t.set(e,c_(n[e]));return t}var Ka=16;var $S=18;var Or=32;function h_(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ke=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],dt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function u_(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Fe(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function xi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}Fe(n,o)}var f_=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function d_(n,t){let e=ke(t.color),i=h_(u_(t.block+t.face)),s=Or;if(f_.has(t.pattern)){p_(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=dt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?ke(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=dt(e,1.12);for(let h=0;h<4;h++)xi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=dt(e,.96);for(let h=0;h<4;h++)xi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let h=ke(t.top);n.fillStyle=dt(h);let f=[[0,0],[s,0]];for(let g=s;g>=0;g-=4)f.push([g,8+Math.round(i()*5)]);Fe(n,f)}if(o==="stone"||o==="bedrock")for(let h=0;h<5;h++)n.fillStyle=dt(e,i()<.5?.9:1.08),xi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let h=0;h<4;h++)n.fillStyle=dt(e,.92),xi(n,i,i()*s,i()*s,5);n.fillStyle=dt(a);for(let h=0;h<5;h++)xi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let h=0;h<26;h++)n.fillStyle=dt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=dt(e,.82),n.fillRect(h,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=dt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=dt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let h=0;h<9;h++)n.fillStyle=dt(e,i()<.5?.78:1.15),xi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=dt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=dt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=dt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=dt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=dt([185,182,174]),Fe(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=dt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Fe(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=dt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(o==="gold"&&(n.fillStyle=dt(e,1.15),Fe(n,[[0,0],[s,0],[0,s]]),n.fillStyle=dt(e,.9),Fe(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=dt(ke("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=dt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=dt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=dt(ke("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=dt(ke("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=dt(a),n.fillRect(14,0,4,4)):(n.fillStyle=dt(ke(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=dt(a),n.fillRect(0,0,s,10),n.fillStyle=dt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=dt(ke("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=dt(a),n.fillRect(0,0,9,14))),o==="wool")for(let h=0;h<7;h++)n.fillStyle=dt(e,i()<.5?.94:1.04),xi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=dt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=dt(a,1.3),Fe(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=dt(ke("#EFEBDD"),1,.8),Fe(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=dt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=dt(e,.9),n.fillRect(0,h,s,2);if(o==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=dt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=dt(ke("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=dt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=dt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=dt(e,1.25);for(let h of[9,24])n.fillRect(0,h,s,3)}else n.fillStyle=dt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Fe(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Fe(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=dt(e,1.1),Fe(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=dt(e,.92),Fe(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=dt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let f=h/8%2?0:8;for(let g=f;g<s;g+=16)n.fillRect(g,h,1,8)}}if(o==="mossy"){n.fillStyle=dt(a);for(let h=0;h<6;h++)xi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=dt(e,.6),Fe(n,[[4,2],[12,14],[10,15],[3,4]]),Fe(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=dt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=dt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=dt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=dt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=dt(e,1.08),Fe(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=dt(ke("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let f=h/8%2?0:8;for(let g=f;g<s;g+=16)n.fillRect(g,h,2,6)}}if(o==="checker"&&(n.fillStyle=dt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let f of[3,18]){let g=3;for(;g<s-4;){let x=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(g,f+Math.floor(i()*3),x,11),g+=x+1}}n.fillStyle=dt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=dt(e,.8),n.fillRect(0,h,s,1);if(o==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=dt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=dt(ke("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=dt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=dt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=dt(ke("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=dt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=dt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=dt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Fe(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let h=7;h<s;h+=8)n.fillStyle=dt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=dt(ke("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=dt(ke("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=dt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=dt(e),n.fillRect(0,0,s,s),n.fillStyle=dt(ke("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let h=7;h<s;h+=8)n.fillStyle=dt(e,.85),n.fillRect(0,h,s,1);t.face==="side"&&(n.fillStyle=dt(a),n.fillRect(0,11,s,3),n.fillStyle=dt(ke("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let h=3;h<s;h+=6)n.fillStyle=dt(e,.72),n.fillRect(0,h,s,2);if(o==="furnace"){for(let h=0;h<4;h++)n.fillStyle=dt(e,i()<.5?.9:1.08),xi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=dt(a),n.fillRect(8,15,s-16,11),n.fillStyle=dt(ke("#E0352B"),1,.85),Fe(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=dt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=dt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=dt(a),Fe(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let h=0;h<c.length;h+=4){let f=1+(i()-.5)*.09;c[h]=Math.min(255,c[h]*f),c[h+1]=Math.min(255,c[h+1]*f),c[h+2]=Math.min(255,c[h+2]*f)}n.putImageData(l,0,0);let d=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=d,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function hf(n){let t=document.createElement("canvas");t.width=t.height=Or*Ka;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Or;let a=o.getContext("2d",{willReadFrequently:!0});d_(a,s),e.drawImage(o,r%Ka*Or,Math.floor(r/Ka)*Or),i[r]=o}),{canvas:t,tileCanvas:i}}function p_(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?ke(t.accent):e,a=(l,c,d)=>{n.fillStyle=d,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,dt(e)),n.fillStyle=dt(e,1.1),Fe(n,[[16,26],[9,20],[15,22]]),Fe(n,[[17,24],[24,18],[18,21]]),n.fillStyle=dt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;Fe(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=dt(ke("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),d=14+Math.floor(i()*14);n.fillStyle=dt(e,i()<.5?.9:1.1),Fe(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-d]])}else if(r==="deadbush")n.strokeStyle=dt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=dt(e),n.fillRect(14,18,4,14),n.fillStyle=dt(o),Fe(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=dt(ke("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=dt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=dt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let d=0;d<5;d++){let h=5+d*5;n.fillStyle=dt(e),n.fillRect(h,s-c,2,c),l===3&&(n.fillStyle=dt(o),Fe(n,[[h-2,s-c+9],[h+1,s-c-1],[h+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let d=dt(ke("#8C6640")),h=dt(e),f=s*.33,g=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=d;for(let x=2;x<s;x+=6)n.fillRect(4,x,s-8,3);n.fillStyle=h,n.fillRect(f-1.5,0,3,s),n.fillRect(g-1.5,0,3,s),t.accent&&(n.fillStyle=dt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=d,n.lineWidth=3;for(let x=0;x<5;x++){let S=Math.PI/2+(x+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(S)*(s-g-4),Math.sin(S)*(s-g-4)),n.lineTo(s+Math.cos(S)*(s-f+4),Math.sin(S)*(s-f+4)),n.stroke()}n.strokeStyle=h;for(let x of[s-f,s-g])n.beginPath(),n.arc(s,0,x,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=dt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var uf=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,ff=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function m_(n,t){let e=gi(n),i=gi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,d=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,d)<=14&&s.push([e+o,i+r])}return s}function pf(n){let t=new Cn(n);t.magFilter=We,t.minFilter=We,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new Z(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new nn({uniforms:e,vertexShader:uf,fragmentShader:ff}),s=new nn({uniforms:e,vertexShader:uf,fragmentShader:ff,transparent:!0,depthWrite:!1,side:Pn});return{opaque:i,trans:s,uniforms:e,tex:t}}function df(n){let t=new yn;return t.setAttribute("position",new Ye(n.pos,3)),t.setAttribute("uv",new Ye(n.uv,2)),t.setAttribute("light",new Ye(n.light,1)),t.setAttribute("lt",new Ye(n.lt,2,!0)),t.setIndex(new Ye(n.index,1)),t.computeBoundingSphere(),t}var ja=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=rs(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Ve(df(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ve(df(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=gi(t),s=gi(e),r=Zu(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=rs(l.cx,l.cz);if(this.chunks.has(c))continue;let d={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,d),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:d.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let d=c.cx-i,h=c.cz-s;if(d*d+h*h>o*o){for(let f of["o","t"])c[f]&&(this.scene.remove(c[f]),c[f].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,d]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(d-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(rs(gi(t),gi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Nc(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(rs(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Nc(t,e,i);if(!r)return!1;let o=rs(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,af(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[d,h]of m_(l,c))this.dirtyMesh.add(rs(d,h));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var ni={};function Gs(n){return ni[n]||(ni[n]=new Vn({color:n,transparent:!0}),ni[n].userData.base=new Kt(n)),ni[n]}var Br=null;function g_(){if(Br)return Br;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Br=new Cn(n),Br.colorSpace=He,Br}function mf(n,t){let e=new Tn,i=n.colors,[s,r]=n.size,o=(l,c,d,h,f,g,x,S)=>{let m=new Ve(new Rn(l,c,d),S||Gs(h));return m.position.set(f,g,x),e.add(m),m},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let d=o(.2,.6,.22,i.leg,c,.6,0);d.geometry.translate(0,-.6/2,0),a.push(d)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);ni.__face||(ni.__face=new Vn({map:g_(),transparent:!0}),ni.__face.userData.base=new Kt("#ffffff"));let c=[Gs(i.head),Gs(i.head),Gs(i.head),Gs(i.head),Gs(i.head),ni.__face],d=new Ve(new Rn(s*.9,s*.8,s*.8),c);d.position.set(0,r*.72+s*.4,0),e.add(d),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=r<1&&n.id!=="chicken",c=n.id==="chicken"?.25:l?r*.35:.45,d=r-c-(n.id==="chicken"?.15:.25);o(s,d,n.id==="chicken"?s:s*1.35,i.body,0,c+d/2,0),i.patch&&o(s*.5,d*.55,.02+s*1.36,i.patch,s*.12,c+d*.55,0);let h=n.id==="chicken"?.3:l?.32:.45,f=o(h,h,h,i.head,0,c+d+h*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let m of[-h*.3,h*.3])o(h*.26,h*.3,h*.16,i.ear,m,f.position.y+h*.6,f.position.z);if(i.eye)for(let m of[-h*.24,h*.24])o(h*.24,h*.26,.02,i.eye,m,f.position.y+h*.05,f.position.z-h/2-.01);if(n.pet){let m=o(.08,.08,.32,i.body,0,c+d*.85,s*.68+.12);m.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,f.position.y+h/2+.05,f.position.z),o(.12,.06,.12,"#D9A63A",0,f.position.y-.02,f.position.z-h/2-.05));let g=n.id==="chicken"?.06:.18,x=n.id==="chicken"?0:s*.45,S=s*.3;for(let[m,p]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-S,-x],[S,-x],[-S,x],[S,x]]){let C=o(g,c,g,i.leg,m,c/2,p);C.geometry.translate(0,-c/2,0),C.position.y=c,a.push(C)}}return e.userData.legs=a,e}function gf(n){for(let t in ni){let e=ni[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function xf(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var je=null,Hs=null,Gc=null;var ii=()=>window.HIAudio||null,yf=()=>ii()?ii().get():{muted:!1,music:.35,sfx:.7};function Qa(){try{ii()&&ii().unlock()}catch{}if(!je){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;je=new n,Hs=je.createGain(),Hs.connect(je.destination),Gc=je.createBuffer(1,je.sampleRate,je.sampleRate);let t=Gc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}je.state==="suspended"&&je.resume(),Hc()}function Hc(){if(Hs){let n=yf();Hs.gain.setTargetAtTime(n.muted?0:n.sfx,je.currentTime,.03)}}var tl=()=>yf().muted;function vf(){return ii()&&ii().toggle(),Hc(),tl()}function Wc(n){ii()&&ii().set(n),Hc()}function Mf(n){try{ii()&&ii().scene(n)}catch{}}function Sf(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Ln(n,t,e,i,s,r,o){let a=je.createOscillator(),l=je.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),Sf(l,e,i,s,r),a.connect(l),l.connect(Hs),a.start(e),a.stop(e+i+r+.05)}function Wi(n,t,e,i,s,r=1){let o=je.createBufferSource(),a=je.createBiquadFilter(),l=je.createGain();o.buffer=Gc,a.type=n,a.frequency.value=t,a.Q.value=r,Sf(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Hs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var _f={wood:(n,t)=>{Ln("sine",190*t,n,.003,.16,.12,95*t),Wi("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Wi("highpass",1800*t,n,.1,.06),Ln("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Wi("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Ln("sine",1900*t,n,.002,.08,.25,1500*t),Wi("highpass",4200,n,.06,.12)},soft:(n,t)=>{Wi("bandpass",850*t,n,.09,.1,.8)}};function rn(n,t="soft"){if(!je||tl())return;let e=je.currentTime+.005,i=_f[t]||_f.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Wi(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Ln("sine",880,e,.002,.07,.08,1320);break;case"chest":Ln("triangle",160,e,.02,.07,.3,120),Ln("sine",330,e+.12,.005,.05,.15);break;case"door":Ln("sawtooth",120,e,.03,.04,.3,160),Wi("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Wi("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Ln("triangle",659,e,.005,.08,.15),Ln("triangle",988,e+.1,.005,.08,.25);break;case"coin":Ln("sine",1319,e,.002,.08,.08),Ln("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Ln("triangle",300,e,.005,.1,.18,200);break;default:break}}var Xi=(n,t,e,i=0)=>t>=n[0]-i&&t<=n[2]+i&&e>=n[1]-i&&e<=n[3]+i,bf=(n,t)=>{let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296};function y_(n,t,e,i){let s=new Map,r=t.GY,o=n.x+n.w-1,a=n.z+n.d-1,l=(x,S,m,p)=>s.set(x+","+S+","+m,p),c=i?"s2n":n.door,d=i?1:n.doorW||2,h=i?"n":c,f=h==="n"||h==="s"?n.x+(n.w>>1):n.z+(n.d>>1),g=(x,S)=>{let m=h==="n"||h==="s"?x:S,p=f-(d>>1);return m<p||m>=p+d?!1:h==="n"&&S===n.z||h==="s"&&S===a||h==="w"&&x===n.x||h==="e"&&x===o};for(let x=n.x;x<=o;x++)for(let S=n.z;S<=a;S++){let m=x===n.x||x===o||S===n.z||S===a,p=(x===n.x||x===o)&&(S===n.z||S===a);l(x,r,S,e(n.floor||"planks")),l(x,r+n.h+1,S,e(n.roof));for(let C=r+1;C<=r+n.h;C++){if(!m){l(x,C,S,0);continue}if(g(x,S)&&C<=r+2){l(x,C,S,i?e("door"):0);continue}let U=x===n.x||x===o?S-n.z:x-n.x,v=!p&&C===r+2&&U%3===1&&!g((x===n.x||x===o,x),S)&&n.h>=4;l(x,C,S,e(v?"glass":n.wall))}}for(let[x,S,m,p]of n.props||[])l(n.x+S,r+1+m,n.z+p,e(x));return s}function wf(n,t){let e=v=>n.num(v),i=t.GY,s=t.sidewalk,r=t.bound,o=t.homes.map(v=>Object.assign({floor:"planks",door:"n",isHome:!0},v)),a=t.buildings.concat(o),l=a.map(v=>({b:v,arr:[...y_(v,t,e,!!v.isHome)].map(([A,E])=>A.split(",").map(Number).concat(E))})),c=new Set;for(let v of a){let A=v.isHome?"n":v.door,E=v.x+v.w-1,D=v.z+v.d-1,M=v.x+(v.w>>1),T=v.z+(v.d>>1),R={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]}[A],I=A==="w"?v.x-1:A==="e"?E+1:M,H=A==="n"?v.z-1:A==="s"?D+1:T;for(let k=0;k<14&&!t.roads.some(F=>Xi(F,I,H,s));k++){for(let F of[-1,0,1])c.add((R[0]?I:I+F)+","+(R[0]?H+F:H));I+=R[0],H+=R[1]}}let d=t.park,h=d.pond,f=(v,A)=>v>=d.x&&v<d.x+d.w&&A>=d.z&&A<d.z+d.d,g=new Set;for(let v of t.roads){let A=v[2]-v[0]>v[3]-v[1];for(let E=A?v[0]:v[1];E<=(A?v[2]:v[3]);E+=12)for(let D of[-1,1]){let M=A?E:D<0?v[0]-s:v[2]+s,T=A?D<0?v[1]-s:v[3]+s:E;t.roads.some(R=>R!==v&&Xi(R,M,T,s+2))||[-1,0,1].some(R=>[-1,0,1].some(I=>c.has(M+R+","+(T+I))))||g.add(M+","+T)}}let x=(v,A)=>{for(let E of t.roads)if(Xi(E,v,A)){let D=E[2]-E[0]>E[3]-E[1];return t.roads.find(R=>R!==E&&Xi(R,v,A,5)&&!Xi(R,v,A))?(D?v:A)&1?e("crossing"):e("road"):t.roads.some(R=>R!==E&&Xi(R,v,A))?e("road"):(D?A===Math.round((E[1]+E[3])/2):v===Math.round((E[0]+E[2])/2))&&((D?v:A)%4+4)%4<2?e("road_line"):e("road")}return t.roads.some(E=>Xi(E,v,A,s))||c.has(v+","+A)?e("sidewalk"):f(v,A)&&v>=h[0]&&v<=h[2]&&A>=h[1]&&A<=h[3]?e("water"):e("grass")},S=new Set(d.trees.map(([v,A])=>v+","+A));for(let v=-r+2;v<=r-2;v+=6)for(let[A,E]of[[v,-r+1],[v,r-1],[-r+1,v],[r-1,v]])t.roads.some(D=>Xi(D,A,E,s+1))||S.add(A+","+E);let m=t.secrets||{rooms:[]},p=(m.board?m.board.ops:[]).concat(...m.rooms.map(v=>v.ops));function C(v,A){let E=new Uint8Array(16384),D=v*16,M=A*16,T=(R,I,H,k)=>{I>0&&I<64&&(E[Hi(R,I,H)]=k)};for(let R=0;R<16;R++)for(let I=0;I<16;I++){let H=D+I,k=M+R;E[Hi(I,0,R)]=e("bedrock");for(let W=1;W<i-3;W++)E[Hi(I,W,R)]=e("stone");for(let W=i-3;W<i;W++)E[Hi(I,W,R)]=e("dirt");let F=x(H,k);if(E[Hi(I,i,R)]=F,F===e("water")){E[Hi(I,i-1,R)]=e("sand");continue}if(Math.abs(H)>r||Math.abs(k)>r){T(I,i+1,R,e("hedge")),T(I,i+2,R,e("hedge"));continue}if(g.has(H+","+k)){for(let W=i+1;W<=i+3;W++)T(I,W,R,e("lamp_pole"));T(I,i+4,R,e("lantern"));continue}if(S.has(H+","+k)){for(let W=i+1;W<=i+3;W++)T(I,W,R,e("log"));continue}F===e("grass")&&f(H,k)&&bf(H,k)<.06&&T(I,i+1,R,e(["flower_rose","flower_dandelion","flower_cornflower","tallgrass"][Math.floor(bf(k,H)*4)]))}for(let R of S){let[I,H]=R.split(",").map(Number);for(let k=-2;k<=2;k++)for(let F=-2;F<=2;F++)for(let W=3;W<=5;W++){if(Math.abs(k)+Math.abs(F)>(W===5?1:3))continue;let tt=I+k-D,X=H+F-M;tt<0||tt>=16||X<0||X>=16||k===0&&F===0&&W===3||T(tt,i+W+1,X,e("leaves"))}}for(let{b:R,arr:I}of l)if(!(R.x>D+16-1||R.x+R.w-1<D||R.z>M+16-1||R.z+R.d-1<M))for(let[H,k,F,W]of I){let tt=H-D,X=F-M;tt>=0&&tt<16&&X>=0&&X<16&&T(tt,k,X,W)}for(let[R,I,H,k,F,W=H,tt=k,X=F]of p){if(W<D||H>D+16-1||X<M||F>M+16-1)continue;let ct=I==="air"?0:e(I);for(let j=Math.max(H,D);j<=Math.min(W,D+16-1);j++)for(let ot=Math.max(F,M);ot<=Math.min(X,M+16-1);ot++)for(let at=k;at<=tt;at++){let zt=j===H||j===W||at===k||at===tt||ot===F||ot===X;T(j-D,at,ot-M,R==="hollow"&&!zt?0:ct)}}for(let[R,I,H]of d.benches){let k=R-D,F=I-M;k>=0&&k<16&&F>=0&&F<16&&T(k,i+1,F,e("stairs_planks"+["","_e","_s","_w"][H]))}for(let[R,I,H,k]of t.cars)for(let F=0;F<4;F++)for(let W=0;W<2;W++){let tt=R+(k==="x"?F:W),X=I+(k==="x"?W:F),ct=tt-D,j=X-M;ct<0||ct>=16||j<0||j>=16||(T(ct,i+1,j,e(H)),T(ct,i+2,j,e(F===1||F===2?"glass":H)))}return E}let U={x:t.spawn[0],y:i+1,z:t.spawn[1],stele:{x:0,y:i+1,z:0}};return{genChunk:C,findSpawn:()=>U,height:()=>i,baseHeight:()=>i,biomeOf:()=>"town",villages:{around:()=>[]},homes:o,buildings:t.buildings,GY:i}}function Af(n,t,e,i,s){return n?t>n.x&&t<n.x+n.w-1&&i>n.z&&i<n.z+n.d-1&&e>=s+1&&e<=s+n.h:!1}function Tf(n,t,e){let i=[];for(let s=n.x;s<n.x+n.w;s++)for(let r=n.z;r<n.z+n.d;r++)for(let o=t+1;o<=t+n.h;o++)(s===n.x||s===n.x+n.w-1||r===n.z||r===n.z+n.d-1)&&e(s,o,r)&&i.push([s,o,r]);return i}var v_=18;function kr(n,t,e=1){let i=t+n.h+1;return{slab:i,roof:e===2?i+n.h+1:i,ladder:[n.x+1,n.z+n.d-2],h:e===2?n.h*2+1:n.h}}function Ef(n,t,e={}){let i=e.floors===2?2:1,s=e.theme||"none",r=kr(n,t,i),o=[],a=(m,p,C,U)=>o.push([m,p,C,U]),l=n.x+n.w-1,c=n.z+n.d-1,d=n.x+(n.w>>1),h=d,f=n.z+(n.d>>1),g=(m,p)=>s==="castle"?"stone_bricks":s==="tree"?p?"log":"planks":s==="lighthouse"?(m-t)%4<2?"wool":"wool_red":e.wall||n.wall,x={castle:"stone_bricks",tree:"leaves",lighthouse:"wool_red"}[s]||n.roof;for(let m=n.x;m<=l;m++)for(let p=n.z;p<=c;p++){let C=m===n.x||m===l||p===n.z||p===c,U=(m===n.x||m===l)&&(p===n.z||p===c),v=m===n.x||m===l?p-n.z:m-n.x,A=m===r.ladder[0]&&p===r.ladder[1];for(let E=t+1;E<=t+v_;E++)if(E>r.roof)a(m,E,p,"air");else if(E===r.roof)a(m,E,p,x);else if(C){if(m===d&&p===n.z&&E<=t+2)continue;let D=(E-t-1)%(n.h+1);a(m,E,p,!U&&D===1&&v%3===1&&n.h>=4?"glass":g(E,U))}else i===2&&E===r.slab?a(m,E,p,A?"air":"planks"):i===2&&A&&E<r.slab&&a(m,E,p,"ladder")}let S=r.roof;if(s==="tree")for(let m=n.x-1;m<=l+1;m++)for(let p=n.z-1;p<=c+1;p++){let C=Math.max(n.x-m,m-l,0),U=Math.max(n.z-p,p-c,0),v=Math.min(m-n.x,l-m,p-n.z,c-p);C||U||(v>=1&&a(m,S+1,p,"leaves"),v>=2&&a(m,S+2,p,"leaves"))}if(s==="lighthouse")for(let m=h-1;m<=h+1;m++)for(let p=f-1;p<=f+1;p++){let C=m!==h||p!==f;for(let U=S+1;U<=S+3;U++)a(m,U,p,(U-S)%2?"wool":"wool_red");a(m,S+4,p,C?"glass":"lantern"),a(m,S+5,p,"wool_red")}if(s==="castle")for(let m=n.x;m<=l;m++)for(let p=n.z;p<=c;p++){let C=m===n.x||m===l||p===n.z||p===c,U=(m===n.x||m===l)&&(p===n.z||p===c),v=m===n.x||m===l?p-n.z:m-n.x;U?(a(m,S+1,p,"stone_bricks"),a(m,S+2,p,"stone_bricks"),a(m,S+3,p,"stone_bricks")):C&&v%2===0&&a(m,S+1,p,"stone_bricks")}return o}function Cf(n,t=Math.random){let e=i=>{let s=i.slice();for(let r=s.length-1;r>0;r--){let o=Math.floor(t()*(r+1));[s[r],s[o]]=[s[o],s[r]]}return s};return{d:n,turn:0,tries:0,coins:0,right:0,phase:"talk",cards:n.turns.map(i=>e(i.cards)),check:e(n.check.options.map((i,s)=>({zh:i,ok:s===n.check.answer})))}}function Rf(n,t){if(n.phase!=="talk")return{ok:!1};let e=n.cards[n.turn][t];if(!e)return{ok:!1};if(!e.ok)return n.tries++,{ok:!1,card:e};let i=n.tries===0;return i&&(n.coins++,n.right++),n.turn++,n.tries=0,n.turn>=n.d.turns.length&&(n.phase="check"),{ok:!0,first:i,card:e,next:n.phase}}function Pf(n,t){if(n.phase!=="check")return{ok:!1};let e=n.check[t];return n.phase="done",e&&e.ok&&(n.coins+=2),{ok:!!(e&&e.ok),coins:n.coins}}function If(n,t,e=1.2){if(n.wait>0){n.wait-=t,n.v={x:0,y:0,z:0};return}let i=n.route,s=i[n.ri%i.length],r=s[0]+.5-n.p.x,o=s[1]+.5-n.p.z,a=Math.hypot(r,o);if(a<.15){n.ri=(n.ri+1)%i.length,n.wait=1.5;return}let l=Math.min(a,e*t);n.p.x+=r/a*l,n.p.z+=o/a*l,n.yaw=Math.atan2(-r,-o),n.v={x:r/a*e,y:0,z:o/a*e}}var qn={skin:["#F3D6B8","#E7CDA6","#C99A6B","#8C5A3A","#5C3A24"],hair:["short","long","bun","spiky","none"],hairColor:["#151714","#5C3A24","#C9904F","#D9B860","#C2443A"],top:["#2F5A34","#3F6E9A","#C2443A","#D9A63A","#C9709F","#EFEBDD","stripe","star"],bottom:["#26302A","#3F6E9A","#8C6640","#5E6660"],hat:["none","cap","beanie","bow","flower","tophat","crown"],glasses:[!1,!0],acc:["none","scarf","goldbadge","backpack","cape"]},M_=()=>({skin:1,hair:0,hairColor:0,top:0,bottom:0,hat:0,glasses:0,acc:0});function el(n){let t=M_();for(let e in t){let i=n&&Number.isInteger(n[e])?n[e]:t[e];t[e]=Math.max(0,Math.min(qn[e].length-1,i))}return t}var Lf=n=>({skin:qn.skin[n.skin],hair:qn.hair[n.hair],hairColor:qn.hairColor[n.hairColor],top:qn.top[n.top],bottom:qn.bottom[n.bottom],hat:qn.hat[n.hat],glasses:qn.glasses[n.glasses],acc:qn.acc[n.acc]}),Df=(n,t,e,i)=>{let s=n[e+":"+i];return!!s&&!t.has(s)},Nf=n=>Object.fromEntries(n.items.filter(t=>t.slot).map(t=>[t.slot+":"+t.value,t.id]));function Uf(n,t,{coins:e=0,hasHome:i=!1}={}){return n?t.has(n.id)?{ok:!1,reason:"owned"}:n.needHome&&!i?{ok:!1,reason:"home"}:e<n.price?{ok:!1,reason:"coins",short:n.price-e}:{ok:!0}:{ok:!1,reason:"missing"}}var Ff=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var Ws=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},Of=n=>(/^[aeiou]/i.test(n)?"an ":"a ")+n,Xc=n=>n.charAt(0).toUpperCase()+n.slice(1),qc=n=>String(n??"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim(),b_=(n,t)=>!!qc(t)&&[n.a].concat(n.alts||[]).some(e=>qc(e)===qc(t)),Bf=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w_=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function qi(n){return n>=100?"one hundred"+(n%100?" and "+qi(n%100):""):n<20?Bf[n]:w_[Math.floor(n/10)]+(n%10?"-"+Bf[n%10]:"")}function kf(n,t=Math.random){return{job:n,i:0,right:0,answers:[],qs:n.exam.map(e=>e.type==="typed"?{...e}:{...e,cards:Ws(e.opts.map((i,s)=>({t:i,ok:s===e.a})),t)}),done:!1}}function zf(n,t){if(n.done)return null;let e=n.qs[n.i],i=e.type==="typed",s=i?b_(e,t):!!(e.cards[t]&&e.cards[t].ok);return n.answers.push(s),s&&n.right++,n.i++,n.i>=n.qs.length&&(n.done=!0),{ok:s,typed:i,answer:i?e.a:e.opts[e.a],text:i?String(t):(e.cards[t]||{}).t}}var Vf=n=>n.done&&n.right>=8;function Gf(n,t=Math.random){let e=n.task,i=(o,a)=>Ws(o,t).slice(0,a),s=(o,a)=>({t:o,ok:a});if(e.kind==="go"){let o=i(e.calls,1)[0];return{kind:"go",to:o.to,en:o.en,zh:o.zh,pay:e.pay||5,tries:0}}let r;return e.kind==="cases"?r=i(e.cases,3).map(o=>({en:`${e.who}: "${o.says}"`,zh:o.zh,cards:Ws([s(o.a,!0),...o.wrong.map(a=>s(a,!1))],t)})):e.kind==="judge"?r=i(e.items,3).map(o=>{let a=i(e.students,1)[0],l="That's right! Good job.",c=h=>`Almost! Say: "${h}"`,d=o.ok?[s(l,!0),s(c(o.wrong[0]),!1),s(c(o.wrong[1]||o.wrong[0]),!1)]:[s(c(o.fix),!0),s(l,!1),s(c(o.wrong[0]),!1)];return{en:`${a} says: "${o.says}"`,zh:"\u9019\u53E5\u8A71\u5C0D\u4E0D\u5C0D\uFF1F\u9078\u8001\u5E2B\u8981\u8AAA\u7684\u8A71\u3002",cards:Ws(d,t)}}):e.kind==="change"?r=i(e.items,3).map(o=>{let a=o.price<50&&t()<.5?50:100,l=a-o.price,c=[l+10,l-5,l+5,o.price,l-10].filter(h=>h>0&&h!==l&&h<200),d=[...new Set(c)].slice(0,2);return{en:`${Xc(Of(o.en))} is ${qi(o.price)} dollars. The customer gives you ${qi(a)} dollars. How much change do you give?`,zh:`${o.zh} ${o.price} \u5143\uFF0C\u5BA2\u4EBA\u7D66 ${a} \u5143\uFF0C\u8981\u627E\u591A\u5C11\u9322\uFF1F`,cards:Ws([s(Xc(qi(l))+" dollars.",!0),...d.map(h=>s(Xc(qi(h))+" dollars.",!1))],t),change:l}}):e.kind==="order"&&(r=Array.from({length:3},()=>{let[o,a]=i(e.foods,2),l=1+Math.floor(t()*3),c=1+Math.floor(t()*3),d=(x,S)=>S===1?Of(x.sg):qi(S)+" "+x.pl,h=(x,S,m,p)=>x.icon.repeat(S)+" \uFF0B "+m.icon.repeat(p),f=i(e.foods.filter(x=>x!==o&&x!==a),1)[0],g=[l===c?h(o,l%3+1,a,c):h(o,c,a,l),h(o,l,f,c)];return{en:`Customer: "I'd like ${d(o,l)} and ${d(a,c)}, please."`,zh:"\u5BA2\u4EBA\u9EDE\u4E86\u4EC0\u9EBC\uFF1F\u9078\u5C0D\u7684\u9910\u76E4\u3002",cards:Ws([s(h(o,l,a,c),!0),...g.map(x=>s(x,!1))],t)}})),{kind:"quiz",i:0,right:0,qs:r,coins:0}}function Hf(n,t){if(n.kind!=="quiz"||n.i>=n.qs.length)return null;let e=n.qs[n.i],i=e.cards[t];if(!i)return null;let s=!!i.ok;return s&&(n.right++,n.coins+=2),n.i++,{ok:s,answer:e.cards.find(r=>r.ok).t,text:i.t,done:n.i>=n.qs.length}}var Wf=n=>({lic:Object.assign({},n&&n.lic),wear:n&&n.wear||null,done:Object.assign({},n&&n.done)});var T_=[["Can you say this in English?","\u4F60\u6703\u7528\u82F1\u6587\u8AAA\u9019\u53E5\u55CE\uFF1F"],["How do you say this in English?","\u9019\u53E5\u82F1\u6587\u600E\u9EBC\u8AAA\uFF1F"],["Your turn! Say it in English.","\u63DB\u4F60\u4E86\uFF01\u7528\u82F1\u6587\u8AAA\u8AAA\u770B\u3002"]],Yc=(n,t)=>n[Math.floor(t()*n.length)],zr=n=>typeof n=="string"&&/^[A-Z0-9"]/.test(n)&&/[.!?]$/.test(n);function E_(n,t,{learned:e={},mistakes:i={}}={}){let s=(n==="pattern"?"p:":"ph:")+t+":";for(let o in i)if(o.startsWith(s)&&i[o]&&!i[o].d)return 0;let r=e[n+":"+t];return r&&r.at?2:1}function C_(n,t){if(!n)return[];let e=new Map((t.patterns||[]).map(s=>[s.id,s])),i=new Map((t.phrases||[]).map(s=>[s.id,s]));return(n.patterns||[]).filter(s=>e.has(s)).map(s=>({kind:"pattern",id:s,item:e.get(s)})).concat((n.phrases||[]).filter(s=>i.has(s)).map(s=>({kind:"phrase",id:s,item:i.get(s)})))}function Xf(n,t,e={},i=Math.random){let s=C_(n,t);if(!s.length)return null;let r=[[],[],[]];for(let a of s)r[E_(a.kind,a.id,e)].push(a);let o=r.find(a=>a.length);for(let a=0;a<6;a++){let l=Yc(o,i),c,d;if(l.kind==="pattern"){let x=(l.item.ex||[]).concat(l.item.extra||[]).filter(S=>zr(S.en)&&S.zh);if(c=Yc((l.item.ex||[]).filter(S=>zr(S.en)&&S.zh),i),!c)continue;d=x.filter(S=>S.en!==c.en&&S.zh!==c.zh).map(S=>S.en)}else{if(!zr(l.item.ex)||!l.item.exZh)continue;c={en:l.item.ex,zh:l.item.exZh},d=s.filter(x=>x.kind==="phrase"&&x.id!==l.id&&zr(x.item.ex)).map(x=>x.item.ex),d.length<2&&(d=d.concat((t.phrases||[]).filter(x=>x.tag===l.item.tag&&x.id!==l.id&&zr(x.ex)).map(x=>x.ex)))}let h=[...new Set(d.filter(x=>x!==c.en))].sort(()=>i()-.5).slice(0,2);if(h.length<2)continue;let[f,g]=Yc(T_,i);return{npc:f,zh:g,say:c.zh,cards:[{en:c.en,ok:!0}].concat(h.map(x=>({en:x,ok:!1}))),src:l.kind+":"+l.id}}return null}function $c(n,t=null){let e=Lf(n),i=new Tn,s=[],r={stripe:"#EFEBDD",star:"#2B3F5C"},o=r[e.top]?e.top:null;o&&(e.top=r[o]),t&&(e.top=t.top||e.top,t.hat&&t.hat!=="none"&&(e.hat="none"));let a=(g,x,S,m,p,C,U,v=i)=>{let A=new Vn({color:m});A.userData.base=new Kt(m),s.push(A);let E=new Ve(new Rn(g,x,S),A);return E.position.set(p,C,U),v.add(E),E},l=(g,x,S,m,p,C)=>{let U=a(g,x,S,m,p,C,0);return U.geometry.translate(0,-x/2+.05,0),U.position.y+=x/2-.05,U},c=l(.24,.75,.26,e.bottom,-.14,.375),d=l(.24,.75,.26,e.bottom,.14,.375);if(a(.56,.7,.3,e.top,0,1.1,0),o==="stripe"&&!t)for(let g of[.86,1.06,1.26])a(.57,.08,.31,"#C2443A",0,g,0);o==="star"&&!t&&(a(.22,.07,.02,"#F2C46B",0,1.16,-.16),a(.07,.22,.02,"#F2C46B",0,1.16,-.16),a(.14,.14,.02,"#F2C46B",0,1.16,-.158));let h=l(.18,.66,.2,e.top,-.38,1.12),f=l(.18,.66,.2,e.top,.38,1.12);if(a(.12,.14,.18,e.skin,-.38,.84,0),a(.12,.14,.18,e.skin,.38,.84,0),a(.5,.48,.46,e.skin,0,1.7,0),a(.08,.08,.02,"#151714",-.11,1.74,-.235),a(.08,.08,.02,"#151714",.11,1.74,-.235),a(.14,.04,.02,"#C2443A",0,1.6,-.235),e.hair==="short"&&a(.54,.16,.5,e.hairColor,0,1.97,.02),e.hair==="long"&&(a(.54,.16,.5,e.hairColor,0,1.97,.02),a(.54,.5,.12,e.hairColor,0,1.7,.25)),e.hair==="bun"&&(a(.54,.14,.5,e.hairColor,0,1.96,.02),a(.22,.2,.22,e.hairColor,0,2.12,.12)),e.hair==="spiky")for(let g of[-.18,0,.18])a(.14,.24,.4,e.hairColor,g,2.02,.02);if(e.hat==="cap"&&(a(.56,.14,.52,"#C2443A",0,2.03,.02),a(.4,.04,.2,"#C2443A",0,1.97,-.32)),e.hat==="beanie"&&a(.56,.24,.52,"#3F6E9A",0,2.06,.02),e.hat==="bow"&&(a(.2,.14,.06,"#C9709F",-.12,2.02,-.1),a(.2,.14,.06,"#C9709F",.12,2.02,-.1)),e.hat==="flower"&&["#C2443A","#F2C46B","#C9709F","#EFEBDD","#3F6E9A","#F2C46B"].forEach((g,x)=>{let S=x/6*Math.PI*2;a(.12,.1,.12,g,Math.sin(S)*.24,1.99,Math.cos(S)*.22)}),e.hat==="tophat"&&(a(.62,.04,.58,"#151714",0,1.97,.02),a(.38,.38,.36,"#151714",0,2.18,.02),a(.39,.06,.37,"#C2443A",0,2.03,.02)),e.hat==="crown"){a(.5,.12,.46,"#D9A63A",0,2,.02);for(let[g,x]of[[-.2,-.2],[0,-.2],[.2,-.2],[-.2,.22],[.2,.22]])a(.09,.12,.06,"#D9A63A",g,2.12,x);a(.07,.07,.02,"#C2443A",0,2,-.215)}if(e.acc==="scarf"&&(a(.56,.1,.34,"#C2443A",0,1.43,0),a(.12,.3,.04,"#C2443A",.12,1.26,-.18)),e.acc==="goldbadge"&&a(.12,.12,.03,"#D9A63A",.14,1.28,-.165),e.acc==="backpack"&&(a(.42,.5,.18,"#D9A63A",0,1.1,.24),a(.3,.16,.04,"#8C6640",0,1,.34)),e.acc==="cape"&&a(.56,.95,.04,"#6E3F8C",0,.98,.18),e.glasses&&(a(.16,.12,.02,"#26302A",-.12,1.74,-.245),a(.16,.12,.02,"#26302A",.12,1.74,-.245)),t){let g=t.hatColor||"#F4F1E8",x=t.extraColor||"#26302A";t.hat==="chef"&&(a(.5,.1,.48,g,0,1.98,.02),a(.44,.36,.42,g,0,2.2,.02)),t.hat==="helmet"&&(a(.6,.22,.56,g,0,2.04,.02),a(.68,.04,.66,g,0,1.94,.04),a(.12,.1,.02,"#C2443A",0,2.06,-.255)),t.hat==="cap"&&(a(.56,.14,.52,g,0,2.03,.02),a(.4,.04,.2,g,0,1.97,-.32)),t.hat==="nurse"&&(a(.4,.12,.3,g,0,2,0),a(.08,.08,.02,"#C2443A",0,2,-.155)),t.extra==="apron"&&a(.44,.62,.03,x,0,1,-.165),t.extra==="tie"&&a(.08,.36,.03,x,0,1.22,-.165),t.extra==="bag"&&(a(.06,.62,.32,x,.32,1.12,0),a(.12,.26,.34,x,.36,.86,0)),t.extra==="stethoscope"&&(a(.04,.3,.03,x,-.12,1.28,-.165),a(.04,.3,.03,x,.12,1.28,-.165),a(.1,.1,.03,"#B9B6AE",.12,1.1,-.17)),t.extra==="badge"&&a(.12,.12,.03,x,-.14,1.28,-.165)}return i.userData={legL:c,legR:d,armL:h,armR:f,mats:s},i}function Zc(n,t,e,i){let s=n.userData,r=Math.sin(e*9)*Math.min(1,t/4)*.7;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r,s.armR.rotation.x=r;for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var qf=()=>{let n=new Tn,t=[],e=(i,s,r,o,a,l,c,d=n)=>{let h=new Vn({color:o});h.userData.base=new Kt(o),t.push(h);let f=new Ve(new Rn(i,s,r),h);return f.position.set(a,l,c),d.add(f),f};return n.userData.mats=t,{g:n,bx:e}};function Yf(n){let{g:t,bx:e}=qf(),i=(s,r,o)=>{for(let a of s)for(let l of r)e(.16,o,o,"#26302A",a,o/2,l)};if(n==="bike"){for(let s of[-.55,.55])e(.08,.5,.5,"#26302A",0,.25,s),e(.1,.2,.2,"#B9B6AE",0,.25,s);e(.08,.08,1.1,"#C2443A",0,.5,0),e(.08,.4,.08,"#C2443A",0,.65,-.5),e(.5,.06,.06,"#26302A",0,.86,-.5),e(.22,.06,.3,"#26302A",0,.62,.3)}else if(n==="scooter"){e(.3,.06,1,"#3F6E9A",0,.1,0);for(let s of[-.45,.45])e(.08,.16,.16,"#26302A",0,.08,s);e(.06,.95,.06,"#B9B6AE",0,.58,-.46),e(.5,.06,.06,"#26302A",0,1.05,-.46)}else if(n==="car")e(1.3,.55,2.4,"#C2443A",0,.55,0),e(1.2,.4,1,"#CFE3DF",0,1.02,.15),e(1.32,.08,1.02,"#C2443A",0,1.25,.15),e(.3,.14,.04,"#F2C46B",-.42,.62,-1.21),e(.3,.14,.04,"#F2C46B",.42,.62,-1.21),i([-.66,.66],[-.8,.8],.44);else if(n==="bus"){e(1.9,1.5,4.6,"#D9A63A",0,1,0);for(let s of[-1.6,-.6,.4,1.4])e(1.92,.5,.7,"#CFE3DF",0,1.25,s);e(1.6,.5,.04,"#CFE3DF",0,1.25,-2.31),e(1.92,.12,4.62,"#26302A",0,.5,0),i([-.9,.9],[-1.5,1.5],.6)}else n==="boat"&&(e(1.1,.36,2.2,"#8C6640",0,-.05,0),e(.9,.06,1.9,"#C49A63",0,.12,0),e(1.12,.1,.5,"#EFEBDD",0,.16,-.9));return t}function $f(n){let{g:t,bx:e}=qf(),i={dog:["#B88B55","#5C3A24"],cat:["#8C8A84","#5E6660"],rabbit:["#EFEBDD","#E8B4AC"],dalmatian:["#F4F1E8","#151714"]}[n]||["#B88B55","#5C3A24"],s=[-.12,.12].flatMap(o=>[-.18,.18].map(a=>e(.1,.22,.1,i[0],o,.11,a)));e(.32,.26,.56,i[0],0,.34,0);let r=e(.3,.28,.28,i[0],0,.56,-.32);if(e(.05,.05,.02,"#151714",-.08,.6,-.465),e(.05,.05,.02,"#151714",.08,.6,-.465),e(.06,.04,.02,"#151714",0,.52,-.465),n==="rabbit"?(e(.08,.3,.06,i[0],-.08,.84,-.3),e(.08,.3,.06,i[0],.08,.84,-.3),e(.04,.2,.02,i[1],-.08,.84,-.335),e(.04,.2,.02,i[1],.08,.84,-.335),e(.12,.12,.12,"#FFFFFF",0,.38,.32)):n==="cat"?(e(.08,.1,.06,i[1],-.1,.74,-.3),e(.08,.1,.06,i[1],.1,.74,-.3),e(.06,.06,.4,i[0],0,.5,.42)):(e(.08,.16,.08,i[1],-.15,.6,-.28),e(.08,.16,.08,i[1],.15,.6,-.28),e(.06,.06,.24,i[0],0,.46,.36)),n==="dalmatian")for(let[o,a,l]of[[.165,.38,-.1],[-.165,.32,.12],[.1,.475,.15],[-.08,.475,-.12],[.155,.6,-.32]])e(.02+(Math.abs(o)>.15?0:.08),.08,.08+(Math.abs(o)>.15?0:-.06),i[1],o,a,l);return t.userData.legs=s,t.userData.head=r,t}function Zf(n,t,e,i){let s=n.userData,r=Math.sin(e*12)*Math.min(1,t/3)*.6;s.legs.forEach((o,a)=>{o.rotation.x=a%3===0?r:-r});for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var Jf=(n,t)=>{for(let e of n.userData.mats)e.color.copy(e.userData.base).multiplyScalar(t)};function Kf(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Vs(n,s),canSpend:s=>n.coins>=s,spend:async s=>Bc(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}var si=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},P_=n=>n.charAt(0).toUpperCase()+n.slice(1),I_=n=>typeof n=="string"&&/^[A-Z0-9"']/.test(n)&&/[.!?]$/.test(n),Jc=(n,t)=>t===1?n.sg:qi(t)+" "+n.pl,L_=n=>n.length<2?n.join(""):n.length===2?n.join(" and "):n.slice(0,-1).join(", ")+", and "+n[n.length-1];function td(n,t=Math.random){let e=si(n.items,t).slice(0,n.lines).map(i=>{let s=1+Math.floor(t()*n.maxQty);return{id:i.id,n:s,en:Jc(i,s),zh:i.zh}});return{lines:e,en:`${n.please} ${L_(e.map(i=>i.en))}.`,shelf:si(n.items,t).map(i=>i.id)}}function ed(n,t){let e=Object.fromEntries(n.map(i=>[i.id,i.n]));return{results:n.map(i=>({id:i.id,want:i.n,got:t[i.id]||0,ok:(t[i.id]||0)===i.n})),extra:Object.keys(t).filter(i=>t[i]>0&&!e[i])}}function nd(n,t=Math.random){let e=si(n.customers,t);return Array.from({length:n.per},(i,s)=>{let[r,o]=si(n.menu,t),a=t()<.3?2:1,l=t()<.3?2:1,c=n.say[Math.floor(t()*n.say.length)],d=Jc(r,a),h=Jc(o,l);return{who:e[s%e.length],en:c.replace("{A}",P_(d)).replace("{a}",d).replace("{b}",h),want:{[r.id]:a,[o.id]:l}}})}var id=(n,t)=>{let e=new Set(Object.keys(n).concat(Object.keys(t).filter(i=>t[i]>0)));for(let i of e)if((n[i]||0)!==(t[i]||0))return!1;return!0},D_=["first","second","third","fourth"],N_=["\u4E00","\u4E8C","\u4E09","\u56DB"];function U_(n,t,e){let i={left:n.filter(r=>r.x>t).sort((r,o)=>r.x-o.x),right:n.filter(r=>r.x<t).sort((r,o)=>o.x-r.x)},s=[];for(let r of["left","right"])i[r].forEach((o,a,l)=>{let c=i[r==="left"?"right":"left"];for(let d of[l[a-1],l[a+1]].filter(Boolean)){let h=r==="left"?"right":"left",f=(g,x)=>g.replace("{turn}",r).replace("{nth}",D_[a]).replace("{side}",h).replace("{next}",d.en).replace("{turnZh}",r==="left"?"\u5DE6":"\u53F3").replace("{nthZh}",N_[a]).replace("{sideZh}",h==="left"?"\u5DE6":"\u53F3").replace("{nextZh}",x?d.zh:"");s.push({to:o.id,turn:r,nth:a,next:d.id,en:f(e.how),zh:f(e.howZh,!0),cards:[o.id,d.id,(c[a]||c[0]).id]})}});return s}function sd(n,t,e,i=Math.random){let s=U_(n,t,e),r=s[Math.floor(i()*s.length)];return Object.assign({},r,{cards:si(r.cards,i),tries:0})}var jf=/^hanlin-[56]-u\d+$/,Qf=n=>{let t=/^hanlin-(\d)-u(\d+)$/.exec(n);return t?`${t[1]==="5"?"\u4E94\u4E0A":"\u4E94\u4E0B"} Unit ${t[2]}`:n};function rd(n,t){let e=(n||[]).filter(s=>jf.test(s.id)&&(s.sents||[]).length).map(s=>({id:s.id,title:s.title||Qf(s.id),sents:s.sents}));if(e.length)return e;let i={};for(let s of t||[])for(let r of s.tb||[])if(jf.test(r))for(let[o,a]of(s.ex||[]).entries())(i[r]=i[r]||[]).push({key:s.id+":"+o,en:a.en,zh:a.zh});return Object.keys(i).sort().map(s=>({id:s,title:Qf(s),sents:i[s]}))}function od(n,t,e){if(!n.length)return null;let i=new Set(n.map(r=>r.id));for(let r=(t||[]).length-1;r>=0;r--){let o=/^tb:(hanlin-[56]-u\d+):/.exec(t[r]&&t[r].id||"");if(o&&i.has(o[1]))return o[1]}let s=0;for(let r of String(e))s=s*31+r.charCodeAt(0)>>>0;return n[s%n.length].id}function ad(n,t,e=Math.random,i={}){let s=n.sents.filter(h=>I_(h.en)&&h.zh),r=[],o=new Set,a=h=>(h.blanks||[]).find(f=>f.w&&new RegExp("\\b"+f.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(h.en)&&(f.opts||[]).filter(g=>g!==f.w).length>=2),l=h=>{let f=si(s.filter(g=>g.en!==h.en&&g.zh!==h.zh),e).map(g=>g.en).filter((g,x,S)=>S.indexOf(g)===x).slice(0,2);return f.length<2?null:{kind:"zh2en",key:h.key,en:i.zh2en||"How do we say this in English?",zh:h.zh,showZh:!0,cards:si([{t:h.en,ok:!0}].concat(f.map(g=>({t:g,ok:!1}))),e),say:""}},c=h=>{let f=a(h);if(!f)return null;let g=si(f.opts.filter(x=>x!==f.w),e).slice(0,2);return{kind:"blank",key:h.key,en:h.en.replace(new RegExp("\\b"+f.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b"),"____"),zh:h.zh+(f.cue?`\uFF08\u7A7A\u683C\uFF1A${f.cue}\uFF09`:""),showZh:!0,cards:si([{t:f.w,ok:!0}].concat(g.map(x=>({t:x,ok:!1}))),e),say:"",full:h.en}},d=si(s,e);for(let h=0;h<t;h++){let f=h%2?c:l,g=null;for(let x of d)if(!o.has(x.key)&&(g=f(x)||(f===c?l(x):null),g)){o.add(x.key);break}g&&r.push(g)}return r}function O_(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}function ld(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=O_(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(l=>l.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var cd=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var ub=.5*(Math.sqrt(3)-1),fb=(3-Math.sqrt(3))/6;function Kc(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Qc="f999d1398e",hd=new URLSearchParams(location.search),nl=hd.get("test")==="1"||window.__HW_TEST__===!0,z_=720,V_=(n,t)=>{try{let e=localStorage.getItem(n);return e??t}catch{return t}},G_=(n,t)=>{try{localStorage.setItem(n,t)}catch{}};function ud(n){let t=null,e=()=>t||(t=new Promise((s,r)=>{let o=indexedDB.open(n,1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})),i=(s,r)=>e().then(o=>new Promise((a,l)=>{let c=o.transaction("kv",s),d=r(c.objectStore("kv"));c.oncomplete=()=>a(d&&d.result),c.onerror=()=>l(c.error)}));return{get:s=>i("readonly",r=>r.get(s)),putMany:s=>i("readwrite",r=>{for(let o in s)r.put(s[o],o)}),all:s=>e().then(r=>new Promise((o,a)=>{let l={},c=r.transaction("kv").objectStore("kv").openCursor(IDBKeyRange.bound(s,s+"\uFFFF"));c.onsuccess=()=>{let d=c.result;d?(l[d.key]=d.value,d.continue()):o(l)},c.onerror=()=>a(c.error)}))}}var _i=ud("kids_town"),Vr=ud("hw_world"),b={started:!1,overlay:null,p:{x:.5,y:22,z:8.5},v:{x:0,y:0,z:0},yaw:Math.PI,pitch:-.15,onGround:!1,view:"tp",bike:!1,keys:{},joy:{x:0,y:0,active:!1},time:.25,frames:[],dirty:new Set,furn:!1,furnSel:0,furnRot:0,zh:V_("kt_zh","on")==="on",touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,pending:0};async function H_(){let[n,t,e,i,s,r,o]=await Promise.all(["data/blocks.json","data/town.json","data/dialogues.json","data/jobs.json","data/shop.json","data/chatgen.json","data/life.json"].map(u=>fetch(u,{cache:"no-cache"}).then(_=>_.json()))),a={blocks:n.blocks.concat(t.blocks),items:n.items,blueprints:n.blueprints},l=$u(a),c=t.GY,d=wf(l,t),h={};try{let[u,_,L,B,Q,J,ut,ft]=await Promise.all([_i.get("kt_player"),_i.get("kt_home"),_i.get("kt_avatar"),Vr.get("hw_coins"),_i.get("kt_jobs"),_i.get("kt_owned"),_i.get("kt_pets"),_i.get("kt_life")]);h={pl:u,home:_,av:L,coins:B,jobs:Q,owned:J,pets:ut,life:ft,chunks:await _i.all("kt_chunk:")}}catch(u){console.warn("save unavailable",u)}let f=Za(h.coins),g=lf(Object.fromEntries(Object.entries(h.chunks||{}).map(([u,_])=>[u.slice(9),_]))),x=Object.assign({id:null,locked:!1,wall:null,floor:null},h.home||{}),S=el(h.av),m=i.jobs,p=Wf(h.jobs),C=new Set(Array.isArray(h.owned)?h.owned:[]),U=Object.fromEntries(s.items.map(u=>[u.id,u])),v=Nf(s),A=Object.assign({active:null,names:{}},h.pets||{}),E=Object.assign({stats:{},daily:null},h.life||{}),D=t.secrets&&t.secrets.rooms||[],M=()=>p.wear&&m[p.wear]?m[p.wear].uniform:null;h.pl&&Object.assign(b,{p:{x:h.pl.x,y:h.pl.y,z:h.pl.z},yaw:h.pl.yaw||0,view:h.pl.view||"tp"});let T=Le("#c"),R=new Wa({canvas:T,antialias:!1,powerPreference:"high-performance"});R.setPixelRatio(Math.min(window.devicePixelRatio||1,b.touch?1.5:1.25));let I=new pr,H=new Kt("#EFEBDD");I.background=H;let k=new en(70,1,.08,200);k.rotation.order="YXZ";let F=hf(l),W=pf(F.canvas),tt=new Worker("assets/kt-worker.js?v="+Qc),X=new ja({scene:I,mats:W,reg:l,worker:tt,diffs:g,onDirty:u=>b.dirty.add(u)});X.setRenderDistance(b.touch?3:4),k.far=X.rd*16+40,k.updateProjectionMatrix();let ct=await new Promise(u=>{let _=L=>{L.data.type==="ready"&&(tt.removeEventListener("message",_),u(L.data.spawn))};tt.addEventListener("message",_),tt.postMessage({type:"init",seed:1,blocks:a,structures:t,diffs:Object.fromEntries([...g].map(([L,B])=>[L,Vc(B)]))})});h.pl||(b.p={x:ct.x,y:ct.y,z:ct.z});let j=new Set;for(let u of t.buildings.concat(d.homes))for(let _=u.x;_<u.x+u.w;_++)for(let L=u.z;L<u.z+u.d;L++)j.add(_+","+L);let ot=l.num("water"),at=(u,_)=>X.get(u,c,_)===ot,zt=(u,_,L)=>{let B=te();if(B&&ge[B].big&&_>c&&_<=c+3&&j.has(u+","+L)||B==="boat"&&(_===c&&at(u,L)||_>c&&_<=c+2&&!at(u,L)))return!0;let Q=X.get(u,_,L);return l.flat.solid[Q]===1&&(l.flat.boxes[Q]||!0)},Nt=(u,_,L,B,Q,J="#26302A")=>{let ut=document.createElement("canvas");ut.width=320,ut.height=120;let ft=ut.getContext("2d");ft.fillStyle="#EFEBDD",ft.fillRect(6,6,308,108),ft.strokeStyle=J,ft.lineWidth=8,ft.strokeRect(6,6,308,108),ft.fillStyle=J,ft.textAlign="center",ft.font="bold 46px sans-serif",ft.fillText(u,160,60),ft.font="30px sans-serif",ft.fillText(_,160,100);let Et=new Cn(ut);Et.colorSpace=He;let Dt=new Di(new pi({map:Et,depthWrite:!1}));return Dt.scale.set(3.2,1.2,1),Dt.position.set(L,B,Q),I.add(Dt),Dt};for(let u of t.buildings){let _=u.door==="s"?u.z+u.d+.4:u.door==="n"?u.z-.4:u.z+u.d/2,L=u.door==="e"?u.x+u.w+.4:u.door==="w"?u.x-.4:u.x+u.w/2;Nt(u.en,u.zh,L,c+u.h+.4,_,"#C2443A")}Nt(t.park.en,t.park.zh,t.park.x+2,c+3.5,t.park.z-.5,"#3E6B3A");let we=(()=>{let u=document.createElement("canvas");u.width=96,u.height=96;let _=u.getContext("2d");_.fillStyle="#F4F1E8",_.fillRect(8,8,80,80),_.strokeStyle="#26302A",_.lineWidth=4,_.strokeRect(8,8,80,80),_.fillStyle="#C2443A",_.fillRect(40,2,16,14),_.fillStyle="#5E6660";for(let B=34;B<80;B+=12)_.fillRect(20,B,56,4);_.fillStyle="#26302A",_.font="bold 18px sans-serif",_.textAlign="center",_.fillText("NOTE",48,30);let L=new Cn(u);return L.colorSpace=He,L})(),oe=D.flatMap(u=>u.notes.map((_,L)=>{let B=new Di(new pi({map:we,depthWrite:!1}));return B.scale.set(.7,.7,1),B.position.set(_.at[0],_.at[1],_.at[2]),I.add(B),{room:u,i:L,n:_,p:{x:_.at[0],y:_.at[1]-.35,z:_.at[2]}}}));t.secrets&&t.secrets.board&&Nt("Notice Board","\u516C\u544A\u6B04",...t.secrets.board.sign,"#8C6640");let ce={},it=()=>{for(let u of d.homes){ce[u.id]&&I.remove(ce[u.id]);let _=x.id===u.id;ce[u.id]=Nt(_?"My Home":"For Rent",_?"\u6211\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F",u.x+u.w/2,c+(_&&x.floors===2?kr(u,c,2).h:u.h)+.6,u.z-.4,_?"#3E6B3A":"#5E6660")}};it();let lt=()=>d.homes.find(u=>u.id===x.id)||null,At=()=>{let u=lt();return u&&x.floors===2?Object.assign({},u,{h:kr(u,c,2).h}):u},$t=()=>{let u=m[p.wear];if(!u)return null;let _=document.createElement("canvas");_.width=256,_.height=64;let L=_.getContext("2d");L.fillStyle=u.color,L.fillRect(4,4,248,56),L.fillStyle="#EFEBDD",L.textAlign="center",L.font="bold 30px sans-serif",L.fillText(u.en+" "+u.zh,128,43);let B=new Cn(_);B.colorSpace=He;let Q=new Di(new pi({map:B,depthWrite:!1}));return Q.scale.set(1.6,.4,1),Q.position.y=2.75,Q},Rt=()=>{let u=$c(S,M()),_=$t();return _&&u.add(_),u},qt=Rt();I.add(qt);let ge={bike:{zh:"\u8173\u8E0F\u8ECA",speed:8,run:10,lift:.35}};for(let u of s.items)u.cat==="ride"&&(ge[u.id]=u);let ie=Object.fromEntries(Object.keys(ge).map(u=>{let _=Yf(u);return _.visible=!1,I.add(_),[u,_]})),te=()=>b.bike?ge[b.ride]?b.ride:"bike":null,ve=()=>b.bike?ge[te()].lift:0,ee=()=>{I.remove(qt),qt=Rt(),I.add(qt)},_e=t.npcs.map((u,_)=>{let L={id:u.id,kind:"villager",size:[.6,1.8],speed:1.2,colors:{leg:"#26302A",body:u.robe,head:"#E7CDA6",hat:u.hat}},B={id:_+1,type:u.id,kind:"villager",def:L,n:u,route:u.route,ri:1,wait:0,p:{x:u.route[0][0]+.5,y:c+1,z:u.route[0][1]+.5},v:{x:0,y:0,z:0},yaw:0,gone:!1};return B.g=mf(L,u.robe),I.add(B.g),B}),Yt={coins:Le("#coins"),ov:Le("#ov"),toasts:Le("#toasts"),joy:Le("#joy"),knob:Le("#knob"),hotbar:Le("#hotbar"),start:Le("#start"),dbg:hd.get("debug")!==null?Le("#dbg"):null,loading:Le("#loading")};Yt.dbg&&(Yt.dbg.hidden=!1);let jt=u=>{for(;Yt.toasts.children.length>3;)Yt.toasts.firstChild.remove();let _=N("div",{class:"toast"},u);Yt.toasts.append(_),setTimeout(()=>_.remove(),2400)},Ae=()=>{Yt.coins.textContent=f.coins},Ht=()=>{Yt.ov.hidden=!0,Yt.ov.innerHTML="",b.overlay=null,b.talkNpc&&(b.talkNpc.busy=!1,b.talkNpc=null);try{speechSynthesis.cancel()}catch{}},O=(u,..._)=>{document.pointerLockElement&&document.exitPointerLock(),Yt.ov.innerHTML="",Yt.ov.hidden=!1,Yt.ov.append(N("div",{class:"panel"},N("div",{class:"p-head"},N("h2",{},u),N("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ht},"\xD7")),..._))},Me=u=>{u<=0||(Vs(f,u),b.pending+=u,Ae(),rn("coin"))};function he(u,_,L,B,Q){try{let J=JSON.parse(localStorage.getItem("ke_log")||"[]");if(!Array.isArray(J))return;J.push(zc({id:u,module:"town",tkey:_,type:L},B,Q,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)),localStorage.setItem("ke_log",JSON.stringify(J))}catch(J){console.warn("ke_log",J)}}let P=(u,_,L,B)=>he(`town:${u}:${_}`,"town:"+u,"town-dialogue",L,B);function y(u){window.KidsDaily&&window.KidsDaily.rec("english",u)}let G=u=>{if(!(nl||!u||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let _=new SpeechSynthesisUtterance(u.replace(/_{2,}/g," ... "));_.lang="en-US",_.rate=.9,speechSynthesis.speak(_)}catch{}},q=(u,_,L)=>[N("div",{class:"npc-line"},N("button",{class:"say","aria-label":"\u518D\u5538\u4E00\u6B21",onclick:()=>G(u)},"\u{1F50A}"),N("b",{class:"en"},u)),_&&L?N("p",{class:"muted"},_):null],nt=u=>Object.keys(m).find(_=>m[_].npc===u.n.id)||null,pt=[];function xt(u){let _=nt(u),L=pt.map(J=>J(u)).filter(Boolean);if(!_&&!L.length){_t(u);return}let B=m[_],Q=_&&p.lic[_];O(`${u.n.en}\u30FB${u.n.zh}`,N("p",{},"\u4F60\u60F3\u8981\u505A\u4EC0\u9EBC\uFF1F"),N("div",{class:"cards"},N("button",{class:"card",onclick:()=>_t(u)},"\u{1F4AC} \u804A\u5929"),_?N("button",{class:"card",onclick:()=>Q?gt(_):mt(_)},Q?`\u{1F9F0} ${B.zh}\u7684\u5DE5\u4F5C\uFF1A${B.task.title}`:`\u{1F4DD} \u8003${B.zh}\u57F7\u7167\uFF0810 \u984C\uFF0C\u5C0D ${8} \u984C\u5C31\u901A\u904E\uFF09`):null,...L)),b.talkNpc=u,u.busy=!0,b.overlay="menu",u.yaw=Math.atan2(-(b.p.x-u.p.x),-(b.p.z-u.p.z))}let et=null,rt=u=>new Promise((_,L)=>{let B=document.createElement("script");B.src=u,B.onload=_,B.onerror=()=>L(new Error("load "+u)),document.head.appendChild(B)});async function yt(){try{for(let u of["patterns.js","patterns-2.js","phrases.js","phrases-2.js"])await rt("../../data/"+u);et={patterns:(window.DATA_PATTERNS||[]).slice(),phrases:(window.DATA_PHRASES||[]).slice()}}catch(u){console.warn("chat data",u)}try{await rt("../../data/textbook.js"),It=(window.DATA_TEXTBOOK||[]).slice()}catch(u){console.warn("textbook",u)}}let Ut=(u,_)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||_}catch{return _}};function vt(u,_){let L=et&&Xf(r[u.replace(/\d+$/,"")],et,{learned:Ut("ke_learned",{}),mistakes:Ut("ke_mistakes",{})});return L?Object.assign({},_,{turns:_.turns.concat(L)}):_}function _t(u,_){let L=[].concat(u.n.dlg);_=_||L[(u.dlgN=(u.dlgN==null?-1:u.dlgN)+1)%L.length];let B=e[_]&&vt(_,e[_]);B&&(b.talkNpc=u,u.busy=!0,b.overlay="talk",b.dlg=Cf(B),b.dlg.id=_,u.yaw=Math.atan2(-(b.p.x-u.p.x),-(b.p.z-u.p.z)),Ft(!0))}function Ft(u){let _=b.dlg,L=b.talkNpc,B=Yt.ov;B.innerHTML="",B.hidden=!1;let Q=N("div",{class:"p-head"},N("h2",{},`${L.n.en}\u30FB${L.n.zh}`,N("small",{},`\u3000${_.d.place}`)),N("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ht},"\xD7")),J=N("div",{class:"panel talk"},Q);if(B.append(J),_.phase==="talk"){let ut=_.d.turns[_.turn];J.append(...q(ut.npc,ut.zh,b.zh),ut.say?N("p",{class:"say-zh"},"\u8981\u8AAA\uFF1A"+ut.say):null,N("p",{class:"muted small"},`\u7B2C ${_.turn+1} / ${_.d.turns.length} \u53E5\u3000\u9078\u4E00\u5F35\u5361\u7247\u56DE\u7B54`),N("div",{class:"cards"},_.cards[_.turn].map((ft,Et)=>N("button",{class:"card en",onclick:Dt=>Vt(Et,Dt.currentTarget)},ft.en)))),u&&G(ut.npc)}else _.phase==="check"?J.append(N("p",{class:"big"},"\u5C0F\u6E2C\u9A57\uFF1A"+_.d.check.q),N("div",{class:"cards"},_.check.map((ut,ft)=>N("button",{class:"card",onclick:()=>Qt(ft)},ut.zh)))):J.append(N("p",{class:"big"},_.coins?`\u5C0D\u8A71\u5B8C\u6210\uFF01 +${_.coins} \u91D1\u5E63`:"\u5C0D\u8A71\u5B8C\u6210\uFF01"),N("p",{class:"muted"},`\u7B2C\u4E00\u6B21\u5C31\u9078\u5C0D ${_.right} / ${_.d.turns.length} \u53E5`),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u597D")))}function Vt(u,_){let L=b.dlg,B=L.turn,Q=L.cards[B][u],J=Rf(L,u);if(P(L.id,L.d.turns[B].src?"gen:"+L.d.turns[B].src:B,J.ok&&J.first,Q.en),!J.ok){_.classList.add("bad"),rn("hurt"),jt("\u518D\u60F3\u60F3\u770B\uFF0C\u54EA\u4E00\u53E5\u6700\u5408\u9069\uFF1F");return}J.first&&Me(1),rn("pickup"),G(Q.en),setTimeout(()=>Ft(L.phase==="talk"),450)}function Qt(u){let _=b.dlg,L=_.coins,B=Pf(_,u);P(_.id,"check",B.ok,_.check[u].zh),B.ok?Me(_.coins-L):jt("\u7B54\u6848\u662F\uFF1A"+_.check.find(Q=>Q.ok).zh),Dn("talk"),Ft(!1)}function V(u,_,L,B){let Q=N("div",{class:"fb"}),J=N("div",{}),ut=!1,ft=(Et,Dt)=>{if(ut)return;ut=!0;let kt=L(Et);Dt&&Dt.classList.add(kt.ok?"ok":"bad"),rn(kt.ok?"pickup":"hurt"),kt.coins&&Me(kt.coins),Q.className="fb "+(kt.ok?"ok":"bad"),Q.append(N("div",{},kt.ok?`\u7B54\u5C0D\u4E86\uFF01${kt.coins?` +${kt.coins} \u91D1\u5E63`:""}`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",kt.ok?null:N("b",{class:"en"},kt.answer)),N("button",{class:"btn",onclick:B},kt.last?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u984C"))};if(_.typed){let Et=N("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),Dt=()=>{ut||!Et.value.trim()||(Et.disabled=!0,ft(Et.value))};Et.addEventListener("keydown",kt=>{kt.stopPropagation(),kt.key==="Enter"&&Dt()}),J.append(N("div",{class:"typerow"},Et,N("button",{class:"btn",onclick:Dt},"\u9001\u51FA"))),setTimeout(()=>Et.focus(),50)}else J.append(N("div",{class:"cards"},_.cards.map((Et,Dt)=>N("button",{class:"card"+(/[a-z]/i.test(Et.t)?" en":""),onclick:kt=>ft(Dt,kt.currentTarget)},Et.t))));u.append(...q(_.en,_.zh,_.typed||_.showZh||b.zh),J,Q),_.say!==""&&G(_.say||_.en)}function mt(u){b.exam=kf(m[u]),b.exam.id=u,st()}function st(){let u=b.exam,_=m[u.id],L=Yt.ov;L.innerHTML="",L.hidden=!1,b.overlay="exam";let B=N("div",{class:"panel talk"},N("div",{class:"p-head"},N("h2",{},`${_.zh}\u57F7\u7167\u8003\u8A66`,N("small",{},u.done?"":`\u3000\u7B2C ${u.i+1} / ${u.qs.length} \u984C\u30FB\u7B54\u5C0D ${u.right}`)),N("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ht},"\xD7")));if(L.append(B),!u.done){let ut=u.qs[u.i],ft=u.i;V(B,{en:ut.q,zh:ut.zh,typed:ut.type==="typed",cards:ut.cards},Et=>{let Dt=zf(u,Et);return y(Dt.ok),he(`town:lic:${u.id}:${ft}`,"town:license:"+u.id,"town-license",Dt.ok,Dt.text),{ok:Dt.ok,answer:Dt.answer,coins:Oc(Dt.ok,Dt.typed),last:u.done}},st);return}let Q=Vf(u),J=Q&&!p.lic[u.id];Q&&(J&&(p.lic[u.id]=Date.now(),Me(10)),p.wear=u.id,ee(),Ue()),B.append(N("p",{class:"big"},Q?`\u{1F389} \u901A\u904E\u4E86\uFF01\u4F60\u62FF\u5230${_.zh}\u57F7\u7167`:`\u7B54\u5C0D ${u.right} / ${u.qs.length} \u984C\uFF0C\u8981 ${8} \u984C\u624D\u901A\u904E`),N("p",{class:"muted"},Q?`${J?"\u57F7\u7167\u734E\u52F5 +10 \u91D1\u5E63\u3002":""}\u63DB\u4E0A${_.zh}\u5236\u670D\u4E86\uFF0C\u982D\u4E0A\u6703\u51FA\u73FE\u300C${_.en}\u300D\u3002\u4EE5\u5F8C\u627E\u9019\u4F4D\u5C45\u6C11\u5C31\u80FD\u4E0A\u73ED\u8CFA\u91D1\u5E63\uFF1B\u5728\u300C\u5DE5\u4F5C\u300D\u53EF\u4EE5\u63DB\u5236\u670D\u3002`:"\u6C92\u95DC\u4FC2\uFF0C\u518D\u8003\u4E00\u6B21\uFF01\u984C\u76EE\u4E00\u6A23\uFF0C\u9078\u9805\u9806\u5E8F\u6703\u63DB\u3002"),N("div",{class:"row"},Q?N("button",{class:"btn big",onclick:()=>gt(u.id)},"\u99AC\u4E0A\u4E0A\u73ED"):N("button",{class:"btn big",onclick:()=>mt(u.id)},"\u518D\u8003\u4E00\u6B21"),N("button",{class:"btn ghost",onclick:Ht},"\u5148\u4E0D\u8981")))}function gt(u){if(!p.lic[u]){mt(u);return}let _=Gf(m[u]);if(_.id=u,_.kind==="go"){b.go=_,b.goWrong=null,Bt(),Tt();return}b.task=_,St()}function St(){let u=b.task,_=m[u.id],L=Yt.ov;L.innerHTML="",L.hidden=!1,b.overlay="task";let B=N("div",{class:"panel talk"},N("div",{class:"p-head"},N("h2",{},`${_.zh}\u7684\u5DE5\u4F5C\uFF1A${_.task.title}`,N("small",{},u.i<u.qs.length&&u.started?`\u3000\u7B2C ${u.i+1} / ${u.qs.length} \u984C`:"")),N("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ht},"\xD7")));if(L.append(B),!u.started){u.started=!0,B.append(...q(_.task.intro,_.task.introZh,!0),N("div",{class:"row"},N("button",{class:"btn big",onclick:St},"\u958B\u59CB"))),G(_.task.intro);return}if(u.i<u.qs.length){let Q=u.qs[u.i],J=u.i;V(B,{en:Q.en,zh:Q.zh,cards:Q.cards},ut=>{let ft=Hf(u,ut);return y(ft.ok),he(`town:job:${u.id}:${J}`,"town:job:"+u.id,"town-job",ft.ok,ft.text),{ok:ft.ok,answer:ft.answer,coins:ft.ok?2:0,last:ft.done}},St);return}p.done[u.id]=(p.done[u.id]||0)+1,Dn("work"),Ue(),B.append(N("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u7B54\u5C0D ${u.right} / ${u.qs.length} \u984C\uFF0C\u8CFA\u5230 ${u.coins} \u91D1\u5E63`),N("div",{class:"row"},N("button",{class:"btn big",onclick:()=>gt(u.id)},"\u518D\u505A\u4E00\u6B21"),N("button",{class:"btn ghost",onclick:Ht},"\u4F11\u606F")))}let ht=t.buildings.map(u=>({id:u.id,en:"the "+u.en,zh:u.zh,b:u})).concat(d.homes.map(u=>({id:u.id,en:"the "+u.en,zh:u.zh,b:u})));for(let u of ht){let _=u.b,L=_.isHome?"n":_.door,B=_.x+(_.w>>1)+.5,Q=_.z+(_.d>>1)+.5;u.f=L==="n"?[B,_.z-.5]:L==="s"?[B,_.z+_.d+.5]:L==="w"?[_.x-.5,Q]:[_.x+_.w+.5,Q]}function Bt(){let u=b.go,_=m[u.id];O(`${_.zh}\u7684\u5DE5\u4F5C\uFF1A${_.task.title}`,...q(u.en,u.zh,b.zh),N("p",{class:"muted small"},`\u8D70\u5230\u5C0D\u7684\u5730\u65B9\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\uFF08\u734E\u52F5 ${u.pay} \u91D1\u5E63\uFF09\u3002\u5DE6\u4E0A\u89D2\u7684\u4EFB\u52D9\u5361\u53EF\u4EE5\u518D\u770B\u4E00\u6B21\u3002`),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u51FA\u767C\uFF01"),N("button",{class:"btn ghost",onclick:()=>{b.go=null,Tt(),Ht(),jt("\u9019\u8D9F\u5148\u4E0D\u505A\u4E86")}},"\u9019\u8D9F\u4E0D\u505A\u4E86"))),b.overlay="task",G(u.en)}function Tt(){let u=Le("#task");if(!u)return;let _=b.go?(b.go.id==="firefighter"?"\u{1F525} ":"\u2709\uFE0F ")+b.go.en.split(/[.!] /)[0]:b.lost?`\u{1F9D2} \u5E36 ${o.lost.kid.en} \u56DE\u5BB6`:b.list?"\u{1F9FA} \u8CFC\u7269\u6E05\u55AE\uFF1A"+b.list.lines.map(L=>L.en).join("\u3001"):null;u.hidden=!_,_&&(u.textContent=_+"\u2026\uFF08\u9EDE\u6211\u518D\u770B\uFF09")}function Te(){let u=b.go;if(u)for(let _ of ht){if(Math.hypot(b.p.x-_.f[0],b.p.z-_.f[1])>3.2){b.goWrong===_.id&&(b.goWrong=null);continue}if(_.id!==u.to){b.goWrong!==_.id&&_.id!==m[u.id].place&&(b.goWrong=_.id,u.tries++,jt(`\u9019\u88E1\u662F ${_.en}\uFF08${_.zh}\uFF09\uFF0C\u4E0D\u662F\u9019\u88E1\u5594\u3002\u518D\u770B\u4E00\u6B21\u4EFB\u52D9\u5361`));continue}let L=m[u.id],B=u.tries===0;b.go=null,Tt(),y(B),he(`town:job:${u.id}:${u.to}`,"town:job:"+u.id,"town-job",B,u.to),p.done[u.id]=(p.done[u.id]||0)+1,Dn("work"),O(`${L.zh}\u7684\u5DE5\u4F5C`,...q(L.task.arrive,L.task.arriveZh,!0),N("div",{class:"row"},N("button",{class:"btn big",onclick:()=>{Me(u.pay),Ue(),Ht(),jt(`\u5B8C\u6210\u4E86\uFF01 +${u.pay} \u91D1\u5E63`)}},L.task.button))),b.overlay="task";return}}let pe=()=>D.filter(u=>C.has("secret:"+u.id)).length;function hn(u){O(`\u{1F4DC} \u7D19\u689D\uFF08${u.room.zh}\uFF09`,...q(u.n.en,u.n.zh,b.zh),N("p",{class:"muted small"},C.has("secret:"+u.room.id)?"\u9019\u500B\u79D8\u5BC6\u623F\u9593\u4F60\u5DF2\u7D93\u627E\u5230\u4E86\uFF01":"\u7167\u8457\u82F1\u6587\u8D70\uFF0C\u627E\u5230\u79D8\u5BC6\u7684\u9580\u3002"),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u77E5\u9053\u4E86"))),b.overlay="panel",G(u.n.en)}function Sn(u){if(b.riddleBusy)return;b.riddleBusy=!0,document.pointerLockElement&&document.exitPointerLock(),b.overlay="ask";let _=[];try{_=Ku(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{}of(Yt.ov,{ids:_.slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u79D8\u5BC6\u623F\u9593\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",daily:!1,onDone:L=>{if(b.overlay=null,b.riddleBusy=!1,!L){L===!1&&jt("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let B=-2;B<=2;B++){let Q=l.get(X.get(u.x,u.y+B,u.z));Q&&Q.interact==="riddle"&&X.set(u.x,u.y+B,u.z,0)}rn("door"),Ue()}})}function il(u){let _=D.find(B=>B.treasure[0]===u.x&&B.treasure[1]===u.y&&B.treasure[2]===u.z);if(!_||(X.set(u.x,u.y,u.z,l.num("chest")),C.has("secret:"+_.id)))return;C.add("secret:"+_.id),C.add(_.reward.id),Ee();let L;_.reward.kind==="pet"?(L="\u4E00\u96BB"+Ie[_.reward.id]+"\uFF01\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",A.active||(A.active=_.reward.id,fn())):(L="\u7A00\u6709\u5BB6\u5177\u300C"+l.name(_.reward.id)+"\u300D\uFF01\u5BB6\u5177\u6A21\u5F0F\u53EF\u4EE5\u653E",me()),Ue(),rn("coin"),O("\u{1F389} \u627E\u5230\u79D8\u5BC6\u623F\u9593\uFF1A"+_.zh,N("p",{class:"big"},"\u5BF6\u7BB1\u88E1\u6709"+L),N("p",{class:"muted"},`\u79D8\u5BC6\u623F\u9593\u627E\u5230 ${pe()} / ${D.length} \u9593`),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u592A\u68D2\u4E86"))),b.overlay="panel"}let un=o.pay,Xs={tutorial:[],main:[],daily:o.daily},Yi=u=>E.stats[u]||0;function os(){let u={tut:{done:!0},main:0,daily:E.daily};for(let _ of ld(u,Xs,Yi,Kc()))Me(_.q.coins),jt(`\u{1F4EE} \u59D4\u8A17\u5B8C\u6210\uFF1A${_.q.zh} +${_.q.coins} \u91D1\u5E63`);E.daily=u.daily}function Dn(u,_=1){E.stats[u]=Yi(u)+_,os()}function yi(u,_,L,B){y(L),he(`town:life:${u}:${_}`,"town:life:"+u,"town-life",L,B)}let ri=()=>(os(),N("div",{class:"quests"},N("h3",{},"\u{1F4EE} \u4ECA\u65E5\u93AE\u6C11\u59D4\u8A17\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),E.daily.picks.map(u=>{let _=o.daily.find(B=>B.id===u),L=E.daily.done.includes(u);return N("div",{class:"quest"+(L?" done":"")},N("b",{},(L?"\u2713 ":"")+_.zh),N("small",{class:"en"},_.en),N("small",{},L?"\u5B8C\u6210\u4E86\uFF01":`${cd(E,Xs,Yi,u)} / ${_.need}\u30FB\u734E\u52F5 ${_.coins} \u91D1\u5E63`))})));function as(u,_,L,B){let Q=N("div",{class:"tray"}),J=Object.fromEntries(u.map(ft=>[ft.id,ft])),ut=()=>{Q.innerHTML="";let ft=Object.keys(_).filter(Et=>_[Et]>0);Q.append(N("b",{},L+"\uFF1A"),...ft.length?ft.map(Et=>N("button",{class:"chip","data-id":Et,onclick:()=>{_[Et]--,ut(),B&&B()}},`${J[Et].icon} ${J[Et].label} \xD7${_[Et]}`)):[N("span",{class:"muted small"},"\u9084\u662F\u7A7A\u7684")])};return ut(),[N("div",{class:"cards items"},u.map(ft=>N("button",{class:"card item","data-id":ft.id,onclick:()=>{_[ft.id]=(_[ft.id]||0)+1,ut(),rn("pickup"),B&&B()}},N("span",{class:"ico"},ft.icon),N("span",{class:"en"},ft.label)))),Q]}let bn=o.grocery,$i=Object.fromEntries(bn.items.map(u=>[u.id,u])),Zi=u=>N("div",{class:"glist"},u.lines.map(_=>N("div",{class:"npc-line"},N("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u884C",onclick:()=>G(_.en)},"\u{1F50A}"),N("b",{class:"en"},_.en),b.zh?N("small",{class:"muted"},"\u3000"+_.zh):null)));function qs(){b.list=td(bn),b.basket={},Tt(),vi(!0)}function vi(u){let _=b.list;_&&(O("\u{1F9FA} \u55AC\u723A\u723A\u7684\u8CFC\u7269\u6E05\u55AE",...u?q(bn.intro,bn.introZh,b.zh):[],Zi(_),N("p",{class:"muted small"},"\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\uFF0C\u7167\u6E05\u55AE\u628A\u6771\u897F\u653E\u9032\u7C43\u5B50\u3001\u7D50\u5E33\u3002\u6578\u91CF\u8981\u525B\u525B\u597D\u5594\uFF01"),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u51FA\u767C\uFF01"),N("button",{class:"btn ghost",onclick:()=>{b.list=null,Tt(),Ht(),jt("\u9019\u6B21\u5148\u4E0D\u8CB7\u4E86")}},"\u9019\u6B21\u4E0D\u8CB7\u4E86"))),b.overlay="task",G(u?bn.intro+" "+_.en:_.en))}function Ys(){let u=b.list;if(!u)return;let _=b.basket=b.basket||{},L=Zi(u),B=N("button",{class:"btn ghost small",onclick:()=>{L.classList.toggle("listen"),B.textContent=L.classList.contains("listen")?"\u{1F440} \u770B\u6587\u5B57":"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09"}},"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09");O("\u{1F9FA} \u7167\u6E05\u55AE\u62FF\u6771\u897F",L,N("div",{class:"row"},N("button",{class:"btn ghost small",onclick:()=>G(u.en)},"\u{1F50A} \u807D\u6574\u5F35\u6E05\u55AE"),B),...as(u.shelf.map(Q=>$i[Q]),_,"\u7C43\u5B50"),N("div",{class:"row"},N("button",{class:"btn big",onclick:Gr},"\u{1F9FE} \u7D50\u5E33"))),b.overlay="task"}function Gr(){let u=b.list,_=ed(u.lines,b.basket||{}),L=_.results.filter(J=>J.ok).length,B=L===u.lines.length&&!_.extra.length;_.results.forEach(J=>yi("shop",J.id,J.ok,`${J.got} ${J.id}`));let Q=L*un.perQ+(B?un.allRight:0);Me(Q),b.list=null,b.basket=null,Tt(),Dn("shop"),Ue(),rn(B?"coin":"pickup"),O("\u{1F9FE} \u7D50\u5E33",..._.results.map((J,ut)=>N("p",{},`${J.ok?"\u2705":"\u274C"} ${$i[J.id].icon} `,N("b",{class:"en"},u.lines[ut].en),J.ok?"":`\uFF08\u7C43\u5B50\u88E1\u6709 ${J.got} \u500B\uFF09`)),_.extra.length?N("p",{class:"muted"},"\u6E05\u55AE\u4E0A\u6C92\u6709\u7684\uFF1A"+_.extra.map(J=>$i[J].icon+" "+$i[J].label).join("\u3001")+"\uFF08\u4E0B\u6B21\u53EA\u62FF\u6E05\u55AE\u4E0A\u7684\uFF09"):null,...B?q(bn.thanks,bn.thanksZh,b.zh):[N("p",{},`\u6E05\u55AE\u4E0A ${u.lines.length} \u6A23\uFF0C\u5C0D\u4E86 ${L} \u6A23\u3002\u518D\u5E6B\u55AC\u723A\u723A\u8CB7\u4E00\u6B21\u5427\uFF01`)],N("p",{class:"big"},`+${Q} \u91D1\u5E63`),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u597D"))),b.overlay="task",B&&G(bn.thanks)}let wn=o.waiter;function $s(){b.waiter={orders:nd(wn),i:-1,right:0},Zs()}function Zs(){let u=b.waiter;if(b.overlay="task",u.i<0){O("\u{1F37D}\uFE0F \u9910\u5EF3\u670D\u52D9\u751F",...q(wn.intro,wn.introZh,b.zh),N("div",{class:"row"},N("button",{class:"btn big",onclick:()=>{u.i=0,Zs()}},"\u958B\u59CB"))),G(wn.intro),b.overlay="task";return}if(u.i>=u.orders.length){let ut=u.right===u.orders.length,ft=ut?un.allRight:0;Me(ft),Dn("waiter"),Ue(),O("\u{1F37D}\uFE0F \u4E0B\u73ED\u4E86",...ut?q(wn.thanks,wn.thanksZh,b.zh):[],N("p",{class:"big"},`\u9001\u5C0D ${u.right} / ${u.orders.length} \u4F4D\u5BA2\u4EBA${ft?`\uFF0C\u5168\u5C0D +${ft} \u91D1\u5E63`:""}`),N("div",{class:"row"},N("button",{class:"btn big",onclick:$s},"\u518D\u505A\u4E00\u6B21"),N("button",{class:"btn ghost",onclick:Ht},"\u4F11\u606F"))),b.overlay="task",ut&&G(wn.thanks);return}let _=u.orders[u.i],L={},B=N("div",{class:"fb"}),Q=`${_.who}: "${_.en}"`,J=N("button",{class:"btn big",onclick:()=>{if(J.disabled)return;J.disabled=!0;let ut=id(_.want,L),ft=Object.keys(_.want).map(Et=>`${wn.menu.find(Dt=>Dt.id===Et).icon} \xD7${_.want[Et]}`).join(" \uFF0B ");yi("waiter",Object.keys(_.want).join("+"),ut,Object.keys(L).filter(Et=>L[Et]>0).map(Et=>Et+"x"+L[Et]).join(",")),ut&&(u.right++,Me(un.perQ),Dn("served")),rn(ut?"pickup":"hurt"),B.className="fb "+(ut?"ok":"bad"),B.append(N("div",{},ut?`\u9001\u5C0D\u4E86\uFF01 +${un.perQ} \u91D1\u5E63`:"\u9001\u932F\u4E86\uFF01\u5BA2\u4EBA\u9EDE\u7684\u662F\uFF1A"+ft),N("button",{class:"btn",onclick:()=>{u.i++,Zs()}},u.i+1>=u.orders.length?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u4F4D\u5BA2\u4EBA"))}},"\u{1F6CE}\uFE0F \u9001\u9910");O(`\u{1F37D}\uFE0F \u7B2C ${u.i+1} / ${u.orders.length} \u4F4D\u5BA2\u4EBA`,...q(Q,null,!1),...as(wn.menu,L,"\u6258\u76E4"),N("div",{class:"row"},J),B),b.overlay="task",G(_.en)}let Pe=o.lost,Re=(()=>{let u=$c(el({skin:0,hair:3,hairColor:2,top:1,bottom:2,hat:1})),_=Se("\u{1F9D2} "+Pe.kid.en);_.position.y=2.75,_.scale.multiplyScalar(1.5),u.add(_),u.scale.setScalar(.7),I.add(u);let[L,B]=Pe.kid.at;return{n:{id:"lostkid",en:Pe.kid.en,zh:Pe.kid.zh},spot:{x:L,z:B},p:{x:L,y:c+1,z:B},g:u,yaw:Math.PI,sp:0}})(),w=u=>d.homes.find(_=>_.id===u);function z(){if(b.lost){Y();return}let u=b.lostQ=sd(d.homes,Pe.kid.at[0],Pe);O(`\u{1F9D2} ${Pe.kid.en}\u30FB${Pe.kid.zh}`,...q(Pe.hello,Pe.helloZh,b.zh),...q(u.en,u.zh,b.zh),N("p",{class:"big"},Pe.ask+(b.zh?"\u3000"+Pe.askZh:"")),N("div",{class:"cards"},u.cards.map(_=>N("button",{class:"card en","data-id":_,onclick:L=>K(_,L.currentTarget)},w(_).en)))),b.overlay="task",G(Pe.hello+" "+u.en)}function K(u,_){let L=b.lostQ;if(!L||L.picked)return;L.picked=!0;let B=u===L.to;yi("lost",L.to+":pick",B,u),B&&Me(un.perQ),_.classList.add(B?"ok":"bad"),rn(B?"pickup":"hurt"),Yt.ov.querySelector(".panel").append(N("div",{class:"fb "+(B?"ok":"bad")},N("div",{},B?`\u7B54\u5C0D\u4E86\uFF01 +${un.perQ} \u91D1\u5E63`:`\u5DEE\u4E00\u9EDE\uFF01${Pe.kid.en} \u4F4F\u5728 `,B?null:N("b",{class:"en"},w(L.to).en)),...q(Pe.walk,Pe.walkZh,b.zh),N("button",{class:"btn big",onclick:()=>{b.lost={to:L.to,tries:0,right:B,en:L.en,zh:L.zh},b.lostQ=null,Tt(),Ht()}},"\u5E36\u4ED6\u56DE\u5BB6")))}function Y(){let u=b.lost;u&&(O(`\u{1F9D2} \u5E36 ${Pe.kid.en} \u56DE\u5BB6`,...q(u.en,u.zh,b.zh),N("p",{class:"muted small"},`${Pe.kid.en} \u8DDF\u5728\u4F60\u5F8C\u9762\u3002\u8D70\u5230\u4ED6\u5BB6\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\u3002`),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u597D"),N("button",{class:"btn ghost",onclick:()=>{b.lost=null,Tt(),Ht()}},"\u5148\u4E0D\u5E36\u4E86"))),b.overlay="task",G(u.en))}function $(){let u=b.lost;if(u)for(let _ of ht){if(!_.b.isHome)continue;if(Math.hypot(b.p.x-_.f[0],b.p.z-_.f[1])>3.2){b.lostWrong===_.id&&(b.lostWrong=null);continue}if(_.id!==u.to){b.lostWrong!==_.id&&(b.lostWrong=_.id,u.tries++,jt(`${Pe.kid.en}\uFF1A\u300C${Pe.wrong}\u300D${Pe.wrongZh}`));continue}let L=u.tries===0,B=(L?un.perQ:0)+(L&&u.right?un.allRight:0);b.lost=null,Tt(),yi("lost",u.to+":walk",L,u.to),Me(B),Dn("lost"),Ue(),O(`\u{1F3E0} ${_.b.en}`,...q(Pe.home,Pe.homeZh,b.zh),N("p",{class:"big"},L?`\u4E00\u6B21\u5C31\u8D70\u5C0D\u4E86\uFF01 +${B} \u91D1\u5E63`:"\u627E\u5230\u4E86\uFF01\u4E0B\u6B21\u8A66\u8A66\u770B\u4E00\u6B21\u5C31\u8D70\u5230\u5C0D\u7684\u9580\u53E3\u3002"),N("div",{class:"row"},N("button",{class:"btn big",onclick:Ht},"\u63B0\u63B0"))),b.overlay="task",G(Pe.home);return}}let bt=(u,_)=>{for(let L=0;L<=4;L++)for(let B=-L;B<=L;B++)for(let Q=-L;Q<=L;Q++){let J=Math.floor(u)+B,ut=Math.floor(_)+Q;if(!at(J,ut)&&!l.flat.solid[X.get(J,c+1,ut)])return[J+.5,ut+.5]}return null};function Pt(u,_,L){let B=b.p.x+Math.sin(b.yaw)*1.4+Math.cos(b.yaw)*L,Q=b.p.z+Math.cos(b.yaw)*1.4-Math.sin(b.yaw)*L,J=B-u.p.x,ut=Q-u.p.z,ft=Math.hypot(J,ut),Et=0;if(ft>14){let be=bt(B,Q);be&&(u.p.x=be[0],u.p.z=be[1])}else if(ft>.3){Et=Math.min(9,ft*2.5);let be=Math.min(ft,Et*_),qe=u.p.x+J/ft*be,Un=u.p.z+ut/ft*be;at(Math.floor(qe),Math.floor(Un))?Et=0:(u.p.x=qe,u.p.z=Un),u.yaw=Math.atan2(-J,-ut)}let Dt=Math.floor(b.p.y)+1,kt=Math.floor(u.p.x),ue=Math.floor(u.p.z);for(;Dt>c-3&&!l.flat.solid[X.get(kt,Dt-1,ue)];)Dt--;return u.p.y+=(Dt-u.p.y)*Math.min(1,_*10),Et}function Mt(u,_,L){b.lost&&!b.overlay?Re.sp=Pt(Re,u,-.7):!b.lost&&!b.overlay&&Math.hypot(Re.p.x-Re.spot.x,Re.p.z-Re.spot.z)>.5?(Re.p={x:Re.spot.x,y:c+1,z:Re.spot.z},Re.yaw=Math.PI,Re.sp=0):b.overlay&&(Re.sp=0),Re.g.position.set(Re.p.x,Re.p.y,Re.p.z),Re.g.rotation.y=Re.yaw,Zc(Re.g,Re.sp,_,L)}let It=null,Ot=()=>rd(It,et&&et.patterns);function Zt(u){let _=Ot();if(!_.length){jt("\u8AB2\u672C\u9084\u6C92\u8F09\u597D\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86\u4E0A\u8AB2");return}let L=_.find(B=>B.id===(u||od(_,Ut("ke_log",[]),Kc())))||_[0];b.cls={u:L,U:_,qs:ad(L,o.class.n,Math.random,o.class),i:-1,right:0},ne()}function ne(){let u=b.cls,_=o.class,L=Yt.ov;L.innerHTML="",L.hidden=!1,b.overlay="task";let B=N("div",{class:"panel talk"},N("div",{class:"p-head"},N("h2",{},`\u{1F4D8} \u82F1\u6587\u8AB2\uFF1A${u.u.title}`,N("small",{},u.i>=0&&u.i<u.qs.length?`\u3000\u7B2C ${u.i+1} / ${u.qs.length} \u984C`:"")),N("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ht},"\xD7")));if(L.append(B),u.i<0){let J=u.U[(u.U.indexOf(u.u)+1)%u.U.length];B.append(...q(_.intro.replace("{unit}",u.u.title),_.introZh.replace("{unit}",u.u.title),b.zh),N("div",{class:"row"},N("button",{class:"btn big",onclick:()=>{u.i=0,ne()}},"\u958B\u59CB\u4E0A\u8AB2"),u.U.length>1?N("button",{class:"btn ghost",onclick:()=>Zt(J.id)},"\u63DB\u4E00\u8AB2\uFF1A"+J.title):null)),G(_.intro.replace("{unit}",u.u.title));return}if(u.i<u.qs.length){let J=u.qs[u.i];V(B,J,ut=>{let ft=J.cards[ut],Et=!!(ft&&ft.ok),Dt=J.cards.find(kt=>kt.ok).t;return yi("class",`${u.u.id}:${J.kind}:${J.key}`,Et,ft&&ft.t),Et&&u.right++,u.i++,G(J.full||Dt),{ok:Et,answer:J.full||Dt,coins:Et?un.perQ:0,last:u.i>=u.qs.length}},ne);return}let Q=u.right===u.qs.length;Q&&Me(un.allRight),Dn("class"),Ue(),B.append(...q(_.thanks,_.thanksZh,b.zh),N("p",{class:"big"},`\u7B54\u5C0D ${u.right} / ${u.qs.length} \u984C${Q?`\uFF0C\u5168\u5C0D +${un.allRight} \u91D1\u5E63`:""}`),N("div",{class:"row"},N("button",{class:"btn big",onclick:()=>Zt(u.u.id)},"\u518D\u4E0A\u4E00\u6B21"),N("button",{class:"btn ghost",onclick:Ht},"\u4E0B\u8AB2"))),G(_.thanks)}pt.push(u=>u.n.id===bn.npc?N("button",{class:"card",onclick:()=>b.list?vi(!1):qs()},b.list?"\u{1F9FA} \u518D\u770B\u4E00\u6B21\u8CFC\u7269\u6E05\u55AE":"\u{1F9FA} \u5E6B\u55AC\u723A\u723A\u8CB7\u6771\u897F\uFF08\u8CFC\u7269\u6E05\u55AE\uFF09"):null),pt.push(u=>u.n.id==="shopkeeper"&&b.list?N("button",{class:"card",onclick:Ys},"\u{1F9FA} \u7167\u55AC\u723A\u723A\u7684\u6E05\u55AE\u62FF\u6771\u897F\u3001\u7D50\u5E33"):null),pt.push(u=>u.n.id===wn.npc?N("button",{class:"card",onclick:$s},"\u{1F37D}\uFE0F \u7576\u670D\u52D9\u751F\uFF08\u9001\u9910\u7D66 3 \u4F4D\u5BA2\u4EBA\uFF09"):null),pt.push(u=>u.n.id===o.class.npc?N("button",{class:"card",onclick:()=>Zt()},"\u{1F4D8} \u4E0A\u4E00\u5802\u82F1\u6587\u8AB2\uFF08\u8AB2\u672C\uFF09"):null);function Lt(){O("\u5DE5\u4F5C",ri(),N("p",{class:"muted"},`\u5230\u5DE5\u4F5C\u5730\u9EDE\u627E\u5C45\u6C11\u8003\u57F7\u7167\uFF0810 \u984C\u82F1\u6587\uFF0C\u7B54\u5C0D ${8} \u984C\u901A\u904E\uFF09\uFF0C\u901A\u904E\u5C31\u80FD\u7A7F\u5236\u670D\u3001\u4E0A\u73ED\u8CFA\u91D1\u5E63\u3002\u751F\u6D3B\u4EFB\u52D9\uFF08\u627E\u55AC\u723A\u723A\u3001\u6E6F\u59C6\u4E3B\u5EDA\u3001\u6797\u8001\u5E2B\u3001\u8FF7\u8DEF\u7684\u5C0F\u9EA5\u514B\uFF09\u4E0D\u7528\u57F7\u7167\u3002`),b.go?N("div",{class:"row"},N("button",{class:"btn",onclick:Bt},"\u770B\u73FE\u5728\u7684\u4EFB\u52D9")):null,N("div",{class:"shop"},Object.keys(m).map(u=>{let _=m[u],L=t.buildings.find(J=>J.id===_.place),B=t.npcs.find(J=>J.id===_.npc),Q=p.lic[u];return N("div",{class:"offer"},N("div",{class:"of-t"},N("b",{},`${_.zh} ${_.en}`),N("small",{},Q?`\u2713 \u6709\u57F7\u7167\u30FB\u4E0A\u73ED ${p.done[u]||0} \u6B21`:`\u5230${L?L.zh:""}\u627E${B?B.zh:""}\u8003\u8A66`)),Q?N("button",{class:"btn small",onclick:()=>{p.wear=p.wear===u?null:u,ee(),Ue(),Lt()}},p.wear===u?"\u812B\u4E0B\u5236\u670D":"\u7A7F\u4E0A\u5236\u670D"):null)}))),b.overlay="panel"}let xe=D.filter(u=>u.reward.kind==="furniture").map(u=>u.reward.id),De=t.furniture.slice(),Ee=()=>{for(let u of xe)C.has(u)&&!De.includes(u)&&De.push(u)};Ee();function me(){Yt.hotbar.innerHTML="",Yt.hotbar.hidden=!b.furn,b.furn&&(De.forEach((u,_)=>Yt.hotbar.append(N("button",{class:"slot"+(_===b.furnSel?" on":""),title:l.name(u),onpointerdown:L=>{L.stopPropagation(),b.furnSel=_,me()}},N("span",{class:"fname"},l.name(u))))),Yt.hotbar.append(N("button",{class:"slot rot",onpointerdown:u=>{u.stopPropagation(),b.furnRot=(b.furnRot+1)%4,jt("\u6905\u5B50\u65B9\u5411\uFF1A"+["\u5317","\u6771","\u5357","\u897F"][b.furnRot])}},"\u8F49\u5411")))}function ze(){let u=At(),_=N("div",{class:"shop"},d.homes.map((B,Q)=>N("div",{class:"offer"},N("div",{class:"of-t"},N("b",{},`${Q+1} \u865F\u623F\u5B50`),N("small",{},x.id===B.id?"\u9019\u662F\u4F60\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F")),x.id===B.id?N("button",{class:"btn small",onclick:()=>{Xe(),Ht()}},"\u56DE\u5BB6"):N("button",{class:"btn small",onclick:()=>Ct(B.id)},x.id?"\u642C\u904E\u53BB":"\u4F4F\u9019\u9593")))),L=(B,Q)=>N("div",{class:"swatches"},B.map(J=>N("button",{class:"sw",title:l.name(J),style:"background:"+l.get(J).colors.top,onclick:()=>Q(J)})));O("\u6211\u7684\u5BB6",_,u?N("div",{},N("div",{class:"row"},N("button",{class:"btn",onclick:()=>{b.furn=!b.furn,me(),Ht(),jt(b.furn?"\u5BB6\u5177\u6A21\u5F0F\uFF1A\u9EDE\u5730\u677F\u653E\u3001\u9577\u6309\uFF08\u6216\u5DE6\u9375\uFF09\u62FF\u6389\uFF0C\u53EA\u6709\u5BB6\u88E1\u53EF\u4EE5":"\u5BB6\u5177\u6A21\u5F0F\u95DC\u6389\u4E86")}},b.furn?"\u95DC\u6389\u5BB6\u5177\u6A21\u5F0F":"\u5BB6\u5177\u6A21\u5F0F\uFF08\u653E\u5BB6\u5177\uFF09"),N("button",{class:"btn ghost",onclick:()=>{x.locked=!x.locked,jt(x.locked?"\u9580\u9396\u4E0A\u4E86":"\u9580\u6253\u958B\u9396\u4E86"),ze()}},x.locked?"\u9580\uFF1A\u9396\u8457\uFF08\u9EDE\u4E00\u4E0B\u89E3\u9396\uFF09":"\u9580\uFF1A\u6C92\u9396\uFF08\u9EDE\u4E00\u4E0B\u4E0A\u9396\uFF09")),N("h3",{},"\u7246\u58C1\u984F\u8272"),L(t.wallColors,B=>ae("wall",B)),N("h3",{},"\u5730\u677F"),L(t.floorColors,B=>ae("floor",B)),fd()):N("p",{class:"muted"},"\u5148\u9078\u4E00\u9593\u623F\u5B50\u4F4F\u4E0B\u4F86\uFF08\u514D\u8CBB\uFF09\u3002"))}function Ct(u){x.id=u,it(),Xe(),Ht(),jt("\u6B61\u8FCE\u56DE\u5BB6\uFF01\u6253\u958B\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u653E\u5BB6\u5177\u3001\u63DB\u984F\u8272"),Ue()}function Xe(){let u=At();u&&(b.p={x:u.x+u.w/2,y:c+1,z:u.z-1.5},b.v={x:0,y:0,z:0},b.yaw=Math.PI)}function ae(u,_){let L=At();if(L){if(Math.hypot(b.p.x-(L.x+L.w/2),b.p.z-(L.z+L.d/2))>30){jt("\u5148\u56DE\u5BB6\u518D\u63DB\u984F\u8272");return}if(u==="wall"){let B=["glass","door","door_open"];for(let[Q,J,ut]of Tf(L,c,(ft,Et,Dt)=>{let kt=X.get(ft,Et,Dt);return kt&&!B.includes(l.get(kt).id)}))X.set(Q,J,ut,l.num(_));x.wall=_}else for(let B=L.x+1;B<L.x+L.w-1;B++)for(let Q=L.z+1;Q<L.z+L.d-1;Q++){let J=_.startsWith("carpet");X.set(B,c,Q,l.num(J?"planks":_));let ut=l.get(X.get(B,c+1,Q));J&&ut&&ut.n===0?X.set(B,c+1,Q,l.num(_)):!J&&ut&&ut.id.startsWith("carpet")&&X.set(B,c+1,Q,0)}u==="floor"&&(x.floor=_),jt("\u63DB\u597D\u4E86\uFF01"),Ue()}}let on={bike:"\u{1F6B2}",scooter:"\u{1F6F4}",boat:"\u{1F6F6}",car:"\u{1F697}",bus:"\u{1F68C}"};function pn(){let u=Le("#b-bike");u&&(u.textContent=Object.keys(ge).some(_=>C.has(_))?"\u4EA4\u901A":"\u8173\u8E0F\u8ECA")}function mn(u){let _=te(),L=Math.floor(b.p.x),B=Math.floor(b.p.z);if(u&&ge[u].big&&j.has(L+","+B))return jt("\u5728\u5C4B\u5B50\u88E1\u4E0D\u80FD\u958B\u8ECA\uFF0C\u5148\u8D70\u5230\u5916\u9762"),!1;if(u==="boat"){let Q=null;for(let J=-2;J<=2&&!Q;J++)for(let ut=-2;ut<=2&&!Q;ut++)at(L+J,B+ut)&&(Q=[L+J,B+ut]);if(!Q)return jt("\u5C0F\u8239\u8981\u5728\u516C\u5712\u7684\u6C60\u5858\u908A\u624D\u80FD\u5750"),!1;b.p={x:Q[0]+.5,y:c+1,z:Q[1]+.5}}if(_==="boat"&&u!=="boat"){let Q=null;for(let J=1;J<=4&&!Q;J++)for(let ut=-J;ut<=J&&!Q;ut++)for(let ft=-J;ft<=J&&!Q;ft++){let Et=L+ut,Dt=B+ft;!at(Et,Dt)&&!l.flat.solid[X.get(Et,c+1,Dt)]&&!l.flat.solid[X.get(Et,c+2,Dt)]&&(Q=[Et,Dt])}Q&&(b.p={x:Q[0]+.5,y:c+1,z:Q[1]+.5})}return b.ride=u||null,b.bike=!!u,b.v={x:0,y:0,z:0},jt(u?`${on[u]||""} \u5750\u4E0A${ge[u].zh.replace(/（.*）/,"")}\u4E86\uFF01`:"\u4E0B\u8ECA\u4E86\uFF0C\u7528\u8D70\u7684"),!0}function Mi(){let u=["bike"].concat(Object.keys(ge).filter(_=>C.has(_)));O("\u4EA4\u901A\u5DE5\u5177",N("div",{class:"cards"},N("button",{class:"card",onclick:()=>{mn(null),Ht()}},"\u{1F6B6} \u8D70\u8DEF"),u.map(_=>N("button",{class:"card"+(te()===_?" ok":""),onclick:()=>{mn(_)&&Ht()}},`${on[_]||""} ${ge[_].zh}`))),N("p",{class:"muted small"},"\u6C7D\u8ECA\u3001\u516C\u8ECA\u958B\u4E0D\u9032\u5C4B\u5B50\uFF1B\u5C0F\u8239\u53EA\u80FD\u5728\u516C\u5712\u7684\u6C60\u5858\u3002")),b.overlay="panel"}let Gt=null,Ie={dog:"\u5C0F\u72D7",cat:"\u5C0F\u8C93",rabbit:"\u5154\u5B50",dalmatian:"\u6591\u9EDE\u72D7"},Nn=()=>Object.keys(Ie).filter(u=>C.has(u));function Se(u){let _=document.createElement("canvas");_.width=256,_.height=56;let L=_.getContext("2d");L.fillStyle="rgba(239,235,221,.92)",L.fillRect(4,4,248,48),L.fillStyle="#26302A",L.textAlign="center",L.font="bold 30px sans-serif",L.fillText(u,128,40);let B=new Cn(_);B.colorSpace=He;let Q=new Di(new pi({map:B,depthWrite:!1}));return Q.scale.set(1.3,.28,1),Q.position.y=1,Q}function fn(){Gt&&(I.remove(Gt.g),Gt=null);let u=A.active;if(!u||!C.has(u)){A.active=null;return}let _=$f(u);_.add(Se(A.names[u]||Ie[u])),I.add(_),Gt={id:u,g:_,p:{x:b.p.x+1,y:b.p.y,z:b.p.z+1},sp:0}}function Si(u,_,L){let B=Le("#b-pet"),Q=!Nn().length;if(B.hidden!==Q&&(B.hidden=Q),!Gt)return;let J=b.p.x+Math.sin(b.yaw)*1.4+Math.cos(b.yaw)*.7,ut=b.p.z+Math.cos(b.yaw)*1.4-Math.sin(b.yaw)*.7,ft=J-Gt.p.x,Et=ut-Gt.p.z,Dt=Math.hypot(ft,Et);if(Dt>14)Gt.p.x=J,Gt.p.z=ut;else if(Dt>.3){let qe=Math.min(Dt,Math.min(9,Dt*2.5)*u);Gt.p.x+=ft/Dt*qe,Gt.p.z+=Et/Dt*qe,Gt.g.rotation.y=Math.atan2(-ft,-Et)}Gt.sp=Dt>.3?Math.min(9,Dt*2.5):0;let kt=Math.floor(b.p.y)+1,ue=Math.floor(Gt.p.x),be=Math.floor(Gt.p.z);for(;kt>c-3&&!l.flat.solid[X.get(ue,kt-1,be)]&&!at(ue,be);)kt--;at(ue,be)&&(kt=c+.9),Gt.p.y+=(kt-Gt.p.y)*Math.min(1,u*10),Gt.g.position.set(Gt.p.x,Gt.p.y,Gt.p.z),Zf(Gt.g,Gt.sp,_,L)}function ls(){O("\u6211\u7684\u5BF5\u7269",N("p",{class:"muted"},"\u5BF5\u7269\u6703\u8DDF\u8457\u4F60\u8D70\u3002\u540D\u5B57\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002"),N("div",{class:"shop"},Nn().map(u=>N("div",{class:"offer"},N("div",{class:"of-t"},N("b",{},Ie[u]),N("input",{class:"typein pet-name",type:"text",maxlength:12,value:A.names[u]||"",placeholder:"\u5E6B\u7260\u53D6\u540D\u5B57",onkeydown:_=>_.stopPropagation(),onchange:_=>{A.names[u]=Ff(_.target.value),_.target.value=A.names[u],A.active===u&&fn(),Ue()}})),N("button",{class:"btn small",onclick:()=>{A.active=A.active===u?null:u,fn(),Ue(),ls()}},A.active===u?"\u8B93\u7260\u5F85\u5728\u5BB6":"\u5E36\u7260\u51FA\u9580"))))),b.overlay="panel"}let sl=s.cats[0][0];function Hr(){let u=s.items.filter(_=>_.cat===sl);O("\u674E\u8001\u95C6\u7684\u5546\u5E97",N("div",{class:"row tabs"},s.cats.map(([_,L])=>N("button",{class:"btn small"+(_===sl?"":" ghost"),onclick:()=>{sl=_,Hr()}},L))),N("p",{class:"muted small"},`\u4F60\u6709 ${f.coins} \u91D1\u5E63\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u500B\u9322\u5305\uFF09\u3002`),N("div",{class:"shop"},u.map(_=>{let L=C.has(_.id);return N("div",{class:"offer"},N("div",{class:"of-t"},N("b",{},`${_.zh}`),N("small",{},L?"\u2713 \u5DF2\u7D93\u6709\u4E86":`${_.price} \u91D1\u5E63`)),L?null:N("button",{class:"btn small",onclick:()=>th(_.id)},"\u8CB7"))}))),b.overlay="shop"}async function th(u){let _=U[u];if(!_||b.buying)return!1;b.buying=!0;try{await Ue();let L=Za(await Vr.get("hw_coins")),B=Kf(L),Q=Uf(_,C,{coins:B.balance(),hasHome:!!x.id});return Q.ok?(await B.spend(_.price,"town:"+_.id)).ok?(C.add(_.id),await Vr.putMany({hw_coins:kc(L)}),f.coins=L.coins,Ae(),_.cat==="pet"&&!A.active&&(A.active=_.id,fn()),_.id==="floor2"&&(x.floors=2,it()),_.theme&&(x.theme=_.theme),await Ue(),pn(),rn("coin"),jt({ride:"\u8CB7\u5230\u4E86\uFF01\u6309\u300C\u4EA4\u901A\u300D\u5750\u4E0A\u53BB",pet:"\u8CB7\u5230\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\uFF0C\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",wear:"\u8CB7\u5230\u4E86\uFF01\u5230\u300C\u5916\u89C0\u300D\u7A7F\u4E0A",house:"\u8CB7\u5230\u4E86\uFF01\u56DE\u5BB6\u770B\u770B\uFF08\u5728\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u63DB\u6A23\u5F0F\uFF09"}[_.cat]),b.overlay==="shop"&&Hr(),!0):(jt("\u8CB7\u4E0D\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21"),!1):(jt(Q.reason==="coins"?`\u91D1\u5E63\u4E0D\u5920\uFF0C\u9084\u5DEE ${Q.short} \u679A\u3002\u53BB\u4E0A\u73ED\u6216\u7B54\u984C\u8CFA\u91D1\u5E63\u5427\uFF01`:Q.reason==="home"?"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50":"\u5DF2\u7D93\u6709\u4E86"),!1)}finally{b.buying=!1}}pt.push(u=>u.n.id==="shopkeeper"?N("button",{class:"card",onclick:Hr},"\u{1F6D2} \u8CB7\u6771\u897F\uFF08\u4EA4\u901A\u5DE5\u5177\u30FB\u5BF5\u7269\u30FB\u8863\u670D\u30FB\u623F\u5B50\uFF09"):null);let rl=()=>[x.id,x.floors||1,x.theme||"none"].join(":");function ol(){let u=lt();if(!u||x.built===rl()||![[u.x,u.z],[u.x+u.w-1,u.z],[u.x,u.z+u.d-1],[u.x+u.w-1,u.z+u.d-1]].every(([L,B])=>X.ready(L,B)))return;let _=0;for(let[L,B,Q,J]of Ef(u,c,{floors:x.floors,theme:x.theme,wall:x.wall})){let ut=J==="air"?0:l.num(J);X.get(L,B,Q)!==ut&&(X.set(L,B,Q,ut),_++)}x.built=rl(),_&&Ue()}let eh={none:"\u539F\u672C\u7684\u6A23\u5B50",tree:"\u6A39\u5C4B",lighthouse:"\u71C8\u5854",castle:"\u57CE\u5821"},fd=()=>{let u=["none"].concat(s.items.filter(_=>_.theme&&C.has(_.id)).map(_=>_.theme));return u.length<2&&x.floors!==2?N("p",{class:"muted small"},"\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u53EF\u4EE5\u8CB7\u4E8C\u6A13\u548C\u6A39\u5C4B\uFF0F\u71C8\u5854\uFF0F\u57CE\u5821\u6A23\u5F0F\u3002"):N("div",{},N("h3",{},"\u623F\u5B50\u6A23\u5F0F"+(x.floors===2?"\uFF08\u6709\u4E8C\u6A13\uFF0C\u5C4B\u88E1\u89D2\u843D\u6709\u68AF\u5B50\uFF09":"")),N("div",{class:"swatches"},u.map(_=>N("button",{class:"sw"+((x.theme||"none")===_?" on":""),onclick:()=>{x.theme=_,ol(),Ue(),ze(),jt("\u63DB\u6210"+eh[_])}},eh[_]))))};function Wr(){let u=(L,B,Q)=>N("div",{class:"av-row"},N("b",{},L),N("div",{class:"swatches"},qn[B].map((J,ut)=>Df(v,C,B,J)?null:N("button",{class:"sw"+(S[B]===ut?" on":""),style:typeof J=="string"&&J[0]==="#"?"background:"+J:"",onclick:()=>{S[B]=ut,ee(),Wr(),Ue()}},Q?Q(J):"")))),_={short:"\u77ED\u9AEE",long:"\u9577\u9AEE",bun:"\u5305\u982D",spiky:"\u523A\u523A",none:"\u5149\u982D",cap:"\u68D2\u7403\u5E3D",beanie:"\u6BDB\u5E3D",bow:"\u8774\u8776\u7D50",true:"\u6234",false:"\u4E0D\u6234",flower:"\u82B1\u5708",tophat:"\u7D33\u58EB\u5E3D",crown:"\u7687\u51A0",stripe:"\u689D\u7D0B",star:"\u661F\u661F",scarf:"\u570D\u5DFE",goldbadge:"\u91D1\u5FBD\u7AE0",backpack:"\u80CC\u5305",cape:"\u62AB\u98A8"};O("\u6211\u7684\u6A23\u5B50",u("\u819A\u8272","skin"),u("\u9AEE\u578B","hair",L=>_[L]),u("\u982D\u9AEE\u984F\u8272","hairColor"),u("\u4E0A\u8863","top",L=>L[0]==="#"?"":_[L]),u("\u8932\u5B50","bottom"),u("\u5E3D\u5B50","hat",L=>L==="none"?"\u4E0D\u6234":_[L]),u("\u773C\u93E1","glasses",L=>_[L]),u("\u914D\u4EF6","acc",L=>L==="none"?"\u4E0D\u6234":_[L]),N("p",{class:"muted small"},"\u5E3D\u5B50\u3001\u8863\u670D\u3001\u914D\u4EF6\u53EF\u4EE5\u5728\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u8CB7\u66F4\u591A\u3002"),N("p",{class:"muted"},"\u63DB\u597D\u5C31\u81EA\u52D5\u5B58\u8D77\u4F86\u3002"),N("div",{class:"row"},N("button",{class:"btn",onclick:Ht},"\u5B8C\u6210")))}function dd(){O("\u8A2D\u5B9A",N("label",{class:"set"},"\u97F3\u6A02",N("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:u=>Wc({music:+u.target.value,muted:!1})})),N("label",{class:"set"},"\u97F3\u6548",N("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:u=>Wc({sfx:+u.target.value,muted:!1})})),N("p",{},"\u91D1\u5E63\u8DDF\u300C\u65B9\u584A\u4E16\u754C\u300D\u662F\u540C\u4E00\u500B\u9322\u5305\u3002"),N("p",{},`\u79D8\u5BC6\u623F\u9593\uFF1A\u627E\u5230 ${pe()} / ${D.length} \u9593\uFF08\u7DDA\u7D22\u5728\u516C\u5712\u65C1\u908A\u7684\u516C\u544A\u6B04\uFF09`),N("p",{},N("a",{class:"home-link",href:"../../#s/game",onclick:()=>Ue()},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),N("p",{class:"muted small"},"\u7248\u672C "+Qc))}let oi=(u,_)=>{let L=Le(u);L&&(L.onclick=B=>{B.stopPropagation(),Qa(),_()})};oi("#b-av",Wr),oi("#b-home",ze),oi("#b-set",dd),oi("#b-job",Lt),oi("#b-pet",ls),Le("#task").onclick=u=>{u.stopPropagation(),!b.overlay&&(b.go?Bt():b.lost?Y():b.list&&vi(!1))},oi("#b-bike",()=>{if(!Object.keys(ge).some(u=>C.has(u))){mn(b.bike?null:"bike");return}Mi()}),oi("#b-view",()=>{b.view=b.view==="tp"?"fp":"tp"}),oi("#b-zh",()=>{b.zh=!b.zh,G_("kt_zh",b.zh?"on":"off"),Le("#b-zh").textContent=b.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC"}),Le("#b-zh").textContent=b.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC",oi("#b-snd",()=>{vf(),Le("#b-snd").textContent=tl()?"\u{1F507}":"\u{1F50A}"});let bi=new Z,nh=()=>{let u=Math.cos(b.pitch);return{x:-Math.sin(b.yaw)*u,y:Math.sin(b.pitch),z:-Math.cos(b.yaw)*u}},al=()=>({x:b.p.x,y:b.p.y+1.62+ve(),z:b.p.z}),pd=u=>l.flat.boxes[u]||(l.flat.shape[u]===4?[[0,0,0,1,.1,1]]:null);function md(u,_,L){return u==="screen"?(bi.set(_/innerWidth*2-1,-(L/innerHeight)*2+1,.5).unproject(k).sub(k.position).normalize(),{o:{x:k.position.x,y:k.position.y,z:k.position.z},d:{x:bi.x,y:bi.y,z:bi.z}}):b.view==="tp"?(k.getWorldDirection(bi),{o:{x:k.position.x,y:k.position.y,z:k.position.z},d:{x:bi.x,y:bi.y,z:bi.z}}):{o:al(),d:nh()}}function gd(u,_,L){let{o:B,d:Q}=md(u,_,L),J=b.view==="tp"?9:5,ut=Fc(B,Q,J,(kt,ue,be)=>X.get(kt,ue,be),kt=>kt&&!l.flat.liquid[kt],pd),ft=null,Et=ut?ut.dist+.3:J;for(let kt of _e){let ue=$a(B,Q,kt.p,.8,1.9);ue!=null&&ue<Et&&(Et=ue,ft=kt)}{let kt=$a(B,Q,Re.p,.7,1.4);kt!=null&&kt<Et&&(Et=kt,ft=Re)}let Dt=null;for(let kt of oe){let ue=$a(B,Q,kt.p,.7,.7);ue!=null&&ue<Et&&(Et=ue,Dt=kt,ft=null)}return ut&&(ut.at={x:B.x+Q.x*ut.dist,y:B.y+Q.y*ut.dist,z:B.z+Q.z*ut.dist}),{npc:ft,blk:Dt?null:ut,note:Dt}}function Js(u,_,L,B){if(b.overlay)return;let{npc:Q,blk:J,note:ut}=gd(u,_,L);if(ut&&!B){hn(ut);return}if(Q&&!B){Q===Re?z():xt(Q);return}if(!J)return;let ft=l.get(J.n),Et=At();if(!b.furn&&ft&&ft.interact==="door"){xd(J);return}if(!b.furn&&ft&&ft.interact==="riddle"){Sn(J);return}if(!b.furn&&ft&&ft.interact==="treasure"){il(J);return}if(b.furn){let Dt=x.floors===2?kr(lt(),c,2).slab:-1,kt=(cs,js,qr)=>js!==Dt&&Af(Et,cs,js,qr,c);if(B){kt(J.x,J.y,J.z)?(X.set(J.x,J.y,J.z,0),rn("break","wood")):jt("\u53EA\u6709\u81EA\u5DF1\u5BB6\u88E1\u9762\u53EF\u4EE5\u62FF\u6389\u6771\u897F");return}let ue=J.x+J.face[0],be=J.y+J.face[1],qe=J.z+J.face[2];if(!kt(ue,be,qe)){jt(Et?"\u5BB6\u5177\u53EA\u80FD\u653E\u5728\u81EA\u5DF1\u5BB6\u88E1\u9762":"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50");return}if(X.get(ue,be,qe)||Math.abs(ue+.5-b.p.x)<.8&&Math.abs(qe+.5-b.p.z)<.8&&be>=Math.floor(b.p.y)&&be<=Math.floor(b.p.y)+1)return;let Un=De[b.furnSel];l.get(Un).place==="stairs"&&(Un+=["","_e","_s","_w"][b.furnRot]),X.set(ue,be,qe,l.num(Un)),rn("place","wood");return}B&&jt("\u9019\u88E1\u662F\u5C0F\u93AE\u7684\u516C\u5171\u7A7A\u9593\uFF0C\u4E0D\u80FD\u6316\u4E5F\u4E0D\u80FD\u84CB\u5594")}function xd(u){let _=At(),L=_&&u.x>=_.x&&u.x<_.x+_.w&&u.z>=_.z&&u.z<_.z+_.d;if(d.homes.find(ft=>u.x>=ft.x&&u.x<ft.x+ft.w&&u.z>=ft.z&&u.z<ft.z+ft.d)&&!L){jt("\u9019\u4E0D\u662F\u4F60\u7684\u5BB6\uFF0C\u6572\u6572\u9580\u5C31\u597D");return}if(L&&x.locked){jt("\u9580\u9396\u8457\uFF0C\u5230\u300C\u6211\u7684\u5BB6\u300D\u89E3\u9396");return}let Q=l.get(u.n),J=l.get(Q.openAs||Q.closeAs);if(!J)return;let ut=u.y;for(;l.get(X.get(u.x,ut-1,u.z)).interact==="door";)ut--;for(let ft=ut;l.get(X.get(u.x,ft,u.z)).interact==="door";ft++)X.set(u.x,ft,u.z,J.n);rn("door")}let ih=()=>{nl||!T.requestPointerLock||T.requestPointerLock()};addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let _=u.key.toLowerCase();if(_==="escape"&&b.overlay){Ht();return}b.overlay||(b.keys[_]=!0,u.code==="Space"&&(b.keys[" "]=!0,u.preventDefault()),_==="b"&&Le("#b-bike").click(),_==="v"&&Le("#b-view").click(),_==="r"&&(b.furnRot=(b.furnRot+1)%4),_>="1"&&_<="9"&&b.furn&&(b.furnSel=+_-1,me()))}),addEventListener("keyup",u=>{b.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(b.keys[" "]=!1)}),addEventListener("blur",()=>{b.keys={}}),T.addEventListener("mousedown",u=>{b.touch||b.overlay||document.pointerLockElement!==T&&(ih(),!nl)||(u.button===0&&Js("center",0,0,b.furn),u.button===2&&Js("center",0,0,!1))}),T.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===T&&(b.yaw-=u.movementX*.0024,b.pitch=Math.max(-1.4,Math.min(1.4,b.pitch-u.movementY*.0024)))});let Ks=new Map;T.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||b.overlay)return;if(b.touch=!0,u.preventDefault(),Qa(),u.clientX<innerWidth*.4&&u.clientY>innerHeight*.35&&!b.joy.active){b.joy={x:0,y:0,active:!0,ox:u.clientX,oy:u.clientY},Yt.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,Yt.joy.hidden=!1,Ks.set(u.pointerId,{kind:"joy"});return}let _={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1};_.timer=setTimeout(()=>{_.drag||(_.long=!0,Js("screen",_.x,_.y,!0))},450),Ks.set(u.pointerId,_)},{passive:!1}),addEventListener("pointermove",u=>{let _=Ks.get(u.pointerId);if(!_)return;if(_.kind==="joy"){let Q=u.clientX-b.joy.ox,J=u.clientY-b.joy.oy,ut=Math.hypot(Q,J);ut>55&&(Q*=55/ut,J*=55/ut),b.joy.x=Q/55,b.joy.y=J/55,Yt.knob.style.transform=`translate(${Q}px,${J}px)`;return}let L=u.clientX-_.x,B=u.clientY-_.y;_.x=u.clientX,_.y=u.clientY,!_.drag&&Math.hypot(_.x-_.sx,_.y-_.sy)>12&&(_.drag=!0,clearTimeout(_.timer)),_.drag&&(b.yaw-=L*.0055,b.pitch=Math.max(-1.4,Math.min(1.4,b.pitch-B*.0055)))});let sh=u=>{let _=Ks.get(u.pointerId);if(_){if(Ks.delete(u.pointerId),_.kind==="joy"){b.joy={x:0,y:0,active:!1},Yt.joy.hidden=!0;return}clearTimeout(_.timer),!_.drag&&!_.long&&performance.now()-_.t0<450&&Js("screen",_.x,_.y,!1)}};addEventListener("pointerup",sh),addEventListener("pointercancel",sh);let ll=Le("#b-jump");ll.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),b.jumpHeld=!0}),ll.addEventListener("pointerup",()=>{b.jumpHeld=!1}),ll.addEventListener("pointerleave",()=>{b.jumpHeld=!1}),document.addEventListener("touchmove",u=>{u.target.closest(".panel")||u.preventDefault()},{passive:!1}),["gesturestart","dblclick"].forEach(u=>document.addEventListener(u,_=>_.preventDefault(),{passive:!1})),document.body.classList.toggle("is-touch",b.touch),Le("#ui").classList.toggle("touch",b.touch);async function Ue(){let u={kt_player:{x:b.p.x,y:b.p.y,z:b.p.z,yaw:b.yaw,view:b.view},kt_home:x,kt_avatar:S,kt_jobs:p,kt_owned:[...C],kt_pets:A,kt_life:E};for(let _ of b.dirty){let L=g.get(_);L&&(u["kt_chunk:"+_]=Vc(L))}b.dirty.clear();try{if(await _i.putMany(u),b.pending){let _=b.pending;b.pending=0;let L=Za(await Vr.get("hw_coins"));Vs(L,_),await Vr.putMany({hw_coins:kc(L)}),f.coins=L.coins,Ae()}}catch(_){console.warn("save failed",_),!b.quotaWarned&&_&&_.name==="QuotaExceededError"&&(b.quotaWarned=!0,jt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF0C\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{b.started&&Ue()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&b.started&&Ue()}),addEventListener("pagehide",()=>{b.started&&Ue()}),Le("#go").onclick=()=>{Le("#start").hidden=!0,b.started=!0,et||yt(),Qa(),b.touch||ih(),h.av||setTimeout(Wr,300)},Ae(),me(),Tt(),pn(),fn(),os();let _d=new Kt("#EFEBDD"),yd=new Kt("#22302F"),vd=new Kt("#E6B48C"),rh=performance.now(),Xr=0,cl=0;function Md(u){let _=b.keys,L=(_.d?1:0)-(_.a?1:0),B=(_.w?1:0)-(_.s?1:0);b.joy.active&&(L=b.joy.x,B=-b.joy.y);let Q=Math.min(1,Math.hypot(L,B));if(Q>0){let ch=Math.hypot(L,B);L=L/ch*Q,B=B/ch*Q}let J=-Math.sin(b.yaw),ut=-Math.cos(b.yaw),ft=Math.cos(b.yaw),Et=-Math.sin(b.yaw),Dt=_.shift||b.joy.active&&Q>.92,kt=b.bike?ge[te()]:null,ue=kt?Dt?kt.run:kt.speed:Dt?6.2:4.3,be=(J*B+ft*L)*ue,qe=(ut*B+Et*L)*ue,Un=1-Math.exp(-(b.onGround?12:5)*u);b.v.x+=(be-b.v.x)*Un,b.v.z+=(qe-b.v.z)*Un;let cs=Math.floor(b.p.x),js=Math.floor(b.p.z),qr=!b.bike&&(l.flat.climb[X.get(cs,Math.floor(b.p.y),js)]||l.flat.climb[X.get(cs,Math.floor(b.p.y)+1,js)]);qr?b.v.y=_[" "]||b.jumpHeld||B>.1?3.2:Math.max(b.v.y-28*u,-1.5):(b.v.y-=28*u,b.v.y<-40&&(b.v.y=-40)),(_[" "]||b.jumpHeld)&&b.onGround&&!qr&&te()!=="boat"&&(b.v.y=8.6,b.onGround=!1);let Sd=Ju(b.p,b.v,u,zt,{canStep:!0,grounded:b.onGround});b.onGround=Sd.onGround;let Yr=t.bound+1;b.p.x=Math.max(-Yr,Math.min(Yr,b.p.x)),b.p.z=Math.max(-Yr,Math.min(Yr,b.p.z)),b.p.y<0&&(b.p={x:ct.x,y:ct.y,z:ct.z},b.v={x:0,y:0,z:0});let lh=Math.hypot(b.v.x,b.v.z);b.onGround&&lh>1&&(b.stepT=(b.stepT||0)+u*lh,b.stepT>(b.bike?4:1.8)&&te()!=="boat"&&(b.stepT=0,rn("step","stone")))}function oh(u){requestAnimationFrame(oh);let _=(u-rh)/1e3;rh=u;let L=Math.min(.05,_);b.frames.push(_*1e3),b.frames.length>4e3&&b.frames.shift(),X.update(b.p.x,b.p.z);let B=X.ready(b.p.x,b.p.z);b.started&&!b.overlay&&B&&(Md(L),(b.go||b.lost)&&(b.goT=(b.goT||0)+L)>.25&&(b.goT=0,Te(),$())),b.time=(b.time+L/z_)%1;let Q=Math.sin(b.time*Math.PI*2),J=Math.min(1,Math.max(0,(Q+.12)/.42)),ut=.35+.65*J;H.copy(yd).lerp(_d,J).lerp(vd,Math.max(0,1-Math.abs(Q)/.3)*.4*(J>.05?1:.4)),W.uniforms.uDay.value=J;let ft=H.getHexString();W.uniforms.uFog.value.set(parseInt(ft.slice(0,2),16)/255,parseInt(ft.slice(2,4),16)/255,parseInt(ft.slice(4,6),16)/255);let Et=J>.3?"calm":"night";Et!==b.scene&&(b.scene=Et,Mf(Et));for(let ue of _e)!ue.busy&&!b.overlay?If(ue,L):ue.v={x:0,y:0,z:0},xf(ue.g,ue,u/1e3);gf(ut),qt.position.set(b.p.x,b.p.y+ve(),b.p.z),qt.rotation.y=b.yaw,Zc(qt,b.bike?0:Math.hypot(b.v.x,b.v.z),u/1e3,ut),qt.visible=b.view==="tp";for(let ue in ie){let be=ie[ue],qe=ue===te();be.visible=qe,qe&&(be.position.set(b.p.x,b.p.y,b.p.z),be.rotation.y=b.yaw,Jf(be,ut))}Si(L,u/1e3,ut),Mt(L,u/1e3,ut),(b.houseT=(b.houseT||0)+L)>1&&(b.houseT=0,ol());let Dt=al(),kt=nh();if(b.view==="tp"){let ue=Fc(Dt,{x:-kt.x,y:-kt.y,z:-kt.z},4.5,(qe,Un,cs)=>X.get(qe,Un,cs),qe=>l.flat.opaque[qe]===1),be=ue?Math.max(.4,ue.dist-.25):4.5;k.position.set(Dt.x-kt.x*be,Dt.y-kt.y*be+.3,Dt.z-kt.z*be)}else k.position.set(Dt.x,Dt.y,Dt.z);k.rotation.set(b.pitch,b.yaw,0),R.render(I,k),Xr+=_,cl++,Xr>.5&&(Yt.dbg&&(Yt.dbg.textContent=`${Math.round(cl/Xr)} fps \xB7 \u5340\u584A ${X.stats.loaded} \xB7 ${b.p.x.toFixed(1)}, ${b.p.y.toFixed(1)}, ${b.p.z.toFixed(1)}`),Xr=0,cl=0),Yt.loading.hidden=B||!b.started}let ah=()=>{R.setSize(innerWidth,innerHeight,!1),k.aspect=innerWidth/innerHeight,k.updateProjectionMatrix()};addEventListener("resize",ah),ah(),window.KT={build:Qc,TEST:nl,G:b,reg:l,world:X,wallet:f,npcs:_e,terr:d,homeState:x,DLG:e,spawn:ct,start(){Le("#go").click()},ready:()=>X.ready(b.p.x,b.p.z),state:()=>({pos:{...b.p},coins:f.coins,loaded:X.stats.loaded,overlay:b.overlay}),talk:(u,_)=>_t(_e.find(L=>L.n.id===u),_),menu:u=>xt(_e.find(_=>_.n.id===u)),JOBS:m,jobs:p,places:ht,me:()=>qt,openShop:Hr,buy:th,owned:C,notes:oe,readNote:hn,secrets:D,chatReady:()=>!!et,setRide:mn,rideId:te,pets:A,pet:()=>Gt,openPets:ls,houseTick:ol,houseSig:rl,myHome:At,exam:mt,work:gt,ex:()=>b.exam,task:()=>b.task,go:()=>b.go,openJobs:Lt,pick:u=>{let _=Yt.ov.querySelectorAll(".cards .card")[u];_&&_.click()},dlg:()=>b.dlg,claim:Ct,goHome:Xe,paint:ae,close:Ht,save:Ue,avatar:()=>S,setAvatar(u){S=el(u),ee()},openAvatar:Wr,openHome:ze,lookAt(u,_,L){let B=al(),Q=u-B.x,J=_-B.y,ut=L-B.z;b.yaw=Math.atan2(-Q,-ut),b.pitch=Math.atan2(J,Math.hypot(Q,ut))},use(u){Js("center",0,0,!!u)},LIFE:o,life:E,lifeTick:os,giveList:qs,basketPanel:Ys,waiterStart:$s,waiter:()=>b.waiter,lostStart:z,lost:()=>b.lost,lostQ:()=>b.lostQ,kid:Re,classStart:Zt,cls:()=>b.cls,tbReady:()=>!!It,list:()=>b.list,perf(){return{frames:b.frames.slice()}},resetPerf(){b.frames.length=0}},requestAnimationFrame(oh)}H_().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
