(()=>{var Zh=0,Xl=1,Jh=2;var Mr=1,Kh=2,Is=3,Fi=0,hn=1,En=2,ni=0,Ls=1,ql=2,Yl=3,$l=4,jh=5;var es=100,Qh=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,ou=203,Zl=204,Jl=205,au=206,lu=207,cu=208,hu=209,uu=210,fu=211,du=212,pu=213,mu=214,vo=0,Mo=1,So=2,Ts=3,bo=4,wo=5,Ao=6,To=7,Kl=0,gu=1,xu=2,zn=0,jl=1,Ql=2,tc=3,ec=4,nc=5,ic=6,sc=7;var rc=300,Oi=301,ns=302,ta=303,ea=304,Sr=306,Eo=1e3,Kn=1001,Co=1002,Je=1003,_u=1004;var br=1005;var He=1006,na=1007;var ki=1008;var Mn=1009,oc=1010,ac=1011,Ds=1012,ia=1013,Vn=1014,Gn=1015,Hn=1016,sa=1017,ra=1018,Ns=1020,lc=35902,cc=35899,hc=1021,uc=1022,Cn=1023,jn=1026,Bi=1027,fc=1028,oa=1029,zi=1030,aa=1031;var la=1033,wr=33776,Ar=33777,Tr=33778,Er=33779,ca=35840,ha=35841,ua=35842,fa=35843,da=36196,pa=37492,ma=37496,ga=37488,xa=37489,Cr=37490,_a=37491,ya=37808,va=37809,Ma=37810,Sa=37811,ba=37812,wa=37813,Aa=37814,Ta=37815,Ea=37816,Ca=37817,Ra=37818,Pa=37819,Ia=37820,La=37821,Da=36492,Na=36494,Ua=36495,Fa=36283,Oa=36284,Rr=36285,ka=36286;var nr=2300,Ro=2301,_o=2302,Bl=2303,zl=2400,Vl=2401,Gl=2402;var yu=3200;var dc=0,vu=1,_i="",Ge="srgb",ir="srgb-linear",sr="linear",ye="srgb";var yo=7680;var Mu=519,Su=512,bu=513,wu=514,Ba=515,Au=516,Tu=517,za=518,Eu=519,pc=35044;var mc="300 es",Bn=2e3,rr=2001;function Xd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cu(){let n=or("canvas");return n.style.display="block",n}var Ch={},Es=null;function ar(...n){let t="THREE."+n.shift();Es?Es("log",t,...n):console.log(t,...n)}function Ru(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=Ru(n);let t="THREE."+n.shift();if(Es)Es("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=Ru(n);let t="THREE."+n.shift();if(Es)Es("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ts(...n){let t=n.join(" ");t in Ch||(Ch[t]=!0,qt(...n))}function Pu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Iu={[vo]:Mo,[So]:Ao,[bo]:To,[Ts]:wo,[Mo]:vo,[Ao]:So,[To]:bo,[wo]:Ts},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gl=Math.PI/180,Po=180/Math.PI;function Ci(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function Yd(n,t){return(n%t+t)%t}function xl(n,t,e){return(1-e)*n+e*t}function Jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vc=class vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;var ne=vc,ti=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],f=r[o+0],x=r[o+1],g=r[o+2],w=r[o+3];if(u!==w||l!==f||c!==x||d!==g){let m=l*f+c*x+d*g+u*w;m<0&&(f=-f,x=-x,g=-g,w=-w,m=-m);let p=1-a;if(m<.9995){let R=Math.acos(m),U=Math.sin(R);p=Math.sin(p*R)/U,a=Math.sin(a*R)/U,l=l*p+f*a,c=c*p+x*a,d=d*p+g*a,u=u*p+w*a}else{l=l*p+f*a,c=c*p+x*a,d=d*p+g*a,u=u*p+w*a;let R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],f=r[o+1],x=r[o+2],g=r[o+3];return t[e]=a*g+d*u+l*x-c*f,t[e+1]=l*g+d*f+c*u-a*x,t[e+2]=c*g+d*x+a*f-l*u,t[e+3]=d*g-a*u-l*f-c*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),f=l(i/2),x=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*x*g,this._y=c*x*u-f*d*g,this._z=c*d*g+f*x*u,this._w=c*d*u-f*x*g;break;case"YXZ":this._x=f*d*u+c*x*g,this._y=c*x*u-f*d*g,this._z=c*d*g-f*x*u,this._w=c*d*u+f*x*g;break;case"ZXY":this._x=f*d*u-c*x*g,this._y=c*x*u+f*d*g,this._z=c*d*g+f*x*u,this._w=c*d*u-f*x*g;break;case"ZYX":this._x=f*d*u-c*x*g,this._y=c*x*u+f*d*g,this._z=c*d*g-f*x*u,this._w=c*d*u+f*x*g;break;case"YZX":this._x=f*d*u+c*x*g,this._y=c*x*u+f*d*g,this._z=c*d*g-f*x*u,this._w=c*d*u-f*x*g;break;case"XZY":this._x=f*d*u-c*x*g,this._y=c*x*u-f*d*g,this._z=c*d*g+f*x*u,this._w=c*d*u+f*x*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=i+a+u;if(f>0){let x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(d-l)*x,this._y=(r-c)*x,this._z=(o-s)*x}else if(i>a&&i>u){let x=2*Math.sqrt(1+i-a-u);this._w=(d-l)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+c)/x}else if(a>u){let x=2*Math.sqrt(1+a-i-u);this._w=(r-c)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(l+d)/x}else{let x=2*Math.sqrt(1+u-i-a);this._w=(o-s)/x,this._x=(r+c)/x,this._y=(l+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mc=class Mc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),d=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mc.prototype.isVector3=!0;var K=Mc,_l=new K,Rh=new ti,Sc=class Sc{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],x=i[5],g=i[8],w=s[0],m=s[3],p=s[6],R=s[1],U=s[4],v=s[7],A=s[2],E=s[5],N=s[8];return r[0]=o*w+a*R+l*A,r[3]=o*m+a*U+l*E,r[6]=o*p+a*v+l*N,r[1]=c*w+d*R+u*A,r[4]=c*m+d*U+u*E,r[7]=c*p+d*v+u*N,r[2]=f*w+x*R+g*A,r[5]=f*m+x*U+g*E,r[8]=f*p+x*v+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,f=a*l-d*r,x=c*r-o*l,g=e*u+i*f+s*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/g;return t[0]=u*w,t[1]=(s*c-d*i)*w,t[2]=(a*i-s*o)*w,t[3]=f*w,t[4]=(d*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=x*w,t[7]=(i*l-c*e)*w,t[8]=(o*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sc.prototype.isMatrix3=!0;var Zt=Sc,yl=new Zt,Ph=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $d(){let n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ir]:{primaries:t,whitePoint:i,transfer:sr,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var ae=$d();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ls,Io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=or("canvas")),ls.width=t.width,ls.height=t.height;let s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,Cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vl(s[o].image)):r.push(vl(s[o]))}else r=vl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Io.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Jd=0,Ml=new K,cn=class n extends Qn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Kn,s=Kn,r=He,o=ki,a=Cn,l=Mn,c=n.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ci(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=rc;cn.DEFAULT_ANISOTROPY=1;var bc=class bc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],x=l[5],g=l[9],w=l[2],m=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-w)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+w)<.1&&Math.abs(g+m)<.1&&Math.abs(c+x+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,v=(x+1)/2,A=(p+1)/2,E=(d+f)/4,N=(u+w)/4,S=(g+m)/4;return U>v&&U>A?U<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(U),s=E/i,r=N/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=N/r,s=S/r),this.set(i,s,r,e),this}let R=Math.sqrt((m-g)*(m-g)+(u-w)*(u-w)+(f-d)*(f-d));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(u-w)/R,this.z=(f-d)/R,this.w=Math.acos((c+x+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;var Ne=bc,Lo=class extends Qn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new cn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Lo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},lr=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Qo=class Qo{constructor(t,e,i,s,r,o,a,l,c,d,u,f,x,g,w,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,d,u,f,x,g,w,m)}set(t,e,i,s,r,o,a,l,c,d,u,f,x,g,w,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=f,p[3]=x,p[7]=g,p[11]=w,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*d,x=o*u,g=a*d,w=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=x+g*c,e[5]=f-w*c,e[9]=-a*l,e[2]=w-f*c,e[6]=g+x*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*d,x=l*u,g=c*d,w=c*u;e[0]=f+w*a,e[4]=g*a-x,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=x*a-g,e[6]=w+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*d,x=l*u,g=c*d,w=c*u;e[0]=f-w*a,e[4]=-o*u,e[8]=g+x*a,e[1]=x+g*a,e[5]=o*d,e[9]=w-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*d,x=o*u,g=a*d,w=a*u;e[0]=l*d,e[4]=g*c-x,e[8]=f*c+w,e[1]=l*u,e[5]=w*c+f,e[9]=x*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,x=o*c,g=a*l,w=a*c;e[0]=l*d,e[4]=w-f*u,e[8]=g*u+x,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=x*u+g,e[10]=f-w*u}else if(t.order==="XZY"){let f=o*l,x=o*c,g=a*l,w=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+w,e[5]=o*d,e[9]=x*u-g,e[2]=g*u-x,e[6]=a*d,e[10]=w*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,jd)}lookAt(t,e,i){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(i,mn),bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(i,mn)),bi.normalize(),Zr.crossVectors(mn,bi),s[0]=bi.x,s[4]=Zr.x,s[8]=mn.x,s[1]=bi.y,s[5]=Zr.y,s[9]=mn.y,s[2]=bi.z,s[6]=Zr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],x=i[13],g=i[2],w=i[6],m=i[10],p=i[14],R=i[3],U=i[7],v=i[11],A=i[15],E=s[0],N=s[4],S=s[8],T=s[12],P=s[1],D=s[5],H=s[9],k=s[13],O=s[2],W=s[6],et=s[10],$=s[14],ut=s[3],tt=s[7],lt=s[11],ct=s[15];return r[0]=o*E+a*P+l*O+c*ut,r[4]=o*N+a*D+l*W+c*tt,r[8]=o*S+a*H+l*et+c*lt,r[12]=o*T+a*k+l*$+c*ct,r[1]=d*E+u*P+f*O+x*ut,r[5]=d*N+u*D+f*W+x*tt,r[9]=d*S+u*H+f*et+x*lt,r[13]=d*T+u*k+f*$+x*ct,r[2]=g*E+w*P+m*O+p*ut,r[6]=g*N+w*D+m*W+p*tt,r[10]=g*S+w*H+m*et+p*lt,r[14]=g*T+w*k+m*$+p*ct,r[3]=R*E+U*P+v*O+A*ut,r[7]=R*N+U*D+v*W+A*tt,r[11]=R*S+U*H+v*et+A*lt,r[15]=R*T+U*k+v*$+A*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],x=t[14],g=t[3],w=t[7],m=t[11],p=t[15],R=l*x-c*f,U=a*x-c*u,v=a*f-l*u,A=o*x-c*d,E=o*f-l*d,N=o*u-a*d;return e*(w*R-m*U+p*v)-i*(g*R-m*A+p*E)+s*(g*U-w*A+p*N)-r*(g*v-w*E+m*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-i*(r*d-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],x=t[11],g=t[12],w=t[13],m=t[14],p=t[15],R=e*a-i*o,U=e*l-s*o,v=e*c-r*o,A=i*l-s*a,E=i*c-r*a,N=s*c-r*l,S=d*w-u*g,T=d*m-f*g,P=d*p-x*g,D=u*m-f*w,H=u*p-x*w,k=f*p-x*m,O=R*k-U*H+v*D+A*P-E*T+N*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/O;return t[0]=(a*k-l*H+c*D)*W,t[1]=(s*H-i*k-r*D)*W,t[2]=(w*N-m*E+p*A)*W,t[3]=(f*E-u*N-x*A)*W,t[4]=(l*P-o*k-c*T)*W,t[5]=(e*k-s*P+r*T)*W,t[6]=(m*v-g*N-p*U)*W,t[7]=(d*N-f*v+x*U)*W,t[8]=(o*H-a*P+c*S)*W,t[9]=(i*P-e*H-r*S)*W,t[10]=(g*E-w*v+p*R)*W,t[11]=(u*v-d*E-x*R)*W,t[12]=(a*T-o*D-l*S)*W,t[13]=(e*D-i*T+s*S)*W,t[14]=(w*U-g*A-m*R)*W,t[15]=(d*A-u*U+f*R)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,f=r*c,x=r*d,g=r*u,w=o*d,m=o*u,p=a*u,R=l*c,U=l*d,v=l*u,A=i.x,E=i.y,N=i.z;return s[0]=(1-(w+p))*A,s[1]=(x+v)*A,s[2]=(g-U)*A,s[3]=0,s[4]=(x-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+R)*E,s[7]=0,s[8]=(g+U)*N,s[9]=(m-R)*N,s[10]=(1-(f+w))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);let c=1/o,d=1/a,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Bn,l=!1){let c=this.elements,d=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),x=(i+s)/(i-s),g,w;if(l)g=r/(o-r),w=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===rr)g=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Bn,l=!1){let c=this.elements,d=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),x=-(i+s)/(i-s),g,w;if(l)g=1/(o-r),w=o/(o-r);else if(a===Bn)g=-2/(o-r),w=-(o+r)/(o-r);else if(a===rr)g=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=x,c[2]=0,c[6]=0,c[10]=g,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Qo.prototype.isMatrix4=!0;var Oe=Qo,cs=new K,Un=new Oe,Kd=new K(0,0,0),jd=new K(1,1,1),bi=new K,Zr=new K,mn=new K,Lh=new Oe,Dh=new ti,Ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,x),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qd=0,Nh=new K,hs=new ti,hi=new Oe,Jr=new K,Zs=new K,tp=new K,ep=new ti,Uh=new K(1,0,0),Fh=new K(0,1,0),Oh=new K(0,0,1),kh={type:"added"},np={type:"removed"},us={type:"childadded",child:null},Sl={type:"childremoved",child:null},xn=class n extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new K,e=new Ri,i=new ti,s=new K(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Zt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jr.copy(t):Jr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Zs,Jr,this.up):hi.lookAt(Jr,Zs,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(hi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),us.child=t,this.dispatchEvent(us),us.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(np),Sl.child=t,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),x=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),x.length>0&&(i.animations=x),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new K(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ip={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let m=e.getJointPose(w,i),p=this._getHandJoint(c,w);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),x=.02,g=.005;c.inputState.pinching&&f>x+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=x-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function bl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Yd(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bl(o,r,t+1/3),this.g=bl(o,r,t),this.b=bl(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=Lu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ae.workingToColorSpace(en.copy(this),t),Math.round(ce(en.r*255,0,255))*65536+Math.round(ce(en.g*255,0,255))*256+Math.round(ce(en.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(en.copy(this),e);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ge){ae.workingToColorSpace(en.copy(this),t);let e=en.r,i=en.g,s=en.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Kr);let i=xl(wi.h,Kr.h,e),s=xl(wi.s,Kr.s,e),r=xl(wi.l,Kr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Jt;Jt.NAMES=Lu;var hr=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new K,ui=new K,wl=new K,fi=new K,fs=new K,ds=new K,Bh=new K,Al=new K,Tl=new K,El=new K,Cl=new Ne,Rl=new Ne,Pl=new Ne,mi=class n{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),ui.subVectors(i,e),wl.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ui),l=Fn.dot(wl),c=ui.dot(ui),d=ui.dot(wl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,x=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-x-g,g,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,i),Pl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Cl,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),ui.subVectors(t,e),Fn.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,i),ds.subVectors(r,i),Al.subVectors(t,i);let l=fs.dot(Al),c=ds.dot(Al);if(l<=0&&c<=0)return e.copy(i);Tl.subVectors(t,s);let d=fs.dot(Tl),u=ds.dot(Tl);if(d>=0&&u<=d)return e.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(fs,o);El.subVectors(t,r);let x=fs.dot(El),g=ds.dot(El);if(g>=0&&x<=g)return e.copy(r);let w=x*c-l*g;if(w<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ds,a);let m=d*g-x*u;if(m<=0&&u-d>=0&&x-g>=0)return Bh.subVectors(r,s),a=(u-d)/(u-d+(x-g)),e.copy(s).addScaledVector(Bh,a);let p=1/(m+w+f);return o=w*p,a=f*p,e.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Qr.subVectors(this.max,Js),ps.subVectors(t.a,Js),ms.subVectors(t.b,Js),gs.subVectors(t.c,Js),Ai.subVectors(ms,ps),Ti.subVectors(gs,ms),Ji.subVectors(ps,gs);let e=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-Ji.z,Ji.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,Ji.z,0,-Ji.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-Ji.y,Ji.x,0];return!Il(e,ps,ms,gs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,ps,ms,gs,Qr))?!1:(to.crossVectors(Ai,Ti),e=[to.x,to.y,to.z],Il(e,ps,ms,gs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new K,new K,new K,new K,new K,new K,new K,new K],On=new K,jr=new ei,ps=new K,ms=new K,gs=new K,Ai=new K,Ti=new K,Ji=new K,Js=new K,Qr=new K,to=new K,Ki=new K;function Il(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),d=i.dot(Ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ve=new K,eo=new ne,sp=0,Xe=class extends Qn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ur=class extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fr=class extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var An=class extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}},rp=new ei,Ks=new K,Ll=new K,Ps=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):rp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Ll)),this.expandByPoint(Ks.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},op=0,wn=new Oe,Dl=new xn,xs=new K,gn=new ei,js=new ei,Ze=new K,_n=class n extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?fr:ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return Dl.lookAt(t),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new An(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(gn.min,js.min),gn.expandByPoint(Ze),Ze.addVectors(gn.max,js.max),gn.expandByPoint(Ze)):(gn.expandByPoint(js.min),gn.expandByPoint(js.max))}gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ze.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(t,c),Ze.add(xs)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Xe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new K,l[S]=new K;let c=new K,d=new K,u=new K,f=new ne,x=new ne,g=new ne,w=new K,m=new K;function p(S,T,P){c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,T),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,S),x.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),d.sub(c),u.sub(c),x.sub(f),g.sub(f);let D=1/(x.x*g.y-g.x*x.y);isFinite(D)&&(w.copy(d).multiplyScalar(g.y).addScaledVector(u,-x.y).multiplyScalar(D),m.copy(u).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(D),a[S].add(w),a[T].add(w),a[P].add(w),l[S].add(m),l[T].add(m),l[P].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let S=0,T=R.length;S<T;++S){let P=R[S],D=P.start,H=P.count;for(let k=D,O=D+H;k<O;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let U=new K,v=new K,A=new K,E=new K;function N(S){A.fromBufferAttribute(s,S),E.copy(A);let T=a[S];U.copy(T),U.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(E,T);let D=v.dot(l[S])<0?-1:1;o.setXYZW(S,U.x,U.y,U.z,D)}for(let S=0,T=R.length;S<T;++S){let P=R[S],D=P.start,H=P.count;for(let k=D,O=D+H;k<O;k+=3)N(t.getX(k+0)),N(t.getX(k+1)),N(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,x=i.count;f<x;f++)i.setXYZ(f,0,0,0);let s=new K,r=new K,o=new K,a=new K,l=new K,c=new K,d=new K,u=new K;if(t)for(let f=0,x=t.count;f<x;f+=3){let g=t.getX(f+0),w=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,x=e.count;f<x;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d),x=0,g=0;for(let w=0,m=l.length;w<m;w++){a.isInterleavedBufferAttribute?x=l[w]*a.data.stride+a.offset:x=l[w]*d;for(let p=0;p<d;p++)f[g++]=c[x++]}return new Xe(f,d,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let f=c[d],x=t(f,i);l.push(x)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let x=c[u];d.push(x.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,x=u.length;f<x;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},No=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ln=new K,dr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nl=new K,ap=new K,lp=new Zt,kn=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Nl.subVectors(i,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||lp.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cp=0,Pi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Ls,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends Pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_s,Qs=new K,ys=new K,vs=new K,Ms=new ne,tr=new ne,Du=new Oe,no=new K,er=new K,io=new K,zh=new ne,Ul=new ne,Vh=new ne,Ii=class extends xn{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new _n;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new No(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new dr(i,3,0,!1)),_s.setAttribute("uv",new dr(i,2,3,!1))}this.geometry=_s,this.material=t,this.center=new ne(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-vs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;so(no.set(-.5,-.5,0),vs,o,ys,s,r),so(er.set(.5,-.5,0),vs,o,ys,s,r),so(io.set(.5,.5,0),vs,o,ys,s,r),zh.set(0,0),Ul.set(1,0),Vh.set(1,1);let a=t.ray.intersectTriangle(no,er,io,!1,Qs);if(a===null&&(so(er.set(-.5,.5,0),vs,o,ys,s,r),Ul.set(0,1),a=t.ray.intersectTriangle(no,io,er,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:mi.getInterpolation(Qs,no,er,io,zh,Ul,Vh,new ne),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function so(n,t,e,i,s,r){Ms.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(tr.x=r*Ms.x-s*Ms.y,tr.y=s*Ms.x+r*Ms.y):tr.copy(Ms),n.copy(t),n.x+=tr.x,n.y+=tr.y,n.applyMatrix4(Du)}var pi=new K,Fl=new K,ro=new K,oo=new K,Uo=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fl.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),oo.copy(this.origin).sub(Fl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ro),a=oo.dot(this.direction),l=-oo.dot(ro),c=oo.lengthSq(),d=Math.abs(1-o*o),u,f,x,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){let w=1/d;u*=w,f*=w,x=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),x=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),x=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),x=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),x=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),x=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),x=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fl).addScaledVector(ro,f),x}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,u=t.x-o.x,f=t.y-o.y,x=t.z-o.z,g=e.x-o.x,w=e.y-o.y,m=e.z-o.z,p=i.x-o.x,R=i.y-o.y,U=i.z-o.z,v=Math.abs(l),A=Math.abs(c),E=Math.abs(d),N,S,T,P,D,H,k,O,W,et,$,ut;if(v>=A&&v>=E?(T=l,H=u,W=g,ut=p,l>=0?(N=c,S=d,P=f,D=x,k=w,O=m,et=R,$=U):(N=d,S=c,P=x,D=f,k=m,O=w,et=U,$=R)):A>=E?(T=c,H=f,W=w,ut=R,c>=0?(N=d,S=l,P=x,D=u,k=m,O=g,et=U,$=p):(N=l,S=d,P=u,D=x,k=g,O=m,et=p,$=U)):(T=d,H=x,W=m,ut=U,d>=0?(N=l,S=c,P=u,D=f,k=g,O=w,et=p,$=R):(N=c,S=l,P=f,D=u,k=w,O=g,et=R,$=p)),T===0)return null;let tt=N/T,lt=S/T,ct=1/T,zt=P-tt*H,Bt=D-lt*H,pe=k-tt*W,se=O-lt*W,he=et-tt*ut,st=$-lt*ut,ht=he*se-st*pe,Rt=zt*st-Bt*he,Yt=pe*Bt-se*zt;if(s){if(ht<0||Rt<0||Yt<0)return null}else if((ht<0||Rt<0||Yt<0)&&(ht>0||Rt>0||Yt>0))return null;let Tt=ht+Rt+Yt;if(Tt===0)return null;let jt=ct*(ht*H+Rt*W+Yt*ut);return(Tt>0?jt<0:jt>0)?null:this.at(jt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new Oe,ji=new Uo,ao=new Ps,Hh=new K,lo=new K,co=new K,ho=new K,Ol=new K,uo=new K,Wh=new K,fo=new K,Ue=class extends xn{constructor(t=new _n,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(Ol.fromBufferAttribute(u,t),o?uo.addScaledVector(Ol,d):uo.addScaledVector(Ol.sub(e),d))}e.add(uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(ao.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ao,Hh)===null||ji.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Gh),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,w=f.length;g<w;g++){let m=f[g],p=o[m.materialIndex],R=Math.max(m.start,x.start),U=Math.min(a.count,Math.min(m.start+m.count,x.start+x.count));for(let v=R,A=U;v<A;v+=3){let E=a.getX(v),N=a.getX(v+1),S=a.getX(v+2);s=po(this,p,t,i,c,d,u,E,N,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,x.start),w=Math.min(a.count,x.start+x.count);for(let m=g,p=w;m<p;m+=3){let R=a.getX(m),U=a.getX(m+1),v=a.getX(m+2);s=po(this,o,t,i,c,d,u,R,U,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,w=f.length;g<w;g++){let m=f[g],p=o[m.materialIndex],R=Math.max(m.start,x.start),U=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let v=R,A=U;v<A;v+=3){let E=v,N=v+1,S=v+2;s=po(this,p,t,i,c,d,u,E,N,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,x.start),w=Math.min(l.count,x.start+x.count);for(let m=g,p=w;m<p;m+=3){let R=m,U=m+1,v=m+2;s=po(this,o,t,i,c,d,u,R,U,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function hp(n,t,e,i,s,r,o,a){let l;if(t.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fi,a),l===null)return null;fo.copy(a),fo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(fo);return c<e.near||c>e.far?null:{distance:c,point:fo.clone(),object:n}}function po(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,lo),n.getVertexPosition(l,co),n.getVertexPosition(c,ho);let d=hp(n,t,e,i,lo,co,ho,Wh);if(d){let u=new K;mi.getBarycoord(Wh,lo,co,ho,u),s&&(d.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new ne)),r&&(d.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new ne)),o&&(d.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new K),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new K,materialIndex:0};mi.getNormal(lo,co,ho,f.normal),d.face=f,d.barycoord=u}return d}var Fo=class extends cn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Je,d=Je,u,f){super(null,o,a,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=new Ps,up=new ne(.5,.5),mo=new K,pr=class{constructor(t=new kn,e=new kn,i=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],x=r[7],g=r[8],w=r[9],m=r[10],p=r[11],R=r[12],U=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,x-d,p-g,A-R).normalize(),s[1].setComponents(c+o,x+d,p+g,A+R).normalize(),s[2].setComponents(c+a,x+u,p+w,A+U).normalize(),s[3].setComponents(c-a,x-u,p-w,A-U).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,x-f,p-m,A-v).normalize();else if(s[4].setComponents(c-l,x-f,p-m,A-v).normalize(),e===Bn)s[5].setComponents(c+l,x+f,p+m,A+v).normalize();else if(e===rr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=up.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends cn{constructor(t=[],e=Oi,i,s,r,o,a,l,c,d){super(t,e,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tn=class extends cn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends cn{constructor(t,e,i=Vn,s,r,o,a=Je,l=Je,c,d=jn,u=1){if(d!==jn&&d!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oo=class extends Li{constructor(t,e=Vn,i=Oi,s,r,o=Je,a=Je,l,c=jn){let d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pn=class n extends _n{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],f=0,x=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(d,3)),this.setAttribute("uv",new An(u,2));function g(w,m,p,R,U,v,A,E,N,S,T){let P=v/N,D=A/S,H=v/2,k=A/2,O=E/2,W=N+1,et=S+1,$=0,ut=0,tt=new K;for(let lt=0;lt<et;lt++){let ct=lt*D-k;for(let zt=0;zt<W;zt++){let Bt=zt*P-H;tt[w]=Bt*R,tt[m]=ct*U,tt[p]=O,c.push(tt.x,tt.y,tt.z),tt[w]=0,tt[m]=0,tt[p]=E>0?1:-1,d.push(tt.x,tt.y,tt.z),u.push(zt/N),u.push(1-lt/S),$+=1}}for(let lt=0;lt<S;lt++)for(let ct=0;ct<N;ct++){let zt=f+ct+W*lt,Bt=f+ct+W*(lt+1),pe=f+(ct+1)+W*(lt+1),se=f+(ct+1)+W*lt;l.push(zt,Bt,se),l.push(Bt,pe,se),ut+=6}a.addGroup(x,ut,T),x+=ut,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xr=class n extends _n{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=t/a,f=e/l,x=[],g=[],w=[],m=[];for(let p=0;p<d;p++){let R=p*f-o;for(let U=0;U<c;U++){let v=U*u-r;g.push(v,-R,0),w.push(0,0,1),m.push(U/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){let U=R+c*p,v=R+c*(p+1),A=R+1+c*(p+1),E=R+1+c*p;x.push(U,v,E),x.push(v,A,E)}this.setIndex(x),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(w,3)),this.setAttribute("uv",new An(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function is(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Xh(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function rn(n){let t={};for(let e=0;e<n.length;e++){let i=is(n[e]);for(let s in i)t[s]=i[s]}return t}function Xh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Nu={clone:is,merge:rn},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ko=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Bo=class extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zo=class extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function kl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Di=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends Di{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,a=2*e-i;break;case Gl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:o=t,l=2*i-e;break;case Gl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,x=this._weightNext,g=(i-e)/(s-e),w=g*g,m=w*g,p=-f*m+2*f*w-f*g,R=(1+f)*m+(-1.5-2*f)*w+(-.5+f)*g+1,U=(-1-x)*m+(1.5+x)*w+.5*g,v=x*m-x*w;for(let A=0;A!==a;++A)r[A]=p*o[d+A]+R*o[c+A]+U*o[l+A]+v*o[u+A];return r}},Go=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(i-e)/(s-e),u=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*d;return r}},Ho=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wo=class extends Di{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(i-e)/(s-e),w=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*w+o[l+m]*g;return r}let f=a*2,x=t-1;for(let g=0;g!==a;++g){let w=o[c+g],m=o[l+g],p=x*f+g*2,R=u[p],U=u[p+1],v=t*f+g*2,A=d[v],E=d[v+1],N=gp(i,e,R,A,s);r[g]=Uu(N,w,U,E,m)}return r}};function Uu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function mp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function gp(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Uu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=mp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var vn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),kl(t.settings)&&(i.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Ro:e=this.InterpolantFactoryMethodLinear;break;case _o:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return _o;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;kl(this.settings)&&(qh(this.settings.inTangents,t),qh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_o,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,x=u+i;for(let g=0;g!==i;++g){let w=e[u+g];if(w!==e[f+g]||w!==e[x+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let x=0;x!==i;++x)e[f+x]=e[u+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,kl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ro;var Ni=class extends vn{constructor(t,e,i){super(t,e,i)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=nr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};Xo.prototype.ValueTypeName="color";var qo=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};qo.prototype.ValueTypeName="number";var Yo=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends vn{constructor(t,e,i){super(t,e,i)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=nr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};$o.prototype.ValueTypeName="vector";var Zo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let x=c[u],g=c[u+1];if(x.global&&(x.lastIndex=0),x.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fu=new Zo,Jo=class{constructor(t){this.manager=t!==void 0?t:Fu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var go=new K,xo=new ti,Zn=new K,yr=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,xo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(go,xo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new K,Yh=new ne,$h=new ne,nn=class extends yr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,$h),e.subVectors($h,Yh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vr=class extends yr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var bs=-90,ws=1,Ko=class extends xn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(bs,ws,t,e);s.layers=this.layers,this.add(s);let r=new nn(bs,ws,t,e);r.layers=this.layers,this.add(r);let o=new nn(bs,ws,t,e);o.layers=this.layers,this.add(o);let a=new nn(bs,ws,t,e);a.layers=this.layers,this.add(a);let l=new nn(bs,ws,t,e);l.layers=this.layers,this.add(l);let c=new nn(bs,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,f,x),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jo=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xc="\\[\\]\\.:\\/",xp=new RegExp("["+xc+"]","g"),_c="[^"+xc+"]",_p="[^"+xc.replace("\\.","")+"]",yp=/((?:WC+[\/:])*)/.source.replace("WC",_c),vp=/(WCOD+)?/.source.replace("WCOD",_p),Mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),Sp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),bp=new RegExp("^"+yp+vp+Mp+Sp+"$"),wp=["material","materials","bones","map"],Hl=class{constructor(t,e,i){let s=i||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(t){let e=bp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Hl;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uy=new Float32Array(1);var wc=class wc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};wc.prototype.isMatrix2=!0;var Wl=wc;function yc(n,t,e,i){let s=Ap(i);switch(e){case hc:return n*t;case fc:return n*t/s.components*s.byteLength;case oa:return n*t/s.components*s.byteLength;case zi:return n*t*2/s.components*s.byteLength;case aa:return n*t*2/s.components*s.byteLength;case uc:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case la:return n*t*4/s.components*s.byteLength;case wr:case Ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Er:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ha:case fa:return Math.max(n,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(n,8)*Math.max(t,8)/2;case da:case pa:case ga:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ma:case Cr:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Da:case Na:case Ua:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Rr:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(n){switch(n){case Mn:case oc:return{byteLength:1,components:1};case Ds:case ac:case Hn:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case Vn:case ia:case Gn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ep(n){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let x;if(c instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)x=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)x=n.SHORT;else if(c instanceof Uint32Array)x=n.UNSIGNED_INT;else if(c instanceof Int32Array)x=n.INT;else if(c instanceof Int8Array)x=n.BYTE;else if(c instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((x,g)=>x.start-g.start);let f=0;for(let x=1;x<u.length;x++){let g=u[f],w=u[x];w.start<=g.start+g.count+1?g.count=Math.max(g.count,w.start+w.count-g.start):(++f,u[f]=w)}u.length=f+1;for(let x=0,g=u.length;x<g;x++){let w=u[x];n.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Tm=`uniform sampler2D dfgLUT;
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
}`,Em=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,eg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:kp,beginnormal_vertex:Bp,bsdfs:zp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:vm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:fm,fog_fragment:dm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:_m,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:bm,lights_phong_pars_fragment:wm,lights_physical_fragment:Am,lights_physical_pars_fragment:Tm,lights_fragment_begin:Em,lights_fragment_maps:Cm,lights_fragment_end:Rm,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Nm,map_fragment:Um,map_pars_fragment:Fm,map_particle_fragment:Om,map_particle_pars_fragment:km,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Vm,morphcolor_vertex:Gm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:f0,shadowmask_pars_fragment:d0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:x0,specularmap_fragment:_0,specularmap_pars_fragment:y0,tonemapping_fragment:v0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:b0,uv_pars_fragment:w0,uv_pars_vertex:A0,uv_vertex:T0,worldpos_vertex:E0,background_vert:C0,background_frag:R0,backgroundCube_vert:P0,backgroundCube_frag:I0,cube_vert:L0,cube_frag:D0,depth_vert:N0,depth_frag:U0,distance_vert:F0,distance_frag:O0,equirect_vert:k0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:V0,meshbasic_vert:G0,meshbasic_frag:H0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:K0,meshphysical_vert:j0,meshphysical_frag:Q0,meshtoon_vert:tg,meshtoon_frag:eg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:og,sprite_frag:ag},wt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},si={basic:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:rn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:rn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:rn([wt.points,wt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:rn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:rn([wt.common,wt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:rn([wt.sprite,wt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:rn([wt.common,wt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:rn([wt.lights,wt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Va={r:0,b:0,g:0},lg=new Oe,of=new Zt;of.set(-1,0,0,0,1,0,0,0,1);function cg(n,t,e,i,s,r){let o=new Jt(0),a=s===!0?0:1,l,c,d=null,u=0,f=null;function x(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){let v=R.backgroundBlurriness>0;U=t.get(U,v)}return U}function g(R){let U=!1,v=x(R);v===null?m(o,a):v&&v.isColor&&(m(v,1),U=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(R,U){let v=x(U);v&&(v.isCubeTexture||v.mapping===Sr)?(c===void 0&&(c=new Ue(new pn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:is(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(U.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==ye,(d!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ue(new xr(2,2),new sn({name:"BackgroundMaterial",uniforms:is(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function m(R,U){R.getRGB(Va,gc(n)),e.buffers.color.setClear(Va.r,Va.g,Va.b,U,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,U=1){o.set(R),a=U,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(R){a=R,m(o,a)},render:g,addToRenderList:w,dispose:p}}function hg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(D,H,k,O,W){let et=!1,$=u(D,O,k,H);r!==$&&(r=$,c(r.object)),et=x(D,O,k,W),et&&g(D,O,k,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,v(D,H,k,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function u(D,H,k,O){let W=O.wireframe===!0,et=i[H.id];et===void 0&&(et={},i[H.id]=et);let $=D.isInstancedMesh===!0?D.id:0,ut=et[$];ut===void 0&&(ut={},et[$]=ut);let tt=ut[k.id];tt===void 0&&(tt={},ut[k.id]=tt);let lt=tt[W];return lt===void 0&&(lt=f(l()),tt[W]=lt),lt}function f(D){let H=[],k=[],O=[];for(let W=0;W<e;W++)H[W]=0,k[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:O,object:D,attributes:{},index:null}}function x(D,H,k,O){let W=r.attributes,et=H.attributes,$=0,ut=k.getAttributes();for(let tt in ut)if(ut[tt].location>=0){let ct=W[tt],zt=et[tt];if(zt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(zt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(zt=D.instanceColor)),ct===void 0||ct.attribute!==zt||zt&&ct.data!==zt.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function g(D,H,k,O){let W={},et=H.attributes,$=0,ut=k.getAttributes();for(let tt in ut)if(ut[tt].location>=0){let ct=et[tt];ct===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor));let zt={};zt.attribute=ct,ct&&ct.data&&(zt.data=ct.data),W[tt]=zt,$++}r.attributes=W,r.attributesNum=$,r.index=O}function w(){let D=r.newAttributes;for(let H=0,k=D.length;H<k;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let k=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;k[D]=1,O[D]===0&&(n.enableVertexAttribArray(D),O[D]=1),W[D]!==H&&(n.vertexAttribDivisor(D,H),W[D]=H)}function R(){let D=r.newAttributes,H=r.enabledAttributes;for(let k=0,O=H.length;k<O;k++)H[k]!==D[k]&&(n.disableVertexAttribArray(k),H[k]=0)}function U(D,H,k,O,W,et,$){$===!0?n.vertexAttribIPointer(D,H,k,W,et):n.vertexAttribPointer(D,H,k,O,W,et)}function v(D,H,k,O){w();let W=O.attributes,et=k.getAttributes(),$=H.defaultAttributeValues;for(let ut in et){let tt=et[ut];if(tt.location>=0){let lt=W[ut];if(lt===void 0&&(ut==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),ut==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),lt!==void 0){let ct=lt.normalized,zt=lt.itemSize,Bt=t.get(lt);if(Bt===void 0)continue;let pe=Bt.buffer,se=Bt.type,he=Bt.bytesPerElement,st=se===n.INT||se===n.UNSIGNED_INT||lt.gpuType===ia;if(lt.isInterleavedBufferAttribute){let ht=lt.data,Rt=ht.stride,Yt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Tt=0;Tt<tt.locationSize;Tt++)p(tt.location+Tt,ht.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Tt=0;Tt<tt.locationSize;Tt++)m(tt.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Tt=0;Tt<tt.locationSize;Tt++)U(tt.location+Tt,zt/tt.locationSize,se,ct,Rt*he,(Yt+zt/tt.locationSize*Tt)*he,st)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<tt.locationSize;ht++)p(tt.location+ht,lt.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<tt.locationSize;ht++)m(tt.location+ht);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ht=0;ht<tt.locationSize;ht++)U(tt.location+ht,zt/tt.locationSize,se,ct,zt*he,zt/tt.locationSize*ht*he,st)}}else if($!==void 0){let ct=$[ut];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(tt.location,ct);break;case 3:n.vertexAttrib3fv(tt.location,ct);break;case 4:n.vertexAttrib4fv(tt.location,ct);break;default:n.vertexAttrib1fv(tt.location,ct)}}}}R()}function A(){T();for(let D in i){let H=i[D];for(let k in H){let O=H[k];for(let W in O){let et=O[W];for(let $ in et)d(et[$].object),delete et[$];delete O[W]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let H=i[D.id];for(let k in H){let O=H[k];for(let W in O){let et=O[W];for(let $ in et)d(et[$].object),delete et[$];delete O[W]}}delete i[D.id]}function N(D){for(let H in i){let k=i[H];for(let O in k){let W=k[O];if(W[D.id]===void 0)continue;let et=W[D.id];for(let $ in et)d(et[$].object),delete et[$];delete W[D.id]}}}function S(D){for(let H in i){let k=i[H],O=D.isInstancedMesh===!0?D.id:0,W=k[O];if(W!==void 0){for(let et in W){let $=W[et];for(let ut in $)d($[ut].object),delete $[ut];delete W[et]}delete k[O],Object.keys(k).length===0&&delete i[H]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:m,disableUnusedAttributes:R}}function ug(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let x=0;x<d;x++)f+=c[x];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Cn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let S=N===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Mn&&N!==Gn&&!S&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(qt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:x,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:v,maxSamples:A,samples:E}}function dg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new kn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let x=u.length!==0||f||i!==0||s;return s=f,i=u.length,x},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,x){let g=u.clippingPlanes,w=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{let R=r?0:i,U=R*4,v=p.clippingState||null;l.value=v,v=d(g,f,U,x);for(let A=0;A!==U;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,f,x,g){let w=u!==null?u.length:0,m=null;if(w!==0){if(m=l.value,g!==!0||m===null){let p=x+w*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let U=0,v=x;U!==w;++U,v+=4)o.copy(u[U]).applyMatrix4(R,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,m}}var Fs=4,pg=6,mg=20,gg=256,Pr=new vr,Ou=new Jt,Ac=null,Tc=0,Ec=0,Cc=!1,xg=new K,ss=new K,Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=xg}=r;Ac=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Tc,Ec),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:Hn,format:Cn,colorSpace:ir,depthBuffer:!1},s=ku(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_g(r)),this._blurMaterial=vg(r,t,e),this._ggxMaterial=yg(r,t,e)}return s}_compileMaterial(t){let e=new Ue(new _n,t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,i,s,r){let l=new nn(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,x=u.toneMapping;u.getClearColor(Ou),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new pn,new yn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,m=w.material,p=!1,R=t.background;R?R.isColor&&(m.color.copy(R),t.background=null,p=!0):(m.color.copy(Ou),p=!0);for(let U=0;U<6;U++){let v=U%3;v===0?(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[U],r.y,r.z)):v===1?(l.up.set(0,0,c[U]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[U],r.z)):(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[U]));let A=this._cubeSize;Us(s,v*A,U>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(w,l),u.render(t,l)}u.toneMapping=x,u.autoClear=f,t.background=R}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Oi||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Us(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),f=c*1.25,x=u*f,{_lodMax:g}=this,w=this._sizeLods[i],m=3*w*(i>g-Fs?i-g+Fs:0),p=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=x,l.mipInt.value=g-e,Us(r,m,p,3*w,2*w),s.setRenderTarget(r),s.render(a,Pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Us(t,m,p,3*w,2*w),s.setRenderTarget(t),s.render(a,Pr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-Fs?s-this._lodMax+Fs:0),f=4*(this._cubeSize-d);Us(e,u,f,3*d,2*d),o.setRenderTarget(e),o.render(l,Pr)}};function _g(n){let t=[],e=[],i=n,s=n-Fs+1+pg;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,x=3,g=new Float32Array(x*f*u),w=new Float32Array(x*f*u);for(let p=0;p<u;p++){let R=p%3*2/3-1,U=p>2?0:-1,v=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];g.set(v,x*f*p);for(let A=0;A<f;A++){let E=d[A*2]*2-1,N=d[A*2+1]*2-1;p===0?ss.set(1,N,E):p===1?ss.set(-E,1,-N):p===2?ss.set(-E,N,1):p===3?ss.set(-1,N,-E):p===4?ss.set(-E,-1,N):ss.set(E,N,-1),ss.toArray(w,(p*f+A)*x)}}let m=new _n;m.setAttribute("position",new Xe(g,x)),m.setAttribute("outputDirection",new Xe(w,x)),e.push(new Ue(m,null)),i>Fs&&i--}return{lodMeshes:e,sizeLods:t}}function ku(n,t,e){let i=new dn(n,t,e);return i.texture.mapping=Sr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yg(n,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function vg(n,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:mg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Bu(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zu(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wa=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ni});r.uniforms.tEquirect.value=e;let o=new Ue(s,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=He),new Ko(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Mg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,x=!1){return f==null?null:x?o(f):r(f)}function r(f){if(f&&f.isTexture){let x=f.mapping;if(x===ta||x===ea)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let w=new Wa(g.height);return w.fromEquirectangularTexture(n,f),t.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let x=f.mapping,g=x===ta||x===ea,w=x===Oi||x===ns;if(g||w){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Ha(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let R=f.image;return g&&R&&R.height>0||w&&R&&l(R)?(i===null&&(i=new Ha(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function a(f,x){return x===ta?f.mapping=Oi:x===ea&&(f.mapping=ns),f}function l(f){let x=0,g=6;for(let w=0;w<g;w++)f[w]!==void 0&&x++;return x===g}function c(f){let x=f.target;x.removeEventListener("dispose",c);let g=t.get(x);g!==void 0&&(t.delete(x),g.dispose())}function d(f){let x=f.target;x.removeEventListener("dispose",d);let g=e.get(x);g!==void 0&&(e.delete(x),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Sg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ts("WebGLRenderer: "+i+" extension not supported."),s}}}function bg(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let x=r.get(f);x&&(t.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],n.ARRAY_BUFFER)}function c(u){let f=[],x=u.index,g=u.attributes.position,w=0;if(g===void 0)return;if(x!==null){let R=x.array;w=x.version;for(let U=0,v=R.length;U<v;U+=3){let A=R[U+0],E=R[U+1],N=R[U+2];f.push(A,E,E,N,N,A)}}else{let R=g.array;w=g.version;for(let U=0,v=R.length/3-1;U<v;U+=3){let A=U+0,E=U+1,N=U+2;f.push(A,E,E,N,N,A)}}let m=new(g.count>=65535?fr:ur)(f,1);m.version=w;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function d(u){let f=r.get(u);if(f){let x=u.index;x!==null&&f.version<x.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function wg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,u*o,x),e.update(f,i,x))}function d(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,x);let w=0;for(let m=0;m<x;m++)w+=f[m];e.update(w,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Ag(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Tg(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,f=i.get(a);if(f===void 0||f.count!==u){let T=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],U=0;x===!0&&(U=1),g===!0&&(U=2),w===!0&&(U=3);let v=a.attributes.position.count*U,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*A*4*u),N=new lr(E,v,A,u);N.type=Gn,N.needsUpdate=!0;let S=U*4;for(let P=0;P<u;P++){let D=m[P],H=p[P],k=R[P],O=v*A*4*P;for(let W=0;W<D.count;W++){let et=W*S;x===!0&&(s.fromBufferAttribute(D,W),E[O+et+0]=s.x,E[O+et+1]=s.y,E[O+et+2]=s.z,E[O+et+3]=0),g===!0&&(s.fromBufferAttribute(H,W),E[O+et+4]=s.x,E[O+et+5]=s.y,E[O+et+6]=s.z,E[O+et+7]=0),w===!0&&(s.fromBufferAttribute(k,W),E[O+et+8]=s.x,E[O+et+9]=s.y,E[O+et+10]=s.z,E[O+et+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:N,size:new ne(v,A)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let w=0;w<c.length;w++)x+=c[w];let g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Eg(n,t,e,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let x=c.skeleton;r.get(x)!==d&&(x.update(),r.set(x,d))}return f}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var Cg={[jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function Rg(n,t,e,i,s,r){let o=new dn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _n;c.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new An([0,2,0,0,2,0],2));let d=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ue(c,d),f=new vr(-1,1,1,-1,0,1),x=null,g=null,w=!1,m,p=null,R=[],U=!1;this.setSize=function(v,A){o.setSize(v,A),a!==null&&a.setSize(v,A),l!==null&&l.setSize(v,A);for(let E=0;E<R.length;E++){let N=R[E];N.setSize&&N.setSize(v,A)}},this.setEffects=function(v){R=v,U=R.length>0&&R[0].isRenderPass===!0;let A=o.width,E=o.height;R.length>0&&a===null&&(a=new dn(A,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new dn(A,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<R.length;N++){let S=R[N];S.setSize&&S.setSize(A,E)}},this.begin=function(v,A){if(w||v.toneMapping===zn&&R.length===0)return!1;if(p=A,A!==null){let E=A.width,N=A.height;(o.width!==E||o.height!==N)&&this.setSize(E,N)}return U===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=zn,!0},this.hasRenderPass=function(){return U},this.end=function(v,A){v.toneMapping=m,w=!0;let E=o,N=a;for(let S=0;S<R.length;S++){let T=R[S];T.enabled!==!1&&(T.render(v,N,E,A),T.needsSwap!==!1&&(E=N,N=N===a?l:a))}if(x!==v.outputColorSpace||g!==v.toneMapping){x=v.outputColorSpace,g=v.toneMapping,d.defines={},ae.getTransfer(x)===ye&&(d.defines.SRGB_TRANSFER="");let S=Cg[g];S&&(d.defines[S]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(u,f),p=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var af=new cn,Ic=new Li(1,1),lf=new lr,cf=new Do,hf=new mr,Vu=[],Gu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function ks(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function Lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function Ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),Ye(e,i)}}function Ug(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),Ye(e,i)}}function Fg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Hu.set(i),n.uniformMatrix4fv(this.addr,!1,Hu),Ye(e,i)}}function Og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function Vg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function Xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ic.compareFunction=e.isReversedDepthBuffer()?za:Ba,r=Ic):r=af,e.setTexture2D(t||r,s)}function qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||cf,s)}function Yg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hf,s)}function $g(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||lf,s)}function Zg(n){switch(n){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return kg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Vg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return $g}}function Jg(n,t){n.uniform1fv(this.addr,t)}function Kg(n,t){let e=ks(t,this.size,2);n.uniform2fv(this.addr,e)}function jg(n,t){let e=ks(t,this.size,3);n.uniform3fv(this.addr,e)}function Qg(n,t){let e=ks(t,this.size,4);n.uniform4fv(this.addr,e)}function tx(n,t){let e=ks(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ex(n,t){let e=ks(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nx(n,t){let e=ks(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ix(n,t){n.uniform1iv(this.addr,t)}function sx(n,t){n.uniform2iv(this.addr,t)}function rx(n,t){n.uniform3iv(this.addr,t)}function ox(n,t){n.uniform4iv(this.addr,t)}function ax(n,t){n.uniform1uiv(this.addr,t)}function lx(n,t){n.uniform2uiv(this.addr,t)}function cx(n,t){n.uniform3uiv(this.addr,t)}function hx(n,t){n.uniform4uiv(this.addr,t)}function ux(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ic:o=af;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function fx(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cf,r[o])}function dx(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hf,r[o])}function px(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lf,r[o])}function mx(n){switch(n){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}var Lc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}},Dc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mx(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function qu(n,t){n.seq.push(t),n.map[t.id]=t}function gx(n,t,e){let i=n.name,s=i.length;for(Rc.lastIndex=0;;){let r=Rc.exec(i),o=Rc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qu(e,c===void 0?new Lc(a,n,t):new Dc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Nc(a),qu(e,u)),e=u}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Yu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xx=37297,_x=0;function yx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var $u=new Zt;function vx(n){ae._getMatrix($u,ae.workingColorSpace,n);let t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case sr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+yx(n.getShaderSource(t),a)}else return r}function Mx(n,t){let e=vx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sx={[jl]:"Linear",[Ql]:"Reinhard",[tc]:"Cineon",[ec]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};function bx(n,t){let e=Sx[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ga=new K;function wx(){ae.getLuminanceCoefficients(Ga);let n=Ga.x.toFixed(4),t=Ga.y.toFixed(4),e=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Tx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function Ju(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(n){return n.replace(Cx,Px)}var Rx=new Map;function Px(n,t){let e=te[t];if(e===void 0){let i=Rx.get(t);if(i!==void 0)e=te[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uc(e)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(n){return n.replace(Ix,Lx)}function Lx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Dx={[Mr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function Nx(n){return Dx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ux={[Oi]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function Fx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ux[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ox={[ns]:"ENVMAP_MODE_REFRACTION"};function kx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ox[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bx={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[gu]:"ENVMAP_BLENDING_MIX",[xu]:"ENVMAP_BLENDING_ADD"};function zx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bx[n.combine]||"ENVMAP_BLENDING_NONE"}function Vx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Gx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Nx(e),c=Fx(e),d=kx(e),u=zx(e),f=Vx(e),x=Ax(e),g=Tx(r),w=s.createProgram(),m,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?te.tonemapping_pars_fragment:"",e.toneMapping!==zn?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Mx("linearToOutputTexel",e.outputColorSpace),wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Uc(o),o=Ju(o,e),o=Ku(o,e),a=Uc(a),a=Ju(a,e),a=Ku(a,e),o=ju(o),a=ju(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let U=R+m+o,v=R+p+a,A=Yu(s,s.VERTEX_SHADER,U),E=Yu(s,s.FRAGMENT_SHADER,v);s.attachShader(w,A),s.attachShader(w,E),e.index0AttributeName!==void 0?s.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function N(D){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(w)||"",k=s.getShaderInfoLog(A)||"",O=s.getShaderInfoLog(E)||"",W=H.trim(),et=k.trim(),$=O.trim(),ut=!0,tt=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(ut=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,w,A,E);else{let lt=Zu(s,A,"vertex"),ct=Zu(s,E,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+lt+`
`+ct)}else W!==""?qt("WebGLProgram: Program Info Log:",W):(et===""||$==="")&&(tt=!1);tt&&(D.diagnostics={runnable:ut,programLog:W,vertexShader:{log:et,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(A),s.deleteShader(E),S=new Os(s,w),T=Ex(s,w)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(w,xx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_x++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=A,this.fragmentShader=E,this}var Hx=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Oc(t),e.set(t,i)),i}},Oc=class{constructor(t){this.id=Hx++,this.code=t,this.usedTimes=0}};function Wx(n){return n===zi||n===Cr||n===Rr}function Xx(n,t,e,i,s,r){let o=new cr,a=new Fc,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,f=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function w(S,T,P,D,H,k){let O=D.fog,W=H.geometry,et=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ut=t.get(S.envMap||et,$),tt=ut&&ut.mapping===Sr?ut.image.height:null,lt=x[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&qt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=ct!==void 0?ct.length:0,Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let pe,se,he,st;if(lt){let me=si[lt];pe=me.vertexShader,se=me.fragmentShader}else{pe=S.vertexShader,se=S.fragmentShader;let me=a.getVertexShaderStage(S),ue=a.getFragmentShaderStage(S);a.update(S,me,ue),he=me.id,st=ue.id}let ht=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Yt=H.isInstancedMesh===!0,Tt=H.isBatchedMesh===!0,jt=!!S.map,we=!!S.matcap,ee=!!ut,le=!!S.aoMap,re=!!S.lightMap,Gt=!!S.bumpMap&&S.wireframe===!1,ve=!!S.normalMap,De=!!S.displacementMap,Ee=!!S.emissiveMap,Te=!!S.metalnessMap,Ce=!!S.roughnessMap,V=S.anisotropy>0,Wt=S.clearcoat>0,It=S.dispersion>0,I=S.retroreflectivity>0,y=S.iridescence>0,z=S.sheen>0,J=S.transmission>0,nt=V&&!!S.anisotropyMap,pt=Wt&&!!S.clearcoatMap,gt=Wt&&!!S.clearcoatNormalMap,Q=Wt&&!!S.clearcoatRoughnessMap,it=y&&!!S.iridescenceMap,yt=y&&!!S.iridescenceThicknessMap,Lt=z&&!!S.sheenColorMap,Mt=z&&!!S.sheenRoughnessMap,mt=!!S.specularMap,Ot=!!S.specularColorMap,Vt=!!S.specularIntensityMap,$t=J&&!!S.transmissionMap,G=J&&!!S.thicknessMap,_t=!!S.gradientMap,rt=!!S.alphaMap,vt=S.alphaTest>0,At=!!S.alphaHash,ft=!!S.extensions,Ut=zn;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Nt={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:pe,fragmentShader:se,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:st,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&H._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&H.instanceColor!==null,instancingMorph:Yt&&H.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:we,envMap:ee,envMapMode:ee&&ut.mapping,envMapCubeUVHeight:tt,aoMap:le,lightMap:re,bumpMap:Gt,normalMap:ve,displacementMap:De,emissiveMap:Ee,normalMapObjectSpace:ve&&S.normalMapType===vu,normalMapTangentSpace:ve&&S.normalMapType===dc,packedNormalMap:ve&&S.normalMapType===dc&&Wx(S.normalMap.format),metalnessMap:Te,roughnessMap:Ce,anisotropy:V,anisotropyMap:nt,clearcoat:Wt,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Q,dispersion:It,retroreflection:I,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:z,sheenColorMap:Lt,sheenRoughnessMap:Mt,specularMap:mt,specularColorMap:Ot,specularIntensityMap:Vt,transmission:J,transmissionMap:$t,thicknessMap:G,gradientMap:_t,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:rt,alphaTest:vt,alphaHash:At,combine:S.combine,mapUv:jt&&g(S.map.channel),aoMapUv:le&&g(S.aoMap.channel),lightMapUv:re&&g(S.lightMap.channel),bumpMapUv:Gt&&g(S.bumpMap.channel),normalMapUv:ve&&g(S.normalMap.channel),displacementMapUv:De&&g(S.displacementMap.channel),emissiveMapUv:Ee&&g(S.emissiveMap.channel),metalnessMapUv:Te&&g(S.metalnessMap.channel),roughnessMapUv:Ce&&g(S.roughnessMap.channel),anisotropyMapUv:nt&&g(S.anisotropyMap.channel),clearcoatMapUv:pt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(S.sheenRoughnessMap.channel),specularMapUv:mt&&g(S.specularMap.channel),specularColorMapUv:Ot&&g(S.specularColorMap.channel),specularIntensityMapUv:Vt&&g(S.specularIntensityMap.channel),transmissionMapUv:$t&&g(S.transmissionMap.channel),thicknessMapUv:G&&g(S.thicknessMap.channel),alphaMapUv:rt&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ve||V),vertexNormals:!!W.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(jt||rt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&ve===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Rt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===ye,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ft&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&S.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(p(T,S),R(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function R(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function U(S){let T=x[S.type],P;if(T){let D=si[T];P=Nu.clone(D.uniforms)}else P=S.uniforms;return P}function v(S,T){let P=d.get(T);return P!==void 0?++P.usedTimes:(P=new Gx(n,T,S,s),c.push(P),d.set(T,P)),P}function A(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function E(S){a.remove(S)}function N(){a.dispose()}return{getParameters:w,getProgramCacheKey:m,getUniforms:U,acquireProgram:v,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:N}}function qx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Yx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function tf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ef(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let x=0;return f.isInstancedMesh&&(x+=2),f.isSkinnedMesh&&(x+=1),x}function a(f,x,g,w,m,p){let R=n[t];return R===void 0?(R={id:f.id,object:f,geometry:x,material:g,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:m,group:p},n[t]=R):(R.id=f.id,R.object=f,R.geometry=x,R.material=g,R.materialVariant=o(f),R.groupOrder=w,R.renderOrder=f.renderOrder,R.z=m,R.group=p),t++,R}function l(f,x,g,w,m,p,R){R.reversedDepth===!0&&(m=-m);let U=a(f,x,g,w,m,p);g.transmission>0?i.push(U):g.transparent===!0?s.push(U):e.push(U)}function c(f,x,g,w,m,p){let R=a(f,x,g,w,m,p);g.transmission>0?i.unshift(R):g.transparent===!0?s.unshift(R):e.unshift(R)}function d(f,x){e.length>1&&e.sort(f||Yx),i.length>1&&i.sort(x||tf),s.length>1&&s.sort(x||tf)}function u(){for(let f=t,x=n.length;f<x;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function $x(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ef,n.set(i,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new Jt};break;case"SpotLight":e={position:new K,direction:new K,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function Jx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Kx=0;function jx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Qx(n){let t=new Zx,e=Jx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);let s=new K,r=new Oe,o=new Oe;function a(c){let d=0,u=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,g=0,w=0,m=0,p=0,R=0,U=0,v=0,A=0,E=0,N=0,S=0,T=0,P=0;c.sort(jx);for(let H=0,k=c.length;H<k;H++){let O=c[H],W=O.color,et=O.intensity,$=O.distance,ut=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===zi?ut=O.shadow.map.texture:ut=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=W.r*et,u+=W.g*et,f+=W.b*et;else if(O.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(O.sh.coefficients[tt],et);P++}else if(O.isSunLight){let tt=t.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let lt=O.shadow,ct=e.get(O);ct.shadowIntensity=lt.intensity,ct.shadowBias=lt.bias,ct.shadowNormalBias=lt.normalBias,ct.shadowRadius=lt.radius,ct.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),i.sunShadow[g]=ct,i.sunShadowMap[g]=ut;let zt=lt.getViewportCount();for(let Bt=0;Bt<zt;Bt++)i.sunShadowMatrix[w+Bt]=lt.getMatrix(Bt),i.sunShadowCascade[w+Bt]=lt._cascadeData[Bt];w+=zt,g++}i.sun[x]=tt,x++}else if(O.isDirectionalLight){let tt=t.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let lt=O.shadow,ct=e.get(O);ct.shadowIntensity=lt.intensity,ct.shadowBias=lt.bias,ct.shadowNormalBias=lt.normalBias,ct.shadowRadius=lt.radius,ct.shadowMapSize=lt.mapSize,i.directionalShadow[m]=ct,i.directionalShadowMap[m]=ut,i.directionalShadowMatrix[m]=O.shadow.matrix,A++}i.directional[m]=tt,m++}else if(O.isSpotLight){let tt=t.get(O);tt.position.setFromMatrixPosition(O.matrixWorld),tt.color.copy(W).multiplyScalar(et),tt.distance=$,tt.coneCos=Math.cos(O.angle),tt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),tt.decay=O.decay,i.spot[R]=tt;let lt=O.shadow;if(O.map&&(i.spotLightMap[S]=O.map,S++,lt.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[R]=lt.matrix,O.castShadow){let ct=e.get(O);ct.shadowIntensity=lt.intensity,ct.shadowBias=lt.bias,ct.shadowNormalBias=lt.normalBias,ct.shadowRadius=lt.radius,ct.shadowMapSize=lt.mapSize,i.spotShadow[R]=ct,i.spotShadowMap[R]=ut,N++}R++}else if(O.isRectAreaLight){let tt=t.get(O);tt.color.copy(W).multiplyScalar(et),tt.halfWidth.set(O.width*.5,0,0),tt.halfHeight.set(0,O.height*.5,0),i.rectArea[U]=tt,U++}else if(O.isPointLight){let tt=t.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity),tt.distance=O.distance,tt.decay=O.decay,O.castShadow){let lt=O.shadow,ct=e.get(O);ct.shadowIntensity=lt.intensity,ct.shadowBias=lt.bias,ct.shadowNormalBias=lt.normalBias,ct.shadowRadius=lt.radius,ct.shadowMapSize=lt.mapSize,ct.shadowCameraNear=lt.camera.near,ct.shadowCameraFar=lt.camera.far,i.pointShadow[p]=ct,i.pointShadowMap[p]=ut,i.pointShadowMatrix[p]=O.shadow.matrix,E++}i.point[p]=tt,p++}else if(O.isHemisphereLight){let tt=t.get(O);tt.skyColor.copy(O.color).multiplyScalar(et),tt.groundColor.copy(O.groundColor).multiplyScalar(et),i.hemi[v]=tt,v++}}U>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;let D=i.hash;(D.sunLength!==x||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==R||D.rectAreaLength!==U||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==N||D.numSpotMaps!==S||D.numLightProbes!==P)&&(i.sun.length=x,i.directional.length=m,i.spot.length=R,i.rectArea.length=U,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,D.sunLength=x,D.directionalLength=m,D.pointLength=p,D.spotLength=R,D.rectAreaLength=U,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=N,D.numSpotMaps=S,D.numLightProbes=P,i.version=Kx++)}function l(c,d){let u=0,f=0,x=0,g=0,w=0,m=0,p=d.matrixWorldInverse;for(let R=0,U=c.length;R<U;R++){let v=c[R];if(v.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(v.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let A=i.rectArea[w];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),w++}else if(v.isPointLight){let A=i.point[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),x++}else if(v.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function nf(n){let t=new Qx(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function d(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function t_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nf(n),t.set(s,[a])):r>=o.length?(a=new nf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`,i_=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],s_=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],sf=new Oe,Ir=new K,Pc=new K;function r_(n,t,e){let i=new pr,s=new ne,r=new ne,o=new Ne,a=new Bo,l=new zo,c={},d=e.maxTextureSize,u={[Fi]:hn,[hn]:Fi,[En]:En},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:e_,fragmentShader:n_}),x=f.clone();x.defines.HORIZONTAL_PASS=1;let g=new _n;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let p=this.type;this.render=function(E,N,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Kh&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);let T=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ni),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==this.type;k&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(W=>W.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,W=E.length;O<W;O++){let et=E[O],$=et.shadow;if($===void 0){qt("WebGLShadowMap:",et,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ut=$.getFrameExtents();s.multiply(ut),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ut.x),s.x=r.x*ut.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ut.y),s.y=r.y*ut.y,$.mapSize.y=r.y));let tt=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=tt,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Is){if(et.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new dn(s.x,s.y,{format:zi,type:Hn,minFilter:He,magFilter:He,generateMipmaps:!1}),$.map.texture.name=et.name+".shadowMap",$.map.depthTexture=new Li(s.x,s.y,Gn),$.map.depthTexture.name=et.name+".shadowMapDepth",$.map.depthTexture.format=jn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Je,$.map.depthTexture.magFilter=Je}else et.isPointLight?($.map=new Wa(s.x),$.map.depthTexture=new Oo(s.x,Vn)):($.map=new dn(s.x,s.y),$.map.depthTexture=new Li(s.x,s.y,Vn)),$.map.depthTexture.name=et.name+".shadowMap",$.map.depthTexture.format=jn,this.type===Mr?($.map.depthTexture.compareFunction=tt?za:Ba,$.map.depthTexture.minFilter=He,$.map.depthTexture.magFilter=He):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Je,$.map.depthTexture.magFilter=Je);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let lt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();et.isPointLight!==!0&&$.updateMatrices(et,S);for(let ct=0;ct<lt;ct++){let zt=$.getCamera(ct);if(et.isPointLight){let Bt=$.camera,pe=$.matrix,se=et.distance||Bt.far;se!==Bt.far&&(Bt.far=se,Bt.updateProjectionMatrix()),Ir.setFromMatrixPosition(et.matrixWorld),Bt.position.copy(Ir),Pc.copy(Bt.position),Pc.add(i_[ct]),Bt.up.copy(s_[ct]),Bt.lookAt(Pc),Bt.updateMatrixWorld(),pe.makeTranslation(-Ir.x,-Ir.y,-Ir.z),sf.multiplyMatrices(Bt.projectionMatrix,Bt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(sf,Bt.coordinateSystem,Bt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ct),n.clear();else{ct===0&&(n.setRenderTarget($.map),n.clear());let Bt=$.getViewport(ct);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),H.viewport(o)}i=$.getFrustum(ct),v(N,S,zt,et,this.type)}$.isPointLightShadow!==!0&&this.type===Is&&R($,S),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,D)};function R(E,N){let S=t.update(w);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new dn(s.x,s.y,{format:zi,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(N,null,S,f,w,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(N,null,S,x,w,null)}function U(E,N,S,T){let P=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let H=P.uuid,k=N.uuid,O=c[H];O===void 0&&(O={},c[H]=O);let W=O[k];W===void 0&&(W=P.clone(),O[k]=W,N.addEventListener("dispose",A)),P=W}if(P.visible=N.visible,P.wireframe=N.wireframe,T===Is?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:u[N.side],P.alphaMap=N.alphaMap,P.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,P.map=N.map,P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.displacementMap=N.displacementMap,P.displacementScale=N.displacementScale,P.displacementBias=N.displacementBias,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=n.properties.get(P);H.light=S}return P}function v(E,N,S,T,P){if(E.visible===!1)return;if(E.layers.test(N.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Is)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let k=t.update(E),O=E.material;if(Array.isArray(O)){let W=k.groups;for(let et=0,$=W.length;et<$;et++){let ut=W[et],tt=O[ut.materialIndex];if(tt&&tt.visible){let lt=U(E,tt,T,P);E.onBeforeShadow(n,E,N,S,k,lt,ut),n.renderBufferDirect(S,null,k,lt,E,ut),E.onAfterShadow(n,E,N,S,k,lt,ut)}}}else if(O.visible){let W=U(E,O,T,P);E.onBeforeShadow(n,E,N,S,k,W,null),n.renderBufferDirect(S,null,k,W,E,null),E.onAfterShadow(n,E,N,S,k,W,null)}}let H=E.children;for(let k=0,O=H.length;k<O;k++)v(H[k],N,S,T,P)}function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let T=c[S],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function o_(n,t){function e(){let G=!1,_t=new Ne,rt=null,vt=new Ne(0,0,0,0);return{setMask:function(At){rt!==At&&!G&&(n.colorMask(At,At,At,At),rt=At)},setLocked:function(At){G=At},setClear:function(At,ft,Ut,Nt,me){me===!0&&(At*=Nt,ft*=Nt,Ut*=Nt),_t.set(At,ft,Ut,Nt),vt.equals(_t)===!1&&(n.clearColor(At,ft,Ut,Nt),vt.copy(_t))},reset:function(){G=!1,rt=null,vt.set(-1,0,0,0)}}}function i(){let G=!1,_t=!1,rt=null,vt=null,At=null;return{setReversed:function(ft){if(_t!==ft){let Ut=t.get("EXT_clip_control");ft?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=ft;let Nt=At;At=null,this.setClear(Nt)}},getReversed:function(){return _t},setTest:function(ft){ft?ht(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(ft){rt!==ft&&!G&&(n.depthMask(ft),rt=ft)},setFunc:function(ft){if(_t&&(ft=Iu[ft]),vt!==ft){switch(ft){case vo:n.depthFunc(n.NEVER);break;case Mo:n.depthFunc(n.ALWAYS);break;case So:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case bo:n.depthFunc(n.EQUAL);break;case wo:n.depthFunc(n.GEQUAL);break;case Ao:n.depthFunc(n.GREATER);break;case To:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=ft}},setLocked:function(ft){G=ft},setClear:function(ft){At!==ft&&(At=ft,_t&&(ft=1-ft),n.clearDepth(ft))},reset:function(){G=!1,rt=null,vt=null,At=null,_t=!1}}}function s(){let G=!1,_t=null,rt=null,vt=null,At=null,ft=null,Ut=null,Nt=null,me=null;return{setTest:function(ue){G||(ue?ht(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!G&&(n.stencilMask(ue),_t=ue)},setFunc:function(ue,Qe,un){(rt!==ue||vt!==Qe||At!==un)&&(n.stencilFunc(ue,Qe,un),rt=ue,vt=Qe,At=un)},setOp:function(ue,Qe,un){(ft!==ue||Ut!==Qe||Nt!==un)&&(n.stencilOp(ue,Qe,un),ft=ue,Ut=Qe,Nt=un)},setLocked:function(ue){G=ue},setClear:function(ue){me!==ue&&(n.clearStencil(ue),me=ue)},reset:function(){G=!1,_t=null,rt=null,vt=null,At=null,ft=null,Ut=null,Nt=null,me=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},f={},x=new WeakMap,g=[],w=null,m=!1,p=null,R=null,U=null,v=null,A=null,E=null,N=null,S=new Jt(0,0,0),T=0,P=!1,D=null,H=null,k=null,O=null,W=null,et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ut=0,tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=ut>=1):tt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=ut>=2);let lt=null,ct={},zt=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),pe=new Ne().fromArray(zt),se=new Ne().fromArray(Bt);function he(G,_t,rt,vt){let At=new Uint8Array(4),ft=n.createTexture();n.bindTexture(G,ft),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<rt;Ut++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(_t+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return ft}let st={};st[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(Ts),Gt(!1),ve(Xl),ht(n.CULL_FACE),le(ni);function ht(G){d[G]!==!0&&(n.enable(G),d[G]=!0)}function Rt(G){d[G]!==!1&&(n.disable(G),d[G]=!1)}function Yt(G,_t){return f[G]!==_t?(n.bindFramebuffer(G,_t),f[G]=_t,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function Tt(G,_t){let rt=g,vt=!1;if(G){rt=x.get(_t),rt===void 0&&(rt=[],x.set(_t,rt));let At=G.textures;if(rt.length!==At.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ut=At.length;ft<Ut;ft++)rt[ft]=n.COLOR_ATTACHMENT0+ft;rt.length=At.length,vt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,vt=!0);vt&&n.drawBuffers(rt)}function jt(G){return w!==G?(n.useProgram(G),w=G,!0):!1}let we={[es]:n.FUNC_ADD,[Qh]:n.FUNC_SUBTRACT,[tu]:n.FUNC_REVERSE_SUBTRACT};we[eu]=n.MIN,we[nu]=n.MAX;let ee={[iu]:n.ZERO,[su]:n.ONE,[ru]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[uu]:n.SRC_ALPHA_SATURATE,[cu]:n.DST_COLOR,[au]:n.DST_ALPHA,[ou]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[hu]:n.ONE_MINUS_DST_COLOR,[lu]:n.ONE_MINUS_DST_ALPHA,[fu]:n.CONSTANT_COLOR,[du]:n.ONE_MINUS_CONSTANT_COLOR,[pu]:n.CONSTANT_ALPHA,[mu]:n.ONE_MINUS_CONSTANT_ALPHA};function le(G,_t,rt,vt,At,ft,Ut,Nt,me,ue){if(G===ni){m===!0&&(Rt(n.BLEND),m=!1);return}if(m===!1&&(ht(n.BLEND),m=!0),G!==jh){if(G!==p||ue!==P){if((R!==es||A!==es)&&(n.blendEquation(n.FUNC_ADD),R=es,A=es),ue)switch(G){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",G);break}else switch(G){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",G);break}U=null,v=null,E=null,N=null,S.set(0,0,0),T=0,p=G,P=ue}return}At=At||_t,ft=ft||rt,Ut=Ut||vt,(_t!==R||At!==A)&&(n.blendEquationSeparate(we[_t],we[At]),R=_t,A=At),(rt!==U||vt!==v||ft!==E||Ut!==N)&&(n.blendFuncSeparate(ee[rt],ee[vt],ee[ft],ee[Ut]),U=rt,v=vt,E=ft,N=Ut),(Nt.equals(S)===!1||me!==T)&&(n.blendColor(Nt.r,Nt.g,Nt.b,me),S.copy(Nt),T=me),p=G,P=!1}function re(G,_t){G.side===En?Rt(n.CULL_FACE):ht(n.CULL_FACE);let rt=G.side===hn;_t&&(rt=!rt),Gt(rt),G.blending===Ls&&G.transparent===!1?le(ni):le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let vt=G.stencilWrite;a.setTest(vt),vt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ee(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(G){D!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),D=G)}function ve(G){G!==Zh?(ht(n.CULL_FACE),G!==H&&(G===Xl?n.cullFace(n.BACK):G===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),H=G}function De(G){G!==k&&($&&n.lineWidth(G),k=G)}function Ee(G,_t,rt){G?(ht(n.POLYGON_OFFSET_FILL),(O!==_t||W!==rt)&&(O=_t,W=rt,o.getReversed()&&(_t=-_t),n.polygonOffset(_t,rt))):Rt(n.POLYGON_OFFSET_FILL)}function Te(G){G?ht(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Ce(G){G===void 0&&(G=n.TEXTURE0+et-1),lt!==G&&(n.activeTexture(G),lt=G)}function V(G,_t,rt){rt===void 0&&(lt===null?rt=n.TEXTURE0+et-1:rt=lt);let vt=ct[rt];vt===void 0&&(vt={type:void 0,texture:void 0},ct[rt]=vt),(vt.type!==G||vt.texture!==_t)&&(lt!==rt&&(n.activeTexture(rt),lt=rt),n.bindTexture(G,_t||st[G]),vt.type=G,vt.texture=_t)}function Wt(){let G=ct[lt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function It(){try{n.compressedTexImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function y(){try{n.texSubImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function z(){try{n.texSubImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function nt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function pt(){try{n.texStorage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function gt(){try{n.texStorage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function Q(){try{n.texImage2D(...arguments)}catch(G){Xt("WebGLState:",G)}}function it(){try{n.texImage3D(...arguments)}catch(G){Xt("WebGLState:",G)}}function yt(G){return u[G]!==void 0?u[G]:n.getParameter(G)}function Lt(G,_t){u[G]!==_t&&(n.pixelStorei(G,_t),u[G]=_t)}function Mt(G){pe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),pe.copy(G))}function mt(G){se.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),se.copy(G))}function Ot(G,_t){let rt=c.get(_t);rt===void 0&&(rt=new WeakMap,c.set(_t,rt));let vt=rt.get(G);vt===void 0&&(vt=n.getUniformBlockIndex(_t,G.name),rt.set(G,vt))}function Vt(G,_t){let vt=c.get(_t).get(G);l.get(_t)!==vt&&(n.uniformBlockBinding(_t,vt,G.__bindingPointIndex),l.set(_t,vt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},lt=null,ct={},f={},x=new WeakMap,g=[],w=null,m=!1,p=null,R=null,U=null,v=null,A=null,E=null,N=null,S=new Jt(0,0,0),T=0,P=!1,D=null,H=null,k=null,O=null,W=null,pe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Rt,bindFramebuffer:Yt,drawBuffers:Tt,useProgram:jt,setBlending:le,setMaterial:re,setFlipSided:Gt,setCullFace:ve,setLineWidth:De,setPolygonOffset:Ee,setScissorTest:Te,activeTexture:Ce,bindTexture:V,unbindTexture:Wt,compressedTexImage2D:It,compressedTexImage3D:I,texImage2D:Q,texImage3D:it,pixelStorei:Lt,getParameter:yt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:J,compressedTexSubImage3D:nt,scissor:Mt,viewport:mt,reset:$t}}function a_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,d=new WeakMap,u=new Set,f,x=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,y){return g?new OffscreenCanvas(I,y):or("canvas")}function m(I,y,z){let J=1,nt=It(I);if((nt.width>z||nt.height>z)&&(J=z/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let pt=Math.floor(J*nt.width),gt=Math.floor(J*nt.height);f===void 0&&(f=w(pt,gt));let Q=y?w(pt,gt):f;return Q.width=pt,Q.height=gt,Q.getContext("2d").drawImage(I,0,0,pt,gt),qt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+pt+"x"+gt+")."),Q}else return"data"in I&&qt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function p(I){return I.generateMipmaps}function R(I){n.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,y,z,J,nt,pt=!1){if(I!==null){if(n[I]!==void 0)return n[I];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt;J&&(gt=t.get("EXT_texture_norm16"),gt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8),z===n.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),z===n.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),y===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8),z===n.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),z===n.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),z===n.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),y===n.RGBA){let it=pt?sr:ae.getTransfer(nt);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=it===ye?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),z===n.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function A(I,y){let z;return I?y===null||y===Vn||y===Ns?z=n.DEPTH24_STENCIL8:y===Gn?z=n.DEPTH32F_STENCIL8:y===Ds&&(z=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vn||y===Ns?z=n.DEPTH_COMPONENT24:y===Gn?z=n.DEPTH_COMPONENT32F:y===Ds&&(z=n.DEPTH_COMPONENT16),z}function E(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Je&&I.minFilter!==He?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function N(I){let y=I.target;y.removeEventListener("dispose",N),T(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function S(I){let y=I.target;y.removeEventListener("dispose",S),D(y)}function T(I){let y=i.get(I);if(y.__webglInit===void 0)return;let z=I.source,J=x.get(z);if(J){let nt=J[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(I),Object.keys(J).length===0&&x.delete(z)}i.remove(I)}function P(I){let y=i.get(I);n.deleteTexture(y.__webglTexture);let z=I.source,J=x.get(z);delete J[y.__cacheKey],o.memory.textures--}function D(I){let y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let nt=0;nt<y.__webglFramebuffer[J].length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[J][nt]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=I.textures;for(let J=0,nt=z.length;J<nt;J++){let pt=i.get(z[J]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(I)}let H=0;function k(){H=0}function O(){return H}function W(I){H=I}function et(){let I=H;return I>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function $(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function ut(I,y){let z=i.get(I);if(I.isVideoTexture&&V(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let J=I.image;if(J===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(z,I,y);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function tt(I,y){let z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Rt(z,I,y);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function lt(I,y){let z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Rt(z,I,y);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function ct(I,y){let z=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){Yt(z,I,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}let zt={[Eo]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},Bt={[Je]:n.NEAREST,[_u]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[He]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},pe={[Su]:n.NEVER,[Eu]:n.ALWAYS,[bu]:n.LESS,[Ba]:n.LEQUAL,[wu]:n.EQUAL,[za]:n.GEQUAL,[Au]:n.GREATER,[Tu]:n.NOTEQUAL};function se(I,y){if(y.type===Gn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===He||y.magFilter===na||y.magFilter===br||y.magFilter===ki||y.minFilter===He||y.minFilter===na||y.minFilter===br||y.minFilter===ki)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,zt[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,zt[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,zt[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Bt[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Bt[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Je||y.minFilter!==br&&y.minFilter!==ki||y.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function he(I,y){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",N));let J=y.source,nt=x.get(J);nt===void 0&&(nt={},x.set(J,nt));let pt=$(y);if(pt!==I.__cacheKey){nt[pt]===void 0&&(nt[pt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),nt[pt].usedTimes++;let gt=nt[I.__cacheKey];gt!==void 0&&(nt[I.__cacheKey].usedTimes--,gt.usedTimes===0&&P(y)),I.__cacheKey=pt,I.__webglTexture=nt[pt].texture}return z}function st(I,y,z){return Math.floor(Math.floor(I/z)/y)}function ht(I,y,z,J){let pt=I.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,J,y.data);else{pt.sort((Lt,Mt)=>Lt.start-Mt.start);let gt=0;for(let Lt=1;Lt<pt.length;Lt++){let Mt=pt[gt],mt=pt[Lt],Ot=Mt.start+Mt.count,Vt=st(mt.start,y.width,4),$t=st(Mt.start,y.width,4);mt.start<=Ot+1&&Vt===$t&&st(mt.start+mt.count-1,y.width,4)===Vt?Mt.count=Math.max(Mt.count,mt.start+mt.count-Mt.start):(++gt,pt[gt]=mt)}pt.length=gt+1;let Q=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Lt=0,Mt=pt.length;Lt<Mt;Lt++){let mt=pt[Lt],Ot=Math.floor(mt.start/4),Vt=Math.ceil(mt.count/4),$t=Ot%y.width,G=Math.floor(Ot/y.width),_t=Vt,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,$t,G,_t,rt,z,J,y.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function Rt(I,y,z){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let nt=he(I,y),pt=y.source;e.bindTexture(J,I.__webglTexture,n.TEXTURE0+z);let gt=i.get(pt);if(pt.version!==gt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let rt=ae.getPrimaries(ae.workingColorSpace),vt=y.colorSpace===_i?null:ae.getPrimaries(y.colorSpace),At=y.colorSpace===_i||rt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let it=m(y.image,!1,s.maxTextureSize);it=Wt(y,it);let yt=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),Mt=v(y.internalFormat,yt,Lt,y.normalized,y.colorSpace,y.isVideoTexture);se(J,y);let mt,Ot=y.mipmaps,Vt=y.isVideoTexture!==!0,$t=gt.__version===void 0||nt===!0,G=pt.dataReady,_t=E(y,it);if(y.isDepthTexture)Mt=A(y.format===Bi,y.type),$t&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,Mt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Mt,it.width,it.height,0,yt,Lt,null));else if(y.isDataTexture)if(Ot.length>0){Vt&&$t&&e.texStorage2D(n.TEXTURE_2D,_t,Mt,Ot[0].width,Ot[0].height);for(let rt=0,vt=Ot.length;rt<vt;rt++)mt=Ot[rt],Vt?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,mt.width,mt.height,yt,Lt,mt.data):e.texImage2D(n.TEXTURE_2D,rt,Mt,mt.width,mt.height,0,yt,Lt,mt.data);y.generateMipmaps=!1}else Vt?($t&&e.texStorage2D(n.TEXTURE_2D,_t,Mt,it.width,it.height),G&&ht(y,it,yt,Lt)):e.texImage2D(n.TEXTURE_2D,0,Mt,it.width,it.height,0,yt,Lt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Mt,Ot[0].width,Ot[0].height,it.depth);for(let rt=0,vt=Ot.length;rt<vt;rt++)if(mt=Ot[rt],y.format!==Cn)if(yt!==null)if(Vt){if(G)if(y.layerUpdates.size>0){let At=yc(mt.width,mt.height,y.format,y.type);for(let ft of y.layerUpdates){let Ut=mt.data.subarray(ft*At/mt.data.BYTES_PER_ELEMENT,(ft+1)*At/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,ft,mt.width,mt.height,1,yt,Ut)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,it.depth,yt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Mt,mt.width,mt.height,it.depth,0,mt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,it.depth,yt,Lt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Mt,mt.width,mt.height,it.depth,0,yt,Lt,mt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Vt&&$t&&e.texStorage2D(n.TEXTURE_2D,_t,Mt,Ot[0].width,Ot[0].height);for(let rt=0,vt=Ot.length;rt<vt;rt++)mt=Ot[rt],y.format!==Cn?yt!==null?Vt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,mt.width,mt.height,yt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Mt,mt.width,mt.height,0,mt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,mt.width,mt.height,yt,Lt,mt.data):e.texImage2D(n.TEXTURE_2D,rt,Mt,mt.width,mt.height,0,yt,Lt,mt.data)}else if(y.isDataArrayTexture)if(Vt){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Mt,it.width,it.height,it.depth),G)if(y.layerUpdates.size>0){let rt=yc(it.width,it.height,y.format,y.type);for(let vt of y.layerUpdates){let At=it.data.subarray(vt*rt/it.data.BYTES_PER_ELEMENT,(vt+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,it.width,it.height,1,yt,Lt,At)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Lt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,it.width,it.height,it.depth,0,yt,Lt,it.data);else if(y.isData3DTexture)Vt?($t&&e.texStorage3D(n.TEXTURE_3D,_t,Mt,it.width,it.height,it.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Lt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,it.width,it.height,it.depth,0,yt,Lt,it.data);else if(y.isFramebufferTexture){if($t)if(Vt)e.texStorage2D(n.TEXTURE_2D,_t,Mt,it.width,it.height);else{let rt=it.width,vt=it.height;for(let At=0;At<_t;At++)e.texImage2D(n.TEXTURE_2D,At,Mt,rt,vt,0,yt,Lt,null),rt>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),it.parentNode!==rt){rt.appendChild(it),u.add(y),rt.onpaint=vt=>{let At=vt.changedElements;for(let ft of u)At.includes(ft.image)&&(ft.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let At=n.RGBA,ft=n.RGBA,Ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,ft,Ut,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&$t){let rt=It(Ot[0]);e.texStorage2D(n.TEXTURE_2D,_t,Mt,rt.width,rt.height)}for(let rt=0,vt=Ot.length;rt<vt;rt++)mt=Ot[rt],Vt?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,yt,Lt,mt):e.texImage2D(n.TEXTURE_2D,rt,Mt,yt,Lt,mt);y.generateMipmaps=!1}else if(Vt){if($t){let rt=It(it);e.texStorage2D(n.TEXTURE_2D,_t,Mt,rt.width,rt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Lt,it)}else e.texImage2D(n.TEXTURE_2D,0,Mt,yt,Lt,it);p(y)&&R(J),gt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Yt(I,y,z){if(y.image.length!==6)return;let J=he(I,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+z);let pt=i.get(nt);if(nt.version!==pt.__version||J===!0){e.activeTexture(n.TEXTURE0+z);let gt=ae.getPrimaries(ae.workingColorSpace),Q=y.colorSpace===_i?null:ae.getPrimaries(y.colorSpace),it=y.colorSpace===_i||gt===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=y.isCompressedTexture||y.image[0].isCompressedTexture,Lt=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let ft=0;ft<6;ft++)!yt&&!Lt?Mt[ft]=m(y.image[ft],!0,s.maxCubemapSize):Mt[ft]=Lt?y.image[ft].image:y.image[ft],Mt[ft]=Wt(y,Mt[ft]);let mt=Mt[0],Ot=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type),$t=v(y.internalFormat,Ot,Vt,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,_t=pt.__version===void 0||J===!0,rt=nt.dataReady,vt=E(y,mt);se(n.TEXTURE_CUBE_MAP,y);let At;if(yt){G&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,$t,mt.width,mt.height);for(let ft=0;ft<6;ft++){At=Mt[ft].mipmaps;for(let Ut=0;Ut<At.length;Ut++){let Nt=At[Ut];y.format!==Cn?Ot!==null?G?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,0,0,Nt.width,Nt.height,Ot,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,$t,Nt.width,Nt.height,0,Nt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,0,0,Nt.width,Nt.height,Ot,Vt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,$t,Nt.width,Nt.height,0,Ot,Vt,Nt.data)}}}else{if(At=y.mipmaps,G&&_t){At.length>0&&vt++;let ft=It(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,$t,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Lt){G?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Mt[ft].width,Mt[ft].height,Ot,Vt,Mt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,$t,Mt[ft].width,Mt[ft].height,0,Ot,Vt,Mt[ft].data);for(let Ut=0;Ut<At.length;Ut++){let me=At[Ut].image[ft].image;G?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,0,0,me.width,me.height,Ot,Vt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,$t,me.width,me.height,0,Ot,Vt,me.data)}}else{G?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ot,Vt,Mt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,$t,Ot,Vt,Mt[ft]);for(let Ut=0;Ut<At.length;Ut++){let Nt=At[Ut];G?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,0,0,Ot,Vt,Nt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,$t,Ot,Vt,Nt.image[ft])}}}p(y)&&R(n.TEXTURE_CUBE_MAP),pt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Tt(I,y,z,J,nt,pt){let gt=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),it=v(z.internalFormat,gt,Q,z.normalized,z.colorSpace),yt=i.get(y),Lt=i.get(z);if(Lt.__renderTarget=y,!yt.__hasExternalTextures){let Mt=Math.max(1,y.width>>pt),mt=Math.max(1,y.height>>pt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,pt,it,Mt,mt,y.depth,0,gt,Q,null):e.texImage2D(nt,pt,it,Mt,mt,0,gt,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Ce(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,nt,Lt.__webglTexture,0,Te(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,nt,Lt.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(I,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){let J=y.depthTexture,nt=J&&J.isDepthTexture?J.type:null,pt=A(y.stencilBuffer,nt),gt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ce(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(y),pt,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(y),pt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,pt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,I)}else{let J=y.textures;for(let nt=0;nt<J.length;nt++){let pt=J[nt],gt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),it=v(pt.internalFormat,gt,Q,pt.normalized,pt.colorSpace);Ce(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(y),it,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(y),it,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,it,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(I,y,z){let J=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(y.depthTexture);if(nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,y.depthTexture.addEventListener("dispose",N)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),se(n.TEXTURE_CUBE_MAP,y.depthTexture);let yt=r.convert(y.depthTexture.format),Lt=r.convert(y.depthTexture.type),Mt;y.depthTexture.format===jn?Mt=n.DEPTH_COMPONENT24:y.depthTexture.format===Bi&&(Mt=n.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Mt,y.width,y.height,0,yt,Lt,null)}}else ut(y.depthTexture,0);let pt=nt.__webglTexture,gt=Te(y),Q=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,it=y.depthTexture.format===Bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===jn)Ce(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,pt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,pt,0);else if(y.depthTexture.format===Bi)Ce(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,pt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(I){let y=i.get(I),z=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=J}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)we(y.__webglFramebuffer[J],I,J);else{let J=I.texture.mipmaps;J&&J.length>0?we(y.__webglFramebuffer[0],I,0):we(y.__webglFramebuffer,I,0)}else if(z){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),jt(y.__webglDepthbuffer[J],I,!1);else{let nt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}else{let J=I.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),jt(y.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,pt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(I,y,z){let J=i.get(I);y!==void 0&&Tt(J.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ee(I)}function re(I){let y=I.texture,z=i.get(I),J=i.get(y);I.addEventListener("dispose",S);let nt=I.textures,pt=I.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++),pt){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let it=0;it<y.mipmaps.length;it++)z.__webglFramebuffer[Q][it]=n.createFramebuffer()}else z.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[Q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(gt)for(let Q=0,it=nt.length;Q<it;Q++){let yt=i.get(nt[Q]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Ce(I)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<nt.length;Q++){let it=nt[Q];z.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let yt=r.convert(it.format,it.colorSpace),Lt=r.convert(it.type),Mt=v(it.internalFormat,yt,Lt,it.normalized,it.colorSpace,I.isXRRenderTarget===!0),mt=Te(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Mt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),jt(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),se(n.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)Tt(z.__webglFramebuffer[Q][it],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else Tt(z.__webglFramebuffer[Q],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(y)&&R(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let Q=0,it=nt.length;Q<it;Q++){let yt=nt[Q],Lt=i.get(yt),Mt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Mt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Lt.__webglTexture),se(Mt,yt),Tt(z.__webglFramebuffer,I,yt,n.COLOR_ATTACHMENT0+Q,Mt,0),p(yt)&&R(Mt)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,J.__webglTexture),se(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)Tt(z.__webglFramebuffer[it],I,y,n.COLOR_ATTACHMENT0,Q,it);else Tt(z.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,Q,0);p(y)&&R(Q),e.unbindTexture()}I.depthBuffer&&ee(I)}function Gt(I){let y=I.textures;for(let z=0,J=y.length;z<J;z++){let nt=y[z];if(p(nt)){let pt=U(I),gt=i.get(nt).__webglTexture;e.bindTexture(pt,gt),R(pt),e.unbindTexture()}}}let ve=[],De=[];function Ee(I){if(I.samples>0){if(Ce(I)===!1){let y=I.textures,z=I.width,J=I.height,nt=n.COLOR_BUFFER_BIT,pt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(I),Q=y.length>1;if(Q)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let it=I.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Lt=i.get(y[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,nt,n.NEAREST),l===!0&&(ve.length=0,De.length=0,ve.push(n.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ve.push(pt),De.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Lt=i.get(y[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Te(I){return Math.min(s.maxSamples,I.samples)}function Ce(I){let y=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(I){let y=o.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function Wt(I,y){let z=I.colorSpace,J=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==ir&&z!==_i&&(ae.getTransfer(z)===ye?(J!==Cn||nt!==Mn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",z)),y}function It(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=et,this.resetTextureUnits=k,this.getTextureUnits=O,this.setTextureUnits=W,this.setTexture2D=ut,this.setTexture2DArray=tt,this.setTexture3D=lt,this.setTextureCube=ct,this.rebindTextures=le,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function l_(n,t){function e(i,s=_i){let r,o=ae.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===sa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oc)return n.BYTE;if(i===ac)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===ia)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===hc)return n.ALPHA;if(i===uc)return n.RGB;if(i===Cn)return n.RGBA;if(i===jn)return n.DEPTH_COMPONENT;if(i===Bi)return n.DEPTH_STENCIL;if(i===fc)return n.RED;if(i===oa)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===aa)return n.RG_INTEGER;if(i===la)return n.RGBA_INTEGER;if(i===wr||i===Ar||i===Tr||i===Er)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===ha||i===ua||i===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===da||i===pa||i===ma||i===ga||i===xa||i===Cr||i===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===da||i===pa)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ga)return r.COMPRESSED_R11_EAC;if(i===xa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Cr)return r.COMPRESSED_RG11_EAC;if(i===_a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ya||i===va||i===Ma||i===Sa||i===ba||i===wa||i===Aa||i===Ta||i===Ea||i===Ca||i===Ra||i===Pa||i===Ia||i===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ea)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Da||i===Na||i===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Da)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===Oa||i===Rr||i===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new sn({vertexShader:c_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Qn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,x=null,g=null,w=typeof XRWebGLBinding<"u",m=new kc,p={},R=e.getContextAttributes(),U=null,v=null,A=[],E=[],N=new ne,S=null,T=null,P=new nn;P.viewport=new Ne;let D=new nn;D.viewport=new Ne;let H=[P,D],k=new jo,O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ht=A[st];return ht===void 0&&(ht=new Rs,A[st]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(st){let ht=A[st];return ht===void 0&&(ht=new Rs,A[st]=ht),ht.getGripSpace()},this.getHand=function(st){let ht=A[st];return ht===void 0&&(ht=new Rs,A[st]=ht),ht.getHandSpace()};function et(st){let ht=E.indexOf(st.inputSource);if(ht===-1)return;let Rt=A[ht];Rt!==void 0&&(Rt.update(st.inputSource,st.frame,c||o),Rt.dispatchEvent({type:st.type,data:st.inputSource}))}function $(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ut);for(let st=0;st<A.length;st++){let ht=E[st];ht!==null&&(E[st]=null,A[st].disconnect(ht))}O=null,W=null,m.reset();for(let st in p)delete p[st];if(t.setRenderTarget(U),x=null,f=null,u=null,s=null,v=null,he.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(N.width,N.height,!1),T!==null){let st=T.camera;st.fov=T.fov,st.zoom=T.zoom,st.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return u===null&&w&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ut),R.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Yt=null,Tt=null;R.depth&&(Tt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=R.stencil?Bi:jn,Yt=R.stencil?Ns:Vn);let jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new dn(f.textureWidth,f.textureHeight,{format:Cn,type:Mn,depthTexture:new Li(f.textureWidth,f.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Rt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new dn(x.framebufferWidth,x.framebufferHeight,{format:Cn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ut(st){for(let ht=0;ht<st.removed.length;ht++){let Rt=st.removed[ht],Yt=E.indexOf(Rt);Yt>=0&&(E[Yt]=null,A[Yt].disconnect(Rt))}for(let ht=0;ht<st.added.length;ht++){let Rt=st.added[ht],Yt=E.indexOf(Rt);if(Yt===-1){for(let jt=0;jt<A.length;jt++)if(jt>=E.length){E.push(Rt),Yt=jt;break}else if(E[jt]===null){E[jt]=Rt,Yt=jt;break}if(Yt===-1)break}let Tt=A[Yt];Tt&&Tt.connect(Rt)}}let tt=new K,lt=new K;function ct(st,ht,Rt){tt.setFromMatrixPosition(ht.matrixWorld),lt.setFromMatrixPosition(Rt.matrixWorld);let Yt=tt.distanceTo(lt),Tt=ht.projectionMatrix.elements,jt=Rt.projectionMatrix.elements,we=Tt[14]/(Tt[10]-1),ee=Tt[14]/(Tt[10]+1),le=(Tt[9]+1)/Tt[5],re=(Tt[9]-1)/Tt[5],Gt=(Tt[8]-1)/Tt[0],ve=(jt[8]+1)/jt[0],De=we*Gt,Ee=we*ve,Te=Yt/(-Gt+ve),Ce=Te*-Gt;if(ht.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Ce),st.translateZ(Te),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Tt[10]===-1)st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let V=we+Te,Wt=ee+Te,It=De-Ce,I=Ee+(Yt-Ce),y=le*ee/Wt*V,z=re*ee/Wt*V;st.projectionMatrix.makePerspective(It,I,y,z,V,Wt),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function zt(st,ht){ht===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ht.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ht=st.near,Rt=st.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),k.near=D.near=P.near=ht,k.far=D.far=P.far=Rt,(O!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,W=k.far),k.layers.mask=st.layers.mask|6,P.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Yt=st.parent,Tt=k.cameras;zt(k,Yt);for(let jt=0;jt<Tt.length;jt++)zt(Tt[jt],Yt);Tt.length===2?ct(k,P,D):k.projectionMatrix.copy(P.projectionMatrix),T===null&&st.isPerspectiveCamera&&(T={camera:st,fov:st.fov,zoom:st.zoom}),Bt(st,k,Yt)};function Bt(st,ht,Rt){Rt===null?st.matrix.copy(ht.matrixWorld):(st.matrix.copy(Rt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ht.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Po*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&x===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(st){return p[st]};let pe=null;function se(st,ht){if(d=ht.getViewerPose(c||o),g=ht,d!==null){let Rt=d.views;x!==null&&(t.setRenderTargetFramebuffer(v,x.framebuffer),t.setRenderTarget(v));let Yt=!1;Rt.length!==k.cameras.length&&(k.cameras.length=0,Yt=!0);for(let ee=0;ee<Rt.length;ee++){let le=Rt[ee],re=null;if(x!==null)re=x.getViewport(le);else{let ve=u.getViewSubImage(f,le);re=ve.viewport,ee===0&&(t.setRenderTargetTextures(v,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(v))}let Gt=H[ee];Gt===void 0&&(Gt=new nn,Gt.layers.enable(ee),Gt.viewport=new Ne,H[ee]=Gt),Gt.matrix.fromArray(le.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(le.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(re.x,re.y,re.width,re.height),ee===0&&(k.matrix.copy(Gt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Yt===!0&&k.cameras.push(Gt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){u=i.getBinding();let ee=u.getDepthInformation(Rt[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(Tt&&Tt.includes("camera-access")&&w){t.state.unbindTexture(),u=i.getBinding();for(let ee=0;ee<Rt.length;ee++){let le=Rt[ee].camera;if(le){let re=p[le];re||(re=new gr,p[le]=re);let Gt=u.getCameraImage(le);re.sourceTexture=Gt}}}}for(let Rt=0;Rt<A.length;Rt++){let Yt=E[Rt],Tt=A[Rt];Yt!==null&&Tt!==void 0&&Tt.update(Yt,ht,c||o)}pe&&pe(st,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}let he=new rf;he.setAnimationLoop(se),this.setAnimationLoop=function(st){pe=st},this.dispose=function(){}}},u_=new Oe,uf=new Zt;uf.set(-1,0,0,0,1,0,0,0,1);function f_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,U,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&x(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),w(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,U):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let R=t.get(p),U=R.envMap,v=R.envMapRotation;U&&(m.envMap.value=U,m.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(v)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,U){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=U*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function w(m,p){let R=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function d_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let E=A.program;i.uniformBlockBinding(v,E)}function c(v,A){let E=s[v.id];E===void 0&&(m(v),E=d(v),s[v.id]=E,v.addEventListener("dispose",R));let N=A.program;i.updateUBOMapping(v,N);let S=t.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function d(v){let A=u();v.__bindingPointIndex=A;let E=n.createBuffer(),N=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let A=s[v.id],E=v.uniforms,N=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let S=0,T=E.length;S<T;S++){let P=E[S];if(Array.isArray(P))for(let D=0,H=P.length;D<H;D++)x(P[D],S,D,N);else x(P,S,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(v,A,E,N){if(w(v,A,E,N)===!0){let S=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let H=T[D],k=p(H);g(H,v.__data,P),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,v.__data)}}function g(v,A,E){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,E)}function w(v,A,E,N){let S=v.value,T=A+"_"+E;if(N[T]===void 0)return typeof S=="number"||typeof S=="boolean"?N[T]=S:ArrayBuffer.isView(S)?N[T]=S.slice():N[T]=S.clone(),!0;{let P=N[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return N[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function m(v){let A=v.uniforms,E=0,N=16;for(let T=0,P=A.length;T<P;T++){let D=Array.isArray(A[T])?A[T]:[A[T]];for(let H=0,k=D.length;H<k;H++){let O=D[H],W=Array.isArray(O.value)?O.value:[O.value];for(let et=0,$=W.length;et<$;et++){let ut=W[et],tt=p(ut),lt=E%N,ct=lt%tt.boundary,zt=lt+ct;E+=ct,zt!==0&&N-zt<tt.storage&&(E+=N-zt),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=tt.storage}}}let S=E%N;return S>0&&(E+=N-S),v.__size=E,v.__cache={},this}function p(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),A}function R(v){let A=v.target;A.removeEventListener("dispose",R);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function U(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:U}}var p_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function m_(){return ii===null&&(ii=new Fo(p_,16,16,zi,Hn),ii.name="DFG_LUT",ii.minFilter=He,ii.magFilter=He,ii.wrapS=Kn,ii.wrapT=Kn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Xa=class{constructor(t={}){let{canvas:e=Cu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:x=Mn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let w=x,m=new Set([la,aa,oa]),p=new Set([Mn,Vn,Ds,Ns,sa,ra]),R=new Uint32Array(4),U=new Int32Array(4),v=new K,A=null,E=null,N=[],S=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,H=null,k=null,O=null,W=null;this._outputColorSpace=Ge;let et=0,$=0,ut=null,tt=-1,lt=null,ct=new Ne,zt=new Ne,Bt=null,pe=new Jt(0),se=0,he=e.width,st=e.height,ht=1,Rt=null,Yt=null,Tt=new Ne(0,0,he,st),jt=new Ne(0,0,he,st),we=!1,ee=new pr,le=!1,re=!1,Gt=new Oe,ve=new K,De=new Ne,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ce(){return ut===null?ht:1}let V=i;function Wt(b,B){return e.getContext(b,B)}let It,I,y,z,J,nt,pt,gt,Q,it,yt,Lt,Mt,mt,Ot,Vt,$t,G,_t,rt,vt,At,ft;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Qe,!1),V===null){let B="webgl2";if(V=Wt(B,b),V===null)throw Wt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(b){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),Xt("WebGLRenderer: "+b.message),b}function Ut(){It=new Sg(V),It.init(),vt=new l_(V,It),I=new fg(V,It,t,vt),y=new o_(V,It),I.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),k=V.createFramebuffer(),O=V.createFramebuffer(),W=V.createFramebuffer(),z=new Ag(V),J=new qx,nt=new a_(V,It,y,J,I,vt,z),pt=new Mg(P),gt=new Ep(V),At=new hg(V,gt),Q=new bg(V,gt,z,At),it=new Eg(V,Q,gt,At,z),G=new Tg(V,I,nt),Ot=new dg(J),yt=new Xx(P,pt,It,I,At,Ot),Lt=new f_(P,J),Mt=new $x,mt=new t_(It),$t=new cg(P,pt,y,it,g,l),Vt=new r_(P,it,I),ft=new d_(V,z,I,y),_t=new ug(V,It,z),rt=new wg(V,It,z),z.programs=yt.programs,P.capabilities=I,P.extensions=It,P.properties=J,P.renderLists=Mt,P.shadowMap=Vt,P.state=y,P.info=z}w!==Mn&&(T=new Rg(w,e.width,e.height,a,s,r));let Nt=new Bc(P,V);this.xr=Nt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let b=It.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=It.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(he,st,!1))},this.getSize=function(b){return b.set(he,st)},this.setSize=function(b,B,j=!0){if(Nt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,st=B,e.width=Math.floor(b*ht),e.height=Math.floor(B*ht),j===!0&&(e.style.width=b+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(he*ht,st*ht).floor()},this.setDrawingBufferSize=function(b,B,j){he=b,st=B,ht=j,e.width=Math.floor(b*j),e.height=Math.floor(B*j),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(w===Mn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ct)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,B,j,X){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,B,j,X),y.viewport(ct.copy(Tt).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(jt)},this.setScissor=function(b,B,j,X){b.isVector4?jt.set(b.x,b.y,b.z,b.w):jt.set(b,B,j,X),y.scissor(zt.copy(jt).multiplyScalar(ht).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(b){y.setScissorTest(we=b)},this.setOpaqueSort=function(b){Rt=b},this.setTransparentSort=function(b){Yt=b},this.getClearColor=function(b){return b.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,j=!0){let X=0;if(b){let q=!1;if(ut!==null){let St=ut.texture.format;q=m.has(St)}if(q){let St=ut.texture.type,Et=p.has(St),bt=$t.getClearColor(),Pt=$t.getClearAlpha(),Ft=bt.r,Kt=bt.g,Qt=bt.b;Et?(R[0]=Ft,R[1]=Kt,R[2]=Qt,R[3]=Pt,V.clearBufferuiv(V.COLOR,0,R)):(U[0]=Ft,U[1]=Kt,U[2]=Qt,U[3]=Pt,V.clearBufferiv(V.COLOR,0,U))}else X|=V.COLOR_BUFFER_BIT}B&&(X|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),$t.dispose(),Mt.dispose(),mt.dispose(),J.dispose(),pt.dispose(),it.dispose(),At.dispose(),ft.dispose(),yt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",zr),Nt.removeEventListener("sessionend",on),Xn.stop()};function me(b){b.preventDefault(),ar("WebGLRenderer: Context Lost."),D=!0}function ue(){ar("WebGLRenderer: Context Restored."),D=!1;let b=z.autoReset,B=Vt.enabled,j=Vt.autoUpdate,X=Vt.needsUpdate,q=Vt.type;Ut(),z.autoReset=b,Vt.enabled=B,Vt.autoUpdate=j,Vt.needsUpdate=X,Vt.type=q}function Qe(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function un(b){let B=b.target;B.removeEventListener("dispose",un),Sn(B)}function Sn(b){il(b),J.remove(b)}function il(b){let B=J.get(b).programs;B!==void 0&&(B.forEach(function(j){yt.releaseProgram(j)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,j,X,q,St){B===null&&(B=Ee);let Et=q.isMesh&&q.matrixWorld.determinantAffine()<0,bt=Gr(b,B,j,X,q);y.setMaterial(X,Et);let Pt=j.index,Ft=1;if(X.wireframe===!0){if(Pt=Q.getWireframeAttribute(j),Pt===void 0)return;Ft=2}let Kt=j.drawRange,Qt=j.attributes.position,Dt=Kt.start*Ft,fe=(Kt.start+Kt.count)*Ft;St!==null&&(Dt=Math.max(Dt,St.start*Ft),fe=Math.min(fe,(St.start+St.count)*Ft)),Pt!==null?(Dt=Math.max(Dt,0),fe=Math.min(fe,Pt.count)):Qt!=null&&(Dt=Math.max(Dt,0),fe=Math.min(fe,Qt.count));let Fe=fe-Dt;if(Fe<0||Fe===1/0)return;At.setup(q,X,bt,j,Pt);let _e,ge=_t;if(Pt!==null&&(_e=gt.get(Pt),ge=rt,ge.setIndex(_e)),q.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*Ce()),ge.setMode(V.LINES)):ge.setMode(V.TRIANGLES);else if(q.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),y.setLineWidth(Be*Ce()),q.isLineSegments?ge.setMode(V.LINES):q.isLineLoop?ge.setMode(V.LINE_LOOP):ge.setMode(V.LINE_STRIP)}else q.isPoints?ge.setMode(V.POINTS):q.isSprite&&ge.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(It.get("WEBGL_multi_draw"))ge.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Be=q._multiDrawStarts,Ct=q._multiDrawCounts,ze=q._multiDrawCount,oe=Pt?gt.get(Pt).bytesPerElement:1,$e=J.get(X).currentProgram.getUniforms();for(let an=0;an<ze;an++)$e.setValue(V,"_gl_DrawID",an),ge.render(Be[an]/oe,Ct[an])}else if(q.isInstancedMesh)ge.renderInstances(Dt,Fe,q.count);else if(j.isInstancedBufferGeometry){let Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ct=Math.min(j.instanceCount,Be);ge.renderInstances(Dt,Fe,Ct)}else ge.render(Dt,Fe)};function Hs(b,B,j,X){H!==null&&b.isNodeMaterial&&H.setObject(X,b),le===!0&&Ot.setState(b,j,!1),b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,qi(b,B,X),b.side=Fi,b.needsUpdate=!0,qi(b,B,X),b.side=En):qi(b,B,X)}this.compile=function(b,B,j=null){j===null&&(j=b),H!==null&&H.renderStart(b,B,j),E=mt.get(j),E.init(B),S.push(E),j.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),b!==j&&b.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),re=this.localClippingEnabled,le=Ot.init(this.clippingPlanes,re),le===!0&&Ot.setGlobalState(this.clippingPlanes,B),H!==null&&Vt.render(E.state.shadowsArray,j,B);let X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let Et=0;Et<St.length;Et++){let bt=St[Et];Hs(bt,j,B,q),X.add(bt)}else Hs(St,j,B,q),X.add(St)}),E=S.pop(),H!==null&&H.renderEnd(),X},this.compileAsync=function(b,B,j=null){let X=this.compile(b,B,j);return new Promise(q=>{function St(){if(X.forEach(function(Et){let Pt=J.get(Et).currentProgram;(Pt===void 0||Pt.isReady())&&X.delete(Et)}),X.size===0){q(b);return}setTimeout(St,10)}It.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let os=null;function sl(b){os&&os(b)}function zr(){Xn.stop()}function on(){Xn.start()}let Xn=new rf;Xn.setAnimationLoop(sl),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(b){os=b,Nt.setAnimationLoop(b),b===null?Xn.stop():Xn.start()},Nt.addEventListener("sessionstart",zr),Nt.addEventListener("sessionend",on),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(b,B);let j=Nt.enabled===!0&&Nt.isPresenting===!0,X=T!==null&&(ut===null||j)&&T.begin(P,ut);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(B),B=Nt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,B,ut),E=mt.get(b,S.length),E.init(B),E.state.textureUnits=nt.getTextureUnits(),S.push(E),Gt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(Gt,Bn,B.reversedDepth),re=this.localClippingEnabled,le=Ot.init(this.clippingPlanes,re),A=Mt.get(b,N.length),A.init(),N.push(A),Nt.enabled===!0&&Nt.isPresenting===!0){let Et=P.xr.getDepthSensingMesh();Et!==null&&Wi(Et,B,-1/0,P.sortObjects)}Wi(b,B,0,P.sortObjects),A.finish(),H!==null&&H.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(Rt,Yt),Te=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Te&&$t.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ot.beginShadows();let q=E.state.shadowsArray;if(Vt.render(q,b,B),le===!0&&Ot.endShadows(),(X&&T.hasRenderPass())===!1){let Et=A.opaque,bt=A.transmissive;if(E.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(bt.length>0)for(let Ft=0,Kt=Pt.length;Ft<Kt;Ft++){let Qt=Pt[Ft];Pn(Et,bt,b,Qt)}Te&&$t.render(b);for(let Ft=0,Kt=Pt.length;Ft<Kt;Ft++){let Qt=Pt[Ft];Xi(A,b,Qt,Qt.viewport)}}else bt.length>0&&Pn(Et,bt,b,B),Te&&$t.render(b),Xi(A,b,B)}ut!==null&&$===0&&(nt.updateMultisampleRenderTarget(ut),nt.updateRenderTargetMipmap(ut)),X&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,B),At.resetDefaultState(),tt=-1,lt=null,S.pop(),S.length>0?(E=S[S.length-1],nt.setTextureUnits(E.state.textureUnits),le===!0&&Ot.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,H!==null&&H.renderEnd()};function Wi(b,B,j,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ee)){X&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);let Et=it.update(b),bt=b.material;bt.visible&&A.push(b,Et,bt,j,De.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ee))){let Et=it.update(b),bt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),De.copy(Et.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(bt)){let Pt=Et.groups;for(let Ft=0,Kt=Pt.length;Ft<Kt;Ft++){let Qt=Pt[Ft],Dt=bt[Qt.materialIndex];Dt&&Dt.visible&&A.push(b,Et,Dt,j,De.z,Qt,B)}}else bt.visible&&A.push(b,Et,bt,j,De.z,null,B)}}let St=b.children;for(let Et=0,bt=St.length;Et<bt;Et++)Wi(St[Et],B,j,X)}function Xi(b,B,j,X){let{opaque:q,transmissive:St,transparent:Et}=b;E.setupLightsView(j),le===!0&&Ot.setGlobalState(P.clippingPlanes,j),X&&y.viewport(ct.copy(X)),q.length>0&&qn(q,B,j),St.length>0&&qn(St,B,j),Et.length>0&&qn(Et,B,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Pn(b,B,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Dt=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:Dt?Hn:Mn,minFilter:ki,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let St=E.state.transmissionRenderTarget[X.id],Et=X.viewport||ct;St.setSize(Et.z*P.transmissionResolutionScale,Et.w*P.transmissionResolutionScale);let bt=P.getRenderTarget(),Pt=P.getActiveCubeFace(),Ft=P.getActiveMipmapLevel();P.setRenderTarget(St),P.getClearColor(pe),se=P.getClearAlpha(),se<1&&P.setClearColor(16777215,.5),P.clear(),Te&&$t.render(j);let Kt=P.toneMapping;P.toneMapping=zn;let Qt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),le===!0&&Ot.setGlobalState(P.clippingPlanes,X),qn(b,j,X),nt.updateMultisampleRenderTarget(St),nt.updateRenderTargetMipmap(St),It.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let fe=0,Fe=B.length;fe<Fe;fe++){let _e=B[fe],{object:ge,geometry:Be,material:Ct,group:ze}=_e;if(Ct.side===En&&ge.layers.test(X.layers)){let oe=Ct.side;Ct.side=hn,Ct.needsUpdate=!0,Ws(ge,j,X,Be,Ct,ze),Ct.side=oe,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(nt.updateMultisampleRenderTarget(St),nt.updateRenderTargetMipmap(St))}P.setRenderTarget(bt,Pt,Ft),P.setClearColor(pe,se),Qt!==void 0&&(X.viewport=Qt),P.toneMapping=Kt}function qn(b,B,j){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,St=b.length;q<St;q++){let Et=b[q],{object:bt,geometry:Pt,group:Ft}=Et,Kt=Et.material;Kt.allowOverride===!0&&X!==null&&(Kt=X),bt.layers.test(j.layers)&&Ws(bt,B,j,Pt,Kt,Ft)}}function Ws(b,B,j,X,q,St){H!==null&&q.isNodeMaterial&&H.setObject(b,q),b.onBeforeRender(P,B,j,X,q,St),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(P,B,j,X,b,St),q.transparent===!0&&q.side===En&&q.forceSinglePass===!1?(q.side=hn,q.needsUpdate=!0,P.renderBufferDirect(j,B,X,q,b,St),q.side=Fi,q.needsUpdate=!0,P.renderBufferDirect(j,B,X,q,b,St),q.side=En):P.renderBufferDirect(j,B,X,q,b,St),b.onAfterRender(P,B,j,X,q,St)}function qi(b,B,j){B.isScene!==!0&&(B=Ee);let X=J.get(b),q=E.state.lights,St=E.state.shadowsArray,Et=q.state.version,bt=yt.getParameters(b,q.state,St,B,j,E.state.lightProbeGridArray),Pt=yt.getProgramCacheKey(bt),Ft=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let Kt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=pt.get(b.envMap||X.environment,Kt),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",un),Ft=new Map,X.programs=Ft);let Qt=Ft.get(Pt);if(Qt!==void 0){if(X.currentProgram===Qt&&X.lightsStateVersion===Et)return Yi(b,bt),Qt}else bt.uniforms=yt.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,j,bt),b.onBeforeCompile(bt,P),Qt=yt.acquireProgram(bt,Pt),Ft.set(Pt,Qt),X.uniforms=bt.uniforms;let Dt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),Yi(b,bt),X.needsLights=Hr(b),X.lightsStateVersion=Et,X.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.sunLights.value=q.state.sun,Dt.sunLightShadows.value=q.state.sunShadow,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.sunShadowMatrix.value=q.state.sunShadowMatrix,Dt.sunShadowCascade.value=q.state.sunShadowCascade,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=Qt,X.uniformsList=null,Qt}function bn(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Os.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Yi(b,B){let j=J.get(b);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Vr(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let j=0,X=b.length;j<X;j++){let q=b[j];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function Gr(b,B,j,X,q){B.isScene!==!0&&(B=Ee),nt.resetTextureUnits();let St=B.fog,Et=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,bt=ut===null?P.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ae.workingColorSpace,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ft=pt.get(X.envMap||Et,Pt),Kt=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qt=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!j.morphAttributes.position,fe=!!j.morphAttributes.normal,Fe=!!j.morphAttributes.color,_e=zn;X.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(_e=P.toneMapping);let ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Be=ge!==void 0?ge.length:0,Ct=J.get(X),ze=E.state.lights;if(le===!0&&(re===!0||b!==lt)){let xe=b===lt&&X.id===tt;Ot.setState(X,b,xe)}let oe=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ze.state.version||Ct.outputColorSpace!==bt||q.isBatchedMesh&&Ct.batching===!1||!q.isBatchedMesh&&Ct.batching===!0||q.isBatchedMesh&&Ct.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ct.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ct.instancing===!1||!q.isInstancedMesh&&Ct.instancing===!0||q.isSkinnedMesh&&Ct.skinning===!1||!q.isSkinnedMesh&&Ct.skinning===!0||q.isInstancedMesh&&Ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ct.instancingMorph===!1&&q.morphTexture!==null||Ct.envMap!==Ft||X.fog===!0&&Ct.fog!==St||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ot.numPlanes||Ct.numIntersection!==Ot.numIntersection)||Ct.vertexAlphas!==Kt||Ct.vertexTangents!==Qt||Ct.morphTargets!==Dt||Ct.morphNormals!==fe||Ct.morphColors!==Fe||Ct.toneMapping!==_e||Ct.morphTargetsCount!==Be||!!Ct.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Ct.__version=X.version);let $e=Ct.currentProgram;oe===!0&&($e=qi(X,B,q),H&&X.isNodeMaterial&&H.onUpdateProgram(X,$e,Ct));let an=!1,In=!1,Yn=!1,de=$e.getUniforms(),Pe=Ct.uniforms;if(y.useProgram($e.program)&&(an=!0,In=!0,Yn=!0),X.id!==tt&&(tt=X.id,In=!0),Ct.needsLights){let xe=Vr(E.state.lightProbeGridArray,q);Ct.lightProbeGrid!==xe&&(Ct.lightProbeGrid=xe,In=!0)}if(an||lt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),de.setValue(V,"projectionMatrix",b.projectionMatrix),de.setValue(V,"viewMatrix",b.matrixWorldInverse);let Dn=de.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,ve.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&de.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&de.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),lt!==b&&(lt=b,In=!0,Yn=!0)}if(Ct.needsLights&&(ze.state.sunShadowMap.length>0&&de.setValue(V,"sunShadowMap",ze.state.sunShadowMap,nt),ze.state.directionalShadowMap.length>0&&de.setValue(V,"directionalShadowMap",ze.state.directionalShadowMap,nt),ze.state.spotShadowMap.length>0&&de.setValue(V,"spotShadowMap",ze.state.spotShadowMap,nt),ze.state.pointShadowMap.length>0&&de.setValue(V,"pointShadowMap",ze.state.pointShadowMap,nt)),q.isSkinnedMesh){de.setOptional(V,q,"bindMatrix"),de.setOptional(V,q,"bindMatrixInverse");let xe=q.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),de.setValue(V,"boneTexture",xe.boneTexture,nt))}q.isBatchedMesh&&(de.setOptional(V,q,"batchingTexture"),de.setValue(V,"batchingTexture",q._matricesTexture,nt),de.setOptional(V,q,"batchingIdTexture"),de.setValue(V,"batchingIdTexture",q._indirectTexture,nt),de.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&de.setValue(V,"batchingColorTexture",q._colorsTexture,nt));let Ln=j.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&G.update(q,j,$e),(In||Ct.receiveShadow!==q.receiveShadow)&&(Ct.receiveShadow=q.receiveShadow,de.setValue(V,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Pe.envMapIntensity.value=B.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=m_()),In){if(de.setValue(V,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Xs(Pe,Yn),St&&X.fog===!0&&Lt.refreshFogUniforms(Pe,St),Lt.refreshMaterialUniforms(Pe,X,ht,st,E.state.transmissionRenderTarget[b.id]),Ct.needsLights&&Ct.lightProbeGrid){let xe=Ct.lightProbeGrid;Pe.probesSH.value=xe.texture,Pe.probesMin.value.copy(xe.boundingBox.min),Pe.probesMax.value.copy(xe.boundingBox.max),Pe.probesResolution.value.copy(xe.resolution)}Os.upload(V,bn(Ct),Pe,nt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Os.upload(V,bn(Ct),Pe,nt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&de.setValue(V,"center",q.center),de.setValue(V,"modelViewMatrix",q.modelViewMatrix),de.setValue(V,"normalMatrix",q.normalMatrix),de.setValue(V,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let xe=X.uniformsGroups;for(let Dn=0,Ie=xe.length;Dn<Ie;Dn++){let ci=xe[Dn];ft.update(ci,$e),ft.bind(ci,$e)}}return $e}function Xs(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Hr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(b,B,j){let X=J.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=B,J.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let j=J.get(b);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,j=0){ut=b,et=B,$=j;let X=null,q=!1,St=!1;if(b){let bt=J.get(b);if(bt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,bt.__webglFramebuffer),ct.copy(b.viewport),zt.copy(b.scissor),Bt=b.scissorTest,y.viewport(ct),y.scissor(zt),y.setScissorTest(Bt),tt=-1;return}else if(bt.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(bt.__hasExternalTextures)nt.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Kt=b.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&J.has(Kt)&&(b.width!==Kt.image.width||b.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}let Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);let Ft=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[B])?X=Ft[B][j]:X=Ft[B],q=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?X=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?X=Ft[j]:X=Ft,ct.copy(b.viewport),zt.copy(b.scissor),Bt=b.scissorTest}else ct.copy(Tt).multiplyScalar(ht).floor(),zt.copy(jt).multiplyScalar(ht).floor(),Bt=we;if(j!==0&&(X=k),y.bindFramebuffer(V.FRAMEBUFFER,X)&&y.drawBuffers(b,X),y.viewport(ct),y.scissor(zt),y.setScissorTest(Bt),q){let bt=J.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,j)}else if(St){let bt=B;for(let Pt=0;Pt<b.textures.length;Pt++){let Ft=J.get(b.textures[Pt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Pt,Ft.__webglTexture,j,bt)}}else if(b!==null&&j!==0){let bt=J.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bt.__webglTexture,j)}tt=-1};function Wr(b){let B=J.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=I.textureFormatReadable(b.format),B.__typeReadable=I.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,j,X,q,St,Et,bt=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){y.bindFramebuffer(V.FRAMEBUFFER,Pt);try{let Ft=b.textures[bt],Kt=Ft.format,Qt=Ft.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let Dt=Wr(Ft);if(Dt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&j>=0&&j<=b.height-q&&V.readPixels(B,j,X,q,vt.convert(Kt),vt.convert(Qt),St)}finally{let Ft=ut!==null?J.get(ut).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,B,j,X,q,St,Et,bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt)if(B>=0&&B<=b.width-X&&j>=0&&j<=b.height-q){y.bindFramebuffer(V.FRAMEBUFFER,Pt);let Ft=b.textures[bt],Kt=Ft.format,Qt=Ft.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let Dt=Wr(Ft);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,fe),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),V.readPixels(B,j,X,q,vt.convert(Kt),vt.convert(Qt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Fe=ut!==null?J.get(ut).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,Fe);let _e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Pu(V,_e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,fe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(fe),V.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,j=0){let X=Math.pow(2,-j),q=Math.floor(b.image.width*X),St=Math.floor(b.image.height*X),Et=B!==null?B.x:0,bt=B!==null?B.y:0;nt.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,Et,bt,q,St),y.unbindTexture()},this.copyTextureToTexture=function(b,B,j=null,X=null,q=0,St=0){let Et,bt,Pt,Ft,Kt,Qt,Dt,fe,Fe,_e=b.isCompressedTexture?b.mipmaps[St]:b.image;if(j!==null)Et=j.max.x-j.min.x,bt=j.max.y-j.min.y,Pt=j.isBox3?j.max.z-j.min.z:1,Ft=j.min.x,Kt=j.min.y,Qt=j.isBox3?j.min.z:0;else{let Pe=Math.pow(2,-q);Et=Math.floor(_e.width*Pe),bt=Math.floor(_e.height*Pe),b.isDataArrayTexture?Pt=_e.depth:b.isData3DTexture?Pt=Math.floor(_e.depth*Pe):Pt=1,Ft=0,Kt=0,Qt=0}X!==null?(Dt=X.x,fe=X.y,Fe=X.z):(Dt=0,fe=0,Fe=0);let ge=vt.convert(B.format),Be=vt.convert(B.type),Ct;B.isData3DTexture?(nt.setTexture3D(B,0),Ct=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(nt.setTexture2DArray(B,0),Ct=V.TEXTURE_2D_ARRAY):(nt.setTexture2D(B,0),Ct=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);let ze=y.getParameter(V.UNPACK_ROW_LENGTH),oe=y.getParameter(V.UNPACK_IMAGE_HEIGHT),$e=y.getParameter(V.UNPACK_SKIP_PIXELS),an=y.getParameter(V.UNPACK_SKIP_ROWS),In=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,_e.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,Ft),y.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt);let Yn=b.isDataArrayTexture||b.isData3DTexture,de=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Pe=J.get(b),Ln=J.get(B),xe=J.get(Pe.__renderTarget),Dn=J.get(Ln.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,xe.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Ie=0;Ie<Pt;Ie++)Yn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(b).__webglTexture,q,Qt+Ie),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(B).__webglTexture,St,Fe+Ie)),V.blitFramebuffer(Ft,Kt,Et,bt,Dt,fe,Et,bt,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||J.has(b)){let Pe=J.get(b),Ln=J.get(B);y.bindFramebuffer(V.READ_FRAMEBUFFER,O),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,W);for(let xe=0;xe<Pt;xe++)Yn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.__webglTexture,q,Qt+xe):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pe.__webglTexture,q),de?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,St,Fe+xe):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,St),q!==0?V.blitFramebuffer(Ft,Kt,Et,bt,Dt,fe,Et,bt,V.COLOR_BUFFER_BIT,V.NEAREST):de?V.copyTexSubImage3D(Ct,St,Dt,fe,Fe+xe,Ft,Kt,Et,bt):V.copyTexSubImage2D(Ct,St,Dt,fe,Ft,Kt,Et,bt);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Ct,St,Dt,fe,Fe,Et,bt,Pt,ge,Be,_e.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(Ct,St,Dt,fe,Fe,Et,bt,Pt,ge,_e.data):V.texSubImage3D(Ct,St,Dt,fe,Fe,Et,bt,Pt,ge,Be,_e):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,Dt,fe,Et,bt,ge,Be,_e.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,Dt,fe,_e.width,_e.height,ge,_e.data):V.texSubImage2D(V.TEXTURE_2D,St,Dt,fe,Et,bt,ge,Be,_e);y.pixelStorei(V.UNPACK_ROW_LENGTH,ze),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe),y.pixelStorei(V.UNPACK_SKIP_PIXELS,$e),y.pixelStorei(V.UNPACK_SKIP_ROWS,an),y.pixelStorei(V.UNPACK_SKIP_IMAGES,In),St===0&&B.generateMipmaps&&V.generateMipmap(Ct),y.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){et=0,$=0,ut=null,y.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var g_=["top","side","bottom"],x_={slab_bottom:1,slab_top:1,stairs:1},ff=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function __(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],ff[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function df(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let T of t){if(!T||typeof T.id!="string")throw new Error("block without id");if(!Number.isInteger(T.n)||T.n<0||T.n>255)throw new Error("bad n for "+T.id);if(i[T.n])throw new Error("duplicate n "+T.n+" ("+T.id+")");if(s[T.id])throw new Error("duplicate id "+T.id);let P=T.colors||{},D=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},T);if(D.placeable=D.n!==0&&!D.liquid,D.colors={top:P.top||"#888888",side:P.side||P.top||"#888888",bottom:P.bottom||P.top||"#888888"},D.opaque=D.solid&&!D.transparent&&!D.cutout&&!x_[D.shape],D.tile={},D.tileOf&&s[D.tileOf])D.tile=Object.assign({},s[D.tileOf].tile);else if(D.n!==0){let H={};for(let k of g_){let O=D.colors[k]+"|"+(D.pattern==="grass"||D.pattern==="log"||D.pattern==="lamp"||D.pattern==="table"||D.pattern==="stele"||D.pattern==="torch"||D.pattern==="bed"||D.pattern==="snow"||D.pattern==="lantern"||D.pattern==="bookshelf"||D.pattern==="hay"||D.pattern==="barrel"||D.pattern==="chest"||D.pattern==="farmland"?k:"");H[O]===void 0&&(H[O]=r.length,r.push({block:D.id,face:k,color:D.colors[k],pattern:D.pattern,accent:D.accent||null,top:D.colors.top})),D.tile[k]=H[O]}}i[D.n]=D,s[D.id]=D}if(!s.air)throw new Error("registry needs air");for(let T of e){if(s[T.id])throw new Error("duplicate id "+T.id);s[T.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},T)}for(let T in s){let P=s[T].drops;if(P&&P!=="self"&&!s[P])throw new Error(T+" drops unknown "+P)}let o=T=>(typeof T=="number"?i[T]:s[T])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),d=new Uint8Array(256),u=new Uint8Array(256),f=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},g=new Uint8Array(256),w=new Array(256).fill(null),m=new Uint8Array(256),p=new Uint8Array(256),R=new Uint8Array(256),U=new Uint8Array(256),v=new Uint8Array(256),A=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((T,P)=>{T&&(m[P]=T.solid?1:0,p[P]=T.opaque?1:0,R[P]=T.transparent?1:0,U[P]=T.emissive?1:0,v[P]=T.liquid?1:0,a[P]=T.light!=null?T.light:T.emissive?15:0,l[P]=T.liquid?2:0,c[P]=x[T.shape]||0,d[P]=T.cutout?1:0,u[P]=T.climbable?1:0,f[P]=T.plant?1:0,g[P]=T.facing|0,T.solid&&(w[P]=__(T)),P&&(A[P]=T.tile.top,E[P]=T.tile.side,N[P]=T.tile.bottom))});let S=(n&&n.blueprints||[]).map(T=>Object.assign({kind:"blueprint"},T));return{blocks:i.filter(Boolean),items:e.map(T=>s[T.id]),blueprints:S,tiles:r,get:o,toolOf:T=>{let P=T&&s[T];return P&&P.kind==="item"&&P.tool&&typeof P.tool=="object"?P.tool:null},num:T=>{let P=s[T];if(!P||P.kind!=="block")throw new Error("no block "+T);return P.n},name:T=>{let P=o(T);return P?P.name_zh:String(T)},maxStack:T=>{let P=s[T];return P?P.maxStack:64},dropOf:T=>{let P=i[T];return!P||!P.drops?null:P.drops==="self"?P.id:P.drops},breakTime:T=>{let P=i[T];return!P||P.hardness<0?1/0:.25+P.hardness*.55},flat:{solid:m,opaque:p,trans:R,emit:U,liquid:v,tileTop:A,tileSide:E,tileBottom:N,lightEmit:a,attn:l,shape:c,cutout:d,climb:u,plant:f,facing:g,boxes:w}}}var yi=n=>Math.floor(n/16);var ri=(n,t,e)=>(t*16+e)*16+n;var rs=(n,t)=>n+","+t;function zc(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=yi(n),s=yi(e);return{cx:i,cz:s,i:ri(n-i*16,t,e-s*16)}}function pf(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Vc(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,d=t,u=t+s,f=e-a,x=e+a,g=Math.floor(l),w=Math.floor(c-1e-6),m=Math.floor(d),p=Math.floor(u-1e-6),R=Math.floor(f),U=Math.floor(x-1e-6),v=!1;for(let A=m;A<=p;A++)for(let E=R;E<=U;E++)for(let N=g;N<=w;N++){let S=r(N,A,E);if(!S)continue;let T=S===!0?y_:S;for(let P of T){let D=N+P[0],H=A+P[1],k=E+P[2],O=N+P[3],W=A+P[4],et=E+P[5];if(!(O<=l+1e-6||D>=c-1e-6||W<=d+1e-6||H>=u-1e-6||et<=f+1e-6||k>=x-1e-6)){if(!o)return!0;v=!0,o.push([D,H,k,O,W,et])}}}return v}var y_=[[0,0,0,1,1,1]],Dr=(n,t,e,i,s,r)=>Vc(n,t,e,i,s,r,null),mf=(n,t,e=.6,i=1.8)=>!Dr(n.x,n.y,n.z,e,i,t);function gf(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,d=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,f=Math.max(1,Math.ceil(u/.3)),x=e/f,g=[];for(let w=0;w<f;w++){let m=t.y*x;m&&(g.length=0,Vc(n.x,n.y+m,n.z,r,o,i,g)?(m<0?(n.y=Math.max(...g.map(p=>p[4])),c=!0):n.y=Math.min(...g.map(p=>p[1]))-o,t.y=0):n.y+=m);for(let p of["x","z"]){let R=t[p]*x;if(!R)continue;let U={x:n.x,y:n.y,z:n.z};if(U[p]+=R,g.length=0,!Vc(U.x,U.y,U.z,r,o,i,g)){n[p]=U[p];continue}if(a&&(c||s.grounded)){let A=Math.max(...g.map(E=>E[4]));if(A-n.y>0&&A-n.y<=1.01&&!Dr(U.x,A,U.z,r,o,i)&&!Dr(n.x,A,n.z,r,o,i)){d+=A-n.y,n.y=A,n[p]=U[p];continue}}let v=p==="x"?0:2;n[p]=R>0?Math.min(...g.map(A=>A[v]))-l-1e-4:Math.max(...g.map(A=>A[v+3]))+l+1e-4,Dr(n.x,n.y,n.z,r,o,i)&&(n[p]=U[p]-R),t[p]=0}}return!c&&t.y<=0&&Dr(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:d}}function v_(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let d=[e+c[0],i+c[1],s+c[2]],u=[e+c[3],i+c[4],s+c[5]],f=0,x=1/0,g=-1,w=!0;for(let m=0;m<3&&w;m++){if(Math.abs(a[m])<1e-12){(o[m]<d[m]||o[m]>u[m])&&(w=!1);continue}let p=(d[m]-o[m])/a[m],R=(u[m]-o[m])/a[m];p>R&&([p,R]=[R,p]),p>f&&(f=p,g=m),R<x&&(x=R),f>x&&(w=!1)}if(w&&(!l||f<l.t)){let m=[0,0,0];g>=0&&(m[g]=-Math.sign(a[g])),l={t:f,face:g>=0?m:null}}}return l}function Gc(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),d=Math.sign(t.y),u=Math.sign(t.z),f=c?Math.abs(1/t.x):1/0,x=d?Math.abs(1/t.y):1/0,g=u?Math.abs(1/t.z):1/0,w=c?(c>0?o+1-n.x:n.x-o)*f:1/0,m=d?(d>0?a+1-n.y:n.y-a)*x:1/0,p=u?(u>0?l+1-n.z:n.z-l)*g:1/0,R=[0,0,0],U=0;for(;U<=e;){let v=i(o,a,l);if(v&&s(v)){let A=r&&r(v);if(!A)return{x:o,y:a,z:l,n:v,face:R,dist:U};let E=v_(n,t,o,a,l,A);if(E&&E.t<=e)return{x:o,y:a,z:l,n:v,face:E.face||R,dist:E.t}}w<m&&w<p?(o+=c,U=w,w+=f,R=[-c,0,0]):m<p?(a+=d,U=m,m+=x,R=[0,-d,0]):(l+=u,U=p,p+=g,R=[0,0,-u])}return null}function $a(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,d=1/0;for(let u=0;u<3;u++){if(Math.abs(l[u])<1e-9){if(a[u]<r[u]||a[u]>o[u])return null;continue}let f=(r[u]-a[u])/l[u],x=(o[u]-a[u])/l[u];if(f>x&&([f,x]=[x,f]),c=Math.max(c,f),d=Math.min(d,x),c>d)return null}return c}function xf(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}function b_(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Hc=(n,t)=>n?t?2:1:0;function Bs(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Wc(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}var Xc=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Za(n){let t=b_(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function L(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Ae=n=>document.querySelector(n);function qc(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function yf(n,t,e,i,s,r){if(!t||!t.id)return null;let o=qc(t,e,i,s,r),a=n.get("ke_log"),l=Array.isArray(a)?a:[];if(l.push(o),n.set("ke_log",l),t.local)return o;if(e){let u=n.get("ke_correct"),f=Array.isArray(u)?u:[];f.includes(t.id)||(f.push(t.id),n.set("ke_correct",f))}let c=n.get("ke_mistakes")||{},d=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?d&&(d.c++,d.u=s,d.c>=3&&(c[t.id]={d:1,w:d.w,t:d.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||d)&&n.set("ke_mistakes",c),o}function vf(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],l=[];for(let x of n)e[x]&&!e[x].d?o.push(x):t.has(x)||i.has(x)?l.push(x):a.push(x);let c=x=>{for(let g=x.length-1;g>0;g--){let w=Math.floor(r()*(g+1));[x[g],x[w]]=[x[w],x[g]]}return x};[o,a,l].forEach(c);let d=[],u=(x,g)=>{for(;g-- >0&&x.length;)d.push(x.pop())},f=Math.round(s*.7);return u(o,Math.ceil(f/2)),u(a,f-d.length),u(o,f-d.length),u(l,s-d.length),u(a,s-d.length),u(o,s-d.length),d}var w_="../../",A_=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],bf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Ja=null,wf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),Mf=null;function T_(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{yf(wf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(Mf)try{Mf(t,n)}catch{}}function E_(n,t,e){try{let i=wf(),s=i.get("ke_learned")||{},r=new Set;for(let c in s)s[c]&&s[c].at&&(n.sets&&n.sets[c]||[]).forEach(d=>r.add(d));let o=n.list(t).filter(c=>c.type!=="speak").map(c=>c.id),a=vf(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),l=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(l.length)return l}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function C_(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function R_(){return Ja||(Ja=(async()=>{for(let t of A_)await C_(w_+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Ja=null,n})),Ja}var Sf=new Set(bf);async function Af(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:l=null}){n.innerHTML="",n.hidden=!1;let c=L("div",{class:"panel quiz"});n.append(c),c.append(L("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let d;try{d=await R_()}catch{c.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let u=window.KE,f=l,x=i?new Set(i.filter(v=>Sf.has(v))):Sf;if(!f)for(let v of t){let A=d.byId[v];if(A&&x.has(A.type)){f=d.get(v);break}}let g=!!f&&!l;f||(f=E_(d,{modules:s||["words","phrases","grammar","patterns"],types:i?[...x]:bf,lv:1},1)[0]||d.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let w=u.isTyped(f);n._q=f,c.innerHTML="";let m=L("div",{class:"fb"}),p=L("div",{class:"q-body"});c.append(L("div",{class:"p-head"},L("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),L("div",{class:"q-type"},l?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(g?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":u.TYPES[f.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),L("div",{class:"q-prompt"+(f.en?" en":"")},f.prompt),f.sub?L("div",{class:"q-sub"},f.sub):null,p,m);let R=!1,U=(v,A)=>{R||(R=!0,T_(f,v,A,a),m.className="fb "+(v?"ok":"bad"),m.append(L("div",{},v?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:L("b",{class:"en"},f.answer)),!v&&f.why?L("div",{class:"why"},f.why):null,L("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(v,w,f)}},"\u7E7C\u7E8C")))};if(f.input==="type"){let v=L("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),A=()=>{R||!v.value.trim()||U(d.check(f,v.value).ok,v.value)};v.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&A()}),p.append(L("div",{class:"typerow"},v,L("button",{class:"btn",onclick:A},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=L("div",{class:"opts"});(f.options||[]).forEach(A=>v.append(L("button",{class:"opt"+(/[a-z]/i.test(A)?" en":""),onclick:E=>{if(R)return;let N=d.check(f,A).ok;E.currentTarget.classList.add(N?"ok":"bad"),U(N,A)}},A))),p.append(v)}}function P_(){return new Map}function Tf(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Yc(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function I_(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Ef(n){let t=P_();for(let e in n||{})t.set(e,I_(n[e]));return t}var Ka=16;var mb=18;var Nr=32;function L_(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ke=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],dt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function D_(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Le(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function vi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}Le(n,o)}var N_=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function U_(n,t){let e=ke(t.color),i=L_(D_(t.block+t.face)),s=Nr;if(N_.has(t.pattern)){F_(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=dt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?ke(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=dt(e,1.12);for(let u=0;u<4;u++)vi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=dt(e,.96);for(let u=0;u<4;u++)vi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let u=ke(t.top);n.fillStyle=dt(u);let f=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)f.push([x,8+Math.round(i()*5)]);Le(n,f)}if(o==="stone"||o==="bedrock")for(let u=0;u<5;u++)n.fillStyle=dt(e,i()<.5?.9:1.08),vi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let u=0;u<4;u++)n.fillStyle=dt(e,.92),vi(n,i,i()*s,i()*s,5);n.fillStyle=dt(a);for(let u=0;u<5;u++)vi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let u=0;u<26;u++)n.fillStyle=dt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let u=3;u<s;u+=7)n.fillStyle=dt(e,.82),n.fillRect(u,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=dt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=dt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let u=0;u<9;u++)n.fillStyle=dt(e,i()<.5?.78:1.15),vi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let u=7;u<s;u+=8)n.fillStyle=dt(e,.78),n.fillRect(0,u,s,1);n.fillStyle=dt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=dt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=dt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=dt([185,182,174]),Le(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=dt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Le(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=dt(e,1.18,.72);for(let u=6;u<s;u+=10)n.fillRect(4+Math.floor(i()*10),u,10,2)}if(o==="gold"&&(n.fillStyle=dt(e,1.15),Le(n,[[0,0],[s,0],[0,s]]),n.fillStyle=dt(e,.9),Le(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=dt(ke("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=dt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=dt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=dt(ke("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=dt(ke("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=dt(a),n.fillRect(14,0,4,4)):(n.fillStyle=dt(ke(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=dt(a),n.fillRect(0,0,s,10),n.fillStyle=dt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=dt(ke("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=dt(a),n.fillRect(0,0,9,14))),o==="wool")for(let u=0;u<7;u++)n.fillStyle=dt(e,i()<.5?.94:1.04),vi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=dt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=dt(a,1.3),Le(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=dt(ke("#EFEBDD"),1,.8),Le(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=dt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let u=8;u<s;u+=9)n.fillStyle=dt(e,.9),n.fillRect(0,u,s,2);if(o==="cactus")if(t.face==="side"){for(let u=4;u<s;u+=8)n.fillStyle=dt(e,.82),n.fillRect(u,0,2,s);n.fillStyle=dt(ke("#EFEBDD"),1,.7);for(let u=0;u<6;u++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=dt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=dt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=dt(e,1.25);for(let u of[9,24])n.fillRect(0,u,s,3)}else n.fillStyle=dt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Le(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Le(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=dt(e,1.1),Le(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=dt(e,.92),Le(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=dt(e,.78);for(let u=0;u<s;u+=8){n.fillRect(0,u+7,s,1);let f=u/8%2?0:8;for(let x=f;x<s;x+=16)n.fillRect(x,u,1,8)}}if(o==="mossy"){n.fillStyle=dt(a);for(let u=0;u<6;u++)vi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=dt(e,.6),Le(n,[[4,2],[12,14],[10,15],[3,4]]),Le(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=dt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=dt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=dt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=dt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=dt(e,1.08),Le(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=dt(ke("#D9CBB5"));for(let u=0;u<s;u+=8){n.fillRect(0,u+6,s,2);let f=u/8%2?0:8;for(let x=f;x<s;x+=16)n.fillRect(x,u,2,6)}}if(o==="checker"&&(n.fillStyle=dt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let u=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let f of[3,18]){let x=3;for(;x<s-4;){let g=3+Math.floor(i()*3);n.fillStyle=u[Math.floor(i()*u.length)],n.fillRect(x,f+Math.floor(i()*3),g,11),x+=g+1}}n.fillStyle=dt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let u=7;u<s;u+=8)n.fillStyle=dt(e,.8),n.fillRect(0,u,s,1);if(o==="hay")if(t.face==="side"){for(let u=3;u<s;u+=5)n.fillStyle=dt(e,.88),n.fillRect(u,0,1,s);n.fillStyle=dt(ke("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=dt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let u=5;u<s;u+=6)n.fillStyle=dt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=dt(ke("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=dt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=dt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=dt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Le(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let u=7;u<s;u+=8)n.fillStyle=dt(e,.85),n.fillRect(u,0,1,s);n.fillStyle=dt(ke("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=dt(ke("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=dt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=dt(e),n.fillRect(0,0,s,s),n.fillStyle=dt(ke("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let u=7;u<s;u+=8)n.fillStyle=dt(e,.85),n.fillRect(0,u,s,1);t.face==="side"&&(n.fillStyle=dt(a),n.fillRect(0,11,s,3),n.fillStyle=dt(ke("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let u=3;u<s;u+=6)n.fillStyle=dt(e,.72),n.fillRect(0,u,s,2);if(o==="furnace"){for(let u=0;u<4;u++)n.fillStyle=dt(e,i()<.5?.9:1.08),vi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=dt(a),n.fillRect(8,15,s-16,11),n.fillStyle=dt(ke("#E0352B"),1,.85),Le(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=dt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=dt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=dt(a),Le(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let u=0;u<c.length;u+=4){let f=1+(i()-.5)*.09;c[u]=Math.min(255,c[u]*f),c[u+1]=Math.min(255,c[u+1]*f),c[u+2]=Math.min(255,c[u+2]*f)}n.putImageData(l,0,0);let d=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=d,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Rf(n){let t=document.createElement("canvas");t.width=t.height=Nr*Ka;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Nr;let a=o.getContext("2d",{willReadFrequently:!0});U_(a,s),e.drawImage(o,r%Ka*Nr,Math.floor(r/Ka)*Nr),i[r]=o}),{canvas:t,tileCanvas:i}}function F_(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?ke(t.accent):e,a=(l,c,d)=>{n.fillStyle=d,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,dt(e)),n.fillStyle=dt(e,1.1),Le(n,[[16,26],[9,20],[15,22]]),Le(n,[[17,24],[24,18],[18,21]]),n.fillStyle=dt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;Le(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=dt(ke("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),d=14+Math.floor(i()*14);n.fillStyle=dt(e,i()<.5?.9:1.1),Le(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-d]])}else if(r==="deadbush")n.strokeStyle=dt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=dt(e),n.fillRect(14,18,4,14),n.fillStyle=dt(o),Le(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=dt(ke("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=dt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=dt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let d=0;d<5;d++){let u=5+d*5;n.fillStyle=dt(e),n.fillRect(u,s-c,2,c),l===3&&(n.fillStyle=dt(o),Le(n,[[u-2,s-c+9],[u+1,s-c-1],[u+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let d=dt(ke("#8C6640")),u=dt(e),f=s*.33,x=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=d;for(let g=2;g<s;g+=6)n.fillRect(4,g,s-8,3);n.fillStyle=u,n.fillRect(f-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=dt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=d,n.lineWidth=3;for(let g=0;g<5;g++){let w=Math.PI/2+(g+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(w)*(s-x-4),Math.sin(w)*(s-x-4)),n.lineTo(s+Math.cos(w)*(s-f+4),Math.sin(w)*(s-f+4)),n.stroke()}n.strokeStyle=u;for(let g of[s-f,s-x])n.beginPath(),n.arc(s,0,g,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=dt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var Pf=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,If=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function O_(n,t){let e=yi(n),i=yi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,d=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,d)<=14&&s.push([e+o,i+r])}return s}function Df(n){let t=new Tn(n);t.magFilter=He,t.minFilter=He,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new K(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new sn({uniforms:e,vertexShader:Pf,fragmentShader:If}),s=new sn({uniforms:e,vertexShader:Pf,fragmentShader:If,transparent:!0,depthWrite:!1,side:En});return{opaque:i,trans:s,uniforms:e,tex:t}}function Lf(n){let t=new _n;return t.setAttribute("position",new Xe(n.pos,3)),t.setAttribute("uv",new Xe(n.uv,2)),t.setAttribute("light",new Xe(n.light,1)),t.setAttribute("lt",new Xe(n.lt,2,!0)),t.setIndex(new Xe(n.index,1)),t.computeBoundingSphere(),t}var ja=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=rs(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Ue(Lf(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ue(Lf(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=yi(t),s=yi(e),r=pf(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=rs(l.cx,l.cz);if(this.chunks.has(c))continue;let d={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,d),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:d.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let d=c.cx-i,u=c.cz-s;if(d*d+u*u>o*o){for(let f of["o","t"])c[f]&&(this.scene.remove(c[f]),c[f].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,d]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(d-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(rs(yi(t),yi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=zc(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(rs(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=zc(t,e,i);if(!r)return!1;let o=rs(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,Tf(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[d,u]of O_(l,c))this.dirtyMesh.add(rs(d,u));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var oi={};function zs(n){return oi[n]||(oi[n]=new yn({color:n,transparent:!0}),oi[n].userData.base=new Jt(n)),oi[n]}var Ur=null;function k_(){if(Ur)return Ur;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Ur=new Tn(n),Ur.colorSpace=Ge,Ur}function Nf(n,t){let e=new fn,i=n.colors,[s,r]=n.size,o=(l,c,d,u,f,x,g,w)=>{let m=new Ue(new pn(l,c,d),w||zs(u));return m.position.set(f,x,g),e.add(m),m},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let d=o(.2,.6,.22,i.leg,c,.6,0);d.geometry.translate(0,-.6/2,0),a.push(d)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);oi.__face||(oi.__face=new yn({map:k_(),transparent:!0}),oi.__face.userData.base=new Jt("#ffffff"));let c=[zs(i.head),zs(i.head),zs(i.head),zs(i.head),zs(i.head),oi.__face],d=new Ue(new pn(s*.9,s*.8,s*.8),c);d.position.set(0,r*.72+s*.4,0),e.add(d),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=r<1&&n.id!=="chicken",c=n.id==="chicken"?.25:l?r*.35:.45,d=r-c-(n.id==="chicken"?.15:.25);o(s,d,n.id==="chicken"?s:s*1.35,i.body,0,c+d/2,0),i.patch&&o(s*.5,d*.55,.02+s*1.36,i.patch,s*.12,c+d*.55,0);let u=n.id==="chicken"?.3:l?.32:.45,f=o(u,u,u,i.head,0,c+d+u*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let m of[-u*.3,u*.3])o(u*.26,u*.3,u*.16,i.ear,m,f.position.y+u*.6,f.position.z);if(i.eye)for(let m of[-u*.24,u*.24])o(u*.24,u*.26,.02,i.eye,m,f.position.y+u*.05,f.position.z-u/2-.01);if(n.pet){let m=o(.08,.08,.32,i.body,0,c+d*.85,s*.68+.12);m.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,f.position.y+u/2+.05,f.position.z),o(.12,.06,.12,"#D9A63A",0,f.position.y-.02,f.position.z-u/2-.05));let x=n.id==="chicken"?.06:.18,g=n.id==="chicken"?0:s*.45,w=s*.3;for(let[m,p]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-w,-g],[w,-g],[-w,g],[w,g]]){let R=o(x,c,x,i.leg,m,c/2,p);R.geometry.translate(0,-c/2,0),R.position.y=c,a.push(R)}}return e.userData.legs=a,e}function Uf(n){for(let t in oi){let e=oi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Ff(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Ke=null,Vs=null,$c=null;var ai=()=>window.HIAudio||null,kf=()=>ai()?ai().get():{muted:!1,music:.35,sfx:.7};function Qa(){try{ai()&&ai().unlock()}catch{}if(!Ke){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ke=new n,Vs=Ke.createGain(),Vs.connect(Ke.destination),$c=Ke.createBuffer(1,Ke.sampleRate,Ke.sampleRate);let t=$c.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Ke.state==="suspended"&&Ke.resume(),Zc()}function Zc(){if(Vs){let n=kf();Vs.gain.setTargetAtTime(n.muted?0:n.sfx,Ke.currentTime,.03)}}var tl=()=>kf().muted;function Bf(){return ai()&&ai().toggle(),Zc(),tl()}function Jc(n){ai()&&ai().set(n),Zc()}function zf(n){try{ai()&&ai().scene(n)}catch{}}function Vf(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Rn(n,t,e,i,s,r,o){let a=Ke.createOscillator(),l=Ke.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),Vf(l,e,i,s,r),a.connect(l),l.connect(Vs),a.start(e),a.stop(e+i+r+.05)}function Vi(n,t,e,i,s,r=1){let o=Ke.createBufferSource(),a=Ke.createBiquadFilter(),l=Ke.createGain();o.buffer=$c,a.type=n,a.frequency.value=t,a.Q.value=r,Vf(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Vs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Of={wood:(n,t)=>{Rn("sine",190*t,n,.003,.16,.12,95*t),Vi("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Vi("highpass",1800*t,n,.1,.06),Rn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Vi("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Rn("sine",1900*t,n,.002,.08,.25,1500*t),Vi("highpass",4200,n,.06,.12)},soft:(n,t)=>{Vi("bandpass",850*t,n,.09,.1,.8)}};function je(n,t="soft"){if(!Ke||tl())return;let e=Ke.currentTime+.005,i=Of[t]||Of.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Vi(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Rn("sine",880,e,.002,.07,.08,1320);break;case"chest":Rn("triangle",160,e,.02,.07,.3,120),Rn("sine",330,e+.12,.005,.05,.15);break;case"door":Rn("sawtooth",120,e,.03,.04,.3,160),Vi("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Vi("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Rn("triangle",659,e,.005,.08,.15),Rn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Rn("sine",1319,e,.002,.08,.08),Rn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Rn("triangle",300,e,.005,.1,.18,200);break;default:break}}var Gi=(n,t,e,i=0)=>t>=n[0]-i&&t<=n[2]+i&&e>=n[1]-i&&e<=n[3]+i,Gf=(n,t)=>{let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296};function V_(n,t,e,i){let s=new Map,r=t.GY,o=n.x+n.w-1,a=n.z+n.d-1,l=(g,w,m,p)=>s.set(g+","+w+","+m,p),c=i?"s2n":n.door,d=i?1:n.doorW||2,u=i?"n":c,f=u==="n"||u==="s"?n.x+(n.w>>1):n.z+(n.d>>1),x=(g,w)=>{let m=u==="n"||u==="s"?g:w,p=f-(d>>1);return m<p||m>=p+d?!1:u==="n"&&w===n.z||u==="s"&&w===a||u==="w"&&g===n.x||u==="e"&&g===o};for(let g=n.x;g<=o;g++)for(let w=n.z;w<=a;w++){let m=g===n.x||g===o||w===n.z||w===a,p=(g===n.x||g===o)&&(w===n.z||w===a);l(g,r,w,e(n.floor||"planks")),l(g,r+n.h+1,w,e(n.roof));for(let R=r+1;R<=r+n.h;R++){if(!m){l(g,R,w,0);continue}if(x(g,w)&&R<=r+2){l(g,R,w,i?e("door"):0);continue}let U=g===n.x||g===o?w-n.z:g-n.x,v=!p&&R===r+2&&U%3===1&&!x((g===n.x||g===o,g),w)&&n.h>=4;l(g,R,w,e(v?"glass":n.wall))}}for(let[g,w,m,p]of n.props||[])l(n.x+w,r+1+m,n.z+p,e(g));return s}function Hf(n,t){let e=v=>n.num(v),i=t.GY,s=t.sidewalk,r=t.bound,o=t.homes.map(v=>Object.assign({floor:"planks",door:"n",isHome:!0},v)),a=t.buildings.concat(o),l=a.map(v=>({b:v,arr:[...V_(v,t,e,!!v.isHome)].map(([A,E])=>A.split(",").map(Number).concat(E))})),c=new Set;for(let v of a){let A=v.isHome?"n":v.door,E=v.x+v.w-1,N=v.z+v.d-1,S=v.x+(v.w>>1),T=v.z+(v.d>>1),P={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]}[A],D=A==="w"?v.x-1:A==="e"?E+1:S,H=A==="n"?v.z-1:A==="s"?N+1:T;for(let k=0;k<14&&!t.roads.some(O=>Gi(O,D,H,s));k++){for(let O of[-1,0,1])c.add((P[0]?D:D+O)+","+(P[0]?H+O:H));D+=P[0],H+=P[1]}}let d=t.park,u=d.pond,f=(v,A)=>v>=d.x&&v<d.x+d.w&&A>=d.z&&A<d.z+d.d,x=new Set;for(let v of t.roads){let A=v[2]-v[0]>v[3]-v[1];for(let E=A?v[0]:v[1];E<=(A?v[2]:v[3]);E+=12)for(let N of[-1,1]){let S=A?E:N<0?v[0]-s:v[2]+s,T=A?N<0?v[1]-s:v[3]+s:E;t.roads.some(P=>P!==v&&Gi(P,S,T,s+2))||[-1,0,1].some(P=>[-1,0,1].some(D=>c.has(S+P+","+(T+D))))||x.add(S+","+T)}}let g=(v,A)=>{for(let E of t.roads)if(Gi(E,v,A)){let N=E[2]-E[0]>E[3]-E[1];return t.roads.find(P=>P!==E&&Gi(P,v,A,5)&&!Gi(P,v,A))?(N?v:A)&1?e("crossing"):e("road"):t.roads.some(P=>P!==E&&Gi(P,v,A))?e("road"):(N?A===Math.round((E[1]+E[3])/2):v===Math.round((E[0]+E[2])/2))&&((N?v:A)%4+4)%4<2?e("road_line"):e("road")}return t.roads.some(E=>Gi(E,v,A,s))||c.has(v+","+A)?e("sidewalk"):f(v,A)&&v>=u[0]&&v<=u[2]&&A>=u[1]&&A<=u[3]?e("water"):e("grass")},w=new Set(d.trees.map(([v,A])=>v+","+A));for(let v=-r+2;v<=r-2;v+=6)for(let[A,E]of[[v,-r+1],[v,r-1],[-r+1,v],[r-1,v]])t.roads.some(N=>Gi(N,A,E,s+1))||w.add(A+","+E);let m=t.secrets||{rooms:[]},p=(m.board?m.board.ops:[]).concat(...m.rooms.map(v=>v.ops));function R(v,A){let E=new Uint8Array(16384),N=v*16,S=A*16,T=(P,D,H,k)=>{D>0&&D<64&&(E[ri(P,D,H)]=k)};for(let P=0;P<16;P++)for(let D=0;D<16;D++){let H=N+D,k=S+P;E[ri(D,0,P)]=e("bedrock");for(let W=1;W<i-3;W++)E[ri(D,W,P)]=e("stone");for(let W=i-3;W<i;W++)E[ri(D,W,P)]=e("dirt");let O=g(H,k);if(E[ri(D,i,P)]=O,O===e("water")){E[ri(D,i-1,P)]=e("sand");continue}if(Math.abs(H)>r||Math.abs(k)>r){T(D,i+1,P,e("hedge")),T(D,i+2,P,e("hedge"));continue}if(x.has(H+","+k)){for(let W=i+1;W<=i+3;W++)T(D,W,P,e("lamp_pole"));T(D,i+4,P,e("lantern"));continue}if(w.has(H+","+k)){for(let W=i+1;W<=i+3;W++)T(D,W,P,e("log"));continue}O===e("grass")&&f(H,k)&&Gf(H,k)<.06&&T(D,i+1,P,e(["flower_rose","flower_dandelion","flower_cornflower","tallgrass"][Math.floor(Gf(k,H)*4)]))}for(let P of w){let[D,H]=P.split(",").map(Number);for(let k=-2;k<=2;k++)for(let O=-2;O<=2;O++)for(let W=3;W<=5;W++){if(Math.abs(k)+Math.abs(O)>(W===5?1:3))continue;let et=D+k-N,$=H+O-S;et<0||et>=16||$<0||$>=16||k===0&&O===0&&W===3||T(et,i+W+1,$,e("leaves"))}}for(let{b:P,arr:D}of l)if(!(P.x>N+16-1||P.x+P.w-1<N||P.z>S+16-1||P.z+P.d-1<S))for(let[H,k,O,W]of D){let et=H-N,$=O-S;et>=0&&et<16&&$>=0&&$<16&&T(et,k,$,W)}for(let[P,D,H,k,O,W=H,et=k,$=O]of p){if(W<N||H>N+16-1||$<S||O>S+16-1)continue;let ut=D==="air"?0:e(D);for(let tt=Math.max(H,N);tt<=Math.min(W,N+16-1);tt++)for(let lt=Math.max(O,S);lt<=Math.min($,S+16-1);lt++)for(let ct=k;ct<=et;ct++){let zt=tt===H||tt===W||ct===k||ct===et||lt===O||lt===$;T(tt-N,ct,lt-S,P==="hollow"&&!zt?0:ut)}}for(let[P,D,H]of d.benches){let k=P-N,O=D-S;k>=0&&k<16&&O>=0&&O<16&&T(k,i+1,O,e("stairs_planks"+["","_e","_s","_w"][H]))}for(let[P,D,H,k]of t.cars)for(let O=0;O<4;O++)for(let W=0;W<2;W++){let et=P+(k==="x"?O:W),$=D+(k==="x"?W:O),ut=et-N,tt=$-S;ut<0||ut>=16||tt<0||tt>=16||(T(ut,i+1,tt,e(H)),T(ut,i+2,tt,e(O===1||O===2?"glass":H)))}return E}let U={x:t.spawn[0],y:i+1,z:t.spawn[1],stele:{x:0,y:i+1,z:0}};return{genChunk:R,findSpawn:()=>U,height:()=>i,baseHeight:()=>i,biomeOf:()=>"town",villages:{around:()=>[]},homes:o,buildings:t.buildings,GY:i}}function Wf(n,t,e,i,s){return n?t>n.x&&t<n.x+n.w-1&&i>n.z&&i<n.z+n.d-1&&e>=s+1&&e<=s+n.h:!1}function Xf(n,t,e){let i=[];for(let s=n.x;s<n.x+n.w;s++)for(let r=n.z;r<n.z+n.d;r++)for(let o=t+1;o<=t+n.h;o++)(s===n.x||s===n.x+n.w-1||r===n.z||r===n.z+n.d-1)&&e(s,o,r)&&i.push([s,o,r]);return i}var Kc=18;function Fr(n,t,e=1){let i=t+n.h+1;return{slab:i,roof:e===2?i+n.h+1:i,ladder:[n.x+1,n.z+n.d-2],h:e===2?n.h*2+1:n.h}}function qf(n,t,e={}){let i=e.floors===2?2:1,s=e.theme||"none",r=Fr(n,t,i),o=[],a=(m,p,R,U)=>o.push([m,p,R,U]),l=n.x+n.w-1,c=n.z+n.d-1,d=n.x+(n.w>>1),u=d,f=n.z+(n.d>>1),x=(m,p)=>s==="castle"?"stone_bricks":s==="tree"?p?"log":"planks":s==="lighthouse"?(m-t)%4<2?"wool":"wool_red":e.wall||n.wall,g={castle:"stone_bricks",tree:"leaves",lighthouse:"wool_red"}[s]||n.roof;for(let m=n.x;m<=l;m++)for(let p=n.z;p<=c;p++){let R=m===n.x||m===l||p===n.z||p===c,U=(m===n.x||m===l)&&(p===n.z||p===c),v=m===n.x||m===l?p-n.z:m-n.x,A=m===r.ladder[0]&&p===r.ladder[1];for(let E=t+1;E<=t+Kc;E++)if(E>r.roof)a(m,E,p,"air");else if(E===r.roof)a(m,E,p,g);else if(R){if(m===d&&p===n.z&&E<=t+2)continue;let N=(E-t-1)%(n.h+1);a(m,E,p,!U&&N===1&&v%3===1&&n.h>=4?"glass":x(E,U))}else i===2&&E===r.slab?a(m,E,p,A?"air":"planks"):i===2&&A&&E<r.slab&&a(m,E,p,"ladder")}let w=r.roof;if(s==="tree")for(let m=n.x-1;m<=l+1;m++)for(let p=n.z-1;p<=c+1;p++){let R=Math.max(n.x-m,m-l,0),U=Math.max(n.z-p,p-c,0),v=Math.min(m-n.x,l-m,p-n.z,c-p);R||U||(v>=1&&a(m,w+1,p,"leaves"),v>=2&&a(m,w+2,p,"leaves"))}if(s==="lighthouse")for(let m=u-1;m<=u+1;m++)for(let p=f-1;p<=f+1;p++){let R=m!==u||p!==f;for(let U=w+1;U<=w+3;U++)a(m,U,p,(U-w)%2?"wool":"wool_red");a(m,w+4,p,R?"glass":"lantern"),a(m,w+5,p,"wool_red")}if(s==="castle")for(let m=n.x;m<=l;m++)for(let p=n.z;p<=c;p++){let R=m===n.x||m===l||p===n.z||p===c,U=(m===n.x||m===l)&&(p===n.z||p===c),v=m===n.x||m===l?p-n.z:m-n.x;U?(a(m,w+1,p,"stone_bricks"),a(m,w+2,p,"stone_bricks"),a(m,w+3,p,"stone_bricks")):R&&v%2===0&&a(m,w+1,p,"stone_bricks")}return o}function Yf(n,t=Math.random){let e=i=>{let s=i.slice();for(let r=s.length-1;r>0;r--){let o=Math.floor(t()*(r+1));[s[r],s[o]]=[s[o],s[r]]}return s};return{d:n,turn:0,tries:0,coins:0,right:0,phase:"talk",cards:n.turns.map(i=>e(i.cards)),check:e(n.check.options.map((i,s)=>({zh:i,ok:s===n.check.answer})))}}function $f(n,t){if(n.phase!=="talk")return{ok:!1};let e=n.cards[n.turn][t];if(!e)return{ok:!1};if(!e.ok)return n.tries++,{ok:!1,card:e};let i=n.tries===0;return i&&(n.coins++,n.right++),n.turn++,n.tries=0,n.turn>=n.d.turns.length&&(n.phase="check"),{ok:!0,first:i,card:e,next:n.phase}}function Zf(n,t){if(n.phase!=="check")return{ok:!1};let e=n.check[t];return n.phase="done",e&&e.ok&&(n.coins+=2),{ok:!!(e&&e.ok),coins:n.coins}}function Jf(n,t,e=1.2){if(n.wait>0){n.wait-=t,n.v={x:0,y:0,z:0};return}let i=n.route,s=i[n.ri%i.length],r=s[0]+.5-n.p.x,o=s[1]+.5-n.p.z,a=Math.hypot(r,o);if(a<.15){n.ri=(n.ri+1)%i.length,n.wait=1.5;return}let l=Math.min(a,e*t);n.p.x+=r/a*l,n.p.z+=o/a*l,n.yaw=Math.atan2(-r,-o),n.v={x:r/a*e,y:0,z:o/a*e}}var Wn={skin:["#F3D6B8","#E7CDA6","#C99A6B","#8C5A3A","#5C3A24"],hair:["short","long","bun","spiky","none"],hairColor:["#151714","#5C3A24","#C9904F","#D9B860","#C2443A"],top:["#2F5A34","#3F6E9A","#C2443A","#D9A63A","#C9709F","#EFEBDD","stripe","star"],bottom:["#26302A","#3F6E9A","#8C6640","#5E6660"],hat:["none","cap","beanie","bow","flower","tophat","crown"],glasses:[!1,!0],acc:["none","scarf","goldbadge","backpack","cape"]},G_=()=>({skin:1,hair:0,hairColor:0,top:0,bottom:0,hat:0,glasses:0,acc:0});function el(n){let t=G_();for(let e in t){let i=n&&Number.isInteger(n[e])?n[e]:t[e];t[e]=Math.max(0,Math.min(Wn[e].length-1,i))}return t}var Kf=n=>({skin:Wn.skin[n.skin],hair:Wn.hair[n.hair],hairColor:Wn.hairColor[n.hairColor],top:Wn.top[n.top],bottom:Wn.bottom[n.bottom],hat:Wn.hat[n.hat],glasses:Wn.glasses[n.glasses],acc:Wn.acc[n.acc]}),jf=(n,t,e,i)=>{let s=n[e+":"+i];return!!s&&!t.has(s)},Qf=n=>Object.fromEntries(n.items.filter(t=>t.slot).map(t=>[t.slot+":"+t.value,t.id]));function td(n,t,{coins:e=0,hasHome:i=!1}={}){return n?t.has(n.id)?{ok:!1,reason:"owned"}:n.needHome&&!i?{ok:!1,reason:"home"}:e<n.price?{ok:!1,reason:"coins",short:n.price-e}:{ok:!0}:{ok:!1,reason:"missing"}}var ed=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var Gs=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},nd=n=>(/^[aeiou]/i.test(n)?"an ":"a ")+n,jc=n=>n.charAt(0).toUpperCase()+n.slice(1),Qc=n=>String(n??"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim(),W_=(n,t)=>!!Qc(t)&&[n.a].concat(n.alts||[]).some(e=>Qc(e)===Qc(t)),id=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],X_=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function Hi(n){return n>=100?"one hundred"+(n%100?" and "+Hi(n%100):""):n<20?id[n]:X_[Math.floor(n/10)]+(n%10?"-"+id[n%10]:"")}function sd(n,t=Math.random){return{job:n,i:0,right:0,answers:[],qs:n.exam.map(e=>e.type==="typed"?{...e}:{...e,cards:Gs(e.opts.map((i,s)=>({t:i,ok:s===e.a})),t)}),done:!1}}function rd(n,t){if(n.done)return null;let e=n.qs[n.i],i=e.type==="typed",s=i?W_(e,t):!!(e.cards[t]&&e.cards[t].ok);return n.answers.push(s),s&&n.right++,n.i++,n.i>=n.qs.length&&(n.done=!0),{ok:s,typed:i,answer:i?e.a:e.opts[e.a],text:i?String(t):(e.cards[t]||{}).t}}var od=n=>n.done&&n.right>=8;function ad(n,t=Math.random){let e=n.task,i=(o,a)=>Gs(o,t).slice(0,a),s=(o,a)=>({t:o,ok:a});if(e.kind==="go"){let o=i(e.calls,1)[0];return{kind:"go",to:o.to,en:o.en,zh:o.zh,pay:e.pay||5,tries:0}}let r;return e.kind==="cases"?r=i(e.cases,3).map(o=>({en:`${e.who}: "${o.says}"`,zh:o.zh,cards:Gs([s(o.a,!0),...o.wrong.map(a=>s(a,!1))],t)})):e.kind==="judge"?r=i(e.items,3).map(o=>{let a=i(e.students,1)[0],l="That's right! Good job.",c=u=>`Almost! Say: "${u}"`,d=o.ok?[s(l,!0),s(c(o.wrong[0]),!1),s(c(o.wrong[1]||o.wrong[0]),!1)]:[s(c(o.fix),!0),s(l,!1),s(c(o.wrong[0]),!1)];return{en:`${a} says: "${o.says}"`,zh:"\u9019\u53E5\u8A71\u5C0D\u4E0D\u5C0D\uFF1F\u9078\u8001\u5E2B\u8981\u8AAA\u7684\u8A71\u3002",cards:Gs(d,t)}}):e.kind==="change"?r=i(e.items,3).map(o=>{let a=o.price<50&&t()<.5?50:100,l=a-o.price,c=[l+10,l-5,l+5,o.price,l-10].filter(u=>u>0&&u!==l&&u<200),d=[...new Set(c)].slice(0,2);return{en:`${jc(nd(o.en))} is ${Hi(o.price)} dollars. The customer gives you ${Hi(a)} dollars. How much change do you give?`,zh:`${o.zh} ${o.price} \u5143\uFF0C\u5BA2\u4EBA\u7D66 ${a} \u5143\uFF0C\u8981\u627E\u591A\u5C11\u9322\uFF1F`,cards:Gs([s(jc(Hi(l))+" dollars.",!0),...d.map(u=>s(jc(Hi(u))+" dollars.",!1))],t),change:l}}):e.kind==="order"&&(r=Array.from({length:3},()=>{let[o,a]=i(e.foods,2),l=1+Math.floor(t()*3),c=1+Math.floor(t()*3),d=(g,w)=>w===1?nd(g.sg):Hi(w)+" "+g.pl,u=(g,w,m,p)=>g.icon.repeat(w)+" \uFF0B "+m.icon.repeat(p),f=i(e.foods.filter(g=>g!==o&&g!==a),1)[0],x=[l===c?u(o,l%3+1,a,c):u(o,c,a,l),u(o,l,f,c)];return{en:`Customer: "I'd like ${d(o,l)} and ${d(a,c)}, please."`,zh:"\u5BA2\u4EBA\u9EDE\u4E86\u4EC0\u9EBC\uFF1F\u9078\u5C0D\u7684\u9910\u76E4\u3002",cards:Gs([s(u(o,l,a,c),!0),...x.map(g=>s(g,!1))],t)}})),{kind:"quiz",i:0,right:0,qs:r,coins:0}}function ld(n,t){if(n.kind!=="quiz"||n.i>=n.qs.length)return null;let e=n.qs[n.i],i=e.cards[t];if(!i)return null;let s=!!i.ok;return s&&(n.right++,n.coins+=2),n.i++,{ok:s,answer:e.cards.find(r=>r.ok).t,text:i.t,done:n.i>=n.qs.length}}var cd=n=>({lic:Object.assign({},n&&n.lic),wear:n&&n.wear||null,done:Object.assign({},n&&n.done)});var Y_=[["Can you say this in English?","\u4F60\u6703\u7528\u82F1\u6587\u8AAA\u9019\u53E5\u55CE\uFF1F"],["How do you say this in English?","\u9019\u53E5\u82F1\u6587\u600E\u9EBC\u8AAA\uFF1F"],["Your turn! Say it in English.","\u63DB\u4F60\u4E86\uFF01\u7528\u82F1\u6587\u8AAA\u8AAA\u770B\u3002"]],th=(n,t)=>n[Math.floor(t()*n.length)],Or=n=>typeof n=="string"&&/^[A-Z0-9"]/.test(n)&&/[.!?]$/.test(n);function $_(n,t,{learned:e={},mistakes:i={}}={}){let s=(n==="pattern"?"p:":"ph:")+t+":";for(let o in i)if(o.startsWith(s)&&i[o]&&!i[o].d)return 0;let r=e[n+":"+t];return r&&r.at?2:1}function Z_(n,t){if(!n)return[];let e=new Map((t.patterns||[]).map(s=>[s.id,s])),i=new Map((t.phrases||[]).map(s=>[s.id,s]));return(n.patterns||[]).filter(s=>e.has(s)).map(s=>({kind:"pattern",id:s,item:e.get(s)})).concat((n.phrases||[]).filter(s=>i.has(s)).map(s=>({kind:"phrase",id:s,item:i.get(s)})))}function hd(n,t,e={},i=Math.random){let s=Z_(n,t);if(!s.length)return null;let r=[[],[],[]];for(let a of s)r[$_(a.kind,a.id,e)].push(a);let o=r.find(a=>a.length);for(let a=0;a<6;a++){let l=th(o,i),c,d;if(l.kind==="pattern"){let g=(l.item.ex||[]).concat(l.item.extra||[]).filter(w=>Or(w.en)&&w.zh);if(c=th((l.item.ex||[]).filter(w=>Or(w.en)&&w.zh),i),!c)continue;d=g.filter(w=>w.en!==c.en&&w.zh!==c.zh).map(w=>w.en)}else{if(!Or(l.item.ex)||!l.item.exZh)continue;c={en:l.item.ex,zh:l.item.exZh},d=s.filter(g=>g.kind==="phrase"&&g.id!==l.id&&Or(g.item.ex)).map(g=>g.item.ex),d.length<2&&(d=d.concat((t.phrases||[]).filter(g=>g.tag===l.item.tag&&g.id!==l.id&&Or(g.ex)).map(g=>g.ex)))}let u=[...new Set(d.filter(g=>g!==c.en))].sort(()=>i()-.5).slice(0,2);if(u.length<2)continue;let[f,x]=th(Y_,i);return{npc:f,zh:x,say:c.zh,cards:[{en:c.en,ok:!0}].concat(u.map(g=>({en:g,ok:!1}))),src:l.kind+":"+l.id}}return null}function eh(n,t=null){let e=Kf(n),i=new fn,s=[],r={stripe:"#EFEBDD",star:"#2B3F5C"},o=r[e.top]?e.top:null;o&&(e.top=r[o]),t&&(e.top=t.top||e.top,t.hat&&t.hat!=="none"&&(e.hat="none"));let a=(x,g,w,m,p,R,U,v=i)=>{let A=new yn({color:m});A.userData.base=new Jt(m),s.push(A);let E=new Ue(new pn(x,g,w),A);return E.position.set(p,R,U),v.add(E),E},l=(x,g,w,m,p,R)=>{let U=a(x,g,w,m,p,R,0);return U.geometry.translate(0,-g/2+.05,0),U.position.y+=g/2-.05,U},c=l(.24,.75,.26,e.bottom,-.14,.375),d=l(.24,.75,.26,e.bottom,.14,.375);if(a(.56,.7,.3,e.top,0,1.1,0),o==="stripe"&&!t)for(let x of[.86,1.06,1.26])a(.57,.08,.31,"#C2443A",0,x,0);o==="star"&&!t&&(a(.22,.07,.02,"#F2C46B",0,1.16,-.16),a(.07,.22,.02,"#F2C46B",0,1.16,-.16),a(.14,.14,.02,"#F2C46B",0,1.16,-.158));let u=l(.18,.66,.2,e.top,-.38,1.12),f=l(.18,.66,.2,e.top,.38,1.12);if(a(.12,.14,.18,e.skin,-.38,.84,0),a(.12,.14,.18,e.skin,.38,.84,0),a(.5,.48,.46,e.skin,0,1.7,0),a(.08,.08,.02,"#151714",-.11,1.74,-.235),a(.08,.08,.02,"#151714",.11,1.74,-.235),a(.14,.04,.02,"#C2443A",0,1.6,-.235),e.hair==="short"&&a(.54,.16,.5,e.hairColor,0,1.97,.02),e.hair==="long"&&(a(.54,.16,.5,e.hairColor,0,1.97,.02),a(.54,.5,.12,e.hairColor,0,1.7,.25)),e.hair==="bun"&&(a(.54,.14,.5,e.hairColor,0,1.96,.02),a(.22,.2,.22,e.hairColor,0,2.12,.12)),e.hair==="spiky")for(let x of[-.18,0,.18])a(.14,.24,.4,e.hairColor,x,2.02,.02);if(e.hat==="cap"&&(a(.56,.14,.52,"#C2443A",0,2.03,.02),a(.4,.04,.2,"#C2443A",0,1.97,-.32)),e.hat==="beanie"&&a(.56,.24,.52,"#3F6E9A",0,2.06,.02),e.hat==="bow"&&(a(.2,.14,.06,"#C9709F",-.12,2.02,-.1),a(.2,.14,.06,"#C9709F",.12,2.02,-.1)),e.hat==="flower"&&["#C2443A","#F2C46B","#C9709F","#EFEBDD","#3F6E9A","#F2C46B"].forEach((x,g)=>{let w=g/6*Math.PI*2;a(.12,.1,.12,x,Math.sin(w)*.24,1.99,Math.cos(w)*.22)}),e.hat==="tophat"&&(a(.62,.04,.58,"#151714",0,1.97,.02),a(.38,.38,.36,"#151714",0,2.18,.02),a(.39,.06,.37,"#C2443A",0,2.03,.02)),e.hat==="crown"){a(.5,.12,.46,"#D9A63A",0,2,.02);for(let[x,g]of[[-.2,-.2],[0,-.2],[.2,-.2],[-.2,.22],[.2,.22]])a(.09,.12,.06,"#D9A63A",x,2.12,g);a(.07,.07,.02,"#C2443A",0,2,-.215)}if(e.acc==="scarf"&&(a(.56,.1,.34,"#C2443A",0,1.43,0),a(.12,.3,.04,"#C2443A",.12,1.26,-.18)),e.acc==="goldbadge"&&a(.12,.12,.03,"#D9A63A",.14,1.28,-.165),e.acc==="backpack"&&(a(.42,.5,.18,"#D9A63A",0,1.1,.24),a(.3,.16,.04,"#8C6640",0,1,.34)),e.acc==="cape"&&a(.56,.95,.04,"#6E3F8C",0,.98,.18),e.glasses&&(a(.16,.12,.02,"#26302A",-.12,1.74,-.245),a(.16,.12,.02,"#26302A",.12,1.74,-.245)),t){let x=t.hatColor||"#F4F1E8",g=t.extraColor||"#26302A";t.hat==="chef"&&(a(.5,.1,.48,x,0,1.98,.02),a(.44,.36,.42,x,0,2.2,.02)),t.hat==="helmet"&&(a(.6,.22,.56,x,0,2.04,.02),a(.68,.04,.66,x,0,1.94,.04),a(.12,.1,.02,"#C2443A",0,2.06,-.255)),t.hat==="cap"&&(a(.56,.14,.52,x,0,2.03,.02),a(.4,.04,.2,x,0,1.97,-.32)),t.hat==="nurse"&&(a(.4,.12,.3,x,0,2,0),a(.08,.08,.02,"#C2443A",0,2,-.155)),t.extra==="apron"&&a(.44,.62,.03,g,0,1,-.165),t.extra==="tie"&&a(.08,.36,.03,g,0,1.22,-.165),t.extra==="bag"&&(a(.06,.62,.32,g,.32,1.12,0),a(.12,.26,.34,g,.36,.86,0)),t.extra==="stethoscope"&&(a(.04,.3,.03,g,-.12,1.28,-.165),a(.04,.3,.03,g,.12,1.28,-.165),a(.1,.1,.03,"#B9B6AE",.12,1.1,-.17)),t.extra==="badge"&&a(.12,.12,.03,g,-.14,1.28,-.165)}return i.userData={legL:c,legR:d,armL:u,armR:f,mats:s},i}function nh(n,t,e,i){let s=n.userData,r=Math.sin(e*9)*Math.min(1,t/4)*.7;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r,s.armR.rotation.x=r;for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var ud=()=>{let n=new fn,t=[],e=(i,s,r,o,a,l,c,d=n)=>{let u=new yn({color:o});u.userData.base=new Jt(o),t.push(u);let f=new Ue(new pn(i,s,r),u);return f.position.set(a,l,c),d.add(f),f};return n.userData.mats=t,{g:n,bx:e}};function fd(n){let{g:t,bx:e}=ud(),i=(s,r,o)=>{for(let a of s)for(let l of r)e(.16,o,o,"#26302A",a,o/2,l)};if(n==="bike"){for(let s of[-.55,.55])e(.08,.5,.5,"#26302A",0,.25,s),e(.1,.2,.2,"#B9B6AE",0,.25,s);e(.08,.08,1.1,"#C2443A",0,.5,0),e(.08,.4,.08,"#C2443A",0,.65,-.5),e(.5,.06,.06,"#26302A",0,.86,-.5),e(.22,.06,.3,"#26302A",0,.62,.3)}else if(n==="scooter"){e(.3,.06,1,"#3F6E9A",0,.1,0);for(let s of[-.45,.45])e(.08,.16,.16,"#26302A",0,.08,s);e(.06,.95,.06,"#B9B6AE",0,.58,-.46),e(.5,.06,.06,"#26302A",0,1.05,-.46)}else if(n==="car")e(1.3,.55,2.4,"#C2443A",0,.55,0),e(1.2,.4,1,"#CFE3DF",0,1.02,.15),e(1.32,.08,1.02,"#C2443A",0,1.25,.15),e(.3,.14,.04,"#F2C46B",-.42,.62,-1.21),e(.3,.14,.04,"#F2C46B",.42,.62,-1.21),i([-.66,.66],[-.8,.8],.44);else if(n==="bus"){e(1.9,1.5,4.6,"#D9A63A",0,1,0);for(let s of[-1.6,-.6,.4,1.4])e(1.92,.5,.7,"#CFE3DF",0,1.25,s);e(1.6,.5,.04,"#CFE3DF",0,1.25,-2.31),e(1.92,.12,4.62,"#26302A",0,.5,0),i([-.9,.9],[-1.5,1.5],.6)}else n==="boat"&&(e(1.1,.36,2.2,"#8C6640",0,-.05,0),e(.9,.06,1.9,"#C49A63",0,.12,0),e(1.12,.1,.5,"#EFEBDD",0,.16,-.9));return t}function dd(n){let{g:t,bx:e}=ud(),i={dog:["#B88B55","#5C3A24"],cat:["#8C8A84","#5E6660"],rabbit:["#EFEBDD","#E8B4AC"],dalmatian:["#F4F1E8","#151714"]}[n]||["#B88B55","#5C3A24"],s=[-.12,.12].flatMap(o=>[-.18,.18].map(a=>e(.1,.22,.1,i[0],o,.11,a)));e(.32,.26,.56,i[0],0,.34,0);let r=e(.3,.28,.28,i[0],0,.56,-.32);if(e(.05,.05,.02,"#151714",-.08,.6,-.465),e(.05,.05,.02,"#151714",.08,.6,-.465),e(.06,.04,.02,"#151714",0,.52,-.465),n==="rabbit"?(e(.08,.3,.06,i[0],-.08,.84,-.3),e(.08,.3,.06,i[0],.08,.84,-.3),e(.04,.2,.02,i[1],-.08,.84,-.335),e(.04,.2,.02,i[1],.08,.84,-.335),e(.12,.12,.12,"#FFFFFF",0,.38,.32)):n==="cat"?(e(.08,.1,.06,i[1],-.1,.74,-.3),e(.08,.1,.06,i[1],.1,.74,-.3),e(.06,.06,.4,i[0],0,.5,.42)):(e(.08,.16,.08,i[1],-.15,.6,-.28),e(.08,.16,.08,i[1],.15,.6,-.28),e(.06,.06,.24,i[0],0,.46,.36)),n==="dalmatian")for(let[o,a,l]of[[.165,.38,-.1],[-.165,.32,.12],[.1,.475,.15],[-.08,.475,-.12],[.155,.6,-.32]])e(.02+(Math.abs(o)>.15?0:.08),.08,.08+(Math.abs(o)>.15?0:-.06),i[1],o,a,l);return t.userData.legs=s,t.userData.head=r,t}function pd(n,t,e,i){let s=n.userData,r=Math.sin(e*12)*Math.min(1,t/3)*.6;s.legs.forEach((o,a)=>{o.rotation.x=a%3===0?r:-r});for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var md=(n,t)=>{for(let e of n.userData.mats)e.color.copy(e.userData.base).multiplyScalar(t)};function gd(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Bs(n,s),canSpend:s=>n.coins>=s,spend:async s=>Wc(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}var li=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},K_=n=>n.charAt(0).toUpperCase()+n.slice(1),j_=n=>typeof n=="string"&&/^[A-Z0-9"']/.test(n)&&/[.!?]$/.test(n),ih=(n,t)=>t===1?n.sg:Hi(t)+" "+n.pl,Q_=n=>n.length<2?n.join(""):n.length===2?n.join(" and "):n.slice(0,-1).join(", ")+", and "+n[n.length-1];function yd(n,t=Math.random){let e=li(n.items,t).slice(0,n.lines).map(i=>{let s=1+Math.floor(t()*n.maxQty);return{id:i.id,n:s,en:ih(i,s),zh:i.zh}});return{lines:e,en:`${n.please} ${Q_(e.map(i=>i.en))}.`,shelf:li(n.items,t).map(i=>i.id)}}function vd(n,t){let e=Object.fromEntries(n.map(i=>[i.id,i.n]));return{results:n.map(i=>({id:i.id,want:i.n,got:t[i.id]||0,ok:(t[i.id]||0)===i.n})),extra:Object.keys(t).filter(i=>t[i]>0&&!e[i])}}function Md(n,t=Math.random){let e=li(n.customers,t);return Array.from({length:n.per},(i,s)=>{let[r,o]=li(n.menu,t),a=t()<.3?2:1,l=t()<.3?2:1,c=n.say[Math.floor(t()*n.say.length)],d=ih(r,a),u=ih(o,l);return{who:e[s%e.length],en:c.replace("{A}",K_(d)).replace("{a}",d).replace("{b}",u),want:{[r.id]:a,[o.id]:l}}})}var Sd=(n,t)=>{let e=new Set(Object.keys(n).concat(Object.keys(t).filter(i=>t[i]>0)));for(let i of e)if((n[i]||0)!==(t[i]||0))return!1;return!0},ty=["first","second","third","fourth"],ey=["\u4E00","\u4E8C","\u4E09","\u56DB"];function ny(n,t,e){let i={left:n.filter(r=>r.x>t).sort((r,o)=>r.x-o.x),right:n.filter(r=>r.x<t).sort((r,o)=>o.x-r.x)},s=[];for(let r of["left","right"])i[r].forEach((o,a,l)=>{let c=i[r==="left"?"right":"left"];for(let d of[l[a-1],l[a+1]].filter(Boolean)){let u=r==="left"?"right":"left",f=(x,g)=>x.replace("{turn}",r).replace("{nth}",ty[a]).replace("{side}",u).replace("{next}",d.en).replace("{turnZh}",r==="left"?"\u5DE6":"\u53F3").replace("{nthZh}",ey[a]).replace("{sideZh}",u==="left"?"\u5DE6":"\u53F3").replace("{nextZh}",g?d.zh:"");s.push({to:o.id,turn:r,nth:a,next:d.id,en:f(e.how),zh:f(e.howZh,!0),cards:[o.id,d.id,(c[a]||c[0]).id]})}});return s}function bd(n,t,e,i=Math.random){let s=ny(n,t,e),r=s[Math.floor(i()*s.length)];return Object.assign({},r,{cards:li(r.cards,i),tries:0})}var xd=/^hanlin-[56]-u\d+$/,_d=n=>{let t=/^hanlin-(\d)-u(\d+)$/.exec(n);return t?`${t[1]==="5"?"\u4E94\u4E0A":"\u4E94\u4E0B"} Unit ${t[2]}`:n};function wd(n,t){let e=(n||[]).filter(s=>xd.test(s.id)&&(s.sents||[]).length).map(s=>({id:s.id,title:s.title||_d(s.id),sents:s.sents}));if(e.length)return e;let i={};for(let s of t||[])for(let r of s.tb||[])if(xd.test(r))for(let[o,a]of(s.ex||[]).entries())(i[r]=i[r]||[]).push({key:s.id+":"+o,en:a.en,zh:a.zh});return Object.keys(i).sort().map(s=>({id:s,title:_d(s),sents:i[s]}))}function Ad(n,t,e){if(!n.length)return null;let i=new Set(n.map(r=>r.id));for(let r=(t||[]).length-1;r>=0;r--){let o=/^tb:(hanlin-[56]-u\d+):/.exec(t[r]&&t[r].id||"");if(o&&i.has(o[1]))return o[1]}let s=0;for(let r of String(e))s=s*31+r.charCodeAt(0)>>>0;return n[s%n.length].id}function Td(n,t,e=Math.random,i={}){let s=n.sents.filter(u=>j_(u.en)&&u.zh),r=[],o=new Set,a=u=>(u.blanks||[]).find(f=>f.w&&new RegExp("\\b"+f.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(u.en)&&(f.opts||[]).filter(x=>x!==f.w).length>=2),l=u=>{let f=li(s.filter(x=>x.en!==u.en&&x.zh!==u.zh),e).map(x=>x.en).filter((x,g,w)=>w.indexOf(x)===g).slice(0,2);return f.length<2?null:{kind:"zh2en",key:u.key,en:i.zh2en||"How do we say this in English?",zh:u.zh,showZh:!0,cards:li([{t:u.en,ok:!0}].concat(f.map(x=>({t:x,ok:!1}))),e),say:""}},c=u=>{let f=a(u);if(!f)return null;let x=li(f.opts.filter(g=>g!==f.w),e).slice(0,2);return{kind:"blank",key:u.key,en:u.en.replace(new RegExp("\\b"+f.w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b"),"____"),zh:u.zh+(f.cue?`\uFF08\u7A7A\u683C\uFF1A${f.cue}\uFF09`:""),showZh:!0,cards:li([{t:f.w,ok:!0}].concat(x.map(g=>({t:g,ok:!1}))),e),say:"",full:u.en}},d=li(s,e);for(let u=0;u<t;u++){let f=u%2?c:l,x=null;for(let g of d)if(!o.has(g.key)&&(x=f(g)||(f===c?l(g):null),x)){o.add(g.key);break}x&&r.push(x)}return r}function sy(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}function Ed(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=sy(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(l=>l.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Cd=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Lb=.5*(Math.sqrt(3)-1),Db=(3-Math.sqrt(3))/6;function kr(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var rh="cf2cefe289",Rd=new URLSearchParams(location.search),nl=Rd.get("test")==="1"||window.__HW_TEST__===!0,ay=720,ly=(n,t)=>{try{let e=localStorage.getItem(n);return e??t}catch{return t}},cy=(n,t)=>{try{localStorage.setItem(n,t)}catch{}};function Pd(n){let t=null,e=()=>t||(t=new Promise((s,r)=>{let o=indexedDB.open(n,1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})),i=(s,r)=>e().then(o=>new Promise((a,l)=>{let c=o.transaction("kv",s),d=r(c.objectStore("kv"));c.oncomplete=()=>a(d&&d.result),c.onerror=()=>l(c.error)}));return{get:s=>i("readonly",r=>r.get(s)),putMany:s=>i("readwrite",r=>{for(let o in s)r.put(s[o],o)}),all:s=>e().then(r=>new Promise((o,a)=>{let l={},c=r.transaction("kv").objectStore("kv").openCursor(IDBKeyRange.bound(s,s+"\uFFFF"));c.onsuccess=()=>{let d=c.result;d?(l[d.key]=d.value,d.continue()):o(l)},c.onerror=()=>a(c.error)}))}}var Mi=Pd("kids_town"),Br=Pd("hw_world"),M={started:!1,overlay:null,p:{x:.5,y:22,z:8.5},v:{x:0,y:0,z:0},yaw:Math.PI,pitch:-.15,onGround:!1,view:"tp",bike:!1,keys:{},joy:{x:0,y:0,active:!1},time:.25,frames:[],dirty:new Set,furn:!1,furnSel:0,furnRot:0,zh:ly("kt_zh","on")==="on",touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,pending:0};async function hy(){let[n,t,e,i,s,r,o]=await Promise.all(["data/blocks.json","data/town.json","data/dialogues.json","data/jobs.json","data/shop.json","data/chatgen.json","data/life.json"].map(h=>fetch(h,{cache:"no-cache"}).then(_=>_.json()))),a={blocks:n.blocks.concat(t.blocks),items:n.items,blueprints:n.blueprints},l=df(a),c=t.GY,d=Hf(l,t),u={};try{let[h,_,C,F,Y,Z,at,ot]=await Promise.all([Mi.get("kt_player"),Mi.get("kt_home"),Mi.get("kt_avatar"),Br.get("hw_coins"),Mi.get("kt_jobs"),Mi.get("kt_owned"),Mi.get("kt_pets"),Mi.get("kt_life")]);u={pl:h,home:_,av:C,coins:F,jobs:Y,owned:Z,pets:at,life:ot,chunks:await Mi.all("kt_chunk:")}}catch(h){console.warn("save unavailable",h)}let f=Za(u.coins),x=Ef(Object.fromEntries(Object.entries(u.chunks||{}).map(([h,_])=>[h.slice(9),_]))),g=Object.assign({id:null,locked:!1,wall:null,floor:null},u.home||{}),w=el(u.av),m=i.jobs,p=cd(u.jobs),R=new Set(Array.isArray(u.owned)?u.owned:[]),U=Object.fromEntries(s.items.map(h=>[h.id,h])),v=Qf(s),A=Object.assign({active:null,names:{}},u.pets||{}),E=Object.assign({stats:{},daily:null},u.life||{}),N=t.secrets&&t.secrets.rooms||[],S=()=>p.wear&&m[p.wear]?m[p.wear].uniform:null;u.pl&&Object.assign(M,{p:{x:u.pl.x,y:u.pl.y,z:u.pl.z},yaw:u.pl.yaw||0,view:u.pl.view||"tp"});let T=Ae("#c"),P=new Xa({canvas:T,antialias:!1,powerPreference:"high-performance"});P.setPixelRatio(Math.min(window.devicePixelRatio||1,M.touch?1.5:1.25));let D=new hr,H=new Jt("#EFEBDD");D.background=H;let k=new nn(70,1,.08,200);k.rotation.order="YXZ";let O=Rf(l),W=Df(O.canvas),et=new Worker("assets/kt-worker.js?v="+rh),$=new ja({scene:D,mats:W,reg:l,worker:et,diffs:x,onDirty:h=>M.dirty.add(h)});$.setRenderDistance(M.touch?3:4),k.far=$.rd*16+40,k.updateProjectionMatrix();let ut=await new Promise(h=>{let _=C=>{C.data.type==="ready"&&(et.removeEventListener("message",_),h(C.data.spawn))};et.addEventListener("message",_),et.postMessage({type:"init",seed:1,blocks:a,structures:t,diffs:Object.fromEntries([...x].map(([C,F])=>[C,Yc(F)]))})});u.pl||(M.p={x:ut.x,y:ut.y,z:ut.z});let tt=new Set;for(let h of t.buildings.concat(d.homes))for(let _=h.x;_<h.x+h.w;_++)for(let C=h.z;C<h.z+h.d;C++)tt.add(_+","+C);let lt=l.num("water"),ct=(h,_)=>$.get(h,c,_)===lt,zt=(h,_,C)=>Bt(Ee(),h,_,C),Bt=(h,_,C,F)=>{if(h&&Gt[h].big&&C>c&&C<=c+3&&tt.has(_+","+F)||h==="boat"&&(C===c&&ct(_,F)||C>c&&C<=c+2&&!ct(_,F)))return!0;let Y=$.get(_,C,F);return l.flat.solid[Y]===1&&(l.flat.boxes[Y]||!0)},pe=(h,_,C,F,Y,Z="#26302A")=>{let at=document.createElement("canvas");at.width=320,at.height=120;let ot=at.getContext("2d");ot.fillStyle="#EFEBDD",ot.fillRect(6,6,308,108),ot.strokeStyle=Z,ot.lineWidth=8,ot.strokeRect(6,6,308,108),ot.fillStyle=Z,ot.textAlign="center",ot.font="bold 46px sans-serif",ot.fillText(h,160,60),ot.font="30px sans-serif",ot.fillText(_,160,100);let xt=new Tn(at);xt.colorSpace=Ge;let kt=new Ii(new xi({map:xt,depthWrite:!1}));return kt.scale.set(3.2,1.2,1),kt.position.set(C,F,Y),D.add(kt),kt};for(let h of t.buildings){let _=h.door==="s"?h.z+h.d+.4:h.door==="n"?h.z-.4:h.z+h.d/2,C=h.door==="e"?h.x+h.w+.4:h.door==="w"?h.x-.4:h.x+h.w/2;pe(h.en,h.zh,C,c+h.h+.4,_,"#C2443A")}pe(t.park.en,t.park.zh,t.park.x+2,c+3.5,t.park.z-.5,"#3E6B3A");let se=h=>"note:"+h.room.id+":"+h.i,he=h=>{let _=document.createElement("canvas");_.width=96,_.height=96;let C=_.getContext("2d");C.fillStyle="#F4F1E8",C.fillRect(8,8,80,80),C.strokeStyle="#26302A",C.lineWidth=4,C.strokeRect(8,8,80,80),C.fillStyle="#C2443A",C.fillRect(40,2,16,14),C.fillStyle="#5E6660";for(let Y=34;Y<80;Y+=12)C.fillRect(20,Y,56,4);C.fillStyle="#26302A",C.font="bold 18px sans-serif",C.textAlign="center",C.fillText("NOTE",48,30),h&&(C.fillStyle="#3E6B3A",C.beginPath(),C.arc(70,72,20,0,Math.PI*2),C.fill(),C.strokeStyle="#EFEBDD",C.lineWidth=6,C.beginPath(),C.moveTo(60,72),C.lineTo(68,80),C.lineTo(81,63),C.stroke());let F=new Tn(_);return F.colorSpace=Ge,F},st=he(!1),ht=he(!0),Rt=N.flatMap(h=>h.notes.map((_,C)=>{let F=new Ii(new xi({map:R.has("note:"+h.id+":"+C)?ht:st,depthWrite:!1}));return F.scale.set(.7,.7,1),F.position.set(_.at[0],_.at[1],_.at[2]),D.add(F),{room:h,i:C,n:_,sp:F,p:{x:_.at[0],y:_.at[1]-.35,z:_.at[2]}}}));t.secrets&&t.secrets.board&&pe("Notice Board","\u516C\u544A\u6B04",...t.secrets.board.sign,"#8C6640");let Yt={},Tt=()=>{for(let h of d.homes){Yt[h.id]&&D.remove(Yt[h.id]);let _=g.id===h.id;Yt[h.id]=pe(_?"My Home":"For Rent",_?"\u6211\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F",h.x+h.w/2,c+(_&&g.floors===2?Fr(h,c,2).h:h.h)+.6,h.z-.4,_?"#3E6B3A":"#5E6660")}};Tt();let jt=()=>d.homes.find(h=>h.id===g.id)||null,we=()=>{let h=jt();return h&&g.floors===2?Object.assign({},h,{h:Fr(h,c,2).h}):h},ee=()=>{let h=m[p.wear];if(!h)return null;let _=document.createElement("canvas");_.width=256,_.height=64;let C=_.getContext("2d");C.fillStyle=h.color,C.fillRect(4,4,248,56),C.fillStyle="#EFEBDD",C.textAlign="center",C.font="bold 30px sans-serif",C.fillText(h.en+" "+h.zh,128,43);let F=new Tn(_);F.colorSpace=Ge;let Y=new Ii(new xi({map:F,depthWrite:!1}));return Y.scale.set(1.6,.4,1),Y.position.y=2.75,Y},le=()=>{let h=eh(w,S()),_=ee();return _&&h.add(_),h},re=le();D.add(re);let Gt={bike:{zh:"\u8173\u8E0F\u8ECA",speed:8,run:10,lift:.35}};for(let h of s.items)h.cat==="ride"&&(Gt[h.id]=h);let ve=Object.fromEntries(Object.keys(Gt).map(h=>{let _=fd(h);return _.visible=!1,D.add(_),[h,_]})),De=Object.fromEntries(Object.keys(Gt).filter(h=>Gt[h].big).map(h=>{let _=new ei().setFromObject(ve[h]).getSize(new K);return[h,Math.hypot(_.x,_.z)]})),Ee=()=>M.bike?Gt[M.ride]?M.ride:"bike":null,Te=()=>M.bike?Gt[Ee()].lift:0,Ce=()=>{D.remove(re),re=le(),D.add(re)},V=t.npcs.map((h,_)=>{let C={id:h.id,kind:"villager",size:[.6,1.8],speed:1.2,colors:{leg:"#26302A",body:h.robe,head:"#E7CDA6",hat:h.hat}},F={id:_+1,type:h.id,kind:"villager",def:C,n:h,route:h.route,ri:1,wait:0,p:{x:h.route[0][0]+.5,y:c+1,z:h.route[0][1]+.5},v:{x:0,y:0,z:0},yaw:0,gone:!1};return F.g=Nf(C,h.robe),D.add(F.g),F}),Wt={coins:Ae("#coins"),ov:Ae("#ov"),toasts:Ae("#toasts"),joy:Ae("#joy"),knob:Ae("#knob"),hotbar:Ae("#hotbar"),start:Ae("#start"),dbg:Rd.get("debug")!==null?Ae("#dbg"):null,loading:Ae("#loading")};Wt.dbg&&(Wt.dbg.hidden=!1);let It=h=>{for(;Wt.toasts.children.length>3;)Wt.toasts.firstChild.remove();let _=L("div",{class:"toast"},h);Wt.toasts.append(_),setTimeout(()=>_.remove(),2400)},I=()=>{Wt.coins.textContent=f.coins},y=()=>{Wt.ov.hidden=!0,Wt.ov.innerHTML="",M.overlay=null,M.talkNpc&&(M.talkNpc.busy=!1,M.talkNpc=null);try{speechSynthesis.cancel()}catch{}},z=(h,..._)=>{document.pointerLockElement&&document.exitPointerLock(),Wt.ov.innerHTML="",Wt.ov.hidden=!1,Wt.ov.append(L("div",{class:"panel"},L("div",{class:"p-head"},L("h2",{},h),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:y},"\xD7")),..._))},J=h=>{h<=0||(Bs(f,h),M.pending+=h,I(),je("coin"))};function nt(h,_,C,F,Y){try{let Z=JSON.parse(localStorage.getItem("ke_log")||"[]");if(!Array.isArray(Z))return;Z.push(qc({id:h,module:"town",tkey:_,type:C},F,Y,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)),localStorage.setItem("ke_log",JSON.stringify(Z))}catch(Z){console.warn("ke_log",Z)}}let pt=(h,_,C,F)=>nt(`town:${h}:${_}`,"town:"+h,"town-dialogue",C,F);function gt(h){window.KidsDaily&&window.KidsDaily.rec("english",h)}let Q=h=>{if(!(nl||!h||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let _=new SpeechSynthesisUtterance(h.replace(/_{2,}/g," ... "));_.lang="en-US",_.rate=.9,speechSynthesis.speak(_)}catch{}},it=(h,_,C)=>[L("div",{class:"npc-line"},L("button",{class:"say","aria-label":"\u518D\u5538\u4E00\u6B21",onclick:()=>Q(h)},"\u{1F50A}"),L("b",{class:"en"},h)),_&&C?L("p",{class:"muted"},_):null],yt=h=>Object.keys(m).find(_=>m[_].npc===h.n.id)||null,Lt=[];function Mt(h){let _=yt(h),C=Lt.map(Z=>Z(h)).filter(Boolean);if(!_&&!C.length){_t(h);return}let F=m[_],Y=_&&p.lic[_];z(`${h.n.en}\u30FB${h.n.zh}`,L("p",{},"\u4F60\u60F3\u8981\u505A\u4EC0\u9EBC\uFF1F"),L("div",{class:"cards"},L("button",{class:"card",onclick:()=>_t(h)},"\u{1F4AC} \u804A\u5929"),_?L("button",{class:"card",onclick:()=>Y?me(_):Ut(_)},Y?`\u{1F9F0} ${F.zh}\u7684\u5DE5\u4F5C\uFF1A${F.task.title}`:`\u{1F4DD} \u8003${F.zh}\u57F7\u7167\uFF0810 \u984C\uFF0C\u5C0D ${8} \u984C\u5C31\u901A\u904E\uFF09`):null,...C)),M.talkNpc=h,h.busy=!0,M.overlay="menu",h.yaw=Math.atan2(-(M.p.x-h.p.x),-(M.p.z-h.p.z))}let mt=null,Ot=h=>new Promise((_,C)=>{let F=document.createElement("script");F.src=h,F.onload=_,F.onerror=()=>C(new Error("load "+h)),document.head.appendChild(F)});async function Vt(){try{for(let h of["patterns.js","patterns-2.js","phrases.js","phrases-2.js"])await Ot("../../data/"+h);mt={patterns:(window.DATA_PATTERNS||[]).slice(),phrases:(window.DATA_PHRASES||[]).slice()}}catch(h){console.warn("chat data",h)}try{await Ot("../../data/textbook.js"),fe=(window.DATA_TEXTBOOK||[]).slice()}catch(h){console.warn("textbook",h)}}let $t=(h,_)=>{try{return JSON.parse(localStorage.getItem(h)||"null")||_}catch{return _}};function G(h,_){let C=mt&&hd(r[h.replace(/\d+$/,"")],mt,{learned:$t("ke_learned",{}),mistakes:$t("ke_mistakes",{})});return C?Object.assign({},_,{turns:_.turns.concat(C)}):_}function _t(h,_){let C=[].concat(h.n.dlg);_=_||C[(h.dlgN=(h.dlgN==null?-1:h.dlgN)+1)%C.length];let F=e[_]&&G(_,e[_]);F&&(M.talkNpc=h,h.busy=!0,M.overlay="talk",M.dlg=Yf(F),M.dlg.id=_,h.yaw=Math.atan2(-(M.p.x-h.p.x),-(M.p.z-h.p.z)),rt(!0))}function rt(h){let _=M.dlg,C=M.talkNpc,F=Wt.ov;F.innerHTML="",F.hidden=!1;let Y=L("div",{class:"p-head"},L("h2",{},`${C.n.en}\u30FB${C.n.zh}`,L("small",{},`\u3000${_.d.place}`)),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:y},"\xD7")),Z=L("div",{class:"panel talk"},Y);if(F.append(Z),_.phase==="talk"){let at=_.d.turns[_.turn];Z.append(...it(at.npc,at.zh,M.zh),at.say?L("p",{class:"say-zh"},"\u8981\u8AAA\uFF1A"+at.say):null,L("p",{class:"muted small"},`\u7B2C ${_.turn+1} / ${_.d.turns.length} \u53E5\u3000\u9078\u4E00\u5F35\u5361\u7247\u56DE\u7B54`),L("div",{class:"cards"},_.cards[_.turn].map((ot,xt)=>L("button",{class:"card en",onclick:kt=>vt(xt,kt.currentTarget)},ot.en)))),h&&Q(at.npc)}else _.phase==="check"?Z.append(L("p",{class:"big"},"\u5C0F\u6E2C\u9A57\uFF1A"+_.d.check.q),L("div",{class:"cards"},_.check.map((at,ot)=>L("button",{class:"card",onclick:()=>At(ot)},at.zh)))):Z.append(L("p",{class:"big"},_.coins?`\u5C0D\u8A71\u5B8C\u6210\uFF01 +${_.coins} \u91D1\u5E63`:"\u5C0D\u8A71\u5B8C\u6210\uFF01"),L("p",{class:"muted"},`\u7B2C\u4E00\u6B21\u5C31\u9078\u5C0D ${_.right} / ${_.d.turns.length} \u53E5`),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u597D")))}function vt(h,_){let C=M.dlg,F=C.turn,Y=C.cards[F][h],Z=$f(C,h);if(pt(C.id,C.d.turns[F].src?"gen:"+C.d.turns[F].src:F,Z.ok&&Z.first,Y.en),!Z.ok){_.classList.add("bad"),je("hurt"),It("\u518D\u60F3\u60F3\u770B\uFF0C\u54EA\u4E00\u53E5\u6700\u5408\u9069\uFF1F");return}Z.first&&J(1),je("pickup"),Q(Y.en),setTimeout(()=>rt(C.phase==="talk"),450)}function At(h){let _=M.dlg,C=_.coins,F=Zf(_,h);pt(_.id,"check",F.ok,_.check[h].zh),F.ok?J(_.coins-C):It("\u7B54\u6848\u662F\uFF1A"+_.check.find(Y=>Y.ok).zh),Pn("talk"),rt(!1)}function ft(h,_,C,F){let Y=L("div",{class:"fb"}),Z=L("div",{}),at=!1,ot=(xt,kt)=>{if(at)return;at=!0;let Ht=C(xt);kt&&kt.classList.add(Ht.ok?"ok":"bad"),je(Ht.ok?"pickup":"hurt"),Ht.coins&&J(Ht.coins),Y.className="fb "+(Ht.ok?"ok":"bad"),Y.append(L("div",{},Ht.ok?`\u7B54\u5C0D\u4E86\uFF01${Ht.coins?` +${Ht.coins} \u91D1\u5E63`:""}`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",Ht.ok?null:L("b",{class:"en"},Ht.answer)),L("button",{class:"btn",onclick:F},Ht.last?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u984C"))};if(_.typed){let xt=L("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),kt=()=>{at||!xt.value.trim()||(xt.disabled=!0,ot(xt.value))};xt.addEventListener("keydown",Ht=>{Ht.stopPropagation(),Ht.key==="Enter"&&kt()}),Z.append(L("div",{class:"typerow"},xt,L("button",{class:"btn",onclick:kt},"\u9001\u51FA"))),setTimeout(()=>xt.focus(),50)}else Z.append(L("div",{class:"cards"},_.cards.map((xt,kt)=>L("button",{class:"card"+(/[a-z]/i.test(xt.t)?" en":""),onclick:Ht=>ot(kt,Ht.currentTarget)},xt.t))));h.append(...it(_.en,_.zh,_.typed||_.showZh||M.zh),Z,Y),_.say!==""&&Q(_.say||_.en)}function Ut(h){M.exam=sd(m[h]),M.exam.id=h,Nt()}function Nt(){let h=M.exam,_=m[h.id],C=Wt.ov;C.innerHTML="",C.hidden=!1,M.overlay="exam";let F=L("div",{class:"panel talk"},L("div",{class:"p-head"},L("h2",{},`${_.zh}\u57F7\u7167\u8003\u8A66`,L("small",{},h.done?"":`\u3000\u7B2C ${h.i+1} / ${h.qs.length} \u984C\u30FB\u7B54\u5C0D ${h.right}`)),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:y},"\xD7")));if(C.append(F),!h.done){let at=h.qs[h.i],ot=h.i;ft(F,{en:at.q,zh:at.zh,typed:at.type==="typed",cards:at.cards},xt=>{let kt=rd(h,xt);return gt(kt.ok),nt(`town:lic:${h.id}:${ot}`,"town:license:"+h.id,"town-license",kt.ok,kt.text),{ok:kt.ok,answer:kt.answer,coins:Hc(kt.ok,kt.typed),last:h.done}},Nt);return}let Y=od(h),Z=Y&&!p.lic[h.id];Y&&(Z&&(p.lic[h.id]=Date.now(),J(10)),p.wear=h.id,Ce(),Me()),F.append(L("p",{class:"big"},Y?`\u{1F389} \u901A\u904E\u4E86\uFF01\u4F60\u62FF\u5230${_.zh}\u57F7\u7167`:`\u7B54\u5C0D ${h.right} / ${h.qs.length} \u984C\uFF0C\u8981 ${8} \u984C\u624D\u901A\u904E`),L("p",{class:"muted"},Y?`${Z?"\u57F7\u7167\u734E\u52F5 +10 \u91D1\u5E63\u3002":""}\u63DB\u4E0A${_.zh}\u5236\u670D\u4E86\uFF0C\u982D\u4E0A\u6703\u51FA\u73FE\u300C${_.en}\u300D\u3002\u4EE5\u5F8C\u627E\u9019\u4F4D\u5C45\u6C11\u5C31\u80FD\u4E0A\u73ED\u8CFA\u91D1\u5E63\uFF1B\u5728\u300C\u5DE5\u4F5C\u300D\u53EF\u4EE5\u63DB\u5236\u670D\u3002`:"\u6C92\u95DC\u4FC2\uFF0C\u518D\u8003\u4E00\u6B21\uFF01\u984C\u76EE\u4E00\u6A23\uFF0C\u9078\u9805\u9806\u5E8F\u6703\u63DB\u3002"),L("div",{class:"row"},Y?L("button",{class:"btn big",onclick:()=>me(h.id)},"\u99AC\u4E0A\u4E0A\u73ED"):L("button",{class:"btn big",onclick:()=>Ut(h.id)},"\u518D\u8003\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:y},"\u5148\u4E0D\u8981")))}function me(h){if(!p.lic[h]){Ut(h);return}let _=ad(m[h]);if(_.id=h,_.kind==="go"){M.go=_,M.goWrong=null,un(),Sn();return}M.task=_,ue()}function ue(){let h=M.task,_=m[h.id],C=Wt.ov;C.innerHTML="",C.hidden=!1,M.overlay="task";let F=L("div",{class:"panel talk"},L("div",{class:"p-head"},L("h2",{},`${_.zh}\u7684\u5DE5\u4F5C\uFF1A${_.task.title}`,L("small",{},h.i<h.qs.length&&h.started?`\u3000\u7B2C ${h.i+1} / ${h.qs.length} \u984C`:"")),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:y},"\xD7")));if(C.append(F),!h.started){h.started=!0,F.append(...it(_.task.intro,_.task.introZh,!0),L("div",{class:"row"},L("button",{class:"btn big",onclick:ue},"\u958B\u59CB"))),Q(_.task.intro);return}if(h.i<h.qs.length){let Y=h.qs[h.i],Z=h.i;ft(F,{en:Y.en,zh:Y.zh,cards:Y.cards},at=>{let ot=ld(h,at);return gt(ot.ok),nt(`town:job:${h.id}:${Z}`,"town:job:"+h.id,"town-job",ot.ok,ot.text),{ok:ot.ok,answer:ot.answer,coins:ot.ok?2:0,last:ot.done}},ue);return}p.done[h.id]=(p.done[h.id]||0)+1,Pn("work"),Me(),F.append(L("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u7B54\u5C0D ${h.right} / ${h.qs.length} \u984C\uFF0C\u8CFA\u5230 ${h.coins} \u91D1\u5E63`),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>me(h.id)},"\u518D\u505A\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:y},"\u4F11\u606F")))}let Qe=t.buildings.map(h=>({id:h.id,en:"the "+h.en,zh:h.zh,b:h})).concat(d.homes.map(h=>({id:h.id,en:"the "+h.en,zh:h.zh,b:h})));for(let h of Qe){let _=h.b,C=_.isHome?"n":_.door,F=_.x+(_.w>>1)+.5,Y=_.z+(_.d>>1)+.5;h.f=C==="n"?[F,_.z-.5]:C==="s"?[F,_.z+_.d+.5]:C==="w"?[_.x-.5,Y]:[_.x+_.w+.5,Y]}function un(){let h=M.go,_=m[h.id];z(`${_.zh}\u7684\u5DE5\u4F5C\uFF1A${_.task.title}`,...it(h.en,h.zh,M.zh),L("p",{class:"muted small"},`\u8D70\u5230\u5C0D\u7684\u5730\u65B9\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\uFF08\u734E\u52F5 ${h.pay} \u91D1\u5E63\uFF09\u3002\u5DE6\u4E0A\u89D2\u7684\u4EFB\u52D9\u5361\u53EF\u4EE5\u518D\u770B\u4E00\u6B21\u3002`),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u51FA\u767C\uFF01"),L("button",{class:"btn ghost",onclick:()=>{M.go=null,Sn(),y(),It("\u9019\u8D9F\u5148\u4E0D\u505A\u4E86")}},"\u9019\u8D9F\u4E0D\u505A\u4E86"))),M.overlay="task",Q(h.en)}function Sn(){let h=Ae("#task");if(!h)return;let _=M.go?(M.go.id==="firefighter"?"\u{1F525} ":"\u2709\uFE0F ")+M.go.en.split(/[.!] /)[0]:M.lost?`\u{1F9D2} \u5E36 ${o.lost.kid.en} \u56DE\u5BB6`:M.list?"\u{1F9FA} \u8CFC\u7269\u6E05\u55AE\uFF1A"+M.list.lines.map(C=>C.en).join("\u3001"):null;h.hidden=!_,_&&(h.textContent=_+"\u2026\uFF08\u9EDE\u6211\u518D\u770B\uFF09")}function il(){let h=M.go;if(h)for(let _ of Qe){if(Math.hypot(M.p.x-_.f[0],M.p.z-_.f[1])>3.2){M.goWrong===_.id&&(M.goWrong=null);continue}if(_.id!==h.to){M.goWrong!==_.id&&_.id!==m[h.id].place&&(M.goWrong=_.id,h.tries++,It(`\u9019\u88E1\u662F ${_.en}\uFF08${_.zh}\uFF09\uFF0C\u4E0D\u662F\u9019\u88E1\u5594\u3002\u518D\u770B\u4E00\u6B21\u4EFB\u52D9\u5361`));continue}let C=m[h.id],F=h.tries===0;M.go=null,Sn(),gt(F),nt(`town:job:${h.id}:${h.to}`,"town:job:"+h.id,"town-job",F,h.to),p.done[h.id]=(p.done[h.id]||0)+1,Pn("work"),z(`${C.zh}\u7684\u5DE5\u4F5C`,...it(C.task.arrive,C.task.arriveZh,!0),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>{J(h.pay),Me(),y(),It(`\u5B8C\u6210\u4E86\uFF01 +${h.pay} \u91D1\u5E63`)}},C.task.button))),M.overlay="task";return}}let Hs=()=>N.filter(h=>R.has("secret:"+h.id)).length;function os(h){let _=R.has(se(h));_||(R.add(se(h)),h.sp.material.map=ht,h.sp.material.needsUpdate=!0,Me()),z(`\u{1F4DC} \u7D19\u689D\uFF08${h.room.zh}\uFF09${_?"\u3000\u2713 \u8B80\u904E\u4E86":""}`,...it(h.n.en,h.n.zh,M.zh),L("p",{class:"muted small"},R.has("secret:"+h.room.id)?"\u9019\u500B\u79D8\u5BC6\u623F\u9593\u4F60\u5DF2\u7D93\u627E\u5230\u4E86\uFF01":"\u7167\u8457\u82F1\u6587\u8D70\uFF0C\u627E\u5230\u79D8\u5BC6\u7684\u9580\u3002"),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u77E5\u9053\u4E86"))),M.overlay="panel",Q(h.n.en)}function sl(h){if(M.riddleBusy)return;M.riddleBusy=!0,document.pointerLockElement&&document.exitPointerLock(),M.overlay="ask";let _=[];try{_=xf(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{}Af(Wt.ov,{ids:_.slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u79D8\u5BC6\u623F\u9593\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",daily:!1,onDone:C=>{if(M.overlay=null,M.riddleBusy=!1,!C){C===!1&&It("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let F=-2;F<=2;F++){let Y=l.get($.get(h.x,h.y+F,h.z));Y&&Y.interact==="riddle"&&$.set(h.x,h.y+F,h.z,0)}je("door"),Me()}})}function zr(h){let _=N.find(F=>F.treasure[0]===h.x&&F.treasure[1]===h.y&&F.treasure[2]===h.z);if(!_||($.set(h.x,h.y,h.z,l.num("chest")),R.has("secret:"+_.id)))return;R.add("secret:"+_.id),R.add(_.reward.id),oe();let C;_.reward.kind==="pet"?(C="\u4E00\u96BB"+ci[_.reward.id]+"\uFF01\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",A.active||(A.active=_.reward.id,$i())):(C="\u7A00\u6709\u5BB6\u5177\u300C"+l.name(_.reward.id)+"\u300D\uFF01\u5BB6\u5177\u6A21\u5F0F\u53EF\u4EE5\u653E",$e()),Me(),je("coin"),z("\u{1F389} \u627E\u5230\u79D8\u5BC6\u623F\u9593\uFF1A"+_.zh,L("p",{class:"big"},"\u5BF6\u7BB1\u88E1\u6709"+C),L("p",{class:"muted"},`\u79D8\u5BC6\u623F\u9593\u627E\u5230 ${Hs()} / ${N.length} \u9593`),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u592A\u68D2\u4E86"))),M.overlay="panel"}let on=o.pay,Xn={tutorial:[],main:[],daily:o.daily},Wi=h=>E.stats[h]||0;function Xi(){let h={tut:{done:!0},main:0,daily:E.daily};for(let _ of Ed(h,Xn,Wi,kr()))J(_.q.coins),It(`\u{1F4EE} \u59D4\u8A17\u5B8C\u6210\uFF1A${_.q.zh} +${_.q.coins} \u91D1\u5E63`);E.daily=h.daily}function Pn(h,_=1){E.stats[h]=Wi(h)+_,Xi()}function qn(h,_,C,F){gt(C),nt(`town:life:${h}:${_}`,"town:life:"+h,"town-life",C,F)}let Ws=()=>(Xi(),L("div",{class:"quests"},L("h3",{},"\u{1F4EE} \u4ECA\u65E5\u93AE\u6C11\u59D4\u8A17\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),E.daily.picks.map(h=>{let _=o.daily.find(F=>F.id===h),C=E.daily.done.includes(h);return L("div",{class:"quest"+(C?" done":"")},L("b",{},(C?"\u2713 ":"")+_.zh),L("small",{class:"en"},_.en),L("small",{},C?"\u5B8C\u6210\u4E86\uFF01":`${Cd(E,Xn,Wi,h)} / ${_.need}\u30FB\u734E\u52F5 ${_.coins} \u91D1\u5E63`))})));function qi(h,_,C,F){let Y=L("div",{class:"tray"}),Z=Object.fromEntries(h.map(ot=>[ot.id,ot])),at=()=>{Y.innerHTML="";let ot=Object.keys(_).filter(xt=>_[xt]>0);Y.append(L("b",{},C+"\uFF1A"),...ot.length?ot.map(xt=>L("button",{class:"chip","data-id":xt,onclick:()=>{_[xt]--,at(),F&&F()}},`${Z[xt].icon} ${Z[xt].label} \xD7${_[xt]}`)):[L("span",{class:"muted small"},"\u9084\u662F\u7A7A\u7684")])};return at(),[L("div",{class:"cards items"},h.map(ot=>L("button",{class:"card item","data-id":ot.id,onclick:()=>{_[ot.id]=(_[ot.id]||0)+1,at(),je("pickup"),F&&F()}},L("span",{class:"ico"},ot.icon),L("span",{class:"en"},ot.label)))),Y]}let bn=o.grocery,Yi=Object.fromEntries(bn.items.map(h=>[h.id,h])),Vr=h=>L("div",{class:"glist"},h.lines.map(_=>L("div",{class:"npc-line"},L("button",{class:"say","aria-label":"\u5538\u9019\u4E00\u884C",onclick:()=>Q(_.en)},"\u{1F50A}"),L("b",{class:"en"},_.en),M.zh?L("small",{class:"muted"},"\u3000"+_.zh):null)));function Gr(){M.list=yd(bn),M.basket={},Sn(),Xs(!0)}function Xs(h){let _=M.list;_&&(z("\u{1F9FA} \u55AC\u723A\u723A\u7684\u8CFC\u7269\u6E05\u55AE",...h?it(bn.intro,bn.introZh,M.zh):[],Vr(_),L("p",{class:"muted small"},"\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\uFF0C\u7167\u6E05\u55AE\u628A\u6771\u897F\u653E\u9032\u7C43\u5B50\u3001\u7D50\u5E33\u3002\u6578\u91CF\u8981\u525B\u525B\u597D\u5594\uFF01"),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u51FA\u767C\uFF01"),L("button",{class:"btn ghost",onclick:()=>{M.list=null,Sn(),y(),It("\u9019\u6B21\u5148\u4E0D\u8CB7\u4E86")}},"\u9019\u6B21\u4E0D\u8CB7\u4E86"))),M.overlay="task",Q(h?bn.intro+" "+_.en:_.en))}function Hr(){let h=M.list;if(!h)return;let _=M.basket=M.basket||{},C=Vr(h),F=L("button",{class:"btn ghost small",onclick:()=>{C.classList.toggle("listen"),F.textContent=C.classList.contains("listen")?"\u{1F440} \u770B\u6587\u5B57":"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09"}},"\u{1F442} \u53EA\u7528\u807D\u7684\uFF08\u6311\u6230\uFF09");z("\u{1F9FA} \u7167\u6E05\u55AE\u62FF\u6771\u897F",C,L("div",{class:"row"},L("button",{class:"btn ghost small",onclick:()=>Q(h.en)},"\u{1F50A} \u807D\u6574\u5F35\u6E05\u55AE"),F),...qi(h.shelf.map(Y=>Yi[Y]),_,"\u7C43\u5B50"),L("div",{class:"row"},L("button",{class:"btn big",onclick:Wr},"\u{1F9FE} \u7D50\u5E33"))),M.overlay="task"}function Wr(){let h=M.list,_=vd(h.lines,M.basket||{}),C=_.results.filter(Z=>Z.ok).length,F=C===h.lines.length&&!_.extra.length;_.results.forEach(Z=>qn("shop",Z.id,Z.ok,`${Z.got} ${Z.id}`));let Y=C*on.perQ+(F?on.allRight:0);J(Y),M.list=null,M.basket=null,Sn(),Pn("shop"),Me(),je(F?"coin":"pickup"),z("\u{1F9FE} \u7D50\u5E33",..._.results.map((Z,at)=>L("p",{},`${Z.ok?"\u2705":"\u274C"} ${Yi[Z.id].icon} `,L("b",{class:"en"},h.lines[at].en),Z.ok?"":`\uFF08\u7C43\u5B50\u88E1\u6709 ${Z.got} \u500B\uFF09`)),_.extra.length?L("p",{class:"muted"},"\u6E05\u55AE\u4E0A\u6C92\u6709\u7684\uFF1A"+_.extra.map(Z=>Yi[Z].icon+" "+Yi[Z].label).join("\u3001")+"\uFF08\u4E0B\u6B21\u53EA\u62FF\u6E05\u55AE\u4E0A\u7684\uFF09"):null,...F?it(bn.thanks,bn.thanksZh,M.zh):[L("p",{},`\u6E05\u55AE\u4E0A ${h.lines.length} \u6A23\uFF0C\u5C0D\u4E86 ${C} \u6A23\u3002\u518D\u5E6B\u55AC\u723A\u723A\u8CB7\u4E00\u6B21\u5427\uFF01`)],L("p",{class:"big"},`+${Y} \u91D1\u5E63`),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u597D"))),M.overlay="task",F&&Q(bn.thanks)}let b=o.waiter;function B(){M.waiter={orders:Md(b),i:-1,right:0},j()}function j(){let h=M.waiter;if(M.overlay="task",h.i<0){z("\u{1F37D}\uFE0F \u9910\u5EF3\u670D\u52D9\u751F",...it(b.intro,b.introZh,M.zh),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>{h.i=0,j()}},"\u958B\u59CB"))),Q(b.intro),M.overlay="task";return}if(h.i>=h.orders.length){let at=h.right===h.orders.length,ot=at?on.allRight:0;J(ot),Pn("waiter"),Me(),z("\u{1F37D}\uFE0F \u4E0B\u73ED\u4E86",...at?it(b.thanks,b.thanksZh,M.zh):[],L("p",{class:"big"},`\u9001\u5C0D ${h.right} / ${h.orders.length} \u4F4D\u5BA2\u4EBA${ot?`\uFF0C\u5168\u5C0D +${ot} \u91D1\u5E63`:""}`),L("div",{class:"row"},L("button",{class:"btn big",onclick:B},"\u518D\u505A\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:y},"\u4F11\u606F"))),M.overlay="task",at&&Q(b.thanks);return}let _=h.orders[h.i],C={},F=L("div",{class:"fb"}),Y=`${_.who}: "${_.en}"`,Z=L("button",{class:"btn big",onclick:()=>{if(Z.disabled)return;Z.disabled=!0;let at=Sd(_.want,C),ot=Object.keys(_.want).map(xt=>`${b.menu.find(kt=>kt.id===xt).icon} \xD7${_.want[xt]}`).join(" \uFF0B ");qn("waiter",Object.keys(_.want).join("+"),at,Object.keys(C).filter(xt=>C[xt]>0).map(xt=>xt+"x"+C[xt]).join(",")),at&&(h.right++,J(on.perQ),Pn("served")),je(at?"pickup":"hurt"),F.className="fb "+(at?"ok":"bad"),F.append(L("div",{},at?`\u9001\u5C0D\u4E86\uFF01 +${on.perQ} \u91D1\u5E63`:"\u9001\u932F\u4E86\uFF01\u5BA2\u4EBA\u9EDE\u7684\u662F\uFF1A"+ot),L("button",{class:"btn",onclick:()=>{h.i++,j()}},h.i+1>=h.orders.length?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u4F4D\u5BA2\u4EBA"))}},"\u{1F6CE}\uFE0F \u9001\u9910");z(`\u{1F37D}\uFE0F \u7B2C ${h.i+1} / ${h.orders.length} \u4F4D\u5BA2\u4EBA`,...it(Y,null,!1),...qi(b.menu,C,"\u6258\u76E4"),L("div",{class:"row"},Z),F),M.overlay="task",Q(_.en)}let X=o.lost,q=(()=>{let h=eh(el({skin:0,hair:3,hairColor:2,top:1,bottom:2,hat:1})),_=oh("\u{1F9D2} "+X.kid.en);_.position.y=2.75,_.scale.multiplyScalar(1.5),h.add(_),h.scale.setScalar(.7),D.add(h);let[C,F]=X.kid.at;return{n:{id:"lostkid",en:X.kid.en,zh:X.kid.zh},spot:{x:C,z:F},p:{x:C,y:c+1,z:F},g:h,yaw:Math.PI,sp:0}})(),St=h=>d.homes.find(_=>_.id===h);function Et(){if(M.lost){Pt();return}let h=M.lostQ=bd(d.homes,X.kid.at[0],X);z(`\u{1F9D2} ${X.kid.en}\u30FB${X.kid.zh}`,...it(X.hello,X.helloZh,M.zh),...it(h.en,h.zh,M.zh),L("p",{class:"big"},X.ask+(M.zh?"\u3000"+X.askZh:"")),L("div",{class:"cards"},h.cards.map(_=>L("button",{class:"card en","data-id":_,onclick:C=>bt(_,C.currentTarget)},St(_).en)))),M.overlay="task",Q(X.hello+" "+h.en)}function bt(h,_){let C=M.lostQ;if(!C||C.picked)return;C.picked=!0;let F=h===C.to;qn("lost",C.to+":pick",F,h),F&&J(on.perQ),_.classList.add(F?"ok":"bad"),je(F?"pickup":"hurt"),Wt.ov.querySelector(".panel").append(L("div",{class:"fb "+(F?"ok":"bad")},L("div",{},F?`\u7B54\u5C0D\u4E86\uFF01 +${on.perQ} \u91D1\u5E63`:`\u5DEE\u4E00\u9EDE\uFF01${X.kid.en} \u4F4F\u5728 `,F?null:L("b",{class:"en"},St(C.to).en)),...it(X.walk,X.walkZh,M.zh),L("button",{class:"btn big",onclick:()=>{M.lost={to:C.to,tries:0,right:F,en:C.en,zh:C.zh},M.lostQ=null,Sn(),y()}},"\u5E36\u4ED6\u56DE\u5BB6")))}function Pt(){let h=M.lost;h&&(z(`\u{1F9D2} \u5E36 ${X.kid.en} \u56DE\u5BB6`,...it(h.en,h.zh,M.zh),L("p",{class:"muted small"},`${X.kid.en} \u8DDF\u5728\u4F60\u5F8C\u9762\u3002\u8D70\u5230\u4ED6\u5BB6\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\u3002`),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u597D"),L("button",{class:"btn ghost",onclick:()=>{M.lost=null,Sn(),y()}},"\u5148\u4E0D\u5E36\u4E86"))),M.overlay="task",Q(h.en))}function Ft(){let h=M.lost;if(h)for(let _ of Qe){if(!_.b.isHome)continue;if(Math.hypot(M.p.x-_.f[0],M.p.z-_.f[1])>3.2){M.lostWrong===_.id&&(M.lostWrong=null);continue}if(_.id!==h.to){M.lostWrong!==_.id&&(M.lostWrong=_.id,h.tries++,It(`${X.kid.en}\uFF1A\u300C${X.wrong}\u300D${X.wrongZh}`));continue}let C=h.tries===0,F=(C?on.perQ:0)+(C&&h.right?on.allRight:0);M.lost=null,Sn(),qn("lost",h.to+":walk",C,h.to),J(F),Pn("lost"),Me(),z(`\u{1F3E0} ${_.b.en}`,...it(X.home,X.homeZh,M.zh),L("p",{class:"big"},C?`\u4E00\u6B21\u5C31\u8D70\u5C0D\u4E86\uFF01 +${F} \u91D1\u5E63`:"\u627E\u5230\u4E86\uFF01\u4E0B\u6B21\u8A66\u8A66\u770B\u4E00\u6B21\u5C31\u8D70\u5230\u5C0D\u7684\u9580\u53E3\u3002"),L("div",{class:"row"},L("button",{class:"btn big",onclick:y},"\u63B0\u63B0"))),M.overlay="task",Q(X.home);return}}let Kt=(h,_)=>{for(let C=0;C<=4;C++)for(let F=-C;F<=C;F++)for(let Y=-C;Y<=C;Y++){let Z=Math.floor(h)+F,at=Math.floor(_)+Y;if(!ct(Z,at)&&!l.flat.solid[$.get(Z,c+1,at)])return[Z+.5,at+.5]}return null};function Qt(h,_,C){let F=M.p.x+Math.sin(M.yaw)*1.4+Math.cos(M.yaw)*C,Y=M.p.z+Math.cos(M.yaw)*1.4-Math.sin(M.yaw)*C,Z=F-h.p.x,at=Y-h.p.z,ot=Math.hypot(Z,at),xt=0;if(ot>14){let We=Kt(F,Y);We&&(h.p.x=We[0],h.p.z=We[1])}else if(ot>.3){xt=Math.min(9,ot*2.5);let We=Math.min(ot,xt*_),Nn=h.p.x+Z/ot*We,Zi=h.p.z+at/ot*We;ct(Math.floor(Nn),Math.floor(Zi))?xt=0:(h.p.x=Nn,h.p.z=Zi),h.yaw=Math.atan2(-Z,-at)}let kt=Math.floor(M.p.y)+1,Ht=Math.floor(h.p.x),Se=Math.floor(h.p.z);for(;kt>c-3&&!l.flat.solid[$.get(Ht,kt-1,Se)];)kt--;return h.p.y+=(kt-h.p.y)*Math.min(1,_*10),xt}function Dt(h,_,C){M.lost&&!M.overlay?q.sp=Qt(q,h,-.7):!M.lost&&!M.overlay&&Math.hypot(q.p.x-q.spot.x,q.p.z-q.spot.z)>.5?(q.p={x:q.spot.x,y:c+1,z:q.spot.z},q.yaw=Math.PI,q.sp=0):M.overlay&&(q.sp=0),q.g.position.set(q.p.x,q.p.y,q.p.z),q.g.rotation.y=q.yaw,nh(q.g,q.sp,_,C)}let fe=null,Fe=()=>wd(fe,mt&&mt.patterns);function _e(h){let _=Fe();if(!_.length){It("\u8AB2\u672C\u9084\u6C92\u8F09\u597D\uFF0C\u7B49\u4E00\u4E0B\u518D\u4F86\u4E0A\u8AB2");return}let C=_.find(F=>F.id===(h||Ad(_,$t("ke_log",[]),kr())))||_[0];M.cls={u:C,U:_,qs:Td(C,o.class.n,Math.random,o.class),i:-1,right:0},ge()}function ge(){let h=M.cls,_=o.class,C=Wt.ov;C.innerHTML="",C.hidden=!1,M.overlay="task";let F=L("div",{class:"panel talk"},L("div",{class:"p-head"},L("h2",{},`\u{1F4D8} \u82F1\u6587\u8AB2\uFF1A${h.u.title}`,L("small",{},h.i>=0&&h.i<h.qs.length?`\u3000\u7B2C ${h.i+1} / ${h.qs.length} \u984C`:"")),L("button",{class:"x","aria-label":"\u95DC\u9589",onclick:y},"\xD7")));if(C.append(F),h.i<0){let Z=h.U[(h.U.indexOf(h.u)+1)%h.U.length];F.append(...it(_.intro.replace("{unit}",h.u.title),_.introZh.replace("{unit}",h.u.title),M.zh),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>{h.i=0,ge()}},"\u958B\u59CB\u4E0A\u8AB2"),h.U.length>1?L("button",{class:"btn ghost",onclick:()=>_e(Z.id)},"\u63DB\u4E00\u8AB2\uFF1A"+Z.title):null)),Q(_.intro.replace("{unit}",h.u.title));return}if(h.i<h.qs.length){let Z=h.qs[h.i];ft(F,Z,at=>{let ot=Z.cards[at],xt=!!(ot&&ot.ok),kt=Z.cards.find(Ht=>Ht.ok).t;return qn("class",`${h.u.id}:${Z.kind}:${Z.key}`,xt,ot&&ot.t),xt&&h.right++,h.i++,Q(Z.full||kt),{ok:xt,answer:Z.full||kt,coins:xt?on.perQ:0,last:h.i>=h.qs.length}},ge);return}let Y=h.right===h.qs.length;Y&&J(on.allRight),Pn("class"),Me(),F.append(...it(_.thanks,_.thanksZh,M.zh),L("p",{class:"big"},`\u7B54\u5C0D ${h.right} / ${h.qs.length} \u984C${Y?`\uFF0C\u5168\u5C0D +${on.allRight} \u91D1\u5E63`:""}`),L("div",{class:"row"},L("button",{class:"btn big",onclick:()=>_e(h.u.id)},"\u518D\u4E0A\u4E00\u6B21"),L("button",{class:"btn ghost",onclick:y},"\u4E0B\u8AB2"))),Q(_.thanks)}Lt.push(h=>h.n.id===bn.npc?L("button",{class:"card",onclick:()=>M.list?Xs(!1):Gr()},M.list?"\u{1F9FA} \u518D\u770B\u4E00\u6B21\u8CFC\u7269\u6E05\u55AE":"\u{1F9FA} \u5E6B\u55AC\u723A\u723A\u8CB7\u6771\u897F\uFF08\u8CFC\u7269\u6E05\u55AE\uFF09"):null),Lt.push(h=>h.n.id==="shopkeeper"&&M.list?L("button",{class:"card",onclick:Hr},"\u{1F9FA} \u7167\u55AC\u723A\u723A\u7684\u6E05\u55AE\u62FF\u6771\u897F\u3001\u7D50\u5E33"):null),Lt.push(h=>h.n.id===b.npc?L("button",{class:"card",onclick:B},"\u{1F37D}\uFE0F \u7576\u670D\u52D9\u751F\uFF08\u9001\u9910\u7D66 3 \u4F4D\u5BA2\u4EBA\uFF09"):null),Lt.push(h=>h.n.id===o.class.npc?L("button",{class:"card",onclick:()=>_e()},"\u{1F4D8} \u4E0A\u4E00\u5802\u82F1\u6587\u8AB2\uFF08\u8AB2\u672C\uFF09"):null);function Be(){z("\u5DE5\u4F5C",Ws(),L("p",{class:"muted"},`\u5230\u5DE5\u4F5C\u5730\u9EDE\u627E\u5C45\u6C11\u8003\u57F7\u7167\uFF0810 \u984C\u82F1\u6587\uFF0C\u7B54\u5C0D ${8} \u984C\u901A\u904E\uFF09\uFF0C\u901A\u904E\u5C31\u80FD\u7A7F\u5236\u670D\u3001\u4E0A\u73ED\u8CFA\u91D1\u5E63\u3002\u751F\u6D3B\u4EFB\u52D9\uFF08\u627E\u55AC\u723A\u723A\u3001\u6E6F\u59C6\u4E3B\u5EDA\u3001\u6797\u8001\u5E2B\u3001\u8FF7\u8DEF\u7684\u5C0F\u9EA5\u514B\uFF09\u4E0D\u7528\u57F7\u7167\u3002`),M.go?L("div",{class:"row"},L("button",{class:"btn",onclick:un},"\u770B\u73FE\u5728\u7684\u4EFB\u52D9")):null,L("div",{class:"shop"},Object.keys(m).map(h=>{let _=m[h],C=t.buildings.find(Z=>Z.id===_.place),F=t.npcs.find(Z=>Z.id===_.npc),Y=p.lic[h];return L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},`${_.zh} ${_.en}`),L("small",{},Y?`\u2713 \u6709\u57F7\u7167\u30FB\u4E0A\u73ED ${p.done[h]||0} \u6B21`:`\u5230${C?C.zh:""}\u627E${F?F.zh:""}\u8003\u8A66`)),Y?L("button",{class:"btn small",onclick:()=>{p.wear=p.wear===h?null:h,Ce(),Me(),Be()}},p.wear===h?"\u812B\u4E0B\u5236\u670D":"\u7A7F\u4E0A\u5236\u670D"):null)}))),M.overlay="panel"}let Ct=N.filter(h=>h.reward.kind==="furniture").map(h=>h.reward.id),ze=t.furniture.slice(),oe=()=>{for(let h of Ct)R.has(h)&&!ze.includes(h)&&ze.push(h)};oe();function $e(){Wt.hotbar.innerHTML="",Wt.hotbar.hidden=!M.furn,M.furn&&(ze.forEach((h,_)=>Wt.hotbar.append(L("button",{class:"slot"+(_===M.furnSel?" on":""),title:l.name(h),onpointerdown:C=>{C.stopPropagation(),M.furnSel=_,$e()}},L("span",{class:"fname"},l.name(h))))),Wt.hotbar.append(L("button",{class:"slot rot",onpointerdown:h=>{h.stopPropagation(),M.furnRot=(M.furnRot+1)%4,It("\u6905\u5B50\u65B9\u5411\uFF1A"+["\u5317","\u6771","\u5357","\u897F"][M.furnRot])}},"\u8F49\u5411")))}function an(){let h=we(),_=L("div",{class:"shop"},d.homes.map((F,Y)=>L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},`${Y+1} \u865F\u623F\u5B50`),L("small",{},g.id===F.id?"\u9019\u662F\u4F60\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F")),g.id===F.id?L("button",{class:"btn small",onclick:()=>{Yn(),y()}},"\u56DE\u5BB6"):L("button",{class:"btn small",onclick:()=>In(F.id)},g.id?"\u642C\u904E\u53BB":"\u4F4F\u9019\u9593")))),C=(F,Y)=>L("div",{class:"swatches"},F.map(Z=>L("button",{class:"sw",title:l.name(Z),style:"background:"+l.get(Z).colors.top,onclick:()=>Y(Z)})));z("\u6211\u7684\u5BB6",_,h?L("div",{},L("div",{class:"row"},L("button",{class:"btn",onclick:()=>{M.furn=!M.furn,$e(),y(),It(M.furn?"\u5BB6\u5177\u6A21\u5F0F\uFF1A\u9EDE\u5730\u677F\u653E\u3001\u9577\u6309\uFF08\u6216\u5DE6\u9375\uFF09\u62FF\u6389\uFF0C\u53EA\u6709\u5BB6\u88E1\u53EF\u4EE5":"\u5BB6\u5177\u6A21\u5F0F\u95DC\u6389\u4E86")}},M.furn?"\u95DC\u6389\u5BB6\u5177\u6A21\u5F0F":"\u5BB6\u5177\u6A21\u5F0F\uFF08\u653E\u5BB6\u5177\uFF09"),L("button",{class:"btn ghost",onclick:()=>{g.locked=!g.locked,It(g.locked?"\u9580\u9396\u4E0A\u4E86":"\u9580\u6253\u958B\u9396\u4E86"),an()}},g.locked?"\u9580\uFF1A\u9396\u8457\uFF08\u9EDE\u4E00\u4E0B\u89E3\u9396\uFF09":"\u9580\uFF1A\u6C92\u9396\uFF08\u9EDE\u4E00\u4E0B\u4E0A\u9396\uFF09")),L("h3",{},"\u7246\u58C1\u984F\u8272"),C(t.wallColors,F=>de("wall",F)),L("h3",{},"\u5730\u677F"),C(t.floorColors,F=>de("floor",F)),Nd()):L("p",{class:"muted"},"\u5148\u9078\u4E00\u9593\u623F\u5B50\u4F4F\u4E0B\u4F86\uFF08\u514D\u8CBB\uFF09\u3002"))}function In(h){g.id&&g.id!==h&&(g.restore=(g.restore||[]).filter(_=>_!==h).concat(g.id),g.wall=null,g.floor=null),g.id=h,Tt(),Yn(),y(),It("\u6B61\u8FCE\u56DE\u5BB6\uFF01\u6253\u958B\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u653E\u5BB6\u5177\u3001\u63DB\u984F\u8272"),Me()}function Yn(){let h=we();h&&(M.p={x:h.x+h.w/2,y:c+1,z:h.z-1.5},M.v={x:0,y:0,z:0},M.yaw=Math.PI)}function de(h,_){let C=we();if(C){if(Math.hypot(M.p.x-(C.x+C.w/2),M.p.z-(C.z+C.d/2))>30){It("\u5148\u56DE\u5BB6\u518D\u63DB\u984F\u8272");return}if(h==="wall"){let F=["glass","door","door_open"];for(let[Y,Z,at]of Xf(C,c,(ot,xt,kt)=>{let Ht=$.get(ot,xt,kt);return Ht&&!F.includes(l.get(Ht).id)}))$.set(Y,Z,at,l.num(_));g.wall=_}else for(let F=C.x+1;F<C.x+C.w-1;F++)for(let Y=C.z+1;Y<C.z+C.d-1;Y++){let Z=_.startsWith("carpet");$.set(F,c,Y,l.num(Z?"planks":_));let at=l.get($.get(F,c+1,Y));Z&&at&&at.n===0?$.set(F,c+1,Y,l.num(_)):!Z&&at&&at.id.startsWith("carpet")&&$.set(F,c+1,Y,0)}h==="floor"&&(g.floor=_),It("\u63DB\u597D\u4E86\uFF01"),Me()}}let Pe={bike:"\u{1F6B2}",scooter:"\u{1F6F4}",boat:"\u{1F6F6}",car:"\u{1F697}",bus:"\u{1F68C}"};function Ln(){let h=Ae("#b-bike");h&&(h.textContent=Object.keys(Gt).some(_=>R.has(_))?"\u4EA4\u901A":"\u8173\u8E0F\u8ECA")}function xe(h){let _=Ee(),C=Math.floor(M.p.x),F=Math.floor(M.p.z);if(h&&Gt[h].big&&tt.has(C+","+F))return It("\u5728\u5C4B\u5B50\u88E1\u4E0D\u80FD\u958B\u8ECA\uFF0C\u5148\u8D70\u5230\u5916\u9762"),!1;if(De[h]){let Y=null;for(let Z=0;Z<=3&&!Y;Z++)for(let at=-Z;at<=Z&&!Y;at++)for(let ot=-Z;ot<=Z&&!Y;ot++){let xt={x:M.p.x+at,y:M.p.y,z:M.p.z+ot};mf(xt,(kt,Ht,Se)=>Bt(h,kt,Ht,Se),De[h])&&(Y=xt)}if(!Y)return It("\u9019\u88E1\u592A\u7A84\u4E86\uFF0C\u8ECA\u5B50\u653E\u4E0D\u4E0B\u3002\u5230\u99AC\u8DEF\u4E0A\u518D\u53EB\u8ECA"),!1;M.p=Y}if(h==="boat"){let Y=null;for(let Z=-2;Z<=2&&!Y;Z++)for(let at=-2;at<=2&&!Y;at++)ct(C+Z,F+at)&&(Y=[C+Z,F+at]);if(!Y)return It("\u5C0F\u8239\u8981\u5728\u516C\u5712\u7684\u6C60\u5858\u908A\u624D\u80FD\u5750"),!1;M.p={x:Y[0]+.5,y:c+1,z:Y[1]+.5}}if(_==="boat"&&h!=="boat"){let Y=null;for(let Z=1;Z<=4&&!Y;Z++)for(let at=-Z;at<=Z&&!Y;at++)for(let ot=-Z;ot<=Z&&!Y;ot++){let xt=C+at,kt=F+ot;!ct(xt,kt)&&!l.flat.solid[$.get(xt,c+1,kt)]&&!l.flat.solid[$.get(xt,c+2,kt)]&&(Y=[xt,kt])}Y&&(M.p={x:Y[0]+.5,y:c+1,z:Y[1]+.5})}return M.ride=h||null,M.bike=!!h,M.v={x:0,y:0,z:0},It(h?`${Pe[h]||""} \u5750\u4E0A${Gt[h].zh.replace(/（.*）/,"")}\u4E86\uFF01`:"\u4E0B\u8ECA\u4E86\uFF0C\u7528\u8D70\u7684"),!0}function Dn(){let h=["bike"].concat(Object.keys(Gt).filter(_=>R.has(_)));z("\u4EA4\u901A\u5DE5\u5177",L("div",{class:"cards"},L("button",{class:"card",onclick:()=>{xe(null),y()}},"\u{1F6B6} \u8D70\u8DEF"),h.map(_=>L("button",{class:"card"+(Ee()===_?" ok":""),onclick:()=>{xe(_)&&y()}},`${Pe[_]||""} ${Gt[_].zh}`))),L("p",{class:"muted small"},"\u6C7D\u8ECA\u3001\u516C\u8ECA\u958B\u4E0D\u9032\u5C4B\u5B50\uFF1B\u5C0F\u8239\u53EA\u80FD\u5728\u516C\u5712\u7684\u6C60\u5858\u3002")),M.overlay="panel"}let Ie=null,ci={dog:"\u5C0F\u72D7",cat:"\u5C0F\u8C93",rabbit:"\u5154\u5B50",dalmatian:"\u6591\u9EDE\u72D7"},rl=()=>Object.keys(ci).filter(h=>R.has(h));function oh(h){let _=document.createElement("canvas");_.width=256,_.height=56;let C=_.getContext("2d");C.fillStyle="rgba(239,235,221,.92)",C.fillRect(4,4,248,48),C.fillStyle="#26302A",C.textAlign="center",C.font="bold 30px sans-serif",C.fillText(h,128,40);let F=new Tn(_);F.colorSpace=Ge;let Y=new Ii(new xi({map:F,depthWrite:!1}));return Y.scale.set(1.3,.28,1),Y.position.y=1,Y}function $i(){Ie&&(D.remove(Ie.g),Ie=null);let h=A.active;if(!h||!R.has(h)){A.active=null;return}let _=dd(h);_.add(oh(A.names[h]||ci[h])),D.add(_);let C=Kt(M.p.x+1,M.p.z+1)||[M.p.x+1,M.p.z+1];Ie={id:h,g:_,p:{x:C[0],y:M.p.y,z:C[1]},sp:0}}function Id(h,_,C){let F=Ae("#b-pet"),Y=!rl().length;F.hidden!==Y&&(F.hidden=Y),Ie&&(Ie.sp=Qt(Ie,h,.7),Ie.g.position.set(Ie.p.x,Ie.p.y,Ie.p.z),Ie.yaw!=null&&(Ie.g.rotation.y=Ie.yaw),pd(Ie.g,Ie.sp,_,C))}function ol(){z("\u6211\u7684\u5BF5\u7269",L("p",{class:"muted"},"\u5BF5\u7269\u6703\u8DDF\u8457\u4F60\u8D70\u3002\u540D\u5B57\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002"),L("div",{class:"shop"},rl().map(h=>L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},ci[h]),L("input",{class:"typein pet-name",type:"text",maxlength:12,value:A.names[h]||"",placeholder:"\u5E6B\u7260\u53D6\u540D\u5B57",onkeydown:_=>_.stopPropagation(),onchange:_=>{A.names[h]=ed(_.target.value),_.target.value=A.names[h],A.active===h&&$i(),Me()}})),L("button",{class:"btn small",onclick:()=>{A.active=A.active===h?null:h,$i(),Me(),ol()}},A.active===h?"\u8B93\u7260\u5F85\u5728\u5BB6":"\u5E36\u7260\u51FA\u9580"))))),M.overlay="panel"}let al=()=>L("button",{class:"btn ghost",onclick:ll},"\u2190 \u56DE\u624B\u6A5F");function ll(){let h=(C,F,Y,Z)=>L("button",{class:"app","data-app":C,onclick:Z},L("span",{class:"ico"},F),L("span",{},Y)),_=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date);z("\u{1F4F1} \u5C0F\u93AE\u624B\u6A5F",L("div",{class:"phone-bar"},L("b",{},_),L("span",{},`\u{1FA99} ${f.coins}`)),L("div",{class:"apps"},h("ride","\u{1F697}","\u53EB\u8ECA",Dn),h("wear","\u{1F455}","\u63DB\u8863\u670D",qs),h("pet","\u{1F436}","\u53EB\u5BF5\u7269",ah),h("today","\u{1F4CA}","\u4ECA\u65E5\u984C\u6578",Ld),h("photo","\u{1F4F7}","\u62CD\u7167",ch))),Wt.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"}function ah(){let h=rl();if(!h.length){It("\u9084\u6C92\u6709\u5BF5\u7269\uFF1A\u5230\u5546\u5E97\u627E\u674E\u8001\u95C6\u8CB7\uFF0C\u6216\u627E\u79D8\u5BC6\u623F\u9593");return}z("\u{1F436} \u53EB\u5BF5\u7269",L("p",{class:"muted"},"\u9EDE\u4E00\u96BB\uFF0C\u7260\u6703\u99AC\u4E0A\u8DD1\u5230\u4F60\u8EAB\u908A\u3002"),L("div",{class:"cards"},h.map(_=>L("button",{class:"card"+(A.active===_?" ok":""),"data-pet":_,onclick:()=>{A.active=_,$i(),Me(),y(),It(`${A.names[_]||ci[_]} \u8DD1\u904E\u4F86\u4E86\uFF01`)}},`${ci[_]}${A.names[_]?"\u300C"+A.names[_]+"\u300D":""}`))),L("div",{class:"row"},A.active?L("button",{class:"btn ghost",onclick:()=>{A.active=null,$i(),Me(),ah()}},"\u8B93\u7260\u5F85\u5728\u5BB6"):null,al())),Wt.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"}function lh(){let h=kr(),_=Date.parse(h+"T00:00:00+08:00"),C=$t("ke_log",[]).filter(Y=>Y&&Y.m==="town"&&Y.t>=_&&Y.t<_+864e5),F=Y=>C.filter(Z=>Y.test(Z.k||"")).length;return{all:C.length,license:F(/^town:license:/),job:F(/^town:job:/),life:F(/^town:life:/),chat:C.length-F(/^town:(license|job|life):/)}}function Ld(){let h=null;try{h=window.KidsDaily&&window.KidsDaily.today()}catch{}let _=h&&h.rows?h.rows.find(F=>F.k==="english"):null,C=lh();z("\u{1F4CA} \u4ECA\u65E5\u984C\u6578",_?L("p",{class:"big"},`\u6BCF\u65E5\u82F1\u6587\uFF1A${_.n} / ${_.goal} \u984C ${_.done?"\u2713":""}`):L("p",{class:"muted"},"\u6BCF\u65E5\u82F1\u6587\u6E05\u55AE\u8981\u767B\u5165\u5B78\u7FD2\u7AD9\u624D\u6703\u8A18\u9304\u3002"),L("div",{class:"quests"},L("div",{class:"quest"},L("b",{},`\u4ECA\u5929\u5728\u5C0F\u93AE\u7B54\u4E86 ${C.license+C.job+C.life} \u984C\uFF08\u7B97\u9032\u6BCF\u65E5\u82F1\u6587\uFF09`),L("small",{},`\u57F7\u7167\u8003\u8A66 ${C.license}\u30FB\u5DE5\u4F5C ${C.job}\u30FB\u751F\u6D3B\u4EFB\u52D9 ${C.life}`)),L("div",{class:"quest"},L("b",{},`\u8DDF\u5C45\u6C11\u804A\u5929 ${C.chat} \u53E5`),L("small",{},"\u804A\u5929\u7DF4\u7FD2\u4E0D\u7B97\u6BCF\u65E5\u984C\u6578"))),Ws(),L("div",{class:"row"},al())),Wt.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"}function ch(){y(),P.render(D,k);let h=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date).replace(/:/g,"");T.toBlob(_=>{if(!_){It("\u62CD\u7167\u5931\u6557\uFF0C\u518D\u8A66\u4E00\u6B21");return}M.photo&&URL.revokeObjectURL(M.photo.url),M.photo={url:URL.createObjectURL(_),name:`\u5C0F\u670B\u53CB\u93AE_${kr()}_${h}.png`,size:_.size},je("pickup"),z("\u{1F4F7} \u7167\u7247",L("img",{class:"photo",src:M.photo.url,alt:"\u525B\u525B\u62CD\u7684\u5C0F\u93AE\u7167\u7247"}),L("p",{class:"muted small"},"iPad\uFF1A\u9577\u6309\u7167\u7247 \u2192\u300C\u52A0\u5165\u7167\u7247\u300D\uFF0C\u6216\u6309\u300C\u4E0B\u8F09\u7167\u7247\u300D\u3002\u7167\u7247\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u4EFB\u4F55\u5730\u65B9\u3002"),L("div",{class:"row"},L("a",{class:"btn",href:M.photo.url,download:M.photo.name},"\u2B07\uFE0F \u4E0B\u8F09\u7167\u7247"),L("button",{class:"btn ghost",onclick:ch},"\u518D\u62CD\u4E00\u5F35"),al())),Wt.ov.querySelector(".panel").classList.add("phone"),M.overlay="panel"},"image/png")}let cl=s.cats[0][0];function Xr(){let h=s.items.filter(_=>_.cat===cl);z("\u674E\u8001\u95C6\u7684\u5546\u5E97",L("div",{class:"row tabs"},s.cats.map(([_,C])=>L("button",{class:"btn small"+(_===cl?"":" ghost"),onclick:()=>{cl=_,Xr()}},C))),L("p",{class:"muted small"},`\u4F60\u6709 ${f.coins} \u91D1\u5E63\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u500B\u9322\u5305\uFF09\u3002`),L("div",{class:"shop"},h.map(_=>{let C=R.has(_.id);return L("div",{class:"offer"},L("div",{class:"of-t"},L("b",{},`${_.zh}`),L("small",{},C?"\u2713 \u5DF2\u7D93\u6709\u4E86":`${_.price} \u91D1\u5E63`)),C?null:L("button",{class:"btn small",onclick:()=>hh(_.id)},"\u8CB7"))}))),M.overlay="shop"}async function hh(h){let _=U[h];if(!_||M.buying)return!1;M.buying=!0;try{await Me();let C=Za(await Br.get("hw_coins")),F=gd(C),Y=td(_,R,{coins:F.balance(),hasHome:!!g.id});return Y.ok?(await F.spend(_.price,"town:"+_.id)).ok?(R.add(_.id),await Br.putMany({hw_coins:Xc(C)}),f.coins=C.coins,I(),_.cat==="pet"&&!A.active&&(A.active=_.id,$i()),_.id==="floor2"&&(g.floors=2,Tt()),_.theme&&(g.theme=_.theme),await Me(),Ln(),je("coin"),It({ride:"\u8CB7\u5230\u4E86\uFF01\u6309\u300C\u4EA4\u901A\u300D\u5750\u4E0A\u53BB",pet:"\u8CB7\u5230\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\uFF0C\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",wear:"\u8CB7\u5230\u4E86\uFF01\u5230\u300C\u5916\u89C0\u300D\u7A7F\u4E0A",house:"\u8CB7\u5230\u4E86\uFF01\u56DE\u5BB6\u770B\u770B\uFF08\u5728\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u63DB\u6A23\u5F0F\uFF09"}[_.cat]),M.overlay==="shop"&&Xr(),!0):(It("\u8CB7\u4E0D\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21"),!1):(It(Y.reason==="coins"?`\u91D1\u5E63\u4E0D\u5920\uFF0C\u9084\u5DEE ${Y.short} \u679A\u3002\u53BB\u4E0A\u73ED\u6216\u7B54\u984C\u8CFA\u91D1\u5E63\u5427\uFF01`:Y.reason==="home"?"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50":"\u5DF2\u7D93\u6709\u4E86"),!1)}finally{M.buying=!1}}Lt.push(h=>h.n.id==="shopkeeper"?L("button",{class:"card",onclick:Xr},"\u{1F6D2} \u8CB7\u6771\u897F\uFF08\u4EA4\u901A\u5DE5\u5177\u30FB\u5BF5\u7269\u30FB\u8863\u670D\u30FB\u623F\u5B50\uFF09"):null);let hl=()=>[g.id,g.floors||1,g.theme||"none"].join(":"),uh=h=>[[h.x,h.z],[h.x+h.w-1,h.z],[h.x,h.z+h.d-1],[h.x+h.w-1,h.z+h.d-1]].every(([_,C])=>$.ready(_,C));function Dd(){for(let h of(g.restore||[]).slice()){let _=d.homes.find(Y=>Y.id===h);if(!_||h===g.id){g.restore=g.restore.filter(Y=>Y!==h);continue}if(!uh(_))continue;let C=new Map,F=(Y,Z,at)=>{let ot=Math.floor(Y/16),xt=Math.floor(at/16),kt=ot+","+xt;return C.has(kt)||C.set(kt,d.genChunk(ot,xt)),C.get(kt)[ri(Y-ot*16,Z,at-xt*16)]};for(let Y=_.x;Y<_.x+_.w;Y++)for(let Z=_.z;Z<_.z+_.d;Z++)for(let at=c;at<=c+Kc;at++){let ot=F(Y,at,Z);$.get(Y,at,Z)!==ot&&$.set(Y,at,Z,ot)}g.restore=g.restore.filter(Y=>Y!==h),Me()}}function ul(){Dd();let h=jt();if(!h||g.built===hl()||!uh(h))return;let _=0;for(let[C,F,Y,Z]of qf(h,c,{floors:g.floors,theme:g.theme,wall:g.wall})){let at=Z==="air"?0:l.num(Z);$.get(C,F,Y)!==at&&($.set(C,F,Y,at),_++)}g.built=hl(),_&&Me()}let fh={none:"\u539F\u672C\u7684\u6A23\u5B50",tree:"\u6A39\u5C4B",lighthouse:"\u71C8\u5854",castle:"\u57CE\u5821"},Nd=()=>{let h=["none"].concat(s.items.filter(_=>_.theme&&R.has(_.id)).map(_=>_.theme));return h.length<2&&g.floors!==2?L("p",{class:"muted small"},"\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u53EF\u4EE5\u8CB7\u4E8C\u6A13\u548C\u6A39\u5C4B\uFF0F\u71C8\u5854\uFF0F\u57CE\u5821\u6A23\u5F0F\u3002"):L("div",{},L("h3",{},"\u623F\u5B50\u6A23\u5F0F"+(g.floors===2?"\uFF08\u6709\u4E8C\u6A13\uFF0C\u5C4B\u88E1\u89D2\u843D\u6709\u68AF\u5B50\uFF09":"")),L("div",{class:"swatches"},h.map(_=>L("button",{class:"sw"+((g.theme||"none")===_?" on":""),onclick:()=>{g.theme=_,ul(),Me(),an(),It("\u63DB\u6210"+fh[_])}},fh[_]))))};function qs(){let h=(C,F,Y)=>L("div",{class:"av-row"},L("b",{},C),L("div",{class:"swatches"},Wn[F].map((Z,at)=>jf(v,R,F,Z)?null:L("button",{class:"sw"+(w[F]===at?" on":""),style:typeof Z=="string"&&Z[0]==="#"?"background:"+Z:"",onclick:()=>{w[F]=at,Ce(),qs(),Me()}},Y?Y(Z):"")))),_={short:"\u77ED\u9AEE",long:"\u9577\u9AEE",bun:"\u5305\u982D",spiky:"\u523A\u523A",none:"\u5149\u982D",cap:"\u68D2\u7403\u5E3D",beanie:"\u6BDB\u5E3D",bow:"\u8774\u8776\u7D50",true:"\u6234",false:"\u4E0D\u6234",flower:"\u82B1\u5708",tophat:"\u7D33\u58EB\u5E3D",crown:"\u7687\u51A0",stripe:"\u689D\u7D0B",star:"\u661F\u661F",scarf:"\u570D\u5DFE",goldbadge:"\u91D1\u5FBD\u7AE0",backpack:"\u80CC\u5305",cape:"\u62AB\u98A8"};z("\u6211\u7684\u6A23\u5B50",h("\u819A\u8272","skin"),h("\u9AEE\u578B","hair",C=>_[C]),h("\u982D\u9AEE\u984F\u8272","hairColor"),h("\u4E0A\u8863","top",C=>C[0]==="#"?"":_[C]),h("\u8932\u5B50","bottom"),h("\u5E3D\u5B50","hat",C=>C==="none"?"\u4E0D\u6234":_[C]),h("\u773C\u93E1","glasses",C=>_[C]),h("\u914D\u4EF6","acc",C=>C==="none"?"\u4E0D\u6234":_[C]),L("p",{class:"muted small"},"\u5E3D\u5B50\u3001\u8863\u670D\u3001\u914D\u4EF6\u53EF\u4EE5\u5728\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u8CB7\u66F4\u591A\u3002"),L("p",{class:"muted"},"\u63DB\u597D\u5C31\u81EA\u52D5\u5B58\u8D77\u4F86\u3002"),L("div",{class:"row"},L("button",{class:"btn",onclick:y},"\u5B8C\u6210")))}function Ud(){z("\u8A2D\u5B9A",L("label",{class:"set"},"\u97F3\u6A02",L("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:h=>Jc({music:+h.target.value,muted:!1})})),L("label",{class:"set"},"\u97F3\u6548",L("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:h=>Jc({sfx:+h.target.value,muted:!1})})),L("p",{},"\u91D1\u5E63\u8DDF\u300C\u65B9\u584A\u4E16\u754C\u300D\u662F\u540C\u4E00\u500B\u9322\u5305\u3002"),L("p",{},`\u79D8\u5BC6\u623F\u9593\uFF1A\u627E\u5230 ${Hs()} / ${N.length} \u9593\uFF08\u7DDA\u7D22\u5728\u516C\u5712\u65C1\u908A\u7684\u516C\u544A\u6B04\uFF09`),L("p",{},L("a",{class:"home-link",href:"../../#s/game",onclick:()=>Me()},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),L("p",{class:"muted small"},"\u7248\u672C "+rh))}let $n=(h,_)=>{let C=Ae(h);C&&(C.onclick=F=>{F.stopPropagation(),Qa(),_()})};$n("#b-av",qs),$n("#b-home",an),$n("#b-set",Ud),$n("#b-job",Be),$n("#b-pet",ol),$n("#b-phone",ll),Ae("#task").onclick=h=>{h.stopPropagation(),!M.overlay&&(M.go?un():M.lost?Pt():M.list&&Xs(!1))},$n("#b-bike",()=>{if(!Object.keys(Gt).some(h=>R.has(h))){xe(M.bike?null:"bike");return}Dn()}),$n("#b-view",()=>{M.view=M.view==="tp"?"fp":"tp"}),$n("#b-zh",()=>{M.zh=!M.zh,cy("kt_zh",M.zh?"on":"off"),Ae("#b-zh").textContent=M.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC"}),Ae("#b-zh").textContent=M.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC",$n("#b-snd",()=>{Bf(),Ae("#b-snd").textContent=tl()?"\u{1F507}":"\u{1F50A}"});let Si=new K,dh=()=>{let h=Math.cos(M.pitch);return{x:-Math.sin(M.yaw)*h,y:Math.sin(M.pitch),z:-Math.cos(M.yaw)*h}},fl=()=>({x:M.p.x,y:M.p.y+1.62+Te(),z:M.p.z}),Fd=h=>l.flat.boxes[h]||(l.flat.shape[h]===4?[[0,0,0,1,.1,1]]:null);function Od(h,_,C){return h==="screen"?(Si.set(_/innerWidth*2-1,-(C/innerHeight)*2+1,.5).unproject(k).sub(k.position).normalize(),{o:{x:k.position.x,y:k.position.y,z:k.position.z},d:{x:Si.x,y:Si.y,z:Si.z}}):M.view==="tp"?(k.getWorldDirection(Si),{o:{x:k.position.x,y:k.position.y,z:k.position.z},d:{x:Si.x,y:Si.y,z:Si.z}}):{o:fl(),d:dh()}}function ph(h,_,C){let{o:F,d:Y}=Od(h,_,C),Z=M.view==="tp"?9:5,at=Gc(F,Y,Z,(Ht,Se,We)=>$.get(Ht,Se,We),Ht=>Ht&&!l.flat.liquid[Ht],Fd),ot=null,xt=at?at.dist+.3:Z;for(let Ht of V){let Se=$a(F,Y,Ht.p,.8,1.9);Se!=null&&Se<xt&&(xt=Se,ot=Ht)}{let Ht=$a(F,Y,q.p,.7,1.4);Ht!=null&&Ht<xt&&(xt=Ht,ot=q)}let kt=null;for(let Ht of Rt){let Se=$a(F,Y,Ht.p,.7,.7);Se!=null&&Se<xt&&(xt=Se,kt=Ht,ot=null)}return at&&(at.at={x:F.x+Y.x*at.dist,y:F.y+Y.y*at.dist,z:F.z+Y.z*at.dist}),{npc:ot,blk:kt?null:at,note:kt}}function Ys(h,_,C,F){if(M.overlay)return;let{npc:Y,blk:Z,note:at}=ph(h,_,C);if(at&&!F){os(at);return}if(Y&&!F){Y===q?Et():Mt(Y);return}if(!Z)return;let ot=l.get(Z.n);if(!M.furn&&ot&&ot.interact==="door"){Bd(Z);return}if(!M.furn&&ot&&ot.interact==="riddle"){sl(Z);return}if(!M.furn&&ot&&ot.interact==="treasure"){zr(Z);return}if(M.furn){if(F){M.furnPrev=null,mh(Z.x,Z.y,Z.z)?($.set(Z.x,Z.y,Z.z,0),je("break","wood")):It("\u53EA\u6709\u81EA\u5DF1\u5BB6\u88E1\u9762\u53EF\u4EE5\u62FF\u6389\u6771\u897F");return}let xt=dl(Z);if(!xt.ok){xt.why&&It(xt.why);return}if(h==="screen"&&!(M.furnPrev&&M.furnPrev.x===xt.x&&M.furnPrev.y===xt.y&&M.furnPrev.z===xt.z)){M.furnPrev=xt,It("\u770B\u534A\u900F\u660E\u7684\u9810\u89BD\uFF1A\u518D\u9EDE\u4E00\u6B21\u5C31\u653E\u4E0B\uFF0C\u300C\u8F49\u5411\u300D\u53EF\u4EE5\u8F49\u65B9\u5411");return}M.furnPrev=null,$.set(xt.x,xt.y,xt.z,l.num(gh())),je("place","wood");return}F&&It("\u9019\u88E1\u662F\u5C0F\u93AE\u7684\u516C\u5171\u7A7A\u9593\uFF0C\u4E0D\u80FD\u6316\u4E5F\u4E0D\u80FD\u84CB\u5594")}let mh=(h,_,C)=>{let F=we(),Y=g.floors===2?Fr(jt(),c,2).slab:-1;return _!==Y&&Wf(F,h,_,C,c)},gh=()=>{let h=ze[M.furnSel];return l.get(h).place==="stairs"?h+["","_e","_s","_w"][M.furnRot]:h};function dl(h){let _=h.x+h.face[0],C=h.y+h.face[1],F=h.z+h.face[2];return mh(_,C,F)?$.get(_,C,F)?{ok:!1}:Math.abs(_+.5-M.p.x)<.8&&Math.abs(F+.5-M.p.z)<.8&&C>=Math.floor(M.p.y)&&C<=Math.floor(M.p.y)+1?{ok:!1}:{ok:!0,x:_,y:C,z:F}:{ok:!1,why:we()?"\u5BB6\u5177\u53EA\u80FD\u653E\u5728\u81EA\u5DF1\u5BB6\u88E1\u9762":"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50"}}let xh=new yn({color:15723485,transparent:!0,opacity:.45,depthWrite:!1}),as=new fn,_h=[0,1].map(()=>{let h=new Ue(new pn(1,1,1),xh);return as.add(h),h});as.visible=!1,D.add(as);function kd(h){let _=null;if(M.furn&&M.started&&!M.overlay)if(M.touch)_=M.furnPrev&&dl({x:M.furnPrev.x,y:M.furnPrev.y,z:M.furnPrev.z,face:[0,0,0]});else{let{blk:Z}=ph("center");_=Z&&dl(Z)}if(!_||!_.ok){as.visible=!1;return}let C=l.num(gh()),F=l.flat.shape[C],Y=l.flat.boxes[C]||(F===4?[[0,0,0,1,.1,1]]:F>=1&&F<=3?[[.2,0,.2,.8,.7,.8]]:[[0,0,0,1,1,1]]);_h.forEach((Z,at)=>{let ot=Y[at];Z.visible=!!ot,ot&&(Z.scale.set((ot[3]-ot[0])*.98,(ot[4]-ot[1])*.98,(ot[5]-ot[2])*.98),Z.position.set(_.x+(ot[0]+ot[3])/2,_.y+(ot[1]+ot[4])/2,_.z+(ot[2]+ot[5])/2))}),xh.color.setScalar(.5+.5*h),as.visible=!0}function Bd(h){let _=we(),C=_&&h.x>=_.x&&h.x<_.x+_.w&&h.z>=_.z&&h.z<_.z+_.d;if(d.homes.find(ot=>h.x>=ot.x&&h.x<ot.x+ot.w&&h.z>=ot.z&&h.z<ot.z+ot.d)&&!C){It("\u9019\u4E0D\u662F\u4F60\u7684\u5BB6\uFF0C\u6572\u6572\u9580\u5C31\u597D");return}if(C&&g.locked){It("\u9580\u9396\u8457\uFF0C\u5230\u300C\u6211\u7684\u5BB6\u300D\u89E3\u9396");return}let Y=l.get(h.n),Z=l.get(Y.openAs||Y.closeAs);if(!Z)return;let at=h.y;for(;l.get($.get(h.x,at-1,h.z)).interact==="door";)at--;for(let ot=at;l.get($.get(h.x,ot,h.z)).interact==="door";ot++)$.set(h.x,ot,h.z,Z.n);je("door")}let yh=()=>{nl||!T.requestPointerLock||T.requestPointerLock()};addEventListener("keydown",h=>{if(h.target&&h.target.tagName==="INPUT")return;let _=h.key.toLowerCase();if(_==="escape"&&M.overlay){y();return}M.overlay||(M.keys[_]=!0,h.code==="Space"&&(M.keys[" "]=!0,h.preventDefault()),_==="b"&&Ae("#b-bike").click(),_==="v"&&Ae("#b-view").click(),_==="p"&&Ae("#b-phone").click(),_==="r"&&(M.furnRot=(M.furnRot+1)%4),_>="1"&&_<="9"&&M.furn&&(M.furnSel=+_-1,$e()))}),addEventListener("keyup",h=>{M.keys[h.key.toLowerCase()]=!1,h.code==="Space"&&(M.keys[" "]=!1)}),addEventListener("blur",()=>{M.keys={}}),T.addEventListener("mousedown",h=>{M.touch||M.overlay||document.pointerLockElement!==T&&(yh(),!nl)||(h.button===0&&Ys("center",0,0,M.furn),h.button===2&&Ys("center",0,0,!1))}),T.addEventListener("contextmenu",h=>h.preventDefault()),addEventListener("mousemove",h=>{document.pointerLockElement===T&&(M.yaw-=h.movementX*.0024,M.pitch=Math.max(-1.4,Math.min(1.4,M.pitch-h.movementY*.0024)))});let $s=new Map;T.addEventListener("pointerdown",h=>{if(h.pointerType!=="touch"||M.overlay)return;if(M.touch=!0,h.preventDefault(),Qa(),h.clientX<innerWidth*.4&&h.clientY>innerHeight*.35&&!M.joy.active){M.joy={x:0,y:0,active:!0,ox:h.clientX,oy:h.clientY},Wt.joy.style.transform=`translate(${h.clientX-60}px, ${h.clientY-60}px)`,Wt.joy.hidden=!1,$s.set(h.pointerId,{kind:"joy"});return}let _={kind:"look",x:h.clientX,y:h.clientY,sx:h.clientX,sy:h.clientY,t0:performance.now(),drag:!1};_.timer=setTimeout(()=>{_.drag||(_.long=!0,Ys("screen",_.x,_.y,!0))},450),$s.set(h.pointerId,_)},{passive:!1}),addEventListener("pointermove",h=>{let _=$s.get(h.pointerId);if(!_)return;if(_.kind==="joy"){let Y=h.clientX-M.joy.ox,Z=h.clientY-M.joy.oy,at=Math.hypot(Y,Z);at>55&&(Y*=55/at,Z*=55/at),M.joy.x=Y/55,M.joy.y=Z/55,Wt.knob.style.transform=`translate(${Y}px,${Z}px)`;return}let C=h.clientX-_.x,F=h.clientY-_.y;_.x=h.clientX,_.y=h.clientY,!_.drag&&Math.hypot(_.x-_.sx,_.y-_.sy)>12&&(_.drag=!0,clearTimeout(_.timer)),_.drag&&(M.yaw-=C*.0055,M.pitch=Math.max(-1.4,Math.min(1.4,M.pitch-F*.0055)))});let vh=h=>{let _=$s.get(h.pointerId);if(_){if($s.delete(h.pointerId),_.kind==="joy"){M.joy={x:0,y:0,active:!1},Wt.joy.hidden=!0;return}clearTimeout(_.timer),!_.drag&&!_.long&&performance.now()-_.t0<450&&Ys("screen",_.x,_.y,!1)}};addEventListener("pointerup",vh),addEventListener("pointercancel",vh);let pl=Ae("#b-jump");pl.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),M.jumpHeld=!0}),pl.addEventListener("pointerup",()=>{M.jumpHeld=!1}),pl.addEventListener("pointerleave",()=>{M.jumpHeld=!1}),document.addEventListener("touchmove",h=>{h.target.closest(".panel")||h.preventDefault()},{passive:!1}),["gesturestart","dblclick"].forEach(h=>document.addEventListener(h,_=>_.preventDefault(),{passive:!1})),document.body.classList.toggle("is-touch",M.touch),Ae("#ui").classList.toggle("touch",M.touch);async function Me(){let h={kt_player:{x:M.p.x,y:M.p.y,z:M.p.z,yaw:M.yaw,view:M.view},kt_home:g,kt_avatar:w,kt_jobs:p,kt_owned:[...R],kt_pets:A,kt_life:E};for(let _ of M.dirty){let C=x.get(_);C&&(h["kt_chunk:"+_]=Yc(C))}M.dirty.clear();try{if(await Mi.putMany(h),M.pending){let _=M.pending;M.pending=0;let C=Za(await Br.get("hw_coins"));Bs(C,_),await Br.putMany({hw_coins:Xc(C)}),f.coins=C.coins,I()}}catch(_){console.warn("save failed",_),!M.quotaWarned&&_&&_.name==="QuotaExceededError"&&(M.quotaWarned=!0,It("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF0C\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{M.started&&Me()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&M.started&&Me()}),addEventListener("pagehide",()=>{M.started&&Me()}),Ae("#go").onclick=()=>{Ae("#start").hidden=!0,M.started=!0,mt||Vt(),Qa(),M.touch||yh(),u.av||setTimeout(qs,300)},I(),$e(),Sn(),Ln(),$i(),Xi();let zd=new Jt("#EFEBDD"),Vd=new Jt("#22302F"),Gd=new Jt("#E6B48C"),Mh=performance.now(),qr=0,ml=0;function Hd(h){let _=M.keys,C=(_.d?1:0)-(_.a?1:0),F=(_.w?1:0)-(_.s?1:0);M.joy.active&&(C=M.joy.x,F=-M.joy.y);let Y=Math.min(1,Math.hypot(C,F));if(Y>0){let Eh=Math.hypot(C,F);C=C/Eh*Y,F=F/Eh*Y}let Z=-Math.sin(M.yaw),at=-Math.cos(M.yaw),ot=Math.cos(M.yaw),xt=-Math.sin(M.yaw),kt=_.shift||M.joy.active&&Y>.92,Ht=M.bike?Gt[Ee()]:null,Se=Ht?kt?Ht.run:Ht.speed:kt?6.2:4.3,We=(Z*F+ot*C)*Se,Nn=(at*F+xt*C)*Se,Zi=1-Math.exp(-(M.onGround?12:5)*h);M.v.x+=(We-M.v.x)*Zi,M.v.z+=(Nn-M.v.z)*Zi;let Yr=Math.floor(M.p.x),wh=Math.floor(M.p.z),Ah=!M.bike&&(l.flat.climb[$.get(Yr,Math.floor(M.p.y),wh)]||l.flat.climb[$.get(Yr,Math.floor(M.p.y)+1,wh)]);Ah?M.v.y=_[" "]||M.jumpHeld||F>.1?3.2:Math.max(M.v.y-28*h,-1.5):(M.v.y-=28*h,M.v.y<-40&&(M.v.y=-40)),(_[" "]||M.jumpHeld)&&M.onGround&&!Ah&&Ee()!=="boat"&&(M.v.y=8.6,M.onGround=!1);let Wd=gf(M.p,M.v,h,zt,{canStep:!0,grounded:M.onGround,w:De[Ee()]});M.onGround=Wd.onGround;let $r=t.bound+1;M.p.x=Math.max(-$r,Math.min($r,M.p.x)),M.p.z=Math.max(-$r,Math.min($r,M.p.z)),M.p.y<0&&(M.p={x:ut.x,y:ut.y,z:ut.z},M.v={x:0,y:0,z:0});let Th=Math.hypot(M.v.x,M.v.z);M.onGround&&Th>1&&(M.stepT=(M.stepT||0)+h*Th,M.stepT>(M.bike?4:1.8)&&Ee()!=="boat"&&(M.stepT=0,je("step","stone")))}function Sh(h){requestAnimationFrame(Sh);let _=(h-Mh)/1e3;Mh=h;let C=Math.min(.05,_);M.frames.push(_*1e3),M.frames.length>4e3&&M.frames.shift(),$.update(M.p.x,M.p.z);let F=$.ready(M.p.x,M.p.z);M.started&&!M.overlay&&F&&(Hd(C),(M.go||M.lost)&&(M.goT=(M.goT||0)+C)>.25&&(M.goT=0,il(),Ft())),M.time=(M.time+C/ay)%1;let Y=Math.sin(M.time*Math.PI*2),Z=Math.min(1,Math.max(0,(Y+.12)/.42)),at=.35+.65*Z;H.copy(Vd).lerp(zd,Z).lerp(Gd,Math.max(0,1-Math.abs(Y)/.3)*.4*(Z>.05?1:.4)),W.uniforms.uDay.value=Z;let ot=H.getHexString();W.uniforms.uFog.value.set(parseInt(ot.slice(0,2),16)/255,parseInt(ot.slice(2,4),16)/255,parseInt(ot.slice(4,6),16)/255);let xt=Z>.3?"calm":"night";xt!==M.scene&&(M.scene=xt,zf(xt));for(let Se of V)!Se.busy&&!M.overlay?Jf(Se,C):Se.v={x:0,y:0,z:0},Ff(Se.g,Se,h/1e3);Uf(at),re.position.set(M.p.x,M.p.y+Te(),M.p.z),re.rotation.y=M.yaw,nh(re,M.bike?0:Math.hypot(M.v.x,M.v.z),h/1e3,at),re.visible=M.view==="tp";for(let Se in ve){let We=ve[Se],Nn=Se===Ee();We.visible=Nn,Nn&&(We.position.set(M.p.x,M.p.y,M.p.z),We.rotation.y=M.yaw,md(We,at))}Id(C,h/1e3,at),Dt(C,h/1e3,at),kd(at),(M.houseT=(M.houseT||0)+C)>1&&(M.houseT=0,ul());let kt=fl(),Ht=dh();if(M.view==="tp"){let Se=Gc(kt,{x:-Ht.x,y:-Ht.y,z:-Ht.z},4.5,(Nn,Zi,Yr)=>$.get(Nn,Zi,Yr),Nn=>l.flat.opaque[Nn]===1),We=Se?Math.max(.4,Se.dist-.25):4.5;k.position.set(kt.x-Ht.x*We,kt.y-Ht.y*We+.3,kt.z-Ht.z*We)}else k.position.set(kt.x,kt.y,kt.z);k.rotation.set(M.pitch,M.yaw,0),P.render(D,k),qr+=_,ml++,qr>.5&&(Wt.dbg&&(Wt.dbg.textContent=`${Math.round(ml/qr)} fps \xB7 \u5340\u584A ${$.stats.loaded} \xB7 ${M.p.x.toFixed(1)}, ${M.p.y.toFixed(1)}, ${M.p.z.toFixed(1)}`),qr=0,ml=0),Wt.loading.hidden=F||!M.started}let bh=()=>{P.setSize(innerWidth,innerHeight,!1),k.aspect=innerWidth/innerHeight,k.updateProjectionMatrix()};addEventListener("resize",bh),bh(),window.KT={build:rh,TEST:nl,G:M,reg:l,world:$,wallet:f,npcs:V,terr:d,homeState:g,DLG:e,spawn:ut,start(){Ae("#go").click()},ready:()=>$.ready(M.p.x,M.p.z),state:()=>({pos:{...M.p},coins:f.coins,loaded:$.stats.loaded,overlay:M.overlay}),talk:(h,_)=>_t(V.find(C=>C.n.id===h),_),menu:h=>Mt(V.find(_=>_.n.id===h)),JOBS:m,jobs:p,places:Qe,me:()=>re,openShop:Xr,buy:hh,owned:R,notes:Rt,readNote:os,secrets:N,chatReady:()=>!!mt,setRide:xe,rideId:Ee,pets:A,pet:()=>Ie,openPets:ol,houseTick:ul,houseSig:hl,myHome:we,exam:Ut,work:me,ex:()=>M.exam,task:()=>M.task,go:()=>M.go,openJobs:Be,pick:h=>{let _=Wt.ov.querySelectorAll(".cards .card")[h];_&&_.click()},dlg:()=>M.dlg,claim:In,goHome:Yn,paint:de,close:y,save:Me,avatar:()=>w,setAvatar(h){w=el(h),Ce()},openAvatar:qs,openHome:an,lookAt(h,_,C){let F=fl(),Y=h-F.x,Z=_-F.y,at=C-F.z;M.yaw=Math.atan2(-Y,-at),M.pitch=Math.atan2(Z,Math.hypot(Y,at))},use(h){Ys("center",0,0,!!h)},ghost:()=>({visible:as.visible,boxes:_h.filter(h=>h.visible).map(h=>[...h.position.toArray().map(_=>+_.toFixed(2)),...h.scale.toArray().map(_=>+_.toFixed(2))])}),furnPrev:()=>M.furnPrev,noteTex:()=>[st,ht],phone:ll,photo:()=>M.photo,rideW:h=>De[h],townToday:lh,LIFE:o,life:E,lifeTick:Xi,giveList:Gr,basketPanel:Hr,waiterStart:B,waiter:()=>M.waiter,lostStart:Et,lost:()=>M.lost,lostQ:()=>M.lostQ,kid:q,classStart:_e,cls:()=>M.cls,tbReady:()=>!!fe,list:()=>M.list,perf(){return{frames:M.frames.slice()}},resetPerf(){M.frames.length=0}},requestAnimationFrame(Sh)}hy().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
