(()=>{var Nc=0,nl=1,Uc=2;var Js=1,Fc=2,as=3,di=0,Je=1,fn=2,Un=0,ls=1,il=2,sl=3,rl=4,Oc=5;var Li=100,Bc=101,zc=102,kc=103,Vc=104,Gc=200,Hc=201,Wc=202,Xc=203,ol=204,al=205,qc=206,Yc=207,$c=208,Zc=209,Jc=210,Kc=211,jc=212,Qc=213,th=214,Vr=0,Gr=1,Hr=2,ns=3,Wr=4,Xr=5,qr=6,Yr=7,ll=0,eh=1,nh=2,wn=0,cl=1,hl=2,ul=3,fl=4,dl=5,pl=6,ml=7;var gl=300,pi=301,Di=302,So=303,bo=304,Ks=306,$r=1e3,Pn=1001,Zr=1002,Be=1003,ih=1004;var js=1005;var Pe=1006,wo=1007;var mi=1008;var an=1009,xl=1010,_l=1011,cs=1012,Ao=1013,An=1014,En=1015,Tn=1016,Eo=1017,To=1018,hs=1020,yl=35902,vl=35899,Ml=1021,Sl=1022,dn=1023,Ln=1026,gi=1027,bl=1028,Co=1029,xi=1030,Ro=1031;var Io=1033,Qs=33776,tr=33777,er=33778,nr=33779,Po=35840,Lo=35841,Do=35842,No=35843,Uo=36196,Fo=37492,Oo=37496,Bo=37488,zo=37489,ir=37490,ko=37491,Vo=37808,Go=37809,Ho=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,$o=37815,Zo=37816,Jo=37817,Ko=37818,jo=37819,Qo=37820,ta=37821,ea=36492,na=36494,ia=36495,sa=36283,ra=36284,sr=36285,oa=36286;var Ps=2300,Jr=2301,zr=2302,Ja=2303,Ka=2400,ja=2401,Qa=2402;var sh=3200;var wl=0,rh=1,Zn="",Le="srgb",Ls="srgb-linear",Ds="linear",pe="srgb";var kr=7680;var oh=519,ah=512,lh=513,ch=514,aa=515,hh=516,uh=517,la=518,fh=519,Al=35044;var El="300 es",Mn=2e3,Ns=2001;function tf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ef(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dh(){let n=Us("canvas");return n.style.display="block",n}var dc={},is=null;function Fs(...n){let t="THREE."+n.shift();is?is("log",t,...n):console.log(t,...n)}function ph(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=ph(n);let t="THREE."+n.shift();if(is)is("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=ph(n);let t="THREE."+n.shift();if(is)is("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ii(...n){let t=n.join(" ");t in dc||(dc[t]=!0,Wt(...n))}function mh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var gh={[Vr]:Gr,[Hr]:qr,[Wr]:Yr,[ns]:Xr,[Gr]:Vr,[qr]:Hr,[Yr]:Wr,[Xr]:ns},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ta=Math.PI/180,Kr=180/Math.PI;function si(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function nf(n,t){return(n%t+t)%t}function Ca(n,t,e){return(1-e)*n+e*t}function In(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pl=class Pl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pl.prototype.isVector2=!0;var re=Pl,Nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3],u=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3];if(h!==S||l!==u||c!==m||f!==x){let p=l*u+c*m+f*x+h*S;p<0&&(u=-u,m=-m,x=-x,S=-S,p=-p);let d=1-a;if(p<.9995){let A=Math.acos(p),R=Math.sin(A);d=Math.sin(d*A)/R,a=Math.sin(a*A)/R,l=l*d+u*a,c=c*d+m*a,f=f*d+x*a,h=h*d+S*a}else{l=l*d+u*a,c=c*d+m*a,f=f*d+x*a,h=h*d+S*a;let A=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=A,c*=A,f*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[o],u=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+f*h+l*m-c*u,t[e+1]=l*x+f*u+c*h-a*m,t[e+2]=c*x+f*m+a*u-l*h,t[e+3]=f*x-a*h-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),h=a(r/2),u=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"YXZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"ZXY":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"ZYX":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"YZX":this._x=u*f*h+c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h-u*m*x;break;case"XZY":this._x=u*f*h-c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h+u*m*x;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=i+a+h;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+f)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ll=class Ll{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),f=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*f,this.y=i+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ll.prototype.isVector3=!0;var q=Ll,Ra=new q,pc=new Nn,Dl=class Dl{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],x=i[8],S=s[0],p=s[3],d=s[6],A=s[1],R=s[4],w=s[7],E=s[2],T=s[5],D=s[8];return r[0]=o*S+a*A+l*E,r[3]=o*p+a*R+l*T,r[6]=o*d+a*w+l*D,r[1]=c*S+f*A+h*E,r[4]=c*p+f*R+h*T,r[7]=c*d+f*w+h*D,r[2]=u*S+m*A+x*E,r[5]=u*p+m*R+x*T,r[8]=u*d+m*w+x*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,m=c*r-o*l,x=e*h+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=h*S,t[1]=(s*c-f*i)*S,t[2]=(a*i-s*o)*S,t[3]=u*S,t[4]=(f*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=m*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dl.prototype.isMatrix3=!0;var jt=Dl,Ia=new jt,mc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sf(){let n={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ls]:{primaries:t,whitePoint:i,transfer:Ds,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),n}var le=sf();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bi,jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bi===void 0&&(Bi=Us("canvas")),Bi.width=t.width,Bi.height=t.height;let s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Bi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Us("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($n(e[i]/255)*255):e[i]=$n(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rf=0,ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pa(s[o].image)):r.push(Pa(s[o]))}else r=Pa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var of=0,La=new q,Ze=class n extends Dn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Pn,s=Pn,r=Pe,o=mi,a=dn,l=an,c=n.DEFAULT_ANISOTROPY,f=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=si(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $r:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $r:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=gl;Ze.DEFAULT_ANISOTROPY=1;var Nl=class Nl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],x=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,w=(m+1)/2,E=(d+1)/2,T=(f+u)/4,D=(h+S)/4,y=(x+p)/4;return R>w&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=T/i,r=D/i):w>E?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=y/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=y/r),this.set(i,s,r,e),this}let A=Math.sqrt((p-x)*(p-x)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(A)<.001&&(A=1),this.x=(p-x)/A,this.y=(h-S)/A,this.z=(u-f)/A,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;var Ee=Nl,Qr=class extends Dn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ze(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Qr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Os=class extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Mo=class Mo{constructor(t,e,i,s,r,o,a,l,c,f,h,u,m,x,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,f,h,u,m,x,S,p)}set(t,e,i,s,r,o,a,l,c,f,h,u,m,x,S,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=x,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,m=o*h,x=a*f,S=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=m+x*c,e[5]=u-S*c,e[9]=-a*l,e[2]=S-u*c,e[6]=x+m*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,m=l*h,x=c*f,S=c*h;e[0]=u+S*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=m*a-x,e[6]=S+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,m=l*h,x=c*f,S=c*h;e[0]=u-S*a,e[4]=-o*h,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*f,e[9]=S-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,m=o*h,x=a*f,S=a*h;e[0]=l*f,e[4]=x*c-m,e[8]=u*c+S,e[1]=l*h,e[5]=S*c+u,e[9]=m*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,x=a*l,S=a*c;e[0]=l*f,e[4]=S-u*h,e[8]=x*h+m,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=m*h+x,e[10]=u-S*h}else if(t.order==="XZY"){let u=o*l,m=o*c,x=a*l,S=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+S,e[5]=o*f,e[9]=m*h-x,e[2]=x*h-m,e[6]=a*f,e[10]=S*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,lf)}lookAt(t,e,i){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Qn.crossVectors(i,en),Qn.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Qn.crossVectors(i,en)),Qn.normalize(),xr.crossVectors(en,Qn),s[0]=Qn.x,s[4]=xr.x,s[8]=en.x,s[1]=Qn.y,s[5]=xr.y,s[9]=en.y,s[2]=Qn.z,s[6]=xr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],x=i[2],S=i[6],p=i[10],d=i[14],A=i[3],R=i[7],w=i[11],E=i[15],T=s[0],D=s[4],y=s[8],M=s[12],I=s[1],L=s[5],V=s[9],N=s[13],U=s[2],X=s[6],nt=s[10],K=s[14],ht=s[3],Q=s[7],ot=s[11],lt=s[15];return r[0]=o*T+a*I+l*U+c*ht,r[4]=o*D+a*L+l*X+c*Q,r[8]=o*y+a*V+l*nt+c*ot,r[12]=o*M+a*N+l*K+c*lt,r[1]=f*T+h*I+u*U+m*ht,r[5]=f*D+h*L+u*X+m*Q,r[9]=f*y+h*V+u*nt+m*ot,r[13]=f*M+h*N+u*K+m*lt,r[2]=x*T+S*I+p*U+d*ht,r[6]=x*D+S*L+p*X+d*Q,r[10]=x*y+S*V+p*nt+d*ot,r[14]=x*M+S*N+p*K+d*lt,r[3]=A*T+R*I+w*U+E*ht,r[7]=A*D+R*L+w*X+E*Q,r[11]=A*y+R*V+w*nt+E*ot,r[15]=A*M+R*N+w*K+E*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],m=t[14],x=t[3],S=t[7],p=t[11],d=t[15],A=l*m-c*u,R=a*m-c*h,w=a*u-l*h,E=o*m-c*f,T=o*u-l*f,D=o*h-a*f;return e*(S*A-p*R+d*w)-i*(x*A-p*E+d*T)+s*(x*R-S*E+d*D)-r*(x*w-S*T+p*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-i*(r*f-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],m=t[11],x=t[12],S=t[13],p=t[14],d=t[15],A=e*a-i*o,R=e*l-s*o,w=e*c-r*o,E=i*l-s*a,T=i*c-r*a,D=s*c-r*l,y=f*S-h*x,M=f*p-u*x,I=f*d-m*x,L=h*p-u*S,V=h*d-m*S,N=u*d-m*p,U=A*N-R*V+w*L+E*I-T*M+D*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/U;return t[0]=(a*N-l*V+c*L)*X,t[1]=(s*V-i*N-r*L)*X,t[2]=(S*D-p*T+d*E)*X,t[3]=(u*T-h*D-m*E)*X,t[4]=(l*I-o*N-c*M)*X,t[5]=(e*N-s*I+r*M)*X,t[6]=(p*w-x*D-d*R)*X,t[7]=(f*D-u*w+m*R)*X,t[8]=(o*V-a*I+c*y)*X,t[9]=(i*I-e*V-r*y)*X,t[10]=(x*T-S*w+d*A)*X,t[11]=(h*w-f*T-m*A)*X,t[12]=(a*M-o*L-l*y)*X,t[13]=(e*L-i*M+s*y)*X,t[14]=(S*R-x*E-p*A)*X,t[15]=(f*E-h*R+u*A)*X,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,m=r*f,x=r*h,S=o*f,p=o*h,d=a*h,A=l*c,R=l*f,w=l*h,E=i.x,T=i.y,D=i.z;return s[0]=(1-(S+d))*E,s[1]=(m+w)*E,s[2]=(x-R)*E,s[3]=0,s[4]=(m-w)*T,s[5]=(1-(u+d))*T,s[6]=(p+A)*T,s[7]=0,s[8]=(x+R)*D,s[9]=(p-A)*D,s[10]=(1-(u+S))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);let c=1/o,f=1/a,h=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Mn,l=!1){let c=this.elements,f=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),m=(i+s)/(i-s),x,S;if(l)x=r/(o-r),S=o*r/(o-r);else if(a===Mn)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Ns)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Mn,l=!1){let c=this.elements,f=2/(e-t),h=2/(i-s),u=-(e+t)/(e-t),m=-(i+s)/(i-s),x,S;if(l)x=1/(o-r),S=o/(o-r);else if(a===Mn)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===Ns)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Mo.prototype.isMatrix4=!0;var Te=Mo,zi=new q,xn=new Te,af=new q(0,0,0),lf=new q(1,1,1),Qn=new q,xr=new q,en=new q,xc=new Te,_c=new Nn,ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cf=0,yc=new q,ki=new Nn,Gn=new Te,_r=new q,ws=new q,hf=new q,uf=new Nn,vc=new q(1,0,0),Mc=new q(0,1,0),Sc=new q(0,0,1),bc={type:"added"},ff={type:"removed"},Vi={type:"childadded",child:null},Da={type:"childremoved",child:null},sn=class n extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new q,e=new ri,i=new Nn,s=new q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new jt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_r.copy(t):_r.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ws,_r,this.up):Gn.lookAt(_r,ws,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Gn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new q(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,i),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(df)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Na(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=nf(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Na(o,r,t+1/3),this.g=Na(o,r,t),this.b=Na(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let i=xh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return le.workingToColorSpace(Ge.copy(this),t),Math.round(ce(Ge.r*255,0,255))*65536+Math.round(ce(Ge.g*255,0,255))*256+Math.round(ce(Ge.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ge.copy(this),e);let i=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Le){le.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,i=Ge.g,s=Ge.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(yr);let i=Ca(ti.h,yr.h,e),s=Ca(ti.s,yr.s,e),r=Ca(ti.l,yr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Qt;Qt.NAMES=xh;var zs=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new q,Hn=new q,Ua=new q,Wn=new q,Gi=new q,Hi=new q,wc=new q,Fa=new q,Oa=new q,Ba=new q,za=new Ee,ka=new Ee,Va=new Ee,Yn=class n{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){_n.subVectors(s,e),Hn.subVectors(i,e),Ua.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Hn),l=_n.dot(Ua),c=Hn.dot(Hn),f=Hn.dot(Ua),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,m=(c*l-a*f)*u,x=(o*f-a*l)*u;return r.set(1-m-x,x,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return za.setScalar(0),ka.setScalar(0),Va.setScalar(0),za.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Va,r.z),o}static isFrontFacing(t,e,i,s){return _n.subVectors(i,e),Hn.subVectors(t,e),_n.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Gi.subVectors(s,i),Hi.subVectors(r,i),Fa.subVectors(t,i);let l=Gi.dot(Fa),c=Hi.dot(Fa);if(l<=0&&c<=0)return e.copy(i);Oa.subVectors(t,s);let f=Gi.dot(Oa),h=Hi.dot(Oa);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(Gi,o);Ba.subVectors(t,r);let m=Gi.dot(Ba),x=Hi.dot(Ba);if(x>=0&&m<=x)return e.copy(r);let S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Hi,a);let p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return wc.subVectors(r,s),a=(h-f)/(h-f+(m-x)),e.copy(s).addScaledVector(wc,a);let d=1/(p+S+u);return o=S*d,a=u*d,e.copy(i).addScaledVector(Gi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),Mr.subVectors(this.max,As),Wi.subVectors(t.a,As),Xi.subVectors(t.b,As),qi.subVectors(t.c,As),ei.subVectors(Xi,Wi),ni.subVectors(qi,Xi),Ei.subVectors(Wi,qi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ei.z,Ei.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ei.z,0,-Ei.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ei.y,Ei.x,0];return!Ga(e,Wi,Xi,qi,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Wi,Xi,qi,Mr))?!1:(Sr.crossVectors(ei,ni),e=[Sr.x,Sr.y,Sr.z],Ga(e,Wi,Xi,qi,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new q,new q,new q,new q,new q,new q,new q,new q],yn=new q,vr=new oi,Wi=new q,Xi=new q,qi=new q,ei=new q,ni=new q,Ei=new q,As=new q,Mr=new q,Sr=new q,Ti=new q;function Ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ti.fromArray(n,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),f=i.dot(Ti);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Ie=new q,br=new re,pf=0,De=class extends Dn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Al,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=In(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ks=class extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vs=class extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var hn=class extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}},mf=new oi,Es=new q,Ha=new q,os=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):mf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Ha)),this.expandByPoint(Es.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gf=0,ln=new Te,Wa=new sn,Yi=new q,nn=new oi,Ts=new oi,Oe=new q,rn=class n extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?Vs:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(nn.min,Ts.min),nn.expandByPoint(Oe),Oe.addVectors(nn.max,Ts.max),nn.expandByPoint(Oe)):(nn.expandByPoint(Ts.min),nn.expandByPoint(Ts.max))}nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Oe.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(t,c),Oe.add(Yi)),s=Math.max(s,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new De(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new q,l[y]=new q;let c=new q,f=new q,h=new q,u=new re,m=new re,x=new re,S=new q,p=new q;function d(y,M,I){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,I),u.fromBufferAttribute(r,y),m.fromBufferAttribute(r,M),x.fromBufferAttribute(r,I),f.sub(c),h.sub(c),m.sub(u),x.sub(u);let L=1/(m.x*x.y-x.x*m.y);isFinite(L)&&(S.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(L),a[y].add(S),a[M].add(S),a[I].add(S),l[y].add(p),l[M].add(p),l[I].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let y=0,M=A.length;y<M;++y){let I=A[y],L=I.start,V=I.count;for(let N=L,U=L+V;N<U;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let R=new q,w=new q,E=new q,T=new q;function D(y){E.fromBufferAttribute(s,y),T.copy(E);let M=a[y];R.copy(M),R.sub(E.multiplyScalar(E.dot(M))).normalize(),w.crossVectors(T,M);let L=w.dot(l[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,L)}for(let y=0,M=A.length;y<M;++y){let I=A[y],L=I.start,V=I.count;for(let N=L,U=L+V;N<U;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,f=new q,h=new q;if(t)for(let u=0,m=t.count;u<m;u+=3){let x=t.getX(u+0),S=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,p),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),m=0,x=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*f;for(let d=0;d<f;d++)u[x++]=c[m++]}return new De(u,f,h)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],m=t(u,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let m=c[h];f.push(m.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},$e=new q,Gs=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=In(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xa=new q,xf=new q,_f=new jt,vn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Xa.subVectors(i,e).cross(xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Xa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||_f.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},yf=0,ai=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ls,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new vn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},li=class extends ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$i,Cs=new q,Zi=new q,Ji=new q,Ki=new re,Rs=new re,_h=new Te,wr=new q,Is=new q,Ar=new q,Ac=new re,qa=new re,Ec=new re,Pi=class extends sn{constructor(t=new li){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new rn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new eo(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new Gs(i,3,0,!1)),$i.setAttribute("uv",new Gs(i,2,3,!1))}this.geometry=$i,this.material=t,this.center=new re(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),_h.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Er(wr.set(-.5,-.5,0),Ji,o,Zi,s,r),Er(Is.set(.5,-.5,0),Ji,o,Zi,s,r),Er(Ar.set(.5,.5,0),Ji,o,Zi,s,r),Ac.set(0,0),qa.set(1,0),Ec.set(1,1);let a=t.ray.intersectTriangle(wr,Is,Ar,!1,Cs);if(a===null&&(Er(Is.set(-.5,.5,0),Ji,o,Zi,s,r),qa.set(0,1),a=t.ray.intersectTriangle(wr,Ar,Is,!1,Cs),a===null))return;let l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||e.push({distance:l,point:Cs.clone(),uv:Yn.getInterpolation(Cs,wr,Is,Ar,Ac,qa,Ec,new re),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Er(n,t,e,i,s,r){Ki.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Rs.x=r*Ki.x-s*Ki.y,Rs.y=s*Ki.x+r*Ki.y):Rs.copy(Ki),n.copy(t),n.x+=Rs.x,n.y+=Rs.y,n.applyMatrix4(_h)}var qn=new q,Ya=new q,Tr=new q,Cr=new q,no=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ya.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(Ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=Cr.dot(this.direction),l=-Cr.dot(Tr),c=Cr.lengthSq(),f=Math.abs(1-o*o),h,u,m,x;if(f>0)if(h=o*l-a,u=o*a-l,x=r*f,h>=0)if(u>=-x)if(u<=x){let S=1/f;h*=S,u*=S,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ya).addScaledVector(Tr,u),m}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=t.x-o.x,u=t.y-o.y,m=t.z-o.z,x=e.x-o.x,S=e.y-o.y,p=e.z-o.z,d=i.x-o.x,A=i.y-o.y,R=i.z-o.z,w=Math.abs(l),E=Math.abs(c),T=Math.abs(f),D,y,M,I,L,V,N,U,X,nt,K,ht;if(w>=E&&w>=T?(M=l,V=h,X=x,ht=d,l>=0?(D=c,y=f,I=u,L=m,N=S,U=p,nt=A,K=R):(D=f,y=c,I=m,L=u,N=p,U=S,nt=R,K=A)):E>=T?(M=c,V=u,X=S,ht=A,c>=0?(D=f,y=l,I=m,L=h,N=p,U=x,nt=R,K=d):(D=l,y=f,I=h,L=m,N=x,U=p,nt=d,K=R)):(M=f,V=m,X=p,ht=R,f>=0?(D=l,y=c,I=h,L=u,N=x,U=S,nt=d,K=A):(D=c,y=l,I=u,L=h,N=S,U=x,nt=A,K=d)),M===0)return null;let Q=D/M,ot=y/M,lt=1/M,zt=I-Q*V,Dt=L-ot*V,me=N-Q*X,oe=U-ot*X,ne=nt-Q*ht,J=K-ot*ht,at=ne*oe-J*me,At=zt*J-Dt*ne,qt=me*Dt-oe*zt;if(s){if(at<0||At<0||qt<0)return null}else if((at<0||At<0||qt<0)&&(at>0||At>0||qt>0))return null;let Tt=at+At+qt;if(Tt===0)return null;let te=lt*(at*V+At*X+qt*ht);return(Tt>0?te<0:te>0)?null:this.at(te/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tc=new Te,Ci=new no,Rr=new os,Cc=new q,Ir=new q,Pr=new q,Lr=new q,$a=new q,Dr=new q,Rc=new q,Nr=new q,Re=class extends sn{constructor(t=new rn,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&($a.fromBufferAttribute(h,t),o?Dr.addScaledVector($a,f):Dr.addScaledVector($a.sub(e),f))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Rr,Cc)===null||Ci.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(Tc),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=u.length;x<S;x++){let p=u[x],d=o[p.materialIndex],A=Math.max(p.start,m.start),R=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=A,E=R;w<E;w+=3){let T=a.getX(w),D=a.getX(w+1),y=a.getX(w+2);s=Ur(this,d,t,i,c,f,h,T,D,y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=x,d=S;p<d;p+=3){let A=a.getX(p),R=a.getX(p+1),w=a.getX(p+2);s=Ur(this,o,t,i,c,f,h,A,R,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=u.length;x<S;x++){let p=u[x],d=o[p.materialIndex],A=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=A,E=R;w<E;w+=3){let T=w,D=w+1,y=w+2;s=Ur(this,d,t,i,c,f,h,T,D,y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=x,d=S;p<d;p+=3){let A=p,R=p+1,w=p+2;s=Ur(this,o,t,i,c,f,h,A,R,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function vf(n,t,e,i,s,r,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;Nr.copy(a),Nr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:n}}function Ur(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ir),n.getVertexPosition(l,Pr),n.getVertexPosition(c,Lr);let f=vf(n,t,e,i,Ir,Pr,Lr,Rc);if(f){let h=new q;Yn.getBarycoord(Rc,Ir,Pr,Lr,h),s&&(f.uv=Yn.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(f.uv1=Yn.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(f.normal=Yn.getInterpolatedAttribute(o,a,l,c,h,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new q,materialIndex:0};Yn.getNormal(Ir,Pr,Lr,u.normal),f.face=u,f.barycoord=h}return f}var io=class extends Ze{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Be,f=Be,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=new os,Mf=new re(.5,.5),Fr=new q,Hs=class{constructor(t=new vn,e=new vn,i=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],m=r[7],x=r[8],S=r[9],p=r[10],d=r[11],A=r[12],R=r[13],w=r[14],E=r[15];if(s[0].setComponents(c-o,m-f,d-x,E-A).normalize(),s[1].setComponents(c+o,m+f,d+x,E+A).normalize(),s[2].setComponents(c+a,m+h,d+S,E+R).normalize(),s[3].setComponents(c-a,m-h,d-S,E-R).normalize(),i)s[4].setComponents(l,u,p,w).normalize(),s[5].setComponents(c-l,m-u,d-p,E-w).normalize();else if(s[4].setComponents(c-l,m-u,d-p,E-w).normalize(),e===Mn)s[5].setComponents(c+l,m+u,d+p,E+w).normalize();else if(e===Ns)s[5].setComponents(l,u,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);let e=Mf.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Ze{constructor(t=[],e=pi,i,s,r,o,a,l,c,f){super(t,e,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bn=class extends Ze{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Ze{constructor(t,e,i=An,s,r,o,a=Be,l=Be,c,f=Ln,h=1){if(f!==Ln&&f!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},so=class extends ci{constructor(t,e=An,i=pi,s,r,o=Be,a=Be,l,c=Ln){let f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},un=class n extends rn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,m=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(h,2));function x(S,p,d,A,R,w,E,T,D,y,M){let I=w/D,L=E/y,V=w/2,N=E/2,U=T/2,X=D+1,nt=y+1,K=0,ht=0,Q=new q;for(let ot=0;ot<nt;ot++){let lt=ot*L-N;for(let zt=0;zt<X;zt++){let Dt=zt*I-V;Q[S]=Dt*A,Q[p]=lt*R,Q[d]=U,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[p]=0,Q[d]=T>0?1:-1,f.push(Q.x,Q.y,Q.z),h.push(zt/D),h.push(1-ot/y),K+=1}}for(let ot=0;ot<y;ot++)for(let lt=0;lt<D;lt++){let zt=u+lt+X*ot,Dt=u+lt+X*(ot+1),me=u+(lt+1)+X*(ot+1),oe=u+(lt+1)+X*ot;l.push(zt,Dt,oe),l.push(Dt,me,oe),ht+=6}a.addGroup(m,ht,M),m+=ht,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qs=class n extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,m=[],x=[],S=[],p=[];for(let d=0;d<f;d++){let A=d*u-o;for(let R=0;R<c;R++){let w=R*h-r;x.push(w,-A,0),S.push(0,0,1),p.push(R/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let R=A+c*d,w=A+c*(d+1),E=A+1+c*(d+1),T=A+1+c*d;m.push(R,w,T),m.push(w,E,T)}this.setIndex(m),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ni(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ic(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ic(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Xe(n){let t={};for(let e=0;e<n.length;e++){let i=Ni(n[e]);for(let s in i)t[s]=i[s]}return t}function Ic(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Tl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var yh={clone:Ni,merge:Xe},bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Te().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ro=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var oo=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ao=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ji(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Za(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lo=class extends hi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ka,endingEnd:Ka}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ja:r=t,a=2*e-i;break;case Qa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ja:o=t,l=2*i-e;break;case Qa:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-e)/(s-e),S=x*x,p=S*x,d=-u*p+2*u*S-u*x,A=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*x+1,R=(-1-m)*p+(1.5+m)*S+.5*x,w=m*p-m*S;for(let E=0;E!==a;++E)r[E]=d*o[f+E]+A*o[c+E]+R*o[l+E]+w*o[h+E];return r}},co=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(i-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},ho=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uo=class extends hi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,h=this.outTangents;if(!f||!h){let x=(i-e)/(s-e),S=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*S+o[l+p]*x;return r}let u=a*2,m=t-1;for(let x=0;x!==a;++x){let S=o[c+x],p=o[l+x],d=m*u+x*2,A=h[d],R=h[d+1],w=t*u+x*2,E=f[w],T=f[w+1],D=Ef(i,e,A,E,s);r[x]=vh(D,S,R,T,p)}return r}};function vh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Af(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ef(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=vh(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Af(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var on=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ji(e,this.TimeBufferType),this.values=ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ji(t.times,Array),values:ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Za(t.settings)&&(i.settings={inTangents:ji(t.settings.inTangents,Array),outTangents:ji(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case Jr:e=this.InterpolantFactoryMethodLinear;break;case zr:e=this.InterpolantFactoryMethodSmooth;break;case Ja:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Za(this.settings)&&(Pc(this.settings.inTangents,t),Pc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ef(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,u=h-i,m=h+i;for(let x=0;x!==i;++x){let S=e[h+x];if(S!==e[u+x]||S!==e[m+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,u=o*i;for(let m=0;m!==i;++m)e[u+m]=e[h+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Jr;var ui=class extends on{constructor(t,e,i){super(t,e,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ps;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends on{constructor(t,e,i,s){super(t,e,i,s)}};fo.prototype.ValueTypeName="color";var po=class extends on{constructor(t,e,i,s){super(t,e,i,s)}};po.prototype.ValueTypeName="number";var mo=class extends hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ys=class extends on{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends on{constructor(t,e,i){super(t,e,i)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ps;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends on{constructor(t,e,i,s){super(t,e,i,s)}};go.prototype.ValueTypeName="vector";var xo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mh=new xo,_o=class{constructor(t){this.manager=t!==void 0?t:Mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=new q,Br=new Nn,Rn=new q,$s=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Or,Br,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Or,Br,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new q,Lc=new re,Dc=new re,He=class extends $s{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Dc),e.subVectors(Dc,Lc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zs=class extends $s{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Qi=-90,ts=1,yo=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(Qi,ts,t,e);s.layers=this.layers,this.add(s);let r=new He(Qi,ts,t,e);r.layers=this.layers,this.add(r);let o=new He(Qi,ts,t,e);o.layers=this.layers,this.add(o);let a=new He(Qi,ts,t,e);a.layers=this.layers,this.add(a);let l=new He(Qi,ts,t,e);l.layers=this.layers,this.add(l);let c=new He(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,m),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},vo=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cl="\\[\\]\\.:\\/",Tf=new RegExp("["+Cl+"]","g"),Rl="[^"+Cl+"]",Cf="[^"+Cl.replace("\\.","")+"]",Rf=/((?:WC+[\/:])*)/.source.replace("WC",Rl),If=/(WCOD+)?/.source.replace("WCOD",Cf),Pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Df=new RegExp("^"+Rf+If+Pf+Lf+"$"),Nf=["material","materials","bones","map"],tl=class{constructor(t,e,i){let s=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tf,"")}static parseTrackName(t){let e=Df.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Nf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=tl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var Ul=class Ul{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ul.prototype.isMatrix2=!0;var el=Ul;function Il(n,t,e,i){let s=Uf(i);switch(e){case Ml:return n*t;case bl:return n*t/s.components*s.byteLength;case Co:return n*t/s.components*s.byteLength;case xi:return n*t*2/s.components*s.byteLength;case Ro:return n*t*2/s.components*s.byteLength;case Sl:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case Io:return n*t*4/s.components*s.byteLength;case Qs:case tr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lo:case No:return Math.max(n,16)*Math.max(t,8)/4;case Po:case Do:return Math.max(n,8)*Math.max(t,8)/2;case Uo:case Fo:case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case ir:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ta:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ea:case na:case ia:return Math.ceil(n/4)*Math.ceil(t/4)*16;case sa:case ra:return Math.ceil(n/4)*Math.ceil(t/4)*8;case sr:case oa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uf(n){switch(n){case an:case xl:return{byteLength:1,components:1};case cs:case _l:case Tn:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case An:case Ao:case En:return{byteLength:4,components:1};case yl:case vl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hh(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Of(n){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let f=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<h.length;m++){let x=h[u],S=h[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,x=h.length;m<x;m++){let S=h[m];n.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ad=`#define PI 3.141592653589793
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
} // validated`,ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cd=`vec3 transformedNormal = objectNormal;
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
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Id=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Fd=`uniform sampler2D dfgLUT;
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
}`,Od=`
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$d=`#if defined( USE_POINTS_UV )
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
#endif`,Zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,nm=`#define MATCAP
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
}`,im=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,rm=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,am=`#define PHONG
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
}`,lm=`#define STANDARD
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
}`,cm=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,um=`#define TOON
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
}`,fm=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 color;
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
}`,gm=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Bf,alphahash_pars_fragment:zf,alphamap_fragment:kf,alphamap_pars_fragment:Vf,alphatest_fragment:Gf,alphatest_pars_fragment:Hf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:$f,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:Kf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:ed,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:sd,color_pars_vertex:rd,color_vertex:od,common:ad,cube_uv_reflection_fragment:ld,defaultnormal_vertex:cd,displacementmap_pars_vertex:hd,displacementmap_vertex:ud,emissivemap_fragment:fd,emissivemap_pars_fragment:dd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:xd,envmap_pars_fragment:_d,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Id,envmap_vertex:vd,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:bd,fog_pars_fragment:wd,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Ed,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Cd,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Dd,lights_phong_pars_fragment:Nd,lights_physical_fragment:Ud,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,lightprobes_pars_fragment:kd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Wd,map_fragment:Xd,map_pars_fragment:qd,map_particle_fragment:Yd,map_particle_pars_fragment:$d,metalnessmap_fragment:Zd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Kd,morphcolor_vertex:jd,morphnormal_vertex:Qd,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:op,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:fp,packing:dp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:xp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:bp,skinbase_vertex:wp,skinning_pars_vertex:Ap,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:Cp,specularmap_pars_fragment:Rp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Np,uv_pars_vertex:Up,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:zp,backgroundCube_vert:kp,backgroundCube_frag:Vp,cube_vert:Gp,cube_frag:Hp,depth_vert:Wp,depth_frag:Xp,distance_vert:qp,distance_frag:Yp,equirect_vert:$p,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:Kp,meshbasic_vert:jp,meshbasic_frag:Qp,meshlambert_vert:tm,meshlambert_frag:em,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:om,meshphong_frag:am,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:fm,points_frag:dm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:xm},wt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},On={basic:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Xe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Xe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Xe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Xe([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Xe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Xe([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Xe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Xe([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Xe([wt.common,wt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Xe([wt.lights,wt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};On.physical={uniforms:Xe([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var ca={r:0,b:0,g:0},_m=new Te,Wh=new jt;Wh.set(-1,0,0,0,1,0,0,0,1);function ym(n,t,e,i,s,r){let o=new Qt(0),a=s===!0?0:1,l,c,f=null,h=0,u=null;function m(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let w=A.backgroundBlurriness>0;R=t.get(R,w)}return R}function x(A){let R=!1,w=m(A);w===null?p(o,a):w&&w.isColor&&(p(w,1),R=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(A,R){let w=m(R);w&&(w.isCubeTexture||w.mapping===Ks)?(c===void 0&&(c=new Re(new un(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ni(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(R.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wh),c.material.toneMapped=le.getTransfer(w.colorSpace)!==pe,(f!==w||h!==w.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Re(new qs(2,2),new We({name:"BackgroundMaterial",uniforms:Ni(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=le.getTransfer(w.colorSpace)!==pe,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,u=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function p(A,R){A.getRGB(ca,Tl(n)),e.buffers.color.setClear(ca.r,ca.g,ca.b,R,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),a=R,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,p(o,a)},render:x,addToRenderList:S,dispose:d}}function vm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(L,V,N,U,X){let nt=!1,K=h(L,U,N,V);r!==K&&(r=K,c(r.object)),nt=m(L,U,N,X),nt&&x(L,U,N,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,w(L,V,N,U),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function f(L){return n.deleteVertexArray(L)}function h(L,V,N,U){let X=U.wireframe===!0,nt=i[V.id];nt===void 0&&(nt={},i[V.id]=nt);let K=L.isInstancedMesh===!0?L.id:0,ht=nt[K];ht===void 0&&(ht={},nt[K]=ht);let Q=ht[N.id];Q===void 0&&(Q={},ht[N.id]=Q);let ot=Q[X];return ot===void 0&&(ot=u(l()),Q[X]=ot),ot}function u(L){let V=[],N=[],U=[];for(let X=0;X<e;X++)V[X]=0,N[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:N,attributeDivisors:U,object:L,attributes:{},index:null}}function m(L,V,N,U){let X=r.attributes,nt=V.attributes,K=0,ht=N.getAttributes();for(let Q in ht)if(ht[Q].location>=0){let lt=X[Q],zt=nt[Q];if(zt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(zt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(zt=L.instanceColor)),lt===void 0||lt.attribute!==zt||zt&&lt.data!==zt.data)return!0;K++}return r.attributesNum!==K||r.index!==U}function x(L,V,N,U){let X={},nt=V.attributes,K=0,ht=N.getAttributes();for(let Q in ht)if(ht[Q].location>=0){let lt=nt[Q];lt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor));let zt={};zt.attribute=lt,lt&&lt.data&&(zt.data=lt.data),X[Q]=zt,K++}r.attributes=X,r.attributesNum=K,r.index=U}function S(){let L=r.newAttributes;for(let V=0,N=L.length;V<N;V++)L[V]=0}function p(L){d(L,0)}function d(L,V){let N=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;N[L]=1,U[L]===0&&(n.enableVertexAttribArray(L),U[L]=1),X[L]!==V&&(n.vertexAttribDivisor(L,V),X[L]=V)}function A(){let L=r.newAttributes,V=r.enabledAttributes;for(let N=0,U=V.length;N<U;N++)V[N]!==L[N]&&(n.disableVertexAttribArray(N),V[N]=0)}function R(L,V,N,U,X,nt,K){K===!0?n.vertexAttribIPointer(L,V,N,X,nt):n.vertexAttribPointer(L,V,N,U,X,nt)}function w(L,V,N,U){S();let X=U.attributes,nt=N.getAttributes(),K=V.defaultAttributeValues;for(let ht in nt){let Q=nt[ht];if(Q.location>=0){let ot=X[ht];if(ot===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(ot=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(ot=L.instanceColor)),ot!==void 0){let lt=ot.normalized,zt=ot.itemSize,Dt=t.get(ot);if(Dt===void 0)continue;let me=Dt.buffer,oe=Dt.type,ne=Dt.bytesPerElement,J=oe===n.INT||oe===n.UNSIGNED_INT||ot.gpuType===Ao;if(ot.isInterleavedBufferAttribute){let at=ot.data,At=at.stride,qt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Q.locationSize;Tt++)d(Q.location+Tt,at.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Tt=0;Tt<Q.locationSize;Tt++)p(Q.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Tt=0;Tt<Q.locationSize;Tt++)R(Q.location+Tt,zt/Q.locationSize,oe,lt,At*ne,(qt+zt/Q.locationSize*Tt)*ne,J)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<Q.locationSize;at++)d(Q.location+at,ot.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<Q.locationSize;at++)p(Q.location+at);n.bindBuffer(n.ARRAY_BUFFER,me);for(let at=0;at<Q.locationSize;at++)R(Q.location+at,zt/Q.locationSize,oe,lt,zt*ne,zt/Q.locationSize*at*ne,J)}}else if(K!==void 0){let lt=K[ht];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(Q.location,lt);break;case 3:n.vertexAttrib3fv(Q.location,lt);break;case 4:n.vertexAttrib4fv(Q.location,lt);break;default:n.vertexAttrib1fv(Q.location,lt)}}}}A()}function E(){M();for(let L in i){let V=i[L];for(let N in V){let U=V[N];for(let X in U){let nt=U[X];for(let K in nt)f(nt[K].object),delete nt[K];delete U[X]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;let V=i[L.id];for(let N in V){let U=V[N];for(let X in U){let nt=U[X];for(let K in nt)f(nt[K].object),delete nt[K];delete U[X]}}delete i[L.id]}function D(L){for(let V in i){let N=i[V];for(let U in N){let X=N[U];if(X[L.id]===void 0)continue;let nt=X[L.id];for(let K in nt)f(nt[K].object),delete nt[K];delete X[L.id]}}}function y(L){for(let V in i){let N=i[V],U=L.isInstancedMesh===!0?L.id:0,X=N[U];if(X!==void 0){for(let nt in X){let K=X[nt];for(let ht in K)f(K[ht].object),delete K[ht];delete X[nt]}delete N[U],Object.keys(N).length===0&&delete i[V]}}}function M(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:p,disableUnusedAttributes:A}}function Mm(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),e.update(c,i,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==dn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let y=D===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==an&&D!==En&&!y&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:w,maxSamples:E,samples:T}}function bm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new vn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let m=h.length!==0||u||i!==0||s;return s=u,i=h.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,m){let x=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||x===null||x.length===0||r&&!p)r?f(null):c();else{let A=r?0:i,R=A*4,w=d.clippingState||null;l.value=w,w=f(x,u,R,m);for(let E=0;E!==R;++E)w[E]=e[E];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,m,x){let S=h!==null?h.length:0,p=null;if(S!==0){if(p=l.value,x!==!0||p===null){let d=m+S*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let R=0,w=m;R!==S;++R,w+=4)o.copy(h[R]).applyMatrix4(A,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var fs=4,wm=6,Am=20,Em=256,rr=new Zs,Sh=new Qt,Fl=null,Ol=0,Bl=0,zl=!1,Tm=new q,Ui=new q,ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Tm}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=zl,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Tn,format:dn,colorSpace:Ls,depthBuffer:!1},s=bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cm(r)),this._blurMaterial=Im(r,t,e),this._ggxMaterial=Rm(r,t,e)}return s}_compileMaterial(t){let e=new Re(new rn,t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,i,s,r){let l=new He(90,1,e,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Sh),h.toneMapping=wn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new un,new Sn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,d=!1,A=t.background;A?A.isColor&&(p.color.copy(A),t.background=null,d=!0):(p.color.copy(Sh),d=!0);for(let R=0;R<6;R++){let w=R%3;w===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[R],r.y,r.z)):w===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[R]));let E=this._cubeSize;us(s,w*E,R>2?E:0,E,E),h.setRenderTarget(s),d&&h.render(S,l),h.render(t,l)}h.toneMapping=m,h.autoClear=u,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===pi||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;us(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,rr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,m=h*u,{_lodMax:x}=this,S=this._sizeLods[i],p=3*S*(i>x-fs?i-x+fs:0),d=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,us(r,p,d,3*S,2*S),s.setRenderTarget(r),s.render(a,rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,us(t,p,d,3*S,2*S),s.setRenderTarget(t),s.render(a,rr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-fs?s-this._lodMax+fs:0),u=4*(this._cubeSize-f);us(e,h,u,3*f,2*f),o.setRenderTarget(e),o.render(l,rr)}};function Cm(n){let t=[],e=[],i=n,s=n-fs+1+wm;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,m=3,x=new Float32Array(m*u*h),S=new Float32Array(m*u*h);for(let d=0;d<h;d++){let A=d%3*2/3-1,R=d>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(w,m*u*d);for(let E=0;E<u;E++){let T=f[E*2]*2-1,D=f[E*2+1]*2-1;d===0?Ui.set(1,D,T):d===1?Ui.set(-T,1,-D):d===2?Ui.set(-T,D,1):d===3?Ui.set(-1,D,-T):d===4?Ui.set(-T,-1,D):Ui.set(T,D,-1),Ui.toArray(S,(d*u+E)*m)}}let p=new rn;p.setAttribute("position",new De(x,m)),p.setAttribute("outputDirection",new De(S,m)),e.push(new Re(p,null)),i>fs&&i--}return{lodMeshes:e,sizeLods:t}}function bh(n,t,e){let i=new Qe(n,t,e);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Rm(n,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Em,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Im(n,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:Am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function wh(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ah(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fa=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ws(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Un});r.uniforms.tEquirect.value=e;let o=new Re(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=Pe),new yo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Pm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===So||m===bo)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let S=new fa(x.height);return S.fromEquirectangularTexture(n,u),t.set(u,S),u.addEventListener("dispose",c),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let m=u.mapping,x=m===So||m===bo,S=m===pi||m===Di;if(x||S){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new ua(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let A=u.image;return x&&A&&A.height>0||S&&A&&l(A)?(i===null&&(i=new ua(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",f),p.texture):null}}}return u}function a(u,m){return m===So?u.mapping=pi:m===bo&&(u.mapping=Di),u}function l(u){let m=0,x=6;for(let S=0;S<x;S++)u[S]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(u){let m=u.target;m.removeEventListener("dispose",f);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Lm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ii("WebGLRenderer: "+i+" extension not supported."),s}}}function Dm(n,t,e,i){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let m in u)t.update(u[m],n.ARRAY_BUFFER)}function c(h){let u=[],m=h.index,x=h.attributes.position,S=0;if(x===void 0)return;if(m!==null){let A=m.array;S=m.version;for(let R=0,w=A.length;R<w;R+=3){let E=A[R+0],T=A[R+1],D=A[R+2];u.push(E,T,T,D,D,E)}}else{let A=x.array;S=x.version;for(let R=0,w=A.length/3-1;R<w;R+=3){let E=R+0,T=R+1,D=R+2;u.push(E,T,T,D,D,E)}}let p=new(x.count>=65535?Vs:ks)(u,1);p.version=S;let d=r.get(h);d&&t.remove(d),r.set(h,p)}function f(h){let u=r.get(h);if(u){let m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Nm(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){n.drawElements(i,u,r,h*o),e.update(u,i,1)}function c(h,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,h*o,m),e.update(u,i,m))}function f(h,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];e.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Um(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,t,e){let i=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(a);if(u===void 0||u.count!==h){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],R=0;m===!0&&(R=1),x===!0&&(R=2),S===!0&&(R=3);let w=a.attributes.position.count*R,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let T=new Float32Array(w*E*4*h),D=new Os(T,w,E,h);D.type=En,D.needsUpdate=!0;let y=R*4;for(let I=0;I<h;I++){let L=p[I],V=d[I],N=A[I],U=w*E*4*I;for(let X=0;X<L.count;X++){let nt=X*y;m===!0&&(s.fromBufferAttribute(L,X),T[U+nt+0]=s.x,T[U+nt+1]=s.y,T[U+nt+2]=s.z,T[U+nt+3]=0),x===!0&&(s.fromBufferAttribute(V,X),T[U+nt+4]=s.x,T[U+nt+5]=s.y,T[U+nt+6]=s.z,T[U+nt+7]=0),S===!0&&(s.fromBufferAttribute(N,X),T[U+nt+8]=s.x,T[U+nt+9]=s.y,T[U+nt+10]=s.z,T[U+nt+11]=N.itemSize===4?s.w:1)}}u={count:h,texture:D,size:new re(w,E)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Om(n,t,e,i,s){let r=new WeakMap;function o(c){let f=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return u}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var Bm={[cl]:"LINEAR_TONE_MAPPING",[hl]:"REINHARD_TONE_MAPPING",[ul]:"CINEON_TONE_MAPPING",[fl]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[ml]:"NEUTRAL_TONE_MAPPING",[dl]:"CUSTOM_TONE_MAPPING"};function zm(n,t,e,i,s,r){let o=new Qe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new rn;c.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new hn([0,2,0,0,2,0],2));let f=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Re(c,f),u=new Zs(-1,1,1,-1,0,1),m=null,x=null,S=!1,p,d=null,A=[],R=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let T=0;T<A.length;T++){let D=A[T];D.setSize&&D.setSize(w,E)}},this.setEffects=function(w){A=w,R=A.length>0&&A[0].isRenderPass===!0;let E=o.width,T=o.height;A.length>0&&a===null&&(a=new Qe(E,T,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(E,T,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<A.length;D++){let y=A[D];y.setSize&&y.setSize(E,T)}},this.begin=function(w,E){if(S||w.toneMapping===wn&&A.length===0)return!1;if(d=E,E!==null){let T=E.width,D=E.height;(o.width!==T||o.height!==D)&&this.setSize(T,D)}return R===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=wn,!0},this.hasRenderPass=function(){return R},this.end=function(w,E){w.toneMapping=p,S=!0;let T=o,D=a;for(let y=0;y<A.length;y++){let M=A[y];M.enabled!==!1&&(M.render(w,D,T,E),M.needsSwap!==!1&&(T=D,D=D===a?l:a))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,f.defines={},le.getTransfer(m)===pe&&(f.defines.SRGB_TRANSFER="");let y=Bm[x];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(d),w.render(h,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Xh=new Ze,Gl=new ci(1,1),qh=new Os,Yh=new to,$h=new Ws,Eh=[],Th=[],Ch=new Float32Array(16),Rh=new Float32Array(9),Ih=new Float32Array(4);function ps(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ma(n,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function km(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function Wm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Ih.set(i),n.uniformMatrix2fv(this.addr,!1,Ih),Ue(e,i)}}function Xm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Rh.set(i),n.uniformMatrix3fv(this.addr,!1,Rh),Ue(e,i)}}function qm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ue(e,i)}}function Ym(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $m(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function Zm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function Jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function Km(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function t0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function e0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gl.compareFunction=e.isReversedDepthBuffer()?la:aa,r=Gl):r=Xh,e.setTexture2D(t||r,s)}function n0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yh,s)}function i0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$h,s)}function s0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qh,s)}function r0(n){switch(n){case 5126:return km;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return $m;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Km;case 36294:return jm;case 36295:return Qm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(n,t){n.uniform1fv(this.addr,t)}function a0(n,t){let e=ps(t,this.size,2);n.uniform2fv(this.addr,e)}function l0(n,t){let e=ps(t,this.size,3);n.uniform3fv(this.addr,e)}function c0(n,t){let e=ps(t,this.size,4);n.uniform4fv(this.addr,e)}function h0(n,t){let e=ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function u0(n,t){let e=ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function f0(n,t){let e=ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function d0(n,t){n.uniform1iv(this.addr,t)}function p0(n,t){n.uniform2iv(this.addr,t)}function m0(n,t){n.uniform3iv(this.addr,t)}function g0(n,t){n.uniform4iv(this.addr,t)}function x0(n,t){n.uniform1uiv(this.addr,t)}function _0(n,t){n.uniform2uiv(this.addr,t)}function y0(n,t){n.uniform3uiv(this.addr,t)}function v0(n,t){n.uniform4uiv(this.addr,t)}function M0(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gl:o=Xh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function S0(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yh,r[o])}function b0(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$h,r[o])}function w0(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qh,r[o])}function A0(n){switch(n){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return _0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}var Hl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=r0(e.type)}},Wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A0(e.type)}},Xl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Ph(n,t){n.seq.push(t),n.map[t.id]=t}function E0(n,t,e){let i=n.name,s=i.length;for(kl.lastIndex=0;;){let r=kl.exec(i),o=kl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ph(e,c===void 0?new Hl(a,n,t):new Wl(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Xl(a),Ph(e,h)),e=h}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);E0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Lh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var T0=37297,C0=0;function R0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Dh=new jt;function I0(n){le._getMatrix(Dh,le.workingColorSpace,n);let t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case Ds:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+R0(n.getShaderSource(t),a)}else return r}function P0(n,t){let e=I0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var L0={[cl]:"Linear",[hl]:"Reinhard",[ul]:"Cineon",[fl]:"ACESFilmic",[pl]:"AgX",[ml]:"Neutral",[dl]:"Custom"};function D0(n,t){let e=L0[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ha=new q;function N0(){le.getLuminanceCoefficients(ha);let n=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function F0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function O0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ar(n){return n!==""}function Uh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(B0,k0)}var z0=new Map;function k0(n,t){let e=se[t];if(e===void 0){let i=z0.get(t);if(i!==void 0)e=se[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ql(e)}var V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(V0,G0)}function G0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var H0={[Js]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function W0(n){return H0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X0={[pi]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function q0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":X0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Y0={[Di]:"ENVMAP_MODE_REFRACTION"};function $0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Y0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z0={[ll]:"ENVMAP_BLENDING_MULTIPLY",[eh]:"ENVMAP_BLENDING_MIX",[nh]:"ENVMAP_BLENDING_ADD"};function J0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Z0[n.combine]||"ENVMAP_BLENDING_NONE"}function K0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function j0(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=W0(e),c=q0(e),f=$0(e),h=J0(e),u=K0(e),m=U0(e),x=F0(r),S=s.createProgram(),p,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ar).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ar).join(`
`),d.length>0&&(d+=`
`)):(p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),d=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?se.tonemapping_pars_fragment:"",e.toneMapping!==wn?D0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,P0("linearToOutputTexel",e.outputColorSpace),N0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=ql(o),o=Uh(o,e),o=Fh(o,e),a=ql(a),a=Uh(a,e),a=Fh(a,e),o=Oh(o),a=Oh(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=A+p+o,w=A+d+a,E=Lh(s,s.VERTEX_SHADER,R),T=Lh(s,s.FRAGMENT_SHADER,w);s.attachShader(S,E),s.attachShader(S,T),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function D(L){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(S)||"",N=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(T)||"",X=V.trim(),nt=N.trim(),K=U.trim(),ht=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ht=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,E,T);else{let ot=Nh(s,E,"vertex"),lt=Nh(s,T,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ot+`
`+lt)}else X!==""?Wt("WebGLProgram: Program Info Log:",X):(nt===""||K==="")&&(Q=!1);Q&&(L.diagnostics={runnable:ht,programLog:X,vertexShader:{log:nt,prefix:p},fragmentShader:{log:K,prefix:d}})}s.deleteShader(E),s.deleteShader(T),y=new ds(s,S),M=O0(s,S)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(S,T0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=T,this}var Q0=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $l(t),e.set(t,i)),i}},$l=class{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}};function tg(n){return n===xi||n===ir||n===sr}function eg(n,t,e,i,s,r){let o=new Bs,a=new Yl,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,M,I,L,V,N){let U=L.fog,X=V.geometry,nt=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ht=t.get(y.envMap||nt,K),Q=ht&&ht.mapping===Ks?ht.image.height:null,ot=m[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,zt=lt!==void 0?lt.length:0,Dt=0;X.morphAttributes.position!==void 0&&(Dt=1),X.morphAttributes.normal!==void 0&&(Dt=2),X.morphAttributes.color!==void 0&&(Dt=3);let me,oe,ne,J;if(ot){let ge=On[ot];me=ge.vertexShader,oe=ge.fragmentShader}else{me=y.vertexShader,oe=y.fragmentShader;let ge=a.getVertexShaderStage(y),Vt=a.getFragmentShaderStage(y);a.update(y,ge,Vt),ne=ge.id,J=Vt.id}let at=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),qt=V.isInstancedMesh===!0,Tt=V.isBatchedMesh===!0,te=!!y.map,$t=!!y.matcap,Nt=!!ht,ae=!!y.aoMap,Zt=!!y.lightMap,Yt=!!y.bumpMap&&y.wireframe===!1,de=!!y.normalMap,we=!!y.displacementMap,ze=!!y.emissiveMap,ye=!!y.metalnessMap,ve=!!y.roughnessMap,z=y.anisotropy>0,Fe=y.clearcoat>0,ue=y.dispersion>0,P=y.retroreflectivity>0,_=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,tt=z&&!!y.anisotropyMap,pt=Fe&&!!y.clearcoatMap,mt=Fe&&!!y.clearcoatNormalMap,it=Fe&&!!y.clearcoatRoughnessMap,rt=_&&!!y.iridescenceMap,_t=_&&!!y.iridescenceThicknessMap,Ft=G&&!!y.sheenColorMap,vt=G&&!!y.sheenRoughnessMap,gt=!!y.specularMap,Ot=!!y.specularColorMap,kt=!!y.specularIntensityMap,Jt=Y&&!!y.transmissionMap,B=Y&&!!y.thicknessMap,xt=!!y.gradientMap,st=!!y.alphaMap,yt=y.alphaTest>0,bt=!!y.alphaHash,ct=!!y.extensions,Bt=wn;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Bt=n.toneMapping);let It={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:oe,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&V._colorsTexture!==null,instancing:qt,instancingColor:qt&&V.instanceColor!==null,instancingMorph:qt&&V.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:$t,envMap:Nt,envMapMode:Nt&&ht.mapping,envMapCubeUVHeight:Q,aoMap:ae,lightMap:Zt,bumpMap:Yt,normalMap:de,displacementMap:we,emissiveMap:ze,normalMapObjectSpace:de&&y.normalMapType===rh,normalMapTangentSpace:de&&y.normalMapType===wl,packedNormalMap:de&&y.normalMapType===wl&&tg(y.normalMap.format),metalnessMap:ye,roughnessMap:ve,anisotropy:z,anisotropyMap:tt,clearcoat:Fe,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:it,dispersion:ue,retroreflection:P,iridescence:_,iridescenceMap:rt,iridescenceThicknessMap:_t,sheen:G,sheenColorMap:Ft,sheenRoughnessMap:vt,specularMap:gt,specularColorMap:Ot,specularIntensityMap:kt,transmission:Y,transmissionMap:Jt,thicknessMap:B,gradientMap:xt,opaque:y.transparent===!1&&y.blending===ls&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:bt,combine:y.combine,mapUv:te&&x(y.map.channel),aoMapUv:ae&&x(y.aoMap.channel),lightMapUv:Zt&&x(y.lightMap.channel),bumpMapUv:Yt&&x(y.bumpMap.channel),normalMapUv:de&&x(y.normalMap.channel),displacementMapUv:we&&x(y.displacementMap.channel),emissiveMapUv:ze&&x(y.emissiveMap.channel),metalnessMapUv:ye&&x(y.metalnessMap.channel),roughnessMapUv:ve&&x(y.roughnessMap.channel),anisotropyMapUv:tt&&x(y.anisotropyMap.channel),clearcoatMapUv:pt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(y.sheenRoughnessMap.channel),specularMapUv:gt&&x(y.specularMap.channel),specularColorMapUv:Ot&&x(y.specularColorMap.channel),specularIntensityMapUv:kt&&x(y.specularIntensityMap.channel),transmissionMapUv:Jt&&x(y.transmissionMap.channel),thicknessMapUv:B&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(de||z),vertexNormals:!!X.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(te||st),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&de===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:At,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Dt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&le.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&le.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===Je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(d(M,y),A(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function d(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numSunLights),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numSunLightShadows),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function A(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let M=m[y.type],I;if(M){let L=On[M];I=yh.clone(L.uniforms)}else I=y.uniforms;return I}function w(y,M){let I=f.get(M);return I!==void 0?++I.usedTimes:(I=new j0(n,M,y,s),c.push(I),f.set(M,I)),I}function E(y){if(--y.usedTimes===0){let M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function D(){a.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:R,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:D}}function ng(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ig(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function zh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,x,S,p,d){let A=n[t];return A===void 0?(A={id:u.id,object:u,geometry:m,material:x,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:d},n[t]=A):(A.id=u.id,A.object=u,A.geometry=m,A.material=x,A.materialVariant=o(u),A.groupOrder=S,A.renderOrder=u.renderOrder,A.z=p,A.group=d),t++,A}function l(u,m,x,S,p,d,A){A.reversedDepth===!0&&(p=-p);let R=a(u,m,x,S,p,d);x.transmission>0?i.push(R):x.transparent===!0?s.push(R):e.push(R)}function c(u,m,x,S,p,d){let A=a(u,m,x,S,p,d);x.transmission>0?i.unshift(A):x.transparent===!0?s.unshift(A):e.unshift(A)}function f(u,m){e.length>1&&e.sort(u||ig),i.length>1&&i.sort(m||zh),s.length>1&&s.sort(m||zh)}function h(){for(let u=t,m=n.length;u<m;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function sg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new kh,n.set(i,[o])):s>=r.length?(o=new kh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function rg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Qt};break;case"SpotLight":e={position:new q,direction:new q,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function og(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ag=0;function lg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cg(n){let t=new rg,e=og(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);let s=new q,r=new Te,o=new Te;function a(c){let f=0,h=0,u=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,x=0,S=0,p=0,d=0,A=0,R=0,w=0,E=0,T=0,D=0,y=0,M=0,I=0;c.sort(lg);for(let V=0,N=c.length;V<N;V++){let U=c[V],X=U.color,nt=U.intensity,K=U.distance,ht=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===xi?ht=U.shadow.map.texture:ht=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=X.r*nt,h+=X.g*nt,u+=X.b*nt;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(U.sh.coefficients[Q],nt);I++}else if(U.isSunLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ot=U.shadow,lt=e.get(U);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[x]=lt,i.sunShadowMap[x]=ht;let zt=ot.getViewportCount();for(let Dt=0;Dt<zt;Dt++)i.sunShadowMatrix[S+Dt]=ot.getMatrix(Dt),i.sunShadowCascade[S+Dt]=ot._cascadeData[Dt];S+=zt,x++}i.sun[m]=Q,m++}else if(U.isDirectionalLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ot=U.shadow,lt=e.get(U);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,i.directionalShadow[p]=lt,i.directionalShadowMap[p]=ht,i.directionalShadowMatrix[p]=U.shadow.matrix,E++}i.directional[p]=Q,p++}else if(U.isSpotLight){let Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(X).multiplyScalar(nt),Q.distance=K,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,i.spot[A]=Q;let ot=U.shadow;if(U.map&&(i.spotLightMap[y]=U.map,y++,ot.updateMatrices(U),U.castShadow&&M++),i.spotLightMatrix[A]=ot.matrix,U.castShadow){let lt=e.get(U);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,i.spotShadow[A]=lt,i.spotShadowMap[A]=ht,D++}A++}else if(U.isRectAreaLight){let Q=t.get(U);Q.color.copy(X).multiplyScalar(nt),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),i.rectArea[R]=Q,R++}else if(U.isPointLight){let Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){let ot=U.shadow,lt=e.get(U);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,lt.shadowCameraNear=ot.camera.near,lt.shadowCameraFar=ot.camera.far,i.pointShadow[d]=lt,i.pointShadowMap[d]=ht,i.pointShadowMatrix[d]=U.shadow.matrix,T++}i.point[d]=Q,d++}else if(U.isHemisphereLight){let Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(nt),Q.groundColor.copy(U.groundColor).multiplyScalar(nt),i.hemi[w]=Q,w++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let L=i.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==d||L.spotLength!==A||L.rectAreaLength!==R||L.hemiLength!==w||L.numSunShadows!==x||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==D||L.numSpotMaps!==y||L.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=p,i.spot.length=A,i.rectArea.length=R,i.point.length=d,i.hemi.length=w,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+y-M,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=I,L.sunLength=m,L.directionalLength=p,L.pointLength=d,L.spotLength=A,L.rectAreaLength=R,L.hemiLength=w,L.numSunShadows=x,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=D,L.numSpotMaps=y,L.numLightProbes=I,i.version=ag++)}function l(c,f){let h=0,u=0,m=0,x=0,S=0,p=0,d=f.matrixWorldInverse;for(let A=0,R=c.length;A<R;A++){let w=c[A];if(w.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),h++}else if(w.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(w.isSpotLight){let E=i.spot[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),x++}else if(w.isRectAreaLight){let E=i.rectArea[S];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(w.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(w.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:i}}function Vh(n){let t=new cg(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function f(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function hg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vh(n),t.set(s,[a])):r>=o.length?(a=new Vh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`,dg=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],pg=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Gh=new Te,or=new q,Vl=new q;function mg(n,t,e){let i=new Hs,s=new re,r=new re,o=new Ee,a=new oo,l=new ao,c={},f=e.maxTextureSize,h={[di]:Je,[Je]:di,[fn]:fn},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:ug,fragmentShader:fg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new rn;x.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Re(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let d=this.type;this.render=function(T,D,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Fc&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let M=n.getRenderTarget(),I=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Un),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let N=d!==this.type;N&&D.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(X=>X.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,X=T.length;U<X;U++){let nt=T[U],K=nt.shadow;if(K===void 0){Wt("WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ht=K.getFrameExtents();s.multiply(ht),r.copy(K.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ht.x),s.x=r.x*ht.x,K.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ht.y),s.y=r.y*ht.y,K.mapSize.y=r.y));let Q=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Q,K.map===null||N===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===as){if(nt.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Qe(s.x,s.y,{format:xi,type:Tn,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),K.map.texture.name=nt.name+".shadowMap",K.map.depthTexture=new ci(s.x,s.y,En),K.map.depthTexture.name=nt.name+".shadowMapDepth",K.map.depthTexture.format=Ln,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Be,K.map.depthTexture.magFilter=Be}else nt.isPointLight?(K.map=new fa(s.x),K.map.depthTexture=new so(s.x,An)):(K.map=new Qe(s.x,s.y),K.map.depthTexture=new ci(s.x,s.y,An)),K.map.depthTexture.name=nt.name+".shadowMap",K.map.depthTexture.format=Ln,this.type===Js?(K.map.depthTexture.compareFunction=Q?la:aa,K.map.depthTexture.minFilter=Pe,K.map.depthTexture.magFilter=Pe):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Be,K.map.depthTexture.magFilter=Be);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ot=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();nt.isPointLight!==!0&&K.updateMatrices(nt,y);for(let lt=0;lt<ot;lt++){let zt=K.getCamera(lt);if(nt.isPointLight){let Dt=K.camera,me=K.matrix,oe=nt.distance||Dt.far;oe!==Dt.far&&(Dt.far=oe,Dt.updateProjectionMatrix()),or.setFromMatrixPosition(nt.matrixWorld),Dt.position.copy(or),Vl.copy(Dt.position),Vl.add(dg[lt]),Dt.up.copy(pg[lt]),Dt.lookAt(Vl),Dt.updateMatrixWorld(),me.makeTranslation(-or.x,-or.y,-or.z),Gh.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Gh,Dt.coordinateSystem,Dt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,lt),n.clear();else{lt===0&&(n.setRenderTarget(K.map),n.clear());let Dt=K.getViewport(lt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),V.viewport(o)}i=K.getFrustum(lt),w(D,y,zt,nt,this.type)}K.isPointLightShadow!==!0&&this.type===as&&A(K,y),K.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,I,L)};function A(T,D){let y=t.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qe(s.x,s.y,{format:xi,type:Tn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,y,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,y,m,S,null)}function R(T,D,y,M){let I=null,L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)I=L;else if(I=y.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=I.uuid,N=D.uuid,U=c[V];U===void 0&&(U={},c[V]=U);let X=U[N];X===void 0&&(X=I.clone(),U[N]=X,D.addEventListener("dispose",E)),I=X}if(I.visible=D.visible,I.wireframe=D.wireframe,M===as?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:h[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let V=n.properties.get(I);V.light=y}return I}function w(T,D,y,M,I){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===as)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let N=t.update(T),U=T.material;if(Array.isArray(U)){let X=N.groups;for(let nt=0,K=X.length;nt<K;nt++){let ht=X[nt],Q=U[ht.materialIndex];if(Q&&Q.visible){let ot=R(T,Q,M,I);T.onBeforeShadow(n,T,D,y,N,ot,ht),n.renderBufferDirect(y,null,N,ot,T,ht),T.onAfterShadow(n,T,D,y,N,ot,ht)}}}else if(U.visible){let X=R(T,U,M,I);T.onBeforeShadow(n,T,D,y,N,X,null),n.renderBufferDirect(y,null,N,X,T,null),T.onAfterShadow(n,T,D,y,N,X,null)}}let V=T.children;for(let N=0,U=V.length;N<U;N++)w(V[N],D,y,M,I)}function E(T){T.target.removeEventListener("dispose",E);for(let y in c){let M=c[y],I=T.target.uuid;I in M&&(M[I].dispose(),delete M[I])}}}function gg(n,t){function e(){let B=!1,xt=new Ee,st=null,yt=new Ee(0,0,0,0);return{setMask:function(bt){st!==bt&&!B&&(n.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){B=bt},setClear:function(bt,ct,Bt,It,ge){ge===!0&&(bt*=It,ct*=It,Bt*=It),xt.set(bt,ct,Bt,It),yt.equals(xt)===!1&&(n.clearColor(bt,ct,Bt,It),yt.copy(xt))},reset:function(){B=!1,st=null,yt.set(-1,0,0,0)}}}function i(){let B=!1,xt=!1,st=null,yt=null,bt=null;return{setReversed:function(ct){if(xt!==ct){let Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),xt=ct;let It=bt;bt=null,this.setClear(It)}},getReversed:function(){return xt},setTest:function(ct){ct?at(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ct){st!==ct&&!B&&(n.depthMask(ct),st=ct)},setFunc:function(ct){if(xt&&(ct=gh[ct]),yt!==ct){switch(ct){case Vr:n.depthFunc(n.NEVER);break;case Gr:n.depthFunc(n.ALWAYS);break;case Hr:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case Wr:n.depthFunc(n.EQUAL);break;case Xr:n.depthFunc(n.GEQUAL);break;case qr:n.depthFunc(n.GREATER);break;case Yr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=ct}},setLocked:function(ct){B=ct},setClear:function(ct){bt!==ct&&(bt=ct,xt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){B=!1,st=null,yt=null,bt=null,xt=!1}}}function s(){let B=!1,xt=null,st=null,yt=null,bt=null,ct=null,Bt=null,It=null,ge=null;return{setTest:function(Vt){B||(Vt?at(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(Vt){xt!==Vt&&!B&&(n.stencilMask(Vt),xt=Vt)},setFunc:function(Vt,qe,tn){(st!==Vt||yt!==qe||bt!==tn)&&(n.stencilFunc(Vt,qe,tn),st=Vt,yt=qe,bt=tn)},setOp:function(Vt,qe,tn){(ct!==Vt||Bt!==qe||It!==tn)&&(n.stencilOp(Vt,qe,tn),ct=Vt,Bt=qe,It=tn)},setLocked:function(Vt){B=Vt},setClear:function(Vt){ge!==Vt&&(n.clearStencil(Vt),ge=Vt)},reset:function(){B=!1,xt=null,st=null,yt=null,bt=null,ct=null,Bt=null,It=null,ge=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},m=new WeakMap,x=[],S=null,p=!1,d=null,A=null,R=null,w=null,E=null,T=null,D=null,y=new Qt(0,0,0),M=0,I=!1,L=null,V=null,N=null,U=null,X=null,nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ht=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=ht>=1):Q.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=ht>=2);let ot=null,lt={},zt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),me=new Ee().fromArray(zt),oe=new Ee().fromArray(Dt);function ne(B,xt,st,yt){let bt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(B,ct),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<st;Bt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(xt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return ct}let J={};J[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(n.DEPTH_TEST),o.setFunc(ns),Yt(!1),de(nl),at(n.CULL_FACE),ae(Un);function at(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function At(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function qt(B,xt){return u[B]!==xt?(n.bindFramebuffer(B,xt),u[B]=xt,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xt),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(B,xt){let st=x,yt=!1;if(B){st=m.get(xt),st===void 0&&(st=[],m.set(xt,st));let bt=B.textures;if(st.length!==bt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Bt=bt.length;ct<Bt;ct++)st[ct]=n.COLOR_ATTACHMENT0+ct;st.length=bt.length,yt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,yt=!0);yt&&n.drawBuffers(st)}function te(B){return S!==B?(n.useProgram(B),S=B,!0):!1}let $t={[Li]:n.FUNC_ADD,[Bc]:n.FUNC_SUBTRACT,[zc]:n.FUNC_REVERSE_SUBTRACT};$t[kc]=n.MIN,$t[Vc]=n.MAX;let Nt={[Gc]:n.ZERO,[Hc]:n.ONE,[Wc]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[Jc]:n.SRC_ALPHA_SATURATE,[$c]:n.DST_COLOR,[qc]:n.DST_ALPHA,[Xc]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[Zc]:n.ONE_MINUS_DST_COLOR,[Yc]:n.ONE_MINUS_DST_ALPHA,[Kc]:n.CONSTANT_COLOR,[jc]:n.ONE_MINUS_CONSTANT_COLOR,[Qc]:n.CONSTANT_ALPHA,[th]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(B,xt,st,yt,bt,ct,Bt,It,ge,Vt){if(B===Un){p===!0&&(At(n.BLEND),p=!1);return}if(p===!1&&(at(n.BLEND),p=!0),B!==Oc){if(B!==d||Vt!==I){if((A!==Li||E!==Li)&&(n.blendEquation(n.FUNC_ADD),A=Li,E=Li),Vt)switch(B){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.ONE,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",B);break}else switch(B){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sl:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",B);break}R=null,w=null,T=null,D=null,y.set(0,0,0),M=0,d=B,I=Vt}return}bt=bt||xt,ct=ct||st,Bt=Bt||yt,(xt!==A||bt!==E)&&(n.blendEquationSeparate($t[xt],$t[bt]),A=xt,E=bt),(st!==R||yt!==w||ct!==T||Bt!==D)&&(n.blendFuncSeparate(Nt[st],Nt[yt],Nt[ct],Nt[Bt]),R=st,w=yt,T=ct,D=Bt),(It.equals(y)===!1||ge!==M)&&(n.blendColor(It.r,It.g,It.b,ge),y.copy(It),M=ge),d=B,I=!1}function Zt(B,xt){B.side===fn?At(n.CULL_FACE):at(n.CULL_FACE);let st=B.side===Je;xt&&(st=!st),Yt(st),B.blending===ls&&B.transparent===!1?ae(Un):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let yt=B.stencilWrite;a.setTest(yt),yt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(B){L!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),L=B)}function de(B){B!==Nc?(at(n.CULL_FACE),B!==V&&(B===nl?n.cullFace(n.BACK):B===Uc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),V=B}function we(B){B!==N&&(K&&n.lineWidth(B),N=B)}function ze(B,xt,st){B?(at(n.POLYGON_OFFSET_FILL),(U!==xt||X!==st)&&(U=xt,X=st,o.getReversed()&&(xt=-xt),n.polygonOffset(xt,st))):At(n.POLYGON_OFFSET_FILL)}function ye(B){B?at(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function ve(B){B===void 0&&(B=n.TEXTURE0+nt-1),ot!==B&&(n.activeTexture(B),ot=B)}function z(B,xt,st){st===void 0&&(ot===null?st=n.TEXTURE0+nt-1:st=ot);let yt=lt[st];yt===void 0&&(yt={type:void 0,texture:void 0},lt[st]=yt),(yt.type!==B||yt.texture!==xt)&&(ot!==st&&(n.activeTexture(st),ot=st),n.bindTexture(B,xt||J[B]),yt.type=B,yt.texture=xt)}function Fe(){let B=lt[ot];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function _(){try{n.texSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function G(){try{n.texSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function pt(){try{n.texStorage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function mt(){try{n.texStorage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function it(){try{n.texImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function rt(){try{n.texImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function _t(B){return h[B]!==void 0?h[B]:n.getParameter(B)}function Ft(B,xt){h[B]!==xt&&(n.pixelStorei(B,xt),h[B]=xt)}function vt(B){me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),me.copy(B))}function gt(B){oe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),oe.copy(B))}function Ot(B,xt){let st=c.get(xt);st===void 0&&(st=new WeakMap,c.set(xt,st));let yt=st.get(B);yt===void 0&&(yt=n.getUniformBlockIndex(xt,B.name),st.set(B,yt))}function kt(B,xt){let yt=c.get(xt).get(B);l.get(xt)!==yt&&(n.uniformBlockBinding(xt,yt,B.__bindingPointIndex),l.set(xt,yt))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},ot=null,lt={},u={},m=new WeakMap,x=[],S=null,p=!1,d=null,A=null,R=null,w=null,E=null,T=null,D=null,y=new Qt(0,0,0),M=0,I=!1,L=null,V=null,N=null,U=null,X=null,me.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:At,bindFramebuffer:qt,drawBuffers:Tt,useProgram:te,setBlending:ae,setMaterial:Zt,setFlipSided:Yt,setCullFace:de,setLineWidth:we,setPolygonOffset:ze,setScissorTest:ye,activeTexture:ve,bindTexture:z,unbindTexture:Fe,compressedTexImage2D:ue,compressedTexImage3D:P,texImage2D:it,texImage3D:rt,pixelStorei:Ft,getParameter:_t,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:pt,texStorage3D:mt,texSubImage2D:_,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:tt,scissor:vt,viewport:gt,reset:Jt}}function xg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,f=new WeakMap,h=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,_){return x?new OffscreenCanvas(P,_):Us("canvas")}function p(P,_,G){let Y=1,tt=ue(P);if((tt.width>G||tt.height>G)&&(Y=G/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let pt=Math.floor(Y*tt.width),mt=Math.floor(Y*tt.height);u===void 0&&(u=S(pt,mt));let it=_?S(pt,mt):u;return it.width=pt,it.height=mt,it.getContext("2d").drawImage(P,0,0,pt,mt),Wt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+pt+"x"+mt+")."),it}else return"data"in P&&Wt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function d(P){return P.generateMipmaps}function A(P){n.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,_,G,Y,tt,pt=!1){if(P!==null){if(n[P]!==void 0)return n[P];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt;Y&&(mt=t.get("EXT_texture_norm16"),mt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=_;if(_===n.RED&&(G===n.FLOAT&&(it=n.R32F),G===n.HALF_FLOAT&&(it=n.R16F),G===n.UNSIGNED_BYTE&&(it=n.R8),G===n.UNSIGNED_SHORT&&mt&&(it=mt.R16_EXT),G===n.SHORT&&mt&&(it=mt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.R8UI),G===n.UNSIGNED_SHORT&&(it=n.R16UI),G===n.UNSIGNED_INT&&(it=n.R32UI),G===n.BYTE&&(it=n.R8I),G===n.SHORT&&(it=n.R16I),G===n.INT&&(it=n.R32I)),_===n.RG&&(G===n.FLOAT&&(it=n.RG32F),G===n.HALF_FLOAT&&(it=n.RG16F),G===n.UNSIGNED_BYTE&&(it=n.RG8),G===n.UNSIGNED_SHORT&&mt&&(it=mt.RG16_EXT),G===n.SHORT&&mt&&(it=mt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.RG8UI),G===n.UNSIGNED_SHORT&&(it=n.RG16UI),G===n.UNSIGNED_INT&&(it=n.RG32UI),G===n.BYTE&&(it=n.RG8I),G===n.SHORT&&(it=n.RG16I),G===n.INT&&(it=n.RG32I)),_===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.RGB8UI),G===n.UNSIGNED_SHORT&&(it=n.RGB16UI),G===n.UNSIGNED_INT&&(it=n.RGB32UI),G===n.BYTE&&(it=n.RGB8I),G===n.SHORT&&(it=n.RGB16I),G===n.INT&&(it=n.RGB32I)),_===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),G===n.UNSIGNED_INT&&(it=n.RGBA32UI),G===n.BYTE&&(it=n.RGBA8I),G===n.SHORT&&(it=n.RGBA16I),G===n.INT&&(it=n.RGBA32I)),_===n.RGB&&(G===n.UNSIGNED_SHORT&&mt&&(it=mt.RGB16_EXT),G===n.SHORT&&mt&&(it=mt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),_===n.RGBA){let rt=pt?Ds:le.getTransfer(tt);G===n.FLOAT&&(it=n.RGBA32F),G===n.HALF_FLOAT&&(it=n.RGBA16F),G===n.UNSIGNED_BYTE&&(it=rt===pe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&mt&&(it=mt.RGBA16_EXT),G===n.SHORT&&mt&&(it=mt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function E(P,_){let G;return P?_===null||_===An||_===hs?G=n.DEPTH24_STENCIL8:_===En?G=n.DEPTH32F_STENCIL8:_===cs&&(G=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===An||_===hs?G=n.DEPTH_COMPONENT24:_===En?G=n.DEPTH_COMPONENT32F:_===cs&&(G=n.DEPTH_COMPONENT16),G}function T(P,_){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Be&&P.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function D(P){let _=P.target;_.removeEventListener("dispose",D),M(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&h.delete(_)}function y(P){let _=P.target;_.removeEventListener("dispose",y),L(_)}function M(P){let _=i.get(P);if(_.__webglInit===void 0)return;let G=P.source,Y=m.get(G);if(Y){let tt=Y[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(P),Object.keys(Y).length===0&&m.delete(G)}i.remove(P)}function I(P){let _=i.get(P);n.deleteTexture(_.__webglTexture);let G=P.source,Y=m.get(G);delete Y[_.__cacheKey],o.memory.textures--}function L(P){let _=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let tt=0;tt<_.__webglFramebuffer[Y].length;tt++)n.deleteFramebuffer(_.__webglFramebuffer[Y][tt]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let G=P.textures;for(let Y=0,tt=G.length;Y<tt;Y++){let pt=i.get(G[Y]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(P)}let V=0;function N(){V=0}function U(){return V}function X(P){V=P}function nt(){let P=V;return P>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,P}function K(P){let _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function ht(P,_){let G=i.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let Y=P.image;if(Y===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{At(G,P,_);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+_)}function Q(P,_){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){At(G,P,_);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+_)}function ot(P,_){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){At(G,P,_);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+_)}function lt(P,_){let G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){qt(G,P,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+_)}let zt={[$r]:n.REPEAT,[Pn]:n.CLAMP_TO_EDGE,[Zr]:n.MIRRORED_REPEAT},Dt={[Be]:n.NEAREST,[ih]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[wo]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},me={[ah]:n.NEVER,[fh]:n.ALWAYS,[lh]:n.LESS,[aa]:n.LEQUAL,[ch]:n.EQUAL,[la]:n.GEQUAL,[hh]:n.GREATER,[uh]:n.NOTEQUAL};function oe(P,_){if(_.type===En&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===wo||_.magFilter===js||_.magFilter===mi||_.minFilter===Pe||_.minFilter===wo||_.minFilter===js||_.minFilter===mi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,zt[_.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,zt[_.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,zt[_.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Dt[_.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Dt[_.minFilter]),_.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==js&&_.minFilter!==mi||_.type===En&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(P,_){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",D));let Y=_.source,tt=m.get(Y);tt===void 0&&(tt={},m.set(Y,tt));let pt=K(_);if(pt!==P.__cacheKey){tt[pt]===void 0&&(tt[pt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[pt].usedTimes++;let mt=tt[P.__cacheKey];mt!==void 0&&(tt[P.__cacheKey].usedTimes--,mt.usedTimes===0&&I(_)),P.__cacheKey=pt,P.__webglTexture=tt[pt].texture}return G}function J(P,_,G){return Math.floor(Math.floor(P/G)/_)}function at(P,_,G,Y){let pt=P.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,G,Y,_.data);else{pt.sort((Ft,vt)=>Ft.start-vt.start);let mt=0;for(let Ft=1;Ft<pt.length;Ft++){let vt=pt[mt],gt=pt[Ft],Ot=vt.start+vt.count,kt=J(gt.start,_.width,4),Jt=J(vt.start,_.width,4);gt.start<=Ot+1&&kt===Jt&&J(gt.start+gt.count-1,_.width,4)===kt?vt.count=Math.max(vt.count,gt.start+gt.count-vt.start):(++mt,pt[mt]=gt)}pt.length=mt+1;let it=e.getParameter(n.UNPACK_ROW_LENGTH),rt=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,vt=pt.length;Ft<vt;Ft++){let gt=pt[Ft],Ot=Math.floor(gt.start/4),kt=Math.ceil(gt.count/4),Jt=Ot%_.width,B=Math.floor(Ot/_.width),xt=kt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Jt,B,xt,st,G,Y,_.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function At(P,_,G){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let tt=ne(P,_),pt=_.source;e.bindTexture(Y,P.__webglTexture,n.TEXTURE0+G);let mt=i.get(pt);if(pt.version!==mt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let st=le.getPrimaries(le.workingColorSpace),yt=_.colorSpace===Zn?null:le.getPrimaries(_.colorSpace),bt=_.colorSpace===Zn||st===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let rt=p(_.image,!1,s.maxTextureSize);rt=Fe(_,rt);let _t=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),vt=w(_.internalFormat,_t,Ft,_.normalized,_.colorSpace,_.isVideoTexture);oe(Y,_);let gt,Ot=_.mipmaps,kt=_.isVideoTexture!==!0,Jt=mt.__version===void 0||tt===!0,B=pt.dataReady,xt=T(_,rt);if(_.isDepthTexture)vt=E(_.format===gi,_.type),Jt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,vt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,vt,rt.width,rt.height,0,_t,Ft,null));else if(_.isDataTexture)if(Ot.length>0){kt&&Jt&&e.texStorage2D(n.TEXTURE_2D,xt,vt,Ot[0].width,Ot[0].height);for(let st=0,yt=Ot.length;st<yt;st++)gt=Ot[st],kt?B&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,gt.width,gt.height,_t,Ft,gt.data):e.texImage2D(n.TEXTURE_2D,st,vt,gt.width,gt.height,0,_t,Ft,gt.data);_.generateMipmaps=!1}else kt?(Jt&&e.texStorage2D(n.TEXTURE_2D,xt,vt,rt.width,rt.height),B&&at(_,rt,_t,Ft)):e.texImage2D(n.TEXTURE_2D,0,vt,rt.width,rt.height,0,_t,Ft,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){kt&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,vt,Ot[0].width,Ot[0].height,rt.depth);for(let st=0,yt=Ot.length;st<yt;st++)if(gt=Ot[st],_.format!==dn)if(_t!==null)if(kt){if(B)if(_.layerUpdates.size>0){let bt=Il(gt.width,gt.height,_.format,_.type);for(let ct of _.layerUpdates){let Bt=gt.data.subarray(ct*bt/gt.data.BYTES_PER_ELEMENT,(ct+1)*bt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,ct,gt.width,gt.height,1,_t,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,rt.depth,_t,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,vt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,rt.depth,_t,Ft,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,vt,gt.width,gt.height,rt.depth,0,_t,Ft,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{kt&&Jt&&e.texStorage2D(n.TEXTURE_2D,xt,vt,Ot[0].width,Ot[0].height);for(let st=0,yt=Ot.length;st<yt;st++)gt=Ot[st],_.format!==dn?_t!==null?kt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,vt,gt.width,gt.height,0,gt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,gt.width,gt.height,_t,Ft,gt.data):e.texImage2D(n.TEXTURE_2D,st,vt,gt.width,gt.height,0,_t,Ft,gt.data)}else if(_.isDataArrayTexture)if(kt){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,vt,rt.width,rt.height,rt.depth),B)if(_.layerUpdates.size>0){let st=Il(rt.width,rt.height,_.format,_.type);for(let yt of _.layerUpdates){let bt=rt.data.subarray(yt*st/rt.data.BYTES_PER_ELEMENT,(yt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,rt.width,rt.height,1,_t,Ft,bt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ft,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,_t,Ft,rt.data);else if(_.isData3DTexture)kt?(Jt&&e.texStorage3D(n.TEXTURE_3D,xt,vt,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Ft,rt.data)):e.texImage3D(n.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,_t,Ft,rt.data);else if(_.isFramebufferTexture){if(Jt)if(kt)e.texStorage2D(n.TEXTURE_2D,xt,vt,rt.width,rt.height);else{let st=rt.width,yt=rt.height;for(let bt=0;bt<xt;bt++)e.texImage2D(n.TEXTURE_2D,bt,vt,st,yt,0,_t,Ft,null),st>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(_),st.onpaint=yt=>{let bt=yt.changedElements;for(let ct of h)bt.includes(ct.image)&&(ct.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,rt);else{let bt=n.RGBA,ct=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,bt,ct,Bt,rt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(kt&&Jt){let st=ue(Ot[0]);e.texStorage2D(n.TEXTURE_2D,xt,vt,st.width,st.height)}for(let st=0,yt=Ot.length;st<yt;st++)gt=Ot[st],kt?B&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,_t,Ft,gt):e.texImage2D(n.TEXTURE_2D,st,vt,_t,Ft,gt);_.generateMipmaps=!1}else if(kt){if(Jt){let st=ue(rt);e.texStorage2D(n.TEXTURE_2D,xt,vt,st.width,st.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ft,rt)}else e.texImage2D(n.TEXTURE_2D,0,vt,_t,Ft,rt);d(_)&&A(Y),mt.__version=pt.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function qt(P,_,G){if(_.image.length!==6)return;let Y=ne(P,_),tt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let pt=i.get(tt);if(tt.version!==pt.__version||Y===!0){e.activeTexture(n.TEXTURE0+G);let mt=le.getPrimaries(le.workingColorSpace),it=_.colorSpace===Zn?null:le.getPrimaries(_.colorSpace),rt=_.colorSpace===Zn||mt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let _t=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let ct=0;ct<6;ct++)!_t&&!Ft?vt[ct]=p(_.image[ct],!0,s.maxCubemapSize):vt[ct]=Ft?_.image[ct].image:_.image[ct],vt[ct]=Fe(_,vt[ct]);let gt=vt[0],Ot=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),Jt=w(_.internalFormat,Ot,kt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,xt=pt.__version===void 0||Y===!0,st=tt.dataReady,yt=T(_,gt);oe(n.TEXTURE_CUBE_MAP,_);let bt;if(_t){B&&xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Jt,gt.width,gt.height);for(let ct=0;ct<6;ct++){bt=vt[ct].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){let It=bt[Bt];_.format!==dn?Ot!==null?B?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,It.width,It.height,Ot,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,Jt,It.width,It.height,0,It.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,It.width,It.height,Ot,kt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,Jt,It.width,It.height,0,Ot,kt,It.data)}}}else{if(bt=_.mipmaps,B&&xt){bt.length>0&&yt++;let ct=ue(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ft){B?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,vt[ct].width,vt[ct].height,Ot,kt,vt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,vt[ct].width,vt[ct].height,0,Ot,kt,vt[ct].data);for(let Bt=0;Bt<bt.length;Bt++){let ge=bt[Bt].image[ct].image;B?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,ge.width,ge.height,Ot,kt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,Jt,ge.width,ge.height,0,Ot,kt,ge.data)}}else{B?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ot,kt,vt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,Ot,kt,vt[ct]);for(let Bt=0;Bt<bt.length;Bt++){let It=bt[Bt];B?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Ot,kt,It.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,Jt,Ot,kt,It.image[ct])}}}d(_)&&A(n.TEXTURE_CUBE_MAP),pt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Tt(P,_,G,Y,tt,pt){let mt=r.convert(G.format,G.colorSpace),it=r.convert(G.type),rt=w(G.internalFormat,mt,it,G.normalized,G.colorSpace),_t=i.get(_),Ft=i.get(G);if(Ft.__renderTarget=_,!_t.__hasExternalTextures){let vt=Math.max(1,_.width>>pt),gt=Math.max(1,_.height>>pt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,pt,rt,vt,gt,_.depth,0,mt,it,null):e.texImage2D(tt,pt,rt,vt,gt,0,mt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,tt,Ft.__webglTexture,0,ye(_)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,tt,Ft.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(P,_,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),_.depthBuffer){let Y=_.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,pt=E(_.stencilBuffer,tt),mt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(_),pt,_.width,_.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(_),pt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,P)}else{let Y=_.textures;for(let tt=0;tt<Y.length;tt++){let pt=Y[tt],mt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),rt=w(pt.internalFormat,mt,it,pt.normalized,pt.colorSpace);ve(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(_),rt,_.width,_.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(_),rt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,rt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(P,_,G){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(_.depthTexture);if(tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),oe(n.TEXTURE_CUBE_MAP,_.depthTexture);let _t=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type),vt;_.depthTexture.format===Ln?vt=n.DEPTH_COMPONENT24:_.depthTexture.format===gi&&(vt=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,vt,_.width,_.height,0,_t,Ft,null)}}else ht(_.depthTexture,0);let pt=tt.__webglTexture,mt=ye(_),it=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,rt=_.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ln)ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,it,pt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,it,pt,0);else if(_.depthTexture.format===gi)ve(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,it,pt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,it,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(P){let _=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=Y}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)$t(_.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?$t(_.__webglFramebuffer[0],P,0):$t(_.__webglFramebuffer,P,0)}else if(G){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),te(_.__webglDepthbuffer[Y],P,!1);else{let tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,pt)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),te(_.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,pt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,_,G){let Y=i.get(P);_!==void 0&&Tt(Y.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Nt(P)}function Zt(P){let _=P.texture,G=i.get(P),Y=i.get(_);P.addEventListener("dispose",y);let tt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,mt=tt.length>1;if(mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),pt){G.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[it]=[];for(let rt=0;rt<_.mipmaps.length;rt++)G.__webglFramebuffer[it][rt]=n.createFramebuffer()}else G.__webglFramebuffer[it]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)G.__webglFramebuffer[it]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(mt)for(let it=0,rt=tt.length;it<rt;it++){let _t=i.get(tt[it]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ve(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let it=0;it<tt.length;it++){let rt=tt[it];G.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[it]);let _t=r.convert(rt.format,rt.colorSpace),Ft=r.convert(rt.type),vt=w(rt.internalFormat,_t,Ft,rt.normalized,rt.colorSpace,P.isXRRenderTarget===!0),gt=ye(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,vt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,G.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),te(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),oe(n.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Tt(G.__webglFramebuffer[it][rt],P,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else Tt(G.__webglFramebuffer[it],P,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);d(_)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let it=0,rt=tt.length;it<rt;it++){let _t=tt[it],Ft=i.get(_t),vt=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ft.__webglTexture),oe(vt,_t),Tt(G.__webglFramebuffer,P,_t,n.COLOR_ATTACHMENT0+it,vt,0),d(_t)&&A(vt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),oe(it,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Tt(G.__webglFramebuffer[rt],P,_,n.COLOR_ATTACHMENT0,it,rt);else Tt(G.__webglFramebuffer,P,_,n.COLOR_ATTACHMENT0,it,0);d(_)&&A(it),e.unbindTexture()}P.depthBuffer&&Nt(P)}function Yt(P){let _=P.textures;for(let G=0,Y=_.length;G<Y;G++){let tt=_[G];if(d(tt)){let pt=R(P),mt=i.get(tt).__webglTexture;e.bindTexture(pt,mt),A(pt),e.unbindTexture()}}}let de=[],we=[];function ze(P){if(P.samples>0){if(ve(P)===!1){let _=P.textures,G=P.width,Y=P.height,tt=n.COLOR_BUFFER_BIT,pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(P),it=_.length>1;if(it)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let rt=P.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let Ft=i.get(_[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,tt,n.NEAREST),l===!0&&(de.length=0,we.length=0,de.push(n.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(de.push(pt),we.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let Ft=i.get(_[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let _=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ye(P){return Math.min(s.maxSamples,P.samples)}function ve(P){let _=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function z(P){let _=o.render.frame;f.get(P)!==_&&(f.set(P,_),P.update())}function Fe(P,_){let G=P.colorSpace,Y=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ls&&G!==Zn&&(le.getTransfer(G)===pe?(Y!==dn||tt!==an)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",G)),_}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=N,this.getTextureUnits=U,this.setTextureUnits=X,this.setTexture2D=ht,this.setTexture2DArray=Q,this.setTexture3D=ot,this.setTextureCube=lt,this.rebindTextures=ae,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _g(n,t){function e(i,s=Zn){let r,o=le.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===Eo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===To)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xl)return n.BYTE;if(i===_l)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===Ao)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===Ml)return n.ALPHA;if(i===Sl)return n.RGB;if(i===dn)return n.RGBA;if(i===Ln)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===bl)return n.RED;if(i===Co)return n.RED_INTEGER;if(i===xi)return n.RG;if(i===Ro)return n.RG_INTEGER;if(i===Io)return n.RGBA_INTEGER;if(i===Qs||i===tr||i===er||i===nr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Po||i===Lo||i===Do||i===No)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ir||i===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Uo||i===Fo)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bo)return r.COMPRESSED_R11_EAC;if(i===zo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ir)return r.COMPRESSED_RG11_EAC;if(i===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vo||i===Go||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Zo||i===Jo||i===Ko||i===jo||i===Qo||i===ta)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ho)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ko)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ta)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===na||i===ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ea)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sa||i===ra||i===sr||i===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
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

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new We({vertexShader:yg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends Dn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,x=null,S=typeof XRWebGLBinding<"u",p=new Zl,d={},A=e.getContextAttributes(),R=null,w=null,E=[],T=[],D=new re,y=null,M=null,I=new He;I.viewport=new Ee;let L=new He;L.viewport=new Ee;let V=[I,L],N=new vo,U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=E[J];return at===void 0&&(at=new rs,E[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=E[J];return at===void 0&&(at=new rs,E[J]=at),at.getGripSpace()},this.getHand=function(J){let at=E[J];return at===void 0&&(at=new rs,E[J]=at),at.getHandSpace()};function nt(J){let at=T.indexOf(J.inputSource);if(at===-1)return;let At=E[at];At!==void 0&&(At.update(J.inputSource,J.frame,c||o),At.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ht);for(let J=0;J<E.length;J++){let at=T[J];at!==null&&(T[J]=null,E[J].disconnect(at))}U=null,X=null,p.reset();for(let J in d)delete d[J];if(t.setRenderTarget(R),m=null,u=null,h=null,s=null,w=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(D.width,D.height,!1),M!==null){let J=M.camera;J.fov=M.fov,J.zoom=M.zoom,J.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ht),A.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,qt=null,Tt=null;A.depth&&(Tt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=A.stencil?gi:Ln,qt=A.stencil?hs:An);let te={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(te),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Qe(u.textureWidth,u.textureHeight,{format:dn,type:an,depthTexture:new ci(u.textureWidth,u.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Qe(m.framebufferWidth,m.framebufferHeight,{format:dn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ht(J){for(let at=0;at<J.removed.length;at++){let At=J.removed[at],qt=T.indexOf(At);qt>=0&&(T[qt]=null,E[qt].disconnect(At))}for(let at=0;at<J.added.length;at++){let At=J.added[at],qt=T.indexOf(At);if(qt===-1){for(let te=0;te<E.length;te++)if(te>=T.length){T.push(At),qt=te;break}else if(T[te]===null){T[te]=At,qt=te;break}if(qt===-1)break}let Tt=E[qt];Tt&&Tt.connect(At)}}let Q=new q,ot=new q;function lt(J,at,At){Q.setFromMatrixPosition(at.matrixWorld),ot.setFromMatrixPosition(At.matrixWorld);let qt=Q.distanceTo(ot),Tt=at.projectionMatrix.elements,te=At.projectionMatrix.elements,$t=Tt[14]/(Tt[10]-1),Nt=Tt[14]/(Tt[10]+1),ae=(Tt[9]+1)/Tt[5],Zt=(Tt[9]-1)/Tt[5],Yt=(Tt[8]-1)/Tt[0],de=(te[8]+1)/te[0],we=$t*Yt,ze=$t*de,ye=qt/(-Yt+de),ve=ye*-Yt;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ve),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let z=$t+ye,Fe=Nt+ye,ue=we-ve,P=ze+(qt-ve),_=ae*Nt/Fe*z,G=Zt*Nt/Fe*z;J.projectionMatrix.makePerspective(ue,P,_,G,z,Fe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function zt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,At=J.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(At=p.depthFar)),N.near=L.near=I.near=at,N.far=L.far=I.far=At,(U!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,X=N.far),N.layers.mask=J.layers.mask|6,I.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let qt=J.parent,Tt=N.cameras;zt(N,qt);for(let te=0;te<Tt.length;te++)zt(Tt[te],qt);Tt.length===2?lt(N,I,L):N.projectionMatrix.copy(I.projectionMatrix),M===null&&J.isPerspectiveCamera&&(M={camera:J,fov:J.fov,zoom:J.zoom}),Dt(J,N,qt)};function Dt(J,at,At){At===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Kr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(J){return d[J]};let me=null;function oe(J,at){if(f=at.getViewerPose(c||o),x=at,f!==null){let At=f.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let qt=!1;At.length!==N.cameras.length&&(N.cameras.length=0,qt=!0);for(let Nt=0;Nt<At.length;Nt++){let ae=At[Nt],Zt=null;if(m!==null)Zt=m.getViewport(ae);else{let de=h.getViewSubImage(u,ae);Zt=de.viewport,Nt===0&&(t.setRenderTargetTextures(w,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(w))}let Yt=V[Nt];Yt===void 0&&(Yt=new He,Yt.layers.enable(Nt),Yt.viewport=new Ee,V[Nt]=Yt),Yt.matrix.fromArray(ae.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ae.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(N.matrix.copy(Yt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),qt===!0&&N.cameras.push(Yt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=i.getBinding();let Nt=h.getDepthInformation(At[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,s.renderState)}if(Tt&&Tt.includes("camera-access")&&S){t.state.unbindTexture(),h=i.getBinding();for(let Nt=0;Nt<At.length;Nt++){let ae=At[Nt].camera;if(ae){let Zt=d[ae];Zt||(Zt=new Xs,d[ae]=Zt);let Yt=h.getCameraImage(ae);Zt.sourceTexture=Yt}}}}for(let At=0;At<E.length;At++){let qt=T[At],Tt=E[At];qt!==null&&Tt!==void 0&&Tt.update(qt,at,c||o)}me&&me(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),x=null}let ne=new Hh;ne.setAnimationLoop(oe),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}},Mg=new Te,Zh=new jt;Zh.set(-1,0,0,0,1,0,0,0,1);function Sg(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Tl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,A,R,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,A,R):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Je&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Je&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A=t.get(d),R=A.envMap,w=A.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(w)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,R){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=R*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Je&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let A=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bg(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let T=E.program;i.uniformBlockBinding(w,T)}function c(w,E){let T=s[w.id];T===void 0&&(p(w),T=f(w),s[w.id]=T,w.addEventListener("dispose",A));let D=E.program;i.updateUBOMapping(w,D);let y=t.render.frame;r[w.id]!==y&&(u(w),r[w.id]=y)}function f(w){let E=h();w.__bindingPointIndex=E;let T=n.createBuffer(),D=w.__size,y=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let E=s[w.id],T=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,M=T.length;y<M;y++){let I=T[y];if(Array.isArray(I))for(let L=0,V=I.length;L<V;L++)m(I[L],y,L,D);else m(I,y,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,E,T,D){if(S(w,E,T,D)===!0){let y=w.__offset,M=w.value;if(Array.isArray(M)){let I=0;for(let L=0;L<M.length;L++){let V=M[L],N=d(V);x(V,w.__data,I),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,w.__data)}}function x(w,E,T){typeof w=="number"||typeof w=="boolean"?E[0]=w:w.isMatrix3?(E[0]=w.elements[0],E[1]=w.elements[1],E[2]=w.elements[2],E[3]=0,E[4]=w.elements[3],E[5]=w.elements[4],E[6]=w.elements[5],E[7]=0,E[8]=w.elements[6],E[9]=w.elements[7],E[10]=w.elements[8],E[11]=0):ArrayBuffer.isView(w)?E.set(new w.constructor(w.buffer,w.byteOffset,E.length)):w.toArray(E,T)}function S(w,E,T,D){let y=w.value,M=E+"_"+T;if(D[M]===void 0)return typeof y=="number"||typeof y=="boolean"?D[M]=y:ArrayBuffer.isView(y)?D[M]=y.slice():D[M]=y.clone(),!0;{let I=D[M];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return D[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function p(w){let E=w.uniforms,T=0,D=16;for(let M=0,I=E.length;M<I;M++){let L=Array.isArray(E[M])?E[M]:[E[M]];for(let V=0,N=L.length;V<N;V++){let U=L[V],X=Array.isArray(U.value)?U.value:[U.value];for(let nt=0,K=X.length;nt<K;nt++){let ht=X[nt],Q=d(ht),ot=T%D,lt=ot%Q.boundary,zt=ot+lt;T+=lt,zt!==0&&D-zt<Q.storage&&(T+=D-zt),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=Q.storage}}}let y=T%D;return y>0&&(T+=D-y),w.__size=T,w.__cache={},this}function d(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(E.boundary=16,E.storage=w.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",w),E}function A(w){let E=w.target;E.removeEventListener("dispose",A);let T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function Ag(){return Fn===null&&(Fn=new io(wg,16,16,xi,Tn),Fn.name="DFG_LUT",Fn.minFilter=Pe,Fn.magFilter=Pe,Fn.wrapS=Pn,Fn.wrapT=Pn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var da=class{constructor(t={}){let{canvas:e=dh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=an}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let S=m,p=new Set([Io,Ro,Co]),d=new Set([an,An,cs,hs,Eo,To]),A=new Uint32Array(4),R=new Int32Array(4),w=new q,E=null,T=null,D=[],y=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,V=null,N=null,U=null,X=null;this._outputColorSpace=Le;let nt=0,K=0,ht=null,Q=-1,ot=null,lt=new Ee,zt=new Ee,Dt=null,me=new Qt(0),oe=0,ne=e.width,J=e.height,at=1,At=null,qt=null,Tt=new Ee(0,0,ne,J),te=new Ee(0,0,ne,J),$t=!1,Nt=new Hs,ae=!1,Zt=!1,Yt=new Te,de=new q,we=new Ee,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function ve(){return ht===null?at:1}let z=i;function Fe(v,F){return e.getContext(v,F)}let ue,P,_,G,Y,tt,pt,mt,it,rt,_t,Ft,vt,gt,Ot,kt,Jt,B,xt,st,yt,bt,ct;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",qe,!1),z===null){let F="webgl2";if(z=Fe(F,v),z===null)throw Fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(v){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Ht("WebGLRenderer: "+v.message),v}function Bt(){ue=new Lm(z),ue.init(),yt=new _g(z,ue),P=new Sm(z,ue,t,yt),_=new gg(z,ue),P.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),N=z.createFramebuffer(),U=z.createFramebuffer(),X=z.createFramebuffer(),G=new Um(z),Y=new ng,tt=new xg(z,ue,_,Y,P,yt,G),pt=new Pm(I),mt=new Of(z),bt=new vm(z,mt),it=new Dm(z,mt,G,bt),rt=new Om(z,it,mt,bt,G),B=new Fm(z,P,tt),Ot=new bm(Y),_t=new eg(I,pt,ue,P,bt,Ot),Ft=new Sg(I,Y),vt=new sg,gt=new hg(ue),Jt=new ym(I,pt,_,rt,x,l),kt=new mg(I,rt,P),ct=new bg(z,G,P,_),xt=new Mm(z,ue,G),st=new Nm(z,ue,G),G.programs=_t.programs,I.capabilities=P,I.extensions=ue,I.properties=Y,I.renderLists=vt,I.shadowMap=kt,I.state=_,I.info=G}S!==an&&(M=new zm(S,e.width,e.height,a,s,r));let It=new Jl(I,z);this.xr=It,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let v=ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(v){v!==void 0&&(at=v,this.setSize(ne,J,!1))},this.getSize=function(v){return v.set(ne,J)},this.setSize=function(v,F,$=!0){if(It.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=v,J=F,e.width=Math.floor(v*at),e.height=Math.floor(F*at),$===!0&&(e.style.width=v+"px",e.style.height=F+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(ne*at,J*at).floor()},this.setDrawingBufferSize=function(v,F,$){ne=v,J=F,at=$,e.width=Math.floor(v*$),e.height=Math.floor(F*$),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(S===an){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(lt)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,F,$,W){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,F,$,W),_.viewport(lt.copy(Tt).multiplyScalar(at).round())},this.getScissor=function(v){return v.copy(te)},this.setScissor=function(v,F,$,W){v.isVector4?te.set(v.x,v.y,v.z,v.w):te.set(v,F,$,W),_.scissor(zt.copy(te).multiplyScalar(at).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(v){_.setScissorTest($t=v)},this.setOpaqueSort=function(v){At=v},this.setTransparentSort=function(v){qt=v},this.getClearColor=function(v){return v.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,$=!0){let W=0;if(v){let H=!1;if(ht!==null){let dt=ht.texture.format;H=p.has(dt)}if(H){let dt=ht.texture.type,Ct=d.has(dt),Mt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),Ut=Mt.r,Kt=Mt.g,ie=Mt.b;Ct?(A[0]=Ut,A[1]=Kt,A[2]=ie,A[3]=Pt,z.clearBufferuiv(z.COLOR,0,A)):(R[0]=Ut,R[1]=Kt,R[2]=ie,R[3]=Pt,z.clearBufferiv(z.COLOR,0,R))}else W|=z.COLOR_BUFFER_BIT}F&&(W|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),V=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Jt.dispose(),vt.dispose(),gt.dispose(),Y.dispose(),pt.dispose(),rt.dispose(),bt.dispose(),ct.dispose(),_t.dispose(),It.dispose(),It.removeEventListener("sessionstart",bi),It.removeEventListener("sessionend",vs),mn.stop()};function ge(v){v.preventDefault(),Fs("WebGLRenderer: Context Lost."),L=!0}function Vt(){Fs("WebGLRenderer: Context Restored."),L=!1;let v=G.autoReset,F=kt.enabled,$=kt.autoUpdate,W=kt.needsUpdate,H=kt.type;Bt(),G.autoReset=v,kt.enabled=F,kt.autoUpdate=$,kt.needsUpdate=W,kt.type=H}function qe(v){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tn(v){let F=v.target;F.removeEventListener("dispose",tn),ba(F)}function ba(v){Oi(v),Y.remove(v)}function Oi(v){let F=Y.get(v).programs;F!==void 0&&(F.forEach(function($){_t.releaseProgram($)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,$,W,H,dt){F===null&&(F=ze);let Ct=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=wa(v,F,$,W,H);_.setMaterial(W,Ct);let Pt=$.index,Ut=1;if(W.wireframe===!0){if(Pt=it.getWireframeAttribute($),Pt===void 0)return;Ut=2}let Kt=$.drawRange,ie=$.attributes.position,Lt=Kt.start*Ut,he=(Kt.start+Kt.count)*Ut;dt!==null&&(Lt=Math.max(Lt,dt.start*Ut),he=Math.min(he,(dt.start+dt.count)*Ut)),Pt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,Pt.count)):ie!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,ie.count));let Ae=he-Lt;if(Ae<0||Ae===1/0)return;bt.setup(H,W,Mt,$,Pt);let g,b=xt;if(Pt!==null&&(g=mt.get(Pt),b=st,b.setIndex(g)),H.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*ve()),b.setMode(z.LINES)):b.setMode(z.TRIANGLES);else if(H.isLine){let k=W.linewidth;k===void 0&&(k=1),_.setLineWidth(k*ve()),H.isLineSegments?b.setMode(z.LINES):H.isLineLoop?b.setMode(z.LINE_LOOP):b.setMode(z.LINE_STRIP)}else H.isPoints?b.setMode(z.POINTS):H.isSprite&&b.setMode(z.TRIANGLES);if(H.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))b.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let k=H._multiDrawStarts,O=H._multiDrawCounts,et=H._multiDrawCount,Z=Pt?mt.get(Pt).bytesPerElement:1,ft=Y.get(W).currentProgram.getUniforms();for(let Et=0;Et<et;Et++)ft.setValue(z,"_gl_DrawID",Et),b.render(k[Et]/Z,O[Et])}else if(H.isInstancedMesh)b.renderInstances(Lt,Ae,H.count);else if($.isInstancedBufferGeometry){let k=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,O=Math.min($.instanceCount,k);b.renderInstances(Lt,Ae,O)}else b.render(Lt,Ae)};function dr(v,F,$,W){V!==null&&v.isNodeMaterial&&V.setObject(W,v),ae===!0&&Ot.setState(v,$,!1),v.transparent===!0&&v.side===fn&&v.forceSinglePass===!1?(v.side=Je,v.needsUpdate=!0,Ke(v,F,W),v.side=di,v.needsUpdate=!0,Ke(v,F,W),v.side=fn):Ke(v,F,W)}this.compile=function(v,F,$=null){$===null&&($=v),V!==null&&V.renderStart(v,F,$),T=gt.get($),T.init(F),y.push(T),$.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),v!==$&&v.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Zt=this.localClippingEnabled,ae=Ot.init(this.clippingPlanes,Zt),ae===!0&&Ot.setGlobalState(this.clippingPlanes,F),V!==null&&kt.render(T.state.shadowsArray,$,F);let W=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let dt=H.material;if(dt)if(Array.isArray(dt))for(let Ct=0;Ct<dt.length;Ct++){let Mt=dt[Ct];dr(Mt,$,F,H),W.add(Mt)}else dr(dt,$,F,H),W.add(dt)}),T=y.pop(),V!==null&&V.renderEnd(),W},this.compileAsync=function(v,F,$=null){let W=this.compile(v,F,$);return new Promise(H=>{function dt(){if(W.forEach(function(Ct){let Pt=Y.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&W.delete(Ct)}),W.size===0){H(v);return}setTimeout(dt,10)}ue.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Si=null;function ys(v){Si&&Si(v)}function bi(){mn.stop()}function vs(){mn.start()}let mn=new Hh;mn.setAnimationLoop(ys),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(v){Si=v,It.setAnimationLoop(v),v===null?mn.stop():mn.start()},It.addEventListener("sessionstart",bi),It.addEventListener("sessionend",vs),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;V!==null&&V.renderStart(v,F);let $=It.enabled===!0&&It.isPresenting===!0,W=M!==null&&(ht===null||$)&&M.begin(I,ht);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(F),F=It.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,F,ht),T=gt.get(v,y.length),T.init(F),T.state.textureUnits=tt.getTextureUnits(),y.push(T),Yt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Nt.setFromProjectionMatrix(Yt,Mn,F.reversedDepth),Zt=this.localClippingEnabled,ae=Ot.init(this.clippingPlanes,Zt),E=vt.get(v,D.length),E.init(),D.push(E),It.enabled===!0&&It.isPresenting===!0){let Ct=I.xr.getDepthSensingMesh();Ct!==null&&wi(Ct,F,-1/0,I.sortObjects)}wi(v,F,0,I.sortObjects),E.finish(),V!==null&&V.updateLights(T.state.lightsArray),I.sortObjects===!0&&E.sort(At,qt),ye=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,ye&&Jt.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ot.beginShadows();let H=T.state.shadowsArray;if(kt.render(H,v,F),ae===!0&&Ot.endShadows(),(W&&M.hasRenderPass())===!1){let Ct=E.opaque,Mt=E.transmissive;if(T.setupLights(),F.isArrayCamera){let Pt=F.cameras;if(Mt.length>0)for(let Ut=0,Kt=Pt.length;Ut<Kt;Ut++){let ie=Pt[Ut];pr(Ct,Mt,v,ie)}ye&&Jt.render(v);for(let Ut=0,Kt=Pt.length;Ut<Kt;Ut++){let ie=Pt[Ut];Ms(E,v,ie,ie.viewport)}}else Mt.length>0&&pr(Ct,Mt,v,F),ye&&Jt.render(v),Ms(E,v,F)}ht!==null&&K===0&&(tt.updateMultisampleRenderTarget(ht),tt.updateRenderTargetMipmap(ht)),W&&M.end(I),v.isScene===!0&&v.onAfterRender(I,v,F),bt.resetDefaultState(),Q=-1,ot=null,y.pop(),y.length>0?(T=y[y.length-1],tt.setTextureUnits(T.state.textureUnits),ae===!0&&Ot.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,V!==null&&V.renderEnd()};function wi(v,F,$,W){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)$=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Nt)){W&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Yt);let Ct=rt.update(v),Mt=v.material;Mt.visible&&E.push(v,Ct,Mt,$,we.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Nt))){let Ct=rt.update(v),Mt=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),we.copy(Ct.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(Yt)),Array.isArray(Mt)){let Pt=Ct.groups;for(let Ut=0,Kt=Pt.length;Ut<Kt;Ut++){let ie=Pt[Ut],Lt=Mt[ie.materialIndex];Lt&&Lt.visible&&E.push(v,Ct,Lt,$,we.z,ie,F)}}else Mt.visible&&E.push(v,Ct,Mt,$,we.z,null,F)}}let dt=v.children;for(let Ct=0,Mt=dt.length;Ct<Mt;Ct++)wi(dt[Ct],F,$,W)}function Ms(v,F,$,W){let{opaque:H,transmissive:dt,transparent:Ct}=v;T.setupLightsView($),ae===!0&&Ot.setGlobalState(I.clippingPlanes,$),W&&_.viewport(lt.copy(W)),H.length>0&&Vn(H,F,$),dt.length>0&&Vn(dt,F,$),Ct.length>0&&Vn(Ct,F,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function pr(v,F,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Lt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Qe(1,1,{generateMipmaps:!0,type:Lt?Tn:an,minFilter:mi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let dt=T.state.transmissionRenderTarget[W.id],Ct=W.viewport||lt;dt.setSize(Ct.z*I.transmissionResolutionScale,Ct.w*I.transmissionResolutionScale);let Mt=I.getRenderTarget(),Pt=I.getActiveCubeFace(),Ut=I.getActiveMipmapLevel();I.setRenderTarget(dt),I.getClearColor(me),oe=I.getClearAlpha(),oe<1&&I.setClearColor(16777215,.5),I.clear(),ye&&Jt.render($);let Kt=I.toneMapping;I.toneMapping=wn;let ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),ae===!0&&Ot.setGlobalState(I.clippingPlanes,W),Vn(v,$,W),tt.updateMultisampleRenderTarget(dt),tt.updateRenderTargetMipmap(dt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Ae=F.length;he<Ae;he++){let g=F[he],{object:b,geometry:k,material:O,group:et}=g;if(O.side===fn&&b.layers.test(W.layers)){let Z=O.side;O.side=Je,O.needsUpdate=!0,mr(b,$,W,k,O,et),O.side=Z,O.needsUpdate=!0,Lt=!0}}Lt===!0&&(tt.updateMultisampleRenderTarget(dt),tt.updateRenderTargetMipmap(dt))}I.setRenderTarget(Mt,Pt,Ut),I.setClearColor(me,oe),ie!==void 0&&(W.viewport=ie),I.toneMapping=Kt}function Vn(v,F,$){let W=F.isScene===!0?F.overrideMaterial:null;for(let H=0,dt=v.length;H<dt;H++){let Ct=v[H],{object:Mt,geometry:Pt,group:Ut}=Ct,Kt=Ct.material;Kt.allowOverride===!0&&W!==null&&(Kt=W),Mt.layers.test($.layers)&&mr(Mt,F,$,Pt,Kt,Ut)}}function mr(v,F,$,W,H,dt){V!==null&&H.isNodeMaterial&&V.setObject(v,H),v.onBeforeRender(I,F,$,W,H,dt),v.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(I,F,$,W,v,dt),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=Je,H.needsUpdate=!0,I.renderBufferDirect($,F,W,H,v,dt),H.side=di,H.needsUpdate=!0,I.renderBufferDirect($,F,W,H,v,dt),H.side=fn):I.renderBufferDirect($,F,W,H,v,dt),v.onAfterRender(I,F,$,W,H,dt)}function Ke(v,F,$){F.isScene!==!0&&(F=ze);let W=Y.get(v),H=T.state.lights,dt=T.state.shadowsArray,Ct=H.state.version,Mt=_t.getParameters(v,H.state,dt,F,$,T.state.lightProbeGridArray),Pt=_t.getProgramCacheKey(Mt),Ut=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let Kt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=pt.get(v.envMap||W.environment,Kt),W.envMapRotation=W.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Ut===void 0&&(v.addEventListener("dispose",tn),Ut=new Map,W.programs=Ut);let ie=Ut.get(Pt);if(ie!==void 0){if(W.currentProgram===ie&&W.lightsStateVersion===Ct)return Ss(v,Mt),ie}else Mt.uniforms=_t.getUniforms(v),V!==null&&v.isNodeMaterial&&V.build(v,$,Mt),v.onBeforeCompile(Mt,I),ie=_t.acquireProgram(Mt,Pt),Ut.set(Pt,ie),W.uniforms=Mt.uniforms;let Lt=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),Ss(v,Mt),W.needsLights=Ea(v),W.lightsStateVersion=Ct,W.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.sunLights.value=H.state.sun,Lt.sunLightShadows.value=H.state.sunShadow,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.sunShadowMatrix.value=H.state.sunShadowMatrix,Lt.sunShadowCascade.value=H.state.sunShadowCascade,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=ie,W.uniformsList=null,ie}function gn(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=ds.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Ss(v,F){let $=Y.get(v);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function bs(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;w.setFromMatrixPosition(F.matrixWorld);for(let $=0,W=v.length;$<W;$++){let H=v[$];if(H.texture!==null&&H.boundingBox.containsPoint(w))return H}return null}function wa(v,F,$,W,H){F.isScene!==!0&&(F=ze),tt.resetTextureUnits();let dt=F.fog,Ct=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Mt=ht===null?I.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:le.workingColorSpace,Pt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ut=pt.get(W.envMap||Ct,Pt),Kt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ie=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,Ae=!!$.morphAttributes.color,g=wn;W.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(g=I.toneMapping);let b=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,k=b!==void 0?b.length:0,O=Y.get(W),et=T.state.lights;if(ae===!0&&(Zt===!0||v!==ot)){let ee=v===ot&&W.id===Q;Ot.setState(W,v,ee)}let Z=!1;W.version===O.__version?(O.needsLights&&O.lightsStateVersion!==et.state.version||O.outputColorSpace!==Mt||H.isBatchedMesh&&O.batching===!1||!H.isBatchedMesh&&O.batching===!0||H.isBatchedMesh&&O.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&O.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&O.instancing===!1||!H.isInstancedMesh&&O.instancing===!0||H.isSkinnedMesh&&O.skinning===!1||!H.isSkinnedMesh&&O.skinning===!0||H.isInstancedMesh&&O.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&O.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&O.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&O.instancingMorph===!1&&H.morphTexture!==null||O.envMap!==Ut||W.fog===!0&&O.fog!==dt||O.numClippingPlanes!==void 0&&(O.numClippingPlanes!==Ot.numPlanes||O.numIntersection!==Ot.numIntersection)||O.vertexAlphas!==Kt||O.vertexTangents!==ie||O.morphTargets!==Lt||O.morphNormals!==he||O.morphColors!==Ae||O.toneMapping!==g||O.morphTargetsCount!==k||!!O.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Z=!0):(Z=!0,O.__version=W.version);let ft=O.currentProgram;Z===!0&&(ft=Ke(W,F,H),V&&W.isNodeMaterial&&V.onUpdateProgram(W,ft,O));let Et=!1,Gt=!1,Rt=!1,St=ft.getUniforms(),Xt=O.uniforms;if(_.useProgram(ft.program)&&(Et=!0,Gt=!0,Rt=!0),W.id!==Q&&(Q=W.id,Gt=!0),O.needsLights){let ee=bs(T.state.lightProbeGridArray,H);O.lightProbeGrid!==ee&&(O.lightProbeGrid=ee,Gt=!0)}if(Et||ot!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),St.setValue(z,"projectionMatrix",v.projectionMatrix),St.setValue(z,"viewMatrix",v.matrixWorldInverse);let Ye=St.map.cameraPosition;Ye!==void 0&&Ye.setValue(z,de.setFromMatrixPosition(v.matrixWorld)),P.logarithmicDepthBuffer&&St.setValue(z,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(z,"isOrthographic",v.isOrthographicCamera===!0),ot!==v&&(ot=v,Gt=!0,Rt=!0)}if(O.needsLights&&(et.state.sunShadowMap.length>0&&St.setValue(z,"sunShadowMap",et.state.sunShadowMap,tt),et.state.directionalShadowMap.length>0&&St.setValue(z,"directionalShadowMap",et.state.directionalShadowMap,tt),et.state.spotShadowMap.length>0&&St.setValue(z,"spotShadowMap",et.state.spotShadowMap,tt),et.state.pointShadowMap.length>0&&St.setValue(z,"pointShadowMap",et.state.pointShadowMap,tt)),H.isSkinnedMesh){St.setOptional(z,H,"bindMatrix"),St.setOptional(z,H,"bindMatrixInverse");let ee=H.skeleton;ee&&(ee.boneTexture===null&&ee.computeBoneTexture(),St.setValue(z,"boneTexture",ee.boneTexture,tt))}H.isBatchedMesh&&(St.setOptional(z,H,"batchingTexture"),St.setValue(z,"batchingTexture",H._matricesTexture,tt),St.setOptional(z,H,"batchingIdTexture"),St.setValue(z,"batchingIdTexture",H._indirectTexture,tt),St.setOptional(z,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(z,"batchingColorTexture",H._colorsTexture,tt));let xe=$.morphAttributes;if((xe.position!==void 0||xe.normal!==void 0||xe.color!==void 0)&&B.update(H,$,ft),(Gt||O.receiveShadow!==H.receiveShadow)&&(O.receiveShadow=H.receiveShadow,St.setValue(z,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Ag()),Gt){if(St.setValue(z,"toneMappingExposure",I.toneMappingExposure),O.needsLights&&Aa(Xt,Rt),dt&&W.fog===!0&&Ft.refreshFogUniforms(Xt,dt),Ft.refreshMaterialUniforms(Xt,W,at,J,T.state.transmissionRenderTarget[v.id]),O.needsLights&&O.lightProbeGrid){let ee=O.lightProbeGrid;Xt.probesSH.value=ee.texture,Xt.probesMin.value.copy(ee.boundingBox.min),Xt.probesMax.value.copy(ee.boundingBox.max),Xt.probesResolution.value.copy(ee.resolution)}ds.upload(z,gn(O),Xt,tt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ds.upload(z,gn(O),Xt,tt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(z,"center",H.center),St.setValue(z,"modelViewMatrix",H.modelViewMatrix),St.setValue(z,"normalMatrix",H.normalMatrix),St.setValue(z,"modelMatrix",H.matrixWorld),W.uniformsGroups!==void 0){let ee=W.uniformsGroups;for(let Ye=0,je=ee.length;Ye<je;Ye++){let Ai=ee[Ye];ct.update(Ai,ft),ct.bind(Ai,ft)}}return ft}function Aa(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Ea(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(v,F,$){let W=Y.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=F,Y.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let $=Y.get(v);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,$=0){ht=v,nt=F,K=$;let W=null,H=!1,dt=!1;if(v){let Mt=Y.get(v);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(z.FRAMEBUFFER,Mt.__webglFramebuffer),lt.copy(v.viewport),zt.copy(v.scissor),Dt=v.scissorTest,_.viewport(lt),_.scissor(zt),_.setScissorTest(Dt),Q=-1;return}else if(Mt.__webglFramebuffer===void 0)tt.setupRenderTarget(v);else if(Mt.__hasExternalTextures)tt.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Kt=v.depthTexture;if(Mt.__boundDepthTexture!==Kt){if(Kt!==null&&Y.has(Kt)&&(v.width!==Kt.image.width||v.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(v)}}let Pt=v.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);let Ut=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?W=Ut[F][$]:W=Ut[F],H=!0):v.samples>0&&tt.useMultisampledRTT(v)===!1?W=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?W=Ut[$]:W=Ut,lt.copy(v.viewport),zt.copy(v.scissor),Dt=v.scissorTest}else lt.copy(Tt).multiplyScalar(at).floor(),zt.copy(te).multiplyScalar(at).floor(),Dt=$t;if($!==0&&(W=N),_.bindFramebuffer(z.FRAMEBUFFER,W)&&_.drawBuffers(v,W),_.viewport(lt),_.scissor(zt),_.setScissorTest(Dt),H){let Mt=Y.get(v.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,$)}else if(dt){let Mt=F;for(let Pt=0;Pt<v.textures.length;Pt++){let Ut=Y.get(v.textures[Pt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,$,Mt)}}else if(v!==null&&$!==0){let Mt=Y.get(v.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,$)}Q=-1};function jn(v){let F=Y.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=P.textureFormatReadable(v.format),F.__typeReadable=P.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,$,W,H,dt,Ct,Mt=0){if(!(v&&v.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){_.bindFramebuffer(z.FRAMEBUFFER,Pt);try{let Ut=v.textures[Mt],Kt=Ut.format,ie=Ut.type;v.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);let Lt=jn(Ut);if(Lt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-W&&$>=0&&$<=v.height-H&&z.readPixels(F,$,W,H,yt.convert(Kt),yt.convert(ie),dt)}finally{let Ut=ht!==null?Y.get(ht).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(v,F,$,W,H,dt,Ct,Mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(F>=0&&F<=v.width-W&&$>=0&&$<=v.height-H){_.bindFramebuffer(z.FRAMEBUFFER,Pt);let Ut=v.textures[Mt],Kt=Ut.format,ie=Ut.type;v.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);let Lt=jn(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.bufferData(z.PIXEL_PACK_BUFFER,dt.byteLength,z.STREAM_READ),z.readPixels(F,$,W,H,yt.convert(Kt),yt.convert(ie),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ae=ht!==null?Y.get(ht).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Ae);let g=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mh(z,g,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,dt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(he),z.deleteSync(g),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,$=0){let W=Math.pow(2,-$),H=Math.floor(v.image.width*W),dt=Math.floor(v.image.height*W),Ct=F!==null?F.x:0,Mt=F!==null?F.y:0;tt.setTexture2D(v,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Ct,Mt,H,dt),_.unbindTexture()},this.copyTextureToTexture=function(v,F,$=null,W=null,H=0,dt=0){let Ct,Mt,Pt,Ut,Kt,ie,Lt,he,Ae,g=v.isCompressedTexture?v.mipmaps[dt]:v.image;if($!==null)Ct=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Ut=$.min.x,Kt=$.min.y,ie=$.isBox3?$.min.z:0;else{let Xt=Math.pow(2,-H);Ct=Math.floor(g.width*Xt),Mt=Math.floor(g.height*Xt),v.isDataArrayTexture?Pt=g.depth:v.isData3DTexture?Pt=Math.floor(g.depth*Xt):Pt=1,Ut=0,Kt=0,ie=0}W!==null?(Lt=W.x,he=W.y,Ae=W.z):(Lt=0,he=0,Ae=0);let b=yt.convert(F.format),k=yt.convert(F.type),O;F.isData3DTexture?(tt.setTexture3D(F,0),O=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),O=z.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),O=z.TEXTURE_2D),_.activeTexture(z.TEXTURE0),_.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let et=_.getParameter(z.UNPACK_ROW_LENGTH),Z=_.getParameter(z.UNPACK_IMAGE_HEIGHT),ft=_.getParameter(z.UNPACK_SKIP_PIXELS),Et=_.getParameter(z.UNPACK_SKIP_ROWS),Gt=_.getParameter(z.UNPACK_SKIP_IMAGES);_.pixelStorei(z.UNPACK_ROW_LENGTH,g.width),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,g.height),_.pixelStorei(z.UNPACK_SKIP_PIXELS,Ut),_.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);let Rt=v.isDataArrayTexture||v.isData3DTexture,St=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let Xt=Y.get(v),xe=Y.get(F),ee=Y.get(Xt.__renderTarget),Ye=Y.get(xe.__renderTarget);_.bindFramebuffer(z.READ_FRAMEBUFFER,ee.__webglFramebuffer),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let je=0;je<Pt;je++)Rt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,H,ie+je),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,dt,Ae+je)),z.blitFramebuffer(Ut,Kt,Ct,Mt,Lt,he,Ct,Mt,z.DEPTH_BUFFER_BIT,z.NEAREST);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||Y.has(v)){let Xt=Y.get(v),xe=Y.get(F);_.bindFramebuffer(z.READ_FRAMEBUFFER,U),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,X);for(let ee=0;ee<Pt;ee++)Rt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,H,ie+ee):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,H),St?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xe.__webglTexture,dt,Ae+ee):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xe.__webglTexture,dt),H!==0?z.blitFramebuffer(Ut,Kt,Ct,Mt,Lt,he,Ct,Mt,z.COLOR_BUFFER_BIT,z.NEAREST):St?z.copyTexSubImage3D(O,dt,Lt,he,Ae+ee,Ut,Kt,Ct,Mt):z.copyTexSubImage2D(O,dt,Lt,he,Ut,Kt,Ct,Mt);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else St?v.isDataTexture||v.isData3DTexture?z.texSubImage3D(O,dt,Lt,he,Ae,Ct,Mt,Pt,b,k,g.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(O,dt,Lt,he,Ae,Ct,Mt,Pt,b,g.data):z.texSubImage3D(O,dt,Lt,he,Ae,Ct,Mt,Pt,b,k,g):v.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,dt,Lt,he,Ct,Mt,b,k,g.data):v.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,dt,Lt,he,g.width,g.height,b,g.data):z.texSubImage2D(z.TEXTURE_2D,dt,Lt,he,Ct,Mt,b,k,g);_.pixelStorei(z.UNPACK_ROW_LENGTH,et),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Z),_.pixelStorei(z.UNPACK_SKIP_PIXELS,ft),_.pixelStorei(z.UNPACK_SKIP_ROWS,Et),_.pixelStorei(z.UNPACK_SKIP_IMAGES,Gt),dt===0&&F.generateMipmaps&&z.generateMipmap(O),_.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&tt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?tt.setTextureCube(v,0):v.isData3DTexture?tt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?tt.setTexture2DArray(v,0):tt.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){nt=0,K=0,ht=null,_.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Eg=["top","side","bottom"],Tg={slab_bottom:1,slab_top:1,stairs:1},Jh=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function Cg(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Jh[n.facing|0]]:null}function Kh(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let M of t){if(!M||typeof M.id!="string")throw new Error("block without id");if(!Number.isInteger(M.n)||M.n<0||M.n>255)throw new Error("bad n for "+M.id);if(i[M.n])throw new Error("duplicate n "+M.n+" ("+M.id+")");if(s[M.id])throw new Error("duplicate id "+M.id);let I=M.colors||{},L=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},M);if(L.placeable=L.n!==0&&!L.liquid,L.colors={top:I.top||"#888888",side:I.side||I.top||"#888888",bottom:I.bottom||I.top||"#888888"},L.opaque=L.solid&&!L.transparent&&!L.cutout&&!Tg[L.shape],L.tile={},L.tileOf&&s[L.tileOf])L.tile=Object.assign({},s[L.tileOf].tile);else if(L.n!==0){let V={};for(let N of Eg){let U=L.colors[N]+"|"+(L.pattern==="grass"||L.pattern==="log"||L.pattern==="lamp"||L.pattern==="table"||L.pattern==="stele"||L.pattern==="torch"||L.pattern==="bed"||L.pattern==="snow"||L.pattern==="lantern"||L.pattern==="bookshelf"||L.pattern==="hay"||L.pattern==="barrel"||L.pattern==="chest"||L.pattern==="farmland"?N:"");V[U]===void 0&&(V[U]=r.length,r.push({block:L.id,face:N,color:L.colors[N],pattern:L.pattern,accent:L.accent||null,top:L.colors.top})),L.tile[N]=V[U]}}i[L.n]=L,s[L.id]=L}if(!s.air)throw new Error("registry needs air");for(let M of e){if(s[M.id])throw new Error("duplicate id "+M.id);s[M.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},M)}for(let M in s){let I=s[M].drops;if(I&&I!=="self"&&!s[I])throw new Error(M+" drops unknown "+I)}let o=M=>(typeof M=="number"?i[M]:s[M])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),f=new Uint8Array(256),h=new Uint8Array(256),u=new Uint8Array(256),m={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},x=new Uint8Array(256),S=new Array(256).fill(null),p=new Uint8Array(256),d=new Uint8Array(256),A=new Uint8Array(256),R=new Uint8Array(256),w=new Uint8Array(256),E=new Int16Array(256).fill(-1),T=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((M,I)=>{M&&(p[I]=M.solid?1:0,d[I]=M.opaque?1:0,A[I]=M.transparent?1:0,R[I]=M.emissive?1:0,w[I]=M.liquid?1:0,a[I]=M.light!=null?M.light:M.emissive?15:0,l[I]=M.liquid?2:0,c[I]=m[M.shape]||0,f[I]=M.cutout?1:0,h[I]=M.climbable?1:0,u[I]=M.plant?1:0,x[I]=M.facing|0,M.solid&&(S[I]=Cg(M)),I&&(E[I]=M.tile.top,T[I]=M.tile.side,D[I]=M.tile.bottom))});let y=(n&&n.blueprints||[]).map(M=>Object.assign({kind:"blueprint"},M));return{blocks:i.filter(Boolean),items:e.map(M=>s[M.id]),blueprints:y,tiles:r,get:o,toolOf:M=>{let I=M&&s[M];return I&&I.kind==="item"&&I.tool&&typeof I.tool=="object"?I.tool:null},num:M=>{let I=s[M];if(!I||I.kind!=="block")throw new Error("no block "+M);return I.n},name:M=>{let I=o(M);return I?I.name_zh:String(M)},maxStack:M=>{let I=s[M];return I?I.maxStack:64},dropOf:M=>{let I=i[M];return!I||!I.drops?null:I.drops==="self"?I.id:I.drops},breakTime:M=>{let I=i[M];return!I||I.hardness<0?1/0:.25+I.hardness*.55},flat:{solid:p,opaque:d,trans:A,emit:R,liquid:w,tileTop:E,tileSide:T,tileBottom:D,lightEmit:a,attn:l,shape:c,cutout:f,climb:h,plant:u,facing:x,boxes:S}}}var Jn=n=>Math.floor(n/16);var _i=(n,t,e)=>(t*16+e)*16+n;var Fi=(n,t)=>n+","+t;function Kl(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Jn(n),s=Jn(e);return{cx:i,cz:s,i:_i(n-i*16,t,e-s*16)}}function jh(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function jl(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,f=t,h=t+s,u=e-a,m=e+a,x=Math.floor(l),S=Math.floor(c-1e-6),p=Math.floor(f),d=Math.floor(h-1e-6),A=Math.floor(u),R=Math.floor(m-1e-6),w=!1;for(let E=p;E<=d;E++)for(let T=A;T<=R;T++)for(let D=x;D<=S;D++){let y=r(D,E,T);if(!y)continue;let M=y===!0?Rg:y;for(let I of M){let L=D+I[0],V=E+I[1],N=T+I[2],U=D+I[3],X=E+I[4],nt=T+I[5];if(!(U<=l+1e-6||L>=c-1e-6||X<=f+1e-6||V>=h-1e-6||nt<=u+1e-6||N>=m-1e-6)){if(!o)return!0;w=!0,o.push([L,V,N,U,X,nt])}}}return w}var Rg=[[0,0,0,1,1,1]],ga=(n,t,e,i,s,r)=>jl(n,t,e,i,s,r,null);function Qh(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,f=0,h=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,u=Math.max(1,Math.ceil(h/.3)),m=e/u,x=[];for(let S=0;S<u;S++){let p=t.y*m;p&&(x.length=0,jl(n.x,n.y+p,n.z,r,o,i,x)?(p<0?(n.y=Math.max(...x.map(d=>d[4])),c=!0):n.y=Math.min(...x.map(d=>d[1]))-o,t.y=0):n.y+=p);for(let d of["x","z"]){let A=t[d]*m;if(!A)continue;let R={x:n.x,y:n.y,z:n.z};if(R[d]+=A,x.length=0,!jl(R.x,R.y,R.z,r,o,i,x)){n[d]=R[d];continue}if(a&&(c||s.grounded)){let E=Math.max(...x.map(T=>T[4]));if(E-n.y>0&&E-n.y<=1.01&&!ga(R.x,E,R.z,r,o,i)&&!ga(n.x,E,n.z,r,o,i)){f+=E-n.y,n.y=E,n[d]=R[d];continue}}let w=d==="x"?0:2;n[d]=A>0?Math.min(...x.map(E=>E[w]))-l-1e-4:Math.max(...x.map(E=>E[w+3]))+l+1e-4,ga(n.x,n.y,n.z,r,o,i)&&(n[d]=R[d]-A),t[d]=0}}return!c&&t.y<=0&&ga(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:f}}function Ig(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let f=[e+c[0],i+c[1],s+c[2]],h=[e+c[3],i+c[4],s+c[5]],u=0,m=1/0,x=-1,S=!0;for(let p=0;p<3&&S;p++){if(Math.abs(a[p])<1e-12){(o[p]<f[p]||o[p]>h[p])&&(S=!1);continue}let d=(f[p]-o[p])/a[p],A=(h[p]-o[p])/a[p];d>A&&([d,A]=[A,d]),d>u&&(u=d,x=p),A<m&&(m=A),u>m&&(S=!1)}if(S&&(!l||u<l.t)){let p=[0,0,0];x>=0&&(p[x]=-Math.sign(a[x])),l={t:u,face:x>=0?p:null}}}return l}function Ql(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),f=Math.sign(t.y),h=Math.sign(t.z),u=c?Math.abs(1/t.x):1/0,m=f?Math.abs(1/t.y):1/0,x=h?Math.abs(1/t.z):1/0,S=c?(c>0?o+1-n.x:n.x-o)*u:1/0,p=f?(f>0?a+1-n.y:n.y-a)*m:1/0,d=h?(h>0?l+1-n.z:n.z-l)*x:1/0,A=[0,0,0],R=0;for(;R<=e;){let w=i(o,a,l);if(w&&s(w)){let E=r&&r(w);if(!E)return{x:o,y:a,z:l,n:w,face:A,dist:R};let T=Ig(n,t,o,a,l,E);if(T&&T.t<=e)return{x:o,y:a,z:l,n:w,face:T.face||A,dist:T.t}}S<p&&S<d?(o+=c,R=S,S+=u,A=[-c,0,0]):p<d?(a+=f,R=p,p+=m,A=[0,-f,0]):(l+=h,R=d,d+=x,A=[0,0,-h])}return null}function tu(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,f=1/0;for(let h=0;h<3;h++){if(Math.abs(l[h])<1e-9){if(a[h]<r[h]||a[h]>o[h])return null;continue}let u=(r[h]-a[h])/l[h],m=(o[h]-a[h])/l[h];if(u>m&&([u,m]=[m,u]),c=Math.max(c,u),f=Math.min(f,m),c>f)return null}return c}function Pg(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var eu=(n,t)=>n?t?2:1:0;function lr(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function nu(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}var tc=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function xa(n){let t=Pg(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Lg(){return new Map}function su(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function ec(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Dg(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function ru(n){let t=Lg();for(let e in n||{})t.set(e,Dg(n[e]));return t}function ou(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}var _a=16;var eM=18;var cr=32;function Ng(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ce=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],ut=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function Ug(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function be(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Kn(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}be(n,o)}var Fg=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function Og(n,t){let e=Ce(t.color),i=Ng(Ug(t.block+t.face)),s=cr;if(Fg.has(t.pattern)){Bg(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=ut(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Ce(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=ut(e,1.12);for(let h=0;h<4;h++)Kn(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=ut(e,.96);for(let h=0;h<4;h++)Kn(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let h=Ce(t.top);n.fillStyle=ut(h);let u=[[0,0],[s,0]];for(let m=s;m>=0;m-=4)u.push([m,8+Math.round(i()*5)]);be(n,u)}if(o==="stone"||o==="bedrock")for(let h=0;h<5;h++)n.fillStyle=ut(e,i()<.5?.9:1.08),Kn(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let h=0;h<4;h++)n.fillStyle=ut(e,.92),Kn(n,i,i()*s,i()*s,5);n.fillStyle=ut(a);for(let h=0;h<5;h++)Kn(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let h=0;h<26;h++)n.fillStyle=ut(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=ut(e,.82),n.fillRect(h,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=ut(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=ut(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let h=0;h<9;h++)n.fillStyle=ut(e,i()<.5?.78:1.15),Kn(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=ut(e,.78),n.fillRect(0,h,s,1);n.fillStyle=ut(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=ut(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=ut(e,.7),n.fillRect(6,10,7,14),n.fillStyle=ut([185,182,174]),be(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=ut(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",be(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=ut(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(o==="gold"&&(n.fillStyle=ut(e,1.15),be(n,[[0,0],[s,0],[0,s]]),n.fillStyle=ut(e,.9),be(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=ut(Ce("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=ut(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=ut(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=ut(Ce("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=ut(Ce("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=ut(a),n.fillRect(14,0,4,4)):(n.fillStyle=ut(Ce(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=ut(a),n.fillRect(0,0,s,10),n.fillStyle=ut(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=ut(Ce("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=ut(a),n.fillRect(0,0,9,14))),o==="wool")for(let h=0;h<7;h++)n.fillStyle=ut(e,i()<.5?.94:1.04),Kn(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=ut(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=ut(a,1.3),be(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=ut(Ce("#EFEBDD"),1,.8),be(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=ut(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=ut(e,.9),n.fillRect(0,h,s,2);if(o==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=ut(e,.82),n.fillRect(h,0,2,s);n.fillStyle=ut(Ce("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=ut(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",be(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",be(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=ut(e,1.1),be(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=ut(e,.92),be(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=ut(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let u=h/8%2?0:8;for(let m=u;m<s;m+=16)n.fillRect(m,h,1,8)}}if(o==="mossy"){n.fillStyle=ut(a);for(let h=0;h<6;h++)Kn(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=ut(e,.6),be(n,[[4,2],[12,14],[10,15],[3,4]]),be(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=ut(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=ut(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=ut(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=ut(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=ut(e,1.08),be(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=ut(Ce("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let u=h/8%2?0:8;for(let m=u;m<s;m+=16)n.fillRect(m,h,2,6)}}if(o==="checker"&&(n.fillStyle=ut(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let u of[3,18]){let m=3;for(;m<s-4;){let x=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(m,u+Math.floor(i()*3),x,11),m+=x+1}}n.fillStyle=ut(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=ut(e,.8),n.fillRect(0,h,s,1);if(o==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=ut(e,.88),n.fillRect(h,0,1,s);n.fillStyle=ut(Ce("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=ut(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=ut(e,.85),n.fillRect(h,0,1,s);n.fillStyle=ut(Ce("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=ut(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=ut(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=ut(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),be(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let h=7;h<s;h+=8)n.fillStyle=ut(e,.85),n.fillRect(h,0,1,s);n.fillStyle=ut(Ce("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=ut(Ce("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=ut(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=ut(e),n.fillRect(0,0,s,s),n.fillStyle=ut(Ce("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let h=7;h<s;h+=8)n.fillStyle=ut(e,.85),n.fillRect(0,h,s,1);t.face==="side"&&(n.fillStyle=ut(a),n.fillRect(0,11,s,3),n.fillStyle=ut(Ce("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let h=3;h<s;h+=6)n.fillStyle=ut(e,.72),n.fillRect(0,h,s,2);if(o==="furnace"){for(let h=0;h<4;h++)n.fillStyle=ut(e,i()<.5?.9:1.08),Kn(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=ut(a),n.fillRect(8,15,s-16,11),n.fillStyle=ut(Ce("#E0352B"),1,.85),be(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=ut(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=ut(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=ut(a),be(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let h=0;h<c.length;h+=4){let u=1+(i()-.5)*.09;c[h]=Math.min(255,c[h]*u),c[h+1]=Math.min(255,c[h+1]*u),c[h+2]=Math.min(255,c[h+2]*u)}n.putImageData(l,0,0);let f=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=f,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function lu(n){let t=document.createElement("canvas");t.width=t.height=cr*_a;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=cr;let a=o.getContext("2d",{willReadFrequently:!0});Og(a,s),e.drawImage(o,r%_a*cr,Math.floor(r/_a)*cr),i[r]=o}),{canvas:t,tileCanvas:i}}function Bg(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Ce(t.accent):e,a=(l,c,f)=>{n.fillStyle=f,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,ut(e)),n.fillStyle=ut(e,1.1),be(n,[[16,26],[9,20],[15,22]]),be(n,[[17,24],[24,18],[18,21]]),n.fillStyle=ut(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;be(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=ut(Ce("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),f=14+Math.floor(i()*14);n.fillStyle=ut(e,i()<.5?.9:1.1),be(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-f]])}else if(r==="deadbush")n.strokeStyle=ut(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=ut(e),n.fillRect(14,18,4,14),n.fillStyle=ut(o),be(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=ut(Ce("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=ut(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=ut(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let f=0;f<5;f++){let h=5+f*5;n.fillStyle=ut(e),n.fillRect(h,s-c,2,c),l===3&&(n.fillStyle=ut(o),be(n,[[h-2,s-c+9],[h+1,s-c-1],[h+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let f=ut(Ce("#8C6640")),h=ut(e),u=s*.33,m=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=f;for(let x=2;x<s;x+=6)n.fillRect(4,x,s-8,3);n.fillStyle=h,n.fillRect(u-1.5,0,3,s),n.fillRect(m-1.5,0,3,s),t.accent&&(n.fillStyle=ut(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=f,n.lineWidth=3;for(let x=0;x<5;x++){let S=Math.PI/2+(x+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(S)*(s-m-4),Math.sin(S)*(s-m-4)),n.lineTo(s+Math.cos(S)*(s-u+4),Math.sin(S)*(s-u+4)),n.stroke()}n.strokeStyle=h;for(let x of[s-u,s-m])n.beginPath(),n.arc(s,0,x,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=ut(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var cu=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,hu=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function zg(n,t){let e=Jn(n),i=Jn(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,f=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,f)<=14&&s.push([e+o,i+r])}return s}function fu(n){let t=new bn(n);t.magFilter=Pe,t.minFilter=Pe,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new We({uniforms:e,vertexShader:cu,fragmentShader:hu}),s=new We({uniforms:e,vertexShader:cu,fragmentShader:hu,transparent:!0,depthWrite:!1,side:fn});return{opaque:i,trans:s,uniforms:e,tex:t}}function uu(n){let t=new rn;return t.setAttribute("position",new De(n.pos,3)),t.setAttribute("uv",new De(n.uv,2)),t.setAttribute("light",new De(n.light,1)),t.setAttribute("lt",new De(n.lt,2,!0)),t.setIndex(new De(n.index,1)),t.computeBoundingSphere(),t}var ya=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Fi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Re(uu(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Re(uu(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Jn(t),s=Jn(e),r=jh(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=Fi(l.cx,l.cz);if(this.chunks.has(c))continue;let f={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,f),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:f.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let f=c.cx-i,h=c.cz-s;if(f*f+h*h>o*o){for(let u of["o","t"])c[u]&&(this.scene.remove(c[u]),c[u].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,f]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(f-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(Fi(Jn(t),Jn(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Kl(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Fi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Kl(t,e,i);if(!r)return!1;let o=Fi(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,su(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[f,h]of zg(l,c))this.dirtyMesh.add(Fi(f,h));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Bn={};function ms(n){return Bn[n]||(Bn[n]=new Sn({color:n,transparent:!0}),Bn[n].userData.base=new Qt(n)),Bn[n]}var hr=null;function kg(){if(hr)return hr;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),hr=new bn(n),hr.colorSpace=Le,hr}function du(n,t){let e=new cn,i=n.colors,[s,r]=n.size,o=(l,c,f,h,u,m,x,S)=>{let p=new Re(new un(l,c,f),S||ms(h));return p.position.set(u,m,x),e.add(p),p},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let f=o(.2,.6,.22,i.leg,c,.6,0);f.geometry.translate(0,-.6/2,0),a.push(f)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Bn.__face||(Bn.__face=new Sn({map:kg(),transparent:!0}),Bn.__face.userData.base=new Qt("#ffffff"));let c=[ms(i.head),ms(i.head),ms(i.head),ms(i.head),ms(i.head),Bn.__face],f=new Re(new un(s*.9,s*.8,s*.8),c);f.position.set(0,r*.72+s*.4,0),e.add(f),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let f=n.id==="chicken"?.3:.45,h=o(f,f,f,i.head,0,l+c+f*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,h.position.y+f/2+.05,h.position.z),o(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-f/2-.05));let u=n.id==="chicken"?.06:.18,m=n.id==="chicken"?0:s*.45,x=s*.3;for(let[S,p]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-x,-m],[x,-m],[-x,m],[x,m]]){let d=o(u,l,u,i.leg,S,l/2,p);d.geometry.translate(0,-l/2,0),d.position.y=l,a.push(d)}}return e.userData.legs=a,e}function pu(n){for(let t in Bn){let e=Bn[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function mu(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}function j(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Me=n=>document.querySelector(n);var ke=null,gs=null,nc=null;var zn=()=>window.HIAudio||null,xu=()=>zn()?zn().get():{muted:!1,music:.35,sfx:.7};function va(){try{zn()&&zn().unlock()}catch{}if(!ke){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;ke=new n,gs=ke.createGain(),gs.connect(ke.destination),nc=ke.createBuffer(1,ke.sampleRate,ke.sampleRate);let t=nc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}ke.state==="suspended"&&ke.resume(),ic()}function ic(){if(gs){let n=xu();gs.gain.setTargetAtTime(n.muted?0:n.sfx,ke.currentTime,.03)}}var Ma=()=>xu().muted;function _u(){return zn()&&zn().toggle(),ic(),Ma()}function sc(n){zn()&&zn().set(n),ic()}function yu(n){try{zn()&&zn().scene(n)}catch{}}function vu(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function pn(n,t,e,i,s,r,o){let a=ke.createOscillator(),l=ke.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),vu(l,e,i,s,r),a.connect(l),l.connect(gs),a.start(e),a.stop(e+i+r+.05)}function yi(n,t,e,i,s,r=1){let o=ke.createBufferSource(),a=ke.createBiquadFilter(),l=ke.createGain();o.buffer=nc,a.type=n,a.frequency.value=t,a.Q.value=r,vu(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(gs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var gu={wood:(n,t)=>{pn("sine",190*t,n,.003,.16,.12,95*t),yi("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{yi("highpass",1800*t,n,.1,.06),pn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{yi("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{pn("sine",1900*t,n,.002,.08,.25,1500*t),yi("highpass",4200,n,.06,.12)},soft:(n,t)=>{yi("bandpass",850*t,n,.09,.1,.8)}};function kn(n,t="soft"){if(!ke||Ma())return;let e=ke.currentTime+.005,i=gu[t]||gu.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{yi(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":pn("sine",880,e,.002,.07,.08,1320);break;case"chest":pn("triangle",160,e,.02,.07,.3,120),pn("sine",330,e+.12,.005,.05,.15);break;case"door":pn("sawtooth",120,e,.03,.04,.3,160),yi("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>yi("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":pn("triangle",659,e,.005,.08,.15),pn("triangle",988,e+.1,.005,.08,.25);break;case"coin":pn("sine",1319,e,.002,.08,.08),pn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":pn("triangle",300,e,.005,.1,.18,200);break;default:break}}var vi=(n,t,e,i=0)=>t>=n[0]-i&&t<=n[2]+i&&e>=n[1]-i&&e<=n[3]+i,Mu=(n,t)=>{let e=Math.imul(n,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296};function Hg(n,t,e,i){let s=new Map,r=t.GY,o=n.x+n.w-1,a=n.z+n.d-1,l=(x,S,p,d)=>s.set(x+","+S+","+p,d),c=i?"s2n":n.door,f=i?1:n.doorW||2,h=i?"n":c,u=h==="n"||h==="s"?n.x+(n.w>>1):n.z+(n.d>>1),m=(x,S)=>{let p=h==="n"||h==="s"?x:S,d=u-(f>>1);return p<d||p>=d+f?!1:h==="n"&&S===n.z||h==="s"&&S===a||h==="w"&&x===n.x||h==="e"&&x===o};for(let x=n.x;x<=o;x++)for(let S=n.z;S<=a;S++){let p=x===n.x||x===o||S===n.z||S===a,d=(x===n.x||x===o)&&(S===n.z||S===a);l(x,r,S,e(n.floor||"planks")),l(x,r+n.h+1,S,e(n.roof));for(let A=r+1;A<=r+n.h;A++){if(!p){l(x,A,S,0);continue}if(m(x,S)&&A<=r+2){l(x,A,S,i?e("door"):0);continue}let R=x===n.x||x===o?S-n.z:x-n.x,w=!d&&A===r+2&&R%3===1&&!m((x===n.x||x===o,x),S)&&n.h>=4;l(x,A,S,e(w?"glass":n.wall))}}for(let[x,S,p,d]of n.props||[])l(n.x+S,r+1+p,n.z+d,e(x));return s}function Su(n,t){let e=A=>n.num(A),i=t.GY,s=t.sidewalk,r=t.bound,o=t.homes.map(A=>Object.assign({floor:"planks",door:"n",isHome:!0},A)),a=t.buildings.concat(o),l=a.map(A=>({b:A,arr:[...Hg(A,t,e,!!A.isHome)].map(([R,w])=>R.split(",").map(Number).concat(w))})),c=new Set;for(let A of a){let R=A.isHome?"n":A.door,w=A.x+A.w-1,E=A.z+A.d-1,T=A.x+(A.w>>1),D=A.z+(A.d>>1),y={n:[0,-1],s:[0,1],w:[-1,0],e:[1,0]}[R],M=R==="w"?A.x-1:R==="e"?w+1:T,I=R==="n"?A.z-1:R==="s"?E+1:D;for(let L=0;L<14&&!t.roads.some(V=>vi(V,M,I,s));L++){for(let V of[-1,0,1])c.add((y[0]?M:M+V)+","+(y[0]?I+V:I));M+=y[0],I+=y[1]}}let f=t.park,h=f.pond,u=(A,R)=>A>=f.x&&A<f.x+f.w&&R>=f.z&&R<f.z+f.d,m=new Set;for(let A of t.roads){let R=A[2]-A[0]>A[3]-A[1];for(let w=R?A[0]:A[1];w<=(R?A[2]:A[3]);w+=12)for(let E of[-1,1]){let T=R?w:E<0?A[0]-s:A[2]+s,D=R?E<0?A[1]-s:A[3]+s:w;t.roads.some(y=>y!==A&&vi(y,T,D,s+2))||[-1,0,1].some(y=>[-1,0,1].some(M=>c.has(T+y+","+(D+M))))||m.add(T+","+D)}}let x=(A,R)=>{for(let w of t.roads)if(vi(w,A,R)){let E=w[2]-w[0]>w[3]-w[1];return t.roads.find(y=>y!==w&&vi(y,A,R,5)&&!vi(y,A,R))?(E?A:R)&1?e("crossing"):e("road"):t.roads.some(y=>y!==w&&vi(y,A,R))?e("road"):(E?R===Math.round((w[1]+w[3])/2):A===Math.round((w[0]+w[2])/2))&&((E?A:R)%4+4)%4<2?e("road_line"):e("road")}return t.roads.some(w=>vi(w,A,R,s))||c.has(A+","+R)?e("sidewalk"):u(A,R)&&A>=h[0]&&A<=h[2]&&R>=h[1]&&R<=h[3]?e("water"):e("grass")},S=new Set(f.trees.map(([A,R])=>A+","+R));for(let A=-r+2;A<=r-2;A+=6)for(let[R,w]of[[A,-r+1],[A,r-1],[-r+1,A],[r-1,A]])t.roads.some(E=>vi(E,R,w,s+1))||S.add(R+","+w);function p(A,R){let w=new Uint8Array(16384),E=A*16,T=R*16,D=(y,M,I,L)=>{M>0&&M<64&&(w[_i(y,M,I)]=L)};for(let y=0;y<16;y++)for(let M=0;M<16;M++){let I=E+M,L=T+y;w[_i(M,0,y)]=e("bedrock");for(let N=1;N<i-3;N++)w[_i(M,N,y)]=e("stone");for(let N=i-3;N<i;N++)w[_i(M,N,y)]=e("dirt");let V=x(I,L);if(w[_i(M,i,y)]=V,V===e("water")){w[_i(M,i-1,y)]=e("sand");continue}if(Math.abs(I)>r||Math.abs(L)>r){D(M,i+1,y,e("hedge")),D(M,i+2,y,e("hedge"));continue}if(m.has(I+","+L)){for(let N=i+1;N<=i+3;N++)D(M,N,y,e("lamp_pole"));D(M,i+4,y,e("lantern"));continue}if(S.has(I+","+L)){for(let N=i+1;N<=i+3;N++)D(M,N,y,e("log"));continue}V===e("grass")&&u(I,L)&&Mu(I,L)<.06&&D(M,i+1,y,e(["flower_rose","flower_dandelion","flower_cornflower","tallgrass"][Math.floor(Mu(L,I)*4)]))}for(let y of S){let[M,I]=y.split(",").map(Number);for(let L=-2;L<=2;L++)for(let V=-2;V<=2;V++)for(let N=3;N<=5;N++){if(Math.abs(L)+Math.abs(V)>(N===5?1:3))continue;let U=M+L-E,X=I+V-T;U<0||U>=16||X<0||X>=16||L===0&&V===0&&N===3||D(U,i+N+1,X,e("leaves"))}}for(let{b:y,arr:M}of l)if(!(y.x>E+16-1||y.x+y.w-1<E||y.z>T+16-1||y.z+y.d-1<T))for(let[I,L,V,N]of M){let U=I-E,X=V-T;U>=0&&U<16&&X>=0&&X<16&&D(U,L,X,N)}for(let[y,M,I]of f.benches){let L=y-E,V=M-T;L>=0&&L<16&&V>=0&&V<16&&D(L,i+1,V,e("stairs_planks"+["","_e","_s","_w"][I]))}for(let[y,M,I,L]of t.cars)for(let V=0;V<4;V++)for(let N=0;N<2;N++){let U=y+(L==="x"?V:N),X=M+(L==="x"?N:V),nt=U-E,K=X-T;nt<0||nt>=16||K<0||K>=16||(D(nt,i+1,K,e(I)),D(nt,i+2,K,e(V===1||V===2?"glass":I)))}return w}let d={x:t.spawn[0],y:i+1,z:t.spawn[1],stele:{x:0,y:i+1,z:0}};return{genChunk:p,findSpawn:()=>d,height:()=>i,baseHeight:()=>i,biomeOf:()=>"town",villages:{around:()=>[]},homes:o,buildings:t.buildings,GY:i}}function bu(n,t,e,i,s){return n?t>n.x&&t<n.x+n.w-1&&i>n.z&&i<n.z+n.d-1&&e>=s+1&&e<=s+n.h:!1}function wu(n,t,e){let i=[];for(let s=n.x;s<n.x+n.w;s++)for(let r=n.z;r<n.z+n.d;r++)for(let o=t+1;o<=t+n.h;o++)(s===n.x||s===n.x+n.w-1||r===n.z||r===n.z+n.d-1)&&e(s,o,r)&&i.push([s,o,r]);return i}var Wg=18;function ur(n,t,e=1){let i=t+n.h+1;return{slab:i,roof:e===2?i+n.h+1:i,ladder:[n.x+1,n.z+n.d-2],h:e===2?n.h*2+1:n.h}}function Au(n,t,e={}){let i=e.floors===2?2:1,s=e.theme||"none",r=ur(n,t,i),o=[],a=(p,d,A,R)=>o.push([p,d,A,R]),l=n.x+n.w-1,c=n.z+n.d-1,f=n.x+(n.w>>1),h=f,u=n.z+(n.d>>1),m=(p,d)=>s==="castle"?"stone_bricks":s==="tree"?d?"log":"planks":s==="lighthouse"?(p-t)%4<2?"wool":"wool_red":e.wall||n.wall,x={castle:"stone_bricks",tree:"leaves",lighthouse:"wool_red"}[s]||n.roof;for(let p=n.x;p<=l;p++)for(let d=n.z;d<=c;d++){let A=p===n.x||p===l||d===n.z||d===c,R=(p===n.x||p===l)&&(d===n.z||d===c),w=p===n.x||p===l?d-n.z:p-n.x,E=p===r.ladder[0]&&d===r.ladder[1];for(let T=t+1;T<=t+Wg;T++)if(T>r.roof)a(p,T,d,"air");else if(T===r.roof)a(p,T,d,x);else if(A){if(p===f&&d===n.z&&T<=t+2)continue;let D=(T-t-1)%(n.h+1);a(p,T,d,!R&&D===1&&w%3===1&&n.h>=4?"glass":m(T,R))}else i===2&&T===r.slab?a(p,T,d,E?"air":"planks"):i===2&&E&&T<r.slab&&a(p,T,d,"ladder")}let S=r.roof;if(s==="tree")for(let p=n.x-1;p<=l+1;p++)for(let d=n.z-1;d<=c+1;d++){let A=Math.max(n.x-p,p-l,0),R=Math.max(n.z-d,d-c,0),w=Math.min(p-n.x,l-p,d-n.z,c-d);A||R||(w>=1&&a(p,S+1,d,"leaves"),w>=2&&a(p,S+2,d,"leaves"))}if(s==="lighthouse")for(let p=h-1;p<=h+1;p++)for(let d=u-1;d<=u+1;d++){let A=p!==h||d!==u;for(let R=S+1;R<=S+3;R++)a(p,R,d,(R-S)%2?"wool":"wool_red");a(p,S+4,d,A?"glass":"lantern"),a(p,S+5,d,"wool_red")}if(s==="castle")for(let p=n.x;p<=l;p++)for(let d=n.z;d<=c;d++){let A=p===n.x||p===l||d===n.z||d===c,R=(p===n.x||p===l)&&(d===n.z||d===c),w=p===n.x||p===l?d-n.z:p-n.x;R?(a(p,S+1,d,"stone_bricks"),a(p,S+2,d,"stone_bricks"),a(p,S+3,d,"stone_bricks")):A&&w%2===0&&a(p,S+1,d,"stone_bricks")}return o}function Eu(n,t=Math.random){let e=i=>{let s=i.slice();for(let r=s.length-1;r>0;r--){let o=Math.floor(t()*(r+1));[s[r],s[o]]=[s[o],s[r]]}return s};return{d:n,turn:0,tries:0,coins:0,right:0,phase:"talk",cards:n.turns.map(i=>e(i.cards)),check:e(n.check.options.map((i,s)=>({zh:i,ok:s===n.check.answer})))}}function Tu(n,t){if(n.phase!=="talk")return{ok:!1};let e=n.cards[n.turn][t];if(!e)return{ok:!1};if(!e.ok)return n.tries++,{ok:!1,card:e};let i=n.tries===0;return i&&(n.coins++,n.right++),n.turn++,n.tries=0,n.turn>=n.d.turns.length&&(n.phase="check"),{ok:!0,first:i,card:e,next:n.phase}}function Cu(n,t){if(n.phase!=="check")return{ok:!1};let e=n.check[t];return n.phase="done",e&&e.ok&&(n.coins+=2),{ok:!!(e&&e.ok),coins:n.coins}}function Ru(n,t,e=1.2){if(n.wait>0){n.wait-=t,n.v={x:0,y:0,z:0};return}let i=n.route,s=i[n.ri%i.length],r=s[0]+.5-n.p.x,o=s[1]+.5-n.p.z,a=Math.hypot(r,o);if(a<.15){n.ri=(n.ri+1)%i.length,n.wait=1.5;return}let l=Math.min(a,e*t);n.p.x+=r/a*l,n.p.z+=o/a*l,n.yaw=Math.atan2(-r,-o),n.v={x:r/a*e,y:0,z:o/a*e}}var Cn={skin:["#F3D6B8","#E7CDA6","#C99A6B","#8C5A3A","#5C3A24"],hair:["short","long","bun","spiky","none"],hairColor:["#151714","#5C3A24","#C9904F","#D9B860","#C2443A"],top:["#2F5A34","#3F6E9A","#C2443A","#D9A63A","#C9709F","#EFEBDD","stripe","star"],bottom:["#26302A","#3F6E9A","#8C6640","#5E6660"],hat:["none","cap","beanie","bow","flower","tophat","crown"],glasses:[!1,!0],acc:["none","scarf","goldbadge","backpack","cape"]},Xg=()=>({skin:1,hair:0,hairColor:0,top:0,bottom:0,hat:0,glasses:0,acc:0});function rc(n){let t=Xg();for(let e in t){let i=n&&Number.isInteger(n[e])?n[e]:t[e];t[e]=Math.max(0,Math.min(Cn[e].length-1,i))}return t}var Iu=n=>({skin:Cn.skin[n.skin],hair:Cn.hair[n.hair],hairColor:Cn.hairColor[n.hairColor],top:Cn.top[n.top],bottom:Cn.bottom[n.bottom],hat:Cn.hat[n.hat],glasses:Cn.glasses[n.glasses],acc:Cn.acc[n.acc]}),Pu=(n,t,e,i)=>{let s=n[e+":"+i];return!!s&&!t.has(s)},Lu=n=>Object.fromEntries(n.items.filter(t=>t.slot).map(t=>[t.slot+":"+t.value,t.id]));function Du(n,t,{coins:e=0,hasHome:i=!1}={}){return n?t.has(n.id)?{ok:!1,reason:"owned"}:n.needHome&&!i?{ok:!1,reason:"home"}:e<n.price?{ok:!1,reason:"coins",short:n.price-e}:{ok:!0}:{ok:!1,reason:"missing"}}var Nu=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var xs=(n,t)=>{let e=n.slice();for(let i=e.length-1;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e},Uu=n=>(/^[aeiou]/i.test(n)?"an ":"a ")+n,oc=n=>n.charAt(0).toUpperCase()+n.slice(1),ac=n=>String(n??"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim(),Yg=(n,t)=>!!ac(t)&&[n.a].concat(n.alts||[]).some(e=>ac(e)===ac(t)),Fu=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],$g=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function _s(n){return n>=100?"one hundred"+(n%100?" and "+_s(n%100):""):n<20?Fu[n]:$g[Math.floor(n/10)]+(n%10?"-"+Fu[n%10]:"")}function Ou(n,t=Math.random){return{job:n,i:0,right:0,answers:[],qs:n.exam.map(e=>e.type==="typed"?{...e}:{...e,cards:xs(e.opts.map((i,s)=>({t:i,ok:s===e.a})),t)}),done:!1}}function Bu(n,t){if(n.done)return null;let e=n.qs[n.i],i=e.type==="typed",s=i?Yg(e,t):!!(e.cards[t]&&e.cards[t].ok);return n.answers.push(s),s&&n.right++,n.i++,n.i>=n.qs.length&&(n.done=!0),{ok:s,typed:i,answer:i?e.a:e.opts[e.a],text:i?String(t):(e.cards[t]||{}).t}}var zu=n=>n.done&&n.right>=8;function ku(n,t=Math.random){let e=n.task,i=(o,a)=>xs(o,t).slice(0,a),s=(o,a)=>({t:o,ok:a});if(e.kind==="go"){let o=i(e.calls,1)[0];return{kind:"go",to:o.to,en:o.en,zh:o.zh,pay:e.pay||5,tries:0}}let r;return e.kind==="cases"?r=i(e.cases,3).map(o=>({en:`${e.who}: "${o.says}"`,zh:o.zh,cards:xs([s(o.a,!0),...o.wrong.map(a=>s(a,!1))],t)})):e.kind==="judge"?r=i(e.items,3).map(o=>{let a=i(e.students,1)[0],l="That's right! Good job.",c=h=>`Almost! Say: "${h}"`,f=o.ok?[s(l,!0),s(c(o.wrong[0]),!1),s(c(o.wrong[1]||o.wrong[0]),!1)]:[s(c(o.fix),!0),s(l,!1),s(c(o.wrong[0]),!1)];return{en:`${a} says: "${o.says}"`,zh:"\u9019\u53E5\u8A71\u5C0D\u4E0D\u5C0D\uFF1F\u9078\u8001\u5E2B\u8981\u8AAA\u7684\u8A71\u3002",cards:xs(f,t)}}):e.kind==="change"?r=i(e.items,3).map(o=>{let a=o.price<50&&t()<.5?50:100,l=a-o.price,c=[l+10,l-5,l+5,o.price,l-10].filter(h=>h>0&&h!==l&&h<200),f=[...new Set(c)].slice(0,2);return{en:`${oc(Uu(o.en))} is ${_s(o.price)} dollars. The customer gives you ${_s(a)} dollars. How much change do you give?`,zh:`${o.zh} ${o.price} \u5143\uFF0C\u5BA2\u4EBA\u7D66 ${a} \u5143\uFF0C\u8981\u627E\u591A\u5C11\u9322\uFF1F`,cards:xs([s(oc(_s(l))+" dollars.",!0),...f.map(h=>s(oc(_s(h))+" dollars.",!1))],t),change:l}}):e.kind==="order"&&(r=Array.from({length:3},()=>{let[o,a]=i(e.foods,2),l=1+Math.floor(t()*3),c=1+Math.floor(t()*3),f=(x,S)=>S===1?Uu(x.sg):_s(S)+" "+x.pl,h=(x,S,p,d)=>x.icon.repeat(S)+" \uFF0B "+p.icon.repeat(d),u=i(e.foods.filter(x=>x!==o&&x!==a),1)[0],m=[l===c?h(o,l%3+1,a,c):h(o,c,a,l),h(o,l,u,c)];return{en:`Customer: "I'd like ${f(o,l)} and ${f(a,c)}, please."`,zh:"\u5BA2\u4EBA\u9EDE\u4E86\u4EC0\u9EBC\uFF1F\u9078\u5C0D\u7684\u9910\u76E4\u3002",cards:xs([s(h(o,l,a,c),!0),...m.map(x=>s(x,!1))],t)}})),{kind:"quiz",i:0,right:0,qs:r,coins:0}}function Vu(n,t){if(n.kind!=="quiz"||n.i>=n.qs.length)return null;let e=n.qs[n.i],i=e.cards[t];if(!i)return null;let s=!!i.ok;return s&&(n.right++,n.coins+=2),n.i++,{ok:s,answer:e.cards.find(r=>r.ok).t,text:i.t,done:n.i>=n.qs.length}}var Gu=n=>({lic:Object.assign({},n&&n.lic),wear:n&&n.wear||null,done:Object.assign({},n&&n.done)});function Hu(n,t=null){let e=Iu(n),i=new cn,s=[],r={stripe:"#EFEBDD",star:"#2B3F5C"},o=r[e.top]?e.top:null;o&&(e.top=r[o]),t&&(e.top=t.top||e.top,t.hat&&t.hat!=="none"&&(e.hat="none"));let a=(m,x,S,p,d,A,R,w=i)=>{let E=new Sn({color:p});E.userData.base=new Qt(p),s.push(E);let T=new Re(new un(m,x,S),E);return T.position.set(d,A,R),w.add(T),T},l=(m,x,S,p,d,A)=>{let R=a(m,x,S,p,d,A,0);return R.geometry.translate(0,-x/2+.05,0),R.position.y+=x/2-.05,R},c=l(.24,.75,.26,e.bottom,-.14,.375),f=l(.24,.75,.26,e.bottom,.14,.375);if(a(.56,.7,.3,e.top,0,1.1,0),o==="stripe"&&!t)for(let m of[.86,1.06,1.26])a(.57,.08,.31,"#C2443A",0,m,0);o==="star"&&!t&&(a(.22,.07,.02,"#F2C46B",0,1.16,-.16),a(.07,.22,.02,"#F2C46B",0,1.16,-.16),a(.14,.14,.02,"#F2C46B",0,1.16,-.158));let h=l(.18,.66,.2,e.top,-.38,1.12),u=l(.18,.66,.2,e.top,.38,1.12);if(a(.12,.14,.18,e.skin,-.38,.84,0),a(.12,.14,.18,e.skin,.38,.84,0),a(.5,.48,.46,e.skin,0,1.7,0),a(.08,.08,.02,"#151714",-.11,1.74,-.235),a(.08,.08,.02,"#151714",.11,1.74,-.235),a(.14,.04,.02,"#C2443A",0,1.6,-.235),e.hair==="short"&&a(.54,.16,.5,e.hairColor,0,1.97,.02),e.hair==="long"&&(a(.54,.16,.5,e.hairColor,0,1.97,.02),a(.54,.5,.12,e.hairColor,0,1.7,.25)),e.hair==="bun"&&(a(.54,.14,.5,e.hairColor,0,1.96,.02),a(.22,.2,.22,e.hairColor,0,2.12,.12)),e.hair==="spiky")for(let m of[-.18,0,.18])a(.14,.24,.4,e.hairColor,m,2.02,.02);if(e.hat==="cap"&&(a(.56,.14,.52,"#C2443A",0,2.03,.02),a(.4,.04,.2,"#C2443A",0,1.97,-.32)),e.hat==="beanie"&&a(.56,.24,.52,"#3F6E9A",0,2.06,.02),e.hat==="bow"&&(a(.2,.14,.06,"#C9709F",-.12,2.02,-.1),a(.2,.14,.06,"#C9709F",.12,2.02,-.1)),e.hat==="flower"&&["#C2443A","#F2C46B","#C9709F","#EFEBDD","#3F6E9A","#F2C46B"].forEach((m,x)=>{let S=x/6*Math.PI*2;a(.12,.1,.12,m,Math.sin(S)*.24,1.99,Math.cos(S)*.22)}),e.hat==="tophat"&&(a(.62,.04,.58,"#151714",0,1.97,.02),a(.38,.38,.36,"#151714",0,2.18,.02),a(.39,.06,.37,"#C2443A",0,2.03,.02)),e.hat==="crown"){a(.5,.12,.46,"#D9A63A",0,2,.02);for(let[m,x]of[[-.2,-.2],[0,-.2],[.2,-.2],[-.2,.22],[.2,.22]])a(.09,.12,.06,"#D9A63A",m,2.12,x);a(.07,.07,.02,"#C2443A",0,2,-.215)}if(e.acc==="scarf"&&(a(.56,.1,.34,"#C2443A",0,1.43,0),a(.12,.3,.04,"#C2443A",.12,1.26,-.18)),e.acc==="goldbadge"&&a(.12,.12,.03,"#D9A63A",.14,1.28,-.165),e.acc==="backpack"&&(a(.42,.5,.18,"#D9A63A",0,1.1,.24),a(.3,.16,.04,"#8C6640",0,1,.34)),e.acc==="cape"&&a(.56,.95,.04,"#6E3F8C",0,.98,.18),e.glasses&&(a(.16,.12,.02,"#26302A",-.12,1.74,-.245),a(.16,.12,.02,"#26302A",.12,1.74,-.245)),t){let m=t.hatColor||"#F4F1E8",x=t.extraColor||"#26302A";t.hat==="chef"&&(a(.5,.1,.48,m,0,1.98,.02),a(.44,.36,.42,m,0,2.2,.02)),t.hat==="helmet"&&(a(.6,.22,.56,m,0,2.04,.02),a(.68,.04,.66,m,0,1.94,.04),a(.12,.1,.02,"#C2443A",0,2.06,-.255)),t.hat==="cap"&&(a(.56,.14,.52,m,0,2.03,.02),a(.4,.04,.2,m,0,1.97,-.32)),t.hat==="nurse"&&(a(.4,.12,.3,m,0,2,0),a(.08,.08,.02,"#C2443A",0,2,-.155)),t.extra==="apron"&&a(.44,.62,.03,x,0,1,-.165),t.extra==="tie"&&a(.08,.36,.03,x,0,1.22,-.165),t.extra==="bag"&&(a(.06,.62,.32,x,.32,1.12,0),a(.12,.26,.34,x,.36,.86,0)),t.extra==="stethoscope"&&(a(.04,.3,.03,x,-.12,1.28,-.165),a(.04,.3,.03,x,.12,1.28,-.165),a(.1,.1,.03,"#B9B6AE",.12,1.1,-.17)),t.extra==="badge"&&a(.12,.12,.03,x,-.14,1.28,-.165)}return i.userData={legL:c,legR:f,armL:h,armR:u,mats:s},i}function Wu(n,t,e,i){let s=n.userData,r=Math.sin(e*9)*Math.min(1,t/4)*.7;s.legL.rotation.x=r,s.legR.rotation.x=-r,s.armL.rotation.x=-r,s.armR.rotation.x=r;for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var Xu=()=>{let n=new cn,t=[],e=(i,s,r,o,a,l,c,f=n)=>{let h=new Sn({color:o});h.userData.base=new Qt(o),t.push(h);let u=new Re(new un(i,s,r),h);return u.position.set(a,l,c),f.add(u),u};return n.userData.mats=t,{g:n,bx:e}};function qu(n){let{g:t,bx:e}=Xu(),i=(s,r,o)=>{for(let a of s)for(let l of r)e(.16,o,o,"#26302A",a,o/2,l)};if(n==="bike"){for(let s of[-.55,.55])e(.08,.5,.5,"#26302A",0,.25,s),e(.1,.2,.2,"#B9B6AE",0,.25,s);e(.08,.08,1.1,"#C2443A",0,.5,0),e(.08,.4,.08,"#C2443A",0,.65,-.5),e(.5,.06,.06,"#26302A",0,.86,-.5),e(.22,.06,.3,"#26302A",0,.62,.3)}else if(n==="scooter"){e(.3,.06,1,"#3F6E9A",0,.1,0);for(let s of[-.45,.45])e(.08,.16,.16,"#26302A",0,.08,s);e(.06,.95,.06,"#B9B6AE",0,.58,-.46),e(.5,.06,.06,"#26302A",0,1.05,-.46)}else if(n==="car")e(1.3,.55,2.4,"#C2443A",0,.55,0),e(1.2,.4,1,"#CFE3DF",0,1.02,.15),e(1.32,.08,1.02,"#C2443A",0,1.25,.15),e(.3,.14,.04,"#F2C46B",-.42,.62,-1.21),e(.3,.14,.04,"#F2C46B",.42,.62,-1.21),i([-.66,.66],[-.8,.8],.44);else if(n==="bus"){e(1.9,1.5,4.6,"#D9A63A",0,1,0);for(let s of[-1.6,-.6,.4,1.4])e(1.92,.5,.7,"#CFE3DF",0,1.25,s);e(1.6,.5,.04,"#CFE3DF",0,1.25,-2.31),e(1.92,.12,4.62,"#26302A",0,.5,0),i([-.9,.9],[-1.5,1.5],.6)}else n==="boat"&&(e(1.1,.36,2.2,"#8C6640",0,-.05,0),e(.9,.06,1.9,"#C49A63",0,.12,0),e(1.12,.1,.5,"#EFEBDD",0,.16,-.9));return t}function Yu(n){let{g:t,bx:e}=Xu(),i={dog:["#B88B55","#5C3A24"],cat:["#8C8A84","#5E6660"],rabbit:["#EFEBDD","#E8B4AC"],dalmatian:["#F4F1E8","#151714"]}[n]||["#B88B55","#5C3A24"],s=[-.12,.12].flatMap(o=>[-.18,.18].map(a=>e(.1,.22,.1,i[0],o,.11,a)));e(.32,.26,.56,i[0],0,.34,0);let r=e(.3,.28,.28,i[0],0,.56,-.32);if(e(.05,.05,.02,"#151714",-.08,.6,-.465),e(.05,.05,.02,"#151714",.08,.6,-.465),e(.06,.04,.02,"#151714",0,.52,-.465),n==="rabbit"?(e(.08,.3,.06,i[0],-.08,.84,-.3),e(.08,.3,.06,i[0],.08,.84,-.3),e(.04,.2,.02,i[1],-.08,.84,-.335),e(.04,.2,.02,i[1],.08,.84,-.335),e(.12,.12,.12,"#FFFFFF",0,.38,.32)):n==="cat"?(e(.08,.1,.06,i[1],-.1,.74,-.3),e(.08,.1,.06,i[1],.1,.74,-.3),e(.06,.06,.4,i[0],0,.5,.42)):(e(.08,.16,.08,i[1],-.15,.6,-.28),e(.08,.16,.08,i[1],.15,.6,-.28),e(.06,.06,.24,i[0],0,.46,.36)),n==="dalmatian")for(let[o,a,l]of[[.165,.38,-.1],[-.165,.32,.12],[.1,.475,.15],[-.08,.475,-.12],[.155,.6,-.32]])e(.02+(Math.abs(o)>.15?0:.08),.08,.08+(Math.abs(o)>.15?0:-.06),i[1],o,a,l);return t.userData.legs=s,t.userData.head=r,t}function $u(n,t,e,i){let s=n.userData,r=Math.sin(e*12)*Math.min(1,t/3)*.6;s.legs.forEach((o,a)=>{o.rotation.x=a%3===0?r:-r});for(let o of s.mats)o.color.copy(o.userData.base).multiplyScalar(i)}var Zu=(n,t)=>{for(let e of n.userData.mats)e.color.copy(e.userData.base).multiplyScalar(t)};function Ju(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>lr(n,s),canSpend:s=>n.coins>=s,spend:async s=>nu(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}var cc="c463305695",Ku=new URLSearchParams(location.search),Sa=Ku.get("test")==="1"||window.__HW_TEST__===!0,Kg=720,jg=(n,t)=>{try{let e=localStorage.getItem(n);return e??t}catch{return t}},Qg=(n,t)=>{try{localStorage.setItem(n,t)}catch{}};function ju(n){let t=null,e=()=>t||(t=new Promise((s,r)=>{let o=indexedDB.open(n,1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>s(o.result),o.onerror=()=>r(o.error)})),i=(s,r)=>e().then(o=>new Promise((a,l)=>{let c=o.transaction("kv",s),f=r(c.objectStore("kv"));c.oncomplete=()=>a(f&&f.result),c.onerror=()=>l(c.error)}));return{get:s=>i("readonly",r=>r.get(s)),putMany:s=>i("readwrite",r=>{for(let o in s)r.put(s[o],o)}),all:s=>e().then(r=>new Promise((o,a)=>{let l={},c=r.transaction("kv").objectStore("kv").openCursor(IDBKeyRange.bound(s,s+"\uFFFF"));c.onsuccess=()=>{let f=c.result;f?(l[f.key]=f.value,f.continue()):o(l)},c.onerror=()=>a(c.error)}))}}var Mi=ju("kids_town"),fr=ju("hw_world"),C={started:!1,overlay:null,p:{x:.5,y:22,z:8.5},v:{x:0,y:0,z:0},yaw:Math.PI,pitch:-.15,onGround:!1,view:"tp",bike:!1,keys:{},joy:{x:0,y:0,active:!1},time:.25,frames:[],dirty:new Set,furn:!1,furnSel:0,furnRot:0,zh:jg("kt_zh","on")==="on",touch:matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,pending:0};async function tx(){let[n,t,e,i,s]=await Promise.all(["data/blocks.json","data/town.json","data/dialogues.json","data/jobs.json","data/shop.json"].map(g=>fetch(g,{cache:"no-cache"}).then(b=>b.json()))),r={blocks:n.blocks.concat(t.blocks),items:n.items,blueprints:n.blueprints},o=Kh(r),a=t.GY,l=Su(o,t),c={};try{let[g,b,k,O,et,Z,ft]=await Promise.all([Mi.get("kt_player"),Mi.get("kt_home"),Mi.get("kt_avatar"),fr.get("hw_coins"),Mi.get("kt_jobs"),Mi.get("kt_owned"),Mi.get("kt_pets")]);c={pl:g,home:b,av:k,coins:O,jobs:et,owned:Z,pets:ft,chunks:await Mi.all("kt_chunk:")}}catch(g){console.warn("save unavailable",g)}let f=xa(c.coins),h=ru(Object.fromEntries(Object.entries(c.chunks||{}).map(([g,b])=>[g.slice(9),b]))),u=Object.assign({id:null,locked:!1,wall:null,floor:null},c.home||{}),m=rc(c.av),x=i.jobs,S=Gu(c.jobs),p=new Set(Array.isArray(c.owned)?c.owned:[]),d=Object.fromEntries(s.items.map(g=>[g.id,g])),A=Lu(s),R=Object.assign({active:null,names:{}},c.pets||{}),w=()=>S.wear&&x[S.wear]?x[S.wear].uniform:null;c.pl&&Object.assign(C,{p:{x:c.pl.x,y:c.pl.y,z:c.pl.z},yaw:c.pl.yaw||0,view:c.pl.view||"tp"});let E=Me("#c"),T=new da({canvas:E,antialias:!1,powerPreference:"high-performance"});T.setPixelRatio(Math.min(window.devicePixelRatio||1,C.touch?1.5:1.25));let D=new zs,y=new Qt("#EFEBDD");D.background=y;let M=new He(70,1,.08,200);M.rotation.order="YXZ";let I=lu(o),L=fu(I.canvas),V=new Worker("assets/kt-worker.js?v="+cc),N=new ya({scene:D,mats:L,reg:o,worker:V,diffs:h,onDirty:g=>C.dirty.add(g)});N.setRenderDistance(C.touch?3:4),M.far=N.rd*16+40,M.updateProjectionMatrix();let U=await new Promise(g=>{let b=k=>{k.data.type==="ready"&&(V.removeEventListener("message",b),g(k.data.spawn))};V.addEventListener("message",b),V.postMessage({type:"init",seed:1,blocks:r,structures:t,diffs:Object.fromEntries([...h].map(([k,O])=>[k,ec(O)]))})});c.pl||(C.p={x:U.x,y:U.y,z:U.z});let X=new Set;for(let g of t.buildings.concat(l.homes))for(let b=g.x;b<g.x+g.w;b++)for(let k=g.z;k<g.z+g.d;k++)X.add(b+","+k);let nt=o.num("water"),K=(g,b)=>N.get(g,a,b)===nt,ht=(g,b,k)=>{let O=At();if(O&&J[O].big&&b>a&&b<=a+3&&X.has(g+","+k)||O==="boat"&&(b===a&&K(g,k)||b>a&&b<=a+2&&!K(g,k)))return!0;let et=N.get(g,b,k);return o.flat.solid[et]===1&&(o.flat.boxes[et]||!0)},Q=(g,b,k,O,et,Z="#26302A")=>{let ft=document.createElement("canvas");ft.width=320,ft.height=120;let Et=ft.getContext("2d");Et.fillStyle="#EFEBDD",Et.fillRect(6,6,308,108),Et.strokeStyle=Z,Et.lineWidth=8,Et.strokeRect(6,6,308,108),Et.fillStyle=Z,Et.textAlign="center",Et.font="bold 46px sans-serif",Et.fillText(g,160,60),Et.font="30px sans-serif",Et.fillText(b,160,100);let Gt=new bn(ft);Gt.colorSpace=Le;let Rt=new Pi(new li({map:Gt,depthWrite:!1}));return Rt.scale.set(3.2,1.2,1),Rt.position.set(k,O,et),D.add(Rt),Rt};for(let g of t.buildings){let b=g.door==="s"?g.z+g.d+.4:g.door==="n"?g.z-.4:g.z+g.d/2,k=g.door==="e"?g.x+g.w+.4:g.door==="w"?g.x-.4:g.x+g.w/2;Q(g.en,g.zh,k,a+g.h+.4,b,"#C2443A")}Q(t.park.en,t.park.zh,t.park.x+2,a+3.5,t.park.z-.5,"#3E6B3A");let ot={},lt=()=>{for(let g of l.homes){ot[g.id]&&D.remove(ot[g.id]);let b=u.id===g.id;ot[g.id]=Q(b?"My Home":"For Rent",b?"\u6211\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F",g.x+g.w/2,a+(b&&u.floors===2?ur(g,a,2).h:g.h)+.6,g.z-.4,b?"#3E6B3A":"#5E6660")}};lt();let zt=()=>l.homes.find(g=>g.id===u.id)||null,Dt=()=>{let g=zt();return g&&u.floors===2?Object.assign({},g,{h:ur(g,a,2).h}):g},me=()=>{let g=x[S.wear];if(!g)return null;let b=document.createElement("canvas");b.width=256,b.height=64;let k=b.getContext("2d");k.fillStyle=g.color,k.fillRect(4,4,248,56),k.fillStyle="#EFEBDD",k.textAlign="center",k.font="bold 30px sans-serif",k.fillText(g.en+" "+g.zh,128,43);let O=new bn(b);O.colorSpace=Le;let et=new Pi(new li({map:O,depthWrite:!1}));return et.scale.set(1.6,.4,1),et.position.y=2.75,et},oe=()=>{let g=Hu(m,w()),b=me();return b&&g.add(b),g},ne=oe();D.add(ne);let J={bike:{zh:"\u8173\u8E0F\u8ECA",speed:8,run:10,lift:.35}};for(let g of s.items)g.cat==="ride"&&(J[g.id]=g);let at=Object.fromEntries(Object.keys(J).map(g=>{let b=qu(g);return b.visible=!1,D.add(b),[g,b]})),At=()=>C.bike?J[C.ride]?C.ride:"bike":null,qt=()=>C.bike?J[At()].lift:0,Tt=()=>{D.remove(ne),ne=oe(),D.add(ne)},te=t.npcs.map((g,b)=>{let k={id:g.id,kind:"villager",size:[.6,1.8],speed:1.2,colors:{leg:"#26302A",body:g.robe,head:"#E7CDA6",hat:g.hat}},O={id:b+1,type:g.id,kind:"villager",def:k,n:g,route:g.route,ri:1,wait:0,p:{x:g.route[0][0]+.5,y:a+1,z:g.route[0][1]+.5},v:{x:0,y:0,z:0},yaw:0,gone:!1};return O.g=du(k,g.robe),D.add(O.g),O}),$t={coins:Me("#coins"),ov:Me("#ov"),toasts:Me("#toasts"),joy:Me("#joy"),knob:Me("#knob"),hotbar:Me("#hotbar"),start:Me("#start"),dbg:Ku.get("debug")!==null?Me("#dbg"):null,loading:Me("#loading")};$t.dbg&&($t.dbg.hidden=!1);let Nt=g=>{for(;$t.toasts.children.length>3;)$t.toasts.firstChild.remove();let b=j("div",{class:"toast"},g);$t.toasts.append(b),setTimeout(()=>b.remove(),2400)},ae=()=>{$t.coins.textContent=f.coins},Zt=()=>{$t.ov.hidden=!0,$t.ov.innerHTML="",C.overlay=null,C.talkNpc&&(C.talkNpc.busy=!1,C.talkNpc=null);try{speechSynthesis.cancel()}catch{}},Yt=(g,...b)=>{document.pointerLockElement&&document.exitPointerLock(),$t.ov.innerHTML="",$t.ov.hidden=!1,$t.ov.append(j("div",{class:"panel"},j("div",{class:"p-head"},j("h2",{},g),j("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Zt},"\xD7")),...b))},de=g=>{g<=0||(lr(f,g),C.pending+=g,ae(),kn("coin"))};function we(g,b,k,O,et){try{let Z=JSON.parse(localStorage.getItem("ke_log")||"[]");if(!Array.isArray(Z))return;Z.push(ou({id:g,module:"town",tkey:b,type:k},O,et,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)),localStorage.setItem("ke_log",JSON.stringify(Z))}catch(Z){console.warn("ke_log",Z)}}let ze=(g,b,k,O)=>we(`town:${g}:${b}`,"town:"+g,"town-dialogue",k,O);function ye(g){window.KidsDaily&&window.KidsDaily.rec("english",g)}let ve=g=>{if(!(Sa||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let b=new SpeechSynthesisUtterance(g);b.lang="en-US",b.rate=.9,speechSynthesis.speak(b)}catch{}},z=(g,b,k)=>[j("div",{class:"npc-line"},j("button",{class:"say","aria-label":"\u518D\u5538\u4E00\u6B21",onclick:()=>ve(g)},"\u{1F50A}"),j("b",{class:"en"},g)),b&&k?j("p",{class:"muted"},b):null],Fe=g=>Object.keys(x).find(b=>x[b].npc===g.n.id)||null,ue=[];function P(g){let b=Fe(g),k=ue.map(Z=>Z(g)).filter(Boolean);if(!b&&!k.length){_(g);return}let O=x[b],et=b&&S.lic[b];Yt(`${g.n.en}\u30FB${g.n.zh}`,j("p",{},"\u4F60\u60F3\u8981\u505A\u4EC0\u9EBC\uFF1F"),j("div",{class:"cards"},j("button",{class:"card",onclick:()=>_(g)},"\u{1F4AC} \u804A\u5929"),b?j("button",{class:"card",onclick:()=>et?rt(b):mt(b)},et?`\u{1F9F0} ${O.zh}\u7684\u5DE5\u4F5C\uFF1A${O.task.title}`:`\u{1F4DD} \u8003${O.zh}\u57F7\u7167\uFF0810 \u984C\uFF0C\u5C0D ${8} \u984C\u5C31\u901A\u904E\uFF09`):null,...k)),C.talkNpc=g,g.busy=!0,C.overlay="menu",g.yaw=Math.atan2(-(C.p.x-g.p.x),-(C.p.z-g.p.z))}function _(g,b){let k=[].concat(g.n.dlg);b=b||k[(g.dlgN=(g.dlgN==null?-1:g.dlgN)+1)%k.length];let O=e[b];O&&(C.talkNpc=g,g.busy=!0,C.overlay="talk",C.dlg=Eu(O),C.dlg.id=b,g.yaw=Math.atan2(-(C.p.x-g.p.x),-(C.p.z-g.p.z)),G(!0))}function G(g){let b=C.dlg,k=C.talkNpc,O=$t.ov;O.innerHTML="",O.hidden=!1;let et=j("div",{class:"p-head"},j("h2",{},`${k.n.en}\u30FB${k.n.zh}`,j("small",{},`\u3000${b.d.place}`)),j("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Zt},"\xD7")),Z=j("div",{class:"panel talk"},et);if(O.append(Z),b.phase==="talk"){let ft=b.d.turns[b.turn];Z.append(...z(ft.npc,ft.zh,C.zh),ft.say?j("p",{class:"say-zh"},"\u8981\u8AAA\uFF1A"+ft.say):null,j("p",{class:"muted small"},`\u7B2C ${b.turn+1} / ${b.d.turns.length} \u53E5\u3000\u9078\u4E00\u5F35\u5361\u7247\u56DE\u7B54`),j("div",{class:"cards"},b.cards[b.turn].map((Et,Gt)=>j("button",{class:"card en",onclick:Rt=>Y(Gt,Rt.currentTarget)},Et.en)))),g&&ve(ft.npc)}else b.phase==="check"?Z.append(j("p",{class:"big"},"\u5C0F\u6E2C\u9A57\uFF1A"+b.d.check.q),j("div",{class:"cards"},b.check.map((ft,Et)=>j("button",{class:"card",onclick:()=>tt(Et)},ft.zh)))):Z.append(j("p",{class:"big"},b.coins?`\u5C0D\u8A71\u5B8C\u6210\uFF01 +${b.coins} \u91D1\u5E63`:"\u5C0D\u8A71\u5B8C\u6210\uFF01"),j("p",{class:"muted"},`\u7B2C\u4E00\u6B21\u5C31\u9078\u5C0D ${b.right} / ${b.d.turns.length} \u53E5`),j("div",{class:"row"},j("button",{class:"btn big",onclick:Zt},"\u597D")))}function Y(g,b){let k=C.dlg,O=k.turn,et=k.cards[O][g],Z=Tu(k,g);if(ze(k.id,k.d.turns[O].src?"gen:"+k.d.turns[O].src:O,Z.ok&&Z.first,et.en),!Z.ok){b.classList.add("bad"),kn("hurt"),Nt("\u518D\u60F3\u60F3\u770B\uFF0C\u54EA\u4E00\u53E5\u6700\u5408\u9069\uFF1F");return}Z.first&&de(1),kn("pickup"),ve(et.en),setTimeout(()=>G(k.phase==="talk"),450)}function tt(g){let b=C.dlg,k=b.coins,O=Cu(b,g);ze(b.id,"check",O.ok,b.check[g].zh),O.ok?de(b.coins-k):Nt("\u7B54\u6848\u662F\uFF1A"+b.check.find(et=>et.ok).zh),G(!1)}function pt(g,b,k,O){let et=j("div",{class:"fb"}),Z=j("div",{}),ft=!1,Et=(Gt,Rt)=>{if(ft)return;ft=!0;let St=k(Gt);Rt&&Rt.classList.add(St.ok?"ok":"bad"),kn(St.ok?"pickup":"hurt"),St.coins&&de(St.coins),et.className="fb "+(St.ok?"ok":"bad"),et.append(j("div",{},St.ok?`\u7B54\u5C0D\u4E86\uFF01${St.coins?` +${St.coins} \u91D1\u5E63`:""}`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",St.ok?null:j("b",{class:"en"},St.answer)),j("button",{class:"btn",onclick:O},St.last?"\u770B\u7D50\u679C":"\u4E0B\u4E00\u984C"))};if(b.typed){let Gt=j("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),Rt=()=>{ft||!Gt.value.trim()||(Gt.disabled=!0,Et(Gt.value))};Gt.addEventListener("keydown",St=>{St.stopPropagation(),St.key==="Enter"&&Rt()}),Z.append(j("div",{class:"typerow"},Gt,j("button",{class:"btn",onclick:Rt},"\u9001\u51FA"))),setTimeout(()=>Gt.focus(),50)}else Z.append(j("div",{class:"cards"},b.cards.map((Gt,Rt)=>j("button",{class:"card"+(/[a-z]/i.test(Gt.t)?" en":""),onclick:St=>Et(Rt,St.currentTarget)},Gt.t))));g.append(...z(b.en,b.zh,b.typed||C.zh),Z,et),ve(b.en)}function mt(g){C.exam=Ou(x[g]),C.exam.id=g,it()}function it(){let g=C.exam,b=x[g.id],k=$t.ov;k.innerHTML="",k.hidden=!1,C.overlay="exam";let O=j("div",{class:"panel talk"},j("div",{class:"p-head"},j("h2",{},`${b.zh}\u57F7\u7167\u8003\u8A66`,j("small",{},g.done?"":`\u3000\u7B2C ${g.i+1} / ${g.qs.length} \u984C\u30FB\u7B54\u5C0D ${g.right}`)),j("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Zt},"\xD7")));if(k.append(O),!g.done){let ft=g.qs[g.i],Et=g.i;pt(O,{en:ft.q,zh:ft.zh,typed:ft.type==="typed",cards:ft.cards},Gt=>{let Rt=Bu(g,Gt);return ye(Rt.ok),we(`town:lic:${g.id}:${Et}`,"town:license:"+g.id,"town-license",Rt.ok,Rt.text),{ok:Rt.ok,answer:Rt.answer,coins:eu(Rt.ok,Rt.typed),last:g.done}},it);return}let et=zu(g),Z=et&&!S.lic[g.id];et&&(Z&&(S.lic[g.id]=Date.now(),de(10)),S.wear=g.id,Tt(),dt()),O.append(j("p",{class:"big"},et?`\u{1F389} \u901A\u904E\u4E86\uFF01\u4F60\u62FF\u5230${b.zh}\u57F7\u7167`:`\u7B54\u5C0D ${g.right} / ${g.qs.length} \u984C\uFF0C\u8981 ${8} \u984C\u624D\u901A\u904E`),j("p",{class:"muted"},et?`${Z?"\u57F7\u7167\u734E\u52F5 +10 \u91D1\u5E63\u3002":""}\u63DB\u4E0A${b.zh}\u5236\u670D\u4E86\uFF0C\u982D\u4E0A\u6703\u51FA\u73FE\u300C${b.en}\u300D\u3002\u4EE5\u5F8C\u627E\u9019\u4F4D\u5C45\u6C11\u5C31\u80FD\u4E0A\u73ED\u8CFA\u91D1\u5E63\uFF1B\u5728\u300C\u5DE5\u4F5C\u300D\u53EF\u4EE5\u63DB\u5236\u670D\u3002`:"\u6C92\u95DC\u4FC2\uFF0C\u518D\u8003\u4E00\u6B21\uFF01\u984C\u76EE\u4E00\u6A23\uFF0C\u9078\u9805\u9806\u5E8F\u6703\u63DB\u3002"),j("div",{class:"row"},et?j("button",{class:"btn big",onclick:()=>rt(g.id)},"\u99AC\u4E0A\u4E0A\u73ED"):j("button",{class:"btn big",onclick:()=>mt(g.id)},"\u518D\u8003\u4E00\u6B21"),j("button",{class:"btn ghost",onclick:Zt},"\u5148\u4E0D\u8981")))}function rt(g){if(!S.lic[g]){mt(g);return}let b=ku(x[g]);if(b.id=g,b.kind==="go"){C.go=b,C.goWrong=null,vt(),gt();return}C.task=b,_t()}function _t(){let g=C.task,b=x[g.id],k=$t.ov;k.innerHTML="",k.hidden=!1,C.overlay="task";let O=j("div",{class:"panel talk"},j("div",{class:"p-head"},j("h2",{},`${b.zh}\u7684\u5DE5\u4F5C\uFF1A${b.task.title}`,j("small",{},g.i<g.qs.length&&g.started?`\u3000\u7B2C ${g.i+1} / ${g.qs.length} \u984C`:"")),j("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Zt},"\xD7")));if(k.append(O),!g.started){g.started=!0,O.append(...z(b.task.intro,b.task.introZh,!0),j("div",{class:"row"},j("button",{class:"btn big",onclick:_t},"\u958B\u59CB"))),ve(b.task.intro);return}if(g.i<g.qs.length){let et=g.qs[g.i],Z=g.i;pt(O,{en:et.en,zh:et.zh,cards:et.cards},ft=>{let Et=Vu(g,ft);return ye(Et.ok),we(`town:job:${g.id}:${Z}`,"town:job:"+g.id,"town-job",Et.ok,Et.text),{ok:Et.ok,answer:Et.answer,coins:Et.ok?2:0,last:Et.done}},_t);return}S.done[g.id]=(S.done[g.id]||0)+1,dt(),O.append(j("p",{class:"big"},`\u4E0B\u73ED\u4E86\uFF01\u7B54\u5C0D ${g.right} / ${g.qs.length} \u984C\uFF0C\u8CFA\u5230 ${g.coins} \u91D1\u5E63`),j("div",{class:"row"},j("button",{class:"btn big",onclick:()=>rt(g.id)},"\u518D\u505A\u4E00\u6B21"),j("button",{class:"btn ghost",onclick:Zt},"\u4F11\u606F")))}let Ft=t.buildings.map(g=>({id:g.id,en:"the "+g.en,zh:g.zh,b:g})).concat(l.homes.map(g=>({id:g.id,en:"the "+g.en,zh:g.zh,b:g})));for(let g of Ft){let b=g.b,k=b.isHome?"n":b.door,O=b.x+(b.w>>1)+.5,et=b.z+(b.d>>1)+.5;g.f=k==="n"?[O,b.z-.5]:k==="s"?[O,b.z+b.d+.5]:k==="w"?[b.x-.5,et]:[b.x+b.w+.5,et]}function vt(){let g=C.go,b=x[g.id];Yt(`${b.zh}\u7684\u5DE5\u4F5C\uFF1A${b.task.title}`,...z(g.en,g.zh,C.zh),j("p",{class:"muted small"},`\u8D70\u5230\u5C0D\u7684\u5730\u65B9\u9580\u53E3\u5C31\u5B8C\u6210\u4E86\uFF08\u734E\u52F5 ${g.pay} \u91D1\u5E63\uFF09\u3002\u5DE6\u4E0A\u89D2\u7684\u4EFB\u52D9\u5361\u53EF\u4EE5\u518D\u770B\u4E00\u6B21\u3002`),j("div",{class:"row"},j("button",{class:"btn big",onclick:Zt},"\u51FA\u767C\uFF01"),j("button",{class:"btn ghost",onclick:()=>{C.go=null,gt(),Zt(),Nt("\u9019\u8D9F\u5148\u4E0D\u505A\u4E86")}},"\u9019\u8D9F\u4E0D\u505A\u4E86"))),C.overlay="task",ve(g.en)}function gt(){let g=Me("#task");g&&(g.hidden=!C.go,C.go&&(g.textContent=(C.go.id==="firefighter"?"\u{1F525} ":"\u2709\uFE0F ")+C.go.en.split(/[.!] /)[0]+"\u2026\uFF08\u9EDE\u6211\u518D\u770B\uFF09"))}function Ot(){let g=C.go;if(g)for(let b of Ft){if(Math.hypot(C.p.x-b.f[0],C.p.z-b.f[1])>3.2){C.goWrong===b.id&&(C.goWrong=null);continue}if(b.id!==g.to){C.goWrong!==b.id&&b.id!==x[g.id].place&&(C.goWrong=b.id,g.tries++,Nt(`\u9019\u88E1\u662F ${b.en}\uFF08${b.zh}\uFF09\uFF0C\u4E0D\u662F\u9019\u88E1\u5594\u3002\u518D\u770B\u4E00\u6B21\u4EFB\u52D9\u5361`));continue}let k=x[g.id],O=g.tries===0;C.go=null,gt(),ye(O),we(`town:job:${g.id}:${g.to}`,"town:job:"+g.id,"town-job",O,g.to),S.done[g.id]=(S.done[g.id]||0)+1,Yt(`${k.zh}\u7684\u5DE5\u4F5C`,...z(k.task.arrive,k.task.arriveZh,!0),j("div",{class:"row"},j("button",{class:"btn big",onclick:()=>{de(g.pay),dt(),Zt(),Nt(`\u5B8C\u6210\u4E86\uFF01 +${g.pay} \u91D1\u5E63`)}},k.task.button))),C.overlay="task";return}}function kt(){Yt("\u5DE5\u4F5C",j("p",{class:"muted"},`\u5230\u5DE5\u4F5C\u5730\u9EDE\u627E\u5C45\u6C11\u8003\u57F7\u7167\uFF0810 \u984C\u82F1\u6587\uFF0C\u7B54\u5C0D ${8} \u984C\u901A\u904E\uFF09\uFF0C\u901A\u904E\u5C31\u80FD\u7A7F\u5236\u670D\u3001\u4E0A\u73ED\u8CFA\u91D1\u5E63\u3002`),C.go?j("div",{class:"row"},j("button",{class:"btn",onclick:vt},"\u770B\u73FE\u5728\u7684\u4EFB\u52D9")):null,j("div",{class:"shop"},Object.keys(x).map(g=>{let b=x[g],k=t.buildings.find(Z=>Z.id===b.place),O=t.npcs.find(Z=>Z.id===b.npc),et=S.lic[g];return j("div",{class:"offer"},j("div",{class:"of-t"},j("b",{},`${b.zh} ${b.en}`),j("small",{},et?`\u2713 \u6709\u57F7\u7167\u30FB\u4E0A\u73ED ${S.done[g]||0} \u6B21`:`\u5230${k?k.zh:""}\u627E${O?O.zh:""}\u8003\u8A66`)),et?j("button",{class:"btn small",onclick:()=>{S.wear=S.wear===g?null:g,Tt(),dt(),kt()}},S.wear===g?"\u812B\u4E0B\u5236\u670D":"\u7A7F\u4E0A\u5236\u670D"):null)}))),C.overlay="panel"}let Jt=t.furniture;function B(){$t.hotbar.innerHTML="",$t.hotbar.hidden=!C.furn,C.furn&&(Jt.slice(0,9).forEach((g,b)=>$t.hotbar.append(j("button",{class:"slot"+(b===C.furnSel?" on":""),title:o.name(g),onpointerdown:k=>{k.stopPropagation(),C.furnSel=b,B()}},j("span",{class:"fname"},o.name(g))))),$t.hotbar.append(j("button",{class:"slot rot",onpointerdown:g=>{g.stopPropagation(),C.furnRot=(C.furnRot+1)%4,Nt("\u6905\u5B50\u65B9\u5411\uFF1A"+["\u5317","\u6771","\u5357","\u897F"][C.furnRot])}},"\u8F49\u5411")))}function xt(){let g=Dt(),b=j("div",{class:"shop"},l.homes.map((O,et)=>j("div",{class:"offer"},j("div",{class:"of-t"},j("b",{},`${et+1} \u865F\u623F\u5B50`),j("small",{},u.id===O.id?"\u9019\u662F\u4F60\u7684\u5BB6":"\u7A7A\u623F\u5B50\uFF0C\u514D\u8CBB\u5165\u4F4F")),u.id===O.id?j("button",{class:"btn small",onclick:()=>{yt(),Zt()}},"\u56DE\u5BB6"):j("button",{class:"btn small",onclick:()=>st(O.id)},u.id?"\u642C\u904E\u53BB":"\u4F4F\u9019\u9593")))),k=(O,et)=>j("div",{class:"swatches"},O.map(Z=>j("button",{class:"sw",title:o.name(Z),style:"background:"+o.get(Z).colors.top,onclick:()=>et(Z)})));Yt("\u6211\u7684\u5BB6",b,g?j("div",{},j("div",{class:"row"},j("button",{class:"btn",onclick:()=>{C.furn=!C.furn,B(),Zt(),Nt(C.furn?"\u5BB6\u5177\u6A21\u5F0F\uFF1A\u9EDE\u5730\u677F\u653E\u3001\u9577\u6309\uFF08\u6216\u5DE6\u9375\uFF09\u62FF\u6389\uFF0C\u53EA\u6709\u5BB6\u88E1\u53EF\u4EE5":"\u5BB6\u5177\u6A21\u5F0F\u95DC\u6389\u4E86")}},C.furn?"\u95DC\u6389\u5BB6\u5177\u6A21\u5F0F":"\u5BB6\u5177\u6A21\u5F0F\uFF08\u653E\u5BB6\u5177\uFF09"),j("button",{class:"btn ghost",onclick:()=>{u.locked=!u.locked,Nt(u.locked?"\u9580\u9396\u4E0A\u4E86":"\u9580\u6253\u958B\u9396\u4E86"),xt()}},u.locked?"\u9580\uFF1A\u9396\u8457\uFF08\u9EDE\u4E00\u4E0B\u89E3\u9396\uFF09":"\u9580\uFF1A\u6C92\u9396\uFF08\u9EDE\u4E00\u4E0B\u4E0A\u9396\uFF09")),j("h3",{},"\u7246\u58C1\u984F\u8272"),k(t.wallColors,O=>bt("wall",O)),j("h3",{},"\u5730\u677F"),k(t.floorColors,O=>bt("floor",O)),pr()):j("p",{class:"muted"},"\u5148\u9078\u4E00\u9593\u623F\u5B50\u4F4F\u4E0B\u4F86\uFF08\u514D\u8CBB\uFF09\u3002"))}function st(g){u.id=g,lt(),yt(),Zt(),Nt("\u6B61\u8FCE\u56DE\u5BB6\uFF01\u6253\u958B\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u653E\u5BB6\u5177\u3001\u63DB\u984F\u8272"),dt()}function yt(){let g=Dt();g&&(C.p={x:g.x+g.w/2,y:a+1,z:g.z-1.5},C.v={x:0,y:0,z:0},C.yaw=Math.PI)}function bt(g,b){let k=Dt();if(k){if(Math.hypot(C.p.x-(k.x+k.w/2),C.p.z-(k.z+k.d/2))>30){Nt("\u5148\u56DE\u5BB6\u518D\u63DB\u984F\u8272");return}if(g==="wall"){let O=["glass","door","door_open"];for(let[et,Z,ft]of wu(k,a,(Et,Gt,Rt)=>{let St=N.get(Et,Gt,Rt);return St&&!O.includes(o.get(St).id)}))N.set(et,Z,ft,o.num(b));u.wall=b}else for(let O=k.x+1;O<k.x+k.w-1;O++)for(let et=k.z+1;et<k.z+k.d-1;et++){let Z=b.startsWith("carpet");N.set(O,a,et,o.num(Z?"planks":b));let ft=o.get(N.get(O,a+1,et));Z&&ft&&ft.n===0?N.set(O,a+1,et,o.num(b)):!Z&&ft&&ft.id.startsWith("carpet")&&N.set(O,a+1,et,0)}g==="floor"&&(u.floor=b),Nt("\u63DB\u597D\u4E86\uFF01"),dt()}}let ct={bike:"\u{1F6B2}",scooter:"\u{1F6F4}",boat:"\u{1F6F6}",car:"\u{1F697}",bus:"\u{1F68C}"};function Bt(){let g=Me("#b-bike");g&&(g.textContent=Object.keys(J).some(b=>p.has(b))?"\u4EA4\u901A":"\u8173\u8E0F\u8ECA")}function It(g){let b=At(),k=Math.floor(C.p.x),O=Math.floor(C.p.z);if(g&&J[g].big&&X.has(k+","+O))return Nt("\u5728\u5C4B\u5B50\u88E1\u4E0D\u80FD\u958B\u8ECA\uFF0C\u5148\u8D70\u5230\u5916\u9762"),!1;if(g==="boat"){let et=null;for(let Z=-2;Z<=2&&!et;Z++)for(let ft=-2;ft<=2&&!et;ft++)K(k+Z,O+ft)&&(et=[k+Z,O+ft]);if(!et)return Nt("\u5C0F\u8239\u8981\u5728\u516C\u5712\u7684\u6C60\u5858\u908A\u624D\u80FD\u5750"),!1;C.p={x:et[0]+.5,y:a+1,z:et[1]+.5}}if(b==="boat"&&g!=="boat"){let et=null;for(let Z=1;Z<=4&&!et;Z++)for(let ft=-Z;ft<=Z&&!et;ft++)for(let Et=-Z;Et<=Z&&!et;Et++){let Gt=k+ft,Rt=O+Et;!K(Gt,Rt)&&!o.flat.solid[N.get(Gt,a+1,Rt)]&&!o.flat.solid[N.get(Gt,a+2,Rt)]&&(et=[Gt,Rt])}et&&(C.p={x:et[0]+.5,y:a+1,z:et[1]+.5})}return C.ride=g||null,C.bike=!!g,C.v={x:0,y:0,z:0},Nt(g?`${ct[g]||""} \u5750\u4E0A${J[g].zh.replace(/（.*）/,"")}\u4E86\uFF01`:"\u4E0B\u8ECA\u4E86\uFF0C\u7528\u8D70\u7684"),!0}function ge(){let g=["bike"].concat(Object.keys(J).filter(b=>p.has(b)));Yt("\u4EA4\u901A\u5DE5\u5177",j("div",{class:"cards"},j("button",{class:"card",onclick:()=>{It(null),Zt()}},"\u{1F6B6} \u8D70\u8DEF"),g.map(b=>j("button",{class:"card"+(At()===b?" ok":""),onclick:()=>{It(b)&&Zt()}},`${ct[b]||""} ${J[b].zh}`))),j("p",{class:"muted small"},"\u6C7D\u8ECA\u3001\u516C\u8ECA\u958B\u4E0D\u9032\u5C4B\u5B50\uFF1B\u5C0F\u8239\u53EA\u80FD\u5728\u516C\u5712\u7684\u6C60\u5858\u3002")),C.overlay="panel"}let Vt=null,qe={dog:"\u5C0F\u72D7",cat:"\u5C0F\u8C93",rabbit:"\u5154\u5B50",dalmatian:"\u6591\u9EDE\u72D7"},tn=()=>Object.keys(qe).filter(g=>p.has(g));function ba(g){let b=document.createElement("canvas");b.width=256,b.height=56;let k=b.getContext("2d");k.fillStyle="rgba(239,235,221,.92)",k.fillRect(4,4,248,48),k.fillStyle="#26302A",k.textAlign="center",k.font="bold 30px sans-serif",k.fillText(g,128,40);let O=new bn(b);O.colorSpace=Le;let et=new Pi(new li({map:O,depthWrite:!1}));return et.scale.set(1.3,.28,1),et.position.y=1,et}function Oi(){Vt&&(D.remove(Vt.g),Vt=null);let g=R.active;if(!g||!p.has(g)){R.active=null;return}let b=Yu(g);b.add(ba(R.names[g]||qe[g])),D.add(b),Vt={id:g,g:b,p:{x:C.p.x+1,y:C.p.y,z:C.p.z+1},sp:0}}function dr(g,b,k){let O=Me("#b-pet"),et=!tn().length;if(O.hidden!==et&&(O.hidden=et),!Vt)return;let Z=C.p.x+Math.sin(C.yaw)*1.4+Math.cos(C.yaw)*.7,ft=C.p.z+Math.cos(C.yaw)*1.4-Math.sin(C.yaw)*.7,Et=Z-Vt.p.x,Gt=ft-Vt.p.z,Rt=Math.hypot(Et,Gt);if(Rt>14)Vt.p.x=Z,Vt.p.z=ft;else if(Rt>.3){let ee=Math.min(Rt,Math.min(9,Rt*2.5)*g);Vt.p.x+=Et/Rt*ee,Vt.p.z+=Gt/Rt*ee,Vt.g.rotation.y=Math.atan2(-Et,-Gt)}Vt.sp=Rt>.3?Math.min(9,Rt*2.5):0;let St=Math.floor(C.p.y)+1,Xt=Math.floor(Vt.p.x),xe=Math.floor(Vt.p.z);for(;St>a-3&&!o.flat.solid[N.get(Xt,St-1,xe)]&&!K(Xt,xe);)St--;K(Xt,xe)&&(St=a+.9),Vt.p.y+=(St-Vt.p.y)*Math.min(1,g*10),Vt.g.position.set(Vt.p.x,Vt.p.y,Vt.p.z),$u(Vt.g,Vt.sp,b,k)}function Si(){Yt("\u6211\u7684\u5BF5\u7269",j("p",{class:"muted"},"\u5BF5\u7269\u6703\u8DDF\u8457\u4F60\u8D70\u3002\u540D\u5B57\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002"),j("div",{class:"shop"},tn().map(g=>j("div",{class:"offer"},j("div",{class:"of-t"},j("b",{},qe[g]),j("input",{class:"typein pet-name",type:"text",maxlength:12,value:R.names[g]||"",placeholder:"\u5E6B\u7260\u53D6\u540D\u5B57",onkeydown:b=>b.stopPropagation(),onchange:b=>{R.names[g]=Nu(b.target.value),b.target.value=R.names[g],R.active===g&&Oi(),dt()}})),j("button",{class:"btn small",onclick:()=>{R.active=R.active===g?null:g,Oi(),dt(),Si()}},R.active===g?"\u8B93\u7260\u5F85\u5728\u5BB6":"\u5E36\u7260\u51FA\u9580"))))),C.overlay="panel"}let ys=s.cats[0][0];function bi(){let g=s.items.filter(b=>b.cat===ys);Yt("\u674E\u8001\u95C6\u7684\u5546\u5E97",j("div",{class:"row tabs"},s.cats.map(([b,k])=>j("button",{class:"btn small"+(b===ys?"":" ghost"),onclick:()=>{ys=b,bi()}},k))),j("p",{class:"muted small"},`\u4F60\u6709 ${f.coins} \u91D1\u5E63\uFF08\u8DDF\u65B9\u584A\u4E16\u754C\u540C\u4E00\u500B\u9322\u5305\uFF09\u3002`),j("div",{class:"shop"},g.map(b=>{let k=p.has(b.id);return j("div",{class:"offer"},j("div",{class:"of-t"},j("b",{},`${b.zh}`),j("small",{},k?"\u2713 \u5DF2\u7D93\u6709\u4E86":`${b.price} \u91D1\u5E63`)),k?null:j("button",{class:"btn small",onclick:()=>vs(b.id)},"\u8CB7"))}))),C.overlay="shop"}async function vs(g){let b=d[g];if(!b||C.buying)return!1;C.buying=!0;try{await dt();let k=xa(await fr.get("hw_coins")),O=Ju(k),et=Du(b,p,{coins:O.balance(),hasHome:!!u.id});return et.ok?(await O.spend(b.price,"town:"+b.id)).ok?(p.add(b.id),await fr.putMany({hw_coins:tc(k)}),f.coins=k.coins,ae(),b.cat==="pet"&&!R.active&&(R.active=b.id,Oi()),b.id==="floor2"&&(u.floors=2,lt()),b.theme&&(u.theme=b.theme),await dt(),Bt(),kn("coin"),Nt({ride:"\u8CB7\u5230\u4E86\uFF01\u6309\u300C\u4EA4\u901A\u300D\u5750\u4E0A\u53BB",pet:"\u8CB7\u5230\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\uFF0C\u5230\u300C\u5BF5\u7269\u300D\u5E6B\u7260\u53D6\u540D\u5B57",wear:"\u8CB7\u5230\u4E86\uFF01\u5230\u300C\u5916\u89C0\u300D\u7A7F\u4E0A",house:"\u8CB7\u5230\u4E86\uFF01\u56DE\u5BB6\u770B\u770B\uFF08\u5728\u300C\u6211\u7684\u5BB6\u300D\u53EF\u4EE5\u63DB\u6A23\u5F0F\uFF09"}[b.cat]),C.overlay==="shop"&&bi(),!0):(Nt("\u8CB7\u4E0D\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21"),!1):(Nt(et.reason==="coins"?`\u91D1\u5E63\u4E0D\u5920\uFF0C\u9084\u5DEE ${et.short} \u679A\u3002\u53BB\u4E0A\u73ED\u6216\u7B54\u984C\u8CFA\u91D1\u5E63\u5427\uFF01`:et.reason==="home"?"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50":"\u5DF2\u7D93\u6709\u4E86"),!1)}finally{C.buying=!1}}ue.push(g=>g.n.id==="shopkeeper"?j("button",{class:"card",onclick:bi},"\u{1F6D2} \u8CB7\u6771\u897F\uFF08\u4EA4\u901A\u5DE5\u5177\u30FB\u5BF5\u7269\u30FB\u8863\u670D\u30FB\u623F\u5B50\uFF09"):null);let mn=()=>[u.id,u.floors||1,u.theme||"none"].join(":");function wi(){let g=zt();if(!g||u.built===mn()||![[g.x,g.z],[g.x+g.w-1,g.z],[g.x,g.z+g.d-1],[g.x+g.w-1,g.z+g.d-1]].every(([k,O])=>N.ready(k,O)))return;let b=0;for(let[k,O,et,Z]of Au(g,a,{floors:u.floors,theme:u.theme,wall:u.wall})){let ft=Z==="air"?0:o.num(Z);N.get(k,O,et)!==ft&&(N.set(k,O,et,ft),b++)}u.built=mn(),b&&dt()}let Ms={none:"\u539F\u672C\u7684\u6A23\u5B50",tree:"\u6A39\u5C4B",lighthouse:"\u71C8\u5854",castle:"\u57CE\u5821"},pr=()=>{let g=["none"].concat(s.items.filter(b=>b.theme&&p.has(b.id)).map(b=>b.theme));return g.length<2&&u.floors!==2?j("p",{class:"muted small"},"\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u53EF\u4EE5\u8CB7\u4E8C\u6A13\u548C\u6A39\u5C4B\uFF0F\u71C8\u5854\uFF0F\u57CE\u5821\u6A23\u5F0F\u3002"):j("div",{},j("h3",{},"\u623F\u5B50\u6A23\u5F0F"+(u.floors===2?"\uFF08\u6709\u4E8C\u6A13\uFF0C\u5C4B\u88E1\u89D2\u843D\u6709\u68AF\u5B50\uFF09":"")),j("div",{class:"swatches"},g.map(b=>j("button",{class:"sw"+((u.theme||"none")===b?" on":""),onclick:()=>{u.theme=b,wi(),dt(),xt(),Nt("\u63DB\u6210"+Ms[b])}},Ms[b]))))};function Vn(){let g=(k,O,et)=>j("div",{class:"av-row"},j("b",{},k),j("div",{class:"swatches"},Cn[O].map((Z,ft)=>Pu(A,p,O,Z)?null:j("button",{class:"sw"+(m[O]===ft?" on":""),style:typeof Z=="string"&&Z[0]==="#"?"background:"+Z:"",onclick:()=>{m[O]=ft,Tt(),Vn(),dt()}},et?et(Z):"")))),b={short:"\u77ED\u9AEE",long:"\u9577\u9AEE",bun:"\u5305\u982D",spiky:"\u523A\u523A",none:"\u5149\u982D",cap:"\u68D2\u7403\u5E3D",beanie:"\u6BDB\u5E3D",bow:"\u8774\u8776\u7D50",true:"\u6234",false:"\u4E0D\u6234",flower:"\u82B1\u5708",tophat:"\u7D33\u58EB\u5E3D",crown:"\u7687\u51A0",stripe:"\u689D\u7D0B",star:"\u661F\u661F",scarf:"\u570D\u5DFE",goldbadge:"\u91D1\u5FBD\u7AE0",backpack:"\u80CC\u5305",cape:"\u62AB\u98A8"};Yt("\u6211\u7684\u6A23\u5B50",g("\u819A\u8272","skin"),g("\u9AEE\u578B","hair",k=>b[k]),g("\u982D\u9AEE\u984F\u8272","hairColor"),g("\u4E0A\u8863","top",k=>k[0]==="#"?"":b[k]),g("\u8932\u5B50","bottom"),g("\u5E3D\u5B50","hat",k=>k==="none"?"\u4E0D\u6234":b[k]),g("\u773C\u93E1","glasses",k=>b[k]),g("\u914D\u4EF6","acc",k=>k==="none"?"\u4E0D\u6234":b[k]),j("p",{class:"muted small"},"\u5E3D\u5B50\u3001\u8863\u670D\u3001\u914D\u4EF6\u53EF\u4EE5\u5728\u5546\u5E97\uFF08\u627E\u674E\u8001\u95C6\uFF09\u8CB7\u66F4\u591A\u3002"),j("p",{class:"muted"},"\u63DB\u597D\u5C31\u81EA\u52D5\u5B58\u8D77\u4F86\u3002"),j("div",{class:"row"},j("button",{class:"btn",onclick:Zt},"\u5B8C\u6210")))}function mr(){Yt("\u8A2D\u5B9A",j("label",{class:"set"},"\u97F3\u6A02",j("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:g=>sc({music:+g.target.value,muted:!1})})),j("label",{class:"set"},"\u97F3\u6548",j("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:g=>sc({sfx:+g.target.value,muted:!1})})),j("p",{},"\u91D1\u5E63\u8DDF\u300C\u65B9\u584A\u4E16\u754C\u300D\u662F\u540C\u4E00\u500B\u9322\u5305\u3002"),j("p",{},j("a",{class:"home-link",href:"../../#s/game",onclick:()=>dt()},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),j("p",{class:"muted small"},"\u7248\u672C "+cc))}let Ke=(g,b)=>{let k=Me(g);k&&(k.onclick=O=>{O.stopPropagation(),va(),b()})};Ke("#b-av",Vn),Ke("#b-home",xt),Ke("#b-set",mr),Ke("#b-job",kt),Ke("#b-pet",Si),Me("#task").onclick=g=>{g.stopPropagation(),C.go&&!C.overlay&&vt()},Ke("#b-bike",()=>{if(!Object.keys(J).some(g=>p.has(g))){It(C.bike?null:"bike");return}ge()}),Ke("#b-view",()=>{C.view=C.view==="tp"?"fp":"tp"}),Ke("#b-zh",()=>{C.zh=!C.zh,Qg("kt_zh",C.zh?"on":"off"),Me("#b-zh").textContent=C.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC"}),Me("#b-zh").textContent=C.zh?"\u4E2D\u6587\uFF1A\u958B":"\u4E2D\u6587\uFF1A\u95DC",Ke("#b-snd",()=>{_u(),Me("#b-snd").textContent=Ma()?"\u{1F507}":"\u{1F50A}"});let gn=new q,Ss=()=>{let g=Math.cos(C.pitch);return{x:-Math.sin(C.yaw)*g,y:Math.sin(C.pitch),z:-Math.cos(C.yaw)*g}},bs=()=>({x:C.p.x,y:C.p.y+1.62+qt(),z:C.p.z}),wa=g=>o.flat.boxes[g]||(o.flat.shape[g]===4?[[0,0,0,1,.1,1]]:null);function Aa(g,b,k){return g==="screen"?(gn.set(b/innerWidth*2-1,-(k/innerHeight)*2+1,.5).unproject(M).sub(M.position).normalize(),{o:{x:M.position.x,y:M.position.y,z:M.position.z},d:{x:gn.x,y:gn.y,z:gn.z}}):C.view==="tp"?(M.getWorldDirection(gn),{o:{x:M.position.x,y:M.position.y,z:M.position.z},d:{x:gn.x,y:gn.y,z:gn.z}}):{o:bs(),d:Ss()}}function Ea(g,b,k){let{o:O,d:et}=Aa(g,b,k),Z=C.view==="tp"?9:5,ft=Ql(O,et,Z,(Rt,St,Xt)=>N.get(Rt,St,Xt),Rt=>Rt&&!o.flat.liquid[Rt],wa),Et=null,Gt=ft?ft.dist+.3:Z;for(let Rt of te){let St=tu(O,et,Rt.p,.8,1.9);St!=null&&St<Gt&&(Gt=St,Et=Rt)}return ft&&(ft.at={x:O.x+et.x*ft.dist,y:O.y+et.y*ft.dist,z:O.z+et.z*ft.dist}),{npc:Et,blk:ft}}function jn(g,b,k,O){if(C.overlay)return;let{npc:et,blk:Z}=Ea(g,b,k);if(et&&!O){P(et);return}if(!Z)return;let ft=o.get(Z.n),Et=Dt();if(!C.furn&&ft&&ft.interact==="door"){v(Z);return}if(C.furn){let Gt=u.floors===2?ur(zt(),a,2).slab:-1,Rt=(Ye,je,Ai)=>je!==Gt&&bu(Et,Ye,je,Ai,a);if(O){Rt(Z.x,Z.y,Z.z)?(N.set(Z.x,Z.y,Z.z,0),kn("break","wood")):Nt("\u53EA\u6709\u81EA\u5DF1\u5BB6\u88E1\u9762\u53EF\u4EE5\u62FF\u6389\u6771\u897F");return}let St=Z.x+Z.face[0],Xt=Z.y+Z.face[1],xe=Z.z+Z.face[2];if(!Rt(St,Xt,xe)){Nt(Et?"\u5BB6\u5177\u53EA\u80FD\u653E\u5728\u81EA\u5DF1\u5BB6\u88E1\u9762":"\u5148\u5230\u300C\u6211\u7684\u5BB6\u300D\u9078\u4E00\u9593\u623F\u5B50");return}if(N.get(St,Xt,xe)||Math.abs(St+.5-C.p.x)<.8&&Math.abs(xe+.5-C.p.z)<.8&&Xt>=Math.floor(C.p.y)&&Xt<=Math.floor(C.p.y)+1)return;let ee=Jt[C.furnSel];o.get(ee).place==="stairs"&&(ee+=["","_e","_s","_w"][C.furnRot]),N.set(St,Xt,xe,o.num(ee)),kn("place","wood");return}O&&Nt("\u9019\u88E1\u662F\u5C0F\u93AE\u7684\u516C\u5171\u7A7A\u9593\uFF0C\u4E0D\u80FD\u6316\u4E5F\u4E0D\u80FD\u84CB\u5594")}function v(g){let b=Dt(),k=b&&g.x>=b.x&&g.x<b.x+b.w&&g.z>=b.z&&g.z<b.z+b.d;if(l.homes.find(Et=>g.x>=Et.x&&g.x<Et.x+Et.w&&g.z>=Et.z&&g.z<Et.z+Et.d)&&!k){Nt("\u9019\u4E0D\u662F\u4F60\u7684\u5BB6\uFF0C\u6572\u6572\u9580\u5C31\u597D");return}if(k&&u.locked){Nt("\u9580\u9396\u8457\uFF0C\u5230\u300C\u6211\u7684\u5BB6\u300D\u89E3\u9396");return}let et=o.get(g.n),Z=o.get(et.openAs||et.closeAs);if(!Z)return;let ft=g.y;for(;o.get(N.get(g.x,ft-1,g.z)).interact==="door";)ft--;for(let Et=ft;o.get(N.get(g.x,Et,g.z)).interact==="door";Et++)N.set(g.x,Et,g.z,Z.n);kn("door")}let F=()=>{Sa||!E.requestPointerLock||E.requestPointerLock()};addEventListener("keydown",g=>{if(g.target&&g.target.tagName==="INPUT")return;let b=g.key.toLowerCase();if(b==="escape"&&C.overlay){Zt();return}C.overlay||(C.keys[b]=!0,g.code==="Space"&&(C.keys[" "]=!0,g.preventDefault()),b==="b"&&Me("#b-bike").click(),b==="v"&&Me("#b-view").click(),b==="r"&&(C.furnRot=(C.furnRot+1)%4),b>="1"&&b<="9"&&C.furn&&(C.furnSel=+b-1,B()))}),addEventListener("keyup",g=>{C.keys[g.key.toLowerCase()]=!1,g.code==="Space"&&(C.keys[" "]=!1)}),addEventListener("blur",()=>{C.keys={}}),E.addEventListener("mousedown",g=>{C.touch||C.overlay||document.pointerLockElement!==E&&(F(),!Sa)||(g.button===0&&jn("center",0,0,C.furn),g.button===2&&jn("center",0,0,!1))}),E.addEventListener("contextmenu",g=>g.preventDefault()),addEventListener("mousemove",g=>{document.pointerLockElement===E&&(C.yaw-=g.movementX*.0024,C.pitch=Math.max(-1.4,Math.min(1.4,C.pitch-g.movementY*.0024)))});let $=new Map;E.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch"||C.overlay)return;if(C.touch=!0,g.preventDefault(),va(),g.clientX<innerWidth*.4&&g.clientY>innerHeight*.35&&!C.joy.active){C.joy={x:0,y:0,active:!0,ox:g.clientX,oy:g.clientY},$t.joy.style.transform=`translate(${g.clientX-60}px, ${g.clientY-60}px)`,$t.joy.hidden=!1,$.set(g.pointerId,{kind:"joy"});return}let b={kind:"look",x:g.clientX,y:g.clientY,sx:g.clientX,sy:g.clientY,t0:performance.now(),drag:!1};b.timer=setTimeout(()=>{b.drag||(b.long=!0,jn("screen",b.x,b.y,!0))},450),$.set(g.pointerId,b)},{passive:!1}),addEventListener("pointermove",g=>{let b=$.get(g.pointerId);if(!b)return;if(b.kind==="joy"){let et=g.clientX-C.joy.ox,Z=g.clientY-C.joy.oy,ft=Math.hypot(et,Z);ft>55&&(et*=55/ft,Z*=55/ft),C.joy.x=et/55,C.joy.y=Z/55,$t.knob.style.transform=`translate(${et}px,${Z}px)`;return}let k=g.clientX-b.x,O=g.clientY-b.y;b.x=g.clientX,b.y=g.clientY,!b.drag&&Math.hypot(b.x-b.sx,b.y-b.sy)>12&&(b.drag=!0,clearTimeout(b.timer)),b.drag&&(C.yaw-=k*.0055,C.pitch=Math.max(-1.4,Math.min(1.4,C.pitch-O*.0055)))});let W=g=>{let b=$.get(g.pointerId);if(b){if($.delete(g.pointerId),b.kind==="joy"){C.joy={x:0,y:0,active:!1},$t.joy.hidden=!0;return}clearTimeout(b.timer),!b.drag&&!b.long&&performance.now()-b.t0<450&&jn("screen",b.x,b.y,!1)}};addEventListener("pointerup",W),addEventListener("pointercancel",W);let H=Me("#b-jump");H.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),C.jumpHeld=!0}),H.addEventListener("pointerup",()=>{C.jumpHeld=!1}),H.addEventListener("pointerleave",()=>{C.jumpHeld=!1}),document.addEventListener("touchmove",g=>{g.target.closest(".panel")||g.preventDefault()},{passive:!1}),["gesturestart","dblclick"].forEach(g=>document.addEventListener(g,b=>b.preventDefault(),{passive:!1})),document.body.classList.toggle("is-touch",C.touch),Me("#ui").classList.toggle("touch",C.touch);async function dt(){let g={kt_player:{x:C.p.x,y:C.p.y,z:C.p.z,yaw:C.yaw,view:C.view},kt_home:u,kt_avatar:m,kt_jobs:S,kt_owned:[...p],kt_pets:R};for(let b of C.dirty){let k=h.get(b);k&&(g["kt_chunk:"+b]=ec(k))}C.dirty.clear();try{if(await Mi.putMany(g),C.pending){let b=C.pending;C.pending=0;let k=xa(await fr.get("hw_coins"));lr(k,b),await fr.putMany({hw_coins:tc(k)}),f.coins=k.coins,ae()}}catch(b){console.warn("save failed",b),!C.quotaWarned&&b&&b.name==="QuotaExceededError"&&(C.quotaWarned=!0,Nt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF0C\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{C.started&&dt()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&C.started&&dt()}),addEventListener("pagehide",()=>{C.started&&dt()}),Me("#go").onclick=()=>{Me("#start").hidden=!0,C.started=!0,va(),C.touch||F(),c.av||setTimeout(Vn,300)},ae(),B(),gt(),Bt(),Oi();let Ct=new Qt("#EFEBDD"),Mt=new Qt("#22302F"),Pt=new Qt("#E6B48C"),Ut=performance.now(),Kt=0,ie=0;function Lt(g){let b=C.keys,k=(b.d?1:0)-(b.a?1:0),O=(b.w?1:0)-(b.s?1:0);C.joy.active&&(k=C.joy.x,O=-C.joy.y);let et=Math.min(1,Math.hypot(k,O));if(et>0){let fc=Math.hypot(k,O);k=k/fc*et,O=O/fc*et}let Z=-Math.sin(C.yaw),ft=-Math.cos(C.yaw),Et=Math.cos(C.yaw),Gt=-Math.sin(C.yaw),Rt=b.shift||C.joy.active&&et>.92,St=C.bike?J[At()]:null,Xt=St?Rt?St.run:St.speed:Rt?6.2:4.3,xe=(Z*O+Et*k)*Xt,ee=(ft*O+Gt*k)*Xt,Ye=1-Math.exp(-(C.onGround?12:5)*g);C.v.x+=(xe-C.v.x)*Ye,C.v.z+=(ee-C.v.z)*Ye;let je=Math.floor(C.p.x),Ai=Math.floor(C.p.z),hc=!C.bike&&(o.flat.climb[N.get(je,Math.floor(C.p.y),Ai)]||o.flat.climb[N.get(je,Math.floor(C.p.y)+1,Ai)]);hc?C.v.y=b[" "]||C.jumpHeld||O>.1?3.2:Math.max(C.v.y-28*g,-1.5):(C.v.y-=28*g,C.v.y<-40&&(C.v.y=-40)),(b[" "]||C.jumpHeld)&&C.onGround&&!hc&&At()!=="boat"&&(C.v.y=8.6,C.onGround=!1);let Qu=Qh(C.p,C.v,g,ht,{canStep:!0,grounded:C.onGround});C.onGround=Qu.onGround;let gr=t.bound+1;C.p.x=Math.max(-gr,Math.min(gr,C.p.x)),C.p.z=Math.max(-gr,Math.min(gr,C.p.z)),C.p.y<0&&(C.p={x:U.x,y:U.y,z:U.z},C.v={x:0,y:0,z:0});let uc=Math.hypot(C.v.x,C.v.z);C.onGround&&uc>1&&(C.stepT=(C.stepT||0)+g*uc,C.stepT>(C.bike?4:1.8)&&At()!=="boat"&&(C.stepT=0,kn("step","stone")))}function he(g){requestAnimationFrame(he);let b=(g-Ut)/1e3;Ut=g;let k=Math.min(.05,b);C.frames.push(b*1e3),C.frames.length>4e3&&C.frames.shift(),N.update(C.p.x,C.p.z);let O=N.ready(C.p.x,C.p.z);C.started&&!C.overlay&&O&&(Lt(k),C.go&&(C.goT=(C.goT||0)+k)>.25&&(C.goT=0,Ot())),C.time=(C.time+k/Kg)%1;let et=Math.sin(C.time*Math.PI*2),Z=Math.min(1,Math.max(0,(et+.12)/.42)),ft=.35+.65*Z;y.copy(Mt).lerp(Ct,Z).lerp(Pt,Math.max(0,1-Math.abs(et)/.3)*.4*(Z>.05?1:.4)),L.uniforms.uDay.value=Z;let Et=y.getHexString();L.uniforms.uFog.value.set(parseInt(Et.slice(0,2),16)/255,parseInt(Et.slice(2,4),16)/255,parseInt(Et.slice(4,6),16)/255);let Gt=Z>.3?"calm":"night";Gt!==C.scene&&(C.scene=Gt,yu(Gt));for(let Xt of te)!Xt.busy&&!C.overlay?Ru(Xt,k):Xt.v={x:0,y:0,z:0},mu(Xt.g,Xt,g/1e3);pu(ft),ne.position.set(C.p.x,C.p.y+qt(),C.p.z),ne.rotation.y=C.yaw,Wu(ne,C.bike?0:Math.hypot(C.v.x,C.v.z),g/1e3,ft),ne.visible=C.view==="tp";for(let Xt in at){let xe=at[Xt],ee=Xt===At();xe.visible=ee,ee&&(xe.position.set(C.p.x,C.p.y,C.p.z),xe.rotation.y=C.yaw,Zu(xe,ft))}dr(k,g/1e3,ft),(C.houseT=(C.houseT||0)+k)>1&&(C.houseT=0,wi());let Rt=bs(),St=Ss();if(C.view==="tp"){let Xt=Ql(Rt,{x:-St.x,y:-St.y,z:-St.z},4.5,(ee,Ye,je)=>N.get(ee,Ye,je),ee=>o.flat.opaque[ee]===1),xe=Xt?Math.max(.4,Xt.dist-.25):4.5;M.position.set(Rt.x-St.x*xe,Rt.y-St.y*xe+.3,Rt.z-St.z*xe)}else M.position.set(Rt.x,Rt.y,Rt.z);M.rotation.set(C.pitch,C.yaw,0),T.render(D,M),Kt+=b,ie++,Kt>.5&&($t.dbg&&($t.dbg.textContent=`${Math.round(ie/Kt)} fps \xB7 \u5340\u584A ${N.stats.loaded} \xB7 ${C.p.x.toFixed(1)}, ${C.p.y.toFixed(1)}, ${C.p.z.toFixed(1)}`),Kt=0,ie=0),$t.loading.hidden=O||!C.started}let Ae=()=>{T.setSize(innerWidth,innerHeight,!1),M.aspect=innerWidth/innerHeight,M.updateProjectionMatrix()};addEventListener("resize",Ae),Ae(),window.KT={build:cc,TEST:Sa,G:C,reg:o,world:N,wallet:f,npcs:te,terr:l,homeState:u,DLG:e,spawn:U,start(){Me("#go").click()},ready:()=>N.ready(C.p.x,C.p.z),state:()=>({pos:{...C.p},coins:f.coins,loaded:N.stats.loaded,overlay:C.overlay}),talk:(g,b)=>_(te.find(k=>k.n.id===g),b),menu:g=>P(te.find(b=>b.n.id===g)),JOBS:x,jobs:S,places:Ft,me:()=>ne,openShop:bi,buy:vs,owned:p,setRide:It,rideId:At,pets:R,pet:()=>Vt,openPets:Si,houseTick:wi,houseSig:mn,myHome:Dt,exam:mt,work:rt,ex:()=>C.exam,task:()=>C.task,go:()=>C.go,openJobs:kt,pick:g=>{let b=$t.ov.querySelectorAll(".cards .card")[g];b&&b.click()},dlg:()=>C.dlg,claim:st,goHome:yt,paint:bt,close:Zt,save:dt,avatar:()=>m,setAvatar(g){m=rc(g),Tt()},openAvatar:Vn,openHome:xt,lookAt(g,b,k){let O=bs(),et=g-O.x,Z=b-O.y,ft=k-O.z;C.yaw=Math.atan2(-et,-ft),C.pitch=Math.atan2(Z,Math.hypot(et,ft))},use(g){jn("center",0,0,!!g)},perf(){return{frames:C.frames.slice()}},resetPerf(){C.frames.length=0}},requestAnimationFrame(he)}tx().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
