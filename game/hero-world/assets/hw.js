(()=>{var ey=Object.defineProperty;var Gn=(n,t)=>{for(var e in t)ey(n,e,{get:t[e],enumerable:!0})};var Jp=0,cu=1,jp=2;var Lo=1,Kp=2,Ar=3,_s=0,Pn=1,Kn=2,Pi=0,Er=1,hu=2,uu=3,fu=4,Qp=5;var zs=100,tm=101,em=102,nm=103,im=104,sm=200,rm=201,om=202,am=203,du=204,pu=205,lm=206,cm=207,hm=208,um=209,fm=210,dm=211,pm=212,mm=213,gm=214,il=0,sl=1,rl=2,yr=3,ol=4,al=5,ll=6,cl=7,mu=0,xm=1,ym=2,ui=0,gu=1,xu=2,yu=3,_u=4,vu=5,bu=6,Mu=7;var Su=300,vs=301,ks=302,kl=303,Bl=304,Do=306,hl=1e3,Ei=1001,ul=1002,mn=1003,_m=1004;var No=1005;var an=1006,Vl=1007;var bs=1008;var $n=1009,wu=1010,Au=1011,Tr=1012,Hl=1013,fi=1014,di=1015,pi=1016,Gl=1017,Wl=1018,Cr=1020,Eu=35902,Tu=35899,Cu=1021,Ru=1022,Qn=1023,Ti=1026,Ms=1027,Iu=1028,Xl=1029,Ss=1030,ql=1031;var Yl=1033,Uo=33776,Fo=33777,Oo=33778,zo=33779,$l=35840,Zl=35841,Jl=35842,jl=35843,Kl=36196,Ql=37492,tc=37496,ec=37488,nc=37489,ko=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,xc=37821,yc=36492,_c=36494,vc=36495,bc=36283,Mc=36284,Bo=36285,Sc=36286;var uo=2300,fl=2301,tl=2302,nu=2303,iu=2400,su=2401,ru=2402;var vm=3200;var Pu=0,bm=1,$i="",en="srgb",fo="srgb-linear",po="linear",ke="srgb";var el=7680;var Mm=519,Sm=512,wm=513,Am=514,wc=515,Em=516,Tm=517,Ac=518,Cm=519,Lu=35044;var Du="300 es",hi=2e3,mo=2001;function ny(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function iy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rm(){let n=go("canvas");return n.style.display="block",n}var Sp={},_r=null;function xo(...n){let t="THREE."+n.shift();_r?_r("log",t,...n):console.log(t,...n)}function Im(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=Im(n);let t="THREE."+n.shift();if(_r)_r("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=Im(n);let t="THREE."+n.shift();if(_r)_r("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Os(...n){let t=n.join(" ");t in Sp||(Sp[t]=!0,ae(...n))}function Pm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Lm={[il]:sl,[rl]:ll,[ol]:cl,[yr]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:yr},Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,dl=180/Math.PI;function ls(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function sy(n,t){return(n%t+t)%t}function Lh(n,t,e){return(1-e)*n+e*t}function wi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zu=class zu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zu.prototype.isVector2=!0;var Se=zu,Ri=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let u=i[s+0],c=i[s+1],p=i[s+2],f=i[s+3],d=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(f!==g||u!==d||c!==m||p!==_){let y=u*d+c*m+p*_+f*g;y<0&&(d=-d,m=-m,_=-_,g=-g,y=-y);let x=1-a;if(y<.9995){let A=Math.acos(y),F=Math.sin(A);x=Math.sin(x*A)/F,a=Math.sin(a*A)/F,u=u*x+d*a,c=c*x+m*a,p=p*x+_*a,f=f*x+g*a}else{u=u*x+d*a,c=c*x+m*a,p=p*x+_*a,f=f*x+g*a;let A=1/Math.sqrt(u*u+c*c+p*p+f*f);u*=A,c*=A,p*=A,f*=A}}t[e]=u,t[e+1]=c,t[e+2]=p,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],u=i[s+1],c=i[s+2],p=i[s+3],f=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+p*f+u*m-c*d,t[e+1]=u*_+p*d+c*f-a*m,t[e+2]=c*_+p*m+a*d-u*f,t[e+3]=p*_-a*f-u*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,u=Math.sin,c=a(i/2),p=a(s/2),f=a(r/2),d=u(i/2),m=u(s/2),_=u(r/2);switch(o){case"XYZ":this._x=d*p*f+c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f-d*m*_;break;case"YXZ":this._x=d*p*f+c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f+d*m*_;break;case"ZXY":this._x=d*p*f-c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f-d*m*_;break;case"ZYX":this._x=d*p*f-c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f+d*m*_;break;case"YZX":this._x=d*p*f+c*m*_,this._y=c*m*f+d*p*_,this._z=c*p*_-d*m*f,this._w=c*p*f-d*m*_;break;case"XZY":this._x=d*p*f-c*m*_,this._y=c*m*f-d*p*_,this._z=c*p*_+d*m*f,this._w=c*p*f+d*m*_;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],u=e[9],c=e[2],p=e[6],f=e[10],d=i+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(p-u)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(p-u)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(u+p)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(u+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,u=e._y,c=e._z,p=e._w;return this._x=i*p+o*a+s*c-r*u,this._y=s*p+o*u+r*a-i*c,this._z=r*p+o*c+i*u-s*a,this._w=o*p-i*a-s*u-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let u=1-e;if(a<.9995){let c=Math.acos(a),p=Math.sin(c);u=Math.sin(u*c)/p,e=Math.sin(e*c)/p,this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ku=class ku{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,u=t.w,c=2*(o*s-a*i),p=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+u*c+o*f-a*p,this.y=i+u*p+a*c-r*f,this.z=s+u*f+r*p-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,u=e.z;return this.x=s*u-r*a,this.y=r*o-i*u,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dh.copy(this).projectOnVector(t),this.sub(Dh)}reflect(t){return this.sub(Dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ku.prototype.isVector3=!0;var Q=ku,Dh=new Q,wp=new Ri,Bu=class Bu{constructor(t,e,i,s,r,o,a,u,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,u,c)}set(t,e,i,s,r,o,a,u,c){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=u,p[6]=i,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],u=i[6],c=i[1],p=i[4],f=i[7],d=i[2],m=i[5],_=i[8],g=s[0],y=s[3],x=s[6],A=s[1],F=s[4],T=s[7],I=s[2],D=s[5],L=s[8];return r[0]=o*g+a*A+u*I,r[3]=o*y+a*F+u*D,r[6]=o*x+a*T+u*L,r[1]=c*g+p*A+f*I,r[4]=c*y+p*F+f*D,r[7]=c*x+p*T+f*L,r[2]=d*g+m*A+_*I,r[5]=d*y+m*F+_*D,r[8]=d*x+m*T+_*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],c=t[7],p=t[8];return e*o*p-e*a*c-i*r*p+i*a*u+s*r*c-s*o*u}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],c=t[7],p=t[8],f=p*o-a*c,d=a*u-p*r,m=c*r-o*u,_=e*f+i*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(s*c-p*i)*g,t[2]=(a*i-s*o)*g,t[3]=d*g,t[4]=(p*e-s*u)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(i*u-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let u=Math.cos(r),c=Math.sin(r);return this.set(i*u,i*c,-i*(u*o+c*a)+o+t,-s*c,s*u,-s*(-c*o+u*a)+a+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bu.prototype.isMatrix3=!0;var me=Bu,Nh=new me,Ap=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){let n={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fo]:{primaries:t,whitePoint:i,transfer:po,toXYZ:Ap,fromXYZ:Ep,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:ke,toXYZ:Ap,fromXYZ:Ep,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var Ee=ry();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tr,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=go("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},oy=0,vr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uh(s[o].image)):r.push(Uh(s[o]))}else r=Uh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Uh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var ay=0,Fh=new Q,yn=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ei,s=Ei,r=an,o=bs,a=Qn,u=$n,c=n.DEFAULT_ANISOTROPY,p=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=ls(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Su;yn.DEFAULT_ANISOTROPY=1;var Vu=class Vu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,u=t.elements,c=u[0],p=u[4],f=u[8],d=u[1],m=u[5],_=u[9],g=u[2],y=u[6],x=u[10];if(Math.abs(p-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-y)<.01){if(Math.abs(p+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+y)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,T=(m+1)/2,I=(x+1)/2,D=(p+d)/4,L=(f+g)/4,S=(_+y)/4;return F>T&&F>I?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=D/i,r=L/i):T>I?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=D/s,r=S/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=L/r,s=S/r),this.set(i,s,r,e),this}let A=Math.sqrt((y-_)*(y-_)+(f-g)*(f-g)+(d-p)*(d-p));return Math.abs(A)<.001&&(A=1),this.x=(y-_)/A,this.y=(f-g)/A,this.z=(d-p)/A,this.w=Math.acos((c+m+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vu.prototype.isVector4=!0;var je=Vu,ml=class extends Ci{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new yn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},yo=class extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zl=class zl{constructor(t,e,i,s,r,o,a,u,c,p,f,d,m,_,g,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,u,c,p,f,d,m,_,g,y)}set(t,e,i,s,r,o,a,u,c,p,f,d,m,_,g,y){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=u,x[2]=c,x[6]=p,x[10]=f,x[14]=d,x[3]=m,x[7]=_,x[11]=g,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(s),c=Math.sin(s),p=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*p,m=o*f,_=a*p,g=a*f;e[0]=u*p,e[4]=-u*f,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-a*u,e[2]=g-d*c,e[6]=_+m*c,e[10]=o*u}else if(t.order==="YXZ"){let d=u*p,m=u*f,_=c*p,g=c*f;e[0]=d+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*p,e[9]=-a,e[2]=m*a-_,e[6]=g+d*a,e[10]=o*u}else if(t.order==="ZXY"){let d=u*p,m=u*f,_=c*p,g=c*f;e[0]=d-g*a,e[4]=-o*f,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*p,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){let d=o*p,m=o*f,_=a*p,g=a*f;e[0]=u*p,e[4]=_*c-m,e[8]=d*c+g,e[1]=u*f,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){let d=o*u,m=o*c,_=a*u,g=a*c;e[0]=u*p,e[4]=g-d*f,e[8]=_*f+m,e[1]=f,e[5]=o*p,e[9]=-a*p,e[2]=-c*p,e[6]=m*f+_,e[10]=d-g*f}else if(t.order==="XZY"){let d=o*u,m=o*c,_=a*u,g=a*c;e[0]=u*p,e[4]=-f,e[8]=c*p,e[1]=d*f+g,e[5]=o*p,e[9]=m*f-_,e[2]=_*f-m,e[6]=a*p,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ly,t,cy)}lookAt(t,e,i){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),is.crossVectors(i,Wn),is.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),is.crossVectors(i,Wn)),is.normalize(),Aa.crossVectors(Wn,is),s[0]=is.x,s[4]=Aa.x,s[8]=Wn.x,s[1]=is.y,s[5]=Aa.y,s[9]=Wn.y,s[2]=is.z,s[6]=Aa.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],u=i[8],c=i[12],p=i[1],f=i[5],d=i[9],m=i[13],_=i[2],g=i[6],y=i[10],x=i[14],A=i[3],F=i[7],T=i[11],I=i[15],D=s[0],L=s[4],S=s[8],R=s[12],U=s[1],O=s[5],j=s[9],Z=s[13],G=s[2],tt=s[6],k=s[10],W=s[14],st=s[3],$=s[7],J=s[11],rt=s[15];return r[0]=o*D+a*U+u*G+c*st,r[4]=o*L+a*O+u*tt+c*$,r[8]=o*S+a*j+u*k+c*J,r[12]=o*R+a*Z+u*W+c*rt,r[1]=p*D+f*U+d*G+m*st,r[5]=p*L+f*O+d*tt+m*$,r[9]=p*S+f*j+d*k+m*J,r[13]=p*R+f*Z+d*W+m*rt,r[2]=_*D+g*U+y*G+x*st,r[6]=_*L+g*O+y*tt+x*$,r[10]=_*S+g*j+y*k+x*J,r[14]=_*R+g*Z+y*W+x*rt,r[3]=A*D+F*U+T*G+I*st,r[7]=A*L+F*O+T*tt+I*$,r[11]=A*S+F*j+T*k+I*J,r[15]=A*R+F*Z+T*W+I*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],u=t[9],c=t[13],p=t[2],f=t[6],d=t[10],m=t[14],_=t[3],g=t[7],y=t[11],x=t[15],A=u*m-c*d,F=a*m-c*f,T=a*d-u*f,I=o*m-c*p,D=o*d-u*p,L=o*f-a*p;return e*(g*A-y*F+x*T)-i*(_*A-y*I+x*D)+s*(_*F-g*I+x*L)-r*(_*T-g*D+y*L)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],u=t[2],c=t[6],p=t[10];return e*(o*p-a*c)-i*(r*p-a*u)+s*(r*c-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],u=t[6],c=t[7],p=t[8],f=t[9],d=t[10],m=t[11],_=t[12],g=t[13],y=t[14],x=t[15],A=e*a-i*o,F=e*u-s*o,T=e*c-r*o,I=i*u-s*a,D=i*c-r*a,L=s*c-r*u,S=p*g-f*_,R=p*y-d*_,U=p*x-m*_,O=f*y-d*g,j=f*x-m*g,Z=d*x-m*y,G=A*Z-F*j+T*O+I*U-D*R+L*S;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/G;return t[0]=(a*Z-u*j+c*O)*tt,t[1]=(s*j-i*Z-r*O)*tt,t[2]=(g*L-y*D+x*I)*tt,t[3]=(d*D-f*L-m*I)*tt,t[4]=(u*U-o*Z-c*R)*tt,t[5]=(e*Z-s*U+r*R)*tt,t[6]=(y*T-_*L-x*F)*tt,t[7]=(p*L-d*T+m*F)*tt,t[8]=(o*j-a*U+c*S)*tt,t[9]=(i*U-e*j-r*S)*tt,t[10]=(_*D-g*T+x*A)*tt,t[11]=(f*T-p*D-m*A)*tt,t[12]=(a*R-o*O-u*S)*tt,t[13]=(e*O-i*R+s*S)*tt,t[14]=(g*F-_*I-y*A)*tt,t[15]=(p*I-f*F+d*A)*tt,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,u=t.z,c=r*o,p=r*a;return this.set(c*o+i,c*a-s*u,c*u+s*a,0,c*a+s*u,p*a+i,p*u-s*o,0,c*u-s*a,p*u+s*o,r*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,u=e._w,c=r+r,p=o+o,f=a+a,d=r*c,m=r*p,_=r*f,g=o*p,y=o*f,x=a*f,A=u*c,F=u*p,T=u*f,I=i.x,D=i.y,L=i.z;return s[0]=(1-(g+x))*I,s[1]=(m+T)*I,s[2]=(_-F)*I,s[3]=0,s[4]=(m-T)*D,s[5]=(1-(d+x))*D,s[6]=(y+A)*D,s[7]=0,s[8]=(_+F)*L,s[9]=(y-A)*L,s[10]=(1-(d+g))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),a=er.set(s[4],s[5],s[6]).length(),u=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let c=1/o,p=1/a,f=1/u;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=p,oi.elements[5]*=p,oi.elements[6]*=p,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=u,this}makePerspective(t,e,i,s,r,o,a=hi,u=!1){let c=this.elements,p=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),m=(i+s)/(i-s),_,g;if(u)_=r/(o-r),g=o*r/(o-r);else if(a===hi)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===mo)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hi,u=!1){let c=this.elements,p=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),m=-(i+s)/(i-s),_,g;if(u)_=1/(o-r),g=o/(o-r);else if(a===hi)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===mo)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};zl.prototype.isMatrix4=!0;var Ye=zl,er=new Q,oi=new Ye,ly=new Q(0,0,0),cy=new Q(1,1,1),is=new Q,Aa=new Q,Wn=new Q,Tp=new Ye,Cp=new Ri,cs=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],u=s[1],c=s[5],p=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,m),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hy=0,Rp=new Q,nr=new Ri,Vi=new Ye,Ea=new Q,io=new Q,uy=new Q,fy=new Ri,Ip=new Q(1,0,0),Pp=new Q(0,1,0),Lp=new Q(0,0,1),Dp={type:"added"},dy={type:"removed"},ir={type:"childadded",child:null},Oh={type:"childremoved",child:null},In=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Q,e=new cs,i=new Ri,s=new Q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new me}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Ip,t)}rotateY(t){return this.rotateOnAxis(Pp,t)}rotateZ(t){return this.rotateOnAxis(Lp,t)}translateOnAxis(t,e){return Rp.copy(t).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ip,t)}translateY(t){return this.translateOnAxis(Pp,t)}translateZ(t){return this.translateOnAxis(Lp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ea.copy(t):Ea.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(io,Ea,this.up):Vi.lookAt(Ea,io,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Vi),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dp),ir.child=t,this.dispatchEvent(ir),ir.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dy),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dp),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let c=0,p=u.length;c<p;c++){let f=u[c];r(t.shapes,f)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(r(t.materials,this.material[u]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];s.animations.push(r(t.animations,u))}}if(e){let a=o(t.geometries),u=o(t.materials),c=o(t.textures),p=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let u=[];for(let c in a){let p=a[c];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};In.DEFAULT_UP=new Q(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,u=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let y=e.getJointPose(g,i),x=this._getHandJoint(c,g);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}let p=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=p.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function zh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ue=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ee.workingColorSpace){if(t=sy(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=zh(o,r,t+1/3),this.g=zh(o,r,t),this.b=zh(o,r,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=Dm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Ee.workingToColorSpace(Mn.copy(this),t),Math.round(Ce(Mn.r*255,0,255))*65536+Math.round(Ce(Mn.g*255,0,255))*256+Math.round(Ce(Mn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(Mn.copy(this),e);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),u,c,p=(a+o)/2;if(a===o)u=0,c=0;else{let f=o-a;switch(c=p<=.5?f/(o+a):f/(2-o-a),o){case i:u=(s-r)/f+(s<r?6:0);break;case s:u=(r-i)/f+2;break;case r:u=(i-s)/f+4;break}u/=6}return t.h=u,t.s=c,t.l=p,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=en){Ee.workingToColorSpace(Mn.copy(this),t);let e=Mn.r,i=Mn.g,s=Mn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(Ta);let i=Lh(ss.h,Ta.h,e),s=Lh(ss.s,Ta.s,e),r=Lh(ss.l,Ta.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ue;ue.NAMES=Dm;var vo=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new Q,Hi=new Q,kh=new Q,Gi=new Q,sr=new Q,rr=new Q,Np=new Q,Bh=new Q,Vh=new Q,Hh=new Q,Gh=new je,Wh=new je,Xh=new je,Ai=class n{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Hi.subVectors(i,e),kh.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Hi),u=ai.dot(kh),c=Hi.dot(Hi),p=Hi.dot(kh),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*u-a*p)*d,_=(o*p-a*u)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,s,r,o,a,u){return this.getBarycoord(t,e,i,s,Gi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Gi.x),u.addScaledVector(o,Gi.y),u.addScaledVector(a,Gi.z),u)}static getInterpolatedAttribute(t,e,i,s,r,o){return Gh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Gh.fromBufferAttribute(t,e),Wh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Gh,r.x),o.addScaledVector(Wh,r.y),o.addScaledVector(Xh,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Hi.subVectors(t,e),ai.cross(Hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ai.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,i),rr.subVectors(r,i),Bh.subVectors(t,i);let u=sr.dot(Bh),c=rr.dot(Bh);if(u<=0&&c<=0)return e.copy(i);Vh.subVectors(t,s);let p=sr.dot(Vh),f=rr.dot(Vh);if(p>=0&&f<=p)return e.copy(s);let d=u*f-p*c;if(d<=0&&u>=0&&p<=0)return o=u/(u-p),e.copy(i).addScaledVector(sr,o);Hh.subVectors(t,r);let m=sr.dot(Hh),_=rr.dot(Hh);if(_>=0&&m<=_)return e.copy(r);let g=m*c-u*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(rr,a);let y=p*_-m*f;if(y<=0&&f-p>=0&&m-_>=0)return Np.subVectors(r,s),a=(f-p)/(f-p+(m-_)),e.copy(s).addScaledVector(Np,a);let x=1/(y+g+d);return o=g*x,a=d*x,e.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hs=class{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),Ra.subVectors(this.max,so),or.subVectors(t.a,so),ar.subVectors(t.b,so),lr.subVectors(t.c,so),rs.subVectors(ar,or),os.subVectors(lr,ar),Ds.subVectors(or,lr);let e=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Ds.z,Ds.y,rs.z,0,-rs.x,os.z,0,-os.x,Ds.z,0,-Ds.x,-rs.y,rs.x,0,-os.y,os.x,0,-Ds.y,Ds.x,0];return!qh(e,or,ar,lr,Ra)||(e=[1,0,0,0,1,0,0,0,1],!qh(e,or,ar,lr,Ra))?!1:(Ia.crossVectors(rs,os),e=[Ia.x,Ia.y,Ia.z],qh(e,or,ar,lr,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],li=new Q,Ca=new hs,or=new Q,ar=new Q,lr=new Q,rs=new Q,os=new Q,Ds=new Q,so=new Q,Ra=new Q,Ia=new Q,Ns=new Q;function qh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ns.fromArray(n,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),u=t.dot(Ns),c=e.dot(Ns),p=i.dot(Ns);if(Math.max(-Math.max(u,c,p),Math.min(u,c,p))>a)return!1}return!0}var on=new Q,Pa=new Se,my=0,Ke=class extends Ci{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Mo=class extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Rn=class extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},gy=new hs,ro=new Q,Yh=new Q,us=class{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ro,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(Yh)),this.expandByPoint(ro.copy(t.center).sub(Yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xy=0,jn=new Ye,$h=new In,cr=new Q,Xn=new hs,oo=new hs,pn=new Q,cn=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ny(t)?Mo:bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,i){return jn.makeTranslation(t,e,i),this.applyMatrix4(jn),this}scale(t,e,i){return jn.makeScale(t,e,i),this.applyMatrix4(jn),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Xn.min,oo.min),Xn.expandByPoint(pn),pn.addVectors(Xn.max,oo.max),Xn.expandByPoint(pn)):(Xn.expandByPoint(oo.min),Xn.expandByPoint(oo.max))}Xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)pn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],u=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)pn.fromBufferAttribute(a,c),u&&(cr.fromBufferAttribute(t,c),pn.add(cr)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],u=[];for(let S=0;S<i.count;S++)a[S]=new Q,u[S]=new Q;let c=new Q,p=new Q,f=new Q,d=new Se,m=new Se,_=new Se,g=new Q,y=new Q;function x(S,R,U){c.fromBufferAttribute(i,S),p.fromBufferAttribute(i,R),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,U),p.sub(c),f.sub(c),m.sub(d),_.sub(d);let O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(g.copy(p).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(O),y.copy(f).multiplyScalar(m.x).addScaledVector(p,-_.x).multiplyScalar(O),a[S].add(g),a[R].add(g),a[U].add(g),u[S].add(y),u[R].add(y),u[U].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let S=0,R=A.length;S<R;++S){let U=A[S],O=U.start,j=U.count;for(let Z=O,G=O+j;Z<G;Z+=3)x(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let F=new Q,T=new Q,I=new Q,D=new Q;function L(S){I.fromBufferAttribute(s,S),D.copy(I);let R=a[S];F.copy(R),F.sub(I.multiplyScalar(I.dot(R))).normalize(),T.crossVectors(D,R);let O=T.dot(u[S])<0?-1:1;o.setXYZW(S,F.x,F.y,F.z,O)}for(let S=0,R=A.length;S<R;++S){let U=A[S],O=U.start,j=U.count;for(let Z=O,G=O+j;Z<G;Z+=3)L(t.getX(Z+0)),L(t.getX(Z+1)),L(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new Q,r=new Q,o=new Q,a=new Q,u=new Q,c=new Q,p=new Q,f=new Q;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),g=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,y),p.subVectors(o,r),f.subVectors(s,r),p.cross(f),a.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.add(p),u.add(p),c.add(p),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,u.x,u.y,u.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),p.subVectors(o,r),f.subVectors(s,r),p.cross(f),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,u){let c=a.array,p=a.itemSize,f=a.normalized,d=new c.constructor(u.length*p),m=0,_=0;for(let g=0,y=u.length;g<y;g++){a.isInterleavedBufferAttribute?m=u[g]*a.data.stride+a.offset:m=u[g]*p;for(let x=0;x<p;x++)d[_++]=c[m++]}return new Ke(d,p,f)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let u=s[a],c=t(u,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let u=[],c=r[a];for(let p=0,f=c.length;p<f;p++){let d=c[p],m=t(d,i);u.push(m)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,u=o.length;a<u;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let c=i[u];t.data.attributes[u]=c.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],p=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];p.push(m.toJSON(t.data))}p.length>0&&(s[u]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let p=s[c];this.setAttribute(c,p.clone(e))}let r=t.morphAttributes;for(let c in r){let p=[],f=r[c];for(let d=0,m=f.length;d<m;d++)p.push(f[d].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,p=o.length;c<p;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Cn=new Q,So=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new Q,yy=new Q,_y=new me,ci=class{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Zh.subVectors(i,e).cross(yy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||_y.getNormalMatrix(t),s=this.coplanarPoint(Zh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vy=0,Ii=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Er,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=pu,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let u=r[a];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Se().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yi=class extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hr,ao=new Q,ur=new Q,fr=new Q,dr=new Se,lo=new Se,Nm=new Ye,La=new Q,co=new Q,Da=new Q,Up=new Se,Jh=new Se,Fp=new Se,fs=class extends In{constructor(t=new Yi){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new cn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xl(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new So(i,3,0,!1)),hr.setAttribute("uv",new So(i,2,3,!1))}this.geometry=hr,this.material=t,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Nm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Na(La.set(-.5,-.5,0),fr,o,ur,s,r),Na(co.set(.5,-.5,0),fr,o,ur,s,r),Na(Da.set(.5,.5,0),fr,o,ur,s,r),Up.set(0,0),Jh.set(1,0),Fp.set(1,1);let a=t.ray.intersectTriangle(La,co,Da,!1,ao);if(a===null&&(Na(co.set(-.5,.5,0),fr,o,ur,s,r),Jh.set(0,1),a=t.ray.intersectTriangle(La,Da,co,!1,ao),a===null))return;let u=t.ray.origin.distanceTo(ao);u<t.near||u>t.far||e.push({distance:u,point:ao.clone(),uv:Ai.getInterpolation(ao,La,co,Da,Up,Jh,Fp,new Se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Na(n,t,e,i,s,r){dr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(lo.x=r*dr.x-s*dr.y,lo.y=s*dr.x+r*dr.y):lo.copy(dr),n.copy(t),n.x+=lo.x,n.y+=lo.y,n.applyMatrix4(Nm)}var Xi=new Q,jh=new Q,Ua=new Q,Fa=new Q,Mr=class{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jh.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Fa.copy(this.origin).sub(jh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ua),a=Fa.dot(this.direction),u=-Fa.dot(Ua),c=Fa.lengthSq(),p=Math.abs(1-o*o),f,d,m,_;if(p>0)if(f=o*u-a,d=o*a-u,_=r*p,f>=0)if(d>=-_)if(d<=_){let g=1/p;f*=g,d*=g,m=f*(f+o*d+2*a)+d*(o*f+d+2*u)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-u),r),m=-f*f+d*(d+2*u)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-u),r),m=d*(d+2*u)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-u),r),m=-f*f+d*(d+2*u)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(jh).addScaledVector(Ua,d),m}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,u,c=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),p>=0?(r=(t.min.y-d.y)*p,o=(t.max.y-d.y)*p):(r=(t.max.y-d.y)*p,o=(t.min.y-d.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,u=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,u=(t.min.z-d.z)*f),i>u||a>s)||((a>i||i!==i)&&(i=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,u=a.x,c=a.y,p=a.z,f=t.x-o.x,d=t.y-o.y,m=t.z-o.z,_=e.x-o.x,g=e.y-o.y,y=e.z-o.z,x=i.x-o.x,A=i.y-o.y,F=i.z-o.z,T=Math.abs(u),I=Math.abs(c),D=Math.abs(p),L,S,R,U,O,j,Z,G,tt,k,W,st;if(T>=I&&T>=D?(R=u,j=f,tt=_,st=x,u>=0?(L=c,S=p,U=d,O=m,Z=g,G=y,k=A,W=F):(L=p,S=c,U=m,O=d,Z=y,G=g,k=F,W=A)):I>=D?(R=c,j=d,tt=g,st=A,c>=0?(L=p,S=u,U=m,O=f,Z=y,G=_,k=F,W=x):(L=u,S=p,U=f,O=m,Z=_,G=y,k=x,W=F)):(R=p,j=m,tt=y,st=F,p>=0?(L=u,S=c,U=f,O=d,Z=_,G=g,k=x,W=A):(L=c,S=u,U=d,O=f,Z=g,G=_,k=A,W=x)),R===0)return null;let $=L/R,J=S/R,rt=1/R,St=U-$*j,Tt=O-J*j,te=Z-$*tt,Ht=G-J*tt,It=k-$*st,X=W-J*st,K=It*Ht-X*te,lt=St*X-Tt*It,wt=te*Tt-Ht*St;if(s){if(K<0||lt<0||wt<0)return null}else if((K<0||lt<0||wt<0)&&(K>0||lt>0||wt>0))return null;let pt=K+lt+wt;if(pt===0)return null;let zt=rt*(K*j+lt*tt+wt*st);return(pt>0?zt<0:zt>0)?null:this.at(zt/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Op=new Ye,Us=new Mr,Oa=new us,zp=new Q,za=new Q,ka=new Q,Ba=new Q,Kh=new Q,Va=new Q,kp=new Q,Ha=new Q,Oe=class extends In{constructor(t=new cn,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let u=0,c=r.length;u<c;u++){let p=a[u],f=r[u];p!==0&&(Kh.fromBufferAttribute(f,t),o?Va.addScaledVector(Kh,p):Va.addScaledVector(Kh.sub(e),p))}e.add(Va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(Oa.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Oa,zp)===null||Us.origin.distanceToSquared(zp)>(t.far-t.near)**2))&&(Op.copy(r).invert(),Us.copy(t.ray).applyMatrix4(Op),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,u=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let y=d[_],x=o[y.materialIndex],A=Math.max(y.start,m.start),F=Math.min(a.count,Math.min(y.start+y.count,m.start+m.count));for(let T=A,I=F;T<I;T+=3){let D=a.getX(T),L=a.getX(T+1),S=a.getX(T+2);s=Ga(this,x,t,i,c,p,f,D,L,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let y=_,x=g;y<x;y+=3){let A=a.getX(y),F=a.getX(y+1),T=a.getX(y+2);s=Ga(this,o,t,i,c,p,f,A,F,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let y=d[_],x=o[y.materialIndex],A=Math.max(y.start,m.start),F=Math.min(u.count,Math.min(y.start+y.count,m.start+m.count));for(let T=A,I=F;T<I;T+=3){let D=T,L=T+1,S=T+2;s=Ga(this,x,t,i,c,p,f,D,L,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(u.count,m.start+m.count);for(let y=_,x=g;y<x;y+=3){let A=y,F=y+1,T=y+2;s=Ga(this,o,t,i,c,p,f,A,F,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function by(n,t,e,i,s,r,o,a){let u;if(t.side===Pn?u=i.intersectTriangle(o,r,s,!0,a):u=i.intersectTriangle(s,r,o,t.side===_s,a),u===null)return null;Ha.copy(a),Ha.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:n}}function Ga(n,t,e,i,s,r,o,a,u,c){n.getVertexPosition(a,za),n.getVertexPosition(u,ka),n.getVertexPosition(c,Ba);let p=by(n,t,e,i,za,ka,Ba,kp);if(p){let f=new Q;Ai.getBarycoord(kp,za,ka,Ba,f),s&&(p.uv=Ai.getInterpolatedAttribute(s,a,u,c,f,new Se)),r&&(p.uv1=Ai.getInterpolatedAttribute(r,a,u,c,f,new Se)),o&&(p.normal=Ai.getInterpolatedAttribute(o,a,u,c,f,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let d={a,b:u,c,normal:new Q,materialIndex:0};Ai.getNormal(za,ka,Ba,d.normal),p.face=d,p.barycoord=f}return p}var yl=class extends yn{constructor(t=null,e=1,i=1,s,r,o,a,u,c=mn,p=mn,f,d){super(null,o,a,u,c,p,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=new us,My=new Se(.5,.5),Wa=new Q,wo=class{constructor(t=new ci,e=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],u=r[2],c=r[3],p=r[4],f=r[5],d=r[6],m=r[7],_=r[8],g=r[9],y=r[10],x=r[11],A=r[12],F=r[13],T=r[14],I=r[15];if(s[0].setComponents(c-o,m-p,x-_,I-A).normalize(),s[1].setComponents(c+o,m+p,x+_,I+A).normalize(),s[2].setComponents(c+a,m+f,x+g,I+F).normalize(),s[3].setComponents(c-a,m-f,x-g,I-F).normalize(),i)s[4].setComponents(u,d,y,T).normalize(),s[5].setComponents(c-u,m-d,x-y,I-T).normalize();else if(s[4].setComponents(c-u,m-d,x-y,I-T).normalize(),e===hi)s[5].setComponents(c+u,m+d,x+y,I+T).normalize();else if(e===mo)s[5].setComponents(u,d,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=My.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ds=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_l=new Q,vl=new Q,Bp=new Ye,ho=new Mr,Xa=new us,Qh=new Q,Vp=new Q,bl=class extends In{constructor(t=new cn,e=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)_l.fromBufferAttribute(e,s-1),vl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_l.distanceTo(vl);t.setAttribute("lineDistance",new Rn(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;Bp.copy(s).invert(),ho.copy(t.ray).applyMatrix4(Bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=this.isLineSegments?2:1,p=i.index,d=i.attributes.position;if(p!==null){let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=m,y=_-1;g<y;g+=c){let x=p.getX(g),A=p.getX(g+1),F=qa(this,t,ho,u,x,A,g);F&&e.push(F)}if(this.isLineLoop){let g=p.getX(_-1),y=p.getX(m),x=qa(this,t,ho,u,g,y,_-1);x&&e.push(x)}}else{let m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=m,y=_-1;g<y;g+=c){let x=qa(this,t,ho,u,g,g+1,g);x&&e.push(x)}if(this.isLineLoop){let g=qa(this,t,ho,u,_-1,m,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qa(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(_l.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),e.distanceSqToSegment(_l,vl,Qh,Vp)>i)return;Qh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Qh);if(!(c<t.near||c>t.far))return{distance:c,point:Vp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Hp=new Q,Gp=new Q,ps=class extends bl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Hp.fromBufferAttribute(e,s),Gp.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hp.distanceTo(Gp);t.setAttribute("lineDistance",new Rn(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wp=new Ye,ou=new Mr,Ya=new us,$a=new Q,Ao=class extends In{constructor(t=new cn,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,t.ray.intersectsSphere(Ya)===!1)return;Wp.copy(s).invert(),ou.copy(t.ray).applyMatrix4(Wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,g=m;_<g;_++){let y=c.getX(_);$a.fromBufferAttribute(f,y),Xp($a,y,u,s,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m;_<g;_++)$a.fromBufferAttribute(f,_),Xp($a,_,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xp(n,t,e,i,s,r,o){let a=ou.distanceSqToPoint(n);if(a<e){let u=new Q;ou.closestPointToPoint(n,u),u.applyMatrix4(i);let c=s.ray.origin.distanceTo(u);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Eo=class extends yn{constructor(t=[],e=vs,i,s,r,o,a,u,c,p){super(t,e,i,s,r,o,a,u,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qn=class extends yn{constructor(t,e,i,s,r,o,a,u,c){super(t,e,i,s,r,o,a,u,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends yn{constructor(t,e,i=fi,s,r,o,a=mn,u=mn,c,p=Ti,f=1){if(p!==Ti&&p!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,u,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ml=class extends ms{constructor(t,e=fi,i=vs,s,r,o=mn,a=mn,u,c=Ti){let p={width:t,height:t,depth:1},f=[p,p,p,p,p,p];super(t,t,e,i,s,r,o,a,u,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},To=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class n extends cn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],c=[],p=[],f=[],d=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(u),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(p,3)),this.setAttribute("uv",new Rn(f,2));function _(g,y,x,A,F,T,I,D,L,S,R){let U=T/L,O=I/S,j=T/2,Z=I/2,G=D/2,tt=L+1,k=S+1,W=0,st=0,$=new Q;for(let J=0;J<k;J++){let rt=J*O-Z;for(let St=0;St<tt;St++){let Tt=St*U-j;$[g]=Tt*A,$[y]=rt*F,$[x]=G,c.push($.x,$.y,$.z),$[g]=0,$[y]=0,$[x]=D>0?1:-1,p.push($.x,$.y,$.z),f.push(St/L),f.push(1-J/S),W+=1}}for(let J=0;J<S;J++)for(let rt=0;rt<L;rt++){let St=d+rt+tt*J,Tt=d+rt+tt*(J+1),te=d+(rt+1)+tt*(J+1),Ht=d+(rt+1)+tt*J;u.push(St,Tt,Ht),u.push(Tt,te,Ht),st+=6}a.addGroup(m,st,R),m+=st,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Za=new Q,Ja=new Q,tu=new Q,ja=new Ai,wr=class extends cn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(nl*e),o=t.getIndex(),a=t.getAttribute("position"),u=o?o.count:a.count,c=[0,0,0],p=["a","b","c"],f=new Array(3),d={},m=[];for(let _=0;_<u;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:g,b:y,c:x}=ja;if(g.fromBufferAttribute(a,c[0]),y.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),ja.getNormal(tu),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){let F=(A+1)%3,T=f[A],I=f[F],D=ja[p[A]],L=ja[p[F]],S=`${T}_${I}`,R=`${I}_${T}`;R in d&&d[R]?(tu.dot(d[R].normal)<=r&&(m.push(D.x,D.y,D.z),m.push(L.x,L.y,L.z)),d[R]=null):S in d||(d[S]={index0:c[A],index1:c[F],normal:tu.clone()})}}for(let _ in d)if(d[_]){let{index0:g,index1:y}=d[_];Za.fromBufferAttribute(a,g),Ja.fromBufferAttribute(a,y),m.push(Za.x,Za.y,Za.z),m.push(Ja.x,Ja.y,Ja.z)}this.setAttribute("position",new Rn(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Co=class n extends cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),u=Math.floor(s),c=a+1,p=u+1,f=t/a,d=e/u,m=[],_=[],g=[],y=[];for(let x=0;x<p;x++){let A=x*d-o;for(let F=0;F<c;F++){let T=F*f-r;_.push(T,-A,0),g.push(0,0,1),y.push(F/a),y.push(1-x/u)}}for(let x=0;x<u;x++)for(let A=0;A<a;A++){let F=A+c*x,T=A+c*(x+1),I=A+1+c*(x+1),D=A+1+c*x;m.push(F,T,D),m.push(T,I,D)}this.setIndex(m),this.setAttribute("position",new Rn(_,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Bs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(qp(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(qp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=Bs(n[e]);for(let s in i)t[s]=i[s]}return t}function qp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sy(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var Um={clone:Bs,merge:En},wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Sy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new je().fromArray(s.value);break;case"m3":this.uniforms[i].value=new me().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sl=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wl=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Al=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function eu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let u=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},El=class extends gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],u=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case su:r=t,a=2*e-i;break;case ru:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(u===void 0)switch(this.getSettings_().endingEnd){case su:o=t,u=2*i-e;break;case ru:o=1,u=i+s[1]-s[0];break;default:o=t-1,u=e}let c=(i-e)*.5,p=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(u-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,p=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),g=_*_,y=g*_,x=-d*y+2*d*g-d*_,A=(1+d)*y+(-1.5-2*d)*g+(-.5+d)*_+1,F=(-1-m)*y+(1.5+m)*g+.5*_,T=m*y-m*g;for(let I=0;I!==a;++I)r[I]=x*o[p+I]+A*o[c+I]+F*o[u+I]+T*o[f+I];return r}},Tl=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,p=(i-e)/(s-e),f=1-p;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[u+d]*p;return r}},Cl=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rl=class extends gs{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,p=this.inTangents,f=this.outTangents;if(!p||!f){let _=(i-e)/(s-e),g=1-_;for(let y=0;y!==a;++y)r[y]=o[c+y]*g+o[u+y]*_;return r}let d=a*2,m=t-1;for(let _=0;_!==a;++_){let g=o[c+_],y=o[u+_],x=m*d+_*2,A=f[x],F=f[x+1],T=t*d+_*2,I=p[T],D=p[T+1],L=Ty(i,e,A,I,s);r[_]=Fm(L,g,F,D,y)}return r}};function Fm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ey(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ty(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Fm(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let u=Ey(r,t,e,i,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-a/u))}return r}var Yn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),eu(t.settings)&&(i.settings={inTangents:pr(t.settings.inTangents,Array),outTangents:pr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case uo:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break;case nu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return nu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;eu(this.settings)&&(Yp(this.settings.inTangents,t),Yp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(he("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(he("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let u=i[a];if(typeof u=="number"&&isNaN(u)){he("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(o!==null&&o>u){he("KeyframeTrack: Out of order keys.",this,a,u,o),t=!1;break}o=u}if(s!==void 0&&iy(s))for(let a=0,u=s.length;a!==u;++a){let c=s[a];if(isNaN(c)){he("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tl,r=t.length-1,o=1;for(let a=1;a<r;++a){let u=!1,c=t[a],p=t[a+1];if(c!==p&&(a!==1||c!==t[0]))if(s)u=!0;else{let f=a*i,d=f-i,m=f+i;for(let _=0;_!==i;++_){let g=e[f+_];if(g!==e[d+_]||g!==e[m+_]){u=!0;break}}}if(u){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,u=o*i,c=0;c!==i;++c)e[u+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,eu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=fl;var xs=class extends Yn{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=uo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Il.prototype.ValueTypeName="color";var Pl=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Pl.prototype.ValueTypeName="number";var Ll=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=(i-e)/(s-e),c=t*a;for(let p=c+a;c!==p;c+=4)Ri.slerpFlat(r,0,o,c-a,o,c,u);return r}},Ro=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Yn{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=uo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,u,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,f){return c.push(p,f),this},this.removeHandler=function(p){let f=c.indexOf(p);return f!==-1&&c.splice(f,2),this},this.getHandler=function(p){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(p))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new Nl,Ul=class{constructor(t){this.manager=t!==void 0?t:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ka=new Q,Qa=new Ri,Si=new Q,Io=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ka,Qa,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Qa,Si.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ka,Qa,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Qa,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new Q,$p=new Se,Zp=new Se,Sn=class extends Io{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,$p,Zp),e.subVectors(Zp,$p)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*i/c,s*=o.width/u,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Po=class extends Io{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var mr=-90,gr=1,Fl=class extends In{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(mr,gr,t,e);s.layers=this.layers,this.add(s);let r=new Sn(mr,gr,t,e);r.layers=this.layers,this.add(r);let o=new Sn(mr,gr,t,e);o.layers=this.layers,this.add(o);let a=new Sn(mr,gr,t,e);a.layers=this.layers,this.add(a);let u=new Sn(mr,gr,t,e);u.layers=this.layers,this.add(u);let c=new Sn(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,u]=e;for(let c of e)this.remove(c);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,u,c,p]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(f,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ol=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Uu="\\[\\]\\.:\\/",Cy=new RegExp("["+Uu+"]","g"),Fu="[^"+Uu+"]",Ry="[^"+Uu.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",Fu),Py=/(WCOD+)?/.source.replace("WCOD",Ry),Ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),Dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),Ny=new RegExp("^"+Iy+Py+Ly+Dy+"$"),Uy=["material","materials","bones","map"],au=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(t){let e=Ny.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Uy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let u=i(a.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){he("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){he("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===c){c=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){he("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){he("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){he("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;he("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=au;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R1=new Float32Array(1);var Hu=class Hu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Hu.prototype.isMatrix2=!0;var lu=Hu;function Ou(n,t,e,i){let s=Fy(i);switch(e){case Cu:return n*t;case Iu:return n*t/s.components*s.byteLength;case Xl:return n*t/s.components*s.byteLength;case Ss:return n*t*2/s.components*s.byteLength;case ql:return n*t*2/s.components*s.byteLength;case Ru:return n*t*3/s.components*s.byteLength;case Qn:return n*t*4/s.components*s.byteLength;case Yl:return n*t*4/s.components*s.byteLength;case Uo:case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oo:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:case jl:return Math.max(n,16)*Math.max(t,8)/4;case $l:case Jl:return Math.max(n,8)*Math.max(t,8)/2;case Kl:case Ql:case ec:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tc:case ko:case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yc:case _c:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bc:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bo:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fy(n){switch(n){case $n:case wu:return{byteLength:1,components:1};case Tr:case Au:case pi:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case fi:case Hl:case di:return{byteLength:4,components:1};case Eu:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function r0(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zy(n){let t=new WeakMap;function e(a,u){let c=a.array,p=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,c,p),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,u,c){let p=u.array,f=u.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,p);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){let _=f[d],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){let g=f[m];n.bufferSubData(c,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,u),c.version=a.version}}return{get:s,remove:r,update:o}}var ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
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
#endif`,Vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yy=`#ifdef USE_BATCHING
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
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ky=`#ifdef USE_IRIDESCENCE
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
#endif`,Qy=`#ifdef USE_BUMPMAP
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l_=`#define PI 3.141592653589793
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
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
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
}`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
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
#endif`,O_=`uniform sampler2D dfgLUT;
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
}`,z_=`
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
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
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
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
#endif`,cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wv=`float getShadowMask() {
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
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,Tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cv=`#ifdef USE_SKINNING
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
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dv=`#ifdef USE_TRANSMISSION
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
#endif`,Nv=`#ifdef USE_TRANSMISSION
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`#include <common>
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
}`,qv=`#if DEPTH_PACKING == 3200
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
}`,Yv=`#define DISTANCE
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
}`,$v=`#define DISTANCE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`uniform float scale;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Qv=`#include <common>
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
}`,tb=`uniform vec3 diffuse;
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
}`,eb=`#define LAMBERT
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,ob=`#define NORMAL
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
}`,ab=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,cb=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,ub=`#define TOON
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
}`,fb=`#define TOON
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
}`,db=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 color;
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
}`,xb=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:ky,alphahash_pars_fragment:By,alphamap_fragment:Vy,alphamap_pars_fragment:Hy,alphatest_fragment:Gy,alphatest_pars_fragment:Wy,aomap_fragment:Xy,aomap_pars_fragment:qy,batching_pars_vertex:Yy,batching_vertex:$y,begin_vertex:Zy,beginnormal_vertex:Jy,bsdfs:jy,iridescence_fragment:Ky,bumpmap_pars_fragment:Qy,clipping_planes_fragment:t_,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:n_,clipping_planes_vertex:i_,color_fragment:s_,color_pars_fragment:r_,color_pars_vertex:o_,color_vertex:a_,common:l_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:h_,displacementmap_pars_vertex:u_,displacementmap_vertex:f_,emissivemap_fragment:d_,emissivemap_pars_fragment:p_,colorspace_fragment:m_,colorspace_pars_fragment:g_,envmap_fragment:x_,envmap_common_pars_fragment:y_,envmap_pars_fragment:__,envmap_pars_vertex:v_,envmap_physical_pars_fragment:P_,envmap_vertex:b_,fog_vertex:M_,fog_pars_vertex:S_,fog_fragment:w_,fog_pars_fragment:A_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:T_,lights_lambert_fragment:C_,lights_lambert_pars_fragment:R_,lights_pars_begin:I_,lights_toon_fragment:L_,lights_toon_pars_fragment:D_,lights_phong_fragment:N_,lights_phong_pars_fragment:U_,lights_physical_fragment:F_,lights_physical_pars_fragment:O_,lights_fragment_begin:z_,lights_fragment_maps:k_,lights_fragment_end:B_,lightprobes_pars_fragment:V_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:q_,map_pars_fragment:Y_,map_particle_fragment:$_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:j_,morphinstance_vertex:K_,morphcolor_vertex:Q_,morphnormal_vertex:tv,morphtarget_pars_vertex:ev,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:sv,normal_pars_fragment:rv,normal_pars_vertex:ov,normal_vertex:av,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:cv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:uv,iridescence_pars_fragment:fv,opaque_fragment:dv,packing:pv,premultiplied_alpha_fragment:mv,project_vertex:gv,dithering_fragment:xv,dithering_pars_fragment:yv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:Mv,shadowmap_vertex:Sv,shadowmask_pars_fragment:wv,skinbase_vertex:Av,skinning_pars_vertex:Ev,skinning_vertex:Tv,skinnormal_vertex:Cv,specularmap_fragment:Rv,specularmap_pars_fragment:Iv,tonemapping_fragment:Pv,tonemapping_pars_fragment:Lv,transmission_fragment:Dv,transmission_pars_fragment:Nv,uv_pars_fragment:Uv,uv_pars_vertex:Fv,uv_vertex:Ov,worldpos_vertex:zv,background_vert:kv,background_frag:Bv,backgroundCube_vert:Vv,backgroundCube_frag:Hv,cube_vert:Gv,cube_frag:Wv,depth_vert:Xv,depth_frag:qv,distance_vert:Yv,distance_frag:$v,equirect_vert:Zv,equirect_frag:Jv,linedashed_vert:jv,linedashed_frag:Kv,meshbasic_vert:Qv,meshbasic_frag:tb,meshlambert_vert:eb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:sb,meshnormal_vert:rb,meshnormal_frag:ob,meshphong_vert:ab,meshphong_frag:lb,meshphysical_vert:cb,meshphysical_frag:hb,meshtoon_vert:ub,meshtoon_frag:fb,points_vert:db,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:xb,sprite_frag:yb},Bt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Di={basic:{uniforms:En([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:En([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:En([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:En([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:En([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:En([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:En([Bt.points,Bt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:En([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:En([Bt.common,Bt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:En([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:En([Bt.sprite,Bt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:En([Bt.common,Bt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:En([Bt.lights,Bt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Di.physical={uniforms:En([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var Ec={r:0,b:0,g:0},_b=new Ye,o0=new me;o0.set(-1,0,0,0,1,0,0,0,1);function vb(n,t,e,i,s,r){let o=new ue(0),a=s===!0?0:1,u,c,p=null,f=0,d=null;function m(A){let F=A.isScene===!0?A.background:null;if(F&&F.isTexture){let T=A.backgroundBlurriness>0;F=t.get(F,T)}return F}function _(A){let F=!1,T=m(A);T===null?y(o,a):T&&T.isColor&&(y(T,1),F=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,F){let T=m(F);T&&(T.isCubeTexture||T.mapping===Do)?(c===void 0&&(c=new Oe(new $e(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Bs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(F.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(o0),c.material.toneMapped=Ee.getTransfer(T.colorSpace)!==ke,(p!==T||f!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,p=T,f=T.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Oe(new Co(2,2),new An({name:"BackgroundMaterial",uniforms:Bs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,u.material.toneMapped=Ee.getTransfer(T.colorSpace)!==ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||f!==T.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,p=T,f=T.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function y(A,F){A.getRGB(Ec,Nu(n)),e.buffers.color.setClear(Ec.r,Ec.g,Ec.b,F,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,F=1){o.set(A),a=F,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,y(o,a)},render:_,addToRenderList:g,dispose:x}}function bb(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(O,j,Z,G,tt){let k=!1,W=f(O,G,Z,j);r!==W&&(r=W,c(r.object)),k=m(O,G,Z,tt),k&&_(O,G,Z,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,T(O,j,Z,G),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function u(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function p(O){return n.deleteVertexArray(O)}function f(O,j,Z,G){let tt=G.wireframe===!0,k=i[j.id];k===void 0&&(k={},i[j.id]=k);let W=O.isInstancedMesh===!0?O.id:0,st=k[W];st===void 0&&(st={},k[W]=st);let $=st[Z.id];$===void 0&&($={},st[Z.id]=$);let J=$[tt];return J===void 0&&(J=d(u()),$[tt]=J),J}function d(O){let j=[],Z=[],G=[];for(let tt=0;tt<e;tt++)j[tt]=0,Z[tt]=0,G[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:G,object:O,attributes:{},index:null}}function m(O,j,Z,G){let tt=r.attributes,k=j.attributes,W=0,st=Z.getAttributes();for(let $ in st)if(st[$].location>=0){let rt=tt[$],St=k[$];if(St===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(St=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(St=O.instanceColor)),rt===void 0||rt.attribute!==St||St&&rt.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function _(O,j,Z,G){let tt={},k=j.attributes,W=0,st=Z.getAttributes();for(let $ in st)if(st[$].location>=0){let rt=k[$];rt===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor));let St={};St.attribute=rt,rt&&rt.data&&(St.data=rt.data),tt[$]=St,W++}r.attributes=tt,r.attributesNum=W,r.index=G}function g(){let O=r.newAttributes;for(let j=0,Z=O.length;j<Z;j++)O[j]=0}function y(O){x(O,0)}function x(O,j){let Z=r.newAttributes,G=r.enabledAttributes,tt=r.attributeDivisors;Z[O]=1,G[O]===0&&(n.enableVertexAttribArray(O),G[O]=1),tt[O]!==j&&(n.vertexAttribDivisor(O,j),tt[O]=j)}function A(){let O=r.newAttributes,j=r.enabledAttributes;for(let Z=0,G=j.length;Z<G;Z++)j[Z]!==O[Z]&&(n.disableVertexAttribArray(Z),j[Z]=0)}function F(O,j,Z,G,tt,k,W){W===!0?n.vertexAttribIPointer(O,j,Z,tt,k):n.vertexAttribPointer(O,j,Z,G,tt,k)}function T(O,j,Z,G){g();let tt=G.attributes,k=Z.getAttributes(),W=j.defaultAttributeValues;for(let st in k){let $=k[st];if($.location>=0){let J=tt[st];if(J===void 0&&(st==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),st==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){let rt=J.normalized,St=J.itemSize,Tt=t.get(J);if(Tt===void 0)continue;let te=Tt.buffer,Ht=Tt.type,It=Tt.bytesPerElement,X=Ht===n.INT||Ht===n.UNSIGNED_INT||J.gpuType===Hl;if(J.isInterleavedBufferAttribute){let K=J.data,lt=K.stride,wt=J.offset;if(K.isInstancedInterleavedBuffer){for(let pt=0;pt<$.locationSize;pt++)x($.location+pt,K.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pt=0;pt<$.locationSize;pt++)y($.location+pt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let pt=0;pt<$.locationSize;pt++)F($.location+pt,St/$.locationSize,Ht,rt,lt*It,(wt+St/$.locationSize*pt)*It,X)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<$.locationSize;K++)x($.location+K,J.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<$.locationSize;K++)y($.location+K);n.bindBuffer(n.ARRAY_BUFFER,te);for(let K=0;K<$.locationSize;K++)F($.location+K,St/$.locationSize,Ht,rt,St*It,St/$.locationSize*K*It,X)}}else if(W!==void 0){let rt=W[st];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv($.location,rt);break;case 3:n.vertexAttrib3fv($.location,rt);break;case 4:n.vertexAttrib4fv($.location,rt);break;default:n.vertexAttrib1fv($.location,rt)}}}}A()}function I(){R();for(let O in i){let j=i[O];for(let Z in j){let G=j[Z];for(let tt in G){let k=G[tt];for(let W in k)p(k[W].object),delete k[W];delete G[tt]}}delete i[O]}}function D(O){if(i[O.id]===void 0)return;let j=i[O.id];for(let Z in j){let G=j[Z];for(let tt in G){let k=G[tt];for(let W in k)p(k[W].object),delete k[W];delete G[tt]}}delete i[O.id]}function L(O){for(let j in i){let Z=i[j];for(let G in Z){let tt=Z[G];if(tt[O.id]===void 0)continue;let k=tt[O.id];for(let W in k)p(k[W].object),delete k[W];delete tt[O.id]}}}function S(O){for(let j in i){let Z=i[j],G=O.isInstancedMesh===!0?O.id:0,tt=Z[G];if(tt!==void 0){for(let k in tt){let W=tt[k];for(let st in W)p(W[st].object),delete W[st];delete tt[k]}delete Z[G],Object.keys(Z).length===0&&delete i[j]}}}function R(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:y,disableUnusedAttributes:A}}function Mb(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,p){p!==0&&(n.drawArraysInstanced(i,u,c,p),e.update(c,i,p))}function a(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,p);let d=0;for(let m=0;m<p;m++)d+=c[m];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Qn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let S=L===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==$n&&L!==di&&!S&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",p=u(c);p!==c&&(ae("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:F,maxFragmentUniforms:T,maxSamples:I,samples:D}}function wb(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ci,a=new me,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=p(f,d,0)},this.setState=function(f,d,m){let _=f.clippingPlanes,g=f.clipIntersection,y=f.clipShadows,x=n.get(f);if(!s||_===null||_.length===0||r&&!y)r?p(null):c();else{let A=r?0:i,F=A*4,T=x.clippingState||null;u.value=T,T=p(_,d,F,m);for(let I=0;I!==F;++I)T[I]=e[I];x.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(f,d,m,_){let g=f!==null?f.length:0,y=null;if(g!==0){if(y=u.value,_!==!0||y===null){let x=m+g*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,T=m;F!==g;++F,T+=4)o.copy(f[F]).applyMatrix4(A,a),o.normal.toArray(y,T),y[T+3]=o.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,y}}var Ir=4,Ab=6,Eb=20,Tb=256,Vo=new Po,zm=new ue,Gu=null,Wu=0,Xu=0,qu=!1,Cb=new Q,Vs=new Q,Cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Cb}=r;Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=qu,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:pi,format:Qn,colorSpace:fo,depthBuffer:!1},s=km(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Rb(r)),this._blurMaterial=Pb(r,t,e),this._ggxMaterial=Ib(r,t,e)}return s}_compileMaterial(t){let e=new Oe(new cn,t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,i,s,r){let u=new Sn(90,1,e,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(zm),f.toneMapping=ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new $e,new wn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,y=g.material,x=!1,A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,x=!0):(y.color.copy(zm),x=!0);for(let F=0;F<6;F++){let T=F%3;T===0?(u.up.set(0,c[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+p[F],r.y,r.z)):T===1?(u.up.set(0,0,c[F]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+p[F],r.z)):(u.up.set(0,c[F],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+p[F]));let I=this._cubeSize;Rr(s,T*I,F>2?I:0,I,I),f.setRenderTarget(s),x&&f.render(g,u),f.render(t,u)}f.toneMapping=m,f.autoClear=d,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===vs||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let u=this._cubeSize;Rr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(o,Vo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let u=o.uniforms,c=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-p*p),d=c*1.25,m=f*d,{_lodMax:_}=this,g=this._sizeLods[i],y=3*g*(i>_-Ir?i-_+Ir:0),x=4*(this._cubeSize-g);u.envMap.value=t.texture,u.roughness.value=m,u.mipInt.value=_-e,Rr(r,y,x,3*g,2*g),s.setRenderTarget(r),s.render(a,Vo),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=_-i,Rr(t,y,x,3*g,2*g),s.setRenderTarget(t),s.render(a,Vo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,u=this._lodMeshes[s];u.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],f=3*p*(s>this._lodMax-Ir?s-this._lodMax+Ir:0),d=4*(this._cubeSize-p);Rr(e,f,d,3*p,2*p),o.setRenderTarget(e),o.render(u,Vo)}};function Rb(n){let t=[],e=[],i=n,s=n-Ir+1+Ab;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),u=-a,c=1+a,p=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,d=6,m=3,_=new Float32Array(m*d*f),g=new Float32Array(m*d*f);for(let x=0;x<f;x++){let A=x%3*2/3-1,F=x>2?0:-1,T=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];_.set(T,m*d*x);for(let I=0;I<d;I++){let D=p[I*2]*2-1,L=p[I*2+1]*2-1;x===0?Vs.set(1,L,D):x===1?Vs.set(-D,1,-L):x===2?Vs.set(-D,L,1):x===3?Vs.set(-1,L,-D):x===4?Vs.set(-D,-1,L):Vs.set(D,L,-1),Vs.toArray(g,(x*d+I)*m)}}let y=new cn;y.setAttribute("position",new Ke(_,m)),y.setAttribute("outputDirection",new Ke(g,m)),e.push(new Oe(y,null)),i>Ir&&i--}return{lodMeshes:e,sizeLods:t}}function km(n,t,e){let i=new Fn(n,t,e);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ib(n,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Pb(n,t,e){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Bm(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Vm(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rc=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Pi});r.uniforms.tEquirect.value=e;let o=new Oe(s,r),a=e.minFilter;return e.minFilter===bs&&(e.minFilter=an),new Fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Lb(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===kl||m===Bl)if(t.has(d)){let _=t.get(d).texture;return a(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let g=new Rc(_.height);return g.fromEquirectangularTexture(n,d),t.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let m=d.mapping,_=m===kl||m===Bl,g=m===vs||m===ks;if(_||g){let y=e.get(d),x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Cc(n)),y=_?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{let A=d.image;return _&&A&&A.height>0||g&&A&&u(A)?(i===null&&(i=new Cc(n)),y=_?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",p),y.texture):null}}}return d}function a(d,m){return m===kl?d.mapping=vs:m===Bl&&(d.mapping=ks),d}function u(d){let m=0,_=6;for(let g=0;g<_;g++)d[g]!==void 0&&m++;return m===_}function c(d){let m=d.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(d){let m=d.target;m.removeEventListener("dispose",p);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Db(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Os("WebGLRenderer: "+i+" extension not supported."),s}}}function Nb(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function u(f){let d=f.attributes;for(let m in d)t.update(d[m],n.ARRAY_BUFFER)}function c(f){let d=[],m=f.index,_=f.attributes.position,g=0;if(_===void 0)return;if(m!==null){let A=m.array;g=m.version;for(let F=0,T=A.length;F<T;F+=3){let I=A[F+0],D=A[F+1],L=A[F+2];d.push(I,D,D,L,L,I)}}else{let A=_.array;g=_.version;for(let F=0,T=A.length/3-1;F<T;F+=3){let I=F+0,D=F+1,L=F+2;d.push(I,D,D,L,L,I)}}let y=new(_.count>=65535?Mo:bo)(d,1);y.version=g;let x=r.get(f);x&&t.remove(x),r.set(f,y)}function p(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:u,getWireframeAttribute:p}}function Ub(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function u(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function p(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y];e.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=p}function Fb(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:he("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ob(n,t,e){let i=new WeakMap,s=new je;function r(o,a,u){let c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=p!==void 0?p.length:0,d=i.get(a);if(d===void 0||d.count!==f){let R=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],F=0;m===!0&&(F=1),_===!0&&(F=2),g===!0&&(F=3);let T=a.attributes.position.count*F,I=1;T>t.maxTextureSize&&(I=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let D=new Float32Array(T*I*4*f),L=new yo(D,T,I,f);L.type=di,L.needsUpdate=!0;let S=F*4;for(let U=0;U<f;U++){let O=y[U],j=x[U],Z=A[U],G=T*I*4*U;for(let tt=0;tt<O.count;tt++){let k=tt*S;m===!0&&(s.fromBufferAttribute(O,tt),D[G+k+0]=s.x,D[G+k+1]=s.y,D[G+k+2]=s.z,D[G+k+3]=0),_===!0&&(s.fromBufferAttribute(j,tt),D[G+k+4]=s.x,D[G+k+5]=s.y,D[G+k+6]=s.z,D[G+k+7]=0),g===!0&&(s.fromBufferAttribute(Z,tt),D[G+k+8]=s.x,D[G+k+9]=s.y,D[G+k+10]=s.z,D[G+k+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Se(T,I)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let _=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",c)}u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function zb(n,t,e,i,s){let r=new WeakMap;function o(c){let p=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==p&&(t.update(d),r.set(d,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),r.get(c)!==p&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==p&&(m.update(),r.set(m,p))}return d}function a(){r=new WeakMap}function u(c){let p=c.target;p.removeEventListener("dispose",u),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:a}}var kb={[gu]:"LINEAR_TONE_MAPPING",[xu]:"REINHARD_TONE_MAPPING",[yu]:"CINEON_TONE_MAPPING",[_u]:"ACES_FILMIC_TONE_MAPPING",[bu]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[vu]:"CUSTOM_TONE_MAPPING"};function Bb(n,t,e,i,s,r){let o=new Fn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,u=null,c=new cn;c.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Rn([0,2,0,0,2,0],2));let p=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Oe(c,p),d=new Po(-1,1,1,-1,0,1),m=null,_=null,g=!1,y,x=null,A=[],F=!1;this.setSize=function(T,I){o.setSize(T,I),a!==null&&a.setSize(T,I),u!==null&&u.setSize(T,I);for(let D=0;D<A.length;D++){let L=A[D];L.setSize&&L.setSize(T,I)}},this.setEffects=function(T){A=T,F=A.length>0&&A[0].isRenderPass===!0;let I=o.width,D=o.height;A.length>0&&a===null&&(a=new Fn(I,D,{type:pi,depthBuffer:!1,stencilBuffer:!1}),u=new Fn(I,D,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<A.length;L++){let S=A[L];S.setSize&&S.setSize(I,D)}},this.begin=function(T,I){if(g||T.toneMapping===ui&&A.length===0)return!1;if(x=I,I!==null){let D=I.width,L=I.height;(o.width!==D||o.height!==L)&&this.setSize(D,L)}return F===!1&&T.setRenderTarget(o),y=T.toneMapping,T.toneMapping=ui,!0},this.hasRenderPass=function(){return F},this.end=function(T,I){T.toneMapping=y,g=!0;let D=o,L=a;for(let S=0;S<A.length;S++){let R=A[S];R.enabled!==!1&&(R.render(T,L,D,I),R.needsSwap!==!1&&(D=L,L=L===a?u:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,p.defines={},Ee.getTransfer(m)===ke&&(p.defines.SRGB_TRANSFER="");let S=kb[_];S&&(p.defines[S]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(x),T.render(f,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),c.dispose(),p.dispose()}}var a0=new yn,Zu=new ms(1,1),l0=new yo,c0=new gl,h0=new Eo,Hm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function Lr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Hm[s];if(r===void 0&&(r=new Float32Array(s),Hm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Lc(n,t){let e=Gm[t];e===void 0&&(e=new Int32Array(t),Gm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Vb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Hb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function Gb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function Wb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function Xb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;qm.set(i),n.uniformMatrix2fv(this.addr,!1,qm),un(e,i)}}function qb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;Xm.set(i),n.uniformMatrix3fv(this.addr,!1,Xm),un(e,i)}}function Yb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,i))return;Wm.set(i),n.uniformMatrix4fv(this.addr,!1,Wm),un(e,i)}}function $b(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Zb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function Jb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function jb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function Kb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Qb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function tM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function eM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function nM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zu.compareFunction=e.isReversedDepthBuffer()?Ac:wc,r=Zu):r=a0,e.setTexture2D(t||r,s)}function iM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||c0,s)}function sM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||h0,s)}function rM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||l0,s)}function oM(n){switch(n){case 5126:return Vb;case 35664:return Hb;case 35665:return Gb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return $b;case 35667:case 35671:return Zb;case 35668:case 35672:return Jb;case 35669:case 35673:return jb;case 5125:return Kb;case 36294:return Qb;case 36295:return tM;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function aM(n,t){n.uniform1fv(this.addr,t)}function lM(n,t){let e=Lr(t,this.size,2);n.uniform2fv(this.addr,e)}function cM(n,t){let e=Lr(t,this.size,3);n.uniform3fv(this.addr,e)}function hM(n,t){let e=Lr(t,this.size,4);n.uniform4fv(this.addr,e)}function uM(n,t){let e=Lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fM(n,t){let e=Lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function dM(n,t){let e=Lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function pM(n,t){n.uniform1iv(this.addr,t)}function mM(n,t){n.uniform2iv(this.addr,t)}function gM(n,t){n.uniform3iv(this.addr,t)}function xM(n,t){n.uniform4iv(this.addr,t)}function yM(n,t){n.uniform1uiv(this.addr,t)}function _M(n,t){n.uniform2uiv(this.addr,t)}function vM(n,t){n.uniform3uiv(this.addr,t)}function bM(n,t){n.uniform4uiv(this.addr,t)}function MM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Zu:o=a0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function SM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||c0,r[o])}function wM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||h0,r[o])}function AM(n,t,e){let i=this.cache,s=t.length,r=Lc(e,s);hn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||l0,r[o])}function EM(n){switch(n){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return hM;case 35674:return uM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return _M;case 36295:return vM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}var Ju=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=oM(e.type)}},ju=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=EM(e.type)}},Ku=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Yu=/(\w+)(\])?(\[|\.)?/g;function Ym(n,t){n.seq.push(t),n.map[t.id]=t}function TM(n,t,e){let i=n.name,s=i.length;for(Yu.lastIndex=0;;){let r=Yu.exec(i),o=Yu.lastIndex,a=r[1],u=r[2]==="]",c=r[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===s){Ym(e,c===void 0?new Ju(a,n,t):new ju(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ku(a),Ym(e,f)),e=f}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),u=t.getUniformLocation(e,a.name);TM(a,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function $m(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var CM=37297,RM=0;function IM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Zm=new me;function PM(n){Ee._getMatrix(Zm,Ee.workingColorSpace,n);let t=`mat3( ${Zm.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(n)){case po:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+IM(n.getShaderSource(t),a)}else return r}function LM(n,t){let e=PM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var DM={[gu]:"Linear",[xu]:"Reinhard",[yu]:"Cineon",[_u]:"ACESFilmic",[bu]:"AgX",[Mu]:"Neutral",[vu]:"Custom"};function NM(n,t){let e=DM[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tc=new Q;function UM(){Ee.getLuminanceCoefficients(Tc);let n=Tc.x.toFixed(4),t=Tc.y.toFixed(4),e=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function OM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Go(n){return n!==""}function jm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Km(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(n){return n.replace(kM,VM)}var BM=new Map;function VM(n,t){let e=ve[t];if(e===void 0){let i=BM.get(t);if(i!==void 0)e=ve[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Qu(e)}var HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(n){return n.replace(HM,GM)}function GM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function t0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var WM={[Lo]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function XM(n){return WM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qM={[vs]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"};function YM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var $M={[ks]:"ENVMAP_MODE_REFRACTION"};function ZM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$M[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var JM={[mu]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function jM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":JM[n.combine]||"ENVMAP_BLENDING_NONE"}function KM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function QM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,u=XM(e),c=YM(e),p=ZM(e),f=jM(e),d=KM(e),m=FM(e),_=OM(r),g=s.createProgram(),y,x,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Go).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(y=[t0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[t0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?ve.tonemapping_pars_fragment:"",e.toneMapping!==ui?NM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,LM("linearToOutputTexel",e.outputColorSpace),UM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),o=Qu(o),o=jm(o,e),o=Km(o,e),a=Qu(a),a=jm(a,e),a=Km(a,e),o=Qm(o),a=Qm(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let F=A+y+o,T=A+x+a,I=$m(s,s.VERTEX_SHADER,F),D=$m(s,s.FRAGMENT_SHADER,T);s.attachShader(g,I),s.attachShader(g,D),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function L(O){if(n.debug.checkShaderErrors){let j=s.getProgramInfoLog(g)||"",Z=s.getShaderInfoLog(I)||"",G=s.getShaderInfoLog(D)||"",tt=j.trim(),k=Z.trim(),W=G.trim(),st=!0,$=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,I,D);else{let J=Jm(s,I,"vertex"),rt=Jm(s,D,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+tt+`
`+J+`
`+rt)}else tt!==""?ae("WebGLProgram: Program Info Log:",tt):(k===""||W==="")&&($=!1);$&&(O.diagnostics={runnable:st,programLog:tt,vertexShader:{log:k,prefix:y},fragmentShader:{log:W,prefix:x}})}s.deleteShader(I),s.deleteShader(D),S=new Pr(s,g),R=zM(s,g)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,CM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=D,this}var tS=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ef(t),e.set(t,i)),i}},ef=class{constructor(t){this.id=tS++,this.code=t,this.usedTimes=0}};function eS(n){return n===Ss||n===ko||n===Bo}function nS(n,t,e,i,s,r){let o=new _o,a=new tf,u=new Set,c=[],p=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function g(S,R,U,O,j,Z){let G=O.fog,tt=j.geometry,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,st=t.get(S.envMap||k,W),$=st&&st.mapping===Do?st.image.height:null,J=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&ae("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let rt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,St=rt!==void 0?rt.length:0,Tt=0;tt.morphAttributes.position!==void 0&&(Tt=1),tt.morphAttributes.normal!==void 0&&(Tt=2),tt.morphAttributes.color!==void 0&&(Tt=3);let te,Ht,It,X;if(J){let Ue=Di[J];te=Ue.vertexShader,Ht=Ue.fragmentShader}else{te=S.vertexShader,Ht=S.fragmentShader;let Ue=a.getVertexShaderStage(S),De=a.getFragmentShaderStage(S);a.update(S,Ue,De),It=Ue.id,X=De.id}let K=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),wt=j.isInstancedMesh===!0,pt=j.isBatchedMesh===!0,zt=!!S.map,se=!!S.matcap,Dt=!!st,Xt=!!S.aoMap,ht=!!S.lightMap,Zt=!!S.bumpMap&&S.wireframe===!1,Qt=!!S.normalMap,_e=!!S.displacementMap,fe=!!S.emissiveMap,ye=!!S.metalnessMap,we=!!S.roughnessMap,V=S.anisotropy>0,He=S.clearcoat>0,be=S.dispersion>0,N=S.retroreflectivity>0,b=S.iridescence>0,Y=S.sheen>0,ot=S.transmission>0,ft=V&&!!S.anisotropyMap,At=He&&!!S.clearcoatMap,Pt=He&&!!S.clearcoatNormalMap,dt=He&&!!S.clearcoatRoughnessMap,gt=b&&!!S.iridescenceMap,Ut=b&&!!S.iridescenceThicknessMap,qt=Y&&!!S.sheenColorMap,Ct=Y&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,ne=!!S.specularColorMap,oe=!!S.specularIntensityMap,pe=ot&&!!S.transmissionMap,H=ot&&!!S.thicknessMap,Ft=!!S.gradientMap,ut=!!S.alphaMap,Lt=S.alphaTest>0,Rt=!!S.alphaHash,xt=!!S.extensions,Jt=ui;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Jt=n.toneMapping);let jt={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:Ht,defines:S.defines,customVertexShaderID:It,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:pt,batchingColor:pt&&j._colorsTexture!==null,instancing:wt,instancingColor:wt&&j.instanceColor!==null,instancingMorph:wt&&j.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:se,envMap:Dt,envMapMode:Dt&&st.mapping,envMapCubeUVHeight:$,aoMap:Xt,lightMap:ht,bumpMap:Zt,normalMap:Qt,displacementMap:_e,emissiveMap:fe,normalMapObjectSpace:Qt&&S.normalMapType===bm,normalMapTangentSpace:Qt&&S.normalMapType===Pu,packedNormalMap:Qt&&S.normalMapType===Pu&&eS(S.normalMap.format),metalnessMap:ye,roughnessMap:we,anisotropy:V,anisotropyMap:ft,clearcoat:He,clearcoatMap:At,clearcoatNormalMap:Pt,clearcoatRoughnessMap:dt,dispersion:be,retroreflection:N,iridescence:b,iridescenceMap:gt,iridescenceThicknessMap:Ut,sheen:Y,sheenColorMap:qt,sheenRoughnessMap:Ct,specularMap:Nt,specularColorMap:ne,specularIntensityMap:oe,transmission:ot,transmissionMap:pe,thicknessMap:H,gradientMap:Ft,opaque:S.transparent===!1&&S.blending===Er&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:Lt,alphaHash:Rt,combine:S.combine,mapUv:zt&&_(S.map.channel),aoMapUv:Xt&&_(S.aoMap.channel),lightMapUv:ht&&_(S.lightMap.channel),bumpMapUv:Zt&&_(S.bumpMap.channel),normalMapUv:Qt&&_(S.normalMap.channel),displacementMapUv:_e&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:ye&&_(S.metalnessMap.channel),roughnessMapUv:we&&_(S.roughnessMap.channel),anisotropyMapUv:ft&&_(S.anisotropyMap.channel),clearcoatMapUv:At&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(S.sheenRoughnessMap.channel),specularMapUv:Nt&&_(S.specularMap.channel),specularColorMapUv:ne&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:pe&&_(S.transmissionMap.channel),thicknessMapUv:H&&_(S.thicknessMap.channel),alphaMapUv:ut&&_(S.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Qt||V),vertexNormals:!!tt.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!tt.attributes.uv&&(zt||ut),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||tt.attributes.normal===void 0&&Qt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:lt,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Tt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&Ee.getTransfer(S.map.colorSpace)===ke,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(S.emissiveMap.colorSpace)===ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kn,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=u.has(1),jt.vertexUv2s=u.has(2),jt.vertexUv3s=u.has(3),u.clear(),jt}function y(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)R.push(U),R.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(x(R,S),A(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numSunLights),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numSunLightShadows),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function A(S,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function F(S){let R=m[S.type],U;if(R){let O=Di[R];U=Um.clone(O.uniforms)}else U=S.uniforms;return U}function T(S,R){let U=p.get(R);return U!==void 0?++U.usedTimes:(U=new QM(n,R,S,s),c.push(U),p.set(R,U)),U}function I(S){if(--S.usedTimes===0){let R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),p.delete(S.cacheKey),S.destroy()}}function D(S){a.remove(S)}function L(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:F,acquireProgram:T,releaseProgram:I,releaseShaderCache:D,programs:c,dispose:L}}function iS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,u){n.get(o)[a]=u}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function sS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function e0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function n0(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,_,g,y,x){let A=n[t];return A===void 0?(A={id:d.id,object:d,geometry:m,material:_,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:y,group:x},n[t]=A):(A.id=d.id,A.object=d,A.geometry=m,A.material=_,A.materialVariant=o(d),A.groupOrder=g,A.renderOrder=d.renderOrder,A.z=y,A.group=x),t++,A}function u(d,m,_,g,y,x,A){A.reversedDepth===!0&&(y=-y);let F=a(d,m,_,g,y,x);_.transmission>0?i.push(F):_.transparent===!0?s.push(F):e.push(F)}function c(d,m,_,g,y,x){let A=a(d,m,_,g,y,x);_.transmission>0?i.unshift(A):_.transparent===!0?s.unshift(A):e.unshift(A)}function p(d,m){e.length>1&&e.sort(d||sS),i.length>1&&i.sort(m||e0),s.length>1&&s.sort(m||e0)}function f(){for(let d=t,m=n.length;d<m;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:u,unshift:c,finish:f,sort:p}}function rS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new n0,n.set(i,[o])):s>=r.length?(o=new n0,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function oS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Q,color:new ue};break;case"SpotLight":e={position:new Q,direction:new Q,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function aS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var lS=0;function cS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hS(n){let t=new oS,e=aS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);let s=new Q,r=new Ye,o=new Ye;function a(c){let p=0,f=0,d=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let m=0,_=0,g=0,y=0,x=0,A=0,F=0,T=0,I=0,D=0,L=0,S=0,R=0,U=0;c.sort(cS);for(let j=0,Z=c.length;j<Z;j++){let G=c[j],tt=G.color,k=G.intensity,W=G.distance,st=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ss?st=G.shadow.map.texture:st=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)p+=tt.r*k,f+=tt.g*k,d+=tt.b*k;else if(G.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(G.sh.coefficients[$],k);U++}else if(G.isSunLight){let $=t.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let J=G.shadow,rt=e.get(G);rt.shadowIntensity=J.intensity,rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[_]=rt,i.sunShadowMap[_]=st;let St=J.getViewportCount();for(let Tt=0;Tt<St;Tt++)i.sunShadowMatrix[g+Tt]=J.getMatrix(Tt),i.sunShadowCascade[g+Tt]=J._cascadeData[Tt];g+=St,_++}i.sun[m]=$,m++}else if(G.isDirectionalLight){let $=t.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let J=G.shadow,rt=e.get(G);rt.shadowIntensity=J.intensity,rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize=J.mapSize,i.directionalShadow[y]=rt,i.directionalShadowMap[y]=st,i.directionalShadowMatrix[y]=G.shadow.matrix,I++}i.directional[y]=$,y++}else if(G.isSpotLight){let $=t.get(G);$.position.setFromMatrixPosition(G.matrixWorld),$.color.copy(tt).multiplyScalar(k),$.distance=W,$.coneCos=Math.cos(G.angle),$.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),$.decay=G.decay,i.spot[A]=$;let J=G.shadow;if(G.map&&(i.spotLightMap[S]=G.map,S++,J.updateMatrices(G),G.castShadow&&R++),i.spotLightMatrix[A]=J.matrix,G.castShadow){let rt=e.get(G);rt.shadowIntensity=J.intensity,rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize=J.mapSize,i.spotShadow[A]=rt,i.spotShadowMap[A]=st,L++}A++}else if(G.isRectAreaLight){let $=t.get(G);$.color.copy(tt).multiplyScalar(k),$.halfWidth.set(G.width*.5,0,0),$.halfHeight.set(0,G.height*.5,0),i.rectArea[F]=$,F++}else if(G.isPointLight){let $=t.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),$.distance=G.distance,$.decay=G.decay,G.castShadow){let J=G.shadow,rt=e.get(G);rt.shadowIntensity=J.intensity,rt.shadowBias=J.bias,rt.shadowNormalBias=J.normalBias,rt.shadowRadius=J.radius,rt.shadowMapSize=J.mapSize,rt.shadowCameraNear=J.camera.near,rt.shadowCameraFar=J.camera.far,i.pointShadow[x]=rt,i.pointShadowMap[x]=st,i.pointShadowMatrix[x]=G.shadow.matrix,D++}i.point[x]=$,x++}else if(G.isHemisphereLight){let $=t.get(G);$.skyColor.copy(G.color).multiplyScalar(k),$.groundColor.copy(G.groundColor).multiplyScalar(k),i.hemi[T]=$,T++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Bt.LTC_FLOAT_1,i.rectAreaLTC2=Bt.LTC_FLOAT_2):(i.rectAreaLTC1=Bt.LTC_HALF_1,i.rectAreaLTC2=Bt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=d;let O=i.hash;(O.sunLength!==m||O.directionalLength!==y||O.pointLength!==x||O.spotLength!==A||O.rectAreaLength!==F||O.hemiLength!==T||O.numSunShadows!==_||O.numDirectionalShadows!==I||O.numPointShadows!==D||O.numSpotShadows!==L||O.numSpotMaps!==S||O.numLightProbes!==U)&&(i.sun.length=m,i.directional.length=y,i.spot.length=A,i.rectArea.length=F,i.point.length=x,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,O.sunLength=m,O.directionalLength=y,O.pointLength=x,O.spotLength=A,O.rectAreaLength=F,O.hemiLength=T,O.numSunShadows=_,O.numDirectionalShadows=I,O.numPointShadows=D,O.numSpotShadows=L,O.numSpotMaps=S,O.numLightProbes=U,i.version=lS++)}function u(c,p){let f=0,d=0,m=0,_=0,g=0,y=0,x=p.matrixWorldInverse;for(let A=0,F=c.length;A<F;A++){let T=c[A];if(T.isSunLight){let I=i.sun[f];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(x),f++}else if(T.isDirectionalLight){let I=i.directional[d];I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(x),d++}else if(T.isSpotLight){let I=i.spot[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(x),I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(x),_++}else if(T.isRectAreaLight){let I=i.rectArea[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(x),o.identity(),r.copy(T.matrixWorld),r.premultiply(x),o.extractRotation(r),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){let I=i.point[m];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(x),m++}else if(T.isHemisphereLight){let I=i.hemi[y];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(x),y++}}}return{setup:a,setupView:u,state:i}}function i0(n){let t=new hS(n),e=[],i=[],s=[];function r(d){f.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function u(d){s.push(d)}function c(){t.setup(e)}function p(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:u}}function uS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new i0(n),t.set(s,[a])):r>=o.length?(a=new i0(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dS=`uniform sampler2D shadow_pass;
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
}`,pS=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],mS=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],s0=new Ye,Ho=new Q,$u=new Q;function gS(n,t,e){let i=new wo,s=new Se,r=new Se,o=new je,a=new wl,u=new Al,c={},p=e.maxTextureSize,f={[_s]:Pn,[Pn]:_s,[Kn]:Kn},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:fS,fragmentShader:dS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new cn;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Oe(_,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let x=this.type;this.render=function(D,L,S){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Kp&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lo);let R=n.getRenderTarget(),U=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Pi),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let Z=x!==this.type;Z&&L.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(tt=>tt.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,tt=D.length;G<tt;G++){let k=D[G],W=k.shadow;if(W===void 0){ae("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let st=W.getFrameExtents();s.multiply(st),r.copy(W.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/st.y),s.y=r.y*st.y,W.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ar){if(k.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Fn(s.x,s.y,{format:Ss,type:pi,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new ms(s.x,s.y,di),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ti,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn}else k.isPointLight?(W.map=new Rc(s.x),W.map.depthTexture=new Ml(s.x,fi)):(W.map=new Fn(s.x,s.y),W.map.depthTexture=new ms(s.x,s.y,fi)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ti,this.type===Lo?(W.map.depthTexture.compareFunction=$?Ac:wc,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,S);for(let rt=0;rt<J;rt++){let St=W.getCamera(rt);if(k.isPointLight){let Tt=W.camera,te=W.matrix,Ht=k.distance||Tt.far;Ht!==Tt.far&&(Tt.far=Ht,Tt.updateProjectionMatrix()),Ho.setFromMatrixPosition(k.matrixWorld),Tt.position.copy(Ho),$u.copy(Tt.position),$u.add(pS[rt]),Tt.up.copy(mS[rt]),Tt.lookAt($u),Tt.updateMatrixWorld(),te.makeTranslation(-Ho.x,-Ho.y,-Ho.z),s0.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(s0,Tt.coordinateSystem,Tt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(W.map),n.clear());let Tt=W.getViewport(rt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),j.viewport(o)}i=W.getFrustum(rt),T(L,S,St,k,this.type)}W.isPointLightShadow!==!0&&this.type===Ar&&A(W,S),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,n.setRenderTarget(R,U,O)};function A(D,L){let S=t.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null?D.mapPass=new Fn(s.x,s.y,{format:Ss,type:pi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,S,d,g,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value.set(D.map.width,D.map.height),m.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,S,m,g,null)}function F(D,L,S,R){let U=null,O=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)U=O;else if(U=S.isPointLight===!0?u:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let j=U.uuid,Z=L.uuid,G=c[j];G===void 0&&(G={},c[j]=G);let tt=G[Z];tt===void 0&&(tt=U.clone(),G[Z]=tt,L.addEventListener("dispose",I)),U=tt}if(U.visible=L.visible,U.wireframe=L.wireframe,R===Ar?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:f[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let j=n.properties.get(U);j.light=S}return U}function T(D,L,S,R,U){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&U===Ar)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);let Z=t.update(D),G=D.material;if(Array.isArray(G)){let tt=Z.groups;for(let k=0,W=tt.length;k<W;k++){let st=tt[k],$=G[st.materialIndex];if($&&$.visible){let J=F(D,$,R,U);D.onBeforeShadow(n,D,L,S,Z,J,st),n.renderBufferDirect(S,null,Z,J,D,st),D.onAfterShadow(n,D,L,S,Z,J,st)}}}else if(G.visible){let tt=F(D,G,R,U);D.onBeforeShadow(n,D,L,S,Z,tt,null),n.renderBufferDirect(S,null,Z,tt,D,null),D.onAfterShadow(n,D,L,S,Z,tt,null)}}let j=D.children;for(let Z=0,G=j.length;Z<G;Z++)T(j[Z],L,S,R,U)}function I(D){D.target.removeEventListener("dispose",I);for(let S in c){let R=c[S],U=D.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function xS(n,t){function e(){let H=!1,Ft=new je,ut=null,Lt=new je(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!H&&(n.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,xt,Jt,jt,Ue){Ue===!0&&(Rt*=jt,xt*=jt,Jt*=jt),Ft.set(Rt,xt,Jt,jt),Lt.equals(Ft)===!1&&(n.clearColor(Rt,xt,Jt,jt),Lt.copy(Ft))},reset:function(){H=!1,ut=null,Lt.set(-1,0,0,0)}}}function i(){let H=!1,Ft=!1,ut=null,Lt=null,Rt=null;return{setReversed:function(xt){if(Ft!==xt){let Jt=t.get("EXT_clip_control");xt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ft=xt;let jt=Rt;Rt=null,this.setClear(jt)}},getReversed:function(){return Ft},setTest:function(xt){xt?K(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(xt){ut!==xt&&!H&&(n.depthMask(xt),ut=xt)},setFunc:function(xt){if(Ft&&(xt=Lm[xt]),Lt!==xt){switch(xt){case il:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ll:n.depthFunc(n.GREATER);break;case cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){Rt!==xt&&(Rt=xt,Ft&&(xt=1-xt),n.clearDepth(xt))},reset:function(){H=!1,ut=null,Lt=null,Rt=null,Ft=!1}}}function s(){let H=!1,Ft=null,ut=null,Lt=null,Rt=null,xt=null,Jt=null,jt=null,Ue=null;return{setTest:function(De){H||(De?K(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(De){Ft!==De&&!H&&(n.stencilMask(De),Ft=De)},setFunc:function(De,ln,Nn){(ut!==De||Lt!==ln||Rt!==Nn)&&(n.stencilFunc(De,ln,Nn),ut=De,Lt=ln,Rt=Nn)},setOp:function(De,ln,Nn){(xt!==De||Jt!==ln||jt!==Nn)&&(n.stencilOp(De,ln,Nn),xt=De,Jt=ln,jt=Nn)},setLocked:function(De){H=De},setClear:function(De){Ue!==De&&(n.clearStencil(De),Ue=De)},reset:function(){H=!1,Ft=null,ut=null,Lt=null,Rt=null,xt=null,Jt=null,jt=null,Ue=null}}}let r=new e,o=new i,a=new s,u=new WeakMap,c=new WeakMap,p={},f={},d={},m=new WeakMap,_=[],g=null,y=!1,x=null,A=null,F=null,T=null,I=null,D=null,L=null,S=new ue(0,0,0),R=0,U=!1,O=null,j=null,Z=null,G=null,tt=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec($)[1]),W=st>=1):$.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=st>=2);let J=null,rt={},St=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),te=new je().fromArray(St),Ht=new je().fromArray(Tt);function It(H,Ft,ut,Lt){let Rt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(H,xt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<ut;Jt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ft,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Ft+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return xt}let X={};X[n.TEXTURE_2D]=It(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=It(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=It(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=It(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(yr),Zt(!1),Qt(cu),K(n.CULL_FACE),Xt(Pi);function K(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function lt(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function wt(H,Ft){return d[H]!==Ft?(n.bindFramebuffer(H,Ft),d[H]=Ft,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ft),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ft),!0):!1}function pt(H,Ft){let ut=_,Lt=!1;if(H){ut=m.get(Ft),ut===void 0&&(ut=[],m.set(Ft,ut));let Rt=H.textures;if(ut.length!==Rt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Jt=Rt.length;xt<Jt;xt++)ut[xt]=n.COLOR_ATTACHMENT0+xt;ut.length=Rt.length,Lt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(ut)}function zt(H){return g!==H?(n.useProgram(H),g=H,!0):!1}let se={[zs]:n.FUNC_ADD,[tm]:n.FUNC_SUBTRACT,[em]:n.FUNC_REVERSE_SUBTRACT};se[nm]=n.MIN,se[im]=n.MAX;let Dt={[sm]:n.ZERO,[rm]:n.ONE,[om]:n.SRC_COLOR,[du]:n.SRC_ALPHA,[fm]:n.SRC_ALPHA_SATURATE,[hm]:n.DST_COLOR,[lm]:n.DST_ALPHA,[am]:n.ONE_MINUS_SRC_COLOR,[pu]:n.ONE_MINUS_SRC_ALPHA,[um]:n.ONE_MINUS_DST_COLOR,[cm]:n.ONE_MINUS_DST_ALPHA,[dm]:n.CONSTANT_COLOR,[pm]:n.ONE_MINUS_CONSTANT_COLOR,[mm]:n.CONSTANT_ALPHA,[gm]:n.ONE_MINUS_CONSTANT_ALPHA};function Xt(H,Ft,ut,Lt,Rt,xt,Jt,jt,Ue,De){if(H===Pi){y===!0&&(lt(n.BLEND),y=!1);return}if(y===!1&&(K(n.BLEND),y=!0),H!==Qp){if(H!==x||De!==U){if((A!==zs||I!==zs)&&(n.blendEquation(n.FUNC_ADD),A=zs,I=zs),De)switch(H){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",H);break}else switch(H){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uu:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",H);break}F=null,T=null,D=null,L=null,S.set(0,0,0),R=0,x=H,U=De}return}Rt=Rt||Ft,xt=xt||ut,Jt=Jt||Lt,(Ft!==A||Rt!==I)&&(n.blendEquationSeparate(se[Ft],se[Rt]),A=Ft,I=Rt),(ut!==F||Lt!==T||xt!==D||Jt!==L)&&(n.blendFuncSeparate(Dt[ut],Dt[Lt],Dt[xt],Dt[Jt]),F=ut,T=Lt,D=xt,L=Jt),(jt.equals(S)===!1||Ue!==R)&&(n.blendColor(jt.r,jt.g,jt.b,Ue),S.copy(jt),R=Ue),x=H,U=!1}function ht(H,Ft){H.side===Kn?lt(n.CULL_FACE):K(n.CULL_FACE);let ut=H.side===Pn;Ft&&(ut=!ut),Zt(ut),H.blending===Er&&H.transparent===!1?Xt(Pi):Xt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Lt=H.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),fe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(H){O!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),O=H)}function Qt(H){H!==Jp?(K(n.CULL_FACE),H!==j&&(H===cu?n.cullFace(n.BACK):H===jp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),j=H}function _e(H){H!==Z&&(W&&n.lineWidth(H),Z=H)}function fe(H,Ft,ut){H?(K(n.POLYGON_OFFSET_FILL),(G!==Ft||tt!==ut)&&(G=Ft,tt=ut,o.getReversed()&&(Ft=-Ft),n.polygonOffset(Ft,ut))):lt(n.POLYGON_OFFSET_FILL)}function ye(H){H?K(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function we(H){H===void 0&&(H=n.TEXTURE0+k-1),J!==H&&(n.activeTexture(H),J=H)}function V(H,Ft,ut){ut===void 0&&(J===null?ut=n.TEXTURE0+k-1:ut=J);let Lt=rt[ut];Lt===void 0&&(Lt={type:void 0,texture:void 0},rt[ut]=Lt),(Lt.type!==H||Lt.texture!==Ft)&&(J!==ut&&(n.activeTexture(ut),J=ut),n.bindTexture(H,Ft||X[H]),Lt.type=H,Lt.texture=Ft)}function He(){let H=rt[J];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(H){he("WebGLState:",H)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(H){he("WebGLState:",H)}}function b(){try{n.texSubImage2D(...arguments)}catch(H){he("WebGLState:",H)}}function Y(){try{n.texSubImage3D(...arguments)}catch(H){he("WebGLState:",H)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(H){he("WebGLState:",H)}}function ft(){try{n.compressedTexSubImage3D(...arguments)}catch(H){he("WebGLState:",H)}}function At(){try{n.texStorage2D(...arguments)}catch(H){he("WebGLState:",H)}}function Pt(){try{n.texStorage3D(...arguments)}catch(H){he("WebGLState:",H)}}function dt(){try{n.texImage2D(...arguments)}catch(H){he("WebGLState:",H)}}function gt(){try{n.texImage3D(...arguments)}catch(H){he("WebGLState:",H)}}function Ut(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function qt(H,Ft){f[H]!==Ft&&(n.pixelStorei(H,Ft),f[H]=Ft)}function Ct(H){te.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),te.copy(H))}function Nt(H){Ht.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ht.copy(H))}function ne(H,Ft){let ut=c.get(Ft);ut===void 0&&(ut=new WeakMap,c.set(Ft,ut));let Lt=ut.get(H);Lt===void 0&&(Lt=n.getUniformBlockIndex(Ft,H.name),ut.set(H,Lt))}function oe(H,Ft){let Lt=c.get(Ft).get(H);u.get(Ft)!==Lt&&(n.uniformBlockBinding(Ft,Lt,H.__bindingPointIndex),u.set(Ft,Lt))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},f={},J=null,rt={},d={},m=new WeakMap,_=[],g=null,y=!1,x=null,A=null,F=null,T=null,I=null,D=null,L=null,S=new ue(0,0,0),R=0,U=!1,O=null,j=null,Z=null,G=null,tt=null,te.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:lt,bindFramebuffer:wt,drawBuffers:pt,useProgram:zt,setBlending:Xt,setMaterial:ht,setFlipSided:Zt,setCullFace:Qt,setLineWidth:_e,setPolygonOffset:fe,setScissorTest:ye,activeTexture:we,bindTexture:V,unbindTexture:He,compressedTexImage2D:be,compressedTexImage3D:N,texImage2D:dt,texImage3D:gt,pixelStorei:qt,getParameter:Ut,updateUBOMapping:ne,uniformBlockBinding:oe,texStorage2D:At,texStorage3D:Pt,texSubImage2D:b,texSubImage3D:Y,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Ct,viewport:Nt,reset:pe}}function yS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,p=new WeakMap,f=new Set,d,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,b){return _?new OffscreenCanvas(N,b):go("canvas")}function y(N,b,Y){let ot=1,ft=be(N);if((ft.width>Y||ft.height>Y)&&(ot=Y/Math.max(ft.width,ft.height)),ot<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let At=Math.floor(ot*ft.width),Pt=Math.floor(ot*ft.height);d===void 0&&(d=g(At,Pt));let dt=b?g(At,Pt):d;return dt.width=At,dt.height=Pt,dt.getContext("2d").drawImage(N,0,0,At,Pt),ae("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+At+"x"+Pt+")."),dt}else return"data"in N&&ae("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),N;return N}function x(N){return N.generateMipmaps}function A(N){n.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(N,b,Y,ot,ft,At=!1){if(N!==null){if(n[N]!==void 0)return n[N];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pt;ot&&(Pt=t.get("EXT_texture_norm16"),Pt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=b;if(b===n.RED&&(Y===n.FLOAT&&(dt=n.R32F),Y===n.HALF_FLOAT&&(dt=n.R16F),Y===n.UNSIGNED_BYTE&&(dt=n.R8),Y===n.UNSIGNED_SHORT&&Pt&&(dt=Pt.R16_EXT),Y===n.SHORT&&Pt&&(dt=Pt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.R8UI),Y===n.UNSIGNED_SHORT&&(dt=n.R16UI),Y===n.UNSIGNED_INT&&(dt=n.R32UI),Y===n.BYTE&&(dt=n.R8I),Y===n.SHORT&&(dt=n.R16I),Y===n.INT&&(dt=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(dt=n.RG32F),Y===n.HALF_FLOAT&&(dt=n.RG16F),Y===n.UNSIGNED_BYTE&&(dt=n.RG8),Y===n.UNSIGNED_SHORT&&Pt&&(dt=Pt.RG16_EXT),Y===n.SHORT&&Pt&&(dt=Pt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(dt=n.RG16UI),Y===n.UNSIGNED_INT&&(dt=n.RG32UI),Y===n.BYTE&&(dt=n.RG8I),Y===n.SHORT&&(dt=n.RG16I),Y===n.INT&&(dt=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(dt=n.RGB16UI),Y===n.UNSIGNED_INT&&(dt=n.RGB32UI),Y===n.BYTE&&(dt=n.RGB8I),Y===n.SHORT&&(dt=n.RGB16I),Y===n.INT&&(dt=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(dt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(dt=n.RGBA32UI),Y===n.BYTE&&(dt=n.RGBA8I),Y===n.SHORT&&(dt=n.RGBA16I),Y===n.INT&&(dt=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_SHORT&&Pt&&(dt=Pt.RGB16_EXT),Y===n.SHORT&&Pt&&(dt=Pt.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(dt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(dt=n.R11F_G11F_B10F)),b===n.RGBA){let gt=At?po:Ee.getTransfer(ft);Y===n.FLOAT&&(dt=n.RGBA32F),Y===n.HALF_FLOAT&&(dt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(dt=gt===ke?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Pt&&(dt=Pt.RGBA16_EXT),Y===n.SHORT&&Pt&&(dt=Pt.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(dt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(dt=n.RGB5_A1)}return(dt===n.R16F||dt===n.R32F||dt===n.RG16F||dt===n.RG32F||dt===n.RGBA16F||dt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function I(N,b){let Y;return N?b===null||b===fi||b===Cr?Y=n.DEPTH24_STENCIL8:b===di?Y=n.DEPTH32F_STENCIL8:b===Tr&&(Y=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fi||b===Cr?Y=n.DEPTH_COMPONENT24:b===di?Y=n.DEPTH_COMPONENT32F:b===Tr&&(Y=n.DEPTH_COMPONENT16),Y}function D(N,b){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==mn&&N.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function L(N){let b=N.target;b.removeEventListener("dispose",L),R(b),b.isVideoTexture&&p.delete(b),b.isHTMLTexture&&f.delete(b)}function S(N){let b=N.target;b.removeEventListener("dispose",S),O(b)}function R(N){let b=i.get(N);if(b.__webglInit===void 0)return;let Y=N.source,ot=m.get(Y);if(ot){let ft=ot[b.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&U(N),Object.keys(ot).length===0&&m.delete(Y)}i.remove(N)}function U(N){let b=i.get(N);n.deleteTexture(b.__webglTexture);let Y=N.source,ot=m.get(Y);delete ot[b.__cacheKey],o.memory.textures--}function O(N){let b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(b.__webglFramebuffer[ot]))for(let ft=0;ft<b.__webglFramebuffer[ot].length;ft++)n.deleteFramebuffer(b.__webglFramebuffer[ot][ft]);else n.deleteFramebuffer(b.__webglFramebuffer[ot]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ot])}else{if(Array.isArray(b.__webglFramebuffer))for(let ot=0;ot<b.__webglFramebuffer.length;ot++)n.deleteFramebuffer(b.__webglFramebuffer[ot]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ot=0;ot<b.__webglColorRenderbuffer.length;ot++)b.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ot]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Y=N.textures;for(let ot=0,ft=Y.length;ot<ft;ot++){let At=i.get(Y[ot]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(Y[ot])}i.remove(N)}let j=0;function Z(){j=0}function G(){return j}function tt(N){j=N}function k(){let N=j;return N>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,N}function W(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function st(N,b){let Y=i.get(N);if(N.isVideoTexture&&V(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let ot=N.image;if(ot===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(Y,N,b);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function $(N,b){let Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){lt(Y,N,b);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function J(N,b){let Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){lt(Y,N,b);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function rt(N,b){let Y=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){wt(Y,N,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}let St={[hl]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},Tt={[mn]:n.NEAREST,[_m]:n.NEAREST_MIPMAP_NEAREST,[No]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Vl]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},te={[Sm]:n.NEVER,[Cm]:n.ALWAYS,[wm]:n.LESS,[wc]:n.LEQUAL,[Am]:n.EQUAL,[Ac]:n.GEQUAL,[Em]:n.GREATER,[Tm]:n.NOTEQUAL};function Ht(N,b){if(b.type===di&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===Vl||b.magFilter===No||b.magFilter===bs||b.minFilter===an||b.minFilter===Vl||b.minFilter===No||b.minFilter===bs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,St[b.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,St[b.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,St[b.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Tt[b.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mn||b.minFilter!==No&&b.minFilter!==bs||b.type===di&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function It(N,b){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",L));let ot=b.source,ft=m.get(ot);ft===void 0&&(ft={},m.set(ot,ft));let At=W(b);if(At!==N.__cacheKey){ft[At]===void 0&&(ft[At]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ft[At].usedTimes++;let Pt=ft[N.__cacheKey];Pt!==void 0&&(ft[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(b)),N.__cacheKey=At,N.__webglTexture=ft[At].texture}return Y}function X(N,b,Y){return Math.floor(Math.floor(N/Y)/b)}function K(N,b,Y,ot){let At=N.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,ot,b.data);else{At.sort((qt,Ct)=>qt.start-Ct.start);let Pt=0;for(let qt=1;qt<At.length;qt++){let Ct=At[Pt],Nt=At[qt],ne=Ct.start+Ct.count,oe=X(Nt.start,b.width,4),pe=X(Ct.start,b.width,4);Nt.start<=ne+1&&oe===pe&&X(Nt.start+Nt.count-1,b.width,4)===oe?Ct.count=Math.max(Ct.count,Nt.start+Nt.count-Ct.start):(++Pt,At[Pt]=Nt)}At.length=Pt+1;let dt=e.getParameter(n.UNPACK_ROW_LENGTH),gt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let qt=0,Ct=At.length;qt<Ct;qt++){let Nt=At[qt],ne=Math.floor(Nt.start/4),oe=Math.ceil(Nt.count/4),pe=ne%b.width,H=Math.floor(ne/b.width),Ft=oe,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,pe,H,Ft,ut,Y,ot,b.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,dt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut)}}function lt(N,b,Y){let ot=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=n.TEXTURE_3D);let ft=It(N,b),At=b.source;e.bindTexture(ot,N.__webglTexture,n.TEXTURE0+Y);let Pt=i.get(At);if(At.version!==Pt.__version||ft===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ut=Ee.getPrimaries(Ee.workingColorSpace),Lt=b.colorSpace===$i?null:Ee.getPrimaries(b.colorSpace),Rt=b.colorSpace===$i||ut===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let gt=y(b.image,!1,s.maxTextureSize);gt=He(b,gt);let Ut=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),Ct=T(b.internalFormat,Ut,qt,b.normalized,b.colorSpace,b.isVideoTexture);Ht(ot,b);let Nt,ne=b.mipmaps,oe=b.isVideoTexture!==!0,pe=Pt.__version===void 0||ft===!0,H=At.dataReady,Ft=D(b,gt);if(b.isDepthTexture)Ct=I(b.format===Ms,b.type),pe&&(oe?e.texStorage2D(n.TEXTURE_2D,1,Ct,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,Ct,gt.width,gt.height,0,Ut,qt,null));else if(b.isDataTexture)if(ne.length>0){oe&&pe&&e.texStorage2D(n.TEXTURE_2D,Ft,Ct,ne[0].width,ne[0].height);for(let ut=0,Lt=ne.length;ut<Lt;ut++)Nt=ne[ut],oe?H&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Ut,qt,Nt.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,Nt.width,Nt.height,0,Ut,qt,Nt.data);b.generateMipmaps=!1}else oe?(pe&&e.texStorage2D(n.TEXTURE_2D,Ft,Ct,gt.width,gt.height),H&&K(b,gt,Ut,qt)):e.texImage2D(n.TEXTURE_2D,0,Ct,gt.width,gt.height,0,Ut,qt,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){oe&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Ct,ne[0].width,ne[0].height,gt.depth);for(let ut=0,Lt=ne.length;ut<Lt;ut++)if(Nt=ne[ut],b.format!==Qn)if(Ut!==null)if(oe){if(H)if(b.layerUpdates.size>0){let Rt=Ou(Nt.width,Nt.height,b.format,b.type);for(let xt of b.layerUpdates){let Jt=Nt.data.subarray(xt*Rt/Nt.data.BYTES_PER_ELEMENT,(xt+1)*Rt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,xt,Nt.width,Nt.height,1,Ut,Jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Nt.width,Nt.height,gt.depth,Ut,Nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Nt.width,Nt.height,gt.depth,0,Nt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Nt.width,Nt.height,gt.depth,Ut,qt,Nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,Nt.width,Nt.height,gt.depth,0,Ut,qt,Nt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{oe&&pe&&e.texStorage2D(n.TEXTURE_2D,Ft,Ct,ne[0].width,ne[0].height);for(let ut=0,Lt=ne.length;ut<Lt;ut++)Nt=ne[ut],b.format!==Qn?Ut!==null?oe?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Ct,Nt.width,Nt.height,0,Nt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?H&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Ut,qt,Nt.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,Nt.width,Nt.height,0,Ut,qt,Nt.data)}else if(b.isDataArrayTexture)if(oe){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,Ct,gt.width,gt.height,gt.depth),H)if(b.layerUpdates.size>0){let ut=Ou(gt.width,gt.height,b.format,b.type);for(let Lt of b.layerUpdates){let Rt=gt.data.subarray(Lt*ut/gt.data.BYTES_PER_ELEMENT,(Lt+1)*ut/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Lt,gt.width,gt.height,1,Ut,qt,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ut,qt,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,gt.width,gt.height,gt.depth,0,Ut,qt,gt.data);else if(b.isData3DTexture)oe?(pe&&e.texStorage3D(n.TEXTURE_3D,Ft,Ct,gt.width,gt.height,gt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ut,qt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,gt.width,gt.height,gt.depth,0,Ut,qt,gt.data);else if(b.isFramebufferTexture){if(pe)if(oe)e.texStorage2D(n.TEXTURE_2D,Ft,Ct,gt.width,gt.height);else{let ut=gt.width,Lt=gt.height;for(let Rt=0;Rt<Ft;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Ct,ut,Lt,0,Ut,qt,null),ut>>=1,Lt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),gt.parentNode!==ut){ut.appendChild(gt),f.add(b),ut.onpaint=Lt=>{let Rt=Lt.changedElements;for(let xt of f)Rt.includes(xt.image)&&(xt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,gt);else{let Rt=n.RGBA,xt=n.RGBA,Jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,xt,Jt,gt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ne.length>0){if(oe&&pe){let ut=be(ne[0]);e.texStorage2D(n.TEXTURE_2D,Ft,Ct,ut.width,ut.height)}for(let ut=0,Lt=ne.length;ut<Lt;ut++)Nt=ne[ut],oe?H&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Ut,qt,Nt):e.texImage2D(n.TEXTURE_2D,ut,Ct,Ut,qt,Nt);b.generateMipmaps=!1}else if(oe){if(pe){let ut=be(gt);e.texStorage2D(n.TEXTURE_2D,Ft,Ct,ut.width,ut.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,qt,gt)}else e.texImage2D(n.TEXTURE_2D,0,Ct,Ut,qt,gt);x(b)&&A(ot),Pt.__version=At.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function wt(N,b,Y){if(b.image.length!==6)return;let ot=It(N,b),ft=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Y);let At=i.get(ft);if(ft.version!==At.__version||ot===!0){e.activeTexture(n.TEXTURE0+Y);let Pt=Ee.getPrimaries(Ee.workingColorSpace),dt=b.colorSpace===$i?null:Ee.getPrimaries(b.colorSpace),gt=b.colorSpace===$i||Pt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,qt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let xt=0;xt<6;xt++)!Ut&&!qt?Ct[xt]=y(b.image[xt],!0,s.maxCubemapSize):Ct[xt]=qt?b.image[xt].image:b.image[xt],Ct[xt]=He(b,Ct[xt]);let Nt=Ct[0],ne=r.convert(b.format,b.colorSpace),oe=r.convert(b.type),pe=T(b.internalFormat,ne,oe,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Ft=At.__version===void 0||ot===!0,ut=ft.dataReady,Lt=D(b,Nt);Ht(n.TEXTURE_CUBE_MAP,b);let Rt;if(Ut){H&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,pe,Nt.width,Nt.height);for(let xt=0;xt<6;xt++){Rt=Ct[xt].mipmaps;for(let Jt=0;Jt<Rt.length;Jt++){let jt=Rt[Jt];b.format!==Qn?ne!==null?H?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,0,0,jt.width,jt.height,ne,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,pe,jt.width,jt.height,0,jt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,0,0,jt.width,jt.height,ne,oe,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,pe,jt.width,jt.height,0,ne,oe,jt.data)}}}else{if(Rt=b.mipmaps,H&&Ft){Rt.length>0&&Lt++;let xt=be(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,pe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(qt){H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ct[xt].width,Ct[xt].height,ne,oe,Ct[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pe,Ct[xt].width,Ct[xt].height,0,ne,oe,Ct[xt].data);for(let Jt=0;Jt<Rt.length;Jt++){let Ue=Rt[Jt].image[xt].image;H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,0,0,Ue.width,Ue.height,ne,oe,Ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,pe,Ue.width,Ue.height,0,ne,oe,Ue.data)}}else{H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ne,oe,Ct[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pe,ne,oe,Ct[xt]);for(let Jt=0;Jt<Rt.length;Jt++){let jt=Rt[Jt];H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,0,0,ne,oe,jt.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,pe,ne,oe,jt.image[xt])}}}x(b)&&A(n.TEXTURE_CUBE_MAP),At.__version=ft.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function pt(N,b,Y,ot,ft,At){let Pt=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),gt=T(Y.internalFormat,Pt,dt,Y.normalized,Y.colorSpace),Ut=i.get(b),qt=i.get(Y);if(qt.__renderTarget=b,!Ut.__hasExternalTextures){let Ct=Math.max(1,b.width>>At),Nt=Math.max(1,b.height>>At);ft===n.TEXTURE_3D||ft===n.TEXTURE_2D_ARRAY?e.texImage3D(ft,At,gt,Ct,Nt,b.depth,0,Pt,dt,null):e.texImage2D(ft,At,gt,Ct,Nt,0,Pt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),we(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,ft,qt.__webglTexture,0,ye(b)):(ft===n.TEXTURE_2D||ft>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,ft,qt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(N,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,N),b.depthBuffer){let ot=b.depthTexture,ft=ot&&ot.isDepthTexture?ot.type:null,At=I(b.stencilBuffer,ft),Pt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(b),At,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(b),At,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,At,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,N)}else{let ot=b.textures;for(let ft=0;ft<ot.length;ft++){let At=ot[ft],Pt=r.convert(At.format,At.colorSpace),dt=r.convert(At.type),gt=T(At.internalFormat,Pt,dt,At.normalized,At.colorSpace);we(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(b),gt,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(b),gt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,gt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(N,b,Y){let ot=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=i.get(b.depthTexture);if(ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ot){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),ft.__webglTexture===void 0){ft.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,b.depthTexture);let Ut=r.convert(b.depthTexture.format),qt=r.convert(b.depthTexture.type),Ct;b.depthTexture.format===Ti?Ct=n.DEPTH_COMPONENT24:b.depthTexture.format===Ms&&(Ct=n.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Ct,b.width,b.height,0,Ut,qt,null)}}else st(b.depthTexture,0);let At=ft.__webglTexture,Pt=ye(b),dt=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,gt=b.depthTexture.format===Ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ti)we(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,dt,At,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,gt,dt,At,0);else if(b.depthTexture.format===Ms)we(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,gt,dt,At,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,gt,dt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(N){let b=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let ot=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ot){let ft=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ot.removeEventListener("dispose",ft)};ot.addEventListener("dispose",ft),b.__depthDisposeCallback=ft}b.__boundDepthTexture=ot}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let ot=0;ot<6;ot++)se(b.__webglFramebuffer[ot],N,ot);else{let ot=N.texture.mipmaps;ot&&ot.length>0?se(b.__webglFramebuffer[0],N,0):se(b.__webglFramebuffer,N,0)}else if(Y){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]===void 0)b.__webglDepthbuffer[ot]=n.createRenderbuffer(),zt(b.__webglDepthbuffer[ot],N,!1);else{let ft=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,At)}}else{let ot=N.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),zt(b.__webglDepthbuffer,N,!1);else{let ft=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(N,b,Y){let ot=i.get(N);b!==void 0&&pt(ot.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Dt(N)}function ht(N){let b=N.texture,Y=i.get(N),ot=i.get(b);N.addEventListener("dispose",S);let ft=N.textures,At=N.isWebGLCubeRenderTarget===!0,Pt=ft.length>1;if(Pt||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=b.version,o.memory.textures++),At){Y.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[dt]=[];for(let gt=0;gt<b.mipmaps.length;gt++)Y.__webglFramebuffer[dt][gt]=n.createFramebuffer()}else Y.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)Y.__webglFramebuffer[dt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let dt=0,gt=ft.length;dt<gt;dt++){let Ut=i.get(ft[dt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&we(N)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let dt=0;dt<ft.length;dt++){let gt=ft[dt];Y.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[dt]);let Ut=r.convert(gt.format,gt.colorSpace),qt=r.convert(gt.type),Ct=T(gt.internalFormat,Ut,qt,gt.normalized,gt.colorSpace,N.isXRRenderTarget===!0),Nt=ye(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Ct,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)pt(Y.__webglFramebuffer[dt][gt],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else pt(Y.__webglFramebuffer[dt],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(b)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,gt=ft.length;dt<gt;dt++){let Ut=ft[dt],qt=i.get(Ut),Ct=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,qt.__webglTexture),Ht(Ct,Ut),pt(Y.__webglFramebuffer,N,Ut,n.COLOR_ATTACHMENT0+dt,Ct,0),x(Ut)&&A(Ct)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(dt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,ot.__webglTexture),Ht(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)pt(Y.__webglFramebuffer[gt],N,b,n.COLOR_ATTACHMENT0,dt,gt);else pt(Y.__webglFramebuffer,N,b,n.COLOR_ATTACHMENT0,dt,0);x(b)&&A(dt),e.unbindTexture()}N.depthBuffer&&Dt(N)}function Zt(N){let b=N.textures;for(let Y=0,ot=b.length;Y<ot;Y++){let ft=b[Y];if(x(ft)){let At=F(N),Pt=i.get(ft).__webglTexture;e.bindTexture(At,Pt),A(At),e.unbindTexture()}}}let Qt=[],_e=[];function fe(N){if(N.samples>0){if(we(N)===!1){let b=N.textures,Y=N.width,ot=N.height,ft=n.COLOR_BUFFER_BIT,At=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(N),dt=b.length>1;if(dt)for(let Ut=0;Ut<b.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let gt=N.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ut=0;Ut<b.length;Ut++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ft|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ft|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ut]);let qt=i.get(b[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,Y,ot,0,0,Y,ot,ft,n.NEAREST),u===!0&&(Qt.length=0,_e.length=0,Qt.push(n.COLOR_ATTACHMENT0+Ut),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Qt.push(At),_e.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Ut=0;Ut<b.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ut]);let qt=i.get(b[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&u){let b=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ye(N){return Math.min(s.maxSamples,N.samples)}function we(N){let b=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function V(N){let b=o.render.frame;p.get(N)!==b&&(p.set(N,b),N.update())}function He(N,b){let Y=N.colorSpace,ot=N.format,ft=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==fo&&Y!==$i&&(Ee.getTransfer(Y)===ke?(ot!==Qn||ft!==$n)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",Y)),b}function be(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.getTextureUnits=G,this.setTextureUnits=tt,this.setTexture2D=st,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=rt,this.rebindTextures=Xt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _S(n,t){function e(i,s=$i){let r,o=Ee.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wu)return n.BYTE;if(i===Au)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Hl)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Cu)return n.ALPHA;if(i===Ru)return n.RGB;if(i===Qn)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Iu)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===Ss)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===Uo||i===Fo||i===Oo||i===zo)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Zl||i===Jl||i===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Ql||i===tc||i===ec||i===nc||i===ko||i===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Ql)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ec)return r.COMPRESSED_R11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ko)return r.COMPRESSED_RG11_EAC;if(i===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===_c||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yc)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bc||i===Mc||i===Bo||i===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var vS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bS=`
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

}`,nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new To(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new An({vertexShader:vS,fragmentShader:bS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new Co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sf=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",u=1,c=null,p=null,f=null,d=null,m=null,_=null,g=typeof XRWebGLBinding<"u",y=new nf,x={},A=e.getContextAttributes(),F=null,T=null,I=[],D=[],L=new Se,S=null,R=null,U=new Sn;U.viewport=new je;let O=new Sn;O.viewport=new je;let j=[U,O],Z=new Ol,G=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=I[X];return K===void 0&&(K=new br,I[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=I[X];return K===void 0&&(K=new br,I[X]=K),K.getGripSpace()},this.getHand=function(X){let K=I[X];return K===void 0&&(K=new br,I[X]=K),K.getHandSpace()};function k(X){let K=D.indexOf(X.inputSource);if(K===-1)return;let lt=I[K];lt!==void 0&&(lt.update(X.inputSource,X.frame,c||o),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",st);for(let X=0;X<I.length;X++){let K=D[X];K!==null&&(D[X]=null,I[X].disconnect(K))}G=null,tt=null,y.reset();for(let X in x)delete x[X];if(t.setRenderTarget(F),m=null,d=null,f=null,s=null,T=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),R!==null){let X=R.camera;X.fov=R.fov,X.zoom=R.zoom,X.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",st),A.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,wt=null,pt=null;A.depth&&(pt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=A.stencil?Ms:Ti,wt=A.stencil?Cr:fi);let zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Fn(d.textureWidth,d.textureHeight,{format:Qn,type:$n,depthTexture:new ms(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let lt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Fn(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st(X){for(let K=0;K<X.removed.length;K++){let lt=X.removed[K],wt=D.indexOf(lt);wt>=0&&(D[wt]=null,I[wt].disconnect(lt))}for(let K=0;K<X.added.length;K++){let lt=X.added[K],wt=D.indexOf(lt);if(wt===-1){for(let zt=0;zt<I.length;zt++)if(zt>=D.length){D.push(lt),wt=zt;break}else if(D[zt]===null){D[zt]=lt,wt=zt;break}if(wt===-1)break}let pt=I[wt];pt&&pt.connect(lt)}}let $=new Q,J=new Q;function rt(X,K,lt){$.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(lt.matrixWorld);let wt=$.distanceTo(J),pt=K.projectionMatrix.elements,zt=lt.projectionMatrix.elements,se=pt[14]/(pt[10]-1),Dt=pt[14]/(pt[10]+1),Xt=(pt[9]+1)/pt[5],ht=(pt[9]-1)/pt[5],Zt=(pt[8]-1)/pt[0],Qt=(zt[8]+1)/zt[0],_e=se*Zt,fe=se*Qt,ye=wt/(-Zt+Qt),we=ye*-Zt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(we),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let V=se+ye,He=Dt+ye,be=_e-we,N=fe+(wt-we),b=Xt*Dt/He*V,Y=ht*Dt/He*V;X.projectionMatrix.makePerspective(be,N,b,Y,V,He),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function St(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,lt=X.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(lt=y.depthFar)),Z.near=O.near=U.near=K,Z.far=O.far=U.far=lt,(G!==Z.near||tt!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),G=Z.near,tt=Z.far),Z.layers.mask=X.layers.mask|6,U.layers.mask=Z.layers.mask&-5,O.layers.mask=Z.layers.mask&-3;let wt=X.parent,pt=Z.cameras;St(Z,wt);for(let zt=0;zt<pt.length;zt++)St(pt[zt],wt);pt.length===2?rt(Z,U,O):Z.projectionMatrix.copy(U.projectionMatrix),R===null&&X.isPerspectiveCamera&&(R={camera:X,fov:X.fov,zoom:X.zoom}),Tt(X,Z,wt)};function Tt(X,K,lt){lt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(X){u=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(X){return x[X]};let te=null;function Ht(X,K){if(p=K.getViewerPose(c||o),_=K,p!==null){let lt=p.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let wt=!1;lt.length!==Z.cameras.length&&(Z.cameras.length=0,wt=!0);for(let Dt=0;Dt<lt.length;Dt++){let Xt=lt[Dt],ht=null;if(m!==null)ht=m.getViewport(Xt);else{let Qt=f.getViewSubImage(d,Xt);ht=Qt.viewport,Dt===0&&(t.setRenderTargetTextures(T,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(T))}let Zt=j[Dt];Zt===void 0&&(Zt=new Sn,Zt.layers.enable(Dt),Zt.viewport=new je,j[Dt]=Zt),Zt.matrix.fromArray(Xt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Xt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(ht.x,ht.y,ht.width,ht.height),Dt===0&&(Z.matrix.copy(Zt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),wt===!0&&Z.cameras.push(Zt)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=i.getBinding();let Dt=f.getDepthInformation(lt[0]);Dt&&Dt.isValid&&Dt.texture&&y.init(Dt,s.renderState)}if(pt&&pt.includes("camera-access")&&g){t.state.unbindTexture(),f=i.getBinding();for(let Dt=0;Dt<lt.length;Dt++){let Xt=lt[Dt].camera;if(Xt){let ht=x[Xt];ht||(ht=new To,x[Xt]=ht);let Zt=f.getCameraImage(Xt);ht.sourceTexture=Zt}}}}for(let lt=0;lt<I.length;lt++){let wt=D[lt],pt=I[lt];wt!==null&&pt!==void 0&&pt.update(wt,K,c||o)}te&&te(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}let It=new r0;It.setAnimationLoop(Ht),this.setAnimationLoop=function(X){te=X},this.dispose=function(){}}},MS=new Ye,u0=new me;u0.set(-1,0,0,0,1,0,0,0,1);function SS(n,t){function e(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,Nu(n)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,A,F,T){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(y,x):x.isMeshLambertMaterial?(r(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(y,x),f(y,x)):x.isMeshPhongMaterial?(r(y,x),p(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(y,x),d(y,x),x.isMeshPhysicalMaterial&&m(y,x,T)):x.isMeshMatcapMaterial?(r(y,x),_(y,x)):x.isMeshDepthMaterial?r(y,x):x.isMeshDistanceMaterial?(r(y,x),g(y,x)):x.isMeshNormalMaterial?r(y,x):x.isLineBasicMaterial?(o(y,x),x.isLineDashedMaterial&&a(y,x)):x.isPointsMaterial?u(y,x,A,F):x.isSpriteMaterial?c(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,e(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,e(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,e(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Pn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,e(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Pn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,e(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,e(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);let A=t.get(x),F=A.envMap,T=A.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(MS.makeRotationFromEuler(T)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(u0),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,y.aoMapTransform))}function o(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,e(x.map,y.mapTransform))}function a(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function u(y,x,A,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=F*.5,x.map&&(y.map.value=x.map,e(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,e(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,e(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,e(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function f(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function d(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function m(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Pn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,y.specularIntensityMapTransform))}function _(y,x){x.matcap&&(y.matcap.value=x.matcap)}function g(y,x){let A=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wS(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,I){let D=I.program;i.uniformBlockBinding(T,D)}function c(T,I){let D=s[T.id];D===void 0&&(y(T),D=p(T),s[T.id]=D,T.addEventListener("dispose",A));let L=I.program;i.updateUBOMapping(T,L);let S=t.render.frame;r[T.id]!==S&&(d(T),r[T.id]=S)}function p(T){let I=f();T.__bindingPointIndex=I;let D=n.createBuffer(),L=T.__size,S=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,L,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,D),D}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let I=s[T.id],D=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let S=0,R=D.length;S<R;S++){let U=D[S];if(Array.isArray(U))for(let O=0,j=U.length;O<j;O++)m(U[O],S,O,L);else m(U,S,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,I,D,L){if(g(T,I,D,L)===!0){let S=T.__offset,R=T.value;if(Array.isArray(R)){let U=0;for(let O=0;O<R.length;O++){let j=R[O],Z=x(j);_(j,T.__data,U),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,T.__data)}}function _(T,I,D){typeof T=="number"||typeof T=="boolean"?I[0]=T:T.isMatrix3?(I[0]=T.elements[0],I[1]=T.elements[1],I[2]=T.elements[2],I[3]=0,I[4]=T.elements[3],I[5]=T.elements[4],I[6]=T.elements[5],I[7]=0,I[8]=T.elements[6],I[9]=T.elements[7],I[10]=T.elements[8],I[11]=0):ArrayBuffer.isView(T)?I.set(new T.constructor(T.buffer,T.byteOffset,I.length)):T.toArray(I,D)}function g(T,I,D,L){let S=T.value,R=I+"_"+D;if(L[R]===void 0)return typeof S=="number"||typeof S=="boolean"?L[R]=S:ArrayBuffer.isView(S)?L[R]=S.slice():L[R]=S.clone(),!0;{let U=L[R];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return L[R]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(U.equals(S)===!1)return U.copy(S),!0}}return!1}function y(T){let I=T.uniforms,D=0,L=16;for(let R=0,U=I.length;R<U;R++){let O=Array.isArray(I[R])?I[R]:[I[R]];for(let j=0,Z=O.length;j<Z;j++){let G=O[j],tt=Array.isArray(G.value)?G.value:[G.value];for(let k=0,W=tt.length;k<W;k++){let st=tt[k],$=x(st),J=D%L,rt=J%$.boundary,St=J+rt;D+=rt,St!==0&&L-St<$.storage&&(D+=L-St),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=D,D+=$.storage}}}let S=D%L;return S>0&&(D+=L-S),T.__size=D,T.__cache={},this}function x(T){let I={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(I.boundary=4,I.storage=4):T.isVector2?(I.boundary=8,I.storage=8):T.isVector3||T.isColor?(I.boundary=16,I.storage=12):T.isVector4?(I.boundary=16,I.storage=16):T.isMatrix3?(I.boundary=48,I.storage=48):T.isMatrix4?(I.boundary=64,I.storage=64):T.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(I.boundary=16,I.storage=T.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",T),I}function A(T){let I=T.target;I.removeEventListener("dispose",A);let D=o.indexOf(I.__bindingPointIndex);o.splice(D,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function F(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:u,update:c,dispose:F}}var AS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function ES(){return Li===null&&(Li=new yl(AS,16,16,Ss,pi),Li.name="DFG_LUT",Li.minFilter=an,Li.magFilter=an,Li.wrapS=Ei,Li.wrapT=Ei,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var Ic=class{constructor(t={}){let{canvas:e=Rm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=$n}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let g=m,y=new Set([Yl,ql,Xl]),x=new Set([$n,fi,Tr,Cr,Gl,Wl]),A=new Uint32Array(4),F=new Int32Array(4),T=new Q,I=null,D=null,L=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,O=!1,j=null,Z=null,G=null,tt=null;this._outputColorSpace=en;let k=0,W=0,st=null,$=-1,J=null,rt=new je,St=new je,Tt=null,te=new ue(0),Ht=0,It=e.width,X=e.height,K=1,lt=null,wt=null,pt=new je(0,0,It,X),zt=new je(0,0,It,X),se=!1,Dt=new wo,Xt=!1,ht=!1,Zt=new Ye,Qt=new Q,_e=new je,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function we(){return st===null?K:1}let V=i;function He(E,B){return e.getContext(E,B)}let be,N,b,Y,ot,ft,At,Pt,dt,gt,Ut,qt,Ct,Nt,ne,oe,pe,H,Ft,ut,Lt,Rt,xt;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",ln,!1),V===null){let B="webgl2";if(V=He(B,E),V===null)throw He(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(E){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",ln,!1),he("WebGLRenderer: "+E.message),E}function Jt(){be=new Db(V),be.init(),Lt=new _S(V,be),N=new Sb(V,be,t,Lt),b=new xS(V,be),N.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),Z=V.createFramebuffer(),G=V.createFramebuffer(),tt=V.createFramebuffer(),Y=new Fb(V),ot=new iS,ft=new yS(V,be,b,ot,N,Lt,Y),At=new Lb(U),Pt=new zy(V),Rt=new bb(V,Pt),dt=new Nb(V,Pt,Y,Rt),gt=new zb(V,dt,Pt,Rt,Y),H=new Ob(V,N,ft),ne=new wb(ot),Ut=new nS(U,At,be,N,Rt,ne),qt=new SS(U,ot),Ct=new rS,Nt=new uS(be),pe=new vb(U,At,b,gt,_,u),oe=new gS(U,gt,N),xt=new wS(V,Y,N,b),Ft=new Mb(V,be,Y),ut=new Ub(V,be,Y),Y.programs=Ut.programs,U.capabilities=N,U.extensions=be,U.properties=ot,U.renderLists=Ct,U.shadowMap=oe,U.state=b,U.info=Y}g!==$n&&(R=new Bb(g,e.width,e.height,a,s,r));let jt=new sf(U,V);this.xr=jt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(It,X,!1))},this.getSize=function(E){return E.set(It,X)},this.setSize=function(E,B,ct=!0){if(jt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}It=E,X=B,e.width=Math.floor(E*K),e.height=Math.floor(B*K),ct===!0&&(e.style.width=E+"px",e.style.height=B+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(It*K,X*K).floor()},this.setDrawingBufferSize=function(E,B,ct){It=E,X=B,K=ct,e.width=Math.floor(E*ct),e.height=Math.floor(B*ct),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(g===$n){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(rt)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,B,ct,nt){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,B,ct,nt),b.viewport(rt.copy(pt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(zt)},this.setScissor=function(E,B,ct,nt){E.isVector4?zt.set(E.x,E.y,E.z,E.w):zt.set(E,B,ct,nt),b.scissor(St.copy(zt).multiplyScalar(K).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){b.setScissorTest(se=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){wt=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,ct=!0){let nt=0;if(E){let it=!1;if(st!==null){let bt=st.texture.format;it=y.has(bt)}if(it){let bt=st.texture.type,Gt=x.has(bt),kt=pe.getClearColor(),Yt=pe.getClearAlpha(),ee=kt.r,le=kt.g,xe=kt.b;Gt?(A[0]=ee,A[1]=le,A[2]=xe,A[3]=Yt,V.clearBufferuiv(V.COLOR,0,A)):(F[0]=ee,F[1]=le,F[2]=xe,F[3]=Yt,V.clearBufferiv(V.COLOR,0,F))}else nt|=V.COLOR_BUFFER_BIT}B&&(nt|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),j=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",ln,!1),pe.dispose(),Ct.dispose(),Nt.dispose(),ot.dispose(),At.dispose(),gt.dispose(),Rt.dispose(),xt.dispose(),Ut.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",Rs),jt.removeEventListener("sessionend",ni),kn.stop()};function Ue(E){E.preventDefault(),xo("WebGLRenderer: Context Lost."),O=!0}function De(){xo("WebGLRenderer: Context Restored."),O=!1;let E=Y.autoReset,B=oe.enabled,ct=oe.autoUpdate,nt=oe.needsUpdate,it=oe.type;Jt(),Y.autoReset=E,oe.enabled=B,oe.autoUpdate=ct,oe.needsUpdate=nt,oe.type=it}function ln(E){he("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Nn(E){let B=E.target;B.removeEventListener("dispose",Nn),pa(B)}function pa(E){fh(E),ot.remove(E)}function fh(E){let B=ot.get(E).programs;B!==void 0&&(B.forEach(function(ct){Ut.releaseProgram(ct)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,ct,nt,it,bt){B===null&&(B=fe);let Gt=it.isMesh&&it.matrixWorld.determinantAffine()<0,kt=xa(E,B,ct,nt,it);b.setMaterial(nt,Gt);let Yt=ct.index,ee=1;if(nt.wireframe===!0){if(Yt=dt.getWireframeAttribute(ct),Yt===void 0)return;ee=2}let le=ct.drawRange,xe=ct.attributes.position,Wt=le.start*ee,Pe=(le.start+le.count)*ee;bt!==null&&(Wt=Math.max(Wt,bt.start*ee),Pe=Math.min(Pe,(bt.start+bt.count)*ee)),Yt!==null?(Wt=Math.max(Wt,0),Pe=Math.min(Pe,Yt.count)):xe!=null&&(Wt=Math.max(Wt,0),Pe=Math.min(Pe,xe.count));let Je=Pe-Wt;if(Je<0||Je===1/0)return;Rt.setup(it,nt,kt,ct,Yt);let Fe,Be=Ft;if(Yt!==null&&(Fe=Pt.get(Yt),Be=ut,Be.setIndex(Fe)),it.isMesh)nt.wireframe===!0?(b.setLineWidth(nt.wireframeLinewidth*we()),Be.setMode(V.LINES)):Be.setMode(V.TRIANGLES);else if(it.isLine){let fn=nt.linewidth;fn===void 0&&(fn=1),b.setLineWidth(fn*we()),it.isLineSegments?Be.setMode(V.LINES):it.isLineLoop?Be.setMode(V.LINE_LOOP):Be.setMode(V.LINE_STRIP)}else it.isPoints?Be.setMode(V.POINTS):it.isSprite&&Be.setMode(V.TRIANGLES);if(it.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Be.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let fn=it._multiDrawStarts,Vt=it._multiDrawCounts,nn=it._multiDrawCount,Me=Yt?Pt.get(Yt).bytesPerElement:1,Un=ot.get(nt).currentProgram.getUniforms();for(let Bn=0;Bn<nn;Bn++)Un.setValue(V,"_gl_DrawID",Bn),Be.render(fn[Bn]/Me,Vt[Bn])}else if(it.isInstancedMesh)Be.renderInstances(Wt,Je,it.count);else if(ct.isInstancedBufferGeometry){let fn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Vt=Math.min(ct.instanceCount,fn);Be.renderInstances(Wt,Je,Vt)}else Be.render(Wt,Je)};function ma(E,B,ct,nt){j!==null&&E.isNodeMaterial&&j.setObject(nt,E),Xt===!0&&ne.setState(E,ct,!1),E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=Pn,E.needsUpdate=!0,ii(E,B,nt),E.side=_s,E.needsUpdate=!0,ii(E,B,nt),E.side=Kn):ii(E,B,nt)}this.compile=function(E,B,ct=null){ct===null&&(ct=E),j!==null&&j.renderStart(E,B,ct),D=Nt.get(ct),D.init(B),S.push(D),ct.traverseVisible(function(it){it.isLight&&it.layers.test(B.layers)&&(D.pushLight(it),it.castShadow&&D.pushShadow(it))}),E!==ct&&E.traverseVisible(function(it){it.isLight&&it.layers.test(B.layers)&&(D.pushLight(it),it.castShadow&&D.pushShadow(it))}),D.setupLights(),j!==null&&j.updateLights(D.state.lightsArray),ht=this.localClippingEnabled,Xt=ne.init(this.clippingPlanes,ht),Xt===!0&&ne.setGlobalState(this.clippingPlanes,B),j!==null&&oe.render(D.state.shadowsArray,ct,B);let nt=new Set;return E.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let bt=it.material;if(bt)if(Array.isArray(bt))for(let Gt=0;Gt<bt.length;Gt++){let kt=bt[Gt];ma(kt,ct,B,it),nt.add(kt)}else ma(bt,ct,B,it),nt.add(bt)}),D=S.pop(),j!==null&&j.renderEnd(),nt},this.compileAsync=function(E,B,ct=null){let nt=this.compile(E,B,ct);return new Promise(it=>{function bt(){if(nt.forEach(function(Gt){let Yt=ot.get(Gt).currentProgram;(Yt===void 0||Yt.isReady())&&nt.delete(Gt)}),nt.size===0){it(E);return}setTimeout(bt,10)}be.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let zi=null;function Xr(E){zi&&zi(E)}function Rs(){kn.stop()}function ni(){kn.start()}let kn=new r0;kn.setAnimationLoop(Xr),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){zi=E,jt.setAnimationLoop(E),E===null?kn.stop():kn.start()},jt.addEventListener("sessionstart",Rs),jt.addEventListener("sessionend",ni),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;j!==null&&j.renderStart(E,B);let ct=jt.enabled===!0&&jt.isPresenting===!0,nt=R!==null&&(st===null||ct)&&R.begin(U,st);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(B),B=jt.getCamera()),E.isScene===!0&&E.onBeforeRender(U,E,B,st),D=Nt.get(E,S.length),D.init(B),D.state.textureUnits=ft.getTextureUnits(),S.push(D),Zt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Dt.setFromProjectionMatrix(Zt,hi,B.reversedDepth),ht=this.localClippingEnabled,Xt=ne.init(this.clippingPlanes,ht),I=Ct.get(E,L.length),I.init(),L.push(I),jt.enabled===!0&&jt.isPresenting===!0){let Gt=U.xr.getDepthSensingMesh();Gt!==null&&mt(Gt,B,-1/0,U.sortObjects)}mt(E,B,0,U.sortObjects),I.finish(),j!==null&&j.updateLights(D.state.lightsArray),U.sortObjects===!0&&I.sort(lt,wt),ye=jt.enabled===!1||jt.isPresenting===!1||jt.hasDepthSensing()===!1,ye&&pe.addToRenderList(I,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&ne.beginShadows();let it=D.state.shadowsArray;if(oe.render(it,E,B),Xt===!0&&ne.endShadows(),(nt&&R.hasRenderPass())===!1){let Gt=I.opaque,kt=I.transmissive;if(D.setupLights(),B.isArrayCamera){let Yt=B.cameras;if(kt.length>0)for(let ee=0,le=Yt.length;ee<le;ee++){let xe=Yt[ee];ga(Gt,kt,E,xe)}ye&&pe.render(E);for(let ee=0,le=Yt.length;ee<le;ee++){let xe=Yt[ee];vt(I,E,xe,xe.viewport)}}else kt.length>0&&ga(Gt,kt,E,B),ye&&pe.render(E),vt(I,E,B)}st!==null&&W===0&&(ft.updateMultisampleRenderTarget(st),ft.updateRenderTargetMipmap(st)),nt&&R.end(U),E.isScene===!0&&E.onAfterRender(U,E,B),Rt.resetDefaultState(),$=-1,J=null,S.pop(),S.length>0?(D=S[S.length-1],ft.setTextureUnits(D.state.textureUnits),Xt===!0&&ne.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,L.pop(),L.length>0?I=L[L.length-1]:I=null,j!==null&&j.renderEnd()};function mt(E,B,ct,nt){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)ct=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)D.pushLightProbeGrid(E);else if(E.isLight)D.pushLight(E),E.castShadow&&D.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Dt)){nt&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Zt);let Gt=gt.update(E),kt=E.material;kt.visible&&I.push(E,Gt,kt,ct,_e.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Dt))){let Gt=gt.update(E),kt=E.material;if(nt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_e.copy(E.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),_e.copy(Gt.boundingSphere.center)),_e.applyMatrix4(E.matrixWorld).applyMatrix4(Zt)),Array.isArray(kt)){let Yt=Gt.groups;for(let ee=0,le=Yt.length;ee<le;ee++){let xe=Yt[ee],Wt=kt[xe.materialIndex];Wt&&Wt.visible&&I.push(E,Gt,Wt,ct,_e.z,xe,B)}}else kt.visible&&I.push(E,Gt,kt,ct,_e.z,null,B)}}let bt=E.children;for(let Gt=0,kt=bt.length;Gt<kt;Gt++)mt(bt[Gt],B,ct,nt)}function vt(E,B,ct,nt){let{opaque:it,transmissive:bt,transparent:Gt}=E;D.setupLightsView(ct),Xt===!0&&ne.setGlobalState(U.clippingPlanes,ct),nt&&b.viewport(rt.copy(nt)),it.length>0&&de(it,B,ct),bt.length>0&&de(bt,B,ct),Gt.length>0&&de(Gt,B,ct),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ga(E,B,ct,nt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[nt.id]===void 0){let Wt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[nt.id]=new Fn(1,1,{generateMipmaps:!0,type:Wt?pi:$n,minFilter:bs,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let bt=D.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||rt;bt.setSize(Gt.z*U.transmissionResolutionScale,Gt.w*U.transmissionResolutionScale);let kt=U.getRenderTarget(),Yt=U.getActiveCubeFace(),ee=U.getActiveMipmapLevel();U.setRenderTarget(bt),U.getClearColor(te),Ht=U.getClearAlpha(),Ht<1&&U.setClearColor(16777215,.5),U.clear(),ye&&pe.render(ct);let le=U.toneMapping;U.toneMapping=ui;let xe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),D.setupLightsView(nt),Xt===!0&&ne.setGlobalState(U.clippingPlanes,nt),de(E,ct,nt),ft.updateMultisampleRenderTarget(bt),ft.updateRenderTargetMipmap(bt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Pe=0,Je=B.length;Pe<Je;Pe++){let Fe=B[Pe],{object:Be,geometry:fn,material:Vt,group:nn}=Fe;if(Vt.side===Kn&&Be.layers.test(nt.layers)){let Me=Vt.side;Vt.side=Pn,Vt.needsUpdate=!0,ki(Be,ct,nt,fn,Vt,nn),Vt.side=Me,Vt.needsUpdate=!0,Wt=!0}}Wt===!0&&(ft.updateMultisampleRenderTarget(bt),ft.updateRenderTargetMipmap(bt))}U.setRenderTarget(kt,Yt,ee),U.setClearColor(te,Ht),xe!==void 0&&(nt.viewport=xe),U.toneMapping=le}function de(E,B,ct){let nt=B.isScene===!0?B.overrideMaterial:null;for(let it=0,bt=E.length;it<bt;it++){let Gt=E[it],{object:kt,geometry:Yt,group:ee}=Gt,le=Gt.material;le.allowOverride===!0&&nt!==null&&(le=nt),kt.layers.test(ct.layers)&&ki(kt,B,ct,Yt,le,ee)}}function ki(E,B,ct,nt,it,bt){j!==null&&it.isNodeMaterial&&j.setObject(E,it),E.onBeforeRender(U,B,ct,nt,it,bt),E.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),it.onBeforeRender(U,B,ct,nt,E,bt),it.transparent===!0&&it.side===Kn&&it.forceSinglePass===!1?(it.side=Pn,it.needsUpdate=!0,U.renderBufferDirect(ct,B,nt,it,E,bt),it.side=_s,it.needsUpdate=!0,U.renderBufferDirect(ct,B,nt,it,E,bt),it.side=Kn):U.renderBufferDirect(ct,B,nt,it,E,bt),E.onAfterRender(U,B,ct,nt,it,bt)}function ii(E,B,ct){B.isScene!==!0&&(B=fe);let nt=ot.get(E),it=D.state.lights,bt=D.state.shadowsArray,Gt=it.state.version,kt=Ut.getParameters(E,it.state,bt,B,ct,D.state.lightProbeGridArray),Yt=Ut.getProgramCacheKey(kt),ee=nt.programs;nt.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,nt.fog=B.fog;let le=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;nt.envMap=At.get(E.envMap||nt.environment,le),nt.envMapRotation=nt.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ee===void 0&&(E.addEventListener("dispose",Nn),ee=new Map,nt.programs=ee);let xe=ee.get(Yt);if(xe!==void 0){if(nt.currentProgram===xe&&nt.lightsStateVersion===Gt)return Ys(E,kt),xe}else kt.uniforms=Ut.getUniforms(E),j!==null&&E.isNodeMaterial&&j.build(E,ct,kt),E.onBeforeCompile(kt,U),xe=Ut.acquireProgram(kt,Yt),ee.set(Yt,xe),nt.uniforms=kt.uniforms;let Wt=nt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=ne.uniform),Ys(E,kt),nt.needsLights=ya(E),nt.lightsStateVersion=Gt,nt.needsLights&&(Wt.ambientLightColor.value=it.state.ambient,Wt.lightProbe.value=it.state.probe,Wt.sunLights.value=it.state.sun,Wt.sunLightShadows.value=it.state.sunShadow,Wt.directionalLights.value=it.state.directional,Wt.directionalLightShadows.value=it.state.directionalShadow,Wt.spotLights.value=it.state.spot,Wt.spotLightShadows.value=it.state.spotShadow,Wt.rectAreaLights.value=it.state.rectArea,Wt.ltc_1.value=it.state.rectAreaLTC1,Wt.ltc_2.value=it.state.rectAreaLTC2,Wt.pointLights.value=it.state.point,Wt.pointLightShadows.value=it.state.pointShadow,Wt.hemisphereLights.value=it.state.hemi,Wt.sunShadowMatrix.value=it.state.sunShadowMatrix,Wt.sunShadowCascade.value=it.state.sunShadowCascade,Wt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Wt.spotLightMatrix.value=it.state.spotLightMatrix,Wt.spotLightMap.value=it.state.spotLightMap,Wt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=D.state.lightProbeGridArray.length>0,nt.currentProgram=xe,nt.uniformsList=null,xe}function qr(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Pr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ys(E,B){let ct=ot.get(E);ct.outputColorSpace=B.outputColorSpace,ct.batching=B.batching,ct.batchingColor=B.batchingColor,ct.instancing=B.instancing,ct.instancingColor=B.instancingColor,ct.instancingMorph=B.instancingMorph,ct.skinning=B.skinning,ct.morphTargets=B.morphTargets,ct.morphNormals=B.morphNormals,ct.morphColors=B.morphColors,ct.morphTargetsCount=B.morphTargetsCount,ct.numClippingPlanes=B.numClippingPlanes,ct.numIntersection=B.numClipIntersection,ct.vertexAlphas=B.vertexAlphas,ct.vertexTangents=B.vertexTangents,ct.toneMapping=B.toneMapping}function dh(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;T.setFromMatrixPosition(B.matrixWorld);for(let ct=0,nt=E.length;ct<nt;ct++){let it=E[ct];if(it.texture!==null&&it.boundingBox.containsPoint(T))return it}return null}function xa(E,B,ct,nt,it){B.isScene!==!0&&(B=fe),ft.resetTextureUnits();let bt=B.fog,Gt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?B.environment:null,kt=st===null?U.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ee.workingColorSpace,Yt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,ee=At.get(nt.envMap||Gt,Yt),le=nt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,xe=!!ct.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Wt=!!ct.morphAttributes.position,Pe=!!ct.morphAttributes.normal,Je=!!ct.morphAttributes.color,Fe=ui;nt.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Fe=U.toneMapping);let Be=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,fn=Be!==void 0?Be.length:0,Vt=ot.get(nt),nn=D.state.lights;if(Xt===!0&&(ht===!0||E!==J)){let ze=E===J&&nt.id===$;ne.setState(nt,E,ze)}let Me=!1;nt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==nn.state.version||Vt.outputColorSpace!==kt||it.isBatchedMesh&&Vt.batching===!1||!it.isBatchedMesh&&Vt.batching===!0||it.isBatchedMesh&&Vt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Vt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Vt.instancing===!1||!it.isInstancedMesh&&Vt.instancing===!0||it.isSkinnedMesh&&Vt.skinning===!1||!it.isSkinnedMesh&&Vt.skinning===!0||it.isInstancedMesh&&Vt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Vt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Vt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Vt.instancingMorph===!1&&it.morphTexture!==null||Vt.envMap!==ee||nt.fog===!0&&Vt.fog!==bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ne.numPlanes||Vt.numIntersection!==ne.numIntersection)||Vt.vertexAlphas!==le||Vt.vertexTangents!==xe||Vt.morphTargets!==Wt||Vt.morphNormals!==Pe||Vt.morphColors!==Je||Vt.toneMapping!==Fe||Vt.morphTargetsCount!==fn||!!Vt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Vt.__version=nt.version);let Un=Vt.currentProgram;Me===!0&&(Un=ii(nt,B,it),j&&nt.isNodeMaterial&&j.onUpdateProgram(nt,Un,Vt));let Bn=!1,vi=!1,si=!1,Le=Un.getUniforms(),qe=Vt.uniforms;if(b.useProgram(Un.program)&&(Bn=!0,vi=!0,si=!0),nt.id!==$&&($=nt.id,vi=!0),Vt.needsLights){let ze=dh(D.state.lightProbeGridArray,it);Vt.lightProbeGrid!==ze&&(Vt.lightProbeGrid=ze,vi=!0)}if(Bn||J!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Le.setValue(V,"projectionMatrix",E.projectionMatrix),Le.setValue(V,"viewMatrix",E.matrixWorldInverse);let bi=Le.map.cameraPosition;bi!==void 0&&bi.setValue(V,Qt.setFromMatrixPosition(E.matrixWorld)),N.logarithmicDepthBuffer&&Le.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Le.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,vi=!0,si=!0)}if(Vt.needsLights&&(nn.state.sunShadowMap.length>0&&Le.setValue(V,"sunShadowMap",nn.state.sunShadowMap,ft),nn.state.directionalShadowMap.length>0&&Le.setValue(V,"directionalShadowMap",nn.state.directionalShadowMap,ft),nn.state.spotShadowMap.length>0&&Le.setValue(V,"spotShadowMap",nn.state.spotShadowMap,ft),nn.state.pointShadowMap.length>0&&Le.setValue(V,"pointShadowMap",nn.state.pointShadowMap,ft)),it.isSkinnedMesh){Le.setOptional(V,it,"bindMatrix"),Le.setOptional(V,it,"bindMatrixInverse");let ze=it.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Le.setValue(V,"boneTexture",ze.boneTexture,ft))}it.isBatchedMesh&&(Le.setOptional(V,it,"batchingTexture"),Le.setValue(V,"batchingTexture",it._matricesTexture,ft),Le.setOptional(V,it,"batchingIdTexture"),Le.setValue(V,"batchingIdTexture",it._indirectTexture,ft),Le.setOptional(V,it,"batchingColorTexture"),it._colorsTexture!==null&&Le.setValue(V,"batchingColorTexture",it._colorsTexture,ft));let ri=ct.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&H.update(it,ct,Un),(vi||Vt.receiveShadow!==it.receiveShadow)&&(Vt.receiveShadow=it.receiveShadow,Le.setValue(V,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&B.environment!==null&&(qe.envMapIntensity.value=B.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=ES()),vi){if(Le.setValue(V,"toneMappingExposure",U.toneMappingExposure),Vt.needsLights&&ph(qe,si),bt&&nt.fog===!0&&qt.refreshFogUniforms(qe,bt),qt.refreshMaterialUniforms(qe,nt,K,X,D.state.transmissionRenderTarget[E.id]),Vt.needsLights&&Vt.lightProbeGrid){let ze=Vt.lightProbeGrid;qe.probesSH.value=ze.texture,qe.probesMin.value.copy(ze.boundingBox.min),qe.probesMax.value.copy(ze.boundingBox.max),qe.probesResolution.value.copy(ze.resolution)}Pr.upload(V,qr(Vt),qe,ft)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Pr.upload(V,qr(Vt),qe,ft),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Le.setValue(V,"center",it.center),Le.setValue(V,"modelViewMatrix",it.modelViewMatrix),Le.setValue(V,"normalMatrix",it.normalMatrix),Le.setValue(V,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let ze=nt.uniformsGroups;for(let bi=0,ts=ze.length;bi<ts;bi++){let $s=ze[bi];xt.update($s,Un),xt.bind($s,Un)}}return Un}function ph(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function ya(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(E,B,ct){let nt=ot.get(E);nt.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),ot.get(E.texture).__webglTexture=B,ot.get(E.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ct,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let ct=ot.get(E);ct.__webglFramebuffer=B,ct.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,ct=0){st=E,k=B,W=ct;let nt=null,it=!1,bt=!1;if(E){let kt=ot.get(E);if(kt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(V.FRAMEBUFFER,kt.__webglFramebuffer),rt.copy(E.viewport),St.copy(E.scissor),Tt=E.scissorTest,b.viewport(rt),b.scissor(St),b.setScissorTest(Tt),$=-1;return}else if(kt.__webglFramebuffer===void 0)ft.setupRenderTarget(E);else if(kt.__hasExternalTextures)ft.rebindTextures(E,ot.get(E.texture).__webglTexture,ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let le=E.depthTexture;if(kt.__boundDepthTexture!==le){if(le!==null&&ot.has(le)&&(E.width!==le.image.width||E.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(E)}}let Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(bt=!0);let ee=ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ee[B])?nt=ee[B][ct]:nt=ee[B],it=!0):E.samples>0&&ft.useMultisampledRTT(E)===!1?nt=ot.get(E).__webglMultisampledFramebuffer:Array.isArray(ee)?nt=ee[ct]:nt=ee,rt.copy(E.viewport),St.copy(E.scissor),Tt=E.scissorTest}else rt.copy(pt).multiplyScalar(K).floor(),St.copy(zt).multiplyScalar(K).floor(),Tt=se;if(ct!==0&&(nt=Z),b.bindFramebuffer(V.FRAMEBUFFER,nt)&&b.drawBuffers(E,nt),b.viewport(rt),b.scissor(St),b.setScissorTest(Tt),it){let kt=ot.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,kt.__webglTexture,ct)}else if(bt){let kt=B;for(let Yt=0;Yt<E.textures.length;Yt++){let ee=ot.get(E.textures[Yt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Yt,ee.__webglTexture,ct,kt)}}else if(E!==null&&ct!==0){let kt=ot.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,kt.__webglTexture,ct)}$=-1};function vn(E){let B=ot.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=N.textureFormatReadable(E.format),B.__typeReadable=N.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,ct,nt,it,bt,Gt,kt=0){if(!(E&&E.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt){b.bindFramebuffer(V.FRAMEBUFFER,Yt);try{let ee=E.textures[kt],le=ee.format,xe=ee.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt);let Wt=vn(ee);if(Wt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-nt&&ct>=0&&ct<=E.height-it&&V.readPixels(B,ct,nt,it,Lt.convert(le),Lt.convert(xe),bt)}finally{let ee=st!==null?ot.get(st).__webglFramebuffer:null;b.bindFramebuffer(V.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(E,B,ct,nt,it,bt,Gt,kt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt)if(B>=0&&B<=E.width-nt&&ct>=0&&ct<=E.height-it){b.bindFramebuffer(V.FRAMEBUFFER,Yt);let ee=E.textures[kt],le=ee.format,xe=ee.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt);let Wt=vn(ee);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Pe),V.bufferData(V.PIXEL_PACK_BUFFER,bt.byteLength,V.STREAM_READ),V.readPixels(B,ct,nt,it,Lt.convert(le),Lt.convert(xe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Je=st!==null?ot.get(st).__webglFramebuffer:null;b.bindFramebuffer(V.FRAMEBUFFER,Je);let Fe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Pm(V,Fe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Pe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,bt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Pe),V.deleteSync(Fe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,ct=0){let nt=Math.pow(2,-ct),it=Math.floor(E.image.width*nt),bt=Math.floor(E.image.height*nt),Gt=B!==null?B.x:0,kt=B!==null?B.y:0;ft.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Gt,kt,it,bt),b.unbindTexture()},this.copyTextureToTexture=function(E,B,ct=null,nt=null,it=0,bt=0){let Gt,kt,Yt,ee,le,xe,Wt,Pe,Je,Fe=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(ct!==null)Gt=ct.max.x-ct.min.x,kt=ct.max.y-ct.min.y,Yt=ct.isBox3?ct.max.z-ct.min.z:1,ee=ct.min.x,le=ct.min.y,xe=ct.isBox3?ct.min.z:0;else{let qe=Math.pow(2,-it);Gt=Math.floor(Fe.width*qe),kt=Math.floor(Fe.height*qe),E.isDataArrayTexture?Yt=Fe.depth:E.isData3DTexture?Yt=Math.floor(Fe.depth*qe):Yt=1,ee=0,le=0,xe=0}nt!==null?(Wt=nt.x,Pe=nt.y,Je=nt.z):(Wt=0,Pe=0,Je=0);let Be=Lt.convert(B.format),fn=Lt.convert(B.type),Vt;B.isData3DTexture?(ft.setTexture3D(B,0),Vt=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ft.setTexture2DArray(B,0),Vt=V.TEXTURE_2D_ARRAY):(ft.setTexture2D(B,0),Vt=V.TEXTURE_2D),b.activeTexture(V.TEXTURE0),b.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);let nn=b.getParameter(V.UNPACK_ROW_LENGTH),Me=b.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=b.getParameter(V.UNPACK_SKIP_PIXELS),Bn=b.getParameter(V.UNPACK_SKIP_ROWS),vi=b.getParameter(V.UNPACK_SKIP_IMAGES);b.pixelStorei(V.UNPACK_ROW_LENGTH,Fe.width),b.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Fe.height),b.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),b.pixelStorei(V.UNPACK_SKIP_ROWS,le),b.pixelStorei(V.UNPACK_SKIP_IMAGES,xe);let si=E.isDataArrayTexture||E.isData3DTexture,Le=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let qe=ot.get(E),ri=ot.get(B),ze=ot.get(qe.__renderTarget),bi=ot.get(ri.__renderTarget);b.bindFramebuffer(V.READ_FRAMEBUFFER,ze.__webglFramebuffer),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ts=0;ts<Yt;ts++)si&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ot.get(E).__webglTexture,it,xe+ts),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,bt,Je+ts)),V.blitFramebuffer(ee,le,Gt,kt,Wt,Pe,Gt,kt,V.DEPTH_BUFFER_BIT,V.NEAREST);b.bindFramebuffer(V.READ_FRAMEBUFFER,null),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(it!==0||E.isRenderTargetTexture||ot.has(E)){let qe=ot.get(E),ri=ot.get(B);b.bindFramebuffer(V.READ_FRAMEBUFFER,G),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,tt);for(let ze=0;ze<Yt;ze++)si?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.__webglTexture,it,xe+ze):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qe.__webglTexture,it),Le?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ri.__webglTexture,bt,Je+ze):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ri.__webglTexture,bt),it!==0?V.blitFramebuffer(ee,le,Gt,kt,Wt,Pe,Gt,kt,V.COLOR_BUFFER_BIT,V.NEAREST):Le?V.copyTexSubImage3D(Vt,bt,Wt,Pe,Je+ze,ee,le,Gt,kt):V.copyTexSubImage2D(Vt,bt,Wt,Pe,ee,le,Gt,kt);b.bindFramebuffer(V.READ_FRAMEBUFFER,null),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Le?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(Vt,bt,Wt,Pe,Je,Gt,kt,Yt,Be,fn,Fe.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(Vt,bt,Wt,Pe,Je,Gt,kt,Yt,Be,Fe.data):V.texSubImage3D(Vt,bt,Wt,Pe,Je,Gt,kt,Yt,Be,fn,Fe):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,bt,Wt,Pe,Gt,kt,Be,fn,Fe.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,bt,Wt,Pe,Fe.width,Fe.height,Be,Fe.data):V.texSubImage2D(V.TEXTURE_2D,bt,Wt,Pe,Gt,kt,Be,fn,Fe);b.pixelStorei(V.UNPACK_ROW_LENGTH,nn),b.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Me),b.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),b.pixelStorei(V.UNPACK_SKIP_ROWS,Bn),b.pixelStorei(V.UNPACK_SKIP_IMAGES,vi),bt===0&&B.generateMipmaps&&V.generateMipmap(Vt),b.unbindTexture()},this.initRenderTarget=function(E){ot.get(E).__webglFramebuffer===void 0&&ft.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ft.setTextureCube(E,0):E.isData3DTexture?ft.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ft.setTexture2DArray(E,0):ft.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){k=0,W=0,st=null,b.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var TS=["top","side","bottom"],CS={slab_bottom:1,slab_top:1,stairs:1},f0=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function RS(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],f0[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function d0(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let R of t){if(!R||typeof R.id!="string")throw new Error("block without id");if(!Number.isInteger(R.n)||R.n<0||R.n>255)throw new Error("bad n for "+R.id);if(i[R.n])throw new Error("duplicate n "+R.n+" ("+R.id+")");if(s[R.id])throw new Error("duplicate id "+R.id);let U=R.colors||{},O=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},R);if(O.placeable=O.n!==0&&!O.liquid,O.colors={top:U.top||"#888888",side:U.side||U.top||"#888888",bottom:U.bottom||U.top||"#888888"},O.opaque=O.solid&&!O.transparent&&!O.cutout&&!CS[O.shape],O.tile={},O.tileOf&&s[O.tileOf])O.tile=Object.assign({},s[O.tileOf].tile);else if(O.n!==0){let j={};for(let Z of TS){let G=O.colors[Z]+"|"+(O.pattern==="grass"||O.pattern==="log"||O.pattern==="lamp"||O.pattern==="table"||O.pattern==="stele"||O.pattern==="torch"||O.pattern==="bed"||O.pattern==="snow"||O.pattern==="lantern"||O.pattern==="bookshelf"||O.pattern==="hay"||O.pattern==="barrel"||O.pattern==="chest"||O.pattern==="farmland"?Z:"");j[G]===void 0&&(j[G]=r.length,r.push({block:O.id,face:Z,color:O.colors[Z],pattern:O.pattern,accent:O.accent||null,top:O.colors.top})),O.tile[Z]=j[G]}}i[O.n]=O,s[O.id]=O}if(!s.air)throw new Error("registry needs air");for(let R of e){if(s[R.id])throw new Error("duplicate id "+R.id);s[R.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},R)}for(let R in s){let U=s[R].drops;if(U&&U!=="self"&&!s[U])throw new Error(R+" drops unknown "+U)}let o=R=>(typeof R=="number"?i[R]:s[R])||null,a=new Uint8Array(256),u=new Uint8Array(256),c=new Uint8Array(256),p=new Uint8Array(256),f=new Uint8Array(256),d=new Uint8Array(256),m={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},_=new Uint8Array(256),g=new Array(256).fill(null),y=new Uint8Array(256),x=new Uint8Array(256),A=new Uint8Array(256),F=new Uint8Array(256),T=new Uint8Array(256),I=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1),L=new Int16Array(256).fill(-1);i.forEach((R,U)=>{R&&(y[U]=R.solid?1:0,x[U]=R.opaque?1:0,A[U]=R.transparent?1:0,F[U]=R.emissive?1:0,T[U]=R.liquid?1:0,a[U]=R.light!=null?R.light:R.emissive?15:0,u[U]=R.liquid?2:0,c[U]=m[R.shape]||0,p[U]=R.cutout?1:0,f[U]=+R.climbable||0,d[U]=R.plant?1:0,_[U]=R.facing|0,R.solid&&(g[U]=RS(R)),U&&(I[U]=R.tile.top,D[U]=R.tile.side,L[U]=R.tile.bottom))});let S=(n&&n.blueprints||[]).map(R=>Object.assign({kind:"blueprint"},R));return{blocks:i.filter(Boolean),items:e.map(R=>s[R.id]),blueprints:S,tiles:r,get:o,toolOf:R=>{let U=R&&s[R];return U&&U.kind==="item"&&U.tool&&typeof U.tool=="object"?U.tool:null},num:R=>{let U=s[R];if(!U||U.kind!=="block")throw new Error("no block "+R);return U.n},name:R=>{let U=o(R);return U?U.name_zh:String(R)},maxStack:R=>{let U=s[R];return U?U.maxStack:64},dropOf:R=>{let U=i[R];return!U||!U.drops?null:U.drops==="self"?U.id:U.drops},breakTime:R=>{let U=i[R];return!U||U.hardness<0?1/0:.25+U.hardness*.55},flat:{solid:y,opaque:x,trans:A,emit:F,liquid:T,tileTop:I,tileSide:D,tileBottom:L,lightEmit:a,attn:u,shape:c,cutout:p,climb:f,plant:d,facing:_,boxes:g}}}var Zi=n=>Math.floor(n/16);var ge=(n,t,e)=>(t*16+e)*16+n;var Ni=(n,t)=>n+","+t,p0=n=>n.split(",").map(Number);function rf(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Zi(n),s=Zi(e);return{cx:i,cz:s,i:ge(n-i*16,t,e-s*16)}}function m0(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Ln(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var ws=(n,t,e)=>Ln(n,t,0,e);function IS(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var of=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],PS=.5*(Math.sqrt(3)-1),Wo=(3-Math.sqrt(3))/6;function Ui(n){let t=IS(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*PS,a=Math.floor(s+o),u=Math.floor(r+o),c=(a+u)*Wo,p=s-(a-c),f=r-(u-c),d=p>f?1:0,m=1-d,_=p-d+Wo,g=f-m+Wo,y=p-1+2*Wo,x=f-1+2*Wo,A=a&255,F=u&255,T=0,I,D;return I=.5-p*p-f*f,I>0&&(D=of[i[A+i[F]]&7],I*=I,T+=I*I*(D[0]*p+D[1]*f)),I=.5-_*_-g*g,I>0&&(D=of[i[A+d+i[F+m]]&7],I*=I,T+=I*I*(D[0]*_+D[1]*g)),I=.5-y*y-x*x,I>0&&(D=of[i[A+1+i[F+1]]&7],I*=I,T+=I*I*(D[0]*y+D[1]*x)),70*T}}function Ji(n,t,e,i){let s=1,r=1,o=0,a=0;for(let u=0;u<i;u++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function af(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),u=t(e-r),c=t(i-o),p=t(s-a),f=(m,_,g)=>Ln(n,r+m,o+_,a+g),d=(m,_,g)=>m+(_-m)*g;return d(d(d(f(0,0,0),f(1,0,0),u),d(f(0,1,0),f(1,1,0),u),c),d(d(f(0,0,1),f(1,0,1),u),d(f(0,1,1),f(1,1,1),u),c),p)}}var Dr=160,mi=18,lf=[[0,1],[-1,0],[0,-1],[1,0]];function g0(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var LS=(n,t,e)=>e&1?[t,n]:[n,t];function x0(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(u,c){let p=u+","+c;if(i.has(p))return i.get(p);let f=null,d=m=>Ln(n+909,u,m,c);if(d(0)<.45&&e&&e.houses&&e.houses.length){let m=Math.floor((u+.2+d(1)*.6)*Dr),_=Math.floor((c+.2+d(2)*.6)*Dr),g=t.biomeOf(m,_),y=t.height(m,_),x=(g==="plains"||g==="desert")&&Math.hypot(m,_)>110;if(x&&y>s+1)for(let A=0;A<16&&x;A++)for(let F of[7,14]){let T=t.height(m+Math.round(Math.cos(A*.39)*F),_+Math.round(Math.sin(A*.39)*F));(Math.abs(T-y)>3||T<=s)&&(x=!1)}else x=!1;if(x){let A=[],F=[],T=3+Math.floor(d(3)*4),I=(D,L,S,R)=>{let U=r[D];if(!U)return null;let[O,j]=LS(U.size[0],U.size[2],R),Z={tpl:D,rot:R,x0:L-(O>>1),z0:S-(j>>1),y,w:O,d:j,h:U.size[1]};return A.push(Z),Z};I("well",m,_,0),I("lamp_post",m+3,_+3,0),I("lamp_post",m-3,_-3,0);for(let D=0;D<T;D++){let L=D/T*Math.PI*2+d(10+D)*.5,S=9+d(20+D)*3,R=m+Math.round(Math.cos(L)*S),U=_+Math.round(Math.sin(L)*S),O=m-R,j=_-U,Z=0,G=-1/0;lf.forEach((rt,St)=>{let Tt=rt[0]*O+rt[1]*j;Tt>G&&(G=Tt,Z=St)});let tt=e.houses[Math.floor(d(30+D)*e.houses.length)],k=I(tt,R,U,Z);if(!k)continue;let W=r[tt],[st,$]=g0(W.door[0],W.door[1],W.size[0],W.size[2],Z),J={x:k.x0+st+lf[Z][0],z:k.z0+$+lf[Z][1]};F.push({ax:m,az:_,bx:J.x,bz:J.z})}f={id:p,x:m,z:_,y,biome:g,structures:A,paths:F,villagers:2+Math.floor(d(4)*3)}}}return i.set(p,f),f}function a(u,c,p,f){let d=[];for(let m=Math.floor((c-mi)/Dr);m<=Math.floor((f+mi)/Dr);m++)for(let _=Math.floor((u-mi)/Dr);_<=Math.floor((p+mi)/Dr);_++){let g=o(_,m);g&&g.x+mi>=u&&g.x-mi<=p&&g.z+mi>=c&&g.z-mi<=f&&d.push(g)}return d}return{plan:o,around:a,chunk:(u,c)=>a(u*16,c*16,u*16+16-1,c*16+16-1)}}function y0(n,t,e,i,s,r,o){let a=t*16,u=e*16,c=(_,g)=>_>=a&&_<a+16&&g>=u&&g<u+16,p=i.biome==="desert",f=p?s.desert||{}:{},d=_=>{let g=s.palette[_];if(!g)return null;let y=f[g]||g;return r.byId(y)},m=p?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let g=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let y=0;y<=g;y++){let x=Math.round(_.ax+(_.bx-_.ax)*y/g),A=Math.round(_.az+(_.bz-_.az)*y/g);if(!c(x,A))continue;let F=o.height(x,A),T=ge(x-a,F,A-u);n[T]&&n[T]!==r.water&&(n[T]=r.path);for(let I=F+1;I<Math.min(64,F+4);I++){let D=ge(x-a,I,A-u);(n[D]===r.leaves||n[D]===r.log||I===F+1)&&(n[D]=0)}}}for(let _ of i.structures){let g=s.templates[_.tpl];if(!g)continue;let[y,,x]=g.size;for(let A=0;A<x;A++)for(let F=0;F<y;F++){let[T,I]=g0(F,A,y,x,_.rot),D=_.x0+T,L=_.z0+I;if(!c(D,L))continue;let S=D-a,R=L-u;for(let U=_.y-1;U>Math.max(0,_.y-8);U--){let O=ge(S,U,R);if(n[O]&&n[O]!==r.water)break;n[O]=m}for(let U=_.y+g.size[1];U<Math.min(64,_.y+g.size[1]+3);U++)n[ge(S,U,R)]=0;g.layers.forEach((U,O)=>{let j=(U[A]||"")[F];if(!j||j===" ")return;let Z=_.y+O;Z>=64||(n[ge(S,Z,R)]=j==="."?0:d(j)||0)})}}}var As=192;function _0(n,t,e){let i=e&&e.ruins,s=new Map;function r(a,u){let c=a+","+u;if(s.has(c))return s.get(c);let p=null;if(i){let f=_=>ws(n+9001+_*31,a,u),d=a*As+24+Math.floor(f(2)*(As-48)),m=u*As+24+Math.floor(f(3)*(As-48));if(f(1)<i.chance&&Math.hypot(d,m)>140){let _=i.byBiome[t.biomeOf(d,m)],g=Array.isArray(_)?_[Math.floor(f(4)*_.length)]:_,y=g&&i.templates[g];if(y&&!(t.villages&&t.villages.around(d-40,m-40,d+40,m+40).length)){let x=y.layers[0][0].length,A=y.layers[0].length;p={id:c,kind:g,x:d-(x>>1),z:m-(A>>1),y:t.height(d,m)+(y.yoff||0),w:x,d:A,h:y.layers.length}}}}return s.set(c,p),p}function o(a,u,c,p){let f=[];for(let d=Math.floor((u-32)/As);d<=Math.floor((p+32)/As);d++)for(let m=Math.floor((a-32)/As);m<=Math.floor((c+32)/As);m++){let _=r(m,d);_&&_.x<=c&&_.x+_.w>a&&_.z<=p&&_.z+_.d>u&&f.push(_)}return f}return{around:o,chunk:(a,u)=>o(a*16,u*16,a*16+16-1,u*16+16-1),at:(a,u)=>o(Math.floor(a),Math.floor(u),Math.floor(a),Math.floor(u))[0]||null}}function v0(n,t,e,i,s,r){let o=s.ruins.templates[i.kind],a=s.ruins.palette,u=t*16,c=e*16,p=o.foundation?r(o.foundation):0,f=r("water");o.layers.forEach((d,m)=>d.forEach((_,g)=>{for(let y=0;y<_.length;y++){let x=_[y];if(x===" ")continue;let A=i.x+y-u,F=i.z+g-c,T=i.y+m;if(!(A<0||A>=16||F<0||F>=16||T<=0||T>=64)&&(n[ge(A,T,F)]=x==="."?0:r(a[x]),m===0&&p))for(let I=T-1,D=0;I>0&&D<8;I--,D++){let L=n[ge(A,I,F)];if(L&&L!==f)break;n[ge(A,I,F)]=p}}}))}function b0(n,t,e){let i=(Math.imul(n,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791))>>>0||1;return()=>{i=i+1831565813>>>0;let s=i;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function M0(n,t,e,i){let s=n.createInventory(27);for(let r of t||[])if(e()<r.p){let o=r.min+Math.floor(e()*(r.max-r.min+1));if(o>0){let a;do a=Math.floor(e()*27);while(s.slots[a]&&s.slots.some(u=>!u));s.slots[a]||(s.slots[a]={id:r.id,count:Math.min(o,i?i(r.id):64)})}}return s}var On=24;var w0={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730",bamboo:"\u7AF9\u6797"},S0=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],Nr=112;function A0(n,t,e){let i=k=>t.num(k),s=k=>{try{return i(k)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{bamboo:s("bamboo"),tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ui(n),u=Ui(n+101),c=Ui(n+202),p=Ui(n+303),f=Ui(n+404),d=af(n+505),m=af(n+606);function _(k,W){let st=Ji(a,k/190,W/190,3),$=Ji(u,k/55,W/55,4),J=Math.max(0,Ji(c,k/130,W/130,2)-.1),rt=27+st*9+$*6+J*J*75;return Math.max(4,Math.min(54,Math.floor(rt)))}let g=Ui(n+808);function y(k,W){let st=_(k,W),$=Ji(g,k/900,W/900,2),J=Math.min(1,Math.max(0,(Math.hypot(k,W)-240)/80)),rt=Math.min(1,Math.max(0,(-.18-$)/.17)),St=rt*rt*(3-2*rt)*J;return St>0&&(st=Math.round(st*(1-St)+(On-14)*St)),st<On-1?Math.max(3,Math.floor(On-1-(On-1-st)*1.8)):st}function x(k,W){let st=(ws(n+3,k,W)-.5)*.025;return{t:Ji(p,k/420,W/420,2)+st,u:Ji(f,k/380,W/380,2)-st}}function A(k,W,st=y(k,W)){if(st<On-1)return"ocean";let{t:$,u:J}=x(k,W);return $<-.3?"snow":$>.28&&J<.05?"desert":J>.12?$>.25&&J>.3&&Math.hypot(k-F,W-T)>200?"bamboo":"forest":"plains"}let F=0,T=0,I=null;function D(){if(I)return I;let k=(W,st)=>{let $=y(W,st);return $>=On+2&&Math.abs(y(W+1,st)-$)<2&&Math.abs(y(W,st+1)-$)<2};for(let W=0;W<400;W+=2)for(let st=0;st<Math.max(1,W*2);st++){let $=st/Math.max(1,W*2)*Math.PI*2,J=Math.round(Math.cos($)*W),rt=Math.round(Math.sin($)*W);if(k(J,rt)&&k(J+3,rt+2))return I={x:J+.5,y:y(J,rt)+1,z:rt+.5,stele:{x:J+3,y:y(J+3,rt+2)+1,z:rt+2},portal:{x:J-3,y:Math.max(On+1,y(J-3,rt+2))+1,z:rt+2}},I}return I={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},I}function L(k,W){let st=[],$=k*16,J=W*16,rt=Math.floor(($-80)/Nr),St=Math.floor(($+16+80)/Nr),Tt=Math.floor((J-80)/Nr),te=Math.floor((J+16+80)/Nr);for(let Ht=Tt;Ht<=te;Ht++)for(let It=rt;It<=St;It++){let X=zt=>Ln(n+707,It,zt,Ht);if(X(0)>.25)continue;let K=(It+X(1))*Nr,lt=(Ht+X(2))*Nr,wt=X(3)*Math.PI,pt=40+X(4)*30;st.push({ax:K-Math.cos(wt)*pt/2,az:lt-Math.sin(wt)*pt/2,dx:Math.cos(wt)*pt,dz:Math.sin(wt)*pt,len:pt,floor:7+Math.floor(X(5)*6),w:1.6+X(6)*1.2})}return st}function S(k,W){let st=new Uint8Array(16384),$=k*16,J=W*16,rt=18,St=new Int16Array(rt*rt);for(let K=-1;K<=16;K++)for(let lt=-1;lt<=16;lt++)St[(K+1)*rt+lt+1]=y($+lt,J+K);let Tt=D(),te=new Array(256);for(let K=0;K<16;K++)for(let lt=0;lt<16;lt++){let wt=$+lt,pt=J+K,zt=St[(K+1)*rt+lt+1],se=Math.max(Math.abs(St[(K+1)*rt+lt]-zt),Math.abs(St[(K+1)*rt+lt+2]-zt),Math.abs(St[K*rt+lt+1]-zt),Math.abs(St[(K+2)*rt+lt+1]-zt))>=3,Dt=te[K*16+lt]=A(wt,pt,zt),Xt=zt<=On+1,ht,Zt;Dt==="ocean"||Xt||Dt==="desert"?(ht=r.sand,Zt=r.sand):se?(ht=r.stone,Zt=r.stone):Dt==="snow"?(ht=r.snow,Zt=r.dirt):(ht=r.grass,Zt=r.dirt);for(let Qt=0;Qt<=zt;Qt++){let _e;if(Qt===0?_e=r.bedrock:Qt===zt?_e=ht:Qt>=zt-3?_e=Zt:Dt==="desert"&&Qt>=zt-7?_e=r.sandstone:_e=r.stone,_e===r.stone&&se&&Qt>=zt-4){let fe=Ln(n,wt,Qt,pt);fe<.06?_e=r.coal:fe<.09?_e=r.iron:fe<.096&&(_e=r.ruby)}st[ge(lt,Qt,K)]=_e}for(let Qt=zt+1;Qt<=On;Qt++)st[ge(lt,Qt,K)]=Qt===On&&Dt==="snow"?r.ice:r.water}R(st,k,W,St,rt);for(let K=0;K<S0.length;K++){let lt=S0[K],wt=r[lt.ore];for(let pt=0;pt<lt.count;pt++){let zt=ht=>Ln(n+31*K+ht,k*977+pt,ht,W*131+pt);if(zt(9)>lt.chance)continue;let se=Math.floor(zt(1)*16),Dt=lt.y0+Math.floor(zt(2)*(lt.y1-lt.y0)),Xt=Math.floor(zt(3)*16);for(let ht=0;ht<lt.size;ht++){se>=0&&se<16&&Xt>=0&&Xt<16&&Dt>0&&Dt<64&&st[ge(se,Dt,Xt)]===r.stone&&(st[ge(se,Dt,Xt)]=wt);let Zt=Math.floor(zt(10+ht)*6);Zt===0?se++:Zt===1?se--:Zt===2?Dt++:Zt===3?Dt--:Zt===4?Xt++:Xt--}}}let Ht=e?G.chunk(k,W):[];U(st,k,W,St,rt,te,Tt,Ht);for(let K of Ht)y0(st,k,W,K,e,r,Z);if(tt)for(let K of tt.chunk(k,W))v0(st,k,W,K,e,r.byId);let It=Tt.stele;if(Math.floor(It.x/16)===k&&Math.floor(It.z/16)===W){let K=It.x-$,lt=It.z-J;st[ge(K,It.y,lt)]=r.stele,st[ge(K,It.y+1,lt)]=r.stele}let X=Tt.portal;if(r.portal&&X&&Math.floor(X.x/16)===k&&Math.floor(X.z/16)===W){let K=X.x-$,lt=X.z-J;for(let wt=Math.max(1,X.y-3);wt<X.y;wt++)(!st[ge(K,wt,lt)]||st[ge(K,wt,lt)]===r.water)&&(st[ge(K,wt,lt)]=r.stone);st[ge(K,X.y,lt)]=r.portal,st[ge(K,X.y+1,lt)]=r.portal}return st}function R(k,W,st,$,J){let rt=W*16,St=st*16,Tt=4,te=16/Tt+1,Ht=64/Tt+1,It=new Float32Array(te*te*Ht);for(let lt=0;lt<Ht;lt++)for(let wt=0;wt<te;wt++)for(let pt=0;pt<te;pt++){let zt=rt+pt*Tt,se=lt*Tt,Dt=St+wt*Tt,Xt=d(zt/22,se/14,Dt/22)-.5,ht=m(zt/22,se/14,Dt/22)-.5;It[(lt*te+wt)*te+pt]=Xt*Xt+ht*ht}let X=(lt,wt,pt)=>It[(wt*te+pt)*te+lt],K=L(W,st);for(let lt=0;lt<16;lt++)for(let wt=0;wt<16;wt++){let pt=$[(lt+1)*J+wt+1],zt=pt<=On+1,se=zt?pt-5:pt,Dt=wt>>2,Xt=lt>>2,ht=(wt&3)/Tt,Zt=(lt&3)/Tt;for(let fe=3;fe<=se;fe++){let ye=fe>>2,we=(fe&3)/Tt,V=X(Dt,ye,Xt)+(X(Dt+1,ye,Xt)-X(Dt,ye,Xt))*ht,He=X(Dt,ye,Xt+1)+(X(Dt+1,ye,Xt+1)-X(Dt,ye,Xt+1))*ht,be=X(Dt,ye+1,Xt)+(X(Dt+1,ye+1,Xt)-X(Dt,ye+1,Xt))*ht,N=X(Dt,ye+1,Xt+1)+(X(Dt+1,ye+1,Xt+1)-X(Dt,ye+1,Xt+1))*ht;if((V+(He-V)*Zt)*(1-we)+(be+(N-be)*Zt)*we<.008){let Y=ge(wt,fe,lt);k[Y]!==r.bedrock&&k[Y]!==r.water&&(k[Y]=0)}}if(!K.length||zt)continue;let Qt=rt+wt,_e=St+lt;for(let fe of K){let ye=Math.max(0,Math.min(1,((Qt-fe.ax)*fe.dx+(_e-fe.az)*fe.dz)/(fe.len*fe.len))),we=fe.ax+fe.dx*ye,V=fe.az+fe.dz*ye,He=Math.hypot(Qt-we,_e-V),be=fe.w*Math.sin(Math.PI*ye);if(He<be)for(let N=fe.floor+Math.floor(He*2);N<=pt;N++){let b=ge(wt,N,lt);k[b]!==r.water&&(k[b]=0)}}}}function U(k,W,st,$,J,rt,St,Tt){let te=W*16,Ht=st*16;for(let It=0;It<16;It++)for(let X=0;X<16;X++){let K=te+X,lt=Ht+It,wt=$[(It+1)*J+X+1],pt=rt[It*16+X];if(wt+1>=64||Math.hypot(K-St.x,lt-St.z)<48)continue;let zt=k[ge(X,wt,It)],se=ge(X,wt+1,It);if(k[se])continue;let Dt=ws(n+11,K,lt),Xt=ws(n+13,K,lt);zt===r.grass?Dt<.012&&o.length?k[se]=o[Math.floor(Xt*o.length)]:Dt<(pt==="plains"?.1:.05)&&r.tallgrass?k[se]=r.tallgrass:pt==="forest"&&Dt<.08&&r.fern?k[se]=r.fern:pt==="forest"&&Dt<.084&&r.mushR&&(k[se]=Xt<.5?r.mushR:r.mushB):zt===r.sand&&pt==="desert"&&wt>On+1&&Dt<.008&&r.deadbush&&(k[se]=r.deadbush)}for(let It=2;It<14;It++)for(let X=2;X<14;X++){let K=te+X,lt=Ht+It,wt=$[(It+1)*J+X+1],pt=rt[It*16+X],zt=k[ge(X,wt,It)];if(Math.abs(K-St.x)<7&&Math.abs(lt-St.z)<7||Tt.some(ht=>Math.abs(K-ht.x)<mi+2&&Math.abs(lt-ht.z)<mi+2))continue;let se=ws(n+7,K,lt),Dt=ws(n+9,K,lt);if(pt==="desert"&&zt===r.sand&&wt>On+1&&se<.008&&r.cactus){let ht=1+Math.floor(Dt*3);for(let Zt=wt+1;Zt<=wt+ht&&Zt<64;Zt++)k[ge(X,Zt,It)]=r.cactus;continue}if(pt==="snow"&&zt===r.snow&&se<.02){j(k,X,It,wt,5+Math.floor(Dt*3));continue}if(pt==="bamboo"&&zt===r.grass&&r.bamboo&&se<.07){for(let ht=wt+1;ht<=wt+4+Math.floor(Dt*5)&&ht<64;ht++){let Zt=ge(X,ht,It);if(k[Zt]&&k[Zt]!==r.tallgrass)break;k[Zt]=r.bamboo}continue}let Xt=pt==="forest"?.035:pt==="plains"?.003:0;zt===r.grass&&se<Xt&&O(k,X,It,wt,K,lt,4+Math.floor(Dt*2))}}function O(k,W,st,$,J,rt,St){let Tt=$+St;if(!(Tt+2>=64)){for(let te=Tt-2;te<=Tt+1;te++){let Ht=te>=Tt?1:2;for(let It=-Ht;It<=Ht;It++)for(let X=-Ht;X<=Ht;X++){if(Ht===2&&Math.abs(X)===2&&Math.abs(It)===2&&Ln(n,J+X,te,rt+It)<.6)continue;let K=ge(W+X,te,st+It);k[K]===r.air&&(k[K]=r.leaves)}}k[ge(W,$,st)]=r.dirt;for(let te=$+1;te<=Tt;te++)k[ge(W,te,st)]=r.log}}function j(k,W,st,$,J){let rt=$+J;if(!(rt+2>=64)){for(let St=$+2;St<=rt+1;St++){let Tt=rt+1-St,te=Tt>=4?2:Tt>=1?1:0;for(let Ht=-te;Ht<=te;Ht++)for(let It=-te;It<=te;It++){if(te===2&&Math.abs(It)+Math.abs(Ht)>3)continue;let X=ge(W+It,St,st+Ht);k[X]===r.air&&(k[X]=r.sleaves)}}k[ge(W,$,st)]=r.dirt;for(let St=$+1;St<=rt;St++)k[ge(W,St,st)]=r.slog}}{let k=D();F=k.x,T=k.z}let Z={height:y,baseHeight:_,biomeOf:A,climate:x,genChunk:S,findSpawn:D,SEA:On},G=x0(n,Z,e);Z.villages=G;let tt=e&&e.ruins?_0(n,Z,e):null;return Z.ruins=tt,Z}function hf(n,t,e,i,s,r,o){let a=i/2,u=n-a,c=n+a,p=t,f=t+s,d=e-a,m=e+a,_=Math.floor(u),g=Math.floor(c-1e-6),y=Math.floor(p),x=Math.floor(f-1e-6),A=Math.floor(d),F=Math.floor(m-1e-6),T=!1;for(let I=y;I<=x;I++)for(let D=A;D<=F;D++)for(let L=_;L<=g;L++){let S=r(L,I,D);if(!S)continue;let R=S===!0?NS:S;for(let U of R){let O=L+U[0],j=I+U[1],Z=D+U[2],G=L+U[3],tt=I+U[4],k=D+U[5];if(!(G<=u+1e-6||O>=c-1e-6||tt<=p+1e-6||j>=f-1e-6||k<=d+1e-6||Z>=m-1e-6)){if(!o)return!0;T=!0,o.push([O,j,Z,G,tt,k])}}}return T}var NS=[[0,0,0,1,1,1]],Xo=(n,t,e,i,s,r)=>hf(n,t,e,i,s,r,null),E0=(n,t,e=.6,i=1.8)=>!Xo(n.x,n.y,n.z,e,i,t);function Dc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,u=r/2,c=!1,p=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(f/.3)),m=e/d,_=[];for(let g=0;g<d;g++){let y=t.y*m;y&&(_.length=0,hf(n.x,n.y+y,n.z,r,o,i,_)?(y<0?(n.y=Math.max(..._.map(x=>x[4])),c=!0):n.y=Math.min(..._.map(x=>x[1]))-o,t.y=0):n.y+=y);for(let x of["x","z"]){let A=t[x]*m;if(!A)continue;let F={x:n.x,y:n.y,z:n.z};if(F[x]+=A,_.length=0,!hf(F.x,F.y,F.z,r,o,i,_)){n[x]=F[x];continue}if(a&&(c||s.grounded)){let I=Math.max(..._.map(D=>D[4]));if(I-n.y>0&&I-n.y<=1.01&&!Xo(F.x,I,F.z,r,o,i)&&!Xo(n.x,I,n.z,r,o,i)){p+=I-n.y,n.y=I,n[x]=F[x];continue}}let T=x==="x"?0:2;n[x]=A>0?Math.min(..._.map(I=>I[T]))-u-1e-4:Math.max(..._.map(I=>I[T+3]))+u+1e-4,Xo(n.x,n.y,n.z,r,o,i)&&(n[x]=F[x]-A),t[x]=0}}return!c&&t.y<=0&&Xo(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:p}}function US(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],u=null;for(let c of r){let p=[e+c[0],i+c[1],s+c[2]],f=[e+c[3],i+c[4],s+c[5]],d=0,m=1/0,_=-1,g=!0;for(let y=0;y<3&&g;y++){if(Math.abs(a[y])<1e-12){(o[y]<p[y]||o[y]>f[y])&&(g=!1);continue}let x=(p[y]-o[y])/a[y],A=(f[y]-o[y])/a[y];x>A&&([x,A]=[A,x]),x>d&&(d=x,_=y),A<m&&(m=A),d>m&&(g=!1)}if(g&&(!u||d<u.t)){let y=[0,0,0];_>=0&&(y[_]=-Math.sign(a[_])),u={t:d,face:_>=0?y:null}}}return u}function Ur(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),u=Math.floor(n.z),c=Math.sign(t.x),p=Math.sign(t.y),f=Math.sign(t.z),d=c?Math.abs(1/t.x):1/0,m=p?Math.abs(1/t.y):1/0,_=f?Math.abs(1/t.z):1/0,g=c?(c>0?o+1-n.x:n.x-o)*d:1/0,y=p?(p>0?a+1-n.y:n.y-a)*m:1/0,x=f?(f>0?u+1-n.z:n.z-u)*_:1/0,A=[0,0,0],F=0;for(;F<=e;){let T=i(o,a,u);if(T&&s(T)){let I=r&&r(T);if(!I)return{x:o,y:a,z:u,n:T,face:A,dist:F};let D=US(n,t,o,a,u,I);if(D&&D.t<=e)return{x:o,y:a,z:u,n:T,face:D.face||A,dist:D.t}}g<y&&g<x?(o+=c,F=g,g+=d,A=[-c,0,0]):y<x?(a+=p,F=y,y+=m,A=[0,-p,0]):(u+=f,F=x,x+=_,A=[0,0,-f])}return null}var gf={};Gn(gf,{ACC:()=>R0,BOOST:()=>uf,BRAKE:()=>P0,CONN:()=>gi,DECAY:()=>L0,DIR:()=>Yo,FRIC:()=>I0,MAX:()=>qo,OPP:()=>Or,SLOPE_G:()=>ff,UP:()=>Fi,blockId:()=>$o,connect:()=>Uc,isStraight:()=>df,linked:()=>D0,mount:()=>pf,next:()=>Zo,pos:()=>Fc,shapeOf:()=>Fr,step:()=>mf});var gi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Fi={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Yo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Or={n:"s",s:"n",e:"w",w:"e"},FS=["ns","ew","ne","nw","se","sw"],T0={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},R0=3,qo=6,uf=11,I0=.8,P0=6,L0=1.5,ff=2.5,df=n=>n==="ns"||n==="ew"||!!Fi[n],$o=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),Nc=(n,t)=>gi[n].find(e=>e!==t);function Fr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":FS.find(e=>gi[e].includes(n)&&gi[e].includes(t))||null}function Zo(n,t,e,i,s,r){let[o,a]=Yo[s];for(let u of Fi[r]===s?[1]:[0,-1]){let c=n(t+o,e+u,i+a);if(c&&gi[c.shape].includes(Or[s])&&Fi[c.shape]===Or[s]==(u===-1))return{x:t+o,y:e+u,z:i+a,r:c}}return null}function D0(n,t,e,i){let s=n(t,e,i);return s?gi[s.shape].filter(r=>Zo(n,t,e,i,r,s.shape)):[]}function C0(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===Or[e]?"asc_"+e:null}return n.length===2?Fr(n[0].d,n[1].d):Fr(n[0].d)}function Uc(n,t,e,i,s,r="n"){let o=[];for(let c of["n","e","s","w"]){let[p,f]=Yo[c],d=Or[c];for(let m of[0,1,-1]){let _=t+p,g=e+m,y=i+f,x=n(_,g,y);if(!x)continue;if(gi[x.shape].includes(d)&&Fi[x.shape]===d==(m===-1)){o.push({d:c,dy:m,pri:0});break}let A=D0(n,_,g,y);if(A.length>=2)continue;let F=null;if(m===-1?F=!A.length||A[0]===c?"asc_"+d:null:Fi[x.shape]&&A.includes(Fi[x.shape])||(F=A.length?Fr(A[0],d):Fr(d)),F&&(!x.powered||df(F))){o.push({d:c,dy:m,pri:1,ns:F,at:[_,g,y]});break}}}o.sort((c,p)=>c.pri-p.pri);let a=[];for(let c of o){if(a.length===2)break;let p=C0(a.concat([c]));!p||s&&!df(p)||a.push(c)}return{shape:a.length?C0(a):Fr(r),updates:a.filter(c=>c.pri===1).map(c=>[c.at[0],c.at[1],c.at[2],c.ns])}}function pf(n,t,e,i,s,r,o=()=>!1){let a=gi[n],u=p=>Yo[p][0]*s+Yo[p][1]*r+(o(p)?.01:0),c=u(a[0])>=u(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:c===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function mf(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,gi[s.shape].includes(n.from)||(n.from=gi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=Nc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,uf)),e>.1?n.v<qo&&(n.v=Math.min(qo,n.v+R0*t)):e<-.1?n.v=Math.max(0,n.v-P0*t):n.v=Math.max(0,n.v-I0*t),n.v>qo&&!s.powered&&(n.v=Math.max(qo,n.v-L0*t)),Fi[s.shape]&&(n.v+=(Nc(s.shape,n.from)===Fi[s.shape]?-ff:ff)*t,n.v<0&&(n.from=Nc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=Nc(s.shape,n.from),o=Zo(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=Or[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,uf));else{n.s=1,n.v=0;break}}return n}function Fc(n){let t=gi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=T0[e],r=T0[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[u,c,p]=a<.5?[s,o,a*2]:[o,r,a*2-1],f=u[0]+(c[0]-u[0])*p,d=u[1]+(c[1]-u[1])*p,m=Fi[n.shape],_=m?m==="n"?1-d:m==="s"?d:m==="e"?f:1-f:0,g=m?i===m?1:-1:0;return{x:n.x+f,y:n.y+_,z:n.z+d,yaw:Math.atan2(-(c[0]-u[0]),-(c[1]-u[1])),pitch:Math.atan2(g,1)*(m?1:0)}}var bf={};Gn(bf,{WINDOW:()=>OS,create:()=>xf,reel:()=>_f,roll:()=>vf,tick:()=>yf});var OS=1.3,N0=n=>3+n()*6;function xf(n=Math.random){return{phase:"wait",t:0,biteAt:N0(n),rnd:n}}function yf(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=N0(n.rnd),"escape"):null}var _f=n=>n&&n.phase==="bite"?"catch":"early";function vf(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function U0(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function F0(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function O0(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var z0=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function k0(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function B0(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[ge(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var V0=n=>btoa(String.fromCharCode.apply(null,n)),H0=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var kS=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Oc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=kS(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,H0(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=B0(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[u,c]=p0(r);for(let[p,f]of[...this.portals])Math.floor(f.x/16)===u&&Math.floor(f.z/16)===c&&this.portals.delete(p);for(let p=0;p<256;p++){let f=this.reg.get(a[p]);if(f&&(f.interact==="portal"||f.interact==="shadow_portal")){let d=u*16+p%16,m=c*16+Math.floor(p/16);this.portals.set(d+","+m,{x:d,z:m,name:f.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],u=o*4,c=.95+(o*2654435761>>>28)/16*.1;r.data[u]=a[0]*c,r.data[u+1]=a[1]*c,r.data[u+2]=a[2]*c,r.data[u+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,u=i-o/2/s,c=e+r/2/s,p=i+o/2/s;for(let f=Math.floor(u/16);f<=Math.floor(p/16);f++)for(let d=Math.floor(a/16);d<=Math.floor(c/16);d++){let m=this.tile(Ni(d,f));m&&t.drawImage(m,Math.round((d*16-a)*s),Math.round((f*16-u)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:u}}explored(t,e){return this.tops.has(Ni(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=V0(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Mf(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Af={};Gn(Af,{ARENA_R:()=>Jo,H0:()=>xi,LAIR:()=>yi,findFrame:()=>wf,makeShadowTerrain:()=>Sf});var xi=22,yi={x:0,z:40},Jo=14;function Sf(n,t){let e=f=>t.num(f),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ui(n+11),r=Ui(n+23),o=(f,d)=>f<d?1:f<d+8?1-(f-d)/8:0;function a(f,d){let m=xi+Ji(s,f/64,d/64,3)*10,_=Math.max(o(Math.hypot(f-.5,d-.5),9),o(Math.hypot(f-yi.x,d-yi.z),Jo+2));return m=m*(1-_)+xi*_,Math.max(6,Math.min(54,Math.round(m)))}let u=new Set;for(let f=0;f<8;f++)u.add(Math.round(yi.x+Math.cos(f*Math.PI/4)*Jo)+","+Math.round(yi.z+Math.sin(f*Math.PI/4)*Jo));function c(f,d){let m=new Uint8Array(16384),_=f*16,g=d*16;for(let y=0;y<16;y++)for(let x=0;x<16;x++){let A=_+x,F=g+y,T=a(A,F),I=Math.hypot(A-.5,F-.5),D=Math.hypot(A-yi.x,F-yi.z);for(let L=0;L<=T;L++){let S=L===0?i.bedrock:L===T?i.moss:i.stone;if(S===i.stone){let R=Ln(n,A,L,F);L<16&&R<.014?S=i.ore:R>.995&&(S=i.vein)}m[ge(x,L,y)]=S}if(I>6&&Math.abs(r(A/30,F/30))<.035&&(m[ge(x,T,y)]=i.vein),D<Jo-1&&(m[ge(x,T,y)]=(Math.floor(A)+Math.floor(F))%2?i.bricks:i.stone),u.has(A+","+F)){for(let L=T+1;L<=T+4;L++)m[ge(x,L,y)]=i.bricks;m[ge(x,T+5,y)]=i.vein}if(F===0&&A>=-1&&A<=2)for(let L=xi+1;L<=xi+5;L++){let S=A>=0&&A<=1&&L>=xi+2&&L<=xi+4;m[ge(x,L,y)]=S?i.portal:i.frame}}return m}let p={x:1,y:xi+1,z:2.5,stele:{x:1,y:xi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:c,findSpawn:()=>p,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function wf(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let u=-4;u<=1;u++){let c=t+o[0]*a,p=i+o[1]*a,f=e+u,d=(g,y)=>[c+o[0]*g,f+y,p+o[1]*g],m=[];for(let g=0;g<2;g++)for(let y=0;y<3;y++)m.push(d(g,y));if(!m.every(g=>r(n(g[0],g[1],g[2]))))continue;let _=[];for(let g=0;g<3;g++)_.push(d(-1,g),d(2,g));for(let g=0;g<2;g++)_.push(d(g,-1),d(g,3));if(_.every(g=>n(g[0],g[1],g[2])===s)&&_.some(g=>g[0]===t&&g[1]===e&&g[2]===i))return m}return null}var Vc={};Gn(Vc,{HOTBAR:()=>Ef,SIZE:()=>zc,add:()=>_n,canAdd:()=>Ko,count:()=>Zn,craft:()=>Cf,craftable:()=>Bc,createInventory:()=>jo,deserialize:()=>kc,moveBetween:()=>Rf,moveSlot:()=>Tf,remove:()=>Hs,serialize:()=>Qo,takeFromSlot:()=>zn});var zc=36,Ef=9;function jo(n=36){return{slots:new Array(n).fill(null)}}function _n(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function Zn(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Hs(n,t,e){if(Zn(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function zn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Tf(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Ko(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return _n(s,t,e,i)===0}var Qo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function kc(n,t=36){let e=jo(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function Bc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Zn(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Cf(n,t,e=()=>64,i){let s=Bc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Hs(n,o,t.in[o]);return _n(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Rf(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function BS(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var zr=(n,t)=>n.owned.includes(t),G0=(n,t)=>n?t?2:1:0;function Dn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Gs(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function W0(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function X0(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&zr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Gs(n,e.price),n.owned.push(e.id),{ok:!0}):Ko(t,e.id,e.qty,i)?(Gs(n,e.price),_n(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var q0=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Y0(n){let t=BS(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Z0(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function J0(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Dn(n,s),canSpend:s=>n.coins>=s,spend:async s=>Gs(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function j0(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var Uf={};Gn(Uf,{createStory:()=>If,currentMain:()=>Lf,dailyPicks:()=>K0,dailyProgress:()=>Nf,restartTutorial:()=>Pf,skipTutorial:()=>Hc,tick:()=>Df});function If(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function K0(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var Pf=n=>{n.tut={step:0,base:null,done:!1}},Hc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},Lf=(n,t)=>t.main[n.main]||null;function Df(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=K0(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(u=>u.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Nf=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var ea=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],ta=100,Q0={choice:25,typed:40},GS=5,Ff=100;function tg(){return{phase:0,hp:ta,retry:[],done:!1}}function eg(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(ta,n.hp+GS),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?Q0.typed:Q0.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<ea.length-1?(n.phase++,n.hp=ta,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var Of=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function XS(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new qn(n);return e.colorSpace=en,e}function ng(){let n=new xn,t=[],e=(a,u)=>{let c=new wn({color:a});return c.userData.base=new ue(a),c.userData.role=u,t.push(c),c},i=(a,u,c,p,f,d,m,_,g=n)=>{let y=new Oe(new $e(a,u,c),e(p,f));return y.position.set(d,m,_),g.add(y),y},s=Of[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Oe(new $e(1.15,.72,.02),new wn({map:XS(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let u=new xn;return u.position.set(a*1,1.9,.2),n.add(u),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,u).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,u),u});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function ig(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function sg(n,t){let e=Of[Math.min(Of.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function qS(){return new Map}function rg(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function zf(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function YS(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function og(n){let t=qS();for(let e in n||{})t.set(e,YS(n[e]));return t}var Gc=16;var zT=18;var Ki=32;function ag(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Qe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function $S(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Kt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function ji(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let u=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(u)*s*(.6+t()*.5),i+Math.sin(u)*s*(.6+t()*.5)])}Kt(n,o)}var ZS=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail","scaffold"]);function JS(n,t){let e=Qe(t.color),i=ag($S(t.block+t.face)),s=Ki;if(ZS.has(t.pattern)){jS(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=Mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Qe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=Mt(e,1.12);for(let f=0;f<4;f++)ji(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=Mt(e,.96);for(let f=0;f<4;f++)ji(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let f=Qe(t.top);n.fillStyle=Mt(f);let d=[[0,0],[s,0]];for(let m=s;m>=0;m-=4)d.push([m,8+Math.round(i()*5)]);Kt(n,d)}if(o==="stone"||o==="bedrock")for(let f=0;f<5;f++)n.fillStyle=Mt(e,i()<.5?.9:1.08),ji(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let f=0;f<4;f++)n.fillStyle=Mt(e,.92),ji(n,i,i()*s,i()*s,5);n.fillStyle=Mt(a);for(let f=0;f<5;f++)ji(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let f=0;f<26;f++)n.fillStyle=Mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let f=3;f<s;f+=7)n.fillStyle=Mt(e,.82),n.fillRect(f,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=Mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let f=0;f<9;f++)n.fillStyle=Mt(e,i()<.5?.78:1.15),ji(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.78),n.fillRect(0,f,s,1);n.fillStyle=Mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=Mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=Mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=Mt([185,182,174]),Kt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=Mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=Mt(e,1.18,.72);for(let f=6;f<s;f+=10)n.fillRect(4+Math.floor(i()*10),f,10,2)}if(o==="gold"&&(n.fillStyle=Mt(e,1.15),Kt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=Mt(e,.9),Kt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=Mt(Qe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=Mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=Mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=Mt(Qe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=Mt(Qe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=Mt(a),n.fillRect(14,0,4,4)):(n.fillStyle=Mt(Qe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,10),n.fillStyle=Mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=Mt(Qe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=Mt(a),n.fillRect(0,0,9,14))),o==="wool")for(let f=0;f<7;f++)n.fillStyle=Mt(e,i()<.5?.94:1.04),ji(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=Mt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(a,1.3),Kt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=Mt(Qe("#EFEBDD"),1,.8),Kt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=Mt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let f=8;f<s;f+=9)n.fillStyle=Mt(e,.9),n.fillRect(0,f,s,2);if(o==="cactus")if(t.face==="side"){for(let f=4;f<s;f+=8)n.fillStyle=Mt(e,.82),n.fillRect(f,0,2,s);n.fillStyle=Mt(Qe("#EFEBDD"),1,.7);for(let f=0;f<6;f++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=Mt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=Mt(e,1.25);for(let f of[9,24])n.fillRect(0,f,s,3)}else n.fillStyle=Mt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Kt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=Mt(e,1.1),Kt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=Mt(e,.92),Kt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=Mt(e,.78);for(let f=0;f<s;f+=8){n.fillRect(0,f+7,s,1);let d=f/8%2?0:8;for(let m=d;m<s;m+=16)n.fillRect(m,f,1,8)}}if(o==="mossy"){n.fillStyle=Mt(a);for(let f=0;f<6;f++)ji(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=Mt(e,.6),Kt(n,[[4,2],[12,14],[10,15],[3,4]]),Kt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=Mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=Mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=Mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=Mt(e,1.08),Kt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=Mt(Qe("#D9CBB5"));for(let f=0;f<s;f+=8){n.fillRect(0,f+6,s,2);let d=f/8%2?0:8;for(let m=d;m<s;m+=16)n.fillRect(m,f,2,6)}}if(o==="checker"&&(n.fillStyle=Mt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let f=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let m=3;for(;m<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=f[Math.floor(i()*f.length)],n.fillRect(m,d+Math.floor(i()*3),_,11),m+=_+1}}n.fillStyle=Mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.8),n.fillRect(0,f,s,1);if(o==="hay")if(t.face==="side"){for(let f=3;f<s;f+=5)n.fillStyle=Mt(e,.88),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=Mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let f=5;f<s;f+=6)n.fillStyle=Mt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=Mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=Mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=Mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Kt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=Mt(Qe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=Mt(e),n.fillRect(0,0,s,s),n.fillStyle=Mt(Qe("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.85),n.fillRect(0,f,s,1);t.face==="side"&&(n.fillStyle=Mt(a),n.fillRect(0,11,s,3),n.fillStyle=Mt(Qe("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let f=3;f<s;f+=6)n.fillStyle=Mt(e,.72),n.fillRect(0,f,s,2);if(o==="furnace"){for(let f=0;f<4;f++)n.fillStyle=Mt(e,i()<.5?.9:1.08),ji(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(8,15,s-16,11),n.fillStyle=Mt(Qe("#E0352B"),1,.85),Kt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=Mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=Mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=Mt(a),Kt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let u=n.getImageData(0,0,s,s),c=u.data;for(let f=0;f<c.length;f+=4){let d=1+(i()-.5)*.09;c[f]=Math.min(255,c[f]*d),c[f+1]=Math.min(255,c[f+1]*d),c[f+2]=Math.min(255,c[f+2]*d)}n.putImageData(u,0,0);let p=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=p,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function lg(n){let t=document.createElement("canvas");t.width=t.height=Ki*Gc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Ki;let a=o.getContext("2d",{willReadFrequently:!0});JS(a,s),e.drawImage(o,r%Gc*Ki,Math.floor(r/Gc)*Ki),i[r]=o}),{canvas:t,tileCanvas:i}}function cg(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="pole"){r.drawImage(t.tileCanvas[i.tile.side],14,2,20,44),e[i.id]=s.toDataURL();continue}if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",Kt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",Kt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Ki,u=(c,p,f,d,m,_,g,y)=>{r.setTransform(p*a,f*a,d*a,m*a,_,g),r.drawImage(o[c],0,0),y&&(r.fillStyle=`rgba(20,24,20,${y})`,r.fillRect(0,0,Ki,Ki))};u(i.tile.top,20,10,-20,10,24,4,0),u(i.tile.side,20,10,0,22,4,14,.12),u(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,u="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,Kt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",Kt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,Kt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",Kt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,Kt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",Kt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,Kt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,p]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,p,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)Kt(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),Kt(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,Kt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,Kt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,Kt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,Kt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),Kt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",Kt(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),Kt(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",Kt(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,Kt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",Kt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=u,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,Kt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",Kt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else if(o==="saddle")r.fillStyle=a,Kt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3);else if(o==="paper"){r.fillStyle=a,Kt(r,[[-13,-16],[11,-17],[14,15],[-12,16]]),r.fillStyle="rgba(20,24,20,.16)";for(let c=0;c<4;c++)r.fillRect(-8,-9+c*6,16,2)}else o==="book"?(r.fillStyle=a,Kt(r,[[-15,-15],[13,-17],[15,15],[-13,17]]),r.fillStyle="#EFEBDD",Kt(r,[[10,-14],[14,-14],[15,13],[11,14]]),r.fillStyle="#E1C04F",Kt(r,[[-8,-6],[6,-7],[6,-2],[-8,-1]])):o==="bow"?(r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.arc(-10,-10,24,-.15,Math.PI/2+.15),r.stroke(),r.strokeStyle="#EFEBDD",r.lineWidth=1.5,r.beginPath(),r.moveTo(13,-14),r.lineTo(-14,13),r.stroke()):o==="arrow"?(r.rotate(-Math.PI/4),r.fillStyle="#8C6640",r.fillRect(-1.5,-14,3,30),r.fillStyle=a,Kt(r,[[0,-22],[6,-13],[-6,-13]]),r.fillStyle="#F4EFE2",Kt(r,[[-1,10],[-7,18],[-1,16]]),Kt(r,[[1,10],[7,18],[1,16]])):o==="meat"?(r.fillStyle=a,r.beginPath(),r.ellipse(-3,2,13,10,-.4,0,7),r.fill(),r.fillStyle="#EFEBDD",r.fillRect(7,-12,5,12),r.beginPath(),r.arc(11,-13,4,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.22)",r.beginPath(),r.ellipse(-7,-1,5,3,-.4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,Kt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",Kt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:u,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&Kt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&Kt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),Kt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=u,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",Kt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",Kt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function hg(){let n=ag(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Ki;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,u=6+n()*20,c=n()*Math.PI;Kt(r,[[a,u],[a+Math.cos(c)*9,u+Math.sin(c)*9],[a+Math.cos(c+.3)*6,u+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function jS(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Qe(t.accent):e,a=(u,c,p)=>{n.fillStyle=p,n.fillRect(u,s-c,2,c)};if(r==="flower"){a(15,18,Mt(e)),n.fillStyle=Mt(e,1.1),Kt(n,[[16,26],[9,20],[15,22]]),Kt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=Mt(o);for(let u=0;u<5;u++){let c=u/5*Math.PI*2;Kt(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=Mt(Qe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let u=0;u<6;u++){let c=4+u*4+Math.floor(i()*2),p=14+Math.floor(i()*14);n.fillStyle=Mt(e,i()<.5?.9:1.1),Kt(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-p]])}else if(r==="deadbush")n.strokeStyle=Mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=Mt(e),n.fillRect(14,18,4,14),n.fillStyle=Mt(o),Kt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=Mt(Qe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=Mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=Mt(e,1.12);for(let u=3;u<s;u+=7)n.fillRect(5,u,s-10,3)}else if(r==="scaffold")n.fillStyle=Mt(e,.82),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),n.fillStyle=Mt(e),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillStyle=Mt(e,1.1),Kt(n,[[3,s-6],[s-6,3],[s-3,6],[6,s-3]]);else if(r==="wheat"){let u=Number(t.block.split("_")[1])||0,c=[8,14,21,28][u];for(let p=0;p<5;p++){let f=5+p*5;n.fillStyle=Mt(e),n.fillRect(f,s-c,2,c),u===3&&(n.fillStyle=Mt(o),Kt(n,[[f-2,s-c+9],[f+1,s-c-1],[f+4,s-c+9]]))}}else if(r==="rail"){let u=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[u];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let p=Mt(Qe("#8C6640")),f=Mt(e),d=s*.33,m=s*.67;if(u==="ns"||u==="ew"){n.fillStyle=p;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=f,n.fillRect(d-1.5,0,3,s),n.fillRect(m-1.5,0,3,s),t.accent&&(n.fillStyle=Mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=p,n.lineWidth=3;for(let _=0;_<5;_++){let g=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(g)*(s-m-4),Math.sin(g)*(s-m-4)),n.lineTo(s+Math.cos(g)*(s-d+4),Math.sin(g)*(s-d+4)),n.stroke()}n.strokeStyle=f;for(let _ of[s-d,s-m])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=Mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var ug=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,fg=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function KS(n,t){let e=Zi(n),i=Zi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,u=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,p=t<u?u-t:t>=u+16?t-(u+16-1):0;Math.max(c,p)<=14&&s.push([e+o,i+r])}return s}function pg(n){let t=new qn(n);t.magFilter=an,t.minFilter=an,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new Q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new An({uniforms:e,vertexShader:ug,fragmentShader:fg}),s=new An({uniforms:e,vertexShader:ug,fragmentShader:fg,transparent:!0,depthWrite:!1,side:Kn});return{opaque:i,trans:s,uniforms:e,tex:t}}function dg(n){let t=new cn;return t.setAttribute("position",new Ke(n.pos,3)),t.setAttribute("uv",new Ke(n.uv,2)),t.setAttribute("light",new Ke(n.light,1)),t.setAttribute("lt",new Ke(n.lt,2,!0)),t.setIndex(new Ke(n.index,1)),t.computeBoundingSphere(),t}var Wc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Ni(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Oe(dg(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Oe(dg(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Zi(t),s=Zi(e),r=m0(i,s,this.rd);for(let u of r){if(this.inflight>=this.maxInflight)break;let c=Ni(u.cx,u.cz);if(this.chunks.has(c))continue;let p={cx:u.cx,cz:u.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,p),this.inflight++,this.worker.postMessage({type:"load",cx:u.cx,cz:u.cz,rev:p.meshRev})}let o=this.rd+1.5,a=[];for(let[u,c]of this.chunks){let p=c.cx-i,f=c.cz-s;if(p*p+f*f>o*o){for(let d of["o","t"])c[d]&&(this.scene.remove(c[d]),c[d].geometry.dispose());this.chunks.delete(u),a.push(u)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(u=>{let[c,p]=u.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(p-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(u=>u.state==="ready").length}ready(t,e){let i=this.chunks.get(Ni(Zi(t),Zi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=rf(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Ni(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=rf(t,e,i);if(!r)return!1;let o=Ni(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,rg(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let u=Math.floor(t),c=Math.floor(i);for(let[p,f]of KS(u,c))this.dirtyMesh.add(Ni(p,f));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var kf="hw_world",na=null;function mg(n){n!==kf&&(kf=n,na=null)}function gg(){return na||(na=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(kf,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),na)}function Bf(n,t){return gg().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Vf=n=>Bf("readonly",t=>t.get(n)),Xc=n=>Bf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Hf(n){let t=await gg();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Gf(n){let t={};for(let e of n){let i=await Vf(e);i!==void 0&&(t[e]=i)}await Bf("readwrite",e=>e.clear()),await Xc(t)}function C(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Qi=n=>document.querySelector(n);function t1(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function yg(n,t,e,i,s,r){if(!t||!t.id)return null;let o=t1(t,e,i,s,r),a=n.get("ke_log"),u=Array.isArray(a)?a:[];if(u.push(o),n.set("ke_log",u),t.local)return o;if(e){let f=n.get("ke_correct"),d=Array.isArray(f)?f:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let c=n.get("ke_mistakes")||{},p=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?p&&(p.c++,p.u=s,p.c>=3&&(c[t.id]={d:1,w:p.w,t:p.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||p)&&n.set("ke_mistakes",c),o}var xg=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function _g(n,t=Date.now()){let e=xg(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&xg(new Date(s.t))===e&&i++;return i}function vg(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],u=[];for(let m of n)e[m]&&!e[m].d?o.push(m):t.has(m)||i.has(m)?u.push(m):a.push(m);let c=m=>{for(let _=m.length-1;_>0;_--){let g=Math.floor(r()*(_+1));[m[_],m[g]]=[m[g],m[_]]}return m};[o,a,u].forEach(c);let p=[],f=(m,_)=>{for(;_-- >0&&m.length;)p.push(m.pop())},d=Math.round(s*.7);return f(o,Math.ceil(d/2)),f(a,d-p.length),f(o,d-p.length),f(u,s-p.length),f(a,s-p.length),f(o,s-p.length),p}var e1="../../",n1=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],Xf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],qc=null,qf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),Wf=null,Mg=n=>{Wf=n},Sg=()=>_g(qf().get("ke_log"));function ia(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{yg(qf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(Wf)try{Wf(t,n)}catch{}}function Yf(n,t,e){try{let i=qf(),s=i.get("ke_learned")||{},r=new Set;for(let c in s)s[c]&&s[c].at&&(n.sets&&n.sets[c]||[]).forEach(p=>r.add(p));let o=n.list(t).filter(c=>c.type!=="speak").map(c=>c.id),a=vg(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),u=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(u.length)return u}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function i1(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function $f(){return qc||(qc=(async()=>{for(let t of n1)await i1(e1+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw qc=null,n})),qc}async function wg(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=C("div",{class:"panel quiz"});n.append(r),r.append(C("div",{class:"p-head"},C("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),C("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await $f()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,u=[],c=0,p=0,f=0;function d(){n.hidden=!0,n.innerHTML="",i&&i()}function m(){u=Yf(o,{modules:["words","phrases","grammar","patterns"],types:Xf,lv:1},s),u.length||(u=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),c=0,p=0,f=0,_()}function _(){r.innerHTML="";let x=u[c],A=a.isTyped(x);n._q=x;let F=C("div",{class:"fb"}),T=C("div",{class:"q-body"});r.append(C("div",{class:"p-head"},C("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",C("small",{},`\u7B2C ${c+1} / ${u.length} \u984C`)),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),C("div",{class:"q-type"},(a.TYPES[x.type]||"\u984C\u76EE")+(A?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),C("div",{class:"q-prompt"+(x.en?" en":"")},x.prompt),x.sub?C("div",{class:"q-sub"},x.sub):null,T,F);let I=!1,D=(L,S)=>{if(I)return;I=!0,ia(x,L,S);let R=G0(L,A);e&&e(L),L&&(f++,p+=R,t&&t(R)),F.className="fb "+(L?"ok":"bad"),F.append(C("div",{},L?`\u7B54\u5C0D\u4E86\uFF01 +${R} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",L?null:C("b",{class:"en"},x.answer)),!L&&x.why?C("div",{class:"why"},x.why):null,C("button",{class:"btn",onclick:g},c+1<u.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(x.input==="type"){let L=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),S=()=>{I||!L.value.trim()||D(o.check(x,L.value).ok,L.value)};L.addEventListener("keydown",R=>{R.stopPropagation(),R.key==="Enter"&&S()}),T.append(C("div",{class:"typerow"},L,C("button",{class:"btn",onclick:S},"\u9001\u51FA"))),setTimeout(()=>L.focus(),50)}else{let L=C("div",{class:"opts"});(x.options||[]).forEach(S=>L.append(C("button",{class:"opt"+(/[a-z]/i.test(S)?" en":""),onclick:R=>{if(I)return;let U=o.check(x,S).ok;R.currentTarget.classList.add(U?"ok":"bad"),D(U,S)}},S))),T.append(L)}}function g(){c++,c<u.length?_():y()}function y(){r.innerHTML="",r.append(C("div",{class:"p-head"},C("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),C("p",{class:"big"},`\u7B54\u5C0D ${f} / ${u.length} \u984C\uFF0C\u62FF\u5230 ${p} \u91D1\u5E63`),C("div",{class:"row"},C("button",{class:"btn",onclick:m},"\u518D\u4F86\u4E00\u56DE"),C("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}m()}var bg=new Set(Xf);async function sa(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:u=null}){n.innerHTML="",n.hidden=!1;let c=C("div",{class:"panel quiz"});n.append(c),c.append(C("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let p;try{p=await $f()}catch{c.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let f=window.KE,d=u,m=i?new Set(i.filter(T=>bg.has(T))):bg;if(!d)for(let T of t){let I=p.byId[T];if(I&&m.has(I.type)){d=p.get(T);break}}let _=!!d&&!u;d||(d=Yf(p,{modules:s||["words","phrases","grammar","patterns"],types:i?[...m]:Xf,lv:1},1)[0]||p.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let g=f.isTyped(d);n._q=d,c.innerHTML="";let y=C("div",{class:"fb"}),x=C("div",{class:"q-body"});c.append(C("div",{class:"p-head"},C("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),C("div",{class:"q-type"},u?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(_?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":f.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),C("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?C("div",{class:"q-sub"},d.sub):null,x,y);let A=!1,F=(T,I)=>{A||(A=!0,ia(d,T,I,a),y.className="fb "+(T?"ok":"bad"),y.append(C("div",{},T?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",T?null:C("b",{class:"en"},d.answer)),!T&&d.why?C("div",{class:"why"},d.why):null,C("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(T,g,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let T=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),I=()=>{A||!T.value.trim()||F(p.check(d,T.value).ok,T.value)};T.addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&I()}),x.append(C("div",{class:"typerow"},T,C("button",{class:"btn",onclick:I},"\u9001\u51FA"))),setTimeout(()=>T.focus(),50)}else{let T=C("div",{class:"opts"});(d.options||[]).forEach(I=>T.append(C("button",{class:"opt"+(/[a-z]/i.test(I)?" en":""),onclick:D=>{if(A)return;let L=p.check(d,I).ok;D.currentTarget.classList.add(L?"ok":"bad"),F(L,I)}},I))),x.append(T)}}async function Ag(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=C("div",{class:"panel quiz"});n.append(i),i.append(C("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await $f()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=Yf(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,u=0,c=()=>{i.innerHTML="";let p=o[a];n._q=p;let f=C("div",{class:"fb"}),d=C("div",{class:"q-body"});i.append(C("div",{class:"p-head"},C("h2",{},t.title_zh+" ",C("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),C("div",{class:"q-type"},r.TYPES[p.type]||"\u984C\u76EE"),C("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?C("div",{class:"q-sub"},p.sub):null,d,f);let m=!1,_=(g,y)=>{m||(m=!0,ia(p,g,y),g&&u++,f.className="fb "+(g?"ok":"bad"),f.append(C("div",{},g?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",g?null:C("b",{class:"en"},p.answer)),!g&&p.why?C("div",{class:"why"},p.why):null,C("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(u,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(p.input==="type"){let g=C("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),y=()=>{m||!g.value.trim()||_(s.check(p,g.value).ok,g.value)};g.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&y()}),d.append(C("div",{class:"typerow"},g,C("button",{class:"btn",onclick:y},"\u9001\u51FA"))),setTimeout(()=>g.focus(),50)}else{let g=C("div",{class:"opts"});(p.options||[]).forEach(y=>g.append(C("button",{class:"opt"+(/[a-z]/i.test(y)?" en":""),onclick:x=>{if(m)return;let A=s.check(p,y).ok;x.currentTarget.classList.add(A?"ok":"bad"),_(A,y)}},y))),d.append(g)}};c()}function Eg(n,t,e){let[i,s]=String(n).split(",").map(Number),r=p=>Ln(4242,i|0,t*7+p,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,u=Math.floor(r(2)*a.length),c=(u+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[u],a[c]]}}function Tg(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?zr(n,e.blueprint)?{ok:!1,reason:"owned"}:(Gs(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Ko(t,e.give,e.count,i)?(Gs(n,e.price),_n(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Zf=(n,t,e)=>!!(n&&n[t.id]===e);function Cg(n,t,e,i,s,r,o=()=>64){if(Zf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Dn(s,t.reward.coins|0);let a={};for(let u in t.reward.items||{}){let c=_n(r,u,t.reward.items[u],o);c&&(a[u]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Es(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Jf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Yc=n=>n==="creative"?"creative":"survival",Rg=n=>Jf[Yc(n)].db;function Ig(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Pg(n){let t=Yc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Lg(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Dg=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var od={};Gn(od,{BREED_CAP:()=>sd,LOVE_MS:()=>Ug,MAX_STAGE:()=>a1,STAGE_SECONDS:()=>o1,armorMax:()=>Ng,armorPoints:()=>ra,canTill:()=>Kf,eat:()=>id,equip:()=>l1,findMate:()=>rd,harvest:()=>Qf,nearWater:()=>td,reduceDamage:()=>nd,stageAt:()=>jf,wearArmor:()=>ed});var o1=60,a1=3;function jf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var Kf=(n,t)=>(n==="grass"||n==="dirt")&&t;function Qf(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function td(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let u of[0,-1])if(t(n(e+a,i+u,s+o)))return!0;return!1}function ra(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var Ng=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function ed(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?Ng(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var nd=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function l1(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function id(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var Ug=3e4,sd=12;function rd(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<Ug&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var hd={};Gn(hd,{apply:()=>Jc,duck:()=>Ts,muted:()=>oa,rainLevel:()=>cd,scene:()=>ld,setVolume:()=>jc,sfx:()=>Ze,state:()=>c1,toggleMute:()=>ad,unlock:()=>Zc});var Xe=null,Ws=null,$c=null,kr=null,Jn=()=>window.HIAudio||null,Og=()=>Jn()?Jn().get():{muted:!1,music:.35,sfx:.7};function Zc(){try{Jn()&&Jn().unlock()}catch{}if(!Xe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Xe=new n,Ws=Xe.createGain(),Ws.connect(Xe.destination),$c=Xe.createBuffer(1,Xe.sampleRate,Xe.sampleRate);let t=$c.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Xe.state==="suspended"&&Xe.resume(),Jc()}function Jc(){if(Ws){let n=Og();Ws.gain.setTargetAtTime(n.muted?0:n.sfx,Xe.currentTime,.03)}}var oa=()=>Og().muted;function ad(){return Jn()&&Jn().toggle(),Jc(),oa()}function jc(n){Jn()&&Jn().set(n),Jc()}function ld(n){try{Jn()&&Jn().scene(n)}catch{}}function Ts(n){let t=Jn();t&&(n&&Ts.id==null?Ts.id=t.duckStart():!n&&Ts.id!=null&&(t.duckEnd(Ts.id),Ts.id=null))}function zg(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function ti(n,t,e,i,s,r,o){let a=Xe.createOscillator(),u=Xe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),zg(u,e,i,s,r),a.connect(u),u.connect(Ws),a.start(e),a.stop(e+i+r+.05)}function Cs(n,t,e,i,s,r=1){let o=Xe.createBufferSource(),a=Xe.createBiquadFilter(),u=Xe.createGain();o.buffer=$c,a.type=n,a.frequency.value=t,a.Q.value=r,zg(u,e,.004,i,s),o.connect(a),a.connect(u),u.connect(Ws),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Fg={wood:(n,t)=>{ti("sine",190*t,n,.003,.16,.12,95*t),Cs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{Cs("highpass",1800*t,n,.1,.06),ti("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{Cs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{ti("sine",1900*t,n,.002,.08,.25,1500*t),Cs("highpass",4200,n,.06,.12)},soft:(n,t)=>{Cs("bandpass",850*t,n,.09,.1,.8)}};function Ze(n,t="soft"){if(!Xe||oa())return;let e=Xe.currentTime+.005,i=Fg[t]||Fg.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{Cs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":ti("sine",880,e,.002,.07,.08,1320);break;case"chest":ti("triangle",160,e,.02,.07,.3,120),ti("sine",330,e+.12,.005,.05,.15);break;case"door":ti("sawtooth",120,e,.03,.04,.3,160),Cs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>Cs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":ti("triangle",659,e,.005,.08,.15),ti("triangle",988,e+.1,.005,.08,.25);break;case"coin":ti("sine",1319,e,.002,.08,.08),ti("sine",1976,e+.07,.002,.08,.22);break;case"hurt":ti("triangle",300,e,.005,.1,.18,200);break;default:break}}function cd(n){if(Xe){if(!kr&&n>.01){let t=Xe.createBufferSource(),e=Xe.createBiquadFilter(),i=Xe.createBiquadFilter(),s=Xe.createGain();t.buffer=$c,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Ws),t.start(),kr={s:t,g:s}}kr&&kr.g.gain.setTargetAtTime(.06*n,Xe.currentTime,.4)}}var c1=()=>({ctx:Xe?Xe.state:"none",hi:Jn()?Jn().state():null,rain:kr?+kr.g.gain.value.toFixed(3):0});var gd={};Gn(gd,{HI_SCENE:()=>fd,createWeather:()=>dd,precipFor:()=>md,sceneFor:()=>ud,soundOf:()=>Br,stepWeather:()=>pd});function Br(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function ud({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var fd={calm:"hub",night:"night",cave:"cave"};function dd(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function pd(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function md(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var h1=[1,2,4,6,8];function Kc(n,t){if(t&&(t.type==="rod"||t.type==="bow")&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/h1[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Vr(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function kg(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Md={};Gn(Md,{collect:()=>vd,createFurnace:()=>xd,dismantle:()=>bd,start:()=>yd,tick:()=>_d});function xd(){return{fuel:0,jobs:[],done:{}}}function yd(n,t,e,i=4){if(Zn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Zn(t,"coal")<1)return{ok:!1,reason:"fuel"};Hs(t,"coal",1),n.fuel+=i}return Hs(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function _d(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function vd(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=_n(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function bd(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Rd={};Gn(Rd,{MAX_HP:()=>aa,REGEN_EVERY:()=>f1,SAFE_FALL:()=>u1,createHealth:()=>Sd,damage:()=>Ad,fallDamage:()=>wd,hearts:()=>Cd,regen:()=>Ed,respawnPoint:()=>Td});var aa=20,u1=4,f1=4;function Sd(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function wd(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Ad(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Ed(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Td(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Cd(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Qc={animal:8,quiz:4};function Bg(){return{list:[],nextId:1}}var la=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Vg(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Hg(n,t){return n<.2&&!t}function Gg(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function Wg(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.held>0){n.held-=e,n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-r,-o);return}if(n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let u=n.home.x-n.p.x,c=n.home.z-n.p.z,p=Math.hypot(u,c);if(p>10){n.yaw=Math.atan2(-u,-c),n.v.x=u/p*s.speed,n.v.z=c/p*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let u=a>1.6?s.speed:0;n.v.x=r/(a||1)*u,n.v.z=o/(a||1)*u;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Xg(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null,meat:n.def.meat?{id:n.def.meat,n:1}:null}}var qg=(n,t)=>n?(t?2:1)+1:0;function Hr(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],u=[t.x,t.y,t.z],c=0,p=1/0;for(let f=0;f<3;f++){if(Math.abs(u[f])<1e-9){if(a[f]<r[f]||a[f]>o[f])return null;continue}let d=(r[f]-a[f])/u[f],m=(o[f]-a[f])/u[f];if(d>m&&([d,m]=[m,d]),c=Math.max(c,d),p=Math.min(p,m),c>p)return null}return c}function Yg(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var $g=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Zg(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function Jg(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),u={};Dn(i,o);for(let c in a){let p=_n(e,c,a[c],s);p&&(u[c]=p)}return{ok:!0,coins:o,items:a,leftovers:u,name_zh:r.name_zh}}function jg(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Id(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function Kg(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Id(n[e].map,n,t).ok?n[e]:null}var Nd={};Gn(Nd,{BOOST:()=>ix,CHARGE_T:()=>nx,COOLDOWN:()=>Pd,FULL:()=>th,GRAV:()=>tx,LIFE:()=>ex,SPEED:()=>Qg,chargeOf:()=>eh,shoot:()=>Ld,step:()=>Dd});var Qg=26,tx=9,ex=2.5,Pd=.45,nx=1,ix=14,th=.95,eh=n=>Math.max(0,Math.min(1,(n-.12)/(nx-.12)));function Ld(n,t,e=0){let i=Math.hypot(t.x,t.y,t.z)||1,s=Math.max(0,Math.min(1,e||0)),r=Qg+ix*s;return{p:{x:n.x,y:n.y,z:n.z},v:{x:t.x/i*r,y:t.y/i*r+1,z:t.z/i*r},age:0,power:s>=th?2:1}}function Dd(n,t,e,i){n.age+=t,n.v.y-=tx*t;let s=n.v.x*t,r=n.v.y*t,o=n.v.z*t,a=Math.hypot(s,r,o)||1e-6,u={x:s/a,y:r/a,z:o/a},c=null,p=a;for(let f of i){let d=Hr(n.p,u,f.p,f.w,f.h);d!=null&&d<=p&&(p=d,c=f)}if(c)return{hit:"mob",target:c.ref};for(let f=1;f<=4;f++){let d=n.p.x+s*f/4,m=n.p.y+r*f/4,_=n.p.z+o*f/4;if(e(Math.floor(d),Math.floor(m),Math.floor(_)))return n.p={x:n.p.x+s*(f-1)/4,y:n.p.y+r*(f-1)/4,z:n.p.z+o*(f-1)/4},{hit:"block"}}return n.p.x+=s,n.p.y+=r,n.p.z+=o,n.age>ex?{hit:"gone"}:null}var Vd={};Gn(Vd,{FOLLOW:()=>sx,GUARD:()=>rx,MAX:()=>Xs,TELEPORT:()=>Ud,feed:()=>Fd,foodsOf:()=>nh,guardTarget:()=>zd,isPet:()=>qs,petName:()=>ca,serialize:()=>kd,steer:()=>Od,valid:()=>Bd});var ca=n=>Array.from(String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim()).slice(0,12).join("");var Xs=4,sx=2.5,Ud=20,rx=10,qs=n=>!!(n&&n.def&&n.def.pet),nh=n=>[].concat(n.food||[]);function Fd(n,t,e){if(!qs(n)||n.tame||!nh(n.def).includes(t))return{ok:!1};let i=n.def.tameNeed||2;return n.fed=(n.fed||0)+1,n.fed<i?{ok:!0,tamed:!1,fed:n.fed,need:i}:e>=Xs?(n.fed=i-1,{ok:!0,tamed:!1,full:!0,fed:n.fed,need:i}):(n.tame=!0,n.sit=!1,{ok:!0,tamed:!0,fed:n.fed,need:i})}function Od(n,t,e,i){if(n.t+=e,n.sit){n.v.x=0,n.v.z=0;return}let s=i||t,r=s.x-n.p.x,o=s.z-n.p.z,a=Math.hypot(r,o);if(a>(i?1.1:sx)){let c=n.def.speed*(a>6?3:1.6);n.yaw=Math.atan2(-r,-o),n.v.x=r/a*c,n.v.z=o/a*c}else n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-(t.x-n.p.x),-(t.z-n.p.z))}function zd(n,t){let e=null,i=rx;for(let s of t){if(s.kind!=="quiz"||s.gone)continue;let r=Math.hypot(s.p.x-n.p.x,s.p.z-n.p.z);r<i&&(i=r,e=s)}return e}var kd=n=>n.filter(t=>qs(t)&&t.tame&&!t.gone).slice(0,Xs).map(t=>Object.assign({type:t.type,x:t.p.x,y:t.p.y,z:t.p.z,sit:!!t.sit},t.name?{name:t.name}:null)),Bd=n=>(Array.isArray(n)?n:[]).filter(t=>t&&typeof t.type=="string"&&[t.x,t.y,t.z].every(Number.isFinite)).slice(0,Xs).map(t=>{let e=ca(t.name),i={type:t.type,x:t.x,y:t.y,z:t.z,sit:!!t.sit};return e&&(i.name=e),i});var _i=["easy","mid","hard"],ih={easy:"\u7B2C 1 \u7D1A\u30FB\u7C21\u55AE",mid:"\u7B2C 2 \u7D1A\u30FB\u4E2D\u7B49",hard:"\u7B2C 3 \u7D1A\u30FB\u6311\u6230"},sh=3,Gr=n=>_i.includes(n&&n.lv)?n.lv:"mid";function ha(n,t){let e=new Set([_i[0]]);for(let i=1;i<_i.length;i++){let s=n.filter(o=>Gr(o)===_i[i-1]&&t(o)).length,r=n.some(o=>Gr(o)===_i[i]&&t(o));(e.has(_i[i-1])&&s>=sh||r)&&e.add(_i[i])}return e}function ox(n,t,e){let i=_i.indexOf(e);return i<=0||ha(n,t).has(e)?0:Math.max(1,sh-n.filter(s=>Gr(s)===_i[i-1]&&t(s)).length)}function Hd(n,t,e,i){return e["book:"+t.id]===i?0:(n.books||[]).filter(r=>e["book:"+r.id]===i).length<(n.dailyCap??1/0)?n.coins|0:0}var qd={};Gn(qd,{COLORS:()=>g1,check:()=>Wd,checkRule:()=>ax,describe:()=>Gd,doneToday:()=>ah,inArea:()=>rh,levelOpen:()=>oh,matches:()=>fa,offersFor:()=>Xd});var g1=["red","orange","yellow","green","cyan","blue","purple","pink","white"],x1={rose:"red",marigold:"orange",dandelion:"yellow",hydrangea:"cyan",cornflower:"blue",lavender:"purple",peony:"pink"},ua=(n,...t)=>t.some(e=>n===e||n.startsWith(e+"_"));function Gd(n){let t=new Set,e=null,i=n.match(/_(red|orange|yellow|green|cyan|blue|purple|pink)$/);i&&(e=i[1]),n.startsWith("flower_")&&(t.add("flower"),e=x1[n.slice(7)]||null),(n==="wool"||n==="snow_block"||n==="checker_white")&&(e="white"),ua(n,"bricks","slab_bricks","stairs_bricks")&&(e="red"),ua(n,"glass")&&t.add("window"),(n==="door"||n==="door_open")&&t.add("door"),ua(n,"wool")&&t.add("wool"),ua(n,"carpet")&&t.add("carpet"),/^(planks|spruce_planks|log|spruce_log|(slab|stairs)_(spruce_)?planks.*|crate|barrel)$/.test(n)&&t.add("wood"),/^(stone|cobblestone|mossy_cobblestone|smooth_stone|polished_stone|chiseled_stone|.*stone_bricks|(slab|stairs)_(cobblestone|stone_bricks).*)$/.test(n)&&t.add("stone"),(["torch","lamp","lantern","paper_lantern","sea_lantern"].includes(n)||ua(n,"paper_lantern"))&&t.add("light");for(let s of["bed","chest","bookshelf","crafting_table","furnace","ladder","scaffold","hay_bale"])n===s&&t.add(s);return{kinds:t,color:e}}function fa(n,t){if(!t)return!0;let e=Gd(n),i=[].concat(t.kind||[]);return!(i.length&&!i.some(s=>e.kinds.has(s))||t.color&&!(t.color==="*"?e.color&&e.color!=="white":e.color===t.color)||t.ids&&!t.ids.includes(n)||t.not&&t.not.some(s=>e.kinds.has(s)))}function ax(n,t){let e=n.filter(u=>fa(u.id,t.a||t.m)),i=t.b?n.filter(u=>fa(u.id,t.b)):null,s=new Map(n.map(u=>[u.x+","+u.y+","+u.z,u])),r=(u,c,p)=>s.get(u+","+c+","+p),o=0,a=t.min??1;if(t.t==="count")o=e.length;else if(t.t==="line"){let u=new Set(e.map(c=>c.x+","+c.y+","+c.z));for(let c of e)for(let[p,f]of[[1,0],[0,1]]){if(u.has(c.x-p+","+c.y+","+(c.z-f)))continue;let d=0;for(;u.has(c.x+p*d+","+c.y+","+(c.z+f*d));)d++;o=Math.max(o,d)}}else if(t.t==="tall"){let u=new Set(e.map(p=>p.x+","+p.y+","+p.z)),c=new Set;for(let p of e){let f=0;for(;u.has(p.x+","+(p.y+f)+","+p.z);)f++;f>=t.h&&c.add(p.x+","+p.z)}o=c.size}else if(t.t==="near"){let u=t.d??1;o=e.filter(c=>i.some(p=>p!==c&&Math.abs(c.x-p.x)<=u&&Math.abs(c.z-p.z)<=u&&Math.abs(c.y-p.y)<=1)).length}else if(t.t==="on")o=e.filter(u=>{let c=r(u.x,u.y-1,u.z);return c&&fa(c.id,t.b)}).length;else if(t.t==="top")o=e.filter(u=>{let c=0;for(let p=r(u.x,u.y-1,u.z);p&&fa(p.id,t.b);p=r(u.x,u.y-1-c,u.z))c++;return c>=t.h}).length;else if(t.t==="height")o=n.length?Math.max(...n.map(u=>u.y))-Math.min(...n.map(u=>u.y))+1:0;else if(t.t==="colors"){let u={};for(let c of e){let p=Gd(c.id).color;p&&(u[p]=(u[p]||0)+1)}o=Object.values(u).filter(c=>c>=(t.each||1)).length}return{ok:o>=a,have:o,need:a}}var Wd=(n,t)=>{let e=t.rules.map(i=>Object.assign({en:i.en},ax(n,i)));return{ok:e.every(i=>i.ok),res:e}},rh=(n,t,e,i,s)=>Math.abs(e-n.x)<=t.r&&Math.abs(s-n.z)<=t.r&&i>=n.y-t.down&&i<=n.y+t.up,oh=(n,t,e)=>t<=1||e>=(n.unlock||{})["lv"+t];function Xd(n,t,e,i,s,r){let o=n.builds.filter(m=>oh(n,m.lv,s));if(!o.length)return[];let[a,u]=String(t).split(",").map(Number),c=Number(String(i).replace(/\D/g,""))%9973,p=m=>r(5151,(a|0)+c,e*13+m,u|0),f=Math.floor(p(1)*o.length),d=(f+1+Math.floor(p(2)*(o.length-1)))%o.length;return o.length>1?[o[f],o[d]]:[o[f]]}var ah=(n,t)=>n.buildDay&&n.buildDay.d===t?n.buildDay.n|0:0;var Oi={};function Wr(n){return Oi[n]||(Oi[n]=new wn({color:n,transparent:!0}),Oi[n].userData.base=new ue(n)),Oi[n]}var da=null;function y1(){if(da)return da;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),da=new qn(n),da.colorSpace=en,da}function lx(n,t){let e=new xn,i=n.colors,[s,r]=n.size,o=(u,c,p,f,d,m,_,g)=>{let y=new Oe(new $e(u,c,p),g||Wr(f));return y.position.set(d,m,_),e.add(y),y},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let p=o(.2,.6,.22,i.leg,c,.6,0);p.geometry.translate(0,-.6/2,0),a.push(p)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let u=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Oi.__face||(Oi.__face=new wn({map:y1(),transparent:!0}),Oi.__face.userData.base=new ue("#ffffff"));let c=[Wr(i.head),Wr(i.head),Wr(i.head),Wr(i.head),Wr(i.head),Oi.__face],p=new Oe(new $e(s*.9,s*.8,s*.8),c);p.position.set(0,r*.72+s*.4,0),e.add(p),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let u=r<1&&n.id!=="chicken",c=n.id==="chicken"?.25:u?r*.35:.45,p=r-c-(n.id==="chicken"?.15:.25);o(s,p,n.id==="chicken"?s:s*1.35,i.body,0,c+p/2,0),i.patch&&o(s*.5,p*.55,.02+s*1.36,i.patch,s*.12,c+p*.55,0);let f=n.id==="chicken"?.3:u?.32:.45,d=o(f,f,f,i.head,0,c+p+f*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let y of[-f*.3,f*.3])o(f*.26,f*.3,f*.16,i.ear,y,d.position.y+f*.6,d.position.z);if(i.eye)for(let y of[-f*.24,f*.24])o(f*.24,f*.26,.02,i.eye,y,d.position.y+f*.05,d.position.z-f/2-.01);if(n.pet){let y=o(.08,.08,.32,i.body,0,c+p*.85,s*.68+.12);y.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+f/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-f/2-.05));let m=n.id==="chicken"?.06:.18,_=n.id==="chicken"?0:s*.45,g=s*.3;for(let[y,x]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-g,-_],[g,-_],[-g,_],[g,_]]){let A=o(m,c,m,i.leg,y,c/2,x);A.geometry.translate(0,-c/2,0),A.position.y=c,a.push(A)}}return e.userData.legs=a,e}function cx(n){for(let t in Oi){let e=Oi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function lh(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var ch="9c5f7b4d61",uh=new URLSearchParams(location.search),b1=720,hh=5,ux={boat:-.85,minecart:-.6,horse:.75},fx=[[0,0,0,1,.1,1]],dx=[[0,0,0,1,.5,1]],M1=[[0,0,0,1,1,1]],S1=[[.3,0,.3,.7,.7,.7]],w1=20261008,Yd=uh.get("test")==="1"||window.__HW_TEST__===!0,A1=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:A1,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function Tn(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ei(n,t){try{localStorage.setItem(n,t)}catch{}}async function E1(){let n=Yc(Tn("hw_mode","survival")),t=Pg(n),e=!t.creative&&Tn("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=l=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(l)?l+"_s":l,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";mg(Rg(n));let[r,o,a,u,c,p,f,d,m,_]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json","data/books.json","data/builds.json"].map(l=>fetch(l,{cache:"no-cache"}).then(v=>v.json()))),g=d0(r),y=o.recipes||[],x=l=>g.maxStack(l),A={};try{let[l,v,M,w,P,z,q,at,et,yt,Ot,$t,re]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(Ae=>Vf(i(Ae))));A={meta:l,player:v,inv:M,coins:w,furnaces:P,claimed:z,quests:q,chests:at,crops:et,achv:yt,mapd:Ot,vehs:$t,storyd:re,chunks:await Hf(s)}}catch(l){console.warn("save unavailable",l)}let F=A.meta&&A.meta.seed||w1+Jf[n].seedOffset,T=e==="shadow"?F+7777:F,I=e==="shadow"?Sf(T,g):A0(F,g,c),D=og(Object.fromEntries(Object.entries(A.chunks||{}).map(([l,v])=>[l.slice(s.length),v]))),L=A.inv?kc(A.inv):jo();t.creative&&!A.inv&&Dg.forEach((l,v)=>{g.get(l)&&(L.slots[v]={id:l,count:64})});let S=Y0(A.coins),R=U0(A.achv),U=f.achievements||[],O=If(A.storyd);!A.storyd&&A.player&&Hc(O,d);let j=l=>l==="look"?h.lookAcc||0:l==="walk"?h.walkAcc||0:R.stats[l]||0,Z=j0(),G=J0(S,{mode:Tn("hw_coin_source","local"),member:Z0(window)}),tt=new Oc(g,A.mapd),k=Sd(A.player&&A.player.hp!=null?A.player.hp:20);h.bed=A.player&&A.player.bed||null,h.horse=A.player&&A.player.horse||null,h.petsPending=Bd(A.player&&A.player.pets);let W=u.portals||[],st=Array.isArray(A.claimed)?A.claimed.slice():[],$=A.furnaces||{},J=A.quests||{},rt=Object.fromEntries(Object.entries(A.chests||{}).map(([l,v])=>[l,kc(v,27)])),St=A.crops||{};h.armor=A.player&&Array.isArray(A.player.armor)?A.player.armor.slice(0,4):[null,null,null,null],h.armorDur=A.player&&Array.isArray(A.player.armorDur)?A.player.armorDur.slice(0,4):[null,null,null,null];let Tt=o.smelt||[],te=o.fuelPerCoal||4;A.meta&&typeof A.meta.time=="number"&&(h.time=A.meta.time);let Ht=Qi("#c"),It=new Ic({canvas:Ht,antialias:!1,powerPreference:"high-performance"}),X={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:h.touch?1.5:1.25,np:500,grain:!0}};function K(){let l=X[Tn("hw_gfx","high")]||X.high;It.setPixelRatio(Math.min(window.devicePixelRatio||1,l.pr)),h.np=l.np;let v=document.getElementById("grain");v&&(v.hidden=!l.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[Tn("hw_btn","m")]||1),document.body.classList.toggle("lefty",Tn("hw_lefty","off")==="on"),h.invert=Tn("hw_invert","off")==="on"}K();let lt=new vo,wt=new ue("#EFEBDD");lt.background=wt;let pt=new Sn(72,1,.08,200);pt.rotation.order="YXZ";let zt=lg(g),se=cg(g,zt),Dt=pg(zt.canvas),Xt=new Worker("assets/hw-worker.js?v="+ch),ht=new Wc({scene:lt,mats:Dt,reg:g,worker:Xt,diffs:D,onDirty:l=>{h.dirty.add(l),(h.mapDirty||(h.mapDirty=new Set)).add(l)}}),Zt=Math.max(2,Math.min(6,parseInt(uh.get("rd")||Tn("hw_rd",h.touch?"3":"4"),10)||4));ht.setRenderDistance(Zt),pt.far=Zt*16+40,pt.updateProjectionMatrix();let Qt=await new Promise(l=>{let v=M=>{M.data.type==="ready"&&(Xt.removeEventListener("message",v),l(M.data.spawn))};Xt.addEventListener("message",v),Xt.postMessage({type:"init",seed:T,dim:e,blocks:r,structures:c,diffs:Object.fromEntries([...D].map(([M,w])=>[M,zf(w)]))})}),_e=A.player&&A.player.dims&&A.player.dims[e];h.dimPos=A.player&&A.player.dims||{},A.player&&(e==="overworld"||_e)?Object.assign(h,{p:_e?{x:_e.x,y:_e.y,z:_e.z}:{x:A.player.x,y:A.player.y,z:A.player.z},yaw:(_e?_e.yaw:A.player.yaw)||0,pitch:A.player.pitch||0,fly:!!A.player.fly&&!_e,sel:A.player.sel|0}):(A.player&&(h.sel=A.player.sel|0),h.p={x:Qt.x,y:Qt.y,z:Qt.z},h.yaw=Math.atan2(-(Qt.stele.x+.5-Qt.x),-(Qt.stele.z+.5-Qt.z)),h.pitch=-.15);let fe=new ps(new wr(new $e(1.004,1.004,1.004)),new ds({color:1382164,transparent:!0,opacity:.45}));fe.visible=!1,lt.add(fe);let ye=hg().map(l=>new qn(l)),we=new Oe(new $e(1.01,1.01,1.01),new wn({map:ye[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));we.visible=!1,lt.add(we);let V=(l,v)=>{let M=document.createElement("canvas");M.width=M.height=64;let w=M.getContext("2d");w.fillStyle=l,w.beginPath(),w.arc(32,32,28,0,7),w.fill(),v&&(w.globalCompositeOperation="destination-out",w.beginPath(),w.arc(44,26,24,0,7),w.fill());let P=new qn(M);return P.colorSpace=en,P},He=new fs(new Yi({map:V("#F2C46B"),depthWrite:!1,fog:!1})),be=new fs(new Yi({map:V("#EDE6D0",!0),depthWrite:!1,fog:!1}));lt.add(He,be);let N=500,b=new Float32Array(N*6),Y=new Float32Array(N*3),ot=new Float32Array(N*3);for(let l=0;l<N;l++)ot[l*3]=Math.random()*24-12,ot[l*3+1]=Math.random()*16,ot[l*3+2]=Math.random()*24-12;let ft=new cn;ft.setAttribute("position",new Ke(b,3));let At=new ps(ft,new ds({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));At.frustumCulled=!1,At.visible=!1,lt.add(At);let Pt=new cn;Pt.setAttribute("position",new Ke(Y,3));let dt=new Ao(Pt,new Sr({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));dt.frustumCulled=!1,dt.visible=!1,lt.add(dt),h.weather=dd();let gt=0;function Ut(l,v,M){if(At.visible=M==="rain",dt.visible=M==="snow",!!M){gt+=l;for(let w=0;w<h.np;w++){let P=ot[w*3],z=ot[w*3+2],q=M==="rain"?16:1.6,at=v.y+10-(ot[w*3+1]+gt*q)%16;if(M==="rain"){let et=w*6;b[et]=b[et+3]=v.x+P,b[et+2]=b[et+5]=v.z+z,b[et+1]=at,b[et+4]=at-.45}else{let et=w*3,yt=Math.sin(gt*.8+w)*.4;Y[et]=v.x+P+yt,Y[et+1]=at,Y[et+2]=v.z+z+yt*.6}}ft.setDrawRange(0,h.np*2),Pt.setDrawRange(0,h.np),(M==="rain"?ft:Pt).attributes.position.needsUpdate=!0}}let qt=new xn,Ct=(l,v,M,w,P,z,q)=>{let at=new Oe(new $e(l,v,M),new wn({color:w}));return at.position.set(P,z,q),at.userData.base=new ue(w),qt.add(at),at},Nt=Ct(.24,.75,.26,"#26302A",-.14,.375,0),ne=Ct(.24,.75,.26,"#26302A",.14,.375,0);Ct(.56,.7,.3,"#2F5A34",0,1.1,0);let oe=Ct(.18,.66,.2,"#E7CDA6",-.38,1.12,0),pe=Ct(.18,.66,.2,"#E7CDA6",.38,1.12,0);Ct(.46,.42,.42,"#E7CDA6",0,1.66,0),Ct(.5,.14,.46,"#151714",0,1.9,.02),Ct(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Nt,ne,oe,pe].forEach(l=>{l.geometry.translate(0,-l.geometry.parameters.height/2+.05,0),l.position.y+=l.geometry.parameters.height/2-.05}),qt.visible=!1,lt.add(qt);let H={},Ft=l=>H[l]||(H[l]=(()=>{let v=new Image;v.src=se[l];let M=new yn(v);return M.colorSpace=en,v.onload=()=>{M.needsUpdate=!0},new Yi({map:M,depthWrite:!0,alphaTest:.3})})());function ut(l,v,M,w){let P=new fs(Ft(l));P.scale.set(.42,.42,1),lt.add(P),h.drops.push({id:l,s:P,p:{x:v,y:M,z:w},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let Lt=(l,v,M)=>{let w=ht.get(l,v,M);return g.flat.solid[w]===1&&(g.flat.boxes[w]||!0)},Rt=Object.fromEntries((a.mobs||[]).map(l=>[l.id,l])),xt=Bg(),Jt=new Map,jt=0;function Ue(l,v){for(let M=61;M>0;M--){let w=ht.get(l,M,v);if(g.flat.solid[w])return ht.get(l,M+1,v)||ht.get(l,M+2,v)?null:{y:M+1,n:w};if(g.flat.liquid[w])return null}return null}function De(l,v,M,w=7){for(let P=-w;P<=w;P++)for(let z=-w;z<=w;z++)for(let q=-w;q<=w;q++)if(g.flat.lightEmit[ht.get(l+q,v+P,M+z)])return!0;return!1}function ln(l,v,M,w,P){let z=Vg(xt,l,{x:v+.5,y:M,z:w+.5}),q=lx(l,P);return Jt.set(z.id,q),lt.add(q),z}let Nn=new Set;function pa(){for(let l of I.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!(Nn.has(l.id)||!ht.ready(l.x,l.z))){Nn.add(l.id);for(let v=0;v<l.villagers;v++){let M=Eg(l.id,v,p),w=l.x+(v%2?2:-2),P=l.z+(v-1),z=Ue(w,P),q=ln(Rt.villager,w,z?z.y:l.y+1,P,M.prof.color);Object.assign(q,{home:{x:l.x,z:l.z},village:l.id,role:M,vi:v})}}}function fh(l){if(Rt.villager&&pa(),e==="overworld"&&h.horse&&!h.horseMob&&Rt.horse&&ht.ready(h.horse.x,h.horse.z)){let q=ln(Rt.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));q.tame=!0,h.horse.saddled&&sp(q),h.horseMob=q}if(e==="overworld")for(let q=h.petsPending.length-1;q>=0;q--){let at=h.petsPending[q];if(!Rt[at.type]||!ht.ready(at.x,at.z))continue;h.petsPending.splice(q,1);let et=ln(Rt[at.type],Math.floor(at.x),at.y,Math.floor(at.z));Object.assign(et,{tame:!0,sit:!!at.sit,name:at.name||""}),rp(et),ap(et)}let v=Math.random()*Math.PI*2,M=14+Math.random()*14,w=Math.floor(h.p.x+Math.cos(v)*M),P=Math.floor(h.p.z+Math.sin(v)*M);if(!ht.ready(w,P))return;let z=Ue(w,P);if(z)if(la(xt,"animal")<Qc.animal&&z.n===g.num("grass")&&l>.3){let q=I.biomeOf(w,P),at=Object.values(Rt).filter($t=>$t.kind==="animal"&&(!$t.biome||$t.biome===q)),et=Math.random()*at.reduce(($t,re)=>$t+(re.w??1),0),yt=at[0];for(let $t of at)if(et-=$t.w??1,et<=0){yt=$t;break}let Ot=1+Math.floor(Math.random()*3);for(let $t=0;$t<Ot&&la(xt,"animal")<Qc.animal;$t++){let re=w+$t%2,Ae=P+($t>>1),Te=Ue(re,Ae);Te&&ln(yt,re,Te.y,Ae)}}else t.quizMobs&&la(xt,"quiz")<Qc.quiz&&Hg(l,De(w,z.y,P))&&Rt.quizling&&ln(e==="shadow"&&Rt.shadowling?Rt.shadowling:Rt.quizling,w,z.y,P)}function ma(l,v,M){jt+=l,jt>2.5&&h.started&&(jt=0,fh(e==="shadow"?0:v));for(let w=xt.list.length-1;w>=0;w--){let P=xt.list[w],z=Jt.get(P.id),q=Math.hypot(P.p.x-h.p.x,P.p.z-h.p.z);if(P.riding){P.p.x=h.p.x,P.p.y=h.p.y,P.p.z=h.p.z,P.yaw=h.yaw,P.v.x=h.v.x,P.v.z=h.v.z,lh(z,P,M/1e3);continue}if(P.gone){P.goneT=(P.goneT||0)+l,lh(z,P,M/1e3),P.goneT>.35&&(lt.remove(z),Jt.delete(P.id),xt.list.splice(w,1));continue}if(Gg(P,v,q)){P.gone=!0,P.goneT=0,P.village&&Nn.delete(P.village);continue}let at=P.tame&&qs(P);if(at&&!P.sit&&q>Ud&&!h.ride&&l&&(P.p={x:h.p.x,y:h.p.y+.2,z:h.p.z},P.v={x:0,y:0,z:0}),!ht.ready(P.p.x,P.p.z))continue;if(at){let yt=P.def.guard&&!P.sit?zd(P,xt.list):null;yt&&Math.hypot(yt.p.x-P.p.x,yt.p.z-P.p.z)<1.8&&(yt.held=.3,yt.guarded||(yt.guarded=!0,vt(`${P.def.name_zh}\u64CB\u4F4F\u932F\u984C\u602A\u4E86\uFF01\u5FEB\u53BB\u7B54\u984C\u6253\u6557\u5B83`))),Od(P,h.p,l,yt?yt.p:null)}else Wg(P,h.p,l,Math.random);P.v.y-=20*l,P.v.y<-20&&(P.v.y=-20);let et=Dc(P.p,P.v,l,Lt,{w:Math.min(.9,P.def.size[0]),h:P.def.size[1],canStep:!0,grounded:P.onGround});P.onGround=et.onGround,g.flat.liquid[ht.get(P.p.x,P.p.y+.3,P.p.z)]&&(P.v.y=2),lh(z,P,M/1e3),P.sit&&(z.position.y-=.12)}cx(.35+.65*v)}function zi(l,v,M){let w,P;l==="screen"?(Mi.set(v/innerWidth*2-1,-(M/innerHeight)*2+1,.5).unproject(pt).sub(pt.position).normalize(),w={x:pt.position.x,y:pt.position.y,z:pt.position.z},P={x:Mi.x,y:Mi.y,z:Mi.z}):(w=$r(),P=va());let z=l==="screen"?Vn("screen",v,M):Vn("center"),q=null,at=h.view==="tp"&&l==="screen"?8:4.5;z&&(at=Math.min(at,z.dist+.5));for(let et of xt.list){if(et.gone||et.riding)continue;let yt=Hr(w,P,et.p,et.def.size[0],et.def.size[1]);yt!=null&&yt<at&&(at=yt,q=et)}for(let et of h.vehicles){if(h.ride&&h.ride.veh===et)continue;let yt=Hr(w,P,et.p,1.3,.9);yt!=null&&yt<at&&(at=yt,q=et.m)}if(h.boss){let et=Hr(w,P,h.boss.p,3.6,3.6);et!=null&&et<at+1&&(at=et,q=h.boss.m)}return q}function Xr(){try{return Yg(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Rs(l,v=0){if(l.kind==="vehicle"){_h(l.veh);return}if(l.kind==="boss"){kx();return}if(l.type==="horse"){Ax(l);return}if(l.kind==="villager"){if(!t.trading){vt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}px(l);return}if(qs(l)){op(l);return}if(l.kind==="animal"&&L.slots[h.sel]&&L.slots[h.sel].id===(l.def.food||"wheat")){t.consume&&zn(L,h.sel,1),bt();let w=Date.now();l.love=w,vt(`${l.def.name_zh}\u5403\u4E86${g.name(l.def.food||"wheat")}\uFF0C\u597D\u958B\u5FC3`);let P=rd(xt.list,l,w);if(P&&la(xt,"animal")<sd){let z=ln(l.def,Math.floor((l.p.x+P.p.x)/2),Math.floor(l.p.y),Math.floor((l.p.z+P.p.z)/2));Jt.get(z.id).scale.setScalar(.65),l.love=0,P.love=0,vt(`\u751F\u4E86\u4E00\u96BB\u5C0F${l.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,de("bred")}else P&&vt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(l.kind==="animal"&&l.def.noHit){vt(`${l.def.name_zh}\u5728\u6162\u6162\u5403${g.name(l.def.food||"wheat")}\uFF0C\u4E0D\u8981\u5435\u7260\u3002\u62FF${g.name(l.def.food||"wheat")}\u9935\u7260\u770B\u770B`);return}if(l.kind==="animal"){let w=L.slots[h.sel],P=!v&&!!(w&&g.toolOf(w.id)&&g.toolOf(w.id).type==="sword"),z=Xg(l,P||v>=2,Math.random);if(l.v.y=4,l.v.x+=(l.p.x-h.p.x)*1.5,l.v.z+=(l.p.z-h.p.z)*1.5,P){let q=Vr(L,h.sel,g);q.broke&&vt(`\u4F60\u7684${g.name(q.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),bt()}if(z&&z.drops)for(let q=0;q<z.drops.n;q++)ut(z.drops.id,l.p.x,l.p.y+.6,l.p.z);z&&z.meat&&ut(z.meat.id,l.p.x,l.p.y+.6,l.p.z);return}if(l.busy)return;l.busy=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=Xr().slice(0,30).sort(()=>Math.random()-.5);sa(mt.ov,{ids:M,onDone:(w,P)=>{if(h.overlay=null,l.busy=!1,w&&l.def.tough&&!l.hurt){l.hurt=!0,vt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(w){let z=qg(!0,P)+(l.def.tough?2:0);Dn(S,z),vn(),l.gone=!0,l.goneT=0,vt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${z} \u91D1\u5E63`),h.dirtyMeta=!0,tn(),h.stats.quizWins=(h.stats.quizWins||0)+1,de("quiz_wins")}else if(w===!1){let z=h.p.x-l.p.x,q=h.p.z-l.p.z,at=Math.hypot(z,q)||1;h.v.x=z/at*7,h.v.z=q/at*7,h.v.y=4.5,l.p.x-=z/at*1.5,l.p.z-=q/at*1.5,vt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let ni=(l,v,M)=>ht.get(l,v,M),kn=(l,v,M)=>{let w=g.get(ht.get(l,v,M));return w&&w.rail?{shape:w.rail,powered:!!w.powered}:null},mt=T1();function vt(l){for(;mt.toasts.children.length>3;)mt.toasts.firstChild.remove();let v=C("div",{class:"toast"},l);mt.toasts.append(v),setTimeout(()=>v.remove(),2200)}function ga(l){let v=C("div",{class:"toast ach"},C("i",{class:"badge"}),C("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",C("b",{},l.name_zh),l.coins&&t.coins?`\u3000+${l.coins} \u91D1\u5E63`:""));mt.toasts.append(v),setTimeout(()=>v.remove(),3500)}function de(l,v=1){F0(R,l,v),h.dirtyMeta=!0;for(let M of O0(R,U))ga(M),M.coins&&t.coins&&(Dn(S,M.coins),vn())}let ki=()=>Math.max(5,Math.min(100,parseInt(Tn("hw_daily_goal","20"),10)||20)),ii=0;function qr(){let l=ki();mt.learnCnt.textContent=ii+"/"+l,mt.learnBar.style.width=Math.min(100,ii/l*100)+"%",mt.learnPill.classList.toggle("done",ii>=l)}function Ys(){try{ii=Sg()}catch{}qr()}Mg(l=>{let v=ii;Ys(),de("answers"),l&&de("answers_ok"),v<ki()&&ii>=ki()&&vt("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function dh(){let l=document.getElementById("pinbox"),v=window.KSParentPin;if(l.innerHTML="",!v||!v.isSet()){l.append(C("div",{class:"pin-ask"},C("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),C("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let M=C("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),w=C("input",{class:"typein",type:"number",min:"5",max:"100",value:String(ki()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),P=()=>{if(!v.verify(M.value.trim())){vt("\u5BC6\u78BC\u4E0D\u5C0D"),M.value="";return}ei("hw_daily_goal",String(Math.max(5,Math.min(100,+w.value||20)))),qr(),vt("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+ki()+" \u984C"),$d()};[M,w].forEach(z=>z.addEventListener("keydown",q=>{q.stopPropagation(),q.key==="Enter"&&P()})),l.append(C("div",{class:"pin-ask"},C("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),C("div",{class:"typerow"},M,w,C("button",{class:"btn",onclick:P},"\u78BA\u5B9A")))),setTimeout(()=>M.focus(),50)}function xa(l,v,M,w){de("placed"),(w==="torch"||w==="scaffold")&&de("place:"+w);let P=h.recentPlaced||(h.recentPlaced=[]);P.push([l,v,M]),P.length>80&&P.shift(),!R.done.house&&k0(P,l,v,M)>=30&&de("house");let z=J.build,q=l+","+v+","+M;z&&e==="overworld"&&rh(z,_.area,l,v,M)&&!z.cells.includes(q)&&z.cells.length<3e3&&z.cells.push(q)}function ph(){let l=!1;for(let v of ze())R.stats["boss:"+v]||(R.stats["boss:"+v]=1,l=!0);l&&de("boss",0)}let ya=S.coins;function vn(){S.coins>ya&&Ze("coin"),ya=S.coins,mt.coins.textContent=S.coins}let E="";function B(){let l=Cd(k.hp),v=l.join();v!==E&&(E=v,mt.hearts.innerHTML="",l.forEach(M=>mt.hearts.append(C("i",{class:"ht "+M}))))}function ct(l){if(h.dead||l<=0||!t.damage)return;let v=l,M=ra(h.armor,g);if(l=nd(l,M),M&&(ed(h.armor,h.armorDur,g,v).forEach(z=>vt(`\u4F60\u7684${g.name(z)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Vt(),h.dirtyMeta=!0),l<=0)return;let w=Ad(k,l);B(),h.dirtyMeta=!0,Ze("hurt"),mt.flash.classList.remove("on"),mt.flash.offsetWidth,mt.flash.classList.add("on"),w&&nt()}function nt(){jr(!0),h.dead=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let l=mt.ov;l.innerHTML="",l.hidden=!1,l.append(C("div",{class:"panel start"},C("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),C("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),C("button",{class:"btn big",onclick:it},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function it(){let l=Td(h.bed,Qt,!!h.bed&&e==="overworld");h.p={x:l.x,y:l.y,z:l.z},h.v={x:0,y:0,z:0},h.fallTop=l.y,k.hp=20,h.dead=!1,B(),Re(),h.dirtyMeta=!0,vt(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function bt(){mt.hotbar.innerHTML="";for(let v=0;v<9;v++){let M=L.slots[v];mt.hotbar.append(C("button",{class:"slot"+(v===h.sel?" on":""),"aria-label":M?g.name(M.id):"\u7A7A\u683C",onpointerdown:w=>{w.stopPropagation(),h.sel=v,bt()}},M?C("img",{src:se[M.id],alt:""}):null,M&&M.count>1?C("span",{class:"cnt"},M.count):null,Gt(M),C("span",{class:"key"},v+1)))}let l=L.slots[h.sel];mt.selName.textContent=l?g.name(l.id):""}function Gt(l){let v=kg(l,g);return!v||v.left>=v.max?null:C("span",{class:"dur"+(v.frac<.25?" low":"")},C("i",{style:"width:"+Math.round(v.frac*100)+"%"}))}function kt(l=4){let v=new Set,M=Math.floor(h.p.x),w=Math.floor(h.p.y),P=Math.floor(h.p.z);for(let z=-l;z<=l;z++)for(let q=-l;q<=l;q++)for(let at=-l;at<=l;at++){let et=ht.get(M+at,w+z,P+q);et&&v.add(g.get(et).id)}return v}let Yt=()=>({near:kt(),owned:new Set(S.owned)}),ee=-1,le=null,xe=null,Wt=l=>l==="inv"?L:l==="chest"?rt[xe]:null,Pe=(l,v)=>l==="armor"?h.armor[v]?{id:h.armor[v],count:1,dur:h.armorDur[v]}:null:Wt(l).slots[v];function Je(l,v,M){if(!le){Pe(l,v)&&(le={c:l,i:v}),M();return}let w=le;if(le=null,w.c===l&&w.i===v){M();return}if(l==="armor"||w.c==="armor"){let[P,z,q,at]=l==="armor"?[w.c,w.i,l,v]:[l,v,w.c,w.i];if(P==="armor"){M();return}let et=Wt(P),yt=et.slots[z],Ot=yt&&g.get(yt.id),$t=h.armor[at];if(yt&&!(Ot.armor&&Ot.armor.slot===at)){vt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),M();return}let re=h.armorDur[at],Ae=$t?Number.isFinite(re)?{id:$t,count:1,dur:re}:{id:$t,count:1}:null;yt?(h.armor[at]=yt.id,h.armorDur[at]=Number.isFinite(yt.dur)?yt.dur:null,yt.count>1?(yt.count--,Ae&&_n(et,$t,1,x)):et.slots[z]=Ae):$t&&(h.armor[at]=null,h.armorDur[at]=null,et.slots[z]=Ae),Vt(),h.dirtyMeta=!0,bt(),M();return}w.c===l?Tf(Wt(l),w.i,v,x):Rf(Wt(w.c),w.i,Wt(l),v,x),h.dirtyMeta=!0,bt(),M()}let Fe=(l,v,M,w="")=>{let P=Pe(l,v),z=le&&le.c===l&&le.i===v;return C("button",{class:"slot"+(z?" pick":"")+w,title:P?g.name(P.id):"",onclick:()=>Je(l,v,M)},P?C("img",{src:se[P.id],alt:""}):null,P&&P.count>1?C("span",{class:"cnt"},P.count):null,Gt(P))},Be=["\u982D","\u8EAB","\u817F","\u8173"];function fn(l){let v=ra(h.armor,g);return C("div",{class:"armor-row"},Be.map((M,w)=>C("div",{class:"armor-slot"},Fe("armor",w,l),C("small",{},M))),C("small",{class:"muted"},`\u8B77\u7532 ${v} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,v*4)}%\uFF09`))}function Vt(){if(mt.armor){let l=ra(h.armor,g);mt.armor.textContent=l?`\u8B77\u7532 ${l}`:""}}function nn(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=rt[xe]||(rt[xe]=jo(27)),M=C("div",{class:"inv-grid"});for(let z=0;z<27;z++)M.append(Fe("chest",z,nn));let w=C("div",{class:"inv-grid"});for(let z=9;z<36;z++)w.append(Fe("inv",z,nn));let P=C("div",{class:"inv-grid hbrow"});for(let z=0;z<9;z++)P.append(Fe("inv",z,nn," hb"));return l.append(C("div",{class:"panel inv"},C("div",{class:"p-head"},C("h2",{},"\u7BB1\u5B50"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),M,C("h3",{},"\u80CC\u5305"),w,P)),v}function Me(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=C("div",{class:"inv-grid"}),M=at=>Fe("inv",at,Me,at<9?" hb":"");for(let at=9;at<36;at++)v.append(M(at));let w=C("div",{class:"inv-grid hbrow"});for(let at=0;at<9;at++)w.append(M(at));let P=C("div",{class:"craft"},C("h3",{},"\u5408\u6210"));if(t.creative){let at=C("div",{class:"craft"},C("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),C("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),et=C("div",{class:"cat-grid"});Lg(g).forEach(yt=>et.append(C("button",{class:"slot",title:g.name(yt),onclick:()=>{L.slots[h.sel]={id:yt,count:64},h.dirtyMeta=!0,bt(),Me(),vt(`${g.name(yt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},C("img",{src:se[yt],alt:""})))),at.append(et),l.append(C("div",{class:"panel inv"},C("div",{class:"p-head"},C("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("div",{class:"inv-wrap"},C("div",{},C("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),v,w),at)));return}let z=Yt(),q={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};y.forEach(at=>{let et=Bc(L,at,z),yt=et.ok;at.blueprint&&et.reason==="blueprint"&&!Object.keys(at.in).some(Ot=>Ot!=="stick"&&Zn(L,Ot)>0)||P.append(C("div",{class:"rcp"+(yt?"":" no")},C("img",{src:se[at.out.id],alt:""}),C("div",{class:"rcp-t"},C("b",{},`${at.name_zh} \xD7${at.out.count}`),C("small",{},Object.keys(at.in).map(Ot=>`${g.name(Ot)} ${Zn(L,Ot)}/${at.in[Ot]}`).join("\u3001")+(q[et.reason]?"\u3000\xB7 "+q[et.reason]:""))),C("button",{class:"btn small",onclick:()=>{let Ot=Cf(L,at,x,Yt());Ot.ok?(vt(`\u505A\u597D\u4E86\uFF1A${at.name_zh} \xD7${at.out.count}`),h.dirtyMeta=!0,de("craft:"+at.out.id)):vt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Ot.reason]||"\u6750\u6599\u4E0D\u5920"),Me(),bt()}},"\u88FD\u4F5C")))}),l.append(C("div",{class:"panel inv"},C("div",{class:"p-head"},C("h2",{},"\u80CC\u5305"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("div",{class:"inv-wrap"},C("div",{},C("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),fn(Me),v,w),P)))}let Un=W0(g);function Bn(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=C("div",{class:"shop"}),M=Kg(W,ze());Un.filter(w=>!w.id.startsWith("portal_")||M&&w.id===M.block).forEach(w=>v.append(C("div",{class:"offer"+(w.locked?" locked":"")},C("img",{src:se[w.id],alt:""}),C("div",{class:"of-t"},C("b",{},`${w.name_zh}${w.qty>1?" \xD7"+w.qty:""}`),C("small",{},w.locked?`\uFF08${w.locked}\uFF09`:`${w.price} \u91D1\u5E63${w.desc?"\u3000"+w.desc:""}`)),zr(S,w.id)?C("span",{class:"owned"},"\u5DF2\u64C1\u6709"):C("button",{class:"btn small",disabled:w.locked?!0:null,onclick:()=>vi(w)},w.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u5546\u5E97\u3000",C("span",{class:"coin"}),` ${S.coins}`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),v))}function vi(l){let v=X0(S,L,l,x);v.ok?(de("bought"),de("buy:"+l.id),vt(l.blueprint?`\u62FF\u5230 ${l.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${l.name_zh} \xD7${l.qty}`),h.dirtyMeta=!0,vn(),bt(),tn()):vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[v.reason]||"\u8CB7\u4E0D\u4E86"),Bn()}let si=null;function Le(){let l=mt.ov,v=$[si]||($[si]=xd());l.innerHTML="",l.hidden=!1;let M=v.jobs[0],w=C("div",{class:"shop"});Tt.forEach(z=>{let q=Zn(L,z.in);w.append(C("div",{class:"offer"+(q?"":" locked")},C("img",{src:se[z.in],alt:""}),C("div",{class:"of-t"},C("b",{},`${g.name(z.in)} \u2192 ${g.name(z.out)}`),C("small",{},`\u6709 ${q} \u500B \xB7 \u6BCF\u500B ${z.time} \u79D2`)),C("button",{class:"btn small",onclick:()=>{let at=yd(v,L,z,te);at.ok||vt(at.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,bt(),Le()}},"\u653E\u9032\u53BB")))});let P=Object.values(v.done).reduce((z,q)=>z+q,0);l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u7194\u7210"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,v.fuel-v.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Zn(L,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${te} \u500B\uFF09`),C("div",{class:"furnace-st"},M?`\u6B63\u5728\u71D2\uFF1A${g.name(M.in)}\uFF08\u9084\u8981 ${Math.ceil(M.left)} \u79D2\uFF0C\u6392\u968A ${v.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),C("div",{class:"row"},C("button",{class:"btn",disabled:P?null:!0,onclick:()=>{let z=vd(v,L,x);z&&(vt(`\u62FF\u51FA ${z} \u500B`),de("smelted",z)),h.dirtyMeta=!0,bt(),Le()}},`\u62FF\u51FA\u4F86\uFF08${P}\uFF09`)),w))}let qe=null,ri=(l,v)=>{try{return JSON.parse(localStorage.getItem(l)||"null")||v}catch{return v}},ze=()=>jg(ri("hw_portal_rewards",[]),ri("hi_save",null),W),bi='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function ts(){let l=W.find(P=>P.map===qe),v=mt.ov;if(v.innerHTML="",v.hidden=!1,!l){Re();return}let M=Object.keys(l.reward.items).map(P=>`${g.name(P)} \xD7${l.reward.items[P]}`).join("\u3001"),w=Id(l.map,W,ze());if(!w.ok){v.append(C("div",{class:"panel start"},C("div",{class:"p-head"},C("h2",{},"\u50B3\u9001\u9580\u30FB"+l.name_zh),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("div",{class:"padlock",html:bi}),C("p",{class:"big"},`\u5148\u6253\u5012 ${w.need.boss_zh} \u624D\u80FD\u9032\u5165`),C("p",{class:"muted"},`\u5F9E\u300C${w.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${w.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:Re},"\u77E5\u9053\u4E86"))));return}v.append(C("div",{class:"panel start"},C("div",{class:"p-head"},C("h2",{},"\u50B3\u9001\u9580\u30FB"+l.name_zh),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${l.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${l.reward.coins} \u91D1\u5E63\u3001${M}\u3002`),C("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),C("div",{class:"row"},C("button",{class:"btn big",onclick:async()=>{await tn(),h.leaving=$g(l.map),location.href=h.leaving}},"\u9032\u5165"),C("button",{class:"btn ghost",onclick:Re},"\u5148\u4E0D\u8981"))))}function $s(){if(!t.portals)return 0;let l;try{l=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{l=[]}let v=Zg(l,st);for(let M of v){let w=Jg(M,W,L,S,x);if(st.push(M.id),!!w.ok){for(let P in w.leftovers)for(let z=0;z<w.leftovers[P];z++)ut(P,h.p.x,h.p.y+1,h.p.z);vt(`\u5F9E${w.name_zh}\u5E36\u56DE\u4F86\uFF1A${w.coins} \u91D1\u5E63\u3001${Object.keys(w.items).map(P=>g.name(P)+" \xD7"+w.items[P]).join("\u3001")}`)}}return v.length&&(vn(),bt(),h.dirtyMeta=!0,tn()),ph(),v.length}let Yr=null;function px(l){Yr=l,l.busy=!0,sn("trade")}function _a(){let l=Yr,v=mt.ov;if(!l)return Re();v.innerHTML="",v.hidden=!1;let M=l.role,w=Es(),P=C("div",{class:"shop"});M.prof.offers.forEach(q=>{let at=q.blueprint||q.give,et=!!q.blueprint,yt=et&&g.blueprints.find($t=>$t.id===q.blueprint),Ot=et&&zr(S,q.blueprint);P.append(C("div",{class:"offer"},C("img",{src:se[at],alt:""}),C("div",{class:"of-t"},C("b",{},et?yt.name_zh:`${g.name(at)}${q.count>1?" \xD7"+q.count:""}`),C("small",{},`${q.price} \u91D1\u5E63${et?"\u3000"+(yt.desc||""):""}`)),Ot?C("span",{class:"owned"},"\u5DF2\u64C1\u6709"):C("button",{class:"btn small",onclick:()=>{let $t=Tg(S,L,q,x);$t.ok?(Ze("trade"),de("traded"),de("bought"),vt(et?`\u62FF\u5230 ${yt.name_zh}\uFF01`:`\u8CB7\u5230 ${g.name(at)} \xD7${q.count}`),h.dirtyMeta=!0,vn(),bt(),tn()):vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[$t.reason]||"\u8CB7\u4E0D\u4E86"),_a()}},"\u8CFC\u8CB7")))});let z=C("div",{class:"quests"});M.quests.forEach(q=>{let at=Zf(J,q,w),et=Object.keys(q.reward.items||{}).map(yt=>`${g.name(yt)} \xD7${q.reward.items[yt]}`).join("\u3001");z.append(C("div",{class:"offer quest"+(at?" locked":"")},C("div",{class:"of-t"},C("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+q.title_zh),C("small",{},`${q.desc}\uFF0C\u7B54\u5C0D ${q.need} \u984C \u2192 ${q.reward.coins} \u91D1\u5E63\u3001${et}`)),at?C("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):C("button",{class:"btn small",onclick:()=>{h.overlay="quest",Ag(mt.ov,{quest:q,onDone:yt=>{if(h.overlay="trade",yt>=0){let Ot=Cg(J,q,yt,w,S,L,x);if(Ot.ok){for(let $t in Ot.leftovers)for(let re=0;re<Ot.leftovers[$t];re++)ut($t,h.p.x,h.p.y+1,h.p.z);vt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Ot.coins} \u91D1\u5E63\u3001${et}`),vn(),bt(),h.dirtyMeta=!0,tn(),h.stats.quests=(h.stats.quests||0)+1,de("quests")}else vt(`\u7B54\u5C0D ${yt} \u984C\uFF0C\u8981 ${q.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}_a()}})}},"\u63A5\u59D4\u8A17")))}),v.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},`\u6751\u6C11\u30FB${M.prof.name_zh}\u3000`,C("span",{class:"coin"}),` ${S.coins}`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("h3",{},"\u4EA4\u6613"),P,C("h3",{},"\u82F1\u6587\u59D4\u8A17"),C("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),z,C("h3",{},"\u5EFA\u7BC9\u59D4\u8A17\uFF08\u770B\u82F1\u6587\u84CB\u6771\u897F\uFF09"),mx(l,w)))}function mx(l,v){let M=C("div",{class:"quests"}),w=J.build,P=_.perDay,z=R.stats.builds||0,q=ah(J,v),at=yt=>Object.keys(yt.items||{}).map(Ot=>`${g.name(Ot)} \xD7${yt.items[Ot]}`).join("\u3001");if(M.append(C("p",{class:"muted"},`\u5148\u8B80\u82F1\u6587\uFF0C\u770B\u4E0D\u61C2\u518D\u6309\u5DE6\u4E0A\u89D2\u7684\u300C\u4E2D\u6587\u63D0\u793A\u300D\u3002\u4E00\u5929\u6700\u591A\u5B8C\u6210 ${P} \u500B\uFF08\u4ECA\u5929 ${q}/${P}\uFF09\u3002`)),w){let yt=_.builds.find(Ot=>Ot.id===w.id);M.append(C("div",{class:"offer quest"},C("div",{class:"of-t"},C("b",{class:"en"},yt?yt.en:""),C("small",{},"\u6B63\u5728\u505A\u9019\u500B\u59D4\u8A17\uFF1A\u5728\u7D05\u8272\u6846\u6846\u88E1\u84CB\u597D\uFF0C\u6309\u5DE6\u4E0A\u89D2\u7684\u300C\u5B8C\u6210\u300D")),C("button",{class:"btn small ghost",onclick:()=>{Dx(),_a()}},"\u653E\u68C4")))}else q>=P?M.append(C("p",{},`\u4ECA\u5929\u5DF2\u7D93\u5B8C\u6210 ${P} \u500B\u5EFA\u7BC9\u59D4\u8A17\u4E86\uFF0C\u660E\u5929\u518D\u4F86\uFF01`)):Xd(_,l.village,l.vi|0,v,z,Ln).forEach(yt=>M.append(C("div",{class:"offer quest"},C("div",{class:"of-t"},C("b",{class:"en"},yt.en),C("small",{},`${"\u2605".repeat(yt.lv)}\u3000\u84CB\u597D \u2192 ${yt.coins} \u91D1\u5E63\u3001${at(yt)}`)),C("button",{class:"btn small",onclick:()=>up(yt)},"\u63A5\u59D4\u8A17"))));let et=[2,3].find(yt=>!oh(_,yt,z));return et&&M.append(C("p",{class:"muted"},`\u518D\u5B8C\u6210 ${_.unlock["lv"+et]-z} \u500B\u5EFA\u7BC9\u59D4\u8A17\uFF0C\u6703\u51FA\u73FE\u66F4\u96E3\u7684\uFF08${"\u2605".repeat(et)}\uFF09\u3002`)),M}function $d(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=C("b",{},ht.rd),M=C("input",{type:"range",min:2,max:6,step:1,value:ht.rd,oninput:w=>{v.textContent=w.target.value},onchange:w=>{let P=+w.target.value;ht.setRenderDistance(P),pt.far=P*16+40,pt.updateProjectionMatrix(),ei("hw_rd",P)}});l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u8A2D\u5B9A"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",v,M),C("label",{class:"set"},"\u756B\u8CEA",C("select",{onchange:w=>{ei("hw_gfx",w.target.value),K()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([w,P])=>C("option",{value:w,selected:Tn("hw_gfx","high")===w?!0:null},P)))),C("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",C("select",{onchange:w=>{ei("hw_btn",w.target.value),K()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([w,P])=>C("option",{value:w,selected:Tn("hw_btn","m")===w?!0:null},P)))),C("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",C("input",{type:"checkbox",checked:Tn("hw_lefty","off")==="on"?!0:null,onchange:w=>{ei("hw_lefty",w.target.checked?"on":"off"),K()}})),C("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",C("input",{type:"checkbox",checked:Tn("hw_invert","off")==="on"?!0:null,onchange:w=>{ei("hw_invert",w.target.checked?"on":"off"),K()}})),C("label",{class:"set"},"\u97F3\u6A02",C("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:w=>jc({music:+w.target.value,muted:!1})})),C("label",{class:"set"},"\u97F3\u6548",C("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:w=>{jc({sfx:+w.target.value,muted:!1}),Ze("place","wood")}})),t.creative?C("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",C("input",{type:"checkbox",checked:Tn("hw_weather","on")!=="off"?!0:null,onchange:w=>ei("hw_weather",w.target.checked?"on":"off")})):null,C("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:xx},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),C("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",C("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:w=>{w.target.files[0]&&yx(w.target.files[0])}}))),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:_x},"\u91CD\u7F6E\u4E16\u754C"),t.creative?C("button",{class:"btn",onclick:()=>mh("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):C("button",{class:"btn",onclick:gx},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:dh},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${ki()} \u984C\uFF08\u5BB6\u9577\uFF09`)),C("div",{id:"pinbox"}),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:()=>{Pf(O),h.dirtyMeta=!0,Re(),Rh(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),C("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),C("p",{},C("a",{class:"home-link",href:"../../#s/game",onclick:()=>{tn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),C("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(G.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+ch)))}async function mh(l){await tn(),ei("hw_mode",l),h.resetting=!0,location.reload()}function gx(){let l=document.getElementById("pinbox"),v=window.KSParentPin;if(l.innerHTML="",!v||!v.isSet()){l.append(C("div",{class:"pin-ask"},C("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),C("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let M=C("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),w=()=>{let P=Ig(v,M.value.trim());P.ok?mh("creative"):(vt(P.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),M.value="")};M.addEventListener("keydown",P=>{P.stopPropagation(),P.key==="Enter"&&w()}),l.append(C("div",{class:"pin-ask"},C("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),C("div",{class:"typerow"},M,C("button",{class:"btn",onclick:w},"\u78BA\u5B9A")))),setTimeout(()=>M.focus(),50)}async function Zd(){await tn(!0);let l={};for(let v=0;v<localStorage.length;v++){let M=localStorage.key(v);/^hw_/.test(M)&&M!=="hw_mode"&&(l[M]=localStorage.getItem(M))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await Hf(""),ls:l}}async function xx(){try{let l=new Blob([JSON.stringify(await Zd())],{type:"application/json"}),v=C("a",{href:URL.createObjectURL(l),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+Es()+".json"});document.body.append(v),v.click(),setTimeout(()=>{URL.revokeObjectURL(v.href),v.remove()},1500),vt("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(l){vt("\u532F\u51FA\u5931\u6557\uFF1A"+l.message)}}async function yx(l){try{let v=JSON.parse(await l.text());if(!v||v.app!=="hero-world"||!v.db||typeof v.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;h.resetting=!0,await Gf([]),await Xc(v.db);for(let M in v.ls||{})/^hw_/.test(M)&&M!=="hw_mode"&&ei(M,v.ls[M]);location.reload()}catch(v){h.resetting=!1,vt("\u532F\u5165\u5931\u6557\uFF1A"+(v&&v.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":v.message))}}async function _x(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,ei("hw_dim","overworld");try{await Gf(["hw_coins"])}catch(l){console.warn(l)}location.reload()}}function sn(l){document.pointerLockElement&&document.exitPointerLock(),h.overlay=l,Hn(),de("open:"+l,1),l==="inv"?(ee=-1,le=null,Me()):l==="shop"?Bn():l==="set"?$d():l==="furnace"?Le():l==="portal"?ts():l==="trade"?_a():l==="chest"?(le=null,nn()):l==="map"?Th():l==="ach"?Fx():l==="quests"?Xx():l==="book"?(Qr=null,to()):l==="petname"?Ex():l==="quiz"&&wg(mt.ov,{onAnswer:()=>de("stele_answers"),onReward:v=>{Dn(S,v),vn(),h.dirtyMeta=!0,tn()},onClose:()=>{h.overlay=null}})}function Re(){if(h.overlay==="book")try{speechSynthesis.cancel()}catch{}mt.ov.hidden=!0,mt.ov.innerHTML="",h.overlay=null,Yr&&(Yr.busy=!1,Yr=null)}let Jd=()=>{mt.btnSnd.textContent=oa()?"\u{1F507}":"\u{1F50A}"};mt.btnSnd.onclick=()=>{Zc(),ad(),Jd()},["pointerdown","keydown"].forEach(l=>addEventListener(l,()=>Zc(),{capture:!0,once:!0})),Jd(),mt.btnInv.onclick=()=>h.overlay==="inv"?Re():sn("inv"),mt.btnShop.onclick=()=>h.overlay==="shop"?Re():sn("shop"),mt.btnSet.onclick=()=>h.overlay==="set"?Re():sn("set"),mt.btnView.onclick=()=>jd(),mt.bRide.onclick=()=>jr(),mt.bMap.onclick=()=>h.overlay==="map"?Re():sn("map"),mt.restOk.onclick=()=>{mt.rest.hidden=!0},mt.bQuest.onclick=()=>h.overlay==="quests"?Re():sn("quests"),mt.bAch.onclick=()=>h.overlay==="ach"?Re():sn("ach");function jd(){h.view=h.view==="fp"?"tp":"fp",vt(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Kd(){h.ride||(h.fly=!h.fly,h.v.y=0,mt.root.classList.toggle("flying",h.fly),vt(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Mi=new Q;function va(){let l=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*l,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*l}}let $r=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?ux[h.ride.kind]:0),z:h.p.z}),Qd=l=>l&&!g.flat.liquid[l],gh=l=>g.flat.boxes[l]||(g.flat.shape[l]===4?fx:g.flat.shape[l]===8?dx:null),Is=g.get("scaffold")?g.num("scaffold"):-1,tp=l=>{let v=Math.floor(l.x),M=Math.floor(l.y),w=Math.floor(l.z);return g.flat.climb[ht.get(v,M,w)]===2?(P,z,q)=>P===v&&z===M&&q===w?0:ht.get(P,z,q):ni};function ep(l){if(l.n!==Is||l.face[1]===-1)return null;let v=l.y;for(;v<l.y+16&&ht.get(l.x,v+1,l.z)===Is;)v++;let M=ht.get(l.x,v+1,l.z);return v+1<64&&(!M||g.flat.liquid[M])?{x:l.x,y:v+1,z:l.z}:null}function Vn(l,v,M){if(l==="screen"){Mi.set(v/innerWidth*2-1,-(M/innerHeight)*2+1,.5).unproject(pt).sub(pt.position).normalize();let q=pt.position,at=h.view==="tp"?q.distanceTo(new Q(h.p.x,h.p.y+1.62,h.p.z)):0,et={x:q.x,y:q.y,z:q.z},yt={x:Mi.x,y:Mi.y,z:Mi.z};h.lastRay={o:et,d:yt};let Ot=Ur(et,yt,hh+1+at,tp(et),Qd,gh);return Ot&&(Ot.at={x:et.x+yt.x*Ot.dist,y:et.y+yt.y*Ot.dist,z:et.z+yt.z*Ot.dist}),Ot}let w=$r(),P=va();h.lastRay={o:w,d:P};let z=Ur(w,P,hh,tp(w),Qd,gh);return z&&(z.at={x:w.x+P.x*z.dist,y:w.y+P.y*z.dist,z:w.z+P.z*z.dist}),z}function Hn(){h.mining.active=!1,h.mining.k="",h.mining.t=0,we.visible=!1}function vx(l,v,M){Ze("door");let w=g.get(ht.get(l,v,M)),P=g.get(w.openAs||w.closeAs);if(!P)return;let z=at=>{let et=g.get(at);return et&&et.interact==="door"},q=v;for(;z(ht.get(l,q-1,M));)q--;for(let at=q;z(ht.get(l,at,M));at++)ht.set(l,at,M,P.n);h.dirtyMeta=!0}let np=()=>{let l=L.slots[h.sel];return l?g.toolOf(l.id):null};function bx(l){let v=l.n,M=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Kc(g.get(v),np());if(!ht.set(l.x,l.y,l.z,0))return;Z.sendBlock(l.x,l.y,l.z,0);let w=l.x+","+l.y+","+l.z,P=g.get(v);if(rt[w]){if(t.drops){for(let et of rt[w].slots)if(et)for(let yt=0;yt<et.count;yt++)ut(et.id,l.x+.5,l.y+.4,l.z+.5)}delete rt[w]}if(P&&P.crop){if(delete St[w],t.drops)for(let et of Qf(P.stage|0))for(let yt=0;yt<et.n;yt++)ut(et.id,l.x+.5,l.y+.3,l.z+.5);h.stats.harvested=(h.stats.harvested||0)+(P.stage===3?1:0),P.stage===3&&de("harvested"),h.dirtyMeta=!0;return}let z=M.harvest?g.dropOf(v):null;if(z&&ut(z,l.x+.5,l.y+.4,l.z+.5),t.drops&&P.pattern==="leaves"&&Math.random()<(f.appleChance||.1)?ut("apple",l.x+.5,l.y+.4,l.z+.5):!M.harvest&&!M.creative&&vt(`${g.name(v)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`),P.id==="bamboo"||P.id==="scaffold")for(let et=l.y+1;ht.get(l.x,et,l.z)===v;et++)ht.set(l.x,et,l.z,0),t.drops&&ut(P.id,l.x+.5,et+.4,l.z+.5);let q=ht.get(l.x,l.y+1,l.z);if(g.flat.plant[q]){delete St[l.x+","+(l.y+1)+","+l.z],ht.set(l.x,l.y+1,l.z,0);let et=t.drops&&g.dropOf(q);et&&ut(et,l.x+.5,l.y+1.3,l.z+.5)}if(g.get(v).interact==="door")for(let et of[-1,1]){let yt=ht.get(l.x,l.y+et,l.z);g.get(yt)&&g.get(yt).interact==="door"&&ht.set(l.x,l.y+et,l.z,0)}let at=l.x+","+l.y+","+l.z;if(h.bed&&h.bed.x===l.x&&h.bed.y===l.y&&h.bed.z===l.z&&(h.bed=null,vt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),$[at]){let et=bd($[at]);for(let yt in et)for(let Ot=0;Ot<et[yt];Ot++)ut(yt,l.x+.5,l.y+.4,l.z+.5);delete $[at]}if(M.usesTool){let et=Vr(L,h.sel,g);et.broke&&vt(`\u4F60\u7684${g.name(et.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),bt()}h.dirtyMeta=!0,h.stats.mined++,Ze("break",Br(P)),de("mined"),de("mine:"+(P.pattern==="log"?"wood":P.id))}function Zs(l){let v=L.slots[h.sel],M=v&&g.get(v.id);if(M&&M.food)return t.damage?(id(k,M.food,20)?(Ze("eat"),zn(L,h.sel,1),B(),bt(),h.dirtyMeta=!0,vt(`\u5403\u4E86${M.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):vt("\u73FE\u5728\u4E0D\u9913"),!0):(vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(M&&M.id==="shadow_flint"){if(!t.portals)return vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Et=g.num("dark_crystal"),ie=l&&l.n===Et?wf((Ne,dn,gn)=>ht.get(Ne,dn,gn),l.x,l.y,l.z,Et):null;if(!ie)return vt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let Ie=g.num("shadow_portal");for(let Ne of ie)ht.set(Ne[0],Ne[1],Ne[2],Ie);return de("portal_lit"),zn(L,h.sel,1),bt(),h.dirtyMeta=!0,vt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(M&&M.id==="fishing_rod")return h.fish?Rx():Cx(),!0;if(M&&M.id==="bow")return wh(),!0;if(M&&M.id==="book")return sn("book"),!0;if(M&&M.place==="boat"){if(h.ride)return vt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Et=h.lastRay,ie=Et&&Ur(Et.o,Et.d,hh+1,ni,Ne=>g.flat.liquid[Ne]||g.flat.solid[Ne]);if(!ie||!g.flat.liquid[ie.n]||ht.get(ie.x,ie.y+1,ie.z))return vt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:ie.x+.5,y:ie.y+1-.15,z:ie.z+.5};let Ie=xh("boat",h.p,h.yaw,{y:ie.y+1});return t.consume&&zn(L,h.sel,1),bt(),Jr("boat",{y:ie.y+1,veh:Ie}),!0}if(M&&M.place==="minecart"){if(h.ride)return vt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Et=l&&g.get(l.n);if(!Et||!Et.rail)return vt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let ie=pf(Et.rail,l.x,l.y,l.z,-Math.sin(h.yaw),-Math.cos(h.yaw),dn=>!!Zo(kn,l.x,l.y,l.z,dn,Et.rail)),Ie=Fc(ie),Ne=xh("minecart",{x:Ie.x,y:Ie.y+.05,z:Ie.z},Ie.yaw,{st:ie});return t.consume&&zn(L,h.sel,1),bt(),Jr("minecart",{st:ie,veh:Ne}),!0}if(!l)return!1;let w=g.get(l.n);if(w&&w.interact==="chest"){if(Ze("chest"),xe=l.x+","+l.y+","+l.z,w.id==="loot_chest"&&!rt[xe]){let Et=I.ruins&&I.ruins.at(l.x,l.z);rt[xe]=M0(Vc,(c.loot||{})[Et?Et.kind:"forest_ruins"],b0(l.x,l.y,l.z),x),de("loot"),vt("\u627E\u5230\u907A\u8DE1\u7684\u5BF6\u7BB1\u4E86\uFF01"),h.dirtyMeta=!0}return sn("chest"),!0}let P=M&&g.toolOf(v.id);if(P&&P.type==="hoe"&&Kf(w.id,!ht.get(l.x,l.y+1,l.z)||g.flat.plant[ht.get(l.x,l.y+1,l.z)])){if(ht.set(l.x,l.y+1,l.z,0),ht.set(l.x,l.y,l.z,g.num("farmland")),t.consume){let Et=Vr(L,h.sel,g);Et.broke&&vt(`\u4F60\u7684${g.name(Et.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return bt(),h.dirtyMeta=!0,!0}if(M&&M.place==="crop")return w.id!=="farmland"||l.face[1]!==1||ht.get(l.x,l.y+1,l.z)?(vt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(ht.set(l.x,l.y+1,l.z,g.num("wheat_0")),St[l.x+","+(l.y+1)+","+l.z]={t:Date.now(),wet:td(ni,Et=>g.flat.liquid[Et]===1,l.x,l.y,l.z)},t.consume&&zn(L,h.sel,1),bt(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let z=g.get(l.n);if(z&&z.interact==="riddle")return Hx(l),!0;if(z&&z.interact==="quiz")return t.coins?(sn("quiz"),!0):(vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let q=L.slots[h.sel]&&g.get(L.slots[h.sel].id).placeable;if(z&&z.interact==="door")return vx(l.x,l.y,l.z),!0;if(z&&z.interact==="portal"&&!q&&!t.portals)return vt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(z&&z.interact==="portal"&&!q)return qe=z.portal,sn("portal"),!0;if(z&&z.interact==="bed"&&!q&&e==="shadow")return vt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(z&&z.interact==="bed"&&!q)return h.bed={x:l.x,y:l.y,z:l.z},h.dirtyMeta=!0,de("bed"),vt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(z&&z.interact==="craft"&&!q)return sn("inv"),!0;if(z&&z.interact==="furnace"&&!q)return si=l.x+","+l.y+","+l.z,sn("furnace"),!0;let at=L.slots[h.sel];if(!at)return vt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let et=g.get(at.id);if(!et||!et.placeable)return vt(`${g.name(at.id)} \u4E0D\u80FD\u653E`),!1;if(et.id==="scaffold"&&l.n===Is&&l.face[1]!==-1){let Et=ep(l);return!Et||!ht.set(Et.x,Et.y,Et.z,Is)?(vt("\u9019\u6839\u9DF9\u67B6\u4E0A\u9762\u653E\u4E0D\u4E0B\u4E86"),!1):(Z.sendBlock(Et.x,Et.y,Et.z,Is),Ze("place","wood"),t.consume&&zn(L,h.sel,1),h.dirtyMeta=!0,bt(),h.stats.placed++,xa(Et.x,Et.y,Et.z,et.id),!0)}if(et.place==="slab"&&et.fullAs&&l.n===et.n&&l.face[1]===1&&ht.set(l.x,l.y,l.z,g.num(et.fullAs)))return t.consume&&zn(L,h.sel,1),bt(),h.stats.placed++,h.dirtyMeta=!0,!0;let yt=g.flat.plant[l.n]&&!g.flat.plant[et.n],Ot=yt?l.x:l.x+l.face[0],$t=yt?l.y:l.y+l.face[1],re=yt?l.z:l.z+l.face[2];if($t<0||$t>=64)return!1;let Ae=ht.get(Ot,$t,re);if(Ae&&!g.flat.liquid[Ae]&&!(yt&&g.flat.plant[Ae]))return!1;let Te=.6/2;if(et.solid&&Ot+1>h.p.x-Te&&Ot<h.p.x+Te&&re+1>h.p.z-Te&&re<h.p.z+Te&&$t+1>h.p.y&&$t<h.p.y+1.8)return!1;if(g.flat.plant[et.n]&&!g.flat.solid[ht.get(Ot,$t-1,re)])return vt(`${et.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let rn=et.n;if(et.place==="slab"){let Et=l.at?l.at.y-Math.floor(l.at.y):0;(l.face[1]===-1||l.face[1]===0&&Et>.5)&&g.get(et.id+"_top")&&(rn=g.num(et.id+"_top"))}else if(et.place==="stairs"){let Et=-Math.sin(h.yaw),ie=-Math.cos(h.yaw),Ie=Math.abs(Et)>Math.abs(ie)?Et>0?1:3:ie>0?2:0,Ne=g.get(et.id+["","_e","_s","_w"][Ie]);Ne&&(rn=Ne.n)}let ce=null;if(et.place==="rail"){if(!g.flat.solid[ht.get(Ot,$t-1,re)])return vt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Et=-Math.sin(h.yaw),ie=-Math.cos(h.yaw),Ie=Uc(kn,Ot,$t,re,!!et.powered,Math.abs(Et)>Math.abs(ie)?"e":"n");rn=g.num($o(!!et.powered,Ie.shape)),ce=Ie.updates}if(!ht.set(Ot,$t,re,rn))return!1;if(Z.sendBlock(Ot,$t,re,rn),ce)for(let[Et,ie,Ie,Ne]of ce){let dn=kn(Et,ie,Ie);dn&&ht.set(Et,ie,Ie,g.num($o(dn.powered,Ne)))}return Ze("place",Br(et)),et.interact==="door"&&!ht.get(Ot,$t+1,re)&&ht.set(Ot,$t+1,re,et.n),t.consume&&zn(L,h.sel,1),h.dirtyMeta=!0,bt(),h.stats.placed++,xa(Ot,$t,re,et.id),!0}let Zr={},Js=l=>Zr[l]||(Zr[l]=(()=>{let v=new wn({color:l});return v.userData.base=new ue(l),v})());function Mx(l){let v=new xn,M=(w,P,z,q,at,et,yt)=>{let Ot=new Oe(new $e(w,P,z),Js(q));Ot.position.set(at,et,yt),v.add(Ot)};if(l==="boat"){M(.9,.08,1.5,"#8C6640",0,.04,0);for(let w of[-1,1])M(.08,.3,1.5,"#A97E4E",w*.45,.19,0),M(.9,.3,.08,"#A97E4E",0,.19,w*.75);M(.9,.06,.25,"#C49A63",0,.25,.1)}else{M(.9,.08,1.1,"#5E6660",0,.12,0);for(let w of[-1,1])M(.08,.45,1.1,"#8C8A84",w*.45,.35,0),M(.9,.45,.08,"#8C8A84",0,.35,w*.55),M(.06,.18,.18,"#26302A",w*.47,.1,.35),M(.06,.18,.18,"#26302A",w*.47,.1,-.35)}return v}h.vehicles=[];function xh(l,v,M,w){let P=Mx(l);P.rotation.order="YXZ",P.position.set(v.x,v.y,v.z),P.rotation.y=M,lt.add(P);let z=Object.assign({kind:l,p:{x:v.x,y:v.y,z:v.z},yaw:M,obj:P,hits:0},w);return z.m={kind:"vehicle",veh:z,id:-2},h.vehicles.push(z),z}function yh(l){h.ride||h.dead||(h.p={x:l.p.x,y:l.p.y,z:l.p.z},l.kind==="boat"?Jr("boat",{y:l.y,veh:l}):(l.st.v=0,Jr("minecart",{st:l.st,veh:l})))}function _h(l){if(!(h.ride&&h.ride.veh===l)){if(l.hits++,l.hits<2){vt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),l.obj.position.y=l.p.y+.15,setTimeout(()=>{l.obj.position.y=l.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(l),1),lt.remove(l.obj),ut(l.kind,l.p.x,l.p.y+.5,l.p.z),h.dirtyMeta=!0,vt(l.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let js=new xn,ip=new wn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),vh=[0,1].map(()=>{let l=new Oe(new $e(1,1,1),ip);return js.add(l),l});js.visible=!1,lt.add(js);function Sx(l){let v=L.slots[h.sel],M=v&&g.get(v.id);if(!l||!M||!M.placeable)return null;let w=g.get(l.n);if(w&&["chest","quiz","door"].includes(w.interact))return null;if(M.place==="slab"&&M.fullAs&&l.n===M.n&&l.face[1]===1)return{x:l.x,y:l.y,z:l.z,n:g.num(M.fullAs)};if(M.id==="scaffold"&&l.n===Is&&l.face[1]!==-1){let Ot=ep(l);return Ot?Object.assign(Ot,{n:Is}):null}let P=g.flat.plant[l.n]&&!g.flat.plant[M.n],z=P?l.x:l.x+l.face[0],q=P?l.y:l.y+l.face[1],at=P?l.z:l.z+l.face[2];if(q<0||q>=64)return null;let et=ht.get(z,q,at);if(et&&!g.flat.liquid[et]&&!(P&&g.flat.plant[et]))return null;let yt=M.n;if(M.place==="slab"){let Ot=l.at?l.at.y-Math.floor(l.at.y):0;(l.face[1]===-1||l.face[1]===0&&Ot>.5)&&g.get(M.id+"_top")&&(yt=g.num(M.id+"_top"))}else if(M.place==="stairs"){let Ot=-Math.sin(h.yaw),$t=-Math.cos(h.yaw),re=Math.abs(Ot)>Math.abs($t)?Ot>0?1:3:$t>0?2:0,Ae=g.get(M.id+["","_e","_s","_w"][re]);Ae&&(yt=Ae.n)}else if(M.place==="rail"){if(!g.flat.solid[ht.get(z,q-1,at)])return null;let Ot=-Math.sin(h.yaw),$t=-Math.cos(h.yaw);yt=g.num($o(!!M.powered,Uc(kn,z,q,at,!!M.powered,Math.abs(Ot)>Math.abs($t)?"e":"n").shape))}return{x:z,y:q,z:at,n:yt}}function wx(l){let v=Sx(l);if(!v){js.visible=!1;return}let M=g.flat.shape[v.n],w=g.flat.boxes[v.n]||(M===4?fx:M===8?dx:M>=1&&M<=3?S1:M1);vh.forEach((P,z)=>{let q=w[z];P.visible=!!q,q&&(P.scale.set((q[3]-q[0])*.98,(q[4]-q[1])*.98,(q[5]-q[2])*.98),P.position.set(v.x+(q[0]+q[3])/2,v.y+(q[1]+q[4])/2,v.z+(q[2]+q[5])/2))}),js.visible=!0}function sp(l){l.saddled=!0;let v=Jt.get(l.id);if(!v)return;let M=new Oe(new $e(.62,.1,.6),Js("#5C3A24"));M.position.set(0,1.4,.05),v.add(M)}function Jr(l,v){let M=v.veh?v.veh.obj:null;h.ride=Object.assign({kind:l,obj:M,yaw:v.veh?v.veh.yaw:h.yaw},v),h.fly=!1,mt.root.classList.remove("flying"),h.v={x:0,y:0,z:0},mt.bRide.hidden=!1,Hn(),de("ride:"+l),de("ride"),vt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[l])}function jr(l){let v=h.ride;if(v){if(h.ride=null,mt.bRide.hidden=!0,v.veh&&(v.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},v.veh.yaw=v.yaw,v.st&&(v.st.v=0,v.veh.st=v.st)),v.kind==="horse"&&(v.m.riding=!1),v.kind==="minecart")h.p.y+=.2;else for(let[M,w]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let P={x:h.p.x+M,y:Math.floor(h.p.y+.5),z:h.p.z+w};if(E0(P,Lt)&&g.flat.solid[ht.get(P.x,P.y-1,P.z)]){h.p=P;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,l||vt("\u4E0B\u4F86\u4E86")}}function Ax(l){let v=L.slots[h.sel];if(!l.tame){v&&(v.id==="wheat"||v.id==="apple")?(t.consume&&zn(L,h.sel,1),bt(),l.fed=(l.fed||0)+1,l.fed>=3?(l.tame=!0,h.horseMob=l,h.dirtyMeta=!0,vt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):vt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${l.fed}/3\uFF09`)):vt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!l.saddled){v&&v.id==="saddle"?(t.consume&&zn(L,h.sel,1),bt(),sp(l),h.horseMob=l,h.dirtyMeta=!0,vt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):vt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(l.riding=!0,h.p={x:l.p.x,y:l.p.y,z:l.p.z},Jr("horse",{m:l}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function rp(l){let v=Jt.get(l.id);if(!v||v.userData.collar)return;let[M,w]=l.def.size,P=new Oe(new $e(.34,.07,.36),Js("#E0352B"));P.position.set(0,w-.25,-M*.62),v.add(P),v.userData.collar=P}function op(l){let v=L.slots[h.sel],M=l.def.name_zh,w=nh(l.def).map(z=>g.name(z)).join("\u6216");if(l.tame&&v&&v.id==="paper"){bh=l,sn("petname");return}if(l.tame){l.sit=!l.sit,h.dirtyMeta=!0,vt(l.sit?`${l.name||M}\u4E56\u4E56\u5750\u4E0B\u4F86\u7B49\u4F60`:`${l.name||M}\u8DDF\u8457\u4F60\u8D70`);return}let P=Fd(l,v&&v.id,xt.list.filter(z=>z.tame&&qs(z)&&!z.gone).length);if(!P.ok){vt(`${M}\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260${w}\u8A66\u8A66\u770B`);return}if(t.consume&&zn(L,h.sel,1),bt(),Ze("eat"),P.full){vt(`\u5BF5\u7269\u6700\u591A ${Xs} \u96BB\uFF0C${M}\u5148\u7576\u670B\u53CB\u5C31\u597D`);return}if(!P.tamed){vt(`${M}\u5403\u5F97\u597D\u958B\u5FC3\uFF08${P.fed}/${P.need}\uFF09`);return}rp(l),h.dirtyMeta=!0,de("tamed"),tn(),vt(`${M}\u8B8A\u6210\u4F60\u7684\u5BF5\u7269\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\u8D70\uFF1B\u9EDE\u7260\u4E00\u4E0B\uFF1D\u5750\u4E0B\uFF0F\u8DDF\u8457\u8D70`+(l.def.guard?"\u3002\u665A\u4E0A\u7260\u6703\u5E6B\u4F60\u64CB\u4F4F\u932F\u984C\u602A":"")),bh=l,sn("petname")}let bh=null;function ap(l){let v=Jt.get(l.id);if(!v)return;let M=v.userData.tag;if(M&&(v.remove(M),M.material.map.dispose(),M.material.dispose(),v.userData.tag=null),!l.name)return;let w=document.createElement("canvas");w.width=256,w.height=64;let P=w.getContext("2d");P.font="bold 34px sans-serif";let z=Math.min(250,P.measureText(l.name).width+30);P.fillStyle="rgba(239,235,221,.92)",P.fillRect(128-z/2,8,z,48),P.fillStyle="#26302A",P.textAlign="center",P.textBaseline="middle",P.fillText(l.name,128,33);let q=new qn(w);q.colorSpace=en;let at=new fs(new Yi({map:q,depthWrite:!1}));at.scale.set(1.1,.275,1),at.position.y=l.def.size[1]+.35,v.add(at),v.userData.tag=at}function Ex(){let l=bh,v=mt.ov;if(!l||l.gone){Re();return}v.innerHTML="",v.hidden=!1;let M=C("input",{class:"typein",type:"text",maxlength:"12",autocomplete:"off",value:l.name||"",placeholder:"\u4F8B\u5982\uFF1A\u5C0F\u9ED1","aria-label":"\u5BF5\u7269\u7684\u540D\u5B57"}),w=()=>{let P=ca(M.value);l.name=P,ap(l),h.dirtyMeta=!0,P&&(de("pet_named"),vt(`${l.def.name_zh}\u7684\u540D\u5B57\u53EB\u300C${P}\u300D\u4E86\uFF01`)),Re(),tn()};M.addEventListener("keydown",P=>{P.stopPropagation(),P.key==="Enter"&&w()}),v.append(C("div",{class:"panel start"},C("div",{class:"p-head"},C("h2",{},`\u5E6B${l.def.name_zh}\u53D6\u540D\u5B57`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("p",{},"\u540D\u5B57\u6703\u51FA\u73FE\u5728\u7260\u982D\u4E0A\uFF08\u6700\u591A 12 \u500B\u5B57\uFF09\u3002\u4EE5\u5F8C\u62FF\u4E00\u5F35\u300C\u7D19\u300D\u9EDE\u7260\uFF0C\u5C31\u80FD\u6539\u540D\u5B57\u3002"),C("div",{class:"typerow"},M,C("button",{class:"btn",onclick:w},"\u597D\u4E86")),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:Re},"\u5148\u4E0D\u8981")))),setTimeout(()=>M.focus(),50)}function Tx(l,v,M,w,P,z,q){let at=h.ride;if(at.kind==="boat"){let et=(w*M+z*v)*7,yt=(P*M+q*v)*7,Ot=1-Math.exp(-2.5*l);h.v.x+=(et-h.v.x)*Ot,h.v.z+=(yt-h.v.z)*Ot,h.v.y=0;let $t=(Te,rn)=>g.flat.liquid[ht.get(Te,at.y-1,rn)]===1&&!g.flat.solid[ht.get(Te,at.y,rn)],re=h.p.x+h.v.x*l,Ae=h.p.z+h.v.z*l;$t(re+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=re:h.v.x=0,$t(h.p.x,Ae+Math.sign(h.v.z)*.6)?h.p.z=Ae:h.v.z=0,h.p.y=at.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(at.yaw=Math.atan2(-h.v.x,-h.v.z))}else{mf(at.st,l,M,kn);let et=Fc(at.st);h.p.x=et.x,h.p.z=et.z,h.p.y=et.y+.05,at.yaw=et.yaw,at.pitch=et.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Mh=(()=>{let l=new xn,v=new Oe(new $e(.16,.1,.16),Js("#E0352B")),M=new Oe(new $e(.16,.08,.16),Js("#EFEBDD"));return v.position.y=.05,M.position.y=-.04,l.add(v,M),l.visible=!1,lt.add(l),l})();function Cx(){let l=h.lastRay,v=l&&Ur(l.o,l.d,hh+3,ni,M=>g.flat.liquid[M]||g.flat.solid[M]);return!v||!g.flat.liquid[v.n]||ht.get(v.x,v.y+1,v.z)?(vt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=xf(Math.random),h.fish.at={x:v.x+.5,y:v.y+1,z:v.z+.5},Mh.visible=!0,vt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Sh(){h.fish=null,Mh.visible=!1}function Rx(){let l=_f(h.fish);if(Sh(),l!=="catch"){vt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let v=f.fishing.loot,M=vf(v,Math.random);if(M.coins&&!t.coins&&(M=v[0]),M.coins)Dn(S,M.coins),vn(),vt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${M.coins} \u91D1\u5E63`);else{let w=_n(L,M.id,M.n,x);for(let P=0;P<w;P++)ut(M.id,h.p.x,h.p.y+1,h.p.z);vt(M.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${g.name(M.id)} \xD7${M.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Vr(L,h.sel,g).broke&&vt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),bt(),h.dirtyMeta=!0,Ze("pickup"),de("fish"),M.treasure&&de("treasure")}let Ix=new $e(.05,.05,.62);h.arrows=[];function wh(l=0){let v=performance.now()/1e3;if(v-(h.bowT||0)<Pd)return;if(t.consume&&Zn(L,"arrow")<1){vt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD");return}h.bowT=v;let M=h.lastRay||{o:$r(),d:va()},w=Ld({x:M.o.x+M.d.x*.6,y:M.o.y+M.d.y*.6,z:M.o.z+M.d.z*.6},M.d,l);w.obj=new Oe(Ix,Js(w.power>1?"#E0352B":"#8C6640")),lt.add(w.obj),h.arrows.push(w),t.consume&&(Hs(L,"arrow",1),Vr(L,h.sel,g).broke&&vt("\u5F13\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01")),bt(),h.dirtyMeta=!0,Ze("place","wood"),de("shot"),w.power>1&&de("shot_full")}let Kr=l=>{let v=L.slots[h.sel];return!!v&&v.id===l};function ba(l){return h.charge||!Kr("bow")?!!h.charge:t.consume&&Zn(L,"arrow")<1?(vt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD"),!1):(h.charge={t0:l||performance.now()},mt.charge.hidden=!1,mt.chargeBar.style.width="0%",!0)}function lp(){h.charge=null,mt.charge.hidden=!0,mt.charge.classList.remove("full")}function Ma(l,v,M){let w=h.charge;w&&(lp(),Vn(l,v,M),wh(eh((performance.now()-w.t0)/1e3)))}function Px(l){if(!h.arrows.length||!l)return;let v=xt.list.filter(M=>!M.gone&&!M.riding&&(M.kind==="quiz"||M.kind==="animal"&&!M.def.noHit&&!M.tame&&M.type!=="horse")).map(M=>({p:M.p,w:M.def.size[0],h:M.def.size[1],ref:M}));h.boss&&v.push({p:h.boss.p,w:3.6,h:3.6,ref:h.boss.m});for(let M=h.arrows.length-1;M>=0;M--){let w=h.arrows[M],P=Dd(w,l,Lt,v);w.obj.position.set(w.p.x,w.p.y,w.p.z),Mi.set(w.p.x+w.v.x,w.p.y+w.v.y,w.p.z+w.v.z),w.obj.lookAt(Mi),P&&(lt.remove(w.obj),h.arrows.splice(M,1),P.hit==="mob"?(de("arrow_hit"),Rs(P.target,w.power||1)):P.hit==="block"&&t.consume&&ut("arrow",w.p.x,w.p.y,w.p.z))}}let es=m.books||[],cp=l=>{if(!(Yd||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let v=new SpeechSynthesisUtterance(l);v.lang="en-US",v.rate=.85,speechSynthesis.speak(v)}catch{}},Ah=l=>J["book:"+l.id]===Es(),Ks=l=>!!(R.stats["read:"+l.id]||J["book:"+l.id]),Qr=null,Qs=!1;function to(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=es.find(w=>w.id===Qr),M=w=>C("div",{class:"p-head"},C("h2",{},w),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7"));if(!v){let w=C("div",{class:"shop"}),P=ha(es,Ks),z=Es();_i.forEach(q=>{let at=es.filter(et=>Gr(et)===q);if(at.length){if(w.append(C("h3",{class:"book-lv"},`${ih[q]}\u3000\u8B80\u61C2 ${at.filter(Ks).length} / ${at.length}`)),!P.has(q)){w.append(C("div",{class:"offer locked"},C("div",{class:"of-t"},C("b",{},`\u9084\u6C92\u6253\u958B\uFF08${at.length} \u7BC7\uFF09`),C("small",{},`\u518D\u8B80\u61C2 ${ox(es,Ks,q)} \u7BC7\u4E0A\u4E00\u7D1A\u7684\u66F8\u5C31\u6703\u6253\u958B`))));return}at.forEach(et=>w.append(C("div",{class:"offer"+(Ah(et)?" locked":"")},C("img",{src:se.book,alt:""}),C("div",{class:"of-t"},C("b",{class:"en"},et.title),C("small",{},et.title_zh+(Ah(et)?"\u3000\u2713 \u4ECA\u5929\u7B54\u5C0D\u4E86":t.coins?Hd(m,et,J,z)?`\u3000\u8B80\u5B8C\u7B54\u5C0D +${m.coins|0} \u91D1\u5E63`:"\u3000\u4ECA\u5929\u7684\u8B80\u66F8\u91D1\u5E63\u9818\u5B8C\u4E86":"")+(Ks(et)?"":"\u3000\uFF08\u65B0\uFF09"))),C("button",{class:"btn small",onclick:()=>{Qr=et.id,Qs=!1,to()}},"\u8B80"))))}}),l.append(C("div",{class:"panel"},M("\u82F1\u6587\u5C0F\u66F8"),C("p",{class:"muted"},`\u6311\u4E00\u7BC7\u4F86\u8B80\uFF0C\u8B80\u5B8C\u56DE\u7B54\u4E00\u500B\u554F\u984C\u3002\u6BCF\u7BC7\u6BCF\u5929\u7B54\u5C0D\u7B2C\u4E00\u6B21\u6709\u91D1\u5E63\uFF08\u4E00\u5929\u6700\u591A ${m.dailyCap??es.length} \u7BC7\uFF09\u3002\u8B80\u61C2 ${sh} \u7BC7\u4E0D\u540C\u7684\uFF0C\u5C31\u6703\u6253\u958B\u4E0B\u4E00\u7D1A\u3002`),w));return}l.append(C("div",{class:"panel book"},M(v.title_zh),C("small",{class:"muted"},ih[Gr(v)]),C("h3",{class:"en"},v.title),C("p",{class:"book-text en"},v.en),Qs?C("p",{class:"book-text zh"},v.zh):null,C("div",{class:"row"},C("button",{class:"btn ghost",onclick:()=>{Qs=!Qs,to()}},Qs?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"),C("button",{class:"btn ghost",onclick:()=>cp(v.en)},"\u{1F50A} \u6717\u8B80")),C("div",{class:"row"},C("button",{class:"btn",onclick:()=>Lx(v)},"\u8B80\u5B8C\u4E86\uFF0C\u56DE\u7B54\u554F\u984C"),C("button",{class:"btn ghost",onclick:()=>{Qr=null,to()}},"\u2190 \u63DB\u4E00\u672C"))))}function Lx(l){try{speechSynthesis.cancel()}catch{}let v=l.q.options.slice().sort(()=>Math.random()-.5),M={id:"hwbook:"+l.id,module:"reading",tkey:"\u82F1\u6587\u5C0F\u66F8",type:"reading",local:!0,title:l.title,prompt:l.q.prompt,sub:Qs?l.q.zh:"",options:v,answer:l.q.options[0],en:!0,why:""};h.overlay="ask",sa(mt.ov,{question:M,title:"\u82F1\u6587\u5C0F\u66F8\uFF1A"+l.title,okText:"\u7B54\u5C0D\u4E86\uFF01\u4F60\u770B\u61C2\u9019\u7BC7\u6545\u4E8B\u4E86",onDone:w=>{if(h.overlay="book",w){let P=Es(),z=!Ah(l),q=t.coins?Hd(m,l,J,P):0,at=ha(es,Ks);J["book:"+l.id]=P,q&&(Dn(S,q),vn()),R.stats["read:"+l.id]||de("books_read"),de("read:"+l.id),de("books"),h.dirtyMeta=!0,tn(),vt(q?`\u8B80\u61C2\u4E86\uFF01 +${q} \u91D1\u5E63`:z&&t.coins?"\u8B80\u61C2\u4E86\uFF01\uFF08\u4ECA\u5929\u7684\u8B80\u66F8\u91D1\u5E63\u9818\u5B8C\u4E86\uFF09":"\u8B80\u61C2\u4E86\uFF01"),Qr=null;for(let et of ha(es,Ks))at.has(et)||vt(`\u6253\u958B\u65B0\u7684\u66F8\u4E86\uFF1A${ih[et]}`)}else w===!1&&vt("\u518D\u8B80\u4E00\u6B21\u770B\u770B\uFF0C\u7B54\u6848\u5C31\u5728\u6545\u4E8B\u88E1\uFF01");to()}})}let Ps=new ps(new wr(new $e(1,1,1)),new ds({color:14693675,transparent:!0,opacity:.7,depthWrite:!1}));Ps.visible=!1,lt.add(Ps);function eo(){let l=J.build,v=_.area;if(Ps.visible=!!l&&e==="overworld",!Ps.visible)return;let M=v.r*2+1,w=v.down+v.up+1;Ps.scale.set(M,w,M),Ps.position.set(l.x+.5,l.y-v.down+w/2,l.z+.5)}let Eh=()=>J.build&&_.builds.find(l=>l.id===J.build.id);function hp(){let l=J.build,v=[];if(!l)return v;for(let M of l.cells){let[w,P,z]=M.split(",").map(Number),q=ht.get(w,P,z);q&&v.push({x:w,y:P,z,id:g.get(q).id})}return v}function Ls(l){let v=Eh();mt.bc.hidden=!v||e!=="overworld"||!h.started,v&&(mt.bcEn.textContent=v.en,mt.bcZh.textContent=v.zh,mt.bcZh.hidden=!h.bcZh,mt.bcZhb.textContent=h.bcZh?"\u85CF\u8D77\u4E2D\u6587":"\u4E2D\u6587\u63D0\u793A",mt.bcRes.innerHTML="",l&&l.res.forEach(M=>mt.bcRes.append(C("div",{class:M.ok?"ok":"no"},M.ok?"\u2713 ":"\u2717 ",C("span",{class:"en"},M.en),M.ok?"":`\uFF08${M.have}/${M.need}\uFF09`))))}function up(l){J.build={id:l.id,x:Math.floor(h.p.x),y:Math.floor(h.p.y),z:Math.floor(h.p.z),cells:[]},h.bcZh=!1,h.dirtyMeta=!0,Re(),eo(),Ls(),tn(),vt("\u7D05\u8272\u6846\u6846\u88E1\u5C31\u662F\u59D4\u8A17\u7684\u7BC4\u570D\u3002\u770B\u5DE6\u4E0A\u89D2\u7684\u82F1\u6587\uFF0C\u84CB\u597D\u6309\u300C\u5B8C\u6210\u300D")}function Dx(){J.build=null,h.dirtyMeta=!0,eo(),Ls()}function fp(){let l=J.build;l&&(Object.assign(l,{x:Math.floor(h.p.x),y:Math.floor(h.p.y),z:Math.floor(h.p.z)}),l.cells=l.cells.filter(v=>{let[M,w,P]=v.split(",").map(Number);return rh(l,_.area,M,w,P)}),h.dirtyMeta=!0,eo(),Ls(),vt("\u59D4\u8A17\u7684\u7BC4\u570D\u642C\u5230\u4F60\u7AD9\u7684\u5730\u65B9\u4E86\uFF08\u7D05\u8272\u6846\u6846\uFF09"))}function dp(){let l=J.build,v=Eh();if(!v)return;if(e!=="overworld"||Math.hypot(h.p.x-l.x,h.p.z-l.z)>_.area.r+16){vt("\u56DE\u5230\u7D05\u8272\u6846\u6846\u65C1\u908A\u518D\u6309\u300C\u5B8C\u6210\u300D");return}let M=Wd(hp(),v);if(Ls(M),!M.ok){vt("\u9084\u6C92\u84CB\u597D\uFF1A\u770B\u770B\u59D4\u8A17\u5361\u4E0A\u6253 \u2717 \u7684\u90A3\u5E7E\u9805");return}let w=Es();J.buildDay={d:w,n:ah(J,w)+1},J.build=null,ia({id:"hwbuild:"+v.id,module:"reading",tkey:"\u5EFA\u7BC9\u59D4\u8A17",type:"build",local:!0},!0,v.en),t.coins&&Dn(S,v.coins|0);for(let P in v.items||{}){let z=_n(L,P,v.items[P],x);for(let q=0;q<z;q++)ut(P,h.p.x,h.p.y+1,h.p.z)}de("builds"),vn(),bt(),h.dirtyMeta=!0,tn(),eo(),Ls(),vt(`\u5EFA\u7BC9\u59D4\u8A17\u5B8C\u6210\uFF01 +${v.coins} \u91D1\u5E63\u3001`+Object.keys(v.items||{}).map(P=>`${g.name(P)} \xD7${v.items[P]}`).join("\u3001")),Ze("trade")}mt.bcSay.onclick=()=>{let l=Eh();l&&cp(l.en)},mt.bcZhb.onclick=()=>{h.bcZh=!h.bcZh,Ls()},mt.bcHere.onclick=()=>fp(),mt.bcDone.onclick=()=>dp(),eo();let ns=2,Sa=Tn("hw_minimap","on")!=="off";function Nx(l){Sa=l,ei("hw_minimap",l?"on":"off"),mt.mini.hidden=!l}mt.mini.hidden=!Sa;function Ux(){let l=mt.mini,v=l.getContext("2d");v.fillStyle="#D9D3C0",v.fillRect(0,0,l.width,l.height),tt.draw(v,h.p.x,h.p.z,2,l.width,l.height),Mf(v,l.width/2,l.height/2,h.yaw,7,"#E0352B")}function Th(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=Math.max(240,Math.min(innerWidth-60,760)),M=Math.max(200,Math.min(innerHeight-200,540)),w=C("canvas",{class:"bigmap",width:v,height:M}),P=w.getContext("2d");P.fillStyle="#D9D3C0",P.fillRect(0,0,v,M);let{x0:z,z0:q}=tt.draw(P,h.p.x,h.p.z,ns,v,M),at=(re,Ae)=>[(re-z)*ns,(Ae-q)*ns],et=(re,Ae,Te,rn,ce)=>{let[Et,ie]=at(re,Ae);Et<-20||ie<-20||Et>v+20||ie>M+20||(P.fillStyle=rn,P.strokeStyle=rn,P.lineWidth=3,ce==="roof"?(P.beginPath(),P.moveTo(Et-8,ie+1),P.lineTo(Et,ie-7),P.lineTo(Et+8,ie+1),P.fill(),P.fillRect(Et-5,ie+1,10,7)):ce==="ring"?(P.beginPath(),P.arc(Et,ie,6,0,7),P.stroke()):P.fillRect(Et-5,ie-5,10,10),P.font="bold 12px sans-serif",P.textAlign="center",P.strokeStyle="#EFEBDD",P.strokeText(Te,Et,ie-11),P.fillStyle="#26302A",P.fillText(Te,Et,ie-11))},yt=Math.max(v,M)/ns;for(let re of I.villages.around(h.p.x-yt,h.p.z-yt,h.p.x+yt,h.p.z+yt))tt.explored(re.x,re.z)&&et(re.x,re.z,"\u6751\u838A","#8C5A3A","roof");for(let re of tt.portals.values())et(re.x+.5,re.z+.5,re.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");et(Qt.x,Qt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&et(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Ot,$t]=at(h.p.x,h.p.z);Mf(P,Ot,$t,h.yaw,9,"#E0352B"),l.append(C("div",{class:"panel map"},C("div",{class:"p-head"},C("h2",{},"\u5730\u5716"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),w,C("div",{class:"row"},C("button",{class:"btn small",onclick:()=>{ns=Math.min(6,ns+1),Th()}},"\u653E\u5927"),C("button",{class:"btn small",onclick:()=>{ns=Math.max(1,ns-1),Th()}},"\u7E2E\u5C0F"),C("label",{class:"set inline"},C("input",{type:"checkbox",checked:Sa?!0:null,onchange:re=>Nx(re.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),C("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function Fx(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=U.filter(w=>R.done[w.id]).length,M=C("div",{class:"ach-list"});U.forEach(w=>{let P=!!R.done[w.id];M.append(C("div",{class:"ach-item"+(P?" done":"")},C("i",{class:"badge"}),C("div",{},C("b",{},w.name_zh),C("small",{},w.desc_zh+(P?"\u3000\u2713":`\uFF08${z0(R,w)}/${w.need}\uFF09`)+(w.coins?`\u3000\u734E\u52F5 ${w.coins} \u91D1\u5E63`:"")))))}),l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},`\u6210\u5C31\u3000${v} / ${U.length}`),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),M))}async function Ox(l){h.travelling||(h.travelling=!0,jr(!0),Sh(),Hn(),vt(l==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await tn(!0),ei("hw_dim",l),h.resetting=!0,location.reload())}function Ch(){let l=h.boss;l&&(mt.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${l.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${ea[l.st.phase].name_zh}`,mt.bossHp.style.width=Math.max(0,l.st.hp/ta*100)+"%")}function zx(l){if(e!=="shadow"||R.stats.dragon)return;let v=yi,M=Math.hypot(h.p.x-v.x,h.p.z-v.z);if(!h.boss&&M<60&&ht.ready(v.x,v.z)){let z=ng();lt.add(z),h.boss={g:z,st:tg(),p:{x:v.x+.5,y:xi+1.5,z:v.z+.5},m:{kind:"boss",id:-1},t:0}}let w=h.boss;if(!w)return;w.t+=l,w.g.position.set(w.p.x,w.p.y+Math.sin(w.t*1.6)*.25,w.p.z),w.g.rotation.y=Math.atan2(-(h.p.x-w.p.x),-(h.p.z-w.p.z)),ig(w.g,w.t,l);let P=M<28;P===mt.bossbar.hidden&&(mt.bossbar.hidden=!P,P&&(Ch(),w.greeted||(w.greeted=!0,vt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function kx(){let l=h.boss;if(!l||l.busy)return;l.busy=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let v=ea[l.st.phase],M=Xr().slice(0,40).sort(()=>Math.random()-.5);sa(mt.ov,{ids:l.st.retry.concat(M),types:v.types,modules:v.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${v.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(w,P,z)=>{h.overlay=null,l.busy=!1,w!=null&&pp(w,P,z&&z.id)}})}function pp(l,v,M){let w=h.boss;if(!w)return;let P=eg(w.st,l,v,M);if(!l){let z=h.p.x-w.p.x,q=h.p.z-w.p.z,at=Math.hypot(z,q)||1;h.v.x=z/at*8,h.v.z=q/at*8,h.v.y=5,vt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Ch();return}if(w.g.userData.hitT=.3,Ze("hit","stone"),P.done){Bx();return}P.phaseUp!=null?(sg(w.g,P.phaseUp),vt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${P.phaseUp+1} \u968E\u6BB5\uFF1A${ea[P.phaseUp].name_zh}`)):vt(v?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Ch()}function Bx(){lt.remove(h.boss.g),h.boss=null,mt.bossbar.hidden=!0,t.coins&&(Dn(S,Ff),vn()),de("dragon"),tn(),Vx()}function Vx(){Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${Ff} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];l.append(C("div",{class:"ending"},C("div",{class:"paper sun"}),C("div",{class:"paper hill"}),C("div",{class:"paper hill b"}),C("div",{class:"credits"},C("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),v.map(M=>C("p",{},M)),C("button",{class:"btn big",onclick:Re},"\u7E7C\u7E8C\u5192\u96AA"))))}function Hx(l){h.riddleBusy||(h.riddleBusy=!0,Hn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask",sa(mt.ov,{ids:Xr().slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u82F1\u6587\u5716\u66F8\u9928\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",onDone:v=>{if(h.overlay=null,h.riddleBusy=!1,!v){v===!1&&vt("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let M=-2;M<=2;M++){let w=g.get(ht.get(l.x,l.y+M,l.z));w&&w.interact==="riddle"&&ht.set(l.x,l.y+M,l.z,0)}de("library"),h.dirtyMeta=!0,Ze("door")}}))}function Gx(){if(!R.stats.village&&e==="overworld"){for(let l of I.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(l.x-h.p.x,l.z-h.p.z)<22){de("village");break}}for(let l of Df(O,d,j,Es())){if(h.dirtyMeta=!0,l.kind==="tut"){Ze("pickup"),O.tut.done&&vt("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let v=t.coins?l.q.coins|0:0;v&&(Dn(S,v),vn()),vt((l.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+l.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+l.q.text)+(v?`\u3000+${v} \u91D1\u5E63`:""))}Rh()}function Wx(l){if(l==="lair")return e==="shadow"?{x:yi.x+.5,z:yi.z+.5}:null;if(e!=="overworld")return null;if(l==="stele"&&Qt.stele)return{x:Qt.stele.x+.5,z:Qt.stele.z+.5};if(l==="portal"&&Qt.portal)return{x:Qt.portal.x+.5,z:Qt.portal.z+.5};if(l==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let v=null,M=1/0;for(let w of I.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let P=Math.hypot(w.x-h.p.x,w.z-h.p.z);P<M&&(M=P,v=w)}h.vilHint={t:Date.now(),v}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let mp="";function Rh(l){let v=!O.tut.done&&d.tutorial[O.tut.step],M=Lf(O,d),w=v||M,P=v?O.tut.step+(h.touch?"t":"d"):"";if((l||P!==mp)&&(mp=P,mt.tut.hidden=!v,mt.tut.innerHTML="",v&&mt.tut.append(C("b",{},`\u65B0\u624B\u6559\u5B78 ${O.tut.step+1}/${d.tutorial.length}`),C("span",{},v.text),C("small",{},h.touch?v.touch:v.desk),C("button",{class:"link",onclick:()=>{Hc(O,d),h.dirtyMeta=!0,Rh(!0)}},"\u8DF3\u904E\u6559\u5B78"))),mt.obj.hidden=!w||!h.started,!w)return;h.objTarget=Wx(w.hint),mt.objArrow.hidden=!h.objTarget;let z=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;mt.objText.textContent=(v?"":"\u4E3B\u7DDA\uFF1A")+(v?v.text:M.text)+(h.objTarget&&z>4?`\uFF08\u7D04 ${z} \u683C\uFF09`:"")}function Xx(){let l=mt.ov;l.innerHTML="",l.hidden=!1;let v=C("div",{class:"quest-list"});d.main.forEach((w,P)=>v.append(C("div",{class:"quest-item"+(P<O.main?" done":P===O.main?" cur":"")},C("b",{},(P<O.main?"\u2713 ":"")+w.title),C("small",{},w.text+(w.coins&&t.coins?`\u3000\u734E\u52F5 ${w.coins} \u91D1\u5E63`:"")))));let M=C("div",{class:"quest-list"});(O.daily?O.daily.picks:[]).forEach(w=>{let P=d.daily.find(q=>q.id===w),z=O.daily.done.includes(w);M.append(C("div",{class:"quest-item"+(z?" done":" cur")},C("b",{},(z?"\u2713 ":"")+P.text),C("small",{},`${z?P.need:Nf(O,d,j,w)} / ${P.need}`+(P.coins&&t.coins?`\u3000\u734E\u52F5 ${P.coins} \u91D1\u5E63`:""))))}),l.append(C("div",{class:"panel"},C("div",{class:"p-head"},C("h2",{},"\u5192\u96AA\u624B\u518A"),C("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Re},"\xD7")),C("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),M,C("h3",{},`\u4E3B\u7DDA\u3000${Math.min(O.main,d.main.length)} / ${d.main.length}`),v,C("p",{class:"muted"},O.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${O.tut.step+1} \u6B65`))),setTimeout(()=>{let w=l.querySelector(".quest-item.cur");w&&w.scrollIntoView&&w.scrollIntoView({block:"nearest"})},0)}function gp(){Yd||!Ht.requestPointerLock||Ht.requestPointerLock()}addEventListener("keydown",l=>{if(l.target&&l.target.tagName==="INPUT")return;let v=l.key.toLowerCase();if(v==="e"){h.overlay==="inv"?Re():!h.overlay&&sn("inv"),l.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(v==="escape"&&h.overlay){h.overlay==="quiz"?(mt.ov.hidden=!0,mt.ov.innerHTML="",h.overlay=null):Re();return}if(!h.overlay){if(v==="shift"&&h.ride){jr();return}h.keys[v]=!0,l.code==="Space"&&(h.keys[" "]=!0,l.preventDefault()),v>="1"&&v<="9"&&(h.sel=+v-1,bt()),v==="f"&&Kd(),v==="v"&&jd(),v==="m"&&sn("map"),v==="k"&&sn("ach"),v==="j"&&sn("quests")}}}),addEventListener("keyup",l=>{h.keys[l.key.toLowerCase()]=!1,l.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},Hn()}),Ht.addEventListener("mousedown",l=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==Ht){gp();return}if(l.button===0){let v=zi("center");if(v){Rs(v);return}h.mining.active=!0,h.mining.src="center"}if(l.button===2){let v=zi("center");if(v&&v.kind==="vehicle"){yh(v.veh);return}if(Kr("bow")){ba();return}Zs(Vn("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",l=>{l.button===0&&Hn(),l.button===2&&(h.rightHeld=!1,h.charge&&Ma("center"))}),Ht.addEventListener("contextmenu",l=>l.preventDefault()),addEventListener("mousemove",l=>{document.pointerLockElement===Ht&&(h.yaw-=l.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-l.movementY*.0024*(h.invert?-1:1))))}),addEventListener("wheel",l=>{h.overlay||h.touch||(h.sel=(h.sel+(l.deltaY>0?1:8))%9,bt())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{mt.root.classList.toggle("locked",document.pointerLockElement===Ht)});let no=new Map;function qx(l){h.touch!==l&&(h.touch=l,mt.root.classList.toggle("touch",l),document.body.classList.toggle("is-touch",l))}mt.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),Ht.addEventListener("pointerdown",l=>{if(l.pointerType!=="touch"||(qx(!0),h.overlay))return;if(l.preventDefault(),(document.body.classList.contains("lefty")?l.clientX>innerWidth*.6:l.clientX<innerWidth*.4)&&l.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:l.pointerId,ox:l.clientX,oy:l.clientY},mt.joy.style.transform=`translate(${l.clientX-60}px, ${l.clientY-60}px)`,mt.joy.hidden=!1,mt.knob.style.transform="translate(0px,0px)",no.set(l.pointerId,{kind:"joy"});return}let v={kind:"look",x:l.clientX,y:l.clientY,sx:l.clientX,sy:l.clientY,t0:performance.now(),drag:!1,hold:!1,bow:Kr("bow")};v.timer=setTimeout(()=>{if(v.drag)return;if(v.bow){v.charging=ba(v.t0);return}let M=zi("screen",v.x,v.y);if(M&&M.kind==="vehicle"){_h(M.veh),v.vehHit=!0;return}v.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=v.x,h.mining.sy=v.y},280),no.set(l.pointerId,v),h.touchPress=v},{passive:!1}),addEventListener("pointermove",l=>{let v=no.get(l.pointerId);if(!v)return;if(v.kind==="joy"){let P=l.clientX-h.joy.ox,z=l.clientY-h.joy.oy,q=Math.hypot(P,z),at=55;q>at&&(P*=at/q,z*=at/q),h.joy.x=P/at,h.joy.y=z/at,mt.knob.style.transform=`translate(${P}px,${z}px)`;return}let M=l.clientX-v.x,w=l.clientY-v.y;v.x=l.clientX,v.y=l.clientY,!v.drag&&!v.charging&&Math.hypot(v.x-v.sx,v.y-v.sy)>12&&(v.drag=!0,clearTimeout(v.timer),v.hold&&(Hn(),v.hold=!1)),v.drag?(h.yaw-=M*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-w*.0055*(h.invert?-1:1)))):v.hold&&(h.mining.sx=v.x,h.mining.sy=v.y)});let xp=l=>{let v=no.get(l.pointerId);if(v){if(no.delete(l.pointerId),h.touchPress===v&&(h.touchPress=null),v.kind==="joy"){h.joy={x:0,y:0,active:!1},mt.joy.hidden=!0;return}if(clearTimeout(v.timer),v.hold)Hn();else if(v.charging)Ma("screen",v.x,v.y);else if(!v.drag&&performance.now()-v.t0<280&&!h.overlay&&L.slots[h.sel]&&L.slots[h.sel].id==="bow")Zs(Vn("screen",v.x,v.y));else if(!v.drag&&performance.now()-v.t0<280&&!h.overlay){let M=zi("screen",v.x,v.y);M&&M.kind==="vehicle"?yh(M.veh):M?Rs(M):Zs(Vn("screen",v.x,v.y))}}};addEventListener("pointerup",xp),addEventListener("pointercancel",xp);let yp=(l,v,M)=>{l.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),v()}),l.addEventListener("pointerup",M),l.addEventListener("pointercancel",M),l.addEventListener("pointerleave",M)};yp(mt.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),yp(mt.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),mt.bFly.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),Kd()}),mt.bPlace.addEventListener("pointerdown",l=>{if(l.preventDefault(),l.stopPropagation(),Kr("bow")){ba();return}Zs(Vn("center"))}),["pointerup","pointercancel","pointerleave"].forEach(l=>mt.bPlace.addEventListener(l,()=>{h.charge&&Ma("center")})),document.addEventListener("touchmove",l=>{l.target.closest(".scroll, .panel")||l.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(l=>document.addEventListener(l,v=>v.preventDefault(),{passive:!1})),mt.start.hidden=!1,mt.go.onclick=()=>{mt.start.hidden=!0,h.started=!0,h.paused=!1,mt.root.classList.add("started"),Ls(),h.touch||gp()};async function tn(l){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let v={hw_meta:{v:1,seed:F,time:h.time,build:ch},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:k.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse,pets:kd(xt.list).concat(h.petsPending).slice(0,Xs)},hw_inventory:Qo(L),hw_coins:q0(S),[i("hw_furnaces")]:$,[i("hw_chests")]:Object.fromEntries(Object.entries(rt).map(([M,w])=>[M,Qo(w)])),[i("hw_crops")]:St,hw_quests:J,hw_portal_claimed:st.slice(-200),hw_ach:R,hw_story:O,[i("hw_vehicles")]:h.vehicles.map(M=>({kind:M.kind,x:M.p.x,y:M.p.y,z:M.p.z,yaw:M.yaw,wy:M.y,st:M.st?{x:M.st.x,y:M.st.y,z:M.st.z,shape:M.st.shape,from:M.st.from,s:M.st.s}:null}))};tt.dirty&&(l||Date.now()-(h.mapSavedAt||0)>3e4)&&(v[i("hw_map")]=tt.serialize(),h.mapSavedAt=Date.now());for(let M of h.dirty){let w=D.get(M);w&&(v[s+M]=zf(w))}h.dirty.clear(),h.dirtyMeta=!1;try{await Xc(v),h.lastSave=Date.now()}catch(M){console.warn("save failed",M),!h.quotaWarned&&M&&(M.name==="QuotaExceededError"||/quota/i.test(M.message||""))&&(h.quotaWarned=!0,vt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{h.started&&tn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&tn(!0)}),addEventListener("pagehide",()=>{h.started&&tn(!0)}),h.stats={mined:0,placed:0};function _p(){let l=innerWidth,v=innerHeight;It.setSize(l,v,!1),pt.aspect=l/v,pt.updateProjectionMatrix()}addEventListener("resize",_p),_p(),vn(),bt(),B(),Vt(),t.creative&&(Qi("#coinpill").hidden=!0,Qi("#modebadge").hidden=!1,mt.btnShop.hidden=!0,mt.hearts.hidden=!0),(Array.isArray(A.vehs)?A.vehs:[]).forEach(l=>{l&&(l.kind==="boat"||l.kind==="minecart"&&l.st)&&xh(l.kind,l,l.yaw||0,l.kind==="boat"?{y:l.wy}:{st:Object.assign({v:0,lastIn:0},l.st)})}),Ys(),setInterval(Ys,6e4),$s(),e==="shadow"&&(de("shadow"),setTimeout(()=>vt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",l=>{l.persisted&&$s()});let vp=performance.now(),wa=0,Ih=0,Yx=new ue("#EFEBDD"),$x=new ue("#22302F"),Zx=new ue("#E6B48C");function bp(l){requestAnimationFrame(bp);let v=(l-vp)/1e3;vp=l;let M=Math.min(.05,v);h.frames.push(v*1e3),h.frames.length>4e3&&h.frames.shift(),ht.update(h.p.x,h.p.z);let w=ht.ready(h.p.x,h.p.z);if(h.auto&&Qx(M),h.started&&!h.overlay&&w&&jx(M),h.started&&w&&!h.travelling){let ce=g.get(ht.get(h.p.x,h.p.y+.2,h.p.z));ce&&ce.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+M,h.portalT>1&&Ox(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&Ed(k,M)&&(B(),h.dirtyMeta=!0),h.time=(h.time+M/b1)%1;let P=h.time*Math.PI*2,z=Math.sin(P),q=e==="shadow"?.42:Math.min(1,Math.max(0,(z+.12)/.42));wt.copy($x).lerp(Yx,q);let at=Math.max(0,1-Math.abs(z)/.3)*(q>.05?1:.4);if(wt.lerp(Zx,at*.55),e==="shadow"&&wt.set("#1C2620"),!(t.creative&&Tn("hw_weather","on")==="off")?pd(h.weather,M):h.weather.level=0,h.ambT=(h.ambT||0)+M,h.ambT>1){h.ambT=0;let ce=Math.floor(h.p.x),Et=Math.floor(h.p.z),ie=!1;for(let Ne=2;Ne<14&&!ie;Ne++)g.flat.opaque[ht.get(ce,Math.floor(h.p.y)+Ne,Et)]&&(ie=!0);h.underground=ie&&h.p.y<I.height(ce,Et)-4,h.biome=I.biomeOf(ce,Et);let Ie=ud({day:q,underground:h.underground});Ie!==h.musicScene&&(h.musicScene=Ie,ld(fd[Ie]))}let yt=h.underground||e==="shadow"?null:md(h.biome,h.weather),Ot=yt?h.weather.level:0;Ot&&wt.lerp(h.rainSky||(h.rainSky=new ue("#8E9590")),.45*Ot),Ut(M,pt.position,yt),cd(yt==="rain"?Ot:0),Ts(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),Dt.uniforms.uDay.value=q*(1-.3*Ot),Dt.uniforms.uFog.value.set(...Jx(wt));let $t=$r();h.eyeOff*=Math.pow(5e-4,M);let re=va();if(h.view==="tp"){let ce=Ur($t,{x:-re.x,y:-re.y,z:-re.z},4,ni,ie=>g.flat.opaque[ie]===1),Et=ce?Math.max(.4,ce.dist-.25):4;pt.position.set($t.x-re.x*Et,$t.y-re.y*Et,$t.z-re.z*Et)}else pt.position.set($t.x,$t.y,$t.z);pt.rotation.set(h.pitch,h.yaw,0);let Ae=pt.far*.8;if(He.position.set(pt.position.x+Math.cos(P)*Ae,pt.position.y+Math.sin(P)*Ae,pt.position.z+.25*Ae),He.scale.setScalar(Ae*.14),be.position.set(pt.position.x-Math.cos(P)*Ae,pt.position.y-Math.sin(P)*Ae,pt.position.z-.25*Ae),be.scale.setScalar(Ae*.1),He.visible=be.visible=e!=="shadow",qt.visible=h.view==="tp",qt.visible){qt.position.set(h.p.x,h.p.y+(h.ride?ux[h.ride.kind]:0),h.p.z),qt.rotation.y=h.yaw;let ce=Math.hypot(h.v.x,h.v.z),Et=Math.sin(l/120)*Math.min(1,ce/4)*.7;Nt.rotation.x=Et,ne.rotation.x=-Et,oe.rotation.x=-Et,pe.rotation.x=Et;let ie=.35+.65*q;qt.children.forEach(Ie=>Ie.material.color.copy(Ie.userData.base).multiplyScalar(ie))}for(let ce in H)H[ce].color.setScalar(.4+.6*q);ip.color.setScalar(.5+.5*q);for(let ce in Zr)Zr[ce].color.copy(Zr[ce].userData.base).multiplyScalar(.35+.65*q);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Te=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?Vn("screen",h.mining.sx,h.mining.sy):Vn("center"):null;if(Te){fe.visible=!0;let ce=gh(Te.n);if(ce){let Et=1,ie=1,Ie=1,Ne=0,dn=0,gn=0;for(let Bi of ce)Et=Math.min(Et,Bi[0]),ie=Math.min(ie,Bi[1]),Ie=Math.min(Ie,Bi[2]),Ne=Math.max(Ne,Bi[3]),dn=Math.max(dn,Bi[4]),gn=Math.max(gn,Bi[5]);fe.scale.set(Ne-Et,dn-ie,gn-Ie),fe.position.set(Te.x+(Et+Ne)/2,Te.y+(ie+dn)/2,Te.z+(Ie+gn)/2)}else fe.scale.set(1,1,1),fe.position.set(Te.x+.5,Te.y+.5,Te.z+.5)}else fe.visible=!1;let rn=h.touchPress;if(wx(!h.started||h.overlay||h.mining.active?null:h.touch?rn&&!rn.drag&&!rn.hold?Vn("screen",rn.x,rn.y):null:Te),h.mining.active&&Te){let ce=Te.x+","+Te.y+","+Te.z;ce!==h.mining.k&&(h.mining.k=ce,h.mining.t=0),h.mining.t+=M;let Et=t.creative?g.get(Te.n).hardness<0?1/0:t.breakTime:Kc(g.get(Te.n),np()).time;if(Et===1/0)we.visible=!1,h.mining.warned||(vt(g.name(Te.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+M,h.mining.tick>.25&&(h.mining.tick=0,Ze("hit",Br(g.get(Te.n))));let ie=h.mining.t/Et;we.visible=!0,we.position.copy(fe.position),we.scale.copy(fe.scale),we.material.map=ye[Math.min(3,Math.floor(ie*4))],ie>=1&&(bx(Te),h.mining.k="",h.mining.t=0,we.visible=!1)}}else we.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=M,h.placeRepeat<=0&&(Zs(Vn("center")),h.placeRepeat=.25)),h.charge)if(h.overlay||!Kr("bow"))lp();else{let ce=eh((performance.now()-h.charge.t0)/1e3);mt.chargeBar.style.width=Math.round(ce*100)+"%",mt.charge.classList.toggle("full",ce>=th)}if(Kx(M),Px(h.overlay?0:M),h.fish){let ce=yf(h.fish,M),Et=L.slots[h.sel];!Et||Et.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?Sh():(ce==="bite"?(vt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),Ze("pickup")):ce==="escape"&&vt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Mh.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(l/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+M,h.netT>.25&&(h.netT=0,Z.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let ce=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));ce<2&&(h.walkAcc=(h.walkAcc||0)+ce),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+M,h.storyT>.5&&(h.storyT=0,Gx())}if(h.objTarget&&!mt.objArrow.hidden){let ce=h.objTarget,Et=Math.atan2(-(ce.x-h.p.x),-(ce.z-h.p.z))-h.yaw;mt.objArrow.style.transform="rotate("+-Et+"rad)"}if(h.started&&!document.hidden&&!h.dead&&(h.playT=(h.playT||0)+M,h.playT>1800&&(h.playT=0,mt.rest.hidden=!1,Ze("pickup"))),h.mapT=(h.mapT||0)+M,h.mapT>.3&&(h.mapT=0,tt.scan(ht,h.mapDirty),Sa&&Ux()),h.cropT=(h.cropT||0)+M,h.cropT>2){h.cropT=0;let ce=Date.now();for(let Et in St){let[ie,Ie,Ne]=Et.split(",").map(Number);if(!ht.ready(ie,Ne))continue;let dn=g.get(ht.get(ie,Ie,Ne));if(!dn||!dn.crop){delete St[Et];continue}let gn=jf(St[Et].t,ce,St[Et].wet);gn>(dn.stage|0)&&(ht.set(ie,Ie,Ne,g.num("wheat_"+gn)),h.dirtyMeta=!0)}}ma(h.overlay?0:M,q,l),zx(h.overlay?0:M);for(let ce in $){let Et=$[ce];Et.jobs.length&&(_d(Et,M),h.dirtyMeta=!0,h.overlay==="furnace"&&ce===si&&(h.furnUi=(h.furnUi||0)+M)>.5&&(h.furnUi=0,Le()))}It.render(lt,pt),wa+=v,Ih++,wa>.5&&(mt.dbg&&(mt.dbg.textContent=`${Math.round(Ih/wa)} fps \xB7 \u5340\u584A ${ht.stats.loaded} \xB7 ${w0[I.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),wa=0,Ih=0),!w&&h.started?mt.loading.hidden=!1:mt.loading.hidden=!0}function Jx(l){let v=l.getHexString();return[parseInt(v.slice(0,2),16)/255,parseInt(v.slice(2,4),16)/255,parseInt(v.slice(4,6),16)/255]}function jx(l){let v=h.keys,M=(v.d?1:0)-(v.a?1:0),w=(v.w?1:0)-(v.s?1:0);h.joy.active&&(M=h.joy.x,w=-h.joy.y);let P=Math.min(1,Math.hypot(M,w));if(P>0){let gn=Math.hypot(M,w);M=M/gn*P,w=w/gn*P}let z=-Math.sin(h.yaw),q=-Math.cos(h.yaw),at=Math.cos(h.yaw),et=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){Tx(l,M,w,z,q,at,et);return}let yt=v.control||!h.fly&&v.shift||h.joy.active&&P>.92,Ot=ni(h.p.x,h.p.y+.1,h.p.z),$t=ni(h.p.x,h.p.y+1,h.p.z),re=g.flat.liquid[Ot]===1||g.flat.liquid[$t]===1,Ae=!h.fly&&(g.flat.climb[Ot]===2||g.flat.climb[$t]===2);Ae!==!!h.climbing&&(h.climbing=Ae,mt.root.classList.toggle("climbing",Ae));let Te=h.fly?10:h.ride?8.5:re?2.6:yt?6.2:4.3,rn=(z*w+at*M)*Te,ce=(q*w+et*M)*Te,Et=v[" "]||h.jumpHeld,ie=h.fly&&v.shift||h.downHeld;if(h.fly)h.v.x=rn,h.v.z=ce,h.v.y=((Et?1:0)-(ie?1:0))*8;else{let gn=h.onGround?14:5,Bi=1-Math.exp(-gn*l);if(h.v.x+=(rn-h.v.x)*Bi,h.v.z+=(ce-h.v.z)*Bi,re)h.v.y-=9*l,h.v.y<-3&&(h.v.y=-3),Et&&(h.v.y=3.4);else if(g.flat.climb[Ot]||g.flat.climb[$t]){let Ph=Ae,ty=ie||Ph&&v.shift;h.v.y=Et||!Ph&&w>.1?3.2:ty?-3:Ph?0:Math.max(h.v.y-28*l,-1.5),h.fallTop=h.p.y}else h.v.y-=28*l,h.v.y<-40&&(h.v.y=-40),Et&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1)}let Ie=h.onGround,Ne=Dc(h.p,h.v,l,Lt,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=Ne.onGround,Ne.stepped&&(h.eyeOff-=Ne.stepped),h.fallTop==null||h.fly||re||h.onGround&&Ie?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!Ie){let gn=wd(h.fallTop-h.p.y,{water:re,flying:h.fly});gn&&(ct(gn),vt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let dn=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&dn>1&&(h.stepT=(h.stepT||0)+l*dn,h.stepT>1.8&&(h.stepT=0,Ze("step",Br(g.get(ni(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:Qt.x,y:Qt.y+1,z:Qt.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function Kx(l){let v=h.p.x,M=h.p.y+.9,w=h.p.z;for(let P=h.drops.length-1;P>=0;P--){let z=h.drops[P];z.age+=l;let q=v-z.p.x,at=M-z.p.y,et=w-z.p.z,yt=Math.hypot(q,at,et);if(yt<1.5&&z.age>.25&&_n(L,z.id,1,x)===0){lt.remove(z.s),h.drops.splice(P,1),h.dirtyMeta=!0,bt(),Ze("pickup");continue}if(yt<4.5&&z.age>.25?(z.v.x=q/yt*6,z.v.y=at/yt*6,z.v.z=et/yt*6,z.p.x+=z.v.x*l,z.p.y+=z.v.y*l,z.p.z+=z.v.z*l):(z.v.y-=18*l,z.v.x*=.9,z.v.z*=.9,Dc(z.p,z.v,l,Lt,{w:.25,h:.25})),z.age>300){lt.remove(z.s),h.drops.splice(P,1);continue}z.s.position.set(z.p.x,z.p.y+.2+Math.sin(z.age*3)*.06,z.p.z)}}h.auto=uh.get("auto")==="walk";let Mp=0;function Qx(l){h.started||mt.go.click(),Mp+=l,h.keys.w=!0,h.keys[" "]=Mp%1.6<.15,h.yaw+=l*.08}window.HW={build:ch,TEST:Yd,G:h,reg:g,inv:L,wallet:S,world:ht,Inv:Vc,Aud:hd,Amb:gd,chests:rt,crops:St,Farm:od,clickSlot:Je,MODE:n,RULE:t,switchMode:mh,questState:J,tradesJson:p,spawnVillagers:pa,terr:I,claimPortalRewards:$s,portals:W,claimedIds:st,mobS:xt,mobDefs:Rt,spawnMob:ln,hitMob:Rs,mobAt:zi,surfaceY:Ue,health:k,hurt:ct,Health:Rd,furnaces:$,Smelt:Md,smeltList:Tt,recipes:y,craftCtx:Yt,breakInfo:Kc,start(){mt.go.click()},state(){return{pos:{...h.p},coins:S.coins,inv:Qo(L),loaded:ht.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(l,v,M){let w=$r(),P=l-w.x,z=v-w.y,q=M-w.z;h.yaw=Math.atan2(-P,-q),h.pitch=Math.atan2(z,Math.hypot(P,q))},target(){let l=Vn("center");return l&&{x:l.x,y:l.y,z:l.z,n:l.n,face:l.face}},mine(l){l?(h.mining.active=!0,h.mining.src="center"):Hn()},use(){return Zs(Vn("center"))},key(l,v){h.keys[l]=v},books:es,booksJson:m,shootArrow:wh,Arch:Nd,Pets:Vd,petClick:op,startCharge:ba,releaseCharge:Ma,achDefs:U,buildsJson:_,Build:qd,acceptBuild:up,buildDone:dp,buildHere:fp,buildCells:hp,areaBox:Ps,open:sn,close:Re,save:tn,spawn:Qt,dismount:jr,Rail:gf,ach:R,mapv:tt,Fish:bf,bump:de,bank:G,net:Z,backupData:Zd,applyPrefs:K,story:O,Story:Uf,QJ:d,DIM:e,bossDamage:pp,Shadow:Af,hitVehicle:_h,rideVehicle:yh,ghostState:()=>({visible:js.visible,sy:vh[0].scale.y,two:vh[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:ht.stats.meshMs.slice(),genMs:ht.stats.genMs.slice(),loaded:ht.stats.loaded}},resetPerf(){h.frames.length=0,ht.stats.meshMs.length=0,ht.stats.genMs.length=0},info:()=>({calls:It.info.render.calls,tris:It.info.render.triangles,geos:It.info.memory.geometries,objs:lt.children.length}),ready:()=>ht.ready(h.p.x,h.p.z)},requestAnimationFrame(bp)}function T1(){let n=Qi("#ui"),t=e=>n.querySelector(e);return uh.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Qi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Qi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),charge:t("#charge"),chargeBar:t("#chargebar"),bc:t("#buildcard"),bcEn:t("#bc-en"),bcZh:t("#bc-zh"),bcRes:t("#bc-res"),bcSay:t("#bc-say"),bcZhb:t("#bc-zhb"),bcHere:t("#bc-here"),bcDone:t("#bc-done"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Qi("#start"),go:Qi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}E1().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
